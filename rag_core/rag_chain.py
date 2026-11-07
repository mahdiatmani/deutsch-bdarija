"""
RAG Chain: Retrieves relevant context and generates Darija-German teaching responses
using Atlas-Chat-9B (4-bit quantized) loaded locally via Hugging Face transformers.
"""

import logging
from typing import List, Dict

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig

from .vector_store import VectorStore

logger = logging.getLogger(__name__)

ATLAS_MODEL_ID = "MBZUAI/Atlas-Chat-9B"

SYSTEM_PROMPT = """Nta "Ostad d l'Almania b Darija" — mo3allim Almani drayyef o dki kayhder b Darija l'mghribiya.

## Chkoun nta:
- Nta ostad Almani kay3ref Darija l'mghribiya mzyan bzhaf.
- Kat'chre7 l'9awa3id l'Almaniya b Darija b tari9a sahla o bayna.
- Kat'3ti amtiila 3amaliya o kat'rbet bin l'Almaniya o Darija fach ymken.

## Kifach kat'jawweb:
1. **Kat'hder b Darija l'mghribiya** (machi l'3arabiya l'fous'ha) — sta3mel kalimat b7al: wakha, bzhaf, zwine, sahel, chwiya, mzyan, hadchi, kifach, 3lach, fine, chno, wach.
2. **Kat'chre7 l'9awa3id l'Almaniya** b tari9a basita m3a amtiila.
3. **Kat'kteb l'amtiila l'Almaniya** m3a tarjama b Darija.
4. **Kat'chjje3 t-tilmid** o kat'koune ijjabi.

## Format dyalk:
- L'kalimat l'Almaniya: **bold**
- Tarjama b Darija: (bin 9awsayn)
- Kat'3ti amtiila 3amaliya mn l'7ayat l'yawmiya.
- Fach kat'chre7 9a3ida, 3ti 2-3 d l'amtiila 3la l'a9al.

## Amtiila d l'ousloub:
"Wakha, daba ghadi n'chre7lek **der/die/das** — hado houma l'articles f l'Almaniya.
B7al 'le/la' f l'Fransawiya, walakin f l'Almaniya 3ndna 3:
- **der** → l'moudakkar (der Mann = r-rajl)
- **die** → l'mou'annat (die Frau = l'mra)
- **das** → l'mou7ayid (das Kind = d-dri/t-tifl)
Sahel, wach la? 😊"

## Ta3limat mouhimma:
- Ila ma l9itich l'ma3louma f s-siya9 lli 3tawk, goul l'tilmid b sara7a o 3tih lli 3ndk.
- Sta3mel l'Fransawiya ghir bach t'9aren (bzhaf d l'mgharba kay3rfo l'Fransawiya).
- Rkez 3la l'amtiila l'3amaliya o l'mou7adat d koll youm.
- Chjje3 t-tilmid dima!
"""


def _load_atlas_model():
    """Load Atlas-Chat-9B with 4-bit quantization. Returns (model, tokenizer)."""
    logger.info(f"Loading {ATLAS_MODEL_ID} with 4-bit quantization...")

    quantization_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_compute_dtype=torch.float16,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
    )

    tokenizer = AutoTokenizer.from_pretrained(ATLAS_MODEL_ID)
    model = AutoModelForCausalLM.from_pretrained(
        ATLAS_MODEL_ID,
        quantization_config=quantization_config,
        device_map="auto",
        torch_dtype=torch.float16,
    )

    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    logger.info(f"{ATLAS_MODEL_ID} loaded successfully (4-bit quantized)")
    return model, tokenizer


def format_context(hits: List[Dict]) -> str:
    """Format retrieved chunks into a context string for the LLM."""
    if not hits:
        return "Ma kayn 7ta siya9 mauta7."

    parts = []
    for i, hit in enumerate(hits, 1):
        parts.append(
            f"--- Marji3 {i} (mn {hit['source']}, saf7a {hit['page_num']}, score: {hit['score']:.2f}) ---\n"
            f"{hit['text']}"
        )
    return "\n\n".join(parts)


class DarijaGermanTeacher:
    # Shared model instance across all DarijaGermanTeacher instances
    _model = None
    _tokenizer = None

    def __init__(self, vector_store: VectorStore):
        """Initialize the Darija German teacher with Atlas-Chat-9B (4-bit)."""
        self.vector_store = vector_store
        self.conversation_history: List[Dict] = []

        # Load model once (shared across instances)
        if DarijaGermanTeacher._model is None:
            DarijaGermanTeacher._model, DarijaGermanTeacher._tokenizer = _load_atlas_model()

        self.model = DarijaGermanTeacher._model
        self.tokenizer = DarijaGermanTeacher._tokenizer

    def ask(self, question: str, top_k: int = 5) -> Dict:
        """
        Ask a question: retrieves context, generates a Darija response.
        Returns the answer and retrieved sources.
        """
        # 1. Retrieve relevant chunks
        hits = self.vector_store.search(question, top_k=top_k)
        context = format_context(hits)

        # 2. Build the user message with context
        user_message = f"""Siya9 mn l'ktab:
{context}

---

So'al d t-tilmid: {question}

Jawweb b Darija l'mghribiya, o chre7 b tari9a sahla m3a amtiila."""

        # 3. Add to conversation history
        self.conversation_history.append({"role": "user", "content": user_message})

        # Keep conversation manageable (last 10 exchanges)
        recent_history = self.conversation_history[-20:]

        # 4. Build chat messages for Atlas-Chat-9B
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        messages.extend(recent_history)

        input_ids = self.tokenizer.apply_chat_template(
            messages,
            return_tensors="pt",
            add_generation_prompt=True,
        ).to(self.model.device)

        with torch.no_grad():
            output_ids = self.model.generate(
                input_ids,
                max_new_tokens=2048,
                temperature=0.7,
                top_p=0.9,
                repetition_penalty=1.1,
                do_sample=True,
                pad_token_id=self.tokenizer.pad_token_id,
            )

        # Decode only the new tokens
        new_tokens = output_ids[0][input_ids.shape[-1]:]
        assistant_message = self.tokenizer.decode(new_tokens, skip_special_tokens=True).strip()

        # 5. Add assistant response to history
        self.conversation_history.append({"role": "assistant", "content": assistant_message})

        return {
            "answer": assistant_message,
            "sources": [
                {"source": h["source"], "page": h["page_num"], "score": round(h["score"], 3)}
                for h in hits
            ],
            "model": ATLAS_MODEL_ID,
        }

    def clear_history(self):
        """Clear conversation history."""
        self.conversation_history = []
