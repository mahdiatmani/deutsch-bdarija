import type { Exercise, Step, UnitDef } from './types';

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.,!?;:„“"«»()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function checkExercise(ex: Exercise, where: string, errors: string[]) {
  const fail = (msg: string) => errors.push(`${where}: ${msg}`);
  if (!ex.prompt?.trim()) fail('empty prompt');

  switch (ex.kind) {
    case 'choice':
      if (ex.options.length < 2) fail('choice needs at least 2 options');
      if (ex.answer < 0 || ex.answer >= ex.options.length) fail(`answer index ${ex.answer} out of range`);
      // Case-sensitive on purpose: stress questions differ only by capitals ("EINkaufen" / "einKAUfen")
      if (new Set(ex.options.map(o => o.trim())).size !== ex.options.length) fail('duplicate options');
      break;
    case 'gap': {
      const gaps = ex.text.split('___').length - 1;
      if (gaps === 0) fail('gap text has no ___');
      if (gaps !== ex.answers.length) fail(`gap text has ${gaps} gaps but ${ex.answers.length} answers`);
      if (ex.answers.some(a => a.length === 0 || a.some(s => !s))) fail('empty gap answer');
      break;
    }
    case 'order':
      if (ex.words.length < 2) fail('order needs at least 2 tiles');
      if (norm(ex.words.join(' ')) !== norm(ex.accept[0])) fail('tiles do not spell the solution');
      break;
    case 'match':
      if (ex.pairs.length < 2) fail('match needs at least 2 pairs');
      if (new Set(ex.pairs.map(p => norm(p[0]))).size !== ex.pairs.length) fail('duplicate left items');
      if (new Set(ex.pairs.map(p => norm(p[1]))).size !== ex.pairs.length) fail('duplicate right items');
      break;
    case 'translate':
    case 'dictation':
      if (!ex.accept.length || ex.accept.some(a => !a.trim())) fail('no accepted answer');
      break;
  }
}

function checkStep(step: Step, where: string, errors: string[]) {
  const fail = (msg: string) => errors.push(`${where}: ${msg}`);
  switch (step.type) {
    case 'exercise':
      checkExercise(step.exercise, where, errors);
      break;
    case 'vocab':
      if (!step.words.length) fail('empty vocabulary');
      break;
    case 'dialogue':
    case 'listening':
      if (!step.lines.length) fail('no lines');
      break;
    case 'speak':
      if (!step.model.length) fail('no model answer');
      break;
    case 'write':
      if (!step.model.trim() || !step.points.length) fail('write needs points and a model text');
      break;
    case 'explain':
    case 'culture':
    case 'intro':
      if (!step.text.trim()) fail('empty text');
      break;
  }
}

/** Returns a list of problems; empty when every unit is well-formed. */
export function validateUnits(units: UnitDef[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const unit of units) {
    if (ids.has(unit.id)) errors.push(`duplicate unit id ${unit.id}`);
    ids.add(unit.id);
    if (!unit.lessons.length) errors.push(`${unit.id}: no lessons`);

    for (const lesson of unit.lessons) {
      if (ids.has(lesson.id)) errors.push(`duplicate lesson id ${lesson.id}`);
      ids.add(lesson.id);
      const steps = lesson.content.steps;
      // Darija is written in Latin letters; Greek/Cyrillic look-alikes or Arabic script are typos
      const stray = JSON.stringify(lesson).match(/[Ͱ-ϿЀ-ӿ؀-ۿ]/);
      if (stray) errors.push(`${lesson.id}: non-Latin character "${stray[0]}"`);
      if (!steps.some(s => s.type === 'exercise' && s.graded)) errors.push(`${lesson.id}: no graded exercise`);
      steps.forEach((step, i) => checkStep(step, `${lesson.id} step ${i + 1} (${step.type})`, errors));
    }
  }
  return errors;
}
