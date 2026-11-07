#!/usr/bin/env python3
"""
Run the full ingestion pipeline: generate PDFs -> chunk -> embed -> store in ChromaDB.
Usage: python -m scripts.ingest_content [--rebuild]
"""

import argparse
import logging
import sys
from pathlib import Path

# Add the parent directory to the path so we can import app modules
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.config import settings
from app.content.ingestion import ContentIngestion
from app.content.pdf_generator import generate_all_pdfs

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


def main():
    parser = argparse.ArgumentParser(description="Ingest German curriculum content into ChromaDB")
    parser.add_argument(
        "--rebuild",
        action="store_true",
        help="Wipe and rebuild all ChromaDB collections before ingesting",
    )
    parser.add_argument(
        "--skip-pdf-gen",
        action="store_true",
        help="Skip PDF generation (use existing PDFs)",
    )
    parser.add_argument(
        "--pdf-dir",
        type=str,
        default=None,
        help="Custom PDF directory (default: data/pdfs/)",
    )
    args = parser.parse_args()

    pdf_dir = args.pdf_dir or settings.pdf_output_dir

    # Step 1: Generate PDFs
    if not args.skip_pdf_gen:
        logger.info("=== Step 1: Generating curriculum PDFs ===")
        pdf_paths = generate_all_pdfs(pdf_dir)
        logger.info(f"Generated {len(pdf_paths)} PDFs in {pdf_dir}")
    else:
        logger.info("=== Step 1: Skipping PDF generation (--skip-pdf-gen) ===")
        pdf_count = len(list(Path(pdf_dir).glob("*.pdf")))
        logger.info(f"Found {pdf_count} existing PDFs in {pdf_dir}")

    # Step 2: Ingest into ChromaDB
    logger.info("=== Step 2: Ingesting content into ChromaDB ===")
    ingestion = ContentIngestion()
    result = ingestion.ingest(pdf_dir=pdf_dir, rebuild=args.rebuild)

    logger.info(f"Status: {result.status}")
    logger.info(f"Chunks ingested: {result.chunks_ingested}")
    logger.info(f"Collections used: {result.collections}")
    logger.info(f"Message: {result.message}")

    if result.status == "success":
        logger.info("=== Ingestion complete! ===")
        logger.info("You can now start the RAG service with: uvicorn app.main:app --reload")
    else:
        logger.error(f"Ingestion failed: {result.message}")
        sys.exit(1)


if __name__ == "__main__":
    main()
