import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 10,
  title: 'Arbeit & Beruf',
  description: "L-khedma, z-zmala, l-aw9at d l-khedma — o thder 3la l-madi: \"Ich habe gearbeitet\", \"Ich war müde\".",
  icon: 'work',
  objectives: [
    'Thder 3la l-khedma: l-blasa, l-aw9at, z-zmala',
    'T9eddem rasek f l-khedma',
    'Thder 3la l-madi b l-Perfekt (m3a haben)',
    'Tkhdem "war" o "hatte"',
    'T9ra annonce dyal l-khedma',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Der erste Tag im Krankenhaus',
      description: 'Awwel nhar f l-khedma: l-kalimat dyal l-khedma, z-zmala o l-aw9at.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-7wayej dyal l-khedma', 'T9eddem rasek l z-zmala', 'Thder 3la l-aw9at d l-khedma'],
      steps: [
        intro(
          'Stage f s-sbitar',
          'Youssef bda **Praktikum** (stage) f s-sbitar St. Marien f Köln. Bgha ydir men b3d **Ausbildung** k **Pflegefachmann** (fermli). Lyouma awwel nhar dyalou.',
          ['Tsemmi l-khedma', 'T9eddem rasek', 'Thder 3la l-aw9at'],
        ),
        dialogue(
          'Willkommen im Team!',
          [
            ['Frau Schulz', 'Guten Morgen! Sie sind bestimmt Herr Benali, der neue Praktikant.', 'Sba7 l-khir! Akid nta si Benali, l-stagiaire jdid.'],
            ['Youssef', 'Ja, genau. Guten Morgen!', 'Ah, bdebt. Sba7 l-khir!'],
            ['Frau Schulz', 'Ich bin Monika Schulz, die Stationsleiterin. Wir duzen uns hier im Team. Ich bin Monika.', 'Ana Monika Schulz, l-mas2oula 3la l-9esm. Hna f l-équipe kanhedrou b "du". Ana Monika.'],
            ['Youssef', 'Gern. Ich bin Youssef.', 'Mzyan. Ana Youssef.'],
            ['Monika', 'Das ist Tim, unser Kollege. Er ist Krankenpfleger. Du arbeitest diese Woche mit ihm.', 'Hada Tim, zamilna. Howa fermli. Ghadi tkhdem m3ah had s-simana.'],
            ['Tim', 'Hallo Youssef! Herzlich willkommen!', 'Salam a Youssef! Mer7ba bik!'],
            ['Youssef', 'Danke! Wann fängt die Schicht an?', 'Chokran! Imta katbda n-nouba?'],
            ['Tim', 'Die Frühschicht fängt um sechs Uhr an und endet um 14 Uhr. Um zehn haben wir eine Pause.', 'N-nouba d s-sba7 katbda f 6 o katsali f 14. F 10 3endna pause.'],
          ],
        ),
        vocab('Die Arbeit — L-khedma', [
          ['die Arbeit', 'l-khedma', ''],
          ['arbeiten', 'khdem', ''],
          ['die Firma', 'ch-charika', 'die Firmen'],
          ['der Chef / die Chefin', 'l-patron / l-patrona', ''],
          ['der Kollege / die Kollegin', 'z-zmil / z-zmila', 'die Kollegen'],
          ['das Praktikum', 'l-stage', 'die Praktika'],
          ['die Ausbildung', 't-takwin l-mihani (formation)', ''],
          ['die Schicht', 'n-nouba (Frühschicht / Spätschicht / Nachtschicht)', 'die Schichten'],
          ['die Pause', 'l-pause / r-ra7a', ''],
          ['der Feierabend', 'sala l-khedma (fin de journée)', '', ['Endlich Feierabend!', 'Akhiran salina l-khedma!']],
          ['Vollzeit / Teilzeit', 'temps plein / temps partiel', ''],
          ['verdienen', 'rbe7 (l-flous) / khelsouh', '', ['Wie viel verdienst du?', 'Ch7al kat9bed?']],
          ['der Termin', 'r-rendez-vous', ''],
          ['die Besprechung', 'l-ijtima3 (réunion)', ''],
        ]),
        explain(
          'Thder 3la l-khedma',
          md`
            | Sou2al | Jawab |
            |---|---|
            | "Was sind Sie von Beruf?" | "Ich bin Krankenpfleger." |
            | "Wo arbeiten Sie?" | "Ich arbeite **im** Krankenhaus / **bei** Siemens / **in einer** Bäckerei." |
            | "Wann arbeitest du?" | "Ich arbeite **von** 6 **bis** 14 Uhr." / "Ich habe Frühschicht." |
            | "Arbeitest du Vollzeit?" | "Nein, Teilzeit. 20 Stunden pro Woche." |
            | "Was machst du bei der Arbeit?" | "Ich helfe den Patienten. Ich telefoniere viel." |

            - **bei** + smiyat ch-charika / n-nas: "bei Siemens", "bei Dr. Hoffmann".
            - "Ich mache eine Ausbildung **als** Koch." — "Ich arbeite **als** Fahrer." (**als** = k / b sifat)

            F bzaf d l-khdayem f Almaniya z-zmala kayhedrou b **du** bin ba3dhom — walakin **sennaw** 7tal ygoulou lik.
          `,
          [
            ['Ich arbeite als Verkäuferin bei Rewe.', 'Kankhdem bya3a f Rewe.'],
            ['Meine Schicht endet um 22 Uhr.', 'N-nouba dyali katsali f 22.'],
          ],
        ),
        match('Rbet', [
          ['der Kollege', 'z-zmil'],
          ['die Schicht', 'n-nouba'],
          ['der Feierabend', 'sala l-khedma'],
          ['die Besprechung', 'l-ijtima3'],
          ['verdienen', 'rbe7 l-flous'],
        ]),
        choice('Imta katbda n-nouba d s-sba7 3and Tim?', ['Um 6 Uhr', 'Um 10 Uhr', 'Um 14 Uhr'], 0),
        choice('"Wir duzen uns." kat3ni…', ['Kanhedrou b "Sie"', 'Kanhedrou b "du"', 'Ma kanhedrouch'], 1),
        gap('Kemmel', 'Ich arbeite ___ Krankenpfleger ___ Krankenhaus.', ['als', 'im']),
        order('Rtteb', 'Ich mache eine Ausbildung als Koch.'),
        speak(
          'T9eddem rasek f l-khedma',
          'Nhar lowel f khedma jdida. 9eddem rasek l z-zmil: smiytek, chno ghadi tkhdem, o sowwlou 3la l-aw9at.',
          ['Hallo, ich bin Youssef, der neue Praktikant.', 'Ich mache ein Praktikum hier.', 'Wann fängt die Schicht an?', 'Wann haben wir Pause?'],
        ),
        graded(choice('"der Feierabend" kay3ni…', ['l-3otla', 'sala l-khedma (l-yawm)', 'l-7afla'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich arbeite bei Siemens.', 'Ich arbeite zu Siemens.', 'Ich arbeite an Siemens.'], 0)),
        graded(gap('Kemmel', 'Ich arbeite ___ 8 ___ 16 Uhr.', ['von', 'bis'])),
        graded(translate("Terjem l l'Almaniya", 'Kankhdem f s-sbitar.', ['Ich arbeite im Krankenhaus.'])),
        summary(
          [
            'L-khedma: **die Firma, der Chef, der Kollege, die Schicht, die Pause, der Feierabend, das Praktikum, die Ausbildung**.',
            '**Ich arbeite als … bei … / im …, von … bis …**',
            'F l-khedma bzaf d z-zmala kayhedrou b **du**.',
          ],
          ['Thder 3la l-khedma dyalek', 'T9eddem rasek l z-zmala'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich habe gearbeitet — Perfekt',
      description: 'Kifach thder 3la l-madi: haben + Partizip II, o "war / hatte".',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tfhem kifach kaytbna l-Perfekt', 'Tdir l-Partizip II (gemacht, gegessen…)', 'Tkhdem war / hatte'],
      steps: [
        intro(
          'Wie war dein Tag?',
          md`
            Mli rja3 Youssef l d-dar, Lukas sowwlou: "Wie **war** dein erster Tag?" Youssef jawbou: "Ich **habe** viel **gelernt**!"
            Bach thder 3la l-madi f l-hedra, l'Almaniya katkhdem ghaliban **l-Perfekt**: jouj d l-kalimat — **haben** + **Partizip II**.
          `,
          ['Tfhem l-Perfekt', 'Tdir l-Partizip II', 'Tkhdem war o hatte'],
        ),
        explain(
          'L-Perfekt: haben + Partizip II',
          md`
            L-Perfekt mbni men jouj d l-ajza2 — b7al **Satzklammer** li chefti m3a l-Modalverben:

            | 1 | **2 (haben)** | … | **akhir (Partizip II)** |
            |---|---|---|---|
            | Ich | **habe** | viel | **gelernt**. |
            | Youssef | **hat** | im Krankenhaus | **gearbeitet**. |
            | Gestern | **haben** | wir Pizza | **gegessen**. |
            | **Hast** | du | den Film | **gesehen**? |

            - **haben** kaytsrref (habe, hast, hat…) o kayji f **l-blasa 2**.
            - **Partizip II** ma kayt-beddelch o kayji **f l-akhir**.

            F l'Almaniya l-hedra, l-Perfekt howa l-madi l-3adi. Kayn ta **Präteritum** (madi mktoub) — ghadi nchoufouh f A2/B1.
          `,
          [
            ['Ich habe gestern gearbeitet.', 'Khdemt lbare7.'],
            ['Was hast du am Wochenende gemacht?', 'Chno dirti f l-weekend?'],
          ],
        ),
        explain(
          'Kifach tdir l-Partizip II',
          md`
            **1. Af3al 3adiyin (regelmäßig): ge- + jder + -t**

            | Infinitiv | Partizip II |
            |---|---|
            | machen | **ge**mach**t** |
            | kaufen | **ge**kauf**t** |
            | lernen | **ge**lern**t** |
            | spielen | **ge**spiel**t** |
            | arbeiten | **ge**arbeit**et** (jder b t/d → -et) |

            **2. Af3al ma 3adiyinch (unregelmäßig): ge- + jder (ghaliban mbeddel) + -en** → khassek t7efdhom:

            | Infinitiv | Partizip II |
            |---|---|
            | essen | **ge**gess**en** |
            | trinken | **ge**trunk**en** |
            | sehen | **ge**seh**en** |
            | lesen | **ge**les**en** |
            | schlafen | **ge**schlaf**en** |
            | schreiben | **ge**schrieb**en** |
            | sprechen | **ge**sproch**en** |
            | nehmen | **ge**nomm**en** |
            | finden | **ge**fund**en** |

            **3. Trennbare Verben:** **ge** kaydkhol **bin** l-préfixe o l-fi3l: ein**ge**kauft, an**ge**rufen, auf**ge**räumt.

            **4. Bla ge-:** l-af3al li kaysaliw b **-ieren** (telefon**iert**, stud**iert**) o li kaybdaw b **be-, ver-, er-** (**be**zahlt, **ver**standen, **be**sucht). Ghadi nraj3ouhom f A2.
          `,
          undefined,
          'F l-9amous kayji l-Partizip II m3a kol fi3l: "essen, isst, aß, **hat gegessen**". 7fed dima l-chkel dyal "hat …".',
        ),
        choice('Partizip II dyal "machen"?', ['gemacht', 'gemachen', 'machte'], 0),
        choice('Partizip II dyal "trinken"?', ['getrinkt', 'getrunken', 'getranken'], 1),
        gap('Kemmel l-Partizip II', 'Ich habe ein Buch ___. (lesen)', 'gelesen'),
        gap('Kemmel l-Partizip II', 'Wir haben Fußball ___. (spielen)', 'gespielt'),
        gap('Kemmel l-Partizip II', 'Hast du deine Mutter ___? (anrufen)', 'angerufen'),
        gap('Kemmel l-Partizip II', 'Er hat acht Stunden ___. (arbeiten)', 'gearbeitet'),
        match('Rbet l-infinitiv m3a l-Partizip II', [
          ['essen', 'gegessen'],
          ['schlafen', 'geschlafen'],
          ['schreiben', 'geschrieben'],
          ['nehmen', 'genommen'],
          ['einkaufen', 'eingekauft'],
        ]),
        order('Rtteb', 'Ich habe gestern viel gelernt.', 'haben f 2, Partizip f l-akhir.'),
        order('Rtteb', 'Was hast du am Wochenende gemacht?'),
        order('Rtteb (bda b "Gestern")', 'Gestern haben wir Couscous gegessen.'),
        explain(
          'war o hatte',
          md`
            M3a **sein** o **haben**, l'Almaniya katkhdem f l-hedra ghaliban **Präteritum** (machi Perfekt) — 7it sahel o 9sir:

            | | sein → **war** | haben → **hatte** |
            |---|---|---|
            | ich | **war** | **hatte** |
            | du | warst | hattest |
            | er/sie | **war** | **hatte** |
            | wir | waren | hatten |
            | ihr | wart | hattet |
            | sie/Sie | waren | hatten |

            - "Wie **war** dein Tag?" — "Er **war** super!"
            - "Ich **war** gestern krank." — "Ich **hatte** keine Zeit."
            - "**Warst** du schon in Berlin?"
          `,
          [
            ['Gestern war ich im Kino.', 'Lbare7 kont f s-sinima.'],
            ['Wir hatten viel Arbeit.', 'Kant 3endna bzaf d l-khedma.'],
            ['Wo warst du?', 'Fin konti?'],
          ],
        ),
        gap('Kemmel b war / hatte', 'Gestern ___ ich krank. Ich ___ Fieber.', ['war', 'hatte']),
        gap('Kemmel', 'Wie ___ das Wetter am Wochenende? (sein)', 'war'),
        gap('Kemmel', '___ ihr Zeit? (haben)', 'Hattet'),
        translate("Terjem l l'Almaniya", 'Chno dirti lbare7?', ['Was hast du gestern gemacht?']),
        translate("Terjem l l'Almaniya", 'Konna f Bonn.', ['Wir waren in Bonn.']),
        graded(choice('Ina jomla s7i7a?', ['Ich habe gemacht die Hausaufgaben.', 'Ich habe die Hausaufgaben gemacht.', 'Ich gemacht habe die Hausaufgaben.'], 1)),
        graded(gap('Kemmel l-Partizip II', 'Wir haben Tee ___. (trinken)', 'getrunken')),
        graded(gap('Kemmel l-Partizip II', 'Salma hat im Supermarkt ___. (einkaufen)', 'eingekauft')),
        graded(choice('Partizip II dyal "sehen"?', ['gesehen', 'gesieht', 'gesahen'], 0)),
        graded(gap('Kemmel', 'Letzte Woche ___ ich in Hamburg. (sein)', 'war')),
        graded(choice('"Ich hatte keine Zeit." kat3ni…', ['Ma 3endich l-wa9t', 'Ma kanch 3endi l-wa9t', 'Ma ghadich ykoun 3endi l-wa9t'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Chrit l-khobz.', ['Ich habe Brot gekauft.', 'Ich habe das Brot gekauft.'])),
        summary(
          [
            '**Perfekt = haben (blasa 2) + Partizip II (l-akhir):** "Ich **habe** viel **gelernt**."',
            'Regelmäßig: **ge-…-t** (gemacht, gearbeitet). Unregelmäßig: **ge-…-en** (gegessen, getrunken) — 7fedhom.',
            'Trennbar: ein**ge**kauft. Bla ge-: telefoniert, bezahlt.',
            '**war / hatte** l sein o haben.',
          ],
          ['Thder 3la chno dirti', 'Tdir l-Partizip II dyal l-af3al l-mohimma', 'Tkhdem war o hatte'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Stellenanzeigen & ein Arbeitstag',
      description: 'T9ra annonces dyal l-khedma, tfhem chi wa7ed kay7ki 3la nharou, o tkteb 3la nhar dyal l-khedma.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra annonce dyal l-khedma', 'Tfhem 7ikaya 3la l-madi', 'T3ref chi 7wayej 3la l-khedma f Almaniya', 'Tkteb 3la nhar fat'],
      steps: [
        intro(
          'Salma kat9elleb 3la khedma',
          'Salma bghat khedma sghira (Minijob) m3a l-9raya. Kat9ra annonces. O Youssef kay7ki l Lukas 3la nhar twil f s-sbitar.',
          ['T9ra annonces', 'Tfhem 7ikaya', 'Tkteb'],
        ),
        reading(
          'Stellenanzeigen',
          md`
            1) Café Rosa sucht Aushilfe (m/w/d) — Minijob, 2–3 Tage pro Woche, auch am Wochenende. 13 € pro Stunde. Deutschkenntnisse A2. Bewerbung an: jobs@cafe-rosa.de

            2) Krankenhaus St. Marien: Ausbildung zur Pflegefachfrau / zum Pflegefachmann (m/w/d). Beginn: 1. Oktober. 3 Jahre. Gute Bezahlung schon in der Ausbildung! Deutsch B1/B2.

            3) Lagerhelfer (m/w/d) in Vollzeit, 40 Stunden pro Woche, Schichtarbeit. Führerschein Klasse B von Vorteil. Sofort!
          `,
          {
            text: '9ra t-tlata d l-annonces. "(m/w/d)" = männlich / weiblich / divers: l-khedma l ay wa7ed.',
            glossary: [
              ['die Aushilfe', 'li kay3awen (khedma sghira)'],
              ['pro Stunde', 'f s-sa3a'],
              ['die Deutschkenntnisse', 'l-ma3rifa d l\'Almaniya'],
              ['die Bewerbung', 't-talab d l-khedma (candidature)'],
              ['der Führerschein', 'l-permis'],
              ['von Vorteil', 'mzyan ila kan (ma chi dharouri)'],
            ],
          },
        ),
        choice('Ina khedma mzyana l Salma (m3a l-9raya, 2–3 iyyam)?', ['1', '2', '3'], 0),
        choice('Ch7al l-khlas f l-café?', ['13 € f s-sa3a', '13 € f n-nhar', '40 € f s-simana'], 0),
        choice('Ina niveau d l\'Almaniya khass l l-Ausbildung f s-sbitar?', ['A2', 'B1/B2', 'C1'], 1),
        listening(
          'Mein langer Tag',
          [
            ['Lukas', 'Na, wie war dein Tag?', 'Iwa, kif kan nharek?'],
            ['Youssef', 'Lang! Ich habe um sechs Uhr angefangen.', 'Twil! Bdit f 6.'],
            ['Lukas', 'Was hast du gemacht?', 'Chno dirti?'],
            ['Youssef', 'Zuerst haben wir die Patienten geweckt. Dann habe ich das Frühstück gebracht. Und ich habe viel mit den Patienten gesprochen.', 'Lowel fe99na l-mrad. Men b3d jebt l-ftour. O hdert bzaf m3a l-mrad.'],
            ['Lukas', 'Auf Deutsch? Super!', 'B l\'Almaniya? Mzyan!'],
            ['Youssef', 'Ja! Eine Patientin hat mir viel über Köln erzählt. Aber am Mittag hatte ich keine Pause, wir hatten zu viel Arbeit.', 'Ah! Wa7ed l-mrida 7kat liya bzaf 3la Köln. Walakin f l-ghda ma kantch 3endi pause, kant 3endna bzaf d l-khedma.'],
            ['Lukas', 'Und jetzt?', 'O daba?'],
            ['Youssef', 'Jetzt bin ich sehr müde. Aber es war ein schöner Tag.', 'Daba 3iyan bzaf. Walakin kan nhar zwin.'],
          ],
        ),
        choice('Imta bda Youssef l-khedma?', ['F 6', 'F 8', 'F 14'], 0),
        choice('Chno dar Youssef?', ['Jab l-ftour o hder m3a l-mrad', 'Kteb rapports', 'Kla f l-cantine'], 0),
        choice('Wach kant 3endou pause f l-ghda?', ['Ah', 'La'], 1, '"am Mittag hatte ich keine Pause"'),
        culture(
          'L-khedma f Almaniya',
          md`
            - **Ausbildung** (t-takwin l-mihani l-mozdawij): 2–3 snin, jouj d l-iyyam f **l-madrasa** (Berufsschule) o l-ba9i f **ch-charika** — o katkhelles men l-awwel! Bzaf d l-maghariba kaydirou Ausbildung f t-tamrid (Pflege), l-mihan t-ta9niya o l-hotellerie.
            - **Minijob:** 7tal **603 € f ch-chhar** (2026) bla dara2ib — mzyan l t-tolba.
            - **Mindestlohn** (l-ajr l-adna): kayn ajr adna 9anouni f s-sa3a (ktar men 13 €).
            - **Probezeit** (moddat t-tajriba): ghaliban 6 chhour f l-bdaya.
            - L-khedma ghaliban **38–40 sa3a f s-simana**, o kayn 3la l-a9al **20 youm d l-3otla** f l-3am (ghaliban 25–30).
            - **Anerkennung:** ila 3endek diplôme men l-Maghrib, t9der ttleb l-i3tiraf bih (anerkennung-in-deutschland.de).
          `,
        ),
        pron(
          'L-accent f l-Partizip II',
          '**ge-** ma 3endhach l-accent: ge**MACHT**, ge**LERNT**, ge**GES**sen. F trennbare Verben l-accent 3la l-préfixe: **EIN**gekauft, **AN**gerufen.',
          [
            ['gemacht – gelernt', 'geMACHT – geLERNT'],
            ['gegessen – getrunken', 'geGESsen – geTRUNken'],
            ['eingekauft – angerufen', 'EINgekauft – ANgerufen'],
            ['Ich habe viel gearbeitet.', 'GEarbeitet? la: geARbeitet'],
          ],
        ),
        write(
          'Nharek lbare7',
          'Kteb message l chi sa7bek 3la nharek lbare7 (6–8 jmel): imta nadit, chno dirti (3la l-a9al **4 Perfekt**), o kif kan n-nhar (**war**). Khdem: zuerst, dann, danach, am Abend.',
          ['Imta nadit (Ich bin … aufgestanden — wla: Ich habe um … angefangen)', '4 af3al f l-Perfekt', 'zuerst / dann / danach', 'Wie war der Tag? (war)', 'hatte (Zeit, Arbeit…)'],
          'Hallo Salma! Gestern hatte ich einen langen Tag. Zuerst habe ich gefrühstückt. Dann habe ich im Krankenhaus gearbeitet. Mittags habe ich mit Tim einen Kaffee getrunken. Danach habe ich eingekauft und gekocht. Am Abend habe ich meine Mutter angerufen. Der Tag war anstrengend, aber schön. Liebe Grüße, Youssef',
          40,
        ),
        graded(choice('"(m/w/d)" f l-annonce kay3ni…', ['L-khedma ghir l r-rjal', 'L-khedma l ay wa7ed', 'Minijob'], 1)),
        graded(choice('"die Bewerbung" hiya…', ['l-ajr', 't-talab d l-khedma', 'l-ijtima3'], 1)),
        graded(choice('Ausbildung f Almaniya…', ['ghir f l-madrasa, bla khlas', 'bin l-madrasa o ch-charika, b l-khlas', 'ghir f ch-charika'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich habe viel mit den Patienten gesprochen.')),
        summary(
          [
            'Annonces: **(m/w/d), Minijob, Vollzeit/Teilzeit, pro Stunde, Bewerbung, Ausbildung**.',
            'T7ki 3la l-madi: **zuerst … dann … danach …** + Perfekt.',
            '**Ausbildung** = formation mozdawija m3a l-khlas.',
          ],
          ['T9ra annonce dyal l-khedma', 'Tfhem 7ikaya f l-madi', 'Tkteb 3la nhar fat'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 10',
      description: 'Muraja3a: l-khedma, l-Perfekt b haben, war/hatte — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Perfekt', 'Thder 3la l-khedma o l-madi', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 10', 'L-khedma, l-Perfekt b haben, o war / hatte.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            **Perfekt:** haben (2) + Partizip II (akhir)

            | Nou3 | Mital |
            |---|---|
            | ge-…-t | gemacht, gekauft, gelernt, gearbeitet |
            | ge-…-en | gegessen, getrunken, gesehen, gelesen, geschrieben |
            | trennbar | eingekauft, angerufen, aufgeräumt |
            | bla ge- | telefoniert, bezahlt, verstanden |

            **war / hatte:** ich war, du warst, er war… — ich hatte, du hattest, er hatte…
          `,
        ),
        dialogue(
          'Montagmorgen im Kurs',
          [
            ['Frau Weber', 'Guten Morgen! Wie war Ihr Wochenende? Olena?', 'Sba7 l-khir! Kif kan l-weekend? Olena?'],
            ['Olena', 'Gut! Ich habe meine Freundin in Bonn besucht. Wir haben viel gelacht.', 'Mzyan! Zert sa7bti f Bonn. D7kna bzaf.'],
            ['Frau Weber', 'Schön! Und Sie, Mehmet?', 'Zwin! O nta a Mehmet?'],
            ['Mehmet', 'Ich hatte keine Zeit. Ich habe am Samstag und Sonntag gearbeitet.', 'Ma kantch 3endi l-wa9t. Khdemt s-sebt o l-7ad.'],
            ['Frau Weber', 'Oh, das ist anstrengend. Youssef?', 'Oh, hadchi mte33eb. Youssef?'],
            ['Youssef', 'Ich war auf einer Party. Salma hat Geburtstag gefeiert!', 'Kont f wa7ed l-7afla. Salma 7tafalt b 3id milad-ha!'],
          ],
        ),
        choice('Chno dart Olena?', ['Khdmat', 'Zarat sa7bt-ha f Bonn', 'Kanet f l-7afla'], 1),
        choice('3lach Mehmet ma kantch 3endou l-wa9t?', ['Kan mrid', 'Khdem s-sebt o l-7ad', 'Safer'], 1),
        gap('Kemmel', 'Ich ___ am Wochenende gearbeitet. Ich ___ keine Zeit.', ['habe', 'hatte']),
        match('Rbet', [
          ['lesen', 'gelesen'],
          ['kaufen', 'gekauft'],
          ['trinken', 'getrunken'],
          ['aufräumen', 'aufgeräumt'],
          ['bezahlen', 'bezahlt'],
        ]),
        speak(
          'Role-play: l-weekend',
          'L-oustada katsowlek: *"Wie war Ihr Wochenende? Was haben Sie gemacht?"* — Jaweb b 3–4 jmel f l-Perfekt o b "war".',
          ['Mein Wochenende war schön.', 'Am Samstag habe ich eingekauft und gekocht.', 'Am Sonntag habe ich Fußball gespielt.', 'Am Abend habe ich einen Film gesehen.'],
        ),
        graded(gap('Kemmel l-Partizip II', 'Ich habe einen Brief ___. (schreiben)', 'geschrieben')),
        graded(gap('Kemmel l-Partizip II', 'Was hast du ___? (kaufen)', 'gekauft')),
        graded(choice('Ina jomla s7i7a?', ['Gestern ich habe gearbeitet.', 'Gestern habe ich gearbeitet.', 'Gestern habe gearbeitet ich.'], 1)),
        graded(gap('Kemmel', 'Wo ___ du gestern? (sein)', 'warst')),
        graded(choice('Partizip II dyal "anrufen"?', ['geanrufen', 'angerufen', 'angeruft'], 1)),
        graded(choice('"die Schicht" hiya…', ['l-pause', 'n-nouba', 'l-ijtima3'], 1)),
        graded(gap('Kemmel', 'Wir ___ viel Arbeit. (haben, l-madi)', 'hatten')),
        graded(translate("Terjem l l'Almaniya", 'Klit l-kouskous.', ['Ich habe Couscous gegessen.', 'Ich habe den Couscous gegessen.'])),
        graded(choice('"Ich arbeite ___ Kellner."', ['als', 'wie', 'bei'], 0)),
        graded(dictation('Sme3 o kteb', 'Wie war dein Tag?')),
        summary(
          [
            'Daba t9der thder 3la l-khedma dyalek o 3la chno dirti f l-madi.',
            '**Perfekt = haben + Partizip II** — o **war / hatte**.',
            'F l-unité 11: l-7wayej, l-alwan, l-chri f l-magasin, **mir / dir** (gefallen) o **l-Perfekt m3a sein** (ich bin gefahren).',
          ],
          ['Thder 3la l-khedma', 'Thder 3la l-madi b l-Perfekt', 'Tkhdem war o hatte'],
          'Khlasa dyal l-unité 10',
        ),
      ],
    },
  ],
});
