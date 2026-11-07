import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 11,
  title: 'Heimat & Globalisierung',
  description: "L-hawiya, l-hijra o l-3awlama — b ttisa9 n-nass (Verweiswörter, Pronominaladverbien), t-tartib f l-Mittelfeld o l-mostawayat d l-lougha (Register).",
  icon: 'travel_explore',
  objectives: [
    'T3ber 3la l-hawiya o "Heimat" b d9a o b nuances',
    'Tnaqech l-ijabiyat o s-salbiyat dyal l-3awlama',
    'Tkhdem Verweiswörter o Pronominaladverbien bach tkhlli n-nass mtrabet',
    'Tdir t-tartib s-s7i7 f l-Mittelfeld (Dat / Akk, TeKaMoLo, nicht)',
    'Tbeddel l-Register bin rasmi o ghayr rasmi',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Was ist Heimat?',
      description: 'L-kalimat d l-hawiya o l-hijra, o kifach tnaqech "Heimat" b infita7.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-hawiya o l-hijra', 'T3ber 3la l-i7sas b l-intima2', 'Tnaqech l-hawiya l-mota3addida'],
      steps: [
        intro(
          'Zwischen zwei Welten',
          'Youssef rje3 men 3otla f Casa. L-merra hadi 7ess b chi 7aja ghriba: f Casa kaygoulou 3lih "l-almani", o f Köln "l-maghribi". Fin hiya Heimat dyalou?',
          ['L-hawiya', 'L-intima2', 'Heimat'],
        ),
        dialogue(
          'Heimweh oder Fernweh?',
          [
            ['Lukas', 'Na, wie war Casablanca? Hattest du kein Heimweh nach Köln?', 'Iwa, kifach kanet Casa? Ma twe7chtich Köln?'],
            ['Youssef', 'Ehrlich gesagt schon, und das hat mich überrascht. Nach drei Tagen habe ich mein Fahrrad und unsere WG vermisst.', 'B s-sra7a ah, o hadchi fajani. Men b3d 3 iyyam twe7cht l-bichklita dyali o l-WG dyalna.'],
            ['Lukas', 'Ist Köln jetzt deine Heimat?', 'Wach Köln daba hiya Heimat dyalek?'],
            ['Youssef', 'Ich würde sagen, ich habe zwei. Marokko ist der Ort, an dem meine Wurzeln sind. Köln ist der Ort, den ich mir selbst ausgesucht habe. Beides gehört zu mir.', 'Ngoul 3andi jouj. L-Maghrib howa l-blassa fin jdouri. O Köln hiya l-blassa li khtartha ana. Ij-jouj jouz2 menni.'],
            ['Lukas', 'Das finde ich schön. Für mich ist Heimat eher ein Gefühl als ein Ort.', 'Hadchi zwin. 3andi Heimat i7sas ktar men blassa.'],
            ['Youssef', 'Genau das meine ich. Dort, wo man verstanden wird, ist man zu Hause.', 'Hadchi bdebt li kan9sed. Fin kayfhmouk, temma nta f darek.'],
          ],
        ),
        vocab('Heimat & Identität — L-hawiya', [
          ['die Heimat', 'l-blad / l-mo7it li kat7ess fih b l-intima2', ''],
          ['das Heimweh / das Fernweh', 'l-we7ch d l-blad / l-we7ch d s-safar', ''],
          ['die Wurzeln (Pl.)', 'l-jdour / l-asl', ''],
          ['die Zugehörigkeit', 'l-intima2', ''],
          ['die Identität', 'l-hawiya', ''],
          ['die Einwanderung / auswandern', 'l-hijra (l-dakhel) / hajar (l kharej)', ''],
          ['die Einbürgerung', 't-tajnis (l-jinsiya)', ''],
          ['die doppelte Staatsbürgerschaft', 'j-jinsiya l-mozdawija', ''],
          ['sich zugehörig fühlen', '7ess b l-intima2', ''],
          ['fremd', 'gharib', ''],
          ['die Globalisierung', 'l-3awlama', ''],
          ['vernetzt', 'mrbout / f chabaka', ''],
          ['die Vielfalt', 't-tanawwo3', ''],
          ['prägen', 'tba3 / ather f (chakhsiya)', '', ['Die Jahre in Köln haben mich geprägt.', 'S-snin f Köln tb3ouni / atharou fiya.']],
        ]),
        explain(
          'T3ber 3la l-hawiya b nuances',
          md`
            | Bach… | Redemittel |
            |---|---|
            | l-intima2 | "Ich fühle mich (sowohl) … (als auch) … zugehörig." — "… ist ein Teil von mir." |
            | l-ghorba | "Manchmal fühle ich mich fremd, wenn …" — "Ich sitze zwischen zwei Stühlen." |
            | t-ta2thir | "… hat mich stark geprägt." — "Ich habe viel von beiden Kulturen mitgenommen." |
            | t-ta3rif | "Für mich bedeutet Heimat …" — "Heimat ist für mich weniger ein Ort als …" |
          `,
          [
            ['Ich sitze manchmal zwischen zwei Stühlen.', 'Mrrat kan7ess rasi bin jouj d l-koursiyat (ma mntamich l 7ta wa7da kamla).'],
            ['Heimat ist für mich weniger ein Ort als ein Gefühl.', 'Heimat 3andi i7sas ktar men blassa.'],
          ],
        ),
        match('Rbet', [
          ['das Heimweh', 'l-we7ch d l-blad'],
          ['die Wurzeln', 'l-jdour'],
          ['die Zugehörigkeit', 'l-intima2'],
          ['die Einbürgerung', 't-tajnis'],
          ['prägen', 'tba3 / ather f'],
        ]),
        choice('Chno twe7ch Youssef f Casa?', ['L-makla l-almaniya', 'L-bichklita o l-WG', 'L-khedma'], 1),
        choice('3la 7sab Youssef, Köln hiya…', ['Blad jdourou', 'L-blassa li khtarha b rasou', 'Blassa ghriba'], 1),
        choice('"Ich sitze zwischen zwei Stühlen" kat3ni…', ['Ma mntamich kamel l 7ta jiha', '3endi bzaf d l-ath-ath', 'Ana ta3ban'], 0),
        gap('Kemmel', 'Ich fühle mich beiden Ländern ___. Die Jahre in Köln haben mich stark ___.', ['zugehörig', 'geprägt']),
        order('Rtteb', 'Heimat ist für mich weniger ein Ort als ein Gefühl.'),
        culture(
          'Einbürgerung f Almaniya (men 2024)',
          md`
            - **9anoun j-jinsiya j-jdid** (Juni 2024): t9der ttleb t-tajnis men b3d **5 snin** d l-i9ama (9bel: 8), o **j-jinsiya l-mozdawija** welat mesmou7a — ma b9itich mjbour tkhli l-jinsiya l-maghribiya.
            - Ch-chorout: **B1** f l-almaniya, **Einbürgerungstest** (33 so2al 3la l-mojtama3 o s-siyasa), d-dakhl dyalek, o l-i3tiraf b d-dimo9ratiya.
            - **L-Maghrib:** l-jinsiya l-maghribiya ghaliban **ma kat-tlghach** — l-maghariba f l-kharej kayb9aw maghariba.
            - Almaniya fiha ktar men **25 %** d s-sokkan 3endhom "**Migrationshintergrund**" (homa wla wa7ed men l-walidin ja men kharej).
          `,
        ),
        speak(
          'Chno hiya Heimat 3andek?',
          '3errf "Heimat" b kalimatek: wach blassa, nas, lougha, ri7a…? 7ki 3la mo9if 7essiti fih b l-ghorba o mo9if 7essiti fih b l-intima2.',
          ['Für mich bedeutet Heimat vor allem meine Familie.', 'Manchmal fühle ich mich fremd, wenn ich in Marokko Deutsch denke.', 'Ich fühle mich beiden Kulturen zugehörig.', 'Die Jahre im Ausland haben mich stark geprägt.'],
        ),
        graded(choice('"das Fernweh" =', ['L-we7ch d s-safar (bghit nsafer)', 'L-we7ch d l-blad', 'L-mard'], 0)),
        graded(choice('"die Vielfalt" =', ['t-tanawwo3', 'l-hawiya', 'l-ghorba'], 0)),
        graded(gap('Kemmel', 'Seit 2024 ist die doppelte ___ in Deutschland erlaubt.', 'Staatsbürgerschaft|Staatsbuergerschaft|Staatsangehörigkeit|Staatsangehoerigkeit')),
        graded(translate("Terjem l l'Almaniya", 'Heimat 3andi i7sas ktar men blassa.', ['Heimat ist für mich weniger ein Ort als ein Gefühl.', 'Heimat ist für mich eher ein Gefühl als ein Ort.', 'Für mich ist Heimat eher ein Gefühl als ein Ort.'])),
        summary(
          [
            'L-hawiya: **die Heimat, das Heimweh, die Wurzeln, die Zugehörigkeit, die Einbürgerung, prägen, die Vielfalt**.',
            '**Ich fühle mich … zugehörig. — Ich sitze zwischen zwei Stühlen. — Heimat ist für mich weniger … als …**',
          ],
          ['T3ber 3la l-hawiya', 'Tnaqech "Heimat"'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Dies, deren, darauf — Textzusammenhang & Wortstellung',
      description: 'Verweiswörter o Pronominaladverbien (bach n-nass ykoun mtrabet), t-tartib f l-Mittelfeld, o l-Register.',
      minutes: 45,
      kind: 'grammar',
      goals: ['Tkhdem Verweiswörter (dies, dieser, jener, ersterer / letzterer, derselbe)', 'Tkhdem Pronominaladverbien (dadurch, damit, darauf …) l r-rabt', 'Tdir t-tartib s-s7i7 f l-Mittelfeld', 'Tbeddel l-Register'],
      steps: [
        intro(
          'Ein Text ist mehr als Sätze',
          md`
            F B2, l-imti7an kaychouf wach n-nass dyalek **mtrabet** (kohärent): wach kat3awed nefs l-kelma kol merra, wla katkhdem **Verweiswörter** (dies, letzterer, dadurch …)?
            O wach l-kalimat f **t-tartib s-s7i7** f l-wost d l-jomla? O wach **l-mostawa** (rasmi / ghayr rasmi) mnaseb?
          `,
          ['Verweiswörter', 'Mittelfeld', 'Register'],
        ),
        explain(
          'Verweiswörter',
          md`
            | Kelma | Kat3awed 3la | Mital |
            |---|---|---|
            | **dies / das** | jomla kamla | Viele wandern aus. **Dies** hat verschiedene Gründe. |
            | **dieser / diese / dieses** | smiya 9riba | Ich las ein Buch. **Dieses** hat mich geprägt. |
            | **ersterer / letzterer** | l-lowel / l-akhir (men jouj) | Es gibt Pull- und Push-Faktoren. **Letztere** sind z. B. Krieg oder Armut. |
            | **derselbe / dieselbe** | nefs l-chi | Sie arbeiten in **derselben** Firma. |
            | **solch- / ein solch-** | b7al hadchi | **Eine solche** Entscheidung fällt schwer. |
            | **Folgendes / folgende** | li ghadi yji | Ich möchte **Folgendes** sagen: … |
            | **erwähnt / genannt** | li tdker | die **oben genannten** Gründe |

            Tri9a: f n-nass, ma t3awedch nefs s-smiya 3 d l-merrat — khdem **pronom, Verweiswort wla mourad** (Synonym): *Migranten → sie → diese Menschen → die Zugewanderten*.
          `,
          [
            ['Viele Familien leben getrennt. Dies stellt sie vor große Herausforderungen.', 'Bzaf d l-3a2ilat 3aychin mfr9in. Hadchi kayhttom 9oddam t7addiyat kbar.'],
            ['Salma und Olena studieren; erstere Informatik, letztere Medizin.', 'Salma o Olena kay9raw; l-lowla informatique, o t-tanya t-tibb.'],
          ],
        ),
        choice('"Es gibt Vor- und Nachteile. ___ überwiegen meiner Meinung nach." (l-lowlin = l-ijabiyat)', ['Erstere', 'Letztere', 'Dieselben'], 0),
        choice('"Die Mieten steigen. ___ ist vor allem für Studierende ein Problem."', ['Dies', 'Dieser', 'Derselbe'], 0),
        gap('Kemmel', 'Wir wohnen im ___ Haus wie unsere Großeltern. (nefs)', 'selben|gleichen'),
        explain(
          'Pronominaladverbien b7al roubat',
          md`
            **da(r) + préposition** katrbet bin l-jmel — kat3awed 3la **chi 7aja 9bel**:

            > Viele Migranten lernen schnell Deutsch. **Dadurch** finden sie leichter Arbeit. (b hadchi)
            > Die Firma bietet Sprachkurse an. **Damit** will sie Fachkräfte gewinnen. (b hadchi / l had l-hadaf)
            > Er hat Heimweh. **Darüber** spricht er aber selten. (3la hadchi)
            > Sie bekam die Einbürgerung. **Darauf** hatte sie fünf Jahre gewartet. (hadchi li tsennat)

            M3a **jomla** men b3d: "Es kommt **darauf** an, **ob** …" — "Ich habe mich **daran** gewöhnt, **dass** …" (chefnaha f B1).
            ⚠️ L **n-nas** (machi l-7wayej) → préposition + pronom: "Ich denke oft **an sie**." (machi ~~daran~~)
          `,
        ),
        choice('"Er spricht drei Sprachen. ___ hat er im Beruf Vorteile." (b hadchi)', ['Dadurch', 'Darauf', 'Daran'], 0),
        choice('"Meine Oma lebt in Fès. Ich denke oft ___."', ['an sie', 'daran', 'darauf'], 0),
        gap('Kemmel', 'Sie hat endlich den Pass bekommen. ___ hatte sie lange gewartet. (warten auf)', 'Darauf'),
        explain(
          'T-tartib f l-Mittelfeld',
          md`
            **1. Dativ ↔ Akkusativ:**
            | | Mital |
            |---|---|
            | Jouj smiyat → **Dat 9bel Akk** | Ich gebe **meiner Mutter das Buch**. |
            | Akk pronom → **Akk 9bel Dat** | Ich gebe **es meiner Mutter**. / Ich gebe **es ihr**. |
            | Pronom 9bel smiya | Ich gebe **ihr das Buch**. |

            **2. TeKaMoLo** (ghaliban): **Te**mporal (imta) – **Ka**usal (3lach) – **Mo**dal (kifach) – **Lo**kal (fin):
            > Ich bin **gestern** (Te) **wegen des Streiks** (Ka) **mit dem Fahrrad** (Mo) **zur Arbeit** (Lo) gefahren.

            **3. nicht:** 9bel l-ajza2 li kay9ra b l-fi3l (Partizip, préfixe, Lo, adjectif): "Ich habe ihn **nicht** gesehen." — "Er fährt **nicht** nach Hause." · Negation d jouz2 → 9bel had l-jouz2: "Nicht **ich**, sondern **er** …"
          `,
        ),
        choice('Ina jomla s7i7a?', ['Ich habe das Geschenk meinem Bruder gegeben.', 'Ich habe meinem Bruder das Geschenk gegeben.'], 1, 'Jouj smiyat → Dativ 9bel Akkusativ.'),
        choice('Ina jomla s7i7a?', ['Ich habe es meinem Bruder gegeben.', 'Ich habe meinem Bruder es gegeben.'], 0, 'Akk pronom → 9bel Dativ.'),
        order('Rtteb', 'Ich fahre morgen wegen der Hochzeit mit dem Zug nach Hamburg.'),
        explain(
          'Register: rasmi ↔ ghayr rasmi',
          md`
            | Ghayr rasmi (s7ab, chat) | Rasmi (idara, khedma, kitaba) |
            |---|---|
            | Hast du mal 'ne Minute? | Hätten Sie kurz Zeit? |
            | Das find ich doof. | Das halte ich für problematisch. |
            | Wegen dem Wetter … | Aufgrund des Wetters … |
            | Ich krieg das hin. | Ich werde mich darum kümmern. |
            | Weil … (f l-bidaya f l-jawab) | Da … |
            | Kannst du mir sagen …? | Ich wäre Ihnen dankbar, wenn Sie mir mitteilen könnten, … |
            | kriegen, checken, Bock haben | erhalten, verstehen, Lust haben |

            F l-imti7an d B2, kayn ghaliban mohimma fiha **tbeddel l-Register** (mathalan: email l sa7bek → email l l-mas2oul).
          `,
        ),
        match('Ghayr rasmi → rasmi', [
          ['kriegen', 'erhalten'],
          ['checken', 'verstehen'],
          ['doof finden', 'für problematisch halten'],
          ['wegen dem', 'aufgrund des'],
        ]),
        graded(choice('"Viele junge Marokkaner wandern aus. ___ hat wirtschaftliche Gründe."', ['Dies', 'Dieser', 'Erstere'], 0)),
        graded(choice('"Es gibt Arabisch und Tamazight. ___ wird vor allem in den Bergen gesprochen." (t-tanya)', ['Letzteres', 'Ersteres', 'Dieses'], 0)),
        graded(choice('"Sie hat viel geübt. ___ hat sie die Prüfung bestanden." (b hadchi)', ['Dadurch', 'Darüber', 'Daran'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Ich schicke ihr die Fotos.', 'Ich schicke die Fotos ihr.'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Ich schicke sie meiner Oma.', 'Ich schicke meiner Oma sie.'], 0)),
        graded(choice('Ina jomla s7i7a? (TeKaMoLo)', ['Ich gehe heute wegen des Regens nicht zu Fuß zur Uni.', 'Ich gehe zur Uni zu Fuß heute wegen des Regens nicht.'], 0)),
        graded(choice('Rasmi l "Ich krieg die Unterlagen morgen."', ['Ich erhalte die Unterlagen morgen.', 'Ich hab die Unterlagen morgen.', 'Ich check die Unterlagen morgen.'], 0)),
        graded(gap('Kemmel', 'Ich habe mich ___ gewöhnt, dass es hier oft regnet.', 'daran')),
        summary(
          [
            'Verweiswörter: **dies, dieser, ersterer / letzterer, derselbe, ein solcher, Folgendes** — bach ma t3awedch nefs l-kelma.',
            'Pronominaladverbien: **dadurch, damit, darauf, darüber …** = roubat (l l-7wayej — machi l n-nas).',
            'Mittelfeld: **Dat 9bel Akk** (smiyat) · **Akk-pronom 9bel Dat** · **TeKaMoLo** · Register: rasmi ↔ ghayr rasmi.',
          ],
          ['Tkhdem Verweiswörter', 'Tkhdem Pronominaladverbien', 'Tdir t-tartib s-s7i7', 'Tbeddel l-Register'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Globalisierung — Gewinner und Verlierer',
      description: 'T9ra ma9al 3la l-3awlama, tsme3 m7adara 3la l-hijra, o tkteb nass mtrabet (kohärent).',
      minutes: 45,
      kind: 'skills',
      goals: ['Tfhem ma9al t7lili o l-bonya dyalou', 'Tfhem m7adara b ar9am o mafahim', 'Tkteb nass mtrabet b Verweiswörter o Konnektoren'],
      steps: [
        intro(
          'Ein T-Shirt reist um die Welt',
          'F l-cours d B2, l-mawdou3: l-3awlama. Chkoun kayrb7 o chkoun kaykhser? O kifach l-hijra jouz2 menha?',
          ['T9ra', 'Tsme3', 'Tkteb'],
        ),
        reading(
          'Die Reise eines T-Shirts',
          md`
            Die Baumwolle wächst in Usbekistan, gesponnen wird sie in der Türkei, genäht in Bangladesch, bedruckt in Polen – und verkauft wird das fertige T-Shirt schließlich in einem Kölner Kaufhaus für neun Euro. Dieses Beispiel zeigt, wie eng die Weltwirtschaft inzwischen vernetzt ist.

            Befürworter der Globalisierung betonen deren Erfolge: Seit den 1990er-Jahren ist die extreme Armut weltweit deutlich gesunken. Dies sei, so ihre Argumentation, vor allem dem internationalen Handel zu verdanken. Länder wie Vietnam oder Marokko hätten dadurch Millionen neuer Arbeitsplätze gewonnen – letzteres etwa in der Automobilindustrie rund um Tanger.

            Kritiker halten dem entgegen, dass von diesem Wachstum nicht alle gleichermaßen profitieren. Die Näherinnen in Bangladesch verdienen oft nur einen Bruchteil dessen, was zum Leben nötig wäre. Darüber hinaus verursachen die langen Transportwege erhebliche Umweltschäden.

            Seit einigen Jahren ist zudem ein Gegentrend zu beobachten: Infolge der Pandemie und geopolitischer Krisen holen manche Unternehmen ihre Produktion zurück in die Nähe – ein Phänomen, das als „Nearshoring" bezeichnet wird. Marokko gilt dabei aufgrund seiner Lage als einer der Gewinner.
          `,
          {
            text: '9ra l-ma9al o rdd l-bal l Verweiswörter (dieses, deren, dies, dadurch, letzteres …).',
            glossary: [
              ['die Baumwolle', 'l-9oton'],
              ['spinnen / nähen', 'ghzel / kheyyet'],
              ['zu verdanken sein', 'l-fadl yrje3 l'],
              ['gleichermaßen', 'b nefs l-9adr'],
              ['der Bruchteil', 'jouz2 sghir'],
              ['erheblich', 'kbir / mohimm'],
              ['der Gegentrend', 't-tayyar l-mo3akis'],
            ],
          },
        ),
        choice('F "deren Erfolge", "deren" kat3awed 3la…', ['l-Befürworter', 'l-Globalisierung', 'l-T-Shirt'], 1),
        choice('F "letzteres etwa in der Automobilindustrie", "letzteres" howa…', ['Vietnam', 'Marokko', 'Bangladesch'], 1),
        choice('Chno kay9oulou l-montaqidin?', ['Kolchi kayrb7', 'Machi kolchi kayrb7 b nefs l-9adr + d-darar l-bi2i', 'L-3awlama salat'], 1),
        choice('Chno howa "Nearshoring"?', ['Tsifet l-intaj l-blad b3ida', 'Trje3 l-intaj l blad 9riba', 'Tsedd l-ma3amil'], 1),
        listening(
          'Vortrag: Migration und Globalisierung',
          [
            ['Referent', 'Meine Damen und Herren, Migration ist kein neues Phänomen. Neu ist jedoch deren Tempo und Ausmaß.', 'Sayyidati sadati, l-hijra machi dahira jdida. Walakin l-jdid howa s-sor3a o l-7ajm dyalha.'],
            ['Referent', 'Weltweit leben heute rund 280 Millionen Menschen außerhalb ihres Geburtslandes. Dies entspricht etwa 3,6 Prozent der Weltbevölkerung.', 'F l-3alam kaynin daba tqriban 280 milyoun insan 3aychin kharej blad l-wilada dyalhom. Hadchi kaysawi tqriban 3,6 f l-mi2a men sokkan l-3alam.'],
            ['Referent', 'Man unterscheidet dabei häufig zwischen Push- und Pull-Faktoren. Erstere drängen Menschen aus ihrer Heimat, etwa Krieg oder Arbeitslosigkeit. Letztere ziehen sie in ein anderes Land, zum Beispiel bessere Löhne oder Bildungschancen.', 'Ghaliban kanfer9ou bin 3awamil d-daf3 o 3awamil l-jadb. L-oula katdfe3 n-nas ykhrjou men bladhom, b7al l-7arb wla l-bitala. O t-tanya katjedbhom l blad khra, b7al l-ajour l-a7ssen wla forass t-ta3lim.'],
            ['Referent', 'Für die Herkunftsländer spielen die Rücküberweisungen eine große Rolle. In Marokko machen sie fast acht Prozent der Wirtschaftsleistung aus – mehr als manche Exportbranche.', 'L blad l-asl, l-flous li kaysiftouha l-mhajrin 3endha dawr kbir. F l-Maghrib katsawi tqriban 8 f l-mi2a men n-natij l-i9tisadi — ktar men chi 9ita3at d t-tasdir.'],
          ],
        ),
        choice('Ch7al men mhajer f l-3alam?', ['~28 milyoun', '~280 milyoun', '~2,8 milyar'], 1),
        choice('"Erstere" f l-m7adara homa…', ['Pull-Faktoren', 'Push-Faktoren', 'L-mhajrin'], 1),
        choice('Ch7al katmthel Rücküberweisungen f l-i9tisad l-maghribi?', ['~1 %', '~8 %', '~30 %'], 1),
        pron(
          'Lehnwörter f l-3awlama',
          'Bzaf d l-kalimat men l-anglais — katnte9hom chwiya b l-almaniya o s-smiya kat3ti l-article.',
          [
            ['das Nearshoring – der Trend', '"Nier-schoring"'],
            ['die Pull-Faktoren – die Push-Faktoren', '"Pull" b u almaniya'],
            ['das Phänomen – die Migration', 'l-accent 3la "nomen" o "tion"'],
          ],
        ),
        write(
          'Nass mtrabet: "Globalisierung — Fluch oder Segen?"',
          md`
            Kteb nass (~180 kelma) 3la l-3awlama: 2 ijabiyat, 2 salbiyat, o ra2yek — m3a mital men l-Maghrib.
            **L-mohimm:** n-nass khass ykoun **mtrabet** — khdem 4 Verweiswörter (dies, deren, ersterer / letzterer …), 2 Pronominaladverbien (dadurch, damit …), o Konnektoren. Ma t3awedch "die Globalisierung" ktar men 2 d l-merrat!
          `,
          ['Tqdim (Die Globalisierung … / Dieses Phänomen …)', 'Ijabiyat (Dadurch … / Dies …)', 'Salbiyat (Kritiker … / Darüber hinaus …)', 'Mital men l-Maghrib (Letzteres …)', 'Ra2yek (Abschließend …)'],
          'Kaum ein Phänomen hat unsere Welt in den letzten Jahrzehnten so stark verändert wie die Globalisierung. Diese betrifft nicht nur die Wirtschaft, sondern auch Kultur und Migration.\n\nBefürworter weisen auf deren positive Seiten hin. Durch den internationalen Handel sind Millionen neuer Arbeitsplätze entstanden; dadurch ist die extreme Armut weltweit gesunken. Außerdem haben wir Zugang zu Produkten und Ideen aus der ganzen Welt.\n\nDem stehen jedoch erhebliche Nachteile gegenüber. Zum einen profitieren nicht alle gleichermaßen davon: Viele Arbeiterinnen in Asien verdienen kaum genug zum Leben. Zum anderen belasten lange Transportwege die Umwelt. Letzteres wird angesichts des Klimawandels immer problematischer.\n\nMarokko ist ein gutes Beispiel für beide Seiten. Rund um Tanger sind große Autofabriken entstanden, die vielen jungen Menschen Arbeit geben. Dies hat allerdings auch zur Folge, dass das Land stark von europäischen Konzernen abhängt.\n\nAbschließend lässt sich sagen, dass dieser Prozess weder nur Fluch noch nur Segen ist. Entscheidend ist, wie gerecht seine Gewinne verteilt werden.',
          150,
        ),
        graded(choice('"erheblich" =', ['kbir / mohimm', 'sghir', 'rkhis'], 0)),
        graded(choice('"Pull-Faktoren" homa…', ['3awamil li katjdeb', '3awamil li katdfe3', 'L-mhajrin'], 0)),
        graded(choice('"die Rücküberweisungen" =', ['l-flous li kaysiftouha l-mhajrin l bladhom', 'd-dara2ib', 'l-9routa'], 0)),
        graded(dictation('Sme3 o kteb', 'Dies entspricht etwa drei Komma sechs Prozent der Weltbevölkerung.')),
        summary(
          [
            'L-3awlama: **vernetzt, der Handel, gleichermaßen, der Bruchteil, erheblich, Nearshoring, Push- und Pull-Faktoren, Rücküberweisungen**.',
            'Nass mtrabet: **Verweiswörter + Pronominaladverbien + Konnektoren + Synonyme**.',
          ],
          ['Tfhem ma9al t7lili', 'Tfhem m7adara', 'Tkteb nass mtrabet'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 11',
      description: 'Muraja3a: l-hawiya o l-3awlama, ttisa9 n-nass, t-tartib f l-Mittelfeld, Register — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Verweiswörter o Pronominaladverbien', 'Traja3 t-tartib o l-Register', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-hawiya o l-3awlama, o kifach tkteb nass mtrabet o mnaseb l l-mo9if.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **dies · dieser · ersterer / letzterer · derselbe · Folgendes**
            - **dadurch · damit · darauf · darüber** (7wayej) ↔ **an sie / mit ihm** (nas)
            - Dat 9bel Akk (smiyat) · **es / ihn / sie** 9bel Dat · TeKaMoLo
            - kriegen → **erhalten** · wegen dem → **aufgrund des**
          `,
        ),
        dialogue(
          'Einbürgerungsfeier',
          [
            ['Beamtin', 'Herzlichen Glückwunsch, Frau Petrenko. Ich überreiche Ihnen hiermit Ihre Einbürgerungsurkunde.', 'Mabrouk, Madame Petrenko. Kansellem lik b had l-mounasaba chahadat t-tajnis dyalek.'],
            ['Olena', 'Vielen Dank! Darauf habe ich lange gewartet.', 'Choukran bzaf! Tsennit hadchi bzaf.'],
            ['Beamtin', 'Dürfen Sie Ihre ukrainische Staatsbürgerschaft behalten?', 'Wach t9dri t7tafdi b j-jinsiya l-oukraniya?'],
            ['Olena', 'Ja, seit der Reform ist dies möglich. Dadurch muss ich mich nicht zwischen meinen beiden Heimaten entscheiden.', 'Ah, men l-islah hadchi momkin. B hadchi ma khassnich nkhtar bin jouj d l-blad dyali.'],
          ],
        ),
        choice('Chno khdat Olena?', ['L-passport', 'Chahadat t-tajnis', 'Diplôme'], 1),
        choice('Wach khassha tkhli j-jinsiya l-oukraniya?', ['Ah', 'La — men l-islah momkin t7tafed biha'], 1),
        gap('Kemmel', '___ habe ich lange gewartet. Seit der Reform ist ___ möglich.', ['Darauf', 'dies|das']),
        match('Rbet', [
          ['dies', 'hadchi (jomla kamla)'],
          ['letzterer', 'l-akhir (men jouj)'],
          ['dadurch', 'b hadchi'],
          ['derselbe', 'nefs l-chi'],
        ]),
        speak(
          'Tbeddel l-Register',
          'Goul nefs l-message jouj d l-merrat: (1) l sa7bek f WhatsApp (ghayr rasmi), (2) l l-mas2oul dyalek (rasmi): "Ma n9derch nji ghedda l l-réunion 7it 3endi rendez-vous f l-Ausländerbehörde."',
          ['Hey, ich kann morgen nicht, hab nen Termin bei der Ausländerbehörde. Sorry!', 'Sehr geehrte Frau Dr. Kessler, leider kann ich morgen nicht an der Besprechung teilnehmen, da ich einen Termin bei der Ausländerbehörde wahrnehmen muss.'],
        ),
        graded(choice('"Viele Menschen pendeln täglich. ___ belastet die Umwelt."', ['Dies', 'Dieser', 'Letzterer'], 0)),
        graded(choice('"Ich habe Tee und Kaffee. ___ trinke ich morgens, ersteren abends."', ['Letzteren', 'Ersteren', 'Diesen'], 0)),
        graded(choice('"Sie hat einen Sprachkurs gemacht. ___ hat sie bessere Chancen."', ['Dadurch', 'Darüber', 'Daran'], 0)),
        graded(choice('"Ich vermisse meinen Bruder. Ich denke oft ___."', ['an ihn', 'daran', 'darauf'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Ich habe meiner Freundin den Brief gezeigt.', 'Ich habe den Brief meiner Freundin gezeigt ihr.'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Kannst du ihn mir leihen?', 'Kannst du mir ihn leihen?'], 0, 'Akk pronom 9bel Dat pronom.')),
        graded(choice('Rasmi l "Das find ich doof."', ['Das halte ich für problematisch.', 'Das ist voll blöd.', 'Find ich nicht gut.'], 0)),
        graded(choice('"die Zugehörigkeit" =', ['l-intima2', 'l-ghorba', 't-tajnis'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Twe7cht l-blad.', ['Ich habe Heimweh.', 'Ich vermisse meine Heimat.'])),
        graded(dictation('Sme3 o kteb', 'Dadurch muss ich mich nicht zwischen zwei Ländern entscheiden.')),
        summary(
          [
            'Daba t9der tnaqech l-hawiya o l-3awlama, o tkteb nass mtrabet f l-Register s-s7i7.',
            'F l-unité 12: **t-tawasol r-rasmi** — chakwa rasmiya, Stellungnahme, presentation o tsiyer n9ach — m3a muraja3a d B2.',
          ],
          ['T3ber 3la l-hawiya', 'Tkhdem Verweiswörter o Pronominaladverbien', 'Tdir t-tartib s-s7i7', 'Tbeddel l-Register'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
