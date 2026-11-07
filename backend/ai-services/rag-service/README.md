# RAG Service - Deutsch B'Darija

RAG (Retrieval-Augmented Generation) service for the German teaching system with Moroccan Darija support.

## Architecture

```
User Question (Darija/German/Mixed)
       │
       ▼
Express Backend (ai-chat.routes.ts)
       │
       ▼ HTTP call to /query
Python RAG Service (FastAPI @ port 8000)
       │
       ├── 1. Embed query (BGE-M3)
       ├── 2. Search ChromaDB (top-k relevant chunks)
       ├── 3. Build augmented prompt (context + system prompt + query)
       └── 4. Generate response (Atlas-Chat-9B via Ollama)
```

## Models

| Component | Model | Source | Size |
|-----------|-------|--------|------|
| LLM | Atlas-Chat-9B | [HuggingFace](https://huggingface.co/MBZUAI-Paris/Atlas-Chat-9B) — loaded via `transformers` | ~18 GB download, ~5 GB VRAM (4-bit) |
| Embeddings | BAAI/bge-m3 | HuggingFace (auto-downloaded) | ~1.2 GB VRAM |
| Vector DB | ChromaDB | pip (persistent, local) | disk |

**No Ollama required.** The model is loaded directly via HuggingFace `transformers` with 4-bit quantization (`bitsandbytes`). It auto-downloads on first start and caches locally.

## Quick Start

### 1. Prerequisites
- Python 3.11+
- GPU with 6+ GB VRAM (recommended) or CPU (slow)
- CUDA 11.8+ for GPU inference

### 2. Install Dependencies
```bash
cd backend/ai-services/rag-service
pip install -r requirements.txt
```

### 3. (Optional) Pre-download the Model
```bash
# Pre-download Atlas-Chat-9B (~18 GB, cached for future starts)
bash scripts/setup_ollama_model.sh
# Or manually:
# huggingface-cli download MBZUAI-Paris/Atlas-Chat-9B
```
The model also auto-downloads when the service starts for the first time.

### 4. Generate PDFs & Ingest Content
```bash
python -m scripts.ingest_content
```

### 5. Start the Service
```bash
uvicorn app.main:app --reload --port 8000
```

### 6. Test
```bash
curl -X POST http://localhost:8000/query \
  -H "Content-Type: application/json" \
  -d '{"message": "Kifash n9ol good morning b l-almanya?", "level": "A1"}'
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/query` | RAG query: embed → retrieve → generate |
| POST | `/ingest` | Ingest PDFs into ChromaDB |
| GET | `/health` | Health check (Ollama, ChromaDB, embeddings) |

## Configuration

Copy `.env.example` to `.env` and adjust values. All settings prefixed with `RAG_`.

## Content

13 curriculum PDFs covering A1-B2:
1. Alphabet & Pronunciation
2. Grammar A1
3. Vocabulary A1
4. Grammar A2
5. Vocabulary A2
6. Grammar B1
7. Vocabulary B1
8. Grammar B2
9. Vocabulary B2
10. False Friends & Common Mistakes
11. Exam Prep (Goethe/telc)
12. Common Phrases & Dialogues
13. Cultural Notes

3 ChromaDB collections:
- `german_grammar` - Grammar rules and explanations
- `german_vocabulary` - Vocabulary with translations
- `german_culture` - Cultural notes, exam tips, phrases
