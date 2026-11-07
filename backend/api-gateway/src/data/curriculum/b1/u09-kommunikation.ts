import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 9,
  title: 'Kommunikation im Job',
  description: "T-tawasol f l-khedma: telephone, réunions, emails — b l-as2ila b ladab, Konjunktiv II dyal l-Modalverben o n-Nominalisierung.",
  icon: 'support_agent',
  objectives: [
    'Tdir mokalama d l-khedma f t-telephone',
    'Tsowwel b ladab b l-as2ila l-ghayr moubachira (Könnten Sie mir sagen, ob …)',
    'T3ti nasa2i7 o ta9dirat b müsste, sollte, dürfte, könnte',
    'Tfhem o tkhdem n-Nominalisierung l-basita (das Lesen, beim Arbeiten)',
    'Tkteb email d l-khedma o protokol 9sir',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Im Büro — Telefonieren & Besprechungen',
      description: 'L-kalimat dyal l-maktab, mokalama f t-telephone, o kifach tcharek f réunion.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-maktab o r-réunions', 'Tdir mokalama f t-telephone (tjaweb, t7awwel, tkhalli message)', 'Tcharek f réunion b ladab'],
      steps: [
        intro(
          'Ein Anruf für Frau Lang',
          'Salma khdama f WebSolutions. Frau Lang, l-mas2oula dyalha, f réunion. Ttasel client mghdoub… o Salma khassha tjaweb b ladab o b we9t.',
          ['Telephone', 'Réunion', 'Ladab'],
        ),
        dialogue(
          'Am Telefon',
          [
            ['Salma', 'WebSolutions, Salma El Idrissi, guten Tag. Was kann ich für Sie tun?', 'WebSolutions, Salma El Idrissi, mrhba. Chno n9der ndir lik?'],
            ['Herr Roth', 'Roth hier, von der Firma Möbel Roth. Ich müsste dringend Frau Lang sprechen.', 'Roth m3ak, men charikat Möbel Roth. Khassni nhder m3a Frau Lang daroure.'],
            ['Salma', 'Frau Lang ist leider gerade in einer Besprechung. Kann ich ihr etwas ausrichten?', 'Ma3a l-asaf Frau Lang f réunion daba. Wach n9der nblle3ha chi message?'],
            ['Herr Roth', 'Ja. Unser Onlineshop funktioniert seit heute Morgen nicht. Könnten Sie mir sagen, wann sie zurückruft?', 'Ah. L-onlineshop dyalna ma khddamch men s-sba7. Wach t9dri tgouli imta ghadi t3awed tttasel?'],
            ['Salma', 'Die Besprechung dürfte gegen elf Uhr zu Ende sein. Ich gebe ihr Bescheid, sobald sie rauskommt.', 'R-réunion ghaliban ghadi tsali m3a l-11. Ghadi n3lmha mlli tkhrej.'],
            ['Herr Roth', 'Gut. Und wissen Sie, ob schon jemand an dem Problem arbeitet?', 'Mzyan. O wach 3reftiw ila chi wa7ed khddam 3la l-mochkil?'],
            ['Salma', 'Ich leite das sofort an unseren Support weiter. Darf ich noch Ihre Nummer notieren?', 'Ghadi nseftou daba l s-support. Wach n9der nkteb ra9mek?'],
            ['Herr Roth', '0221 48 39 20. Vielen Dank, Frau El Idrissi.', '0221 48 39 20. Choukran bzaf.'],
          ],
        ),
        vocab('Im Büro — F l-maktab', [
          ['die Besprechung', 'r-réunion', 'die Besprechungen', ['Die Besprechung beginnt um zehn.', 'R-réunion katbda m3a l-10.']],
          ['ausrichten', 'blle3 (message)', ''],
          ['Bescheid geben', '3lllem / 3ta l-khbar', ''],
          ['zurückrufen', '3awed ttasel', ''],
          ['weiterleiten', 'seft / 7awwel (email, appel)', ''],
          ['der Termin / die Frist', 'r-rendez-vous / l-ajal (deadline)', ''],
          ['die Tagesordnung', 'l-barnamaj dyal r-réunion (ordre du jour)', ''],
          ['das Protokoll', 'l-ma7dar (compte rendu)', ''],
          ['die Abteilung', 'l-9ism', 'die Abteilungen'],
          ['der Kunde / die Kundin', 'l-client', 'die Kunden'],
          ['zuständig sein für', 'mas2oul 3la', '', ['Wer ist für die Rechnungen zuständig?', 'Chkoun mas2oul 3la l-fatourat?']],
          ['erledigen', 'khlles / sala (chi 7aja)', ''],
          ['dringend', 'mosta3jal', ''],
          ['der Anhang', 'l-pièce jointe', ''],
        ]),
        explain(
          'Telefonieren — Redemittel',
          md`
            | Mo9if | Redemittel |
            |---|---|
            | tjaweb | "Firma X, [smiya], guten Tag. Was kann ich für Sie tun?" |
            | ttleb chi wa7ed | "Könnte ich bitte mit Frau … sprechen?" |
            | ma kaynch | "Sie ist leider gerade nicht am Platz / in einer Besprechung." |
            | message | "Kann ich etwas ausrichten?" — "Soll sie Sie zurückrufen?" |
            | t7awwel | "Einen Moment bitte, ich verbinde Sie." |
            | ma fhemtich | "Entschuldigung, könnten Sie das bitte wiederholen / buchstabieren?" |
            | tsali | "Vielen Dank für Ihren Anruf. Auf Wiederhören!" |
          `,
          [
            ['Einen Moment bitte, ich verbinde Sie.', 'Lla7da, ghadi nwasslek.'],
            ['Auf Wiederhören!', 'Bslama! (f t-telephone)'],
          ],
          'F t-telephone kangoulou **"Auf Wiederhören"** machi "Auf Wiedersehen" — 7it ma kanchoufouch ba3dyatna!',
        ),
        match('Rbet', [
          ['die Besprechung', 'r-réunion'],
          ['ausrichten', 'blle3'],
          ['weiterleiten', 'seft / 7awwel'],
          ['dringend', 'mosta3jal'],
          ['zuständig', 'mas2oul'],
        ]),
        choice('3lach ttasel Herr Roth?', ['Bgha ychri mobilier', 'L-onlineshop ma khddamch', 'Bgha rendez-vous'], 1),
        choice('Imta ghaliban ghadi tsali r-réunion?', ['M3a l-10', 'M3a l-11', 'M3a l-12'], 1),
        choice('F t-telephone, f l-akhir katgoul…', ['Auf Wiedersehen', 'Auf Wiederhören', 'Tschüss zusammen'], 1),
        gap('Kemmel', 'Frau Lang ist gerade in einer ___. Kann ich ihr etwas ___?', ['Besprechung', 'ausrichten']),
        order('Rtteb', 'Einen Moment bitte, ich verbinde Sie.'),
        culture(
          'L-thaqafa dyal l-khedma f Almaniya',
          md`
            - **Pünktlichkeit:** r-réunion dyal 10:00 katbda f 10:00 — machi 10:15. Ila t3ettlti, sift message 9bel.
            - **Sie / du:** f bzaf d l-charikat t-ta9lidiya kankhdmou **Sie** o **Frau / Herr + l-ism d l-3a2ila**. F start-ups o IT ghaliban **du** men l-youm l-lowel — tsenna 7tal y9tar7ouha 3lik.
            - **Klare Worte:** l-almaniyin kayhdrou b wodou7 ("Das funktioniert so nicht.") — machi 9illat ladab, ghir tari9a dyal t-tawasol.
            - **Feierabend:** mlli tsali l-khedma, ghaliban ma kayjawbouch 3la l-emails 7tal l-ghed.
          `,
        ),
        speak(
          'Role-play: f t-telephone',
          'Nta f l-accueil dyal charika. Chi wa7ed ttasel bgha l-mas2oul dyalek, li ma kaynch. Jaweb, chre7 l-mo9if, khod message o ra9m t-telephone, o salli b ladab.',
          ['Firma Nordtech, guten Tag. Was kann ich für Sie tun?', 'Herr Becker ist leider nicht am Platz.', 'Kann ich ihm etwas ausrichten?', 'Könnten Sie mir bitte Ihre Nummer geben?', 'Vielen Dank für Ihren Anruf. Auf Wiederhören!'],
        ),
        graded(choice('"Kann ich etwas ausrichten?" =', ['Wach nblle3 chi message?', 'Wach n9der nkhrej?', 'Wach n3awed?'], 0)),
        graded(choice('"zuständig sein für" =', ['mas2oul 3la', 'mrid b', 'fr7an b'], 0)),
        graded(gap('Kemmel', 'Ich gebe Ihnen ___, sobald ich mehr weiß.', 'Bescheid')),
        graded(translate("Terjem l l'Almaniya", 'Lla7da, ghadi nwasslek.', ['Einen Moment bitte, ich verbinde Sie.', 'Einen Moment, ich verbinde Sie.'])),
        summary(
          [
            'L-maktab: **die Besprechung, ausrichten, Bescheid geben, weiterleiten, zuständig sein für, erledigen, die Frist**.',
            'T-telephone: **Kann ich etwas ausrichten? — Ich verbinde Sie. — Auf Wiederhören!**',
          ],
          ['Tjaweb f t-telephone d l-khedma', 'Tkhod message'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Könnten Sie mir sagen, …? — Höflichkeit & Konjunktiv II',
      description: 'L-as2ila l-ghayr moubachira, Konjunktiv II dyal l-Modalverben (müsste, sollte, dürfte, könnte), o n-Nominalisierung l-basita.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tdir as2ila ghayr moubachira b ob / W-Wort', 'Tkhdem müsste, sollte, dürfte, könnte l ladab, n-nasi7a o t-ta9dir', 'Tfhem o tkhdem n-Nominalisierung'],
      steps: [
        intro(
          'Höflich, aber klar',
          md`
            Herr Roth ma9alch "Wann ruft sie zurück?" — 9al: "**Könnten Sie mir sagen, wann** sie zurück**ruft**?"
            O Salma 9alt: "Die Besprechung **dürfte** gegen elf zu Ende sein." — ya3ni *ghaliban*.
            F had d-ders: kifach tkoun mo2addab o d9i9 f nefs l-we9t.
          `,
          ['Indirekte Fragen', 'müsste / sollte / dürfte', 'Nominalisierung'],
        ),
        explain(
          'Indirekte Fragen (b tafasil)',
          md`
            S-sou2al l-ghayr moubachir = **jomla tmhidiya + W-Wort / ob + … fi3l f l-akhir**:

            | Moubachir | Ghayr moubachir |
            |---|---|
            | Wann **beginnt** das Meeting? | Könnten Sie mir sagen, **wann** das Meeting **beginnt**? |
            | **Ist** Frau Lang da? | Wissen Sie, **ob** Frau Lang da **ist**? |
            | Wo **kann** ich parken? | Ich wüsste gern, **wo** ich parken **kann**. |
            | **Hat** er die Datei geschickt? | Ich frage mich, **ob** er die Datei geschickt **hat**. |

            Jmel tmhidiya: *Könnten Sie mir sagen, … / Wissen Sie, … / Darf ich fragen, … / Ich wüsste gern, … / Es wäre nett, wenn Sie mir sagen könnten, …*

            Ila kanet l-jomla t-tmhidiya **so2al** → "?" f l-akhir. Ila kanet **khabar** ("Ich wüsste gern …") → ".".
          `,
          [
            ['Darf ich fragen, wie lange das noch dauert?', 'Wach n9der nsowwel ch7al mazal ghadi ydoum?'],
            ['Ich wüsste gern, ob die Rechnung schon bezahlt ist.', 'Bghit n3ref wach l-fatoura dfe3ouha.'],
          ],
        ),
        choice('"Wann kommt der Techniker?" → "Wissen Sie, ___?"', ['wann kommt der Techniker', 'wann der Techniker kommt', 'ob der Techniker kommt wann'], 1),
        choice('"Ist das Büro morgen geöffnet?" → "Können Sie mir sagen, ___ das Büro morgen geöffnet ist?"', ['wenn', 'ob', 'dass'], 1),
        order('Rtteb', 'Könnten Sie mir sagen, wo der Besprechungsraum ist?'),
        order('Rtteb', 'Ich wüsste gern, ob Sie die Datei schon geschickt haben.'),
        explain(
          'Konjunktiv II dyal l-Modalverben',
          md`
            | Konj. II | Ma3na | Mital |
            |---|---|---|
            | **könnte** | talab b ladab / imkaniya | "**Könnten** Sie das bitte wiederholen?" · "Das **könnte** ein Fehler sein." |
            | **müsste** | darura b ladab / ta9dir (95 %) | "Ich **müsste** dringend Frau Lang sprechen." · "Der Bericht **müsste** fertig sein." |
            | **sollte** | nasi7a | "Sie **sollten** die Frist nicht verpassen." |
            | **dürfte** | ta9dir (ghaliban) | "Das **dürfte** kein Problem sein." |
            | **wollte** (Präteritum) | talab b ladab | "Ich **wollte** fragen, ob …" |

            Darajat l-yaqin: "Er **ist** im Büro." (100 %) → "Er **müsste** im Büro sein." (~90 %) → "Er **dürfte** im Büro sein." (~75 %) → "Er **könnte** im Büro sein." (~50 %).
          `,
          [
            ['Du solltest dich beim Chef entschuldigen.', 'Khassek tetsme7 men l-mas2oul (nasi7a).'],
            ['Das Paket müsste morgen ankommen.', 'L-colis khasso ywsel ghedda (ghaliban bzaf).'],
          ],
        ),
        choice('Nasi7a: "Du ___ mehr Pausen machen."', ['müsstest', 'solltest', 'dürftest'], 1),
        choice('"Das ___ kein Problem sein." (ghaliban)', ['dürfte', 'sollte', 'wollte'], 0),
        choice('Ach men jomla katbyyen yaqin kbir (~90 %)?', ['Er könnte krank sein.', 'Er müsste krank sein.', 'Er dürfte krank sein.'], 1),
        gap('Kemmel', '___ Sie mir bitte helfen? (talab b ladab)', 'Könnten|Koennten'),
        explain(
          'Nominalisierung (l-asas)',
          md`
            F l-lougha d l-khedma kayt7awlou l-af3al l **smiyat**:

            | Tari9a | Mital |
            |---|---|
            | Infinitiv → **das** + Infinitiv | lesen → **das Lesen** · "**Das Lernen** macht Spaß." |
            | **beim** + Infinitiv (mlli) | "**Beim Telefonieren** mache ich Notizen." |
            | **zum** + Infinitiv (bach) | "Ich brauche das Formular **zum Ausfüllen**." |
            | fi3l → **-ung** (die) | bearbeiten → **die Bearbeitung** · planen → **die Planung** |

            Kol smiya b **-ung** hiya **die**. Mital: *die Bestellung, die Lieferung, die Besprechung, die Rechnung*.
          `,
          [
            ['Nach der Besprechung schreibe ich das Protokoll.', 'Men b3d r-réunion kankteb l-ma7dar.'],
            ['Die Lieferung dauert drei Tage.', 'T-tawsil kaydoum 3 iyyam.'],
          ],
        ),
        choice('"liefern" → ___', ['das Lieferung', 'die Lieferung', 'der Lieferung'], 1),
        gap('Kemmel', '___ Autofahren darf man nicht telefonieren. (mlli)', 'Beim'),
        translate("Terjem l l'Almaniya", 'Wach t9der tgouli imta katbda r-réunion?', ['Können Sie mir sagen, wann die Besprechung beginnt?', 'Könnten Sie mir sagen, wann die Besprechung beginnt?', 'Kannst du mir sagen, wann die Besprechung beginnt?', 'Könntest du mir sagen, wann die Besprechung beginnt?']),
        graded(choice('"Wo ist der Drucker?" → "Wissen Sie, ___?"', ['wo ist der Drucker', 'wo der Drucker ist', 'ob der Drucker ist'], 1)),
        graded(gap('Kemmel', 'Darf ich fragen, ___ Sie morgen Zeit haben? (wach)', 'ob')),
        graded(choice('"Sie ___ den Vertrag genau lesen, bevor Sie unterschreiben." (nasi7a)', ['sollten', 'dürften', 'wollten'], 0)),
        graded(choice('"Der Chef ___ jetzt im Büro sein — sein Auto steht draußen." (yaqin kbir)', ['müsste', 'sollte', 'wollte'], 0)),
        graded(choice('"Ich ___ fragen, ob Sie morgen Zeit haben." (b ladab, Präteritum)', ['wollte', 'sollte', 'dürfte'], 0)),
        graded(choice('"planen" → ___', ['die Planung', 'das Planung', 'die Planen'], 0)),
        graded(order('Rtteb', 'Könnten Sie mir sagen, wann die Lieferung ankommt?')),
        summary(
          [
            'Indirekte Fragen: **Könnten Sie mir sagen / Wissen Sie / Ich wüsste gern, + W-Wort / ob + … fi3l f l-akhir**.',
            '**könnte** (ladab / imkaniya) · **müsste** (yaqin kbir) · **sollte** (nasi7a) · **dürfte** (ghaliban).',
            'Nominalisierung: **das Lesen**, **beim** + Inf. (mlli), **zum** + Inf. (bach), **-ung = die**.',
          ],
          ['Tsowwel b ladab', 'T3ti nasa2i7 o ta9dirat', 'Tfhem n-Nominalisierung'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'E-Mails & Protokolle',
      description: 'T9ra emails d l-khedma, tsme3 réunion, o tkteb protokol 9sir o email dyal l-mota3aba.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem email d l-khedma (l-mohimma, l-ajal)', 'Tsme3 réunion o tl9a l-qararat', 'Tkteb email nisf rasmi o protokol 9sir'],
      steps: [
        intro(
          'Nach dem Meeting',
          'L-onlineshop dyal Möbel Roth t9ad. Kanet réunion 9siira f l-équipe, o daba Salma khassha tkteb l-protokol o tsift email l Herr Roth.',
          ['T9ra email', 'Tsme3 r-réunion', 'Tkteb'],
        ),
        reading(
          'E-Mail von Frau Lang',
          md`
            **Betreff:** Möbel Roth – Shop-Ausfall / Besprechung heute 14 Uhr

            Liebes Team,

            wie ihr sicher schon mitbekommen habt, war der Onlineshop von Möbel Roth heute Vormittag drei Stunden nicht erreichbar. Laut Support lag es an einem fehlerhaften Update. Der Shop läuft inzwischen wieder.

            Um so etwas in Zukunft zu vermeiden, möchte ich heute um 14 Uhr kurz mit euch besprechen, wie wir Updates besser testen können. Bitte bringt eure Ideen mit.

            Salma, könntest du bitte das Protokoll übernehmen und es bis morgen Mittag an alle schicken? Außerdem wäre es gut, wenn du Herrn Roth anschließend eine kurze Zusammenfassung schreiben würdest – er sollte wissen, was wir unternehmen.

            Danke euch und bis später
            Katrin
          `,
          {
            text: '9ra l-email dyal Frau Lang (Katrin).',
            glossary: [
              ['mitbekommen', '3ref / sme3 b'],
              ['nicht erreichbar', 'ma khddamch / ma yt-wsel lih'],
              ['fehlerhaft', 'fih ghalat'],
              ['vermeiden', 'tjenneb'],
              ['übernehmen', 'tkellef b'],
              ['die Zusammenfassung', 'l-molakhas'],
              ['unternehmen', 'dar (ijra2)'],
            ],
          },
        ),
        choice('3lach t9ad l-shop?', ['Hujum', 'Update fih ghalat', 'L-kahraba9at'], 1),
        choice('Chno khass Salma tdir?', ['Tttasel b s-support', 'Tkteb l-protokol o molakhas l Herr Roth', 'Tsayb update jdid'], 1),
        choice('L-ajal dyal l-protokol?', ['L-youm m3a l-14', 'Ghedda m3a t-tnach', 'Men b3d simana'], 1),
        listening(
          'Die Besprechung',
          [
            ['Frau Lang', 'Also, wie können wir verhindern, dass so ein Fehler noch einmal passiert?', 'Iwa, kifach n9dro nmen3o had l-ghalat ybda men jdid?'],
            ['Jonas', 'Wir sollten jedes Update zuerst auf einem Testserver ausprobieren, statt es direkt live zu stellen.', 'Khassna njrrbou kol update f serveur dyal t-tajriba, f blast ma ndirouh live direct.'],
            ['Salma', 'Außerdem wäre es sinnvoll, Updates nicht am Vormittag zu machen. Da haben die Kunden die meisten Bestellungen.', 'O zid, ykoun ma3qoul ma ndirouch l-updates f s-sba7. Fih kaykounou ktar l-commandes.'],
            ['Frau Lang', 'Gute Punkte. Dann machen wir das so: Ab sofort testet Jonas jedes Update auf dem Testserver, und Updates gibt es nur noch abends nach 20 Uhr.', 'Mzyan. Iwa ndirouha haka: men daba Jonas kayjrreb kol update, o l-updates ghir f l-lil men b3d 20:00.'],
            ['Jonas', 'Bis wann sollte der Testserver fertig sein?', 'Imta khass s-serveur ykoun wajed?'],
            ['Frau Lang', 'Bis Ende nächster Woche. Das dürfte reichen, oder?', '7tal akhir s-simana l-jaya. Ghaliban ykfi, la?'],
          ],
        ),
        choice('Chno l-qarar l-lowel?', ['Kol update kayjrrbouh f serveur d t-tajriba', 'Ma bqawch ydirou updates', 'Ybeddlou s-support'], 0),
        choice('Imta ghadi ykounou l-updates?', ['F s-sba7', 'F l-lil men b3d 20:00', 'F l-weekend'], 1),
        choice('L-ajal dyal serveur t-tajriba?', ['Ghedda', 'Akhir s-simana l-jaya', 'Akhir ch-chhar'], 1),
        explain(
          'Protokol 9sir (Ergebnisprotokoll)',
          md`
            Ergebnisprotokoll kaykteb **ghir n-nata2ij**, machi chkoun 9al chno:

            | Jouz2 | Mital |
            |---|---|
            | L-ma3loumat | "Besprechung vom 14.10., 14:00–14:30 · Teilnehmende: K. Lang, J. Weiß, S. El Idrissi" |
            | Thema | "TOP 1: Shop-Ausfall Möbel Roth" (TOP = Tagesordnungspunkt) |
            | Ergebnis / Beschluss | "Updates werden ab sofort auf einem Testserver getestet." |
            | Aufgaben | "Testserver einrichten — **Wer:** J. Weiß — **Bis:** 24.10." |

            Uslub: jmel 9sar, ghaliban **Präsens** o n-**Nominalisierung**: "*Einrichtung* eines Testservers", "*Durchführung* von Updates nur abends".
          `,
        ),
        pron(
          'Kalimat twal d l-khedma',
          'L-kalimat l-mrakkba: l-accent ghaliban 3la l-jouz2 l-lowel.',
          [
            ['die Besprechung – der Besprechungsraum', 'l-accent 3la "sprech"'],
            ['der Testserver – die Tagesordnung', 'l-accent 3la "Test" o "Tag"'],
            ['die Zusammenfassung', 'l-accent 3la "sam"'],
          ],
        ),
        write(
          'Email l Herr Roth',
          md`
            Kteb email nisf rasmi l Herr Roth (~120 kelma) b smiyt Salma: **tetsme7** 3la l-mochkil, **chre7** s-sabab b jmla wa7da, **3ti** l-qararat li dertou (Testserver, updates f l-lil), o **9tare7** mokalama ila bgha ma3loumat ktar.
            Khdem **sollte / dürfte / könnte** o **indirekte Frage** wa7ed.
          `,
          ['Sehr geehrter Herr Roth,', 'Ta3tidar (es tut uns leid, dass …)', 'S-sabab (fehlerhaftes Update)', 'L-qararat (Testserver, Updates abends)', 'Ta9tira7 (Falls Sie Fragen haben, könnten wir …)', 'Mit freundlichen Grüßen'],
          'Sehr geehrter Herr Roth,\n\nes tut uns sehr leid, dass Ihr Onlineshop heute Vormittag drei Stunden nicht erreichbar war. Die Ursache war ein fehlerhaftes Update.\n\nIn unserer Besprechung haben wir beschlossen, alle Updates ab sofort zuerst auf einem Testserver zu prüfen. Außerdem führen wir Updates nur noch abends nach 20 Uhr durch, damit Ihre Kunden nicht gestört werden. Der Testserver dürfte bis Ende nächster Woche fertig sein.\n\nFalls Sie Fragen haben, könnten wir gern einen kurzen Telefontermin vereinbaren. Lassen Sie mich einfach wissen, wann es Ihnen am besten passt.\n\nMit freundlichen Grüßen\nSalma El Idrissi\nWebSolutions',
          100,
        ),
        graded(choice('"vermeiden" =', ['tjenneb', 'tkellef', 'sme3'], 0)),
        graded(choice('Ergebnisprotokoll kaykteb…', ['Kol chi kelma t9alet', 'Ghir n-nata2ij o l-mohimmat', 'Ghir l-asma2'], 1)),
        graded(choice('"TOP" f l-protokol =', ['Tagesordnungspunkt', 'Top-Ergebnis', 'Termin ohne Pause'], 0)),
        graded(dictation('Sme3 o kteb', 'Könnten Sie mir bitte sagen, bis wann der Bericht fertig sein muss?')),
        summary(
          [
            'Emails d l-khedma: **der Betreff, mitbekommen, nicht erreichbar, übernehmen, die Zusammenfassung**.',
            'Protokol: **Teilnehmende, TOP, Beschluss, Aufgaben (Wer? Bis wann?)** — b Präsens o Nominalisierung.',
          ],
          ['Tfhem email d l-khedma', 'Tl9a l-qararat f réunion', 'Tkteb email nisf rasmi'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 9',
      description: 'Muraja3a: t-telephone, l-as2ila b ladab, müsste / sollte / dürfte / könnte, Nominalisierung — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-as2ila l-ghayr moubachira', 'Traja3 Konjunktiv II dyal l-Modalverben', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'T-tawasol f l-khedma: t-telephone, r-réunions, l-emails — b ladab o b d9a.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Wissen Sie, ob / wann / wo … + fi3l f l-akhir?**
            - **könnte** (ladab) · **müsste** (yaqin kbir) · **sollte** (nasi7a) · **dürfte** (ghaliban)
            - **beim** + Inf. · **zum** + Inf. · fi3l → **die …ung**
          `,
        ),
        dialogue(
          'Kaffeeküche',
          [
            ['Jonas', 'Salma, weißt du, ob Katrin heute noch ins Büro kommt?', 'Salma, 3reftiha ila Katrin ghadi tji l-youm l l-maktab?'],
            ['Salma', 'Sie müsste gleich da sein. Sie hatte nur einen Kundentermin.', 'Khassha tkoun hna daba. Kan 3endha ghir rendez-vous m3a client.'],
            ['Jonas', 'Gut. Ich wollte sie fragen, ob ich nächste Woche Urlaub nehmen kann.', 'Mzyan. Kunt bghit nsowwelha wach n9der nakhod 3otla s-simana l-jaya.'],
            ['Salma', 'Da solltest du dich beeilen — der Testserver muss ja bis Freitag fertig sein.', 'Khassek tzerreb — s-serveur khasso ykoun wajed 9bel l-jem3a.'],
            ['Jonas', 'Stimmt. Beim Planen habe ich das ganz vergessen!', 'Bssa7. Mlli kunt kankhttet nsit hadchi kamel!'],
          ],
        ),
        choice('Fin kanet Katrin?', ['F l-3otla', 'F rendez-vous m3a client', 'Mrida'], 1),
        choice('Chno bgha Jonas?', ['Y9ra', '3otla s-simana l-jaya', 'Testserver jdid'], 1),
        gap('Kemmel', 'Weißt du, ___ Katrin heute kommt? Sie ___ gleich da sein. (yaqin kbir)', ['ob', 'müsste|muesste']),
        match('Rbet', [
          ['könnte', 'ladab / imkaniya'],
          ['müsste', 'yaqin kbir'],
          ['sollte', 'nasi7a'],
          ['dürfte', 'ghaliban'],
        ]),
        speak(
          'Role-play: réunion 9siira',
          'Ntouma f réunion. Mochkil: l-clients kayclamiw 3la t-ta3til dyal t-tawsil. 9tare7 7loul (sollte, könnte), sowwel b ladab (Könnten Sie mir sagen, …), o 3awed l-qarar f l-akhir.',
          ['Wir sollten die Kunden besser informieren.', 'Wir könnten eine automatische E-Mail schicken.', 'Könnten Sie mir sagen, wie viele Beschwerden wir hatten?', 'Das dürfte das Problem lösen.', 'Also: Ab nächster Woche bekommt jeder Kunde eine Versandbestätigung.'],
        ),
        graded(choice('"Wann ist die Besprechung?" → "Wissen Sie, ___?"', ['wann die Besprechung ist', 'wann ist die Besprechung', 'ob die Besprechung ist wann'], 0)),
        graded(gap('Kemmel', 'Können Sie mir sagen, ___ ich hier parken darf? (wach)', 'ob')),
        graded(choice('"Du ___ zum Arzt gehen." (nasi7a)', ['solltest', 'dürftest', 'wolltest'], 0)),
        graded(choice('"Der Zug ___ jetzt in Köln sein." (ghaliban, ~75 %)', ['dürfte', 'sollte', 'wollte'], 0)),
        graded(choice('"___ Sie das bitte buchstabieren?" (b ladab)', ['Könnten', 'Sollten', 'Dürften'], 0)),
        graded(choice('"bestellen" → ___', ['die Bestellung', 'das Bestellen', 'Ij-jouj s7a7'], 2)),
        graded(gap('Kemmel', '___ Kochen höre ich gern Musik. (mlli)', 'Beim')),
        graded(choice('F t-telephone: "Kann ich etwas ___?"', ['ausrichten', 'weiterleiten', 'erledigen'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Chkoun mas2oul 3la l-fatourat?', ['Wer ist für die Rechnungen zuständig?'])),
        graded(dictation('Sme3 o kteb', 'Die Besprechung dürfte gegen elf Uhr zu Ende sein.')),
        summary(
          [
            'Daba t9der ttawasel f l-khedma b ladab: t-telephone, r-réunions o l-emails.',
            'F l-unité 10: l-kultur o l-weekend — **Partizip als Adjektiv**, **lassen** o **sich + Dativ**.',
          ],
          ['Tdir mokalama d l-khedma', 'Tsowwel b ladab', 'Tkhdem müsste / sollte / dürfte / könnte', 'Tkteb email o protokol'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
