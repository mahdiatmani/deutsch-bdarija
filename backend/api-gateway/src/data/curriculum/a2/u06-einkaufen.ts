import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 6,
  title: 'Einkaufen & Vergleichen',
  description: "T9aren l-mountojat o l-asoum, tchri online, tchki (Reklamation) — b l-Komparativ, l-Superlativ o n-nihayat dyal s-sifat.",
  icon: 'compare_arrows',
  objectives: [
    'T9aren jouj 7wayej: "billiger als", "so gut wie"',
    'Tgoul chno a7ssen: "am besten", "am billigsten"',
    'Tzid n-nihaya s7i7a l s-sifa men b3d der/die/das: "der neue Laptop"',
    'Tchri online o tfhem l-7o9ou9 dyalek',
    'Tkteb reklamation b ladab',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Welcher Laptop ist besser?',
      description: 'L-kalimat dyal l-chri o l-mountojat, o kifach t9aren.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-mountojat o l-khasa2is', 'T9aren b "teurer als"', 'Tsowwel l-bya3 3la l-farq'],
      steps: [
        intro(
          'Laptop jdid l l-jami3a',
          'Salma khassha laptop jdid l l-9raya o l-khedma. F l-magasin d l-électronique kaynin jouj: wa7ed **rkhis** o wa7ed **a9wa**. Kat9aren b mosa3adat Youssef.',
          ['Tsemmi l-mountojat', 'T9aren', 'Tsowwel l-bya3'],
        ),
        dialogue(
          'Im Elektronikmarkt',
          [
            ['Salma', 'Entschuldigung, können Sie mir helfen? Ich suche einen Laptop für das Studium.', 'Sme7 liya, t9der t3awenni? Kan9elleb 3la laptop l l-9raya.'],
            ['Verkäufer', 'Gern. Hier haben wir zwei gute Modelle: Der silberne kostet 549 Euro, der schwarze 799 Euro.', 'B kolchi. Hna 3endna jouj modèles mzyanin: l-fedi b 549 euro, l-k7el b 799.'],
            ['Salma', 'Was ist der Unterschied?', 'Chno l-farq?'],
            ['Verkäufer', 'Der schwarze ist schneller und leichter. Und der Akku hält länger: zwölf Stunden statt acht.', 'L-k7el asra3 o akhaff. O l-batterie katkhdem ktar: 12 sa3a f blast 8.'],
            ['Youssef', 'Und der Bildschirm?', 'O l-écran?'],
            ['Verkäufer', 'Der Bildschirm ist bei beiden gleich groß. Aber beim schwarzen ist er heller.', 'L-écran nefs l-kber f j-jouj. Walakin f l-k7el fih d-dow ktar.'],
            ['Salma', 'Hm, der silberne ist viel billiger. Ist er genauso gut zum Programmieren?', 'Hm, l-fedi rkhis bzaf. Wach mzyan b7al b7al l l-programmation?'],
            ['Verkäufer', 'Für das Studium reicht er. Aber für große Projekte ist der schwarze besser.', 'L l-9raya kafi. Walakin l l-projets l-kbar l-k7el a7ssen.'],
            ['Salma', 'Ich überlege noch. Online ist er vielleicht günstiger …', 'Ghadi nfekker. Online ymken arkhas…'],
          ],
        ),
        vocab('Einkaufen & Technik — T-tsewwi9 o t-te9niya', [
          ['der Laptop', 'l-laptop', 'die Laptops'],
          ['der Akku', 'l-batterie', 'die Akkus'],
          ['der Bildschirm', 'l-écran', 'die Bildschirme'],
          ['die Marke', 'l-marque', 'die Marken'],
          ['die Qualität', 'l-jawda', ''],
          ['der Unterschied', 'l-farq', 'die Unterschiede'],
          ['günstig / preiswert', 'rkhis / b taman mzyan', ''],
          ['das Angebot', 'l-3ard / promotion', ''],
          ['die Garantie', 'l-garantie', ''],
          ['bestellen', 'commande', ''],
          ['liefern / die Lieferung', 'wsel (livraison)', ''],
          ['zurückschicken', 'rjje3 (b l-bosta)', ''],
          ['kaputt', 'mherres / ma khddamch', ''],
          ['umtauschen', 'beddel', ''],
        ]),
        explain(
          'T9aren: als o wie',
          md`
            **1. Mkhtalfin → Komparativ + als** (*men*):
            > Der schwarze Laptop ist **schneller als** der silberne.
            > Online ist es **billiger als** im Geschäft.

            **2. B7al b7al → so + sifa + wie** (*b7al*):
            > Der Bildschirm ist **so groß wie** beim anderen.
            > Er ist **genauso gut wie** der teure. (genauso = b7al b7al b dbt)
            > Er ist **nicht so schnell wie** der schwarze.

            **Komparativ** = sifa + **-er**: billig → billig**er**, schnell → schnell**er**, leicht → leicht**er**.
          `,
          [
            ['Mein Handy ist älter als deins.', 'T-tilifoun dyali 9dem men dyalek.'],
            ['Köln ist nicht so groß wie Berlin.', 'Köln machi kbira b7al Berlin.'],
          ],
          'Ghalta kathira: "billiger **wie**". S7i7: **billiger als** (Komparativ + als) — **so billig wie** (b7al b7al).',
        ),
        match('Rbet', [
          ['der Akku', 'l-batterie'],
          ['der Bildschirm', 'l-écran'],
          ['der Unterschied', 'l-farq'],
          ['liefern', 'wsel (livraison)'],
          ['kaputt', 'mherres'],
        ]),
        choice('Ch7al l-farq f t-taman bin j-jouj?', ['150 €', '250 €', '350 €'], 1, '799 − 549 = 250.'),
        choice('Chno a7ssen f l-laptop l-k7el?', ['Arkhas', 'Asra3, akhaff o l-batterie ktar', 'L-écran kbir ktar'], 1),
        choice('"Der Laptop ist schneller ___ der andere."', ['wie', 'als', 'so'], 1),
        gap('Kemmel', 'Der Bildschirm ist ___ groß ___ beim anderen Modell. (b7al b7al)', ['so', 'wie']),
        order('Rtteb', 'Online ist der Laptop billiger als im Geschäft.'),
        speak(
          'T9aren jouj 7wayej',
          'T9aren jouj tilifounat: wa7ed b 300 € o wa7ed b 600 €. Goul chno arkhas, chno asra3, o chno b7al b7al.',
          ['Das erste Handy ist billiger als das zweite.', 'Das zweite Handy ist schneller.', 'Die Kamera ist genauso gut wie beim teuren Handy.'],
        ),
        graded(choice('"der Akku" howa…', ['l-écran', 'l-batterie', 'l-garantie'], 1)),
        graded(choice('"Mein Bruder ist so alt ___ ich."', ['als', 'wie'], 1)),
        graded(gap('Kemmel', 'Das Auto ist teurer ___ das Fahrrad.', 'als')),
        graded(translate("Terjem l l'Almaniya", 'Hada arkhas men hadak.', ['Das ist billiger als das.', 'Dieser ist billiger als der andere.', 'Das ist günstiger als das.'])),
        summary(
          [
            'L-chri: **der Akku, der Bildschirm, die Marke, die Qualität, das Angebot, die Garantie, bestellen, liefern, zurückschicken**.',
            'Mkhtalfin: **billiger als** · B7al b7al: **so billig wie / genauso gut wie**.',
          ],
          ['Tsemmi l-mountojat', 'T9aren jouj 7wayej'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'besser, am besten — der neue Laptop',
      description: 'L-Komparativ o s-Superlativ l-kamlin, o n-nihayat dyal s-sifa men b3d der / die / das.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir l-Komparativ o s-Superlativ (m3a l-chadhin)', 'Tfhem 3lach s-sifa katakhod nihaya 9bel s-smiya', 'Tzid -e / -en men b3d der / die / das'],
      steps: [
        intro(
          '"der schwarze" — 3lach -e?',
          md`
            L-bya3 9al: "**Der schwarze** kostet 799 Euro" o "**beim schwarzen** ist er heller".
            F A1 t3llemti belli s-sifa men b3d "sein" ma kat-tbeddelch ("Er ist schwarz"). Walakin **9bel s-smiya** s-sifa katakhod **nihaya**! Ghadi nchoufou l-Komparativ lowel, o men b3d had n-nihayat.
          `,
          ['Komparativ', 'Superlativ', 'Nihayat s-sifa'],
        ),
        explain(
          'Komparativ o Superlativ',
          md`
            | Sifa | Komparativ (-er) | Superlativ (am …-sten) |
            |---|---|---|
            | billig | billig**er** | am billig**sten** |
            | schnell | schnell**er** | am schnell**sten** |
            | teuer | teu**rer** (bla e) | am teuer**sten** |
            | **alt** | **ä**lt**er** | am **ä**lt**esten** |
            | **groß** | gr**ö**ß**er** | am gr**ö**ß**ten** |
            | **jung** | j**ü**ng**er** | am j**ü**ng**sten** |

            **Umlaut** m3a ktar s-sifat 9sar: alt, arm, kalt, warm, lang, kurz, jung, groß, oft, stark → ä, ö, ü.
            **-esten** ila kanet s-sifa katsali b **-d, -t, -s, -ß, -z**: am ält**esten**, am heiß**esten**, am kürz**esten**.

            **Chadhin (7fedhom!):**

            | | Komparativ | Superlativ |
            |---|---|---|
            | **gut** | **besser** | am **besten** |
            | **viel** | **mehr** | am **meisten** |
            | **gern** | **lieber** | am **liebsten** |
            | **hoch** | **höher** | am **höchsten** |
            | **nah** | **näher** | am **nächsten** |
          `,
          [
            ['Dieses Handy ist am billigsten.', 'Had t-tilifoun howa l-arkhas.'],
            ['Im Juli ist es am heißesten.', 'F youlyouz kaykoun s-sehd l-ktar.'],
            ['Ich trinke lieber Tee, aber am liebsten trinke ich Saft.', 'Kanfeddel atay, walakin a7ssen 7aja 3endi l-3assir.'],
          ],
        ),
        choice('Komparativ dyal "gut"?', ['guter', 'besser', 'güter'], 1),
        choice('Superlativ dyal "alt"?', ['am altsten', 'am ältesten', 'am älter'], 1),
        gap('Kemmel', 'Mein Bruder ist ___ als ich. (jung)', 'jünger|juenger'),
        gap('Kemmel', 'Wer verdient am ___? (viel)', 'meisten'),
        gap('Kemmel', 'Im Winter sind die Tage ___. (kurz, Komparativ)', 'kürzer|kuerzer'),
        explain(
          'Nihayat s-sifa men b3d der / die / das',
          md`
            Ila kanet s-sifa **9bel s-smiya** (machi men b3d sein), katakhod nihaya. Men b3d **der / die / das / dieser / welcher**, kaynin **ghir jouj d n-nihayat**: **-e** o **-en**.

            | | der (m) | die (f) | das (n) | jam3 |
            |---|---|---|---|---|
            | Nom. | der neu**e** Laptop | die neu**e** Jacke | das neu**e** Handy | die neu**en** Schuhe |
            | Akk. | den neu**en** Laptop | die neu**e** Jacke | das neu**e** Handy | die neu**en** Schuhe |
            | Dat. | dem neu**en** Laptop | der neu**en** Jacke | dem neu**en** Handy | den neu**en** Schuhen |

            **9a3ida sahla:** **-e f 5 blayes** (Nom. kolhom f l-mofrad + Akk. die o das) — **o l-ba9i kolchi -en**.
            Fakker f **l-article howa li kaygoul l-7ala**, dakchi 3lach s-sifa katkhdem ghir -e wla -en.
          `,
          [
            ['Der schwarze Laptop ist teuer.', 'L-laptop l-k7el ghali.'],
            ['Ich nehme den schwarzen Laptop.', 'Ghadi nakhod l-laptop l-k7el.'],
            ['Mit dem neuen Laptop arbeite ich schneller.', 'B l-laptop jdid kankhdem asra3.'],
            ['Die roten Schuhe gefallen mir.', 'S-sbbat l-7mer 3jbni.'],
          ],
          'Men b3d "sein" **bla nihaya**: "Der Laptop ist **neu**." — 9bel s-smiya **b nihaya**: "der **neue** Laptop".',
        ),
        choice('"Der ___ Laptop kostet 799 Euro." (schwarz)', ['schwarze', 'schwarzen'], 0),
        choice('"Ich kaufe den ___ Laptop." (silbern)', ['silberne', 'silbernen'], 1),
        choice('"Ich nehme die ___ Jacke." (blau)', ['blaue', 'blauen'], 0, 'Akk. die → -e.'),
        gap('Kemmel n-nihaya', 'Das klein___ Handy gefällt mir.', 'e'),
        gap('Kemmel n-nihaya', 'Mit dem alt___ Akku kann ich nicht arbeiten.', 'en'),
        gap('Kemmel n-nihaya', 'Die neu___ Kopfhörer sind super.', 'en'),
        gap('Kemmel n-nihaya', 'Ich suche den grün___ Pullover.', 'en'),
        order('Rtteb', 'Ich nehme das billige Modell.'),
        translate("Terjem l l'Almaniya", 'L-jacket l-7mra zwina.', ['Die rote Jacke ist schön.']),
        graded(choice('Superlativ dyal "gern"?', ['am gernsten', 'am liebsten', 'am lieberen'], 1)),
        graded(gap('Kemmel', 'Berlin ist ___ als Köln. (groß)', 'größer|groesser')),
        graded(choice('"Welches Handy ist am ___?" (gut)', ['besten', 'gutesten', 'bester'], 0)),
        graded(choice('"Ich kaufe den ___ Fernseher." (groß)', ['große', 'großen'], 1)),
        graded(gap('Kemmel n-nihaya', 'Die teur___ Kamera ist besser.', 'e')),
        graded(gap('Kemmel n-nihaya', 'Ich spreche mit dem neu___ Kollegen.', 'en')),
        graded(translate("Terjem l l'Almaniya", 'Hada howa l-arkhas.', ['Das ist am billigsten.', 'Der ist am billigsten.', 'Das ist am günstigsten.'])),
        summary(
          [
            'Komparativ **-er** (+ umlaut: älter, größer, jünger) · Superlativ **am …-sten** (am ältesten).',
            'Chadhin: **gut – besser – am besten · viel – mehr – am meisten · gern – lieber – am liebsten · hoch – höher**.',
            'Men b3d der/die/das: **-e** f 5 blayes (Nom. mofrad + Akk. die/das), **-en** f l-ba9i.',
          ],
          ['T9aren o tgoul chno l-a7ssen', 'Tzid n-nihaya s7i7a l s-sifa'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Online bestellen & reklamieren',
      description: 'T9ra ara2 dyal z-zbayen, tsme3 reklamation f t-tilifoun, o tkteb email dyal reklamation.',
      minutes: 30,
      kind: 'skills',
      goals: ['T9ra o t9aren ara2 dyal z-zbayen', 'Tfhem l-7o9ou9: Widerruf, Gewährleistung', 'Tchki b ladab f t-tilifoun', 'Tkteb email dyal reklamation'],
      steps: [
        intro(
          'L-laptop wsel… mherres!',
          'Salma commandat l-laptop online — 70 € arkhas. Walakin mli wsel, l-écran fih khatt! Daba khassha t-reklami.',
          ['T9ra l-ara2', 'Tchki f t-tilifoun', 'Tkteb reklamation'],
        ),
        reading(
          'Kundenbewertungen',
          md`
            ★★★★★ **Lena M.:** Der beste Laptop, den ich je hatte! Sehr schnell, leicht und der Akku hält wirklich den ganzen Tag. Die Lieferung war schneller als erwartet.

            ★★★☆☆ **Tobias K.:** Gutes Gerät, aber die Tastatur ist lauter als bei meinem alten Laptop. Für den Preis ist er okay.

            ★☆☆☆☆ **Ahmed R.:** Leider ist mein Laptop schon nach zwei Wochen kaputt gegangen. Der Kundenservice war sehr langsam. Ich musste dreimal anrufen!
          `,
          {
            text: '9ra l-ara2 dyal z-zbayen.',
            glossary: [
              ['je', 'f 7yati / chi merra'],
              ['erwartet', 'mtwe99a3'],
              ['die Tastatur', 'l-clavier'],
              ['das Gerät', 'l-jihaz'],
              ['der Kundenservice', 'khidmat z-zbayen'],
            ],
          },
        ),
        choice('Chkoun 3jbou l-laptop bzaf?', ['Lena', 'Tobias', 'Ahmed'], 0),
        choice('Ach ma 3jebch Tobias?', ['L-batterie', 'L-clavier fih l-bruit ktar', 'T-taman'], 1),
        choice('Chno kan l-mochkil 3and Ahmed?', ['L-livraison t3ettlat', 'L-laptop t-khser men b3d simanatayn', 'L-laptop t9il'], 1),
        listening(
          'Beim Kundenservice',
          [
            ['Kundenservice', 'TechShop Kundenservice, mein Name ist Jansen. Wie kann ich Ihnen helfen?', 'Khidmat z-zbayen TechShop, smiyti Jansen. Kifach n9der n3awnek?'],
            ['Salma', 'Guten Tag. Ich habe letzte Woche einen Laptop bestellt. Leider hat der Bildschirm einen Fehler: Da ist ein grüner Strich.', 'Nharek sa3id. Commandit laptop s-simana li fatet. Walakin l-écran fih ghalta: kayn khatt khder.'],
            ['Kundenservice', 'Das tut mir leid. Haben Sie Ihre Bestellnummer?', 'Sme7 lina. Wach 3endek ra9m l-commande?'],
            ['Salma', 'Ja, die Nummer ist 4471-2209.', 'Ah, r-ra9m howa 4471-2209.'],
            ['Kundenservice', 'Danke. Sie können den Laptop kostenlos zurückschicken. Möchten Sie einen neuen oder lieber Ihr Geld zurück?', 'Chokran. T9dri trj3i l-laptop fabor. Bghiti wa7ed jdid wla tfeddli lflous?'],
            ['Salma', 'Ich hätte gern einen neuen, bitte. Wie lange dauert das?', 'Bghit wa7ed jdid 3afak. Ch7al ghadi yakhod d l-wa9t?'],
            ['Kundenservice', 'Wenn das Paket bei uns ankommt, schicken wir Ihnen sofort ein neues Gerät. Etwa eine Woche.', 'Mli ywsel l-colis 3endna, ghadi nsiftou lik jihaz jdid direct. Ta9riban simana.'],
          ],
        ),
        choice('Chno l-mochkil f l-laptop dyal Salma?', ['Ma kaycharjich', 'Khatt khder f l-écran', 'L-clavier mherres'], 1),
        choice('Chno khtarat Salma?', ['Lflous', 'Laptop jdid', 'Réparation'], 1),
        choice('Ch7al d l-wa9t?', ['Youm', 'Simana ta9riban', 'Chhar'], 1),
        culture(
          'L-7o9ou9 dyalek mli katchri',
          md`
            - **Widerrufsrecht:** online katchri → 3endek **14 youm** bach trj3 l-7aja **bla ma tgoul 3lach**. Bzaf d l-magasins kay3tiw 30.
            - **Gewährleistung:** 3la ay 7aja jdida 3endek **2 snin** b l-9anoun: ila t-khsrat (machi b ghaltek), l-bya3 khasso ysle7ha, ybeddelha wla yred lflous.
            - **Garantie:** zyada men l-marque (ikhtiyariya).
            - **Kassenbon / Rechnung:** 7tafed bihom!
            - **Preisvergleich:** n-nas kay9arnou l-asoum online (idealo, Geizhals…) 9bel ma ychriw.
            - **Verbraucherzentrale:** kat3awnek ila kan mochkil m3a chi charika.
          `,
        ),
        pron(
          'Auslautverhärtung: b, d, g f l-akhir',
          'F l-akhir dyal l-kelma (wla l-jouz2): **b → p**, **d → t**, **g → k**. Walakin ila zadet nihaya, kayrj3ou 3adiyin.',
          [
            ['gelb – gelbe', 'gelp – gelbe'],
            ['Rad – Räder', 'Rat – Räder'],
            ['Tag – Tage', 'Tak – Tage'],
            ['Hund – Hunde', 'Hunt – Hunde'],
            ['Der Bildschirm ist kaputt.', 'Bilt-schirm'],
          ],
        ),
        write(
          'Email dyal reklamation',
          md`
            Commanditi **jacket** online. Mli wslat: **l-lwen machi howa** (zre9a f blast k7la) o **l-fermeture mherrsa**. Kteb email l l-magasin (6–8 jmel): chno commanditi o imta, ra9m l-commande, chno l-mochkil, o chno bghiti (jacket jdida wla lflous).
          `,
          ['Sehr geehrte Damen und Herren,', 'Chno commanditi o imta (am … habe ich … bestellt)', 'Ra9m l-commande', 'L-mochkil (Leider … / Außerdem …)', 'Chno bghiti (Ich möchte … / Bitte schicken Sie …)', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nam 3. März habe ich bei Ihnen eine schwarze Winterjacke in Größe L bestellt (Bestellnummer 55812). Gestern ist das Paket angekommen. Leider ist die Jacke nicht schwarz, sondern blau. Außerdem ist der Reißverschluss kaputt. Bitte schicken Sie mir die richtige Jacke in Schwarz. Wenn das nicht möglich ist, möchte ich mein Geld zurück.\n\nMit freundlichen Grüßen\nYoussef Benali',
          60,
        ),
        graded(choice('"Widerrufsrecht" online =', ['2 snin', '14 youm', '30 d9i9a'], 1)),
        graded(choice('"Gewährleistung" b l-9anoun =', ['6 chhour', '2 snin', '10 snin'], 1)),
        graded(choice('Kifach katnte9 "Tag"?', ['Tag (b g)', 'Tak (b k)', 'Tach'], 1)),
        graded(dictation('Sme3 o kteb', 'Leider ist der Bildschirm kaputt.')),
        summary(
          [
            'Ara2 z-zbayen: **die Bewertung, das Gerät, die Lieferung, der Kundenservice**.',
            'L-7o9ou9: **14 youm Widerruf** online · **2 snin Gewährleistung**.',
            'Reklamation: **Leider … / Außerdem … / Bitte schicken Sie … / Ich möchte mein Geld zurück.**',
          ],
          ['T9aren ara2 z-zbayen', 'Tchki f t-tilifoun', 'Tkteb reklamation'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 6',
      description: 'Muraja3a: l-mo9arana, Superlativ, nihayat s-sifa — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Komparativ o n-nihayat', 'T9aren o tchki', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Komparativ, Superlativ, als/wie, o n-nihayat dyal s-sifa men b3d der/die/das.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **billiger als** ≠ **so billig wie**
            - **gut – besser – am besten · viel – mehr – am meisten · gern – lieber – am liebsten**
            - **der/die/das + sifa:** -e (Nom. mofrad, Akk. die/das) · -en (l-ba9i)

            | | m | f | n | jam3 |
            |---|---|---|---|---|
            | Nom. | -e | -e | -e | -en |
            | Akk. | **-en** | -e | -e | -en |
            | Dat. | -en | -en | -en | -en |
          `,
        ),
        dialogue(
          'Welches Handy?',
          [
            ['Olena', 'Ich brauche ein neues Handy. Welches findest du am besten?', 'Khassni tilifoun jdid. Ach men wa7ed kanchoufi a7ssen?'],
            ['Salma', 'Das blaue hier hat die beste Kamera. Aber es ist auch am teuersten.', 'Had z-zre9 fih a7ssen caméra. Walakin howa ta l-aghla.'],
            ['Olena', 'Und das weiße?', 'O l-byed?'],
            ['Salma', 'Das weiße ist 200 Euro billiger und fast so gut wie das blaue.', 'L-byed arkhas b 200 euro o 9rib mzyan b7al z-zre9.'],
            ['Olena', 'Dann nehme ich das weiße Handy. Für mich ist der Preis wichtiger als die Kamera.', 'Iwa ghadi nakhod t-tilifoun l-byed. 3endi t-taman a mohim men l-caméra.'],
          ],
        ),
        choice('Chno khtarat Olena?', ['T-tilifoun z-zre9', 'T-tilifoun l-byed'], 1),
        choice('3lach?', ['L-caméra a7ssen', 'T-taman a mohim 3endha', 'L-lwen'], 1),
        gap('Kemmel', 'Das weiß___ Handy ist fast so gut ___ das blaue.', ['e', 'wie']),
        match('Rbet', [
          ['gut', 'besser'],
          ['viel', 'mehr'],
          ['gern', 'lieber'],
          ['hoch', 'höher'],
          ['alt', 'älter'],
        ]),
        speak(
          'Role-play: t9aren',
          'Sa7bek bgha ychri bechklita. T9arnou jouj: wa7da jdida b 600 € o wa7da msta3mla b 150 €. 3tih ra2yek b l-Komparativ o s-Superlativ.',
          ['Das neue Fahrrad ist schneller und leichter.', 'Aber das gebrauchte ist viel billiger.', 'Ich finde das gebrauchte Fahrrad am besten für dich.'],
        ),
        graded(choice('"Tee trinke ich ___ als Kaffee."', ['gerner', 'lieber', 'mehr gern'], 1)),
        graded(gap('Kemmel', 'Der Rhein ist länger ___ der Main.', 'als')),
        graded(gap('Kemmel', 'Im Dezember ist es ___ als im Mai. (kalt)', 'kälter|kaelter')),
        graded(choice('Superlativ dyal "heiß"?', ['am heißsten', 'am heißesten', 'am heißten'], 1)),
        graded(choice('"Ich nehme den ___ Tisch." (rund)', ['runde', 'runden'], 1)),
        graded(choice('"Die ___ Lampe ist schön." (neu)', ['neue', 'neuen'], 0)),
        graded(gap('Kemmel n-nihaya', 'Wir wohnen in dem groß___ Haus an der Ecke.', 'en')),
        graded(choice('Ila 3endek mochkil m3a charika katmchi l…', ['Verbraucherzentrale', 'Bürgeramt', 'Polizei'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Had t-tilifoun ghali bzaf men hadak.', ['Dieses Handy ist viel teurer als das.', 'Das Handy ist viel teurer als das andere.', 'Dieses Handy ist viel teurer als das andere.'])),
        graded(dictation('Sme3 o kteb', 'Der kleine Laptop ist am leichtesten.')),
        summary(
          [
            'Daba t9der t9aren, tchri online o tchki b ladab.',
            'F l-unité 7: l-médias o l-wa9t l-7orr — **nihayat s-sifa men b3d ein / kein / mein** o bla article, o **Was für ein …?**',
          ],
          ['T9aren b als / wie', 'Tkhdem s-Superlativ', 'Tzid n-nihayat men b3d der/die/das', 'Tkteb reklamation'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
