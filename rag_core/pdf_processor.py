"""
PDF Processor: Extracts text from PDFs, cleans it, and splits into chunks.
Supports adding multiple PDFs over time.
"""

import os
import re
import hashlib
from pathlib import Path
from typing import List, Dict, Optional

import fitz  # PyMuPDF


def extract_text_from_pdf(pdf_path: str) -> List[Dict]:
    """Extract text from a PDF, returning a list of page dicts."""
    doc = fitz.open(pdf_path)
    pages = []
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text("text")
        if text.strip():
            pages.append({
                "page_num": page_num + 1,
                "text": text.strip(),
                "source": os.path.basename(pdf_path),
            })
    doc.close()
    return pages


def clean_text(text: str) -> str:
    """Clean extracted text: fix whitespace, remove artifacts."""
    # Collapse multiple newlines
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Collapse multiple spaces
    text = re.sub(r' {2,}', ' ', text)
    # Remove form feed characters
    text = text.replace('\f', '')
    return text.strip()


def chunk_text(
    text: str,
    chunk_size: int = 800,
    chunk_overlap: int = 150,
) -> List[str]:
    """
    Split text into overlapping chunks by character count,
    trying to break at paragraph or sentence boundaries.
    """
    if len(text) <= chunk_size:
        return [text]

    chunks = []
    start = 0

    while start < len(text):
        end = start + chunk_size

        if end < len(text):
            # Try to break at paragraph boundary
            break_point = text.rfind('\n\n', start, end)
            if break_point == -1 or break_point <= start:
                # Try sentence boundary
                break_point = text.rfind('. ', start, end)
            if break_point == -1 or break_point <= start:
                # Try any newline
                break_point = text.rfind('\n', start, end)
            if break_point != -1 and break_point > start:
                end = break_point + 1
        else:
            end = len(text)

        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)

        start = end - chunk_overlap if end < len(text) else end

    return chunks


def process_pdf(pdf_path: str, chunk_size: int = 800, chunk_overlap: int = 150) -> List[Dict]:
    """
    Full pipeline: extract → clean → chunk a PDF.
    Returns list of chunk dicts with metadata.
    """
    pages = extract_text_from_pdf(pdf_path)
    all_chunks = []
    source = os.path.basename(pdf_path)

    for page_data in pages:
        cleaned = clean_text(page_data["text"])
        chunks = chunk_text(cleaned, chunk_size, chunk_overlap)

        for i, chunk in enumerate(chunks):
            chunk_id = hashlib.md5(f"{source}:{page_data['page_num']}:{i}".encode()).hexdigest()
            all_chunks.append({
                "id": chunk_id,
                "text": chunk,
                "source": source,
                "page_num": page_data["page_num"],
                "chunk_index": i,
            })

    return all_chunks


def process_all_pdfs(pdf_dir: str, chunk_size: int = 800, chunk_overlap: int = 150) -> List[Dict]:
    """Process all PDFs in a directory."""
    all_chunks = []
    pdf_dir = Path(pdf_dir)

    for pdf_file in sorted(pdf_dir.glob("*.pdf")):
        print(f"  Processing: {pdf_file.name}")
        chunks = process_pdf(str(pdf_file), chunk_size, chunk_overlap)
        all_chunks.extend(chunks)
        print(f"    → {len(chunks)} chunks")

    print(f"  Total chunks: {len(all_chunks)}")
    return all_chunks
