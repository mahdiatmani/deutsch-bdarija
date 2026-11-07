import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 8,
  title: 'In der Stadt',
  description: "L-blayes f l-mdina, t-tri9, l-bus o t-tram, l-billet — o l-Dativ: im Park, mit dem Bus, zum Bahnhof.",
  icon: 'directions_bus',
  objectives: [
    'Tsemmi l-blayes f l-mdina o l-mouwasalat',
    'Tsowwel 3la t-tri9 o tfhem l-jawab',
    'Tgoul fin kayn chi 7aja: "im Park", "an der Haltestelle"',
    'Tkhdem l-Dativ m3a in, an, auf, mit, zu',
    'Tchri billet o tfhem l-i3lanat',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wie komme ich zum Bahnhof?',
      description: 'L-blayes, l-mouwasalat, o kifach tsowwel 3la t-tri9.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-blayes f l-mdina', 'Tsowwel 3la t-tri9 b ladab', 'Tfhem: geradeaus, links, rechts…'],
      steps: [
        intro(
          'Rendez-vous f l-Ausländerbehörde',
          'Youssef 3endou rendez-vous f **l-Ausländerbehörde** (l-idara dyal l-ajanib) bach ydir l-carte de séjour. Ma3rfch t-tri9. Kaysowwel chi mra f z-zen9a.',
          ['Tsemmi l-blayes', 'Tsowwel 3la t-tri9', 'Tfhem l-jawab'],
        ),
        dialogue(
          'Entschuldigung, wo ist …?',
          [
            ['Youssef', 'Entschuldigung, wie komme ich zur Ausländerbehörde?', 'Sme7 liya, kifach nwsel l l-Ausländerbehörde?'],
            ['Passantin', 'Zur Ausländerbehörde? Das ist nicht weit. Gehen Sie hier geradeaus bis zur Ampel.', 'L l-Ausländerbehörde? Machi b3ida. Sir nichan hna 7tal d-dow l-a7mer.'],
            ['Youssef', 'Bis zur Ampel, okay.', '7tal d-dow l-a7mer, wakha.'],
            ['Passantin', 'An der Ampel gehen Sie links. Dann nehmen Sie die zweite Straße rechts.', 'F d-dow dour 3la l-yser. Men b3d khoud z-zen9a t-tanya 3la l-imin.'],
            ['Youssef', 'Die zweite Straße rechts …', 'Z-zen9a t-tanya 3la l-imin…'],
            ['Passantin', 'Genau. Die Ausländerbehörde ist dann auf der linken Seite, neben der Post.', 'Bdebt. L-Ausländerbehörde ghadi tkoun 3la l-yser, 7da l-bosta.'],
            ['Youssef', 'Ist das weit? Kann ich zu Fuß gehen?', 'Wach b3ida? N9der nmchi 3la rjliya?'],
            ['Passantin', 'Ja, das sind nur zehn Minuten zu Fuß.', 'Ah, ghir 10 d9aye9 3la r-rjlin.'],
            ['Youssef', 'Vielen Dank!', 'Chokran bzaf!'],
            ['Passantin', 'Gern geschehen!', 'Bla jmil!'],
          ],
        ),
        vocab('In der Stadt — L-blayes', [
          ['der Bahnhof', 'lagar (mahattat t-tran)', 'die Bahnhöfe'],
          ['die Haltestelle', 'l-arrêt (dyal l-bus / t-tram)', 'die Haltestellen'],
          ['die Post', 'l-bosta', ''],
          ['die Bank', 'l-banka', 'die Banken'],
          ['die Apotheke', 'l-farmasyan (pharmacie)', 'die Apotheken'],
          ['das Krankenhaus', 's-sbitar', 'die Krankenhäuser'],
          ['das Rathaus', 'l-baladiya', ''],
          ['die Moschee', 'l-jame3', 'die Moscheen'],
          ['die Kirche', 'l-kanissa', 'die Kirchen'],
          ['der Park', 'l-jarda (park)', 'die Parks'],
          ['das Kino', 's-sinima', 'die Kinos'],
          ['die Ampel', 'd-dow l-a7mer (feu)', 'die Ampeln'],
          ['die Kreuzung', 'l-carrefour', 'die Kreuzungen'],
          ['die Straße', 'z-zen9a', 'die Straßen'],
          ['der Platz', 's-sa7a / l-blasa', 'die Plätze'],
        ]),
        vocab('Verkehrsmittel — L-mouwasalat', [
          ['der Bus', 'l-bus / t-tobis', 'die Busse'],
          ['die U-Bahn', 'l-métro (t7t l-ard)', ''],
          ['die S-Bahn', 't-tran d l-mdina', ''],
          ['die Straßenbahn', 't-tram', ''],
          ['der Zug', 't-tran', 'die Züge'],
          ['das Taxi', 't-taxi', ''],
          ['das Fahrrad / das Rad', 'l-bechklita', ''],
          ['das Auto', 't-tomobil', ''],
          ['zu Fuß', '3la r-rjlin', '', ['Ich gehe zu Fuß.', 'Kanmchi 3la rjliya.']],
          ['einsteigen / aussteigen', 'tle3 / nzel (men l-bus)', ''],
          ['umsteigen', 'beddel (l-bus / t-tran)', ''],
        ]),
        explain(
          'T-tri9: tsowwel o tfhem',
          md`
            **Tsowwel:**
            - "Entschuldigung, wie komme ich **zum** Bahnhof / **zur** Post?"
            - "Wo ist hier eine Apotheke?" — "Gibt es hier eine Bank?"
            - "Ist das weit?" — "Wie lange dauert das?"

            **L-jawab:**

            | Almaniya | Darija |
            |---|---|
            | geradeaus | nichan |
            | (nach) links / rechts | 3la l-yser / 3la l-imin |
            | die erste / zweite Straße links | z-zen9a l-oula / t-tanya 3la l-yser |
            | bis zur Ampel / Kreuzung | 7tal d-dow / l-carrefour |
            | an der Ampel | f d-dow |
            | auf der linken / rechten Seite | 3la l-jiha l-yesriya / l-yeminiya |
            | neben | 7da |
            | in der Nähe | 9rib |
            | weit ↔ nah | b3id ↔ 9rib |
          `,
          [
            ['Gehen Sie geradeaus und dann rechts.', 'Sir nichan o men b3d 3la l-imin.'],
            ['Die Apotheke ist neben der Bank.', 'L-pharmacie 7da l-banka.'],
            ['Das ist ganz in der Nähe.', 'Hadi 9riba bzaf.'],
          ],
        ),
        match('Rbet', [
          ['geradeaus', 'nichan'],
          ['links', '3la l-yser'],
          ['rechts', '3la l-imin'],
          ['die Ampel', 'd-dow l-a7mer'],
          ['weit', 'b3id'],
        ]),
        choice('Fin katchri d-dwa?', ['in der Apotheke', 'in der Post', 'im Rathaus'], 0),
        choice('Fin katsenna l-bus?', ['an der Haltestelle', 'an der Ampel', 'im Bahnhof'], 0),
        order('Rtteb', 'Wie komme ich zum Bahnhof?'),
        speak(
          'Sowwel 3la t-tri9',
          'Nta f z-zen9a. Sowwel chi wa7ed b ladab: kifach twsel l **l-bosta**, wach b3ida, o chkkerou.',
          ['Entschuldigung, wie komme ich zur Post?', 'Ist das weit?', 'Vielen Dank!'],
        ),
        graded(choice('"die Haltestelle" hiya…', ['l-arrêt', 'lagar', 'l-carrefour'], 0)),
        graded(choice('"nichan" b l\'Almaniya?', ['links', 'geradeaus', 'rechts'], 1)),
        graded(choice('Ina sou2al s7i7 b ladab?', ['Wo Bahnhof?', 'Entschuldigung, wo ist der Bahnhof?', 'Bahnhof, bitte wo?'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kanmchi 3la rjliya.', ['Ich gehe zu Fuß.'])),
        summary(
          [
            'Blayes: **der Bahnhof, die Haltestelle, die Post, die Bank, die Apotheke, das Krankenhaus…**',
            'Mouwasalat: **der Bus, die U-Bahn, die Straßenbahn, der Zug, das Fahrrad, zu Fuß**.',
            'T-tri9: **geradeaus, links, rechts, bis zur Ampel, die zweite Straße rechts**.',
          ],
          ['Tsowwel 3la t-tri9', 'Tfhem l-jawab'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Im Park, mit dem Bus — der Dativ',
      description: 'L-Dativ: chno howa, imta, o kifach l-articles kayt-beddlou. O l-amr b "Sie".',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tfhem imta kaykoun l-Dativ', 'Tkhdem dem / der / dem / den', 'Tgoul fin (in, an, auf + Dativ)', 'Tkhdem mit, zu, nach', 'Tdir l-amr b "Sie"'],
      steps: [
        intro(
          'Lach "zur Post" o "mit dem Bus"?',
          md`
            F l-hiwar sme3ti: "**zur** Ausländerbehörde", "**an der** Ampel", "**neben der** Post". Ach had "der" m3a kelma mu2annatha? O lach "mit **dem** Bus" machi "mit der Bus"?
            Hada howa **l-Dativ** — l-7ala t-talta f l'Almaniya. Ghadi nchoufouh khatwa b khatwa.
          `,
          ['Imta kaykoun l-Dativ', 'Kifach l-articles kayt-beddlou', 'Tgoul fin o b ach'],
        ),
        explain(
          'Chno howa l-Dativ o imta kaykoun?',
          md`
            7tal daba 3endna:
            - **Nominativ** = l-fa3il (Wer?)
            - **Akkusativ** = l-maf3oul bih (Wen? / Was?)

            **Dativ** = t-talet. F A1 kaykoun ghaliban f **jouj d l-7alat**:

            1. **Men b3d chi prépositions** — b7al **mit, zu, aus, bei, von, nach** dima, o **in, an, auf** mli katgoul **fin** (Wo?).
            2. **M3a chi af3al** b7al **helfen, danken, gehören, gefallen** (ghadi nchoufouhom f l-unité 11).

            Had d-ders kayrkkez 3la l-7ala l-oula: **fin kayn chi 7aja** o **b ach kanmchi**.

            Bach t3ref: s-sou2al **"Wo?"** (fin?) → Dativ. "**Wo** ist Youssef? — **Im** Park." / "**Wo** wartest du? — **An der** Haltestelle."
          `,
        ),
        explain(
          'L-articles f l-Dativ',
          md`
            | | der (m) | die (f) | das (n) | jam3 |
            |---|---|---|---|---|
            | Nominativ | der / ein | die / eine | das / ein | die / – |
            | Akkusativ | den / einen | die / eine | das / ein | die / – |
            | **Dativ** | **dem / einem** | **der / einer** | **dem / einem** | **den** + **-n** |

            - **der → dem**, **das → dem** (kif kif!)
            - **die → der** ⚠️ (ma tkhel3ch m3a der dyal l-masculin)
            - **jam3 → den**, o s-smiya katzid **-n**: mit den Kinder**n**, in den Parks (ila kanet katsali b -s ma katzidch).

            **Ikhtisarat** (dima mjm3in):
            - in + dem = **im**: "im Park"
            - an + dem = **am**: "am Bahnhof"
            - zu + dem = **zum**: "zum Bahnhof"
            - zu + der = **zur**: "zur Post"
          `,
          [
            ['Ich bin im Supermarkt.', 'Ana f s-supermarché.'],
            ['Wir warten an der Haltestelle.', 'Kantsennaw f l-arrêt.'],
            ['Er wohnt in einer WG.', 'Saken f WG.'],
          ],
          'Fakker f l-Dativ b7al *blasa*: kolchi f l-blasa **thabet** ("Wo?"). F A2 ghadi nchoufou belli **in/an/auf** kayjibou Akkusativ mli kayn **l-7araka** ("Wohin?").',
        ),
        choice('"Youssef ist ___ Park." (der Park)', ['in den', 'im', 'in die'], 1, 'Wo? + der → dem → in dem = **im**.'),
        choice('"Salma wartet ___ Haltestelle." (die)', ['an die', 'an der', 'am'], 1, 'Wo? + die → **der**.'),
        choice('"Das Geld ist ___ Bank." (die Bank)', ['in der', 'im', 'in die'], 0),
        gap('Kemmel', 'Wir treffen uns ___ Bahnhof. (an + der Bahnhof)', 'am'),
        gap('Kemmel', 'Die Kinder spielen ___ Garten. (in + der Garten)', 'im'),
        explain(
          'mit, zu, nach, aus: dima Dativ',
          md`
            | Préposition | Ma3na | Mital |
            |---|---|---|
            | **mit** | b (wasila) / m3a | "mit **dem** Bus", "mit **der** U-Bahn", "mit meiner Schwester" |
            | **zu** | l (chi blasa / chi wa7ed) | "**zum** Arzt", "**zur** Schule", "zu Lukas" |
            | **aus** | men | "aus **dem** Haus", "aus **der** Türkei" |
            | **nach** | l (mdina / blad bla article) | "nach Berlin", "nach Marokko", "**nach Hause**" |

            **zu** wla **nach**?
            - **nach** + mdon o boldan **bla article** o "nach Hause": "Ich fahre **nach** Hamburg."
            - **zu** + blayes o n-nas: "Ich gehe **zum** Supermarkt / **zur** Bank / **zu** meiner Oma."

            "zu Hause" (bla 7araka) = *f d-dar*; "nach Hause" (m3a 7araka) = *l d-dar*.
          `,
          [
            ['Ich fahre mit dem Fahrrad zur Arbeit.', 'Kanmchi b l-bechklita l l-khedma.'],
            ['Am Wochenende fahren wir nach Bonn.', 'F l-weekend ghadi nmchiw l Bonn.'],
            ['Ich gehe jetzt nach Hause.', 'Ghadi nmchi daba l d-dar.'],
          ],
        ),
        choice('"Ich fahre ___ Bus." (der Bus)', ['mit den', 'mit dem', 'mit der'], 1),
        choice('"Ich fahre ___ U-Bahn." (die U-Bahn)', ['mit dem', 'mit die', 'mit der'], 2),
        choice('"Morgen fahre ich ___ Berlin."', ['zu', 'nach', 'in'], 1),
        gap('Kemmel b zum / zur', 'Ich gehe ___ Apotheke und dann ___ Bahnhof.', ['zur', 'zum']),
        gap('Kemmel', 'Nach dem Kurs gehe ich nach ___. (l d-dar)', 'Hause'),
        explain(
          'L-amr b "Sie" (Imperativ)',
          md`
            Bach t3ti chi wa7ed tawjih rasmi (b7al f t-tri9), katkhdem **l-fi3l f l-bidaya + Sie**:

            | Jomla 3adiya | Amr |
            |---|---|
            | Sie gehen geradeaus. | **Gehen Sie** geradeaus! |
            | Sie nehmen den Bus Nr. 5. | **Nehmen Sie** den Bus Nr. 5! |
            | Sie steigen am Dom aus. | **Steigen Sie** am Dom **aus**! |

            B7al s-sou2al dyal ja/nein, walakin b nghma dyal amr (o ghaliban m3a **bitte**): "Warten Sie bitte hier."
            F l-unité 9 ghadi nchoufou l-amr b **du** o **ihr**.
          `,
          [
            ['Nehmen Sie die Straßenbahn Linie 1.', 'Khoud t-tram ra9m 1.'],
            ['Steigen Sie bitte am Neumarkt um.', 'Beddel f Neumarkt 3afak.'],
          ],
        ),
        order('Rtteb', 'Gehen Sie an der Ampel links.'),
        order('Rtteb', 'Steigen Sie am Bahnhof aus.'),
        translate("Terjem l l'Almaniya", 'Kanmchi l l-cours b t-tram.', ['Ich fahre mit der Straßenbahn zum Kurs.', 'Ich fahre mit der Strassenbahn zum Kurs.', 'Ich fahre mit der Straßenbahn in den Kurs.']),
        graded(choice('"Wo ist das Handy?" — "___ Tisch." (auf + der Tisch)', ['Auf den', 'Auf dem', 'Auf der'], 1)),
        graded(choice('"Ich wohne ___ Wohnung im dritten Stock." (eine Wohnung)', ['in eine', 'in einer', 'in einem'], 1)),
        graded(gap('Kemmel', 'Wir fahren ___ Auto. (mit + das Auto)', 'mit dem')),
        graded(gap('Kemmel', 'Ich gehe ___ Arzt. (zu + der Arzt)', 'zum')),
        graded(choice('"Ich fliege im Juli ___ Marokko."', ['zu', 'nach', 'in'], 1)),
        graded(choice('"die" f l-Dativ katwelli…', ['dem', 'der', 'den'], 1)),
        graded(translate("Terjem l l'Almaniya (rasmi)", 'Sir nichan!', ['Gehen Sie geradeaus!', 'Gehen Sie bitte geradeaus!'])),
        summary(
          [
            '**Dativ:** der/das → **dem**, die → **der**, jam3 → **den + -n**.',
            '**Wo?** + in / an / auf → Dativ: **im** Park, **am** Bahnhof, **an der** Ampel, **auf dem** Tisch.',
            '**mit, zu, aus, nach** dima Dativ: **mit dem** Bus, **zum** Arzt, **zur** Post.',
            '**nach** + mdina / blad / Hause; **zu** + blasa / chakhs.',
            'Amr rasmi: **Gehen Sie** geradeaus!',
          ],
          ['Tgoul fin kayn chi 7aja', 'Tgoul b ach o fin ghadi', 'T3ti tawjihat b "Sie"'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Fahrkarten & Durchsagen',
      description: 'Tchri billet, tfhem l-i3lanat f lagar o f l-bus, o tchar7 t-tri9 l chi wa7ed.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tchri billet f l-guichet wla l-machina', 'Tfhem i3lan 9sir (Durchsage)', 'Tnte9 st o sp', 'Tkteb t-tri9 l d-dar dyalek'],
      steps: [
        intro(
          'L Bonn b t-tran',
          'Youssef o Salma bghaw ymchiw l Bonn nhar s-sebt. Khasshom ychriw l-billet o yfhmou l-i3lanat f lagar.',
          ['Tchri billet', 'Tfhem l-i3lanat', 'Tchar7 t-tri9'],
        ),
        vocab('Unterwegs — F t-tri9', [
          ['die Fahrkarte / das Ticket', 'l-billet', ''],
          ['der Fahrkartenautomat', 'l-machina dyal l-billetat', ''],
          ['einfach', 'ghir l-mchi (aller simple)'],
          ['hin und zurück', 'mchi o rjou3 (aller-retour)'],
          ['das Gleis', 'r-rasif (quai / voie)', 'die Gleise', ['Der Zug fährt von Gleis 4.', 'T-tran kaykhrej men r-rasif 4.']],
          ['die Abfahrt', 'l-khrouj (départ)', ''],
          ['die Ankunft', 'l-wsoul (arrivée)', ''],
          ['abfahren', 'khrej / tle9 (t-tran)', ''],
          ['ankommen', 'wsel', ''],
          ['die Verspätung', 't-ta3til (retard)', '', ['Der Zug hat 10 Minuten Verspätung.', 'T-tran m3ettel b 10 d9aye9.']],
          ['der Fahrplan', 'jadwal l-aw9at', ''],
        ]),
        dialogue(
          'Am Fahrkartenschalter',
          [
            ['Youssef', 'Guten Tag. Zwei Fahrkarten nach Bonn, bitte.', 'Nharek sa3id. Jouj d l-billetat l Bonn 3afak.'],
            ['Mitarbeiter', 'Einfach oder hin und zurück?', 'Ghir l-mchi wla mchi o rjou3?'],
            ['Youssef', 'Hin und zurück, bitte. Wann fährt der nächste Zug?', 'Mchi o rjou3 3afak. Imta ghadi ykhrej t-tran l-jay?'],
            ['Mitarbeiter', 'Um 10:12 Uhr von Gleis 7. Sie sind um 10:35 Uhr in Bonn.', 'F 10:12 men r-rasif 7. Ghadi twslou l Bonn f 10:35.'],
            ['Youssef', 'Muss ich umsteigen?', 'Wach khassni nbeddel?'],
            ['Mitarbeiter', 'Nein, der Zug fährt direkt. Das macht 19,60 Euro.', 'La, t-tran direct. Kolchi 19,60 euro.'],
            ['Youssef', 'Hier, bitte. Danke!', 'Tfeddel. Chokran!'],
          ],
        ),
        choice('Men ina rasif kaykhrej t-tran?', ['Gleis 2', 'Gleis 7', 'Gleis 12'], 1),
        choice('Imta ghadi ywslou l Bonn?', ['10:12', '10:35', '10:53'], 1),
        listening(
          'Durchsagen — L-i3lanat',
          [
            ['Bahnhof', 'Achtung an Gleis 7: Der Regionalexpress nach Bonn, Abfahrt 10:12 Uhr, hat heute circa 15 Minuten Verspätung.', 'Intibah f r-rasif 7: t-tran l Bonn, li kaykhrej f 10:12, m3ettel lyouma b ~15 d9i9a.'],
            ['Bahnhof', 'Wir bitten um Entschuldigung.', 'Kanteltbou s-sma7.'],
            ['Straßenbahn', 'Nächste Haltestelle: Neumarkt. Hier Umsteigemöglichkeit zu den Linien 3, 4 und 16.', 'L-arrêt l-jay: Neumarkt. Hna t9der tbeddel l l-khoutout 3, 4 o 16.'],
            ['Straßenbahn', 'Ausstieg in Fahrtrichtung links.', 'L-khrouj 3la l-yser f ttijah s-sir.'],
          ],
          'Sme3 l-i3lanat dyal lagar o t-tram. Ma khassekch tfhem kol kelma: 9elleb 3la l-ma3loumat l-mohimma (ra9m, sa3a, d9aye9).',
        ),
        choice('Ch7al m3ettel t-tran l Bonn?', ['5 d9aye9', '15 d9i9a', '50 d9i9a'], 1),
        choice('F Neumarkt t9der tbeddel l…', ['l-khoutout 3, 4 o 16', 'ghir l-khatt 7', 't-tran l Bonn'], 0),
        culture(
          'L-mouwasalat f Almaniya',
          md`
            - **Deutschlandticket:** abonnement chahri (taman ~ 60 € f ch-chhar) — bih t9der tkhdem **kol** l-bus, t-tram, l-U-Bahn o t-tran l-mahalli (RE, RB, S-Bahn) f Almaniya kamla. Ma kaykhdemch f t-tran s-sri3 (ICE, IC).
            - **Schwarzfahren** = trkeb bla billet. L-amenda **60 €**! Ghaliban ma kaynach portes: l-controlleur kayji f l-wsat.
            - F chi mdon khass t**entwerten** (tkhettem) l-billet f l-machina s-sghira **9bel** ma trkeb.
            - **DB Navigator** (application dyal Deutsche Bahn) kat3tik l-aw9at o t-ta3tilat. Verspätung (t-ta3til) 3adi bzaf — 3ti l-wa9t dyalek!
          `,
        ),
        pron(
          'st o sp f l-bidaya: "scht", "schp"',
          'F l-bidaya dyal l-kelma (wla dyal jouz7 f kelma mrekkba), **st** katnte9ha **"scht"** o **sp** **"schp"**. F l-wsat wla l-akhir katb9a **st / sp** 3adiya.',
          [
            ['Straße – Stadt – Station', 'scht-'],
            ['sprechen – spielen – Sport', 'schp-'],
            ['Haltestelle – Bahnsteig', 'f l-jouz7 t-tani: -scht-'],
            ['Fenster – ist – Gast', 'f l-wsat / l-akhir: st 3adiya'],
            ['Ich spreche mit dem Studenten in der Straßenbahn.', 'kolchi m3a ba3d'],
          ],
        ),
        reading(
          'Der Weg zu mir',
          md`
            Hallo Olena,

            hier ist der Weg zu meiner neuen Wohnung: Nimm am Hauptbahnhof die U-Bahn Linie 3 bis zur Haltestelle Venloer Straße. Das dauert nur acht Minuten. Steig dort aus und geh die Venloer Straße geradeaus. Nach 200 Metern siehst du eine Apotheke. Geh an der Apotheke rechts in die Lindenstraße. Mein Haus ist die Nummer 8, neben einer kleinen Bäckerei. Ich wohne im dritten Stock, links.

            Bis Samstag!
            Salma
          `,
          {
            text: 'Salma kat-char7 l Olena kifach twsel l d-dar jdida dyalha. (Kat-khdem l-amr b "du" — ghadi nt3allmouh f l-unité 9.)',
            glossary: [['nimm / steig / geh', 'khoud / nzel / sir (amr b du)'], ['dauert', 'kayakhod (wa9t)'], ['nach 200 Metern', 'men b3d 200 mitr']],
          },
        ),
        choice('Ina khatt dyal l-U-Bahn khass takhod Olena?', ['Linie 1', 'Linie 3', 'Linie 8'], 1),
        choice('Fin kayna d-dar dyal Salma?', ['7da l-pharmacie', '7da boulangerie sghira', '9eddam lagar'], 1),
        write(
          'Kifach twsel l 3endi',
          'Kteb l chi sa7bek t-tri9 men lagar (wla men l-arrêt) l d-dar dyalek (4–6 jmel). Khdem: **mit dem Bus / der U-Bahn**, **bis zur Haltestelle**, **geradeaus / links / rechts**, **neben / an der …**',
          ['Wasila (mit der U-Bahn / dem Bus …)', 'Fin tnzel (bis zur Haltestelle …)', 'Tawjihat (geradeaus, links, rechts)', 'Blasa 9riba (neben der Bank …)', 'T-tabe9'],
          'Hallo Lukas, nimm am Bahnhof den Bus Nummer 5 bis zur Haltestelle Rathaus. Dann geh geradeaus bis zur Ampel. An der Ampel geh links. Mein Haus ist neben der Post, Nummer 14. Ich wohne im ersten Stock. Bis später! Youssef',
          35,
        ),
        graded(choice('"hin und zurück" =', ['aller simple', 'aller-retour', 'bla billet'], 1)),
        graded(choice('"Der Zug hat Verspätung." kat3ni…', ['T-tran m3ettel', 'T-tran msdoud', 'T-tran mbekker'], 0)),
        graded(choice('Kifach katnte9 "Straße"?', ['s-tra-sse', 'scht-ra-sse', 'stra-zé'], 1)),
        graded(dictation('Sme3 o kteb', 'Der Zug fährt von Gleis fünf.')),
        summary(
          [
            'L-billet: **einfach / hin und zurück**, **Gleis**, **Abfahrt / Ankunft**, **umsteigen**, **Verspätung**.',
            '**Deutschlandticket** l l-mouwasalat l-mahalliya f Almaniya kamla. Bla billet = 60 € amenda!',
            '**st / sp** f l-bidaya = **scht / schp**.',
          ],
          ['Tchri billet', 'Tfhem i3lan 9sir', 'Tkteb t-tri9 l d-dar dyalek'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 8',
      description: 'Muraja3a: l-mdina, t-tri9, l-Dativ, zu/nach, l-amr b Sie — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Dativ', 'Tchar7 o tfhem t-tri9', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 8', 'L-blayes, l-mouwasalat, l-Dativ (im, am, zum, zur, mit dem…), zu/nach, o l-amr b Sie.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          '3 7alat f jadwal wa7ed',
          md`
            | | der | die | das | jam3 |
            |---|---|---|---|---|
            | Nom. (Wer?) | der / ein | die / eine | das / ein | die |
            | Akk. (Wen?/Was?) | **den / einen** | die / eine | das / ein | die |
            | **Dat.** (Wo? / mit / zu) | **dem / einem** | **der / einer** | **dem / einem** | **den + n** |

            im = in dem · am = an dem · zum = zu dem · zur = zu der
          `,
        ),
        dialogue(
          'Wo bist du?',
          [
            ['Salma', 'Hallo Youssef, wo bist du? Der Film fängt gleich an!', 'Salam a Youssef, fin nta? L-film ghadi ybda daba!'],
            ['Youssef', 'Ich bin noch in der Straßenbahn. Sie hat Verspätung.', 'Mazal f t-tram. M3ettla.'],
            ['Salma', 'Oh nein! Ich warte vor dem Kino.', 'Oh la! Ana kantsenna 9eddam s-sinima.'],
            ['Youssef', 'Ich bin in fünf Minuten am Neumarkt. Dann gehe ich zu Fuß.', 'Men daba 5 d9aye9 nkoun f Neumarkt. Men b3d ghadi nji 3la rjliya.'],
            ['Salma', 'Okay. Vom Neumarkt gehst du geradeaus, dann die erste Straße links. Das Kino ist neben einem Café.', 'Wakha. Men Neumarkt sir nichan, men b3d z-zen9a l-oula 3la l-yser. S-sinima 7da café.'],
            ['Youssef', 'Alles klar. Bis gleich!', 'Wakha. 7tal daba!'],
          ],
        ),
        choice('Fin Youssef daba?', ['F s-sinima', 'F t-tram', 'F Neumarkt'], 1),
        choice('Fin kaysenna Salma?', ['9eddam s-sinima', 'F l-café', 'F l-arrêt'], 0),
        gap('Kemmel', 'Ich bin noch ___ Straßenbahn. Ich warte ___ Kino. (in + die / vor + das)', ['in der', 'vor dem']),
        match('Rbet', [
          ['zum', 'zu + dem'],
          ['zur', 'zu + der'],
          ['im', 'in + dem'],
          ['am', 'an + dem'],
        ]),
        speak(
          'Role-play: char7 t-tri9',
          'Chi touriste kaysowlek: *"Entschuldigung, wie komme ich zum Dom?"* — Char7 lih: nichan, 3la l-imin f d-dow, o l-Dom 7da lagar.',
          ['Gehen Sie hier geradeaus.', 'An der Ampel gehen Sie rechts.', 'Der Dom ist neben dem Bahnhof.', 'Das sind nur fünf Minuten zu Fuß.'],
        ),
        graded(choice('"Ich wohne ___ Bergstraße." (in + die)', ['in die', 'in der', 'im'], 1)),
        graded(gap('Kemmel', 'Fährst du ___ U-Bahn? (mit + die)', 'mit der')),
        graded(choice('"Ich gehe heute ___ Bank."', ['zum', 'zur', 'nach'], 1)),
        graded(choice('"Im Sommer fliegen wir ___ Casablanca."', ['zu', 'nach', 'zur'], 1)),
        graded(gap('Kemmel', 'Ich warte ___ Bahnhof. (an + der)', 'am')),
        graded(choice('Ina amr rasmi s7i7?', ['Sie nehmen den Bus!', 'Nehmen Sie den Bus!', 'Nehmen den Bus Sie!'], 1)),
        graded(choice('"umsteigen" =', ['tle3', 'nzel', 'beddel'], 2)),
        graded(translate("Terjem l l'Almaniya", 'L-pharmacie 7da l-banka.', ['Die Apotheke ist neben der Bank.'])),
        graded(choice('"Schwarzfahren" kay3ni…', ['Trkeb f l-lil', 'Trkeb bla billet', 'Tsou9 tomobil k7la'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich fahre mit dem Bus zum Bahnhof.')),
        summary(
          [
            'Daba t9der tt7errek f l-mdina: tsowwel 3la t-tri9, tchri billet o tfhem l-i3lanat.',
            '**L-Dativ:** dem / der / dem / den — m3a **Wo?**, **mit**, **zu**, **aus**, **nach**.',
            'F l-unité 9: l-jism, t-tbib, l-mard, o l-Modalverben **müssen, dürfen, sollen** + l-amr b du/ihr.',
          ],
          ['Tsemmi l-blayes o l-mouwasalat', 'Tsowwel o tchar7 t-tri9', 'Tkhdem l-Dativ', 'Tchri billet'],
          'Khlasa dyal l-unité 8',
        ),
      ],
    },
  ],
});
