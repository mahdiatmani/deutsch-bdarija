import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 4,
  title: 'Arbeit & Kollegen',
  description: "T9elleb 3la khedma, tttasel b ch-charika, thder m3a z-zmala — o jmel b dass, wenn o ob.",
  icon: 'badge',
  objectives: [
    'T9ra annonces o tttasel b chi charika',
    'Thder 3la l-khedma m3a z-zmala (Smalltalk)',
    'T3ber 3la ra2yek b "Ich finde, dass …"',
    'Tgoul ch-chrout b "wenn"',
    'Tsowwel b ladab: "Können Sie mir sagen, ob …?"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ein neuer Job für Salma',
      description: 'T-tsjil 3la l-khedma, l-kalimat dyal l-contrat, o t-tilifoun m3a ch-charika.',
      minutes: 25,
      kind: 'input',
      goals: ['Tfhem l-kalimat dyal l-khedma o l-contrat', 'Ttasel b ch-charika o tsowwel', 'Thder m3a z-zmala'],
      steps: [
        intro(
          'Khedma f l-informatique',
          'Salma bghat khedma sghira **f l-informatique** bach takhod tajriba. L9at annonce dyal **Werkstudentin** (taliba kat-khdem) f charika sghira f Köln. Kattasel bach tsowwel.',
          ['Tfhem l-annonce', 'Ttasel', 'Thder m3a z-zmala'],
        ),
        dialogue(
          'Ein Anruf bei der Firma',
          [
            ['Frau Lang', 'WebSolutions GmbH, Lang am Apparat. Guten Tag!', 'WebSolutions, Lang m3ak. Nharek sa3id!'],
            ['Salma', 'Guten Tag, mein Name ist Salma El Idrissi. Ich rufe wegen der Stelle als Werkstudentin an.', 'Nharek sa3id, smiyti Salma El Idrissi. Kanttasel 3la l-poste dyal Werkstudentin.'],
            ['Frau Lang', 'Ah ja. Was möchten Sie wissen?', 'Ah, ah. Chno bghiti t3refi?'],
            ['Salma', 'Können Sie mir sagen, wie viele Stunden pro Woche man arbeiten muss?', 'T9dri tgouli liya ch7al d s-sa3at f s-simana khass nkhdem?'],
            ['Frau Lang', 'Etwa 15 bis 20 Stunden. Die Arbeitszeiten sind flexibel.', 'Ta9riban 15 l 20 sa3a. L-aw9at flexible.'],
            ['Salma', 'Und wissen Sie, ob ich auch im Homeoffice arbeiten kann?', 'O wach kat3erfi wach n9der nkhdem ta men d-dar?'],
            ['Frau Lang', 'Ja, zwei Tage pro Woche sind möglich. Wichtig ist, dass Sie gut Englisch sprechen.', 'Ah, jouj iyyam f s-simana momkin. L-mohim howa tkouni kathdri l-ingliziya mzyan.'],
            ['Salma', 'Das ist kein Problem. Wie kann ich mich bewerben?', 'Machi mochkil. Kifach n9der n9eddem t-talab?'],
            ['Frau Lang', 'Schicken Sie uns einfach Ihren Lebenslauf per E-Mail. Wenn er uns gefällt, laden wir Sie zum Gespräch ein.', 'Sifti lina ghir s-CV dyalek b l-email. Ila 3jebna, ghadi nstd3iwk l l-entretien.'],
          ],
        ),
        vocab('Arbeit suchen — T-t9lab 3la l-khedma', [
          ['die Stelle', 'l-poste / l-khedma', 'die Stellen'],
          ['sich bewerben (um)', '9eddem t-talab (postuler)', '', ['Ich bewerbe mich um die Stelle.', 'Kan9eddem 3la l-poste.']],
          ['die Bewerbung', 't-talab (candidature)', ''],
          ['das Vorstellungsgespräch', 'l-entretien', ''],
          ['die Erfahrung', 't-tajriba', ''],
          ['die Voraussetzung', 'ch-chart', ''],
          ['der Arbeitsvertrag', 'l-contrat dyal l-khedma', ''],
          ['das Gehalt / der Lohn', 'l-ajr / l-khlas', ''],
          ['brutto / netto', 'brut / net', ''],
          ['die Überstunden', 's-sa3at z-zayda', ''],
          ['der Urlaub', 'l-3otla', ''],
          ['flexibel', 'flexible'],
          ['das Homeoffice', 'l-khedma men d-dar', ''],
          ['der Werkstudent / die Werkstudentin', 't-taleb li kaykhdem m3a l-9raya', ''],
        ]),
        explain(
          'Smalltalk m3a z-zmala',
          md`
            F l-khedma, f l-pause wla f l-cuisine, n-nas kaydirou **Smalltalk**: hedra khfifa.

            **Mawadi3 mzyanin:** l-weekend, t-t9s, l-3otla, l-makla, l-cafeteria, l-film / l-match.
            **Mawadi3 ma mzyaninch** m3a n-nas li ma kat3refhomch mzyan: **l-ajr**, s-siyasa, d-din, l-3omr.

            | Sou2al | Jawab |
            |---|---|
            | "Wie war dein Wochenende?" | "Ganz gut, danke! Und deins?" |
            | "Hast du schon Pläne für den Urlaub?" | "Ich fliege im Juli nach Marokko." |
            | "Viel zu tun heute?" | "Ja, total stressig!" |
            | "Kommst du mit in die Kantine?" | "Gern, ich habe Hunger." |
          `,
          [
            ['Na, wie läuft’s?', 'Kif dayra l-umour?'],
            ['Schönen Feierabend!', 'Salina l-khedma — msa l-khir!'],
          ],
          'F Almaniya **l-ajr** mawdou3 khass bzaf: ma tsowwelch z-zmil "Wie viel verdienst du?".',
        ),
        match('Rbet', [
          ['die Stelle', 'l-poste'],
          ['das Gehalt', 'l-ajr'],
          ['die Überstunden', 's-sa3at z-zayda'],
          ['das Vorstellungsgespräch', 'l-entretien'],
          ['der Arbeitsvertrag', 'l-contrat'],
        ]),
        choice('Ch7al d s-sa3at khass tkhdem Salma?', ['10', '15–20', '40'], 1),
        choice('Chno l-mohim l ch-charika?', ['L-ingliziya mzyana', 'Tajriba kbira', 'L-permis'], 0),
        choice('Ina sou2al mzyan l-Smalltalk m3a zmil jdid?', ['Wie viel verdienst du?', 'Wie war dein Wochenende?', 'Wie alt bist du?'], 1),
        gap('Kemmel', 'Ich bewerbe ___ um die Stelle als Werkstudentin.', 'mich'),
        order('Rtteb', 'Ich rufe wegen der Stelle an.'),
        speak(
          'Ttasel b ch-charika',
          'Ttasel b charika: 9eddem rasek, goul 3la ina poste kattasel, o sowwel 3la s-sa3at o l-ajr.',
          ['Guten Tag, mein Name ist Youssef Benali.', 'Ich rufe wegen der Stelle als Lagerhelfer an.', 'Wie viele Stunden pro Woche muss man arbeiten?', 'Wie hoch ist das Gehalt?'],
        ),
        graded(choice('"sich bewerben" kay3ni…', ['postuler', 'khdem', 'ttasel'], 0)),
        graded(choice('"netto" howa l-ajr…', ['9bel d-dara2ib', 'men b3d d-dara2ib', 'f s-sa3a'], 1)),
        graded(gap('Kemmel', 'Ich rufe ___ der Stelle an. (3la 9bel)', 'wegen')),
        graded(translate("Terjem l l'Almaniya", 'Kif kan l-weekend dyalek? (du)', ['Wie war dein Wochenende?'])),
        summary(
          [
            'L-khedma: **die Stelle, sich bewerben, das Vorstellungsgespräch, der Arbeitsvertrag, das Gehalt (brutto/netto), die Überstunden, der Urlaub**.',
            'Smalltalk: l-weekend, t-t9s, l-3otla — **machi l-ajr**.',
          ],
          ['Tfhem annonce o tttasel b charika', 'Tdir Smalltalk m3a z-zmala'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich glaube, dass … — dass, wenn, ob',
      description: 'Tlata d l-Nebensätze: dass (ra2y / khbar), wenn (chart), o s-sou2alat l-ghir mbachra (ob / W-).',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir jomla b dass', 'Tdir chart b wenn (o t-tartib f l-Hauptsatz)', 'Tsowwel b ladab b ob / W-Wort'],
      steps: [
        intro(
          'Nefs l-9a3ida, ma3ani jdad',
          md`
            F l-unité 2 t3llemti **weil**: l-fi3l kaymchi l l-akhir. Daba ghadi nzidou **3 d l-kalimat** khrin li kaydirou nefs l-7aja: **dass**, **wenn** o **ob** — o ta **W-Wörter** f s-sou2al l-ghir mbachir.
            Ila fhemti weil, ghadi tfhem hadou dghya!
          `,
          ['dass', 'wenn', 'ob / W-Fragen'],
        ),
        explain(
          'dass = belli',
          md`
            **dass** kaydkhol jomla li fiha **ra2y, khbar wla i7sas**, ghaliban men b3d:
            **glauben, denken, finden, meinen** (ra2y) · **wissen, sagen, hören** (khbar) · **hoffen** · **Es ist wichtig / schön / schade, dass …**

            | Hauptsatz | , | dass | … | **fi3l** |
            |---|---|---|---|---|
            | Ich glaube, | | dass | Salma die Stelle | **bekommt**. |
            | Es ist wichtig, | | dass | Sie gut Englisch | **sprechen**. |
            | Ich hoffe, | | dass | du bald wieder gesund | **bist**. |
            | Er sagt, | | dass | er morgen nicht kommen | **kann**. |

            F l-hedra t9der t7iyed "dass" o tkhdem jomla 3adiya: "Ich glaube, sie **bekommt** die Stelle." — walakin m3a "dass" **l-fi3l dima f l-akhir**.
          `,
          [
            ['Ich finde, dass die Arbeit interessant ist.', 'Kanchouf belli l-khedma mzyana.'],
            ['Ich weiß, dass du viel zu tun hast.', 'Kan3ref belli 3endek bzaf d l-khedma.'],
          ],
        ),
        choice('Ina jomla s7i7a?', ['Ich glaube, dass er ist krank.', 'Ich glaube, dass er krank ist.'], 1),
        gap('Kemmel', 'Es ist schön, ___ du hier bist.', 'dass'),
        order('Rtteb', 'Ich hoffe, dass ich die Stelle bekomme.'),
        order('Rtteb', 'Sie sagt, dass sie heute länger arbeiten muss.'),
        explain(
          'wenn = ila (chart)',
          md`
            **wenn** = *ila / mli* (chart): "Ila kan … , ghadi …"

            **Jouj d t-tartibat:**

            **1. Hauptsatz lowel:**
            > Ich komme mit, **wenn** ich Zeit **habe**.

            **2. wenn-Satz lowel** → l-Nebensatz kaykhd **l-blasa 1** kamla, ya3ni **l-fi3l dyal l-Hauptsatz kayji direct men b3d l-fasila**:
            > **Wenn** ich Zeit **habe**, **komme** ich mit.

            | 1 (Nebensatz) | **2 (fi3l)** | … |
            |---|---|---|
            | Wenn es regnet, | **bleiben** | wir zu Hause. |
            | Wenn du Hilfe brauchst, | **ruf** | mich an! |

            Fakker: **fi3l, fi3l** — wa7ed f l-akhir dyal wenn-Satz, o wa7ed direct men b3d l-fasila: "Wenn ich Zeit **habe**, **komme** ich."
          `,
          [
            ['Wenn ich die Stelle bekomme, feiern wir!', 'Ila khdit l-poste, ghadi n7tafelou!'],
            ['Wenn du willst, kannst du mitkommen.', 'Ila bghiti, t9der tji m3ana.'],
          ],
          'F Darija: *ila 3endi l-wa9t, ghadi nji*. F l\'Almaniya ma tgoulch "Wenn ich habe Zeit, ich komme" — **jouj d l-af3al ytl9aw f l-fasila**.',
        ),
        choice('Ina jomla s7i7a?', ['Wenn ich Zeit habe, ich komme.', 'Wenn ich Zeit habe, komme ich.', 'Wenn habe ich Zeit, komme ich.'], 1),
        choice('Ina jomla s7i7a?', ['Wir gehen spazieren, wenn das Wetter schön ist.', 'Wir gehen spazieren, wenn ist das Wetter schön.'], 0),
        gap('Kemmel', 'Wenn du müde ___, ___ du nach Hause gehen. (sein / können)', ['bist', 'kannst']),
        order('Rtteb (bda b "Wenn")', 'Wenn es regnet, nehme ich den Bus.'),
        explain(
          'Sou2al ghir mbachir: ob / W-Wort',
          md`
            Bach tsowwel **b ladab** (khossousan m3a n-nas li ma kat3refhomch), kanbdaw b: **Können Sie mir sagen, …? / Wissen Sie, …? / Ich möchte wissen, …**

            **1. Sou2al b W-** → nefs l-W-Wort + l-fi3l f l-akhir:
            > Wann **beginnt** der Kurs? → Können Sie mir sagen, **wann** der Kurs **beginnt**?

            **2. Sou2al ja/nein** → **ob** (*wach*) + l-fi3l f l-akhir:
            > **Kann** ich im Homeoffice arbeiten? → Wissen Sie, **ob** ich im Homeoffice arbeiten **kann**?

            | Sou2al mbachir | Sou2al ghir mbachir |
            |---|---|
            | Wo ist der Bahnhof? | Wissen Sie, **wo** der Bahnhof **ist**? |
            | Wie viel kostet das? | Können Sie mir sagen, **wie viel** das **kostet**? |
            | Hat sie Zeit? | Ich weiß nicht, **ob** sie Zeit **hat**. |

            **ob** ≠ **wenn**: *ob* = wach (sou2al) · *wenn* = ila (chart).
          `,
          [
            ['Wissen Sie, wann der nächste Zug fährt?', 'Wach kat3ref imta t-tran l-jay?'],
            ['Ich weiß nicht, ob ich morgen kommen kann.', 'Ma 3reftch wach n9der nji ghedda.'],
          ],
        ),
        choice('"Wissen Sie, ___ der Chef heute da ist?" (wach)', ['wenn', 'ob', 'dass'], 1),
        choice('Ina jomla s7i7a?', ['Können Sie mir sagen, wo ist die Toilette?', 'Können Sie mir sagen, wo die Toilette ist?'], 1),
        gap('Kemmel', 'Ich möchte wissen, ___ viel die Stelle bezahlt.', 'wie'),
        order('Rtteb', 'Wissen Sie, ob der Kurs morgen stattfindet?'),
        translate("Terjem l l'Almaniya (b ladab)", 'Wach t9der tgoul liya imta kaybda l-cours?', ['Können Sie mir sagen, wann der Kurs beginnt?', 'Können Sie mir sagen, wann der Kurs anfängt?']),
        graded(choice('Ina jomla s7i7a?', ['Ich denke, dass die Arbeit macht Spaß.', 'Ich denke, dass die Arbeit Spaß macht.'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Wenn du willst, wir gehen ins Kino.', 'Wenn du willst, gehen wir ins Kino.'], 1)),
        graded(choice('"Ich weiß nicht, ___ er Kinder hat."', ['ob', 'wenn', 'dass'], 0)),
        graded(gap('Kemmel', 'Es ist wichtig, ___ du pünktlich bist.', 'dass')),
        graded(gap('Kemmel', '___ ich krank bin, rufe ich meinen Chef an.', 'Wenn')),
        graded(order('Rtteb', 'Können Sie mir sagen, wo das Büro ist?')),
        graded(translate("Terjem l l'Almaniya", 'Ila kan 3endi l-wa9t, ghadi nji.', ['Wenn ich Zeit habe, komme ich.', 'Wenn ich Zeit habe, komme ich mit.', 'Ich komme, wenn ich Zeit habe.'])),
        summary(
          [
            '**dass** (belli): ra2y / khbar — "Ich glaube, dass er **kommt**."',
            '**wenn** (ila): chart — "Wenn ich Zeit **habe**, **komme** ich." (fi3l, fi3l)',
            '**ob** (wach) o **W-Wort** f s-sou2al l-ghir mbachir — "Wissen Sie, **ob** / **wann** …?"',
            'F kol Nebensatz: **l-fi3l f l-akhir** o **fasila**.',
          ],
          ['T3ber 3la ra2yek b dass', 'Tgoul chart b wenn', 'Tsowwel b ladab b ob / W-Wort'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Im Büro: E-Mails, Schichtpläne, Regeln',
      description: 'T9ra email men l-mas2oul, tsme3 hedra dyal z-zmala, o tkteb email rasmi fih sou2alat.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem email men l-khedma', 'Tfhem l-9awa3id l-asasiya f l-khedma f Almaniya', 'Tkteb email rasmi b sou2alat b ladab'],
      steps: [
        intro(
          'Awwel simana f WebSolutions',
          'Salma khdat l-poste! Lyouma wsltha email men Frau Lang 3la l-awwel simana. O Youssef f s-sbitar kayhder m3a Tim 3la l-planning.',
          ['T9ra email', 'Tfhem l-9awa3id', 'Tkteb email'],
        ),
        reading(
          'Willkommen im Team!',
          md`
            Liebe Frau El Idrissi,

            herzlich willkommen bei WebSolutions! Wir freuen uns, dass Sie ab Montag unser Team verstärken.

            Hier ein paar Informationen für Ihre erste Woche:
            – Bitte kommen Sie am Montag um 9:30 Uhr ins Büro (3. Stock). Ich zeige Ihnen dann Ihren Arbeitsplatz.
            – Ihren Laptop bekommen Sie von unserem IT-Kollegen Herrn Becker.
            – Ihre Arbeitszeiten tragen Sie bitte jeden Tag in die Zeiterfassung ein.
            – Wenn Sie krank sind, rufen Sie bitte bis 9 Uhr an und schicken Sie ab dem dritten Tag eine Krankmeldung.
            – Am Freitag essen wir immer zusammen zu Mittag. Kommen Sie gern mit!

            Wenn Sie Fragen haben, melden Sie sich jederzeit bei mir.

            Viele Grüße
            Anna Lang
          `,
          {
            text: '9ra l-email dyal Frau Lang.',
            glossary: [
              ['verstärken', '9wwa (l-équipe)'],
              ['eintragen', 'sjjel / kteb'],
              ['die Zeiterfassung', 'tasjil l-wa9t (pointage)'],
              ['sich melden', 'ttasel'],
              ['jederzeit', 'f ay wa9t'],
            ],
          },
        ),
        choice('Imta khass Salma tji l-ithnin?', ['9:00', '9:30', '10:30'], 1),
        choice('Chkoun ghadi y3tiha l-laptop?', ['Frau Lang', 'Herr Becker', 'L-patron'], 1),
        choice('Ila kanet mrida, imta khassha ttasel?', ['7tal 9', '7tal 12', 'Ma khassha ttasel'], 0),
        choice('Chno kaydirou kol jem3a?', ['Réunion', 'Kayaklou m3a ba3d', 'Kaykhorjou bekri'], 1),
        listening(
          'Der Schichtplan',
          [
            ['Tim', 'Youssef, hast du den neuen Schichtplan gesehen?', 'Youssef, chefti l-planning jdid dyal n-nouba?'],
            ['Youssef', 'Ja. Ich habe nächste Woche drei Nachtschichten. Weißt du, ob ich mit jemandem tauschen kann?', 'Ah. 3endi s-simana l-jaya 3 noubat d l-lil. Wach kat3ref wach n9der nbeddel m3a chi wa7ed?'],
            ['Tim', 'Frag am besten Monika. Ich glaube, dass Sarah gern Nachtschichten macht.', 'Sowwel a7ssen Monika. Kandenn belli Sarah kat7ebb n-noubat d l-lil.'],
            ['Youssef', 'Gut. Wenn ich tauschen kann, habe ich am Freitag frei. Dann kann ich zum Deutschkurs.', 'Mzyan. Ila 9dert nbeddel, ghadi nkoun 7orr l-jem3a. Iwa n9der nmchi l l-cours.'],
            ['Tim', 'Wann ist eigentlich deine Zwischenprüfung?', 'Imta b s7 l-imti7an l-wasati dyalek?'],
            ['Youssef', 'Im März. Ich hoffe, dass ich bis dahin besser Deutsch spreche!', 'F mars. Kantmenna nkoun kanhder l\'Almaniya a7ssen 7tal dak l-wa9t!'],
          ],
        ),
        choice('Chno bgha Youssef?', ['Ybeddel n-nouba d l-lil', 'Yakhod 3otla', 'Ykhdem ktar'], 0),
        choice('3lach bgha ykoun 7orr l-jem3a?', ['Bach ymchi l l-cours', 'Bach ysafer', 'Bach yn3es'], 0),
        culture(
          'L-khedma f Almaniya: 9awa3id mohimma',
          md`
            - **Pünktlichkeit:** wsel f l-wa9t. Ila t3ettelti, 3lem 9bel.
            - **Krankmeldung:** ttasel f **nefs n-nhar** 9bel ma tbda l-khedma. Men n-nhar t-talet (wla 9bel ila l-contrat galha) khass **chahada men t-tbib** (AU, ghaliban électronique daba).
            - **Urlaub:** ttlbou **b bekri** (formulaire / système). L-patron khasso ywaf9.
            - **Überstunden:** ghaliban katsjjelhom o kat3awdhom b l-flous wla b l-wa9t.
            - **Duzen / Siezen:** f charikat sghar o modernes ghaliban "du" m3a kolchi; f l-idarat o l-banques ghaliban "Sie". Ila ma 3reftich, **khdem "Sie"** 7tal ygoulou lik.
            - **Betriebsrat:** f charikat kbar kayn mjlis dyal l-mowadhafin kaydafe3 3la l-7o9ou9 dyalkom.
          `,
        ),
        pron(
          'ng o nk',
          '**ng** = sout wa7ed men l-khnaf (b7al *ng* f l-ingliziya "sing") — **bla g** wad7a. **nk** = ng + k.',
          [
            ['lang – Achtung – Zeitung', 'ng: bla g f l-akhir'],
            ['Wohnung – Bewerbung – Erfahrung', '-ung'],
            ['danke – krank – Bank', 'nk = ng + k'],
            ['Die Bewerbung ist lang.', 'kolchi m3a ba3d'],
          ],
        ),
        write(
          'Email: sowwel 3la l-khedma',
          md`
            L9iti annonce dyal **Aushilfe im Supermarkt** (Minijob). Kteb email rasmi (6–8 jmel): 9eddem rasek, goul 3lach kat-ktb, o sowwel **3 sou2alat b ladab** (b *Können Sie mir sagen, …* / *Ich möchte wissen, ob …*): s-sa3at, l-ajr, wach khass tkhdem f l-weekend.
          `,
          ['Sehr geehrte Damen und Herren,', 'T9dim o s-sabab (Ich interessiere mich für die Stelle …)', 'Sou2al 1 (wann / wie viele Stunden)', 'Sou2al 2 (wie viel …)', 'Sou2al 3 (ob …)', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nmein Name ist Youssef Benali und ich interessiere mich für die Stelle als Aushilfe in Ihrem Supermarkt. Ich habe schon Erfahrung im Kundenservice. Können Sie mir sagen, wie viele Stunden pro Woche man arbeiten muss? Ich möchte auch wissen, wie hoch der Stundenlohn ist. Außerdem möchte ich fragen, ob man auch am Wochenende arbeiten muss.\n\nIch freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\nYoussef Benali',
          60,
        ),
        graded(choice('Ila nta mrid, imta khassek t3lem l-patron?', ['F nefs n-nhar', 'Men b3d 3 iyyam', 'Men b3d simana'], 0)),
        graded(choice('"die Zeiterfassung" hiya…', ['l-ajr', 'tasjil l-wa9t', 'l-contrat'], 1)),
        graded(choice('Bach tsowwel b ladab f email rasmi:', ['Wie viel Geld?', 'Können Sie mir sagen, wie hoch der Lohn ist?', 'Sag mir den Lohn!'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich hoffe, dass ich die Stelle bekomme.')),
        summary(
          [
            'Email dyal l-khedma: **ab Montag, die Zeiterfassung, die Krankmeldung, sich melden**.',
            '9awa3id: **Pünktlichkeit, Krankmeldung f nefs n-nhar, Urlaub b bekri**.',
            'Sou2alat b ladab f l-email: **Können Sie mir sagen, …? Ich möchte wissen, ob …**',
          ],
          ['Tfhem email men l-khedma', 'Tkteb email rasmi b sou2alat'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 4',
      description: 'Muraja3a: l-khedma, dass, wenn, ob — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 dass / wenn / ob', 'Thder 3la l-khedma', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-khedma, Smalltalk, o t-tlata d l-Nebensätze: dass, wenn, ob (o W-Fragen).', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | Kelma | Ma3na | Mital |
            |---|---|---|
            | **weil** | 7it | …, weil ich krank **bin**. |
            | **dass** | belli | Ich glaube, dass er **kommt**. |
            | **wenn** | ila | Wenn ich Zeit **habe**, **komme** ich. |
            | **ob** | wach | Ich weiß nicht, ob sie **kommt**. |
            | **W-Wort** | fin / imta… | Wissen Sie, wo er **wohnt**? |

            F kolhom: **l-fi3l f l-akhir**.
          `,
        ),
        dialogue(
          'Gespräch in der Kaffeeküche',
          [
            ['Herr Becker', 'Und, Salma, wie gefällt dir die Arbeit?', 'Iwa a Salma, kif katchoufi l-khedma?'],
            ['Salma', 'Sehr gut! Ich finde, dass das Team total nett ist.', 'Mzyana bzaf! Kanchouf belli l-équipe drifa bzaf.'],
            ['Herr Becker', 'Das freut mich. Weißt du schon, ob du im Sommer Urlaub nimmst?', 'Fr7t. Wach 3refti wach ghadi takhdi 3otla f s-sif?'],
            ['Salma', 'Ja, wenn es möglich ist, möchte ich im August zwei Wochen nach Marokko.', 'Ah, ila kan momkin, bghit nmchi jouj simanat l l-Maghrib f ghouchtt.'],
            ['Herr Becker', 'Frag am besten Anna, wann die anderen Urlaub haben.', 'Sowwli a7ssen Anna imta l-akhrin 3endhom l-3otla.'],
          ],
        ),
        choice('Chno katchouf Salma f l-équipe?', ['Drifa bzaf', 'S3iba', 'Sghira'], 0),
        choice('Imta bghat Salma tmchi l l-Maghrib?', ['F younyou', 'F ghouchtt', 'F dujanbir'], 1),
        gap('Kemmel', 'Ich finde, ___ das Team nett ist. ___ es möglich ist, nehme ich Urlaub.', ['dass', 'Wenn']),
        match('Rbet', [
          ['dass', 'belli'],
          ['wenn', 'ila'],
          ['ob', 'wach'],
          ['weil', '7it'],
        ]),
        speak(
          'Role-play: Smalltalk',
          'Nta f l-cuisine m3a zmil jdid. Sowwlou 3la l-weekend, goul rayek f l-khedma (b dass), o goul chno ghadi dir f l-3otla (b wenn).',
          ['Wie war dein Wochenende?', 'Ich finde, dass die Arbeit hier interessant ist.', 'Wenn ich Urlaub habe, fliege ich nach Marokko.'],
        ),
        graded(choice('Ina jomla s7i7a?', ['Ich hoffe, dass du kommst.', 'Ich hoffe, dass kommst du.'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Wenn ich frei habe, ich schlafe lange.', 'Wenn ich frei habe, schlafe ich lange.'], 1)),
        graded(choice('"Weißt du, ___ der Zug pünktlich ist?"', ['dass', 'ob', 'wenn'], 1)),
        graded(gap('Kemmel', 'Können Sie mir sagen, ___ das Büro ist? (fin)', 'wo')),
        graded(gap('Kemmel', 'Er sagt, dass er heute länger arbeiten ___. (müssen)', 'muss')),
        graded(choice('"das Gehalt" howa…', ['l-ajr', 'l-3otla', 'l-contrat'], 0)),
        graded(choice('Ma tsowwelch zmil jdid 3la…', ['l-weekend', 't-t9s', 'l-ajr dyalou'], 2)),
        graded(order('Rtteb', 'Ich weiß nicht, wann die Besprechung beginnt.')),
        graded(translate("Terjem l l'Almaniya", 'Kandenn belli l-khedma mzyana.', ['Ich glaube, dass die Arbeit gut ist.', 'Ich denke, dass die Arbeit gut ist.', 'Ich finde, dass die Arbeit gut ist.'])),
        graded(dictation('Sme3 o kteb', 'Wenn Sie Fragen haben, rufen Sie mich an.')),
        summary(
          [
            'Daba t9der t9elleb 3la khedma, tttasel, tdir Smalltalk o tkteb email rasmi.',
            'F l-unité 5: s-s7a o l-7awadith — o **l-af3al r-reflexive** (sich fühlen, sich verletzen) o n-nasa2i7 b **sollte**.',
          ],
          ['Tt9elleb 3la khedma', 'Tkhdem dass, wenn, ob', 'Tdir Smalltalk'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
