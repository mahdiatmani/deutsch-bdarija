import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 12,
  title: 'Gefühle & Beziehungen',
  description: "L-mcha3er, s-sadaqa o l-khilafat — b Konjunktiv II f l-madi (hätte gemacht, wäre gegangen) o Modalpartikeln (doch, mal, ja, eben, halt).",
  icon: 'favorite',
  objectives: [
    'T3ber 3la l-mcha3er b d9a (fr7, 7zen, ghadab, khayba)',
    'T7ell khilaf o tetsme7 b tari9a mzyana',
    'T3ber 3la n-nadam o t-tamanni f l-madi (hätte / wäre + Partizip II)',
    'Tkhdem l-Modalpartikeln doch, mal, ja, eben, halt',
    'Tkteb message chakhsi fih nasi7a',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wie fühlst du dich?',
      description: 'L-kalimat dyal l-mcha3er o l-3ala9at, o kifach t3ber 3la l-i7sas o ttfahem m3a sa7bek.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-mcha3er b d9a', 'T3ber 3la i7sasek o tsowwel 3la i7sas l-akhor', 'Tetsme7 o t9bel l-i3tidar'],
      steps: [
        intro(
          'Streit in der WG',
          'Nina 3eyyta 3la Youssef 7it nsa ykhrrej z-zbel… walakin l-mochkil l-7a9i9i machi z-zbel. Youssef 3endou hmm f rasou.',
          ['L-mcha3er', 'L-khilaf', 'L-i3tidar'],
        ),
        dialogue(
          'Was ist eigentlich los?',
          [
            ['Nina', 'Youssef, du hast schon wieder den Müll nicht rausgebracht! Das nervt mich echt.', 'Youssef, 3awed ma khrrejtich z-zbel! Hadchi kay3assbni bssa7.'],
            ['Youssef', 'Ja, ja, ich mach das halt später.', 'Ah, ah, ghadi ndirha men b3d o safi.'],
            ['Nina', 'Hey, was ist denn los mit dir? Du bist seit Tagen so komisch.', 'Hey, chno 3endek? Hadi iyyam o nta ghrib.'],
            ['Youssef', 'Tut mir leid, Nina. Ich bin einfach traurig. Meine Oma in Casablanca ist krank, und ich kann nicht hinfliegen.', 'Smeh liya, Nina. Ana ghir m7zoun. Jedda f Casa mrida, o ma n9derch nmchi.'],
            ['Nina', 'Oh nein, das wusste ich ja gar nicht! Warum hast du denn nichts gesagt?', 'Oh la, ma kuntch 3arfa! 3lach ma goulti walou?'],
            ['Youssef', 'Ich wollte euch eben nicht mit meinen Problemen belasten.', 'Ma bghitch nthqel 3likom b machakili.'],
            ['Nina', 'Aber dafür sind Freunde doch da! Hättest du es mir früher erzählt, hätte ich nicht so geschimpft.', 'Walakin s-s7ab kaynin l hadchi! Kun goultiha liya bekri, kun ma 3eyyetch haka.'],
            ['Youssef', 'Du hast recht. Danke, dass du fragst. Und ich bring jetzt mal den Müll runter.', '3endek l-7a99. Choukran 7it sowwelti. O daba nhbbet z-zbel.'],
          ],
        ),
        vocab('Gefühle — L-mcha3er', [
          ['traurig', 'm7zoun', ''],
          ['enttäuscht', 'mkhyyeb l-amal', '', ['Ich bin enttäuscht von dir.', 'Khyyebti amali fik.']],
          ['wütend / sauer', 'ghadban / m3assab', ''],
          ['eifersüchtig', 'kaygher', ''],
          ['einsam', 'bou7dou / wa7id (i7sas)', ''],
          ['erleichtert', 'rta7 (ba3d l-9ala9)', ''],
          ['stolz auf', 'meftakher b', ''],
          ['nerven', '3assab / 9ele9', ''],
          ['sich Sorgen machen um', 't9ele9 3la', ''],
          ['der Streit / sich streiten', 'l-khilaf / tkhasmou', ''],
          ['sich versöhnen', 'ttsal7ou', ''],
          ['vertrauen', 'tte9 f', ''],
          ['das Vertrauen', 'th-thi9a', ''],
          ['vermissen', 'twe7ch', '', ['Ich vermisse meine Familie.', 'Twe7cht l-3a2ila dyali.']],
        ]),
        explain(
          'T3ber 3la l-mcha3er',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tsowwel | "Was ist (denn) los mit dir?" — "Wie geht es dir damit?" — "Du wirkst so traurig." |
            | t3ber | "Ich bin traurig / enttäuscht, weil …" — "Es tut mir weh, dass …" |
            | t3awen | "Das kann ich gut verstehen." — "Kann ich irgendwie helfen?" |
            | tetsme7 | "Es tut mir wirklich leid, dass …" — "Das war nicht in Ordnung von mir." |
            | t9bel | "Schon gut." — "Ist vergessen." — "Entschuldigung angenommen." |
          `,
          [
            ['Das kann ich gut verstehen.', 'Kanfhemek mzyan.'],
            ['Das war nicht in Ordnung von mir.', 'Hadchi ma kanch mzyan menni.'],
          ],
        ),
        match('Rbet', [
          ['enttäuscht', 'mkhyyeb l-amal'],
          ['erleichtert', 'rta7'],
          ['eifersüchtig', 'kaygher'],
          ['sich versöhnen', 'ttsal7ou'],
          ['vermissen', 'twe7ch'],
        ]),
        choice('3lach Youssef m7zoun?', ['Nina 3eyyta 3lih', 'Jeddatou mrida o ma y9derch ymchi', 'Fchel f l-imti7an'], 1),
        choice('3lach ma goulch l s-s7ab dyalou?', ['Ma ka-yte9ch fihom', 'Ma bghach ythqel 3lihom', 'Nsa'], 1),
        gap('Kemmel', 'Ich mache mir ___ um meine Oma. Ich ___ meine Familie. (twe7cht)', ['Sorgen', 'vermisse']),
        order('Rtteb', 'Es tut mir wirklich leid, dass ich so laut war.'),
        culture(
          'Freundschaft f Almaniya',
          md`
            - Bzaf d l-ajanib kaygoulou: *S3ib t-tsa7eb m3a l-almaniyin… walakin mlli tsa7eb, katkoun sadaqa dyal 3emmr.*
            - Bzaf d l-almaniyin kayfer9ou bin **Bekannte** (nas kat3refhom) o **Freunde** (s7ab 9rab b ssa7). "Freund" kelma t9ila!
            - **Direktheit:** ila chi 7aja 9ele9thom, ghaliban kaygoulouha direct ("Das nervt mich.") — machi bach yjer7ou, ghir bach y7ellou l-mochkil.
            - **Verabredungen:** ghaliban kat-tfahmou 3la l-maw3id 9bel b iyyam — "ghir dowwez" (spontan) 9lil, khossousan f l-moudoun l-kbar.
          `,
        ),
        speak(
          'Role-play: sa7bek m7zoun',
          'Sa7bek ghrib had l-iyyam. Sowwlou chno 3endou, 3ber 3la t-tafahom, o 9tare7 3awn. Men b3d bddel l-adwar: nta li m7zoun.',
          ['Was ist denn los mit dir? Du wirkst so traurig.', 'Das kann ich gut verstehen.', 'Kann ich irgendwie helfen?', 'Wenn du reden willst, bin ich da.'],
        ),
        graded(choice('"enttäuscht" =', ['mkhyyeb l-amal', 'meftakher', 'rta7'], 0)),
        graded(choice('"Schon gut. Ist vergessen." katgoulha mlli…', ['Kat9bel l-i3tidar', 'Kattetsme7', 'Katsowwel'], 0)),
        graded(gap('Kemmel', 'Nach dem Streit haben wir uns wieder ___. (ttsal7na)', 'versöhnt|versoehnt')),
        graded(translate("Terjem l l'Almaniya", 'Twe7cht l-3a2ila dyali.', ['Ich vermisse meine Familie.'])),
        summary(
          [
            'L-mcha3er: **traurig, enttäuscht, wütend, eifersüchtig, einsam, erleichtert, stolz auf, vermissen, sich Sorgen machen um**.',
            'L-khilaf: **sich streiten → sich entschuldigen → sich versöhnen**.',
          ],
          ['T3ber 3la l-mcha3er', 'Tetsme7 o t9bel l-i3tidar'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Hätte ich doch …! — Konjunktiv II Vergangenheit & Modalpartikeln',
      description: 'N-nadam o t-tamanni f l-madi b hätte / wäre + Partizip II, o l-Modalpartikeln li katkhlli l-almaniya tabi3iya.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem hätte / wäre + Partizip II', 'Tdir Bedingungssätze f l-madi (Wenn … hätte …, hätte …)', 'Tfhem o tkhdem doch, mal, ja, eben, halt'],
      steps: [
        intro(
          '"Hättest du es mir früher erzählt, hätte ich nicht geschimpft."',
          md`
            Nina hdrat 3la chi 7aja **ma w9e3atch** f l-madi. Had l-bniya katkhdemha l **n-nadam**, **t-tamanni**, o **"kun … kun …"** f l-madi.
            O s-s7ab dima kaykhdmou kalimat sghar b7al **doch, mal, ja, halt** — chno kat3ni?
          `,
          ['hätte / wäre + P.II', 'Wenn … hätte …', 'doch, mal, ja …'],
        ),
        explain(
          'Konjunktiv II der Vergangenheit',
          md`
            **hätte / wäre** (Konj. II) + **Partizip II** — b7al Perfekt, walakin b hätte / wäre:

            | Perfekt (w9e3) | Konj. II Verg. (ma w9e3ch) |
            |---|---|
            | Ich **habe** gelernt. | Ich **hätte** gelernt. (kun t3llemt) |
            | Ich **bin** gegangen. | Ich **wäre** gegangen. (kun mchit) |

            Nefs l-9a3ida: **haben** wla **sein** b7al f Perfekt (l-7araka → sein).

            | Isti3mal | Mital |
            |---|---|
            | **nadam / tamanni** | "**Hätte** ich **doch** mehr **gelernt**!" — "Wenn ich **nur** früher **aufgestanden wäre**!" |
            | **chart f l-madi** | "**Wenn** ich Zeit **gehabt hätte**, **wäre** ich **gekommen**." |
            | **nasi7a f l-madi** | "Du **hättest** ihn anrufen **sollen**." (2 infinitifs: anrufen sollen) |
          `,
          [
            ['Wenn ich das gewusst hätte, hätte ich dir geholfen.', 'Kun kunt 3aref, kun 3awentek.'],
            ['Wenn wir den Bus genommen hätten, wären wir pünktlich gewesen.', 'Kun khdina l-bus, kun wselna f l-we9t.'],
          ],
        ),
        choice('"Ich habe den Zug verpasst." → nadam: "___ ich doch früher losgegangen!"', ['Hätte', 'Wäre', 'Würde'], 1),
        choice('"Wenn ich mehr geübt ___, hätte ich die Prüfung bestanden."', ['hätte', 'wäre', 'würde'], 0),
        gap('Kemmel', 'Wenn du angerufen ___, ___ ich zu dir gekommen.', ['hättest', 'wäre|waere']),
        order('Rtteb', 'Wenn ich das gewusst hätte, hätte ich dir geholfen.'),
        order('Rtteb', 'Du hättest mir das früher sagen sollen.'),
        translate("Terjem l l'Almaniya", 'Kun kan 3endi l-we9t, kun jit.', ['Wenn ich Zeit gehabt hätte, wäre ich gekommen.', 'Hätte ich Zeit gehabt, wäre ich gekommen.']),
        explain(
          'Modalpartikeln: doch, mal, ja, eben, halt',
          md`
            Kalimat sghar **bla tarjama mobachira** — katbeddel **n-nghma** o l-i7sas d l-jomla. Ghaliban **ba3d l-fi3l** f l-Mittelfeld:

            | Partikel | Kifach katkhdemha | Mital |
            |---|---|---|
            | **doch** | t9wiya / i7tijaj / talab mlayn | "Komm **doch** mit!" (yallah aji!) — "Das weißt du **doch**!" (rak 3aref!) |
            | **mal** | talab khfif (casual) | "Kannst du **mal** kommen?" — "Hör **mal**!" |
            | **ja** | 7aja ma3roufa / dahcha | "Du weißt **ja**, dass …" (kif kat3ref) — "Das ist **ja** toll!" |
            | **eben / halt** | haka hiya, ma kaynch 7all | "Das ist **halt** so." (haka hiya o safi) — "Er hat **eben** keine Zeit." |
            | **denn** | f s-so2al: fdoul / ihtimam | "Was ist **denn** los?" |

            **halt** ktar f j-jnoub, **eben** f ch-chamal — nefs l-ma3na.
          `,
          [
            ['Setz dich doch!', 'Gles, gles! (b ladab)'],
            ['Das habe ich dir ja gesagt!', 'Rani goultha lik!'],
            ['Die Prüfung war halt schwer.', 'L-imti7an kan s3ib, haka hiya.'],
          ],
          'Ila 7iyyedti l-Modalpartikel, l-jomla katb9a s7i7a — walakin katweli chwiya "jaffa" o rasmiya.',
        ),
        choice('Talab casual: "Gib mir ___ das Salz, bitte."', ['mal', 'eben', 'ja'], 0),
        choice('"Kommst du ___ mit? Es wird lustig!" (t-tachji3)', ['doch', 'eben', 'ja'], 0),
        choice('"Ich kann es nicht ändern. Das ist ___ so." (haka hiya)', ['halt', 'mal', 'denn'], 0),
        match('Rbet', [
          ['Komm doch mit!', 'Yallah aji m3ana!'],
          ['Hör mal!', 'Sme3 chwiya!'],
          ['Das ist ja toll!', 'Wa3r hadchi!'],
          ['Was ist denn los?', 'Chno w9e3?'],
        ]),
        graded(choice('"Ich bin krank geworden." → "Wenn ich eine Jacke angezogen ___, ___ ich nicht krank geworden."', ['hätte / wäre', 'wäre / hätte', 'hätte / hätte'], 0)),
        graded(choice('"___ ich doch nur nicht so viel gegessen!"', ['Hätte', 'Wäre', 'Würde'], 0)),
        graded(gap('Kemmel', 'Wenn wir früher losgefahren ___, hätten wir den Zug nicht verpasst.', 'wären|waeren')),
        graded(choice('"Du ___ zum Arzt gehen sollen." (nasi7a f l-madi)', ['hättest', 'wärst', 'würdest'], 0)),
        graded(choice('"Was ist ___ passiert?" (f so2al, b ihtimam)', ['denn', 'halt', 'mal'], 0)),
        graded(choice('"Du weißt ___, dass ich dich mag." (kif kat3ref)', ['ja', 'mal', 'denn'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kun kunt 3aref, kun 3awentek.', ['Wenn ich das gewusst hätte, hätte ich dir geholfen.', 'Hätte ich das gewusst, hätte ich dir geholfen.', 'Wenn ich es gewusst hätte, hätte ich dir geholfen.'])),
        summary(
          [
            '**hätte / wäre + Partizip II** = ma w9e3ch f l-madi: nadam ("Hätte ich doch …!"), chart ("Wenn … hätte, wäre …").',
            'M3a Modalverb: **hätte … machen sollen / können** (2 infinitifs).',
            'Modalpartikeln: **doch** (t9wiya / tachji3), **mal** (talab khfif), **ja** (ma3rouf / dahcha), **halt / eben** (haka hiya), **denn** (f s-so2al).',
          ],
          ['T3ber 3la n-nadam', 'Tdir chart f l-madi', 'Tkhdem l-Modalpartikeln'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Fernbeziehung & Ratschläge',
      description: 'T9ra rissala l rubrique d n-nasa2i7, tsme3 podcast 3la s-sadaqa, o tkteb jawab fih nasi7a.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem rissala chakhsiya o l-mochkil li fiha', 'Tfhem podcast 3la s-sadaqa f l-ghorba', 'Tkteb nasi7a b ta3atof'],
      steps: [
        intro(
          'Liebe auf Distanz',
          'Mehmet l9a f l-journal rubrique dyal n-nasa2i7. Wa7d l-bent mn l-Maghrib ktbat 3la 3ala9a 3la l-b3id…',
          ['T9ra r-rissala', 'Tsme3 l-podcast', 'Tkteb nasi7a'],
        ),
        reading(
          'Leserbrief: „Lohnt sich eine Fernbeziehung?"',
          md`
            Liebe Frau Hartmann,

            ich bin 24 und komme aus Rabat. Seit einem Jahr mache ich in Leipzig eine Ausbildung als Mechatronikerin. Mein Freund Amine ist in Marokko geblieben, weil er dort gerade sein eigenes Geschäft eröffnet hat.

            Am Anfang haben wir jeden Abend telefoniert. Inzwischen streiten wir aber oft. Er wirft mir vor, dass ich mich verändert habe und keine Zeit mehr für ihn habe. Ich arbeite halt viel und lerne abends Deutsch! Manchmal denke ich: Wäre ich doch in Marokko geblieben. Dann hätten wir diese Probleme nicht.

            Andererseits bin ich stolz auf das, was ich hier geschafft habe, und ich möchte meine Ausbildung unbedingt beenden. Ich liebe Amine, aber ich fühle mich oft einsam und unverstanden.

            Was soll ich tun?
            Nour, 24
          `,
          {
            text: '9ra r-rissala dyal Nour.',
            glossary: [
              ['die Fernbeziehung', '3ala9a 3la l-b3id'],
              ['sich lohnen', 'yst7e9 / fih l-faydah'],
              ['vorwerfen (+ Dat)', 'lam / 3atab'],
              ['sich verändern', 'tbeddel'],
              ['andererseits', 'men jiha khra'],
              ['unverstanden', 'ma mfhoumach'],
            ],
          },
        ),
        choice('3lach Amine b9a f l-Maghrib?', ['Ma bghach Almaniya', 'Fte7 l-machrou3 dyalou', 'Kayt3llem'], 1),
        choice('Chno kaylumha 3lih Amine?', ['Ma katchrich lih hadaya', 'Tbeddlat o ma b9ach 3endha l-we9t', 'Ma kat3ref l-almaniya'], 1),
        choice('Chno kat7ess Nour?', ['Fr7ana o mertah', 'Meftakhra walakin wa7idha o ma mfhoumach', 'Ghadbana men Leipzig'], 1),
        listening(
          'Podcast: Freunde finden in der Fremde',
          [
            ['Moderator', 'Viele Neuzugewanderte sagen, dass es schwer ist, in Deutschland Freunde zu finden. Stimmt das?', 'Bzaf d l-mhajrin j-jdad kaygoulou s3ib tl9a s7ab f Almaniya. Wach bssa7?'],
            ['Psychologin', 'Es dauert oft länger als in anderen Ländern, ja. Aber wenn man einmal Freunde gefunden hat, sind das meistens sehr stabile Freundschaften.', 'Ghaliban katakhod we9t ktar men bladat khrin, ah. Walakin mlli tl9ahom, ghaliban katkoun sadaqat thabta bzaf.'],
            ['Moderator', 'Was raten Sie?', 'Chno kat-nse7i?'],
            ['Psychologin', 'Regelmäßige Aktivitäten sind der Schlüssel: ein Sportverein, ein Chor, ein Sprachcafé. Wenn man dieselben Leute jede Woche sieht, entsteht Vertrauen ganz von selbst.', 'L-anchita l-montadama homa l-moftah: nadi riyadi, chorale, café d l-loughat. Mlli kat-chouf nefs n-nas kol simana, th-thi9a katbna bou7dha.'],
            ['Moderator', 'Und wenn man sich trotzdem einsam fühlt?', 'O ila b9a l-wa7ed kay7ess b l-wa7da?'],
            ['Psychologin', 'Dann sollte man darüber sprechen – mit der Familie, mit Freunden oder auch mit einer Beratungsstelle. Einsamkeit ist nichts, wofür man sich schämen muss.', 'Khassek thder 3liha — m3a l-3a2ila, s-s7ab, wla 7ta markaz l-istichara. L-wa7da machi 7aja khassek t7chem menha.'],
          ],
        ),
        choice('3la 7sab l-akhissa2iya, s-sadaqat m3a l-almaniyin…', ['Sahla o sri3a', 'Katakhod we9t walakin thabta', 'Mosta7ila'], 1),
        choice('Chno howa "l-moftah" bach tl9a s7ab?', ['L-anchita l-montadama (nadi, chorale…)', 'L-internet', 'L-khedma bzaf'], 0),
        choice('Chno t-dir ila 7essiti b l-wa7da?', ['Tsekket', 'Thder 3liha m3a chi wa7ed', 'Trje3 l blad direct'], 1),
        pron(
          'N-nghma m3a Modalpartikeln',
          'Modalpartikeln ghaliban ma katakhodch l-accent — l-accent kaykoun 3la l-kelma l-mohimma. Walakin "doch" f l-jawab 3la so2al manfi katakhod accent 9wi.',
          [
            ['Komm doch mit!', 'l-accent 3la "mit"'],
            ['Das ist ja toll!', 'l-accent 3la "toll"'],
            ['Kommst du nicht? – Doch!', '"Doch" b accent 9wi (= ah, ghadi nji!)'],
          ],
        ),
        write(
          'Jawab l Nour',
          md`
            Nta Frau Hartmann. Kteb jawab l Nour (~120 kelma): 3ber 3la t-tafahom, 3ti ra2yek f l-mo9if, 9tare7 2–3 nasa2i7 3amaliya, o salli b tachji3.
            Khdem **Konjunktiv II** (Ich würde … / An Ihrer Stelle würde ich …), jomla wa7da **hätte / wäre + P.II**, o Modalpartikel wa7ed.
          `,
          ['Liebe Nour,', 'T-tafahom (Ich kann gut verstehen, dass …)', 'Ra2yek (Sie sollten nicht bereuen …)', 'Nasa2i7 (An Ihrer Stelle würde ich …)', 'Tachji3 + Herzliche Grüße'],
          'Liebe Nour,\n\nich kann gut verstehen, dass Sie sich einsam fühlen. Eine neue Sprache, eine Ausbildung und eine Fernbeziehung gleichzeitig – das ist wirklich viel!\n\nSie sollten aber nicht denken: „Wäre ich doch in Marokko geblieben." Sie haben hier schon viel geschafft und dürfen stolz darauf sein.\n\nAn Ihrer Stelle würde ich mit Amine ehrlich über Ihre Gefühle sprechen. Vielleicht könnten Sie feste Telefonzeiten vereinbaren, statt jeden Abend unter Druck zu telefonieren. Außerdem würde ich Ihnen raten, in Leipzig neue Kontakte zu knüpfen, zum Beispiel in einem Sportverein.\n\nEine Beziehung auf Distanz ist halt nicht leicht, aber mit Vertrauen kann sie gelingen.\n\nHerzliche Grüße\nIhre Petra Hartmann',
          100,
        ),
        graded(choice('"vorwerfen" =', ['lam / 3atab', 'w3ed', 'tsal7'], 0)),
        graded(choice('"andererseits" =', ['men jiha khra', 'dima', 'b s-sorr3a'], 0)),
        graded(choice('"An Ihrer Stelle würde ich …" =', ['Kun kunt f blastek, kun …', 'Ana f blastek daba', 'Ma3a l-asaf'], 0)),
        graded(dictation('Sme3 o kteb', 'Wäre ich doch in Marokko geblieben!')),
        summary(
          [
            'Rissala chakhsiya: **die Fernbeziehung, vorwerfen, sich verändern, einsam, unverstanden, andererseits**.',
            'Nasi7a: **Ich kann gut verstehen, dass … — An Ihrer Stelle würde ich … — Ich würde Ihnen raten, … zu …**',
          ],
          ['Tfhem rissala chakhsiya', 'Tfhem podcast', 'Tkteb nasi7a b ta3atof'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 12',
      description: 'Muraja3a: l-mcha3er, Konjunktiv II f l-madi, Modalpartikeln — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 hätte / wäre + P.II', 'Traja3 l-Modalpartikeln', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-mcha3er o l-3ala9at, n-nadam f l-madi, o l-Modalpartikeln.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Hätte** ich **doch** … gelernt! · **Wäre** ich **doch** … geblieben!
            - **Wenn** ich … **gewusst hätte**, **hätte** ich … **geholfen**.
            - **doch** · **mal** · **ja** · **halt / eben** · **denn**
          `,
        ),
        dialogue(
          'Versöhnung',
          [
            ['Salma', 'Mehmet, hast du mal kurz Zeit? Ich wollte mich entschuldigen.', 'Mehmet, 3endek chwiya d l-we9t? Bghit netsme7.'],
            ['Mehmet', 'Wofür denn?', '3la chno?'],
            ['Salma', 'Ich hätte gestern nicht so laut werden sollen. Ich war halt total gestresst.', 'Ma kanch khassni n3eyyet l-bare7. Kunt mstressya bzaf o safi.'],
            ['Mehmet', 'Schon gut. Ich hätte dir ja auch zuhören können, statt zu diskutieren.', 'Machi mochkil. Ta ana kan momkin nsme3lek f blast ma nt-naqech.'],
            ['Salma', 'Danke. Dann lass uns doch einen Kaffee trinken gehen!', 'Choukran. Iwa yallah nmchiw nchrbou kahwa!'],
          ],
        ),
        choice('3lach Salma ttsme7at?', ['Nsat l-maw3id', '3eyytat 3la Mehmet l-bare7', 'Ma jatch'], 1),
        choice('Chno 9al Mehmet 3la rasou?', ['Kan momkin ysme3 lha', 'Kan 3endou l-7a99', 'Ma dar walou'], 0),
        gap('Kemmel', 'Ich ___ gestern nicht so laut werden sollen. Ich war ___ gestresst. (haka hiya)', ['hätte|haette', 'halt|eben']),
        match('Rbet', [
          ['Ich hätte gelernt.', 'Kun t3llemt.'],
          ['Ich wäre gekommen.', 'Kun jit.'],
          ['Ich hätte kommen sollen.', 'Kan khassni nji.'],
        ]),
        speak(
          'Nadam: 7aja kun dertha mkhtalfa',
          '7ki 3la 7aja f l-madi kun dertha b tari9a khra (f l-9raya, s-safar, l-khedma…). Chno w9e3, chno kun dertiha daba, o chno t3llemti.',
          ['Vor zwei Jahren habe ich mich für ein Studium entschieden, das mir nicht gefallen hat.', 'Hätte ich doch vorher ein Praktikum gemacht!', 'Wenn ich mich besser informiert hätte, wäre ich gleich in die Pflege gegangen.', 'Aber ich habe viel gelernt – das ist halt das Leben.'],
        ),
        graded(choice('"Ich habe den Termin vergessen." → "___ ich ihn doch in den Kalender geschrieben!"', ['Hätte', 'Wäre', 'Würde'], 0)),
        graded(choice('"Wenn du früher gekommen ___, hättest du ihn getroffen."', ['wärst', 'hättest', 'würdest'], 0)),
        graded(gap('Kemmel', 'Wenn ich mehr Geld gehabt ___, ___ ich nach Japan geflogen.', ['hätte|haette', 'wäre|waere'])),
        graded(choice('"Sie ___ mir das früher sagen müssen."', ['hätten', 'wären', 'würden'], 0)),
        graded(choice('"Setz dich ___! Möchtest du einen Tee?" (b ladab / tachji3)', ['doch', 'halt', 'denn'], 0)),
        graded(choice('"Kannst du ___ das Fenster aufmachen?" (talab khfif)', ['mal', 'ja', 'eben'], 0)),
        graded(choice('"Wie heißt du ___?" (b fdoul)', ['denn', 'halt', 'mal'], 0)),
        graded(choice('"vermissen" =', ['twe7ch', 'tsal7', 'tte9'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kun kan 3endi l-we9t, kun jit.', ['Wenn ich Zeit gehabt hätte, wäre ich gekommen.', 'Hätte ich Zeit gehabt, wäre ich gekommen.'])),
        graded(dictation('Sme3 o kteb', 'Wenn ich das gewusst hätte, hätte ich dir geholfen.')),
        summary(
          [
            'Daba t9der t3ber 3la l-mcha3er, t7ell khilaf, tetnddem o tnse7.',
            'F l-unité 13: **Prüfungstraining B1** — l-formats dyal Goethe / ÖSD o telc, m3a imti7an tajribi.',
          ],
          ['T3ber 3la l-mcha3er', 'Tkhdem hätte / wäre + P.II', 'Tkhdem l-Modalpartikeln', 'Tkteb nasi7a'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
