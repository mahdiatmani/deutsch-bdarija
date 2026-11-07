"""
RAG pipeline orchestrator: embed query -> retrieve -> generate.
"""

import asyncio
import logging
from typing import Optional

from app.models.schemas import ChatMessage, RAGQueryResponse
from app.rag.embeddings import BGEM3Embeddings
from app.rag.generator import create_generator
from app.rag.retriever import ChromaRetriever

logger = logging.getLogger(__name__)


class RAGPipeline:
    """Orchestrates the full RAG flow."""

    def __init__(self):
        logger.info("Initializing RAG pipeline components...")

        # 1. Embeddings (also used by retriever)
        self.embeddings = BGEM3Embeddings()
        self.embeddings.load()

        # 2. Retriever (ChromaDB)
        self.retriever = ChromaRetriever(self.embeddings)

        # 3. Generator (local Atlas-Chat-9B 4-bit or Ollama fallback)
        self.generator = create_generator()
        self.generator.load()

        logger.info("RAG pipeline initialized.")

    async def query(
        self,
        message: str,
        conversation_history: list[ChatMessage] | None = None,
        level: Optional[str] = None,
        collection: Optional[str] = None,
    ) -> RAGQueryResponse:
        """
        Full RAG pipeline:
        1. Retrieve relevant content from ChromaDB
        2. Build augmented prompt with context
        3. Generate response with Atlas-Chat
        """
        # Step 1: Retrieve relevant chunks
        logger.info(f"Retrieving context for: '{message[:80]}...' (level={level})")
        # Embedding + vector search is blocking; keep it off the event loop
        chunks = await asyncio.to_thread(
            self.retriever.search,
            query=message,
            level=level,
            collection_name=collection,
        )
        logger.info(f"Retrieved {len(chunks)} relevant chunks")

        # Step 2 & 3: Generate response with context
        history_dicts = (
            [{"role": m.role, "content": m.content} for m in conversation_history]
            if conversation_history
            else None
        )

        result = await self.generator.generate(
            question=message,
            context_chunks=chunks,
            conversation_history=history_dicts,
            level=level,
        )

        # Build sources list for the response
        sources = [
            {
                "collection": c["collection"],
                "topic": c.get("metadata", {}).get("topic", ""),
                "source": c.get("metadata", {}).get("source", ""),
                "relevance": c["relevance"],
            }
            for c in chunks
        ]

        return RAGQueryResponse(
            response=result["text"],
            german_text=result.get("german_text"),
            sources=sources,
            model_used=result.get("model_used", ""),
            retrieval_count=len(chunks),
        )
