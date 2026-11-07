#!/usr/bin/env python3
"""
Ingest PDFs into the vector store.
Usage:
    python ingest.py                     # Process all PDFs in data/pdfs/
    python ingest.py path/to/file.pdf    # Process a specific PDF
    python ingest.py --clear             # Clear the store and re-ingest
"""

import sys
import shutil
from pathlib import Path

from rag_core.pdf_processor import process_pdf, process_all_pdfs
from rag_core.vector_store import VectorStore


PDF_DIR = "data/pdfs"
VECTOR_DB_DIR = "data/vectordb"


def main():
    clear = "--clear" in sys.argv
    specific_pdf = None

    for arg in sys.argv[1:]:
        if arg != "--clear" and arg.endswith(".pdf"):
            specific_pdf = arg

    print("=" * 50)
    print("🇩🇪 Darija German Teacher — PDF Ingestion")
    print("=" * 50)

    # Initialize vector store
    if clear:
        print("\n🗑️  Clearing existing vector store...")
        shutil.rmtree(VECTOR_DB_DIR, ignore_errors=True)

    store = VectorStore(persist_dir=VECTOR_DB_DIR)

    if specific_pdf:
        # Process a specific PDF
        pdf_path = Path(specific_pdf)
        if not pdf_path.exists():
            print(f"❌ File not found: {specific_pdf}")
            sys.exit(1)

        # Copy to data/pdfs/ for future reference
        dest = Path(PDF_DIR) / pdf_path.name
        if not dest.exists():
            shutil.copy2(str(pdf_path), str(dest))
            print(f"📄 Copied {pdf_path.name} → {PDF_DIR}/")

        print(f"\n📖 Processing: {pdf_path.name}")
        chunks = process_pdf(str(pdf_path))
        store.add_chunks(chunks)

    else:
        # Process all PDFs in directory
        pdf_dir = Path(PDF_DIR)
        pdfs = list(pdf_dir.glob("*.pdf"))

        if not pdfs:
            print(f"\n⚠️  No PDFs found in {PDF_DIR}/")
            print(f"   Place your PDF files there and run again.")
            print(f"   Or: python ingest.py path/to/your.pdf")
            sys.exit(0)

        print(f"\n📚 Found {len(pdfs)} PDF(s) in {PDF_DIR}/")
        chunks = process_all_pdfs(str(pdf_dir))
        store.add_chunks(chunks)

    # Show stats
    stats = store.get_stats()
    print(f"\n✅ Done!")
    print(f"   Total chunks: {stats['total_chunks']}")
    print(f"   Sources: {', '.join(stats['sources'])}")
    print(f"\n🚀 Run the app: streamlit run app.py")


if __name__ == "__main__":
    main()
