"""
Vector Store: Manages document embeddings and similarity search using ChromaDB.
Uses sentence-transformers for multilingual embeddings (supports Arabic/Darija + German + English).
"""

import os
import json
from typing import List, Dict, Optional
from pathlib import Path

import chromadb
from chromadb.config import Settings
from sentence_transformers import SentenceTransformer


# Multilingual model that supports Arabic, German, English
EMBEDDING_MODEL = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"


class VectorStore:
    def __init__(self, persist_dir: str = "./data/vectordb", collection_name: str = "german_darija"):
        """Initialize the vector store with persistent storage."""
        self.persist_dir = persist_dir
        os.makedirs(persist_dir, exist_ok=True)

        # Load embedding model
        print("Loading embedding model...")
        self.embedder = SentenceTransformer(EMBEDDING_MODEL)
        print("Embedding model loaded.")

        # Initialize ChromaDB with persistence
        self.client = chromadb.PersistentClient(path=persist_dir)

        # Get or create collection
        self.collection = self.client.get_or_create_collection(
            name=collection_name,
            metadata={"hnsw:space": "cosine"},
        )
        print(f"Collection '{collection_name}' ready — {self.collection.count()} documents.")

    def add_chunks(self, chunks: List[Dict], batch_size: int = 64):
        """Add document chunks to the vector store."""
        if not chunks:
            return

        # Filter out chunks already in the store
        existing_ids = set(self.collection.get()["ids"]) if self.collection.count() > 0 else set()
        new_chunks = [c for c in chunks if c["id"] not in existing_ids]

        if not new_chunks:
            print("  All chunks already in store. Skipping.")
            return

        print(f"  Embedding {len(new_chunks)} new chunks...")

        # Process in batches
        for i in range(0, len(new_chunks), batch_size):
            batch = new_chunks[i:i + batch_size]
            texts = [c["text"] for c in batch]
            ids = [c["id"] for c in batch]
            metadatas = [
                {
                    "source": c["source"],
                    "page_num": c["page_num"],
                    "chunk_index": c["chunk_index"],
                }
                for c in batch
            ]

            # Generate embeddings
            embeddings = self.embedder.encode(texts, show_progress_bar=False).tolist()

            # Add to ChromaDB
            self.collection.add(
                ids=ids,
                documents=texts,
                embeddings=embeddings,
                metadatas=metadatas,
            )
            print(f"    Added batch {i // batch_size + 1} ({len(batch)} chunks)")

        print(f"  Store now has {self.collection.count()} total chunks.")

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """Search for the most relevant chunks given a query."""
        if self.collection.count() == 0:
            return []

        # Embed the query
        query_embedding = self.embedder.encode([query]).tolist()

        # Search
        results = self.collection.query(
            query_embeddings=query_embedding,
            n_results=min(top_k, self.collection.count()),
            include=["documents", "metadatas", "distances"],
        )

        # Format results
        hits = []
        for i in range(len(results["ids"][0])):
            hits.append({
                "id": results["ids"][0][i],
                "text": results["documents"][0][i],
                "source": results["metadatas"][0][i]["source"],
                "page_num": results["metadatas"][0][i]["page_num"],
                "score": 1 - results["distances"][0][i],  # cosine similarity
            })

        return hits

    def get_stats(self) -> Dict:
        """Return stats about the vector store."""
        count = self.collection.count()
        sources = set()
        if count > 0:
            all_meta = self.collection.get(include=["metadatas"])
            sources = set(m["source"] for m in all_meta["metadatas"])
        return {
            "total_chunks": count,
            "sources": list(sources),
            "num_sources": len(sources),
        }

    def clear(self):
        """Clear all documents from the store."""
        self.client.delete_collection(self.collection.name)
        self.collection = self.client.get_or_create_collection(
            name=self.collection.name,
            metadata={"hnsw:space": "cosine"},
        )
        print("Vector store cleared.")
