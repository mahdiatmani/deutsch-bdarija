"""
🇩🇪🇲🇦 Darija German Teacher — Streamlit App
A RAG-powered app that teaches German in Moroccan Darija.
"""

import streamlit as st
from pathlib import Path

from rag_core.vector_store import VectorStore
from rag_core.rag_chain import DarijaGermanTeacher
from rag_core.pdf_processor import process_pdf


# ─── Config ───────────────────────────────────────────────
VECTOR_DB_DIR = "data/vectordb"
PDF_DIR = "data/pdfs"

st.set_page_config(
    page_title="Ostad d l'Almania b Darija",
    page_icon="🇩🇪",
    layout="wide",
    initial_sidebar_state="expanded"
)


# ─── Custom CSS ───────────────────────────────────────────
st.markdown("""
<style>
    /* Main container styling */
    .main .block-container {
        max-width: 900px;
        padding-top: 2rem;
        padding-bottom: 5rem;
    }
    
    /* Header styling */
    .app-header {
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        padding: 2.5rem 2rem;
        border-radius: 1.5rem;
        border: 1px solid #bbf7d0;
        margin-bottom: 2.5rem;
        text-align: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    /* Dark mode support for header */
    @media (prefers-color-scheme: dark) {
        .app-header {
            background: linear-gradient(135deg, #064e3b 0%, #14532d 100%);
            border: 1px solid #166534;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        }
    }
    
    .source-tag { 
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        background: rgba(34, 197, 94, 0.1); 
        color: #16a34a;
        padding: 0.25rem 0.75rem; 
        border-radius: 9999px; 
        font-size: 0.75rem; 
        font-weight: 600;
        margin: 0.25rem; 
        border: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    @media (prefers-color-scheme: dark) {
        .source-tag {
            color: #4ade80;
            background: rgba(74, 222, 128, 0.1);
            border: 1px solid rgba(74, 222, 128, 0.2);
        }
    }
    
    .stat-card {
        background-color: var(--secondary-background-color);
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid var(--border-color);
        text-align: center;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }
    
    .stat-value {
        font-size: 1.75rem;
        font-weight: 800;
        color: #16a34a;
    }
    
    @media (prefers-color-scheme: dark) {
        .stat-value {
            color: #4ade80;
        }
    }
    
    .stat-label {
        font-size: 0.875rem;
        color: var(--text-color);
        opacity: 0.8;
        margin-top: 0.25rem;
        font-weight: 500;
    }

    /* Chat Input Styling */
    .stChatInputContainer {
        padding-bottom: 1rem;
    }
    .stChatInputContainer > div {
        border-radius: 1.5rem;
        border: 1px solid var(--border-color);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        background-color: var(--secondary-background-color);
        transition: all 0.3s ease;
    }
    .stChatInputContainer > div:focus-within {
        border-color: #16a34a;
        box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.2), 0 4px 6px -2px rgba(22, 163, 74, 0.1);
    }

    /* Chat Messages Bubbles */
    div[data-testid="stChatMessage"] {
        background-color: transparent;
        padding: 0;
        border: none;
        gap: 1rem;
    }
    div[data-testid="stChatMessage"] .st-emotion-cache-1c7y2kd {
        /* User avatar container */
    }
    div[data-testid="chatAvatarIcon-user"] {
        background-color: #3b82f6;
    }
    div[data-testid="chatAvatarIcon-assistant"] {
        background-color: #16a34a;
    }
    .stChatMessageContent {
        background-color: var(--secondary-background-color);
        padding: 1rem 1.25rem;
        border-radius: 1.25rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid var(--border-color);
        width: fit-content;
        max-width: 85%;
    }
</style>
""", unsafe_allow_html=True)


# ─── Initialize ──────────────────────────────────────────
@st.cache_resource
def load_store():
    return VectorStore(persist_dir=VECTOR_DB_DIR)


@st.cache_resource
def load_teacher(_store):
    return DarijaGermanTeacher(_store)


store = load_store()
teacher = load_teacher(store)


# ─── Sidebar ─────────────────────────────────────────────
with st.sidebar:
    st.image("https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800", use_container_width=True)
    st.markdown("### ⚙️ I3dadat (Settings)")
    
    # Stats
    stats = store.get_stats()
    
    col1, col2 = st.columns(2)
    with col1:
        st.markdown(f'<div class="stat-card"><div class="stat-value">{stats["total_chunks"]}</div><div class="stat-label">Chunks</div></div>', unsafe_allow_html=True)
    with col2:
        st.markdown(f'<div class="stat-card"><div class="stat-value">{stats["num_sources"]}</div><div class="stat-label">PDFs</div></div>', unsafe_allow_html=True)
    
    st.write("")
    if stats["sources"]:
        with st.expander("📚 Maraji3 (Sources)"):
            for src in stats["sources"]:
                st.caption(f"• {src}")
    
    st.divider()
    
    # Upload new PDFs
    st.markdown("### 📄 Zid PDF (Add Source)")
    uploaded = st.file_uploader("Dir upload l'PDF b l'Almania", type=["pdf"], label_visibility="collapsed")
    if uploaded:
        pdf_path = Path(PDF_DIR) / uploaded.name
        pdf_path.parent.mkdir(parents=True, exist_ok=True)
        pdf_path.write_bytes(uploaded.getvalue())
        
        with st.spinner(f"Kay9ra {uploaded.name}..."):
            chunks = process_pdf(str(pdf_path))
            store.add_chunks(chunks)
        
        st.success(f"✅ Zidna {len(chunks)} chunks mn {uploaded.name}")
        st.rerun()
    
    st.divider()

    # Model info
    st.markdown("### 🧠 AI Settings")
    st.caption("**Model:** Atlas-Chat-9B (4-bit)")
    top_k = st.slider("🔍 Context chunks", min_value=2, max_value=10, value=5, help="Ch7al mn context ysta3mel l'AI")
    
    st.divider()
    
    if st.button("🗑️ Ms7 l'Hdra (Clear Chat)", use_container_width=True, type="primary"):
        teacher.clear_history()
        st.session_state.messages = []
        st.rerun()


# ─── Main Chat ───────────────────────────────────────────
st.markdown("""
<div class="app-header">
    <h1 style="margin-bottom: 0.5rem; font-size: 2.5rem; font-weight: 900; letter-spacing: -0.025em;">🇩🇪🇲🇦 Ostad d l'Almania b Darija</h1>
    <p style="font-size: 1.1rem; opacity: 0.8; margin: 0; font-weight: 500;">Swwel ay so'al 3la l'Almania o ana n'chre7lek b Darija!</p>
</div>
""", unsafe_allow_html=True)

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "assistant", 
            "content": "Marhba bik! Ana Ostad dyalk d l'Almania. Swwelni 3la l'9awa3id, l'mofradat wlla ay 7aja bghiti t3refha 3la l'Almania.", 
            "sources": []
        }
    ]

# Display chat history
for msg in st.session_state.messages:
    with st.chat_message(msg["role"], avatar="🧑‍🎓" if msg["role"] == "user" else "👨‍🏫"):
        st.markdown(msg["content"])
        if msg.get("sources"):
            with st.expander("📚 Maraji3 (Sources Context)"):
                for s in msg["sources"]:
                    st.markdown(
                        f'<span class="source-tag">📄 {s["source"]} (Saf7a {s["page"]}) - Score: {s["score"]}</span>',
                        unsafe_allow_html=True,
                    )

# Chat input
if prompt := st.chat_input("Swwel so'al dyalk hna... (matal: Kifach n'kowwen jomla b l'Almania?)"):
    # Check if DB is populated
    if stats["total_chunks"] == 0:
        st.warning("⚠️ Ma kayn ta document f database. Dir upload l'PDF b3da mn sidebar!")
        st.stop()
    
    # Display user message
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user", avatar="🧑‍🎓"):
        st.markdown(prompt)
    
    # Generate response
    with st.chat_message("assistant", avatar="👨‍🏫"):
        with st.spinner("Kayfkkr... 🤔"):
            result = teacher.ask(prompt, top_k=top_k)
        
        st.markdown(result["answer"])
        
        # Show sources
        if result.get("sources"):
            with st.expander("📚 Maraji3 (Sources Context)"):
                for s in result["sources"]:
                    st.markdown(
                        f'<span class="source-tag">📄 {s["source"]} (Saf7a {s["page"]}) - Score: {s["score"]}</span>',
                        unsafe_allow_html=True,
                    )
    
    # Save to history
    st.session_state.messages.append({
        "role": "assistant",
        "content": result["answer"],
        "sources": result.get("sources", []),
    })
