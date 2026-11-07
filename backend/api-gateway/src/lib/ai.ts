import { openRouterChat, openRouterModels, isOpenRouterConfigured, LLMError, type LLMMessage } from './llm';

export const TEACHER_SYSTEM_PROMPT = `You are "Herr Schmidt", a German teacher for Moroccans. You grew up between Casablanca and Berlin, so you speak natural Moroccan Darija like a friend from the derb, and perfect German.

# LANGUAGE (most important)
- Answer ONLY in Moroccan Darija written with Latin letters (the way Moroccans text on WhatsApp).
- NEVER use Arabic letters. NEVER answer in Modern Standard Arabic (fus7a), English, or full French sentences.
- Single French WORDS that Moroccans really use are fine (normal, exemple, verbe, niveau, masculin). NEVER write a full French sentence or phrase (no "Apprends toujours...", no "Essaye de dire...", no "Oui, mais c'est..."): say it in Darija.
- Letters: 3 = ع, 7 = ح, 9 = ق, kh = خ, gh = غ, ch = ش, ou = و.

# SAY THIS (Darija) - NOT THAT (fus7a)
kifach (not kayfa) · chno / ach (not madha) · 3lach (not limadha) · fin (not ayna) · imta (not mata) · wach (question word)
daba (not al'an) · bzaf (not katir) · mzyan (not jayyid) · khass (not yajib) · n9der / ymken (not nastati3 / yumkin)
ghir (not faqat) · walakin (not lakin) · 7ta (not aydan) · hna / temma (not huna / hunak) · bghit (not uridu)
kayn / makaynch · dyal · ghadi · hadchi · dakchi · safi · wakha · zwin · s7i7 · ghalet · 3afak · mer7ba
l'ostad (not mudarris / mo3allim) · wajed (not mosta3id) · t9der tt9 fih (not mo3tamad) · l'CV (not sira dhatiya) · l'hedra (not l7iwar)
How are you = "labas?" / "kidayr?" (m) / "kidayra?" (f): NEVER "kifach nta".
Grammar words: use the French terms Moroccans learned at school: masculin, féminin, neutre, article, pluriel, verbe, conjugaison.
NEVER use fus7a grammar words (mouzakar, mouannath, jins, ism, fi3l, jam3).

# EVERYDAY NOUNS IN DARIJA (use these exact words)
r-rajel (man) · l'mra (woman) · d-drri / l'weld (child, boy) · l'bent (girl) · l'bba (father) · l'mama / l'walida (mother)
d-dar (house) · t-tabla (table) · l'ktab (book) · t-tomobil (car) · l'ma (water) · l'khobz (bread) · atay (tea) · l'qhwa (coffee)
l'mech (cat) · l'kelb (dog) · l'mdrasa (school) · l'khedma (work) · l'flous (money) · s-sou9 (market) · t-tbib (doctor)

# FORMAT
- German words and sentences go ONLY inside double quotes, then pronunciation in parentheses with easy letters, then the Darija meaning after "=":
  "Guten Morgen" (gouten morguen) = sba7 l'khir
- NEVER put Darija inside double quotes. Double quotes are only for German.
- Keep it SHORT: maximum 8 lines / 120 words, even for big questions. No tables, no numbered sections. Give the 3 most useful things, then ask "Bghiti nzidek?". Use simple **bold** or "- " bullets when it helps. No long tables.
- Give examples from Moroccan daily life (l'7anout, l'mdrasa, l'mama, l'koura, atay, tobis...).
- End with one tiny exercise or question for the student, starting with "Jreb nta:".
- Check that your German is 100% correct (articles, verb position, umlauts ä ö ü ß).

# EXAMPLE
Student: kifach ngoul ana mn lmghrib b lalmaniya?
Herr Schmidt: Mer7ba bik! Sahla bzaf 😊
"Ich komme aus Marokko." (ich komme aous marokko) = ana jay men l'Maghrib.
- "Ich" = ana
- "komme" = jay (men l'verbe "kommen")
- "aus" = men
Ila bghiti tgoul fin saken: "Ich wohne in Casablanca." = ana saken f Casa.
Jreb nta: kifach ghadi tgoul "ana men Fes"?`;

export const EXERCISE_GENERATOR_SYSTEM_PROMPT = `You are "Herr Schmidt", an expert German teacher. Generate a comprehensive German EXAM organized into 5 SECTIONS based on a subject and CEFR level.

## Difficulty Calibration:
- **A1 (Beginner)**: Basic vocabulary (Hello, Thank you, Apple, House). Short sentences. Simple matching and translations.
- **A2 (Elementary)**: Daily life sentences, shopping, work. Basic past tense.
- **B1 (Intermediate)**: Complex sentences. Opinions, dreams, reasons. Professional/social topics.
- **B2 (Upper Intermediate)**: Technical discussions, abstract topics, advanced grammar.

## IMPORTANT Rules:
1. **Output**: JSON ONLY. No text before or after.
2. **Language**: Questions/passages in German. Explanations in natural Moroccan Darija written with Latin letters (3=ع, 7=ح, 9=ق, kh, gh, ch): everyday words like kifach, chno, 3lach, bzaf, mzyan, khass, daba. NEVER Arabic letters, NEVER fus7a (no mouzakar/mouannath: say masculin/féminin).
3. **Every exercise MUST have**: id, type, section, question, correctAnswer, explanation, points.
4. Generate exercises in SECTION ORDER with sequential IDs starting at 1.

## SECTIONS & EXERCISE TYPES:

### Section 1: "reading" (Compréhension écrite) — 3 exercises
1. **type: "reading"** — A German passage (3-5 sentences) + MCQ comprehension question. Fields: passage, question, options (3-4), correctAnswer, points:15
2. **type: "true-false"** — A statement about the SAME passage above. correctAnswer must be exactly "True" or "False". points:10
3. **type: "short-answer"** — An open question about the SAME passage. correctAnswer is a short phrase. points:15

### Section 2: "listening" (Compréhension orale) — 2 exercises
4. **type: "listening"** — A DIFFERENT German passage (2-4 sentences, simulating audio) + MCQ question. Fields: passage, question, options (3-4), correctAnswer, points:15
5. **type: "fill-blank"** — A sentence from the listening passage with ___ blank. correctAnswer is the missing word. section:"listening", points:15

### Section 3: "grammar" (Grammar & Vocabulary) — 4 exercises
6. **type: "multiple-choice"** — Grammar/vocab MCQ. Fields: question, options (3-4), correctAnswer, points:10
7. **type: "sentence-correction"** — An INCORRECT German sentence to fix. correctAnswer is the corrected sentence. points:15
8. **type: "fill-blank"** — Complete the sentence with correct word. section:"grammar", points:15
9. **type: "matching"** — Match German words to Darija. Fields: matchPairs [{german, darija}] (4 pairs), correctAnswer (comma-sep "Word1=Trans1,Word2=Trans2"), points:10

### Section 4: "writing" (Expression écrite) — 3 exercises
10. **type: "writing"** — Ask student to write a short paragraph (3-4 sentences) about a topic related to the subject. modelAnswer contains an example answer. points:25
11. **type: "writing"** — Ask student to write a short email or letter related to the subject. modelAnswer contains an example. points:25

### Section 5: "speaking" (Expression orale) — 2 exercises
12. **type: "speaking"** — Ask student to describe a scenario or answer conversation questions related to the subject. modelAnswer contains example response. points:20
13. **type: "speaking"** — A short conversation prompt: "What would you say if...?" related to the subject. modelAnswer contains example. points:20

## JSON Schema Example:
{
  "exercises": [
    {
      "id": 1, "type": "reading", "section": "reading",
      "passage": "Ich gehe jeden Morgen in die Bäckerei. Dort kaufe ich frische Brötchen und einen Kaffee. Die Bäckerin heißt Frau Müller und ist sehr freundlich.",
      "question": "Wo geht die Person jeden Morgen hin?",
      "options": ["Zum Supermarkt", "Zur Bäckerei", "Zum Restaurant"],
      "correctAnswer": "Zur Bäckerei",
      "explanation": "'Bäckerei' = l'7anout dyal l'khobz (l'boulangerie). Kol sba7 kaymchi l'Bäckerei.",
      "points": 15
    },
    {
      "id": 2, "type": "true-false", "section": "reading",
      "question": "Die Bäckerin heißt Frau Schmidt. (Based on the passage above)",
      "correctAnswer": "False",
      "explanation": "Ghalet: smiytha Frau Müller, machi Schmidt.",
      "points": 10
    },
    {
      "id": 3, "type": "short-answer", "section": "reading",
      "question": "Was kauft die Person in der Bäckerei?",
      "correctAnswer": "Brötchen und Kaffee",
      "explanation": "Kaychri 'Brötchen' (khobz sghir) o 'Kaffee' (l'qhwa).",
      "points": 15
    },
    {
      "id": 7, "type": "sentence-correction", "section": "grammar",
      "question": "Correct this sentence: 'Ich gehe gestern ins Kino.'",
      "correctAnswer": "Ich bin gestern ins Kino gegangen.",
      "explanation": "'gestern' = lbare7, donc khassek l'Perfekt: 'bin gegangen', machi 'gehe'.",
      "points": 15
    },
    {
      "id": 10, "type": "writing", "section": "writing",
      "question": "Write a short paragraph (3-4 sentences) describing your morning routine in German.",
      "correctAnswer": "",
      "modelAnswer": "Ich stehe um 7 Uhr auf. Dann frühstücke ich Brot mit Marmelade. Danach putze ich mir die Zähne und gehe zur Arbeit.",
      "explanation": "Kteb 3la chno katdir f s-sba7. Khdem b kalimat b7al: aufstehen, frühstücken, gehen.",
      "points": 25
    },
    {
      "id": 12, "type": "speaking", "section": "speaking",
      "question": "Your German friend asks you about your favorite food. How would you respond? Describe what you like to eat and why. (Write your answer in German)",
      "correctAnswer": "",
      "modelAnswer": "Mein Lieblingsessen ist Couscous. Ich esse es jeden Freitag mit meiner Familie. Es schmeckt sehr lecker mit Gemüse und Fleisch.",
      "explanation": "Jaweb b7al ila kathder m3a sa7bek: goul lih chno katakol o 3lach.",
      "points": 20
    }
  ]
}

## CRITICAL:
- For "writing" and "speaking" types: set correctAnswer to "" (empty) and provide modelAnswer instead.
- For all other types: correctAnswer MUST contain the exact correct answer.
- The passage from reading exercises (id 1) should be REUSED for true-false (id 2) and short-answer (id 3).
- The passage from listening exercise (id 4) should be REUSED for the listening fill-blank (id 5).
- Ensure difficulty matches the CEFR level EXACTLY. A1 must be very easy.
- ALL exercises must include the "section" field.`;

// Common German words: a quoted phrase must contain one (or an umlaut/ß) to count as German
const GERMAN_WORDS = new Set([
  'der', 'die', 'das', 'den', 'dem', 'ein', 'eine', 'einen', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr',
  'bin', 'bist', 'ist', 'sind', 'habe', 'hast', 'hat', 'und', 'oder', 'nicht', 'kein', 'keine', 'mit', 'auf',
  'mein', 'meine', 'dein', 'deine', 'wie', 'was', 'wo', 'wer', 'wann', 'warum', 'guten', 'gute', 'gut',
  'morgen', 'tag', 'abend', 'nacht', 'hallo', 'danke', 'bitte', 'tschüss', 'ja', 'nein', 'heiße', 'heisse',
  'geht', 'gehe', 'komme', 'kommst', 'aus', 'herr', 'frau', 'entschuldigung', 'viel', 'schön', 'sehr',
])

export const extractGermanText = (text: string): string | null => {
  const quoted = text.match(/"([^"\n]+)"/g);
  if (!quoted) return null;

  const germanPhrases = quoted
    // Strip markdown emphasis so the voice never reads asterisks
    .map(m => m.slice(1, -1).replace(/[*_]+/g, '').trim())
    .filter(phrase => {
      if (/[äöüßÄÖÜ]/.test(phrase)) return true;
      const words = phrase.toLowerCase().match(/[a-zäöüß]+/g) || [];
      return words.some(w => GERMAN_WORDS.has(w));
    });

  // Same phrase can be quoted several times: speak it once
  const unique = Array.from(new Set(germanPhrases))
    .map(p => p.replace(/\[[^\]]*\]/g, '').replace(/\.{2,}|…/g, '').replace(/\s+([.,!?])/g, '$1').trim()) // drop "[Name]" placeholders and "..."
    .filter(p => p.length > 1);
  // Phrases already ending in . ! ? are joined with a space; others get a full stop
  return unique.length > 0 ? unique.map(p => (/[.!?]$/.test(p) ? p : `${p}.`)).join(' ') : null;
};

export const generateConversationTitle = (message: string): string => {
  const cleaned = message.trim().substring(0, 50);
  return cleaned.length < message.trim().length ? `${cleaned}...` : cleaned;
};

// ---------------------------------------------------------------------------
// AI provider
//
//   AI_PROVIDER=openrouter (default)  Free OpenRouter models, called directly.
//                                     No GPU or Python service needed.
//   AI_PROVIDER=rag                   The Python RAG service (backend/ai-services/
//                                     rag-service) with the local Atlas-Chat-9B model.
//                                     Falls back to OpenRouter if the service is down
//                                     and OPENROUTER_API_KEY is set.
// ---------------------------------------------------------------------------

export type AIProvider = 'openrouter' | 'rag';

export const getAIProvider = (): AIProvider =>
  process.env.AI_PROVIDER?.toLowerCase() === 'rag' ? 'rag' : 'openrouter';

type ChatHistory = { role: 'user' | 'assistant'; parts: { text: string }[] }[];

interface TeacherReply {
  text: string;
  germanText: string | null;
  sources?: any[];
  model?: string;
}

const RAG_SERVICE_URL = process.env.RAG_SERVICE_URL || 'http://localhost:8000';
// Must match RAG_API_KEY on the RAG service when it is set there
const RAG_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
  ...(process.env.RAG_API_KEY ? { 'X-API-Key': process.env.RAG_API_KEY } : {}),
};

const unavailableReply = (hint: string): TeacherReply => ({
  text: `Sme7 liya, l'Ostad AI ma khddamch daba. ${hint}`,
  germanText: null,
  sources: [],
});

/** Herr Schmidt via the Python RAG service (local Atlas-Chat-9B). Throws on failure. */
async function chatViaRAGService(message: string, history: ChatHistory, userLevel?: string): Promise<TeacherReply> {
  const response = await fetch(`${RAG_SERVICE_URL}/query`, {
    method: 'POST',
    headers: RAG_HEADERS,
    body: JSON.stringify({
      message,
      conversation_history: history.map(h => ({ role: h.role, content: h.parts[0].text })),
      level: userLevel || null,
    }),
    signal: AbortSignal.timeout(300_000), // a local 9B model can be slow
  });
  if (!response.ok) {
    throw new Error(`RAG service error: ${response.status} ${response.statusText}`);
  }
  const result = await response.json();
  return {
    text: result.response,
    germanText: result.german_text || extractGermanText(result.response),
    sources: result.sources || [],
    model: result.model_used,
  };
}

const ARABIC_SCRIPT = /[\u0600-\u06FF]/;

// Last-resort letter mapping (Arabizi) if the rewrite request fails
const ARABIZI: Record<string, string> = {
  'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'a', 'ب': 'b', 'ت': 't', 'ث': 't', 'ج': 'j', 'ح': '7', 'خ': 'kh',
  'د': 'd', 'ذ': 'd', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'ch', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'd',
  'ع': '3', 'غ': 'gh', 'ف': 'f', 'ق': '9', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'ة': 'a',
  'و': 'ou', 'ي': 'i', 'ى': 'a', 'ء': '2', 'ئ': '2', 'ؤ': '2', 'گ': 'g', 'ڭ': 'g', '،': ',', '؟': '?',
};
const transliterate = (text: string) =>
  text.replace(/[\u0600-\u06FF]/g, ch => ARABIZI[ch] ?? ''); // unmapped (e.g. vowel marks) are dropped

/**
 * The app teaches Darija in Latin letters. Free models sometimes slip Arabic
 * script in: ask for a minimal rewrite, falling back to letter mapping.
 */
async function ensureLatinDarija(text: string): Promise<string> {
  if (!ARABIC_SCRIPT.test(text)) return text;
  try {
    const { text: fixed } = await openRouterChat(
      [
        {
          role: 'system',
          content:
            'You fix Moroccan Darija texts. Rewrite every word written in Arabic letters into Darija with Latin letters ' +
            "(3=ع, 7=ح, 9=ق, kh=خ, gh=غ, ch=ش), e.g. صباح الخير -> sba7 l'khir. Keep EVERYTHING else exactly the same " +
            '(German, markdown, emojis, line breaks). Output only the corrected text.',
        },
        { role: 'user', content: text },
      ],
      { maxTokens: 1500, temperature: 0, timeoutMs: 60_000 }
    );
    if (!ARABIC_SCRIPT.test(fixed)) return fixed;
  } catch (error) {
    console.warn('Arabic-script rewrite failed:', (error as Error).message);
  }
  return transliterate(text);
}

/** Herr Schmidt via OpenRouter free models. Throws on failure. */
async function chatViaOpenRouter(message: string, history: ChatHistory, userLevel?: string): Promise<TeacherReply> {
  const system = userLevel
    ? `${TEACHER_SYSTEM_PROMPT}\n\nThe student's CEFR level is ${userLevel}: adapt vocabulary and grammar to it.`
    : TEACHER_SYSTEM_PROMPT;

  const messages: LLMMessage[] = [
    { role: 'system', content: system },
    ...history.slice(-10).map(h => ({ role: h.role, content: h.parts[0].text })),
    { role: 'user', content: message },
  ];

  const reply = await openRouterChat(messages, { maxTokens: 1500, temperature: 0.5, timeoutMs: 90_000 });
  const text = await ensureLatinDarija(reply.text);
  return { text, germanText: extractGermanText(text), sources: [], model: reply.model };
}

/**
 * Get Herr Schmidt's reply using the configured provider.
 * Never throws: on failure it returns an apology the UI can show as-is.
 */
export async function chatWithRAG(
  message: string,
  history: ChatHistory = [],
  userLevel?: string
): Promise<TeacherReply> {
  if (getAIProvider() === 'rag') {
    try {
      return await chatViaRAGService(message, history, userLevel);
    } catch (error) {
      console.error('RAG service error:', error);
      if (!isOpenRouterConfigured()) {
        return unavailableReply("Chouf wach l'RAG service khddam (port 8000).");
      }
      console.warn('Falling back to OpenRouter');
    }
  }

  try {
    return await chatViaOpenRouter(message, history, userLevel);
  } catch (error) {
    console.error('OpenRouter error:', error);
    if (error instanceof LLMError && error.code === 'NOT_CONFIGURED') {
      return unavailableReply("L'admin khasso yzid OPENROUTER_API_KEY f .env.");
    }
    if (error instanceof LLMError && error.code === 'AUTH') {
      return unavailableReply('OPENROUTER_API_KEY ghalet.');
    }
    return unavailableReply("L'modèles l'gratuits m3emrin daba. 3awed men b3d chwiya.");
  }
}

// Keep chatWithAI as an alias for backward compatibility
export const chatWithAI = chatWithRAG;

/** Status of the configured AI provider, for /api/health/ready. */
export async function checkRAGHealth(): Promise<{ ok: boolean; provider: AIProvider; details?: any }> {
  const provider = getAIProvider();
  if (provider === 'openrouter') {
    return { ok: isOpenRouterConfigured(), provider, details: { models: openRouterModels() } };
  }
  try {
    const response = await fetch(`${RAG_SERVICE_URL}/health`, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const data = await response.json();
      return { ok: data.status === 'ok', provider, details: data };
    }
    return { ok: false, provider };
  } catch {
    return { ok: false, provider };
  }
}

const FALLBACK_EXERCISES = {
  exercises: [
    {
      id: 1, type: 'reading', section: 'reading',
      passage: 'Ich gehe jeden Tag in die Schule. Meine Schule ist groß.',
      question: 'Wo geht die Person hin?',
      options: ['Zur Schule', 'Zum Markt', 'Nach Hause'],
      correctAnswer: 'Zur Schule',
      explanation: "'Schule' = l'mdrasa.",
      points: 15,
    },
    {
      id: 2, type: 'true-false', section: 'reading',
      question: 'Die Schule ist klein.',
      correctAnswer: 'False',
      explanation: "Ghalet: 'groß' = kbira, machi 'klein' (sghira).",
      points: 10,
    },
    {
      id: 3, type: 'multiple-choice', section: 'grammar',
      question: "Was bedeutet 'Guten Tag'?",
      options: ['Good morning', 'Good day', 'Good night'],
      correctAnswer: 'Good day',
      explanation: "'Guten Tag' = salam / nharek sa3id.",
      points: 10,
    },
  ],
};

/** Pull the JSON object out of a model reply (models sometimes wrap it in prose or ```json fences). */
function parseExercisesJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON in response');
  const parsed = JSON.parse(match[0]);
  if (!Array.isArray(parsed.exercises) || parsed.exercises.length === 0) {
    throw new Error('Response has no exercises');
  }
  return parsed;
}

/**
 * Generate a test with the configured provider. Falls back to a small static
 * test if the model is unavailable or returns unusable JSON.
 */
export async function generateAIExercises(subject: string, level: string, count: number = 14) {
  const request = `EXAM REQUEST:\nSubject: ${subject}\nTarget Level: ${level}\nNumber of Exercises: ${count}\nGenerate ALL 5 sections: reading (3), listening (2), grammar (4), writing (3), speaking (2).\n\nGenerate the exam in JSON format now:`;

  if (getAIProvider() === 'rag') {
    try {
      const response = await fetch(`${RAG_SERVICE_URL}/query`, {
        method: 'POST',
        headers: RAG_HEADERS,
        body: JSON.stringify({ message: `${EXERCISE_GENERATOR_SYSTEM_PROMPT}\n\n${request}`, level }),
        signal: AbortSignal.timeout(180_000),
      });
      if (!response.ok) throw new Error(`RAG service error: ${response.statusText}`);
      const result = await response.json();
      return parseExercisesJson(result.response || '');
    } catch (error) {
      console.error('Exercise generation (RAG) error:', error);
      if (!isOpenRouterConfigured()) return FALLBACK_EXERCISES;
    }
  }

  // Two attempts: free models occasionally return truncated or invalid JSON
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const { text } = await openRouterChat(
        [
          { role: 'system', content: EXERCISE_GENERATOR_SYSTEM_PROMPT },
          { role: 'user', content: request },
        ],
        { maxTokens: 6000, temperature: 0.4, timeoutMs: 150_000 }
      );
      return parseExercisesJson(text);
    } catch (error) {
      console.error(`Exercise generation (OpenRouter) attempt ${attempt} failed:`, (error as Error).message);
      if (error instanceof LLMError && error.code !== 'UNAVAILABLE') break;
    }
  }
  return FALLBACK_EXERCISES;
}
