/**
 * Small builders that keep the lesson files readable: tuples in, typed steps out.
 * Exercises are practice items unless wrapped in `graded(...)`.
 */
import type { Example, Exercise, LessonContent, LessonDef, LessonKind, Level, Step, UnitDef, Word } from './types';

type Pair = [string, string];

const toExample = ([de, dar]: Pair): Example => ({ de, dar });

/** "der Bahnhof", "lagar", "die Bahnhöfe", ["Wo ist der Bahnhof?", "Fin kayn lagar?"] */
export type WordTuple = [string, string] | [string, string, string] | [string, string, string, Pair];

/**
 * Markdown in an indented template literal: removes the common indentation
 * (otherwise Markdown would render indented lines as code blocks).
 */
export const md = (strings: TemplateStringsArray, ...values: unknown[]): string => {
  const raw = strings.reduce((acc, s, i) => acc + s + (i < values.length ? String(values[i]) : ''), '');
  const lines = raw.replace(/^\s*\n/, '').replace(/\n\s*$/, '').split('\n');
  const indents = lines.filter(l => l.trim()).map(l => l.match(/^ */)![0].length);
  const indent = indents.length ? Math.min(...indents) : 0;
  return lines.map(l => l.slice(indent)).join('\n');
};

// ---------- teaching steps ----------

export const intro = (title: string, text: string, goals: string[]): Step => ({ type: 'intro', title, text, goals });

export const vocab = (title: string, words: WordTuple[], text?: string): Step => ({
  type: 'vocab',
  title,
  text,
  words: words.map(([de, dar, plural, example]): Word => ({
    de,
    dar,
    ...(plural ? { plural } : {}),
    ...(example ? { example: toExample(example) } : {}),
  })),
});

const toLines = (lines: [string, string, string][]) => lines.map(([speaker, de, dar]) => ({ speaker, de, dar }));

export const dialogue = (title: string, lines: [string, string, string][], text?: string): Step => ({
  type: 'dialogue',
  title,
  text,
  lines: toLines(lines),
});

export const listening = (title: string, lines: [string, string, string][], text?: string): Step => ({
  type: 'listening',
  title,
  text,
  lines: toLines(lines),
});

export const reading = (
  title: string,
  de: string,
  opts: { text?: string; dar?: string; glossary?: Pair[] } = {}
): Step => ({
  type: 'reading',
  title,
  de,
  ...(opts.text ? { text: opts.text } : {}),
  ...(opts.dar ? { dar: opts.dar } : {}),
  ...(opts.glossary ? { glossary: opts.glossary.map(toExample) } : {}),
});

export const explain = (title: string, text: string, examples?: Pair[], tip?: string): Step => ({
  type: 'explain',
  title,
  text,
  ...(examples ? { examples: examples.map(toExample) } : {}),
  ...(tip ? { tip } : {}),
});

export const pron = (title: string, text: string, items: Pair[]): Step => ({
  type: 'pron',
  title,
  text,
  items: items.map(toExample),
});

export const culture = (title: string, text: string): Step => ({ type: 'culture', title, text });

export const speak = (title: string, text: string, model: string | string[]): Step => ({
  type: 'speak',
  title,
  text,
  model: Array.isArray(model) ? model : [model],
});

export const write = (title: string, text: string, points: string[], model: string, minWords = 25): Step => ({
  type: 'write',
  title,
  text,
  points,
  model,
  minWords,
});

export const summary = (points: string[], canDo: string[], title = 'Khlasa dyal d-ders'): Step => ({
  type: 'summary',
  title,
  points,
  canDo,
});

// ---------- exercises ----------

const practice = (exercise: Exercise): Step => ({ type: 'exercise', graded: false, exercise });

/** Marks an exercise as part of the lesson test: one attempt, counted in the score */
export const graded = (step: Step): Step => {
  if (step.type !== 'exercise') throw new Error('graded() only wraps exercises');
  return { ...step, graded: true };
};

export const choice = (
  prompt: string,
  options: string[],
  answer: number,
  why?: string,
  extra: { de?: string; audio?: string } = {}
): Step => practice({ kind: 'choice', prompt, options, answer, ...(why ? { why } : {}), ...extra });

/** answers: one entry per "___"; alternatives separated by "|" */
export const gap = (prompt: string, text: string, answers: string | string[], why?: string, dar?: string): Step =>
  practice({
    kind: 'gap',
    prompt,
    text,
    answers: (Array.isArray(answers) ? answers : [answers]).map(a => a.split('|').map(s => s.trim())),
    ...(why ? { why } : {}),
    ...(dar ? { dar } : {}),
  });

/** The sentence is split into tiles at spaces; final punctuation is not a tile */
export const order = (prompt: string, sentence: string, why?: string, opts: { dar?: string; accept?: string[] } = {}): Step => {
  const words = sentence.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean);
  return practice({
    kind: 'order',
    prompt,
    words,
    accept: [sentence, ...(opts.accept ?? [])],
    ...(opts.dar ? { dar: opts.dar } : {}),
    ...(why ? { why } : {}),
  });
};

export const match = (prompt: string, pairs: Pair[], why?: string): Step =>
  practice({ kind: 'match', prompt, pairs, ...(why ? { why } : {}) });

export const translate = (prompt: string, source: string, accept: string | string[], why?: string): Step =>
  practice({ kind: 'translate', prompt, source, accept: Array.isArray(accept) ? accept : [accept], ...(why ? { why } : {}) });

export const dictation = (prompt: string, audio: string, why?: string, accept: string[] = []): Step =>
  practice({ kind: 'dictation', prompt, audio, accept: [audio, ...accept], ...(why ? { why } : {}) });

// ---------- lessons & units ----------

export interface LessonInput {
  title: string;
  description: string;
  minutes: number;
  kind: LessonKind;
  goals: string[];
  steps: Step[];
}

export interface UnitInput {
  level: Level;
  number: number;
  title: string;
  description: string;
  icon: string;
  objectives: string[];
  lessons: LessonInput[];
}

const LEVEL_COLORS: Record<Level, string> = { A1: '#06a75f', A2: '#0e7490', B1: '#c2410c', B2: '#7c3aed' };

export const unit = (input: UnitInput): UnitDef => {
  const id = `${input.level.toLowerCase()}-u${String(input.number).padStart(2, '0')}`;
  return {
    id,
    level: input.level,
    number: input.number,
    title: input.title,
    description: input.description,
    icon: input.icon,
    color: LEVEL_COLORS[input.level],
    objectives: input.objectives,
    lessons: input.lessons.map((l, i): LessonDef => {
      const content: LessonContent = { version: 2, kind: l.kind, goals: l.goals, steps: l.steps };
      return { id: `${id}-l${i + 1}`, title: l.title, description: l.description, minutes: l.minutes, content };
    }),
  };
};
