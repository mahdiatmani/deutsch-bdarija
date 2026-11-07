import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { prismaMock, resetPrismaMock } from './prisma-mock';

vi.mock('../src/lib/prisma', () => ({ default: prismaMock, prisma: prismaMock }));

import { BOX_DAYS, addLessonWords, reviewCounts, stageOfBox, updateWordBoxes } from '../src/lib/word-review';
import { gameBank } from '../src/data/games';

const DAY_MS = 24 * 60 * 60 * 1000;
const NOW = new Date(2026, 4, 20, 12, 0, 0);
const inDays = (n: number) => new Date(NOW.getTime() + n * DAY_MS);

// Real curriculum words, so the tests also notice if the word bank stops building
const bank = gameBank().words;
const noun = bank.find(w => w.noun && w.plural)!;
const [wordA, wordB] = bank.filter(w => w.lessonId !== noun.lessonId);

/** What updateWordBoxes would write, per word */
const upserts = () =>
  Object.fromEntries(prismaMock.gameWord.upsert.mock.calls.map(([args]) => [args.where.userId_word.word, args]));

const stored = (word: string, box: number, dueAt: Date) => ({ userId: 'u1', word, box, dueAt, correct: 0, wrong: 0 });

beforeEach(() => {
  resetPrismaMock();
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
  prismaMock.gameWord.findMany.mockResolvedValue([]);
});
afterEach(() => vi.useRealTimers());

it('builds a word bank from the curriculum', () => {
  expect(bank.length).toBeGreaterThan(100);
  expect(noun.article).toMatch(/^(der|die|das)$/);
  expect(wordA && wordB).toBeTruthy();
});

describe('updateWordBoxes', () => {
  it('ignores words that are not in the curriculum', async () => {
    await updateWordBoxes('u1', [{ word: 'das Raumschiff-xyz', correct: true }]);
    expect(prismaMock.gameWord.findMany).not.toHaveBeenCalled();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it('puts a new word answered right into box 1 (back tomorrow)', async () => {
    await updateWordBoxes('u1', [{ word: wordA.de, correct: true }]);
    const w = upserts()[wordA.de];
    expect(w.create).toMatchObject({ box: 1, dueAt: inDays(1), correct: 1, wrong: 0 });
    expect(w.update).toMatchObject({ box: 1, correct: { increment: 1 } });
  });

  it('puts a word answered wrong into box 0, due right away', async () => {
    await updateWordBoxes('u1', [{ word: wordA.de, correct: false }]);
    expect(upserts()[wordA.de].update).toMatchObject({ box: 0, dueAt: NOW, wrong: { increment: 1 } });
  });

  it('moves a due word up one box and waits that box’s interval', async () => {
    prismaMock.gameWord.findMany.mockResolvedValue([stored(wordA.de, 2, inDays(-1))]);
    await updateWordBoxes('u1', [{ word: wordA.de, correct: true }]);
    expect(upserts()[wordA.de].update).toMatchObject({ box: 3, dueAt: inDays(BOX_DAYS[3]) });
  });

  it('does not go past the last box', async () => {
    const last = BOX_DAYS.length - 1;
    prismaMock.gameWord.findMany.mockResolvedValue([stored(wordA.de, last, inDays(-1))]);
    await updateWordBoxes('u1', [{ word: wordA.de, correct: true }]);
    expect(upserts()[wordA.de].update).toMatchObject({ box: last, dueAt: inDays(BOX_DAYS[last]) });
  });

  it('does not let cramming skip intervals: a right answer before the due date changes nothing', async () => {
    const due = inDays(3);
    prismaMock.gameWord.findMany.mockResolvedValue([stored(wordA.de, 3, due)]);
    await updateWordBoxes('u1', [{ word: wordA.de, correct: true }]);
    expect(upserts()[wordA.de].update).toMatchObject({ box: 3, dueAt: due });
  });

  it('sends a word that is not due back to box 0 on a mistake', async () => {
    prismaMock.gameWord.findMany.mockResolvedValue([stored(wordA.de, 4, inDays(5))]);
    await updateWordBoxes('u1', [{ word: wordA.de, correct: false }]);
    expect(upserts()[wordA.de].update).toMatchObject({ box: 0, dueAt: NOW });
  });

  it('counts a word as wrong if any answer to it in the round was wrong', async () => {
    await updateWordBoxes('u1', [
      { word: wordA.de, correct: false },
      { word: wordA.de, correct: true },
      { word: wordB.de, correct: true },
      { word: wordB.de, correct: true },
    ]);
    const all = upserts();
    expect(prismaMock.gameWord.upsert).toHaveBeenCalledTimes(2);
    expect(all[wordA.de].update.box).toBe(0);
    expect(all[wordB.de].update.box).toBe(1);
  });
});

describe('addLessonWords', () => {
  const lessonWords = bank.filter(w => w.lessonId === noun.lessonId);
  const translateStep = (answer: string) => ({ type: 'exercise', exercise: { kind: 'translate', accept: [answer] } });
  const content = (...steps: unknown[]) => JSON.stringify({ steps });
  const missedWords = () => prismaMock.gameWord.update.mock.calls.map(([args]) => args.where.userId_word.word);

  beforeEach(() => {
    prismaMock.gameWord.createMany.mockResolvedValue({ count: lessonWords.length });
  });

  it('adds every word of the lesson, first review tomorrow', async () => {
    const result = await addLessonWords('u1', noun.lessonId, content());
    const { data, skipDuplicates } = prismaMock.gameWord.createMany.mock.calls[0][0];
    const tomorrow = new Date(2026, 4, 21);
    expect(skipDuplicates).toBe(true);
    expect(data.map((d: any) => d.word).sort()).toEqual(lessonWords.map(w => w.de).sort());
    expect(data.every((d: any) => d.box === 1 && d.dueAt.getTime() === tomorrow.getTime())).toBe(true);
    expect(result).toEqual({ added: lessonWords.length, missed: 0 });
  });

  it('does nothing for a lesson without words', async () => {
    expect(await addLessonWords('u1', 'no-such-lesson', content())).toEqual({ added: 0, missed: 0 });
    expect(prismaMock.gameWord.createMany).not.toHaveBeenCalled();
  });

  it('brings back right away the words of exercises the learner got wrong', async () => {
    await addLessonWords('u1', noun.lessonId, content({ type: 'text' }, translateStep(`Das ist ${noun.de}.`)), [1]);
    expect(missedWords()).toContain(noun.de);
    expect(prismaMock.gameWord.update.mock.calls[0][0].data).toMatchObject({ box: 0, dueAt: NOW });
  });

  it('also finds a noun by its plural', async () => {
    await addLessonWords('u1', noun.lessonId, content(translateStep(`Wo sind die ${noun.plural}?`)), [0]);
    expect(missedWords()).toContain(noun.de);
  });

  it('matches whole words only', async () => {
    await addLessonWords('u1', noun.lessonId, content(translateStep(`${noun.noun}xyzqq`)), [0]);
    expect(missedWords()).not.toContain(noun.de);
  });

  it('ignores exercises the learner got right and steps that are not exercises', async () => {
    await addLessonWords('u1', noun.lessonId, content(translateStep(noun.de), { type: 'text', text: noun.de }), [1]);
    expect(prismaMock.gameWord.update).not.toHaveBeenCalled();
  });

  it('survives lesson content that is not valid JSON', async () => {
    expect(await addLessonWords('u1', noun.lessonId, '{broken', [0])).toEqual({ added: lessonWords.length, missed: 0 });
  });
});

describe('reviewCounts', () => {
  it('groups the boxes into stages', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map(stageOfBox)).toEqual(['new', 'new', 'learning', 'learning', 'known', 'known', 'mastered']);
  });

  it('counts due words, tomorrow’s words and words per stage', async () => {
    prismaMock.gameWord.count.mockResolvedValueOnce(4).mockResolvedValueOnce(2);
    prismaMock.gameWord.groupBy.mockResolvedValue([
      { box: 0, _count: { _all: 3 } },
      { box: 1, _count: { _all: 5 } },
      { box: 3, _count: { _all: 2 } },
      { box: 6, _count: { _all: 1 } },
    ]);
    expect(await reviewCounts('u1')).toEqual({
      due: 4,
      tomorrow: 2,
      total: 11,
      stages: { new: 8, learning: 2, known: 0, mastered: 1 },
    });
  });
});
