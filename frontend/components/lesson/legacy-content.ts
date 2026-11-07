import type { Exercise, LessonContent, Step } from '@/types/lesson'

/** Lessons from before the step format (a flat `exercises` list) play as a test-only lesson. */
export function toLessonContent(raw: any): LessonContent {
  if (raw?.version === 2 && Array.isArray(raw.steps)) return raw as LessonContent

  const steps: Step[] = (Array.isArray(raw?.exercises) ? raw.exercises : []).flatMap((e: any): Step[] => {
    const why = e.explanation as string | undefined
    let exercise: Exercise | null = null
    if (e.type === 'multiple-choice' && Array.isArray(e.options)) {
      exercise = {
        kind: 'choice',
        prompt: e.question,
        de: e.germanText && e.germanText !== e.correctAnswer ? e.germanText : undefined,
        options: e.options,
        answer: Math.max(0, e.options.indexOf(e.correctAnswer)),
        why,
      }
    } else if (e.type === 'fill-blank' && /_{2,}/.test(e.question)) {
      exercise = { kind: 'gap', prompt: '', text: e.question.replace(/_{2,}/, '___'), answers: [[String(e.correctAnswer)]], why }
    } else if (e.type === 'matching' && Array.isArray(e.options) && Array.isArray(e.correctAnswer)) {
      exercise = { kind: 'match', prompt: e.question, pairs: e.options.map((o: string, i: number) => [o, e.correctAnswer[i]]), why }
    } else if (e.type === 'translation' || e.type === 'fill-blank') {
      exercise = { kind: 'translate', prompt: e.question, source: e.darijaTranslation || e.question, accept: [String(e.correctAnswer)], why }
    }
    return exercise ? [{ type: 'exercise', graded: true, exercise }] : []
  })

  return { version: 2, kind: 'review', goals: [], steps }
}
