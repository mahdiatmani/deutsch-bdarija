import { choice, explain, gap, graded, intro, md, reading, speak, summary, unit, write } from '../dsl';

export default unit({
  level: 'B1',
  number: 13,
  title: 'Prüfungstraining B1',
  description: "Tdrib 3la imti7an B1 (Goethe / ÖSD o telc): Lesen, Hören, Schreiben, Sprechen o Sprachbausteine — strategiyat o imti7an tajribi.",
  icon: 'workspace_premium',
  objectives: [
    'T3ref l-ajza2 dyal Goethe / ÖSD B1 o telc B1',
    'Tfhem nsous twal o tsjilat b strategiya',
    'Tkteb email chakhsi, ra2y f forum o email rasmi f l-we9t',
    'Tkhtat m3a chi wa7ed, tqdem mawdou3 o tjaweb 3la l-as2ila',
    'T7ell Sprachbausteine (grammaire f n-nass)',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Lesen & Hören B1',
      description: 'L-formats dyal l-imti7an o strategiyat l-9raya o s-sme3 — m3a tamarin b7al l-imti7an.',
      minutes: 35,
      kind: 'exam',
      goals: ['T3ref l-ajza2 dyal l-imti7an', 'T9ra b strategiya (global, selektiv, detailliert)', 'Tsme3 l-ma3louma l-mohimma f i3lanat o hiwarat'],
      steps: [
        intro(
          'Imti7anat B1',
          md`
            | | **Goethe / ÖSD-Zertifikat B1** | **telc Deutsch B1** |
            |---|---|---|
            | Bniya | 4 modules (t9der tdouz kol module bou7dou) | Imti7an kamel: mektoub + chafawi |
            | Lesen | 65 d9i9a, 5 ajza2 | ~90 d9i9a m3a Sprachbausteine |
            | Hören | ~40 d9i9a, 4 ajza2 | ~30 d9i9a, 3 ajza2 |
            | Schreiben | 60 d9i9a, 3 mohimmat | 30 d9i9a, rissala / email wa7da |
            | Sprechen | ~15 d9i9a b jouj | ~15 d9i9a b jouj |
            | Nja7 | 60 % f kol module | 60 % f l-mektoub o 60 % f l-chafawi |

            Goethe o ÖSD 3endhom **nefs l-format**. **DTZ** (A2–B1) kayn ta l l-Integrationskurs (chofnah f A2).
            L-imti7anat kaytmo7 f Almaniya, Austria, Swisra — o f l-Maghrib f **Goethe-Institut Rabat / Casablanca**.
          `,
          ['T3ref l-formats', 'Tdrreb Lesen', 'Tdrreb Hören'],
        ),
        explain(
          'Strategiyat',
          md`
            **Lesen:**
            - **Global:** 3onwan + l-jomla l-oula d kol paragraphe → chno l-fikra?
            - **Selektiv:** 9elleb 3la kalimat men s-so2al — walakin n-nass ghaliban kaykhdem **mourad** (synonyme): *günstig ↔ preiswert*, *verboten ↔ nicht erlaubt*.
            - **Ra2y:** f Teil 4 (Goethe), 9ra wach l-kateb **mwafe9** wla **la** — rd l-bal l *allerdings, jedoch, trotzdem*.
            - L-we9t: ma tb9ach 3la so2al wa7ed — khtar o zid, 3awed men b3d.

            **Hören:**
            - 9ra s-so2alat **9bel** s-sme3.
            - F l-imti7an chi ajza2 kaytsem3ou **merra wa7da** — rkkez mn l-bidaya.
            - L-ikhtiyarat l-ghaltin kaytdkerou ta homa — "Eigentlich wollte ich …, **aber** dann …" → l-jawab ghaliban men b3d **aber**.
          `,
        ),
        explain('Hören — Teil 1: Ansagen', 'Sme3 l-i3lan o khtar l-jawab s-s7i7.'),
        graded(choice(
          'Was sollen die Fahrgäste nach Düsseldorf tun?',
          ['Am Gleis 5 bleiben', 'Zu Gleis 9 gehen', 'Den nächsten Zug nehmen'],
          1,
          '"… fährt heute ausnahmsweise von Gleis 9" — machi 5.',
          { audio: 'Achtung an Gleis 5: Der Regionalexpress nach Düsseldorf, planmäßige Abfahrt 14:12 Uhr, fährt heute ausnahmsweise von Gleis 9. Bitte beachten Sie die geänderte Wagenreihung.' },
        )),
        graded(choice(
          'Was muss Frau Becker machen?',
          ['Morgen in die Praxis kommen', 'Den Termin telefonisch bestätigen', 'Ein neues Rezept abholen'],
          1,
          undefined,
          { audio: 'Guten Tag, Frau Becker, hier ist die Zahnarztpraxis Dr. Yilmaz. Wir müssen Ihren Termin am Donnerstag leider verschieben. Neuer Termin wäre Montag, 8:30 Uhr. Bitte rufen Sie uns kurz zurück und bestätigen Sie, ob das passt.' },
        )),
        explain('Hören — Teil 2: Gespräch', 'Sme3 l-hiwar o 7dded chno s-s7i7.'),
        graded(choice(
          'Warum hat Jana die Stelle in München nicht angenommen?',
          ['Das Gehalt war zu niedrig.', 'Ihr Partner arbeitet in Köln.', 'Sie wollte nicht umziehen, weil ihre Mutter krank ist.'],
          2,
          'L-flous kanou mzyanin ("das Gehalt war super") — s-sabab howa l-oum.',
          { audio: 'Und, Jana, hast du die Stelle in München angenommen? — Nein. Das Gehalt war super, und das Team war nett. Aber meine Mutter ist krank, und ich möchte in ihrer Nähe bleiben. Vielleicht später mal.' },
        )),
        graded(choice(
          'Was schlägt der Mann vor?',
          ['Mit dem Auto zu fahren', 'Einen späteren Zug zu nehmen', 'Den Ausflug zu verschieben'],
          2,
          undefined,
          { audio: 'Für Samstag ist Sturm angesagt, und die Bahn streikt auch noch. Ich würde sagen, wir fahren nicht mit dem Auto, sondern machen den Ausflug einfach eine Woche später. Was meinst du?' },
        )),
        explain('Lesen — Teil 4: Meinungen', '9ra l-ara2 o goul: wach l-kateb mwafe9 3la "Handys sollten an Schulen verboten werden"?'),
        reading(
          'Leserkommentare: Handyverbot an Schulen?',
          md`
            **Karin, 47:** Als Lehrerin sehe ich jeden Tag, wie Handys vom Unterricht ablenken. Ein klares Verbot würde allen helfen – auch den Schülern selbst.

            **Malik, 17:** Ein Verbot finde ich übertrieben. Wir nutzen das Handy oft für Recherchen oder Vokabel-Apps. Besser wären klare Regeln, wann es erlaubt ist.

            **Thomas, 52:** Ich war zuerst dagegen, aber seit die Schule meiner Tochter Handys in den Pausen verboten hat, spielen die Kinder wieder miteinander. Das hat mich überzeugt.
          `,
          { glossary: [['ablenken', 'chtt (l-ihtimam)'], ['übertrieben', 'mobalagh fih'], ['überzeugen', '9ne3']] },
        ),
        graded(choice('Karin: Verbot?', ['Ja', 'Nein'], 0)),
        graded(choice('Malik: Verbot?', ['Ja', 'Nein'], 1, 'Kaybghi "klare Regeln", machi Verbot.')),
        graded(choice('Thomas: Verbot?', ['Ja', 'Nein'], 0, '"Ich war zuerst dagegen, aber …" — daba mwafe9.')),
        explain('Lesen — Teil 5: Hausordnung', '9ra l-9anoun d l-mktaba o jaweb.'),
        reading(
          'Benutzungsordnung der Stadtbibliothek (Auszug)',
          md`
            §3 Medien können für vier Wochen ausgeliehen werden. Eine Verlängerung ist bis zu zweimal möglich, sofern keine Vormerkung vorliegt.
            §5 Für verspätet zurückgegebene Medien wird eine Gebühr von 0,50 € pro Tag und Medium erhoben.
            §7 Im Lesesaal sind Speisen nicht gestattet. Getränke in verschließbaren Flaschen sind erlaubt.
          `,
          { glossary: [['ausleihen', 'sellef (ktab)'], ['die Vormerkung', 'l-7ajz (réservation)'], ['gestattet', 'mesmou7']] },
        ),
        graded(choice('Wie lange kann man ein Buch maximal behalten (ohne Vormerkung)?', ['4 Wochen', '8 Wochen', '12 Wochen'], 2, '4 + 2 × 4 = 12 simana.')),
        graded(choice('Was ist im Lesesaal erlaubt?', ['Ein Sandwich', 'Wasser in einer Flasche mit Deckel', 'Kaffee im offenen Becher'], 1)),
        summary(
          [
            'Goethe / ÖSD B1: **4 modules**, 60 % f kol wa7ed. telc B1: **mektoub + chafawi**, 60 % f kol jouz2.',
            'Lesen: **mourad (synonymes)**, **aber / allerdings** katbeddel l-ma3na. Hören: 9ra s-so2alat 9bel.',
          ],
          ['T3ref l-formats', 'Tsta3mel strategiyat Lesen o Hören'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Schreiben B1',
      description: 'T-tlata d l-mohimmat dyal Goethe / ÖSD (email chakhsi, forum, email rasmi) o r-rissala dyal telc.',
      minutes: 40,
      kind: 'exam',
      goals: ['T3ref l-mohimmat o 3adad l-kalimat', 'Tkteb email chakhsi b 3 n-no9at', 'Tkteb ra2y f forum o email rasmi 9sir'],
      steps: [
        intro(
          'Schreiben — 60 d9i9a',
          md`
            | Mohimma | Chno | Kalimat | Uslub |
            |---|---|---|---|
            | **Aufgabe 1** | email l sa7bek (3 no9at) | ~80 | ghayr rasmi (du) |
            | **Aufgabe 2** | ra2yek f forum / guestbook | ~80 | nisf rasmi |
            | **Aufgabe 3** | email 9sir l chi wa7ed rasmi (tetsme7, tleb …) | ~40 | rasmi (Sie) |

            **telc B1:** rissala / email wa7da (30 d9i9a) — katkhtar bin jouj d l-mawadi3, o katjaweb 3la **4 no9at**.
          `,
          ['T3ref l-mohimmat', 'Tkteb', 'Traja3'],
        ),
        explain(
          'Kifach tjme3 n-no9at',
          md`
            - **Kol no9ta** = paragraphe sghir (2–3 jmel). Ila nsiti no9ta → katkhser bzaf.
            - **Ma tkhllich l-uslub ytkhllet:** *Liebe Anna → Viele Grüße* · *Sehr geehrte Frau … → Mit freundlichen Grüßen*.
            - **Konnektoren:** weil, obwohl, deshalb, außerdem, trotzdem, einerseits … andererseits — kaybyynou l-mostawa B1.
            - **Traja3 f l-akhir (5 d9a9i):** l-fi3l f l-blassa s-s7i7a? Smiyat b 7arf kbir? Sie / Ihnen b 7arf kbir?
            - **Ma tkteb ch bzaf:** 80 kelma machi 200 — l-ghlat katkter m3a t-tol.
          `,
        ),
        write(
          'Aufgabe 1: Email l sa7btek',
          md`
            Kunti f l-3ers dyal khouk f Marrakech. Sa7btek Lena ma 9dratch tji. Kteb liha email (~80 kelma):
            1. **Wesf:** kifach daz l-3ers?
            2. **3lach** ma kanch kolchi mzyan (mochkil sghir)?
            3. **9tare7** 3liha tchouf l-tsawer m3ak.
          `,
          ['Liebe Lena,', 'L-3ers: kifach daz (beschreiben)', 'Mochkil sghir (Leider …, weil …)', 'Ta9tira7 (Hast du Lust, … ?)', 'Viele Grüße'],
          'Liebe Lena,\n\nschade, dass du nicht zur Hochzeit meines Bruders kommen konntest! Es war ein wunderschönes Fest in einem Riad in Marrakesch. Wir haben bis drei Uhr morgens getanzt, und das Essen war fantastisch.\n\nLeider war nicht alles perfekt: Der Fotograf kam eine Stunde zu spät, weil er sich verfahren hatte. Deshalb gibt es keine Fotos von der Ankunft der Braut.\n\nAber ich habe trotzdem hunderte Bilder! Hast du Lust, nächsten Samstag zu mir zu kommen? Dann zeige ich dir alles, und ich koche dir Couscous.\n\nViele Grüße\nSalma',
          70,
        ),
        write(
          'Aufgabe 2: Forum',
          md`
            F forum dyal radio kayn so2al: **"Sollten Kinder schon in der Grundschule ein eigenes Smartphone haben?"**
            Kteb ra2yek (~80 kelma): ra2yek + jouj 7ojaj + mital.
          `,
          ['Ra2yek (Meiner Meinung nach …)', 'Hojja 1 (Einerseits …)', 'Hojja 2 (Andererseits …)', 'Mital men 7yatek', 'Khlasa'],
          'Meiner Meinung nach brauchen Kinder in der Grundschule noch kein eigenes Smartphone.\n\nEinerseits verstehe ich die Eltern: Mit einem Handy können Kinder sie in Notfällen anrufen. Andererseits verbringen Kinder dann oft stundenlang mit Spielen und Videos, statt draußen zu spielen.\n\nMein Neffe hat mit acht Jahren ein Smartphone bekommen. Seitdem schläft er schlechter und hat weniger Kontakt mit Freunden.\n\nDeshalb finde ich ein einfaches Handy ohne Internet für jüngere Kinder die bessere Lösung.',
          70,
        ),
        write(
          'Aufgabe 3: Email rasmi 9sira',
          md`
            Kan 3endek maw3id m3a l-mas2oul dyal l-Ausbildung dyalek, Herr Wagner, ghedda m3a 10:00. Ma t9derch tji. Kteb email 9sira (~40 kelma): **tetsme7**, **chre7 s-sabab**, o **9tare7 maw3id jdid**.
          `,
          ['Sehr geehrter Herr Wagner,', 'Ta3tidar + s-sabab', 'Maw3id jdid', 'Mit freundlichen Grüßen'],
          'Sehr geehrter Herr Wagner,\n\nleider kann ich morgen um 10 Uhr nicht zu unserem Termin kommen, da ich zu einer Untersuchung ins Krankenhaus muss. Es tut mir sehr leid.\n\nWäre es möglich, den Termin auf Donnerstag zu verschieben?\n\nMit freundlichen Grüßen\nYoussef Benali',
          35,
        ),
        graded(choice('F Aufgabe 1 (Goethe B1) khassek tkteb…', ['~40 kelma', '~80 kelma', '~200 kelma'], 1)),
        graded(choice('Ila ktebti l Herr Wagner, f l-akhir katgoul…', ['Viele Grüße', 'Mit freundlichen Grüßen', 'Bis bald'], 1)),
        graded(choice('Ila nsiti no9ta mn n-no9at…', ['Machi mochkil', 'Katkhser bzaf d n-no9at', 'Kat3awed l-imti7an kamel'], 1)),
        graded(choice('Ina jomla katbyyen l-mostawa B1?', ['Ich war krank. Ich bin nicht gekommen.', 'Da ich krank war, konnte ich leider nicht kommen.'], 1)),
        graded(gap('Kemmel', 'Es tut mir leid, ___ ich mich erst jetzt melde.', 'dass')),
        graded(gap('Kemmel', 'Wäre es möglich, den Termin ___ verschieben?', 'zu')),
        summary(
          [
            'Goethe / ÖSD: **email chakhsi (~80) + forum (~80) + email rasmi (~40)** f 60 d9i9a. telc: **rissala wa7da, 4 no9at**.',
            'Kol no9ta = paragraphe · uslub wa7ed · konnektoren · 5 d9a9i d l-muraja3a.',
          ],
          ['Tkteb email chakhsi', 'Tkteb ra2yek', 'Tkteb email rasmi 9sir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Sprechen B1',
      description: 'T-tlata d l-ajza2: tkhtat m3a sa7bek, tqdem mawdou3 (Präsentation), o tjaweb / tsowwel.',
      minutes: 35,
      kind: 'exam',
      goals: ['Tkhtat chi 7aja m3a chi wa7ed (t9tare7, t9bel, trfod)', 'Tqdem mawdou3 b bniya wad7a (5 slides)', 'Tjaweb 3la l-as2ila o t3ti feedback'],
      steps: [
        intro(
          'Sprechen — ~15 d9i9a b jouj',
          md`
            | Jouz2 | Goethe / ÖSD B1 | telc B1 |
            |---|---|---|
            | 1 | **Gemeinsam etwas planen** (~3 min) | Kontaktaufnahme (t-ta3arof) |
            | 2 | **Ein Thema präsentieren** (~3 min) | Gespräch über ein Thema (n-nass) |
            | 3 | **Über das Thema sprechen** (as2ila + feedback) | Gemeinsam etwas planen |

            Kayna **15 d9i9a d t-tahdir** — t9der tkteb mola7adat (machi jmel kamlin!).
          `,
          ['Tkhtat', 'Tqdem', 'Tjaweb'],
        ),
        explain(
          'Teil 1: Gemeinsam etwas planen',
          md`
            Mital: *Kollega dyalkom ghadi yt9a3ed. Khttou 7afla sghira l-farewell.* (Wann? Wo? Essen? Geschenk? Wer macht was?)

            | Bach… | Redemittel |
            |---|---|
            | tbda | "Wollen wir zuerst über … sprechen?" |
            | t9tare7 | "Ich schlage vor, dass wir …" — "Wie wäre es, wenn …?" |
            | twafe9 | "Gute Idee, das machen wir so." |
            | trfod b ladab | "Das finde ich nicht so gut, weil … Was hältst du von …?" |
            | tlakhkhes | "Also: Du kümmerst dich um …, und ich …" |

            **L-mohimm:** thder **m3a** sa7bek — sowwel, jaweb 3la 9tira7ateh. Machi monologue!
          `,
        ),
        speak(
          'Teil 1: Abschiedsfeier',
          'Kollega dyalkom Frau Roth ghadi tt9a3ed. Khttou m3a sa7bek: imta, fin, l-makla, l-hdiya, o chkoun ydir chno.',
          ['Wollen wir zuerst über den Termin sprechen?', 'Ich schlage vor, dass wir die Feier am Freitagnachmittag machen.', 'Wie wäre es, wenn jeder etwas zum Essen mitbringt?', 'Das finde ich nicht so gut, weil viele keine Zeit zum Kochen haben. Was hältst du von einem Catering?', 'Also: Du kümmerst dich um das Geschenk, und ich organisiere den Raum.'],
        ),
        explain(
          'Teil 2: Präsentation (5 Folien)',
          md`
            Kat9dem mawdou3 (mital: *"Sollte man im Urlaub aufs Handy verzichten?"*) b 5 "slides":

            1. **Thema vorstellen:** "Mein Thema heute ist … Ich spreche über folgende Punkte: …"
            2. **Eigene Erfahrung:** "Ich persönlich habe … / Als ich …"
            3. **Situation im Heimatland:** "In Marokko ist das so: …"
            4. **Vor- und Nachteile + Meinung:** "Ein Vorteil ist … Ein Nachteil ist … Meiner Meinung nach …"
            5. **Abschluss & Dank:** "Zum Schluss möchte ich sagen … Vielen Dank fürs Zuhören! Haben Sie Fragen?"

            Dima 9oul **fin nta** f l-presentation: "Jetzt komme ich zu …"
          `,
        ),
        speak(
          'Teil 2: Präsentation',
          '9dem l-mawdou3 "Sollte man im Urlaub aufs Handy verzichten?" b 5 ajza2 (~3 d9a9i).',
          ['Mein Thema heute ist: Sollte man im Urlaub aufs Handy verzichten?', 'Ich persönlich habe letzten Sommer eine Woche ohne Handy verbracht.', 'In Marokko sind viele Menschen auch im Urlaub ständig online.', 'Ein Vorteil ist, dass man sich besser erholt. Ein Nachteil ist, dass man im Notfall schwer erreichbar ist.', 'Zum Schluss möchte ich sagen: Ein paar Tage ohne Handy tun jedem gut. Vielen Dank fürs Zuhören!'],
        ),
        explain(
          'Teil 3: Fragen & Feedback',
          md`
            Men b3d l-presentation dyal sa7bek: **3ti feedback 9sir** o **sowwel so2al wa7ed**. Men b3d **jaweb** 3la so2alou.

            - Feedback: "Danke für die interessante Präsentation. Besonders interessant fand ich …"
            - So2al: "Mich würde interessieren, ob / wie …"
            - Ila ma fhemtich: "Könnten Sie die Frage bitte wiederholen?"
            - Tkseb we9t: "Das ist eine gute Frage. Lassen Sie mich kurz überlegen …"
          `,
        ),
        speak(
          'Teil 3: Feedback o so2al',
          'Sa7bek 9dem 3la "Online-Shopping". 3tih feedback, sowwlou so2al, o jaweb 3la so2alou: "Kaufen Sie selbst viel online?"',
          ['Danke für die interessante Präsentation.', 'Besonders interessant fand ich den Punkt über die Umwelt.', 'Mich würde interessieren, ob Sie auch Kleidung online kaufen.', 'Das ist eine gute Frage. Ich selbst kaufe vor allem Bücher online, weil es bequemer ist.'],
        ),
        graded(choice('F Teil 1 (planen), l-mohimm howa…', ['Thder bou7dek bzaf', 'Thder m3a sa7bek: t9tare7 o tjaweb', 'T9ra mn l-wer9a'], 1)),
        graded(choice('F t-tahdir (15 d9i9a) khassek…', ['Tkteb kol chi jomla', 'Tkteb mola7adat 9sira', 'Ma tkteb walou'], 1)),
        graded(choice('Ach men jomla mnasba bach tkseb chwiya d l-we9t?', ['Keine Ahnung.', 'Das ist eine gute Frage. Lassen Sie mich kurz überlegen.', 'Nächste Frage bitte.'], 1)),
        graded(choice('"Was hältst du von …?" =', ['Chno ban lik f …?', 'Chno kat7mel?', 'Fin kat-skun?'], 0)),
        summary(
          [
            'Goethe / ÖSD: **planen → präsentieren (5 Folien) → Feedback + Fragen**. telc: **Kontakt → Thema → planen**.',
            'Planen: **Ich schlage vor … — Wie wäre es, wenn …? — Was hältst du von …?**',
          ],
          ['Tkhtat m3a chi wa7ed', 'Tqdem mawdou3', 'Tjaweb o t3ti feedback'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'telc Sprachbausteine & Abschlusstest B1',
      description: 'Sprachbausteine dyal telc (grammaire f n-nass) o test akhir dyal l-mostawa B1 kamel.',
      minutes: 35,
      kind: 'exam',
      goals: ['T7ell Sprachbausteine', 'Traja3 l-grammaire dyal B1 kamla', 'Tnje7 f l-Abschlusstest'],
      steps: [
        intro(
          'Sprachbausteine',
          md`
            F **telc B1** kayn jouz2 khass: **Sprachbausteine** — rissala fiha khwa, o katkhtar l-kelma s-s7i7a (Teil 1: men 3 ikhtiyarat · Teil 2: men lista d l-kalimat).
            Kaymt7en: **prépositions, konnektoren, relativpronomen, terminaisons, Verben + Präposition**.
          `,
          ['T7ell Sprachbausteine', 'Traja3 B1', 'Dir t-test'],
        ),
        explain(
          'Strategiya',
          md`
            1. 9ra **n-nass kamel** 9bel — fhem l-mawdou3.
            2. Chouf **9bel o men b3d** l-khwa: wach l-fi3l f l-akhir? → Nebensatz (weil, obwohl, dass…). Inversion? → Adverb (deshalb, trotzdem…).
            3. Chouf **l-7ala**: Dativ? Akkusativ? Genitiv? → terminaison / préposition.
            4. Chouf **l-fi3l**: kay7taj préposition m3ayyna? (warten **auf**, sich interessieren **für** …)
          `,
        ),
        reading(
          'Sprachbausteine Teil 1 — E-Mail',
          md`
            Liebe Frau Schneider,

            vielen Dank für Ihre Einladung (1) ___ Sommerfest. Ich freue mich sehr (2) ___ und komme gern. (3) ___ ich am Samstag bis 15 Uhr arbeiten muss, werde ich etwas später kommen. Darf ich meinen Mitbewohner mitbringen, (4) ___ gerade aus Hamburg zu Besuch ist? Er interessiert sich sehr (5) ___ Gärten und würde Ihren gern sehen.

            Herzliche Grüße
            Youssef Benali
          `,
          { text: '9ra l-email o 3emmer l-khwa f t-tamarin li men b3d.' },
        ),
        graded(choice('(1) „vielen Dank für Ihre Einladung ___ Sommerfest"', ['zum', 'zur', 'beim'], 0, 'das Fest → zu + dem = zum.')),
        graded(choice('(2) „Ich freue mich sehr ___"', ['darauf', 'davon', 'damit'], 0, 'sich freuen auf → darauf (7aja jaya).')),
        graded(choice('(3) „___ ich bis 15 Uhr arbeiten muss, werde ich später kommen."', ['Da', 'Deshalb', 'Trotzdem'], 0, 'L-fi3l "muss" f l-akhir → Nebensatz → da (7it).')),
        graded(choice('(4) „meinen Mitbewohner, ___ gerade zu Besuch ist"', ['der', 'den', 'dem'], 0, 'Relativpronomen, Nominativ (howa l-fa3il).')),
        graded(choice('(5) „Er interessiert sich sehr ___ Gärten"', ['für', 'an', 'über'], 0)),
        explain('Abschlusstest B1', 'Test akhir dyal B1: l-grammaire o l-kalimat dyal kol l-unités.'),
        graded(choice('"Als ich in Köln ankam, ___ der Zug schon abgefahren."', ['war', 'hatte', 'ist'], 0, 'Plusquamperfekt: abfahren → sein.')),
        graded(choice('"Das ist das Team, mit ___ ich arbeiten werde."', ['dem', 'den', 'der'], 0, 'das Team → mit + Dativ → dem.')),
        graded(choice('"___ des schlechten Wetters fand das Fest statt."', ['Trotz', 'Wegen', 'Während'], 0)),
        graded(choice('"Je mehr ich übe, ___ besser spreche ich."', ['desto', 'als', 'so'], 0)),
        graded(choice('"Die Brücke ___ letztes Jahr gebaut."', ['wurde', 'wird', 'hat'], 0)),
        graded(choice('"Ich lerne Deutsch, ___ ich in Deutschland studieren kann."', ['damit', 'um', 'sodass'], 0)),
        graded(choice('"Wenn ich das gewusst ___, wäre ich nicht gekommen."', ['hätte', 'wäre', 'würde'], 0)),
        graded(choice('"Sie ist gegangen, ___ sich zu verabschieden."', ['ohne', 'statt', 'um'], 0)),
        graded(choice('"Könnten Sie mir sagen, wann ___?"', ['der Kurs beginnt', 'beginnt der Kurs', 'der Kurs beginnen'], 0)),
        graded(choice('"Ich habe mein Auto reparieren ___."', ['lassen', 'gelassen', 'zu lassen'], 0)),
        graded(gap('Kemmel', 'Ich warte schon seit einer Stunde ___ den Bus.', 'auf')),
        graded(gap('Kemmel', 'Es war ___ kalt, dass wir zu Hause geblieben sind.', 'so')),
        summary(
          [
            'Sprachbausteine: **9ra kolchi → chouf 9bel / men b3d l-khwa → 7ala → fi3l + préposition**.',
            'Mabrouk! Kmmelti **B1** — daba t9der ttawasel f l-khedma, l-idara o l-7yat l-yawmiya b sohoula. L-mostawa l-jay: **B2**.',
          ],
          ['T3ref l-imti7anat B1', 'T7ell Sprachbausteine', 'Traja3 l-grammaire dyal B1'],
          'Khlasa dyal B1',
        ),
      ],
    },
  ],
});
