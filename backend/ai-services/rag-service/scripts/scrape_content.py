#!/usr/bin/env python3
"""
Run the content scraping pipeline.
Usage: python -m scripts.scrape_content
"""

import logging
import sys
from pathlib import Path

# Add the parent directory to the path so we can import app modules
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.content.scraper import GermanContentScraper

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


def main():
    logger.info("Starting content scraping pipeline...")

    scraper = GermanContentScraper()
    content = scraper.run()

    logger.info(f"Scraping complete! Total content pieces: {len(content)}")

    # Print summary
    sections = {}
    for item in content:
        section = item.get("section", "unknown")
        sections[section] = sections.get(section, 0) + 1

    logger.info("Content by section:")
    for section, count in sorted(sections.items()):
        logger.info(f"  {section}: {count} pieces")

    total_words = sum(item.get("word_count", 0) for item in content)
    logger.info(f"Total word count: {total_words:,}")


if __name__ == "__main__":
    main()
