"""
Response generation. Providers: OpenRouter free models (default), local
Atlas-Chat-9B (4-bit quantized) and Ollama. Selected by settings.llm_provider.
"""

import asyncio
import logging
import re
from typing import Optional

import httpx

from app.config import settings

logger = logging.getLogger(__name__)

TEACHER_SYSTEM_PROMPT = """You are "Herr Schmidt", a German teacher for Moroccans. You grew up between Casablanca and Berlin, so you speak natural Moroccan Darija like a friend from the derb, and perfect German.

# LANGUAGE (most important)
- Answer ONLY in Moroccan Darija written with Latin letters (the way Moroccans text on WhatsApp).
- NEVER use Arabic letters. NEVER answer in Modern Standard Arabic (fus7a), English, or full French sentences.
- Single French WORDS that Moroccans really use are fine (normal, exemple, verbe, niveau, masculin). NEVER write a full French sentence or phrase (no "Apprends toujours...", no "Essaye de dire...", no "Oui, mais c'est..."): say it in Darija.
- Letters: 3 = ع, 7 = ح, 9 = ق, kh = خ, gh = غ, ch = ش, ou = و.

# SAY THIS (Darija) - NOT THAT (fus7a)
kifach (not kayfa) · chno / ach (not madha) · 3lach (not limadha) · fin (not ayna) · imta (not mata) · wach (question word)
daba (not al'an) · bzaf (not katir) · mzyan (not jayyid) · khass (not yajib) · n9der / ymken (not nastati3 / yumkin)
ghir (not faqat) · walakin (not lakin) · 7ta (not aydan) · hna / temma (not huna / hunak) · bghit (not uridu)
kayn / makaynch · dyal · ghadi · hadchi · dakchi · safi · wakha · zwin · s7i7 · ghalet · 3afak · mer7ba
l'ostad (not mudarris / mo3allim) · wajed (not mosta3id) · t9der tt9 fih (not mo3tamad) · l'CV (not sira dhatiya) · l'hedra (not l7iwar)
How are you = "labas?" / "kidayr?" (m) / "kidayra?" (f): NEVER "kifach nta".
Grammar words: use the French terms Moroccans learned at school: masculin, féminin, neutre, article, pluriel, verbe, conjugaison.
NEVER use fus7a grammar words (mouzakar, mouannath, jins, ism, fi3l, jam3).

# EVERYDAY NOUNS IN DARIJA (use these exact words)
r-rajel (man) · l'mra (woman) · d-drri / l'weld (child, boy) · l'bent (girl) · l'bba (father) · l'mama / l'walida (mother)
d-dar (house) · t-tabla (table) · l'ktab (book) · t-tomobil (car) · l'ma (water) · l'khobz (bread) · atay (tea) · l'qhwa (coffee)
l'mech (cat) · l'kelb (dog) · l'mdrasa (school) · l'khedma (work) · l'flous (money) · s-sou9 (market) · t-tbib (doctor)

# FORMAT
- German words and sentences go ONLY inside double quotes, then pronunciation in parentheses with easy letters, then the Darija meaning after "=":
  "Guten Morgen" (gouten morguen) = sba7 l'khir
- NEVER put Darija inside double quotes. Double quotes are only for German.
- Keep it SHORT: maximum 8 lines / 120 words, even for big questions. No tables, no numbered sections. Give the 3 most useful things, then ask "Bghiti nzidek?". Use simple **bold** or "- " bullets when it helps. No long tables.
- Give examples from Moroccan daily life (l'7anout, l'mdrasa, l'mama, l'koura, atay, tobis...).
- End with one tiny exercise or question for the student, starting with "Jreb nta:".
- Check that your German is 100% correct (articles, verb position, umlauts ä ö ü ß).

# EXAMPLE
Student: kifach ngoul ana mn lmghrib b lalmaniya?
Herr Schmidt: Mer7ba bik! Sahla bzaf 😊
"Ich komme aus Marokko." (ich komme aous marokko) = ana jay men l'Maghrib.
- "Ich" = ana
- "komme" = jay (men l'verbe "kommen")
- "aus" = men
Ila bghiti tgoul fin saken: "Ich wohne in Casablanca." = ana saken f Casa.
Jreb nta: kifach ghadi tgoul "ana men Fes"?
- When reference material is provided, use it for accuracy."""

RAG_CONTEXT_TEMPLATE = """## Reference Material (use this for accurate answers):
{context}

## Student's Level: {level}

## Student's Question:
{question}

Use the reference material above to give an accurate answer in natural Moroccan Darija with Latin letters."""


def extract_german_text(text: str) -> Optional[str]:
    """Extract German phrases (quoted) from a response."""
    quoted_matches = re.findall(r'"([^"]+)"', text)
    if quoted_matches:
        german_phrases = [
            phrase for phrase in quoted_matches
            if re.search(r"[äöüßÄÖÜ]|^[A-Z][a-z]+\s", phrase)
            or re.match(r"^(Guten|Ich|Du|Wir|Sie|Das|Die|Der|Ein|Eine|Hallo|Danke|Bitte)", phrase)
        ]
        if german_phrases:
            return ". ".join(german_phrases)
    return None


def _build_user_content(question: str, context_chunks: list[dict], level: str | None) -> str:
    """Build the RAG-augmented user message."""
    context_parts = []
    for i, chunk in enumerate(context_chunks, 1):
        meta = chunk.get("metadata", {})
        source = meta.get("topic", meta.get("source", "curriculum"))
        context_parts.append(f"[{i}. {source}]\n{chunk['content']}")

    context_text = (
        "\n\n---\n\n".join(context_parts)
        if context_parts
        else "No specific reference material found."
    )

    return RAG_CONTEXT_TEMPLATE.format(
        context=context_text,
        level=level or "not specified",
        question=question,
    )


# ---------------------------------------------------------------------------
# Local Atlas-Chat-9B generator (4-bit quantized via bitsandbytes)
# ---------------------------------------------------------------------------

class LocalAtlasGenerator:
    """Generate responses using Atlas-Chat-9B loaded locally with 4-bit quantization."""

    def __init__(self):
        self._model_id = settings.atlas_model_id
        self._model = None
        self._tokenizer = None
        self._loaded = False

    def load(self):
        """Load Atlas-Chat-9B with 4-bit quantization."""
        import torch
        from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig

        logger.info(f"Loading {self._model_id} with 4-bit quantization...")

        quantization_config = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_compute_dtype=torch.float16,
            bnb_4bit_use_double_quant=True,
            bnb_4bit_quant_type="nf4",
        )

        self._tokenizer = AutoTokenizer.from_pretrained(self._model_id)
        self._model = AutoModelForCausalLM.from_pretrained(
            self._model_id,
            quantization_config=quantization_config,
            device_map="auto",
            torch_dtype=torch.float16,
        )

        # Set pad token if not set
        if self._tokenizer.pad_token is None:
            self._tokenizer.pad_token = self._tokenizer.eos_token

        self._loaded = True
        logger.info(f"{self._model_id} loaded successfully (4-bit quantized)")

    async def generate(
        self,
        question: str,
        context_chunks: list[dict],
        conversation_history: list[dict] | None = None,
        level: str | None = None,
    ) -> dict:
        """Generate via local Atlas-Chat-9B. Returns {text, german_text, model_used}."""
        if not self._loaded:
            self.load()

        user_content = _build_user_content(question, context_chunks, level)

        # Build chat messages — Atlas-Chat does not support a "system" role,
        # so we prepend the system prompt to the first user message.
        messages = []
        if conversation_history:
            for msg in conversation_history[-6:]:
                role = "user" if msg.get("role") == "user" else "assistant"
                messages.append({"role": role, "content": msg["content"]})
        first_user_content = f"{TEACHER_SYSTEM_PROMPT}\n\n{user_content}"
        messages.append({"role": "user", "content": first_user_content})

        # Run inference in thread pool to avoid blocking the event loop
        loop = asyncio.get_event_loop()
        text = await loop.run_in_executor(None, self._inference, messages)

        return {
            "text": text,
            "german_text": extract_german_text(text),
            "model_used": f"Atlas-Chat-9B (4-bit local)",
        }

    def _inference(self, messages: list[dict]) -> str:
        """Synchronous model inference."""
        import time
        import torch

        input_ids = self._tokenizer.apply_chat_template(
            messages,
            return_tensors="pt",
            add_generation_prompt=True,
        ).to(self._model.device)

        logger.info(f"Starting inference (input tokens: {input_ids.shape[-1]}, max_new_tokens: {settings.max_new_tokens})")
        start = time.time()

        with torch.no_grad():
            output_ids = self._model.generate(
                input_ids,
                max_new_tokens=settings.max_new_tokens,
                temperature=settings.temperature,
                top_p=settings.top_p,
                repetition_penalty=settings.repetition_penalty,
                do_sample=True,
                pad_token_id=self._tokenizer.pad_token_id,
            )

        elapsed = time.time() - start
        # Decode only the new tokens (skip the input)
        new_tokens = output_ids[0][input_ids.shape[-1]:]
        text = self._tokenizer.decode(new_tokens, skip_special_tokens=True).strip()
        logger.info(f"Inference done in {elapsed:.1f}s (generated {len(new_tokens)} tokens)")
        return text

    @property
    def is_loaded(self) -> bool:
        return self._loaded


# ---------------------------------------------------------------------------
# Ollama generator (fallback)
# ---------------------------------------------------------------------------

class OllamaGenerator:
    """Generate responses using Ollama API."""

    def __init__(self):
        self._model = settings.ollama_model
        self._base_url = settings.ollama_base_url
        self._loaded = False

    def load(self):
        """Verify Ollama is reachable and the model is available."""
        try:
            resp = httpx.get(f"{self._base_url}/api/tags", timeout=10)
            resp.raise_for_status()
            models = [m["name"] for m in resp.json().get("models", [])]
            if self._model not in models:
                base_names = [m.split(":")[0] for m in models]
                if self._model.split(":")[0] not in base_names:
                    logger.warning(
                        f"Model '{self._model}' not found in Ollama. "
                        f"Available: {models}. Will attempt to use it anyway."
                    )
            self._loaded = True
            logger.info(f"Ollama ready: {self._base_url}, model: {self._model}")
        except Exception as e:
            logger.error(f"Cannot reach Ollama at {self._base_url}: {e}")
            raise RuntimeError(
                f"Ollama not reachable at {self._base_url}. "
                f"Make sure Ollama is running ('ollama serve')."
            ) from e

    async def generate(
        self,
        question: str,
        context_chunks: list[dict],
        conversation_history: list[dict] | None = None,
        level: str | None = None,
    ) -> dict:
        """Generate a response via Ollama. Returns {text, german_text, model_used}."""
        if not self._loaded:
            self.load()

        user_content = _build_user_content(question, context_chunks, level)

        messages = [{"role": "system", "content": TEACHER_SYSTEM_PROMPT}]
        if conversation_history:
            for msg in conversation_history[-6:]:
                role = "user" if msg.get("role") == "user" else "assistant"
                messages.append({"role": role, "content": msg["content"]})
        messages.append({"role": "user", "content": user_content})

        async with httpx.AsyncClient(timeout=120) as client:
            resp = await client.post(
                f"{self._base_url}/api/chat",
                json={
                    "model": self._model,
                    "messages": messages,
                    "stream": False,
                    "options": {
                        "temperature": settings.temperature,
                        "top_p": settings.top_p,
                        "repeat_penalty": settings.repetition_penalty,
                        "num_predict": settings.max_new_tokens,
                    },
                },
            )
            resp.raise_for_status()
            data = resp.json()

        text = data.get("message", {}).get("content", "").strip()
        return {
            "text": text,
            "german_text": extract_german_text(text),
            "model_used": self._model,
        }

    @property
    def is_loaded(self) -> bool:
        return self._loaded


# ---------------------------------------------------------------------------
# OpenRouter generator (default: free hosted models, no GPU needed)
# ---------------------------------------------------------------------------

def _build_chat_messages(question, context_chunks, conversation_history, level) -> list[dict]:
    messages = [{"role": "system", "content": TEACHER_SYSTEM_PROMPT}]
    for msg in (conversation_history or [])[-6:]:
        role = "user" if msg.get("role") == "user" else "assistant"
        messages.append({"role": role, "content": msg["content"]})
    messages.append({"role": "user", "content": _build_user_content(question, context_chunks, level)})
    return messages


class OpenRouterGenerator:
    """Generate responses with OpenRouter, trying each configured model in turn."""

    def __init__(self):
        self._models = [m.strip() for m in settings.openrouter_models.split(",") if m.strip()]
        self._base_url = settings.openrouter_base_url.rstrip("/")
        self._loaded = False

    def load(self):
        if not settings.openrouter_api_key:
            logger.error("RAG_OPENROUTER_API_KEY is not set: generation will fail until it is.")
            return
        self._loaded = True
        logger.info(f"OpenRouter ready, models: {self._models}")

    async def generate(
        self,
        question: str,
        context_chunks: list[dict],
        conversation_history: list[dict] | None = None,
        level: str | None = None,
    ) -> dict:
        if not settings.openrouter_api_key:
            raise RuntimeError("RAG_OPENROUTER_API_KEY is not set")

        messages = _build_chat_messages(question, context_chunks, conversation_history, level)
        headers = {
            "Authorization": f"Bearer {settings.openrouter_api_key}",
            "Content-Type": "application/json",
            "X-Title": "Deutsch B'Darija",
        }
        errors = []
        async with httpx.AsyncClient(timeout=120) as client:
            for model in self._models:
                try:
                    resp = await client.post(
                        f"{self._base_url}/chat/completions",
                        headers=headers,
                        json={
                            "model": model,
                            "messages": messages,
                            "max_tokens": settings.max_new_tokens,
                            "temperature": settings.temperature,
                            "top_p": settings.top_p,
                            # Keep reasoning models from spending the budget on (or leaking) their reasoning
                            "reasoning": {"effort": "low", "exclude": True},
                        },
                    )
                    if resp.status_code in (401, 403):
                        raise RuntimeError(f"OpenRouter rejected the API key ({resp.status_code})")
                    if resp.status_code != 200:
                        errors.append(f"{model}: HTTP {resp.status_code}")
                        continue  # rate-limited, removed, or provider down
                    data = resp.json()
                    text = (data.get("choices") or [{}])[0].get("message", {}).get("content") or ""
                    text = re.sub(r"<think>[\s\S]*?</think>", "", text, flags=re.I).strip()
                    if not text:
                        errors.append(f"{model}: empty response")
                        continue
                    if re.match(r"(here'?s a thinking process|thinking process:)", text, re.I) or re.search(
                        r"\*\*analy[sz]e (the )?user('s)? (input|request)\*\*", text, re.I
                    ):
                        errors.append(f"{model}: returned its reasoning instead of an answer")
                        continue
                    return {
                        "text": text,
                        "german_text": extract_german_text(text),
                        "model_used": data.get("model", model),
                    }
                except httpx.HTTPError as e:
                    errors.append(f"{model}: {e}")

        raise RuntimeError("All OpenRouter models failed: " + "; ".join(errors))

    @property
    def is_loaded(self) -> bool:
        return self._loaded

    @property
    def model_name(self) -> str:
        return self._models[0] if self._models else "openrouter"


# ---------------------------------------------------------------------------
# Factory: pick the right generator based on config
# ---------------------------------------------------------------------------

def create_generator():
    """Create the generator selected by settings.llm_provider."""
    provider = settings.llm_provider.lower()
    if provider == "local_atlas":
        logger.info(f"Using local Atlas-Chat-9B (4-bit): {settings.atlas_model_id}")
        return LocalAtlasGenerator()
    if provider == "ollama":
        logger.info(f"Using Ollama generator: {settings.ollama_model}")
        return OllamaGenerator()
    logger.info("Using OpenRouter generator (free models)")
    return OpenRouterGenerator()
