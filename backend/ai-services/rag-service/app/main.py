import logging
import sys
from contextlib import asynccontextmanager

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    stream=sys.stdout,
)

import hmac
from pathlib import Path

from fastapi import Depends, FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.models.schemas import (
    HealthResponse,
    IngestRequest,
    IngestResponse,
    RAGQueryRequest,
    RAGQueryResponse,
)

logger = logging.getLogger(__name__)

# Global singletons initialized at startup
_pipeline = None
_ingestion = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load embedding model and HF model on startup."""
    global _pipeline, _ingestion
    from app.rag.pipeline import RAGPipeline
    from app.content.ingestion import ContentIngestion

    logger.info("Loading RAG pipeline...")
    _pipeline = RAGPipeline()
    _ingestion = ContentIngestion(retriever=_pipeline.retriever)
    logger.info("RAG service ready.")
    yield
    logger.info("Shutting down RAG service.")


app = FastAPI(
    title="Deutsch B'Darija RAG Service",
    version="1.0.0",
    lifespan=lifespan,
)

cors_origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()]
if cors_origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=cors_origins,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type", "X-API-Key"],
    )

if not settings.api_key:
    logger.warning("RAG_API_KEY is not set: /query and /ingest are unauthenticated. Set it outside local dev.")


def require_api_key(x_api_key: str | None = Header(default=None)):
    """Only the API gateway may call the service when RAG_API_KEY is configured."""
    if settings.api_key and not hmac.compare_digest(x_api_key or "", settings.api_key):
        raise HTTPException(status_code=401, detail="Invalid or missing API key")


# /ingest may only read PDFs from inside the service's data directory
DATA_ROOT = Path(settings.pdf_output_dir).resolve().parent


@app.middleware("http")
async def log_requests(request, call_next):
    """Log incoming requests and responses."""
    logger.info(f"→ {request.method} {request.url.path}")
    response = await call_next(request)
    logger.info(f"← {request.method} {request.url.path} [{response.status_code}]")
    return response


@app.post("/query", response_model=RAGQueryResponse, dependencies=[Depends(require_api_key)])
async def query_rag(request: RAGQueryRequest):
    """Main RAG query endpoint: embed → retrieve → generate."""
    if _pipeline is None:
        raise HTTPException(status_code=503, detail="RAG pipeline not initialized")

    try:
        result = await _pipeline.query(
            message=request.message,
            conversation_history=request.conversation_history,
            level=request.level,
            collection=request.collection,
        )
        return result
    except Exception as e:
        logger.error(f"RAG query error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="RAG query failed")


# Plain `def`: ingestion is blocking work, so FastAPI runs it in a worker thread
@app.post("/ingest", response_model=IngestResponse, dependencies=[Depends(require_api_key)])
def ingest_content(request: IngestRequest):
    """Ingest PDF content into ChromaDB."""
    if _ingestion is None:
        raise HTTPException(status_code=503, detail="Ingestion pipeline not initialized")

    pdf_dir = None
    if request.pdf_dir:
        pdf_dir = Path(request.pdf_dir)
        pdf_dir = (pdf_dir if pdf_dir.is_absolute() else DATA_ROOT / pdf_dir).resolve()
        if not pdf_dir.is_relative_to(DATA_ROOT):
            raise HTTPException(status_code=400, detail="pdf_dir must be inside the service data directory")

    try:
        result = _ingestion.ingest(
            pdf_dir=str(pdf_dir) if pdf_dir else None,
            collection=request.collection,
            rebuild=request.rebuild,
        )
        return result
    except Exception as e:
        logger.error(f"Ingestion error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Ingestion failed")


@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Check all service dependencies."""
    result = HealthResponse(status="ok")

    # Check LLM generator
    try:
        if _pipeline and _pipeline.generator and _pipeline.generator.is_loaded:
            model_name = {"local_atlas": settings.atlas_model_id, "ollama": settings.ollama_model}.get(settings.llm_provider, "openrouter")
            result.ollama = f"connected ({model_name})"
        else:
            model_name = {"local_atlas": settings.atlas_model_id, "ollama": settings.ollama_model}.get(settings.llm_provider, "openrouter")
            result.ollama = f"not connected ({model_name})"
            result.status = "degraded"
    except Exception:
        result.ollama = "error"
        result.status = "degraded"

    # Check ChromaDB
    try:
        if _pipeline and _pipeline.retriever:
            collections = _pipeline.retriever.get_collection_stats()
            result.chromadb = "connected"
            result.collections = collections
        else:
            result.chromadb = "not initialized"
            result.status = "degraded"
    except Exception:
        result.chromadb = "error"
        result.status = "degraded"

    # Check embedding model
    try:
        if _pipeline and _pipeline.embeddings and _pipeline.embeddings.model is not None:
            result.embedding_model = f"loaded ({settings.embedding_model})"
        else:
            result.embedding_model = "not loaded"
            result.status = "degraded"
    except Exception:
        result.embedding_model = "error"
        result.status = "degraded"

    return result


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host=settings.host,
        port=settings.port,
        log_level=settings.log_level,
        reload=False,
    )
