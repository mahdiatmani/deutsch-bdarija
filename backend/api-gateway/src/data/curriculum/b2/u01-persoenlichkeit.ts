import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 1,
  title: 'Persönlichkeit & Lebensentwürfe',
  description: "Ach-houwa ch-chakhsiya, l-ahdaf d l-7yat o s-sa3ada — b Konnektoren (falls, sofern, indem, ohne dass, anstatt dass) o tkwin l-adjectifs (-lich, -ig, -bar, -los …).",
  icon: 'psychology',
  objectives: [
    'Twsef ch-chakhsiya b d9a o b nuances',
    'T7ki 3la l-ahdaf o l-ikhtiyarat d l-7yat o t3ellelhom',
    'Tkhdem falls, sofern, indem, sodass, ohne dass, anstatt dass',
    'Tkwwen adjectifs b -lich, -ig, -isch, -bar, -los, -voll',
    'Tfhem ma9al chibh 3ilmi o tkteb nass ta2ammoli',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wer bin ich? — Charakter beschreiben',
      description: 'L-kalimat dyal ch-chakhsiya b nuances, o kifach twsef rasek o l-akhrin b d9a o b ladab.',
      minutes: 30,
      kind: 'input',
      goals: ['Twsef ch-chakhsiya b kalimat d9i9a', 'Tlattef l-wasf s-salbi (eher, ein bisschen zu …)', 'T7ki 3la t-taghyir f ch-chakhsiya'],
      steps: [
        intro(
          'Willkommen bei B2!',
          md`
            Salma daba Data Analyst f DataNova, o Youssef f l-3am l-akhir d l-Ausbildung. F workshop d l-équipe, l-coach kaysowwel: "Wie würden Sie sich selbst beschreiben — und wie sehen Sie die anderen?"
            F B2 ma kafich "nett" o "freundlich" — khassek **nuances**.
          `,
          ['Wesf d9i9', 'Tlattef', 'T-taghyir'],
        ),
        dialogue(
          'Teamworkshop',
          [
            ['Coach', 'Frau El Idrissi, wie würden Ihre Kollegen Sie beschreiben?', 'Madame El Idrissi, kifach ghadi ywesfouk l-kollegat dyalek?'],
            ['Salma', 'Vermutlich als zielstrebig und zuverlässig. Manchmal bin ich allerdings etwas ungeduldig, vor allem, wenn Entscheidungen ewig dauern.', 'Ghaliban b annani 3endi hadaf o mo3tamad 3liya. Walakin mrrat kankoun chwiya ma kansbrch, khossousan mlli l-qararat kat-twel bzaf.'],
            ['Coach', 'Und wie hat sich das entwickelt?', 'O kifach tatawwer hadchi?'],
            ['Salma', 'Früher war ich eher schüchtern. Erst in Deutschland bin ich selbstbewusster geworden, indem ich ständig ins kalte Wasser springen musste.', 'Bekri kunt khjoula. Ghir f Almaniya welliti wa2i9a f rasi ktar, 7it kunt dima mjboura nt-la7 f l-ma l-bared.'],
            ['Jonas', 'Das stimmt! Am Anfang hast du in Meetings kaum etwas gesagt.', 'Bssa7! F l-bidaya f r-réunions ma kuntich katgouli 7ta 7aja.'],
            ['Coach', 'Herr Weiß, und Sie?', 'Herr Weiß, o nta?'],
            ['Jonas', 'Ich bin ziemlich gelassen und hilfsbereit, aber auch ein bisschen chaotisch. Meine Kollegin sagt, ich sei manchmal zu harmoniebedürftig.', 'Ana hadi2 bzaf o kan3awen, walakin ta chwiya fawdawi. Zamilti katgoul ana mrrat kan9elleb bzaf 3la l-wi2am.'],
          ],
        ),
        vocab('Charakter — Ch-chakhsiya', [
          ['zielstrebig', '3endou hadaf o kaymchi lih', ''],
          ['zuverlässig', 'mo3tamad 3lih', ''],
          ['ehrgeizig', 'tamou7', ''],
          ['gelassen', 'hadi2 / ma kayt9ele9ch', ''],
          ['schüchtern', 'khjoul', ''],
          ['selbstbewusst', 'wa2i9 f rasou', ''],
          ['hilfsbereit', 'kay3awen', ''],
          ['rücksichtsvoll', 'kayr3a l-akhrin', ''],
          ['ungeduldig', 'ma kaysbrch', ''],
          ['empfindlich', '7essas', ''],
          ['stur', 'rasou 9a7e7', ''],
          ['aufgeschlossen', 'monfate7', ''],
          ['die Eigenschaft', 's-sifa', 'die Eigenschaften'],
          ['die Stärke / die Schwäche', 'no9tat l-9owwa / no9tat d-da3f', ''],
        ]),
        explain(
          'Twsef b nuances',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tlattef s-salbi | "Er ist **eher** zurückhaltend." (machi "schüchtern") — "Sie kann **manchmal etwas** ungeduldig sein." |
            | tbaleg | "Er ist **ausgesprochen / äußerst** hilfsbereit." |
            | ta9yid | "**Einerseits** ist sie ehrgeizig, **andererseits** sehr rücksichtsvoll." |
            | t-taghyir | "Früher war ich …, **inzwischen** bin ich …" — "Ich bin … **geworden**." |
            | ra2y l-akhrin | "**Man sagt mir nach**, dass ich …" — "Freunde würden mich als … **bezeichnen**." |

            Euphemismen f l-khedma: *chaotisch* → "**kreativ** organisiert" · *stur* → "**durchsetzungsstark**" · *langsam* → "**gründlich**".
          `,
          [
            ['Man sagt mir nach, dass ich sehr direkt bin.', 'Kaygoulou 3liya belli ana direct bzaf.'],
            ['Inzwischen bin ich viel gelassener geworden.', 'Daba welliti hadi2 ktar bzaf.'],
          ],
        ),
        match('Rbet', [
          ['zuverlässig', 'mo3tamad 3lih'],
          ['ehrgeizig', 'tamou7'],
          ['gelassen', 'hadi2'],
          ['stur', 'rasou 9a7e7'],
          ['aufgeschlossen', 'monfate7'],
        ]),
        choice('Chno no9tat d-da3f li 3terfat biha Salma?', ['Fawdawiya', 'Ma katsbrch mlli l-qararat katt-twel', 'Khjoula daba'], 1),
        choice('Kifach tbeddlat Salma?', ['Welat khjoula ktar', 'Welat wa2i9a f rasha ktar', 'Ma tbeddlatch'], 1),
        choice('Ach men kelma katlattef "langsam" f l-khedma?', ['gründlich', 'faul', 'stur'], 0),
        gap('Kemmel', 'Er ist ___ zurückhaltend. (machi bzaf — b ladab)', 'eher'),
        order('Rtteb', 'Freunde würden mich als hilfsbereit bezeichnen.'),
        culture(
          'Selbstdarstellung f Almaniya',
          md`
            - F l-entretien o l-feedback, l-almaniyin kayt-sennaw **wa3y b rasek**: no9tat l-9owwa **m3a amthila**, o no9ta d da3f **7a9i9iya** (machi "Ich bin zu perfektionistisch" — hadi ma bqat katdouz!).
            - **Bescheidenheit** (t-tawado3) mzyana, walakin bzaf d t-tawado3 kayban b7al 9illat th-thi9a.
            - **Persönlichkeitstests** (b7al Big Five / OCEAN) kaytkhdmou f bzaf d l-charikat f l-workshops — walakin machi f t-tawdif r-rasmi dima.
          `,
        ),
        speak(
          'Wesf rasek',
          'Wsef rasek: 3 sifat (m3a mital l kol wa7da), no9ta d da3f b ladab, o kifach tbeddlti f l-akhir d snin.',
          ['Freunde würden mich als zuverlässig und aufgeschlossen bezeichnen.', 'Zum Beispiel helfe ich oft neuen Kollegen, sich zurechtzufinden.', 'Ich kann allerdings manchmal etwas ungeduldig sein.', 'Früher war ich eher schüchtern, inzwischen bin ich viel selbstbewusster geworden.'],
        ),
        graded(choice('"zuverlässig" =', ['mo3tamad 3lih', 'khjoul', 'tamou7'], 0)),
        graded(choice('Ach men jomla katlattef?', ['Er ist unfreundlich.', 'Er ist eher zurückhaltend.', 'Er ist total schüchtern.'], 1)),
        graded(gap('Kemmel', 'Man sagt mir ___, dass ich sehr ehrgeizig bin.', 'nach')),
        graded(translate("Terjem l l'Almaniya", 'Daba welliti hadi2 ktar.', ['Inzwischen bin ich gelassener geworden.', 'Inzwischen bin ich ruhiger geworden.', 'Jetzt bin ich gelassener geworden.', 'Mittlerweile bin ich gelassener geworden.'])),
        summary(
          [
            'Ch-chakhsiya: **zielstrebig, zuverlässig, ehrgeizig, gelassen, selbstbewusst, aufgeschlossen, stur, empfindlich**.',
            'Nuances: **eher, etwas, manchmal, ausgesprochen** — **Man sagt mir nach, dass …** — **inzwischen … geworden**.',
          ],
          ['Twsef ch-chakhsiya b d9a', 'Tlattef o t9ayyed'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Indem, sofern, ohne dass — Konnektoren & Wortbildung',
      description: 'Konnektoren d l-wasila, ch-chart o n-natija, o kifach tkwwen adjectifs b suffixes.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem indem (b) o dadurch, dass', 'Tkhdem falls / sofern (ila / bchart)', 'Tkhdem ohne dass / anstatt dass', 'Tkwwen adjectifs b -lich, -ig, -isch, -bar, -los, -voll'],
      steps: [
        intro(
          '"… indem ich ins kalte Wasser springen musste."',
          md`
            Salma 9alt kifach **(b chno)** welat wa2i9a f rasha: "**indem** …". F B1 t3llemti *ohne … zu* — daba ghadi nchoufou *ohne **dass*** m3a fa3il mkhtalef.
            O kelmat b7al *zuverlässig, hilfsbereit, rücksichts**voll*** — kifach mbniyin?
          `,
          ['indem', 'falls / sofern', 'ohne / anstatt dass', 'Suffixe'],
        ),
        explain(
          'Modal: indem / dadurch, dass',
          md`
            **indem** = **b** (tari9a / wasila). Kayjaweb 3la "**Wie?** / **Wodurch?**". Nebensatz → fi3l f l-akhir.

            > **Wie** kann man sein Deutsch verbessern? — **Indem** man jeden Tag Nachrichten **hört**.
            > Man verbessert sein Deutsch, **indem** man viel **liest**.

            **dadurch, dass** = nefs l-ma3na, walakin kayrkkez ktar 3la **s-sabab**:
            > **Dadurch, dass** ich im Team **arbeite**, lerne ich viel.

            Tzid f l-Hauptsatz: **dadurch** / **so** (Adverb): "Ich höre Podcasts. **Dadurch** lerne ich neue Wörter."
          `,
          [
            ['Sie hat abgenommen, indem sie jeden Tag Rad gefahren ist.', 'Nqsat l-wazn b annaha kanet katsou9 l-bichklita kol nhar.'],
            ['Indem du fragst, zeigst du Interesse.', 'Mlli katsowwel, katbeyyen l-ihtimam.'],
          ],
        ),
        choice('"Wie hast du so gut Deutsch gelernt?" — "___ ich viele Serien geschaut habe."', ['Indem', 'Ohne dass', 'Sofern'], 0),
        order('Rtteb', 'Man spart Energie, indem man das Licht ausschaltet.'),
        explain(
          'Konditional: falls / sofern',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **wenn** | ila (3amm) | Wenn es regnet, bleibe ich zu Hause. |
            | **falls** | ila (momkin y9e3, momkin la) | **Falls** es regnet, nehmen wir das Auto. |
            | **sofern** | bchart (= unter der Bedingung, dass) | Ich komme mit, **sofern** ich rechtzeitig fertig **werde**. |
            | **im Falle** + Gen. | f 7alat | **Im Falle** eines Unfalls … |

            *falls* katkhdem ktar l l-i7timal (*ila w9e3*), *sofern* l **ch-chart** — ktar f l-lougha r-rasmiya o l-9awanin.
          `,
          [
            ['Falls du Hilfe brauchst, ruf mich an.', 'Ila ma7tajti chi 3awn, 3ayyet liya.'],
            ['Sofern nichts dagegen spricht, beginnen wir am Montag.', 'Ila ma kan 7tta mani3, ghadi nbdaw nhar l-tnin.'],
          ],
        ),
        choice('"___ Sie Fragen haben, wenden Sie sich an unser Team." (ila — momkin)', ['Falls', 'Indem', 'Ohne dass'], 0),
        gap('Kemmel', 'Der Vertrag gilt nur, ___ beide Seiten unterschreiben. (bchart)', 'sofern|falls|wenn'),
        explain(
          'ohne dass / anstatt dass — m3a fa3il mkhtalef',
          md`
            | Nefs l-fa3il (B1) | Fa3il mkhtalef (B2) |
            |---|---|
            | Er ging, **ohne** sich **zu** verabschieden. | Er ging, **ohne dass** **ich** es **merkte**. |
            | **Statt** selbst **zu** kochen, bestellt er Pizza. | **Anstatt dass** **er** kocht, muss **ich** immer kochen. |

            **sodass** (B1): n-natija · **ohne dass**: bla ma (y9e3 chi 7aja) · **anstatt dass**: f blast ma.
            > Er hat das Projekt geändert, **ohne dass** das Team informiert **wurde**.
          `,
          [
            ['Sie hat mir geholfen, ohne dass ich sie darum gebeten habe.', '3awnatni bla ma ntlebha.'],
            ['Anstatt dass wir streiten, sollten wir eine Lösung suchen.', 'F blast ma ntkhasmou, khassna n9ellbou 3la 7all.'],
          ],
        ),
        choice('"Der Chef hat entschieden, ___ wir gefragt wurden."', ['ohne dass', 'ohne zu', 'indem'], 0),
        choice('"Er verließ den Raum, ___ ein Wort ___ sagen."', ['ohne / zu', 'ohne dass / —', 'indem / zu'], 0),
        gap('Kemmel', '___ dass du immer allein arbeitest, könntest du das Team fragen.', 'Anstatt|Statt'),
        explain(
          'Wortbildung: Adjektiv-Suffixe',
          md`
            | Suffix | Ma3na | Mital |
            |---|---|---|
            | **-bar** | momkin (passiv) | essen → ess**bar** (kayttakel) · machen → mach**bar** |
            | **-los** | bla | Arbeit → arbeits**los** · Hilfe → hilf**los** |
            | **-voll** | 3amer b | Rücksicht → rücksichts**voll** · Liebe → liebe**voll** |
            | **-lich** | men / b7al / kol | Freund → freund**lich** · Tag → täg**lich** |
            | **-ig** | fih / 3endou | Geduld → geduld**ig** · Sonne → sonn**ig** |
            | **-isch** | nesba (l bled, 3ilm …) | Marokko → marokkan**isch** · Logik → log**isch** |
            | **un-** | 3eks | geduldig → **un**geduldig · zuverlässig → **un**zuverlässig |

            Tri9a: *-los* ↔ *-voll* ghaliban 3eks: **hoffnungslos ↔ hoffnungsvoll**. Lahdou: kayn bzaf d l-"**s**" bin l-ajza2 (Rücksicht**s**voll, Arbeit**s**los).
          `,
        ),
        match('Rbet', [
          ['lesbar', 'kayt9ra'],
          ['arbeitslos', 'bla khedma'],
          ['respektvoll', 'b i7tiram'],
          ['täglich', 'kol nhar'],
          ['geduldig', 'kaysbr'],
        ]),
        choice('"Das Wasser kann man trinken." = "Das Wasser ist ___."', ['trinklos', 'trinkbar', 'trinkig'], 1),
        gap('Kemmel', 'Ohne Hoffnung = hoffnungs___. Mit viel Humor = humor___.', ['los', 'voll']),
        graded(choice('"Man lernt am besten, ___ man die Sprache aktiv benutzt."', ['indem', 'sofern', 'ohne dass'], 0)),
        graded(choice('"___ es morgen regnet, fällt das Picknick aus." (ila, i7timal)', ['Falls', 'Indem', 'Anstatt dass'], 0)),
        graded(choice('"Sie hat das Auto verkauft, ___ ihr Mann davon wusste."', ['ohne dass', 'ohne zu', 'sodass'], 0)),
        graded(gap('Kemmel', 'Der Plan ist leider nicht mach___. (ma ymkench ydar)', 'bar')),
        graded(choice('"Er hat keine Arbeit." = "Er ist ___."', ['arbeitslos', 'arbeitsvoll', 'arbeitbar'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Anstatt dass er hilft, er schaut fern.', 'Anstatt dass er hilft, schaut er fern.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ila ma7tajti chi 3awn, 3ayyet liya.', ['Falls du Hilfe brauchst, ruf mich an.', 'Wenn du Hilfe brauchst, ruf mich an.', 'Falls du Hilfe brauchst, rufe mich an.'])),
        summary(
          [
            '**indem / dadurch, dass** = b (wasila) · **falls** = ila (i7timal) · **sofern** = bchart.',
            '**ohne dass / anstatt dass** + fa3il mkhtalef (≠ ohne / statt … zu).',
            'Suffixe: **-bar** (momkin), **-los** (bla), **-voll** (3amer), **-lich**, **-ig**, **-isch**, **un-** (3eks).',
          ],
          ['Tkhdem l-Konnektoren dyal B2', 'Tkwwen adjectifs'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Was macht uns glücklich?',
      description: 'T9ra ma9al chibh 3ilmi 3la s-sa3ada, tsme3 hiwar radio 3la ikhtiyarat l-7yat, o tkteb nass ta2ammoli.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem ma9al fih nata2ij dirasa', 'Tfhem l-mawa9if l-mokhtalifa f hiwar', 'Tkteb nass ta2ammoli 3la l-ahdaf dyalek'],
      steps: [
        intro(
          'Glücksforschung',
          'Youssef 9ra ma9al 3la dirasa d Harvard 3la s-sa3ada, o sme3 hiwar f r-radio: "Karriere oder Familie?"',
          ['T9ra l-ma9al', 'Tsme3 l-hiwar', 'Tkteb'],
        ),
        reading(
          'Glück lässt sich nicht kaufen – oder doch?',
          md`
            Seit über 80 Jahren begleiten Forscher der Harvard-Universität mehrere hundert Menschen durch ihr Leben. Die Frage der Langzeitstudie: Was macht ein gutes Leben aus? Das Ergebnis überrascht viele: Nicht Ruhm oder Reichtum, sondern **gute Beziehungen** sind der wichtigste Faktor für Glück und Gesundheit im Alter.

            Wer sich in seinen Beziehungen geborgen fühlt, bleibt im Durchschnitt länger körperlich und geistig fit. Einsamkeit dagegen wirke ähnlich schädlich wie Rauchen, sagen manche Wissenschaftler.

            Heißt das, Geld ist unwichtig? Nicht ganz. Andere Studien zeigen, dass ein höheres Einkommen durchaus zufriedener macht – vor allem, sofern es finanzielle Sorgen beseitigt. Darüber hinaus steigt das Glück jedoch nur noch langsam.

            Glücksforscher empfehlen deshalb, Zeit bewusst in Freundschaften zu investieren, anstatt Überstunden anzuhäufen. Auch Dankbarkeit lässt sich trainieren: Wer abends drei Dinge aufschreibt, für die er dankbar ist, fühlt sich nach einigen Wochen messbar zufriedener.
          `,
          {
            text: '9ra l-ma9al o jaweb.',
            glossary: [
              ['die Langzeitstudie', 'dirasa twila l-mada'],
              ['ausmachen', 'kaykwwen / howa l-asas'],
              ['geborgen', 'f l-aman / mrta7'],
              ['schädlich', 'modirr'],
              ['beseitigen', '7iyed'],
              ['darüber hinaus', 'men fo9 hadchi / ktar men hadchi'],
              ['anhäufen', 'jme3 (bzaf)'],
              ['messbar', 'li ymken y-t9as'],
            ],
          },
        ),
        choice('Chno akbar 3amil d s-sa3ada 3la 7sab dirasat Harvard?', ['L-flous', 'Ch-chohra', 'L-3ala9at l-mzyana'], 2),
        choice('L-wa7da 3la 7sab l-ba7itin…', ['Ma 3endha ta2thir', 'Modirra b7al l-garro', 'Mzyana l s-se77a'], 1),
        choice('L-flous kat-zid f s-sa3ada…', ['Dima b nefs l-9adr', 'Khossousan ila 7iydat l-machakil l-maliya', 'Abadan'], 1),
        choice('Chno kayt9tar7 l l-imtinan (Dankbarkeit)?', ['Tkteb 3 7wayej kol 3chiya', 'Tkhdem ktar', 'Tchri hadaya'], 0),
        listening(
          'Radiogespräch: Karriere oder Familie?',
          [
            ['Moderatorin', 'Frau Demir, Sie haben mit 35 eine Führungsposition abgelehnt. Warum?', 'Madame Demir, rfedti mansib d l-mas2ouliya f 35 3am. 3lach?'],
            ['Frau Demir', 'Ich hätte 60 Stunden pro Woche arbeiten müssen, ohne dass ich meine Kinder unter der Woche gesehen hätte. Das war es mir nicht wert.', 'Kan ghadi ykhssni nkhdem 60 sa3a f s-simana, bla ma nchouf wladi f l-iyyam d l-khedma. Ma kanch kayst7e9.'],
            ['Moderatorin', 'Herr Schulte, Sie sehen das anders.', 'Herr Schulte, nta katchouf hadchi b tari9a khra.'],
            ['Herr Schulte', 'Für mich ist die Arbeit ein großer Teil meines Glücks. Ich gestalte gern etwas. Aber natürlich nur, sofern meine Familie das mitträgt.', '3andi l-khedma jouz2 kbir men sa3adti. Kan7ebb nbni chi 7aja. Walakin tab3an ghir ila kanet l-3a2ila dyali m3aya f hadchi.'],
            ['Moderatorin', 'Gibt es einen Mittelweg?', 'Wach kayn chi tri9 wost?'],
            ['Frau Demir', 'Ich glaube schon – indem Unternehmen Führung in Teilzeit oder im Tandem ermöglichen. Das ist in Deutschland leider noch selten.', 'Kandhen ah — ila l-charikat sm7ou b l-mas2ouliya b nos l-we9t wla b jouj. Hadchi f Almaniya mazal nadir, ma3a l-asaf.'],
          ],
        ),
        choice('3lach Frau Demir rfedat l-mansib?', ['L-flous 9lal', 'Ma kantch ghadi tchouf wladha', 'Ma 3endhach t-tajriba'], 1),
        choice('Herr Schulte…', ['Kaykreh l-khedma', 'L-khedma jouz2 kbir men sa3adtou', 'Bgha y7bes'], 1),
        choice('Chno l-7all l-wost li kat9tare7 Frau Demir?', ['Mas2ouliya b nos l-we9t wla b jouj (Tandem)', 'Ma tkhdemch', 'Tkhdem f l-lil'], 0),
        pron(
          'Suffixe f n-nte9',
          'L-accent ma kaymchich l s-suffix: ZUverlässig, GEduldig, HILFSbereit. Walakin m3a un- ghaliban l-accent katmchi l "un".',
          [
            ['zuverlässig – unzuverlässig', 'l-accent 3la "zu" o men b3d 3la "un"'],
            ['geduldig – ungeduldig', 'l-accent 3la "du" o men b3d 3la "un"'],
            ['rücksichtsvoll – rücksichtslos', 'l-accent 3la "rück"'],
          ],
        ),
        write(
          'Nass ta2ammoli: "Mein Lebensentwurf"',
          md`
            Kteb nass (~150 kelma): chno mohimm f 7yatek (khedma, 3a2ila, 7orriya, flous…)? Kifach bghiti tkoun 7yatek men hna 10 snin? Chno ghadi ddir bach twsel (indem …)? O chno ghadi ddir **falls** ma mchatch l-omour b7al ma bghiti?
            Khdem **indem**, **falls / sofern**, **ohne dass / anstatt dass**, o 3–4 adjectifs b suffixes.
          `,
          ['Chno mohimm 3andek (Für mich zählt vor allem …)', 'L-mosta9bal (In zehn Jahren möchte ich …)', 'Kifach (… indem ich …)', 'Plan B (Falls …, würde ich …)', 'Khlasa'],
          'Für mich zählt vor allem, dass ich eine sinnvolle Arbeit habe und trotzdem genug Zeit für meine Familie bleibt. Reichtum ist mir dagegen nicht so wichtig.\n\nIn zehn Jahren möchte ich als Stationsleitung in einem Krankenhaus arbeiten. Dieses Ziel will ich erreichen, indem ich nach meiner Ausbildung eine Weiterbildung mache und Berufserfahrung sammle. Außerdem träume ich davon, eine Familie zu gründen – sofern ich die richtige Partnerin finde.\n\nFalls es mit der Leitungsstelle nicht klappt, wäre das aber kein Drama. Ich bin ziemlich gelassen und anpassungsfähig. Wichtig ist mir nur, dass ich nicht einfach funktioniere, ohne dass ich weiß, wofür.\n\nAnstatt dass ich mir ständig Sorgen um die Zukunft mache, versuche ich, jeden Tag dankbar zu sein.',
          120,
        ),
        graded(choice('"schädlich" =', ['modirr', 'mofid', 'mrta7'], 0)),
        graded(choice('"darüber hinaus" =', ['men fo9 hadchi / ktar', 'ta7t', '9bel'], 0)),
        graded(choice('"geborgen" =', ['f l-aman / mrta7', 'khayef', 'mrid'], 0)),
        graded(dictation('Sme3 o kteb', 'Gute Beziehungen sind der wichtigste Faktor für ein glückliches Leben.')),
        summary(
          [
            'S-sa3ada: **die Langzeitstudie, geborgen, schädlich, beseitigen, darüber hinaus, Dankbarkeit, messbar**.',
            'Ikhtiyarat l-7yat: **eine Stelle ablehnen, es ist mir (nicht) wert, Führung in Teilzeit, der Mittelweg**.',
          ],
          ['Tfhem ma9al 3ilmi', 'Tfhem hiwar fih ara2 mokhtalifa', 'Tkteb nass ta2ammoli'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 1',
      description: 'Muraja3a: ch-chakhsiya, l-Konnektoren dyal B2, l-adjectifs b suffixes — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 indem, falls, sofern, ohne dass, anstatt dass', 'Traja3 l-suffixes', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Ch-chakhsiya o l-ahdaf, l-Konnektoren l-jdad, o tkwin l-adjectifs.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **indem** (b) · **falls** (ila) · **sofern** (bchart) · **ohne dass** (bla ma) · **anstatt dass** (f blast ma) — kollhom Nebensatz.
            - **-bar / -los / -voll / -lich / -ig / -isch / un-**
          `,
        ),
        dialogue(
          'Mentoring',
          [
            ['Mentorin', 'Wie wollen Sie Ihr Ziel erreichen, Teamleiterin zu werden?', 'Kifach bghiti twsli l l-hadaf dyalek, twelli mas2oula 3la l-équipe?'],
            ['Salma', 'Indem ich mehr Verantwortung in Projekten übernehme. Sofern es zeitlich möglich ist, möchte ich auch eine Führungsschulung machen.', 'B annani nakhod mas2ouliya ktar f l-mocharaka3. Ila sma7 l-we9t, bghit ta ndir formation f l-9iyada.'],
            ['Mentorin', 'Gut. Achten Sie aber darauf, dass Sie nicht alles allein machen, ohne dass das Team einbezogen wird.', 'Mzyan. Walakin rddi l-bal ma tdiri kolchi bou7dek bla ma tchrki l-équipe.'],
            ['Salma', 'Ja, das ist tatsächlich eine meiner Schwächen. Ich bin manchmal etwas ungeduldig.', 'Ah, hadi fe3lan wa7da men no9at d-da3f dyali. Mrrat kankoun chwiya ma kansbrch.'],
          ],
        ),
        choice('Kifach bghat Salma twsel?', ['B annaha tkhdem bou7dha', 'B annaha takhod mas2ouliya ktar', 'B annaha tbeddel l-charika'], 1),
        choice('Chno nse7atha l-mentorin?', ['Tchrek l-équipe', 'Tkhdem ktar', 'Tbeddel l-hadaf'], 0),
        gap('Kemmel', 'Ich erreiche mein Ziel, ___ ich mehr Verantwortung übernehme. ___ es möglich ist, mache ich eine Schulung. (bchart)', ['indem', 'Sofern|Falls|Wenn']),
        match('Rbet', [
          ['indem', 'b (wasila)'],
          ['falls', 'ila (i7timal)'],
          ['ohne dass', 'bla ma'],
          ['anstatt dass', 'f blast ma'],
        ]),
        speak(
          'Mentoring-Gespräch',
          'Mentor dyalek kaysowwlek 3la hadaf mihani dyalek. Chre7 l-hadaf, kifach ghadi twsel (indem), ch-chorout (sofern / falls), o no9ta d da3f khassek t7ssenha.',
          ['Mein Ziel ist es, in drei Jahren ein eigenes Projekt zu leiten.', 'Das möchte ich erreichen, indem ich mich regelmäßig weiterbilde.', 'Sofern mein Arbeitgeber das unterstützt, mache ich einen Kurs in Projektmanagement.', 'Allerdings muss ich lernen, Aufgaben abzugeben.'],
        ),
        graded(choice('"Er verbessert sein Deutsch, ___ er jeden Tag liest."', ['indem', 'ohne dass', 'falls'], 0)),
        graded(choice('"___ Sie Fragen haben, melden Sie sich." (ila)', ['Falls', 'Indem', 'Ohne dass'], 0)),
        graded(choice('"Die Kinder spielten draußen, ___ die Eltern es wussten."', ['ohne dass', 'ohne zu', 'indem'], 0)),
        graded(gap('Kemmel', '___ dass wir warten, sollten wir anfangen.', 'Anstatt|Statt')),
        graded(choice('"Das kann man nicht lesen." = "Das ist un___."', ['lesbar', 'leslos', 'lesvoll'], 0)),
        graded(choice('"voller Respekt" =', ['respektvoll', 'respektlos', 'respektbar'], 0)),
        graded(choice('"ehrgeizig" =', ['tamou7', 'khjoul', 'hadi2'], 0)),
        graded(choice('Ach men kelma b ladab l "chaotisch" f l-khedma?', ['kreativ organisiert', 'faul', 'stur'], 0)),
        graded(translate("Terjem l l'Almaniya", '3awnatni bla ma ntlebha.', ['Sie hat mir geholfen, ohne dass ich sie darum gebeten habe.', 'Sie half mir, ohne dass ich sie darum bat.', 'Sie hat mir geholfen, ohne dass ich sie gefragt habe.'])),
        graded(dictation('Sme3 o kteb', 'Man verbessert seine Aussprache, indem man laut liest.')),
        summary(
          [
            'Mrhba f B2! Daba t9der twsef ch-chakhsiya b nuances o t7ki 3la l-ahdaf.',
            'F l-unité 2: l-khedma o l-carrière — **Nominalstil ↔ Verbalstil** o **Nomen-Verb-Verbindungen**.',
          ],
          ['Twsef ch-chakhsiya b d9a', 'Tkhdem l-Konnektoren dyal B2', 'Tkwwen adjectifs', 'Tkteb nass ta2ammoli'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
