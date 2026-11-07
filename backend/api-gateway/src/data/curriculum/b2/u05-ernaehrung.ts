import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 5,
  title: 'Gesundheit & Ernährung',
  description: "T-taghdiya, d-dirasat o l-ar9am — b erweiterte Partizipialattribute (die von Ärzten empfohlene Diät) o wasf l-graphiques.",
  icon: 'nutrition',
  objectives: [
    'Tnaqech l-andima l-ghidha2iya o d-dirasat s-se77iya',
    'Tfhem o tkwwen Partizipialattribute mwss3in',
    'T7awwel Partizipialattribut ↔ Relativsatz',
    'Twsef graphique (tla3, nzel, b9a thabet, n-nisab)',
    'Tkteb wasf d statistique m3a ta3li9',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Was kommt auf den Teller?',
      description: 'L-kalimat d t-taghdiya o s-s7a, l-andima l-ghidha2iya, o kifach tnaqech b 7ojaj 3ilmiya.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal t-taghdiya o s-s7a', 'Tnaqech l-andima (vegan, low carb, intermittierendes Fasten)', 'Tsta3mel d-dirasat f l-hedra b ta7affodh'],
      steps: [
        intro(
          'Diät-Diskussion in der Kantine',
          'F l-cantine d l-mostachfa, Tim bda intermittierendes Fasten, Monika welat vegan, o Youssef — li kaysoum Ramadan kol 3am — 3endou ra2y khass…',
          ['T-taghdiya', 'D-dirasat', 'N-n9ach'],
        ),
        dialogue(
          'Mittagspause',
          [
            ['Tim', 'Ich esse seit drei Wochen nur noch zwischen zwölf und zwanzig Uhr. Intervallfasten soll ja wahre Wunder bewirken!', 'Hadi 3 simanat o ana kanakoul ghir bin 12 o 20. Intervallfasten kaygoulou kaydir l-3aja2ib!'],
            ['Monika', 'Wunder? Die Studienlage ist eher gemischt. Abnehmen tut man vor allem, weil man insgesamt weniger isst.', '3aja2ib? D-dirasat mkhltin chwiya. Kat-nqes l-wazn khossousan 7it kat-akoul 9al f l-majmou3.'],
            ['Youssef', 'Für mich ist Fasten nichts Neues – im Ramadan esse ich einen Monat lang erst nach Sonnenuntergang.', '3andi s-siyam machi 7aja jdida — f Ramadan kanakoul chhar kamel ghir men b3d l-maghrib.'],
            ['Tim', 'Und wie schaffst du das bei Nachtschichten?', 'O kifach kat-dbber m3a l-khedma d l-lil?'],
            ['Youssef', 'Mit viel Wasser zwischen Iftar und Suhur und ohne frittiertes Essen. Das Problem ist eher der Schlafmangel.', 'B l-ma bzaf bin l-ftour o s-s7our, o bla makla m9liya. L-mochkil ktar howa 9illat n-n3as.'],
            ['Monika', 'Ich habe auf vegane Ernährung umgestellt, hauptsächlich wegen der Umwelt. Aber man muss Vitamin B12 ergänzen – das betonen alle Fachgesellschaften.', 'Ana beddelt l t-taghdiya l-vegan, khossousan 3la 7sab l-bi2a. Walakin khassek tzid vitamine B12 — hadchi kayakkdou 3lih kol l-jam3iyat l-mohniya.'],
          ],
        ),
        vocab('Ernährung & Gesundheit — T-taghdiya o s-s7a', [
          ['die Ernährung', 't-taghdiya', '', ['Eine ausgewogene Ernährung ist wichtig.', 'T-taghdiya l-motawazina mohimma.']],
          ['ausgewogen', 'motawazin', ''],
          ['die Nährstoffe', 'l-mawad l-moghaddiya', ''],
          ['der Mangel an + Dat', 'n-n9s f', ''],
          ['ergänzen', 'kmmel / zad (complément)', ''],
          ['abnehmen / zunehmen', 'n9es / zad f l-wazn', ''],
          ['der Verzicht auf + Akk', 'l-istighna2 3la', ''],
          ['verarbeitet', 'msanne3 (transformé)', ''],
          ['der Zucker / das Fett', 's-sokkar / d-dhn', ''],
          ['der Ballaststoff', 'l-alyaf (fibres)', 'die Ballaststoffe'],
          ['vorbeugen + Dat', 'w9a men (prévenir)', ''],
          ['die Studienlage', 'wad3 d-dirasat (ach katgoul d-dirasat)', ''],
          ['wirksam', 'fa33al', ''],
          ['der Schlafmangel', '9illat n-n3as', ''],
        ]),
        explain(
          'Tnaqech b d-dirasat — b ta7affodh',
          md`
            | Bach… | Redemittel |
            |---|---|
            | t9addem dirasa | "Einer aktuellen Studie zufolge …" — "Forscher haben herausgefunden, dass …" |
            | tlattef | "Die Studienlage ist (noch) uneinheitlich / dünn." — "Das ist (noch) nicht eindeutig belegt." |
            | t-tamyiz | "**Korrelation** heißt nicht **Kausalität**." — "Das könnte auch andere Gründe haben." |
            | t-tawsiya | "Fachgesellschaften empfehlen, …" — "Es ist ratsam, …" |
            | ra2y chakhsi | "Für mich persönlich hat sich … bewährt." |
          `,
          [
            ['Das ist wissenschaftlich nicht eindeutig belegt.', 'Hadchi ma mtbtch 3ilmiyan b chkel wade7.'],
            ['Korrelation heißt nicht Kausalität.', 'L-irtibat machi howa s-sababiya.'],
          ],
        ),
        match('Rbet', [
          ['ausgewogen', 'motawazin'],
          ['der Mangel', 'n-n9s'],
          ['vorbeugen', 'w9a men'],
          ['verarbeitet', 'msanne3'],
          ['wirksam', 'fa33al'],
        ]),
        choice('3la 7sab Monika, 3lach kan-n9sou l-wazn b Intervallfasten?', ['7it kaykoun sa7ri', '7it kanakoulou 9al f l-majmou3', '7it kanchrbou l-ma'], 1),
        choice('Chno l-mochkil l-kbir 3and Youssef f Ramadan?', ['L-ju3', '9illat n-n3as', 'L-3tech'], 1),
        choice('Chno khass ykmmel li vegan?', ['Vitamine C', 'Vitamine B12', 'S-sokkar'], 1),
        gap('Kemmel', 'Die ___ ist noch uneinheitlich. Korrelation heißt nicht ___.', ['Studienlage', 'Kausalität|Kausalitaet']),
        order('Rtteb', 'Das ist wissenschaftlich nicht eindeutig belegt.'),
        culture(
          'T-taghdiya f Almaniya',
          md`
            - **DGE** (Deutsche Gesellschaft für Ernährung) kat3ti t-tawsiyat r-rasmiya — mathalan **5 am Tag** (3 d l-khodra + 2 d l-fakya) o 9lil d l-l7am.
            - **Nutri-Score** (A–E) 3la l-ma7soulat f s-supermarché — kay3awnek t9aren b sor3a.
            - **Vegetarisch / vegan:** tqriban 10 % d l-almaniyin vegetarier wla vegan, khossousan ch-chabab. F l-cantines dima kayn "veggie"-option.
            - **Ramadan f l-khedma:** bzaf d l-mochaghghilin kayt-fahmou m3a l-mowadhafin (pause flexible, ma kaydirouch l-khedma t-t9ila f l-3chiya) — hder m3a l-mas2oul dyalek bekri.
          `,
        ),
        speak(
          'T-taghdiya dyalek',
          '7ki 3la t-taghdiya dyalek: chno kat-akoul f n-nhar, chno bghiti tbeddel, o chno ra2yek f "diète" mcharra (vegan, low carb, fasting) — b ta7affodh 3ilmi.',
          ['Ich versuche, mich möglichst ausgewogen zu ernähren.', 'Allerdings esse ich zu viel Zucker, vor allem bei Stress.', 'Von Low Carb halte ich nicht so viel, weil die Studienlage uneinheitlich ist.', 'Für mich persönlich hat sich bewährt, abends früher zu essen.'],
        ),
        graded(choice('"ausgewogen" =', ['motawazin', 'msanne3', 'ghali'], 0)),
        graded(choice('"Korrelation heißt nicht Kausalität" kat3ni…', ['L-irtibat machi sababiya', 'D-dirasa ghalta', 'Kolchi s7i7'], 0)),
        graded(gap('Kemmel', 'Viel Bewegung kann vielen Krankheiten ___. (w9a men)', 'vorbeugen')),
        graded(translate("Terjem l l'Almaniya", 'T-taghdiya l-motawazina mohimma.', ['Eine ausgewogene Ernährung ist wichtig.', 'Ausgewogene Ernährung ist wichtig.'])),
        summary(
          [
            'T-taghdiya: **ausgewogen, die Nährstoffe, der Mangel an, ergänzen, verarbeitet, vorbeugen, wirksam**.',
            'D-dirasat: **Einer Studie zufolge … — Die Studienlage ist uneinheitlich. — Korrelation heißt nicht Kausalität.**',
          ],
          ['Tnaqech t-taghdiya', 'Tsta3mel d-dirasat b ta7affodh'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Die von Experten empfohlene Ernährung — Partizipialattribute',
      description: 'L-Partizipialattribute l-mwss3in: kifach t9rahom, kifach t7awwlhom l Relativsatz, o kifach tkwwnhom.',
      minutes: 40,
      kind: 'grammar',
      goals: ['T9ra o tfhem Partizipialattribute twal', 'T7awwel Partizipialattribut ↔ Relativsatz', 'Tkwwen Partizipialattribute b Partizip I o II', 'Tfhem "zu + Partizip I" (die zu lösende Aufgabe)'],
      steps: [
        intro(
          '"Die von der DGE empfohlene Menge"',
          md`
            F n-nousous l-3ilmiya o l-jarayed kat-l9a: "**die von der DGE empfohlene** Menge" — "**der seit Jahren steigende** Zuckerkonsum".
            Hadi **Relativsätze mkhbbyin** 9bel s-smiya! F B1 chefti "das gekochte Ei" — daba ghadi nzidou **ma3loumat bin l-article o s-smiya**.
          `,
          ['T9ra', 'T7awwel', 'Tkwwen'],
        ),
        explain(
          'Kifach t9ra Partizipialattribut',
          md`
            **Article** … [ma3loumat] … **Partizip + terminaison** **Smiya**

            > **die** [von der DGE] **empfohlene** **Menge**
            > **der** [seit Jahren stark] **steigende** **Zuckerkonsum**
            > **ein** [in Deutschland häufig] **unterschätztes** **Problem**

            **Tri9a d l-9raya:**
            1. Chouf l-**article** (die) → 9elleb 3la **s-smiya** dyalou (Menge) — ghaliban b3ida!
            2. L-kelma 9bel s-smiya hiya l-**Partizip** (empfohlene).
            3. Kolchi f l-wost = ma3loumat zayda.
            4. 7awwel l **Relativsatz**: die Menge, **die** von der DGE **empfohlen wird**.
          `,
          [
            ['die schnell wachsende Stadt = die Stadt, die schnell wächst', 'l-mdina li katkber dghya'],
            ['das im Labor getestete Mittel = das Mittel, das im Labor getestet wurde', 'd-dwa li tjrreb f l-mokhtabar'],
          ],
        ),
        choice('F "die vom Arzt verschriebenen Tabletten", s-smiya hiya…', ['Arzt', 'Tabletten', 'verschriebenen'], 1),
        choice('"der seit Jahren steigende Konsum" =', ['der Konsum, der seit Jahren steigt', 'der Konsum, der seit Jahren gestiegen wurde', 'der Konsum, den seit Jahren steigt'], 0),
        explain(
          'Partizip I ↔ Partizip II f l-attribut',
          md`
            | Partizip | Ma3na | Relativsatz | Attribut |
            |---|---|---|---|
            | **I** (-end) | **actif, f nefs l-we9t** | das Kind, das **schläft** | das **schlafende** Kind |
            | **II** (passiv) | **passif** (m3a verbes transitifs) | der Text, der **übersetzt wurde** | der **übersetzte** Text |
            | **II** (actif) | **sala** (m3a verbes b sein) | der Zug, der **angekommen ist** | der **angekommene** Zug |

            **Relativsatz → Attribut:**
            1. 7iyed l-pronom relatif (der/die/das) o l-fi3l l-mosa3id (wird, wurde, ist).
            2. Dir l-Partizip 9bel s-smiya + **terminaison d l-adjectif**.
            3. Dir l-ma3loumat l-khrin 9bel l-Partizip, f nefs t-tartib.

            > die Patienten, **die** seit Wochen auf einen Termin **warten** → die seit Wochen auf einen Termin **wartenden** Patienten
          `,
        ),
        choice('"die Kosten, die stark steigen" → "die stark ___ Kosten"', ['steigenden', 'gestiegenen', 'steigende'], 0),
        choice('"das Buch, das 2020 veröffentlicht wurde" → "das 2020 ___ Buch"', ['veröffentlichende', 'veröffentlichte', 'veröffentlichen'], 1),
        gap('Kemmel', 'die Lebensmittel, die stark verarbeitet sind → die stark ___ Lebensmittel', 'verarbeiteten'),
        gap('Kemmel', 'der Gast, der gerade angekommen ist → der gerade ___ Gast', 'angekommene'),
        explain(
          '"zu" + Partizip I = khass / momkin',
          md`
            **zu + Partizip I** = ma3na passif m3a **darura** wla **imkaniya** (b7al *sein … zu* f l-unité 4):

            > die **zu lösende** Aufgabe = die Aufgabe, die gelöst werden **muss / kann**
            > die bis Freitag **einzureichenden** Unterlagen = die Unterlagen, die bis Freitag eingereicht werden müssen
            > ein nicht **zu unterschätzendes** Risiko = ein Risiko, das man nicht unterschätzen darf

            Trennbar: **ein·zu·reichend** — "zu" f l-wost.
          `,
        ),
        choice('"die zu erledigenden Aufgaben" =', ['l-mohimmat li sala', 'l-mohimmat li khasshom ydarou', 'l-mohimmat l-ghalta'], 1),
        match('Rbet', [
          ['die lachende Frau', 'die Frau, die lacht'],
          ['das gestohlene Auto', 'das Auto, das gestohlen wurde'],
          ['der abgefahrene Zug', 'der Zug, der abgefahren ist'],
          ['die zu lesenden Texte', 'die Texte, die gelesen werden müssen'],
        ]),
        order('Rtteb', 'Die von der DGE empfohlene Menge liegt bei 50 Gramm.'),
        translate("7awwel l Relativsatz", 'die von vielen Ärzten empfohlene Diät', ['die Diät, die von vielen Ärzten empfohlen wird', 'die Diät, die von vielen Ärzten empfohlen wurde']),
        graded(choice('F "die seit Jahren in der Klinik arbeitende Ärztin", s-smiya hiya…', ['Klinik', 'Ärztin', 'Jahren'], 1)),
        graded(choice('"die Studie, die 2023 veröffentlicht wurde" →', ['die 2023 veröffentlichte Studie', 'die 2023 veröffentlichende Studie', 'die 2023 veröffentlicht Studie'], 0)),
        graded(choice('"die Preise, die ständig steigen" →', ['die ständig steigenden Preise', 'die ständig gestiegenen Preise', 'die ständig steigende Preise'], 0)),
        graded(gap('Kemmel', 'das Kind, das weint → das ___ Kind', 'weinende')),
        graded(gap('Kemmel', 'die Aufgabe, die gelöst werden muss → die zu ___ Aufgabe', 'lösende|loesende')),
        graded(choice('"der in Köln geborene Sänger" =', ['der Sänger, der in Köln geboren wurde', 'der Sänger, der in Köln gebärt', 'der Sänger, der in Köln wohnt'], 0)),
        graded(order('Rtteb', 'Das ist ein in Deutschland häufig unterschätztes Problem.')),
        summary(
          [
            'Partizipialattribut = **Relativsatz mkhbbi** 9bel s-smiya: article … ma3loumat … **Partizip + terminaison** smiya.',
            '**P.I** (-end) = actif / daba · **P.II** = passif (wla sala m3a sein) · **zu + P.I** = khass / momkin.',
            'Bach t9ra: l-article → s-smiya → l-Partizip → Relativsatz.',
          ],
          ['T9ra Partizipialattribute', 'T7awwel bin Attribut o Relativsatz', 'Tkwwen attributs b P.I / P.II'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Zahlen, Daten, Grafiken',
      description: 'Tfhem t9rir 3la statistique, tsme3 m7adara 9siira, o twsef graphique b l-kitaba.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tsta3mel l-Redemittel dyal wasf l-graphiques', 'Tfhem m7adara b ar9am', 'Tkteb wasf graphique m3a ta3li9'],
      steps: [
        intro(
          'Statistik verstehen',
          'F l-imti7an d B2 (Goethe o telc) ghaliban khassek twsef graphique. Youssef kaytdrreb b statistique 3la l-isti3mal d s-sokkar.',
          ['L-Redemittel', 'Tsme3', 'Tkteb'],
        ),
        explain(
          'Grafiken beschreiben — Redemittel',
          md`
            | Jouz2 | Redemittel |
            |---|---|
            | **Tqdim** | "Die Grafik / Das Schaubild **zeigt**, wie viel … — Die Daten **stammen von** … aus dem Jahr …" |
            | **Tla3** | "steigen auf / um" — "zunehmen" — "**sich verdoppeln**" — "einen Höchststand erreichen" |
            | **Nzel** | "sinken auf / um" — "zurückgehen" — "abnehmen" — "einen Tiefstand erreichen" |
            | **Thabet** | "gleich bleiben" — "stagnieren" — "sich kaum verändern" |
            | **Nisab** | "Der Anteil … liegt bei 30 %." — "**Knapp** die Hälfte … — **Gut** ein Drittel …" — "Die Mehrheit / Minderheit …" |
            | **Mo9arana** | "Im Vergleich zu … — Während …, … — **doppelt so viel wie** …" |
            | **Khlasa** | "Insgesamt lässt sich feststellen, dass …" — "Auffällig ist, dass …" |

            ⚠️ **auf** = l-ra9m l-jdid · **um** = l-far9: "Der Preis stieg **um** 2 € **auf** 10 €."
            **knapp** 50 % = chwiya ta7t 50 % · **gut** 50 % = chwiya fo9 50 %.
          `,
          [
            ['Der Anteil der Veganer hat sich seit 2015 mehr als verdoppelt.', 'N-nisba d l-vegan tdaw3at ktar men merra men 2015.'],
            ['Knapp ein Drittel der Befragten isst täglich Fleisch.', 'Chwiya ta7t t-tolot d l-mostajwabin kayaklou l-l7am kol nhar.'],
          ],
        ),
        choice('"Der Preis stieg von 8 € auf 10 €." — chno l-far9?', ['um 2 €', 'auf 2 €', 'um 10 €'], 0),
        choice('"gut die Hälfte" =', ['chwiya fo9 50 %', 'chwiya ta7t 50 %', 'bdebt 50 %'], 0),
        reading(
          'Schaubild: Zuckerkonsum in Deutschland (fiktive Beispieldaten)',
          md`
            **Durchschnittlicher Zuckerkonsum pro Kopf und Tag (in Gramm)**

            | Jahr | Erwachsene | Kinder (6–17) |
            |---|---|---|
            | 2005 | 95 g | 110 g |
            | 2010 | 98 g | 115 g |
            | 2015 | 96 g | 108 g |
            | 2020 | 90 g | 98 g |
            | 2024 | 85 g | 92 g |

            *Empfehlung der WHO: höchstens 50 g freier Zucker pro Tag, besser unter 25 g.*
          `,
          {
            text: '9ra l-jadwal (ar9am mkhtar3a l t-tamrin).',
            glossary: [
              ['pro Kopf', 'l kol wa7ed'],
              ['durchschnittlich', 'f l-motawassit'],
              ['höchstens', 'l-a9sa / ma ktar men'],
            ],
          },
        ),
        choice('Imta kan l-isti3mal 3and l-atfal f a3la mostawa?', ['2005', '2010', '2024'], 1),
        choice('Ch7al n9es l-isti3mal 3and l-kbar men 2010 l 2024?', ['um 13 g', 'auf 13 g', 'um 85 g'], 0),
        choice('Wach l-kbar kaychiw tawsiyat WHO f 2024?', ['Ah', 'La — 85 g ktar men 50 g'], 1),
        gap('Kemmel', 'Bei Kindern ging der Konsum von 115 g ___ 92 g zurück, also ___ 23 g.', ['auf', 'um']),
        listening(
          'Kurzvortrag: Die Zuckersteuer',
          [
            ['Referentin', 'Meine Damen und Herren, Großbritannien hat 2018 eine Abgabe auf stark gezuckerte Getränke eingeführt.', 'Sayyidati sadati, Britaniya dart f 2018 dariba 3la l-machroubat li fihom bzaf d s-sokkar.'],
            ['Referentin', 'Das Ergebnis: Viele Hersteller haben ihre Rezepturen geändert, noch bevor die Steuer in Kraft trat. Der Zuckergehalt der betroffenen Getränke sank deutlich.', 'N-natija: bzaf d l-mosanni3in beddlou l-wasafat dyalhom 7ta 9bel ma tbda d-dariba. Nisbat s-sokkar f had l-machroubat n9set b chkel wade7.'],
            ['Referentin', 'In Deutschland setzt man dagegen bisher auf freiwillige Vereinbarungen mit der Industrie. Kritiker bemängeln, dass diese kaum Wirkung zeigen.', 'F Almaniya bil3aks, 7tal daba kay3tamdou 3la ittifa9iyat tatawwo3iya m3a s-sina3a. L-montaqidin kaygoulou belli ta2thirha d3if bzaf.'],
            ['Referentin', 'Ob eine Zuckersteuer auch hier sinnvoll wäre, ist politisch umstritten. Insgesamt lässt sich aber feststellen, dass Preisanreize das Verhalten durchaus beeinflussen können.', 'Wach dariba d s-sokkar ghadi tkoun ma3qoula 7ta hna, hadchi fih khilaf siyasi. Walakin f l-majmou3 n9dro ngoulou belli l-as3ar t9der tbeddel s-solouk.'],
          ],
        ),
        choice('Chno dart Britaniya f 2018?', ['Mn3at s-sokkar', 'Dariba 3la l-machroubat l-m7alyin', 'Fabor l-ma'], 1),
        choice('Chno daru l-mosanni3in?', ['Zadou s-sokkar', 'Beddlou l-wasafat 9bel d-dariba', 'Sddou l-ma3amil'], 1),
        choice('Chno kat-dir Almaniya?', ['Dariba kbira', 'Ittifa9iyat tatawwo3iya', 'Walou'], 1),
        pron(
          'Ar9am o nisab',
          'F l-almaniya: l-fasila = "Komma" (2,5 = "zwei Komma fünf"), o % = "Prozent".',
          [
            ['2,5 Prozent', 'zwei Komma fünf Prozent'],
            ['ein Drittel – ein Viertel – drei Viertel', '1/3 – 1/4 – 3/4'],
            ['Der Anteil liegt bei 42 Prozent.', 'zweiundvierzig'],
          ],
        ),
        write(
          'Wasf l-graphique',
          md`
            Wsef l-jadwal dyal s-sokkar (~150 kelma): tqdim, t-tatawwor 3and l-kbar o l-atfal (m3a ar9am, **um / auf**), mo9arana m3a tawsiyat WHO, o ta3li9 9sir (3lach momkin n9es? chno khass ydar?).
            Khdem jouj **Partizipialattribute** (mathalan: *der seit 2010 sinkende Konsum*, *die von der WHO empfohlene Menge*).
          `,
          ['Tqdim (Die Tabelle zeigt …)', 'L-kbar (… sank von … auf …)', 'L-atfal (… erreichte 2010 einen Höchststand …)', 'Mo9arana m3a WHO', 'Ta3li9 (Insgesamt lässt sich feststellen …)'],
          'Die Tabelle zeigt den durchschnittlichen Zuckerkonsum pro Kopf und Tag in Deutschland zwischen 2005 und 2024, getrennt nach Erwachsenen und Kindern.\n\nBei den Erwachsenen stieg der Konsum zunächst leicht von 95 auf 98 Gramm im Jahr 2010. Danach ging er kontinuierlich zurück und lag 2024 bei 85 Gramm.\n\nBei Kindern ist eine ähnliche Entwicklung zu beobachten, allerdings auf höherem Niveau: Nach einem Höchststand von 115 Gramm im Jahr 2010 sank der Wert um 23 Gramm auf 92 Gramm.\n\nAuffällig ist, dass beide Gruppen trotz des seit 2010 sinkenden Konsums noch immer deutlich über der von der WHO empfohlenen Höchstmenge von 50 Gramm liegen. Kinder essen sogar fast doppelt so viel.\n\nInsgesamt lässt sich feststellen, dass sich die Situation verbessert hat. Meiner Meinung nach wären jedoch weitere Maßnahmen wie eine Zuckersteuer oder mehr Aufklärung in Schulen sinnvoll.',
          120,
        ),
        graded(choice('"zurückgehen" =', ['n9es', 'tla3', 'b9a thabet'], 0)),
        graded(choice('"sich verdoppeln" =', ['tdaw3ef', 'tnqes b n-nos', 'b9a thabet'], 0)),
        graded(choice('"knapp ein Viertel" =', ['chwiya ta7t 25 %', 'chwiya fo9 25 %', 'bdebt 25 %'], 0)),
        graded(dictation('Sme3 o kteb', 'Der Anteil ist um fünf Prozent auf dreißig Prozent gestiegen.')),
        summary(
          [
            'Graphique: **zeigen, steigen / sinken auf / um, sich verdoppeln, einen Höchststand erreichen, der Anteil liegt bei, knapp / gut**.',
            'Khlasa: **Insgesamt lässt sich feststellen, dass … — Auffällig ist, dass …**',
          ],
          ['Twsef graphique', 'Tfhem m7adara b ar9am', 'Tkteb wasf m3a ta3li9'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 5',
      description: 'Muraja3a: t-taghdiya, Partizipialattribute, wasf l-graphiques — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Partizipialattribute', 'Traja3 Redemittel d l-graphiques', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'T-taghdiya o s-s7a, Partizipialattribute, o l-ar9am.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - die [von Experten] **empfohlene** Diät = die Diät, die von Experten empfohlen wird
            - der [stark] **steigende** Preis = der Preis, der stark steigt
            - die **zu lösende** Aufgabe = … gelöst werden muss
            - steigen **um** (far9) / **auf** (ra9m jdid) · **knapp** / **gut**
          `,
        ),
        dialogue(
          'Teambesprechung auf Station',
          [
            ['Stationsleitung', 'Schauen Sie mal auf die Grafik: Die Zahl der Diabetes-Patienten auf unserer Station hat sich in fünf Jahren fast verdoppelt.', 'Chouf l-graphique: 3adad mrad s-sokkar f l-9ism dyalna tdaw3ef tqriban f 5 snin.'],
            ['Youssef', 'Das liegt sicher auch an der stark gestiegenen Zahl älterer Patienten.', 'Akid hadchi 3la 7sab ta l-3adad l-kbir d l-mrad l-kbar f s-senn li tla3.'],
            ['Stationsleitung', 'Richtig. Deshalb brauchen wir eine bis Ende des Monats zu erstellende Schulung für das Team.', 'S7i7. Dakchi 3lach khassna formation l l-équipe khassha tkoun wajda 9bel akhir ch-chhar.'],
            ['Youssef', 'Ich könnte die von der Diabetesberaterin vorbereiteten Materialien zusammenfassen.', 'N9der nlakhkhes l-wata2i9 li wjjdat-ha l-mostachara d s-sokkari.'],
          ],
        ),
        choice('Chno w9e3 l 3adad mrad s-sokkar?', ['N9es', 'Tdaw3ef tqriban', 'B9a thabet'], 1),
        choice('Chno ghadi ydir Youssef?', ['Yktb dirasa', 'Ylakhkhes l-wata2i9 d l-mostachara', 'Ymchi l l-formation'], 1),
        gap('Kemmel', 'die ___ Zahl älterer Patienten (stark steigen, P.II) · eine bis Ende des Monats zu ___ Schulung (erstellen)', ['gestiegene', 'erstellende']),
        match('Attribut → Relativsatz', [
          ['die schlafenden Kinder', 'die Kinder, die schlafen'],
          ['die reparierte Heizung', 'die Heizung, die repariert wurde'],
          ['die zu bezahlende Rechnung', 'die Rechnung, die bezahlt werden muss'],
        ]),
        speak(
          'Wsef graphique',
          'Wsef had l-ar9am (mkhtar3in): "Anteil der Menschen, die täglich Sport treiben" — 2015: 22 %, 2020: 28 %, 2024: 35 %. Tqdim, t-tatawwor (um / auf), o ta3li9.',
          ['Die Grafik zeigt den Anteil der Menschen, die täglich Sport treiben.', 'Im Jahr 2015 lag der Anteil bei 22 Prozent.', 'Bis 2024 stieg er um 13 Prozentpunkte auf 35 Prozent.', 'Insgesamt lässt sich feststellen, dass immer mehr Menschen auf ihre Gesundheit achten.'],
        ),
        graded(choice('"der Zug, der gerade abfährt" →', ['der gerade abfahrende Zug', 'der gerade abgefahrene Zug', 'der gerade abfahrend Zug'], 0)),
        graded(choice('"die Waren, die gestern geliefert wurden" →', ['die gestern gelieferten Waren', 'die gestern liefernden Waren', 'die gestern geliefert Waren'], 0)),
        graded(choice('"die zu beantwortenden Fragen" =', ['die Fragen, die beantwortet werden müssen', 'die Fragen, die beantwortet wurden', 'die Fragen, die antworten'], 0)),
        graded(gap('Kemmel', 'ein Problem, das oft unterschätzt wird → ein oft ___ Problem', 'unterschätztes|unterschaetztes')),
        graded(choice('"Der Preis stieg von 4 € auf 6 €" — "Er stieg ___ 2 €."', ['um', 'auf', 'bei'], 0)),
        graded(choice('"Der Anteil ___ bei 40 Prozent."', ['liegt', 'steht', 'ist um'], 0)),
        graded(choice('"stagnieren" =', ['b9a thabet', 'tla3 bzaf', 'nzel bzaf'], 0)),
        graded(choice('"ausgewogen" =', ['motawazin', 'msanne3', 'fa33al'], 0)),
        graded(translate("7awwel l Partizipialattribut", 'die Studie, die 2022 veröffentlicht wurde', ['die 2022 veröffentlichte Studie'])),
        graded(dictation('Sme3 o kteb', 'Die von der WHO empfohlene Menge liegt bei fünfzig Gramm.')),
        summary(
          [
            'Daba t9der t9ra n-nousous l-3ilmiya, twsef graphique o tnaqech s-s7a b 7ojaj.',
            'F l-unité 6: l-bi2a o l-mounakh — **Erörterung**, **Konnektoren l-ijtijajiya** o **prépositions m3a Genitiv** (aufgrund, infolge, angesichts …).',
          ],
          ['Tnaqech t-taghdiya', 'Tfhem o tkwwen Partizipialattribute', 'Twsef graphique'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
