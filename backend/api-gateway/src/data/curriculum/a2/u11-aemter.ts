import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 11,
  title: 'Ämter & Dienstleistungen',
  description: "L-banka, l-idarat, l-bosta o l-contrats — b l-Passiv (wird gemacht), \"lassen\", o l-af3al m3a prépositions (warten auf, sich kümmern um).",
  icon: 'account_balance',
  objectives: [
    'T7ell compte f l-banka o tfhem l-kalimat',
    'Tdbber umour f l-idara (Termin, Antrag, Formular)',
    'Tchar7 chi procédure b l-Passiv: "Das Formular wird ausgefüllt."',
    'Tgoul belli chi wa7ed akhor kaydir lik chi 7aja: "Ich lasse … reparieren."',
    'Tkhdem l-af3al m3a prépositions o worauf / darauf',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ein Konto eröffnen',
      description: 'L-banka, l-idarat o l-kalimat dyal l-wra9.',
      minutes: 25,
      kind: 'input',
      goals: ['Tfhem l-kalimat dyal l-banka', 'T7ell compte', 'Tsowwel 3la l-wra9 l-mtlouba'],
      steps: [
        intro(
          'Compte jdid',
          'Salma bdat l-khedma f WebSolutions. Ch-charika katkhelles ghir 3la **Girokonto** (compte courant) almani. Mchat l l-banka bach t7ell compte.',
          ['Tfhem l-banka', 'T7ell compte', 'Tsowwel'],
        ),
        dialogue(
          'Bei der Bank',
          [
            ['Bankberater', 'Guten Tag, Frau El Idrissi. Sie möchten ein Girokonto eröffnen?', 'Nharek sa3id, Madame El Idrissi. Bghiti t7elli compte courant?'],
            ['Salma', 'Ja. Mein Gehalt wird ab nächstem Monat überwiesen.', 'Ah. L-khlas dyali ghadi ytsifet men ch-chhar l-jay.'],
            ['Bankberater', 'Gut. Haben Sie Ihren Pass und Ihre Meldebescheinigung dabei?', 'Mzyan. Wach jebti l-passport o Meldebescheinigung?'],
            ['Salma', 'Ja, hier. Kostet das Konto etwas?', 'Ah, hak. Wach l-compte bi flous?'],
            ['Bankberater', 'Für Studierende ist es kostenlos. Sie bekommen eine Girocard und können auch online überweisen.', 'L t-tolba fabor. Ghadi takhdi carte o t9dri tsifti l-flous online.'],
            ['Salma', 'Und wie lange dauert es, bis die Karte kommt?', 'O ch7al d l-wa9t 7tal twsel l-carte?'],
            ['Bankberater', 'Die Karte wird Ihnen in etwa fünf Tagen zugeschickt. Die PIN kommt in einem separaten Brief.', 'L-carte ghadi ttsifet lik f ~5 iyyam. L-code kayji f bra akhra.'],
            ['Salma', 'Perfekt. Kann ich auch Geld nach Marokko schicken?', 'Mzyan. Wach n9der nsift l-flous l l-Maghrib?'],
            ['Bankberater', 'Ja, mit einer Auslandsüberweisung. Aber oft sind spezielle Anbieter günstiger.', 'Ah, b virement l l-kharij. Walakin ghaliban kaynin charikat khassa arkhas.'],
          ],
        ),
        vocab('Bank & Behörden — L-banka o l-idarat', [
          ['das Konto (Girokonto)', 'l-compte (courant)', 'die Konten'],
          ['ein Konto eröffnen', 't7ell compte', ''],
          ['überweisen / die Überweisung', 'sifet l-flous / virement', ''],
          ['abheben', 'jbed l-flous', '', ['Ich hebe 50 Euro ab.', 'Ghadi njbed 50 euro.']],
          ['der Geldautomat', 'l-guichet automatique', ''],
          ['die Karte / die Girocard', 'l-carte bancaire', ''],
          ['die Gebühr', 'l-frais / r-rssoum', 'die Gebühren'],
          ['die Behörde / das Amt', 'l-idara', 'die Behörden / die Ämter'],
          ['der Antrag', 't-talab r-rasmi', 'die Anträge'],
          ['beantragen', 'tleb (rasmiyan)', '', ['Ich beantrage einen neuen Pass.', 'Kantleb passport jdid.']],
          ['das Formular', 'l-formulaire', ''],
          ['ausfüllen', '3emmer', ''],
          ['unterschreiben', 'wa99a3', ''],
          ['die Unterlagen (Pl.)', 'l-wra9', ''],
          ['der Vertrag', 'l-contrat', 'die Verträge'],
          ['kündigen', 'fsekh (l-contrat)', ''],
        ]),
        explain(
          'F l-idara: chno khassek t3ref',
          md`
            | Bach… | Katgoul |
            |---|---|
            | ttleb rendez-vous | "Ich möchte einen Termin vereinbaren." |
            | tsowwel 3la l-wra9 | "Welche Unterlagen brauche ich?" |
            | ma fhemtich | "Können Sie das bitte noch einmal erklären?" — "Was bedeutet …?" |
            | tsowwel 3la l-moudda | "Wie lange dauert das?" — "Bis wann muss ich das abgeben?" |
            | tkhelles | "Gibt es eine Gebühr?" |

            Kalimat d l-idara: **die Frist** (l-ajal), **der Bescheid** (l-9arar r-rasmi), **die Kopie** (n-noskha), **beglaubigt** (msadde9 3liha), **das Aktenzeichen** (ra9m l-malaf).
          `,
          [
            ['Bis wann muss ich den Antrag abgeben?', '7tal imta khassni n9eddem t-talab?'],
            ['Sie brauchen eine beglaubigte Kopie.', 'Khassek noskha msadde9 3liha.'],
          ],
        ),
        match('Rbet', [
          ['abheben', 'jbed l-flous'],
          ['überweisen', 'sifet l-flous'],
          ['beantragen', 'tleb rasmiyan'],
          ['kündigen', 'fsekh l-contrat'],
          ['die Frist', 'l-ajal'],
        ]),
        choice('Ch7al kaykhelles t-taleb f l-compte?', ['5 € f ch-chhar', 'Walou', '10 €'], 1),
        choice('Imta ghadi twsel l-carte?', ['Direct', 'F ~5 iyyam', 'F chhar'], 1),
        gap('Kemmel', 'Ich möchte ein Konto ___. (t7ell)', 'eröffnen|eroeffnen'),
        order('Rtteb', 'Welche Unterlagen brauche ich?'),
        speak(
          'F l-idara',
          'Nta f l-Ausländerbehörde. Tleb rendez-vous, sowwel ach men wra9 khassek, o 7tal imta khassek t9eddem t-talab.',
          ['Guten Tag, ich möchte einen Termin vereinbaren.', 'Ich möchte meine Aufenthaltserlaubnis verlängern.', 'Welche Unterlagen brauche ich?', 'Bis wann muss ich den Antrag abgeben?'],
        ),
        graded(choice('"der Geldautomat" howa…', ['l-guichet automatique', 'l-banka', 'l-carte'], 0)),
        graded(choice('"die Gebühr" hiya…', ['l-frais', 'l-ajal', 'l-contrat'], 0)),
        graded(gap('Kemmel', 'Bitte füllen Sie das Formular ___ und unterschreiben Sie hier.', 'aus')),
        graded(translate("Terjem l l'Almaniya", 'Bghit n7ell compte.', ['Ich möchte ein Konto eröffnen.'])),
        summary(
          [
            'L-banka: **das Konto eröffnen, überweisen, abheben, der Geldautomat, die Gebühr**.',
            'L-idara: **der Antrag, beantragen, das Formular ausfüllen, unterschreiben, die Unterlagen, die Frist**.',
          ],
          ['T7ell compte', 'Tdbber umour f l-idara'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Das Formular wird ausgefüllt — Passiv, lassen & Präpositionalverben',
      description: 'L-Passiv Präsens, "lassen", o l-af3al li kayjiw m3a préposition (+ worauf / darauf).',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir l-Passiv Präsens: wird + Partizip II', 'Tkhdem lassen: "Ich lasse mein Fahrrad reparieren."', 'T7fed l-af3al m3a prépositions', 'Tkhdem worauf? / darauf'],
      steps: [
        intro(
          'Chkoun kaydir? Mohim wla la?',
          md`
            L-banquier 9al: "Die Karte **wird** Ihnen **zugeschickt**." — ma 9alch *chkoun* ghadi ysiftha. Ghir l-**fi3l** mohim. Hada howa **l-Passiv**.
            O Youssef kay9ol: "Ich **lasse** mein Fahrrad **reparieren**." — machi howa li kayslle7, chi wa7ed akhor.
          `,
          ['Passiv Präsens', 'lassen', 'Af3al m3a prépositions'],
        ),
        explain(
          'L-Passiv Präsens: werden + Partizip II',
          md`
            | Aktiv (chkoun kaydir mohim) | Passiv (l-fi3l mohim) |
            |---|---|
            | Der Mitarbeiter **schickt** die Karte. | Die Karte **wird** (vom Mitarbeiter) **geschickt**. |
            | Man **füllt** das Formular aus. | Das Formular **wird ausgefüllt**. |
            | Man **trennt** den Müll. | Der Müll **wird getrennt**. |

            **werden** (Präsens):

            | | |
            |---|---|
            | ich werde | wir werden |
            | du wirst | ihr werdet |
            | er/sie/es **wird** | sie/Sie **werden** |

            - **werden** f l-blasa 2, **Partizip II** f l-akhir (Satzklammer).
            - L-maf3oul bih dyal l-Aktiv (Akkusativ) kaywelli **fa3il** (Nominativ) f l-Passiv: den Brief → **der** Brief wird…
            - Ila bghiti tgoul chkoun: **von** + Dativ: "vom Mitarbeiter".

            **Imta?** F t-tasharih, l-procédures, l-wasfat, l-i3lanat: "Hier **wird** Deutsch **gesprochen**." "Die Pakete **werden** morgen **geliefert**."
          `,
          [
            ['In Deutschland wird viel Brot gegessen.', 'F Almaniya kaytkla bzaf d l-khobz.'],
            ['Die Wohnungen werden renoviert.', 'L-appartements kaytjeddou.'],
            ['Wann wird das Paket geliefert?', 'Imta ghadi ywsel l-colis?'],
          ],
          'F Darija bzaf merrat kankhdmou *t-* wla *n-*: *kaytkla*, *kayttsifet*, *ttsedd*. Hada b7al l-Passiv!',
        ),
        gap('Kemmel', 'Das Formular ___ online ausgefüllt.', 'wird'),
        gap('Kemmel', 'Die Briefe ___ jeden Morgen gebracht.', 'werden'),
        gap('Kemmel l-Partizip', 'Der Müll wird jeden Dienstag ___. (abholen)', 'abgeholt'),
        choice('Passiv dyal "Man repariert das Auto."?', ['Das Auto repariert.', 'Das Auto wird repariert.', 'Das Auto ist reparieren.'], 1),
        order('Rtteb', 'Die Karte wird in fünf Tagen geschickt.'),
        explain(
          'lassen: chi wa7ed akhor kaydir',
          md`
            **lassen** + infinitiv (f l-akhir) = *kankhelli / kandir chi wa7ed ydir lia*:

            > Ich **lasse** mein Fahrrad **reparieren**. (*kanslle7 l-bechklita 3and chi wa7ed*)
            > Salma **lässt** sich die Haare **schneiden**. (*kat9ess cha3rha 3and l-coiffeur*)

            | | lassen |
            |---|---|
            | ich lasse | wir lassen |
            | du **lässt** | ihr lasst |
            | er/sie **lässt** | sie/Sie lassen |

            Ma3na tani: *khelli*: "**Lass** mich in Ruhe!" (*khellini f t-tissa3!*) — "Ich **lasse** das Handy zu Hause." (*kankhelli t-tilifoun f d-dar*)
          `,
          [
            ['Wir lassen die Wohnung streichen.', 'Kandirou chi wa7ed ysbegh lina d-dar.'],
            ['Lässt du dein Auto waschen?', 'Wach katghsel t-tomobil 3and chi wa7ed?'],
          ],
        ),
        choice('Youssef ma kaysle7ch l-bechklita bou7dou:', ['Ich repariere mein Fahrrad.', 'Ich lasse mein Fahrrad reparieren.'], 1),
        gap('Kemmel', 'Er ___ sein Handy reparieren. (lassen)', 'lässt|laesst'),
        explain(
          'Af3al m3a prépositions',
          md`
            Bzaf d l-af3al kayjiw dima m3a **préposition mo3ayyana** — khassek t7fedhom m3a ba3d:

            | Fi3l + préposition | Darija |
            |---|---|
            | warten **auf** + Akk | tsenna |
            | sich freuen **auf** + Akk / **über** + Akk | fre7 b (jay / wsel) |
            | sich kümmern **um** + Akk | thalla f |
            | sich interessieren **für** + Akk | htamm b |
            | denken **an** + Akk | fekker f |
            | sprechen **über** + Akk / **mit** + Dat | hder 3la / m3a |
            | fragen **nach** + Dat | sowwel 3la |
            | sich ärgern **über** + Akk | tghtat men |
            | teilnehmen **an** + Dat | charek f |
            | sich bewerben **um** + Akk | 9eddem 3la |

            **Sou2al o jawab:**
            - 7aja → **wo(r)** + préposition: "**Worauf** wartest du?" — "Auf den Bus." / "**Darauf** warte ich."
            - Chakhs → préposition + Wen/Wem: "**Auf wen** wartest du?" — "Auf Salma." / "Auf **sie**."

            (**wor-** / **dar-** ila kanet l-préposition katbda b 7arf mte7rrek: wor**auf**, dar**über**, wo**für**, da**mit**.)
          `,
          [
            ['Ich warte seit einer Stunde auf meinen Termin.', 'Kantsenna r-rendez-vous dyali men sa3a.'],
            ['Wofür interessierst du dich? — Für Musik.', 'Ach kayhemmek? — L-mousi9a.'],
            ['Ich kümmere mich um die Kinder.', 'Kanthalla f d-drari.'],
          ],
        ),
        choice('"Ich warte ___ den Bus."', ['für', 'auf', 'an'], 1),
        choice('"Er interessiert sich ___ Politik."', ['für', 'über', 'um'], 0),
        gap('Kemmel', 'Wer kümmert sich ___ den Hund?', 'um'),
        gap('Kemmel', '___ freust du dich? — Auf die Ferien!', 'Worauf'),
        gap('Kemmel', 'Denkst du an den Termin? — Ja, ich denke ___. (dar-)', 'daran'),
        translate("Terjem l l'Almaniya", 'Kantsenna Salma.', ['Ich warte auf Salma.']),
        graded(gap('Kemmel', 'Hier ___ nicht geraucht. (Passiv)', 'wird')),
        graded(choice('"Die Fenster ___ jede Woche geputzt."', ['wird', 'werden'], 1)),
        graded(choice('"Ich ___ meine Jacke reinigen." (3and chi wa7ed)', ['lasse', 'werde', 'mache'], 0)),
        graded(choice('"Sie freut sich ___ den Urlaub." (jay)', ['auf', 'über', 'für'], 0)),
        graded(gap('Kemmel', '___ sprecht ihr? — Über den neuen Film.', 'Worüber|Worueber')),
        graded(choice('"Er nimmt ___ einem Deutschkurs teil."', ['an', 'auf', 'bei'], 0)),
        graded(translate("Terjem l l'Almaniya (Passiv)", 'L-colis ghadi ywsel ghedda.', ['Das Paket wird morgen geliefert.'])),
        summary(
          [
            '**Passiv:** werden (2) + Partizip II (akhir): "Das Formular **wird ausgefüllt**." — chkoun: **von** + Dat.',
            '**lassen** + infinitiv: chi wa7ed akhor kaydir: "Ich **lasse** das Auto **reparieren**."',
            'Af3al m3a prépositions: **warten auf, sich kümmern um, sich interessieren für, denken an …**',
            '7aja: **worauf? → darauf** · chakhs: **auf wen? → auf ihn**.',
          ],
          ['Tchar7 procédure b l-Passiv', 'Tkhdem lassen', 'Tkhdem l-af3al m3a prépositions'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Briefe von Ämtern & Handyverträge',
      description: 'T9ra bra men l-idara, tfhem contrat dyal t-tilifoun, o tkteb email bach tfsekh contrat.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem bra rasmiya (Bescheid)', 'Tfhem chrout l-contrat', 'T3ref l-mosa3ada f l-idarat', 'Tkteb email dyal l-fasakh (Kündigung)'],
      steps: [
        intro(
          'Bra men l-Ausländerbehörde',
          'Youssef wsltou bra rasmiya men l-Ausländerbehörde. Lougha d l-idara s3iba chwiya: "Amtsdeutsch"! O Lukas bgha yfsekh contrat dyal t-tilifoun.',
          ['T9ra bra rasmiya', 'Tfhem l-contrat', 'Tkteb Kündigung'],
        ),
        reading(
          'Ein Brief von der Ausländerbehörde',
          md`
            Stadt Köln – Ausländeramt
            Aktenzeichen: 32-AB-2291

            Sehr geehrter Herr Benali,

            Ihre Aufenthaltserlaubnis läuft am 30.06. ab. Bitte beantragen Sie die Verlängerung rechtzeitig, spätestens sechs Wochen vorher.

            Folgende Unterlagen werden benötigt:
            – gültiger Reisepass
            – ein aktuelles biometrisches Passfoto
            – Ausbildungsvertrag und Bescheinigung der Berufsschule
            – Nachweis über Ihre Krankenversicherung

            Termine werden nur online vergeben. Die Gebühr beträgt 93 Euro.

            Mit freundlichen Grüßen
            Ihr Ausländeramt
          `,
          {
            text: '9ra l-bra dyal Youssef.',
            glossary: [
              ['ablaufen', 'sala (l-moudda)'],
              ['die Verlängerung', 't-tjdid / t-tamdid'],
              ['rechtzeitig', 'f l-wa9t / bekri'],
              ['spätestens', '3la l-ktar'],
              ['benötigt', 'mtloub'],
              ['der Nachweis', 'l-ithbat / l-wtiqa'],
              ['beträgt', 'kayousal / howa'],
            ],
          },
        ),
        choice('Imta katsali l-carte de séjour dyal Youssef?', ['30.06.', '6 simanat', '93 iyyam'], 0),
        choice('Imta khasso yttleb t-tjdid 3la l-ktar?', ['F nhar 30.06.', '6 simanat 9bel', 'Men b3d 30.06.'], 1),
        choice('Kifach kaykhd r-rendez-vous?', ['F t-tilifoun', 'Ghir online', 'F l-guichet'], 1),
        choice('Ch7al l-frais?', ['30 €', '93 €', 'Fabor'], 1),
        listening(
          'Ärger mit dem Handyvertrag',
          [
            ['Lukas', 'Ich ärgere mich total über meinen Handyvertrag! Ich zahle 40 Euro im Monat.', 'Mghtat bzaf men l-contrat dyal t-tilifoun! Kankhelles 40 euro f ch-chhar.'],
            ['Salma', 'So viel? Ich zahle nur zehn Euro für ein Prepaid-Paket.', 'Hadchi kamel? Ana kankhelles ghir 10 euro f recharge.'],
            ['Lukas', 'Ich will kündigen. Aber der Vertrag läuft noch bis März.', 'Bghit nfsekh. Walakin l-contrat mazal 7tal mars.'],
            ['Salma', 'Wie lange ist die Kündigungsfrist?', 'Ch7al l-moudda dyal l-fasakh?'],
            ['Lukas', 'Ein Monat. Ich muss also bis Ende Februar kündigen. Am besten schriftlich.', 'Chhar. Ya3ni khassni nfsekh 9bel l-akhir dyal febrayer. A7ssen b l-kitaba.'],
            ['Salma', 'Dann schreib heute noch die E-Mail. Sonst verlängert sich der Vertrag automatisch!', 'Iwa kteb l-email lyouma. Wla l-contrat ghadi ytjedded wa7dou!'],
          ],
        ),
        choice('Ch7al kaykhelles Lukas?', ['10 €', '40 €', '20 €'], 1),
        choice('Ch7al l-Kündigungsfrist?', ['Simana', 'Chhar', '3 chhour'], 1),
        choice('Chno ghadi w9e3 ila ma fsekhch f l-wa9t?', ['L-contrat ghadi ytjedded wa7dou', 'Ghadi ytsedd t-tilifoun', 'Walou'], 0),
        culture(
          'L-idarat o l-contrats f Almaniya',
          md`
            - **Amtsdeutsch:** l-logha dyal l-idarat s3iba 7tal 3la l-alman! Ma t7chmch tsowwel: "Können Sie mir das in einfachen Worten erklären?"
            - **Fristen** (l-ajal) mohimmin bzaf: ila fatek l-ajal, ymken ykoun mochkil kbir. **7ell l-bra dima** o jaweb f l-wa9t.
            - **Migrationsberatung (MBE / JMD):** mosa3ada fabor l l-mohajirin f l-wra9, l-idara o l-bra.
            - **Verträge:** ghaliban ytjeddou **wa7dhom** (automatische Verlängerung). Fsekh **b l-kitaba** o **f l-wa9t**. Ma twa99a3ch 3la contrat f l-bab wla f t-tilifoun bla ma tfekker — 3endek **14 youm** bach trj3.
            - **Schufa:** dossier dyal l-flous dyalek — ila ma khlltich l-factures, ymken ma t9derch tkri dar wla takhod crédit.
          `,
        ),
        pron(
          'Pausen: tfrre9 j-jomla t-twila',
          'F l-jmel t-twila dyal l-idara, dir **wa9fa sghira** f l-fasila o 9bel l-ma3louma l-mohimma. Hakka kaytfhem l-kalam mzyan.',
          [
            ['Ihre Aufenthaltserlaubnis | läuft am 30. Juni ab.', 'wa9fa men b3d l-fa3il'],
            ['Termine werden | nur online | vergeben.', 'jouj d l-wa9fat'],
            ['Die Gebühr beträgt | 93 Euro.', 'wa9fa 9bel r-ra9m'],
          ],
        ),
        write(
          'Kündigung (fasakh l-contrat)',
          'Bghiti tfsekh l-abonnement dyal l-fitness. Kteb email rasmi (5–7 jmel): ra9m l-client, goul belli bghiti tfsekh "zum nächstmöglichen Zeitpunkt", tleb t-ta2kid b l-kitaba, o ma tnsach t-tawqi3.',
          ['Sehr geehrte Damen und Herren,', 'Ra9m l-client (Kundennummer)', 'hiermit kündige ich … zum nächstmöglichen Zeitpunkt', 'Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Mit freundlichen Grüßen + smiya'],
          'Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen Vertrag im Fitnessstudio FitLife (Kundennummer 10475) zum nächstmöglichen Zeitpunkt. Bitte buchen Sie danach kein Geld mehr von meinem Konto ab. Bitte bestätigen Sie mir die Kündigung und das Vertragsende schriftlich.\n\nMit freundlichen Grüßen\nYoussef Benali',
          45,
        ),
        graded(choice('"die Verlängerung" hiya…', ['t-tjdid', 'l-fasakh', 'l-frais'], 0)),
        graded(choice('"spätestens sechs Wochen vorher" =', ['b d-dbt 6 simanat 9bel', '3la l-ktar 6 simanat 9bel (o 9bel ila bghiti)', 'men b3d 6 simanat'], 1)),
        graded(choice('Ila ma fhemtich bra rasmiya, t9der tmchi l…', ['Migrationsberatung', 'Schufa', 'Fitnessstudio'], 0)),
        graded(dictation('Sme3 o kteb', 'Hiermit kündige ich meinen Vertrag.')),
        summary(
          [
            'Bra rasmiya: **ablaufen, die Verlängerung, rechtzeitig, spätestens, benötigt, der Nachweis, die Gebühr beträgt …**',
            'L-contrats: **die Kündigungsfrist, kündigen, sich automatisch verlängern** — fsekh b l-kitaba o f l-wa9t.',
            'Mosa3ada fabor: **Migrationsberatung**.',
          ],
          ['Tfhem bra rasmiya', 'Tfhem chrout l-contrat', 'Tkteb Kündigung'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 11',
      description: 'Muraja3a: l-banka o l-idara, l-Passiv, lassen, l-af3al m3a prépositions — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Passiv, lassen o l-prépositions', 'Tdbber umour rasmiya', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-banka, l-idarat, l-contrats, l-Passiv, lassen, o l-af3al m3a prépositions.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Passiv:** Das Paket **wird** heute **geliefert**. / Die Briefe **werden** **geschickt**.
            - **lassen:** Ich **lasse** mir die Haare **schneiden**.
            - **Präpositionalverben:** warten **auf**, denken **an**, sich kümmern **um**, sich interessieren **für**…
            - **Worauf** wartest du? — **Darauf**. · **Auf wen**? — Auf **ihn**.
          `,
        ),
        dialogue(
          'Im Bürgerbüro',
          [
            ['Mitarbeiterin', 'Guten Tag. Worum geht es?', 'Nharek sa3id. 3la ach?'],
            ['Mehmet', 'Ich möchte meinen Führerschein umschreiben lassen. Ich habe einen türkischen Führerschein.', 'Bghit nbeddel l-permis dyali. 3endi permis turki.'],
            ['Mitarbeiterin', 'Dafür brauchen Sie eine Übersetzung. Die Übersetzung muss von einem anerkannten Übersetzer gemacht werden.', 'Khassek terjama. T-terjama khass ydirha mtarjim mo3tamad.'],
            ['Mehmet', 'Wie lange dauert das?', 'Ch7al kayakhod d l-wa9t?'],
            ['Mitarbeiterin', 'Etwa vier bis sechs Wochen. Der neue Führerschein wird Ihnen dann per Post geschickt.', 'Ta9riban 4 l 6 simanat. Men b3d l-permis jdid kaytsifet lik b l-bosta.'],
          ],
        ),
        choice('Chno bgha Mehmet?', ['Ytjedded l-passport', 'Ybeddel l-permis t-turki', 'Y7ell compte'], 1),
        choice('Chno khasso?', ['Terjama mo3tamada', 'Tswira', 'Lflous ghir'], 0),
        gap('Kemmel', 'Der Führerschein ___ per Post geschickt. Ich ___ ihn umschreiben.', ['wird', 'lasse']),
        match('Rbet', [
          ['warten', 'auf'],
          ['sich kümmern', 'um'],
          ['sich interessieren', 'für'],
          ['denken', 'an'],
          ['fragen', 'nach'],
        ]),
        speak(
          'Role-play: f l-banka',
          'Nta f l-banka. Goul belli bghiti tsift l-flous l l-Maghrib, sowwel 3la l-frais o ch7al kayakhod d l-wa9t.',
          ['Ich möchte Geld nach Marokko überweisen.', 'Gibt es dafür eine Gebühr?', 'Wie lange dauert die Überweisung?', 'Wird das Geld direkt auf das Konto überwiesen?'],
        ),
        graded(choice('"Das Auto ___ heute repariert."', ['wird', 'werden', 'ist'], 0)),
        graded(gap('Kemmel l-Partizip', 'Die Rechnungen werden online ___. (bezahlen)', 'bezahlt')),
        graded(choice('"Ich ___ meine Wohnung renovieren." (chi wa7ed akhor)', ['lasse', 'wird', 'muss lassen'], 0)),
        graded(choice('"Wir warten schon lange ___ eine Antwort."', ['für', 'auf', 'über'], 1)),
        graded(gap('Kemmel', '___ interessierst du dich? — Für Fotografie.', 'Wofür|Wofuer')),
        graded(choice('"Ich denke oft an meine Familie." — "Ich denke oft ___."', ['daran', 'an sie', 'darauf'], 1, 'N-nas → préposition + damir: an sie.')),
        graded(choice('"kündigen" kay3ni…', ['wa99a3', 'fsekh l-contrat', 'jedded'], 1)),
        graded(choice('"Die Frist" hiya…', ['l-ajal', 'l-frais', 'l-formulaire'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kanthalla f bba.', ['Ich kümmere mich um meinen Vater.', 'Ich kuemmere mich um meinen Vater.'])),
        graded(dictation('Sme3 o kteb', 'Termine werden nur online vergeben.')),
        summary(
          [
            'Daba t9der tdbber umour f l-banka o l-idara o tfhem l-bra r-rasmiya.',
            'F l-unité 12 (l-akhira f A2): l-bi2a o l-moustaqbal — **Futur I**, **n-Deklination**, o **Genitiv -s / von**.',
          ],
          ['T7ell compte', 'Tfhem bra rasmiya', 'Tkhdem l-Passiv o lassen', 'Tkhdem l-af3al m3a prépositions'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
