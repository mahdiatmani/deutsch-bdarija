import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 10,
  title: 'Schule & Lernen',
  description: "L-madrasa f Almaniya, l-Kita, l-ijtima3 m3a l-oustad, o t-ta3allom — b als / wenn (f l-madi), zu + infinitiv, o um … zu.",
  icon: 'school',
  objectives: [
    'Tfhem n-nidam d l-madrasa f Almaniya',
    'Thder m3a l-oustad dyal l-wlad (Elterngespräch)',
    'T7ki 3la l-madi b "als" o "wenn"',
    'Tkhdem "zu + infinitiv": "Ich habe keine Lust, zu …"',
    'T3ti l-hadaf b "um … zu"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Die Schule in Deutschland',
      description: 'N-nidam d l-madrasa, l-mawad, o l-kalimat dyal t-ta3lim.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-mra7il dyal l-madrasa f Almaniya', 'Tsemmi l-mawad o n-no9at', 'Tsowwel 3la l-madrasa'],
      steps: [
        intro(
          'Okht Mehmet jat l Almaniya',
          'Mehmet, zmil Youssef men l-cours, jab mratou o bentou **Elif** (9 snin) l Köln. Elif khassha tdkhol l l-madrasa. Mehmet ma fhemch n-nidam: Grundschule, Gymnasium, Realschule… Frau Weber kat-char7 lih.',
          ['Tfhem n-nidam', 'Tsemmi l-mawad', 'Tsowwel'],
        ),
        dialogue(
          'Welche Schule für Elif?',
          [
            ['Mehmet', 'Frau Weber, meine Tochter ist neun. In welche Schule kommt sie?', 'Madame Weber, benti 3endha 9 snin. F ina madrasa ghadi tdkhol?'],
            ['Frau Weber', 'In die Grundschule. Die geht von der ersten bis zur vierten Klasse.', 'F l-Grundschule. Katbda men l-9ism l-oul 7tal r-rabe3.'],
            ['Mehmet', 'Und danach?', 'O men b3d?'],
            ['Frau Weber', 'Nach der vierten Klasse gehen die Kinder auf eine weiterführende Schule: zum Beispiel das Gymnasium, die Realschule oder die Gesamtschule.', 'Men b3d r-rabe3 d-drari kaymchiw l madrasa tanawiya: b7al Gymnasium, Realschule wla Gesamtschule.'],
            ['Mehmet', 'Was ist der Unterschied?', 'Chno l-farq?'],
            ['Frau Weber', 'Am Gymnasium macht man nach zwölf oder dreizehn Jahren das Abitur. Damit kann man studieren. Die Realschule dauert bis zur zehnten Klasse, danach machen viele eine Ausbildung.', 'F l-Gymnasium katdir l-Abitur men b3d 12 wla 13 3am. Bih t9der t9ra f l-jami3a. Realschule 7tal l-9ism l-3achir, o men b3d bzaf kaydirou Ausbildung.'],
            ['Mehmet', 'Elif spricht noch kein Deutsch. Ist das ein Problem?', 'Elif mazal ma kathderch l\'Almaniya. Wach hada mochkil?'],
            ['Frau Weber', 'Viele Schulen haben Willkommensklassen oder Deutschförderung. Fragen Sie am besten direkt bei der Schule.', 'Bzaf d l-madaris fihom a9sam d t-tr7ib wla d3m f l\'Almaniya. Sowwel a7ssen l-madrasa direct.'],
          ],
        ),
        vocab('Schule & Lernen — L-madrasa o t-t3allom', [
          ['der Kindergarten / die Kita', 'l-7adana / r-rawd', ''],
          ['die Grundschule', 'l-ibtida2i (1–4)', ''],
          ['das Gymnasium', 'l-lycée (7tal l-Abitur)', ''],
          ['die Klasse', 'l-9ism', 'die Klassen'],
          ['das Fach', 'l-madda', 'die Fächer', ['Mein Lieblingsfach ist Mathe.', 'L-madda l-mfddla 3endi l-maths.']],
          ['die Note', 'n-no9ta', 'die Noten'],
          ['das Zeugnis', 'l-bulletin / ch-chahada', ''],
          ['die Hausaufgabe', 'l-wajib (devoir)', 'die Hausaufgaben'],
          ['die Prüfung / der Test', 'l-imti7an', ''],
          ['der Elternabend', 'l-ijtima3 dyal l-waldin', ''],
          ['der Klassenlehrer / die Klassenlehrerin', 'l-oustad r-ra2isi dyal l-9ism', ''],
          ['loben ↔ kritisieren', 'chker ↔ nta9ed', ''],
          ['sich anmelden', 'tsejjel', ''],
          ['die Ferien (Pl.)', 'l-3otla dyal l-madrasa', ''],
        ]),
        explain(
          'N-no9at f Almaniya',
          md`
            F Almaniya n-no9at men **1 l 6** — o **1 hiya l-a7ssen**!

            | No9ta | Ma3na | Darija |
            |---|---|---|
            | 1 | sehr gut | mzyan bzaf |
            | 2 | gut | mzyan |
            | 3 | befriedigend | mqboul mzyan |
            | 4 | ausreichend | kafi (nje7) |
            | 5 | mangelhaft | na9s (ma nje7ch) |
            | 6 | ungenügend | khayb bzaf |

            F l-Maghrib 20/20 hiya l-a7ssen — f Almaniya **"eine Eins"** hiya l-a7ssen!
          `,
          [
            ['Ich habe eine Eins in Mathe!', 'Jbt 1 f l-maths (a7ssen no9ta)!'],
            ['Er hat leider eine Fünf geschrieben.', 'Jab 5, ma nje7ch.'],
          ],
        ),
        match('Rbet', [
          ['das Fach', 'l-madda'],
          ['das Zeugnis', 'l-bulletin'],
          ['die Note', 'n-no9ta'],
          ['die Ferien', '3otlat l-madrasa'],
          ['die Kita', 'l-7adana'],
        ]),
        choice('F ina madrasa ghadi tdkhol Elif?', ['Gymnasium', 'Grundschule', 'Realschule'], 1),
        choice('"eine Eins" f Almaniya hiya…', ['a khayb no9ta', 'a7ssen no9ta', 'no9ta l-wosta'], 1),
        choice('Fin katdir l-Abitur?', ['F l-Grundschule', 'F l-Gymnasium', 'F l-Kita'], 1),
        gap('Kemmel', 'Mein Lieblings___ ist Sport.', 'fach'),
        order('Rtteb', 'In welche Klasse geht deine Tochter?'),
        speak(
          'L-madrasa dyalek',
          'Hder 3la l-madrasa dyalek f l-Maghrib: l-madda l-mfddla, l-madda s-s3iba, o wach konti tilmid mzyan.',
          ['Mein Lieblingsfach war Geschichte.', 'Mathe fand ich schwer.', 'Ich hatte meistens gute Noten.'],
        ),
        graded(choice('"die Hausaufgabe" hiya…', ['l-imti7an', 'l-wajib', 'l-9ism'], 1)),
        graded(choice('Men ina 9ism l ina 9ism l-Grundschule?', ['1 – 4', '1 – 6', '5 – 10'], 0)),
        graded(choice('"eine Fünf" kat3ni…', ['nje7 b mzyan', 'ma nje7ch', 'a7ssen no9ta'], 1)),
        graded(translate("Terjem l l'Almaniya", 'L-madda l-mfddla 3endi hiya l-maths.', ['Mein Lieblingsfach ist Mathe.', 'Mein Lieblingsfach ist Mathematik.'])),
        summary(
          [
            'N-nidam: **Kita → Grundschule (1–4) → Gymnasium / Realschule / Gesamtschule → Abitur / Ausbildung**.',
            'N-no9at: **1 (sehr gut) … 6 (ungenügend)** — 1 hiya l-a7ssen!',
          ],
          ['Tfhem n-nidam d l-madrasa', 'Thder 3la l-madrasa o n-no9at'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Als ich Kind war … — als / wenn, zu, um … zu',
      description: 'als o wenn f l-madi, zu + infinitiv, o um … zu (l-hadaf).',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tfre9 bin als o wenn f l-madi', 'Tkhdem zu + infinitiv men b3d chi af3al o 3ibarat', 'T3ti l-hadaf b um … zu'],
      steps: [
        intro(
          '"Als ich Kind war, …"',
          md`
            Mehmet kay7ki l Elif: "**Als** ich Kind **war**, bin ich zu Fuß zur Schule gegangen." O kay9ollha: "Du hast keine Angst **zu** sprechen, oder?" — "Du lernst Deutsch, **um** Freunde **zu** finden."
            Tlata d l-bniyat jdad: **als**, **zu + infinitiv**, o **um … zu**.
          `,
          ['als / wenn', 'zu + infinitiv', 'um … zu'],
        ),
        explain(
          'als o wenn f l-madi',
          md`
            B jouj = *mli* (Nebensatz, l-fi3l f l-akhir). Walakin:

            | | Imta? | Mital |
            |---|---|---|
            | **als** | **merra wa7da** f l-madi (wla moddat wa7da: t-tofoula) | **Als** ich nach Deutschland **kam**, war ich 23. · **Als** ich Kind **war**, … |
            | **wenn** | **bzaf d l-merrat** f l-madi (*kol merra mli*) — ta f l-7ader / l-moustaqbal | **Wenn** ich Ferien **hatte**, bin ich immer zu meiner Oma gefahren. |

            Ghaliban m3a **wenn** f l-madi katl9a **immer / jedes Mal** (kol merra).

            M3a **als** ghaliban kaykhdmou l-**Präteritum** dyal sein, haben o l-Modalverben: als ich klein **war**, als ich keine Zeit **hatte**, als ich nicht schwimmen **konnte**.
          `,
          [
            ['Als ich zehn war, sind wir umgezogen.', 'Mli kan 3endi 10 snin, 7ewwelna.'],
            ['Wenn es geregnet hat, haben wir drinnen gespielt.', 'Kol merra mli kanet katti7 ch-chta, konna kanl3bou dakhel.'],
            ['Als ich gestern nach Hause kam, war niemand da.', 'Mli wselt l d-dar lbare7, ma kan 7ta wa7ed.'],
          ],
          'Su2al sahl: **merra wa7da?** → als. **Kol merra?** → wenn.',
        ),
        choice('"___ ich 2023 nach Köln kam, kannte ich niemanden."', ['Als', 'Wenn'], 0),
        choice('"___ meine Oma uns besucht hat, hat sie immer Kuchen gebacken."', ['Als', 'Wenn'], 1),
        choice('"___ ich ein Kind war, hatte ich einen Hund."', ['Als', 'Wenn'], 0),
        order('Rtteb', 'Als ich klein war, wollte ich Pilot werden.'),
        explain(
          'zu + infinitiv',
          md`
            Men b3d bzaf d l-af3al o l-3ibarat, l-fi3l t-tani kayji f **l-infinitiv m3a "zu"**, f l-akhir:

            **Af3al:** anfangen, aufhören (w9ef), vergessen, versuchen (7awel), vorhaben (nwa), beginnen, helfen, erlauben…
            **3ibarat:** Lust haben, Zeit haben, keine Angst haben, Es ist wichtig / schwer / schön …

            | Hauptsatz | , | … **zu** + infinitiv |
            |---|---|---|
            | Ich habe keine Lust, | | heute **zu** kochen. |
            | Vergiss nicht, | | die Hausaufgaben **zu** machen! |
            | Es ist schwer, | | eine Wohnung **zu** finden. |
            | Ich versuche, | | jeden Tag Deutsch **zu** sprechen. |

            **Trennbare Verben:** "zu" kaydkhol **bin** l-préfixe o l-fi3l: an**zu**rufen, auf**zu**stehen, ein**zu**kaufen.

            **Bla zu:** men b3d l-Modalverben (Ich **muss** arbeiten) o werden, lassen, gehen…
          `,
          [
            ['Hast du Zeit, mir zu helfen?', 'Wach 3endek l-wa9t t3awenni?'],
            ['Ich habe vergessen, dich anzurufen.', 'Nsit nttasel bik.'],
            ['Es ist wichtig, pünktlich zu sein.', 'Mohim tkoun f l-wa9t.'],
          ],
        ),
        gap('Kemmel', 'Ich habe keine Zeit, heute ___ kochen.', 'zu'),
        gap('Kemmel', 'Vergiss nicht, Brot ___. (einkaufen)', 'einzukaufen'),
        gap('Kemmel', 'Es ist schön, dich ___. (sehen)', 'zu sehen'),
        choice('Ina jomla s7i7a?', ['Ich muss zu arbeiten.', 'Ich muss arbeiten.'], 1, 'Men b3d l-Modalverb bla zu.'),
        order('Rtteb', 'Ich versuche, jeden Tag Deutsch zu sprechen.'),
        explain(
          'um … zu = bach (l-hadaf)',
          md`
            Bach tgoul **l-hadaf** (*bach…*): **um** f l-bidaya dyal l-jouz2, **zu + infinitiv** f l-akhir:

            > Ich lerne Deutsch, **um** in Deutschland **zu** arbeiten.
            > Elif geht in eine Willkommensklasse, **um** schnell Deutsch **zu** lernen.
            > **Um** gesund **zu** bleiben, mache ich Sport.

            S-sou2al: **"Wozu …?"** / **"Warum …?"** — "Wozu brauchst du das Geld?" — "**Um** ein Fahrrad **zu** kaufen."

            **um … zu** ghir ila kan **nefs l-fa3il** f j-jouj. (Ila kan fa3il akhor → "damit", f B1.)
          `,
          [
            ['Ich spare, um nach Marokko zu fliegen.', 'Kanwfer bach nmchi l l-Maghrib.'],
            ['Er steht früh auf, um pünktlich zu sein.', 'Kaynod bekri bach ykoun f l-wa9t.'],
          ],
        ),
        choice('Ina jomla s7i7a?', ['Ich gehe in die Bibliothek, um zu lernen.', 'Ich gehe in die Bibliothek, um lernen.', 'Ich gehe in die Bibliothek, zu lernen um.'], 0),
        order('Rtteb', 'Ich arbeite am Wochenende, um Geld zu verdienen.'),
        translate("Terjem l l'Almaniya", 'Kant3llem l\'Almaniya bach n9ra f l-jami3a.', ['Ich lerne Deutsch, um zu studieren.', 'Ich lerne Deutsch, um an der Universität zu studieren.', 'Ich lerne Deutsch, um an der Uni zu studieren.']),
        graded(choice('"___ ich in die Schule kam, konnte ich schon lesen."', ['Als', 'Wenn'], 0)),
        graded(choice('"Jedes Mal, ___ ich ihn sehe, lacht er."', ['als', 'wenn'], 1)),
        graded(gap('Kemmel', 'Ich habe keine Lust, ins Kino ___ gehen.', 'zu')),
        graded(gap('Kemmel', 'Hör auf, so laut ___ telefonieren!', 'zu')),
        graded(gap('Kemmel', 'Ich habe vergessen, meine Mutter ___. (anrufen)', 'anzurufen')),
        graded(gap('Kemmel', 'Wir sparen, ___ ein Auto zu kaufen.', 'um')),
        graded(translate("Terjem l l'Almaniya", 'Mli kont sghir, kont sakn f Fès.', ['Als ich klein war, habe ich in Fès gewohnt.', 'Als ich klein war, wohnte ich in Fès.', 'Als ich ein Kind war, habe ich in Fès gewohnt.'])),
        summary(
          [
            '**als** = mli (merra wa7da f l-madi) · **wenn** = kol merra mli (wla ila).',
            '**zu + infinitiv** men b3d: Lust / Zeit haben, vergessen, versuchen, anfangen, Es ist wichtig … — trennbar: an**zu**rufen.',
            '**um … zu** = bach (l-hadaf, nefs l-fa3il).',
          ],
          ['T7ki 3la l-madi b als / wenn', 'Tkhdem zu + infinitiv', 'T3ti l-hadaf b um … zu'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Elterngespräch & Lerntipps',
      description: 'Tsme3 ijtima3 m3a l-oustada, t9ra nasa2i7 dyal t-t3allom, o tkteb email l l-madrasa.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem ijtima3 m3a l-oustad', 'T9ra nasa2i7 3la t-t3allom', 'T3ref l-mosa3adat l l-waldin f l-madrasa', 'Tkteb email l l-madrasa'],
      steps: [
        intro(
          'L-ijtima3 m3a l-oustada',
          'Men b3d 3 chhour, Mehmet 3endou **Elterngespräch** (ijtima3 m3a l-oustada) 3la Elif. Men b3d, Salma kat9ra nasa2i7 3la kifach nt3allmou l-loghat mzyan.',
          ['Tfhem l-ijtima3', 'T9ra n-nasa2i7', 'Tkteb email'],
        ),
        listening(
          'Das Elterngespräch',
          [
            ['Frau Schneider', 'Herr Yılmaz, schön, dass Sie da sind. Elif macht große Fortschritte!', 'Si Yılmaz, zwin jiti. Elif katt9eddem bzaf!'],
            ['Mehmet', 'Wirklich? Das freut mich. Sie spricht zu Hause nur Türkisch.', 'B s7? Fr7t. F d-dar kathder ghir t-turkiya.'],
            ['Frau Schneider', 'Das ist kein Problem. Es ist sogar gut, die Muttersprache zu sprechen. In der Klasse versteht sie schon fast alles. Nur beim Schreiben hat sie noch Schwierigkeiten.', 'Machi mochkil. Bl3aks, mzyan thder logha l-oum. F l-9ism katfhem tagriban kolchi. Ghir f l-kitaba mazal 3endha s3oubat.'],
            ['Mehmet', 'Was können wir tun, um ihr zu helfen?', 'Chno n9adrou ndirou bach n3awnouha?'],
            ['Frau Schneider', 'Lesen Sie zusammen deutsche Kinderbücher. Und es gibt nachmittags eine kostenlose Hausaufgabenhilfe in der Schule.', '9raw m3a ba3d ktouba d d-drari b l\'Almaniya. O kayna f l-3chiya mosa3ada fabor f l-wajibat f l-madrasa.'],
            ['Mehmet', 'Super, da melde ich sie an. Und hat sie schon Freunde gefunden?', 'Mzyan, ghadi nsejjelha. O wach l9at s-s7ab?'],
            ['Frau Schneider', 'Ja, sie spielt in der Pause immer mit Lea und Ben. Sie ist ein sehr fröhliches Kind.', 'Ah, f r-ré-création dima katl3eb m3a Lea o Ben. Hiya terriya fr7ana bzaf.'],
          ],
        ),
        choice('F ach mazal Elif 3endha s3oubat?', ['F l-fahm', 'F l-kitaba', 'F r-riyada'], 1),
        choice('Chno nse7at l-oustada?', ['Ma ythedrouch t-turkiya f d-dar', 'Y9raw ktouba m3a ba3d o Hausaufgabenhilfe', 'Ybeddlou l-madrasa'], 1),
        choice('Wach thder t-turkiya f d-dar mochkil?', ['Ah', 'La, bl3aks mzyan'], 1),
        reading(
          'Lerntipps für Sprachen',
          md`
            So lernen Sie eine Sprache leichter:

            1. **Jeden Tag ein bisschen:** 20 Minuten jeden Tag sind besser als drei Stunden am Sonntag.
            2. **Mit Wörterkarten lernen:** Schreiben Sie neue Wörter mit Artikel und Plural auf Karten. Wiederholen Sie sie oft.
            3. **Keine Angst vor Fehlern:** Wer spricht, macht Fehler. Das ist normal! Versuchen Sie, so oft wie möglich zu sprechen.
            4. **Hören, hören, hören:** Hören Sie Podcasts, Musik oder Nachrichten in leichter Sprache.
            5. **Ein Tandem suchen:** Treffen Sie sich mit einer Person, die Ihre Sprache lernen möchte. Sie helfen ihr, und sie hilft Ihnen.
          `,
          {
            text: '9ra n-nasa2i7.',
            glossary: [['der Fehler', 'l-ghalat'], ['wiederholen', '3awed / raja3'], ['so oft wie möglich', 'ktar ma ymken'], ['leichte Sprache', 'logha sahla']],
          },
        ),
        choice('Chno a7ssen?', ['3 sa3at nhar l-7ad', '20 d9i9a kol nhar'], 1),
        choice('Chno howa "Tandem"?', ['Bechklita', 'Tbadol l-loghat m3a chi wa7ed', 'Cours ghali'], 1),
        culture(
          'L-madrasa o l-waldin f Almaniya',
          md`
            - **Schulpflicht:** l-madrasa **wajiba** men ~6 snin 7tal ~15–18 — 7tal l l-wlad li jaw jdad.
            - **Kita:** 3and kol terri 7a99 f blasa men **1 3am**. Sjjel bekri — l-blayes 9lal!
            - **Elternabend / Elterngespräch:** l-waldin kaymchiw l l-ijtima3at — mohim bzaf.
            - **Willkommensklassen / Deutschförderung:** l d-drari li jaw jdad.
            - **Bildung und Teilhabe (BuT):** ila 3endek d-dakhl 9lil, t9der ttleb d3m l l-adawat, r-rihlat, l-makla f l-madrasa o d-dorous l-khoussousiya.
            - **Ferien:** kaykhtalfou men wlaya l wlaya. Ma tsafarch m3a l-wlad 9bel l-3otla bla idn — kayn amenda!
          `,
        ),
        pron(
          'Konsonanten f jma3a',
          'L\'Almaniya fiha bzaf d l-7rouf s-sakina m3a ba3d. Goulhom kamlin, b chwiya 3la l-lowel.',
          [
            ['Herbst – Obst – nächste', 'rbst – bst – chst'],
            ['Hausaufgaben – Zeugnis', 'z = ts, gn'],
            ['Pflicht – Kopf – Pflaster', 'pf: p o f m3a ba3d'],
            ['Schulpflicht', 'sch + pfl + cht'],
          ],
        ),
        write(
          'Email l l-oustada',
          'Wldek (wla bentek) mrid o ghadi ytghiyeb. Kteb email l l-oustada (6–8 jmel): goul belli mrid o 7tal imta, sowwel 3la l-wajibat, o tleb ijtima3 (Elterngespräch) b ladab — khdem **zu + infinitiv** o **um … zu**.',
          ['Liebe Frau … ,', 'L-ghiyab o s-sabab', 'Sou2al 3la l-Hausaufgaben', 'Talab dyal ijtima3 (Ich hätte gern einen Termin, um … zu sprechen)', 'Mit freundlichen Grüßen'],
          'Liebe Frau Schneider,\n\nleider ist Elif krank und kann bis Mittwoch nicht in die Schule kommen. Könnten Sie mir bitte sagen, welche Hausaufgaben sie machen soll? Ich versuche, mit ihr zu Hause zu üben. Außerdem hätte ich gern einen Termin, um über ihre Fortschritte im Schreiben zu sprechen. Haben Sie nächste Woche Zeit?\n\nMit freundlichen Grüßen\nMehmet Yılmaz',
          55,
        ),
        graded(choice('"die Schulpflicht" kat3ni…', ['l-madrasa wajiba', 'l-madrasa ghalia', 'l-wajib'], 0)),
        graded(choice('"der Fortschritt" howa…', ['t-ta9addom', 'l-mochkil', 'l-ghalat'], 0)),
        graded(choice('Ila d-dakhl 9lil, t9der ttleb d3m l l-madrasa men…', ['BuT (Bildung und Teilhabe)', 'Rundfunkbeitrag', 'Kaution'], 0)),
        graded(dictation('Sme3 o kteb', 'Es ist wichtig, jeden Tag zu lernen.')),
        summary(
          [
            '**Elterngespräch, Fortschritte, Schwierigkeiten, Hausaufgabenhilfe**.',
            'Nasa2i7: kol nhar chwiya, Wörterkarten, ma tkhafch men l-ghalat, Tandem.',
            '**Schulpflicht, Kita, Willkommensklasse, BuT**.',
          ],
          ['Tfhem ijtima3 m3a l-oustad', 'T9ra nasa2i7 dyal t-t3allom', 'Tkteb email l l-madrasa'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 10',
      description: 'Muraja3a: l-madrasa, als/wenn, zu + infinitiv, um … zu — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 als/wenn o zu / um … zu', 'Thder 3la t-t3allom', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-madrasa f Almaniya, als / wenn, zu + infinitiv, o um … zu.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Als** ich klein **war**, … (merra / moddat wa7da) · **Wenn** ich Zeit **hatte**, … (kol merra)
            - Ich habe keine Lust, **zu** kochen. · Vergiss nicht, ein**zu**kaufen.
            - Ich lerne, **um** die Prüfung **zu** bestehen.
          `,
        ),
        dialogue(
          'Erinnerungen an die Schulzeit',
          [
            ['Olena', 'Wie war deine Schulzeit in Marokko, Youssef?', 'Kif kanet l-madrasa dyalek f l-Maghrib, Youssef?'],
            ['Youssef', 'Streng! Als ich in der Grundschule war, mussten wir eine Uniform tragen.', 'Sarma! Mli kont f l-ibtida2i, kan khassna nlbsou tablia.'],
            ['Olena', 'Bei uns auch. Und wenn wir unsere Hausaufgaben vergessen hatten, gab es Ärger.', '3endna ta. O kol merra mli kanensaw l-wajib, kant l-mochkil.'],
            ['Youssef', 'Genau! Aber ich hatte immer Lust, Neues zu lernen.', 'Bdebt! Walakin dima kant 3endi r-raghba nt3llem chi 7aja jdida.'],
            ['Olena', 'Und heute lernst du Deutsch, um Krankenpfleger zu werden.', 'O lyouma kat3llem l\'Almaniya bach twelli fermli.'],
          ],
        ),
        choice('Chno kan khass Youssef ylbes f l-ibtida2i?', ['Uniform (tablia)', 'Sbbat d r-riyada', 'Walou'], 0),
        gap('Kemmel', '___ ich in der Grundschule war, mussten wir eine Uniform tragen. ___ wir die Hausaufgaben vergessen hatten, gab es Ärger.', ['Als', 'Wenn']),
        match('Rbet', [
          ['anrufen', 'anzurufen'],
          ['aufstehen', 'aufzustehen'],
          ['einkaufen', 'einzukaufen'],
          ['mitkommen', 'mitzukommen'],
        ]),
        speak(
          'Role-play: t-t3allom',
          'Sa7bek kaysowlek: *Wie lernst du Deutsch? Warum lernst du Deutsch? Was hast du als Kind gern gemacht?* — Jaweb b um … zu, zu + infinitiv, o als.',
          ['Ich versuche, jeden Tag Podcasts zu hören.', 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', 'Als ich Kind war, habe ich viel gelesen.'],
        ),
        graded(choice('"___ ich 18 war, habe ich den Führerschein gemacht."', ['Als', 'Wenn'], 0)),
        graded(choice('"Immer ___ es schneite, haben wir draußen gespielt."', ['als', 'wenn'], 1)),
        graded(gap('Kemmel', 'Ich habe keine Angst, Fehler ___ machen.', 'zu')),
        graded(gap('Kemmel', 'Es ist nicht leicht, früh ___. (aufstehen)', 'aufzustehen')),
        graded(choice('Ina jomla s7i7a?', ['Ich spare, um ein Fahrrad kaufen.', 'Ich spare, um ein Fahrrad zu kaufen.'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich kann heute zu kommen.', 'Ich kann heute kommen.'], 1)),
        graded(choice('"das Zeugnis" howa…', ['l-bulletin', 'l-imti7an', 'l-wajib'], 0)),
        graded(choice('F Almaniya a7ssen no9ta hiya…', ['6', '1', '20'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ma 3endich r-raghba nkhdem lyouma.', ['Ich habe keine Lust, heute zu arbeiten.', 'Ich habe heute keine Lust zu arbeiten.'])),
        graded(dictation('Sme3 o kteb', 'Als ich klein war, wollte ich Lehrer werden.')),
        summary(
          [
            'Daba t9der thder 3la l-madrasa, l-madi dyalek, o l-ahdaf dyalek.',
            'F l-unité 11: l-idarat, l-banka o l-khidmat — **l-Passiv** (wird gemacht), **lassen**, o **l-af3al m3a prépositions** (warten auf, sich kümmern um).',
          ],
          ['Tfhem n-nidam d l-madrasa', 'Tkhdem als / wenn', 'Tkhdem zu + infinitiv o um … zu'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
