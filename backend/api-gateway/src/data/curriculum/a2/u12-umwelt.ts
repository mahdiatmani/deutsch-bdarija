import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 12,
  title: 'Umwelt & Zukunft',
  description: "L-bi2a f l-7ayat l-yawmiya, t-t9s o l-mounakh, l-mchari3 l-moustaqbaliya — b l-Futur I, n-Deklination, o \"Lukas' Fahrrad / das Fahrrad von Lukas\".",
  icon: 'eco',
  objectives: [
    'Thder 3la l-7ifad 3la l-bi2a f l-7ayat l-yawmiya',
    'Tfhem l-Mülltrennung o l-Pfand',
    'Thder 3la l-moustaqbal b l-Futur I: "Ich werde …"',
    'Tkhdem n-Deklination: der Kollege → den Kollegen',
    'Tgoul l-milkiya: "Salmas Laptop / der Laptop von Salma"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Umweltschutz im Alltag',
      description: 'L-bi2a, z-zbel, l-energie o l-kalimat dyal l-mounakh.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-bi2a', 'Thder 3la chno katdir l l-bi2a', 'T9tare7 7loul'],
      steps: [
        intro(
          'L-WG l-khadra',
          'Jonas, l-coloc l-9dim dyal Salma, kayn f jam3iya dyal l-bi2a. Std3a Salma o Youssef l **Repair-Café** (blasa fin n-nas kayslle7ou l-7wayej bla ma yrmiwhom). Kaythedrou 3la chno kaydir kol wa7ed l l-bi2a.',
          ['Tsemmi l-bi2a', 'Thder 3la l-3adat', 'T9tare7'],
        ),
        dialogue(
          'Im Repair-Café',
          [
            ['Jonas', 'Schön, dass ihr da seid! Hier reparieren wir Sachen, statt sie wegzuwerfen.', 'Zwin jitou! Hna kanslle7ou l-7wayej f blast ma nrmiwhom.'],
            ['Youssef', 'Gute Idee. Mein Toaster ist kaputt. Kann man den reparieren?', 'Fikra zwina. L-grille-pain dyali mherres. Wach kayslle7?'],
            ['Jonas', 'Bestimmt. Was macht ihr sonst für die Umwelt?', 'Akid. O chno kaddirou akhor l l-bi2a?'],
            ['Salma', 'Ich fahre fast immer mit dem Fahrrad und kaufe Gemüse auf dem Markt, ohne Plastik.', 'Kansou9 tagriban dima l-bechklita o kanchri l-khodra f s-souk, bla plastique.'],
            ['Youssef', 'Und ich trenne den Müll. Am Anfang war das so kompliziert! Aber jetzt kenne ich alle Tonnen.', 'O ana kanfre9 z-zbel. F l-bidaya kan m3e99ed bzaf! Walakin daba kan3ref ga3 l-poubelles.'],
            ['Jonas', 'Super. In Zukunft werden wir alle noch mehr tun müssen. Der Klimawandel ist schon da.', 'Mzyan. F l-moustaqbal ghadi ykhassna ndirou ktar. T-taghayyor l-mounakhi rah ja.'],
            ['Salma', 'In Marokko sieht man das auch: Es regnet immer weniger.', 'F l-Maghrib kanchoufouh ta: ch-chta kat-9el kol 3am.'],
          ],
        ),
        vocab('Umwelt — L-bi2a', [
          ['die Umwelt', 'l-bi2a', ''],
          ['der Umweltschutz', 'l-7ifad 3la l-bi2a', ''],
          ['das Klima / der Klimawandel', 'l-mounakh / t-taghayyor l-mounakhi', ''],
          ['der Müll', 'z-zbel', ''],
          ['den Müll trennen', 'fre9 z-zbel', ''],
          ['wegwerfen', 'rma (z-zbel)', ''],
          ['reparieren', 'slle7', ''],
          ['recyceln', 'recycler', ''],
          ['die Energie / der Strom', 'l-énergie / d-dow (l-kahraba)', ''],
          ['sparen', 'wfer', '', ['Wir sparen Strom.', 'Kanwfrou d-dow.']],
          ['die Verpackung', 'l-ghlaf (emballage)', 'die Verpackungen'],
          ['umweltfreundlich', 'mzyan l l-bi2a', ''],
          ['die Hitze / die Dürre', 's-sehd / j-jfaf', ''],
          ['das Hochwasser', 'l-fayadan', ''],
        ]),
        explain(
          'Thder 3la l-bi2a',
          md`
            | Bach… | Katgoul |
            |---|---|
            | tgoul chno katdir | "Ich fahre mit dem Rad, **statt** mit dem Auto zu fahren." — "Ich kaufe Produkte **ohne** Verpackung." |
            | t9tare7 | "Man könnte / sollte weniger Fleisch essen." |
            | tgoul ra2yek | "Ich finde, dass jeder etwas tun kann." |
            | t3ber 3la l-9ala9 | "Ich mache mir Sorgen um das Klima." |

            **weniger ↔ mehr:** "weniger Plastik, mehr Fahrrad".
          `,
          [
            ['Man sollte das Licht ausmachen, wenn man den Raum verlässt.', 'Khass ttfi d-dow mli tkhrej men l-bit.'],
            ['Ich mache mir Sorgen um die Zukunft.', 'Kanthmm 3la l-moustaqbal.'],
          ],
        ),
        match('Rbet', [
          ['der Müll', 'z-zbel'],
          ['wegwerfen', 'rma'],
          ['die Dürre', 'j-jfaf'],
          ['der Strom', 'l-kahraba'],
          ['die Verpackung', 'l-ghlaf'],
        ]),
        choice('Chno howa Repair-Café?', ['Café ghali', 'Blasa fin kayslle7ou l-7wayej', 'Magasin'], 1),
        choice('Chno katdir Salma?', ['Katfre9 z-zbel', 'Katsou9 l-bechklita o katchri bla plastique', 'Katslle7 l-7wayej'], 1),
        gap('Kemmel', 'Ich mache mir Sorgen ___ das Klima.', 'um'),
        order('Rtteb', 'Man sollte weniger Plastik kaufen.'),
        speak(
          'Chno katdir nta l l-bi2a?',
          'Goul 3 7wayej katdirhom l l-bi2a, o 9tare7 7aja wa7da khass n-nas ydirouha.',
          ['Ich trenne den Müll.', 'Ich fahre oft mit dem Bus.', 'Ich kaufe wenig Plastik.', 'Man sollte mehr Sachen reparieren.'],
        ),
        graded(choice('"der Klimawandel" howa…', ['t-taghayyor l-mounakhi', 'l-énergie', 's-sehd'], 0)),
        graded(choice('"umweltfreundlich" kat3ni…', ['mzyan l l-bi2a', 'ghali', 'jdid'], 0)),
        graded(gap('Kemmel', 'Wir müssen den Müll ___. (fre9)', 'trennen')),
        graded(translate("Terjem l l'Almaniya", 'Kanwfrou d-dow (l-kahraba).', ['Wir sparen Strom.', 'Wir sparen Energie.'])),
        summary(
          [
            'L-bi2a: **die Umwelt, der Klimawandel, der Müll, trennen, wegwerfen, reparieren, Strom sparen, umweltfreundlich**.',
            '**Man sollte … / Ich mache mir Sorgen um …**',
          ],
          ['Thder 3la l-bi2a', 'T9tare7 7loul'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Das wird schon! — Futur I, n-Deklination & Genitiv',
      description: 'L-Futur I (werden + infinitiv), s-smiyat li katzid -n (der Kollege → den Kollegen), o l-milkiya b -s wla von.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir l-Futur I o t3ref imta', 'Tkhdem n-Deklination', 'Tgoul l-milkiya: Salmas Laptop / der Laptop von Salma'],
      steps: [
        intro(
          '"In Zukunft werden wir mehr tun müssen."',
          md`
            Jonas 9al "Wir **werden** mehr tun **müssen**". F A2 t3llemti belli f l-hedra l-moustaqbal ghaliban b l-**Präsens** ("Morgen fahre ich"). Daba nchoufou **l-Futur I** — o jouj d l-7wayej sghar walakin mohimmin: **n-Deklination** o **l-milkiya**.
          `,
          ['Futur I', 'n-Deklination', 'Genitiv -s / von'],
        ),
        explain(
          'L-Futur I: werden + infinitiv',
          md`
            > Ich **werde** nächstes Jahr die Ausbildung **beenden**.
            > Es **wird** morgen **regnen**.

            **werden** (ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden) f l-blasa 2, **l-infinitiv** f l-akhir.

            **Imta katkhdmou?**
            1. **Tanabbo2 / prognose:** "Morgen **wird** es **regnen**." "Die Temperaturen **werden steigen**."
            2. **Wa3d / 9arar 9wi:** "Ich **werde** dir **helfen**, versprochen!"
            3. **Mchari3** (rasmi chwiya): "Wir **werden** nächstes Jahr **heiraten**."

            Ila kayn kelma dyal l-wa9t (morgen, nächste Woche), l-**Präsens** kafi o 3adi bzaf: "Morgen **fahre** ich nach Bonn."

            ⚠️ **werden** 3endou 3 ma3ani: Futur (+ infinitiv), Passiv (+ Partizip II), o *wella* (+ sifa/smiya): "Er **wird** Arzt." (*ghadi ywelli tbib*)
          `,
          [
            ['In 30 Jahren wird es in Marokko noch heißer sein.', 'Men daba 30 3am ghadi ykoun l-Maghrib s-skhan ktar.'],
            ['Ich werde dich morgen anrufen.', 'Ghadi nttasel bik ghedda (wa3d).'],
          ],
        ),
        choice('"werden" f "Das Paket wird geliefert" howa…', ['Futur', 'Passiv', 'wella'], 1),
        choice('"werden" f "Morgen wird es schneien" howa…', ['Futur', 'Passiv', 'wella'], 0),
        gap('Kemmel', 'Ich ___ dir morgen das Buch bringen. (werden)', 'werde'),
        gap('Kemmel', 'Wir ___ nächstes Jahr umziehen. (werden)', 'werden'),
        order('Rtteb', 'Die Temperaturen werden weiter steigen.'),
        explain(
          'n-Deklination: s-smiyat li katzid -n',
          md`
            Chi smiyat **masculin** kayzidou **-(e)n** f **kolchi** men ghir l-Nominativ mofrad:

            | | Nominativ | Akkusativ | Dativ |
            |---|---|---|---|
            | mofrad | der Kolleg**e** | den Kolleg**en** | dem Kolleg**en** |
            | mofrad | der Student | den Student**en** | dem Student**en** |

            **Chkoun houma?**
            - Masculin li kaysaliw b **-e** (ghaliban n-nas o l-7ayawanat): der Kollege, der Junge, der Kunde, der Neffe, der Löwe
            - **-ent, -ant, -ist** (n-nas): der Student, der Präsident, der Polizist, der Tourist
            - Wa7din khassin: **der Herr** (→ dem Herr**n**), **der Nachbar** (→ den Nachbar**n**), **der Mensch** (→ den Mensch**en**)

            > Ich helfe **dem Kunden**. · Kennst du **den neuen Kollegen**? · Ich spreche mit **Herrn** Krause.
          `,
          [
            ['Ich frage den Polizisten nach dem Weg.', 'Kansowwel l-bolisi 3la t-tri9.'],
            ['Wir haben einen neuen Nachbarn.', '3endna jar jdid.'],
          ],
          'F l-bra: "Sehr geehrter **Herr** Krause" (Nominativ) walakin "an **Herrn** Krause" (l-adresse, Akkusativ).',
        ),
        choice('"Ich kenne den neuen ___."', ['Kollege', 'Kollegen'], 1),
        gap('Kemmel', 'Die Ärztin hilft dem Patient___.', 'en'),
        gap('Kemmel', 'Haben Sie Herr___ Becker gesehen?', 'n'),
        explain(
          'Dyal chkoun? Genitiv -s wla von',
          md`
            **1. M3a s-smiyat dyal n-nas:** smiya + **-s** (bla apostrophe!) 9bel l-7aja:
            > **Salmas** Laptop · **Lukas'** Fahrrad (smiya katsali b -s → ghir ') · **Mamas** Kuchen

            **2. "von" + Dativ** (f l-hedra, m3a kolchi):
            > der Laptop **von** Salma · das Auto **von** meinem Vater · die Adresse **von** der Firma

            **3. Genitiv b l-article** (f l-kitaba, B1): die Adresse **der** Firma · das Auto **meines** Vaters — ghadi nchoufouh f B1.

            F Darija kangoulou *l-laptop dyal Salma* — f l'Almaniya: **Salmas Laptop** wla **der Laptop von Salma**.
          `,
          [
            ['Das ist Youssefs Toaster.', 'Hada l-grille-pain dyal Youssef.'],
            ['Das ist die Wohnung von meinem Bruder.', 'Hadi d-dar dyal khouya.'],
          ],
        ),
        choice('Kifach tgoul *t-tilifoun dyal Olena*?', ['Olena Handy', 'Olenas Handy', "Olena's Handy"], 1, 'F l\'Almaniya bla apostrophe.'),
        gap('Kemmel', 'Das ist das Fahrrad ___ meiner Schwester.', 'von'),
        translate("Terjem l l'Almaniya", 'Ghadi n3awnek ghedda (wa3d).', ['Ich werde dir morgen helfen.', 'Morgen werde ich dir helfen.']),
        graded(gap('Kemmel', 'Es ___ morgen wärmer werden.', 'wird')),
        graded(choice('Ina jomla Futur?', ['Er wird Lehrer.', 'Er wird morgen kommen.', 'Er wird gefragt.'], 1)),
        graded(choice('"Ich frage den ___."', ['Polizist', 'Polizisten'], 1)),
        graded(gap('Kemmel', 'Wir sprechen mit unserem neuen Nachbar___.', 'n')),
        graded(choice('*s-sbbat dyal Mehmet*:', ['Mehmets Schuhe', "Mehmet's Schuhe", 'Mehmet Schuhe'], 0)),
        graded(gap('Kemmel', 'Das ist die Tasche ___ Frau Weber.', 'von')),
        graded(translate("Terjem l l'Almaniya (Futur)", 'Ghadi tti7 ch-chta ghedda.', ['Es wird morgen regnen.', 'Morgen wird es regnen.'])),
        summary(
          [
            '**Futur I:** werden + infinitiv — tanabbo2, wa3d, mchari3. (Morgen + Präsens ta s7i7.)',
            '**werden:** Futur (+ inf), Passiv (+ Partizip II), *wella* (+ sifa / smiya).',
            '**n-Deklination:** der Kollege → den / dem Kolleg**en** · Herr → Herr**n** · Student → Student**en**.',
            'Milkiya: **Salmas** Laptop / der Laptop **von** Salma.',
          ],
          ['Thder 3la l-moustaqbal', 'Tkhdem n-Deklination', 'Tgoul dyal chkoun'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Mülltrennung, Pfand & die Zukunft',
      description: 'T9ra dalil dyal z-zbel, tsme3 nachrat t-t9s, o tkteb 3la l-moustaqbal dyalek.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem l-Mülltrennung o l-Pfand', 'Tfhem nachrat t-t9s', 'Tkteb nass 3la l-moustaqbal'],
      steps: [
        intro(
          'Fin kanlou7 hadi?',
          'Youssef 3awnou f l-bidaya dalil d z-zbel. Daba ghadi n9rawh, nsem3ou n-nachra dyal t-t9s, o nkteb 3la l-moustaqbal dyalna.',
          ['T9ra d-dalil', 'Tsme3 n-nachra', 'Tkteb'],
        ),
        reading(
          'Welcher Müll gehört wohin?',
          md`
            **Gelbe Tonne / Gelber Sack:** Verpackungen aus Plastik und Metall, z. B. Joghurtbecher, Dosen, Plastikfolie.
            **Blaue Tonne:** Papier und Karton, z. B. Zeitungen, Kartons, Hefte.
            **Braune Tonne (Biotonne):** Essensreste, Obst- und Gemüseschalen, Kaffeesatz, Gartenabfälle.
            **Schwarze/graue Tonne (Restmüll):** alles andere, z. B. Windeln, Staubsaugerbeutel, kaputtes Geschirr.
            **Glascontainer:** Flaschen und Gläser – nach Farben getrennt (weiß, grün, braun). Bitte nicht zwischen 20 und 7 Uhr einwerfen!

            **Pfandflaschen** gehören nicht in den Müll: Bringen Sie sie zurück in den Supermarkt. Sie bekommen 8 bis 25 Cent pro Flasche zurück.
            **Batterien und Elektrogeräte** werden extra gesammelt – im Supermarkt oder beim Wertstoffhof.
          `,
          {
            text: '9ra d-dalil.',
            glossary: [
              ['der Becher', 'l-kas (plastique)'],
              ['die Dose', 'l-3elba / l-canette'],
              ['die Schale', 'l-9chra'],
              ['die Windel', 'l-couche'],
              ['der Wertstoffhof', 'markaz r-recyclage'],
            ],
          },
        ),
        choice('Fin kat7ett l-9choura d l-banan?', ['Gelbe Tonne', 'Biotonne', 'Blaue Tonne'], 1),
        choice('Fin kat7ett l-kartoun?', ['Blaue Tonne', 'Restmüll', 'Glascontainer'], 0),
        choice('Fin kat7ett l-batteries?', ['Restmüll', 'F s-supermarché wla Wertstoffhof', 'Gelbe Tonne'], 1),
        choice('Imta mamnou3 trmi l-9ra3i f l-Glascontainer?', ['Men 20 l 7', 'Nhar s-sebt', 'F s-sba7'], 0),
        listening(
          'Der Wetterbericht',
          [
            ['Radio', 'Und jetzt das Wetter für Nordrhein-Westfalen: Morgen wird es sonnig und sehr heiß, mit bis zu 36 Grad.', 'Daba t-t9s dyal Nordrhein-Westfalen: ghedda ghadi ykoun ch-chems o s-sehd bzaf, 7tal 36 daraja.'],
            ['Radio', 'Am Nachmittag können sich Gewitter bilden. Achtung: Es kann starken Regen und Hagel geben.', 'F l-3chiya ymken y-tkounou l-3wasef. Intibah: ymken tkoun ch-chta l-9wiya o t-tbrouri.'],
            ['Radio', 'Am Wochenende wird es kühler: nur noch 22 Grad. Die Experten sagen, dass solche Hitzewellen in Zukunft häufiger werden.', 'F l-weekend ghadi ybred l-7al: ghir 22 daraja. L-khobara kaygoulou belli had l-mawjat dyal s-sehd ghadi tkter f l-moustaqbal.'],
          ],
        ),
        choice('Ch7al d d-daraja ghedda?', ['22', '30', '36'], 2),
        choice('Chno ymken y-w9e3 f l-3chiya?', ['T-telj', 'L-3wasef o t-tbrouri', 'Ch-chems'], 1),
        choice('Chno kaygoulou l-khobara?', ['Mawjat s-sehd ghadi tkter', 'Ghadi tbred l-7al dima', 'Ma kayn walou'], 0),
        culture(
          'L-bi2a f Almaniya',
          md`
            - **Pfand:** 0,25 € 3la l-9ra3i o l-canettes dyal mra wa7da, 0,08–0,15 € 3la l-9ra3i li kayrj3ou (Mehrweg). Rjje3hom f s-supermarché (*Pfandautomat*).
            - **Mülltrennung** b l-9anoun — ila ma fre9tich mzyan, l-Hausverwaltung ymken t-tleb mennkom tkhellsou ktar.
            - **Sperrmüll:** l-meubles l-kbar: khass ttleb rendez-vous (ghaliban fabor merra f l-3am).
            - **Fridays for Future:** 7araka dyal ch-chabab l l-mounakh.
            - **Energiesparen:** n-nas kayftou l-chauffage o d-dow — l-énergie ghalia f Almaniya.
          `,
        ),
        pron(
          'Muraja3a: l-7rouf s-s3ab',
          'Jme3 kolchi li t3llemti f A2: ü / ö, ch (ich / ach), r, -ig, z, st / sp.',
          [
            ['Zukunft – Müll – Tüte', 'ts – ü – ü'],
            ['Klimawandel – wichtig – möglich', 'ich-Laut'],
            ['Umweltschutz – Strom – sparen', 'scht – schp'],
            ['Ich werde den Müll trennen.', 'kolchi m3a ba3d'],
          ],
        ),
        write(
          'Mon moustaqbal: f 10 snin',
          'Kteb nass (7–9 jmel): kifach ghadi tkoun 7ayatek men daba 10 snin? (khedma, sakan, 3a2ila, l-bi2a). Khdem **l-Futur I** (ich werde …) 3la l-a9al 4 merrat, o jomla wa7da b **wenn** o jomla wa7da b **weil**.',
          ['Futur I x4', 'L-khedma', 'Fin ghadi tsken', 'L-3a2ila', 'L-bi2a (Ich werde …)', 'wenn / weil'],
          'In zehn Jahren werde ich als Pflegefachmann in einem großen Krankenhaus arbeiten. Vielleicht werde ich auch Stationsleiter. Ich werde mit meiner Familie in einer Wohnung mit Balkon wohnen, weil wir Pflanzen lieben. Wenn wir genug Geld haben, werden wir jeden Sommer nach Marokko fliegen. Für die Umwelt werde ich kein Auto kaufen, sondern mit dem Fahrrad fahren. Ich hoffe, dass die Welt dann ein bisschen grüner ist.',
          60,
        ),
        graded(choice('Fin kat7ett l-couche (Windel)?', ['Biotonne', 'Restmüll', 'Gelbe Tonne'], 1)),
        graded(choice('Pfand 3la 9er3a plastique d mra wa7da:', ['0,08 €', '0,25 €', '1 €'], 1)),
        graded(choice('"das Gewitter" howa…', ['l-3asifa (b r-r3d)', 't-telj', 'ch-chems'], 0)),
        graded(dictation('Sme3 o kteb', 'In Zukunft werden wir weniger Auto fahren.')),
        summary(
          [
            'Z-zbel: **Gelbe Tonne (plastique), Blaue (papier), Biotonne, Restmüll, Glascontainer** — o **Pfand** f s-supermarché.',
            'T-t9s: **sonnig, heiß, das Gewitter, der Hagel, kühler, die Hitzewelle**.',
          ],
          ['Tfre9 z-zbel', 'Tfhem nachrat t-t9s', 'Tkteb 3la l-moustaqbal'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 12',
      description: 'Muraja3a: l-bi2a, Futur I, n-Deklination, l-milkiya — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Futur o n-Deklination', 'Thder 3la l-bi2a o l-moustaqbal', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-bi2a, Futur I, n-Deklination, o Salmas / von.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Futur I:** Ich **werde** morgen **kommen**.
            - **werden** + inf = Futur · + Partizip II = Passiv · + sifa/smiya = wella.
            - **n-Deklination:** den Kollegen, dem Studenten, Herrn Müller, den Nachbarn.
            - **Salmas** Buch = das Buch **von** Salma.
          `,
        ),
        dialogue(
          'Pläne für die Zukunft',
          [
            ['Olena', 'Was wirst du nach der Ausbildung machen, Youssef?', 'Chno ghadi dir men b3d l-Ausbildung, Youssef?'],
            ['Youssef', 'Ich werde wahrscheinlich im Krankenhaus bleiben. Und vielleicht werde ich später studieren.', 'Ghaliban ghadi nb9a f s-sbitar. O ymken men b3d n9ra f l-jami3a.'],
            ['Olena', 'Und Salma?', 'O Salma?'],
            ['Youssef', 'Salmas Plan ist klar: Sie wird ihren Bachelor machen und dann bei WebSolutions arbeiten.', 'L-plan dyal Salma wad7: ghadi tdir l-licence o men b3d tkhdem f WebSolutions.'],
            ['Olena', 'Und ich werde Lehrerin – hoffentlich auch hier in Deutschland!', 'O ana ghadi nwelli oustada — nchallah ta hna f Almaniya!'],
          ],
        ),
        choice('Chno ghadi ydir Youssef ghaliban?', ['Yb9a f s-sbitar', 'Yrje3 l l-Maghrib', 'Ybeddel l-khedma'], 0),
        choice('"Ich werde Lehrerin." — "werde" hna kat3ni…', ['Futur', 'wella (ghadi nwelli)', 'Passiv'], 1),
        gap('Kemmel', '___ Plan ist klar. Sie ___ ihren Bachelor machen.', ['Salmas', 'wird']),
        match('Rbet', [
          ['der Kollege', 'den Kollegen'],
          ['der Herr', 'den Herrn'],
          ['der Student', 'den Studenten'],
          ['der Nachbar', 'den Nachbarn'],
        ]),
        speak(
          'Role-play: l-moustaqbal',
          'Sa7bek kaysowlek: *Was wirst du nächstes Jahr machen? Wo wirst du in fünf Jahren wohnen? Was wirst du für die Umwelt tun?* — Jaweb b l-Futur I.',
          ['Nächstes Jahr werde ich B1 machen.', 'In fünf Jahren werde ich in Hamburg wohnen.', 'Ich werde mehr mit dem Fahrrad fahren.'],
        ),
        graded(gap('Kemmel', 'Wann ___ du mit dem Studium fertig sein? (werden)', 'wirst')),
        graded(choice('Ina jomla Passiv?', ['Es wird kalt.', 'Der Müll wird getrennt.', 'Ich werde kommen.'], 1)),
        graded(choice('"Der Arzt fragt den ___."', ['Patient', 'Patienten'], 1)),
        graded(gap('Kemmel', 'Ich habe einen Brief an Herr___ Krause geschrieben.', 'n')),
        graded(choice('*l-bit dyal Lukas*:', ["Lukas' Zimmer", 'Lukass Zimmer', 'Lukas Zimmer'], 0)),
        graded(choice('Fin kat7ett l-jarida l-9dima?', ['Blaue Tonne', 'Gelbe Tonne', 'Biotonne'], 0)),
        graded(choice('"die Dürre" hiya…', ['l-fayadan', 'j-jfaf', 's-sehd'], 1)),
        graded(gap('Kemmel', 'Wir müssen weniger Plastik ___. (rma)', 'wegwerfen')),
        graded(translate("Terjem l l'Almaniya", 'Ghadi nwelli tbib.', ['Ich werde Arzt.', 'Ich werde Ärztin.'])),
        graded(dictation('Sme3 o kteb', 'Ich werde den neuen Kollegen fragen.')),
        summary(
          [
            'Mabrouk! Kmmelti l-unités dyal A2. Daba t9der tt3amel m3a l-7ayat l-yawmiya f Almaniya b jmel twila o tafasil.',
            'L-unité 13: **Prüfungstraining A2** (Goethe-Zertifikat A2 / DTZ).',
          ],
          ['Thder 3la l-bi2a', 'Tkhdem l-Futur I', 'Tkhdem n-Deklination', 'Tgoul l-milkiya'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
