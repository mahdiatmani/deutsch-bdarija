/**
 * The full course, A1 → B2: 13 units per level (12 thematic units + exam training),
 * 4 lessons per unit. See docs/curriculum.md for the scope and sequence.
 */
import type { UnitDef } from './types';
import { a1Units } from './a1';
import { a2Units } from './a2';
import { b1Units } from './b1';
import { b2Units } from './b2';

export const curriculum: UnitDef[] = [...a1Units, ...a2Units, ...b1Units, ...b2Units];

export type { UnitDef } from './types';
