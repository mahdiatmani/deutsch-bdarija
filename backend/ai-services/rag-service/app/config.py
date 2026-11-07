from pydantic_settings import BaseSettings
from pathlib import Path


class Settings(BaseSettings):
    # Which LLM answers questions:
    #   "openrouter"  - free hosted models (default, no GPU needed)
    #   "local_atlas" - Atlas-Chat-9B loaded locally in 4-bit (needs a CUDA GPU)
    #   "ollama"      - a model served by a local/remote Ollama
    llm_provider: str = "openrouter"

    # OpenRouter (OpenAI-compatible). Models are tried in order until one answers.
    openrouter_api_key: str = ""
    openrouter_base_url: str = "https://openrouter.ai/api/v1"
    openrouter_models: str = (
        "nvidia/nemotron-3-ultra-550b-a55b:free,qwen/qwen3.8-27b:free,"
        "google/gemma-4-31b-it:free,openrouter/free"
    )

    # Local Atlas-Chat-9B (4-bit quantized), used when llm_provider="local_atlas"
    atlas_model_id: str = "MBZUAI-Paris/Atlas-Chat-9B"

    # Ollama, used when llm_provider="ollama"
    ollama_base_url: str = "http://localhost:11434"
    ollama_model: str = "deepseek-v3.1:671b-cloud"

    # Embeddings
    embedding_model: str = "BAAI/bge-m3"
    embedding_device: str = "cuda"   # "cuda" or "cpu"
    embedding_dimension: int = 1024

    # ChromaDB
    chroma_persist_dir: str = str(Path(__file__).parent.parent / "data" / "chroma_db")
    chroma_collection_grammar: str = "german_grammar"
    chroma_collection_vocabulary: str = "german_vocabulary"
    chroma_collection_culture: str = "german_culture"

    # RAG
    chunk_size: int = 400
    chunk_overlap: int = 50
    retrieval_top_k: int = 5
    min_relevance_score: float = 0.3

    # Content
    pdf_output_dir: str = str(Path(__file__).parent.parent / "data" / "pdfs")
    scraped_data_dir: str = str(Path(__file__).parent.parent / "data" / "scraped")

    # Generation
    temperature: float = 0.7
    max_new_tokens: int = 400
    top_p: float = 0.9
    repetition_penalty: float = 1.1

    # Server
    host: str = "0.0.0.0"
    port: int = 8000
    log_level: str = "info"
    # Shared secret with the API gateway (sent as X-API-Key). Empty = no auth (local dev only).
    api_key: str = ""
    # Comma-separated browser origins allowed by CORS. The gateway calls server-to-server,
    # so browsers normally never need access.
    cors_origins: str = ""

    model_config = {"env_prefix": "RAG_", "env_file": ".env"}


settings = Settings()
