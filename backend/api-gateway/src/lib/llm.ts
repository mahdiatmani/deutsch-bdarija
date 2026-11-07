/**
 * OpenRouter client (OpenAI-compatible chat completions).
 *
 * Free models are rate-limited and come and go, so we try a list of models in
 * order and move on when one is busy, missing or returns nothing.
 * Override the list with OPENROUTER_MODELS (comma-separated, first = preferred).
 */

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Benchmarked live (Oct 2026) on Darija teaching questions: Nemotron Ultra writes
// the most natural Darija with correct German; Qwen is good but makes vocabulary
// slips; Gemma is often rate-limited. `openrouter/free` routes to any free model,
// so it is only the last resort (leaked reasoning is rejected below).
const DEFAULT_FREE_MODELS = [
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'qwen/qwen3.8-27b:free',
  'google/gemma-4-31b-it:free',
  'openrouter/free',
];

const baseUrl = () => (process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1').replace(/\/$/, '');

export const openRouterModels = (): string[] => {
  const configured = process.env.OPENROUTER_MODELS?.split(',').map(m => m.trim()).filter(Boolean);
  return configured?.length ? configured : DEFAULT_FREE_MODELS;
};

export const isOpenRouterConfigured = () => !!process.env.OPENROUTER_API_KEY;

export class LLMError extends Error {
  constructor(message: string, public readonly code: 'NOT_CONFIGURED' | 'AUTH' | 'UNAVAILABLE') {
    super(message);
    this.name = 'LLMError';
  }
}

/** Some reasoning models inline their chain of thought; never show it to learners. */
const stripReasoning = (text: string) => text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

/** Untagged chain of thought ("Here's a thinking process: 1. Analyze User Input...") */
const looksLikeLeakedReasoning = (text: string) =>
  /^(here'?s a thinking process|thinking process:|okay, (so|let me)|let me think)/i.test(text) ||
  /\*\*analy[sz]e (the )?user('s)? (input|request)\*\*/i.test(text);

export async function openRouterChat(
  messages: LLMMessage[],
  options: { maxTokens?: number; temperature?: number; timeoutMs?: number } = {}
): Promise<{ text: string; model: string }> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new LLMError('OPENROUTER_API_KEY is not set', 'NOT_CONFIGURED');
  }

  const { maxTokens = 800, temperature = 0.7, timeoutMs = 60_000 } = options;
  const errors: string[] = [];

  for (const model of openRouterModels()) {
    try {
      const res = await fetch(`${baseUrl()}/chat/completions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          // Optional attribution headers recommended by OpenRouter
          'HTTP-Referer': (process.env.FRONTEND_URL || 'http://localhost:3000').split(',')[0].trim(),
          'X-Title': "Deutsch B'Darija",
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: maxTokens,
          temperature,
          // Free models are mostly "reasoning" models: without this they can spend the
          // whole token budget thinking (empty answer) or put the reasoning in the reply.
          reasoning: { effort: 'low', exclude: true },
        }),
        signal: AbortSignal.timeout(timeoutMs),
      });

      if (res.status === 401 || res.status === 403) {
        // A bad key fails for every model: stop immediately
        throw new LLMError(`OpenRouter rejected the API key (${res.status})`, 'AUTH');
      }
      if (!res.ok) {
        errors.push(`${model}: HTTP ${res.status} ${(await res.text()).slice(0, 160)}`);
        continue; // 429 rate limit, 404 model gone, 5xx provider down...
      }

      const data = (await res.json()) as any;
      if (data.error) {
        errors.push(`${model}: ${data.error.message ?? 'error'}`);
        continue;
      }
      const text = stripReasoning(data.choices?.[0]?.message?.content ?? '');
      if (!text) {
        errors.push(`${model}: empty response`);
        continue;
      }
      if (looksLikeLeakedReasoning(text)) {
        errors.push(`${model}: returned its reasoning instead of an answer`);
        continue;
      }
      return { text, model: data.model || model };
    } catch (error) {
      if (error instanceof LLMError) throw error;
      errors.push(`${model}: ${(error as Error).message}`);
    }
  }

  console.error('All OpenRouter models failed:\n  ' + errors.join('\n  '));
  throw new LLMError('No OpenRouter model is available right now', 'UNAVAILABLE');
}
