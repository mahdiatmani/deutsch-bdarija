import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 1,
  title: 'Mein Leben',
  description: "T7ki 3la 7ayatek: t-tofoula, l-madrasa, l-mra7il l-mohimma — b l-Perfekt l-kamel o l-Präteritum dyal l-Modalverben.",
  icon: 'history_edu',
  objectives: [
    'T7ki 3la 7ayatek o 3la t-tofoula dyalek',
    'Tkhdem l-Perfekt m3a kol l-af3al (trennbar, untrennbar, -ieren)',
    'Tkhtar haben wla sein f l-Perfekt',
    'Tgoul chno konti t9der / khassek / bghiti: konnte, musste, wollte, durfte',
    'T9ra o tkteb Lebenslauf (CV) basit',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Kindheit und Jugend — T-tofoula o ch-chabab',
      description: 'L-kalimat dyal mra7il l-7ayat, o kifach t7ki 3la t-tofoula dyalek.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-mra7il dyal l-7ayat', 'T7ki 3la t-tofoula dyalek', 'Tsowwel chi wa7ed 3la l-madi dyalou'],
      steps: [
        intro(
          'Men Casablanca l Köln',
          md`
            Daba 3am men mli ja Youssef l Almaniya. L-niveau A1 sala, o bda **Ausbildung** k fermli f s-sbitar. F l-cours A2 jdid, l-oustad **Herr Brandt** tleb men kol wa7ed y7ki 3la 7ayatou.

            F A2 ghadi t7ki b **tafasil ktar**: imta, fin, 3lach — o b jmel twila.
          `,
          ['T7ki 3la t-tofoula', 'Tsemmi l-mra7il', 'Tsowwel 3la l-madi'],
        ),
        dialogue(
          'Wie war deine Kindheit?',
          [
            ['Herr Brandt', 'Youssef, erzählen Sie mal: Wo sind Sie aufgewachsen?', 'Youssef, 7ki lina: fin kbrti?'],
            ['Youssef', 'Ich bin in Casablanca aufgewachsen, im Viertel Maarif. Wir haben in einer kleinen Wohnung gewohnt.', 'Kbert f Casablanca, f l-7ouma d l-Maarif. Konna saknin f appartement sghir.'],
            ['Herr Brandt', 'Und wie war die Schulzeit?', 'O kif kant l-madrasa?'],
            ['Youssef', 'Ich bin gern zur Schule gegangen. Mathe hat mir gefallen, aber Französisch fand ich schwer.', 'Kont kan7ebb nmchi l l-madrasa. L-maths 3jbatni, walakin l-fransawiya kont kanl9aha s3iba.'],
            ['Herr Brandt', 'Was haben Sie nach der Schule gemacht?', 'Chno dirti men b3d l-madrasa?'],
            ['Youssef', 'Ich habe das Abitur gemacht und dann zwei Jahre in einem Callcenter gearbeitet. Ich wollte Geld sparen.', 'Khdit l-bac o men b3d khdemt 3amayn f callcenter. Kont bghit nwfer l-flous.'],
            ['Herr Brandt', 'Und wann sind Sie nach Deutschland gekommen?', 'O imta jiti l Almaniya?'],
            ['Youssef', 'Vor einem Jahr. Ich musste zuerst ein Visum beantragen. Das hat lange gedauert!', 'Hadi 3am. Kan khassni lowel ntleb l-visa. Tawlat bzaf!'],
          ],
        ),
        vocab('Lebensstationen — Mra7il l-7ayat', [
          ['geboren werden', 'tzad', '', ['Ich bin 2002 in Casablanca geboren.', 'Tzadt f 2002 f Casablanca.']],
          ['aufwachsen', 'kber / trbba', '', ['Ich bin in Fès aufgewachsen.', 'Kbert f Fès.']],
          ['die Kindheit', 't-tofoula', ''],
          ['die Jugend', 'ch-chabab / l-mora9a', ''],
          ['die Grundschule', 'l-ibtida2i', ''],
          ['das Abitur / das Abi', 'l-bac', ''],
          ['das Studium', 'l-9raya f l-jami3a', ''],
          ['studieren', '9ra f l-jami3a', ''],
          ['die Ausbildung', 't-takwin l-mihani', ''],
          ['heiraten', 'tzowwej', ''],
          ['umziehen', '7ewwel (beddel d-dar)', ''],
          ['auswandern', 'hajar', ''],
          ['die Erfahrung', 't-tajriba', 'die Erfahrungen'],
          ['sich erinnern an', 'tfekker', '', ['Ich erinnere mich gern an meine Kindheit.', 'Kantfekker t-tofoula dyali b l-farha.']],
        ]),
        explain(
          'T7ki 3la l-madi: s-sou2alat o l-jawab',
          md`
            | Sou2al | Jawab |
            |---|---|
            | "Wo bist du aufgewachsen?" | "Ich bin in Fès aufgewachsen." |
            | "Wann bist du geboren?" | "Ich bin **2002** geboren." / "**am 5. Mai 2002**" |
            | "Was hast du nach der Schule gemacht?" | "Ich habe eine Ausbildung gemacht." |
            | "Wie lange hast du dort gearbeitet?" | "Zwei Jahre." / "Von 2020 bis 2022." |
            | "Seit wann bist du in Deutschland?" | "**Seit** einem Jahr." |
            | "Wann bist du gekommen?" | "**Vor** einem Jahr." |

            - **vor** + wa9t (Dativ) = *hadi…* (machi "9bel" dyal l-blasa): "vor drei Jahren" = *hadi 3 snin*.
            - **seit** + wa9t (Dativ) = *men…* (o mazal): "seit zwei Monaten" = *men chhrayn (o mazal)*.
            - Bach tgoul l-3am: **"2002"** wla **"im Jahr 2002"** — machi "in 2002".
          `,
          [
            ['Ich bin vor zwei Jahren umgezogen.', '7ewwelt hadi 3amayn.'],
            ['Ich lerne seit einem Jahr Deutsch.', 'Kant3llem l\'Almaniya men 3am (o mazal).'],
            ['Meine Eltern haben 1995 geheiratet.', 'Waldiya tzowjou f 1995.'],
          ],
          'Ghalta kathira: "in 2010". F l\'Almaniya: **"2010"** bou7dha wla **"im Jahr 2010"**.',
        ),
        match('Rbet', [
          ['aufwachsen', 'kber'],
          ['umziehen', '7ewwel d-dar'],
          ['auswandern', 'hajar'],
          ['heiraten', 'tzowwej'],
          ['die Kindheit', 't-tofoula'],
        ]),
        choice('"vor einem Jahr" kat3ni…', ['men 3am (o mazal)', 'hadi 3am', '9bel l-3am'], 1),
        choice('Kifach katgoul "tzadt f 2001"?', ['Ich bin in 2001 geboren.', 'Ich bin 2001 geboren.', 'Ich habe 2001 geboren.'], 1),
        gap('Kemmel b vor / seit', 'Ich wohne ___ drei Jahren in Köln. Ich bin ___ drei Jahren gekommen.', ['seit', 'vor']),
        order('Rtteb', 'Wo bist du aufgewachsen?'),
        speak(
          'T-tofoula dyalek',
          'Jaweb: *Wo bist du aufgewachsen? Wie war deine Schulzeit? Was hast du nach der Schule gemacht?*',
          ['Ich bin in Marrakesch aufgewachsen.', 'Ich bin gern zur Schule gegangen, aber Mathe war schwer.', 'Nach dem Abitur habe ich in Rabat studiert.'],
        ),
        graded(choice('"seit zwei Jahren" kat3ni…', ['hadi 3amayn', 'men 3amayn (o mazal)', 'f 3amayn'], 1)),
        graded(choice('"aufwachsen" howa…', ['nod', 'kber', 'tzad'], 1)),
        graded(gap('Kemmel', 'Wann bist du nach Deutschland gekommen? — ___ sechs Monaten.', 'Vor')),
        graded(translate("Terjem l l'Almaniya", 'Kbert f Tanger.', ['Ich bin in Tanger aufgewachsen.'])),
        summary(
          [
            'Mra7il: **geboren werden, aufwachsen, die Schule, das Abitur, das Studium, die Ausbildung, heiraten, umziehen**.',
            '**vor** einem Jahr = hadi 3am · **seit** einem Jahr = men 3am (o mazal).',
            'L-3am: **"2002"** wla **"im Jahr 2002"**.',
          ],
          ['T7ki 3la t-tofoula', 'Tsowwel 3la l-madi'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Perfekt komplett & konnte, musste, wollte',
      description: 'L-Perfekt dyal kol l-af3al (trennbar, untrennbar, -ieren), haben/sein, o l-Präteritum dyal l-Modalverben.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tdir l-Partizip II dyal ay fi3l', 'Tkhtar haben wla sein', 'Tkhdem konnte, musste, wollte, durfte, sollte'],
      steps: [
        intro(
          'Muraja3a o zyada',
          'F A1 t3llemti l-Perfekt b haben o sein. Daba ghadi nkemmlou: l-af3al li ma kayakhdouch **ge-**, l-af3al li kayt9esmou, o kifach t7ki 3la chno konti **t9der** wla **khassek** dir f l-madi.',
          ['L-Partizip II l-kamel', 'haben wla sein', 'Modalverben f l-madi'],
        ),
        explain(
          'L-Partizip II: 4 dyal l-ichkal',
          md`
            | Nou3 | Chkel | Mital |
            |---|---|---|
            | 1. 3adi | **ge**-…-**t** | machen → **gemacht**, arbeiten → **gearbeitet** |
            | 2. ma 3adich | **ge**-…-**en** (l-jder ghaliban kayt-beddel) | gehen → **gegangen**, finden → **gefunden**, schreiben → **geschrieben** |
            | 3. trennbar | préfixe + **ge** + … | einkaufen → ein**ge**kauft, aufstehen → auf**ge**standen, umziehen → um**ge**zogen |
            | 4. bla ge- | **-ieren** wla **be-, ver-, er-, ent-, emp-, ge-, zer-** | studieren → **studiert**, bezahlen → **bezahlt**, verstehen → **verstanden**, erzählen → **erzählt**, gefallen → **gefallen** |

            **Kifach t3ref nou3 4?** Ila l-fi3l kaybda b **be-, ver-, er-, ent-, emp-, ge-, zer-** (préfixes **ma kayt9esmouch**, ma 3endhomch l-accent) → bla ge-.
            - beZAHlen → bezahlt · verSTEhen → verstanden · erKLÄren → erklärt · beSUchen → besucht
          `,
          [
            ['Ich habe in Rabat Informatik studiert.', '9rit l-informatique f Rabat.'],
            ['Hast du die Aufgabe verstanden?', 'Wach fhemti t-tamrin?'],
            ['Wir sind 2023 umgezogen.', '7ewwelna f 2023.'],
            ['Er hat mir seine Geschichte erzählt.', '7ka liya l-9issa dyalou.'],
          ],
        ),
        choice('Partizip II dyal "besuchen"?', ['gebesucht', 'besucht', 'besuchen'], 1, 'be- → bla ge-.'),
        choice('Partizip II dyal "telefonieren"?', ['getelefoniert', 'telefoniert', 'telefonieren'], 1, '-ieren → bla ge-.'),
        choice('Partizip II dyal "anrufen"?', ['geanrufen', 'angerufen', 'anrufen'], 1),
        gap('Kemmel l-Partizip II', 'Ich habe die Rechnung schon ___. (bezahlen)', 'bezahlt'),
        gap('Kemmel l-Partizip II', 'Was ist ___? (passieren)', 'passiert'),
        gap('Kemmel l-Partizip II', 'Sie hat ihre Tasche ___. (vergessen)', 'vergessen'),
        gap('Kemmel l-Partizip II', 'Wir haben das Zimmer ___. (aufräumen)', 'aufgeräumt|aufgeraeumt'),
        explain(
          'haben wla sein? (muraja3a)',
          md`
            **sein** m3a:
            1. L-7araka men blasa l blasa **bla maf3oul bih**: gehen, fahren, fliegen, kommen, laufen, reisen, umziehen
            2. T-tbdil dyal l-7ala: aufstehen, einschlafen, aufwachen, sterben, werden, **aufwachsen**, wachsen
            3. **sein, bleiben, passieren**

            **haben** m3a kolchi l-ba9i — o ta **m3a l-af3al dyal l-7araka ila kan maf3oul bih** (Akkusativ):
            - "Ich **bin** nach Bonn gefahren." (7araka bla maf3oul)
            - "Ich **habe** das Auto in die Werkstatt gefahren." (maf3oul bih: das Auto)

            Tri9a: ila kan l-fi3l fih **Akkusativ** → **haben**.
          `,
          [
            ['Ich bin um 6 Uhr aufgewacht.', 'Fe9t f 6.'],
            ['Mein Opa ist 2019 gestorben.', 'Jeddi mat f 2019.'],
            ['Ich bin in Fès aufgewachsen.', 'Kbert f Fès.'],
          ],
        ),
        choice('"Wir ___ letztes Jahr umgezogen."', ['haben', 'sind'], 1),
        choice('"Ich ___ meine Oma besucht."', ['habe', 'bin'], 0, 'besuchen + Akkusativ (meine Oma) → haben.'),
        choice('"Er ___ den Bus verpasst."', ['hat', 'ist'], 0),
        choice('"Das Kind ___ schnell eingeschlafen."', ['hat', 'ist'], 1),
        explain(
          'Modalverben f l-madi: konnte, musste, wollte…',
          md`
            M3a l-Modalverben, l'Almaniya ghaliban katkhdem **l-Präteritum** (machi l-Perfekt) — 7tal f l-hedra:

            | | können | müssen | wollen | dürfen | sollen |
            |---|---|---|---|---|---|
            | ich | **konnte** | **musste** | **wollte** | **durfte** | **sollte** |
            | du | konntest | musstest | wolltest | durftest | solltest |
            | er/sie | **konnte** | **musste** | **wollte** | **durfte** | **sollte** |
            | wir | konnten | mussten | wollten | durften | sollten |
            | ihr | konntet | musstet | wolltet | durftet | solltet |
            | sie/Sie | konnten | mussten | wollten | durften | sollten |

            - **Bla umlaut** (können → **ko**nnte, müssen → **mu**sste, dürfen → **du**rfte).
            - **ich = er** (bla -t).
            - Satzklammer b7al dima: "Ich **musste** lange **warten**."
          `,
          [
            ['Als Kind konnte ich nicht schwimmen.', 'Mli kont sghir ma kontch kan3ref n3oum.'],
            ['Ich wollte Arzt werden.', 'Kont bghit nwelli tbib.'],
            ['Wir durften abends nicht lange draußen bleiben.', 'Ma kanch mesmou7 lina nb9aw bzaf barra f l-lil.'],
            ['Ich musste ein Visum beantragen.', 'Kan khassni ntleb l-visa.'],
          ],
        ),
        gap('Kemmel', 'Gestern ___ ich nicht kommen, ich war krank. (können)', 'konnte'),
        gap('Kemmel', 'Als Kind ___ ich Pilot werden. (wollen)', 'wollte'),
        gap('Kemmel', 'Wir ___ zwei Stunden warten. (müssen)', 'mussten'),
        gap('Kemmel', '___ du als Kind lange fernsehen? (dürfen)', 'Durftest'),
        order('Rtteb', 'Ich konnte gestern nicht kommen.'),
        translate("Terjem l l'Almaniya", 'Kan khassni nkhdem s-sebt.', ['Ich musste am Samstag arbeiten.', 'Am Samstag musste ich arbeiten.']),
        graded(choice('Partizip II dyal "erklären"?', ['geerklärt', 'erklärt', 'erklären'], 1)),
        graded(choice('Partizip II dyal "umziehen"?', ['umgezogen', 'geumzogen', 'umgezieht'], 0)),
        graded(choice('"Ich ___ in Agadir aufgewachsen."', ['habe', 'bin'], 1)),
        graded(gap('Kemmel l-Partizip II', 'Hast du das Wort ___? (verstehen)', 'verstanden')),
        graded(gap('Kemmel', 'Früher ___ ich kein Deutsch sprechen. (können)', 'konnte')),
        graded(choice('"Er ___ den Termin vergessen."', ['hat', 'ist'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kont bghit n9ra f Almaniya.', ['Ich wollte in Deutschland studieren.'])),
        summary(
          [
            'Partizip II: **ge-…-t**, **ge-…-en**, **trennbar: an-ge-rufen**, **bla ge-: -ieren / be-, ver-, er-, ent-, emp-, ge-, zer-**.',
            '**sein:** 7araka bla Akkusativ, tbdil l-7ala, sein/bleiben/passieren. **haben:** l-ba9i.',
            'Modalverben f l-madi: **konnte, musste, wollte, durfte, sollte** (bla umlaut).',
          ],
          ['Tdir l-Perfekt dyal ay fi3l', 'Tkhtar haben / sein', 'Tgoul chno konti t9der / khassek / bghiti'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Lebenslauf & Lebensgeschichten',
      description: 'T9ra 7ikaya dyal 7ayat, tfhem l-Lebenslauf l-almani, o tkteb Lebenslauf dyalek.',
      minutes: 30,
      kind: 'skills',
      goals: ['T9ra 7ikaya 3la l-7ayat o tfhem t-tartib dyal l-a7dath', 'Tfhem Lebenslauf almani', 'Tkteb Lebenslauf tabulari', 'Tnte9 l-Knacklaut'],
      steps: [
        intro(
          'Lebensgeschichten',
          'Herr Brandt jab l l-cours 7ikaya dyal **Aylin**, wa7da men l-jil t-tani d l-mohajirin f Almaniya. Men b3d ghadi nt3allmou kifach nktbou **Lebenslauf** (CV) b t-tari9a l-almaniya — mohim bzaf l l-khedma o l-Ausbildung.',
          ['T9ra 7ikaya', 'Tfhem l-Lebenslauf', 'Tkteb dyalek'],
        ),
        reading(
          'Aylins Geschichte',
          md`
            Ich heiße Aylin, ich bin 34 Jahre alt. Meine Eltern sind 1985 aus der Türkei nach Deutschland gekommen. Mein Vater hat bei Ford in Köln gearbeitet, meine Mutter hat zu Hause auf uns aufgepasst.

            Ich bin in Köln-Mülheim geboren und aufgewachsen. Als Kind habe ich zu Hause Türkisch und draußen Deutsch gesprochen. In der Grundschule war das manchmal schwer, denn ich konnte am Anfang nicht so gut lesen. Aber meine Lehrerin hat mir sehr geholfen.

            Nach dem Abitur wollte ich Medizin studieren, aber meine Noten waren nicht gut genug. Deshalb habe ich zuerst eine Ausbildung als Krankenpflegerin gemacht. Das war eine gute Entscheidung! Später habe ich doch noch studiert, und heute arbeite ich als Ärztin in einem Krankenhaus in Bonn.

            Ich bin verheiratet und habe zwei Kinder. Mit meinen Kindern spreche ich Deutsch und Türkisch – genau wie meine Eltern mit mir.
          `,
          {
            text: '9ra l-7ikaya. Rd l-bal l t-tartib dyal l-a7dath.',
            glossary: [
              ['aufpassen auf', 'thalla f'],
              ['am Anfang', 'f l-bidaya'],
              ['die Noten', 'n-no9at'],
              ['deshalb', 'dakchi 3lach'],
              ['die Entscheidung', 'l-9arar'],
              ['doch noch', '7tal hiya (f l-akhir)'],
            ],
          },
        ),
        choice('Imta jaw waldin Aylin l Almaniya?', ['1985', '1990', '2000'], 0),
        choice('3lach ma 9ratch Aylin l-tibb direct men b3d l-bac?', ['Ma bghatch', 'N-no9at ma kanouch kafyin', 'Ma kanch 3endha l-flous'], 1),
        choice('Chno l-khedma dyal Aylin daba?', ['Krankenpflegerin', 'Ärztin', 'Lehrerin'], 1),
        choice('Rtteb: chno dart Aylin lowel?', ['Studium → Ausbildung → Ärztin', 'Ausbildung → Studium → Ärztin', 'Ärztin → Studium → Ausbildung'], 1),
        culture(
          'Der Lebenslauf f Almaniya',
          md`
            - L-Lebenslauf f Almaniya ghaliban **tabulari** (jadwal): **l-wa9t 3la l-yser**, **chno dirti 3la l-imin**.
            - **T-tartib:** l-jdid l-fou9 (*antichronologisch*): l-khedma dyal daba lowla.
            - **Fih:** Persönliche Daten (smiya, adresse, telefon, email, tarikh l-izdiyad) — Berufserfahrung — Ausbildung / Schule — Sprachkenntnisse — EDV-Kenntnisse (l-informatique) — Hobbys (ila bghiti).
            - **Tswira** (Foto) machi dharouriya b l-9anoun, walakin bzaf d n-nas mazal kay7ettouha.
            - **L-loghat** b l-niveau: "Arabisch (Muttersprache), Französisch (C1), Deutsch (B1)".
            - F l-akhir: **l-blasa, t-tarikh o t-tawqi3**.
          `,
        ),
        reading(
          'Lebenslauf',
          md`
            LEBENSLAUF — Youssef Benali

            Persönliche Daten
            Adresse: Bergstraße 12, 50667 Köln · Telefon: 0162 453 18 70
            Geburtsdatum / -ort: 14.03.2002 in Casablanca

            Berufserfahrung
            seit 09/2025 — Ausbildung zum Pflegefachmann, St.-Marien-Krankenhaus Köln
            03/2025 – 08/2025 — Praktikum in der Pflege, St.-Marien-Krankenhaus Köln
            07/2021 – 06/2023 — Mitarbeiter im Kundenservice, Callcenter Atlas, Casablanca

            Schulbildung
            2017 – 2020 — Lycée Ibn Khaldoun, Casablanca — Abschluss: Baccalauréat (Abitur)

            Sprachkenntnisse
            Arabisch und Darija (Muttersprache), Französisch (sehr gut), Deutsch (B1), Englisch (gut)

            Hobbys: Fußball, Kochen
          `,
          { text: 'Hada l-Lebenslauf dyal Youssef. Chouf kifach mrtteb.' },
        ),
        choice('Chno kaydir Youssef daba?', ['Praktikum', 'Ausbildung zum Pflegefachmann', 'Callcenter'], 1),
        choice('Ch7al d l-wa9t khdem f l-callcenter?', ['3am', '3amayn ta9riban', '3 snin'], 1),
        pron(
          'Der Knacklaut — l-wa9fa 9bel l-7arf l-mte7rrek',
          md`
            F l'Almaniya, ila kanet l-kelma kat-bda b 7arf mte7rrek (a, e, i, o, u), katdir **wa9fa sghira** 9belha (b7al *l-hamza*: 'a). Ma katrbtch l-kalimat b7al l-fransawiya!
            - Fransawi: *les‿amis* → Almani: "die | Abende" (machi "diabende").
          `,
          [
            ['ein Abend', 'ein | Abend (hamza 9bel A)'],
            ['Ich arbeite am Abend.', 'Ich | arbeite | am | Abend'],
            ['beantragen', 'be | antragen'],
            ['Er erinnert sich.', 'Er | erinnert sich'],
          ],
        ),
        write(
          'Lebenslauf dyalek',
          md`
            Kteb Lebenslauf **tabulari** dyalek b l'Almaniya (b7al dyal Youssef):
            **Persönliche Daten** — **Berufserfahrung** (wla stage / khedma) — **Schulbildung / Studium** — **Sprachkenntnisse** — **Hobbys**.
            Khdem tarikh **MM/JJJJ** o rtteb men l-jdid l l-9dim.
          `,
          ['Persönliche Daten', 'Berufserfahrung (antichronologisch)', 'Schulbildung / Studium', 'Sprachkenntnisse m3a niveau', 'Hobbys'],
          'LEBENSLAUF — Salma El Idrissi\n\nPersönliche Daten\nAdresse: Lindenstraße 8, 50823 Köln\nGeburtsdatum: 05.09.2004 in Fès\n\nBerufserfahrung\nseit 10/2025 — Aushilfe im Café Rosa, Köln (Minijob)\n\nStudium und Schulbildung\nseit 10/2025 — Studium der Informatik, Universität zu Köln\n2019 – 2022 — Lycée Moulay Idriss, Fès — Abschluss: Baccalauréat\n\nSprachkenntnisse\nArabisch, Darija (Muttersprache), Französisch (C1), Deutsch (B1), Englisch (B2)\n\nHobbys: Lesen, Fotografieren',
          40,
        ),
        graded(choice('L-Lebenslauf l-almani ghaliban…', ['Kayt-ktb b nass twil', 'Tabulari o l-jdid l-fou9', 'Ma fihch tarikh'], 1)),
        graded(choice('"die Muttersprache" hiya…', ['logha d l-oumm (l-logha l-oula)', 'logha ajnabiya', 'l-fransawiya'], 0)),
        graded(choice('"Deshalb habe ich eine Ausbildung gemacht." — "deshalb" =', ['walakin', 'dakchi 3lach', '7it'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich bin in Casablanca aufgewachsen.')),
        summary(
          [
            'T7ki 3la 7ayatek b t-tartib: **zuerst, dann, später, heute**.',
            'Lebenslauf: **tabulari, l-jdid l-fou9, Persönliche Daten, Berufserfahrung, Schulbildung, Sprachkenntnisse**.',
            'Knacklaut: wa9fa 9bel l-7arf l-mte7rrek.',
          ],
          ['T9ra 7ikaya 3la l-7ayat', 'Tfhem o tkteb Lebenslauf'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 1',
      description: 'Muraja3a: mra7il l-7ayat, l-Perfekt l-kamel, konnte/musste/wollte — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Perfekt l-kamel', 'T7ki 3la l-madi b tafasil', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-Perfekt l-kamel, haben/sein, l-Modalverben f l-madi, o l-Lebenslauf.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | | Mital |
            |---|---|
            | ge-…-t | gemacht, gekauft, gearbeitet |
            | ge-…-en | gegangen, geschrieben, gefunden |
            | trennbar | eingekauft, aufgestanden, umgezogen |
            | bla ge- | studiert, telefoniert, bezahlt, verstanden, erzählt |

            **sein:** gegangen, gefahren, aufgewachsen, gestorben, geblieben, gewesen, passiert
            **konnte, musste, wollte, durfte, sollte** — bla umlaut, ich = er.
          `,
        ),
        listening(
          'Ein Interview mit Mehmet',
          [
            ['Herr Brandt', 'Mehmet, seit wann sind Sie in Deutschland?', 'Mehmet, men imta nta f Almaniya?'],
            ['Mehmet', 'Seit vier Jahren. Ich bin 2022 mit meiner Frau gekommen.', 'Men 4 snin. Jit f 2022 m3a mrati.'],
            ['Herr Brandt', 'Was haben Sie in der Türkei gemacht?', 'Chno konti kaddir f Turkiya?'],
            ['Mehmet', 'Ich habe in Izmir Elektrotechnik studiert und dann als Ingenieur gearbeitet.', '9rit l-électrotechnique f Izmir o men b3d khdemt mohandis.'],
            ['Herr Brandt', 'Und hier in Deutschland?', 'O hna f Almaniya?'],
            ['Mehmet', 'Am Anfang konnte ich nicht als Ingenieur arbeiten. Ich musste zuerst Deutsch lernen und meinen Abschluss anerkennen lassen. Ich habe in einem Lager gearbeitet.', 'F l-bidaya ma kontch n9der nkhdem k mohandis. Kan khassni lowel nt3llem l\'Almaniya o ndir l-i3tiraf b d-diplôme. Khdemt f dépôt.'],
            ['Herr Brandt', 'Und jetzt?', 'O daba?'],
            ['Mehmet', 'Seit letztem Monat arbeite ich wieder als Ingenieur, bei einer Firma in Leverkusen!', 'Men ch-chhar li fat rje3t nkhdem mohandis, f charika f Leverkusen!'],
          ],
        ),
        choice('Chno 9ra Mehmet?', ['Informatik', 'Elektrotechnik', 'Medizin'], 1),
        choice('3lach ma khdemch k mohandis f l-bidaya?', ['Ma bghach', 'Kan khasso yt3llem l\'Almaniya o y3tarfou b d-diplôme', 'Ma kanch kayn l-khedma'], 1),
        gap('Kemmel', 'Mehmet ___ zuerst Deutsch lernen. Er ___ in einem Lager gearbeitet.', ['musste', 'hat']),
        match('Rbet', [
          ['vergessen', 'vergessen'],
          ['bekommen', 'bekommen'],
          ['fotografieren', 'fotografiert'],
          ['aufwachen', 'aufgewacht'],
          ['bringen', 'gebracht'],
        ]),
        speak(
          'Role-play: 7ki 3la 7ayatek',
          'Zmilek f l-cours kaysowlek: *Wo bist du aufgewachsen? Was hast du nach der Schule gemacht? Was wolltest du als Kind werden? Seit wann lernst du Deutsch?*',
          ['Ich bin in Oujda aufgewachsen.', 'Nach der Schule habe ich eine Ausbildung als Elektriker gemacht.', 'Als Kind wollte ich Fußballspieler werden.', 'Ich lerne seit zwei Jahren Deutsch.'],
        ),
        graded(choice('"Ich ___ gestern früh aufgestanden."', ['habe', 'bin'], 1)),
        graded(gap('Kemmel l-Partizip II', 'Ich habe meine Großeltern ___. (besuchen)', 'besucht')),
        graded(gap('Kemmel l-Partizip II', 'Wir haben ein Foto ___. (machen)', 'gemacht')),
        graded(gap('Kemmel l-Partizip II', 'Er hat das Formular ___. (ausfüllen)', 'ausgefüllt|ausgefuellt')),
        graded(choice('"___ du gestern zur Party kommen?" (dürfen, l-madi)', ['Durftest', 'Darfst', 'Dürftest'], 0)),
        graded(gap('Kemmel', 'Als Kind ___ ich nicht gern Gemüse essen. (wollen)', 'wollte')),
        graded(choice('"Ich lerne ___ einem Jahr Deutsch."', ['vor', 'seit', 'in'], 1)),
        graded(choice('Partizip II dyal "studieren"?', ['gestudiert', 'studiert', 'studieren'], 1)),
        graded(translate("Terjem l l'Almaniya", '7ewwelna hadi 3amayn.', ['Wir sind vor zwei Jahren umgezogen.'])),
        graded(dictation('Sme3 o kteb', 'Ich musste lange auf mein Visum warten.')),
        summary(
          [
            'Daba t9der t7ki 3la 7ayatek b tafasil o tkteb Lebenslauf.',
            'F l-unité 2: l-3a2ila o l-3ala9at, l-hdiyat — o **weil** (l-fi3l f l-akhir!) o **Dativ + Akkusativ** f nefs j-jomla.',
          ],
          ['T7ki 3la t-tofoula o 7ayatek', 'Tkhdem l-Perfekt dyal ay fi3l', 'Tkhdem konnte / musste / wollte', 'Tkteb Lebenslauf'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
