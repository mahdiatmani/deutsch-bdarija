#!/usr/bin/env python3
"""
Simple CLI chat interface for the Darija German Teacher.
Usage: python chat.py
"""

from rag_core.vector_store import VectorStore
from rag_core.rag_chain import DarijaGermanTeacher


def main():
    print("=" * 50)
    print("🇩🇪🇲🇦 أستاذ الألمانية بالدارجة — CLI Chat")
    print("=" * 50)

    store = VectorStore(persist_dir="data/vectordb")
    stats = store.get_stats()

    if stats["total_chunks"] == 0:
        print("\n⚠️  No documents! Run: python ingest.py")
        return

    print(f"📦 {stats['total_chunks']} chunks from {stats['num_sources']} source(s)")
    teacher = DarijaGermanTeacher(store)

    print("\nسول سؤالك بالدارجة! (type 'quit' to exit)\n")

    while True:
        try:
            question = input("🧑‍🎓 أنت: ").strip()
        except (EOFError, KeyboardInterrupt):
            break

        if not question or question.lower() in ("quit", "exit", "q"):
            break

        print("\n👨‍🏫 الأستاذ: ", end="", flush=True)
        result = teacher.ask(question)
        print(result["answer"])

        if result["sources"]:
            sources = ", ".join(f'{s["source"]} p.{s["page"]}' for s in result["sources"][:3])
            print(f"\n   📚 Sources: {sources}")
        print()

    print("\nبسلامة! Tschüss! 👋")


if __name__ == "__main__":
    main()
