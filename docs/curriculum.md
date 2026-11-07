# Deutsch B'Darija — Curriculum A1 → B2

This document is the design basis for the lessons in the app. It records what was
researched, what was learned from each source, how a lesson is built, and the
full scope and sequence from A1 to B2. All lesson texts, dialogues, examples and
exercises in the app are original; the sources below were used only to decide
**what** is taught, **in which order**, and **at which level**.

---

## 1. Research: what the established curricula agree on

| Source | What it contributes |
|---|---|
| **CEFR / GER** (Council of Europe, Companion Volume 2020; German can-do wording in *Profile Deutsch*) | Defines each level by what a learner *can do*: A1 = familiar everyday expressions with a cooperative partner who speaks slowly; A2 = routine exchanges about immediate needs and the past; B1 = independent handling of most everyday situations, connected text on familiar topics, opinions with reasons; B2 = clear detailed text on a wide range of subjects, fluent interaction, arguing a viewpoint with pros and cons. |
| **Goethe-Institut — Start Deutsch 1 (A1) Prüfungsziele** | The full A1 inventories: 11 theme areas (Person, Wohnen, Umwelt, Reisen/Verkehr, Essen/Trinken, Einkaufen, Dienstleistungen, Ausbildung/Lernen, Arbeit/Beruf, Freizeit, Gesundheit through Dienstleistungen), ~650 words (half active), the speech acts (Informationsaustausch, Bewertung, Gefühlsausdruck, Handlungsregulierung, soziale Konventionen) and the A1 grammar list: present tense of all verbs, Perfekt of frequent verbs, *war/hatte*, imperative (du/ihr/Sie), modal verbs, separable verbs, *möchte/würde gern* as fixed chunks, Nom/Akk/Dat articles, possessives, *kein*, personal pronouns Nom/Akk + Dat with *helfen/gehören/danken*, temporal & local prepositions, V2 word order, sentence bracket, *und/oder/aber/denn/dann*. Key principle: *grammar serves communication* — at A1 intelligibility beats correctness, and polite Konjunktiv II forms are taught as phrases, not as a system. |
| **Goethe-Zertifikat B1 Wortliste** (Goethe-Institut, ÖSD, Univ. Freiburg) | ~2400 lexical units expected receptively at B1; topic word groups (time, dates, holidays, school, politics, currencies…). Confirms that B1 vocabulary covers private, public, school/education *and* work contexts. |
| **Goethe-Zertifikat B2 Prüfungsziele** | The 14 B2 theme areas (personal data, housing/environment, daily life & work, leisure & media, travel, relationships/culture/tradition, health, education, consumption, nutrition, services, places, language/communication, climate) and the hallmarks of B2: *effective argumentation, staying power in discourse, language awareness*; texts may be abstract; written work states facts, opinions, pros and cons systematically. |
| **telc Deutsch B1/B2** (official telc preparation guide) | Exam formats to train toward: global / detailed / selective reading, *Sprachbausteine* (grammar & vocabulary in context), listening with true/false, a semi-formal e-mail (request for information or complaint), and an oral exam with *talking about experiences, a discussion with arguments, and planning something together*. |
| **ÖSD Zertifikat B2** | B2 communication goes beyond the private sphere into (semi-)public and professional areas; express oneself clearly and in detail and hold a spontaneous conversation with native speakers. |
| **BAMF Rahmencurriculum für Integrationskurse** (Goethe-Institut, rev. 2016) | Twelve *Handlungsfelder* where migrants need German — Ämter/Behörden, Arbeit, Arbeitssuche, Aus-/Weiterbildung, Banken/Versicherungen, Betreuung/Ausbildung der Kinder, Einkaufen, Gesundheit, Mediennutzung, Mobilität, Unterricht, Wohnen — plus cross-cutting goals (feelings and opinions, conflicts, social contact, managing one's own learning) and *Fokus Landeskunde / Diversität*. This is the closest match to our learners (Moroccans preparing to live, work or study in Germany). |
| **vhs-Lernportal** (DVV, BAMF-approved) | Course design: A1, A2, B1 each = 12 lessons; every learning unit starts with a *scene from everyday life* that introduces topic, phrases and structures, which are then practised in 20+ exercise types across all four skills; three progress tests per lesson; vocabulary and phrase trainers. |
| **DW Nicos Weg** | A story-driven A1–B1 course: one protagonist arriving in Germany, short episodes, vocabulary + grammar + exercises per episode. Confirms the value of recurring characters and real-life arrival situations. |
| **Published course books** (Hueber *Schritte plus*, *Menschen*, *Ziel B1+*; Klett *Netzwerk*, *Aspekte*) — tables of contents and forewords only | Concrete grammar order that is proven in practice, e.g. A2.2: Konjunktiv II *wäre/hätte/würde/könnte*, *trotzdem/deshalb*, Passiv Präsens, adjective endings, comparison, indirect questions, *lassen*. Method stated in the *Schritte plus* foreword: new structures are first made visible, then practised **guided, then freer**, and each step ends with **free application**. |

### Conclusions used for the design

1. **Action-oriented (handlungsorientiert):** every unit starts from a real situation and ends with a real task (write the e-mail, make the phone call, give your opinion). Grammar is introduced *because the situation needs it*.
2. **Spiral progression:** each structure returns later in a wider form — e.g. *Akkusativ* (A1.4) → *Dativ* (A1.8/11) → *Wechselpräpositionen* (A2.3) → full adjective endings (A2.6–7, B1.6) → *Partizipialattribute* (B2.5).
3. **Receptive before productive:** learners first understand a form in a dialogue or text, then recognise it, then produce it in controlled exercises, then use it freely.
4. **12 units per level** (like vhs and Schritte half-volumes) plus an **exam-training unit** per level modelled on Goethe / telc / ÖSD task types.
5. **Life in Germany is content:** each unit has a *Landeskunde* note relevant to Moroccans (registration, rent, health insurance, Ramadan at work, recognition of diplomas…).
6. **Our learners' language:** explanations are in Moroccan Darija (Latin script), with contrastive hints where Darija/Arabic/French habits cause typical mistakes (genders, *kein* vs *nicht*, verb at the end, p/b, e/i, ü/ö).

---

## 2. How a lesson teaches (methodology)

Each lesson is a sequence of steps that follows

**Introduce → Explain → Demonstrate → Practise → Correct → Reinforce → Apply → Assess → Review**

| Phase | Step types in the app |
|---|---|
| Introduce | `intro` — situation, goals ("Ghadi t9der…") |
| Demonstrate | `dialogue` (audio per line, translation on demand), `reading`, `listening` (text hidden until the questions are done) |
| Explain | `explain` — what / when / how / why, tables, examples with audio, typical mistakes of Darija speakers; `vocab` — word cards with article, plural, audio, example; `pron` — pronunciation with audio; `culture` |
| Practise + Correct | `exercise` steps (choice, gap, order words, match, translate, dictation) — **practice mode**: immediate correction with explanation |
| Reinforce | wrong practice items come back at the end of the block until they are right |
| Apply | `speak` (speech recognition compares with model answers; model audio) and `write` (free text → checklist, model text, optional AI feedback from Herr Schmidt) |
| Assess | `exercise` steps marked *graded* — one attempt, counted in the lesson score |
| Review | `summary` — key points and can-do statements |

### Unit template (4 lessons)

1. **Situation & Wörter** — scene dialogue, vocabulary, useful phrases, pronunciation, role-play.
2. **Grammatik** — the main structure of the unit, explained and practised step by step.
3. **Grammatik & Fertigkeiten** — second structure and/or a reading/listening text with strategy, writing task.
4. **Anwenden & Wiederholen** — recap of the unit, mixed practice, a real-life task (write / speak), unit test.

The 13th unit of each level is **Prüfungstraining** (reading, listening, writing, speaking) in the formats of Goethe-Zertifikat / telc / ÖSD at that level.

Units unlock in order within a level; any level can be started directly (for learners who place higher). Lessons inside a unit unlock in order.

---

## 3. Scope and sequence

Legend: **K** = communication (can-do), **G** = grammar, **W** = vocabulary, **A** = pronunciation, **L** = Landeskunde.

### A1 — Anfänger (Beginner)

*Goal (CEFR A1): understand and use familiar everyday expressions; introduce yourself and others; ask and answer simple questions about personal details; interact simply if the partner speaks slowly and helps.*

| # | Unit | K | G | W / A / L |
|---|---|---|---|---|
| 1 | Hallo! Ich bin … | greet, say goodbye, introduce yourself, origin, languages, spell your name | personal pronouns, *heißen/kommen/wohnen/sprechen* (ich/du/Sie/er/sie), W-questions, verb in 2nd position | countries/languages · alphabet, Umlaute · *du* or *Sie*? regional greetings |
| 2 | Zahlen & Kontakte | numbers, phone, age, address, fill in a form | present tense all persons, *sein* & *haben*, yes/no questions | numbers 0–1000, personal data · question vs statement melody · Anmeldung, address format |
| 3 | Familie & Menschen | talk about family, describe people, jobs (basic) | gender *der/die/das*, plural, possessive articles (Nom.) | family, professions · long and short vowels · family forms in Germany |
| 4 | Essen & Einkaufen | shop for food, ask prices, order in a café | *ein/eine*, *kein*, **accusative** (*den/einen/keinen*), *möchte* | food, quantities, packaging · ü/u, ö/o · bakery, Pfand, reading labels (Schwein, Gelatine) |
| 5 | Mein Tag | tell the time, daily routine, make appointments | separable verbs, inversion (time first), *um/am/von…bis/ab* | times, days, daily activities · stress on separable prefixes · punctuality, Sunday rest |
| 6 | Freizeit & Wetter | hobbies, likes, invitations, weather | vowel-change verbs (*fahren, lesen, essen…*), *gern/lieber/am liebsten*, *können*, sentence bracket | hobbies, weather, seasons, months · *ich*-Laut / *ach*-Laut · clubs (Vereine) |
| 7 | Wohnen | describe a flat, read an ad, furniture | predicative adjectives, *sehr/zu*, accusative pronouns *ihn/sie/es*, *es gibt*, *nicht* vs *kein* | rooms, furniture · the German r · Kaltmiete/Warmmiete, WG, waste separation |
| 8 | In der Stadt | places, ask and give directions, tickets | **dative** after *in/an/auf* (Wo?), *mit*, *zu/nach*, imperative (*Sie*) | town, transport · *st/sp* · Deutschlandticket, ticket machine |
| 9 | Gesundheit | body, doctor's appointment by phone, symptoms | modal verbs *müssen, dürfen, sollen, wollen*, imperative (*du/ihr*) | body, illness · unstressed *-e* / *-er* · Hausarzt, health card, sick note, 112 |
| 10 | Arbeit & Beruf | workplace, working hours, talk about yesterday | **Perfekt** with *haben*, *war/hatte* | jobs, workplace · *ge-* participles · Ausbildung, Minijob |
| 11 | Kleidung & Mode | buy clothes, sizes, say what you like | dative pronouns (*mir/dir/Ihnen*) with *gefallen/passen/stehen*, *dieser/welcher*, **Perfekt with *sein*** | clothes, colours · sentence stress · exchange/receipt |
| 12 | Feste & Einladungen | dates, birthdays, invite/accept/decline, congratulate | ordinal numbers & dates, *und/oder/aber/denn*, polite requests (*Könnten Sie…, Ich hätte gern…*) | holidays, invitations · Christmas, Easter; Ramadan & Eid with German colleagues |
| 13 | Prüfungstraining A1 | Start Deutsch 1 / telc A1 style: listen, read, form + short message, introduce yourself, ask/answer, requests | review | — |

### A2 — Grundlagen (Elementary)

*Goal (CEFR A2): routine exchanges on familiar topics; describe background, past events and immediate needs; short simple notes, messages and personal letters.*

| # | Unit | K | G | W / A / L |
|---|---|---|---|---|
| 1 | Mein Leben | CV-style biography, childhood, past events | Perfekt (all types: separable, inseparable, *-ieren*), Präteritum of modal verbs | life stages, school · glottal stop · school in Germany vs Morocco |
| 2 | Familie & Beziehungen | family celebrations, presents, helping | dative object (*geben, schenken, helfen*), word order Dat/Akk, ***weil*** (verb last), *denn* | relations, presents · melody in subordinate clauses · family celebrations |
| 3 | Wohnen & Nachbarn | moving, house rules, arranging furniture, problems | **Wechselpräpositionen** Wo?/Wohin?, *stellen/stehen, legen/liegen, hängen, setzen/sitzen* | furniture, house · *-er* / *-e* endings · Hausordnung, quiet hours |
| 4 | Arbeit & Kollegen | job ads, phone call with a company, small talk at work | ***dass***, ***wenn*** (condition), indirect questions with ***ob*** / W-word | job search, office · *ng/nk* · contract, probation period |
| 5 | Gesundheit & Unfall | report an accident, give advice, feelings | **reflexive verbs**, *sollte* (advice) | accidents, pharmacy · *s/ß/z* · pharmacy vs drugstore, emergency service |
| 6 | Einkaufen & Vergleichen | compare products, shop online, complain | comparative & superlative, *als/wie*, **adjective endings after definite article** | products, online shopping · final devoicing (*Tag, Hund*) · right of withdrawal |
| 7 | Medien & Freizeit | media use, events, recommend something | adjective endings after indefinite article / no article, *Was für ein? / welch-* | media, events · *-ig* / *-ich* · VHS courses, broadcasting fee |
| 8 | Unterwegs & Reisen | plan a trip, book a hotel, travel problems | local prepositions (*aus, von, bis zu, durch, entlang, gegenüber, an…vorbei*), *vor/seit/für*, ***deshalb*** | travel, hotel · sentence accent · train delays & passenger rights |
| 9 | Wünsche & Träume | wishes, suggestions, polite requests, celebrations | **Konjunktiv II** (*würde, wäre, hätte, könnte*), ***trotzdem*** | wishes, plans · intonation of requests · New Year's Eve, carnival |
| 10 | Schule & Lernen | school system, parent-teacher talk, courses | ***als/wenn*** (past), ***zu* + infinitive**, ***um…zu*** | school, learning · consonant clusters · Kita, school system |
| 11 | Ämter & Dienstleistungen | open a bank account, forms, phone contract, appointments | **Passiv Präsens**, *lassen*, verbs with prepositions + *wo(r)-/da(r)-* | bank, authorities · pauses when reading aloud · Ausländerbehörde, bank account |
| 12 | Umwelt & Zukunft | weather & climate, environment in daily life, plans | **Futur I**, n-declension, genitive *-s* / *von* | nature, recycling · review · Mülltrennung, Pfand |
| 13 | Prüfungstraining A2 | Goethe A2 / DTZ style tasks | review | — |

### B1 — Mittelstufe (Intermediate)

*Goal (CEFR B1): understand the main points of clear standard texts on familiar matters; deal with most travel and everyday situations; produce simple connected text; describe experiences, events, hopes; give reasons and explanations for opinions and plans.*

| # | Unit | K | G | W / A / L |
|---|---|---|---|---|
| 1 | Lebenswege | biographies, turning points, migration stories | **Präteritum** (narrative), **Plusquamperfekt**, *nachdem/bevor/während/seit/bis* | life events · — · German migration history |
| 2 | Bewerbung & Beruf | job ad, CV, cover letter, interview | **relative clauses** (Nom/Akk/Dat, with prepositions) | application vocabulary · — · recognition of foreign diplomas |
| 3 | Zusammenleben | conflicts with neighbours/flatmates, compromises | ***obwohl*** / *trotzdem*, ***damit*** / *um…zu* | conflict phrases · — · Mietrecht basics, mediation |
| 4 | Gesundheit | health system, lifestyle, at the doctor's (detailed) | **Passiv** (Präsens/Präteritum/Perfekt), Passiv with modal verbs | health system · — · gesetzliche / private Krankenkasse |
| 5 | Meinungen & Medien | social media, news, discussions | **Konjunktiv II** for hypothetical conditions, phrases to give/justify opinions, agree/disagree | media · contrast stress · public broadcasting |
| 6 | Konsum & Geld | advertising, saving, written complaint | **genitive** (articles, *-s/-es*), *wegen/trotz/während/innerhalb*, adjective endings (all cases) | money, consumer rights · — · Verbraucherzentrale |
| 7 | Bildung & Weiterbildung | learning biography, courses, exams | two-part connectors (*nicht nur…sondern auch, sowohl…als auch, weder…noch, entweder…oder, je…desto*) | education · — · dual training system |
| 8 | Reisen & Mobilität | travel stories, problems, sustainable travel | verbs with prepositions (extension) + *darauf/worauf…*, ***ohne…zu / statt…zu*** | travel · — · Mitfahrgelegenheit, car-sharing |
| 9 | Kommunikation im Job | meetings, phone calls, e-mails, teamwork | polite indirect questions, Konjunktiv II of modal verbs (*müsste, sollte, dürfte*), nominalisation (basic) | office communication · — · Duzen/Siezen at work |
| 10 | Kultur & Freizeit | film, music, museum, write a review | **Partizip I/II as adjectives**, *lassen* (extended), reflexive verbs with dative | culture · — · cultural life, festivals |
| 11 | Umwelt & Zukunft | climate, sustainability, predictions | **Futur I** (assumptions, promises), ***sodass / so…dass*** | environment · — · Energiewende |
| 12 | Gefühle & Beziehungen | friendship, love, conflict, apologies | **Konjunktiv II past** (*hätte gemacht, wäre gegangen*), modal particles (*doch, mal, ja, eben, halt*) | feelings · emotional intonation · friendship culture |
| 13 | Prüfungstraining B1 | Goethe/ÖSD B1 & telc B1 tasks | review | — |

### B2 — Gute Mittelstufe (Upper-Intermediate)

*Goal (CEFR B2): understand the main ideas of complex texts on concrete and abstract topics; interact with fluency and spontaneity; produce clear, detailed text and explain a viewpoint giving advantages and disadvantages of options.*

| # | Unit | K | G | W / L |
|---|---|---|---|---|
| 1 | Persönlichkeit & Lebensentwürfe | describe character, life goals, happiness | connectors *falls, sofern, indem, sodass, ohne dass, anstatt dass*; adjective word formation (*-lich, -ig, -isch, -bar, -los, -voll*) | personality |
| 2 | Arbeit & Karriere | work-life balance, home office, meetings | **nominal style ↔ verbal style**, **Nomen-Verb-Verbindungen** | world of work |
| 3 | Medien & Information | fake news, reporting, quoting others | **Konjunktiv I** (indirect speech) | press, media literacy |
| 4 | Wissenschaft & Technik | AI, inventions, digitalisation | **Passiv** (all tenses), Zustandspassiv, **alternatives to the passive** (*sich lassen, sein…zu, -bar*) | technology |
| 5 | Gesundheit & Ernährung | diets, studies, describe charts | **extended participial attributes**, chart phrases | health, statistics |
| 6 | Umwelt & Klima | write an argumentative text (Erörterung) | argumentative connectors (*zwar…aber, einerseits…andererseits, dennoch, folglich*), **prepositions with genitive** (*aufgrund, infolge, angesichts, hinsichtlich*) | climate |
| 7 | Gesellschaft & Generationen | generations, roles, volunteering | relative clauses with *wer/was/wo(r)-*, genitive *dessen/deren* | society |
| 8 | Bildung & Mehrsprachigkeit | education equality, learning languages, university | **subjective modal verbs** (*soll, will, muss, dürfte*), **Futur II** / assumptions | education |
| 9 | Wirtschaft & Konsum | sustainable consumption, start-ups, consumer rights | Konjunktiv II past with modal verbs (*hätte…machen sollen*), ***als ob*** | economy |
| 10 | Kunst & Kultur | reviews, literature, theatre | temporal connectors/prepositions (*sobald, solange, seitdem, bei, vor*), **perfect infinitive** | arts |
| 11 | Heimat & Globalisierung | identity, migration, globalisation | text cohesion (reference words, pronominal adverbs), word order in the middle field, register formal/informal | identity |
| 12 | Formell kommunizieren | formal complaint, statement, presentation, leading a discussion | review of B2 structures, presentation & discussion phrases | professional communication |
| 13 | Prüfungstraining B2 | Goethe B2 / telc B2 / ÖSD B2 tasks: reading styles, Sprachbausteine, listening, semi-formal e-mail, discussion, planning together | review | — |

---

## 4. Sources

- Goethe-Institut: *Start Deutsch 1 — Prüfungsziele, Testbeschreibung* (inventories: Themen, Sprachhandlungen, Grammatik) — goethe.de/pro/relaunch/prf/et/Pruefungsziele_Testbeschreibung_A1_SD1.pdf
- Goethe-Institut: *Start Deutsch 1 — Wortliste* — goethe.de/pro/relaunch/prf/ca/A1_SD1_Wortliste_02.pdf
- Goethe-Institut / ÖSD: *Goethe-Zertifikat B1 Wortliste* — goethe.de/pro/relaunch/prf/da/Goethe-Zertifikat_B1_Wortliste.pdf
- Goethe-Institut: *Goethe-Zertifikat B2 — Prüfungsziele, Testbeschreibung* — goethe.de/pro/relaunch/prf/sr/Pruefungsziele_Testbeschreibung_B2.pdf
- telc gGmbH: *Deutsch B2 — Tipps zur Prüfungsvorbereitung* — telc.net
- ÖSD: *Zertifikat B2* exam description — osd.at/portfolio-item/osd-zertifikat-b2-zb2/
- BAMF / Goethe-Institut: *Rahmencurriculum für Integrationskurse Deutsch als Zweitsprache* (2016/2017), incl. Anhang 1 (global can-do descriptors from *Profile Deutsch*) — goethe.de/resources/files/pdf209/rahmencurriculum-integrationskurs_20171.pdf
- DVV vhs-Lernportal: *Deutschkurse A1–B1* info sheet and course overview — vhs-lernportal.de
- Deutsche Welle: *Nicos Weg* (A1–B1) — learngerman.dw.com
- Council of Europe: *CEFR Companion Volume* (2020) — coe.int/lang-cefr
- Hueber: *Schritte plus 4* and *Ziel B1+* tables of contents (grammar progression and method statement)
