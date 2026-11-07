import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 6,
  title: 'Umwelt & Klima',
  description: "L-mounakh, l-ma o s-siyasa l-bi2iya — tkteb Erörterung b Konnektoren l-ijtijaj o prépositions m3a Genitiv (aufgrund, infolge, angesichts, hinsichtlich).",
  icon: 'public',
  objectives: [
    'Tnaqech machakil l-bi2a b 7ojaj o amthila',
    'Tkhdem Konnektoren l-ijtijaj (zwar … aber, dennoch, folglich, somit …)',
    'Tkhdem prépositions m3a Genitiv (aufgrund, infolge, angesichts, hinsichtlich, bezüglich …)',
    'Tbni Erörterung (pro / contra) b bniya wad7a',
    'Tcharek f n9ach o trodd 3la l-7ojaj',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wasser wird knapp',
      description: 'L-kalimat d l-mounakh o l-ma, o kifach tnaqech machakil l-bi2a f Almaniya o l-Maghrib.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-mounakh o l-ma', 'T9aren bin l-Maghrib o Almaniya', 'T9ddem 7ojaj b amthila'],
      steps: [
        intro(
          'Dürre in Marokko, Hochwasser in Deutschland',
          'Mehmet sme3 f l-akhbar 3la l-fayadanat f Almaniya, o Salma kat7ki 3la j-jfaf f l-Maghrib — sab3 snin mtab3in 9lil fihom ch-chta…',
          ['L-ma', 'L-mounakh', 'L-7ojaj'],
        ),
        dialogue(
          'Zwei Extreme',
          [
            ['Mehmet', 'Hast du die Bilder aus Bayern gesehen? Ganze Dörfer stehen unter Wasser.', 'Chefti t-tsawer men Bayern? Dwawer kamlin ta7t l-ma.'],
            ['Salma', 'Schrecklich. Und bei uns in Marokko ist genau das Gegenteil das Problem: Aufgrund der jahrelangen Dürre sind viele Stauseen fast leer.', 'Khayba. O 3andna f l-Maghrib l-mochkil bil3aks: bsbab j-jfaf li dam snin, bzaf d s-sdoud tqriban khawyin.'],
            ['Mehmet', 'Was tut die Regierung dagegen?', 'Chno kat-dir l-7oukouma?'],
            ['Salma', 'Sie setzt verstärkt auf Meerwasserentsalzung, zum Beispiel in Casablanca. Zwar ist das teuer und energieintensiv, aber angesichts der Lage gibt es kaum Alternativen.', 'Kat-3tamed ktar 3la t7liya d l-ma d l-b7er, mathalan f Casa. S7i7 ghalya o katakl t-ta9a bzaf, walakin m3a had l-wad3 ma kaynach tqriban bada2il.'],
            ['Mehmet', 'Und die Landwirtschaft?', 'O l-fla7a?'],
            ['Salma', 'Die verbraucht den Großteil des Wassers. Folglich wird diskutiert, ob man weniger wasserintensive Pflanzen anbauen sollte – Wassermelonen für den Export zum Beispiel.', 'Hiya li katakl l-ktar d l-ma. Dakchi 3lach kayn n9ach wach khass nzer3ou nabatat katsta3mel 9al d l-ma — b7al d-della7 dyal t-tasdir.'],
          ],
        ),
        vocab('Klima & Wasser — L-mounakh o l-ma', [
          ['die Dürre', 'j-jfaf', ''],
          ['das Hochwasser', 'l-fayadan', ''],
          ['der Stausee', 's-sedd (l-bou7ayra dyalou)', 'die Stauseen'],
          ['knapp werden', 'wella 9lil / tnqes', ''],
          ['die Meerwasserentsalzung', 't7liya d l-ma d l-b7er', ''],
          ['der Grundwasserspiegel', 'mostawa l-ma l-jawfi', ''],
          ['die Landwirtschaft', 'l-fla7a', ''],
          ['die Bewässerung', 's-s9i', ''],
          ['der Treibhausgasausstoß', 'nb3ath l-ghazat d l-i7tibas', ''],
          ['die Folge', 'n-natija / l-3a9iba', 'die Folgen'],
          ['bewältigen', 'tghllb 3la / dbber', ''],
          ['die Maßnahme', 'l-ijra2', 'die Maßnahmen'],
          ['nachhaltig', 'mostadam', ''],
          ['der Verzicht', 'l-istighna2', ''],
        ]),
        explain(
          'T9ddem 7ojja b mital',
          md`
            7ojja mzyana = **ra2y** + **sabab** + **mital / dalil**:

            | Jouz2 | Redemittel |
            |---|---|
            | ra2y | "Ich bin der Auffassung, dass …" — "Meines Erachtens …" |
            | sabab | "Das liegt vor allem daran, dass …" — "Ausschlaggebend ist, dass …" |
            | mital | "Das zeigt sich beispielsweise an …" — "Ein gutes Beispiel dafür ist …" |
            | dalil | "Laut … / Studien belegen, dass …" |
          `,
          [
            ['Ein gutes Beispiel dafür ist die Entsalzungsanlage in Casablanca.', 'Mital mzyan 3la hadchi howa ma7attat t-t7liya f Casa.'],
            ['Das liegt vor allem daran, dass es kaum noch regnet.', 'Hadchi khossousan 7it ma b9atch katchta tqriban.'],
          ],
        ),
        match('Rbet', [
          ['die Dürre', 'j-jfaf'],
          ['das Hochwasser', 'l-fayadan'],
          ['die Bewässerung', 's-s9i'],
          ['bewältigen', 'tghllb 3la'],
          ['die Maßnahme', 'l-ijra2'],
        ]),
        choice('Chno l-mochkil f l-Maghrib 3la 7sab Salma?', ['L-fayadan', 'J-jfaf o s-sdoud khawyin', 'L-bard'], 1),
        choice('Chno l-7all li kat3tamed 3lih l-7oukouma?', ['T7liya d l-ma d l-b7er', 'Tchri l-ma men Sbanya', 'Tsedd l-fla7a'], 0),
        choice('Ach men nabatat kaynaqchou?', ['L-9am7', 'D-della7 d t-tasdir', 'Z-zitoun'], 1),
        gap('Kemmel', '___ ist das teuer, aber ___ der Lage gibt es kaum Alternativen.', ['Zwar', 'angesichts']),
        order('Rtteb', 'Das liegt vor allem daran, dass es kaum noch regnet.'),
        culture(
          'L-mounakh: Almaniya o l-Maghrib',
          md`
            - **Almaniya:** l-hadaf 9anouniyan: **Klimaneutralität 2045**. L-fayadanat (Ahrtal 2021) o j-jfaf f s-sif welaw ktar.
            - **L-Maghrib:** men 2018 kayn **jfaf mtwassel** — s-sdoud tqriban 3endhom ghir rbo3 men 9odrathom f chi snin. L-7oukouma bnat ma7attat t7liya (b7al Agadir) o kat-bni wa7da kbira f Casa o "**autoroute d l-ma**" bin s-sdoud f ch-chamal o l-janoub.
            - **COP22** tdar f **Marrakech** f 2016.
            - **Tafkir l-Maghrib:** Noor Ouarzazate (ch-chams), o l-hadaf: ktar men **52 %** d l-9odra l-kahraba2iya men t-ta9at l-motajaddida f 2030.
          `,
        ),
        speak(
          '7ojja b mital',
          '3ti ra2yek f had s-so2al b 7ojja kamla (ra2y + sabab + mital): "Sollte Wasser für die Landwirtschaft teurer werden?"',
          ['Ich bin der Auffassung, dass Wasser für exportorientierte Landwirtschaft teurer werden sollte.', 'Das liegt vor allem daran, dass die Grundwasserspiegel stark sinken.', 'Ein gutes Beispiel dafür sind Wassermelonen, die viel Wasser verbrauchen.', 'Kleinbauern sollten aber unterstützt werden.'],
        ),
        graded(choice('"knapp werden" =', ['wella 9lil', 'wella ktir', 'wella ghali'], 0)),
        graded(choice('"die Meerwasserentsalzung" =', ['t7liya d l-ma d l-b7er', 's-s9i', 's-sedd'], 0)),
        graded(gap('Kemmel', 'Ein gutes ___ dafür ist die Anlage in Casablanca. (mital)', 'Beispiel')),
        graded(translate("Terjem l l'Almaniya", 'Hadchi khossousan 7it ma b9atch katchta.', ['Das liegt vor allem daran, dass es nicht mehr regnet.', 'Das liegt vor allem daran, dass es kaum noch regnet.'])),
        summary(
          [
            'L-ma o l-mounakh: **die Dürre, das Hochwasser, der Stausee, knapp werden, die Meerwasserentsalzung, die Bewässerung, bewältigen**.',
            '7ojja: **Ich bin der Auffassung, dass … — Das liegt daran, dass … — Ein gutes Beispiel dafür ist …**',
          ],
          ['Tnaqech machakil l-bi2a', 'T9ddem 7ojja b mital'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Aufgrund, infolge, dennoch — Argumentieren auf B2-Niveau',
      description: 'Prépositions m3a Genitiv o Konnektoren l-ijtijaj (zwar … aber, dennoch, folglich, somit, demzufolge …).',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem 8 prépositions m3a Genitiv', 'Tkhdem Konnektoren l-ijtijaj b t-tartib s-s7i7', 'T7awwel bin Konnektor o préposition'],
      steps: [
        intro(
          '"Aufgrund der jahrelangen Dürre …"',
          md`
            Salma 9alt: "**Aufgrund der** jahrelangen Dürre …", "**angesichts der** Lage", "**Folglich** wird diskutiert …".
            F B1 t3llemti *wegen, trotz, während* — f B2 kayn **ktar d l-prépositions m3a Genitiv**, khossousan f l-lougha r-rasmiya o l-kitaba.
          `,
          ['Präpositionen + Gen.', 'Konnektoren', 'T-tartib'],
        ),
        explain(
          'Prépositions m3a Genitiv (B2)',
          md`
            | Préposition | Ma3na | Mital |
            |---|---|---|
            | **aufgrund** | bsbab | **Aufgrund des** Regens fiel das Spiel aus. |
            | **infolge** | n-natija d (ba3d chi 7adith) | **Infolge des** Sturms gab es Stromausfälle. |
            | **angesichts** | m3a / nadharan l | **Angesichts der** hohen Preise sparen viele. |
            | **hinsichtlich / bezüglich** | fima yakhoss | **Bezüglich Ihrer** Anfrage teilen wir mit … |
            | **anlässlich** | b mounasaba | **Anlässlich des** Jubiläums gibt es ein Fest. |
            | **innerhalb / außerhalb** | dakhel / kharej | **innerhalb einer** Woche · **außerhalb der** Stadt |
            | **anstelle / statt** | f blast | **Anstelle des** Autos nehme ich das Rad. |
            | **mithilfe** | b mosa3adat | **mithilfe einer** App |
            | **zugunsten** | l-saleh | **zugunsten der** Umwelt |

            Genitiv: **des** (m/n) + **-(e)s** · **der** (f/pl). Adjectif: **-en** (des stark**en** Regen**s**, der hoh**en** Preise).
            F l-hedra kat-sme3 ta **Dativ** ("wegen dem …") — walakin f l-kitaba d B2: **Genitiv**!
          `,
          [
            ['Infolge des Klimawandels nehmen Extremwetterereignisse zu.', 'Natijatan l t-taghyir l-mounakhi, l-a7dath l-mounakhiya l-motatarrifa katzid.'],
            ['Angesichts der Wasserknappheit müssen wir umdenken.', 'Nadharan l n-n9s d l-ma, khassna nbeddlou tafkirna.'],
          ],
        ),
        choice('"___ des starken Regens wurde das Konzert abgesagt."', ['Aufgrund', 'Trotz', 'Anstelle'], 0),
        choice('"___ der steigenden Temperaturen schmelzen die Gletscher." (n-natija d)', ['Infolge', 'Anlässlich', 'Zugunsten'], 0),
        gap('Kemmel', 'Bezüglich ___ Anfrage melden wir uns morgen. (Ihre)', 'Ihrer'),
        gap('Kemmel', 'Die Lieferung erfolgt innerhalb ___ Woche. (eine)', 'einer'),
        explain(
          'Konnektoren l-ijtijaj',
          md`
            | Wadhifa | Konnektor | Bniya |
            |---|---|---|
            | **i3tiraf + i3tirad** | **zwar …, aber** · **zwar …, doch** | "**Zwar** ist das teuer, **aber** es lohnt sich." |
            | **i3tirad** | **dennoch / trotzdem / dessen ungeachtet** | Adverb → inversion: "…, **dennoch ist** es sinnvoll." |
            | **mo9arana** | **einerseits … andererseits** · **während** · **im Gegensatz dazu** | |
            | **natija** | **folglich / somit / demzufolge / daher** | Adverb → inversion: "**Folglich muss** man handeln." |
            | **zyada** | **darüber hinaus / zudem / außerdem / ferner** | Adverb → inversion |
            | **ta9yid** | **allerdings / jedoch** | Adverb (inversion) wla f l-wost: "Das ist **jedoch** teuer." |
            | **t9wiya** | **zumal** (khossousan 7it) | Nebensatz: "…, **zumal** es kaum regnet." |

            ⚠️ **jedoch / allerdings / dennoch** — t9der t7ttom f **l-bidaya** (inversion) wla **men b3d l-fi3l**: "Er hat **jedoch** recht." · "**Jedoch hat** er recht."
          `,
          [
            ['Zwar ist Entsalzung teuer, dennoch ist sie notwendig.', 'S7i7 t-t7liya ghalya, walakin darouriya.'],
            ['Es regnet kaum. Folglich sinkt der Grundwasserspiegel.', 'Ma katchtach tqriban. Dakchi 3lach mostawa l-ma l-jawfi kaynzel.'],
          ],
        ),
        choice('"Die Maßnahme ist teuer. ___ ist sie notwendig."', ['Dennoch', 'Folglich', 'Zumal'], 0),
        choice('"Es regnet seit Monaten nicht. ___ sind die Felder trocken."', ['Folglich', 'Dennoch', 'Zwar'], 0),
        choice('"Wir sollten Wasser sparen, ___ die Stauseen fast leer sind."', ['zumal', 'folglich', 'dennoch'], 0),
        order('Rtteb', 'Zwar ist das Projekt teuer, aber es lohnt sich langfristig.'),
        order('Rtteb', 'Darüber hinaus muss die Landwirtschaft effizienter werden.'),
        gap('Kemmel', 'Die Preise steigen. ___ kaufen viele weniger. (natija)', 'Folglich|Daher|Somit|Demzufolge|Deshalb'),
        explain(
          'Konnektor ↔ préposition',
          md`
            | Konnektor (Nebensatz / Adverb) | Préposition (Nominalstil) |
            |---|---|
            | **weil** es lange nicht geregnet hat | **aufgrund** der langen Trockenheit |
            | **obwohl** die Kosten hoch sind | **trotz** der hohen Kosten |
            | Es gab einen Sturm. **Deshalb** fiel der Strom aus. | **Infolge** des Sturms fiel der Strom aus. |
            | **Weil** die Lage ernst ist, … | **Angesichts** der ernsten Lage … |
          `,
        ),
        translate("7awwel l Nominalstil", 'Weil die Preise hoch sind, sparen viele Familien.', ['Aufgrund der hohen Preise sparen viele Familien.', 'Wegen der hohen Preise sparen viele Familien.', 'Angesichts der hohen Preise sparen viele Familien.']),
        graded(choice('"___ der Hitze blieben viele zu Hause."', ['Aufgrund', 'Anstelle', 'Zugunsten'], 0)),
        graded(choice('"___ des Geburtstags gibt es Kuchen." (b mounasaba)', ['Anlässlich', 'Infolge', 'Hinsichtlich'], 0)),
        graded(gap('Kemmel', 'Angesichts ___ hohen Kosten wurde das Projekt gestoppt.', 'der')),
        graded(gap('Kemmel', 'Aufgrund des stark___ Regens fiel das Spiel aus.', 'en')),
        graded(choice('"Die Lösung ist nicht perfekt. ___ ist sie besser als nichts."', ['Dennoch', 'Folglich', 'Darüber hinaus'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Folglich wir müssen handeln.', 'Folglich müssen wir handeln.'], 1)),
        graded(choice('"Ich nehme das Fahrrad, ___ es gesünder ist." (khossousan 7it)', ['zumal', 'dennoch', 'folglich'], 0)),
        graded(translate("7awwel l Nominalstil", 'Weil es einen Sturm gab, fiel der Strom aus.', ['Infolge des Sturms fiel der Strom aus.', 'Aufgrund des Sturms fiel der Strom aus.', 'Wegen des Sturms fiel der Strom aus.'])),
        summary(
          [
            '+ Genitiv: **aufgrund, infolge, angesichts, hinsichtlich / bezüglich, anlässlich, innerhalb / außerhalb, anstelle, mithilfe, zugunsten**.',
            'Ijtijaj: **zwar … aber · dennoch · einerseits … andererseits · folglich / somit · darüber hinaus · allerdings / jedoch · zumal**.',
            'Adverbs (dennoch, folglich …) → **inversion** · zumal → **Nebensatz**.',
          ],
          ['Tkhdem prépositions m3a Genitiv', 'Tkhdem Konnektoren l-ijtijaj'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Tempolimit auf der Autobahn? — Die Erörterung',
      description: 'T9ra 7ojaj pro o contra, tsme3 n9ach f r-radio, o tkteb Erörterung kamla.',
      minutes: 45,
      kind: 'skills',
      goals: ['Tfhem 7ojaj pro o contra f nass', 'Tfhem n9ach o t-tbadol d l-7ojaj', 'Tkteb Erörterung b bniya wad7a'],
      steps: [
        intro(
          'Das deutsche Dauerthema',
          'Almaniya men l-bouldan l-9lila f l-3alam li ma fihach 7add 3am d s-sor3a f l-autoroute. Lukas (men Hamburg) o Mehmet ma mtaf9inch…',
          ['T9ra l-7ojaj', 'Tsme3 n-n9ach', 'Tkteb Erörterung'],
        ),
        reading(
          'Tempolimit: Pro und Contra',
          md`
            **Pro:** Befürworter argumentieren, ein generelles Tempolimit von 130 km/h würde den CO₂-Ausstoß im Verkehr spürbar senken – laut Umweltbundesamt um mehrere Millionen Tonnen pro Jahr. Darüber hinaus sinke bei niedrigeren Geschwindigkeiten die Zahl schwerer Unfälle. Zudem sei ein Tempolimit sofort und nahezu kostenlos umsetzbar, nämlich mit ein paar Schildern.

            **Contra:** Gegner halten dem entgegen, der Effekt auf das Klima sei im Vergleich zu anderen Maßnahmen gering. Ein Großteil der Autobahnen habe ohnehin bereits Geschwindigkeitsbegrenzungen. Außerdem gehöre die Freiheit, selbst über die Geschwindigkeit zu entscheiden, für viele Deutsche zum Lebensgefühl. Nicht zuletzt seien deutsche Autobahnen im internationalen Vergleich durchaus sicher.

            **Stimmung:** Umfragen zufolge befürwortet inzwischen eine Mehrheit der Bevölkerung ein Tempolimit. Politisch ist es dennoch bislang nicht durchgesetzt worden.
          `,
          {
            text: '9ra l-7ojaj o jaweb.',
            glossary: [
              ['der Befürworter / der Gegner', 'l-mo2ayyid / l-mo3arid'],
              ['spürbar', 'wade7 / kayt7ess'],
              ['entgegenhalten', 'rdd b 7ojja dodd'],
              ['ohnehin', 'deja / f kol 7al'],
              ['nicht zuletzt', 'o akhiran walakin mohimm'],
              ['durchsetzen', 'farad / dda b'],
            ],
          },
        ),
        choice('Ach men 7ojja PRO?', ['L-7orriya', 'Na9s d CO₂ o l-7awadith', 'L-autoroutes deja amina'], 1),
        choice('Ach men 7ojja CONTRA?', ['Rkhis o sri3', 'Jouz2 kbir d l-autoroutes deja fih 7add', 'Kay9ellel l-7awadith'], 1),
        choice('Chno katgoul l-istitla3at?', ['L-aghlabiya dodd', 'L-aghlabiya m3a 7add s-sor3a', 'Ma kayn 7tta ra2y'], 1),
        listening(
          'Streitgespräch im Radio',
          [
            ['Moderatorin', 'Herr Lange, Sie sind Sprecher eines Automobilclubs. Warum lehnen Sie ein Tempolimit ab?', 'Herr Lange, nta natiq b smiyt nadi d s-sayarat. 3lach katrfed 7add s-sor3a?'],
            ['Herr Lange', 'Zwar verstehe ich die Klimaargumente, dennoch halte ich ein Tempolimit für Symbolpolitik. Viel wirksamer wäre es, in die Bahn zu investieren.', 'S7i7 kanfhem l-7ojaj d l-mounakh, walakin kan3tabar 7add s-sor3a siyasa ramziya. Ghadi ykoun fa33al ktar nstathmrou f t-tran.'],
            ['Moderatorin', 'Frau Öztürk, Sie forschen zur Verkehrssicherheit.', 'Madame Öztürk, nti kat-b7thi f s-salama f t-tri9.'],
            ['Frau Öztürk', 'Das eine schließt das andere nicht aus. Angesichts der Klimaziele brauchen wir beides. Und hinsichtlich der Sicherheit sind die Zahlen eindeutig: Auf Abschnitten mit Tempolimit gibt es weniger Tote.', 'Wa7da ma katlghich l-ukhra. Nadharan l l-ahdaf d l-mounakh, m7tajin j-jouj. O fima yakhoss s-salama, l-ar9am wad7in: f l-ajza2 li fihom 7add kaymoutou 9al.'],
            ['Herr Lange', 'Das mag sein. Allerdings sind die meisten Unfälle auf Landstraßen, nicht auf Autobahnen.', 'Momkin. Walakin ktar l-7awadith f t-tro9 l-9arawiya, machi f l-autoroutes.'],
            ['Frau Öztürk', 'Richtig – und folglich sollten wir auch dort über niedrigere Geschwindigkeiten sprechen.', 'S7i7 — o dakchi 3lach khassna nhdrou 7ta temma 3la sor3a a9al.'],
          ],
        ),
        choice('3lach Herr Lange dodd?', ['Kaykreh t-tran', 'Kay3tabrou siyasa ramziya o kayfaddel l-istithmar f t-tran', 'Kaybgha s-sor3a'], 1),
        choice('Chno katgoul Frau Öztürk 3la s-salama?', ['L-ar9am mkhltin', 'F l-ajza2 li fihom 7add kaymoutou 9al', 'Ma kayn 7tta far9'], 1),
        choice('Kifach rddat 3la 7ojjat t-tro9 l-9arawiya?', ['Waf9at o 9alet khass 7add temma ta', 'Rfdat l-ar9am', 'Bddlat l-mawdou3'], 0),
        explain(
          'Bniyat l-Erörterung (dialektisch)',
          md`
            | Jouz2 | Chno | Redemittel |
            |---|---|---|
            | **Einleitung** | l-mawdou3 + 3lach mohimm + so2al | "Die Frage, ob …, wird seit Jahren kontrovers diskutiert." |
            | **Argumente dafür** | 2–3 7ojaj + amthila | "Für … spricht zunächst, dass …" — "Ein weiteres Argument ist …" |
            | **Argumente dagegen** | 2–3 7ojaj + amthila | "Gegen … lässt sich einwenden, dass …" — "Kritiker geben zu bedenken, dass …" |
            | **Abwägung / Fazit** | ra2yek b ta3lil | "Wägt man die Argumente ab, so …" — "Abschließend bin ich der Meinung, dass …" |

            **Tartib:** bda b l-jiha li **ma** katwaf9ch 3liha, o salli b li katwaf9 3liha — bach l-akhir ykoun 9wi.
            Kol 7ojja = paragraphe: **Behauptung → Begründung → Beispiel**.
          `,
        ),
        pron(
          'N-nghma f l-ijtijaj',
          'F zwar … aber, l-accent 3la "zwar" o "aber" — bach l-moustami3 yfhem l-mo9arana.',
          [
            ['Zwar ist es teuer, aber es lohnt sich.', 'l-accent 3la "zwar" o "aber"'],
            ['Einerseits … andererseits …', 'l-accent 3la "ein" o "an"'],
            ['Das mag sein. Allerdings …', 'wa9fa 9siira 9bel "Allerdings"'],
          ],
        ),
        write(
          'Erörterung: Tempolimit',
          md`
            Kteb Erörterung (~200 kelma): "**Sollte in Deutschland ein generelles Tempolimit auf Autobahnen eingeführt werden?**"
            Tba3 l-bniya (Einleitung → contra / pro → Fazit). Khdem 3 prépositions m3a Genitiv o 4 Konnektoren l-ijtijaj.
          `,
          ['Einleitung (kontrovers diskutiert)', 'Gegenargumente (Gegen … lässt sich einwenden …)', 'Argumente dafür (Für … spricht …)', 'Abwägung (Wägt man … ab …)', 'Fazit (Abschließend …)'],
          'Die Frage, ob auf deutschen Autobahnen ein generelles Tempolimit eingeführt werden sollte, wird seit Jahrzehnten kontrovers diskutiert.\n\nGegen ein Tempolimit lässt sich zunächst einwenden, dass der Effekt auf das Klima im Vergleich zu anderen Maßnahmen gering wäre. Darüber hinaus gibt es auf einem großen Teil der Autobahnen ohnehin schon Begrenzungen. Kritiker geben außerdem zu bedenken, dass die freie Wahl der Geschwindigkeit für viele zur persönlichen Freiheit gehört.\n\nFür ein Tempolimit spricht jedoch, dass es sofort und nahezu kostenlos umsetzbar wäre. Zwar würde es allein den Klimawandel nicht stoppen, dennoch könnte es den CO₂-Ausstoß spürbar senken. Ein weiteres Argument ist die Sicherheit: Aufgrund geringerer Geschwindigkeitsunterschiede ereignen sich weniger schwere Unfälle.\n\nWägt man die Argumente ab, so überwiegen meines Erachtens die Vorteile. Angesichts der Klimaziele sollten wir keine einfache Maßnahme ungenutzt lassen. Abschließend bin ich daher der Meinung, dass ein Tempolimit von 130 km/h sinnvoll wäre – zumal die Mehrheit der Bevölkerung es befürwortet.',
          160,
        ),
        graded(choice('"der Befürworter" =', ['l-mo2ayyid', 'l-mo3arid', 's-sa2i9'], 0)),
        graded(choice('F Erörterung, ach men jiha katkteb f l-akhir?', ['Li ma katwaf9ch 3liha', 'Li katwaf9 3liha', 'Ma kayfr9ch'], 1)),
        graded(choice('"Gegen … lässt sich einwenden, dass …" kat9ddem…', ['7ojja contra', '7ojja pro', 'L-khlasa'], 0)),
        graded(dictation('Sme3 o kteb', 'Angesichts der Klimaziele brauchen wir beides.')),
        summary(
          [
            'Erörterung: **Einleitung → Gegenargumente → Argumente dafür → Abwägung / Fazit**.',
            '**Für … spricht, dass … — Gegen … lässt sich einwenden … — Wägt man die Argumente ab, so …**',
          ],
          ['Tfhem 7ojaj pro o contra', 'Tfhem n9ach', 'Tkteb Erörterung'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 6',
      description: 'Muraja3a: l-mounakh o l-ma, prépositions m3a Genitiv, Konnektoren l-ijtijaj, Erörterung — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 prépositions m3a Genitiv', 'Traja3 Konnektoren l-ijtijaj', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-bi2a o l-ijtijaj: prépositions m3a Genitiv, Konnektoren, o bniyat Erörterung.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **aufgrund / infolge / angesichts / hinsichtlich** + Genitiv (des …-s / der …)
            - **zwar … aber** · **dennoch** · **folglich** · **darüber hinaus** · **zumal**
            - Erörterung: contra → pro → Fazit
          `,
        ),
        dialogue(
          'Bürgerversammlung',
          [
            ['Bürgermeisterin', 'Infolge der Trockenheit müssen wir ab Juli das Rasensprengen verbieten.', 'Natijatan l j-jfaf, khassna nmn3ou s9i l-gazon men Juillet.'],
            ['Bürger', 'Zwar verstehe ich das, aber was ist mit den Gemüsegärten?', 'S7i7 kanfhem hadchi, walakin chno 3la jnan l-khodra?'],
            ['Bürgermeisterin', 'Hinsichtlich der Gärten gibt es eine Ausnahme: Gießen mit der Kanne bleibt erlaubt.', 'Fima yakhoss l-jnan kayn istitna2: s-s9i b l-maghrfa yb9a mesmou7.'],
            ['Bürgerin', 'Gut. Darüber hinaus sollte die Stadt Regenwasser sammeln, zumal das Wasser immer teurer wird.', 'Mzyan. O zid, l-mdina khassha tjme3 l-ma d ch-chta, khossousan 7it l-ma kaywelli ghla.'],
          ],
        ),
        choice('Chno ghadi ytmna3?', ['S9i l-gazon', 'L-jnan kamlin', 'L-ma f d-dar'], 0),
        choice('Chno l-istitna2?', ['S-s9i b l-maghrfa', 'S-s9i b l-lil', 'Walou'], 0),
        gap('Kemmel', '___ der Trockenheit verbietet die Stadt das Rasensprengen. ___ der Gärten gibt es eine Ausnahme.', ['Infolge|Aufgrund|Wegen', 'Hinsichtlich|Bezüglich|Bezueglich']),
        match('Rbet', [
          ['aufgrund', 'bsbab'],
          ['angesichts', 'nadharan l'],
          ['anlässlich', 'b mounasaba'],
          ['zugunsten', 'l-saleh'],
          ['folglich', 'dakchi 3lach'],
        ]),
        speak(
          'Mini-Debatte',
          'Mawdou3: "Sollten Kurzstreckenflüge (unter 500 km) verboten werden?" — 3ti 7ojja contra, 7ojja pro, o ra2yek. Khdem zwar … aber, dennoch, folglich, angesichts.',
          ['Zwar sind Inlandsflüge praktisch, aber sie schaden dem Klima besonders stark.', 'Gegen ein Verbot lässt sich einwenden, dass die Bahn nicht überall eine Alternative ist.', 'Angesichts der Klimaziele bin ich dennoch für ein Verbot, sofern es eine gute Zugverbindung gibt.'],
        ),
        graded(choice('"___ des Streiks fielen viele Züge aus."', ['Infolge', 'Anstelle', 'Zugunsten'], 0)),
        graded(choice('"Die Spendenaktion findet ___ der Kinder statt." (l-saleh)', ['zugunsten', 'anlässlich', 'infolge'], 0)),
        graded(gap('Kemmel', 'Hinsichtlich ___ Termins melde ich mich morgen. (der)', 'des')),
        graded(choice('"Das Wetter war schlecht. ___ hatten wir Spaß."', ['Dennoch', 'Folglich', 'Zumal'], 0)),
        graded(choice('"Er hat nicht gelernt. ___ ist er durchgefallen."', ['Folglich', 'Dennoch', 'Zwar'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Zwar ist es teuer, aber es lohnt sich.', 'Zwar es ist teuer, aber es lohnt sich.'], 0)),
        graded(choice('"Darüber hinaus" =', ['O zid / men fo9 hadchi', 'Walakin', 'Dakchi 3lach'], 0)),
        graded(choice('"die Bewässerung" =', ['s-s9i', 'j-jfaf', 's-sedd'], 0)),
        graded(translate("7awwel l Nominalstil", 'Weil die Lage ernst ist, handeln wir sofort.', ['Angesichts der ernsten Lage handeln wir sofort.', 'Aufgrund der ernsten Lage handeln wir sofort.', 'Wegen der ernsten Lage handeln wir sofort.'])),
        graded(dictation('Sme3 o kteb', 'Infolge der Trockenheit sind viele Stauseen fast leer.')),
        summary(
          [
            'Daba t9der tnaqech l-bi2a b 7ojaj, tkhdem l-lougha r-rasmiya, o tkteb Erörterung.',
            'F l-unité 7: l-mojtama3 o l-ajyal — **Relativsätze** b **wer / was / wo(r)-** o **dessen / deren**.',
          ],
          ['Tnaqech l-bi2a', 'Tkhdem prépositions m3a Genitiv', 'Tkhdem Konnektoren l-ijtijaj', 'Tkteb Erörterung'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
