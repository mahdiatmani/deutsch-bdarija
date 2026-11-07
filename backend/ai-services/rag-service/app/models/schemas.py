from pydantic import BaseModel, Field
from typing import Optional


class ChatMessage(BaseModel):
    role: str
    content: str


class RAGQueryRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    conversation_history: list[ChatMessage] = Field(default_factory=list)
    level: Optional[str] = Field(None, pattern=r"^(A1|A2|B1|B2|C1|C2)$")
    collection: Optional[str] = None  # specific collection to search


class RAGQueryResponse(BaseModel):
    response: str
    german_text: Optional[str] = None
    sources: list[dict] = Field(default_factory=list)
    model_used: str = ""
    retrieval_count: int = 0


class IngestRequest(BaseModel):
    pdf_dir: Optional[str] = None  # override default PDF directory
    collection: Optional[str] = None  # specific collection to ingest into
    rebuild: bool = False  # wipe and rebuild the collection


class IngestResponse(BaseModel):
    status: str
    chunks_ingested: int = 0
    collections: list[str] = Field(default_factory=list)
    message: str = ""


class HealthResponse(BaseModel):
    status: str
    ollama: str = "unknown"
    chromadb: str = "unknown"
    embedding_model: str = "unknown"
    collections: dict = Field(default_factory=dict)
