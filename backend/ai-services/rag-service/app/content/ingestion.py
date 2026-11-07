"""
Content ingestion pipeline: PDF -> chunks -> embeddings -> ChromaDB.
"""

import hashlib
import logging
import re
from pathlib import Path
from typing import Optional

import pdfplumber

from app.config import settings
from app.models.schemas import IngestResponse
from app.rag.embeddings import BGEM3Embeddings
from app.rag.retriever import ChromaRetriever

logger = logging.getLogger(__name__)

# Map PDF filenames to collections
PDF_COLLECTION_MAP = {
    "01-german-alphabet-pronunciation": "german_grammar",
    "02-grammar-a1-basics": "german_grammar",
    "03-vocabulary-a1": "german_vocabulary",
    "04-grammar-a2-intermediate": "german_grammar",
    "05-vocabulary-a2": "german_vocabulary",
    "06-grammar-b1-advanced": "german_grammar",
    "07-vocabulary-b1": "german_vocabulary",
    "08-grammar-b2-complex": "german_grammar",
    "09-vocabulary-b2": "german_vocabulary",
    "10-false-friends-mistakes": "german_culture",
    "11-exam-prep-goethe-telc": "german_culture",
    "12-common-phrases-dialogues": "german_culture",
    "13-cultural-notes": "german_culture",
}

# Map PDF filenames to CEFR levels
PDF_LEVEL_MAP = {
    "01-german-alphabet-pronunciation": "A1",
    "02-grammar-a1-basics": "A1",
    "03-vocabulary-a1": "A1",
    "04-grammar-a2-intermediate": "A2",
    "05-vocabulary-a2": "A2",
    "06-grammar-b1-advanced": "B1",
    "07-vocabulary-b1": "B1",
    "08-grammar-b2-complex": "B2",
    "09-vocabulary-b2": "B2",
    "10-false-friends-mistakes": "ALL",
    "11-exam-prep-goethe-telc": "ALL",
    "12-common-phrases-dialogues": "ALL",
    "13-cultural-notes": "ALL",
}

# Topic extraction from filename
PDF_TOPIC_MAP = {
    "01-german-alphabet-pronunciation": "Alphabet & Pronunciation",
    "02-grammar-a1-basics": "Grammar Basics (A1)",
    "03-vocabulary-a1": "Vocabulary (A1)",
    "04-grammar-a2-intermediate": "Grammar Intermediate (A2)",
    "05-vocabulary-a2": "Vocabulary (A2)",
    "06-grammar-b1-advanced": "Grammar Advanced (B1)",
    "07-vocabulary-b1": "Vocabulary (B1)",
    "08-grammar-b2-complex": "Grammar Complex (B2)",
    "09-vocabulary-b2": "Vocabulary (B2)",
    "10-false-friends-mistakes": "False Friends & Common Mistakes",
    "11-exam-prep-goethe-telc": "Exam Preparation",
    "12-common-phrases-dialogues": "Common Phrases & Dialogues",
    "13-cultural-notes": "Cultural Notes",
}


def _extract_pdf_text(pdf_path: Path) -> str:
    """Extract full text from a PDF file."""
    text_parts = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text_parts.append(page_text)
    return "\n\n".join(text_parts)


def _chunk_text(
    text: str,
    chunk_size: int = settings.chunk_size,
    chunk_overlap: int = settings.chunk_overlap,
) -> list[str]:
    """
    Split text into overlapping chunks by section headers and size.
    Tries to split at section boundaries first, then by paragraphs, then by sentences.
    """
    # Split by section markers first (## headers from our PDF content)
    sections = re.split(r"\n(?=(?:#{1,3}\s|[A-Z][a-z]+ [A-Z]))", text)

    chunks = []
    current_chunk = ""

    for section in sections:
        section = section.strip()
        if not section:
            continue

        # If section fits in a chunk, add it
        words = section.split()
        if len(words) <= chunk_size:
            if len(current_chunk.split()) + len(words) <= chunk_size:
                current_chunk += "\n\n" + section if current_chunk else section
            else:
                if current_chunk:
                    chunks.append(current_chunk.strip())
                current_chunk = section
        else:
            # Section is too large; split by paragraphs
            if current_chunk:
                chunks.append(current_chunk.strip())
                current_chunk = ""

            paragraphs = section.split("\n\n")
            for para in paragraphs:
                para = para.strip()
                if not para:
                    continue
                para_words = para.split()
                if len(para_words) <= chunk_size:
                    if len(current_chunk.split()) + len(para_words) <= chunk_size:
                        current_chunk += "\n\n" + para if current_chunk else para
                    else:
                        if current_chunk:
                            chunks.append(current_chunk.strip())
                        current_chunk = para
                else:
                    # Paragraph too large; split by sentences
                    if current_chunk:
                        chunks.append(current_chunk.strip())
                        current_chunk = ""

                    sentences = re.split(r"(?<=[.!?])\s+", para)
                    for sent in sentences:
                        sent = sent.strip()
                        if not sent:
                            continue
                        if len(current_chunk.split()) + len(sent.split()) <= chunk_size:
                            current_chunk += " " + sent if current_chunk else sent
                        else:
                            if current_chunk:
                                chunks.append(current_chunk.strip())
                            current_chunk = sent

    if current_chunk.strip():
        chunks.append(current_chunk.strip())

    # Add overlap between consecutive chunks
    if chunk_overlap > 0 and len(chunks) > 1:
        overlapped_chunks = [chunks[0]]
        for i in range(1, len(chunks)):
            prev_words = chunks[i - 1].split()
            overlap_text = " ".join(prev_words[-chunk_overlap:])
            overlapped_chunks.append(overlap_text + " " + chunks[i])
        chunks = overlapped_chunks

    # Filter out very short chunks (less than 20 words)
    chunks = [c for c in chunks if len(c.split()) >= 20]

    return chunks


def _generate_chunk_id(source: str, index: int) -> str:
    """Generate a deterministic chunk ID."""
    content = f"{source}_{index}"
    return hashlib.md5(content.encode()).hexdigest()[:16]


class ContentIngestion:
    """Ingest PDF content into ChromaDB."""

    def __init__(self, retriever: Optional[ChromaRetriever] = None, embeddings: Optional[BGEM3Embeddings] = None):
        if retriever:
            self._retriever = retriever
        else:
            self._embeddings = embeddings or BGEM3Embeddings()
            self._embeddings.load()
            self._retriever = ChromaRetriever(self._embeddings)

    def ingest(
        self,
        pdf_dir: Optional[str] = None,
        collection: Optional[str] = None,
        rebuild: bool = False,
    ) -> IngestResponse:
        """
        Ingest PDFs into ChromaDB.
        - pdf_dir: directory containing PDFs (default: settings.pdf_output_dir)
        - collection: specific collection to ingest into (default: auto-detect from filename)
        - rebuild: wipe collections before ingesting
        """
        pdf_path = Path(pdf_dir or settings.pdf_output_dir)
        if not pdf_path.exists():
            return IngestResponse(
                status="error",
                message=f"PDF directory not found: {pdf_path}",
            )

        pdf_files = sorted(pdf_path.glob("*.pdf"))
        if not pdf_files:
            return IngestResponse(
                status="error",
                message=f"No PDF files found in {pdf_path}",
            )

        logger.info(f"Found {len(pdf_files)} PDFs in {pdf_path}")

        # Rebuild collections if requested
        if rebuild:
            for coll_name in [
                settings.chroma_collection_grammar,
                settings.chroma_collection_vocabulary,
                settings.chroma_collection_culture,
            ]:
                if collection and coll_name != collection:
                    continue
                self._retriever.delete_collection(coll_name)
                logger.info(f"Rebuilt collection: {coll_name}")

        total_chunks = 0
        collections_used = set()

        for pdf_file in pdf_files:
            stem = pdf_file.stem
            target_collection = collection or PDF_COLLECTION_MAP.get(
                stem, settings.chroma_collection_grammar
            )

            level = PDF_LEVEL_MAP.get(stem, "ALL")
            topic = PDF_TOPIC_MAP.get(stem, stem.replace("_", " ").title())

            logger.info(f"Processing: {pdf_file.name} -> {target_collection} (level={level})")

            # Extract text
            try:
                text = _extract_pdf_text(pdf_file)
            except Exception as e:
                logger.error(f"Failed to extract text from {pdf_file.name}: {e}")
                continue

            if not text or len(text.split()) < 20:
                logger.warning(f"Insufficient text in {pdf_file.name}, skipping")
                continue

            # Chunk the text
            chunks = _chunk_text(text)
            logger.info(f"  -> {len(chunks)} chunks from {pdf_file.name}")

            if not chunks:
                continue

            # Prepare metadata
            documents = []
            metadatas = []
            ids = []

            for i, chunk in enumerate(chunks):
                doc_id = _generate_chunk_id(stem, i)
                documents.append(chunk)
                metadatas.append({
                    "source": pdf_file.name,
                    "topic": topic,
                    "level": level,
                    "chunk_index": i,
                    "total_chunks": len(chunks),
                })
                ids.append(doc_id)

            # Add to ChromaDB
            try:
                self._retriever.add_documents(
                    collection_name=target_collection,
                    documents=documents,
                    metadatas=metadatas,
                    ids=ids,
                )
                total_chunks += len(chunks)
                collections_used.add(target_collection)
            except Exception as e:
                logger.error(f"Failed to ingest {pdf_file.name}: {e}")
                continue

        stats = self._retriever.get_collection_stats()
        logger.info(f"Ingestion complete. Total chunks: {total_chunks}. Stats: {stats}")

        return IngestResponse(
            status="success",
            chunks_ingested=total_chunks,
            collections=list(collections_used),
            message=f"Ingested {total_chunks} chunks from {len(pdf_files)} PDFs. "
            f"Collections: {stats}",
        )
