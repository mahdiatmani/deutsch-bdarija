import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 8,
  title: 'Reisen & Mobilität',
  description: "Tajarib s-safar, l-machakil f t-tri9, t-tan99ol l-mostadam — b l-af3al m3a prépositions (darauf, dass …) o ohne … zu / statt … zu.",
  icon: 'train',
  objectives: [
    'T7ki 3la tajriba dyal s-safar b tafasil',
    'Tdbber machakil f s-safar (reklamation, t-ta3wid)',
    'Tkhdem l-af3al m3a prépositions + darauf, dass … / darüber, … zu',
    'Tkhdem ohne … zu o statt … zu',
    'Tnaqech l-mouwasalat l-mostadama',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Unterwegs — Reiseerfahrungen',
      description: 'Tajarib s-safar, l-kalimat dyal t-tan99ol, o kifach t7ki 3la rihla.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal s-safar o t-tan99ol', 'T7ki 3la rihla (zwina wla khayba)', 'T3ber 3la l-i7sasat f s-safar'],
      steps: [
        intro(
          'Reisegeschichten',
          'F l-pause, Salma, Olena o Mehmet kay7kiw 3la a7ssen o akhyab rihla 3mmerhom daroha. Mehmet 3endou 9issa dyal s-safar b Mitfahrgelegenheit…',
          ['Tsemmi s-safar', 'T7ki rihla', 'T3ber 3la l-i7sasat'],
        ),
        dialogue(
          'Die schlimmste Reise',
          [
            ['Olena', 'Was war eure schlimmste Reise?', 'Chno kanet akhyab rihla dyalkom?'],
            ['Mehmet', 'Letztes Jahr bin ich mit einer Mitfahrgelegenheit nach München gefahren, statt den Zug zu nehmen. Das war billiger.', 'L-3am li fat mchit l München b Mitfahrgelegenheit, f blast ma nakhod t-tran. Kant arkhas.'],
            ['Salma', 'Und? Was ist passiert?', 'Iwa? Chno w9e3?'],
            ['Mehmet', 'Der Fahrer ist ohne Pause sechs Stunden gefahren, ohne ein Wort zu sagen. Und dann hatten wir eine Panne auf der Autobahn!', 'S-sa2i9 sa9 6 sa3at bla pause, bla ma ygoul 7ta kelma. O men b3d tkhsrat t-tomobil f l-autoroute!'],
            ['Olena', 'Oh nein! Wie lange musstet ihr warten?', 'Oh la! Ch7al tsennitou?'],
            ['Mehmet', 'Drei Stunden, bis der Pannendienst kam. Ich habe mich sehr darüber geärgert, dass ich meinen Termin verpasst habe.', '3 sa3at 7tal ja s-sarvis d l-a3tab. T9ele9t bzaf 7it fatni r-rendez-vous dyali.'],
            ['Salma', 'Bei mir war es der Flughafen in Madrid. Mein Koffer ist in einem anderen Flugzeug gelandet.', '3andi kan l-matar d Madrid. L-valise dyali nzlat f tayara khra.'],
            ['Olena', 'Und die beste Reise?', 'O a7ssen rihla?'],
            ['Salma', 'Eine Wanderung im Atlas mit meinem Bruder. Wir haben bei einer Berberfamilie übernachtet. Ich erinnere mich gern daran.', 'Tmchiya f l-Atlas m3a khouya. Bettna 3and 3a2ila amazighiya. Kantfekkerha b l-farha.'],
          ],
        ),
        vocab('Unterwegs — F t-tri9', [
          ['die Mitfahrgelegenheit', 'tsafer m3a chi wa7ed f t-tomobil dyalou (covoiturage)', ''],
          ['die Panne', 'l-3atal (t-tomobil)', ''],
          ['der Pannendienst', 's-sarvis d l-a3tab (dépanneuse)', ''],
          ['der Stau', 'z-z7am (l-bouchon)', '', ['Wir standen zwei Stunden im Stau.', 'B9ina jouj sa3at f z-z7am.']],
          ['verpassen', 'fatou (t-tran, r-rendez-vous)', ''],
          ['der Anschluss', 't-tran / t-tayara li men b3d (correspondance)', ''],
          ['landen / starten', 'nzel / tla9 (t-tayara)', ''],
          ['das Gepäck', 'l-bagages', ''],
          ['die Unterkunft', 'l-mbit', ''],
          ['übernachten', 'bat', ''],
          ['die Sehenswürdigkeit', 'l-ma3lama s-sya7iya', ''],
          ['die Pauschalreise', 'rihla mnadhdhma (voyage organisé)', ''],
          ['der Rucksack', 's-sak d dher', ''],
          ['nachhaltig', 'mostadam (durable)', ''],
        ]),
        explain(
          'T7ki 3la rihla',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tbda | "Ich erzähle euch von meiner Reise nach …" — "Letzten Sommer war ich …" |
            | t7ki | "Zuerst … Dann … Plötzlich … Zum Glück … Leider …" |
            | l-i7sasat | "Ich habe mich sehr darüber gefreut / geärgert, dass …" — "Ich war total begeistert / enttäuscht." |
            | t-tafa3ol | "Stell dir vor, …!" — "Du wirst es nicht glauben, aber …" |
            | tsali | "Insgesamt war es eine tolle / schreckliche Erfahrung." — "Ich erinnere mich gern daran." |
          `,
          [
            ['Plötzlich hatten wir eine Panne.', 'Fja2atan tkhsrat lina t-tomobil.'],
            ['Zum Glück hat uns ein netter Mann geholfen.', 'L-7amdolillah 3awenna rajel drif.'],
          ],
        ),
        match('Rbet', [
          ['der Stau', 'z-z7am'],
          ['die Panne', 'l-3atal'],
          ['verpassen', 'fatou'],
          ['übernachten', 'bat'],
          ['nachhaltig', 'mostadam'],
        ]),
        choice('3lach mcha Mehmet b Mitfahrgelegenheit?', ['Asra3', 'Arkhas', 'Mri7'], 1),
        choice('Chno kan a7ssen rihla 3and Salma?', ['Madrid', 'Tmchiya f l-Atlas', 'München'], 1),
        gap('Kemmel', 'Ich erinnere mich gern ___. (da- + an)', 'daran'),
        order('Rtteb', 'Plötzlich hatten wir eine Panne auf der Autobahn.'),
        speak(
          'Rihla dyalek',
          '7ki 3la rihla (zwina wla khayba): fin, imta, m3a chkoun, chno w9e3 (zuerst / plötzlich / zum Glück), o kifach 7essiti.',
          ['Letzten Sommer bin ich mit meiner Familie nach Chefchaouen gefahren.', 'Zuerst war alles super.', 'Plötzlich hatte unser Bus eine Panne.', 'Zum Glück hat uns ein Taxifahrer geholfen.', 'Insgesamt war es eine schöne Erfahrung.'],
        ),
        graded(choice('"der Stau" howa…', ['z-z7am', 'l-matar', 'l-3atal'], 0)),
        graded(choice('"Zum Glück …" =', ['L-7amdolillah / mn l-7od…', 'Ma3a l-asaf', 'Fja2atan'], 0)),
        graded(gap('Kemmel', 'Ich habe meinen Anschluss ___. (fatni)', 'verpasst')),
        graded(translate("Terjem l l'Almaniya", 'B9ina sa3a f z-z7am.', ['Wir standen eine Stunde im Stau.', 'Wir waren eine Stunde im Stau.'])),
        summary(
          [
            'S-safar: **die Mitfahrgelegenheit, die Panne, der Stau, verpassen, der Anschluss, das Gepäck, übernachten, nachhaltig**.',
            '7ki: **Zuerst … Plötzlich … Zum Glück … Leider … Insgesamt …**',
          ],
          ['T7ki 3la rihla', 'T3ber 3la l-i7sasat'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich freue mich darauf, … — Präpositionalverben & Infinitivsätze',
      description: 'L-af3al m3a prépositions (b tafasil), darauf … dass / zu, o ohne … zu, statt … zu.',
      minutes: 40,
      kind: 'grammar',
      goals: ['T7fed l-af3al l-mohimma m3a prépositions', 'Tkhdem da(r)- + dass / zu (Korrelat)', 'Tkhdem ohne … zu o statt … zu'],
      steps: [
        intro(
          '"Ich habe mich darüber geärgert, dass …"',
          md`
            Mehmet 9al: "Ich habe mich **darüber** geärgert, **dass** ich meinen Termin verpasst habe." — o "Er ist gefahren, **ohne** ein Wort **zu** sagen."
            F A2 t3llemti l-af3al m3a prépositions m3a smiya. Daba nchoufouhom m3a **jomla kamla**.
          `,
          ['Af3al + prépositions', 'darüber, dass …', 'ohne / statt … zu'],
        ),
        explain(
          'Af3al m3a prépositions (B1)',
          md`
            | Fi3l | Préposition | 7ala |
            |---|---|---|
            | sich freuen | **auf** (jay) / **über** (wsel) | Akk |
            | sich ärgern | **über** | Akk |
            | sich erinnern | **an** | Akk |
            | denken | **an** | Akk |
            | sich gewöhnen | **an** | Akk |
            | sich kümmern | **um** | Akk |
            | sich bemühen | **um** | Akk |
            | sich entscheiden | **für / gegen** | Akk |
            | achten | **auf** | Akk |
            | sich verlassen | **auf** | Akk |
            | träumen | **von** | Dat |
            | abhängen | **von** | Dat |
            | teilnehmen | **an** | Dat |
            | sich beschäftigen | **mit** | Dat |
            | sich verabreden | **mit** | Dat |
            | bitten | **um** | Akk |
            | sich beschweren | **über** + Akk / **bei** + Dat | |

            Tri9a: 7fed kol fi3l **m3a** l-préposition o l-7ala: *sich gewöhnen an + Akk*.
          `,
          [
            ['Ich habe mich an das Wetter gewöhnt.', 'T3wwedt 3la t-t9s.'],
            ['Das hängt vom Preis ab.', 'Hadchi kayt3alla9 b t-taman.'],
            ['Kann ich mich auf dich verlassen?', 'Wach n9der n3tamed 3lik?'],
          ],
        ),
        choice('"Ich habe mich noch nicht ___ das Essen gewöhnt."', ['auf', 'an', 'über'], 1),
        choice('"Es hängt ___ Wetter ab."', ['vom', 'am', 'auf das'], 0),
        gap('Kemmel', 'Sie beschäftigt sich ___ der Geschichte Marokkos.', 'mit'),
        gap('Kemmel', 'Wir haben uns ___ den Zug entschieden.', 'für|fuer'),
        explain(
          'da(r)- + Nebensatz: darauf, dass … / darauf, … zu',
          md`
            Ila l-préposition kat9eddem **jomla kamla** (machi smiya), katkhdem **da(r) + préposition** f l-Hauptsatz, o men b3d **dass …** wla **zu + infinitiv**:

            | Smiya | Jomla |
            |---|---|
            | Ich freue mich **auf den Urlaub**. | Ich freue mich **darauf, dass** wir bald Urlaub **haben**. |
            | Ich ärgere mich **über die Verspätung**. | Ich ärgere mich **darüber, dass** der Zug zu spät **ist**. |
            | Ich denke **an den Termin**. | Denk bitte **daran**, den Termin **zu** bestätigen! |
            | Er träumt **von einer Reise**. | Er träumt **davon**, um die Welt **zu** reisen. |

            **dass** ↔ **zu**: ila **nefs l-fa3il** → zu + infinitiv (b7al um … zu): "Ich freue mich darauf, dich **zu sehen**." · ila fa3il mkhtalef → dass: "Ich freue mich darauf, dass **du** kommst."
          `,
          [
            ['Ich habe mich darüber gefreut, dass du angerufen hast.', 'Fr7t belli ttasliti.'],
            ['Wir haben uns darauf geeinigt, mit dem Zug zu fahren.', 'Ttaf9na nmchiw b t-tran.'],
          ],
        ),
        choice('"Ich freue mich ___, dich bald zu sehen."', ['dafür', 'darauf', 'davon'], 1),
        choice('"Er träumt ___, Pilot zu werden."', ['darauf', 'davon', 'daran'], 1),
        gap('Kemmel', 'Ich habe mich ___ geärgert, dass niemand angerufen hat.', 'darüber|darueber'),
        gap('Kemmel', 'Denk bitte ___, die Fahrkarten zu kaufen!', 'daran'),
        explain(
          'ohne … zu / statt … zu',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **ohne … zu** | bla ma | Er ist gefahren, **ohne** ein Wort **zu** sagen. |
            | **(an)statt … zu** | f blast ma | Ich nehme den Zug, **statt** mit dem Auto **zu** fahren. |

            B7al **um … zu**: **nefs l-fa3il**, o l-infinitiv m3a **zu** f l-akhir. Trennbar: "ohne an**zu**rufen".

            Ila kan fa3il mkhtalef → **ohne dass / (an)statt dass** + Nebensatz (B2):
            > Er ist gegangen, **ohne dass** ich es **gemerkt habe**.
          `,
          [
            ['Sie hat das Formular unterschrieben, ohne es zu lesen.', 'Wa99at l-formulaire bla ma t9rah.'],
            ['Statt zu fliegen, fahren wir mit dem Zug.', 'F blast ma ntiyrou, ghadi nmchiw b t-tran.'],
          ],
        ),
        choice('"Er hat das Hotel gebucht, ___ die Bewertungen zu lesen." (bla ma)', ['statt', 'ohne', 'um'], 1),
        choice('"___ mit dem Auto zu fahren, nehme ich das Fahrrad." (f blast)', ['Ohne', 'Statt', 'Um'], 1),
        order('Rtteb', 'Er ist gegangen, ohne sich zu verabschieden.'),
        order('Rtteb', 'Statt zu fliegen, fahren wir mit dem Zug.'),
        translate("Terjem l l'Almaniya", 'Dkhel bla ma ydo99 l-bab.', ['Er ist reingekommen, ohne zu klopfen.', 'Er kam herein, ohne anzuklopfen.', 'Er ist hereingekommen, ohne anzuklopfen.']),
        graded(choice('"Ich kümmere mich ___ die Tickets."', ['um', 'für', 'auf'], 0)),
        graded(choice('"Wir nehmen ___ einem Sprachkurs teil."', ['an', 'bei', 'mit'], 0)),
        graded(gap('Kemmel', 'Ich freue mich ___, dass ihr kommt.', 'darauf')),
        graded(gap('Kemmel', 'Sie erinnert sich nicht ___, wo sie den Schlüssel hingelegt hat.', 'daran')),
        graded(choice('"Er spart Geld, ___ es auszugeben." (f blast)', ['ohne', 'statt', 'um'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Sie ging, ohne etwas sagen.', 'Sie ging, ohne etwas zu sagen.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kant7lem nsafer l l-Japon.', ['Ich träume davon, nach Japan zu reisen.', 'Ich träume von einer Reise nach Japan.'])),
        summary(
          [
            'Af3al + préposition: **sich gewöhnen an, abhängen von, sich verlassen auf, sich beschäftigen mit, sich entscheiden für …**',
            'M3a jomla: **darauf / darüber / daran / davon …, dass …** (fa3il mkhtalef) wla **…, zu + infinitiv** (nefs l-fa3il).',
            '**ohne … zu** (bla ma) · **statt … zu** (f blast ma).',
          ],
          ['Tkhdem l-af3al m3a prépositions + jmel', 'Tkhdem ohne / statt … zu'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Nachhaltig unterwegs',
      description: 'T9ra ma9al 3la s-safar l-mostadam, tsme3 interview, o tkteb email dyal reklamation l charika d t-tran / t-tayara.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem ma9al o tl9a l-7ojaj (pro / contra)', 'Tfhem interview', 'Tkteb email dyal t-ta3wid (Fluggastrechte / Fahrgastrechte)'],
      steps: [
        intro(
          'Fliegen oder nicht fliegen?',
          'Salma bghat tmchi l Fès f s-sif. T-tayara asra3 o rkhisa, walakin l-mounakh… Kayn ta l-bus + l-bateau. 9rat ma9al o sem3at interview.',
          ['T9ra l-7ojaj', 'Tsme3 l-interview', 'Tkteb email'],
        ),
        reading(
          'Muss man aufs Fliegen verzichten?',
          md`
            Ein Flug von Frankfurt nach Marrakesch verursacht pro Person etwa eine Tonne CO₂ – ungefähr so viel, wie ein Mensch in Marokko in einem ganzen Jahr verbraucht. Deshalb fordern Klimaschützer, häufiger auf das Flugzeug zu verzichten.

            Für viele Menschen ist das aber leichter gesagt als getan. Wer Familie in einem anderen Land hat, ist oft auf das Flugzeug angewiesen. „Mit dem Bus und der Fähre brauche ich drei Tage nach Tanger", sagt Karim, der in Stuttgart lebt. „Und am Ende ist es nicht einmal billiger."

            Die Bahn ist innerhalb Europas eine gute Alternative: Nachtzüge fahren zum Beispiel von Berlin nach Paris oder Wien. Allerdings sind die Tickets oft teurer als Billigflüge – obwohl die Umweltkosten viel geringer sind.

            Experten schlagen einen Mittelweg vor: seltener, aber dafür länger reisen, kurze Strecken mit dem Zug zurücklegen und – wenn man fliegt – nicht für ein Wochenende auf einen anderen Kontinent fliegen.
          `,
          {
            text: '9ra l-ma9al o l9a l-7ojaj.',
            glossary: [
              ['verursachen', 'sbbeb'],
              ['verzichten auf', 'stghna 3la'],
              ['angewiesen sein auf', 'm7taj l / mttekel 3la'],
              ['die Fähre', 'l-bateau (ferry)'],
              ['geringer', '9al'],
              ['der Mittelweg', 't-tri9 l-wosta'],
              ['zurücklegen (eine Strecke)', 'gta3 (masafa)'],
            ],
          },
        ),
        choice('Ch7al d CO₂ f rihla Frankfurt–Marrakech?', ['~10 kg', '~1 tonne', '~10 tonnes'], 1),
        choice('3lach Karim m7taj t-tayara?', ['7it kaykhaf men l-bateau', '7it l-bus o l-bateau 3 iyyam o machi arkhas', '7it l-khedma'], 1),
        choice('Chno t-tri9 l-wosta li kay9tar7ou l-khobara?', ['Ma tsaferch abadan', 'Safer 9al walakin moudda twila, o t-tran l l-masafat l-9sira', 'Tiyer ghir f l-weekend'], 1),
        listening(
          'Interview: Reisen mit dem Nachtzug',
          [
            ['Reporterin', 'Frau Haas, Sie sind letzten Sommer mit dem Zug von Köln nach Marrakesch gereist. Warum?', 'Madame Haas, safrti f s-sif li fat b t-tran men Köln l Marrakech. 3lach?'],
            ['Frau Haas', 'Ich wollte beweisen, dass es auch ohne Flugzeug geht. Und ich wollte die Reise genießen, statt nur schnell anzukommen.', 'Bghit nbeyyen belli momkin bla tayara. O bghit nstmte3 b s-safar, f blast ma nwsel ghir dghya.'],
            ['Reporterin', 'Wie lange hat das gedauert?', 'Ch7al dam?'],
            ['Frau Haas', 'Vier Tage, mit Übernachtungen in Paris und Barcelona. Von Algeciras ging es mit der Fähre nach Tanger und dann mit dem Al-Boraq weiter.', '4 iyyam, m3a l-mbit f Paris o Barcelona. Men Algeciras b l-bateau l Tanger o men b3d b l-Boraq.'],
            ['Reporterin', 'Würden Sie es wieder machen?', 'Wach ghadi t3awdiha?'],
            ['Frau Haas', 'Auf jeden Fall! Aber nur, wenn ich genug Urlaub habe. Für ein langes Wochenende ist das natürlich nichts.', 'Akid! Walakin ghir ila kan 3endi l-3otla kafya. L weekend twil hadchi ma ynfa3ch.'],
          ],
        ),
        choice('Ch7al dam s-safar dyal Frau Haas?', ['Youm', '4 iyyam', 'Simana'], 1),
        choice('Kifach dazet men Sbanya l l-Maghrib?', ['B t-tayara', 'B l-bateau', 'B l-bus'], 1),
        culture(
          'L-7o9ou9 dyal l-msafrin f Europa',
          md`
            - **Fluggastrechte (EU 261):** ila t3ettlat t-tayara **3 sa3at** wla ktar (wla tlghat 9bel 14 youm), 3endek l-7a99 f ta3wid **250–600 €** 3la 7sab l-masafa — men ghir ila kanet "außergewöhnliche Umstände" (zorouf istitna2iya) (ta9s khayb jiddan, grève dyal l-matar…).
            - **Fahrgastrechte (Bahn):** 60 min → 25 %, 120 min → 50 % (chefnaha f A2).
            - **Gepäck:** ila tlaf wla tkhssr, sjjel **direct** f l-matar (PIR-Formular) o kteb l charikat t-tayaran f 7 iyyam.
            - Kaynin sites kayt-7arrkou b l-ta3wid (b commission), walakin t9der dir kolchi bou7dek b email.
          `,
        ),
        pron(
          'Kalimat l-isti3ara',
          'Bzaf d l-kalimat dyal s-safar ajnabiya: Ticket, Hotel, Check-in, Boarding… — katnte9hom chwiya b t-tari9a l-almaniya.',
          [
            ['das Ticket – der Check-in', 'Tikket – Tschek-in'],
            ['der Flughafen – die Abflughalle', 'l-accent 3la "Flug" o "Ab"'],
            ['die Fähre – fahren', 'ä twila'],
          ],
        ),
        write(
          'Email: talab t-ta3wid',
          md`
            T-tayara dyalek men Köln l Casablanca t3ettlat **5 sa3at**, o fatek r-rendez-vous. Kteb email l charikat t-tayaran (~130 kelma): l-ma3loumat dyal r-rihla (tarikh, ra9m), chno w9e3, chno l-khasa2ir, o tleb **t-ta3wid 3la 7sab EU-Verordnung 261/2004** m3a ajal.
            Khdem **darüber, dass …** o **ohne … zu**.
          `,
          ['Sehr geehrte Damen und Herren,', 'R-rihla: Flugnummer, Datum, Strecke', 'Chno w9e3 (Verspätung von 5 Stunden …)', 'L-khasa2ir / l-i7sas (darüber, dass …)', 'Talab: Entschädigung nach EU-Verordnung 261/2004 + ajal', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nam 12. Juli hatte ich einen Flug von Köln/Bonn nach Casablanca (Flugnummer AT 811, Abflug 9:40 Uhr). Der Flug startete jedoch erst um 14:50 Uhr und landete mit über fünf Stunden Verspätung. Während der Wartezeit wurden wir kaum informiert und haben weder Essen noch Getränke bekommen.\n\nIch habe mich sehr darüber geärgert, dass ich deshalb einen wichtigen Termin verpasst habe, ohne die Möglichkeit zu haben, ihn zu verschieben.\n\nNach der EU-Verordnung 261/2004 steht mir eine Entschädigung von 400 Euro zu. Ich bitte Sie, den Betrag innerhalb von 14 Tagen auf mein Konto (IBAN: DE12 3456 7890 1234 5678 90) zu überweisen.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          110,
        ),
        graded(choice('"verzichten auf" kay3ni…', ['stghna 3la', 'tsenna', 'chra'], 0)),
        graded(choice('Ta3wid EU 261 kaybda men t-ta3til dyal…', ['1 sa3a', '3 sa3at', '10 sa3at'], 1)),
        graded(choice('"angewiesen sein auf" =', ['m7taj l / mttekel 3la', 'mamnou3', 'mfr7'], 0)),
        graded(dictation('Sme3 o kteb', 'Ich habe mich darüber geärgert, dass der Flug Verspätung hatte.')),
        summary(
          [
            'S-safar l-mostadam: **verzichten auf, angewiesen sein auf, der Nachtzug, die Fähre, der Mittelweg**.',
            'L-7o9ou9: **EU 261** (≥ 3 Std. → 250–600 €), **Fahrgastrechte** (Bahn), **PIR** l l-bagages.',
          ],
          ['Tfhem l-7ojaj f ma9al', 'Tfhem interview', 'Tkteb talab dyal t-ta3wid'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 8',
      description: 'Muraja3a: s-safar, l-af3al m3a prépositions, darauf / dass / zu, ohne / statt … zu — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Präpositionalverben', 'T7ki 3la rihla', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'S-safar o l-machakil, l-af3al m3a prépositions (+ darauf, dass …), o ohne / statt … zu.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - Ich ärgere mich **über** + Akk → **darüber, dass** …
            - Ich freue mich **auf** + Akk → **darauf, … zu** …
            - **ohne … zu** (bla ma) · **statt … zu** (f blast ma) · **um … zu** (bach)
          `,
        ),
        dialogue(
          'Urlaubsplanung',
          [
            ['Lukas', 'Freust du dich schon auf den Urlaub in Marokko?', 'Wach fr7an b l-3otla f l-Maghrib?'],
            ['Youssef', 'Sehr! Ich freue mich vor allem darauf, meine Familie wiederzusehen. Aber es hängt noch davon ab, ob ich Urlaub bekomme.', 'Bzaf! Fr7an khossousan bach nchouf l-3a2ila. Walakin mazal kayt3alla9 b wach ghadi y3tiwni l-3otla.'],
            ['Lukas', 'Fliegst du?', 'Ghadi ttiyer?'],
            ['Youssef', 'Diesmal nicht. Statt zu fliegen, nehme ich den Zug bis Spanien und dann die Fähre.', 'Had l-merra la. F blast ma ntiyer, ghadi nakhod t-tran 7tal Sbanya o men b3d l-bateau.'],
            ['Lukas', 'Ohne Rückfahrkarte zu kaufen?', 'Bla ma tchri billet d r-rjou3?'],
            ['Youssef', 'Genau, ich will flexibel bleiben.', 'Bdebt, bghit nb9a flexible.'],
          ],
        ),
        choice('Chno kayt3alla9 bih s-safar?', ['B t-taman', 'B wach ghadi y3tiwh l-3otla', 'B t-t9s'], 1),
        choice('Kifach ghadi ysafer Youssef?', ['B t-tayara', 'B t-tran o l-bateau', 'B t-tomobil'], 1),
        gap('Kemmel', 'Ich freue mich ___, meine Familie wiederzusehen. ___ zu fliegen, nehme ich den Zug.', ['darauf', 'Statt']),
        match('Rbet', [
          ['sich gewöhnen', 'an'],
          ['abhängen', 'von'],
          ['sich verlassen', 'auf'],
          ['sich beschäftigen', 'mit'],
          ['bitten', 'um'],
        ]),
        speak(
          'Role-play: takhtit s-safar',
          'Ntouma jouj kattkhttou rihla l Berlin. Wa7ed bgha ytiyer, l-akhor bgha t-tran. Tfawdou b 7ojaj (b statt … zu, ohne … zu, es hängt davon ab, ob …).',
          ['Ich würde lieber mit dem Zug fahren, statt zu fliegen.', 'Mit dem Zug kommen wir an, ohne Stress am Flughafen zu haben.', 'Es hängt davon ab, wie teuer die Tickets sind.', 'Okay, wir haben uns darauf geeinigt, den Zug zu nehmen.'],
        ),
        graded(choice('"Ich muss mich erst ___ das neue Büro gewöhnen."', ['an', 'auf', 'mit'], 0)),
        graded(choice('"Das hängt ___ dir ab."', ['von', 'an', 'auf'], 0)),
        graded(gap('Kemmel', 'Wir haben uns ___ gefreut, dass ihr gekommen seid.', 'darüber|darueber')),
        graded(gap('Kemmel', 'Er träumt ___, ein eigenes Café zu eröffnen.', 'davon')),
        graded(choice('"Sie hat gekündigt, ___ eine neue Stelle zu haben." (bla ma)', ['ohne', 'statt', 'um'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Statt lernen, spielt er.', 'Statt zu lernen, spielt er.'], 1)),
        graded(choice('"die Panne" hiya…', ['l-3atal', 'z-z7am', 'l-matar'], 0)),
        graded(choice('"nachhaltig" =', ['mostadam', 'sri3', 'ghali'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Wach n9der n3tamed 3lik?', ['Kann ich mich auf dich verlassen?'])),
        graded(dictation('Sme3 o kteb', 'Statt zu fliegen, fahren wir mit dem Nachtzug.')),
        summary(
          [
            'Daba t9der t7ki 3la s-safar, tdbber l-machakil o ttleb t-ta3wid.',
            'F l-unité 9: t-tawasol f l-khedma — **l-as2ila b ladab**, **Konjunktiv II dyal l-Modalverben** o **n-Nominalisierung**.',
          ],
          ['T7ki 3la rihla', 'Tkhdem l-af3al m3a prépositions', 'Tkhdem ohne / statt … zu', 'Tkteb talab dyal t-ta3wid'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
