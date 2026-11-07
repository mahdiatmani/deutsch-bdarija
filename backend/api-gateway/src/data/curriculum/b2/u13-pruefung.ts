import { choice, explain, gap, graded, intro, md, reading, speak, summary, unit, write } from '../dsl';

export default unit({
  level: 'B2',
  number: 13,
  title: 'Prüfungstraining B2',
  description: "Tdrib 3la imti7an B2 (Goethe / ÖSD o telc): Lesen, Hören, Schreiben, Sprechen o Sprachbausteine — strategiyat o imti7an tajribi akhir.",
  icon: 'workspace_premium',
  objectives: [
    'T3ref l-ajza2 dyal Goethe / ÖSD B2 o telc B2',
    'T9ra nsous twal b strategiya (global, selektiv, detailliert) f l-we9t',
    'Tkteb Forumsbeitrag o bra rasmiya b mostawa B2',
    'T9ddem mawdou3 o tnaqech b 7ojaj m3a chi wa7ed',
    'T7ell Sprachbausteine o tnje7 f l-Abschlusstest B2',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Lesen & Hören B2',
      description: 'L-formats dyal B2 o strategiyat l-9raya o s-sme3 — m3a tamarin b7al l-imti7an.',
      minutes: 40,
      kind: 'exam',
      goals: ['T3ref l-ajza2 d l-imti7an', 'Tfre9 bin l-ma3louma o r-ra2y f n-nass', 'Tsme3 l-mawa9if f n9ach o m7adara'],
      steps: [
        intro(
          'Imti7anat B2',
          md`
            | | **Goethe-Zertifikat B2** (o ÖSD B2) | **telc Deutsch B2** |
            |---|---|---|
            | Bniya | 4 modules — t9der tdouz kol wa7ed bou7dou | Mektoub + chafawi |
            | Lesen | 65 d9i9a, 5 ajza2 | 90 d9i9a m3a Sprachbausteine |
            | Hören | ~40 d9i9a, 4 ajza2 | ~20 d9i9a, 3 ajza2 |
            | Schreiben | 75 d9i9a: **Forumsbeitrag** (~150 kelma) + **bra rasmiya** (~100 kelma) | 30 d9i9a: bra wa7da (chakwa wla talab ma3loumat) |
            | Sprechen | ~15 d9i9a: **Vortrag** (~4 d9a9i) + **Diskussion** | ~15 d9i9a: tajriba / Präsentation, Diskussion, tkhtat m3a ba3d |
            | Nja7 | 60 % f kol module | 60 % f l-mektoub o 60 % f l-chafawi |

            **ÖSD Zertifikat B2** 3endou 4 modules ta — l-format 9rib bzaf men Goethe. B2 ghaliban kaytlbouh l **l-jami3a** (m3a TestDaF / DSH), **l-khedma l-mo2ahhala**, o **i3tiraf** b bzaf d l-mihan (b7al t-tamrid: B2 ghaliban).
          `,
          ['T3ref l-formats', 'Tdrreb Lesen', 'Tdrreb Hören'],
        ),
        explain(
          'Strategiyat B2',
          md`
            **Lesen:**
            - **F l-imti7an d B2, ktar l-as2ila kat-t3alla9 b r-ra2y o l-mawqif**, machi ghir l-ma3loumat — rd l-bal l *allerdings, dennoch, zwar … aber, angeblich, laut* o l-Konjunktiv I.
            - **Paraphrase:** l-jawab s-s7i7 ghaliban b **kalimat okhra**: *Die Nachfrage ist gesunken* ↔ *Immer weniger Menschen kaufen …*
            - **Fake-Match:** ila chefti **nefs l-kelma** f n-nass o f l-ikhtiyar — 3ndak, ghaliban fakh!
            - **L-we9t:** 65 d9i9a l 5 ajza2 = ~13 d9i9a l kol jouz2. 9ra s-so2alat 9bel n-nass.

            **Hören:**
            - F Goethe B2, ktar l-ajza2 kaytsem3ou **merra wa7da** — 9ra s-so2alat mzyan f we9t l-ta7dir.
            - F n9ach: dir jadwal sghir — **chkoun** kaygoul **chno** (Moderatorin / Gast 1 / Gast 2).
            - Rd l-bal l t-taghyir d r-ra2y: "Früher dachte ich …, **inzwischen** …"
          `,
        ),
        explain('Hören — Teil 1: Kurze Texte', 'Sme3 o khtar l-jawab s-s7i7.'),
        graded(choice(
          'Was ist die Hauptaussage der Sprecherin?',
          ['Homeoffice macht grundsätzlich produktiver.', 'Homeoffice funktioniert nur mit klaren Regeln.', 'Homeoffice sollte abgeschafft werden.'],
          1,
          '"… nur dann, wenn …" → ch-chart howa l-fikra r-ra2isiya.',
          { audio: 'Ich werde oft gefragt, ob Homeoffice produktiver macht. Meine Antwort: Das kommt darauf an. Ohne feste Zeiten und ohne klare Absprachen im Team arbeiten viele Menschen am Ende mehr und schlechter. Homeoffice ist ein Gewinn – aber nur dann, wenn es verbindliche Regeln gibt.' },
        )),
        graded(choice(
          'Was kritisiert der Sprecher?',
          ['Die hohen Ticketpreise', 'Die fehlende Barrierefreiheit im Museum', 'Die Qualität der Ausstellung'],
          1,
          'Ma kayntaqedch l-ma3rad ("großartig") — l-mochkil howa l-wosoul l l-mo3a99in.',
          { audio: 'Die Ausstellung selbst ist großartig, da gibt es nichts zu meckern. Aber dass man heute noch mit dem Rollstuhl immer noch nicht in den zweiten Stock kommt, weil der Aufzug seit Monaten außer Betrieb ist – das finde ich wirklich inakzeptabel.' },
        )),
        explain('Hören — Teil 3: Diskussion', 'Chkoun 9al chno? Sme3 o khtar.'),
        graded(choice(
          'Welche Position vertritt Herr Bauer zur Vier-Tage-Woche?',
          ['Er ist grundsätzlich dagegen.', 'Er war skeptisch, ist inzwischen aber dafür.', 'Er hält sie nur für Großunternehmen geeignet.'],
          1,
          '"Ich war anfangs skeptisch … inzwischen …" = beddel r-ra2y.',
          { audio: 'Moderatorin: Herr Bauer, Ihr Betrieb hat die Vier-Tage-Woche eingeführt. — Herr Bauer: Ja, und ich gebe zu, ich war anfangs sehr skeptisch. Ich dachte, die Arbeit bleibt liegen. Inzwischen bin ich überzeugt: Die Leute sind konzentrierter, und wir finden leichter neue Mitarbeiter.' },
        )),
        explain('Lesen — Teil 2: Zeitungsartikel', '9ra l-ma9al o jaweb 3la l-as2ila.'),
        reading(
          'Das Ende des Bargelds?',
          md`
            In kaum einem anderen europäischen Land wird noch so häufig bar bezahlt wie in Deutschland. Zwar ist der Anteil der Kartenzahlungen in den letzten Jahren deutlich gestiegen, dennoch hängen viele Deutsche am Bargeld. Als Gründe nennen sie vor allem Datenschutz und die bessere Kontrolle über die eigenen Ausgaben.

            Händler sehen das zunehmend anders. Bargeld verursache hohe Kosten für Transport und Versicherung, heißt es aus dem Einzelhandel. Einige Cafés in Großstädten akzeptieren inzwischen ausschließlich Kartenzahlung.

            Verbraucherschützer warnen jedoch davor, das Bargeld zu verdrängen. Ältere Menschen, aber auch Personen ohne Bankkonto würden dadurch ausgeschlossen. Zudem sei ein Zahlungssystem ohne Bargeld anfälliger für technische Störungen und Cyberangriffe.
          `,
          { glossary: [['das Bargeld', 'l-flous l-kach'], ['hängen an', 'mt3alle9 b'], ['verdrängen', 'jre / 7iyed b chwiya'], ['anfällig für', 'mo3arrad l / sahel y9e3 fih']] },
        ),
        graded(choice('Warum zahlen viele Deutsche gern bar?', ['Weil Karten teuer sind', 'Wegen Datenschutz und Kontrolle über die Ausgaben', 'Weil Händler es verlangen'], 1)),
        graded(choice('Wie sieht der Einzelhandel das Bargeld?', ['Als Kostenfaktor', 'Als sicherste Zahlungsart', 'Als unverzichtbar'], 0)),
        graded(choice('Was befürchten Verbraucherschützer?', ['Höhere Preise', 'Dass bestimmte Gruppen ausgeschlossen werden', 'Weniger Kartenzahlungen'], 1)),
        graded(choice('"Zwar ist der Anteil … gestiegen, dennoch …" — l-kateb kaybyyen…', ['Ta9addom mazal m7doud', 'Nja7 kamel', 'Natija salbiya'], 0)),
        summary(
          [
            'Goethe / ÖSD B2: **4 modules**, 60 % f kol wa7ed. telc B2: **mektoub + chafawi**.',
            'Lesen: **r-ra2y o l-mawqif**, paraphrase, 3ndak l "fake-match". Hören: ghaliban **merra wa7da** — "inzwischen" = beddel r-ra2y.',
          ],
          ['T3ref l-formats d B2', 'Tsta3mel strategiyat Lesen o Hören'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Schreiben B2',
      description: 'Forumsbeitrag (~150 kelma) o bra rasmiya (~100 kelma) dyal Goethe B2, o l-bra dyal telc B2.',
      minutes: 50,
      kind: 'exam',
      goals: ['T3ref ma3ayir t-ta9yim', 'Tkteb Forumsbeitrag b 7ojaj o amthila', 'Tkteb bra rasmiya f Register mnaseb'],
      steps: [
        intro(
          'Schreiben — 75 d9i9a (Goethe)',
          md`
            | Mohimma | Chno | Kalimat | We9t mnaseb |
            |---|---|---|---|
            | **Teil 1** | Forumsbeitrag: ra2yek f mawdou3 b 4 no9at | ~150 | 50 d9i9a |
            | **Teil 2** | Bra / email rasmi (l mas2oul, idara …) b 4 no9at | ~100 | 25 d9i9a |

            **Ma3ayir t-ta9yim:** *Erfüllung* (wach jawbti 3la kol n-no9at?), *Kohärenz* (wach n-nass mtrabet?), *Wortschatz*, *Strukturen* (grammaire d B2!), o f Teil 2: **Register**.
          `,
          ['T3ref l-ma3ayir', 'Tkteb Teil 1', 'Tkteb Teil 2'],
        ),
        explain(
          'Tri9at l-ijtihad f l-kitaba',
          md`
            - **Kol no9ta = paragraphe**, o b **Konnektoren** bin l-paragraphes (*Zunächst … Darüber hinaus … Allerdings … Abschließend …*).
            - **Ma tktebch ghir "Ich finde, dass …"** — beddel: *Meines Erachtens …, Ich bin der Auffassung …, Aus meiner Sicht …*
            - **Werri l-grammaire d B2** b chwiya f kol nass: **Passiv**, **Nominalstil**, **Konj. II**, **Relativsatz m3a préposition**, **Partizipialattribut** wa7ed.
            - **Ma t9radch men n-nass d l-mohimma** — 7awwel l-kalimat (paraphrase).
            - **5 d9a9i l-akhra**: l-fi3l f l-akhir f Nebensatz? Terminaisons? Sie / Ihnen b 7arf kbir?
          `,
        ),
        write(
          'Teil 1: Forumsbeitrag',
          md`
            F forum dyal majalla, l-mawdou3: **"Sollte ein soziales Pflichtjahr für alle jungen Menschen eingeführt werden?"**
            Kteb ra2yek (~150 kelma) o jaweb 3la had n-no9at:
            1. Ra2yek f had l-fikra.
            2. L-ijabiyat l l-mojtama3.
            3. Chno momkin ykoun mochkil l ch-chabab.
            4. Badil wla ta9tira7.
          `,
          ['Ra2yek (Aus meiner Sicht …)', 'L-ijabiyat (Zunächst … / Darüber hinaus …)', 'L-mochkil (Allerdings … / Kritiker geben zu bedenken …)', 'Badil (Stattdessen könnte man …)', 'Khlasa (Abschließend …)'],
          'Aus meiner Sicht wäre ein verpflichtendes soziales Jahr zwar gut gemeint, in der Praxis aber problematisch.\n\nZunächst ist nicht zu bestreiten, dass die Gesellschaft davon profitieren würde. Angesichts des Personalmangels in Pflegeheimen und Kitas könnten junge Menschen dort spürbar entlasten. Darüber hinaus würden sie Berufe kennenlernen, an die sie sonst nie gedacht hätten.\n\nAllerdings geben Kritiker zu bedenken, dass ein Zwangsdienst die Motivation zerstört. Wer gegen seinen Willen in einem Pflegeheim arbeitet, wird kaum mit Herz bei der Sache sein. Zudem würde der Einstieg in Studium oder Ausbildung um ein Jahr verzögert.\n\nStattdessen könnte man freiwillige Dienste attraktiver machen, etwa durch eine bessere Bezahlung oder Vorteile bei der Studienplatzvergabe.\n\nAbschließend bin ich der Meinung, dass Engagement nicht erzwungen, sondern gefördert werden sollte.',
          130,
        ),
        write(
          'Teil 2: Bra rasmiya',
          md`
            Ntaya mojtahid f jam3iya d l-7ay, o ghadi ddirou 7afla f l-7di9a l-3ommoumiya. Kteb l **Ordnungsamt** d l-mdina (~100 kelma):
            1. 9ddem l-jam3iya o l-machrou3.
            2. Sowwel 3la t-tasri7 (Genehmigung).
            3. Sowwel 3la l-ma3loumat 3la l-mousi9a o z-zbel.
            4. Tleb jawab f ajal.
          `,
          ['Sehr geehrte Damen und Herren,', 'Tqdim (Im Namen des … möchte ich …)', 'T-tasri7 (Ich möchte mich erkundigen, ob …)', 'Mousi9a / zbel (Darüber hinaus wüssten wir gern, …)', 'Ajal (Für eine Antwort bis zum … wäre ich Ihnen dankbar.)', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nim Namen des Nachbarschaftsvereins „Lindenviertel e. V." möchte ich Sie über ein geplantes Straßenfest informieren, das am 14. Juni im Lindenpark stattfinden soll. Erwartet werden etwa 200 Gäste.\n\nIch möchte mich erkundigen, ob für eine solche Veranstaltung eine Genehmigung erforderlich ist und welche Unterlagen dafür einzureichen sind. Darüber hinaus wüssten wir gern, bis wann Live-Musik erlaubt ist und ob die Stadt zusätzliche Mülltonnen zur Verfügung stellen kann.\n\nFür eine Antwort bis zum 15. Mai wäre ich Ihnen sehr dankbar.\n\nMit freundlichen Grüßen\nYoussef Benali',
          85,
        ),
        graded(choice('F Goethe B2 Schreiben Teil 1 (Forum) khassek tkteb ~…', ['80 kelma', '150 kelma', '300 kelma'], 1)),
        graded(choice('Ach men ma3yar machi f t-ta9yim?', ['Kohärenz', 'L-khatt l-zwin', 'Strukturen'], 1)),
        graded(choice('Ina bidaya a7ssen l Teil 2?', ['Hallo Leute,', 'Sehr geehrte Damen und Herren,', 'Hi Amt,'], 1)),
        graded(choice('Ina jomla katbyyen mostawa B2?', ['Ich finde das gut, weil es gut ist.', 'Angesichts des Personalmangels könnten junge Menschen spürbar entlasten.'], 1)),
        graded(gap('Kemmel', 'Ich möchte mich ___, ob eine Genehmigung erforderlich ist. (nsowwel)', 'erkundigen')),
        graded(gap('Kemmel', 'Für eine Antwort bis zum 15. Mai ___ ich Ihnen dankbar.', 'wäre|waere')),
        summary(
          [
            'Goethe B2: **Forumsbeitrag (~150)** + **bra rasmiya (~100)** f 75 d9i9a. telc B2: **bra wa7da** f 30 d9i9a.',
            'Ma3ayir: **Erfüllung, Kohärenz, Wortschatz, Strukturen, Register** — kol no9ta = paragraphe, grammaire d B2, paraphrase.',
          ],
          ['Tkteb Forumsbeitrag', 'Tkteb bra rasmiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Sprechen B2',
      description: 'Vortrag (~4 d9a9i) b 5 ajza2, Diskussion m3a 7ojaj o rdoud, o tkhtat m3a ba3d (telc).',
      minutes: 40,
      kind: 'exam',
      goals: ['T9ddem Vortrag mbni mzyan f 4 d9a9i', 'Tnaqech: t3ti 7ojja, trodd, twaf9 jouz2iyan', 'Tkhtat m3a chi wa7ed (telc)'],
      steps: [
        intro(
          'Sprechen — ~15 d9i9a b jouj',
          md`
            | Jouz2 | Goethe B2 | telc B2 |
            |---|---|---|
            | 1 | **Vortrag** (~4 d9a9i) — katkhtar wa7ed men jouj d l-mawadi3, men b3d: so2al men sa7bek + feedback | **Präsentation / tajriba** + as2ila |
            | 2 | **Diskussion** (~5 d9a9i) 3la so2al jdal | **Diskussion** 3la nass / mawdou3 |
            | 3 | — | **Gemeinsam etwas planen** |

            **15 d9i9a d t-ta7dir** — kteb ghir n-no9at r-ra2isiya (keywords), machi jmel kamlin.
          `,
          ['Vortrag', 'Diskussion', 'Planen'],
        ),
        explain(
          'Vortrag: 5 ajza2 (Goethe B2)',
          md`
            1. **Tqdim l-mawdou3** o l-bonya: "In meinem Vortrag geht es um … Zunächst …, danach …, zum Schluss …"
            2. **L-mo9if f bladek** o **tajribtek**: "In Marokko ist es üblich, dass … Ich persönlich habe erlebt, dass …"
            3. **Ijabiyat o salbiyat** m3a amthila: "Für … spricht, dass … Dagegen lässt sich einwenden, dass …"
            4. **Ra2yek** m3a ta3lil: "Meines Erachtens überwiegen …, weil …"
            5. **Khlasa o chokr**: "Abschließend möchte ich betonen, dass … Vielen Dank."

            ⚠️ **4 d9a9i** — ma twelch! Dir t-tamrin b l-montre.
          `,
        ),
        speak(
          'Vortrag: "Sollte das Smartphone im Unterricht erlaubt sein?"',
          '9ddem Vortrag d ~4 d9a9i b 5 ajza2. Khdem Konnektoren d B2 (zwar … aber, darüber hinaus, angesichts …).',
          ['In meinem Vortrag geht es um die Frage, ob Smartphones im Unterricht erlaubt sein sollten.', 'In Marokko ist die Nutzung im Unterricht meist verboten, ich persönlich habe aber erlebt, dass Lern-Apps sehr hilfreich sein können.', 'Für eine Erlaubnis spricht, dass Schüler schnell recherchieren können. Dagegen lässt sich einwenden, dass sie leicht abgelenkt werden.', 'Meines Erachtens überwiegen die Vorteile, sofern es klare Regeln gibt.', 'Abschließend möchte ich betonen, dass Medienkompetenz heute unverzichtbar ist. Vielen Dank.'],
        ),
        explain(
          'Diskussion: 7ojja, rdd, i3tiraf jouz2i',
          md`
            | Bach… | Redemittel |
            |---|---|
            | 7ojja | "Ein wichtiges Argument ist …" — "Man darf nicht vergessen, dass …" |
            | rdd | "Da muss ich widersprechen: …" — "Das sehe ich anders, denn …" |
            | i3tiraf jouz2i | "Da haben Sie zwar recht, aber …" — "Das mag stimmen, allerdings …" |
            | tsowwel | "Wie meinen Sie das genau?" — "Können Sie ein Beispiel nennen?" |
            | tw9ef b ladab | "Darf ich hier kurz einhaken?" |
            | t-tawafo9 | "Vielleicht können wir uns darauf einigen, dass …" |

            ⚠️ L-imti7an kaychouf **t-tafa3ol**: jaweb 3la sa7bek, ma t3awedch ghir 7ojajek!
          `,
        ),
        speak(
          'Diskussion: "Sollte Fleisch höher besteuert werden?"',
          'Nta dodd, sa7bek m3a. 9ddem 7ojja, rdd 3la 7ojjatou, 3terf b chi jouz2, o 7awel tl9a tawafo9.',
          ['Ein wichtiges Argument gegen eine Fleischsteuer ist, dass sie vor allem Familien mit wenig Geld trifft.', 'Da haben Sie zwar recht, dass Fleisch dem Klima schadet, aber eine Steuer ist sozial ungerecht.', 'Darf ich hier kurz einhaken? Was passiert mit den Einnahmen?', 'Vielleicht können wir uns darauf einigen, dass die Einnahmen für günstigeres Gemüse genutzt werden sollten.'],
        ),
        explain(
          'telc: Gemeinsam etwas planen',
          md`
            Mital: *Kurs dyalkom bgha ydir rihla d youm m3a l-oustad. Khttou: fin, imta, l-mouwasalat, l-mizaniya, chkoun ydir chno.*

            > "Was hältst du davon, wenn wir …?" — "Das wäre eine Möglichkeit, allerdings …" — "Lass uns festhalten: …"

            L-mohimm: **kol wa7ed y9tare7**, **y9bel / yrfed b sabab**, o **f l-akhir qarar wade7**.
          `,
        ),
        graded(choice('Ch7al dayem Vortrag f Goethe B2?', ['~1 d9i9a', '~4 d9a9i', '~15 d9i9a'], 1)),
        graded(choice('"Darf ich hier kurz einhaken?" katkhdemha bach…', ['Tdkhel f l-hedra b ladab', 'Tsali', 'Tsowwel 3la l-we9t'], 0)),
        graded(choice('"Da haben Sie zwar recht, aber …" =', ['I3tiraf jouz2i + rdd', 'Tawafo9 kamel', 'Rafd kamel'], 0)),
        graded(choice('F t-ta7dir (15 d9i9a) khassek…', ['Tkteb n-nass kamel', 'Tkteb keywords o l-bonya', 'Ma tkteb walou'], 1)),
        summary(
          [
            'Vortrag: **Thema + Gliederung → Heimatland / Erfahrung → Pro / Contra → Meinung → Schluss** (~4 d9a9i).',
            'Diskussion: **Da muss ich widersprechen — Da haben Sie zwar recht, aber … — Darf ich kurz einhaken? — Können wir uns darauf einigen …?**',
          ],
          ['T9ddem Vortrag', 'Tnaqech b 7ojaj', 'Tkhtat m3a chi wa7ed'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'telc Sprachbausteine & Abschlusstest B2',
      description: 'Sprachbausteine dyal telc B2 o l-imti7an l-akhir dyal l-mostawa B2 — o l-course kamel.',
      minutes: 40,
      kind: 'exam',
      goals: ['T7ell Sprachbausteine B2', 'Traja3 l-grammaire d B2 kamla', 'Tnje7 f l-Abschlusstest'],
      steps: [
        intro(
          'Sprachbausteine B2',
          md`
            F **telc B2**, Sprachbausteine kayjiw f bra rasmiya wla ma9al: **Teil 1** (khtar men 3) o **Teil 2** (khtar men lista d 15 kelma l 10 khwa).
            Kaymt7nou: **Konnektoren, prépositions (m3a Genitiv!), Relativpronomen, Nomen-Verb-Verbindungen, Pronominaladverbien, Konjunktiv**.
          `,
          ['T7ell Sprachbausteine', 'Abschlusstest'],
        ),
        reading(
          'Sprachbausteine — Geschäftsbrief',
          md`
            Sehr geehrte Frau Dr. Kessler,

            (1) ___ unseres Telefonats vom 4. März sende ich Ihnen anbei das Angebot. Wir würden uns freuen, (2) ___ Sie sich für unsere Lösung entscheiden würden. Die Software, (3) ___ Funktionen wir Ihnen vorgestellt haben, lässt sich problemlos in Ihre Systeme integrieren. (4) ___ Rückfragen stehe ich Ihnen jederzeit zur (5) ___.

            Mit freundlichen Grüßen
          `,
          { text: '9ra l-bra o 3emmer l-khwa f t-tamarin li men b3d.' },
        ),
        graded(choice('(1) „___ unseres Telefonats"', ['Bezugnehmend auf', 'Aufgrund', 'Trotz'], 1, 'aufgrund + Genitiv (unseres Telefonats). "Bezugnehmend auf" kay7taj Akkusativ.')),
        graded(choice('(2) „Wir würden uns freuen, ___ Sie sich … entscheiden würden."', ['wenn', 'dass', 'ob'], 0)),
        graded(choice('(3) „Die Software, ___ Funktionen wir vorgestellt haben"', ['deren', 'dessen', 'die'], 0, 'die Software (f) → deren.')),
        graded(choice('(4) „___ Rückfragen stehe ich Ihnen zur Verfügung."', ['Bei', 'Mit', 'Für'], 0, 'bei Fragen = wenn Sie Fragen haben.')),
        graded(choice('(5) „… stehe ich Ihnen jederzeit zur ___."', ['Verfügung', 'Hilfe', 'Frage'], 0, 'Nomen-Verb-Verbindung: zur Verfügung stehen.')),
        explain('Abschlusstest B2', 'Test akhir dyal B2: l-grammaire o l-kalimat dyal kol l-unités. Bslama 3la l-course — o bonne chance f l-imti7an!'),
        graded(choice('"Man lernt eine Sprache am besten, ___ man sie täglich benutzt."', ['indem', 'sofern', 'ohne dass'], 0)),
        graded(choice('"Er ging, ___ jemand es bemerkte."', ['ohne dass', 'ohne zu', 'anstatt'], 0)),
        graded(choice('"Der Minister erklärte, er ___ von nichts gewusst."', ['habe', 'hat', 'hätte gehabt'], 0)),
        graded(choice('"Das Gesetz ist letztes Jahr beschlossen ___."', ['worden', 'geworden', 'werden'], 0)),
        graded(choice('"die von der Regierung ___ Maßnahmen"', ['beschlossenen', 'beschließenden', 'beschlossen'], 0)),
        graded(choice('"___ der hohen Kosten wurde das Projekt gestoppt."', ['Aufgrund', 'Trotz', 'Anlässlich'], 0)),
        graded(choice('"Die Kollegin, ___ Sohn bei uns ein Praktikum macht, …"', ['deren', 'dessen', 'die'], 0)),
        graded(choice('"Er soll früher Profisportler ___."', ['gewesen sein', 'sein gewesen', 'gewesen haben'], 0)),
        graded(choice('"Wir hätten früher ___."', ['anfangen sollen', 'angefangen sollen', 'anfangen gesollt'], 0)),
        graded(choice('"Er tut so, als ___ er nichts davon."', ['wüsste', 'weiß', 'wisse'], 0)),
        graded(choice('"___ ich zu Hause bin, rufe ich dich an."', ['Sobald', 'Solange', 'Seitdem'], 0)),
        graded(choice('"Es regnet seit Wochen nicht. ___ sind die Felder trocken."', ['Folglich', 'Dennoch', 'Zwar'], 0)),
        graded(gap('Kemmel', 'Wir müssen bis Freitag eine Entscheidung ___.', 'treffen')),
        graded(gap('Kemmel', 'Ich bin froh, die Prüfung bestanden zu ___.', 'haben')),
        summary(
          [
            'Sprachbausteine: **Genitiv-Präpositionen, Relativpronomen (deren / dessen), Konnektoren, Nomen-Verb-Verbindungen**.',
            'Mabrouk! Kmmelti l-course kamel **men A1 l B2** — 52 unité. Daba t9der tkhdem, t9ra o t3ich b l-almaniya b th-thi9a. Viel Erfolg bei der Prüfung!',
          ],
          ['T3ref imti7anat B2', 'T7ell Sprachbausteine B2', 'Traja3 l-grammaire d B2 kamla'],
          'Khlasa dyal B2 — o d l-course',
        ),
      ],
    },
  ],
});
