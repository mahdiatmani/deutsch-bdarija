import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 6,
  title: 'Konsum & Geld',
  description: "L-flous, t-twfir, l-i3lanat o 7o9ou9 l-mostahlik — b l-Genitiv (wegen, trotz, während) o n-nihayat dyal s-sifat kamlin.",
  icon: 'savings',
  objectives: [
    'Thder 3la l-flous, l-budget o t-twfir',
    'Tfhem l-i3lanat o tna9edhom',
    'Tkhdem l-Genitiv: "das Auto meines Vaters", "wegen des Regens"',
    'Tzid n-nihaya s7i7a l s-sifa f kol l-7alat',
    'Tkteb chakwa mktouba l charika b ladab o b 7ojaj',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Mein Budget — Geld und Sparen',
      description: 'L-kalimat dyal l-flous, l-budget, l-crédit o t-twfir.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-flous o l-banka', 'Thder 3la l-budget dyalek', 'T3ti nasa2i7 dyal t-twfir'],
      steps: [
        intro(
          'Wach kafi l-ajr?',
          'Youssef daba kaykhelles l-kra, t-tilifoun, t-ta2min… o kaysift chi flous l l-3a2ila f l-Maghrib. F l-akhir d ch-chhar ma kayb9a walou! Salma kat3awnou ydir **Haushaltsbuch** (dfter d l-masarif).',
          ['Tsemmi l-flous', 'Tdir l-budget', 'Twfer'],
        ),
        dialogue(
          'Das Haushaltsbuch',
          [
            ['Salma', 'Okay, wie viel verdienst du netto im Monat?', 'Wakha, ch7al kat9bed net f ch-chhar?'],
            ['Youssef', 'Im zweiten Ausbildungsjahr etwa 1.250 Euro.', 'F l-3am t-tani d l-Ausbildung ta9riban 1.250 euro.'],
            ['Salma', 'Und was sind deine festen Kosten?', 'O chno houma l-masarif t-thabta dyalek?'],
            ['Youssef', 'Miete 450, Handy 30, Deutschlandticket … und jeden Monat schicke ich 200 Euro an meine Eltern.', 'L-kra 450, t-tilifoun 30, Deutschlandticket… o kol chhar kansift 200 euro l waldiya.'],
            ['Salma', 'Und wofür gibst du den Rest aus?', 'O fin katkhsser l-ba9i?'],
            ['Youssef', 'Lebensmittel, ausgehen … und wegen meines neuen Handys zahle ich noch Raten.', 'L-makla, l-khrja… o 3la 9bel t-tilifoun jdid mazal kankhelles b t-taqsit.'],
            ['Salma', 'Siehst du? Trotz deines guten Gehalts bleibt nichts übrig. Du solltest jeden Monat einen festen Betrag sparen – auch wenn es nur 50 Euro sind.', 'Chefti? Rghm l-ajr mzyan dyalek ma kayb9a walou. Khassek twfer kol chhar chi mablagh thabet — wakha ghir 50 euro.'],
            ['Youssef', 'Und keine Ratenkäufe mehr!', 'O safi, ma b9ach chri b t-taqsit!'],
          ],
        ),
        vocab('Geld — L-flous', [
          ['das Einkommen', 'd-dakhl', ''],
          ['die Ausgaben (Pl.)', 'l-masarif', ''],
          ['die festen Kosten (Pl.)', 'l-masarif t-thabta', ''],
          ['ausgeben (für)', 'khsser (f)', '', ['Ich gebe viel Geld für Kleidung aus.', 'Kankhsser bzaf d l-flous f l-7wayej.']],
          ['sparen', 'wfer', ''],
          ['der Betrag', 'l-mablagh', 'die Beträge'],
          ['die Rate / in Raten zahlen', 'l-9ist / khelles b t-taqsit', ''],
          ['der Kredit', 'l-crédit / s-slf', ''],
          ['Schulden haben', '3endou d-dyoun', ''],
          ['das Konto überziehen', 'dkhel f découvert', ''],
          ['die Zinsen (Pl.)', 'l-fawa2id (intérêts)', ''],
          ['der Haushalt / das Haushaltsbuch', 'l-masarif d d-dar / dfter l-masarif', ''],
          ['übrig bleiben', 'b9a / fdel', ''],
          ['sich etwas leisten', '9der 3la chi 7aja (madiyan)', '', ['Das kann ich mir nicht leisten.', 'Ma n9derch 3la hadchi.']],
        ]),
        explain(
          'Thder 3la l-flous',
          md`
            | Bach… | Redemittel |
            |---|---|
            | d-dakhl | "Ich verdiene netto … im Monat." |
            | l-masarif | "Für Miete gebe ich … aus." — "Den größten Teil meines Geldes gebe ich für … aus." |
            | ma kafich | "Am Ende des Monats bleibt nichts übrig." — "Das kann ich mir nicht leisten." |
            | t-twfir | "Ich lege jeden Monat … zur Seite." — "Ich spare auf ein Auto." |
            | nasi7a | "Du solltest ein Haushaltsbuch führen." — "Vermeide Ratenkäufe." |

            **sparen auf** + Akk = *wfer l (hadaf)*: "Ich spare **auf** eine Reise."
          `,
          [
            ['Ich spare auf einen Führerschein.', 'Kanwfer l l-permis.'],
            ['Ich lege jeden Monat 50 Euro zur Seite.', 'Kan7ett 3la jenb 50 euro kol chhar.'],
          ],
          'F Almaniya **Schulden** (d-dyoun) o **Ratenkäufe** mochkil kbir l ch-chabab — o l-**Schufa** kat-sjjel kolchi.',
        ),
        match('Rbet', [
          ['die Ausgaben', 'l-masarif'],
          ['die Zinsen', 'l-fawa2id'],
          ['Schulden haben', '3endou d-dyoun'],
          ['sich leisten', '9der 3la (madiyan)'],
          ['der Betrag', 'l-mablagh'],
        ]),
        choice('Ch7al kaysift Youssef l waldih?', ['50 €', '200 €', '450 €'], 1),
        choice('3lach kaykhelles b t-taqsit?', ['Dyal t-tomobil', 'Dyal t-tilifoun jdid', 'Dyal l-kra'], 1),
        gap('Kemmel', 'Wofür gibst du dein Geld ___?', 'aus'),
        gap('Kemmel', 'Ich spare ___ eine Reise nach Marokko.', 'auf'),
        order('Rtteb', 'Am Ende des Monats bleibt nichts übrig.'),
        speak(
          'L-budget dyalek',
          'Hder 3la l-budget dyalek (wla dyal chakhs mkhtare3): d-dakhl, l-masarif l-kbira, wach katwfer, o 3la ach.',
          ['Ich verdiene etwa 1.300 Euro netto im Monat.', 'Den größten Teil gebe ich für die Miete aus.', 'Ich lege jeden Monat 100 Euro zur Seite.', 'Ich spare auf einen Laptop.'],
        ),
        graded(choice('"die Zinsen" houma…', ['l-fawa2id', 'l-masarif', 'l-ajr'], 0)),
        graded(choice('"Das kann ich mir nicht leisten." kat3ni…', ['Ma kan7ebbch hadchi', 'Ma n9derch 3la hadchi (l-flous)', 'Ma 3reftch'], 1)),
        graded(gap('Kemmel', 'Ich lege jeden Monat Geld zur ___.', 'Seite')),
        graded(translate("Terjem l l'Almaniya", 'Kankhsser bzaf f l-makla.', ['Ich gebe viel Geld für Lebensmittel aus.', 'Ich gebe viel für Essen aus.', 'Ich gebe viel Geld für Essen aus.'])),
        summary(
          [
            'L-flous: **das Einkommen, die Ausgaben, ausgeben für, sparen auf, die Rate, der Kredit, Schulden, die Zinsen, sich leisten**.',
            '**Am Ende des Monats bleibt nichts übrig. · Ich lege … zur Seite.**',
          ],
          ['Thder 3la l-budget', 'T3ti nasa2i7 dyal t-twfir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wegen des Regens … — Genitiv & Adjektivendungen',
      description: 'L-Genitiv (l-articles, s-smiyat), l-prépositions b l-Genitiv, o kol n-nihayat dyal s-sifat.',
      minutes: 45,
      kind: 'grammar',
      goals: ['Tdir l-Genitiv: des / der + -(e)s', 'Tkhdem wegen, trotz, während, innerhalb, außerhalb', 'Tzid n-nihayat s-s7i7a l s-sifa f kol l-7alat'],
      steps: [
        intro(
          '"wegen meines neuen Handys"',
          md`
            Youssef 9al: "**wegen meines** neuen **Handys**" o Salma: "**Trotz deines** guten **Gehalts**". Hada **l-Genitiv** — l-7ala r-rab3a.
            F l-hedra n-nas kaykhdmou ghaliban "von" o d-Dativ, walakin f **l-kitaba, l-akhbar o l-wra9 r-rasmiya** l-Genitiv kathir bzaf.
          `,
          ['Genitiv', 'Prépositions + Genitiv', 'N-nihayat kamlin'],
        ),
        explain(
          'L-Genitiv: dyal chkoun?',
          md`
            | | m | f | n | jam3 |
            |---|---|---|---|---|
            | bestimmt | **des** Mann**es** | **der** Frau | **des** Kind**es** | **der** Kinder |
            | unbestimmt / mein | **eines / meines** Vater**s** | **einer / meiner** Mutter | **eines / meines** Auto**s** | **meiner** Eltern |

            - **Masculin o neutre:** **des / eines** + s-smiya katzid **-s** (wla **-es** m3a l-kalimat l-9sar o li katsali b s, ß, z: des Hauses, des Mannes).
            - **Féminin o jam3:** **der** — bla tbdil f s-smiya.
            - **n-Deklination:** des Kolleg**en**, des Herr**n** (bla -s).

            **Blasa:** l-Genitiv kayji **men b3d** s-smiya: "das Auto **meines Vaters**" (*t-tomobil dyal bba*), "die Wohnung **der Familie**".
            Sou2al: **Wessen?** (dyal chkoun?) — "**Wessen** Auto ist das?"
          `,
          [
            ['Das ist das Büro des Chefs.', 'Hada l-bureau dyal l-patron.'],
            ['Die Farbe der Wand gefällt mir.', 'L-lwen dyal l-7it 3jebni.'],
            ['Am Ende des Monats habe ich kein Geld.', 'F l-akhir d ch-chhar ma 3endich l-flous.'],
          ],
        ),
        choice('"das Haus ___ Eltern"', ['des', 'der', 'den'], 1),
        choice('"die Tasche ___ Lehrers"', ['der', 'des', 'dem'], 1),
        gap('Kemmel (Genitiv)', 'Das ist das Zimmer mein___ Bruder___.', ['es', 's']),
        gap('Kemmel (Genitiv)', 'Der Preis d___ Wohnung ist zu hoch.', 'er'),
        explain(
          'Prépositions m3a l-Genitiv',
          md`
            | Préposition | Ma3na | Mital |
            |---|---|---|
            | **wegen** | 3la 9bel / b sabab | **wegen des** Regens |
            | **trotz** | rghm | **trotz der** Kälte |
            | **während** | f l-wa9t dyal | **während des** Urlaubs |
            | **innerhalb** | dakhel (f moudda) | **innerhalb einer** Woche |
            | **außerhalb** | barra | **außerhalb der** Stadt |
            | **statt / anstatt** | f blast | **statt eines** Autos |

            F l-hedra n-nas ghaliban kaygoulou "wegen **dem** Regen" (Dativ) — mfhoum, walakin f l-kitaba khdem **l-Genitiv**.

            ⚠️ **während** = préposition (+ Genitiv) **wla** Konnektor (+ Nebensatz):
            "**Während des** Studiums …" ↔ "**Während** ich **studierte**, …"
          `,
          [
            ['Wegen eines Unfalls hatte der Zug Verspätung.', 'B sabab 7aditha t-tran t3ettel.'],
            ['Trotz des schlechten Wetters sind wir gewandert.', 'Rghm t-t9s l-khayb tmchina f l-jbel.'],
            ['Bitte zahlen Sie innerhalb von 14 Tagen.', 'Khelles f moudda d 14 youm.'],
          ],
        ),
        choice('"___ des Streiks fährt heute kein Bus."', ['Trotz', 'Wegen', 'Während'], 1),
        choice('"___ der Hitze haben wir Fußball gespielt." (rghm)', ['Wegen', 'Trotz', 'Statt'], 1),
        gap('Kemmel', 'Während d___ Pause trinke ich einen Kaffee. (die Pause)', 'er'),
        gap('Kemmel', 'Sie wohnt außerhalb d___ Stadt.', 'er'),
        explain(
          'N-nihayat dyal s-sifat: kolchi',
          md`
            **1. Men b3d der / die / das (dieser, welcher):** -e o -en ghir

            | | m | f | n | jam3 |
            |---|---|---|---|---|
            | N | der gut**e** | die gut**e** | das gut**e** | die gut**en** |
            | A | den gut**en** | die gut**e** | das gut**e** | die gut**en** |
            | D | dem gut**en** | der gut**en** | dem gut**en** | den gut**en** |
            | G | des gut**en** | der gut**en** | des gut**en** | der gut**en** |

            **2. Men b3d ein / kein / mein:** b7al 1, walakin **3 d l-blayes**: N m **-er** (ein guter), N/A n **-es** (ein gutes).

            **3. Bla article:** s-sifa katakhod n-nihaya dyal l-article (guter Wein, gute Milch, gutes Brot, gute Äpfel) — f l-Genitiv m/n: **-en** (wegen schlechten Wetters).

            **F l-Genitiv:** men b3d article → dima **-en**: "wegen **des neuen** Handys", "trotz **deines guten** Gehalts".
          `,
        ),
        choice('"trotz ___ schlechten Wetters"', ['der', 'des', 'dem'], 1),
        gap('Kemmel n-nihaya', 'wegen meines neu___ Handys', 'en'),
        gap('Kemmel n-nihaya', 'Ich trinke gern frisch___ Orangensaft. (der, Akk.)', 'en'),
        gap('Kemmel n-nihaya', 'Das ist ein sehr gut___ Angebot. (das)', 'es'),
        gap('Kemmel n-nihaya', 'Mit klein___ Kindern ist Reisen anstrengend. (jam3, bla article)', 'en'),
        order('Rtteb', 'Wegen des schlechten Wetters bleiben wir zu Hause.'),
        translate("Terjem l l'Almaniya (Genitiv)", 'T-tomobil dyal khti.', ['Das Auto meiner Schwester.', 'Das ist das Auto meiner Schwester.']),
        graded(choice('"das Fahrrad ___ Kindes"', ['der', 'des', 'dem'], 1)),
        graded(gap('Kemmel (Genitiv)', 'Die Wohnung mein___ Eltern ist groß.', 'er')),
        graded(choice('"___ der Arbeit telefoniere ich nicht privat." (f l-wa9t dyal)', ['Während', 'Wegen', 'Trotz'], 0)),
        graded(choice('"Die Rechnung muss ___ einer Woche bezahlt werden."', ['innerhalb', 'außerhalb', 'statt'], 0)),
        graded(gap('Kemmel n-nihaya', 'Trotz des hoh___ Preises hat er das Auto gekauft.', 'en')),
        graded(gap('Kemmel n-nihaya', 'Wir suchen eine günstig___ Wohnung. (Akk.)', 'e')),
        graded(translate("Terjem l l'Almaniya (b wegen + Genitiv)", 'B sabab l-grève, ma kaynch l-bus.', ['Wegen des Streiks fährt kein Bus.', 'Wegen des Streiks gibt es keinen Bus.', 'Wegen des Streiks fahren keine Busse.'])),
        summary(
          [
            'Genitiv: **des …(e)s** (m/n), **der** (f/jam3) — men b3d s-smiya: "das Auto **meines Vaters**". Sou2al: **Wessen?**',
            '**wegen, trotz, während, innerhalb, außerhalb, statt** + Genitiv (f l-kitaba).',
            'N-nihayat: men b3d article f l-Genitiv **dima -en**.',
          ],
          ['Tkhdem l-Genitiv', 'Tkhdem l-prépositions + Genitiv', 'Tzid n-nihayat s-s7i7a f kol l-7alat'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Werbung & Verbraucherrechte',
      description: 'T9ra o tna9ed l-i3lanat, tfhem l-7o9ou9 dyal l-mostahlik, o tkteb chakwa mktouba.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem l-asalib dyal l-i3lanat', 'Tfhem 3a9d / l-akhta2 dyal "Abo-Falle"', 'Tkteb chakwa mnadhdhma b 7ojaj'],
      steps: [
        intro(
          'Gratis? Wirklich?',
          'Salma t9iyydat f "Probeabo" fabor d 30 youm l chi application… o daba kaykhelsouha 15 € kol chhar! Ghadi n9raw 3la l-i3lanat, n3erfou l-7o9ou9, o nkteb chakwa.',
          ['Tna9ed l-i3lanat', 'T3ref l-7o9ou9', 'Tkteb chakwa'],
        ),
        reading(
          'Wie Werbung uns beeinflusst',
          md`
            Jeden Tag sehen wir Hunderte von Werbebotschaften – im Fernsehen, auf Plakaten und vor allem im Internet. Dabei nutzen Unternehmen bekannte psychologische Tricks.

            **Knappheit:** „Nur noch heute!" oder „Nur noch 3 Stück verfügbar!" – Wer glaubt, etwas zu verpassen, kauft schneller.
            **Influencer:** Viele junge Menschen vertrauen Influencern mehr als klassischer Werbung. Doch oft werden diese für ihre Empfehlungen bezahlt. Deshalb müssen solche Beiträge als „Werbung" oder „Anzeige" markiert werden.
            **Kostenlos testen:** Kostenlose Probeabos wirken harmlos. Wer jedoch vergisst, rechtzeitig zu kündigen, zahlt danach oft monatelang.
            **Psychologische Preise:** 9,99 € wirkt viel günstiger als 10 €, obwohl der Unterschied nur einen Cent beträgt.

            Verbraucherschützer raten daher: Vor jedem Kauf eine Nacht darüber schlafen, Preise vergleichen und Kündigungsfristen im Kalender notieren.
          `,
          {
            text: '9ra l-ma9al.',
            glossary: [
              ['die Werbebotschaft', 'r-risala l-ichhariya'],
              ['die Knappheit', 'n-nedra'],
              ['verpassen', 'fatou'],
              ['vertrauen', 'thiq f'],
              ['harmlos', 'bla khatar'],
              ['der Verbraucherschützer', 'l-mdafe3 3la l-mostahlik'],
              ['eine Nacht darüber schlafen', 'n3es 3liha lila (fekker 9bel)'],
            ],
          },
        ),
        choice('Chno kaydir "Nur noch heute!"?', ['Kaykhelli n-nas ychriw dghya (n-nedra)', 'Kayn99es t-taman', 'Kay3ti l-garantie'], 0),
        choice('3lach l-Influencer khasshom ykteb "Werbung"?', ['7it kaykhellsouhom 3la t-tawsiyat', '7it l-9anoun dyal t-tilifoun', 'Bla sabab'], 0),
        choice('Chno nasi7a dyal l-Verbraucherschützer?', ['Chri dghya', 'N3es 3liha lila, 9aren l-asoum, sjjel l-ajal dyal l-fasakh', 'Ma tchri walou online'], 1),
        listening(
          'Beratung bei der Verbraucherzentrale',
          [
            ['Beraterin', 'Guten Tag, Frau El Idrissi. Worum geht es?', 'Nharek sa3id. 3la ach?'],
            ['Salma', 'Ich habe ein kostenloses Probeabo für eine Fitness-App abgeschlossen. Jetzt wurden mir drei Monate lang je 14,99 € abgebucht. Ich habe das gar nicht bemerkt!', 'Dert abonnement d t-tajriba fabor l application d r-riyada. Daba tsselkhou mni 3 chhour 14,99 € kol chhar. Ma ntbehtch!'],
            ['Beraterin', 'Haben Sie innerhalb der Testphase gekündigt?', 'Wach fsekhti f l-moudda d t-tajriba?'],
            ['Salma', 'Nein, leider nicht. Aber in der App stand nirgends deutlich, dass es danach etwas kostet.', 'La, ma fsekhtch. Walakin f l-app ma kanch mktoub b wodou7 belli men b3d kaykhelles.'],
            ['Beraterin', 'Das ist wichtig. Wenn der Preis nicht klar angegeben war, haben Sie gute Chancen. Seit 2022 muss es außerdem einen „Kündigungsbutton" geben. Schreiben Sie dem Anbieter und fordern Sie das Geld zurück. Setzen Sie eine Frist von zwei Wochen.', 'Hadchi mohim. Ila t-taman ma kanch wad7, 3endek forsa mzyana. O men 2022 khass ykoun "boutona d l-fasakh". Kteb l ch-charika o tleb lflous. 7ett ajal d simanatayn.'],
            ['Salma', 'Und wenn sie nicht reagieren?', 'O ila ma jawbouch?'],
            ['Beraterin', 'Dann helfen wir Ihnen weiter. Und kündigen Sie das Abo sofort – am besten schriftlich.', 'Iwa ghadi n3awnouk. O fskhi l-abonnement direct — a7ssen b l-kitaba.'],
          ],
        ),
        choice('Ch7al tsselkh men Salma f l-majmou3?', ['14,99 €', '~45 €', '150 €'], 1, '3 × 14,99 € ≈ 45 €.'),
        choice('3lach 3endha forsa mzyana?', ['T-taman ma kanch mktoub b wodou7', 'Fsekhat f l-wa9t', 'L-app fabor'], 0),
        choice('Chno khassha tdir?', ['Tsenna', 'Tkteb l ch-charika, ttleb lflous m3a ajal d simanatayn, o tfsekh', 'Tmchi l l-bolis'], 1),
        culture(
          '7o9ou9 l-mostahlik f Almaniya',
          md`
            - **Verbraucherzentrale:** istichara (b taman sghir) f l-contrats, l-abonnements, l-factures…
            - **Kündigungsbutton:** men 2022 kol contrat online khass ykoun fih boutona d l-fasakh wad7a.
            - **Abo-Falle:** l-"fakh" dyal l-abonnements — 9ra dima l-chrout (l-moudda, t-taman men b3d, l-fasakh).
            - **Widerruf:** 14 youm l kol chri online.
            - **Lastschrift zurückholen:** ila tsselkhou mennek flous b SEPA-Lastschrift, t9der traje3hom f l-banka f moudda d **8 simanat** (bla sabab).
          `,
        ),
        pron(
          'L-ar9am o l-asoum',
          'F l-hedra l-asoum katgoulhom b7al hakka: 14,99 € = "vierzehn Euro neunundneunzig". 1.250 € = "tausendzweihundertfünfzig Euro".',
          [
            ['14,99 €', 'vierzehn Euro neunundneunzig'],
            ['1.250 €', 'tausendzweihundertfünfzig Euro'],
            ['0,25 €', 'fünfundzwanzig Cent'],
            ['3,5 %', 'drei Komma fünf Prozent'],
          ],
        ),
        write(
          'Chakwa l ch-charika',
          md`
            Kteb email l "FitNow GmbH" (~130 kelma) f blast Salma: chra7 l-mochkil (l-abonnement, l-moudda, l-mablagh), 3lach ma kanch wad7, tleb **traje3 lflous** o **tfsekh** l-abonnement, o 7ett **ajal**. Khdem **2 prépositions m3a l-Genitiv** (wegen, trotz, innerhalb…).
          `,
          ['Sehr geehrte Damen und Herren,', 'L-mochkil + l-mablagh', '3lach (machi wad7)', 'Talab: traje3 lflous + fasakh', 'Ajal (innerhalb von zwei Wochen)', 'Genitiv x2', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nam 3. Februar habe ich in Ihrer App „FitNow" ein kostenloses Probeabo abgeschlossen. Seit März wurden mir jedoch ohne meine Zustimmung jeden Monat 14,99 € abgebucht, insgesamt 44,97 €.\n\nWährend der Anmeldung wurde an keiner Stelle deutlich gezeigt, dass das Abo nach der Testphase kostenpflichtig ist. Trotz mehrerer Versuche konnte ich in der App auch keinen Kündigungsbutton finden.\n\nHiermit kündige ich das Abo mit sofortiger Wirkung. Außerdem fordere ich Sie auf, mir den Betrag von 44,97 € innerhalb von zwei Wochen auf mein Konto zu überweisen.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          110,
        ),
        graded(choice('"die Abo-Falle" hiya…', ['abonnement rkhis', 'l-fakh dyal l-abonnements', 'l-fasakh'], 1)),
        graded(choice('"abbuchen" kay3ni…', ['selkh / 9tta3 lflous men l-compte', 'sift lflous', '7ell compte'], 0)),
        graded(choice('Men 2022 kol contrat online khass ykoun fih…', ['Kündigungsbutton', 'Schufa', 'Impressum ghir'], 0)),
        graded(dictation('Sme3 o kteb', 'Hiermit kündige ich das Abo mit sofortiger Wirkung.')),
        summary(
          [
            'L-i3lanat: **Knappheit, Influencer (Werbung markieren), Probeabos, psychologische Preise**.',
            '**Verbraucherzentrale, Kündigungsbutton, Widerruf 14 Tage, Lastschrift 8 Wochen**.',
            'Chakwa: **l-mochkil → 3lach → talab → ajal**.',
          ],
          ['Tna9ed l-i3lanat', 'T3ref 7o9ou9 l-mostahlik', 'Tkteb chakwa mnadhdhma'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 6',
      description: 'Muraja3a: l-flous, l-Genitiv, n-nihayat — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Genitiv o n-nihayat', 'Thder 3la l-flous', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-budget, l-i3lanat, 7o9ou9 l-mostahlik, l-Genitiv o n-nihayat dyal s-sifat.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - Genitiv: **des Vaters, des Kindes, der Mutter, der Eltern** · **Wessen?**
            - **wegen / trotz / während / innerhalb / außerhalb / statt** + Genitiv
            - N-nihayat f l-Genitiv men b3d article: **-en** ("trotz des hohen Preises")
          `,
        ),
        dialogue(
          'Ein teurer Kauf',
          [
            ['Lukas', 'Ich will mir ein E-Bike kaufen. Es kostet 2.500 Euro.', 'Bghit nchri E-Bike. Taman-ha 2.500 euro.'],
            ['Youssef', 'Wow! Kannst du dir das leisten?', 'Waw! Wach t9der 3liha?'],
            ['Lukas', 'Nicht sofort. Aber der Händler bietet eine Finanzierung an: 24 Raten mit null Prozent Zinsen.', 'Machi daba. Walakin l-bya3 kay3ti tamwil: 24 9ist b 0 % fawa2id.'],
            ['Youssef', 'Lies das Kleingedruckte! Trotz der null Prozent gibt es oft versteckte Kosten.', '9ra l-ktaba s-sghira! Rghm 0 %, ghaliban kaynin masarif mkhbbya.'],
            ['Lukas', 'Stimmt. Vielleicht spare ich lieber ein Jahr und kaufe es dann bar.', 'S7i7. Ymken a7ssen nwfer 3am o men b3d nchriha b l-cash.'],
          ],
        ),
        choice('Chno nse7 Youssef?', ['Ychri dghya', 'Y9ra l-ktaba s-sghira', 'Ma ychrich abadan'], 1),
        choice('Chno 9rrer Lukas f l-akhir (ymken)?', ['Y-khelles b t-taqsit', 'Ywfer 3am o ychri b l-cash', 'Ychri bechklita 3adiya'], 1),
        gap('Kemmel', '___ der null Prozent gibt es oft versteckte Kosten. (rghm)', 'Trotz'),
        match('Rbet', [
          ['wegen', 'b sabab'],
          ['trotz', 'rghm'],
          ['während', 'f l-wa9t dyal'],
          ['innerhalb', 'dakhel (moudda)'],
          ['statt', 'f blast'],
        ]),
        speak(
          'Role-play: nasi7a f l-flous',
          'Sa7bek bgha ychri tilifoun d 1.200 € b t-taqsit, walakin d-dakhl dyalou 9lil. 3tih ra2yek o nasa2i7 (b sollte, Konjunktiv II, Genitiv).',
          ['An deiner Stelle würde ich das Handy nicht in Raten kaufen.', 'Wegen der Zinsen wird es am Ende teurer.', 'Du solltest lieber ein paar Monate sparen.', 'Ein gebrauchtes Handy wäre auch eine Option.'],
        ),
        graded(choice('"das Ende ___ Monats"', ['der', 'des', 'dem'], 1)),
        graded(gap('Kemmel (Genitiv)', 'Die Kinder unser___ Nachbarn sind sehr laut.', 'er')),
        graded(choice('"Wegen ___ Erkältung bleibe ich zu Hause."', ['meiner', 'meines', 'meine'], 0)),
        graded(gap('Kemmel n-nihaya', 'trotz des schlecht___ Wetters', 'en')),
        graded(gap('Kemmel n-nihaya', 'Das ist ein teur___ Auto. (das)', 'es')),
        graded(choice('"Wessen Jacke ist das?" kaysowwel 3la…', ['l-lwen', 'mol l-jacket', 'l-taman'], 1)),
        graded(choice('"Schulden" houma…', ['d-dyoun', 'l-fawa2id', 't-twfir'], 0)),
        graded(choice('"Ich lege Geld zur Seite." =', ['Kankhsser', 'Kanwfer', 'Kanslf'], 1)),
        graded(translate("Terjem l l'Almaniya (Genitiv)", 'F l-akhir d ch-chhar ma 3endich l-flous.', ['Am Ende des Monats habe ich kein Geld.', 'Am Ende des Monats habe ich kein Geld mehr.'])),
        graded(dictation('Sme3 o kteb', 'Trotz des hohen Preises habe ich das Fahrrad gekauft.')),
        summary(
          [
            'Daba t9der thder 3la l-flous, tna9ed l-i3lanat o tdafe3 3la 7o9ou9ek.',
            'F l-unité 7: t-ta3lim o t-takwin l-moustamirr — **l-Konnektoren zawjiya** (nicht nur … sondern auch, je … desto…).',
          ],
          ['Thder 3la l-budget', 'Tkhdem l-Genitiv', 'Tzid kol n-nihayat', 'Tkteb chakwa'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
