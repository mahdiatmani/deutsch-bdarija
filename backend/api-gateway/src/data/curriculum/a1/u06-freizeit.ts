import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 6,
  title: 'Freizeit & Wetter',
  description: "L-hobbies, chno kat7ebb o chno kat7ebb ktar, t-t9s, l-fousoul, o l-fi3l \"können\".",
  icon: 'sports_soccer',
  objectives: [
    'Thder 3la l-hobbies dyalek: gern, lieber, am liebsten',
    'Tsrref l-af3al li kayt-beddel fihom l-7arf: du fährst, er liest…',
    'Tgoul chno t9der dir b "können"',
    'Thder 3la t-t9s, l-fousoul o l-chhour',
    'Tstd3i chi wa7ed l chi nachat',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Was machst du gern? — L-hobbies',
      description: 'L-hobbies, gern / nicht gern, lieber o am liebsten.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-hobbies', 'Tgoul chno kat7ebb: "Ich spiele gern Fußball."', 'T9aren: lieber, am liebsten'],
      steps: [
        intro(
          'Chno katdir f l-weekend?',
          'Lukas o Youssef kayhedrou 3la chno kaydirou f l-wa9t l-7orr (die Freizeit). Ghadi nt3allmou kifach tgoul chno kat7ebb dir — o b l\'Almaniya ma katgoulch "ana kan7ebb…" bzaf: katkhdem kelma sghira: **gern**.',
          ['Tsemmi l-hobbies', 'Tgoul chno kat7ebb', 'T9aren'],
        ),
        dialogue(
          'Freizeit',
          [
            ['Lukas', 'Was machst du gern in deiner Freizeit?', 'Chno kat7ebb dir f l-wa9t l-7orr dyalek?'],
            ['Youssef', 'Ich spiele gern Fußball und ich höre gern Musik. Und du?', 'Kan7ebb nl3eb l-koura o nsme3 l-mousi9a. O nta?'],
            ['Lukas', 'Ich fahre gern Rad. Und ich koche gern.', 'Kan7ebb nsou9 l-bechklita. O kan7ebb ntiyeb.'],
            ['Youssef', 'Kochst du auch marokkanisch?', 'Wach kattiyeb ta l-makla l-maghribiya?'],
            ['Lukas', 'Nein, aber ich esse sehr gern Couscous!', 'La, walakin kan7ebb bzaf naklou l-kouskous!'],
            ['Youssef', 'Liest du gern?', 'Wach kat7ebb t9ra?'],
            ['Lukas', 'Nicht so gern. Ich sehe lieber Filme. Am liebsten gehe ich ins Kino.', 'Machi bzaf. Kanfeddel nchouf l-aflam. O a7ssen 7aja 3endi nmchi l s-sinima.'],
          ],
        ),
        vocab('Hobbys', [
          ['Fußball spielen', 'l3eb l-koura'],
          ['schwimmen', '3am'],
          ['Rad fahren', 'sa9 l-bechklita'],
          ['lesen', '9ra (ktouba)'],
          ['Musik hören', 'sme3 l-mousi9a'],
          ['tanzen', 'chte7'],
          ['kochen', 'tiyeb'],
          ['wandern', 'tmecha f l-jbel / randonnée'],
          ['joggen', 'jri (footing)'],
          ['fotografieren', 'sowwer'],
          ['reisen', 'safer'],
          ['ins Kino gehen', 'mcha l s-sinima'],
          ['Freunde treffen', 'tla9a b s-s7ab'],
          ['Videos schauen', 'chaf vidéos'],
          ['Gitarre spielen', 'l3eb l-guitare'],
        ]),
        explain(
          'gern — lieber — am liebsten',
          md`
            F l'Almaniya bach tgoul *kan7ebb ndir chi 7aja*, katzid **gern** men b3d l-fi3l:

            | | Jomla | Darija |
            |---|---|---|
            | + | Ich schwimme **gern**. | kan7ebb n3oum. |
            | ++ | Ich laufe **lieber**. | kanfeddel njri. |
            | +++ | Ich tanze **am liebsten**. | a7ssen 7aja 3endi hiya nchte7. |
            | – | Ich koche **nicht gern**. | ma kan7ebbch ntiyeb. |

            - "Was machst du gern?" = *chno kat7ebb dir?*
            - M3a s-smiya katkhdem **mögen**: "Ich **mag** Pizza." "Magst du Fußball?" (ich mag, du magst, er mag)
            - F l-makla t9der tgoul ta: "Ich esse **gern** Couscous."
          `,
          [
            ['Ich lese gern, aber ich sehe lieber fern.', 'Kan7ebb n9ra, walakin kanfeddel ntfarrej.'],
            ['Am liebsten reise ich.', 'Ktar 7aja kan7ebbha hiya s-safar.'],
            ['Ich mag Musik.', 'Kan7ebb l-mousi9a.'],
          ],
          'Ma tgoulch "Ich liebe Fußball spielen" — "lieben" kay3ni *l-7obb* l-kbir (n-nas, l-blad). L l-hobbies: **gern**.',
        ),
        match('Rbet l-hobby m3a l-ma3na', [
          ['schwimmen', '3am'],
          ['wandern', 'tmecha f l-jbel'],
          ['tanzen', 'chte7'],
          ['reisen', 'safer'],
          ['Rad fahren', 'sa9 l-bechklita'],
        ]),
        choice('"Ich koche nicht gern." kat3ni…', ['Kan7ebb ntiyeb.', 'Ma kan7ebbch ntiyeb.', 'Ma kan3refch ntiyeb.'], 1),
        gap('Kemmel', 'Ich höre ___ Musik, aber am ___ tanze ich.', ['gern', 'liebsten']),
        order('Rtteb', 'Was machst du gern in deiner Freizeit?'),
        speak(
          'L-hobbies dyalek',
          'Goul 3 jmel: chno kat7ebb dir (**gern**), chno kat-feddel (**lieber**), o chno ma kat7ebbch (**nicht gern**).',
          ['Ich spiele gern Fußball.', 'Ich sehe lieber Filme.', 'Ich koche nicht gern.'],
        ),
        graded(choice('"lieber" kay3ni…', ['kan7ebb', 'kanfeddel', 'ma kan7ebbch'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich gern schwimme.', 'Ich schwimme gern.', 'Ich liebe schwimmen.'], 1)),
        graded(gap('Kemmel', 'Am ___ gehe ich ins Kino.', 'liebsten')),
        graded(translate("Terjem l l'Almaniya", 'Kan7ebb n9ra.', ['Ich lese gern.'])),
        summary(
          [
            'Hobbys: **Fußball spielen, schwimmen, lesen, Musik hören, kochen, reisen…**',
            '**gern** (+), **lieber** (++), **am liebsten** (+++), **nicht gern** (–).',
            'M3a s-smiya: **Ich mag** Pizza.',
          ],
          ['Tgoul chno kat7ebb dir', 'T9aren bin l-hobbies'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Du fährst, er liest — o "können"',
      description: 'L-af3al li kayt-beddel fihom l-7arf l-mte7rrek, o l-fi3l "können" m3a Satzklammer.',
      minutes: 30,
      kind: 'grammar',
      goals: ['Tsrref fahren, lesen, sprechen, essen, nehmen…', 'Tsrref "können"', 'T7ett l-infinitiv f l-akhir: "Ich kann gut kochen."'],
      steps: [
        intro(
          'Lach "du fährst" o machi "du fahrst"?',
          'Chi af3al kayt-beddel fihom **l-7arf l-mte7rrek** ghir m3a **du** o **er/sie/es**. F l-unité 1 chefna "sprechen → du sprichst". Daba ghadi nfehmou l-9a3ida kamla.',
          ['Tsrref l-af3al b Vokalwechsel', 'Tkhdem "können"', 'Satzklammer m3a l-Modalverb'],
        ),
        explain(
          'Verben mit Vokalwechsel',
          md`
            T-tbdil kaykoun **ghir m3a du o er/sie/es**. M3a ich, wir, ihr, sie → 3adi.

            | | **a → ä** | **e → i** | **e → ie** |
            |---|---|---|---|
            | Infinitiv | fahren | sprechen | lesen |
            | ich | fahre | spreche | lese |
            | **du** | **fährst** | **sprichst** | **liest** |
            | **er/sie** | **fährt** | **spricht** | **liest** |
            | wir | fahren | sprechen | lesen |
            | ihr | fahrt | sprecht | lest |
            | sie/Sie | fahren | sprechen | lesen |

            **Af3al b7alhom:**
            - a → ä: **schlafen** (schläft), **tragen** (trägt), **waschen** (wäscht); au → äu: **laufen** (läuft)
            - e → i: **essen** (isst), **geben** (gibt), **helfen** (hilft), **treffen** (trifft), **nehmen** (du **nimmst**, er **nimmt** ⚠️)
            - e → ie: **sehen** (sieht), **lesen** (liest)

            F l-9amous kaykteb: "fahren, **fährt**" → ila chefti l-7arf mbeddel, 3ref belli fih Vokalwechsel.
          `,
          [
            ['Fährst du gern Rad?', 'Wach kat7ebb tsou9 l-bechklita?'],
            ['Lukas isst gern Couscous.', 'Lukas kay7ebb yakoul l-kouskous.'],
            ['Salma liest jeden Abend.', 'Salma kat9ra kol lila.'],
            ['Was nimmst du?', 'Chno ghadi takhod?'],
          ],
        ),
        choice('"du ___ (schlafen)"', ['schlafst', 'schläfst', 'schliefst'], 1),
        choice('"er ___ (sehen)"', ['seht', 'sieht', 'siet'], 1),
        gap('Kemmel', 'Was ___ du? (essen) — Ich ___ einen Salat.', ['isst', 'esse']),
        gap('Kemmel', 'Olena ___ (sprechen) Ukrainisch und Englisch.', 'spricht'),
        gap('Kemmel', 'Wir ___ (fahren) am Sonntag nach Bonn.', 'fahren', 'M3a **wir** ma kayn 7ta tbdil.'),
        gap('Kemmel', '___ (helfen) du mir, bitte?', 'Hilfst'),
        gap('Kemmel', 'Was ___ (nehmen) du? — Ich nehme einen Tee.', 'nimmst'),
        explain(
          'können: Modalverb',
          md`
            **können** = *9der / 3ref (dir chi 7aja)*. Howa **Modalverb**: kaykhdem m3a fi3l akhor f l-**infinitiv**.

            | | können |
            |---|---|
            | ich | **kann** |
            | du | **kannst** |
            | er/sie/es | **kann** (bla -t!) |
            | wir | können |
            | ihr | könnt |
            | sie/Sie | können |

            **Satzklammer:** "können" f **l-blasa 2**, o l-fi3l t-tani f l-**infinitiv** f **l-akhir**:

            | 1 | **2** | … | **akhir** |
            |---|---|---|---|
            | Ich | **kann** | gut | **kochen**. |
            | Youssef | **kann** | sehr gut Fußball | **spielen**. |
            | **Kannst** | du | Gitarre | **spielen**? |
            | Am Samstag | **kann** | ich nicht | **kommen**. |

            Rd l-bal: **ich kann** o **er kann** — bla nihaya (b7al ich/er möchte).

            **Isti3malat:** l-9odra (*3ref*): "Ich kann schwimmen." — l-imkaniya: "Hier kann man Fahrräder mieten." — talab b ladab: "**Kannst** du mir helfen?" / "**Können Sie** das bitte wiederholen?"
          `,
          [
            ['Ich kann nicht schwimmen.', 'Ma kan3refch n3oum.'],
            ['Kannst du am Freitag kommen?', 'Wach t9der tji nhar l-jem3a?'],
            ['Können Sie bitte langsam sprechen?', 'Wach t9der thder b chwiya 3afak?'],
          ],
          'Ghalta kathira: "Ich kann schwimme." — l-fi3l t-tani dima **infinitiv**: "Ich kann **schwimmen**."',
        ),
        choice('"Er ___ gut tanzen."', ['kannt', 'kann', 'könnt'], 1),
        choice('Ina jomla s7i7a?', ['Ich kann spielen Gitarre.', 'Ich kann Gitarre spielen.', 'Ich spielen kann Gitarre.'], 1, 'L-infinitiv f l-akhir.'),
        gap('Kemmel', '___ ihr am Sonntag ___? (kommen)', ['Könnt|Koennt', 'kommen']),
        order('Rtteb', 'Kannst du mir bitte helfen?', undefined, { dar: 'Wach t9der t3awenni 3afak?' }),
        order('Rtteb', 'Am Samstag kann ich nicht kommen.', 'Wa9t f 1, kann f 2, infinitiv f l-akhir.'),
        translate("Terjem l l'Almaniya", 'Ma kan3refch ntiyeb.', ['Ich kann nicht kochen.']),
        translate("Terjem l l'Almaniya (rasmi)", 'Wach t9der t3awed 3afak?', ['Können Sie das bitte wiederholen?', 'Können Sie bitte wiederholen?', 'Koennen Sie das bitte wiederholen?', 'Können Sie das wiederholen, bitte?']),
        graded(gap('Kemmel', 'Du ___ (fahren) zu schnell!', 'fährst|faehrst')),
        graded(gap('Kemmel', 'Mein Vater ___ (lesen) jeden Tag die Zeitung.', 'liest')),
        graded(choice('"du ___ (treffen) Freunde"', ['treffst', 'triffst', 'trefft'], 1)),
        graded(gap('Kemmel', 'Salma ___ sehr gut kochen. (können)', 'kann')),
        graded(choice('Ina jomla s7i7a?', ['Wir können morgen kommen.', 'Wir können kommen morgen.', 'Wir kommen können morgen.'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Wach kat3ref t3oum?', ['Kannst du schwimmen?'])),
        summary(
          [
            'Vokalwechsel **ghir m3a du o er/sie/es**: fahren → du **fährst**; sprechen → er **spricht**; lesen → sie **liest**; nehmen → du **nimmst**.',
            '**können:** kann, kannst, **kann**, können, könnt, können.',
            '**Satzklammer:** "Ich **kann** gut **kochen**." — l-Modalverb f 2, l-infinitiv f l-akhir.',
          ],
          ['Tsrref l-af3al b Vokalwechsel', 'Tgoul chno t9der dir', 'Ttleb b ladab b "Können Sie…?"'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Das Wetter & die Jahreszeiten',
      description: 'T-t9s, l-fousoul, l-chhour, o kifach tstd3i chi wa7ed.',
      minutes: 25,
      kind: 'skills',
      goals: ['Thder 3la t-t9s', 'Tgoul l-fousoul o l-chhour', 'Tnte9 "ich" o "ach"', 'Tkteb message fih d3awa'],
      steps: [
        intro(
          'Köln wla Casablanca?',
          'Youssef ma mwalefch b t-t9s dyal Köln: chta bzaf o l-berd. Kayhder m3a mmou f t-tilifoun 3la t-t9s. Ghadi nt3allmou l-kalimat dyal t-t9s o l-fousoul.',
          ['Thder 3la t-t9s', 'Tgoul l-fousoul o l-chhour', 'Tstd3i chi wa7ed'],
        ),
        vocab('Das Wetter — T-t9s', [
          ['die Sonne scheint', 'ch-chems tal3a', '', ['Heute scheint die Sonne.', 'Lyouma ch-chems tal3a.']],
          ['es regnet', 'kat-tih ch-chta'],
          ['es schneit', 'kayti7 t-telj'],
          ['es ist bewölkt', 's-sma m-ghayma'],
          ['es ist windig', 'kayn r-ri7'],
          ['es ist warm', 'skhoun (mzyan)'],
          ['es ist heiß', 'skhoun bzaf / s-sehd'],
          ['es ist kalt', 'bared'],
          ['es ist kühl', 'bared chwiya'],
          ['20 Grad', '20 daraja', '', ['Es sind 20 Grad.', 'Kayna 20 daraja.']],
          ['minus 5 Grad', 'na9s 5 daraja'],
          ['Wie ist das Wetter?', 'Kif dayr t-t9s?'],
        ]),
        vocab('Jahreszeiten & Monate', [
          ['der Frühling', 'r-rbi3'],
          ['der Sommer', 's-sif'],
          ['der Herbst', 'l-khrif'],
          ['der Winter', 'ch-chta (l-fasl)'],
          ['der Januar, Februar, März', 'yanayer, febrayer, mars'],
          ['der April, Mai, Juni', 'abril, mai, younyou'],
          ['der Juli, August, September', 'youlyouz, ghouchtt, chtanbir'],
          ['der Oktober, November, Dezember', 'oktobir, nouanbir, doujanbir'],
        ], 'L-fousoul o l-chhour kolhom **der**. O m3ahom katkhdem **im** (= in dem): "**im** Sommer", "**im** Januar".'),
        explain(
          'Kifach thder 3la t-t9s',
          md`
            - "Wie ist das Wetter heute?" = *kif dayr t-t9s lyouma?*
            - "Es ist warm." / "Es regnet." / "Die Sonne scheint."
            - "Wie viel Grad sind es?" — "Es sind 25 Grad."

            **es** f "es regnet", "es ist kalt" ma kay3ni walou — ghir l-fi3l khasso fa3il.

            **Imta?**
            - **im** + fasl / chhar: "Im Winter ist es kalt." "Im August ist es heiß."
            - **am** + nhar: "Am Montag regnet es."
          `,
          [
            ['Im Sommer ist es in Casablanca sehr warm.', 'F s-sif f Casablanca kaykoun skhoun bzaf.'],
            ['In Köln regnet es oft.', 'F Köln kat-tih ch-chta bzaf.'],
            ['Im Januar schneit es manchmal.', 'F yanayer chi merrat kayti7 t-telj.'],
          ],
        ),
        listening(
          'Telefonat mit Mama',
          [
            ['Mama', 'Youssef, mein Sohn! Wie geht es dir? Wie ist das Wetter in Köln?', 'Youssef a weldi! Labas 3lik? Kif dayr t-t9s f Köln?'],
            ['Youssef', 'Mir geht es gut, Mama. Aber das Wetter … Es regnet schon wieder! Und es ist nur acht Grad.', 'Labas a mama. Walakin t-t9s… Kat-tih ch-chta 3awtani! O ghir 8 daraja.'],
            ['Mama', 'Acht Grad? Hier in Casablanca sind es heute 22 Grad, und die Sonne scheint.', '8 daraja? Hna f Casa lyouma 22 daraja, o ch-chems tal3a.'],
            ['Youssef', 'Ich weiß. Im Winter ist es hier kalt und dunkel. Aber im Sommer ist es schön, sagen alle.', 'Kan3ref. F ch-chta hna kaykoun l-berd o d-dlam. Walakin f s-sif kaykoun zwin, kaygoulou kolchi.'],
            ['Mama', 'Hast du eine warme Jacke?', 'Wach 3endek jacket skhouna?'],
            ['Youssef', 'Noch nicht. Am Samstag kaufe ich eine.', 'Mazal. S-sebt ghadi nchri wa7da.'],
          ],
        ),
        choice('Kif dayr t-t9s f Köln?', ['Ch-chems tal3a', 'Kat-tih ch-chta, 8 daraja', 'Kayti7 t-telj'], 1),
        choice('Ch7al d d-daraja f Casablanca?', ['8', '18', '22'], 2),
        choice('Chno ghadi ychri Youssef s-sebt?', ['Jacket skhouna', 'Parapluie', 'Tilifoun'], 0),
        reading(
          'Wochenende in Köln — Tipps',
          md`
            Was kann man am Wochenende in Köln machen?

            Bei Sonne: Man kann am Rhein spazieren gehen, im Park grillen oder mit dem Rad fahren. Im Sommer kann man im Fühlinger See schwimmen.

            Bei Regen: Man kann ins Museum gehen, zum Beispiel ins Schokoladenmuseum. Oder man geht ins Kino oder trinkt einen Tee im Café.

            Im Winter: Im Dezember gibt es viele Weihnachtsmärkte. Man kann dort Waffeln essen und Kinderpunsch trinken.
          `,
          {
            text: '9ra n-nasa2i7 3la l-weekend f Köln. "man" = *n-nas / wa7ed* (3am).',
            glossary: [
              ['man kann', 't9der (ay wa7ed y9der)'],
              ['spazieren gehen', 'tsara'],
              ['grillen', 'chwa (barbecue)'],
              ['bei Regen', 'mli kat-tih ch-chta'],
              ['der Weihnachtsmarkt', 's-souk dyal n-noël'],
            ],
          },
        ),
        choice('Chno t9der dir mli kat-tih ch-chta?', ['Tchwi f l-park', 'Tmchi l l-musée', 'T3oum f l-b7ira'], 1),
        choice('Imta kaynin "Weihnachtsmärkte"?', ['Im Sommer', 'Im Dezember', 'Im April'], 1),
        pron(
          'ch: "ich" o "ach"',
          md`
            **ch** 3endha jouj d n-nouti9:
            - **Ach-Laut** (b7al *kh* f Darija) men b3d **a, o, u, au**: a**ch**, Bu**ch**, ko**ch**en, au**ch**.
            - **Ich-Laut** (b7al ch-ch r9i9a, l-ilsan l-fou9) men b3d **e, i, ä, ö, ü, ei, eu** o men b3d l-7rouf s-sakina: i**ch**, ni**ch**t, Mil**ch**, Mäd**ch**en.

            L-maghariba ghaliban kaygoulou "ikh" f blast "ich" — 7awel tgoul *ch* r9i9a b7al **s-sghira dyal ch**.
          `,
          [
            ['ich – ach', 'r9i9a – b7al kh'],
            ['nicht – Nacht', 'r9i9a – kh'],
            ['Milch – Buch', 'r9i9a – kh'],
            ['Mädchen – machen', 'r9i9a – kh'],
            ['Ich koche auch.', 'r9i9a – kh – kh'],
          ],
        ),
        culture(
          'Vereine o l-wa9t l-7orr f Almaniya',
          md`
            - F Almaniya kaynin ktar men **600.000 Verein** (jam3iyat): football, natation, chant, jardinage… Bach tdkhol katkhelles chwiya f ch-chhar (**Mitgliedsbeitrag**).
            - Verein howa **a7ssen tari9a** bach tt3erref 3la n-nas o thder l'Almaniya!
            - **Die Volkshochschule (VHS)** kat3ti cours rkhas: tiyab, yoga, l-loghat…
            - Mli kayji ch-chems, n-nas kaykhorjou bzaf: grill f l-park, Biergarten, bechklita. "Bei schönem Wetter" kat-tbeddel l-mdina!
          `,
        ),
        write(
          'Std3i chi wa7ed',
          'Kteb message l Olena: 9tare7 3liha chi nachat f l-weekend (3la 7sab t-t9s), goul imta (nhar o sa3a) o fin, o sowwelha wach t9der tji.',
          ['Salam', 'T-t9s (Am Samstag scheint die Sonne / regnet es…)', 'L-i9tira7 (Wir können … / Kommst du mit?)', 'Imta o fin', 'Sou2al: Kannst du …? / Hast du Zeit?'],
          'Hallo Olena! Am Samstag scheint die Sonne und es sind 24 Grad. Wir können am Rhein Rad fahren. Kommst du mit? Wir treffen uns um 14 Uhr am Dom. Hast du Zeit? Liebe Grüße, Salma',
          30,
        ),
        graded(choice('"Es schneit." kat3ni…', ['Kat-tih ch-chta', 'Kayti7 t-telj', 'Kayn r-ri7'], 1)),
        graded(gap('Kemmel', '___ Sommer ist es heiß. ___ Montag regnet es.', ['Im', 'Am'])),
        graded(choice('"der Herbst" howa…', ['r-rbi3', 'l-khrif', 'ch-chta'], 1)),
        graded(dictation('Sme3 o kteb', 'Heute ist es kalt und windig.')),
        summary(
          [
            'T-t9s: **Die Sonne scheint. Es regnet. Es schneit. Es ist warm / kalt. Es sind 20 Grad.**',
            '**im** Sommer / **im** Januar — **am** Montag.',
            '**man kann** … = t9der (ay wa7ed).',
            '"ach" (kh) ≠ "ich" (ch r9i9a).',
          ],
          ['Thder 3la t-t9s', 'Tgoul l-fousoul o l-chhour', 'Tstd3i chi wa7ed l nachat'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 6',
      description: 'Muraja3a: l-hobbies, gern/lieber, Vokalwechsel, können, t-t9s — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-unité 6', 'Thder 3la l-wa9t l-7orr f mo7adatha', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 6', 'L-hobbies, gern/lieber/am liebsten, l-af3al li kayt-beddel fihom l-7arf, können, o t-t9s.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | | fahren | lesen | nehmen | können |
            |---|---|---|---|---|
            | ich | fahre | lese | nehme | kann |
            | du | **fährst** | **liest** | **nimmst** | kannst |
            | er/sie | **fährt** | **liest** | **nimmt** | **kann** |
            | wir | fahren | lesen | nehmen | können |

            - "Ich spiele **gern** Fußball." — "Ich **kann** gut Fußball **spielen**."
            - "**Im** Winter ist es kalt."
          `,
        ),
        dialogue(
          'Was machen wir am Sonntag?',
          [
            ['Salma', 'Am Sonntag soll es regnen. Was machen wir?', 'Nhar l-7ad ghadi tti7 ch-chta. Chno ghadi ndirou?'],
            ['Olena', 'Wir können ins Schokoladenmuseum gehen!', 'N9adrou nmchiw l musée dyal ch-chocolat!'],
            ['Salma', 'Gute Idee! Ich esse sehr gern Schokolade.', 'Fikra zwina! Kan7ebb bzaf ch-chocolat.'],
            ['Olena', 'Fragen wir auch Youssef? Er kann doch am Sonntag.', 'Nsowlou ta Youssef? Howa y9der nhar l-7ad.'],
            ['Salma', 'Nein, am Sonntag spielt er Fußball. Bei Regen auch!', 'La, l-7ad kayl3eb l-koura. 7tal f ch-chta!'],
            ['Olena', 'Okay. Treffen wir uns um zwei am Museum?', 'Wakha. Ntla9aw f 2 9eddam l-musée?'],
            ['Salma', 'Ja, das passt!', 'Ah, mnasb!'],
          ],
        ),
        choice('Chno ghadi tdir Salma o Olena?', ['Ghadi yl3bou l-koura', 'Ghadi ymchiw l l-musée', 'Ghadi ytsaraw f l-park'], 1),
        choice('3lach Youssef ma ghadich yji?', ['Mrid', 'Kayl3eb l-koura', 'Kaykhdem'], 1),
        match('Rbet', [
          ['du liest', 'lesen'],
          ['er nimmt', 'nehmen'],
          ['sie fährt', 'fahren'],
          ['du isst', 'essen'],
          ['er hilft', 'helfen'],
        ]),
        gap('Kemmel', 'Olena ___ (sprechen) gut Englisch. Sie ___ (können) auch ein bisschen Deutsch.', ['spricht', 'kann']),
        speak(
          'Role-play: l-weekend',
          'Sa7bek kaysowlek: *"Was machst du gern am Wochenende? Was kannst du gut? Wie ist das Wetter am Samstag?"* — Jaweb, o 9tare7 3lih chi nachat.',
          ['Am Wochenende gehe ich gern ins Kino.', 'Ich kann gut kochen.', 'Am Samstag scheint die Sonne.', 'Wir können im Park grillen. Kommst du mit?'],
        ),
        graded(choice('"Er ___ jeden Tag acht Stunden." (schlafen)', ['schlaft', 'schläft', 'schlafen'], 1)),
        graded(gap('Kemmel', '___ du gern Bücher? (lesen)', 'Liest')),
        graded(choice('Ina jomla s7i7a?', ['Ich kann nicht kommen heute.', 'Heute kann ich nicht kommen.', 'Heute ich kann nicht kommen.'], 1)),
        graded(gap('Kemmel', 'Wir ___ (können) am Sonntag schwimmen gehen.', 'können|koennen')),
        graded(choice('"Ich mag ___"', ['schwimmen gern', 'Pizza', 'gern Pizza'], 1)),
        graded(choice('"Im ___ ist es heiß."', ['Winter', 'Sommer', 'Dezember'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kanfeddel nchouf l-aflam.', ['Ich sehe lieber Filme.', 'Ich schaue lieber Filme.'])),
        graded(gap('Kemmel', 'Was ___ (nehmen) Olena? — Einen Kaffee.', 'nimmt')),
        graded(choice('"es regnet" — chno l-fi3l f l-infinitiv?', ['regnen', 'Regen', 'regnet'], 0)),
        graded(dictation('Sme3 o kteb', 'Am liebsten fahre ich Rad.')),
        summary(
          [
            'Daba t9der thder 3la l-wa9t l-7orr, t-t9s o chno t9der dir.',
            '**Modalverb f 2, infinitiv f l-akhir** — ghadi nzidou Modalverben khrin f l-unité 9.',
            'F l-unité 7: d-dar, l-meuble, l-annonces, sifat (hell, groß, teuer), "ihn/sie/es", o "nicht" wla "kein".',
          ],
          ['Thder 3la l-hobbies', 'Tsrref l-af3al b Vokalwechsel', 'Tkhdem können', 'Thder 3la t-t9s'],
          'Khlasa dyal l-unité 6',
        ),
      ],
    },
  ],
});
