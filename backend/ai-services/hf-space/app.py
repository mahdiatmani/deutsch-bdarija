"""
Atlas-Chat-2B on HuggingFace Spaces (free CPU tier).
Darija-specialized LLM for German teaching.
"""

import gradio as gr
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL_ID = "MBZUAI-Paris/Atlas-Chat-2B"

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    torch_dtype=torch.float32,
    device_map="cpu",
)
model.eval()


def respond(message, history, system_message, max_tokens, temperature, top_p):
    """Generate a response using Atlas-Chat-2B."""
    messages = []

    # Atlas-Chat uses user/model roles (Gemma-style, no system role)
    if system_message:
        messages.append({"role": "user", "content": system_message})
        messages.append(
            {
                "role": "assistant",
                "content": "Merhba bik! Ana Herr Schmidt, l-oustadh dyalek. Kifach n9drak?",
            }
        )

    for msg in history:
        messages.append({"role": msg["role"], "content": msg["content"]})

    messages.append({"role": "user", "content": message})

    input_ids = tokenizer.apply_chat_template(
        messages, return_tensors="pt", add_generation_prompt=True
    )

    with torch.no_grad():
        outputs = model.generate(
            input_ids,
            max_new_tokens=int(max_tokens),
            temperature=float(temperature),
            top_p=float(top_p),
            do_sample=True,
            repetition_penalty=1.1,
            pad_token_id=tokenizer.eos_token_id,
        )

    response = tokenizer.decode(
        outputs[0][input_ids.shape[-1] :], skip_special_tokens=True
    ).strip()
    return response


demo = gr.ChatInterface(
    respond,
    type="messages",
    additional_inputs=[
        gr.Textbox(value="", label="System message", lines=3),
        gr.Slider(minimum=1, maximum=2048, value=800, step=1, label="Max new tokens"),
        gr.Slider(minimum=0.1, maximum=2.0, value=0.7, step=0.1, label="Temperature"),
        gr.Slider(minimum=0.1, maximum=1.0, value=0.9, step=0.05, label="Top-p"),
    ],
    title="Atlas-Chat-2B — Deutsch B'Darija",
    description="German teacher AI that explains in Moroccan Darija. Powered by Atlas-Chat-2B.",
)

if __name__ == "__main__":
    demo.launch()
