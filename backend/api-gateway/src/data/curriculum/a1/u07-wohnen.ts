import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 7,
  title: 'Wohnen',
  description: "D-dar, l-bit, l-meuble, twesef l-appartement, t9ra annonces, o t9ol rayek: \"Ich finde ihn schön.\"",
  icon: 'home',
  objectives: [
    'Tsemmi l-byout o l-meubles',
    'Twesef d-dar: hell, groß, zu teuer…',
    'T9ol rayek: "Wie findest du …? — Ich finde ihn …"',
    'Tfre9 bin "nicht" o "kein"',
    'T9ra annonce dyal l-kra o tkteb email bach tchouf d-dar',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ein Zimmer in der WG',
      description: 'L-byout, l-meubles, o kifach twesef d-dar.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-byout o l-meubles', 'Twesef d-dar b sifat', 'Tsowwel: "Wie groß ist das Zimmer?"'],
      steps: [
        intro(
          'Salma kat9elleb 3la bit',
          'Salma bghat tbeddel d-dar: l-bit dyalha ghali bzaf. L9at bit f **WG** (Wohngemeinschaft = dar fiha bzaf d n-nas kaykriw m3a ba3d). Youssef mcha m3aha tchoufou.',
          ['Tsemmi l-byout', 'Tsemmi l-meubles', 'Twesef d-dar'],
        ),
        dialogue(
          'Die WG-Besichtigung',
          [
            ['Jonas', 'Hallo, ich bin Jonas. Kommt rein! Hier ist die Küche.', 'Salam, ana Jonas. Dkhlou! Hna l-kouzina.'],
            ['Salma', 'Oh, die Küche ist schön groß! Und hell.', 'Oh, l-kouzina kbira mzyan! O fiha d-dow.'],
            ['Jonas', 'Ja. Hier ist das Bad, und da ist das Zimmer.', 'Ah. Hna l-7mmam, o tmma l-bit.'],
            ['Youssef', 'Das Zimmer ist ein bisschen klein, oder?', 'L-bit sghir chwiya, ya ak?'],
            ['Jonas', 'Es hat 14 Quadratmeter. Aber es hat einen Balkon!', 'Fih 14 mitr mrebb3. Walakin fih balcon!'],
            ['Salma', 'Super! Ist das Zimmer möbliert?', 'Mzyan! Wach l-bit fih l-meubles?'],
            ['Jonas', 'Ja, es gibt ein Bett, einen Schrank und einen Schreibtisch.', 'Ah, kayn namousiya, placard o biro.'],
            ['Salma', 'Und was kostet das Zimmer?', 'O b ch7al l-bit?'],
            ['Jonas', '420 Euro warm. Also mit Heizung und Strom.', '420 euro "warm". Ya3ni m3a t-tadfi2a o d-dow.'],
            ['Salma', 'Das ist nicht zu teuer. Das Zimmer gefällt mir!', 'Hadchi machi ghali bzaf. L-bit 3jebni!'],
          ],
        ),
        vocab('Die Wohnung — D-dar', [
          ['die Wohnung', 'l-appartement / d-dar', 'die Wohnungen'],
          ['das Haus', 'd-dar (villa / immeuble)', 'die Häuser'],
          ['das Zimmer', 'l-bit', 'die Zimmer'],
          ['das Wohnzimmer', 's-salon', ''],
          ['das Schlafzimmer', 'bit n-n3as', ''],
          ['die Küche', 'l-kouzina', 'die Küchen'],
          ['das Bad', 'l-7mmam (salle de bain)', 'die Bäder'],
          ['die Toilette', 'l-mir7ad / WC', ''],
          ['der Flur', 'l-couloir', ''],
          ['der Balkon', 'l-balcon', 'die Balkone'],
          ['der Keller', 'l-cave (t7t l-ard)', ''],
          ['der Stock / die Etage', 'l-tabe9', '', ['Ich wohne im dritten Stock.', 'Saken f t-tabe9 t-talet.']],
        ]),
        vocab('Möbel — L-meubles', [
          ['das Bett', 'n-namousiya', 'die Betten'],
          ['der Schrank', 'l-placard / l-khzana', 'die Schränke'],
          ['der Tisch', 't-tabla', 'die Tische'],
          ['der Stuhl', 'l-koursi', 'die Stühle'],
          ['der Schreibtisch', 'l-biro (tablat l-kitaba)', ''],
          ['das Sofa', 'l-canapé', 'die Sofas'],
          ['der Sessel', 'fauteuil', 'die Sessel'],
          ['das Regal', 'l-étagère', 'die Regale'],
          ['die Lampe', 'l-lamba', 'die Lampen'],
          ['der Kühlschrank', 'l-frigo', ''],
          ['die Waschmaschine', 'l-machina d t-tsbin', ''],
          ['der Herd', 'l-cuisinière / l-feurn d l-gaz', ''],
        ]),
        explain(
          'Twesef d-dar',
          md`
            Sifat kathira (b l-3aks):

            | | | |
            |---|---|---|
            | groß ↔ klein | kbir ↔ sghir | |
            | hell ↔ dunkel | fih d-dow ↔ mdlem | |
            | teuer ↔ billig / günstig | ghali ↔ rkhis | |
            | ruhig ↔ laut | hadi ↔ fih l-bruit | |
            | neu ↔ alt | jdid ↔ 9dim | |
            | modern ↔ altmodisch | moderne ↔ démodé | |
            | schön ↔ hässlich | zwin ↔ khayb | |

            **sehr** = bzaf (mzyan wla khayb): "sehr schön".
            **zu** = *bzaf* b ma3na **ktar men l-lazem** (dima mochkil!): "Das Zimmer ist **zu** teuer." = *ghali bzaf (ma n9derch nkhelles)*.

            Bach tsowwel: "Wie groß ist die Wohnung?" — "Sie hat 60 Quadratmeter (m²)." / "Wie viele Zimmer hat die Wohnung?" — "Drei Zimmer."
          `,
          [
            ['Die Küche ist sehr hell.', 'L-kouzina fiha d-dow bzaf.'],
            ['Die Wohnung ist zu laut.', 'D-dar fiha l-bruit bzaf (ktar men l-lazem).'],
            ['Wie viel kostet die Miete?', 'Ch7al l-kra?'],
          ],
          '"sehr teuer" = ghali bzaf (t9der tkoun ghaliya o mzyana). "zu teuer" = ghali bzaf **3liya** (ma n9derch).',
        ),
        match('Rbet l-3aks', [
          ['hell', 'dunkel'],
          ['teuer', 'billig'],
          ['ruhig', 'laut'],
          ['groß', 'klein'],
          ['neu', 'alt'],
        ]),
        choice('Fin kat7ett l-7wayej dyalek?', ['im Herd', 'im Schrank', 'im Bett'], 1),
        choice('"Die Miete ist zu hoch." kat3ni…', ['L-kra mzyana', 'L-kra ghaliya bzaf (ma n9derch)', 'L-kra rkhisa'], 1),
        gap('Kemmel', 'Das Zimmer hat 14 Quadratmeter. Es ist ein bisschen ___.', 'klein'),
        order('Rtteb', 'Wie viele Zimmer hat die Wohnung?'),
        speak(
          'Wesef d-dar dyalek',
          'Wesef d-dar wla l-bit dyalek: ch7al men bit fiha, kifach hiya (3 sifat), o chno kayn f l-bit dyalek.',
          ['Meine Wohnung hat drei Zimmer.', 'Die Küche ist klein, aber hell.', 'In meinem Zimmer gibt es ein Bett, einen Schrank und einen Schreibtisch.'],
        ),
        graded(choice('"das Bad" howa…', ['l-kouzina', 'l-7mmam', 'l-balcon'], 1)),
        graded(choice('Chno l-3aks dyal "dunkel"?', ['laut', 'hell', 'klein'], 1)),
        graded(gap('Kemmel l-article', 'In der Küche gibt es ___ Kühlschrank. (der)', 'einen')),
        graded(translate("Terjem l l'Almaniya", 'L-bit ghali bzaf (ma n9derch).', ['Das Zimmer ist zu teuer.'])),
        summary(
          [
            'Byout: **Küche, Bad, Wohnzimmer, Schlafzimmer, Flur, Balkon**. Meubles: **Bett, Schrank, Tisch, Stuhl, Sofa…**',
            'Sifat: **groß/klein, hell/dunkel, teuer/billig, ruhig/laut**.',
            '**sehr** = bzaf; **zu** = ktar men l-lazem (mochkil).',
          ],
          ['Tsemmi l-byout o l-meubles', 'Twesef d-dar'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich finde ihn schön — ihn, sie, es & nicht / kein',
      description: 'D-dama2ir f l-Akkusativ (mich, dich, ihn…), "Wie findest du…?", o l-fer9 bin nicht o kein.',
      minutes: 30,
      kind: 'grammar',
      goals: ['Tkhdem ihn / sie / es bach ma t3awedch s-smiya', 'T9ol rayek b "finden"', 'Tnfi b "nicht" wla "kein" s7i7'],
      steps: [
        intro(
          '"Der Tisch? Ich finde ihn schön."',
          'F l-unité 4 t3llemti belli l-Akkusativ kaybeddel "der" l "den". Daba nchoufou nefs l-fikra m3a **d-dama2ir**: "er" katwelli "**ihn**". O men b3d ghadi nfehmou mzyan imta "nicht" o imta "kein".',
          ['ihn, sie, es…', 'Wie findest du …?', 'nicht wla kein'],
        ),
        explain(
          'D-dama2ir f l-Akkusativ',
          md`
            Mli s-smiya katkoun **maf3oul bih** (Akkusativ), d-damir dyalha ta kayt-beddel:

            | Nominativ | Akkusativ | Darija |
            |---|---|---|
            | ich | **mich** | -ni (chafni) |
            | du | **dich** | -k (chafek) |
            | er | **ihn** | -h (chafou) |
            | sie | sie | -ha (chafha) |
            | es | es | -h |
            | wir | **uns** | -na |
            | ihr | **euch** | -kom |
            | sie / Sie | sie / Sie | -hom / -k (rasmi) |

            B7al l-articles: **ghir l-masculin** (er → **ihn**) o ich/du/wir/ihr kayt-beddlou. "sie" o "es" kaybqaw.

            **D-damir kaytbe3 l-article dyal s-smiya:**
            - der Tisch → **ihn**: "Der Tisch ist neu. Ich finde **ihn** schön."
            - die Lampe → **sie**: "Ich kaufe **sie**."
            - das Sofa → **es**: "Ich nehme **es**."
          `,
          [
            ['Kennst du Lukas? — Ja, ich kenne ihn.', 'Wach kat3ref Lukas? — Ah, kan3erfou.'],
            ['Ich liebe dich.', 'Kan7ebbek.'],
            ['Besuchst du uns am Sonntag?', 'Wach ghadi tzourna l-7ad?'],
          ],
          'F Darija d-damir kaylsse9 f l-fi3l (*chafou*). F l\'Almaniya kayji **men b3d l-fi3l** b7al kelma bou7dou: "Ich sehe **ihn**."',
        ),
        explain(
          'Wie findest du …? — T9ol rayek',
          md`
            **finden** + Akkusativ + sifa = *ban lik / kat-chouf*:

            - "Wie findest du **den** Schrank?" — "Ich finde **ihn** praktisch."
            - "Wie findest du **die** Küche?" — "Ich finde **sie** zu klein."
            - "Wie findest du **das** Zimmer?" — "Ich finde **es** toll!"
            - "Wie findest du **die** Stühle?" — "Ich finde **sie** unbequem."

            Kalimat zwinin: **toll / super / gemütlich** (fih r-ra7a) / **praktisch** / **bequem** (mri7) — **langweilig / unbequem / hässlich**.
          `,
        ),
        choice('"Wie findest du den Sessel?" — "Ich finde ___ bequem."', ['er', 'ihn', 'sie'], 1, '"der Sessel" → ihn.'),
        choice('"Wie findest du die Lampe?" — "Ich finde ___ schön."', ['ihn', 'sie', 'es'], 1),
        choice('"Wie findest du das Bad?" — "Ich finde ___ zu klein."', ['ihn', 'sie', 'es'], 2),
        gap('Kemmel', 'Wo ist mein Schlüssel? Ich finde ___ nicht! (der Schlüssel)', 'ihn'),
        gap('Kemmel', 'Hallo Salma! Ich sehe ___ morgen im Kurs, okay? (nti)', 'dich'),
        gap('Kemmel', 'Ruft ihr ___ an? (7na)', 'uns'),
        explain(
          'nicht wla kein?',
          md`
            **kein** = kaynfi **smiya** li kanet ghadi tkoun m3a **ein** wla **bla article**:
            - Das ist **ein** Balkon. → Das ist **kein** Balkon.
            - Ich habe Zeit. → Ich habe **keine** Zeit.
            - Es gibt **einen** Keller. → Es gibt **keinen** Keller.

            **nicht** = kaynfi kolchi akhor: l-fi3l, s-sifa, smiya b **der/die/das** wla **mein/dein**, s-smiyat dyal n-nas…
            - Das Zimmer ist **nicht** groß. (sifa)
            - Ich komme **nicht**. (fi3l)
            - Das ist **nicht** mein Bett. (possessif)
            - Ich finde den Schlüssel **nicht**. (der + smiya)

            **Fin kayji "nicht"?**
            - Ghaliban **f l-akhir**: "Ich arbeite heute **nicht**."
            - Walakin **9bel** s-sifa, l-blasa, o l-préfixe/infinitiv: "Das ist **nicht** teuer." "Ich wohne **nicht** in Köln." "Ich kann **nicht** kommen." "Ich stehe **nicht** auf."
          `,
          [
            ['Die Wohnung hat keinen Balkon.', 'D-dar ma fihach balcon.'],
            ['Die Wohnung ist nicht teuer.', 'D-dar machi ghaliya.'],
            ['Das ist nicht meine Jacke.', 'Hadi machi l-jacket dyali.'],
          ],
          'Su2al sahl: wach t9der tgoul **"ein/eine"** 9bel s-smiya? Ila ah → **kein**. Ila la → **nicht**.',
        ),
        choice('"Die Wohnung hat ___ Keller."', ['nicht', 'keinen', 'kein'], 1, '"einen Keller" → keinen (der, Akkusativ).'),
        choice('"Das Zimmer ist ___ hell."', ['kein', 'nicht'], 1, 'Sifa → nicht.'),
        choice('"Ich habe ___ Waschmaschine."', ['keine', 'nicht', 'kein'], 0),
        choice('"Das ist ___ mein Stuhl."', ['kein', 'nicht'], 1, 'm3a mein/dein → nicht.'),
        order('Rtteb', 'Ich wohne nicht in Bonn.', '"nicht" 9bel l-blasa.'),
        order('Rtteb', 'Die Küche hat kein Fenster.'),
        translate("Terjem l l'Almaniya", 'D-dar machi ghaliya.', ['Die Wohnung ist nicht teuer.', 'Das Haus ist nicht teuer.']),
        graded(gap('Kemmel', 'Der Schreibtisch ist praktisch. Ich nehme ___.', 'ihn')),
        graded(choice('"Kennst du Frau Weber?" — "Ja, ich kenne ___."', ['ihn', 'sie', 'es'], 1)),
        graded(gap('Kemmel b nicht / kein', 'Es gibt ___ Aufzug. (der Aufzug)', 'keinen')),
        graded(gap('Kemmel b nicht / kein', 'Der Flur ist ___ sehr groß.', 'nicht')),
        graded(choice('Ina jomla s7i7a?', ['Ich kann kein kommen.', 'Ich kann nicht kommen.', 'Ich kann kommen nicht.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kan3erfou. (Lukas)', ['Ich kenne ihn.'])),
        summary(
          [
            'Akkusativ dyal d-dama2ir: **mich, dich, ihn, sie, es, uns, euch, sie/Sie**.',
            'D-damir kaytbe3 l-article: der → **ihn**, die → **sie**, das → **es**.',
            '**Wie findest du …? — Ich finde ihn / sie / es …**',
            '**kein** = blast "ein" / bla article; **nicht** = kolchi akhor.',
          ],
          ['Tkhdem d-dama2ir f l-Akkusativ', 'T9ol rayek f chi 7aja', 'Tnfi b nicht / kein s7i7'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Wohnungsanzeigen — L-annonces',
      description: 'T9ra annonces dyal l-kra (m3a l-ikhtisarat), tfhem l-kra, o tkteb email bach tchouf d-dar.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra annonce o tfhem l-ikhtisarat', 'Tfre9 bin Kaltmiete o Warmmiete', 'Tkteb email l moul d-dar', 'Tnte9 r'],
      steps: [
        intro(
          'Annonces f l-internet',
          'Salma kat9elleb ta f l-internet (WG-Gesucht, Kleinanzeigen…). L-annonces 9sar o 3amrin b l-ikhtisarat (abréviations). Ghadi nt3allmou n9rawhom.',
          ['T9ra l-annonces', 'Tfhem t-taman', 'Tkteb email'],
        ),
        explain(
          'L-ikhtisarat dyal l-annonces',
          md`
            | Ikhtisar | Kamel | Darija |
            |---|---|---|
            | **Zi.** | Zimmer | bit |
            | **m²** / qm | Quadratmeter | mitr mrebb3 |
            | **KM** | Kaltmiete | l-kra bla t-takalif |
            | **NK** | Nebenkosten | t-takalif (ma, chauffage, z-zbel…) |
            | **WM** | Warmmiete | l-kra + t-takalif |
            | **EBK** | Einbauküche | kouzina mjehza |
            | **möbl.** | möbliert | fih l-meubles |
            | **ab sofort** | — | men daba |
            | **EG / OG** | Erdgeschoss / Obergeschoss | r-rez-de-chaussée / t-tabe9 l-foukani |
            | **Kaution** | — | l-garantie (ghaliban 3 chhour KM) |

            **Warmmiete = Kaltmiete + Nebenkosten.**
            Ila l-annonce katgoul "500 € KM + 120 € NK", katkhelles **620 €** f ch-chhar.
          `,
          [
            ['3-Zi.-Whg., 75 m², 2. OG', 'Appartement 3 d l-byout, 75 m², f t-tabe9 t-tani'],
            ['650 € KM + 150 € NK', '650 euro + 150 euro takalif = 800 euro'],
          ],
        ),
        reading(
          'Wohnungsanzeigen',
          md`
            A) Köln-Ehrenfeld: Helles 1-Zi.-Apartment, 32 m², 3. OG, Balkon, EBK. 480 € KM + 90 € NK. Kaution 1.440 €. Ab sofort frei.

            B) WG-Zimmer in Köln-Sülz: 16 m², möbliert, in netter 3er-WG (2 Studentinnen). Große Küche, Bad mit Waschmaschine. 430 € warm. Ab 1. November. Nichtraucher!

            C) Köln-Mülheim: 3-Zi.-Wohnung, 78 m², EG, Garten, ruhig, Nähe Bahnhof. 750 € KM + 200 € NK. Ideal für Familien. Keine Haustiere.
          `,
          {
            text: '9ra t-tlata d l-annonces o jaweb 3la s-sou2alat.',
            glossary: [
              ['die Nähe', 'l-9orb', ],
              ['der Nichtraucher', 'li ma kaykmiich'],
              ['das Haustier', 'l-7ayawan dyal d-dar'],
              ['der Garten', 'l-jarda'],
            ],
          },
        ),
        choice('Ch7al katkhelles f ch-chhar f l-appartement A?', ['480 €', '570 €', '1.440 €'], 1, '480 € KM + 90 € NK = 570 € warm.'),
        choice('Ina annonce mzyana l 3a2ila b jouj d l-wlad?', ['A', 'B', 'C'], 2, '3 byout, 78 m², jarda, "Ideal für Familien".'),
        choice('Wach t9der tkmi f l-WG (B)?', ['Ah', 'La'], 1, '"Nichtraucher!"'),
        choice('Fin kayn l-appartement A?', ['Im Erdgeschoss', 'Im dritten Stock (3. OG)', 'Im Keller'], 1),
        culture(
          'L-kra f Almaniya',
          md`
            - Bzaf d n-nas f Almaniya **kaykriw** (machi kaychriw): ~50 % d n-nas.
            - **Kaution:** ghaliban 3 chhour d l-Kaltmiete, katred lik mli tkhrej.
            - Bach tkri, moul d-dar kaytleb: **Schufa-Auskunft** (wer9a 3la l-flous dyalek), **Gehaltsnachweis** (fiche de paie), o **Mieterselbstauskunft** (formulaire).
            - **Besichtigung** = tchouf d-dar 9bel ma tkri. F l-mdon l-kbar kayjiw bzaf d n-nas: koun drif o 3ti l-wra9 kamlin.
            - **Mülltrennung:** z-zbel kaytfre9: **gelbe Tonne** (plastique), **blaue Tonne** (papier), **Biotonne** (makla), **Restmüll** (l-ba9i), o l-9ra3i f **Glascontainer**.
            - **Hausordnung:** r-rakha bin **22:00 o 6:00** o nhar l-7ad.
          `,
        ),
        listening(
          'Am Telefon: eine Besichtigung',
          [
            ['Frau Brandt', 'Brandt, hallo?', 'Brandt, alo?'],
            ['Salma', 'Guten Tag, Frau Brandt. Mein Name ist Salma El Idrissi. Ich rufe wegen der Wohnung in Ehrenfeld an. Ist sie noch frei?', 'Nharek sa3id a Madame Brandt. Smiyti Salma El Idrissi. Kanttasel 3la d-dar f Ehrenfeld. Wach mazala khawya?'],
            ['Frau Brandt', 'Ja, sie ist noch frei.', 'Ah, mazala khawya.'],
            ['Salma', 'Kann ich sie besichtigen?', 'Wach n9der nchoufha?'],
            ['Frau Brandt', 'Ja, gern. Haben Sie am Donnerstag um 17 Uhr Zeit?', 'Ah, b kolchi. Wach 3endek l-wa9t l-khmis f 17?'],
            ['Salma', 'Um 17 Uhr habe ich leider Kurs. Geht es auch um 18 Uhr?', 'F 17 3endi l-cours. Wach momkin f 18?'],
            ['Frau Brandt', 'Ja, das geht. Die Adresse ist Lindenstraße 8.', 'Ah, momkin. L-3onwan Lindenstraße 8.'],
            ['Salma', 'Vielen Dank. Bis Donnerstag!', 'Chokran bzaf. 7tal l-khmis!'],
          ],
        ),
        choice('Imta ghadi tchouf Salma d-dar?', ['L-khmis f 17', 'L-khmis f 18', 'L-jem3a f 18'], 1),
        choice('Chno l-3onwan?', ['Lindenstraße 8', 'Lindenstraße 18', 'Ehrenfeldstraße 8'], 0),
        pron(
          'L-"r" l-almaniya',
          md`
            **r** f l'Almaniya kat-khrej men **l-7al9** — b7al **gh** f Darija walakin khfifa bzaf (*ghrrr* sghira).
            - F l-bidaya o bin jouj 7rouf mte7rrkin: **R**aum, Ba**r**en → *gh* khfifa.
            - F l-akhir b **-er**: Zimm**er**, Lehr**er**, Keller → katwelli b7al **a** (*Zimma*, *Lehra*).
            - Men b3d vokal twil: Tü**r**, Uh**r** → katwelli **a** khfifa.

            Ma tgoulch r b l-lsan (b7al r d Darija): kaysem3 b7al l-jnoub d Almaniya o Swisra — machi ghalat, walakin machi standard.
          `,
          [
            ['Raum – Regal – Rhein', 'gh khfifa'],
            ['Zimmer – Keller – Lehrer', '-er = a'],
            ['Tür – Uhr – vier', 'r = a khfifa'],
            ['Der Herr hört Radio.', 'jme3 kolchi'],
          ],
        ),
        write(
          'Email l moul d-dar',
          'Jaweb 3la l-annonce A b email: sellem b chkel rasmi, 9eddem rasek (smiya, khedma/9raya), goul belli d-dar 3jbatek, sowwel wach mazala khawya, o tleb **Besichtigung** (9tare7 nhar o sa3a).',
          ['Salam rasmi: Sehr geehrte Damen und Herren / Guten Tag', 'T9dim: Ich heiße … Ich bin …', 'Sou2al: Ist die Wohnung noch frei?', 'Talab: Kann ich die Wohnung besichtigen?', 'Twadi3: Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nich heiße Salma El Idrissi und ich bin Studentin in Köln. Ihre Wohnung in Ehrenfeld gefällt mir sehr gut. Ist die Wohnung noch frei? Kann ich sie besichtigen? Ich habe am Montag und am Mittwoch ab 14 Uhr Zeit.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          40,
        ),
        graded(choice('"WM" = …', ['Waschmaschine', 'Warmmiete', 'Wohnzimmer'], 1)),
        graded(choice('Warmmiete = …', ['KM + NK', 'KM + Kaution', 'NK bou7dha'], 0)),
        graded(choice('"die Kaution" hiya…', ['l-kra dyal ch-chhar', 'l-garantie', 't-takalif'], 1)),
        graded(dictation('Sme3 o kteb', 'Ist die Wohnung noch frei?')),
        summary(
          [
            'L-annonces: **Zi., m², KM, NK, WM, EBK, möbl., ab sofort**.',
            '**Warmmiete = Kaltmiete + Nebenkosten.** **Kaution** ~ 3 chhour.',
            'Email rasmi: **Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen**.',
          ],
          ['T9ra annonce', 'Tttasel bach tchouf d-dar', 'Tkteb email rasmi 9sir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 7',
      description: 'Muraja3a: d-dar, l-meubles, sifat, ihn/sie/es, nicht/kein — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-unité 7', 'Thder 3la d-dar f mo7adatha', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 7', 'D-dar, l-meubles, l-annonces, ihn/sie/es o nicht/kein. Yallah!', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | Nom. | er | sie | es | ich | du | wir | ihr |
            |---|---|---|---|---|---|---|---|
            | **Akk.** | **ihn** | sie | es | **mich** | **dich** | **uns** | **euch** |

            - "Wie findest du den Tisch? — Ich finde **ihn** toll."
            - **kein** ↔ ein / bla article; **nicht** ↔ l-ba9i.
            - **zu** teuer = ktar men l-lazem.
          `,
        ),
        dialogue(
          'Die neue Wohnung',
          [
            ['Youssef', 'Und? Wie ist die Wohnung in Ehrenfeld?', 'Iwa? Kif dayra d-dar f Ehrenfeld?'],
            ['Salma', 'Sie ist toll! Sie ist hell und hat einen Balkon.', 'Zwina bzaf! Fiha d-dow o fiha balcon.'],
            ['Youssef', 'Und die Küche?', 'O l-kouzina?'],
            ['Salma', 'Die Küche ist klein, aber ich finde sie praktisch. Es gibt eine Spülmaschine!', 'L-kouzina sghira, walakin kan-chouf-ha pratique. Fiha machina d l-mwa3en!'],
            ['Youssef', 'Und die Miete?', 'O l-kra?'],
            ['Salma', 'Nicht zu teuer: 570 Euro warm. Aber es gibt keinen Aufzug, und sie ist im dritten Stock.', 'Machi ghaliya bzaf: 570 warm. Walakin ma kaynch l-ascenseur, o hiya f t-tabe9 t-talet.'],
            ['Youssef', 'Kein Problem! Ich helfe dir beim Umzug.', 'Machi mochkil! Ghadi n3awnek f r-ra7il.'],
          ],
        ),
        choice('Chno ma kaynch f d-dar jdida?', ['Balkon', 'Aufzug (ascenseur)', 'Spülmaschine'], 1),
        gap('Kemmel', 'Die Küche ist klein, aber ich finde ___ praktisch. Es gibt ___ Aufzug.', ['sie', 'keinen']),
        match('Rbet', [
          ['möbliert', 'fih l-meubles'],
          ['ab sofort', 'men daba'],
          ['die Nebenkosten', 't-takalif'],
          ['der Umzug', 'r-ra7il (déménagement)'],
        ]),
        speak(
          'Role-play: tsowwel 3la d-dar',
          'Sa7bek kayn kay9elleb 3la dar. Sowwlou 3la d-dar jdida dyalou: ch7al men bit, wach kbira, b ch7al, o goul rayek.',
          ['Wie viele Zimmer hat die Wohnung?', 'Ist sie groß?', 'Wie hoch ist die Miete?', 'Ich finde die Wohnung schön, aber zu teuer.'],
        ),
        graded(choice('"Wie findest du das Sofa?" — "Ich finde ___ bequem."', ['ihn', 'sie', 'es'], 2)),
        graded(gap('Kemmel', 'Der Schrank ist zu groß. Ich kaufe ___ nicht.', 'ihn')),
        graded(choice('"Das ist ___ Problem."', ['nicht', 'kein'], 1)),
        graded(choice('"Die Wohnung ist ___ ruhig."', ['kein', 'nicht'], 1)),
        graded(gap('Kemmel', 'Besuchst du ___ morgen? (7na)', 'uns')),
        graded(choice('"der Kühlschrank" howa…', ['l-frigo', 'l-placard', 'l-machina d t-tsbin'], 0)),
        graded(choice('500 € KM + 100 € NK = ch7al WM?', ['500 €', '600 €', '400 €'], 1)),
        graded(translate("Terjem l l'Almaniya", 'D-dar ma fihach balcon.', ['Die Wohnung hat keinen Balkon.', 'Das Haus hat keinen Balkon.'])),
        graded(choice('Imta katkoun r-rakha (Ruhezeit) f l-lil?', ['20 – 6', '22 – 6', '24 – 8'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich finde die Küche zu klein.')),
        summary(
          [
            'Daba t9der twesef d-dar, t9ra annonce, o t9ol rayek.',
            '**ihn / sie / es** o **nicht / kein** — jouj d l-asas dyal l-Almaniya.',
            'F l-unité 8: l-mdina, t-tri9, l-mouwasalat, o **l-Dativ** (in der Stadt, mit dem Bus).',
          ],
          ['Twesef d-dar', 'T9ol rayek b "finden"', 'Tkhdem nicht/kein', 'T9ra annonce o tkteb email'],
          'Khlasa dyal l-unité 7',
        ),
      ],
    },
  ],
});
