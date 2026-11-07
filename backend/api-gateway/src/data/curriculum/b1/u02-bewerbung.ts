import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 2,
  title: 'Bewerbung & Beruf',
  description: "L-annonce, l-Anschreiben (lettre de motivation), l-entretien o l-i3tiraf b d-diplômes — b l-Relativsätze: \"die Stelle, die ich suche\".",
  icon: 'work_history',
  objectives: [
    'Tfhem annonce dyal l-khedma b tafasil',
    'Tkteb Anschreiben (lettre de motivation) mnadhdham',
    'Tjaweb 3la s-sou2alat l-ma3roufa f l-Vorstellungsgespräch',
    'Tkhdem l-Relativsätze (Nom., Akk., Dat., m3a préposition)',
    'T3ref kifach ttleb l-i3tiraf b d-diplôme dyalek',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Die Stellenanzeige',
      description: 'L-annonce dyal l-khedma b tafasil: l-mahamm, l-mo2ahhilat, l-imtiyazat.',
      minutes: 30,
      kind: 'input',
      goals: ['Tfhem l-ajza2 dyal annonce (Aufgaben, Profil, Angebot)', 'T9aren l-mo2ahhilat dyalek m3a l-annonce', 'Ttasel bach tsowwel 3la tafasil'],
      steps: [
        intro(
          'Salma kat9elleb 3la stage d l-akhir d l-9raya',
          'Salma f l-3am l-akhir d l-licence. Khassha **Pflichtpraktikum** (stage obligatoire) d 6 chhour. L9at annonce f charika kbira f Düsseldorf. Ghadi t9raha o tchouf wach mnasba.',
          ['Tfhem l-annonce', 'T9aren', 'Tttasel'],
        ),
        reading(
          'Stellenanzeige: Praktikum Softwareentwicklung',
          md`
            **DataNova GmbH** — wir entwickeln Software für Krankenhäuser in ganz Europa.

            Wir suchen ab 1. März für 6 Monate eine/n **Praktikant/in (m/w/d) Softwareentwicklung**.

            **Ihre Aufgaben:**
            – Sie arbeiten in einem agilen Team, das neue Funktionen für unsere Patienten-App entwickelt.
            – Sie testen Programme und dokumentieren die Ergebnisse.
            – Sie unterstützen die Kolleginnen und Kollegen bei Kundenprojekten.

            **Ihr Profil:**
            – Studium der Informatik oder ein ähnliches Fach
            – erste Erfahrungen mit Python oder Java
            – sehr gute Englisch- und gute Deutschkenntnisse (mind. B2)
            – Teamfähigkeit und Freude an neuen Herausforderungen

            **Wir bieten:**
            – eine Vergütung von 1.400 € brutto im Monat
            – flexible Arbeitszeiten und zwei Tage Homeoffice pro Woche
            – einen Mentor, der Sie während des Praktikums begleitet
            – gute Chancen auf eine Übernahme nach dem Studium

            Bitte senden Sie Ihre vollständigen Bewerbungsunterlagen (Anschreiben, Lebenslauf, Zeugnisse) bis zum 15. Januar an jobs@datanova.de. Ansprechpartnerin: Frau Dr. Kessler.
          `,
          {
            text: '9ra l-annonce mzyan.',
            glossary: [
              ['entwickeln', 'tewwer / sowweb (développer)'],
              ['die Funktion', 'l-khasiya'],
              ['unterstützen', '3awen / d3em'],
              ['ähnlich', 'chbih'],
              ['die Teamfähigkeit', 'l-9odra 3la l-khedma f l-équipe'],
              ['die Vergütung', 'l-ajr / t-ta3wid'],
              ['begleiten', 'rafe9'],
              ['die Übernahme', 't-tawdhif men b3d (l-istimrar)'],
              ['vollständig', 'kamel'],
            ],
          },
        ),
        choice('Ch7al dyal l-moudda dyal l-stage?', ['3 chhour', '6 chhour', '3am'], 1),
        choice('Ina niveau d l\'Almaniya kaytlbou?', ['A2', 'B1', 'B2 3la l-a9al'], 2),
        choice('Chno ma kaynch f "Wir bieten"?', ['Homeoffice', 'Mentor', 'Tomobil d l-khedma'], 2),
        choice('7tal imta khass t-sift l-wra9?', ['1. März', '15. Januar', '6 chhour'], 1),
        vocab('Bewerbung — T-talab d l-khedma', [
          ['die Stellenanzeige', 'l-annonce d l-khedma', ''],
          ['die Bewerbungsunterlagen (Pl.)', 'l-wra9 d t-talab (dossier)', ''],
          ['das Anschreiben', 'l-lettre de motivation', ''],
          ['der Lebenslauf', 's-CV', ''],
          ['das Zeugnis', 'ch-chahada / l-bulletin', 'die Zeugnisse'],
          ['das Vorstellungsgespräch', 'l-entretien', ''],
          ['die Kenntnisse (Pl.)', 'l-ma3arif', '', ['Ich habe gute Englischkenntnisse.', '3endi ma3rifa mzyana b l-ingliziya.']],
          ['die Fähigkeit', 'l-9odra / l-mahara', 'die Fähigkeiten'],
          ['die Stärke / die Schwäche', 'no9tat l-9owwa / no9tat d-do3f', ''],
          ['zuverlässig', 'm3tamad 3lih / thi9a'],
          ['selbstständig', 'kaykhdem bou7dou (autonome)'],
          ['belastbar', 'kaytkemmel d-dagh'],
          ['der Arbeitgeber / der Arbeitnehmer', 'l-mochaghghil / l-3amil', ''],
          ['die Probezeit', 'moddat t-tajriba', ''],
        ]),
        explain(
          'Chno kayn f annonce?',
          md`
            Ktar l-annonces 3endhom **4 ajza2**:

            | Jouz2 | Sou2al | Kalimat |
            |---|---|---|
            | **Wir sind …** | chkoun ch-charika? | Unternehmen, Branche, Standort |
            | **Ihre Aufgaben** | chno ghadi tkhdem? | entwickeln, betreuen, unterstützen, verantwortlich für |
            | **Ihr Profil** | chno khass ykoun fik? | Ausbildung / Studium, Erfahrung, Kenntnisse, Teamfähigkeit |
            | **Wir bieten** | chno ghadi y3tiwek? | Gehalt, Weiterbildung, flexible Arbeitszeiten, unbefristeter Vertrag |

            **unbefristet** = contrat bla ajal (CDI) · **befristet** = b ajal (CDD).
            **(m/w/d)** = l ay jins.
          `,
        ),
        listening(
          'Ein Anruf bei DataNova',
          [
            ['Frau Kessler', 'DataNova, Kessler, guten Tag.', 'DataNova, Kessler, nharek sa3id.'],
            ['Salma', 'Guten Tag, Frau Dr. Kessler. Mein Name ist Salma El Idrissi. Ich interessiere mich für das Praktikum in der Softwareentwicklung und hätte zwei Fragen.', 'Nharek sa3id. Smiyti Salma El Idrissi. Kayhemmni l-stage f t-tatwir d l-logiciels o 3endi jouj d s-sou2alat.'],
            ['Frau Kessler', 'Gerne.', 'Tfeddli.'],
            ['Salma', 'Ich habe Erfahrung mit Python, aber noch nicht mit Java. Ist das ein Problem?', '3endi tajriba f Python walakin mazal f Java. Wach hada mochkil?'],
            ['Frau Kessler', 'Nein, Python reicht völlig. Das Team, in dem Sie arbeiten würden, programmiert hauptsächlich in Python.', 'La, Python kafi. L-équipe li ghadi tkhdmi m3aha katprogrammi ghaliban b Python.'],
            ['Salma', 'Sehr gut. Und kann das Praktikum auch im April beginnen? Meine Prüfungen dauern bis Ende März.', 'Mzyan bzaf. O wach l-stage y9der ybda f abril? L-imti7anat dyali 7tal l-akhir d mars.'],
            ['Frau Kessler', 'Das ist möglich. Schreiben Sie das bitte in Ihr Anschreiben.', 'Momkin. Kteb dakchi f l-lettre dyalek.'],
          ],
        ),
        choice('Wach Java dharouri?', ['Ah', 'La, Python kafi'], 1),
        choice('Imta t9der tbda Salma?', ['F mars', 'F abril', 'F younyou'], 1),
        gap('Kemmel', 'Ich interessiere mich ___ das Praktikum.', 'für|fuer'),
        speak(
          'T9aren rasek m3a l-annonce',
          'Chouf l-annonce: goul 3 7wayej kayn fik men l-"Profil", o 7aja wa7da ma 3endekch (o kifach ghadi tt3llemha).',
          ['Ich studiere Informatik im fünften Semester.', 'Ich habe schon mit Python programmiert.', 'Ich arbeite gern im Team.', 'Mit Java habe ich noch keine Erfahrung, aber ich lerne schnell.'],
        ),
        graded(choice('"unbefristet" kay3ni…', ['contrat b ajal', 'contrat bla ajal (CDI)', 'stage'], 1)),
        graded(choice('"zuverlässig" =', ['m3tamad 3lih', 'kaykhdem bou7dou', 'dghya'], 0)),
        graded(choice('F ina jouz2 katl9a l-ajr?', ['Ihre Aufgaben', 'Ihr Profil', 'Wir bieten'], 2)),
        graded(translate("Terjem l l'Almaniya", '3endi ma3rifa mzyana b l-ingliziya.', ['Ich habe gute Englischkenntnisse.', 'Ich habe sehr gute Englischkenntnisse.'])),
        summary(
          [
            'Annonce: **Wir sind … · Ihre Aufgaben · Ihr Profil · Wir bieten**.',
            '**Bewerbungsunterlagen** = Anschreiben + Lebenslauf + Zeugnisse.',
            '**zuverlässig, selbstständig, belastbar, teamfähig** — sifat mohimma.',
          ],
          ['Tfhem annonce b tafasil', 'T9aren rasek m3a l-profil', 'Tttasel bach tsowwel'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ein Team, das … — Relativsätze',
      description: 'L-jmel l-mawsoula: der / die / das / denen… f kol l-7alat, m3a l-prépositions, o was / wo.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tfhem chno howa Relativsatz', 'Tkhtar l-Relativpronomen s-s7i7 (jins + 7ala)', 'Tkhdem Relativsätze m3a prépositions', 'Tkhdem was o wo'],
      steps: [
        intro(
          '"Ein Team, das neue Funktionen entwickelt"',
          md`
            F l-annonce: "ein agiles Team, **das** neue Funktionen **entwickelt**", "einen Mentor, **der** Sie **begleitet**".
            Hadou **Relativsätze**: jmel kat-wesef s-smiya li 9belha — b7al *li* f Darija: *l-équipe **li** katsowweb…*
          `,
          ['Chno howa Relativsatz', 'L-Relativpronomen', 'M3a prépositions', 'was / wo'],
        ),
        explain(
          'Relativsatz = jomla b "li"',
          md`
            > Das ist der Mentor. **Der** Mentor begleitet Sie.
            > → Das ist der Mentor, **der** Sie **begleitet**.

            **3 d l-9awa3id:**
            1. Kaybda b **Relativpronomen** (der, die, das…) — b7al *li*.
            2. **L-fi3l f l-akhir** (Nebensatz).
            3. **Fasila** 9bel (o men b3d ila kmmlat j-jomla).

            **Kifach tkhtar l-pronomen?** Jouj d l-as2ila:
            - **L-jins o l-3adad** → men s-smiya li 9bel (der Mentor → der / die Firma → die).
            - **L-7ala** → men **dawr** l-pronomen **dakhel** l-Relativsatz.
          `,
        ),
        explain(
          'L-Relativpronomen',
          md`
            | | m | f | n | jam3 |
            |---|---|---|---|---|
            | Nom. | der | die | das | die |
            | Akk. | **den** | die | das | die |
            | Dat. | **dem** | **der** | **dem** | **denen** ⚠️ |

            B7al l-article — **ghir l-Dativ jam3**: **denen** (machi den).

            **Mital b l-7alat:**
            - **Nom.** (fa3il): Der Kollege, **der** neben mir sitzt, heißt Tim. (*der* kaydir l-fi3l "sitzt")
            - **Akk.** (maf3oul): Der Kollege, **den** ich gestern kennengelernt habe, heißt Tim. (*ich habe ihn kennengelernt*)
            - **Dat.**: Der Kollege, **dem** ich helfe, heißt Tim. (*ich helfe ihm*)
            - **Dat. jam3**: Die Kollegen, **denen** ich helfe, sind nett.
          `,
          [
            ['Die Firma, die mich eingeladen hat, ist in Düsseldorf.', 'Ch-charika li std3atni f Düsseldorf.'],
            ['Das Praktikum, das ich suche, beginnt im April.', 'L-stage li kan9elleb 3lih kaybda f abril.'],
            ['Die Chefin, der ich die E-Mail geschickt habe, hat schnell geantwortet.', 'L-patrona li sifet liha l-email jawbat dghya.'],
          ],
          'Tri9a: dir l-Relativsatz jomla 3adiya f rassek: "Ich habe **ihn** kennengelernt" → ihn = Akk → **den**.',
        ),
        choice('"Der Mann, ___ dort steht, ist mein Chef."', ['der', 'den', 'dem'], 0, 'Er steht dort → Nom.'),
        choice('"Der Laptop, ___ ich gekauft habe, ist schnell."', ['der', 'den', 'dem'], 1, 'Ich habe ihn gekauft → Akk.'),
        choice('"Die Kollegin, ___ ich geholfen habe, bedankt sich."', ['die', 'der', 'denen'], 1, 'Ich habe ihr geholfen → Dat. f → der.'),
        choice('"Die Kunden, ___ wir die Software verkaufen, sind Krankenhäuser."', ['die', 'den', 'denen'], 2, 'Wir verkaufen ihnen → Dat. jam3 → denen.'),
        gap('Kemmel', 'Das ist das Projekt, ___ mich am meisten interessiert.', 'das'),
        gap('Kemmel', 'Wie heißt die Firma, ___ du dich beworben hast? — (bei + die)', 'bei der'),
        explain(
          'Relativsatz m3a préposition',
          md`
            Ila l-fi3l kayji m3a préposition (sich bewerben **bei**, arbeiten **mit**, sprechen **über**…), **l-préposition kayji 9bel l-pronomen**:

            > Ich arbeite **mit** dem Team. → Das Team, **mit dem** ich arbeite, ist super.
            > Ich freue mich **auf** die Stelle. → Die Stelle, **auf die** ich mich freue, beginnt im April.
            > Wir sprechen **über** das Thema. → Das Thema, **über das** wir sprechen, ist wichtig.

            L-7ala katji men **l-préposition**: mit + **Dat** → dem; auf (sich freuen auf) + **Akk** → die.
          `,
          [
            ['Das ist die Kollegin, mit der ich jeden Tag zusammenarbeite.', 'Hadi z-zmila li kankhdem m3aha kol nhar.'],
            ['Die Firma, bei der ich mich beworben habe, hat geantwortet.', 'Ch-charika li 9eddemt fiha t-talab jawbat.'],
          ],
        ),
        choice('"Das ist der Mentor, ___ ich viel gelernt habe." (von)', ['von dem', 'von den', 'vom'], 0),
        gap('Kemmel', 'Die Kollegen, mit ___ ich arbeite, kommen aus fünf Ländern.', 'denen'),
        explain(
          'was o wo',
          md`
            **was** men b3d: **alles, nichts, etwas, vieles, das** (l-a7wal l-3amma) — o men b3d jomla kamla:
            > Das ist **alles, was** ich weiß. · Es gibt **nichts, was** ich nicht machen würde.
            > Ich habe die Stelle bekommen, **was** mich sehr freut. (*o hadchi fra7ni*)

            **wo** m3a **l-blasa** (b7al *fin*):
            > Köln ist die Stadt, **wo** ich wohne. (= in der ich wohne)
          `,
        ),
        choice('"Das ist das Beste, ___ mir passieren konnte."', ['das', 'was', 'wo'], 1),
        choice('"Düsseldorf ist die Stadt, ___ das Praktikum stattfindet."', ['was', 'wo', 'die'], 1),
        order('Rtteb', 'Das ist die Firma, bei der ich mich beworben habe.'),
        order('Rtteb', 'Der Kollege, den ich gestern kennengelernt habe, kommt aus Spanien.'),
        translate("Terjem l l'Almaniya", 'Hada r-rajel li 3awenni.', ['Das ist der Mann, der mir geholfen hat.', 'Das ist der Mann, der mir hilft.']),
        graded(choice('"Die Stelle, ___ ich mich interessiere, ist in Bonn." (für)', ['für die', 'für der', 'die'], 0)),
        graded(choice('"Die Bewerber, ___ wir eingeladen haben, kommen morgen."', ['denen', 'die', 'den'], 1)),
        graded(gap('Kemmel', 'Der Chef, ___ ich die Unterlagen gegeben habe, ruft morgen an.', 'dem')),
        graded(gap('Kemmel', 'Die Kinder, ___ ich Deutsch beibringe, sind sehr motiviert.', 'denen')),
        graded(choice('"Das ist alles, ___ ich brauche."', ['das', 'was', 'wo'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Das Buch, das ich lese, ist spannend.', 'Das Buch, das ich lese ist, spannend.', 'Das Buch, das lese ich, ist spannend.'], 0)),
        graded(translate("Terjem l l'Almaniya", 'L-khedma li kan9elleb 3liha f Köln.', ['Die Arbeit, die ich suche, ist in Köln.', 'Die Stelle, die ich suche, ist in Köln.'])),
        summary(
          [
            'Relativsatz = jomla b **"li"**: pronomen + … + **fi3l f l-akhir**, m3a fasila.',
            'Pronomen: **jins** men s-smiya, **7ala** men d-dawr dakhel l-Relativsatz. Dativ jam3 = **denen**.',
            'M3a préposition: **mit dem, auf die, über das, bei der** …',
            '**was** men b3d alles / nichts / etwas / jomla kamla · **wo** l l-blasa.',
          ],
          ['Twesef n-nas o l-7wayej b Relativsätze', 'Tkhtar l-pronomen s-s7i7'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Anschreiben & Vorstellungsgespräch',
      description: 'Tkteb lettre de motivation, tsme3 entretien, o tt3llem tjaweb 3la s-sou2alat l-ma3roufa.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tkteb Anschreiben b l-ajza2 dyalou', 'Tfhem entretien o s-sou2alat l-ma3roufa', 'Tjaweb 3la "Stärken und Schwächen"', 'T3ref l-i3tiraf b d-diplômes'],
      steps: [
        intro(
          'Men l-lettre l l-entretien',
          'Salma khassha tkteb **Anschreiben**. Men b3d, ila 3jbathom, ghadi tstd3a l **Vorstellungsgespräch**. Ghadi nt3allmou j-jouj.',
          ['Tkteb l-Anschreiben', 'Tfhem l-entretien', 'Tjaweb'],
        ),
        explain(
          'L-Anschreiben: struktura',
          md`
            **Sf7a wa7da**, 3–4 d l-fa9arat:

            1. **L-bidaya** (3lach katkteb): "Mit großem Interesse habe ich Ihre Anzeige gelesen …" / "Hiermit bewerbe ich mich um die Stelle als …"
            2. **Chkoun nta** (l-9raya / l-khedma l-7aliya): "Zurzeit studiere ich … im fünften Semester."
            3. **3lach nta mnasb** (tajriba + mahara + mithal): "Während meines Minijobs habe ich gelernt, … ." "Ich bringe … mit."
            4. **3lach had ch-charika** (motivation): "Besonders interessiert mich …, weil …"
            5. **L-akhir**: "Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr."
            → **Mit freundlichen Grüßen** + t-tawqi3.

            **Nasa2i7:** ma t3awedch l-CV — **chra7 o 3ti amthila**. Kteb l-smiya dyal l-mas2oul ila kanet: "Sehr geehrte Frau Dr. Kessler,".
          `,
        ),
        reading(
          'Salmas Anschreiben (Ausschnitt)',
          md`
            Sehr geehrte Frau Dr. Kessler,

            mit großem Interesse habe ich Ihre Anzeige für ein Praktikum in der Softwareentwicklung gelesen. Vielen Dank auch für das freundliche Telefonat am Montag.

            Zurzeit studiere ich Informatik an der Universität zu Köln im fünften Semester. Seit über einem Jahr arbeite ich als Werkstudentin bei WebSolutions, wo ich Webanwendungen mit Python entwickle und teste. Dabei habe ich gelernt, selbstständig und im Team zu arbeiten.

            Besonders interessiert mich Ihre Patienten-App, weil ich Software entwickeln möchte, die Menschen im Alltag hilft. Da mein Bruder Medizin studiert, kenne ich die Probleme, die es im Krankenhaus gibt.

            Wie bereits besprochen, könnte ich das Praktikum ab dem 1. April beginnen. Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.

            Mit freundlichen Grüßen
            Salma El Idrissi
          `,
          { glossary: [['zurzeit', 'f had l-wa9t'], ['die Webanwendung', 'l-application web'], ['wie bereits besprochen', 'b7al ma tkellmna']] },
        ),
        choice('3lach kayhemmha l-app?', ['7it ghalia', '7it bghat tsowweb logiciel kay3awen n-nas', '7it sahla'], 1),
        choice('Fin katkhdem daba?', ['DataNova', 'WebSolutions', 'S-sbitar'], 1),
        listening(
          'Im Vorstellungsgespräch',
          [
            ['Frau Kessler', 'Frau El Idrissi, erzählen Sie doch ein bisschen über sich.', 'Madame El Idrissi, 7ki lina chwiya 3la rasek.'],
            ['Salma', 'Gern. Ich komme aus Fès und studiere seit drei Jahren in Köln Informatik. Neben dem Studium arbeite ich als Werkstudentin, wo ich viel praktische Erfahrung gesammelt habe.', 'B kolchi. Ana men Fès o kan9ra l-informatique f Köln men 3 snin. M3a l-9raya kankhdem Werkstudentin, fin jm3t tajriba 3amaliya bzaf.'],
            ['Frau Kessler', 'Was sind Ihre Stärken?', 'Chno houma no9at l-9owwa dyalek?'],
            ['Salma', 'Ich bin sehr zuverlässig und lerne schnell. Als wir letztes Jahr ein Projekt mit einer sehr kurzen Frist hatten, habe ich mich in zwei Wochen in eine neue Datenbank eingearbeitet.', 'Ana m3tamad 3liya o kant3llem dghya. L-3am li fat mli kan 3endna projet b ajal 9sir, t3llemt database jdida f simanatayn.'],
            ['Frau Kessler', 'Und Ihre Schwächen?', 'O no9at d-do3f?'],
            ['Salma', 'Manchmal bin ich zu perfektionistisch und brauche zu lange für Details. Ich arbeite daran, indem ich mir feste Zeitlimits setze.', 'Chi merrat kankoun perfectionniste bzaf o kanakhod wa9t twil f t-tafasil. Kankhdem 3la hadchi b ann kan7ett wa9t mo7added.'],
            ['Frau Kessler', 'Haben Sie noch Fragen an uns?', 'Wach 3endek chi as2ila lina?'],
            ['Salma', 'Ja: Wie sieht ein typischer Arbeitstag im Team aus?', 'Ah: kifach kaykoun nhar 3adi f l-équipe?'],
          ],
        ),
        choice('Chno no9tat l-9owwa li 3tat Salma?', ['Dre7a', 'M3tamad 3liha o katt3llem dghya — m3a mithal', 'Kat3ref ktar men logha'], 1),
        choice('Kifach jawbat 3la no9tat d-do3f?', ['Gallet belli ma 3endhach', 'Gallet no9ta 7a9i9iya o kifach katkhdem 3liha', 'Ma jawbatch'], 1),
        explain(
          'S-sou2alat l-ma3roufa f l-entretien',
          md`
            | Sou2al | Kifach tjaweb |
            |---|---|
            | "Erzählen Sie etwas über sich." | 1–2 d9i9a: chkoun nta, l-9raya / l-khedma, 3lach nta hna |
            | "Warum möchten Sie bei uns arbeiten?" | 3ref ch-charika 9bel! 3ti 2 asbab mo7addada |
            | "Was sind Ihre Stärken?" | 2–3 sifat **+ mithal wa9i3i** (STAR: situation, mahamma, chno dirti, n-natija) |
            | "Was sind Ihre Schwächen?" | no9ta 7a9i9iya, machi khatira, **+ kifach katkhdem 3liha** |
            | "Wo sehen Sie sich in fünf Jahren?" | hadaf mihani wa9i3i |
            | "Haben Sie noch Fragen?" | **dima 3ndek sou2al!** (l-équipe, l-mahamm, t-takwin) |

            **Ma tsowwelch f l-bidaya 3la l-ajr o l-3otla.** Ila sowlouk 3la l-ajr: "Meine Gehaltsvorstellung liegt bei …"
          `,
        ),
        culture(
          'L-i3tiraf b d-diplômes (Anerkennung)',
          md`
            - Ila 3endek diplôme men l-Maghrib (licence, master, BTS, diplôme d l-infirmier…), t9der ttleb **Anerkennung** (l-i3tiraf).
            - **Mihan mounazzama** (reglementiert): tbib, fermli, oustad, mohandis f chi 7alat → **l-i3tiraf wajib**.
            - **Mihan machi mounazzama** (informatique, commerce…) → machi wajib, walakin mzyan: "Zeugnisbewertung" men l-**ZAB**.
            - Portail rasmi: **anerkennung-in-deutschland.de**. Kayn ta l-"Anerkennungsberatung" fabor.
            - F l-Bewerbung, kteb d-diplôme l-asli o l-mo3adil: "Licence (entspricht Bachelor), anerkannt durch die ZAB".
          `,
        ),
        pron(
          'Sout wa9i f l-entretien',
          'Hder b **sor3a hadya**, dir wa9fat 9sar, o 3tti l-accent l l-kalimat l-mohimma (Erfahrung, Team, zuverlässig). Sme3 o 3awed.',
          [
            ['Ich bin sehr zuverlässig und lerne schnell.', 'L-accent 3la "zuverlässig" o "schnell"'],
            ['Dabei habe ich gelernt, im Team zu arbeiten.', 'Wa9fa sghira men b3d "gelernt"'],
            ['Wie sieht ein typischer Arbeitstag aus?', 'S-sout kayhbet f l-akhir (W-Frage)'],
          ],
        ),
        write(
          'Dein Anschreiben',
          md`
            Khtar annonce (l-annonce dyal DataNova, wla Ausbildung f s-sbitar, wla khedma f l-mihna dyalek) o kteb **Anschreiben** (~150 kelma) b 4 fa9arat. Khdem **2 Relativsätze** o 3ti **mithal wa9i3i** l wa7ed men no9at l-9owwa dyalek.
          `,
          ['Sehr geehrte/r …,', 'Fa9ra 1: l-bidaya (mit großem Interesse …)', 'Fa9ra 2: chkoun nta (zurzeit …)', 'Fa9ra 3: l-mahara + mithal', 'Fa9ra 4: motivation + l-akhir', '2 Relativsätze', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Anzeige für einen Ausbildungsplatz als Pflegefachmann gelesen.\n\nZurzeit mache ich ein Praktikum im St.-Marien-Krankenhaus in Köln, wo ich Patientinnen und Patienten bei der Körperpflege und beim Essen unterstütze. Vorher habe ich zwei Jahre im Kundenservice gearbeitet. Dort habe ich gelernt, auch in stressigen Situationen ruhig und freundlich zu bleiben.\n\nIch möchte einen Beruf lernen, der Menschen direkt hilft. Ihr Krankenhaus, das für seine gute Ausbildung bekannt ist, ist dafür der ideale Ort. Ich spreche Arabisch, Französisch und Deutsch (B1) und kann so auch Patienten unterstützen, die wenig Deutsch sprechen.\n\nÜber eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nYoussef Benali',
          120,
        ),
        graded(choice('L-Anschreiben khasso ykoun…', ['3 sf7at', 'Sf7a wa7da', 'Jomla wa7da'], 1)),
        graded(choice('F no9tat d-do3f, a7ssen tgoul…', ['Ma 3endi 7ta do3f', 'No9ta 7a9i9iya + kifach katkhdem 3liha', 'Ana kaslan'], 1)),
        graded(choice('Ina sou2al ma tsowwlouch f l-bidaya d l-entretien?', ['Wie sieht ein Arbeitstag aus?', 'Wie viel Urlaub bekomme ich?', 'Wer ist im Team?'], 1)),
        graded(dictation('Sme3 o kteb', 'Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.')),
        summary(
          [
            'Anschreiben: **bidaya → chkoun nta → 3lach mnasb (+ mithal) → motivation → akhir**.',
            'Entretien: no9at l-9owwa **b mithal**, no9tat d-do3f **+ 7al**, dima **sou2al** f l-akhir.',
            '**Anerkennung** dyal d-diplôme: anerkennung-in-deutschland.de.',
          ],
          ['Tkteb Anschreiben', 'Tjaweb f l-entretien', 'T3ref l-i3tiraf b d-diplômes'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 2',
      description: 'Muraja3a: l-Bewerbung, l-entretien, l-Relativsätze — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Relativsätze', 'Tdir entretien 9sir', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-annonce, l-Anschreiben, l-entretien, o l-Relativsätze.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'Relativpronomen',
          md`
            | | m | f | n | jam3 |
            |---|---|---|---|---|
            | Nom. | der | die | das | die |
            | Akk. | den | die | das | die |
            | Dat. | dem | der | dem | **denen** |

            M3a préposition: **mit dem, für die, bei der, über das …** · **was** (alles, nichts, etwas) · **wo** (blasa)
          `,
        ),
        dialogue(
          'Nach dem Gespräch',
          [
            ['Youssef', 'Und? Wie war das Vorstellungsgespräch?', 'Iwa? Kif daz l-entretien?'],
            ['Salma', 'Gut, glaube ich! Frau Kessler, die das Gespräch geleitet hat, war sehr freundlich.', 'Mzyan, kandenn! Madame Kessler li dart l-entretien kanet drifa bzaf.'],
            ['Youssef', 'Hast du das Team gesehen, mit dem du arbeiten würdest?', 'Wach chefti l-équipe li ghadi tkhdmi m3aha?'],
            ['Salma', 'Ja, sie haben mir das Büro gezeigt, in dem sie arbeiten. Das Beste, was ich gesehen habe, war die Dachterrasse!', 'Ah, werrawni l-bureau li kaykhdmou fih. A7ssen 7aja chefti hiya t-terrasse!'],
            ['Youssef', 'Wann bekommst du eine Antwort?', 'Imta ghadi yjawbouk?'],
            ['Salma', 'Bis Ende der Woche. Ich bin so nervös!', '7tal l-akhir d s-simana. Ana mnerfza bzaf!'],
          ],
        ),
        choice('Chkoun dart l-entretien?', ['L-patron', 'Frau Kessler', 'Tim'], 1),
        choice('Chno 3jeb Salma ktar?', ['L-bureau', 'T-terrasse', 'L-ajr'], 1),
        gap('Kemmel', 'Das Team, mit ___ ich arbeiten würde, ist international. Das Beste, ___ ich gesehen habe, war die Terrasse.', ['dem', 'was']),
        match('Rbet', [
          ['das Anschreiben', 'l-lettre de motivation'],
          ['die Stärke', 'no9tat l-9owwa'],
          ['belastbar', 'kaytkemmel d-dagh'],
          ['die Übernahme', 't-tawdhif men b3d'],
          ['die Anerkennung', 'l-i3tiraf b d-diplôme'],
        ]),
        speak(
          'Role-play: l-entretien',
          'Jaweb 3la had s-sou2alat dyal l-entretien: *Erzählen Sie etwas über sich. Was sind Ihre Stärken? Warum möchten Sie bei uns arbeiten? Haben Sie noch Fragen?*',
          ['Ich heiße Youssef Benali und mache zurzeit ein Praktikum in der Pflege.', 'Meine Stärke ist, dass ich auch in stressigen Situationen ruhig bleibe. Zum Beispiel …', 'Ich möchte bei Ihnen arbeiten, weil Ihr Krankenhaus eine sehr gute Ausbildung anbietet.', 'Wie viele Auszubildende arbeiten auf einer Station?'],
        ),
        graded(choice('"Der Kollege, ___ mir das System erklärt hat, heißt Max."', ['der', 'den', 'dem'], 0)),
        graded(choice('"Die Firma, ___ ich mich beworben habe, ist groß." (bei)', ['bei die', 'bei der', 'bei dem'], 1)),
        graded(gap('Kemmel', 'Die Bewerber, ___ wir abgesagt haben, bekommen eine E-Mail.', 'denen')),
        graded(gap('Kemmel', 'Das ist der Laptop, ___ ich für die Arbeit brauche.', 'den')),
        graded(choice('"Es gibt nichts, ___ sie nicht kann."', ['das', 'was', 'wo'], 1)),
        graded(choice('"Ihr Profil" f l-annonce kaygoul…', ['chno ghadi y3tiwek', 'chno khass ykoun fik', 'chkoun ch-charika'], 1)),
        graded(choice('"die Vergütung" hiya…', ['l-ajr / t-ta3wid', 'l-moudda', 't-takwin'], 0)),
        graded(choice('Ina bidaya mnasba l Anschreiben?', ['Hallo, ich will den Job!', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Ich heiße Ali.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Hadi l-mdina li sakn fiha.', ['Das ist die Stadt, in der ich wohne.', 'Das ist die Stadt, wo ich wohne.'])),
        graded(dictation('Sme3 o kteb', 'Das ist die Stelle, für die ich mich interessiere.')),
        summary(
          [
            'Daba t9der tfhem annonce, tkteb Anschreiben, o tdir entretien.',
            'F l-unité 3: l-3aych m3a ba3d (jiran, WG, khlafat) — **obwohl / trotzdem** o **damit / um … zu**.',
          ],
          ['Tfhem annonce b tafasil', 'Tkteb Anschreiben', 'Tjaweb f l-entretien', 'Tkhdem l-Relativsätze'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
