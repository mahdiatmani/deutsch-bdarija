import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 11,
  title: 'Umwelt & Zukunft',
  description: "L-mosta9bal: t-tiknoloujiya, l-mdina d l-ghedda o t-taghyir l-mounakhi — b Futur I (tanabbo2, wa3d, ta9dir) o sodass / so … dass.",
  icon: 'rocket_launch',
  objectives: [
    'Ttnabba2 b l-mosta9bal o t3ti wa3d',
    'Tkhdem Futur I (werden + Infinitiv) b ma3anih l-mokhtalifa',
    'Tfre9 bin l-isti3malat dyal werden (Vollverb, Futur, Passiv)',
    'Tkhdem sodass o so … dass l n-nata2ij',
    'Tkteb mosaahama f forum 3la mawdou3 d l-mosta9bal',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wie werden wir 2050 leben?',
      description: 'L-kalimat d t-tiknoloujiya o l-mounakh, t-tanabbo2at, o kifach t3ber 3la l-amal o l-khawf.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-mosta9bal o l-mounakh', 'Ttnabba2 b l-mosta9bal', 'T3ber 3la l-amal o l-9ala9'],
      steps: [
        intro(
          'Zukunftsvisionen',
          'F l-cours d Herr Brandt, l-mawdou3: "Wie werden wir im Jahr 2050 leben?" Salma motafa2ila, Mehmet chwiya motacha2im…',
          ['T-tanabbo2', 'L-amal', 'L-khawf'],
        ),
        dialogue(
          'Diskussion im Kurs',
          [
            ['Herr Brandt', 'Was glauben Sie: Wie wird unser Alltag im Jahr 2050 aussehen?', 'Chno kat-dhennou: kifach ghadi tkoun 7yatna l-yawmiya f 2050?'],
            ['Salma', 'Ich bin optimistisch. Autos werden selbst fahren, und künstliche Intelligenz wird uns viel Arbeit abnehmen.', 'Ana motafa2ila. T-tomobilat ghadi ysou9ou bou7dhom, o d-dakaa2 l-istina3i ghadi y-khffef 3lina bzaf d l-khedma.'],
            ['Mehmet', 'Vielleicht. Aber viele Jobs werden verschwinden. Und der Klimawandel wird immer mehr Probleme verursachen.', 'Momkin. Walakin bzaf d l-khdmat ghadi ytwedrou. O t-taghyir l-mounakhi ghadi ysbbeb machakil ktar o ktar.'],
            ['Olena', 'Im Sommer ist es schon jetzt so heiß, dass ich nachts nicht schlafen kann.', 'F s-sif daba deja sokhoun bzaf 7tal ma kan9derch n3es f l-lil.'],
            ['Salma', 'Deshalb werden die Städte grüner werden müssen – mit mehr Parks und Bäumen auf den Dächern.', 'Dakchi 3lach l-moudoun ghadi tkoun mjboura twelli khdra ktar — b ktar d l-7ada2i9 o sh-shjer f s-sto7.'],
            ['Herr Brandt', 'Und was werden Sie persönlich tun?', 'O chno ghadi tdirou ntouma chakhsiyan?'],
            ['Mehmet', 'Ich verspreche: Ich werde öfter mit dem Fahrrad fahren!', 'Kanwa3dkom: ghadi nmchi b l-bichklita ktar!'],
          ],
        ),
        vocab('Zukunft & Umwelt — L-mosta9bal o l-bi2a', [
          ['die künstliche Intelligenz (KI)', 'd-dakaa2 l-istina3i (IA)', ''],
          ['der Klimawandel', 't-taghyir l-mounakhi', '', ['Der Klimawandel betrifft uns alle.', 'T-taghyir l-mounakhi kaymss kollna.']],
          ['die Erderwärmung', 'l-i7tibas l-7arari', ''],
          ['die Dürre', 'j-jfaf', ''],
          ['die Überschwemmung', 'l-fayadan', ''],
          ['erneuerbare Energien', 't-ta9at l-motajaddida', ''],
          ['der Strom', 'l-kahraba (courant)', ''],
          ['verschwinden', 'ttwedder / ghber', ''],
          ['ersetzen', 'khlef / beddel', ''],
          ['die Entwicklung', 't-tatawwor', ''],
          ['optimistisch / pessimistisch', 'motafa2il / motacha2im', ''],
          ['befürchten', 'khaf men (y9e3)', '', ['Ich befürchte, dass es teurer wird.', 'Kankhaf ywelli ghla.']],
          ['hoffen', 'tmenna / 3ndou l-amal', ''],
          ['versprechen', 'w3ed', ''],
        ]),
        explain(
          'T3ber 3la l-amal, l-khawf o t-tanabbo2',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tanabbo2 | "Ich glaube / bin sicher, dass … werden wird." — "In 20 Jahren wird …" |
            | amal | "Ich hoffe, dass …" — "Ich bin optimistisch, weil …" |
            | khawf | "Ich befürchte, dass …" — "Es macht mir Sorgen, dass …" |
            | chakk | "Ich bezweifle, dass …" — "Das halte ich für unwahrscheinlich." |
            | wa3d | "Ich verspreche, dass ich …" — "Ich werde bestimmt …" |
          `,
          [
            ['Ich bezweifle, dass Autos bald fliegen werden.', 'Kanchekk belli t-tomobilat ghadi ytiyrou 9riba.'],
            ['Es macht mir Sorgen, dass die Sommer immer heißer werden.', 'Kay9ele9ni belli s-sif kaywelli dima s-khoun ktar.'],
          ],
        ),
        match('Rbet', [
          ['der Klimawandel', 't-taghyir l-mounakhi'],
          ['die Dürre', 'j-jfaf'],
          ['ersetzen', 'khlef / beddel'],
          ['befürchten', 'khaf men'],
          ['versprechen', 'w3ed'],
        ]),
        choice('Salma…', ['Motafa2ila', 'Motacha2ima', 'Ma 3endha ra2y'], 0),
        choice('Chno kaykhaf menno Mehmet?', ['L-khdmat ghadi ytwedrou o l-mounakh', 'T-tomobilat', 'L-7ada2i9'], 0),
        choice('Chno w3ed Mehmet?', ['Ychri tomobil kahraba2iya', 'Ymchi b l-bichklita ktar', 'Ymchi l l-cours ktar'], 1),
        gap('Kemmel', 'Ich ___, dass viele Jobs verschwinden. (kankhaf)', 'befürchte|befuerchte'),
        order('Rtteb', 'Ich bin optimistisch, weil die Technik uns helfen wird.'),
        culture(
          'Energiewende o l-Maghrib',
          md`
            - **Energiewende:** Almaniya kat7awel l t-ta9at l-motajaddida. F 2023, ktar men **n-nos** d l-kahraba jat men t-ta9at l-motajaddida (ri7, chams, biomasse…). Akhir mo7attat nawawiya tsddo f April 2023.
            - **L-Maghrib** 3endou wa7da men akbar l-mo7attat ch-chamsiya f l-3alam: **Noor Ouarzazate**. O kayn mocharaka3 dyal l-hydrogène l-akhdar m3a Europa.
            - F l-7yat l-yawmiya: f Almaniya bzaf d n-nas 3endhom **Balkonkraftwerk** (panneau solaire sghir f l-balcon) — 9anouniyan sahel daba.
          `,
        ),
        speak(
          'Ra2yek f l-mosta9bal',
          'Kifach ghadi tkoun l-7yat f 2050? 3ti 2 tanabbo2at, 7aja wa7da katkhllik motafa2il, 7aja katkhllik t9ele9, o wa3d chakhsi.',
          ['Ich glaube, dass Roboter viele Arbeiten im Haushalt übernehmen werden.', 'Ich hoffe, dass wir mehr erneuerbare Energien nutzen werden.', 'Es macht mir Sorgen, dass es immer mehr Dürren gibt.', 'Ich verspreche, dass ich weniger Plastik kaufen werde.'],
        ),
        graded(choice('"die Überschwemmung" =', ['l-fayadan', 'j-jfaf', 'l-kahraba'], 0)),
        graded(choice('"Ich bezweifle, dass …" katbyyen…', ['Chakk', 'Yaqin', 'Wa3d'], 0)),
        graded(gap('Kemmel', 'Viele Menschen ___, dass KI ihre Arbeitsplätze ersetzt. (kaykhafou)', 'befürchten|befuerchten')),
        graded(translate("Terjem l l'Almaniya", 'T-taghyir l-mounakhi kaymss kollna.', ['Der Klimawandel betrifft uns alle.', 'Der Klimawandel betrifft alle.'])),
        summary(
          [
            'L-mosta9bal: **die KI, der Klimawandel, die Dürre, erneuerbare Energien, ersetzen, verschwinden, die Entwicklung**.',
            'Amal / khawf: **Ich hoffe, dass … / Ich befürchte, dass … / Ich bezweifle, dass …**',
          ],
          ['Ttnabba2 b l-mosta9bal', 'T3ber 3la l-amal o l-khawf'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Es wird so heiß sein, dass … — Futur I & Folgen',
      description: 'Futur I (tanabbo2, wa3d, ta9dir), l-isti3malat dyal werden, o sodass / so … dass.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem Futur I b ma3anih', 'Tfre9 bin werden (Vollverb / Futur / Passiv)', 'T3ber 3la n-nata2ij b sodass o so … dass'],
      steps: [
        intro(
          '"Ich werde öfter mit dem Fahrrad fahren!"',
          md`
            F l-almaniya ghaliban kankhdmou **Präsens** l l-mosta9bal ("Morgen fahre ich nach Bonn"). Ma7al l-**Futur I**?
            O Olena 9alt: "Es ist **so** heiß, **dass** ich nicht schlafen kann." — n-natija.
          `,
          ['Futur I', 'werden ×3', 'so … dass'],
        ),
        explain(
          'Futur I: werden + Infinitiv',
          md`
            | | werden | | Infinitiv |
            |---|---|---|---|
            | ich | **werde** | morgen früher | **aufstehen** |
            | du | **wirst** | | |
            | er/sie/es | **wird** | | |
            | wir/sie/Sie | **werden** | | |
            | ihr | **werdet** | | |

            **Fo9ach katkhdmou?**

            | Ma3na | Mital |
            |---|---|
            | **tanabbo2** (pronostic) | "2050 **werden** mehr Menschen in Städten **leben**." |
            | **wa3d / niya 9wiya** | "Ich **werde** dir **helfen**, versprochen!" |
            | **ta9dir f l-7ader** (+ wohl) | "Er antwortet nicht. Er **wird wohl** noch **schlafen**." (ghaliban na3es) |
            | **amr 9wi** | "Du **wirst** jetzt deine Hausaufgaben **machen**!" |

            Ila kan l-we9t wade7 (morgen, nächste Woche) o ma kaynch wa3d → **Präsens** a7ssen: "Nächste Woche **fliege** ich nach Fès."
            M3a Modalverb: "Ich **werde** morgen arbeiten **müssen**." (2 infinitifs f l-akhir)
          `,
          [
            ['Keine Sorge, das wird schon klappen!', 'Ma t9le9ch, ghadi tdouz mzyan!'],
            ['Sie wird wohl im Stau stehen.', 'Ghaliban hiya f z-z7am.'],
          ],
        ),
        choice('"Ich ___ dich morgen anrufen, versprochen!"', ['werde', 'wird', 'wurde'], 0),
        choice('"Er ist nicht da. Er ___ wohl krank sein." — had l-jomla katbyyen…', ['Wa3d', 'Ta9dir f l-7ader', 'Tanabbo2 dyal 2050'], 1),
        order('Rtteb', 'In Zukunft werden wir weniger Fleisch essen.'),
        gap('Kemmel', 'Ihr ___ das Problem bestimmt lösen. (werden)', 'werdet'),
        explain(
          'werden — tlata d l-wjouh',
          md`
            | Isti3mal | Bniya | Mital |
            |---|---|---|
            | **Vollverb** (wella) | werden + smiya / adjectif | "Es **wird** heiß." — "Sie **wird** Ärztin." |
            | **Futur I** | werden + **Infinitiv** | "Es **wird** regnen." |
            | **Passiv** | werden + **Partizip II** | "Der Müll **wird** getrennt." |

            Tri9a: chouf l-akhir dyal l-jomla! **Infinitiv** → Futur · **Partizip II** → Passiv · **Adjectif / smiya** → wella.
            > Die Städte **werden** grüner **werden** müssen. (Futur + Vollverb + Modal!)
          `,
        ),
        match('Ach men "werden"?', [
          ['Das Wetter wird besser.', 'Vollverb (wella)'],
          ['Morgen wird es schneien.', 'Futur I'],
          ['Die Straße wird repariert.', 'Passiv'],
        ]),
        choice('"Plastik wird in Zukunft durch neue Materialien ersetzt." — werden hna howa…', ['Futur I', 'Passiv', 'Vollverb'], 1),
        explain(
          'Folgen: sodass / so … dass',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **sodass** (/ so dass) | b 7ayth / ma3a n-natija | Es regnete stark, **sodass** die Straßen überflutet **waren**. |
            | **so** + adjectif … **dass** | [adjectif] bzaf 7tal | Es war **so** heiß, **dass** niemand schlafen **konnte**. |
            | **solch-** / **so ein** … **dass** | [smiya] b7al hadi 7tal | Es gab **so einen** Sturm, **dass** Bäume umfielen. |

            Ij-jouj **Nebensatz** → l-fi3l f l-akhir.
            Mo9arana: **deshalb / deswegen** (Hauptsatz, inversion): "Es regnete stark. **Deshalb waren** die Straßen überflutet."
          `,
          [
            ['Es hat so viel geregnet, dass der Keller voll Wasser war.', 'Chta bzaf 7tal l-cave t3emmrat b l-ma.'],
            ['Die Preise sind gestiegen, sodass viele Leute weniger kaufen.', 'L-as3ar tl3at, 7tal bzaf d n-nas kaychriw 9al.'],
          ],
        ),
        choice('"Es war ___ kalt, dass der See gefroren ist."', ['so', 'sodass', 'zu'], 0),
        gap('Kemmel', 'Der Zug hatte Verspätung, ___ ich den Anschluss verpasst habe.', 'sodass|so dass'),
        order('Rtteb', 'Es war so laut, dass ich nichts verstanden habe.'),
        translate("Terjem l l'Almaniya", 'Ghadi n3awnek, wa3d!', ['Ich werde dir helfen, versprochen!', 'Ich werde dir helfen. Versprochen!', 'Ich helfe dir, versprochen!']),
        graded(choice('"Wir ___ im Sommer nach Marokko fliegen."', ['werden', 'werdet', 'wird'], 0)),
        graded(choice('"Sie geht nicht ans Telefon. Sie ___ wohl noch arbeiten."', ['wird', 'wurde', 'werdet'], 0)),
        graded(choice('"Die Häuser werden mit Solarenergie geheizt." =', ['Passiv', 'Futur I', 'Vollverb'], 0)),
        graded(choice('"Er möchte Lehrer ___."', ['werden', 'wird', 'geworden'], 0)),
        graded(gap('Kemmel', 'Es war ___ windig, ___ wir das Picknick abgesagt haben.', ['so', 'dass'])),
        graded(choice('Ina jomla s7i7a?', ['Es regnete, sodass wir blieben zu Hause.', 'Es regnete, sodass wir zu Hause blieben.'], 1)),
        graded(order('Rtteb', 'Ich werde morgen länger arbeiten müssen.')),
        summary(
          [
            '**Futur I = werden + Infinitiv**: tanabbo2, wa3d, ta9dir (+ wohl), amr. L-mosta9bal l-3adi → Präsens kafi.',
            '**werden**: + adjectif (Vollverb) · + Infinitiv (Futur) · + Partizip II (Passiv).',
            '**sodass** / **so … dass** + Nebensatz = n-natija.',
          ],
          ['Tkhdem Futur I', 'Tfre9 bin wjouh werden', 'T3ber 3la n-nata2ij'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Die Stadt von morgen',
      description: 'T9ra ma9al 3la l-mdina d l-mosta9bal, tsme3 podcast 3la l-KI, o tkteb mosaahama f forum.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem ma9al 3la mocharaka3 d l-mosta9bal', 'Tfhem podcast (l-ijabiyat o s-salbiyat dyal l-KI)', 'Tkteb ra2yek f forum'],
      steps: [
        intro(
          'Schwammstadt & KI',
          'Köln bghat twelli "Schwammstadt" (mdina-sponge). Salma 9rat 3liha ma9al o sem3at podcast 3la l-KI f l-khedma.',
          ['T9ra l-ma9al', 'Tsme3 l-podcast', 'Tkteb f l-forum'],
        ),
        reading(
          'Die Schwammstadt: Wie Städte sich an das Klima anpassen',
          md`
            Lange Hitzeperioden und plötzliche Starkregen – beides wird in Deutschland häufiger werden, sagen Klimaforscher. Viele Städte reagieren darauf mit dem Konzept der „Schwammstadt".

            Die Idee ist einfach: Eine Stadt soll Regenwasser wie ein Schwamm aufnehmen und speichern, statt es sofort in die Kanalisation zu leiten. Dafür werden Flächen entsiegelt, das heißt, Beton und Asphalt werden durch Wiesen, Bäume und durchlässige Steine ersetzt. Auf Dächern entstehen Gärten, die das Wasser zurückhalten.

            Der Vorteil: Bei Starkregen laufen die Keller nicht so schnell voll, und bei Hitze verdunstet das gespeicherte Wasser langsam, sodass die Luft abkühlt. Messungen zeigen, dass es unter Bäumen bis zu zehn Grad kühler sein kann als auf einem Parkplatz.

            Kritiker weisen allerdings darauf hin, dass der Umbau teuer ist und Jahrzehnte dauern wird. „Aber nichts zu tun, wird am Ende noch teurer", meint eine Stadtplanerin aus Köln.
          `,
          {
            text: '9ra l-ma9al o jaweb.',
            glossary: [
              ['der Schwamm', 'l-ponja (sponge)'],
              ['der Starkregen', 'chta 9wiya'],
              ['aufnehmen / speichern', 'chreb / khzen'],
              ['entsiegeln', '7iyed l-béton (bach l-ard tchreb)'],
              ['durchlässig', 'kaydowwez l-ma'],
              ['verdunsten', 'tbkhkher'],
              ['hinweisen auf', 'nbbeh l / chir l'],
            ],
          },
        ),
        choice('Chno hiya l-fikra d "Schwammstadt"?', ['Tbni ktar d l-béton', 'L-mdina katchreb o katkhzen l-ma d ch-chta', 'Tna99i l-ma'], 1),
        choice('Ch7al momkin ykoun l-far9 d l-7arara ta7t sh-shjer?', ['2 °C', 'Ta 10 °C', '20 °C'], 1),
        choice('Chno t9oul l-mokhattita (Stadtplanerin)?', ['L-mocharaka ghalya, ma khassnach ndirouh', 'Ila ma dirna walou ghadi ykoun ghla f l-akhir', 'Ghadi ysala f 3am'], 1),
        listening(
          'Podcast: KI im Arbeitsleben',
          [
            ['Moderatorin', 'Frau Dr. Kessler, wird KI uns bald die Arbeit wegnehmen?', 'Dr. Kessler, wach l-KI ghadi takhod lina l-khedma 9riba?'],
            ['Dr. Kessler', 'Einige Tätigkeiten werden sicher verschwinden, zum Beispiel einfache Büroarbeiten. Aber es werden auch neue Berufe entstehen.', 'Chi khdmat akid ghadi ytwedrou, b7al l-khedma l-basita f l-maktab. Walakin ghadi ytla3ou ta mihan jdad.'],
            ['Moderatorin', 'Welche Fähigkeiten werden wichtiger?', 'Ach men mahara ghadi tweli mohimma ktar?'],
            ['Dr. Kessler', 'Alles, was Maschinen schlecht können: Kreativität, Empathie, Probleme im Team lösen. In der Pflege zum Beispiel wird der Mensch nie ganz ersetzt werden.', 'Kolchi li l-makinat ma kayt9nouhch: l-ibda3, t-ta3atof, 7all l-machakil f l-équipe. F t-tamrid mathalan, l-insan 3emmro ma ghadi ytkhlef kamel.'],
            ['Moderatorin', 'Und was raten Sie jungen Menschen?', 'O chno kat-nse7i ch-chabab?'],
            ['Dr. Kessler', 'Neugierig bleiben und lebenslang lernen. Wer mit KI arbeiten kann, wird bessere Chancen haben als jemand, der Angst davor hat.', 'B9aw fdouliyin o t3llmou 7yatkom kamla. Li 3ref ykhdem m3a l-KI ghadi tkoun 3endou forsa a7ssen men li kaykhaf menha.'],
          ],
        ),
        choice('3la 7sab Dr. Kessler, l-KI…', ['Ghadi takhod kol l-khdmat', 'Ghadi t7iyed chi khdmat o tkhle9 khdmat jdad', 'Ma ghadi tbeddel walou'], 1),
        choice('Ach men mahara ghadi tweli mohimma?', ['L-7isab s-sri3', 'L-ibda3, t-ta3atof, l-khedma f l-équipe', 'L-kitaba b l-yed'], 1),
        choice('Chno katgoul 3la t-tamrid (Pflege)?', ['L-robot ghadi ykhlef l-momarridin', 'L-insan 3emmro ma ghadi ytkhlef kamel', 'Ghadi ytwedder'], 1),
        pron(
          'L-kalimat l-mrakkba t-twila',
          'Fe9 l-kelma l-twila l ajza2: Schwamm-stadt, Stark-regen, Hitze-periode.',
          [
            ['die Schwammstadt', 'Schwamm + Stadt'],
            ['der Starkregen – die Hitzeperiode', 'Stark + Regen · Hitze + Periode'],
            ['die Kanalisation – die Klimaforscherin', 'Kanal-i-sa-tion · Klima + Forscherin'],
          ],
        ),
        write(
          'Forumsbeitrag: "Wird KI unser Leben besser machen?"',
          md`
            Kteb mosaahama f forum (~120 kelma): ra2yek, 2 ijabiyat o 1 salbiya (m3a amthila), o tanabbo2 dyalek.
            Khdem **Futur I** (2×), **so … dass / sodass**, o **Ich befürchte / hoffe, dass …**
          `,
          ['Ra2yek (Meiner Meinung nach …)', 'Ijabiya 1 + mital', 'Ijabiya 2 + mital', 'Salbiya (Ich befürchte, dass …)', 'Tanabbo2 / khlasa (In 20 Jahren wird …)'],
          'Meiner Meinung nach wird KI unser Leben in vielen Bereichen besser machen.\n\nErstens wird sie Ärzten helfen, Krankheiten früher zu erkennen. Programme können heute schon Röntgenbilder so genau analysieren, dass sie kleine Tumore entdecken. Zweitens wird KI langweilige Aufgaben übernehmen, sodass wir mehr Zeit für kreative Arbeit haben.\n\nAllerdings befürchte ich, dass viele Menschen ihren Job verlieren werden, wenn sie sich nicht weiterbilden. Außerdem verstehen wir oft nicht, wie KI ihre Entscheidungen trifft.\n\nIch glaube, dass in 20 Jahren fast jeder mit KI arbeiten wird. Deshalb sollten wir schon heute lernen, sie kritisch und verantwortungsvoll zu nutzen.',
          100,
        ),
        graded(choice('"speichern" =', ['khzen', 'tbkhkher', 'ghber'], 0)),
        graded(choice('"entsiegeln" kay3ni…', ['T7iyed l-béton bach l-ard tchreb l-ma', 'Tsedd l-bab', 'Tbni sto7'], 0)),
        graded(choice('"die Fähigkeit" =', ['l-mahara / l-9odra', 'l-khawf', 'l-mihna'], 0)),
        graded(dictation('Sme3 o kteb', 'Wer mit KI arbeiten kann, wird bessere Chancen haben.')),
        summary(
          [
            'Schwammstadt: **Regenwasser aufnehmen / speichern, Flächen entsiegeln, verdunsten, abkühlen**.',
            'KI: **Tätigkeiten verschwinden, neue Berufe entstehen, Fähigkeiten, lebenslang lernen**.',
          ],
          ['Tfhem ma9al 3la l-mosta9bal', 'Tfhem podcast', 'Tkteb ra2yek f forum'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 11',
      description: 'Muraja3a: l-mosta9bal o l-bi2a, Futur I, werden, sodass / so … dass — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Futur I o werden', 'Traja3 sodass / so … dass', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-mosta9bal, l-mounakh o l-KI — m3a Futur I o n-nata2ij.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **werden + Infinitiv** = Futur I (tanabbo2, wa3d, ta9dir m3a *wohl*)
            - werden + adjectif = wella · werden + Partizip II = Passiv
            - **so** + adj. **…, dass** · **…, sodass** → fi3l f l-akhir
          `,
        ),
        dialogue(
          'Silvester-Vorsätze',
          [
            ['Lukas', 'Habt ihr gute Vorsätze für das neue Jahr?', 'Wach 3endkom niyat mzyana l l-3am j-jdid?'],
            ['Youssef', 'Ja! Ich werde die B1-Prüfung bestehen – ganz sicher.', 'Ah! Ghadi nnje7 f imti7an B1 — akid.'],
            ['Nina', 'Und ich werde jeden Tag zehn Minuten meditieren. Letztes Jahr war ich so gestresst, dass ich kaum geschlafen habe.', 'O ana ghadi ndir méditation 10 d9aye9 kol nhar. L-3am li fat kunt mstressya bzaf 7tal ma n3st tqriban.'],
            ['Lukas', 'Wo ist eigentlich Ben?', 'Fin howa Ben?'],
            ['Nina', 'Der wird wohl noch auf der Party sein.', 'Ghaliban mazal f l-7afla.'],
          ],
        ),
        choice('Chno w3ed Youssef?', ['Ydir méditation', 'Ynje7 f B1', 'Ymchi l l-7afla'], 1),
        choice('"Der wird wohl noch auf der Party sein." =', ['Wa3d', 'Ta9dir (ghaliban)', 'Passiv'], 1),
        gap('Kemmel', 'Ich ___ die Prüfung bestehen. Ich war ___ müde, dass ich eingeschlafen bin.', ['werde', 'so']),
        match('Rbet', [
          ['die Dürre', 'j-jfaf'],
          ['erneuerbare Energien', 't-ta9at l-motajaddida'],
          ['befürchten', 'khaf men'],
          ['die Entwicklung', 't-tatawwor'],
        ]),
        speak(
          'Diskussion: mdinatek f 2050',
          '7ki kifach ghadi tkoun mdinatek (Casa, Fès, Köln…) f 2050: l-mouwasalat, l-bi2a, l-khedma. 3ti tanabbo2 motafa2il o wa7ed motacha2im, o natija b so … dass.',
          ['In 2050 wird Casablanca eine Metro mit vielen Linien haben.', 'Es wird mehr Parks geben, sodass die Luft besser wird.', 'Ich befürchte aber, dass es im Sommer so heiß sein wird, dass man mittags nicht rausgehen kann.'],
        ),
        graded(choice('"Ich ___ dir morgen das Buch bringen."', ['werde', 'wird', 'werdet'], 0)),
        graded(choice('"Du ___ sehen: Alles wird gut!"', ['wirst', 'wird', 'werdet'], 0)),
        graded(choice('"Es wird dunkel." — werden hna…', ['Vollverb (wella)', 'Futur I', 'Passiv'], 0)),
        graded(choice('"Die Straßen werden gereinigt." — werden hna…', ['Passiv', 'Futur I', 'Vollverb'], 0)),
        graded(gap('Kemmel', 'Es war ___ teuer, ___ wir nichts gekauft haben.', ['so', 'dass'])),
        graded(choice('"Es schneite stark, ___ die Schule geschlossen blieb."', ['sodass', 'deshalb', 'obwohl'], 0)),
        graded(choice('"Er ist nicht gekommen. Er ___ wohl keine Zeit haben."', ['wird', 'wurde', 'werde'], 0)),
        graded(choice('"der Klimawandel" =', ['t-taghyir l-mounakhi', 'j-jfaf', 'l-kahraba'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Ma t9le9ch, ghadi tdouz mzyan!', ['Keine Sorge, das wird schon klappen!', 'Keine Sorge, es wird gut gehen!', 'Keine Sorge, das wird gut gehen!', 'Keine Sorge, alles wird gut!'])),
        graded(dictation('Sme3 o kteb', 'In Zukunft werden die Städte grüner werden müssen.')),
        summary(
          [
            'Daba t9der ttnabba2 b l-mosta9bal, tw3ed, tqdder o t3ber 3la n-nata2ij.',
            'F l-unité 12: l-mcha3er o l-3ala9at — **Konjunktiv II f l-madi** (hätte gemacht, wäre gegangen) o **Modalpartikeln** (doch, mal, ja, eben, halt).',
          ],
          ['Tkhdem Futur I', 'Tfre9 bin wjouh werden', 'Tkhdem sodass / so … dass', 'Tkteb ra2yek f forum'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
