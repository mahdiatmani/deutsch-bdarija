import crypto from 'crypto';

export const NARRATOR_VOICE = 'conrad';
export const DEFAULT_RATE = 0.9;

/** Key of a stored clip: the same text, voice and speed always map to the same row */
export function lessonAudioId(text: string, voice = NARRATOR_VOICE, rate = DEFAULT_RATE): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  const speed = Math.round(rate * 100) / 100;
  return crypto.createHash('sha256').update(`${voice}|${speed}|${clean}`).digest('hex');
}
