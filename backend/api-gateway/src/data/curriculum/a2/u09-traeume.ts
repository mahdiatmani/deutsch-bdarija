import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 9,
  title: 'Wünsche & Träume',
  description: "L-amani, l-a7lam o l-mchari3, t-talab b ladab o n-nasa2i7 — b l-Konjunktiv II (würde, wäre, hätte, könnte) o \"trotzdem\".",
  icon: 'auto_awesome',
  objectives: [
    'T3ber 3la amaniyk: "Ich hätte gern …", "Ich würde gern …"',
    'Thder 3la chi 7aja machi wa9i3iya: "Wenn ich reich wäre, …"',
    'Ttleb b ladab o t9tare7: "Könntest du …?", "Wir könnten …"',
    'T3ber 3la t-tanaqod b "trotzdem"',
    'Thder 3la l-a3yad o l-ihtifalat (Silvester, Karneval…)',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Mein großer Traum',
      description: 'L-a7lam, l-amani o l-mchari3 l-moustaqbaliya.',
      minutes: 25,
      kind: 'input',
      goals: ['Thder 3la l-a7lam dyalek', 'Tfre9 bin l-mchrou3 (will) o l-7olm (würde gern)', 'Tsowwel l-akhrin 3la a7lamhom'],
      steps: [
        intro(
          'Silvester: amani l l-3am jdid',
          md`
            Lila d **Silvester** (31 dujanbir). S-s7ab mjtam3in 3and Lukas. F ness l-lil, kol wa7ed kaygoul **chno kayt-menna** l l-3am jdid — o chno **l-7olm l-kbir** dyalou.
          `,
          ['Thder 3la l-a7lam', 'T3ber 3la l-amani', 'Tsowwel l-akhrin'],
        ),
        dialogue(
          'Gute Vorsätze',
          [
            ['Lukas', 'Was wünscht ihr euch für das neue Jahr?', 'Chno kattmennaw l l-3am jdid?'],
            ['Salma', 'Ich hätte gern mehr Zeit für meine Familie. Und ich würde gern meinen Bachelor schaffen!', 'Bghit ykoun 3endi l-wa9t ktar l l-3a2ila. O nbghi nnje7 f l-licence!'],
            ['Youssef', 'Ich will die Zwischenprüfung bestehen. Und ich würde so gern einen Führerschein machen.', 'Bghit nnje7 f l-imti7an l-wasati. O nbghi bzaf ndir l-permis.'],
            ['Olena', 'Mein größter Wunsch? Dass der Krieg endlich vorbei ist. Dann könnte meine Familie wieder in Frieden leben.', 'Akbar amaniya dyali? Tsali l-7arb akhiran. Iwa l-3a2ila dyali t9der t3ich f s-salam 3awtani.'],
            ['Lukas', 'Das wünsche ich dir von Herzen.', 'Kantmennah lik men 9albi.'],
            ['Salma', 'Und du, Lukas? Was ist dein Traum?', 'O nta a Lukas? Chno l-7olm dyalek?'],
            ['Lukas', 'Wenn ich viel Geld hätte, würde ich ein Jahr lang um die Welt reisen. Aber ich bin Student … Trotzdem spare ich jeden Monat ein bisschen!', 'Ila kanou 3endi bzaf d l-flous, kont ndour l-3alam 3am kamel. Walakin ana taleb… Walakin rghm dakchi kanwfer chwiya kol chhar!'],
          ],
        ),
        vocab('Wünsche & Pläne — L-amani o l-mchari3', [
          ['der Wunsch', 'l-amaniya / t-talab', 'die Wünsche'],
          ['sich etwas wünschen', 'tmenna chi 7aja', '', ['Ich wünsche mir ein Fahrrad.', 'Kantmenna bechklita.']],
          ['der Traum', 'l-7olm', 'die Träume'],
          ['träumen von', '7lem b', ''],
          ['der Vorsatz', 'l-9arar (l l-3am jdid)', 'die Vorsätze'],
          ['das Ziel', 'l-hadaf', 'die Ziele'],
          ['planen', 'khtet', ''],
          ['sparen', 'wfer', ''],
          ['schaffen', 'nje7 f / 9der 3la', ''],
          ['bestehen (eine Prüfung)', 'nje7 (f l-imti7an)', ''],
          ['der Führerschein', 'l-permis', ''],
          ['reich ↔ arm', 'ghni ↔ fqir', ''],
          ['der Frieden', 's-salam', ''],
          ['von Herzen', 'men l-9alb', ''],
        ]),
        explain(
          'Mchrou3 wla 7olm?',
          md`
            | | Darija | Almaniya |
            |---|---|---|
            | mchrou3 wa9i3i (ghadi ndirou) | *ghadi ndir / bghit* | "Ich **will** …" / "Ich **werde** …" |
            | amaniya (ymken, b ladab) | *nbghi / kont nbghi* | "Ich **würde gern** …" / "Ich **hätte gern** …" |
            | 7olm (machi wa9i3i daba) | *ila kan… kont…* | "**Wenn** ich … **hätte / wäre**, **würde** ich …" |

            - "Ich **will** den Führerschein machen." = 9arart.
            - "Ich **würde gern** den Führerschein machen." = kantmenna (ila 9dert).
            - "Ich **hätte gern** mehr Zeit." = kantmenna ykoun 3endi.
          `,
          [
            ['Ich will nächstes Jahr Deutsch B2 machen.', 'Ghadi ndir B2 l-3am l-jay (9arart).'],
            ['Ich würde gern in Berlin wohnen.', 'Nbghi nsken f Berlin (amaniya).'],
            ['Ich träume von einem eigenen Restaurant.', 'Kan7lem b restaurant dyali.'],
          ],
        ),
        match('Rbet', [
          ['der Traum', 'l-7olm'],
          ['sparen', 'wfer'],
          ['das Ziel', 'l-hadaf'],
          ['bestehen', 'nje7 (f imti7an)'],
          ['der Führerschein', 'l-permis'],
        ]),
        choice('Chno kayt-menna Youssef?', ['Ysafer f l-3alam', 'Ydir l-permis', 'Ywfer l-flous'], 1),
        choice('"Ich würde gern …" kat3ni…', ['9arart', 'kantmenna (nbghi)', 'ma bghitch'], 1),
        gap('Kemmel', 'Ich wünsche ___ ein neues Handy. (ana)', 'mir'),
        order('Rtteb', 'Ich träume von einer Reise nach Japan.'),
        speak(
          'L-amani dyalek',
          'Goul: chno ghadi dir l-3am l-jay (**will**), chno kattmenna (**würde gern / hätte gern**), o chno l-7olm l-kbir dyalek.',
          ['Nächstes Jahr will ich B1 machen.', 'Ich würde gern mehr reisen.', 'Ich hätte gern eine größere Wohnung.', 'Mein großer Traum ist ein eigenes Café.'],
        ),
        graded(choice('"der Vorsatz" howa…', ['l-7olm', 'l-9arar l l-3am jdid', 'l-hdiya'], 1)),
        graded(choice('Ina jomla katgoul amaniya b ladab?', ['Ich will Pizza.', 'Ich hätte gern eine Pizza.', 'Pizza!'], 1)),
        graded(gap('Kemmel', 'Ich träume ___ einem Haus am Meer.', 'von')),
        graded(translate("Terjem l l'Almaniya", 'Nbghi nt3llem l-ingliziya (amaniya).', ['Ich würde gern Englisch lernen.'])),
        summary(
          [
            '**der Wunsch, der Traum, das Ziel, sich etwas wünschen, träumen von, sparen, schaffen, bestehen**.',
            '**Ich will …** (9arar) ≠ **Ich würde gern … / Ich hätte gern …** (amaniya).',
          ],
          ['Thder 3la l-a7lam o l-amani', 'Tfre9 bin 9arar o amaniya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wenn ich reich wäre … — Konjunktiv II & trotzdem',
      description: 'L-Konjunktiv II: würde + infinitiv, wäre, hätte, könnte — l l-amani, t-talab b ladab, n-nasa2i7 o l-7alat l-ghir wa9i3iya.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir l-Konjunktiv II b würde + infinitiv', 'Tkhdem wäre, hätte, könnte', 'Tdir jomla "Wenn ich … wäre, würde ich …"', 'Tkhdem trotzdem'],
      steps: [
        intro(
          'L-3alam dyal "ila kan…"',
          md`
            Lukas 9al: "Wenn ich viel Geld **hätte**, **würde** ich um die Welt **reisen**." — walakin 3endouch l-flous. Had l-chkel smiytou **Konjunktiv II**: kayhder 3la chi 7aja **machi wa9i3iya** (7olm, amaniya), wla kaykhelli l-hedra **drifa**.
          `,
          ['würde + infinitiv', 'wäre, hätte, könnte', 'Wenn-Sätze', 'trotzdem'],
        ),
        explain(
          'Kifach tdir l-Konjunktiv II',
          md`
            **1. Ktar l-af3al: würde + infinitiv (f l-akhir)**

            | | würde |
            |---|---|
            | ich | würde |
            | du | würdest |
            | er/sie | würde |
            | wir | würden |
            | ihr | würdet |
            | sie/Sie | würden |

            > Ich **würde** gern nach Japan **fliegen**.

            **2. sein, haben, können (o müssen, dürfen): chkel khass**

            | | sein | haben | können | müssen |
            |---|---|---|---|---|
            | ich | **wäre** | **hätte** | **könnte** | **müsste** |
            | du | wärst | hättest | könntest | müsstest |
            | er/sie | **wäre** | **hätte** | **könnte** | **müsste** |
            | wir | wären | hätten | könnten | müssten |
            | sie/Sie | wären | hätten | könnten | müssten |

            Ghaliban hadou ma kaykhdmouch m3a würde: "Ich **wäre** gern reich." (machi "würde reich sein").
          `,
          [
            ['Ich wäre jetzt gern am Strand.', 'Kont nbghi nkoun daba f l-b7er.'],
            ['Wir hätten gern mehr Zeit.', 'Kont nbghiw ykoun 3endna l-wa9t ktar.'],
            ['Du könntest mich morgen anrufen.', 'T9der tttasel biya ghedda (i9tira7).'],
          ],
          'Tri9a: **wäre, hätte, könnte, müsste** = l-Präteritum (war, hatte, konnte, musste) **+ umlaut** (+ -e).',
        ),
        gap('Kemmel', 'Ich ___ gern in Spanien leben. (würde)', 'würde|wuerde'),
        gap('Kemmel', 'Wenn ich Zeit ___, würde ich mitkommen. (haben)', 'hätte|haette'),
        gap('Kemmel', 'Es ___ schön, wenn du kommst. (sein)', 'wäre|waere'),
        gap('Kemmel', '___ du mir bitte helfen? (können)', 'Könntest|Koenntest'),
        explain(
          '4 isti3malat dyal l-Konjunktiv II',
          md`
            | Isti3mal | Mital |
            |---|---|
            | **1. Amaniya** | "Ich **hätte** gern ein Auto." · "Ich **wäre** gern Ärztin." |
            | **2. Talab b ladab** | "**Könnten** Sie das Fenster aufmachen?" · "**Würden** Sie mir helfen?" |
            | **3. Nasi7a / i9tira7** | "Du **solltest** mehr schlafen." · "Wir **könnten** ins Kino gehen." · "**An deiner Stelle würde** ich …" |
            | **4. Chart machi wa9i3i** | "**Wenn** ich reich **wäre**, **würde** ich ein Haus **kaufen**." |

            **Jomla dyal chart machi wa9i3i:**
            > **Wenn** ich mehr Zeit **hätte**, **würde** ich Gitarre **lernen**. (*walakin ma 3endich l-wa9t*)
            > Ich **würde** Gitarre **lernen**, **wenn** ich mehr Zeit **hätte**.

            Mo9arana:
            - "**Wenn** ich Zeit **habe**, **komme** ich." = momkin (wa9i3i).
            - "**Wenn** ich Zeit **hätte**, **würde** ich **kommen**." = ma 3endich (machi wa9i3i).
          `,
        ),
        choice('Ina jomla katgoul belli ma 3endouch l-flous?', ['Wenn ich Geld habe, kaufe ich ein Auto.', 'Wenn ich Geld hätte, würde ich ein Auto kaufen.'], 1),
        choice('Ina talab a drif?', ['Mach das Fenster auf!', 'Könntest du bitte das Fenster aufmachen?'], 1),
        choice('"Wir ___ am Samstag grillen." (i9tira7)', ['könnten', 'können', 'konnten'], 0),
        order('Rtteb', 'Wenn ich reich wäre, würde ich viel reisen.'),
        order('Rtteb', 'Könnten Sie bitte langsamer sprechen?'),
        explain(
          'trotzdem = walakin rghm dakchi',
          md`
            **trotzdem** kaygoul belli chi 7aja w9e3at **rghm** wa7ed s-sabab — b7al deshalb, kaykhd **l-blasa 1** (l-fi3l men b3dou direct):

            | Sabab | Natija ma mtwe99a3ach |
            |---|---|
            | Es regnet. | **Trotzdem gehen** wir spazieren. |
            | Ich bin müde. | **Trotzdem lerne** ich weiter. |

            **deshalb ↔ trotzdem:**
            - Es ist kalt, **deshalb** bleibe ich zu Hause. (natija mantiqiya)
            - Es ist kalt, **trotzdem** gehe ich schwimmen. (3aks l-mtwe99a3)

            T9der ta tgoulha f l-wsat: "Es regnet, aber wir gehen **trotzdem** spazieren."
          `,
          [
            ['Ich habe wenig Geld. Trotzdem spare ich jeden Monat.', '3endi chwiya d l-flous. Walakin rghm dakchi kanwfer kol chhar.'],
          ],
        ),
        choice('"Er war krank. ___ ist er zur Arbeit gegangen."', ['Deshalb', 'Trotzdem'], 1),
        choice('"Er war krank. ___ ist er zu Hause geblieben."', ['Deshalb', 'Trotzdem'], 0),
        order('Rtteb', 'Das Wetter war schlecht, trotzdem sind wir gewandert.'),
        translate("Terjem l l'Almaniya", 'Ila kont f blastek, kont ghadi nmchi l t-tbib.', ['An deiner Stelle würde ich zum Arzt gehen.', 'Wenn ich du wäre, würde ich zum Arzt gehen.']),
        graded(choice('"Ich ___ gern ein Stück Kuchen." (amaniya)', ['habe', 'hätte', 'hatte'], 1)),
        graded(gap('Kemmel', 'Wenn ich Zeit hätte, ___ ich dich besuchen.', 'würde|wuerde')),
        graded(choice('"___ Sie mir bitte den Weg zeigen?"', ['Könnten', 'Konnten', 'Können ihr'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Wenn ich du wäre, ich würde mehr lernen.', 'Wenn ich du wäre, würde ich mehr lernen.'], 1)),
        graded(choice('"Es regnet. ___ fahre ich mit dem Rad."', ['Deshalb', 'Trotzdem', 'Weil'], 1)),
        graded(gap('Kemmel', 'Ich ___ jetzt gern im Urlaub. (sein)', 'wäre|waere')),
        graded(translate("Terjem l l'Almaniya", 'Ila kan 3endi l-flous, kont nchri tomobil.', ['Wenn ich Geld hätte, würde ich ein Auto kaufen.'])),
        summary(
          [
            'Konjunktiv II: **würde + infinitiv** — o **wäre, hätte, könnte, müsste**.',
            '4 isti3malat: amaniya, talab b ladab, nasi7a/i9tira7, chart machi wa9i3i.',
            '**Wenn ich … hätte / wäre, würde ich …** — (machi wa9i3i) ≠ **Wenn ich … habe, …** (wa9i3i).',
            '**trotzdem** (rghm dakchi) ↔ **deshalb** (dakchi 3lach) — b jouj f l-blasa 1.',
          ],
          ['T3ber 3la amani o a7lam', 'Ttleb o t9tare7 b ladab', 'Thder 3la chi 7aja machi wa9i3iya', 'Tkhdem trotzdem'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Feste feiern in Deutschland',
      description: 'T9ra 3la l-a3yad f Almaniya, tsme3 i9tira7at, o tkteb email fih amani o i9tira7at.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem nass 3la l-a3yad o t-taqalid', 'Tsme3 i9tira7at o tfhemhom', 'T9aren t-taqalid', 'Tkteb email b Konjunktiv II'],
      steps: [
        intro(
          'Taqalid f Almaniya',
          'Men Silvester l Karneval, men Ostern l Weihnachten — kol 3id fih taqalid dyalou. Salma kat9ra ma9al o kat9arenhom m3a l-a3yad f l-Maghrib.',
          ['T9ra 3la l-a3yad', 'Tsme3 i9tira7at', 'Tkteb'],
        ),
        reading(
          'Das deutsche Festjahr',
          md`
            **Silvester:** In der Nacht vom 31. Dezember auf den 1. Januar feiern viele Deutsche mit Freunden. Um Mitternacht gibt es Feuerwerk, und alle wünschen sich „Frohes neues Jahr!". Viele machen gute Vorsätze: mehr Sport, weniger Handy …

            **Karneval:** Im Februar feiern vor allem die Menschen im Rheinland – in Köln, Düsseldorf und Mainz. Sie verkleiden sich, singen auf der Straße und schauen die großen Umzüge an. Am Rosenmontag haben viele frei.

            **Ostern:** Im Frühling verstecken Eltern bunte Eier im Garten, und die Kinder suchen sie. Ostern ist auch ein wichtiges christliches Fest.

            **Weihnachten:** Das wichtigste Familienfest. Am 24. Dezember, dem Heiligabend, gibt es Geschenke unter dem Weihnachtsbaum. Viele gehen in die Kirche, andere essen einfach gut mit der Familie.

            Auch Feste aus anderen Kulturen werden in Deutschland immer bekannter: In vielen Städten gibt es zum Beispiel zum Ramadan ein öffentliches Iftar.
          `,
          {
            text: '9ra l-ma9al.',
            glossary: [
              ['das Feuerwerk', 'l-mfar9at'],
              ['sich verkleiden', 'tbeddel l-lbas (déguisement)'],
              ['der Umzug', 'l-masira (défilé) — ta: r-ra7il'],
              ['verstecken', 'khebba'],
              ['der Heiligabend', 'lilat 24 dujanbir'],
              ['öffentlich', '3oumoumi'],
            ],
          },
        ),
        choice('Fin kay7tafelou b Karneval ktar?', ['F Berlin', 'F l-Rheinland (Köln, Düsseldorf…)', 'F Hamburg'], 1),
        choice('Chno kaydirou d-drari f Ostern?', ['Kay9elbou 3la l-bid l-mlouwen', 'Kaylbsou costumes', 'Kaycha3lou l-mfar9at'], 0),
        choice('Imta kaykoun l-Heiligabend?', ['31.12.', '24.12.', '25.12.'], 1),
        listening(
          'Was machen wir an Karneval?',
          [
            ['Lukas', 'Am Rosenmontag ist der große Umzug in Köln. Habt ihr Lust?', 'F Rosenmontag kayna l-masira l-kbira f Köln. Wach bghitou?'],
            ['Salma', 'Ich würde gern mitkommen, aber ich habe kein Kostüm.', 'Kont nbghi nji, walakin ma 3endich costume.'],
            ['Lukas', 'Kein Problem! Wir könnten zusammen eins machen. Wie wäre es mit einer Katze?', 'Machi mochkil! N9adrou ndirou wa7ed m3a ba3d. Ach ban lik f 9etta?'],
            ['Youssef', 'Ich habe Frühschicht. Trotzdem komme ich danach, so gegen drei.', '3endi n-nouba d s-sba7. Walakin rghm dakchi ghadi nji men b3d, ta9riban f 3.'],
            ['Lukas', 'Super! Dann treffen wir uns am Dom. Und denkt daran: Ihr müsst „Alaaf" rufen!', 'Mzyan! Iwa ntla9aw f d-Dom. O 3e9lou: khasskom tghwtou "Alaaf"!'],
          ],
        ),
        choice('3lach Salma mtrdda f l-bdaya?', ['Ma 3endhach costume', 'Khdama', 'Mrida'], 0),
        choice('Chno i9tare7 Lukas?', ['Ychriw costume', 'Ydirou costume dyal 9etta m3a ba3d', 'Ma ymchiwch'], 1),
        choice('Imta ghadi yji Youssef?', ['F l-bidaya', 'Ta9riban f 3', 'Ma ghadich yji'], 1),
        culture(
          'L-a3yad: Almaniya o l-Maghrib',
          md`
            - F Almaniya l-a3yad r-rasmiya (Feiertage) kaykhtalfou **men wlaya l wlaya** (Bundesland): Rosenmontag f Köln "frei" ghaliban, walakin machi f Berlin.
            - **Karneval f Köln:** "Kölle Alaaf!" — 11.11. f 11:11 kaybda, o f février kayn "Weiberfastnacht" (l-khmis) o "Rosenmontag".
            - F **Ramadan**, bzaf d l-mdon o l-jami3at kaydirou **Iftar** 3oumoumi; o l-3id t9der ttleb fih 3otla.
            - Bzaf d l-maghariba f Almaniya kay7tafelou b **jouj**: Eid o Weihnachten m3a s-s7ab l-alman — 3la 7sab l-i7tiram l-moutabadal.
          `,
        ),
        pron(
          'N-nghma dyal t-talab b ladab',
          'T-talab b Konjunktiv II kaykoun b **sout hadi** o kayt-le3 f l-akhir (sou2al). "bitte" kat3ti d-drafa.',
          [
            ['Könnten Sie mir bitte helfen?', 's-sout kayt-le3 f l-akhir'],
            ['Würden Sie das Fenster aufmachen?', 'b ladab'],
            ['Wie wäre es mit Samstag?', 'i9tira7'],
          ],
        ),
        write(
          'Email: i9tira7 l 7afla',
          md`
            S-s7ab dyalek bghaw y7tafelou b nhayat l-cours. Kteb email (6–8 jmel): 9tare7 **fin, imta o chno** ghadi tdirou (b **wir könnten …**, **wie wäre es mit …**), goul chno **kont tbghi** (würde gern / hätte gern), o khdem **trotzdem** merra wa7da.
          `,
          ['Salam', '2 i9tira7at (Wir könnten … / Wie wäre es mit …?)', 'Amaniya (Ich würde gern … / Ich hätte gern …)', 'trotzdem', 'Sou2al: Was meint ihr?'],
          'Hallo zusammen,\n\nder Kurs ist bald zu Ende – wir sollten feiern! Wir könnten am Freitagabend zusammen kochen. Jeder bringt ein Gericht aus seinem Land mit. Oder wie wäre es mit einem Picknick am Rhein? Ich würde gern Couscous machen. Ich habe am Freitag bis 18 Uhr Kurs, trotzdem kann ich alles vorbereiten. Was meint ihr?\n\nViele Grüße\nYoussef',
          50,
        ),
        graded(choice('"sich verkleiden" kay3ni…', ['tbeddel l-lbas (déguisement)', 'tkhebba', 'tchte7'], 0)),
        graded(choice('L-Feiertage f Almaniya…', ['nefs l-chi f kol l-wlayat', 'kaykhtalfou men wlaya l wlaya'], 1)),
        graded(choice('Bach t9tare7 chi 7aja:', ['Wir müssen grillen.', 'Wir könnten grillen.', 'Wir konnten grillen.'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich würde gern mitkommen.')),
        summary(
          [
            'L-a3yad: **Silvester, Karneval (Köln: Alaaf!), Ostern, Weihnachten** — o Iftar 3oumoumi f Ramadan.',
            'I9tira7at: **Wir könnten … / Wie wäre es mit …?** — amani: **Ich würde gern …**',
          ],
          ['Tfhem t-taqalid', 'T9tare7 o tkteb b Konjunktiv II'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 9',
      description: 'Muraja3a: l-amani, l-Konjunktiv II, trotzdem — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Konjunktiv II', 'T3ber 3la l-amani o t9tare7', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-amani, l-a7lam, l-Konjunktiv II (würde, wäre, hätte, könnte), o trotzdem.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | | sein | haben | können | ay fi3l |
            |---|---|---|---|---|
            | ich | wäre | hätte | könnte | würde … + inf |
            | du | wärst | hättest | könntest | würdest … |
            | er/sie | wäre | hätte | könnte | würde … |

            - **Wenn** ich Zeit **hätte**, **würde** ich mehr **lesen**.
            - **trotzdem / deshalb** → l-fi3l direct men b3d.
          `,
        ),
        dialogue(
          'Ein Traumjob?',
          [
            ['Salma', 'Stell dir vor, WebSolutions bietet mir eine feste Stelle an!', 'Tkhayyel, WebSolutions 3erdat 3liya poste dayem!'],
            ['Youssef', 'Wow! Nimmst du sie an?', 'Waw! Wach ghadi t9blih?'],
            ['Salma', 'Ich weiß nicht. Wenn ich Vollzeit arbeiten würde, hätte ich keine Zeit mehr für mein Studium.', 'Ma 3reftch. Ila khdemt temps plein, ma ghadich ykoun 3endi l-wa9t l l-9raya.'],
            ['Youssef', 'Du könntest doch erst einmal Teilzeit arbeiten.', 'T9dri tkhdmi temps partiel f l-bidaya.'],
            ['Salma', 'Stimmt. Das Gehalt ist nicht so hoch, trotzdem finde ich das Angebot toll.', 'S7i7. L-ajr machi 3ali bzaf, walakin rghm dakchi kanchouf l-3ard zwin.'],
            ['Youssef', 'An deiner Stelle würde ich mit der Chefin sprechen.', 'Ila kont f blastek, kont nhder m3a l-patrona.'],
          ],
        ),
        choice('3lach Salma mtrdda?', ['L-ajr 9lil', 'Ma ghadich ykoun 3endha l-wa9t l l-9raya', 'Ma kat7ebbch l-khedma'], 1),
        choice('Chno nse7ha Youssef?', ['Trfod', 'Tkhdem temps partiel o thder m3a l-patrona', 'Tsali l-9raya'], 1),
        gap('Kemmel', 'Wenn ich Vollzeit arbeiten ___, ___ ich keine Zeit für das Studium.', ['würde|wuerde', 'hätte|haette']),
        match('Rbet', [
          ['ich wäre', 'sein'],
          ['ich hätte', 'haben'],
          ['ich könnte', 'können'],
          ['ich müsste', 'müssen'],
        ]),
        speak(
          'Role-play: ila kan…',
          'Jaweb 3la had s-sou2alat b Konjunktiv II: *Was würdest du mit einer Million Euro machen? Wo würdest du gern wohnen? Was wärst du gern von Beruf?*',
          ['Mit einer Million Euro würde ich meiner Familie ein Haus kaufen.', 'Ich würde gern am Meer wohnen.', 'Ich wäre gern Pilot.'],
        ),
        graded(choice('"Wenn ich mehr Geld ___, würde ich reisen."', ['habe', 'hätte', 'hatte'], 1)),
        graded(choice('"Ich ___ gern in Hamburg." (sein, amaniya)', ['bin', 'wäre', 'war'], 1)),
        graded(gap('Kemmel', '___ ihr mir beim Umzug helfen? (können, b ladab)', 'Könntet|Koenntet')),
        graded(choice('Ina jomla s7i7a?', ['Wenn es nicht regnen würde, würden wir grillen.', 'Wenn es nicht regnen würde, wir würden grillen.'], 0)),
        graded(choice('"Ich habe keine Lust. ___ gehe ich mit."', ['Deshalb', 'Trotzdem'], 1)),
        graded(choice('"An deiner Stelle ___ ich das nicht machen."', ['würde', 'wäre', 'hätte'], 0)),
        graded(choice('Ina jomla katgoul amaniya?', ['Ich will Arzt werden.', 'Ich wäre gern Arzt.'], 1)),
        graded(choice('"der Wunsch" howa…', ['l-amaniya', 'l-hadaf', 'l-7olm'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Wach t9der t3awenni 3afak? (rasmi, Konjunktiv II)', ['Könnten Sie mir bitte helfen?', 'Würden Sie mir bitte helfen?'])),
        graded(dictation('Sme3 o kteb', 'Wenn ich Zeit hätte, würde ich mehr lesen.')),
        summary(
          [
            'Daba t9der t3ber 3la l-amani, t9tare7, ttleb b ladab o thder 3la chi 7aja machi wa9i3iya.',
            'F l-unité 10: l-madrasa o t-ta3lim — **als / wenn** f l-madi, **zu + infinitiv**, o **um … zu**.',
          ],
          ['T3ber 3la amani', 'Tkhdem l-Konjunktiv II', 'Tkhdem trotzdem'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
