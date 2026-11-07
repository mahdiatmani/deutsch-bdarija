#!/usr/bin/env bash
# Download Atlas-Chat-9B from HuggingFace for use with the RAG service.
# The model is loaded directly via HuggingFace transformers (no Ollama needed).
#
# Requires: huggingface-cli (pip install huggingface-hub)
set -euo pipefail

HF_REPO="MBZUAI-Paris/Atlas-Chat-9B"
CACHE_DIR="${RAG_HF_CACHE_DIR:-./data/hf_cache}"

echo "=== Deutsch B'Darija - HuggingFace Model Setup ==="
echo ""
echo "Model : $HF_REPO"
echo "Cache : $CACHE_DIR"
echo ""

if ! command -v huggingface-cli &> /dev/null; then
    echo "Installing huggingface-hub..."
    pip install -q huggingface-hub
fi

echo "Downloading $HF_REPO (~18 GB on first run, cached afterwards)..."
huggingface-cli download "$HF_REPO" --local-dir "$CACHE_DIR/models--$(echo $HF_REPO | tr '/' '--')"

echo ""
echo "Done! The RAG service will load the model from cache when it starts."
echo "Set RAG_HF_CACHE_DIR=$CACHE_DIR in your .env if needed."
