"""
ChromaDB retriever: search for relevant content chunks.
"""

import logging
from typing import Optional

import chromadb

from app.config import settings
from app.rag.embeddings import BGEM3ChromaEmbeddingFunction, BGEM3Embeddings

logger = logging.getLogger(__name__)


class ChromaRetriever:
    """Search ChromaDB for relevant German curriculum content."""

    def __init__(self, embeddings: BGEM3Embeddings):
        self._embeddings = embeddings
        self._ef = BGEM3ChromaEmbeddingFunction(embeddings)
        self._client = chromadb.PersistentClient(path=settings.chroma_persist_dir)
        self._collections: dict[str, chromadb.Collection] = {}
        self._init_collections()

    def _init_collections(self):
        """Get or create the three collections."""
        for name in [
            settings.chroma_collection_grammar,
            settings.chroma_collection_vocabulary,
            settings.chroma_collection_culture,
        ]:
            self._collections[name] = self._client.get_or_create_collection(
                name=name,
                embedding_function=self._ef,
                metadata={"hnsw:space": "cosine"},
            )
            logger.info(
                f"Collection '{name}': {self._collections[name].count()} documents"
            )

    def search(
        self,
        query: str,
        top_k: int = settings.retrieval_top_k,
        level: Optional[str] = None,
        collection_name: Optional[str] = None,
    ) -> list[dict]:
        """
        Search for relevant chunks across collections.
        Returns list of {content, metadata, distance} dicts.
        """
        collections_to_search = (
            [self._collections[collection_name]]
            if collection_name and collection_name in self._collections
            else list(self._collections.values())
        )

        all_results = []

        for collection in collections_to_search:
            if collection.count() == 0:
                continue

            where_filter = None
            if level:
                where_filter = {
                    "$or": [
                        {"level": level},
                        {"level": "ALL"},
                    ]
                }

            try:
                results = collection.query(
                    query_texts=[query],
                    n_results=min(top_k, collection.count()),
                    where=where_filter if where_filter else None,
                )
            except Exception:
                # If the where filter fails (no matching metadata), try without
                try:
                    results = collection.query(
                        query_texts=[query],
                        n_results=min(top_k, collection.count()),
                    )
                except Exception as e:
                    logger.warning(f"Search failed for {collection.name}: {e}")
                    continue

            if results and results["documents"] and results["documents"][0]:
                for i, doc in enumerate(results["documents"][0]):
                    distance = results["distances"][0][i] if results["distances"] else 1.0
                    metadata = results["metadatas"][0][i] if results["metadatas"] else {}
                    doc_id = results["ids"][0][i] if results["ids"] else ""

                    # Cosine distance: 0 = identical, 2 = opposite
                    # Convert to relevance score: 1 - (distance/2)
                    relevance = 1.0 - (distance / 2.0)

                    if relevance >= settings.min_relevance_score:
                        all_results.append({
                            "content": doc,
                            "metadata": metadata,
                            "relevance": round(relevance, 4),
                            "collection": collection.name,
                            "id": doc_id,
                        })

        # Sort by relevance descending and take top_k
        all_results.sort(key=lambda x: x["relevance"], reverse=True)
        return all_results[:top_k]

    def get_collection_stats(self) -> dict:
        """Return document counts per collection."""
        return {
            name: collection.count()
            for name, collection in self._collections.items()
        }

    def add_documents(
        self,
        collection_name: str,
        documents: list[str],
        metadatas: list[dict],
        ids: list[str],
    ):
        """Add documents to a specific collection."""
        if collection_name not in self._collections:
            raise ValueError(f"Unknown collection: {collection_name}")

        collection = self._collections[collection_name]
        # ChromaDB has a batch limit; chunk into batches of 100
        batch_size = 100
        for i in range(0, len(documents), batch_size):
            batch_docs = documents[i : i + batch_size]
            batch_metas = metadatas[i : i + batch_size]
            batch_ids = ids[i : i + batch_size]
            collection.add(documents=batch_docs, metadatas=batch_metas, ids=batch_ids)

        logger.info(
            f"Added {len(documents)} documents to '{collection_name}' "
            f"(total: {collection.count()})"
        )

    def delete_collection(self, collection_name: str):
        """Delete and recreate a collection."""
        if collection_name in self._collections:
            self._client.delete_collection(collection_name)
            self._collections[collection_name] = self._client.get_or_create_collection(
                name=collection_name,
                embedding_function=self._ef,
                metadata={"hnsw:space": "cosine"},
            )
            logger.info(f"Rebuilt collection '{collection_name}'")
