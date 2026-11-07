"""
Synthesizes a batch of lesson clips with Microsoft's neural voices (edge-tts).
Called by generate-lesson-audio.ts; not meant to be run by hand.

    python edge_tts_batch.py <manifest.json> <out dir>

manifest: [{"id": "...", "text": "...", "voice": "de-DE-KatjaNeural", "rate": "-10%"}, ...]
Writes <out dir>/<id>.mp3 and skips clips that already exist, so an interrupted run resumes.
"""

import asyncio
import json
import sys
from pathlib import Path

import edge_tts

CONCURRENCY = 4
RETRIES = 5


async def synthesize(clip: dict, out_dir: Path, sem: asyncio.Semaphore) -> bool:
    target = out_dir / f"{clip['id']}.mp3"
    if target.exists() and target.stat().st_size > 0:
        return True
    async with sem:
        for attempt in range(RETRIES):
            try:
                part = target.with_suffix(".part")
                await edge_tts.Communicate(clip["text"], clip["voice"], rate=clip["rate"]).save(str(part))
                if part.stat().st_size == 0:
                    raise RuntimeError("empty audio")
                part.replace(target)
                return True
            except Exception as error:  # network hiccups, throttling, "no audio received"
                if attempt == RETRIES - 1:
                    print(f"FAILED {clip['id'][:12]} ({clip['voice']}): {error}: {clip['text'][:60]!r}", flush=True)
                    return False
                await asyncio.sleep(2 ** attempt)
    return False


async def main() -> int:
    manifest = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    sem = asyncio.Semaphore(CONCURRENCY)

    done = failed = 0
    tasks = [asyncio.create_task(synthesize(clip, out_dir, sem)) for clip in manifest]
    for finished in asyncio.as_completed(tasks):
        if await finished:
            done += 1
        else:
            failed += 1
        if (done + failed) % 100 == 0 or done + failed == len(tasks):
            print(f"{done + failed}/{len(tasks)} clips ({failed} failed)", flush=True)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
