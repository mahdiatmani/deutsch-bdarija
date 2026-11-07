"""
Web scraper for German learning content.
Scrapes learngermanonline.org and other open sources.
"""

import json
import logging
import time
from pathlib import Path
from typing import Optional
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

from app.config import settings

logger = logging.getLogger(__name__)

HEADERS = {
    "User-Agent": "DeutschBDarija-EducationalBot/1.0 (German learning app)",
    "Accept": "text/html,application/xhtml+xml",
    "Accept-Language": "en-US,en;q=0.9,de;q=0.8",
}

# Delay between requests (seconds) — be respectful
REQUEST_DELAY = 2.0


class GermanContentScraper:
    """Scrapes German learning content from educational websites."""

    def __init__(self, output_dir: Optional[str] = None):
        self.output_dir = Path(output_dir or settings.scraped_data_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.session = requests.Session()
        self.session.headers.update(HEADERS)

    def _fetch(self, url: str) -> Optional[BeautifulSoup]:
        """Fetch a page with rate limiting and error handling."""
        try:
            time.sleep(REQUEST_DELAY)
            resp = self.session.get(url, timeout=15)
            resp.raise_for_status()
            return BeautifulSoup(resp.text, "lxml")
        except requests.RequestException as e:
            logger.warning(f"Failed to fetch {url}: {e}")
            return None

    def scrape_learngermanonline(self) -> list[dict]:
        """Scrape content from learngermanonline.org."""
        base_url = "https://learngermanonline.org"
        results = []

        # Known content sections
        sections = [
            "/german-grammar/",
            "/german-vocabulary/",
            "/german-lessons/",
            "/german-phrases/",
            "/tips-and-resources/",
        ]

        for section_path in sections:
            url = urljoin(base_url, section_path)
            soup = self._fetch(url)
            if not soup:
                continue

            # Extract article/content links from the section page
            links = set()
            for a_tag in soup.select("article a[href], .entry-content a[href], main a[href]"):
                href = a_tag.get("href", "")
                full_url = urljoin(base_url, href)
                if urlparse(full_url).netloc == urlparse(base_url).netloc:
                    links.add(full_url)

            # Also include the section page itself
            links.add(url)

            for link in links:
                page_data = self._scrape_page(link, section_path.strip("/"))
                if page_data:
                    results.append(page_data)
                    logger.info(f"Scraped: {page_data['title']} ({link})")

        return results

    def _scrape_page(self, url: str, section: str) -> Optional[dict]:
        """Extract structured content from a single page."""
        soup = self._fetch(url)
        if not soup:
            return None

        title_tag = soup.find("h1") or soup.find("title")
        title = title_tag.get_text(strip=True) if title_tag else url.split("/")[-2]

        # Try multiple content selectors
        content_el = (
            soup.select_one("article .entry-content")
            or soup.select_one("main .content")
            or soup.select_one("article")
            or soup.select_one("main")
        )

        if not content_el:
            return None

        # Extract text with structure preserved
        paragraphs = []
        examples = []
        headings = []

        for el in content_el.find_all(["p", "h2", "h3", "h4", "li", "table", "blockquote"]):
            text = el.get_text(strip=True)
            if not text:
                continue

            if el.name in ("h2", "h3", "h4"):
                headings.append(text)
                paragraphs.append(f"\n## {text}\n")
            elif el.name == "li":
                paragraphs.append(f"- {text}")
            elif el.name == "blockquote":
                examples.append(text)
                paragraphs.append(f"> {text}")
            elif el.name == "table":
                table_text = self._extract_table(el)
                if table_text:
                    paragraphs.append(table_text)
            else:
                paragraphs.append(text)

        full_text = "\n".join(paragraphs)
        if len(full_text) < 50:
            return None

        return {
            "url": url,
            "title": title,
            "section": section,
            "headings": headings,
            "content": full_text,
            "examples": examples,
            "word_count": len(full_text.split()),
        }

    def _extract_table(self, table_el) -> str:
        """Convert an HTML table to text format."""
        rows = []
        for tr in table_el.find_all("tr"):
            cells = [td.get_text(strip=True) for td in tr.find_all(["td", "th"])]
            if cells:
                rows.append(" | ".join(cells))
        return "\n".join(rows) if rows else ""

    def scrape_additional_sources(self) -> list[dict]:
        """Scrape additional free German learning content."""
        results = []

        # CEFR level descriptions (public knowledge, authored content)
        cefr_content = self._create_cefr_descriptions()
        results.extend(cefr_content)

        # Common German false friends (public knowledge)
        false_friends = self._create_false_friends_content()
        results.append(false_friends)

        return results

    def _create_cefr_descriptions(self) -> list[dict]:
        """Create CEFR level description content (public domain knowledge)."""
        levels = {
            "A1": {
                "title": "CEFR Level A1 - Breakthrough/Beginner",
                "content": """## CEFR A1 - Anfänger (Beginner)
At A1 level, you can:
- Understand and use familiar everyday expressions and basic phrases
- Introduce yourself and others, ask and answer questions about personal details
- Interact in a simple way if the other person talks slowly and clearly

### Grammar Topics for A1:
- Present tense of regular and irregular verbs (sein, haben)
- Personal pronouns (ich, du, er, sie, es, wir, ihr, sie/Sie)
- Articles: der, die, das (definite) and ein, eine (indefinite)
- Nominative and Akkusative cases
- Basic word order (SVO)
- Yes/No questions and W-questions
- Negation with nicht and kein
- Numbers 1-1000, time, dates
- Basic prepositions (in, auf, an, bei, mit)

### Vocabulary Themes for A1 (~500 words):
- Greetings and farewells
- Family members
- Colors and shapes
- Food and drinks
- Days, months, seasons
- Body parts
- Classroom objects
- Simple adjectives (groß, klein, schön, gut)""",
            },
            "A2": {
                "title": "CEFR Level A2 - Elementary",
                "content": """## CEFR A2 - Grundstufe (Elementary)
At A2 level, you can:
- Understand sentences about familiar topics (shopping, family, work)
- Communicate in simple, routine tasks
- Describe aspects of your background and immediate environment

### Grammar Topics for A2:
- Dative case (Wem? To whom?)
- Wechselpräpositionen (two-way prepositions: in, an, auf, über, unter, etc.)
- Modal verbs (können, müssen, wollen, sollen, dürfen, mögen)
- Perfekt tense (Ich habe gemacht / Ich bin gegangen)
- Separable verbs (aufstehen, anfangen, einkaufen)
- Adjective endings after articles
- Comparative and superlative (bigger, biggest)
- Temporal prepositions (vor, nach, seit, bis)
- Conjunctions: und, aber, oder, denn, weil

### Vocabulary Themes for A2 (~500 words):
- Travel and transportation
- Shopping and money
- Weather and seasons
- Directions and places
- Hobbies and free time
- Health and body
- Housing and rooms
- Professions""",
            },
            "B1": {
                "title": "CEFR Level B1 - Intermediate",
                "content": """## CEFR B1 - Mittelstufe (Intermediate)
At B1 level, you can:
- Understand the main points of clear standard speech on familiar topics
- Deal with most travel situations
- Produce simple connected text on familiar topics
- Describe experiences, events, dreams, and ambitions

### Grammar Topics for B1:
- Genitive case (Wessen? Whose?)
- Präteritum (simple past, especially for narration)
- Konjunktiv II (would/could: würde, hätte, wäre, könnte)
- Passive voice (Das Buch wird gelesen)
- Relative clauses (Der Mann, der dort steht, ...)
- Reflexive verbs (sich freuen, sich waschen)
- Subordinate clauses (dass, ob, wenn, als, weil, obwohl)
- Infinitive with zu (Ich versuche, Deutsch zu lernen)
- N-Deklination (den Studenten, dem Herrn)

### Vocabulary Themes for B1 (~500 words):
- Work and career
- Education and school
- Media and technology
- Environment and nature
- Politics and society
- Emotions and relationships
- Culture and art
- Health care system""",
            },
            "B2": {
                "title": "CEFR Level B2 - Upper Intermediate",
                "content": """## CEFR B2 - Obere Mittelstufe (Upper Intermediate)
At B2 level, you can:
- Understand the main ideas of complex text on concrete and abstract topics
- Interact with native speakers with a degree of fluency
- Produce clear, detailed text on a wide range of subjects
- Explain a viewpoint on a topical issue

### Grammar Topics for B2:
- Konjunktiv I (reported speech: Er sagte, er sei müde)
- Plusquamperfekt (past perfect: Nachdem ich gegessen hatte, ...)
- Participial constructions (der von mir geschriebene Brief)
- Extended attributes (die in Deutschland lebenden Ausländer)
- Nominalization (das Lesen, beim Einkaufen)
- Double infinitive (Er hat kommen können)
- Futur II (Er wird es gemacht haben)
- Advanced connectors (je ... desto, sowohl ... als auch, weder ... noch)

### Vocabulary Themes for B2 (~500 words):
- Academic language
- Business and economics
- Science and research
- Law and justice
- Abstract concepts
- Idiomatic expressions
- Formal correspondence
- Debate and argumentation""",
            },
        }

        return [
            {
                "url": "cefr-descriptions",
                "title": data["title"],
                "section": "cefr-levels",
                "headings": [],
                "content": data["content"],
                "examples": [],
                "word_count": len(data["content"].split()),
            }
            for level, data in levels.items()
        ]

    def _create_false_friends_content(self) -> dict:
        """Create false friends content (public domain knowledge)."""
        content = """## German-English False Friends (Falsche Freunde)

These words look similar in German and English but have different meanings:

| German | Looks like | Actually means |
|--------|-----------|---------------|
| aktuell | actual | current, up-to-date |
| also | also | so, therefore |
| bald | bald | soon |
| bekommen | become | to get, receive |
| Brand | brand | fire |
| brav | brave | well-behaved |
| Chef | chef | boss |
| Dose | dose | can, tin |
| eventuell | eventually | possibly |
| Fabrik | fabric | factory |
| fast | fast | almost |
| Gift | gift | poison |
| Gymnasium | gymnasium | academic high school |
| Handy | handy | mobile phone |
| Hose | hose | trousers |
| Karte | card | map, ticket, card |
| Konkurrenz | concurrence | competition |
| Kost | cost | food, diet |
| Lust | lust | desire, inclination |
| Mappe | map | folder, briefcase |
| Mist | mist | manure, rubbish |
| Oldtimer | old-timer | vintage car |
| ordinär | ordinary | vulgar |
| Pension | pension | guesthouse, retirement pay |
| Probe | probe | rehearsal, trial |
| Prospekt | prospect | brochure |
| Rat | rat | advice, council |
| Rezept | receipt | recipe, prescription |
| Rock | rock | skirt |
| See | see | lake (der See) / sea (die See) |
| sensibel | sensible | sensitive |
| Smoking | smoking | tuxedo |
| Sympathisch | sympathetic | likeable |
| Tablett | tablet | tray |
| Wand | wand | wall |

## Common Mistakes by Moroccan Learners

### Arabic Interference Patterns:
1. **Gender confusion**: Arabic has 2 genders, German has 3. Moroccan learners often guess wrong with "das" (neuter).
2. **Word order**: Arabic is VSO (Verb-Subject-Object), German is V2 (verb second). Learners often put the verb first.
3. **Article usage**: Arabic uses al- (definite) vs no article (indefinite). German requires explicit ein/eine.
4. **Plural formation**: Arabic has complex plural patterns (broken plurals). German plurals are equally unpredictable — must be memorized.
5. **Pronunciation**: /p/ and /b/ confusion (Arabic lacks /p/). "Park" may sound like "Bark".
6. **/ö/ and /ü/ sounds**: These don't exist in Arabic or Darija. Practice rounding lips.
7. **Compound words**: German creates long compound words (Handschuh = hand + shoe = glove). This concept doesn't exist in Arabic.
8. **Cases**: Arabic has 3 cases but uses them differently. The German Dativ especially confuses Arabic speakers.

### Darija-Specific Tips:
- Darija speakers already know French, which helps with many German cognates
- The German "ch" sound (as in "ich") is similar to the Darija "kh" (خ)
- German "r" (uvular) is very similar to the Moroccan Arabic "r" (غ)
- Darija's mixed French-Arabic structure actually helps with German compound words"""

        return {
            "url": "false-friends-mistakes",
            "title": "German-English False Friends & Moroccan Learner Mistakes",
            "section": "false-friends",
            "headings": [
                "German-English False Friends",
                "Common Mistakes by Moroccan Learners",
            ],
            "content": content,
            "examples": [],
            "word_count": len(content.split()),
        }

    def run(self) -> list[dict]:
        """Run the full scraping pipeline."""
        logger.info("Starting content scraping...")

        all_content = []

        # 1. Scrape learngermanonline.org
        logger.info("Scraping learngermanonline.org...")
        lgo_content = self.scrape_learngermanonline()
        all_content.extend(lgo_content)
        logger.info(f"Scraped {len(lgo_content)} pages from learngermanonline.org")

        # 2. Add additional/authored content
        logger.info("Adding additional educational content...")
        additional = self.scrape_additional_sources()
        all_content.extend(additional)
        logger.info(f"Added {len(additional)} additional content pieces")

        # Save to JSON
        output_file = self.output_dir / "scraped_content.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(all_content, f, ensure_ascii=False, indent=2)
        logger.info(f"Saved {len(all_content)} content pieces to {output_file}")

        return all_content
