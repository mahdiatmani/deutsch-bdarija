/**
 * Every audio clip the lesson player can request: the same texts, voices and speeds as
 * frontend/components/lesson (teaching-step, exercise-view, speak-task).
 * Run on its own to print a summary: npx ts-node --transpile-only scripts/lesson-clips.ts
 */
import { curriculum } from '../src/data/curriculum';
import { castVoices, NARRATOR_VOICE, VOICES } from '../../../frontend/lib/character-voices';

export interface Clip {
  text: string;
  voice: string;
  rate: number;
}

const NORMAL = 0.9;
const SLOW = 0.65;

export function lessonClips(): Clip[] {
  const clips = new Map<string, Clip>();
  const add = (text: string | undefined, voice = NARRATOR_VOICE, rate = NORMAL) => {
    const clean = text?.replace(/\s+/g, ' ').trim();
    if (clean) clips.set(`${voice}|${rate}|${clean}`, { text: clean, voice, rate });
  };

  for (const unit of curriculum) {
    for (const lesson of unit.lessons) {
      for (const step of lesson.content.steps) {
        switch (step.type) {
          case 'vocab':
            step.words.forEach(w => { add(w.de); add(w.example?.de); });
            break;
          case 'dialogue':
          case 'listening': {
            const voices = castVoices(step.lines.map(l => l.speaker));
            step.lines.forEach(l => add(l.de, voices[l.speaker]));
            break;
          }
          case 'reading':
            step.de.split(/\n\s*\n/).forEach(p => add(p));
            break;
          case 'explain':
            step.examples?.forEach(e => add(e.de));
            break;
          case 'pron':
            step.items.forEach(i => { add(i.de); add(i.de, NARRATOR_VOICE, SLOW); });
            break;
          case 'speak':
            step.model.forEach(m => { add(m); add(m, NARRATOR_VOICE, SLOW); });
            break;
          case 'exercise': {
            const ex = step.exercise;
            if (ex.kind === 'choice') add(ex.de);
            if ((ex.kind === 'choice' || ex.kind === 'dictation') && ex.audio) {
              add(ex.audio);
              add(ex.audio, NARRATOR_VOICE, SLOW);
            }
            break;
          }
        }
      }
    }
  }
  return [...clips.values()];
}

/** What the voice actually reads: on-screen formatting turned into speakable German */
export function spokenText(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/[★☆]{5}/g, stars => `${[...stars].filter(s => s === '★').length} von 5 Sternen.`)
    .replace(/\s*\(m\/w\/d\)/g, '')
    .replace(/\beine\/n\b/g, 'eine')
    .replace(/([a-zäöüß])\/in\b/g, '$1in')
    .replace(/ \| /g, ' ')
    .replace(/ \/ /g, ', ')
    .replace(/([A-Za-zÄÖÜäöüß0-9])\/([A-Za-zÄÖÜäöüß])/g, '$1 oder $2')
    .replace(/(\w)_(\w)/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Neural voice name for a voice id */
export const neuralVoice = (voice: string) => (VOICES[voice] ?? VOICES[NARRATOR_VOICE]).neural;

if (require.main === module) {
  const clips = lessonClips();
  const chars = clips.reduce((n, c) => n + c.text.length, 0);
  const byVoice = clips.reduce<Record<string, number>>((acc, c) => ({ ...acc, [c.voice]: (acc[c.voice] ?? 0) + 1 }), {});
  console.log(`${clips.length} clips, ${chars} characters`);
  console.log(byVoice);
}
