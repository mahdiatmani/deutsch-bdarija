/**
 * Generates the neural audio of every lesson text once and stores it in the LessonAudio
 * table, where /api/tts serves it from. Only clips that are not stored yet are generated,
 * so run it again after adding or changing lessons; clips no lesson uses any more are removed.
 *
 *   npx ts-node --transpile-only scripts/generate-lesson-audio.ts           generate missing clips
 *   npx ts-node --transpile-only scripts/generate-lesson-audio.ts --check   only report what is missing
 *
 * Needs Python with edge-tts (see command.md): scripts/.venv, or EDGE_TTS_PYTHON=<python>.
 */
import 'dotenv/config';
import { spawnSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { lessonAudioId } from '../src/lib/lesson-audio';
import { lessonClips, neuralVoice, spokenText } from './lesson-clips';

const prisma = new PrismaClient();
const WORK_DIR = path.join(os.tmpdir(), 'lesson-audio');
const MP3_BYTES_PER_SECOND = 48_000 / 8; // edge-tts default: 48 kbit/s mono

function python(): string {
  if (process.env.EDGE_TTS_PYTHON) return process.env.EDGE_TTS_PYTHON;
  const venv = [
    path.join(__dirname, '.venv', 'Scripts', 'python.exe'),
    path.join(__dirname, '.venv', 'bin', 'python'),
  ].find(p => fs.existsSync(p));
  return venv ?? 'python';
}

/** A plausible MP3 whose length fits the text (catches truncated or silent clips) */
function looksRight(audio: Buffer, text: string, rate: number): string | null {
  const header = audio[0] === 0x49 && audio[1] === 0x44 && audio[2] === 0x33; // "ID3"
  const frame = audio[0] === 0xff && (audio[1] & 0xe0) === 0xe0;
  if (!header && !frame) return 'not an MP3';
  const seconds = audio.length / MP3_BYTES_PER_SECOND;
  // Digits are read as whole words ("0176" → "null eins sieben sechs"), so they count extra
  const spoken = spokenText(text);
  const charsPerSecond = (spoken.length + 4 * (spoken.match(/\d/g)?.length ?? 0)) / seconds;
  if (seconds < 0.3) return `only ${seconds.toFixed(2)}s`;
  if (charsPerSecond > 30 * rate) return `too short for the text (${seconds.toFixed(1)}s)`;
  if (text.length > 20 && charsPerSecond < 4 * rate) return `too long for the text (${seconds.toFixed(1)}s)`;
  return null;
}

async function main() {
  const checkOnly = process.argv.includes('--check');
  const clips = lessonClips().map(c => ({ ...c, id: lessonAudioId(c.text, c.voice, c.rate) }));
  const wanted = new Set(clips.map(c => c.id));
  const stored = new Set((await prisma.lessonAudio.findMany({ select: { id: true } })).map(r => r.id));
  const missing = clips.filter(c => !stored.has(c.id));
  const unused = [...stored].filter(id => !wanted.has(id));

  console.log(`${clips.length} lesson clips: ${clips.length - missing.length} stored, ${missing.length} missing, ${unused.length} unused`);
  if (checkOnly) return;

  if (unused.length) {
    await prisma.lessonAudio.deleteMany({ where: { id: { in: unused } } });
    console.log(`Removed ${unused.length} clips no lesson uses any more`);
  }
  if (!missing.length) return;

  fs.mkdirSync(WORK_DIR, { recursive: true });
  const manifest = path.join(WORK_DIR, 'manifest.json');
  fs.writeFileSync(manifest, JSON.stringify(missing.map(c => ({
    id: c.id,
    text: spokenText(c.text),
    voice: neuralVoice(c.voice),
    rate: `${Math.round((c.rate - 1) * 100)}%`,
  }))));

  console.log(`Generating ${missing.length} clips with ${python()} ...`);
  const run = spawnSync(python(), [path.join(__dirname, 'edge_tts_batch.py'), manifest, WORK_DIR], { stdio: 'inherit' });
  if (run.error) throw new Error(`Could not run Python (${run.error.message}); see command.md`);

  let saved = 0;
  const problems: string[] = [];
  for (const clip of missing) {
    const file = path.join(WORK_DIR, `${clip.id}.mp3`);
    if (!fs.existsSync(file)) continue;
    const audio = fs.readFileSync(file);
    const problem = looksRight(audio, clip.text, clip.rate);
    if (problem) {
      problems.push(`${clip.voice} ${clip.rate}: ${problem}: ${clip.text.slice(0, 70)}`);
      fs.unlinkSync(file); // regenerated on the next run
      continue;
    }
    await prisma.lessonAudio.upsert({
      where: { id: clip.id },
      create: { id: clip.id, voice: clip.voice, rate: clip.rate, text: clip.text, audio },
      update: {},
    });
    fs.unlinkSync(file);
    saved++;
  }

  console.log(`Stored ${saved} new clips; ${missing.length - saved} still missing`);
  if (problems.length) console.log(`Rejected ${problems.length} suspicious clips:\n  ${problems.join('\n  ')}`);
  if (saved < missing.length) process.exitCode = 1;
}

main()
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
