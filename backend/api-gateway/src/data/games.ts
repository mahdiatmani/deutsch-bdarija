/**
 * Learning games: ids, the daily challenge and the word bank they draw from.
 * The games themselves live in frontend/components/games; all content comes from the curriculum.
 */
import { curriculum } from './curriculum';

export const GAME_IDS = [
  'artikel', 'match', 'rain', 'truefalse', 'listen', 'memory',
  'scramble', 'sentence', 'plural', 'dictation', 'wortle', 'review',
] as const;
export type GameId = (typeof GAME_IDS)[number];

/** Games that can be the daily challenge (Wörtle is daily anyway, review depends on the learner) */
const DAILY_POOL: GameId[] = ['artikel', 'match', 'rain', 'truefalse', 'listen', 'memory', 'scramble', 'sentence', 'plural', 'dictation'];

export const DAILY_BONUS_XP = 50;
/** XP for one round, and for all games in one day: games add practice, lessons stay the main source */
export const MAX_XP_PER_ROUND = 30;
export const MAX_GAME_XP_PER_DAY = 300;

export type Level = 'A1' | 'A2' | 'B1' | 'B2';
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

export interface BankWord {
  de: string;
  dar: string;
  level: Level;
  lessonId: string;
  /** Single-word nouns: article, the bare noun and the plural without article */
  article?: 'der' | 'die' | 'das';
  noun?: string;
  plural?: string;
}

export interface BankSentence {
  de: string;
  dar: string;
  level: Level;
  lessonId: string;
  /** Dialogue lines: who speaks, and everyone in that dialogue (for the voice casting) */
  speaker?: string;
  speakers?: string[];
}

const NOUN = /^(der|die|das) ([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]+)$/;
const PLURAL = /^die ([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]+)$/;

function buildBank() {
  const words = new Map<string, BankWord>();
  const sentences = new Map<string, BankSentence>();

  for (const unit of curriculum) {
    const level = unit.level as Level;
    for (const lesson of unit.lessons) {
      const addSentence = (s: BankSentence) => {
        const count = s.de.split(/\s+/).length;
        if (count >= 3 && count <= 9 && !/[…|*_/]/.test(s.de) && !sentences.has(s.de)) sentences.set(s.de, s);
      };

      for (const step of lesson.content.steps) {
        if (step.type === 'vocab') {
          for (const w of step.words) {
            if (words.has(w.de) || /[…↔/]/.test(w.de) || !w.dar) continue;
            const word: BankWord = { de: w.de, dar: w.dar, level, lessonId: lesson.id };
            const noun = w.de.match(NOUN);
            if (noun) {
              word.article = noun[1] as BankWord['article'];
              word.noun = noun[2];
              // Some plurals equal the singular (der Lehrer → die Lehrer); that is a valid answer too
              const plural = w.plural?.match(PLURAL);
              if (plural) word.plural = plural[1];
            }
            words.set(w.de, word);
            if (w.example) addSentence({ de: w.example.de, dar: w.example.dar, level, lessonId: lesson.id });
          }
        }
        if (step.type === 'dialogue' || step.type === 'listening') {
          const speakers = Array.from(new Set(step.lines.map(l => l.speaker)));
          for (const line of step.lines) {
            addSentence({ de: line.de, dar: line.dar, level, lessonId: lesson.id, speaker: line.speaker, speakers });
          }
        }
      }
    }
  }
  return { words: [...words.values()], sentences: [...sentences.values()] };
}

let bank: ReturnType<typeof buildBank> | null = null;
export const gameBank = () => (bank ??= buildBank());

/** Five-letter words for Wörtle (umlauts count as one letter; no ß, abbreviations or numbers) */
export function wortlePool(): BankWord[] {
  return gameBank().words.filter(w => {
    const word = w.noun ?? w.de;
    return /^[A-Za-zÄÖÜäöü][a-zäöü]{4}$/.test(word) && !/^\d+$/.test(w.dar);
  });
}

/** Local calendar day, e.g. "2026-10-07" (server time, like streaks) */
export function dayKey(date = new Date()): string {
  const d = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return d.toISOString().slice(0, 10);
}

const hash = (text: string) => [...text].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 2166136261);

export const dailyGame = (day = dayKey()): GameId => DAILY_POOL[hash(`daily:${day}`) % DAILY_POOL.length];

export function dailyWortle(day = dayKey()): BankWord {
  const pool = wortlePool();
  return pool[hash(`wortle:${day}`) % pool.length];
}

export const isGameId = (id: string): id is GameId => (GAME_IDS as readonly string[]).includes(id);
