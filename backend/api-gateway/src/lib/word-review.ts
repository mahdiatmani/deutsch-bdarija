/**
 * Spaced repetition (Leitner boxes) of the curriculum vocabulary. Words enter the
 * queue from finished lessons and from game rounds; the review game works through it.
 */
import prisma from './prisma';
import { gameBank, type BankWord } from '../data/games';

const DAY_MS = 24 * 60 * 60 * 1000;
/** Days until a word comes back, per Leitner box (box 0 = right away) */
export const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];

const startOfDay = (offsetDays = 0) => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offsetDays);
  return d;
};

/** Leitner boxes: a right answer moves a word up (longer gap), a wrong one back to box 0 */
export async function updateWordBoxes(userId: string, answers: { word: string; correct: boolean }[]) {
  const known = new Set(gameBank().words.map(w => w.de));
  // Last answer per word wins, but one mistake in the round is enough to review it again
  const results = new Map<string, boolean>();
  for (const a of answers) {
    if (!known.has(a.word)) continue;
    results.set(a.word, (results.get(a.word) ?? true) && a.correct);
  }
  if (!results.size) return;

  const words = [...results.keys()];
  const existing = await prisma.gameWord.findMany({ where: { userId, word: { in: words } } });
  const boxes = new Map(existing.map(e => [e.word, e]));
  const now = Date.now();

  await prisma.$transaction(
    words.map(word => {
      const right = results.get(word)!;
      const current = boxes.get(word);
      // A word that is not due yet only moves down on a mistake, so cramming does not skip intervals
      const due = !current || current.dueAt.getTime() <= now;
      const box = right ? (due ? Math.min((current?.box ?? 0) + 1, BOX_DAYS.length - 1) : current!.box) : 0;
      const dueAt = right && !due ? current!.dueAt : new Date(now + BOX_DAYS[box] * DAY_MS);
      return prisma.gameWord.upsert({
        where: { userId_word: { userId, word } },
        create: { userId, word, box, dueAt, correct: right ? 1 : 0, wrong: right ? 0 : 1 },
        update: { box, dueAt, ...(right ? { correct: { increment: 1 } } : { wrong: { increment: 1 } }) },
      });
    })
  );
}

/** Lowercase, no punctuation, single spaces, padded so " word " matches whole words only */
const normalize = (text: string) =>
  ` ${text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim()} `;

/** The German text of an exercise's correct solution, where the lesson's words would show up */
function solutionText(exercise: any): string {
  switch (exercise?.kind) {
    case 'choice':
      return [exercise.de, exercise.audio, exercise.options?.[exercise.answer]].filter(Boolean).join(' ');
    case 'gap': {
      let gap = 0;
      return String(exercise.text ?? '').replace(/_{3,}/g, () => exercise.answers?.[gap++]?.[0] ?? '');
    }
    case 'order':
      return exercise.accept?.[0] ?? (exercise.words ?? []).join(' ');
    case 'match':
      return (exercise.pairs ?? []).flat().join(' ');
    case 'translate':
      return exercise.accept?.[0] ?? '';
    case 'dictation':
      return exercise.accept?.[0] ?? exercise.audio ?? '';
    default:
      return '';
  }
}

/** Words of `words` that appear in the solution of an exercise the learner got wrong */
function missedWords(rawContent: string, missedSteps: number[], words: BankWord[]): BankWord[] {
  let steps: any[] = [];
  try {
    steps = JSON.parse(rawContent)?.steps ?? [];
  } catch {
    return [];
  }
  const text = normalize(
    [...new Set(missedSteps)]
      .map(i => steps[i])
      .filter(s => s?.type === 'exercise')
      .map(s => solutionText(s.exercise))
      .join(' ')
  );
  if (text.trim() === '') return [];
  return words.filter(w =>
    [w.de, w.noun, w.plural && `die ${w.plural}`, w.plural].some(form => form && text.includes(normalize(form)))
  );
}

/**
 * After a lesson: its new words join the review queue (first review tomorrow), and
 * words from exercises the learner got wrong come back right away.
 */
export async function addLessonWords(userId: string, lessonId: string, rawContent: string, missedSteps: number[] = []) {
  const words = gameBank().words.filter(w => w.lessonId === lessonId);
  if (!words.length) return { added: 0, missed: 0 };

  const { count: added } = await prisma.gameWord.createMany({
    data: words.map(w => ({ userId, word: w.de, box: 1, dueAt: startOfDay(1) })),
    skipDuplicates: true,
  });

  const missed = missedWords(rawContent, missedSteps, words);
  if (missed.length) {
    const now = new Date();
    await prisma.$transaction(
      missed.map(w =>
        prisma.gameWord.update({
          where: { userId_word: { userId, word: w.de } },
          data: { box: 0, dueAt: now, wrong: { increment: 1 } },
        })
      )
    );
  }
  return { added, missed: missed.length };
}

/**
 * How well the learner knows their words, from the Leitner box:
 * new (0-1, back within a day), learning (2-3), known (4-5), mastered (last box).
 */
export type WordStage = 'new' | 'learning' | 'known' | 'mastered';
export const stageOfBox = (box: number): WordStage =>
  box <= 1 ? 'new' : box <= 3 ? 'learning' : box < BOX_DAYS.length - 1 ? 'known' : 'mastered';

/** Words due now, how many come back tomorrow, and how many words are at each stage */
export async function reviewCounts(userId: string) {
  const now = new Date();
  const [due, tomorrow, boxes] = await Promise.all([
    prisma.gameWord.count({ where: { userId, dueAt: { lte: now } } }),
    prisma.gameWord.count({ where: { userId, dueAt: { gte: startOfDay(1), lt: startOfDay(2) } } }),
    prisma.gameWord.groupBy({ by: ['box'], where: { userId }, _count: { _all: true } }),
  ]);
  const stages: Record<WordStage, number> = { new: 0, learning: 0, known: 0, mastered: 0 };
  let total = 0;
  for (const { box, _count } of boxes) {
    stages[stageOfBox(box)] += _count._all;
    total += _count._all;
  }
  return { due, tomorrow, total, stages };
}
