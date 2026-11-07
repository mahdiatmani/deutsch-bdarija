import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 11,
  title: 'Kleidung & Mode',
  description: "L-7wayej, l-alwan, l-9iyasat, l-chri f l-magasin, \"Die Jacke gefällt mir\", o l-Perfekt m3a sein.",
  icon: 'checkroom',
  objectives: [
    'Tsemmi l-7wayej o l-alwan',
    'Tchri 7wayej: l-9iyas, l-ti9as, t-taman',
    'T9ol wach 3jbatek chi 7aja: "Die Jacke gefällt mir."',
    'Tkhdem dieser / welcher',
    'Thder 3la l-madi b sein: "Ich bin gefahren."',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ich suche eine Winterjacke',
      description: 'L-7wayej, l-alwan, l-9iyasat o l-hedra f l-magasin.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-7wayej o l-alwan', 'Tsowwel 3la l-9iyas o tti9as', 'Tchri f l-magasin'],
      steps: [
        intro(
          'Jacket dyal ch-chta',
          'F l-unité 6 Youssef 9al l mmou belli ghadi ychri jacket skhouna. Lyouma s-sebt: mcha m3a Salma l magasin d l-7wayej f Schildergasse (z-zen9a d t-tsewwi9 f Köln).',
          ['Tsemmi l-7wayej', 'Tgoul l-alwan', 'Tchri f l-magasin'],
        ),
        dialogue(
          'Im Kaufhaus',
          [
            ['Verkäuferin', 'Guten Tag! Kann ich Ihnen helfen?', 'Nharek sa3id! N9der n3awnek?'],
            ['Youssef', 'Ja, bitte. Ich suche eine Winterjacke.', 'Ah, 3afak. Kan9elleb 3la jacket dyal ch-chta.'],
            ['Verkäuferin', 'Welche Größe haben Sie?', 'Ch7al l-9iyas dyalek?'],
            ['Youssef', 'Größe M, glaube ich.', 'M, kandenn.'],
            ['Verkäuferin', 'Die Jacken sind hier. Wie gefällt Ihnen diese Jacke in Blau?', 'L-jackets hna. Kif ban lik had l-jacket b z-zre9?'],
            ['Youssef', 'Sie gefällt mir gut. Kann ich sie anprobieren?', '3jbatni. N9der nti9asha?'],
            ['Verkäuferin', 'Natürlich. Die Umkleidekabine ist dort links.', 'Akid. Cabine d t-ti9as tmma 3la l-yser.'],
            ['Salma', 'Und? Passt sie?', 'Iwa? Ja9a?'],
            ['Youssef', 'Nein, sie ist zu klein. Haben Sie die Jacke auch in L?', 'La, sghira bzaf. Wach 3endkom had l-jacket ta b L?'],
            ['Verkäuferin', 'Ja, hier, bitte.', 'Ah, hak.'],
            ['Youssef', 'Die passt perfekt! Was kostet sie?', 'Hadi ja9a bdebt! B ch7al?'],
            ['Verkäuferin', 'Sie ist im Angebot: 89 Euro statt 129 Euro.', 'Fiha promotion: 89 euro f blast 129.'],
            ['Youssef', 'Super, ich nehme sie!', 'Mzyan, ghadi nakhodha!'],
          ],
        ),
        vocab('Kleidung — L-7wayej', [
          ['die Jacke', 'l-jacket / l-veste', 'die Jacken'],
          ['der Mantel', 'l-manteau', 'die Mäntel'],
          ['der Pullover', 'l-pull', 'die Pullover'],
          ['das T-Shirt', 't-tichert', 'die T-Shirts'],
          ['das Hemd', 'l-9amija', 'die Hemden'],
          ['die Bluse', 'l-blouse (dyal l-3yalat)', 'die Blusen'],
          ['die Hose', 's-serwal', 'die Hosen'],
          ['die Jeans', 'l-jean', 'die Jeans'],
          ['der Rock', 'l-jupe', 'die Röcke'],
          ['das Kleid', 'l-keswa / r-robe', 'die Kleider'],
          ['der Schuh', 's-sebbat', 'die Schuhe'],
          ['der Schal', 'l-écharpe', 'die Schals'],
          ['die Mütze', 't-ta9iya / l-bonnet', 'die Mützen'],
          ['das Kopftuch', 'l-mendil / l-foulard', 'die Kopftücher'],
        ]),
        vocab('Farben — L-alwan', [
          ['rot', '7mer'],
          ['blau', 'zre9'],
          ['grün', 'khder'],
          ['gelb', 'sfer'],
          ['schwarz', 'k7el'],
          ['weiß', 'byed'],
          ['grau', 'rmadi'],
          ['braun', '9ehwi / bni'],
          ['orange', 'limouni (orange)'],
          ['rosa', 'rose'],
          ['lila', 'mauve'],
          ['hell- / dunkel-', 'fate7 / ghame9', '', ['dunkelblau', 'zre9 ghame9']],
        ]),
        explain(
          'F l-magasin',
          md`
            | Bach… | Katgoul |
            |---|---|
            | tgoul chno bghiti | "Ich suche eine Hose." / "Ich brauche Schuhe." |
            | l-9iyas | "Welche Größe haben Sie?" — "Größe 40 / M." Sbbat: "Schuhgröße 43." |
            | t-ti9as | "Kann ich das anprobieren?" — "Wo sind die Umkleidekabinen?" |
            | l-lwen | "Haben Sie die Hose auch in Schwarz?" |
            | l-mochkil | "Sie ist zu klein / zu groß / zu teuer." |
            | l-9arar | "Ich nehme sie." / "Ich überlege noch." (*mazal kanfekker*) |

            **das / die / den** f blast s-smiya: "Die Jacke? **Die** nehme ich!" — "Den Pullover? **Den** finde ich schön." (b7al ihn/sie/es, walakin a9wa.)
          `,
          [
            ['Haben Sie das Kleid auch in Größe 38?', 'Wach 3endkom had r-robe ta f 38?'],
            ['Die Schuhe sind zu teuer.', 'S-sbbat ghali bzaf.'],
            ['Ich überlege noch.', 'Mazal kanfekker.'],
          ],
        ),
        match('Rbet', [
          ['die Hose', 's-serwal'],
          ['der Rock', 'l-jupe'],
          ['das Hemd', 'l-9amija'],
          ['die Mütze', 'l-bonnet'],
          ['der Mantel', 'l-manteau'],
        ]),
        choice('Chno l-lwen dyal t-telj?', ['schwarz', 'weiß', 'grau'], 1),
        choice('Ch7al chra Youssef l-jacket?', ['129 €', '89 €', '40 €'], 1),
        choice('Ach kan l-mochkil m3a l-jacket l-oula?', ['Ghaliya', 'Sghira bzaf', 'L-lwen'], 1),
        gap('Kemmel', 'Kann ich die Hose ___? (nti9as)', 'anprobieren'),
        order('Rtteb', 'Haben Sie die Jacke auch in Schwarz?'),
        speak(
          'F l-magasin',
          'Nta f l-magasin. Goul chno kat9elleb 3lih (pull k7el, M), sowwel wach t9der tti9asou, goul belli kbir bzaf, o tleb 9iyas khor.',
          ['Ich suche einen Pullover in Schwarz.', 'Größe M, bitte.', 'Kann ich ihn anprobieren?', 'Er ist zu groß. Haben Sie ihn auch in S?'],
        ),
        graded(choice('"grün" howa…', ['zre9', 'khder', 'sfer'], 1)),
        graded(choice('"die Umkleidekabine" hiya…', ['l-caisse', 'cabine d t-ti9as', 'l-vitrine'], 1)),
        graded(choice('Ina jomla katgoulha ila ma bghitich tchri daba?', ['Ich nehme sie.', 'Ich überlege noch.', 'Sie passt perfekt.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kan9elleb 3la serwal.', ['Ich suche eine Hose.'])),
        summary(
          [
            'L-7wayej: **die Jacke, der Pullover, die Hose, das Kleid, das Hemd, die Schuhe…** — l-alwan: **rot, blau, grün, schwarz, weiß…**',
            '**Welche Größe? — Kann ich das anprobieren? — Sie ist zu klein. — Ich nehme sie.**',
          ],
          ['Tsemmi l-7wayej o l-alwan', 'Tchri f l-magasin'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Die Jacke gefällt mir — Dativ-Pronomen & dieser',
      description: 'mir, dir, ihm, ihr… m3a gefallen, passen, stehen, gehören — o dieser / welcher.',
      minutes: 30,
      kind: 'grammar',
      goals: ['Tkhdem d-dama2ir f d-Dativ: mir, dir, ihm…', 'Tkhdem gefallen, passen, stehen, gehören, helfen', 'Tkhdem dieser / welcher'],
      steps: [
        intro(
          '"Gefällt mir" — chkoun l-fa3il?',
          md`
            Bach tgoul *3jbatni l-jacket*, l'Almaniya katgoul: "Die Jacke **gefällt mir**." — l-**jacket** hiya l-fa3il (hiya li "kat3jeb"), o **ana** f **d-Dativ** (*mir*). B7al f Darija: *l-jacket 3jbat-**ni***!
          `,
          ['D-dama2ir f d-Dativ', 'Af3al + Dativ', 'dieser / welcher'],
        ),
        explain(
          'D-dama2ir f d-Dativ',
          md`
            | Nominativ | Akkusativ | **Dativ** | Darija |
            |---|---|---|---|
            | ich | mich | **mir** | -li / liya |
            | du | dich | **dir** | -lek / lik |
            | er | ihn | **ihm** | -lou / lih |
            | sie | sie | **ihr** | -lha / liha |
            | es | es | **ihm** | -lou |
            | wir | uns | **uns** | -lna |
            | ihr | euch | **euch** | -lkom |
            | sie / Sie | sie / Sie | **ihnen / Ihnen** | -lhom / lik (rasmi) |

            Rd l-bal: **ihr** = *hiya f d-Dativ* (liha) o ta *ntouma*. Mn l-ma3na katfhem.
          `,
        ),
        explain(
          'Af3al dyal d-Dativ',
          md`
            Had l-af3al kayjibou **d-Dativ** (machi Akkusativ):

            | Fi3l | Mital | Darija |
            |---|---|---|
            | **gefallen** | Die Jacke gefällt **mir**. | 3jbatni l-jacket. |
            | **passen** | Die Hose passt **dir** nicht. | S-serwal ma ja9ch 3lik (l-9iyas). |
            | **stehen** | Rot steht **ihr** gut. | L-7mer zwin 3liha. |
            | **gehören** | Das Handy gehört **ihm**. | T-tilifoun dyalou. |
            | **helfen** | Kann ich **Ihnen** helfen? | N9der n3awnek? |
            | **danken** | Ich danke **dir**! | Chokran lik! |
            | **schmecken** | Schmeckt **es dir**? | Wach 3jbatek l-makla? |

            M3a **gefallen, passen, stehen**: **l-7aja hiya l-fa3il** → l-fi3l kaytbe3ha:
            - "Die Schuh**e** gefall**en** mir." (jam3 → gefallen)
            - "Der Pullover gefällt mir nicht."

            "Wie geht es **dir**?" — "Es geht **mir** gut." (ta Dativ!)
          `,
          [
            ['Gefällt dir mein Kleid?', 'Wach 3jbatek r-robe dyali?'],
            ['Wem gehört die Tasche? — Sie gehört mir.', 'Dyal chkoun had s-sak? — Dyali.'],
            ['Die Farbe steht dir super!', 'L-lwen zwin bzaf 3lik!'],
          ],
          'S-sou2al dyal d-Dativ howa **Wem?** (l chkoun?): "**Wem** gehört das?"',
        ),
        choice('"Die Schuhe gefallen ___." (ana)', ['mich', 'mir', 'ich'], 1),
        choice('"Kann ich ___ helfen?" (rasmi)', ['Sie', 'Ihnen', 'Ihr'], 1),
        gap('Kemmel', 'Das Auto gehört ___. (howa)', 'ihm'),
        gap('Kemmel', 'Blau steht ___ gut, Salma! (nti)', 'dir'),
        gap('Kemmel', 'Wie geht es ___? (houma) — Es geht ___ gut.', ['ihnen', 'ihnen']),
        choice('"Die Hose ___ mir nicht." (l-9iyas)', ['steht', 'passt', 'gehört'], 1),
        choice('"Die Stiefel ___ mir." (3jbouni)', ['gefällt', 'gefallen'], 1, 'L-fa3il "die Stiefel" jam3 → gefall**en**.'),
        explain(
          'dieser / welcher',
          md`
            **dieser** = *hada / hadi* (had…), **welcher** = *ina?* — kaytbe3ou n-nihayat dyal **der / die / das**:

            | | der | die | das | jam3 |
            |---|---|---|---|---|
            | Nom. | dies**er** / welch**er** | dies**e** / welch**e** | dies**es** / welch**es** | dies**e** / welch**e** |
            | Akk. | dies**en** / welch**en** | dies**e** / welch**e** | dies**es** / welch**es** | dies**e** / welch**e** |

            (dies**er** ← d**er**, dies**en** ← d**en**, dies**es** ← da**s**.)

            - "**Welcher** Pullover gefällt dir?" — "**Dieser** hier!"
            - "**Welche** Jacke nimmst du?" — "Ich nehme **diese**."
            - "Ich finde **diesen** Mantel schön." (Akkusativ, der → diesen)
          `,
          [
            ['Welches Kleid kaufst du?', 'Ina robe ghadi tchri?'],
            ['Diese Schuhe sind bequem.', 'Had s-sbbat mri7.'],
          ],
        ),
        choice('"___ Größe haben Sie?" (die Größe)', ['Welcher', 'Welche', 'Welches'], 1),
        choice('"Ich nehme ___ Rock." (der Rock, Akkusativ)', ['dieser', 'diesen', 'dieses'], 1),
        gap('Kemmel', '___ T-Shirt gefällt dir? (das T-Shirt)', 'Welches'),
        order('Rtteb', 'Gefällt dir diese Jacke?'),
        translate("Terjem l l'Almaniya", '3jbni had l-pull.', ['Dieser Pullover gefällt mir.', 'Der Pullover gefällt mir.']),
        graded(choice('"Die Jacke gefällt ___." (hiya)', ['sie', 'ihr', 'ihm'], 1)),
        graded(gap('Kemmel', 'Ich danke ___ für die Hilfe! (ntouma)', 'euch')),
        graded(choice('"Wem gehört der Schlüssel?" — "Er gehört ___." (7na)', ['uns', 'wir', 'unser'], 0)),
        graded(choice('"Die Schuhe ___ mir nicht."', ['passt', 'passen'], 1)),
        graded(gap('Kemmel', 'Ich finde ___ Mantel zu teuer. (dieser, der Mantel, Akk.)', 'diesen')),
        graded(translate("Terjem l l'Almaniya", 'L-lwen zwin 3lik.', ['Die Farbe steht dir.', 'Die Farbe steht dir gut.'])),
        summary(
          [
            'Dativ: **mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen**.',
            '**gefallen, passen, stehen, gehören, helfen, danken, schmecken** + Dativ.',
            '"Die Jacke **gefällt mir**." — l-7aja hiya l-fa3il.',
            '**dieser / welcher** b7al der: dies**en** f l-Akkusativ.',
          ],
          ['T9ol wach 3jbatek chi 7aja', 'Tgoul dyal chkoun chi 7aja', 'Tkhdem dieser / welcher'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Ich bin in die Stadt gefahren — Perfekt mit sein',
      description: 'L-Perfekt m3a sein (af3al l-7araka), o 7ikaya 3la nhar t-tsewwi9.',
      minutes: 30,
      kind: 'skills',
      goals: ['T3ref imta l-Perfekt kaykoun b sein', 'T7ki 3la nhar f l-madi', 'Tfhem l-ister3ad (Umtausch)', 'Tkteb email f l-madi'],
      steps: [
        intro(
          '"Ich bin gefahren", machi "ich habe gefahren"',
          md`
            F l-unité 10 t3llemti l-Perfekt b **haben**. Walakin Youssef kay9ol: "Ich **bin** in die Stadt **gefahren**." — 3lach **bin**? 7it chi af3al kaydirou l-Perfekt b **sein**.
          `,
          ['Perfekt b sein', 'T7ki 3la nhar', 'Tfhem l-ister3ad'],
        ),
        explain(
          'Imta l-Perfekt b "sein"?',
          md`
            Ktar l-af3al kaydirou l-Perfekt b **haben**. **Sein** kaykoun m3a:

            **1. L-7araka men blasa l blasa** (bla maf3oul bih):
            gehen → **ist gegangen**, fahren → **ist gefahren**, kommen → **ist gekommen**, fliegen → **ist geflogen**, laufen → **ist gelaufen**, aussteigen → **ist ausgestiegen**

            **2. T-tbdil dyal l-7ala:**
            aufstehen → **ist aufgestanden**, einschlafen → **ist eingeschlafen**, werden → **ist geworden**

            **3. Hadou t-tlata (7fedhom):**
            sein → **ist gewesen**, bleiben → **ist geblieben**, passieren → **ist passiert**

            | 1 | **2 (sein)** | … | **akhir** |
            |---|---|---|---|
            | Ich | **bin** | in die Stadt | **gefahren**. |
            | Salma | **ist** | um 7 Uhr | **aufgestanden**. |
            | Wann | **seid** | ihr nach Hause | **gekommen**? |
            | Was | **ist** | | **passiert**? |
          `,
          [
            ['Wir sind mit dem Bus gefahren.', 'Mchina b l-bus.'],
            ['Ich bin zu Hause geblieben.', 'B9it f d-dar.'],
            ['Bist du schon in Berlin gewesen?', 'Wach mchiti chi merra l Berlin?'],
          ],
          'Tri9a sahla: fakker f **l-7araka**: ila l-fi3l kaydik men blasa l blasa (gehen, fahren, fliegen, kommen) → **sein**.',
        ),
        choice('"Ich ___ nach Bonn gefahren."', ['habe', 'bin'], 1),
        choice('"Ich ___ eine Jacke gekauft."', ['habe', 'bin'], 0),
        gap('Kemmel', 'Wann ___ du heute aufgestanden?', 'bist'),
        gap('Kemmel', 'Wir ___ am Sonntag zu Hause geblieben.', 'sind'),
        gap('Kemmel l-Partizip II', 'Salma ist mit dem Zug ___. (kommen)', 'gekommen'),
        gap('Kemmel l-Partizip II', 'Olena ist nach Kiew ___. (fliegen)', 'geflogen'),
        listening(
          'Mein Samstag',
          [
            ['Olena', 'Na, was habt ihr am Samstag gemacht?', 'Iwa, chno dertou s-sebt?'],
            ['Youssef', 'Wir sind in die Stadt gefahren. Ich habe endlich eine Winterjacke gekauft!', 'Mchina l l-mdina. Chrit akhiran jacket dyal ch-chta!'],
            ['Salma', 'Und ich habe ein Kleid gekauft. Aber es passt mir nicht. Am Montag tausche ich es um.', 'O ana chrit robe. Walakin ma ja9tch 3liya. L-ithnin ghadi nbeddelha.'],
            ['Olena', 'Habt ihr auch etwas gegessen?', 'Wach klitou chi 7aja?'],
            ['Youssef', 'Ja, wir sind in ein Café gegangen. Dann sind wir zum Rhein gelaufen.', 'Ah, dkhelna l chi café. Men b3d mchina 3la rjlina l Rhein.'],
            ['Salma', 'Und dann hat es geregnet! Wir sind schnell nach Hause gefahren.', 'O men b3d tat ch-chta! Rje3na dghya l d-dar.'],
          ],
        ),
        choice('Chno chrat Salma?', ['Jacket', 'Robe', 'Sbbat'], 1),
        choice('3lach ghadi tbeddel Salma r-robe?', ['Ma 3jbatha', 'Ma ja9tch 3liha', 'Ghaliya'], 1),
        choice('Chno w9e3 f l-akhir?', ['Tat ch-chta', 'Tlefou', 'Ma l9awch l-bus'], 0),
        reading(
          'Umtausch und Rückgabe',
          md`
            Modehaus Schick — Umtausch & Rückgabe

            Sie können alle Artikel innerhalb von 14 Tagen umtauschen oder zurückgeben.
            Bitte bringen Sie den Kassenbon mit.
            Die Ware muss ungetragen sein, mit Etikett.
            Reduzierte Ware (Sale) können Sie nur umtauschen, nicht zurückgeben.
            Online gekauft? Sie haben 30 Tage Rückgaberecht.
          `,
          {
            text: '9ra l-9awa3id dyal l-magasin.',
            glossary: [
              ['umtauschen', 'beddel'],
              ['zurückgeben', 'redd (o tredd lik lflous)'],
              ['der Kassenbon', 'l-ticket dyal l-caisse'],
              ['ungetragen', 'ma tlbsatch'],
              ['reduziert', 'fiha promotion'],
            ],
          },
        ),
        choice('Ch7al d l-iyyam 3endek bach tbeddel f l-magasin?', ['7', '14', '30'], 1),
        choice('Chno khass tjib m3ak?', ['L-passport', 'Kassenbon (l-ticket)', 'L-carte bancaire'], 1),
        choice('Chri f Sale (promotion): t9der…', ['Tbeddel ghir', 'Tredd o takhod lflous', 'Walou'], 0),
        culture(
          'T-tsewwi9 f Almaniya',
          md`
            - **Kassenbon** (l-ticket) **dima 7tafed bih**: bla bih ma t9derch tbeddel.
            - **Online-Shopping:** 3endek **14 youm Widerrufsrecht** (l-7a99 f l-ister3ad) b l-9anoun — bzaf d l-magasins kay3tiw 30.
            - **Sale / Schlussverkauf:** f l-akhir dyal s-sif o ch-chta kaynin promotions kbar.
            - **Second Hand / Flohmarkt:** l-marché d l-barghout f l-weekend — rkhis bzaf, o t9der tfasel (*handeln*). F l-magasins 3adiyin **ma kaynach tfasil**.
            - L-9iyasat: Almaniya katkhdem 9iyasat europiya (36, 38, 40… / S, M, L).
          `,
        ),
        pron(
          'L-accent dyal j-jomla',
          'F l\'Almaniya l-accent kaykoun 3la **l-kelma l-mohimma** (l-ma3louma l-jdida). Ghaliban hiya l-Partizip wla s-smiya l-jdida.',
          [
            ['Ich habe eine Jacke gekauft.', 'L-accent 3la "Jacke" (l-ma3louma l-jdida)'],
            ['Wir sind nach Bonn gefahren.', 'L-accent 3la "Bonn"'],
            ['Sie passt mir nicht.', 'L-accent 3la "nicht" (t-ta2kid)'],
            ['Die Jacke gefällt mir sehr.', 'L-accent 3la "sehr"'],
          ],
        ),
        write(
          'Nhar t-tsewwi9',
          'Kteb email l chi sa7bek 3la nhar s-sebt li fat (6–8 jmel): fin mchiti (sein!), chno chriti (haben), chi 7aja 3jbatek wla ma ja9atch 3lik, o chno dirti men b3d.',
          ['Fin mchiti (Ich bin … gefahren / gegangen)', 'Chno chriti (Ich habe … gekauft)', 'gefallen / passen', 'Men b3d (dann … )', 'Twadi3'],
          'Hallo Lukas,\n\nam Samstag bin ich mit Salma in die Stadt gefahren. Ich habe eine Winterjacke gekauft. Sie ist dunkelblau und sie gefällt mir sehr. Salma hat ein Kleid gekauft, aber es passt ihr nicht. Dann sind wir in ein Café gegangen und haben Kuchen gegessen. Danach hat es geregnet und wir sind nach Hause gefahren.\n\nViele Grüße\nYoussef',
          45,
        ),
        graded(choice('"Was ___ passiert?"', ['hat', 'ist'], 1)),
        graded(gap('Kemmel', 'Ich ___ gestern zu Hause geblieben.', 'bin')),
        graded(gap('Kemmel', 'Wir ___ einen Kaffee getrunken.', 'haben')),
        graded(choice('"umtauschen" kay3ni…', ['tchri', 'tbeddel', 'tredd lflous'], 1)),
        graded(dictation('Sme3 o kteb', 'Wir sind mit dem Bus gefahren.')),
        summary(
          [
            'Perfekt b **sein**: 7araka (**gegangen, gefahren, gekommen, geflogen**), tbdil 7ala (**aufgestanden**), o **gewesen, geblieben, passiert**.',
            'L-ba9i → **haben**.',
            '**Kassenbon** dima — 14 youm l-ister3ad online.',
          ],
          ['Tkhtar haben wla sein', 'T7ki 3la nhar f l-madi', 'Tfhem l-9awa3id dyal l-ister3ad'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 11',
      description: 'Muraja3a: l-7wayej, d-Dativ (mir, dir…), dieser/welcher, Perfekt b sein — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-unité 11', 'Tchri o t9ol rayek', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 11', 'L-7wayej, l-alwan, mir/dir, gefallen/passen, dieser/welcher, o l-Perfekt b sein.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | Nom. | ich | du | er | sie | wir | ihr | sie/Sie |
            |---|---|---|---|---|---|---|---|
            | Akk. | mich | dich | ihn | sie | uns | euch | sie/Sie |
            | **Dat.** | **mir** | **dir** | **ihm** | **ihr** | **uns** | **euch** | **ihnen/Ihnen** |

            - **gefallen, passen, stehen, gehören, helfen, danken** + Dativ.
            - Perfekt: **sein** m3a l-7araka o tbdil l-7ala + sein/bleiben/passieren; l-ba9i **haben**.
          `,
        ),
        dialogue(
          'Im Schuhgeschäft',
          [
            ['Verkäufer', 'Kann ich Ihnen helfen?', 'N9der n3awnek?'],
            ['Salma', 'Ja, diese Stiefel hier gefallen mir. Haben Sie sie in Größe 39?', 'Ah, had l-botes 3jbouni. Wach 3endkom f 39?'],
            ['Verkäufer', 'Einen Moment … Ja, hier.', 'Tsenni chwiya… Ah, hak.'],
            ['Salma', 'Hm, sie passen mir, aber sie sind ein bisschen eng.', 'Hm, ja9ou, walakin dyye9in chwiya.'],
            ['Verkäufer', 'Dann nehmen Sie lieber Größe 40.', 'Iwa khoudi a7ssen 40.'],
            ['Salma', 'Ja, die sind perfekt. Was kosten sie?', 'Ah, hadou bdebt. B ch7al?'],
            ['Verkäufer', '75 Euro.', '75 euro.'],
            ['Salma', 'Gut, ich nehme sie. Kann ich mit Karte zahlen?', 'Mzyan, ghadi nakhodhom. N9der nkhelles b l-carte?'],
          ],
        ),
        choice('Ach chrat Salma?', ['Botes (Stiefel) f 39', 'Botes f 40', 'Sbbat d r-riyada'], 1),
        gap('Kemmel', 'Diese Stiefel gefallen ___. Sie passen ___, aber sie sind eng. (ana)', ['mir', 'mir']),
        match('Rbet', [
          ['Wem gehört das?', 'Dyal chkoun hadi?'],
          ['Das steht dir.', 'Zwin 3lik.'],
          ['Es passt mir nicht.', 'Ma ja9ch 3liya.'],
          ['Schmeckt es dir?', '3jbatek l-makla?'],
        ]),
        speak(
          'Role-play: 3tini rayek',
          'Sa7btek ti9aset jacket 7mra o katsowlek: *"Wie findest du die Jacke? Steht sie mir?"* — Jaweb b rayek o 9tare7 lwen khor.',
          ['Die Jacke gefällt mir.', 'Rot steht dir gut.', 'Aber sie ist ein bisschen zu groß.', 'Probier doch diese Jacke in Blau!'],
        ),
        graded(choice('"Der Rock gefällt ___." (hiya)', ['sie', 'ihr', 'ihm'], 1)),
        graded(gap('Kemmel', 'Wie geht es ___? (nta) — Danke, gut!', 'dir')),
        graded(choice('"___ Schuhe nimmst du?" (jam3)', ['Welcher', 'Welche', 'Welches'], 1)),
        graded(gap('Kemmel', 'Ich nehme ___ Pullover hier. (dieser, Akk.)', 'diesen')),
        graded(choice('"Er ___ nach Hause gegangen."', ['hat', 'ist'], 1)),
        graded(choice('"Sie ___ ein Kleid gekauft."', ['hat', 'ist'], 0)),
        graded(gap('Kemmel l-Partizip II', 'Bist du schon in Hamburg ___? (sein)', 'gewesen')),
        graded(choice('"schwarz" howa…', ['byed', 'k7el', 'rmadi'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Had t-tilifoun dyali.', ['Das Handy gehört mir.', 'Dieses Handy gehört mir.'])),
        graded(dictation('Sme3 o kteb', 'Die Jacke passt mir nicht.')),
        summary(
          [
            'Daba t9der tchri l-7wayej, t9ol rayek o t7ki 3la l-madi b haben o sein.',
            'F l-unité 12 (l-akhira f A1): t-tarikh, l-a3yad, d-d3awat, o kifach tktb d3awa wla trfodha.',
          ],
          ['Tchri l-7wayej', 'Tkhdem mir / dir m3a gefallen, passen…', 'Tkhdem dieser / welcher', 'Tkhdem l-Perfekt b sein'],
          'Khlasa dyal l-unité 11',
        ),
      ],
    },
  ],
});
