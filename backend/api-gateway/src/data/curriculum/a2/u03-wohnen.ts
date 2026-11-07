import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 3,
  title: 'Wohnen & Nachbarn',
  description: "R-ra7il, tnjjem l-meubles, l-jiran o l-Hausordnung — o l-Wechselpräpositionen: Wo? (Dativ) / Wohin? (Akkusativ).",
  icon: 'chair',
  objectives: [
    'Tgoul fin kayna l-7wayej o fin kat7ett-hom',
    'Tkhdem l-Wechselpräpositionen m3a Dativ o Akkusativ',
    'Tfre9 bin stellen/stehen, legen/liegen, hängen, setzen/sitzen',
    'Tfhem l-Hausordnung o tdbber mochkil m3a l-jiran',
    'Tkteb message l l-jar b ladab',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Der Umzug — R-ra7il',
      description: 'R-ra7il, l-7wayej dyal d-dar, o fin kat7ett l-meubles.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-7wayej dyal d-dar', 'Tgoul fin kat7ett chi 7aja', 'T3awen f r-ra7il'],
      steps: [
        intro(
          'Salma kat7ewwel',
          'Salma l9at appartement sghir bou7dha. Nhar s-sebt r-ra7il (der Umzug): Youssef, Lukas o Olena kay3awnouha. Kolchi khasso yt7ett f blastou!',
          ['Tsemmi l-7wayej', 'Tgoul fin', 'T3ti tawjihat'],
        ),
        dialogue(
          'Wohin kommt das?',
          [
            ['Lukas', 'Salma, wohin soll ich den Schreibtisch stellen?', 'Salma, fin n7ett l-biro?'],
            ['Salma', 'Stell ihn bitte ans Fenster. Da ist mehr Licht.', '7ettou 7da s-sherjem 3afak. Tmma d-dow ktar.'],
            ['Olena', 'Und die Bücher? Leg ich sie auf den Boden?', 'O l-ktouba? N7ettha f l-ard?'],
            ['Salma', 'Nein, stell sie bitte ins Regal.', 'La, 7ettha f l-étagère 3afak.'],
            ['Youssef', 'Wo ist der Spiegel? Ich will ihn ins Bad hängen.', 'Fin l-mraya? Bghit n3elle9ha f l-7mmam.'],
            ['Salma', 'Der Spiegel liegt unter dem Bett, glaube ich.', 'L-mraya t7t n-namousiya, kandenn.'],
            ['Youssef', 'Ah, da ist er! … So, jetzt hängt er über dem Waschbecken.', 'Ah, ha hiya! … Safi, daba m3ell9a fou9 l-lavabo.'],
            ['Salma', 'Perfekt! Ihr seid die Besten! Setzt euch, ich mache Tee.', 'Bdebt! Ntouma l-a7ssen! Glsou, ghadi ndir atay.'],
          ],
        ),
        vocab('Im Haus — F d-dar', [
          ['der Boden', 'l-ard', ''],
          ['die Wand', 'l-7it', 'die Wände'],
          ['die Decke', 's-sa9f (wla l-manta)', ''],
          ['das Fenster', 's-sherjem', 'die Fenster'],
          ['die Tür', 'l-bab', 'die Türen'],
          ['die Ecke', 'r-rkna', 'die Ecken'],
          ['der Spiegel', 'l-mraya', 'die Spiegel'],
          ['das Waschbecken', 'l-lavabo', ''],
          ['der Teppich', 'z-zarbiya', 'die Teppiche'],
          ['der Vorhang', 'l-khamiya / r-rido', 'die Vorhänge'],
          ['das Bild', 't-tswira / l-loha', 'die Bilder'],
          ['die Kiste', 'l-cartona / s-sandou9', 'die Kisten'],
          ['der Umzug', 'r-ra7il (déménagement)', ''],
          ['der Nachbar / die Nachbarin', 'l-jar / l-jara', 'die Nachbarn'],
        ]),
        explain(
          'Fin? 9 d l-prépositions',
          md`
            Had t-tes3a kaygoulou **l-blasa** dyal chi 7aja:

            | Préposition | Darija | Mital (Wo? → Dativ) |
            |---|---|---|
            | **in** | f / dakhel | Das Buch ist **im** Regal. |
            | **an** | 7da / m3ell9 f (7it, sherjem) | Das Bild hängt **an der** Wand. |
            | **auf** | fou9 (lasse9) | Die Lampe steht **auf dem** Tisch. |
            | **über** | fou9 (bla ma tlsse9) | Die Lampe hängt **über dem** Tisch. |
            | **unter** | t7t | Die Katze schläft **unter dem** Bett. |
            | **vor** | 9eddam | Das Auto steht **vor dem** Haus. |
            | **hinter** | mora | Der Garten ist **hinter dem** Haus. |
            | **neben** | 7da | Der Stuhl steht **neben dem** Sofa. |
            | **zwischen** | bin | Der Tisch steht **zwischen dem** Sofa **und dem** Sessel. |

            **auf** = fou9 o lasse9 (f t-tabla); **über** = fou9 walakin b3id (lamba m3ell9a).
            **an** = m3a l-7it, s-sherjem, l-bab (ghaliban 3amoudi).
          `,
          [
            ['Der Teppich liegt vor dem Sofa.', 'Z-zarbiya 9eddam l-canapé.'],
            ['Die Kisten stehen in der Ecke.', 'L-cartonat f r-rkna.'],
            ['Zwischen den Fenstern hängt ein Bild.', 'Bin s-sherjmat m3ell9a tswira.'],
          ],
        ),
        match('Rbet', [
          ['unter', 't7t'],
          ['hinter', 'mora'],
          ['zwischen', 'bin'],
          ['neben', '7da'],
          ['über', 'fou9 (bla ma tlsse9)'],
        ]),
        choice('L-lamba m3ell9a fou9 t-tabla (ma lass9ach):', ['Die Lampe hängt auf dem Tisch.', 'Die Lampe hängt über dem Tisch.'], 1),
        choice('Fin kayn l-mraya f l-bdaya?', ['F l-7mmam', 'T7t n-namousiya', 'F l-étagère'], 1),
        gap('Kemmel', 'Das Bild hängt ___ der Wand.', 'an'),
        order('Rtteb', 'Die Katze schläft unter dem Bett.'),
        speak(
          'Wesef l-bit dyalek',
          'Wesef l-bit dyalek b 4 jmel: fin kayna n-namousiya, l-biro, l-placard, o chi tswira.',
          ['Das Bett steht an der Wand.', 'Der Schreibtisch steht vor dem Fenster.', 'Der Schrank steht neben der Tür.', 'Über dem Bett hängt ein Bild.'],
        ),
        graded(choice('"hinter" =', ['9eddam', 'mora', '7da'], 1)),
        graded(choice('"die Wand" hiya…', ['l-ard', 'l-7it', 's-sa9f'], 1)),
        graded(gap('Kemmel', 'Die Schuhe stehen ___ dem Bett. (t7t)', 'unter')),
        graded(translate("Terjem l l'Almaniya", 'T-tomobil 9eddam d-dar.', ['Das Auto steht vor dem Haus.', 'Das Auto ist vor dem Haus.'])),
        summary(
          [
            '9 d l-prépositions dyal l-blasa: **in, an, auf, über, unter, vor, hinter, neben, zwischen**.',
            '**auf** (lasse9) ≠ **über** (b3id). **an** = m3a l-7it / s-sherjem.',
          ],
          ['Tgoul fin kayna l-7wayej', 'Twesef l-bit dyalek'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wo? oder Wohin? — Wechselpräpositionen',
      description: 'Imta Dativ o imta Akkusativ m3a in, an, auf…, o l-af3al stellen/stehen, legen/liegen, hängen, setzen/sitzen.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tfre9 bin Wo? (Dativ) o Wohin? (Akkusativ)', 'Tkhdem stellen/stehen, legen/liegen, hängen, setzen/sitzen', 'Tkhdem ins, ans, aufs'],
      steps: [
        intro(
          '"ans Fenster" o "am Fenster" — 3lach?',
          md`
            Salma 9alet: "Stell ihn **ans** Fenster" (an + **das** → Akkusativ). Men b3d: "Der Schreibtisch steht **am** Fenster" (an + **dem** → Dativ).
            Nefs l-préposition, jouj d l-7alat! Hadou houma **l-Wechselpräpositionen**: kaybeddlou l-7ala 3la 7sab **wach kayna 7araka l chi blasa** wla la.
          `,
          ['Wo? → Dativ', 'Wohin? → Akkusativ', 'Af3al dyal l-blasa'],
        ),
        explain(
          'Wo? → Dativ · Wohin? → Akkusativ',
          md`
            T-tes3a (in, an, auf, über, unter, vor, hinter, neben, zwischen) kaykhdmou b jouj d l-7alat:

            | | Sou2al | 7ala | Ma3na | Mital |
            |---|---|---|---|---|
            | 🟢 | **Wo?** (fin?) | **Dativ** | l-blasa thabta, bla 7araka l chi blasa | Das Buch liegt **auf dem** Tisch. |
            | ➡️ | **Wohin?** (l fin?) | **Akkusativ** | 7araka / tbdil l-blasa → l chi blasa | Ich lege das Buch **auf den** Tisch. |

            **Mital b jouj:**
            - Ich gehe **in die** Küche. (Wohin? → Akk, kanmchi l l-kouzina)
            - Ich koche **in der** Küche. (Wo? → Dat, ana f l-kouzina)

            **Ikhtisarat:** in + das = **ins**, an + das = **ans**, auf + das = **aufs** (Akk) — in + dem = **im**, an + dem = **am** (Dat).
          `,
          [
            ['Ich gehe ins Kino. — Ich bin im Kino.', 'Ghadi l s-sinima. — Ana f s-sinima.'],
            ['Wir fahren an den Strand. — Wir liegen am Strand.', 'Ghadi l l-b7er. — 7na mjebdin f l-b7er.'],
            ['Die Katze springt auf das Sofa. — Die Katze liegt auf dem Sofa.', 'L-9etta natet l l-canapé. — L-9etta f l-canapé.'],
          ],
          'Machi koull 7araka = Akkusativ! "Ich laufe **im** Park." (kanjri **dakhel** l-park — ma kantbeddel blasa l blasa khra) → Dativ. S-sou2al howa: wach **l fin?** (Wohin) wla **fin?** (Wo).',
        ),
        choice('"Ich gehe ___ Küche."', ['in der', 'in die'], 1, 'Wohin? → Akk: in **die** Küche.'),
        choice('"Mama ist ___ Küche."', ['in der', 'in die'], 0, 'Wo? → Dat: in **der** Küche.'),
        choice('"Wir fahren morgen ___ Meer." (das Meer)', ['am', 'ans'], 1, 'Wohin? an + das → ans.'),
        choice('"Wir machen Urlaub ___ Meer."', ['am', 'ans'], 0, 'Wo? an + dem → am.'),
        explain(
          'Af3al dyal l-blasa: jouj b jouj',
          md`
            Kaynin **jouj d l-af3al** l kol wad3iya: wa7ed dyal **7araka (Wohin? + Akk)** o wa7ed dyal **l-7ala (Wo? + Dat)**.

            | 7araka → **Wohin? + Akk** | 7ala → **Wo? + Dat** | Ma3na |
            |---|---|---|
            | **stellen** (stellte, hat gestellt) | **stehen** (hat gestanden) | wa9ef (3amoudi): bouteille, meuble, ktab f l-étagère |
            | **legen** (hat gelegt) | **liegen** (hat gelegen) | mjbed (ofo9i): ktab f t-tabla, telefon |
            | **hängen** (hat gehängt) | **hängen** (hat gehangen) | m3ell9 |
            | **setzen** (sich setzen) | **sitzen** (hat gesessen) | glas |

            - "Ich **stelle** die Flasche **auf den** Tisch." → "Die Flasche **steht auf dem** Tisch."
            - "Ich **lege** das Handy **auf den** Tisch." → "Das Handy **liegt auf dem** Tisch."
            - "Ich **hänge** das Bild **an die** Wand." → "Das Bild **hängt an der** Wand."
            - "Ich **setze** mich **auf das** Sofa." → "Ich **sitze auf dem** Sofa."

            Tri9a: l-af3al dyal **7araka** 3endhom **e** (st**e**llen, l**e**gen, s**e**tzen) — o kayakhdou **maf3oul bih**.
          `,
        ),
        choice('Ina fi3l? "Das Buch ___ auf dem Tisch." (mjbed)', ['legt', 'liegt', 'stellt'], 1),
        choice('Ina fi3l? "Ich ___ die Vase auf den Tisch." (wa9fa)', ['stelle', 'stehe', 'lege'], 0),
        choice('Ina fi3l? "Er ___ auf dem Stuhl."', ['setzt', 'sitzt'], 1),
        gap('Kemmel l-article', 'Ich lege die Zeitung auf ___ Sofa. (das)', 'das'),
        gap('Kemmel l-article', 'Die Zeitung liegt auf ___ Sofa. (das)', 'dem'),
        gap('Kemmel l-article', 'Ich hänge den Mantel in ___ Schrank. (der)', 'den'),
        gap('Kemmel l-article', 'Der Mantel hängt in ___ Schrank.', 'dem'),
        gap('Kemmel l-article', 'Stell die Stühle bitte zwischen ___ Tisch und ___ Wand.', ['den', 'die']),
        order('Rtteb', 'Leg den Schlüssel bitte auf den Tisch.'),
        order('Rtteb', 'Der Schlüssel liegt auf dem Tisch.'),
        translate("Terjem l l'Almaniya", '3elle9 t-tswira f l-7it! (du)', ['Häng das Bild an die Wand!', 'Haeng das Bild an die Wand!', 'Häng das Bild bitte an die Wand!']),
        graded(choice('"Er geht ___ Garten."', ['im', 'in den'], 1)),
        graded(choice('"Die Kinder spielen ___ Garten."', ['im', 'in den'], 0)),
        graded(choice('"Ich ___ das Glas in den Schrank."', ['stelle', 'stehe'], 0)),
        graded(gap('Kemmel', 'Das Handy ___ unter dem Kissen. (mjbed)', 'liegt')),
        graded(gap('Kemmel l-article', 'Ich setze mich neben ___ Fenster. (das)', 'das')),
        graded(gap('Kemmel l-article', 'Ich sitze neben ___ Fenster.', 'dem')),
        graded(translate("Terjem l l'Almaniya", 'L-ktab f l-étagère.', ['Das Buch steht im Regal.', 'Das Buch ist im Regal.'])),
        summary(
          [
            '**Wo? → Dativ** (l-blasa) · **Wohin? → Akkusativ** (7araka l chi blasa).',
            '**ins / ans / aufs** (Akk) · **im / am** (Dat).',
            '**stellen → stehen**, **legen → liegen**, **hängen → hängen**, **setzen → sitzen**.',
          ],
          ['Tgoul fin kayna chi 7aja', 'Tgoul fin kat7ettha'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Die Hausordnung & Probleme mit Nachbarn',
      description: 'T9ra l-Hausordnung, tsme3 jar kayshki, o tkteb message drif l l-jar.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem l-9awa3id dyal l-immeuble', 'Tsme3 mochkil m3a l-jiran o tfhemou', 'Tchki b ladab o tdbber 7al', 'Tkteb message l l-jar'],
      steps: [
        intro(
          'F l-immeuble jdid',
          'F l-entrée dyal l-immeuble jdid dyal Salma kayna wer9a kbira: **die Hausordnung**. Ghadi n9rawha, o men b3d nchoufou chi mochkil m3a l-jiran.',
          ['T9ra l-Hausordnung', 'Tfhem l-mochkil', 'Tkteb message'],
        ),
        reading(
          'Hausordnung — Lindenstraße 8',
          md`
            Liebe Mieterinnen und Mieter,

            damit alle gut zusammenleben, bitten wir Sie:

            1. Ruhezeiten: Mittagsruhe von 13 bis 15 Uhr, Nachtruhe von 22 bis 6 Uhr. Auch am Sonntag bitte keinen Lärm machen.
            2. Treppenhaus: Bitte stellen Sie keine Fahrräder, Schuhe oder Kinderwagen in den Flur. Fahrräder gehören in den Fahrradkeller.
            3. Müll: Bitte trennen Sie den Müll. Papier gehört in die blaue Tonne, Verpackungen in die gelbe Tonne, Glas in den Glascontainer an der Ecke.
            4. Putzen: Das Treppenhaus putzt jede Woche eine Partei. Der Plan hängt neben der Haustür.
            5. Grillen auf dem Balkon ist nicht erlaubt.

            Vielen Dank! Ihre Hausverwaltung
          `,
          {
            text: '9ra l-Hausordnung o jaweb.',
            glossary: [
              ['damit', 'bach'],
              ['die Ruhezeit', 'wa9t r-rakha'],
              ['der Lärm', 'l-bruit / s-sda3'],
              ['das Treppenhaus', 'd-droj'],
              ['trennen', 'fre9'],
              ['die Tonne', 'l-poubelle l-kbira'],
              ['putzen', 'ns9a / ghsel'],
              ['erlaubt', 'mesmou7'],
            ],
          },
        ),
        choice('Fin khass t7ett l-bechklita?', ['F d-droj', 'F l-cave dyal l-bechkliat', 'F l-balcon'], 1),
        choice('Fin katlou7 l-kartoun / l-wra9?', ['In die gelbe Tonne', 'In die blaue Tonne', 'In den Glascontainer'], 1),
        choice('Wach t9der tchwi f l-balcon?', ['Ah', 'La'], 1),
        choice('Men ch7al l ch7al r-rakha d l-lil?', ['20 – 6', '22 – 6', '22 – 8'], 1),
        listening(
          'Ärger im Treppenhaus',
          [
            ['Herr Krüger', 'Entschuldigung, wohnen Sie im zweiten Stock?', 'Sme7 liya, wach nti sakna f t-tabe9 t-tani?'],
            ['Salma', 'Ja, ich bin neu hier. Salma El Idrissi.', 'Ah, ana jdida hna. Salma El Idrissi.'],
            ['Herr Krüger', 'Krüger, ich wohne unter Ihnen. Gestern Abend war es sehr laut bei Ihnen. Bis Mitternacht!', 'Krüger, saken t7tek. Lbare7 f l-lil kan l-bruit bzaf 3endek. 7tal ness l-lil!'],
            ['Salma', 'Oh, das tut mir leid! Meine Freunde haben mir beim Umzug geholfen, und dann haben wir zusammen gegessen.', 'Oh, sme7 liya! S-s7ab 3awnouni f r-ra7il, o men b3d klina m3a ba3d.'],
            ['Herr Krüger', 'Das verstehe ich. Aber ich muss um fünf Uhr aufstehen.', 'Fhemt. Walakin khassni nnod f 5.'],
            ['Salma', 'Das wusste ich nicht. Es kommt nicht wieder vor. Und wenn ich eine Party mache, sage ich Ihnen vorher Bescheid.', 'Ma kontch 3arfa. Ma ghadich t3awed. O ila dert chi 7afla, ghadi n3lemek 9bel.'],
            ['Herr Krüger', 'Das ist nett. Und willkommen im Haus!', 'Drif mennek. O mer7ba biki f l-immeuble!'],
          ],
        ),
        choice('Chno kan l-mochkil?', ['L-bechklita f d-droj', 'L-bruit 7tal ness l-lil', 'Z-zbel'], 1),
        choice('3lach Herr Krüger m9le9?', ['Khasso ynod f 5', 'Kaykhdem f l-lil', 'Mrid'], 0),
        choice('Chno wa3dat Salma?', ['Ma ghadich tdir 7aflat', 'Ghadi t3lemou 9bel ay 7afla', 'Ghadi t7ewwel'], 1),
        culture(
          'L-jiran f Almaniya',
          md`
            - **Ruhezeiten** (wa9t r-rakha) mohimmin bzaf: ma tkhdemch l-machina d t-tsbin wla l-perceuse men 22 l 6, o nhar l-7ad.
            - Ila ghadi dir 7afla: **3lem l-jiran 9bel** (wer9a f d-droj: "Liebe Nachbarn, am Samstag feiere ich …").
            - Ila kan chi mochkil: **hder m3a l-jar lowel b ladab**, men b3d l-Hausverwaltung — machi l-bolis direct.
            - **Paket annehmen:** ghaliban l-jiran kayakhdou l-colis dyalek ila ma kontich f d-dar. 3adi o drif!
            - Ila jiti jdid: t9der dir **"Hallo"** l-jiran o t9eddem rasek — kaye3jbhom.
          `,
        ),
        explain(
          'Tchki o t3tadar b ladab',
          md`
            | Bach… | Katgoul |
            |---|---|
            | tbda b ladab | "Entschuldigung, haben Sie kurz Zeit?" |
            | tgoul l-mochkil | "Es ist leider oft sehr laut." / "Ihr Fahrrad steht im Flur." |
            | ttleb | "Könnten Sie bitte … ?" / "Wäre es möglich, dass …?" |
            | t3tadar | "Das tut mir leid!" / "Das wusste ich nicht." / "Es kommt nicht wieder vor." |
            | t9tare7 7al | "Wie wäre es, wenn …?" / "Ich sage Ihnen vorher Bescheid." |
          `,
        ),
        pron(
          '-er o -e f l-akhir (muraja3a)',
          'F A2 bzaf d l-kalimat katsali b -er o -e. Goul **-er** b7al *a* khfifa o **-e** khfifa bzaf.',
          [
            ['Nachbar – Nachbarn', '-ar / -arn'],
            ['Keller – Fenster – Zimmer', '-er = a'],
            ['Ecke – Decke – Tonne', '-e khfifa'],
            ['Der Fernseher steht in der Ecke.', 'kolchi m3a ba3d'],
          ],
        ),
        write(
          'Message l l-jiran',
          'Ghadi dir 7afla nhar s-sebt f d-dar jdida. Kteb wer9a / message l l-jiran (5–7 jmel): 9eddem rasek, goul imta l-7afla, t3tadar men 9bel 3la l-bruit, o std3ihom ila bghaw.',
          ['Liebe Nachbarinnen und Nachbarn,', 'T9dim (ich wohne seit … im … Stock)', 'Imta l-7afla (am Samstag, ab … Uhr)', 'T3tadar (Es kann etwas lauter werden …)', 'D3awa (Sie sind herzlich eingeladen!)', 'Twadi3 + smiya'],
          'Liebe Nachbarinnen und Nachbarn,\n\nich heiße Salma und wohne seit zwei Wochen im zweiten Stock. Am Samstag, den 14. Mai, mache ich ab 19 Uhr eine kleine Einweihungsparty. Es kann etwas lauter werden – entschuldigen Sie bitte! Um 22 Uhr machen wir die Musik leiser. Sie sind herzlich eingeladen!\n\nViele Grüße\nSalma El Idrissi (2. Stock)',
          50,
        ),
        graded(choice('"der Lärm" howa…', ['z-zbel', 'l-bruit', 'd-droj'], 1)),
        graded(choice('Ila kan mochkil m3a l-jar, lowel…', ['Ttasel b l-bolis', 'Thder m3ah b ladab', 'Tkteb l l-jarida'], 1)),
        graded(choice('"Es kommt nicht wieder vor." kat3ni…', ['Ma ghadich t3awed', 'Ghadi tji 3awtani', 'Ma fhemtch'], 0)),
        graded(dictation('Sme3 o kteb', 'Fahrräder gehören in den Keller.')),
        summary(
          [
            'Hausordnung: **Ruhezeiten, Treppenhaus, Mülltrennung, Putzplan**.',
            'Tchki b ladab: **Könnten Sie bitte …?** — T3tadar: **Das tut mir leid. Es kommt nicht wieder vor.**',
            '3lem l-jiran 9bel l-7afla.',
          ],
          ['Tfhem l-Hausordnung', 'Tdbber mochkil m3a l-jar', 'Tkteb message l l-jiran'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 3',
      description: 'Muraja3a: l-blasa, Wechselpräpositionen, stellen/stehen… — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 Wo?/Wohin?', 'Tkhdem l-af3al dyal l-blasa', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Wechselpräpositionen, stellen/stehen, legen/liegen, hängen, setzen/sitzen, o l-jiran.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | | Wohin? (Akk) | Wo? (Dat) |
            |---|---|---|
            | der Tisch | auf **den** Tisch | auf **dem** Tisch |
            | die Wand | an **die** Wand | an **der** Wand |
            | das Regal | in**s** Regal | i**m** Regal |
            | jam3 | in **die** Kisten | in **den** Kisten |

            stellen / legen / hängen / setzen (+ Akk) → stehen / liegen / hängen / sitzen (+ Dat)
          `,
        ),
        dialogue(
          'Wo ist mein Handy?',
          [
            ['Youssef', 'Salma, hast du mein Handy gesehen?', 'Salma, wach chefti t-tilifoun dyali?'],
            ['Salma', 'Hast du es nicht auf den Tisch gelegt?', 'Ma 7ettitich f t-tabla?'],
            ['Youssef', 'Nein, auf dem Tisch liegt es nicht.', 'La, f t-tabla ma kaynch.'],
            ['Salma', 'Vielleicht in deiner Jacke? Die hängt an der Tür.', 'Ymken f l-jacket dyalek? M3ell9a f l-bab.'],
            ['Youssef', 'Nein … Ah, hier! Es liegt zwischen den Kissen auf dem Sofa.', 'La… Ah, ha howa! Bin l-mkhadda f l-canapé.'],
            ['Salma', 'Typisch! Du setzt dich aufs Sofa und vergisst alles.', 'Dima! Katgless f l-canapé o katnsa kolchi.'],
          ],
        ),
        choice('Fin kan t-tilifoun?', ['F t-tabla', 'F l-jacket', 'Bin l-mkhadda f l-canapé'], 2),
        gap('Kemmel', 'Die Jacke hängt an ___ Tür. Er setzt sich auf ___ Sofa.', ['der', 'das']),
        match('Rbet', [
          ['stellen', 'stehen'],
          ['legen', 'liegen'],
          ['setzen', 'sitzen'],
          ['ins', 'in + das'],
          ['am', 'an + dem'],
        ]),
        speak(
          'Role-play: r-ra7il',
          'Nta kat3awen sa7bek f r-ra7il. Sowwlou fin t7ett l-7wayej (l-biro, l-ktouba, t-tswira, z-zarbiya) o jaweb 3la tawjihatou.',
          ['Wohin soll ich den Schreibtisch stellen?', 'Stell ihn bitte ans Fenster.', 'Wohin hänge ich das Bild?', 'Häng es bitte über das Sofa.'],
        ),
        graded(choice('"Wir gehen heute ___ Park."', ['im', 'in den'], 1)),
        graded(choice('"Das Bild hängt ___ Wand."', ['an die', 'an der'], 1)),
        graded(choice('"Ich ___ den Teller auf den Tisch."', ['stelle', 'stehe'], 0)),
        graded(choice('"Die Brille ___ auf dem Nachttisch."', ['legt', 'liegt'], 1)),
        graded(gap('Kemmel l-article', 'Ich lege den Pass in ___ Schublade. (die)', 'die')),
        graded(gap('Kemmel l-article', 'Der Pass liegt in ___ Schublade.', 'der')),
        graded(choice('"zwischen" =', ['7da', 'bin', 'mora'], 1)),
        graded(choice('Ruhezeit f l-lil ghaliban…', ['20 – 7', '22 – 6', '24 – 8'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Glest 7da s-sherjem.', ['Ich habe neben dem Fenster gesessen.', 'Ich saß neben dem Fenster.'])),
        graded(dictation('Sme3 o kteb', 'Stell die Flaschen bitte in den Kühlschrank.')),
        summary(
          [
            'Daba t9der tgoul fin kayna l-7wayej o fin kat7ett-hom — b Dativ o Akkusativ s7a7.',
            'F l-unité 4: l-khedma o z-zmala — o jmel b **dass**, **wenn** o **ob**.',
          ],
          ['Tkhdem l-Wechselpräpositionen', 'Tkhdem stellen/stehen, legen/liegen…', 'Tdbber mochkil m3a l-jiran'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
