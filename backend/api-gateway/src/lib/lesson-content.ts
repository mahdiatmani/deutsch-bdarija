/**
 * How many items of a lesson count toward its score.
 * Version 2 lessons score their graded exercise steps; older lessons score every exercise.
 */
export function countScoredItems(rawContent: string): number {
  try {
    const content = JSON.parse(rawContent);
    if (content?.version === 2 && Array.isArray(content.steps)) {
      return content.steps.filter((s: any) => s?.type === 'exercise' && s.graded).length;
    }
    return Array.isArray(content?.exercises) ? content.exercises.length : 0;
  } catch {
    return 0; // malformed content: nothing to score
  }
}
