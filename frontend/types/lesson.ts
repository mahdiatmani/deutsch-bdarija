/**
 * Lesson content (version 2). Mirrors backend/api-gateway/src/data/curriculum/types.ts.
 */

export type LessonKind = 'input' | 'grammar' | 'skills' | 'review' | 'exam'

export interface Example {
  de: string
  dar: string
}

export interface Word {
  de: string
  dar: string
  plural?: string
  example?: Example
}

export interface DialogueLine {
  speaker: string
  de: string
  dar: string
}

export type Exercise =
  | { kind: 'choice'; prompt: string; de?: string; audio?: string; options: string[]; answer: number; why?: string }
  | { kind: 'gap'; prompt: string; text: string; answers: string[][]; dar?: string; why?: string }
  | { kind: 'order'; prompt: string; words: string[]; accept: string[]; dar?: string; why?: string }
  | { kind: 'match'; prompt: string; pairs: [string, string][]; why?: string }
  | { kind: 'translate'; prompt: string; source: string; accept: string[]; why?: string }
  | { kind: 'dictation'; prompt: string; audio: string; accept: string[]; why?: string }

export type Step =
  | { type: 'intro'; title: string; text: string; goals: string[] }
  | { type: 'vocab'; title: string; text?: string; words: Word[] }
  | { type: 'dialogue'; title: string; text?: string; lines: DialogueLine[] }
  | { type: 'reading'; title: string; text?: string; de: string; dar?: string; glossary?: Example[] }
  | { type: 'listening'; title: string; text?: string; lines: DialogueLine[] }
  | { type: 'explain'; title: string; text: string; examples?: Example[]; tip?: string }
  | { type: 'pron'; title: string; text: string; items: Example[] }
  | { type: 'culture'; title: string; text: string }
  | { type: 'exercise'; graded: boolean; exercise: Exercise }
  | { type: 'speak'; title: string; text: string; model: string[] }
  | { type: 'write'; title: string; text: string; points: string[]; model: string; minWords: number }
  | { type: 'summary'; title: string; points: string[]; canDo: string[] }

export interface LessonContent {
  version: 2
  kind: LessonKind
  goals: string[]
  steps: Step[]
}

/** Result of checking one exercise */
export interface AnswerResult {
  correct: boolean
  /** Accepted, but with a small slip worth pointing out (capital letters, ß, umlauts) */
  note?: 'case' | 'spelling'
  /** What the learner answered, for re-display */
  given: string | string[]
  /** The expected answer to show when wrong */
  expected?: string
}
