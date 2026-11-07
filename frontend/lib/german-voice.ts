// Browser-voice fallback: rank by quality first (old desktop voices sound robotic),
// then prefer a male voice for Herr Schmidt (or the gender of the dialogue character).
const MALE_GERMAN_VOICES = ['conrad', 'killian', 'florian', 'stefan', 'markus', 'yannick', 'jonas', 'ralf']
const FEMALE_GERMAN_VOICES = ['katja', 'hedda', 'amala', 'louisa', 'seraphina', 'tanja', 'anna', 'petra', 'marlene', 'vicki', 'helena', 'google deutsch']

export const voiceScore = (v: SpeechSynthesisVoice, gender: 'f' | 'm' = 'm') => {
  const n = v.name.toLowerCase()
  let score = 0
  if (/natural|neural/.test(n)) score += 100
  else if (/online/.test(n)) score += 80
  else if (/google/.test(n)) score += 70
  else if (/premium|enhanced/.test(n)) score += 60
  if ((gender === 'f' ? FEMALE_GERMAN_VOICES : MALE_GERMAN_VOICES).some((m) => n.includes(m))) score += 5
  if (v.lang === 'de-DE') score += 2
  return score
}

/** The most natural German voice the browser offers, if any (preferring the given gender) */
export const pickGermanVoice = (synth: SpeechSynthesis, gender: 'f' | 'm' = 'm'): SpeechSynthesisVoice | undefined =>
  synth
    .getVoices()
    .filter((v) => v.lang === 'de-DE' || v.lang.startsWith('de'))
    .sort((a, b) => voiceScore(b, gender) - voiceScore(a, gender))[0]

/** German browser voices known to be of the given gender, best first (empty if none are recognised) */
export const germanVoicesOf = (synth: SpeechSynthesis, gender: 'f' | 'm'): SpeechSynthesisVoice[] => {
  const names = gender === 'f' ? FEMALE_GERMAN_VOICES : MALE_GERMAN_VOICES
  return synth
    .getVoices()
    .filter((v) => (v.lang === 'de-DE' || v.lang.startsWith('de')) && names.some((m) => v.name.toLowerCase().includes(m)))
    .sort((a, b) => voiceScore(b, gender) - voiceScore(a, gender))
}
