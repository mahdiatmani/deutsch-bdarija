/**
 * Validates every lesson of the curriculum (answer indexes, gap counts, tiles…).
 * Run: npx ts-node --transpile-only scripts/check-curriculum.ts
 */
import { curriculum } from '../src/data/curriculum';
import { validateUnits } from '../src/data/curriculum/validate';

const errors = validateUnits(curriculum);
const lessons = curriculum.reduce((n, u) => n + u.lessons.length, 0);
const steps = curriculum.reduce((n, u) => n + u.lessons.reduce((m, l) => m + l.content.steps.length, 0), 0);
const byLevel = curriculum.reduce<Record<string, number>>((acc, u) => ({ ...acc, [u.level]: (acc[u.level] ?? 0) + 1 }), {});

console.log(`${curriculum.length} units (${Object.entries(byLevel).map(([l, n]) => `${l}: ${n}`).join(', ')}), ${lessons} lessons, ${steps} steps`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('All lessons are valid.');
