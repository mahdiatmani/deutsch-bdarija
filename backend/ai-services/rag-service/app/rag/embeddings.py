"""
BGE-M3 embedding wrapper for ChromaDB.
Handles Arabic text normalization and cross-lingual embedding.
"""

import logging
import re
from typing import Optional

import numpy as np

from app.config import settings

logger = logging.getLogger(__name__)


def _normalize_arabic(text: str) -> str:
    """Normalize Arabic text: remove tashkeel, normalize alef variants."""
    # Remove tashkeel (diacritics)
    text = re.sub(r"[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]", "", text)
    # Normalize alef variants to plain alef
    text = re.sub(r"[\u0622\u0623\u0625]", "\u0627", text)
    # Normalize taa marbouta to haa
    text = text.replace("\u0629", "\u0647")
    return text


def normalize_text(text: str) -> str:
    """Normalize text for embedding: handle Arabic, clean whitespace."""
    text = _normalize_arabic(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


class BGEM3Embeddings:
    """BGE-M3 embedding model wrapper."""

    def __init__(self):
        self.model = None
        self.dimension = settings.embedding_dimension

    def load(self):
        """Load the BGE-M3 model."""
        try:
            from FlagEmbedding import BGEM3FlagModel

            logger.info(f"Loading embedding model: {settings.embedding_model}")
            self.model = BGEM3FlagModel(
                settings.embedding_model,
                use_fp16=(settings.embedding_device == "cuda"),
            )
            logger.info("BGE-M3 model loaded successfully.")
        except ImportError:
            logger.warning("FlagEmbedding not available, falling back to sentence-transformers")
            from sentence_transformers import SentenceTransformer

            self.model = SentenceTransformer(settings.embedding_model)
            logger.info("Loaded via sentence-transformers fallback.")

    def embed(self, texts: list[str]) -> list[list[float]]:
        """Embed a list of texts, returning dense vectors."""
        if self.model is None:
            self.load()

        normalized = [normalize_text(t) for t in texts]

        try:
            # Try FlagEmbedding API first
            output = self.model.encode(
                normalized,
                batch_size=12,
                max_length=512,
            )
            # FlagEmbedding returns dict with 'dense_vecs'
            if isinstance(output, dict):
                vectors = output["dense_vecs"]
            else:
                vectors = output

            if isinstance(vectors, np.ndarray):
                return vectors.tolist()
            return [v.tolist() if hasattr(v, "tolist") else list(v) for v in vectors]
        except Exception as e:
            logger.error(f"Embedding error: {e}", exc_info=True)
            raise

    def embed_query(self, text: str) -> list[float]:
        """Embed a single query string."""
        result = self.embed([text])
        return result[0]


class BGEM3ChromaEmbeddingFunction:
    """ChromaDB-compatible embedding function using BGE-M3."""

    def __init__(self, bgem3: Optional[BGEM3Embeddings] = None):
        self._bgem3 = bgem3 or BGEM3Embeddings()

    def __call__(self, input: list[str]) -> list[list[float]]:
        """ChromaDB calls this with a list of texts (for documents)."""
        return self._bgem3.embed(input)

    def embed_query(self, input) -> list:
        """ChromaDB calls this for query embedding."""
        if isinstance(input, list):
            return self._bgem3.embed(input)
        return self._bgem3.embed_query(input)

    def embed_documents(self, input) -> list[list[float]]:
        """ChromaDB calls this for document embeddings."""
        if isinstance(input, str):
            return self._bgem3.embed([input])
        return self._bgem3.embed(input)

    def name(self) -> str:
        """Required by ChromaDB to identify the embedding function."""
        return "bgem3"
