import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 3,
  title: 'Familie & Menschen',
  description: "Thder 3la l-3a2ila dyalek, twesef n-nas, tgoul chno l-khedma dyalhom, o tt3llem der, die, das.",
  icon: 'family_restroom',
  objectives: [
    'Thder 3la l-3a2ila dyalek o t9eddem n-nas f chi tswira',
    'Tgoul chno l-khedma dyalek o dyal l-akhrin',
    'Tfhem 3lach kayn der, die, das o t7fed s-smiya m3a l-article dyalha',
    'Tkhdem l-jam3 dyal s-smiyat',
    'Tkhdem mein, dein, sein, ihr, unser…',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Das ist meine Familie',
      description: 'L-3a2ila, l-khedma, o kifach t9eddem n-nas f tswira.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi n-nas f l-3a2ila', 'T9eddem chi wa7ed: "Das ist mein Bruder."', 'Tgoul l-khedma: "Er ist Lehrer."'],
      steps: [
        intro(
          'Tsawer l-3a2ila',
          'F l-pause dyal l-cours, Salma kat-werri l Olena tsawer dyal l-3a2ila dyalha f Fès. Sme3 kifach kat9eddem kol wa7ed.',
          ['Tsemmi n-nas dyal l-3a2ila', 'T9eddem chi wa7ed f tswira', 'Tgoul chno kaydir f l-7ayat'],
        ),
        dialogue(
          'Familienfotos',
          [
            ['Olena', 'Ist das deine Familie?', 'Wach hadi l-3a2ila dyalek?'],
            ['Salma', 'Ja. Das sind meine Eltern. Mein Vater heißt Abdelkader, er ist Lehrer.', 'Ah. Hadou waldiya. Bba smiytou Abdelkader, howa oustad.'],
            ['Olena', 'Und die Frau hier? Ist das deine Mutter?', 'O had l-mra hna? Wach hadi mmok?'],
            ['Salma', 'Ja, das ist meine Mutter Fatima. Sie ist Krankenschwester.', 'Ah, hadi mmi Fatima. Hiya fermliya.'],
            ['Olena', 'Und wer ist der Junge?', 'O chkoun had l-weld?'],
            ['Salma', 'Das ist mein Bruder Amine. Er ist sechzehn und geht noch zur Schule.', 'Hada khouya Amine. 3endou 16 o mazal kay9ra f l-madrasa.'],
            ['Olena', 'Hast du auch eine Schwester?', 'Wach 3endek ta chi okht?'],
            ['Salma', 'Ja, Nadia. Sie ist verheiratet und hat zwei Kinder.', 'Ah, Nadia. Hiya mzowja o 3endha jouj d l-wlad.'],
          ],
        ),
        vocab('Die Familie', [
          ['die Mutter', 'l-oumm / l-walida', 'die Mütter'],
          ['der Vater', 'l-ab / l-walid', 'die Väter'],
          ['die Eltern', 'l-waldin (ghir jam3)', ''],
          ['die Schwester', 'l-okht', 'die Schwestern'],
          ['der Bruder', 'l-akh / khouya', 'die Brüder'],
          ['die Geschwister', 'l-khout (ghir jam3)', '', ['Ich habe drei Geschwister.', '3endi 3 d l-khout.']],
          ['die Tochter', 'l-bent (bent fulan)', 'die Töchter'],
          ['der Sohn', 'l-weld (weld fulan)', 'die Söhne'],
          ['das Kind', 'l-weld / t-terri', 'die Kinder'],
          ['die Großmutter / die Oma', 'l-jedda / mmi l-kbira', 'die Großmütter'],
          ['der Großvater / der Opa', 'j-jedd / bba l-kbir', 'die Großväter'],
          ['die Tante', 'l-3amma / l-khala', 'die Tanten'],
          ['der Onkel', 'l-3amm / l-khal', 'die Onkel'],
          ['der Mann', 'r-rajel / r-rajel dyal', 'die Männer', ['Das ist ihr Mann.', 'Hada rajelha.']],
          ['die Frau', 'l-mra / l-mra dyal', 'die Frauen', ['Das ist seine Frau.', 'Hadi mratou.']],
        ], 'F l\'Almaniya ma kaynch fer9 bin *3amm* o *khal*: b jouj "Onkel". O *3amma* o *khala* b jouj "Tante".'),
        explain(
          'T9eddem chi wa7ed',
          md`
            Bach tweri chi wa7ed f tswira:

            - "Das ist mein Vater." = *hada bba.*
            - "Das ist meine Mutter." = *hadi mmi.*
            - "Das sind meine Eltern." = *hadou waldiya.* (jam3 → **sind**)

            Bach tsowwel: "Wer ist das?" — "Ist das dein Bruder?" — "Wie heißt deine Schwester?"

            **mein** wla **meine**? Ghadi nchar7ouha mzyan f d-ders t-tani. Daba: l-mudhakkar (der) → **mein**, l-mu2annath (die) o l-jam3 → **meine**.
          `,
          [
            ['Das ist mein Opa. Er ist achtzig.', 'Hada jeddi. 3endou 80 3am.'],
            ['Das sind meine Geschwister.', 'Hadou khouti.'],
            ['Wer ist das? — Das ist meine Tante Khadija.', 'Chkoun hadi? — Hadi khalti Khadija.'],
          ],
        ),
        vocab('Berufe — L-khdayem', [
          ['der Lehrer / die Lehrerin', 'l-oustad / l-oustada'],
          ['der Arzt / die Ärztin', 't-tbib / t-tbiba'],
          ['der Krankenpfleger / die Krankenpflegerin', 'l-fermli / l-fermliya'],
          ['die Krankenschwester', 'l-fermliya (kelma 9dima chwiya)'],
          ['der Ingenieur / die Ingenieurin', 'l-mohandis / l-mohandisa'],
          ['der Verkäufer / die Verkäuferin', 'l-bya3 / l-bya3a (f l-7anout)'],
          ['der Student / die Studentin', 't-taleb / t-taliba (f l-jami3a)'],
          ['der Schüler / die Schülerin', 't-tilmid / t-tilmida'],
          ['der Koch / die Köchin', 't-tebbakh / t-tebbakha'],
          ['der Fahrer / die Fahrerin', 's-sa2i9 / s-sa2i9a'],
          ['arbeitslos', 'ma kaykhdemch / bla khedma'],
          ['in Rente', 'f t-ta9a3od (retraite)'],
        ]),
        explain(
          'Chno l-khedma dyalek?',
          md`
            - "Was sind Sie von Beruf?" / "Was bist du von Beruf?" = *chno l-khedma dyalek?*
            - "Ich bin Lehrer." / "Sie ist Ärztin."

            **Rd l-bal:** m3a l-khedma **ma katzidch article**: "Ich bin ~~ein~~ Lehrer" → **"Ich bin Lehrer."** (b7al Darija: *ana oustad*).

            **L-mu2annath:** ktar l-khdayem kayzidou **-in** l l-mra: Lehrer → Lehrer**in**, Student → Student**in**. Chi wa7din kayzidou umlaut: Arzt → **Ä**rzt**in**, Koch → K**ö**ch**in**.

            Bach tgoul fin katkhdem: "Ich arbeite **bei** Siemens / **im** Krankenhaus / **in** einer Bäckerei."
          `,
          [
            ['Was bist du von Beruf? — Ich bin Student.', 'Chno katkhdem? — Ana taleb.'],
            ['Meine Mutter ist Ärztin.', 'Mmi tbiba.'],
            ['Mein Vater ist in Rente.', 'Bba f retraite.'],
          ],
        ),
        match('Rbet', [
          ['die Großmutter', 'l-jedda'],
          ['der Sohn', 'l-weld (weld fulan)'],
          ['die Geschwister', 'l-khout'],
          ['die Eltern', 'l-waldin'],
          ['der Onkel', 'l-3amm / l-khal'],
        ]),
        choice('Salma: "Das ist mein Bruder Amine." — Amine chkoun 3end Salma?', ['khouha', 'bba-ha', 'weldha'], 0),
        choice('Ina jomla s7i7a?', ['Ich bin ein Arzt.', 'Ich bin Arzt.', 'Ich Arzt.'], 1, 'M3a l-khedma bla article: "Ich bin Arzt."'),
        gap('Kemmel l-mu2annath', 'Er ist Lehrer, sie ist ___.', 'Lehrerin'),
        gap('Kemmel l-mu2annath', 'Er ist Arzt, sie ist ___.', 'Ärztin|Aerztin'),
        order('Rtteb', 'Das sind meine Eltern.', undefined, { dar: 'Hadou waldiya.' }),
        speak(
          'Werri tswira dyal l-3a2ila dyalek',
          'Tkhayyel 3endek tswira dyal l-3a2ila. 9eddem 3 d n-nas: chkoun houma, smiyathom, l-3omr wla l-khedma.',
          ['Das ist mein Vater. Er heißt Mohamed. Er ist Fahrer.', 'Das ist meine Mutter. Sie heißt Aicha. Sie ist Lehrerin.', 'Das sind meine Geschwister.'],
        ),
        graded(choice('"die Tochter" kat3ni…', ['l-okht', 'l-bent (bent fulan)', 'l-jedda'], 1)),
        graded(choice('Kifach tsowwel 3la l-khedma (rasmi)?', ['Was sind Sie von Beruf?', 'Wer sind Sie?', 'Was haben Sie?'], 0)),
        graded(gap('Kemmel', 'Das ___ meine Großeltern.', 'sind', 'Jam3 → "sind".')),
        graded(translate("Terjem l l'Almaniya", 'Mmi tbiba.', ['Meine Mutter ist Ärztin.', 'Meine Mutter ist Aerztin.'])),
        graded(choice('L-mu2annath dyal "Student"?', ['Studentin', 'Studentine', 'Studenta'], 0)),
        summary(
          [
            'L-3a2ila: **Mutter, Vater, Eltern, Bruder, Schwester, Geschwister, Sohn, Tochter, Oma, Opa, Onkel, Tante**.',
            '"Das ist mein Bruder." — "Das sind meine Eltern."',
            'L-khedma bla article: **"Ich bin Lehrer."** L-mra: Lehrer**in**, Ärzt**in**.',
          ],
          ['T9eddem l-3a2ila dyalek', 'Tgoul l-khedma dyalek o dyal l-akhrin'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'der, die, das — l-article o l-jam3',
      description: '3lach kayn 3 d l-articles, kifach t7efdhom, l-jam3 dyal s-smiyat, o mein / dein / sein / ihr.',
      minutes: 30,
      kind: 'grammar',
      goals: ['Tfhem 3lach der / die / das', 'T3ref chi 9awa3id kat3awnek', 'Tkhdem l-jam3 (die)', 'Tkhdem mein, dein, sein, ihr, unser, euer, Ihr'],
      steps: [
        intro(
          'L-3a9ba l-kbira (o kifach nfoutouha)',
          md`
            F Darija kayn *l-* l kolchi: *l-weld, l-bent, l-kas*. F l'Almaniya kaynin **3**: **der** (mudhakkar), **die** (mu2annath), **das** (ma chi hadi ma chi hadak).
            O l-mochkil: ghaliban **ma kaynach mantiq**. "der Tisch" (t-tabla) mudhakkar, "die Lampe" mu2annatha, "das Buch" neutre.

            S-sirr: **t7fed dima s-smiya m3a l-article dyalha**, b7al ila kanou kelma wa7da: *dertisch, dielampe, dasbuch*.
          `,
          ['T3ref l-articles', 'Tst3mel l-ilwan bach t7fed', 'Tkhdem l-jam3 o l-possessifs'],
        ),
        explain(
          'der, die, das',
          md`
            | Article | Genus | Mital |
            |---|---|---|
            | **der** | maskulin | "der Vater", "der Tisch", "der Bahnhof" |
            | **die** | feminin | "die Mutter", "die Lampe", "die Stadt" |
            | **das** | neutral | "das Kind", "das Buch", "das Auto" |

            F had l-app dima kanlawnou: **der = zre9**, **die = 7mer**, **das = khder**. Dir nefs l-ilwan f l-kounnach dyalek!

            **Chi 9awa3id li kat3awnek:**
            - N-nas: ghaliban 3la 7sab l-jins: der Mann, die Frau, der Bruder, die Tante.
            - **-in, -ung, -heit, -keit, -schaft, -ion, -tät** → dima **die**: die Lehrerin, die Wohnung, die Freiheit, die Nation.
            - **-chen, -lein** (sghir) → dima **das**: das Mädchen (l-bent!), das Brötchen.
            - **-er** ila kan chakhs kaydir chi khedma → **der**: der Lehrer, der Fahrer.
            - L-iyyam, l-chhour, l-fousoul → **der**: der Montag, der Januar, der Sommer.
          `,
          [
            ['der Tisch – die Lampe – das Buch', 't-tabla – l-lamba – l-ktab'],
            ['die Wohnung', 'd-dar / l-appartement (-ung → die)'],
            ['das Mädchen', 'l-bent (-chen → das!)'],
          ],
          'Ma t9ollch "chno l-mantiq?". 7fed s-smiya **m3a** l-article dyalha men l-awwel, o 3awedha b sout 3ali: "der Tisch, der Tisch".',
        ),
        choice('Ina article? ___ Wohnung', ['der', 'die', 'das'], 1, '-ung → dima **die**.'),
        choice('Ina article? ___ Mädchen', ['der', 'die', 'das'], 2, '-chen → dima **das**, 7tal ila kan bent!'),
        choice('Ina article? ___ Lehrerin', ['der', 'die', 'das'], 1, '-in → **die**.'),
        choice('Ina article? ___ Montag', ['der', 'die', 'das'], 0, 'L-iyyam → **der**.'),
        explain(
          'L-jam3 (Plural): dima "die"',
          md`
            Khbar zwin: f l-jam3 **kolchi die**: die Väter, die Mütter, die Kinder.

            Walakin s-smiya rasha kat-tbeddel b toro9 mokhtalifa:

            | Nihaya | Mofrad → Jam3 |
            |---|---|
            | **-e** | der Tag → die Tag**e**, der Sohn → die S**ö**hn**e** |
            | **-er** | das Kind → die Kind**er**, der Mann → die M**ä**nn**er** |
            | **-(e)n** | die Frau → die Frau**en**, die Schwester → die Schwester**n** |
            | **-s** | das Auto → die Auto**s**, das Handy → die Handy**s** |
            | **–** (bla) | der Lehrer → die Lehrer, der Onkel → die Onkel |

            - L-féminin ghaliban **-(e)n**: die Lampe → die Lampen, die Lehrerin → die Lehrerin**nen**.
            - Ktar men l-mots l-ajnabiya → **-s**.
            - F l-9amous dima kaykteb l-jam3: "das Kind, -er" = die Kinder.
          `,
          [
            ['ein Kind – zwei Kinder', 'weld wa7ed – jouj d l-wlad'],
            ['eine Frau – drei Frauen', 'mra wa7da – 3 d l-3yalat'],
            ['ein Auto – zwei Autos', 'tomobil wa7da – jouj d t-tomobilat'],
          ],
        ),
        match('Rbet l-mofrad m3a l-jam3', [
          ['der Bruder', 'die Brüder'],
          ['die Schwester', 'die Schwestern'],
          ['das Kind', 'die Kinder'],
          ['das Handy', 'die Handys'],
          ['die Lehrerin', 'die Lehrerinnen'],
        ]),
        gap('Kemmel l-jam3', 'Ich habe zwei ___ (Bruder).', 'Brüder|Brueder'),
        gap('Kemmel l-jam3', 'Nadia hat zwei ___ (Kind).', 'Kinder'),
        explain(
          'mein, dein, sein, ihr … (Possessivartikel)',
          md`
            Bach tgoul *dyali, dyalek, dyalou…*:

            | | der (m) / das (n) | die (f) / jam3 |
            |---|---|---|
            | ich → | **mein** Vater | **meine** Mutter / Eltern |
            | du → | **dein** Bruder | **deine** Schwester |
            | er → | **sein** Kind | **seine** Frau |
            | sie → | **ihr** Mann | **ihre** Tochter |
            | wir → | **unser** Sohn | **unsere** Kinder |
            | ihr → | **euer** Opa | **eure** Oma |
            | Sie → | **Ihr** Name | **Ihre** Adresse |

            **9a3ida:** m3a **die** o l-**jam3** zid **-e**.

            Rd l-bal: "sein" = *dyalou* (howa), "ihr" = *dyalha* (hiya). "Youssef und **seine** Schwester", "Salma und **ihr** Bruder".
          `,
          [
            ['Wie heißt dein Vater?', 'Chno smiyt bbak?'],
            ['Salma und ihr Bruder', 'Salma o khouha'],
            ['Youssef und seine Mutter', 'Youssef o mmou'],
            ['Wie ist Ihre Adresse?', 'Chno l-3onwan dyalek? (rasmi)'],
          ],
          'F Darija *dyalou/dyalha* kayt-beddel 3la 7sab **mol** l-7aja. F l\'Almaniya ta: **sein** = howa, **ihr** = hiya. Walakin **-e** kayt-beddel 3la 7sab **l-7aja** (die → -e).',
        ),
        choice('Salma: "Das ist ___ Mutter."', ['mein', 'meine', 'meinen'], 1, '"die Mutter" → meine.'),
        choice('Youssef und ___ Bruder', ['sein', 'ihr', 'seine'], 0, 'Youssef = howa → sein; "der Bruder" → bla -e.'),
        choice('Salma und ___ Eltern', ['seine', 'ihre', 'ihr'], 1, 'Salma = hiya → ihr; jam3 → ihr**e**.'),
        gap('Kemmel', 'Frau Weber, wie ist ___ Telefonnummer?', 'Ihre', 'Rasmi → Ihr; "die Nummer" → Ihre.'),
        translate("Terjem l l'Almaniya", 'Khti smiytha Nadia.', ['Meine Schwester heißt Nadia.', 'Meine Schwester heisst Nadia.']),
        graded(choice('Ina article? ___ Freiheit', ['der', 'die', 'das'], 1)),
        graded(choice('Ina article? ___ Brötchen', ['der', 'die', 'das'], 2)),
        graded(gap('Kemmel l-jam3', 'Wir haben drei ___ (Auto).', 'Autos')),
        graded(choice('Mehmet und ___ Frau', ['ihr', 'seine', 'sein'], 1)),
        graded(gap('Kemmel', 'Das sind ___ (ana) Geschwister.', 'meine')),
        graded(choice('Chno l-jam3 dyal "die Frau"?', ['die Fraus', 'die Frauen', 'die Fräue'], 1)),
        summary(
          [
            '**der** (zre9), **die** (7mer), **das** (khder) — 7fed kol smiya m3a l-article.',
            '-in, -ung, -heit, -keit → **die**; -chen → **das**; l-iyyam o l-chhour → **der**.',
            'L-jam3 dima **die**, walakin n-nihaya kat-tbeddel: -e, -er, -(e)n, -s, wla walou.',
            '**mein / meine**, **sein** (howa), **ihr** (hiya) — **-e** m3a die o l-jam3.',
          ],
          ['T3ref l-article dyal s-smiyat li t3llemti', 'Tkhdem l-jam3', 'Tgoul dyali, dyalek, dyalou…'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Meine Familie in Casablanca',
      description: 'T9ra nass 3la l-3a2ila, twesef n-nas, o tkteb 3la l-3a2ila dyalek.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra nass 3la l-3a2ila o tfhem t-tafasil', 'Twesef n-nas b sifat sahla', 'Tnte9 l-7rouf twal o l-9sar', 'Tkteb 3la l-3a2ila dyalek'],
      steps: [
        intro(
          'Youssef kayktebl Lukas',
          'Lukas sowwel Youssef 3la l-3a2ila dyalou. Youssef kteb lih email twil chwiya. 9rah, o men b3d nt3allmou kifach nwesfou n-nas.',
          ['T9ra o tfhem', 'Twesef n-nas', 'Tkteb nass 9sir'],
        ),
        reading(
          'Hallo Lukas!',
          md`
            Hallo Lukas,

            du fragst nach meiner Familie. Hier ist ein Foto! Meine Familie wohnt in Casablanca. Mein Vater heißt Hassan. Er ist 58 Jahre alt und arbeitet als Taxifahrer. Er ist sehr lustig. Meine Mutter heißt Latifa, sie ist 52. Sie ist Hausfrau und kocht fantastisch!

            Ich habe drei Geschwister: zwei Schwestern und einen Bruder. Meine Schwester Imane ist 30. Sie ist Ingenieurin und wohnt mit ihrem Mann in Rabat. Sie haben eine Tochter, Lina. Lina ist drei und sehr süß. Meine Schwester Hajar ist 20, sie ist Studentin. Mein Bruder Ayoub ist 15 und geht noch zur Schule. Er spielt den ganzen Tag Fußball.

            Meine Oma wohnt auch bei uns. Sie ist schon 80, aber sie ist noch sehr fit.

            Und deine Familie? Wohnt sie in Hamburg?

            Viele Grüße
            Youssef
          `,
          {
            text: '9ra l-email o men b3d jaweb 3la s-sou2alat. 7awel tfhem bla t-terjama awwalan.',
            glossary: [
              ['arbeitet als', 'kaykhdem k…'],
              ['lustig', 'kayda7ek / dre7'],
              ['kocht', 'kattiyeb'],
              ['süß', 'zwina / 7lowa'],
              ['den ganzen Tag', 'n-nhar kamel'],
              ['bei uns', '3endna (f darna)'],
              ['noch sehr fit', 'mazala b s7t-ha'],
            ],
          },
        ),
        choice('Chno l-khedma dyal bba Youssef?', ['Lehrer', 'Taxifahrer', 'Ingenieur'], 1),
        choice('Fin sakna Imane?', ['In Casablanca', 'In Rabat', 'In Hamburg'], 1),
        choice('Chkoun Lina?', ['L-okht dyal Youssef', 'Bent okht Youssef (bent Imane)', 'L-jedda'], 1),
        choice('Ch7al men khout 3end Youssef?', ['2', '3', '4'], 1, '"Ich habe drei Geschwister: zwei Schwestern und einen Bruder."'),
        choice('Wach l-jedda sakna m3ahom?', ['Ah', 'La'], 0, '"Meine Oma wohnt auch bei uns."'),
        vocab('Menschen beschreiben — Twesef n-nas', [
          ['jung ↔ alt', 'sghir f s-sen ↔ kbir f s-sen'],
          ['groß ↔ klein', 'twil ↔ 9sir'],
          ['nett', 'drif / mzyan m3a n-nas'],
          ['freundlich', 'mbtasem / drif'],
          ['lustig', 'dre7 / kayda7ek'],
          ['ruhig', 'hadi / sakt'],
          ['sportlich', 'riyadi'],
          ['fleißig', 'mjtahed'],
          ['süß', '7lou / zwin (l s-sghar)'],
          ['sehr', 'bzaf', '', ['Sie ist sehr nett.', 'Hiya drifa bzaf.']],
          ['ein bisschen', 'chwiya'],
        ]),
        explain(
          'Twesef b "sein" + sifa',
          md`
            Bach twesef chi wa7ed: **sein + sifa**. S-sifa **ma kat-tbeddelch** hna:

            - "Mein Vater **ist** lustig." — "Meine Mutter **ist** lustig." — "Meine Eltern **sind** lustig."

            (F d-Darija kangoulou *dre7 / dre7a / dre7in*. F l'Almaniya **nefs l-kelma** dima ila kanet men b3d "sein".)

            Bach tzid l-9owwa: **sehr** (bzaf), **ziemlich** (chwiya bzaf), **ein bisschen** (chwiya), **nicht** (machi):
            - "Er ist **nicht** groß." = *howa machi twil.*
          `,
          [
            ['Lina ist sehr süß.', 'Lina 7lowa bzaf.'],
            ['Mein Bruder ist ein bisschen faul.', 'Khouya mkasel chwiya.'],
            ['Meine Großeltern sind alt, aber fit.', 'Jeddi o jedti kbar, walakin b s7t-hom.'],
          ],
        ),
        gap('Kemmel', 'Meine Schwestern ___ sehr freundlich.', 'sind'),
        choice('Ina jomla s7i7a?', ['Meine Mutter ist nette.', 'Meine Mutter ist nett.', 'Meine Mutter nett.'], 1, 'Men b3d "sein" s-sifa bla nihaya.'),
        pron(
          'Vokale: twila wla 9sira?',
          md`
            F l'Almaniya l-7rouf l-mte7rrka kaykounou **twal** wla **9sar**, o hadchi kaybeddel l-ma3na!
            - Ila men b3d l-7arf **7arf wa7ed** sakin → ghaliban **twil**: V**a**ter, B**ru**der, **O**ma.
            - Ila men b3d l-7arf **jouj 7rouf** sakinin → ghaliban **9sir**: M**u**tter, Schw**e**ster, M**a**nn.
            - **ie**, **ah**, **eh**, **oh** dima twila: S**ie**, S**oh**n, s**eh**r.
          `,
          [
            ['Vater – Mann', 'aaa twila – a 9sira'],
            ['Bruder – Mutter', 'ouuu twila – ou 9sira'],
            ['Sohn – Sonne', 'ooo twila – o 9sira'],
            ['Oma – Onkel', 'ooo twila – o 9sira'],
            ['Tante – Vater', 'a 9sira – aaa twila'],
          ],
        ),
        dictation('Sme3 o kteb', 'Meine Mutter ist sehr nett.'),
        write(
          'Kteb 3la l-3a2ila dyalek',
          'Kteb email 9sir (5–7 jmel) l Lukas 3la l-3a2ila dyalek: chkoun houma, smiyathom, l-3omr, l-khedma, fin saknin, o kifach houma (sifa wa7da 3la l-a9al).',
          ['Salam o "du fragst nach meiner Familie"', 'Waldik (smiya, khedma)', 'Khoutek (ch7al, l-3omr)', 'Sifa wa7da 3la l-a9al (nett, lustig…)', 'Twadi3 (Viele Grüße)'],
          'Hallo Lukas,\n\nhier ist meine Familie. Mein Vater heißt Rachid, er ist 55 und arbeitet als Verkäufer. Meine Mutter Nadia ist Lehrerin. Sie ist sehr nett. Ich habe zwei Brüder. Mein Bruder Omar ist 19 und Student. Mein Bruder Yassine ist 12. Er ist sehr lustig. Meine Familie wohnt in Tanger.\n\nViele Grüße\nSalma',
          35,
        ),
        graded(choice('Youssef: "Meine Schwester Imane … wohnt mit ihrem Mann in Rabat." — Imane …', ['3azba', 'mzowja', 'tilmida'], 1)),
        graded(choice('Chno l-3aks dyal "groß"?', ['alt', 'klein', 'jung'], 1)),
        graded(gap('Kemmel', 'Mein Opa ___ achtzig, aber er ___ noch fit.', ['ist', 'ist'])),
        graded(dictation('Sme3 o kteb', 'Mein Bruder ist sehr sportlich.')),
        summary(
          [
            'Twesef: **sein + sifa** — s-sifa ma kat-tbeddelch: "Sie ist nett", "Sie sind nett".',
            'sehr / ziemlich / ein bisschen / nicht + sifa.',
            'Vokal twil (Vater, Sohn) wla 9sir (Mann, Mutter): rd l-bal l l-7rouf li men b3d.',
          ],
          ['T9ra email 3la l-3a2ila', 'Twesef n-nas', 'Tkteb 3la l-3a2ila dyalek'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 3',
      description: "Muraja3a: l-3a2ila, l-khdayem, der/die/das, l-jam3, mein/dein — o t-test.",
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-unité 3', 'Thder 3la l-3a2ila f mo7adatha', 'Tnje7 f t-test'],
      steps: [
        intro(
          'Muraja3a dyal l-unité 3',
          'L-3a2ila, l-khdayem, l-articles der/die/das, l-jam3 o l-possessifs. Nraj3ou, o men b3d t-test.',
          ['Traja3', 'Tmrren', 'Dir t-test'],
        ),
        explain(
          'Kolchi f jadwal',
          md`
            | | der | die | das | jam3 (die) |
            |---|---|---|---|---|
            | Mital | der Vater | die Mutter | das Kind | die Eltern |
            | ich | mein | meine | mein | meine |
            | er | sein | seine | sein | seine |
            | sie | ihr | ihre | ihr | ihre |

            - L-khedma bla article: "Sie ist Ärztin."
            - Twesef: "Er ist nett." (s-sifa ma kat-tbeddelch)
          `,
        ),
        culture(
          'L-3a2ila f Almaniya',
          md`
            - F Almaniya ghaliban **l-3a2ila sghira**: ktar l-3a2ilat 3endhom 1 wla 2 d l-wlad.
            - Bzaf d ch-chbab kaykhorjou men dar l-waldin bekri (**18–25 3am**) bach y9raw wla ykhedmou.
            - Kaynin ktar men chkel dyal l-3a2ila: waldin mzowjin, waldin machi mzowjin, ab wla oumm bouhdou (*alleinerziehend*), "Patchworkfamilie".
            - L-jedd o l-jedda ghaliban **ma kaysknouch** m3a l-wlad.

            Ila sowlek chi alemani: *"Wohnst du noch bei deinen Eltern?"* — ma t3jebch: had s-sou2al 3adi bzaf.
          `,
        ),
        dialogue(
          'Wer ist das?',
          [
            ['Lukas', 'Ist das ein Foto von deiner Familie?', 'Wach hadi tswira dyal l-3a2ila dyalek?'],
            ['Youssef', 'Ja. Das ist meine Schwester Imane mit ihrem Mann Karim.', 'Ah. Hadi khti Imane m3a rajelha Karim.'],
            ['Lukas', 'Und das Kind?', 'O t-terri?'],
            ['Youssef', 'Das ist ihre Tochter Lina.', 'Hadi bent-ha Lina.'],
            ['Lukas', 'Süß! Und was ist Karim von Beruf?', '7lowa! O chno l-khedma dyal Karim?'],
            ['Youssef', 'Er ist Arzt. Er arbeitet in einem Krankenhaus in Rabat.', 'Howa tbib. Kaykhdem f sbitar f Rabat.'],
          ],
        ),
        choice('Chkoun Karim?', ['Khou Youssef', 'Rajel okht Youssef', 'Bba Youssef'], 1),
        match('Rbet l-mofrad m3a l-jam3', [
          ['die Tante', 'die Tanten'],
          ['der Sohn', 'die Söhne'],
          ['die Tochter', 'die Töchter'],
          ['der Onkel', 'die Onkel'],
        ]),
        gap('Kemmel', 'Imane und ___ Mann wohnen in Rabat. Karim und ___ Frau haben eine Tochter.', ['ihr', 'seine']),
        speak(
          'Role-play: tswira',
          'Sa7bek kaysowlek 3la tswira: *"Wer ist das? Wie alt ist er? Was ist er von Beruf? Wie ist er?"* Jaweb 3la chi wa7ed men l-3a2ila dyalek.',
          ['Das ist mein Onkel Ahmed.', 'Er ist fünfundvierzig Jahre alt.', 'Er ist Koch.', 'Er ist sehr lustig.'],
        ),
        graded(choice('Ina article? ___ Zeitung', ['der', 'die', 'das'], 1, '-ung → die.')),
        graded(choice('Ina article? ___ Kind', ['der', 'die', 'das'], 2)),
        graded(gap('Kemmel l-jam3', 'Ich habe zwei ___ (Schwester).', 'Schwestern')),
        graded(choice('Salma: "Wie heißt ___ Bruder, Youssef?"', ['dein', 'deine', 'sein'], 0)),
        graded(choice('"die Eltern" houma…', ['l-waldin', 'l-khout', 'l-wlad'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Bba oustad.', ['Mein Vater ist Lehrer.'])),
        graded(gap('Kemmel', 'Frau Weber, ist das ___ Tochter?', 'Ihre')),
        graded(choice('Ina jomla s7i7a?', ['Meine Eltern ist nett.', 'Meine Eltern sind nett.', 'Meine Eltern sind nette.'], 1)),
        graded(choice('L-mu2annath dyal "Koch"?', ['Kochin', 'Köchin', 'Kochfrau'], 1)),
        graded(dictation('Sme3 o kteb', 'Das sind meine Großeltern.')),
        summary(
          [
            'Daba t9der t9eddem l-3a2ila dyalek o twesef n-nas.',
            'Kol smiya jdida → 7fedha **m3a l-article** o **l-jam3**.',
            'F l-unité 4: l-makla, t-tsewe9, l-asoum, o **l-akkusativ** (einen, keinen).',
          ],
          ['T9eddem l-3a2ila', 'Tgoul l-khedma', 'Tkhdem der/die/das o l-jam3', 'Tkhdem mein/dein/sein/ihr'],
          'Khlasa dyal l-unité 3',
        ),
      ],
    },
  ],
});
