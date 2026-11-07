/**
 * Lesson content format (version 2), stored as JSON in Lesson.content.
 *
 * A lesson is an ordered list of steps that follows
 * Introduce → Explain → Demonstrate → Practise → Correct → Reinforce → Apply → Assess → Review
 * (see docs/curriculum.md). The frontend mirrors these types in frontend/types/lesson.ts.
 */

export type Level = 'A1' | 'A2' | 'B1' | 'B2';

/** input = situation & words, grammar, skills = reading/listening/writing, review = unit recap + test, exam = exam training */
export type LessonKind = 'input' | 'grammar' | 'skills' | 'review' | 'exam';

/** A German sentence or phrase with its Darija meaning */
export interface Example {
  de: string;
  dar: string;
}

export interface Word {
  /** With article for nouns: "der Bahnhof" */
  de: string;
  dar: string;
  /** Plural form for nouns: "die Bahnhöfe" ("–" if none) */
  plural?: string;
  example?: Example;
}

export interface DialogueLine {
  speaker: string;
  de: string;
  dar: string;
}

/**
 * Answers are compared case-insensitively, ignoring punctuation and extra spaces;
 * the player still points out capitalisation and ß/umlaut slips.
 */
export type Exercise =
  | {
      kind: 'choice';
      prompt: string;
      /** German text shown above the options */
      de?: string;
      /** German text played as audio (listening item); hidden until answered */
      audio?: string;
      options: string[];
      answer: number;
      why?: string;
    }
  | {
      kind: 'gap';
      prompt: string;
      /** Sentence(s) with one "___" per gap */
      text: string;
      /** Accepted answers per gap */
      answers: string[][];
      /** Darija meaning of the full sentence */
      dar?: string;
      why?: string;
    }
  | {
      kind: 'order';
      prompt: string;
      /** Tiles in the correct order */
      words: string[];
      /** Full sentences accepted (the first is the main solution) */
      accept: string[];
      dar?: string;
      why?: string;
    }
  | {
      kind: 'match';
      prompt: string;
      pairs: [string, string][];
      why?: string;
    }
  | {
      kind: 'translate';
      prompt: string;
      /** Darija sentence to translate into German */
      source: string;
      accept: string[];
      why?: string;
    }
  | {
      kind: 'dictation';
      prompt: string;
      /** Played as audio; the learner types it */
      audio: string;
      accept: string[];
      why?: string;
    };

export type Step =
  | { type: 'intro'; title: string; text: string; goals: string[] }
  | { type: 'vocab'; title: string; text?: string; words: Word[] }
  | { type: 'dialogue'; title: string; text?: string; lines: DialogueLine[] }
  | { type: 'reading'; title: string; text?: string; de: string; dar?: string; glossary?: Example[] }
  /** Like a dialogue, but the transcript stays hidden until the learner asks for it */
  | { type: 'listening'; title: string; text?: string; lines: DialogueLine[] }
  /** text is Markdown (tables allowed) */
  | { type: 'explain'; title: string; text: string; examples?: Example[]; tip?: string }
  /** items: German word/phrase + Darija pronunciation hint */
  | { type: 'pron'; title: string; text: string; items: Example[] }
  | { type: 'culture'; title: string; text: string }
  | { type: 'exercise'; graded: boolean; exercise: Exercise }
  | { type: 'speak'; title: string; text: string; model: string[] }
  | { type: 'write'; title: string; text: string; points: string[]; model: string; minWords: number }
  | { type: 'summary'; title: string; points: string[]; canDo: string[] };

export interface LessonContent {
  version: 2;
  kind: LessonKind;
  goals: string[];
  steps: Step[];
}

export interface LessonDef {
  id: string;
  title: string;
  description: string;
  minutes: number;
  content: LessonContent;
}

export interface UnitDef {
  /** Course id, e.g. "a1-u01" */
  id: string;
  level: Level;
  number: number;
  title: string;
  description: string;
  /** Material Symbols icon name */
  icon: string;
  color: string;
  /** Can-do statements in Darija */
  objectives: string[];
  lessons: LessonDef[];
}
