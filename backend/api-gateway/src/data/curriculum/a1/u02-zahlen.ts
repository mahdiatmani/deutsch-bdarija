import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 2,
  title: 'Zahlen & Kontakte',
  description: "L-ar9am, r-ra9m dyal t-tilifoun, l-3omr, l-adresse, o kifach t3emmer formulaire f l-Bürgeramt.",
  icon: 'pin',
  objectives: [
    'T3ed men 0 7tal 1000 o tfhem l-ar9am mli kayt-goulou',
    'T3ti o tsowwel 3la r-ra9m dyal t-tilifoun, l-3omr o l-adresse',
    'Tsrref l-af3al m3a kolchi: ich, du, er, wir, ihr, sie, Sie',
    'Tkhdem "sein" o "haben" o tdir sou2alat dyal Ja/Nein',
    'T3emmer formulaire b l-ma3loumat dyalek',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Eins, zwei, drei … — L-ar9am',
      description: 'L-ar9am men 0 7tal 100, l-3omr o r-ra9m dyal t-tilifoun.',
      minutes: 25,
      kind: 'input',
      goals: ['T3ed men 0 7tal 100', 'Tgoul ch7al f 3omrek', 'T3ti r-ra9m dyal t-tilifoun dyalek'],
      steps: [
        intro(
          'Nbedlou les numéros?',
          md`
            Lukas, l-jar jdid dyal Youssef, bgha y3ti lih r-ra9m dyalou bach yb9aw f l-ittisal. Bach tfhem r-ra9m, khassek t3ref **l-ar9am b l'Almaniya**.

            Khbar zwin: l-ar9am mn 21 l 99 kaytgalou **b7al Darija**: *wa7ed o 3echrin* = "einundzwanzig".
          `,
          ['T3ed men 0 7tal 100', 'Tgoul l-3omr dyalek', 'Tbeddel r-ra9m dyal t-tilifoun'],
        ),
        dialogue(
          'Deine Nummer, bitte!',
          [
            ['Lukas', 'Youssef, hast du WhatsApp?', 'Youssef, wach 3endek WhatsApp?'],
            ['Youssef', 'Ja, klar. Wie ist deine Nummer?', 'Ah, akid. Chno r-ra9m dyalek?'],
            ['Lukas', 'Null – eins – fünf – sieben, drei – zwei – acht, vierzehn – neunzig.', '0157, 328, 14 90.'],
            ['Youssef', 'Moment … Null eins fünf sieben, drei zwei acht, vierzehn neunzig?', 'Tsenna… 0157, 328, 14 90?'],
            ['Lukas', 'Genau! Und wie alt bist du eigentlich?', 'Bdebt! O ch7al f 3omrek b s7?'],
            ['Youssef', 'Ich bin vierundzwanzig. Und du?', 'Ana 3endi 24 3am. O nta?'],
            ['Lukas', 'Ich bin dreiundzwanzig.', 'Ana 3endi 23.'],
          ],
          'Sme3 kifach Lukas kaygoul r-ra9m: chi ar9am wa7ed b wa7ed, o chi ar9am jouj b jouj (14 – 90).',
        ),
        vocab('Die Zahlen 0 – 12', [
          ['null', '0'],
          ['eins', '1'],
          ['zwei', '2'],
          ['drei', '3'],
          ['vier', '4'],
          ['fünf', '5'],
          ['sechs', '6'],
          ['sieben', '7'],
          ['acht', '8'],
          ['neun', '9'],
          ['zehn', '10'],
          ['elf', '11'],
          ['zwölf', '12'],
        ], 'Had l-ar9am khassek t7efdhom mzyan: kolchi li jay mbni 3lihom.'),
        explain(
          'Men 13 7tal 100: l-9awa3id',
          md`
            **13 – 19:** r-ra9m + **zehn** (10):
            "dreizehn" (13), "vierzehn" (14), "fünfzehn" (15), "achtzehn" (18), "neunzehn" (19).
            Rd l-bal: **sechzehn** (16, bla s) o **siebzehn** (17, bla en).

            **L-3echrat:** r-ra9m + **zig**:
            "zwanzig" (20), "vierzig" (40), "fünfzig" (50), "sechzig" (60), "siebzig" (70), "achtzig" (80), "neunzig" (90).
            Rd l-bal: **dreißig** (30) b **ß**, machi "dreizig".

            **21 – 99:** b7al Darija! L-wa7ed **9bel** l-3echra, m3a **und**:

            | Ra9m | Darija | Almaniya |
            |---|---|---|
            | 21 | wa7ed **o** 3echrin | "ein**und**zwanzig" |
            | 35 | khamsa **o** tlatin | "fünf**und**dreißig" |
            | 48 | tmenya **o** rb3in | "acht**und**vierzig" |
            | 99 | tes3oud **o** tes3in | "neun**und**neunzig" |

            **100** = "hundert" (wla "einhundert").

            L-ra9m kaytketbou **kelma wa7da** twila: "siebenundsechzig" = 67.
          `,
          [
            ['einundzwanzig', '21 — "eins" katwelli "ein" 9bel "und"'],
            ['dreiunddreißig', '33'],
            ['siebenundfünfzig', '57'],
            ['hundert', '100'],
          ],
          'Fransawi kaygoul *vingt-et-un* (l-3echra 9bel). L-almani kaygoul b7al Darija: **l-wa7ed 9bel**. Khdem b Darija f rassek!',
        ),
        pron(
          'Ar9am kaytkhel3ou',
          'Had l-ar9am kaytchabhou f s-sem3. Sme3 mzyan l-fer9.',
          [
            ['dreizehn – dreißig', '13 – 30: "-zehn" (tsén) wla "-ßig" (ssich)'],
            ['vierzehn – vierzig', '14 – 40'],
            ['sechzehn – sechzig', '16 – 60: bla "s" f l-wsat'],
            ['siebzehn – siebzig', '17 – 70'],
            ['zwei – drei', 'F t-tilifoun kaygoulou "zwo" f blast "zwei" bach ma ytkhel3ch m3a "drei".'],
          ],
        ),
        match('Rbet r-ra9m m3a l-kelma', [
          ['16', 'sechzehn'],
          ['60', 'sechzig'],
          ['30', 'dreißig'],
          ['13', 'dreizehn'],
          ['70', 'siebzig'],
        ]),
        choice('Chno howa "vierundvierzig"?', ['14', '40', '44'], 2, '"vier**und**vierzig" = rb3a **o** rb3in = 44.'),
        choice('Kifach katgoul 27?', ['zwanzigsieben', 'siebenundzwanzig', 'siebzehnzwanzig'], 1, 'L-wa7ed 9bel: "sieben-und-zwanzig".'),
        dictation('Sme3 o kteb r-ra9m b l-ar9am (ex: 52)', 'achtundsechzig', 'achtundsechzig = 68.', ['68']),
        dictation('Sme3 o kteb r-ra9m b l-ar9am', 'fünfundneunzig', '95: khamsa o tes3in.', ['95']),
        explain(
          'L-3omr o r-ra9m dyal t-tilifoun',
          md`
            **L-3omr:**
            - "Wie alt bist du?" / "Wie alt sind Sie?" = *ch7al f 3omrek?*
            - "Ich bin 24 (Jahre alt)." = *3endi 24 3am.*

            F l'Almaniya **ma katgoulch "ich habe 24 Jahre"** (b7al l-fransawiya *j'ai 24 ans* wla Darija *3endi*). Katgoul **"ich bin"**: *ana 24 3am*.

            **T-tilifoun:**
            - "Wie ist deine / Ihre Telefonnummer?" = *chno r-ra9m dyalek?*
            - "Meine Nummer ist 0157 328 14 90."
            - "die Handynummer" = r-ra9m dyal l-portable.

            N-nas kaygoulou r-ra9m **wa7ed b wa7ed** ("null – eins – fünf – sieben") wla **jouj b jouj** ("vierzehn – neunzig").
          `,
          [
            ['Wie alt ist Salma? — Sie ist einundzwanzig.', 'Ch7al f 3omr Salma? — 3endha 21.'],
            ['Wie ist Ihre Handynummer?', 'Chno r-ra9m dyal l-portable dyalek? (rasmi)'],
          ],
          'Ghalta kbira 3end l-maghariba: "Ich habe 20 Jahre". S7i7: **"Ich bin 20 (Jahre alt)."**',
        ),
        choice('Kifach katgoul: 3endi 19 3am?', ['Ich habe neunzehn Jahre.', 'Ich bin neunzehn Jahre alt.', 'Ich neunzehn.'], 1, 'L-3omr b **sein**: "Ich bin … (Jahre alt)".'),
        gap('Kemmel', 'Wie ___ bist du? — Ich bin ___ (22).', ['alt', 'zweiundzwanzig']),
        order('Rtteb', 'Wie ist deine Telefonnummer?', undefined, { dar: 'Chno r-ra9m dyal t-tilifoun dyalek?' }),
        speak(
          'Goul l-3omr o r-ra9m dyalek',
          'Jaweb b sout 3ali: "Wie alt bist du?" o "Wie ist deine Telefonnummer?". T9der tkhtar ra9m mkhtare3 (machi l-7a9i9i).',
          ['Ich bin vierundzwanzig Jahre alt.', 'Meine Nummer ist null eins sechs zwei, vier fünf drei, achtzehn siebzig.'],
        ),
        graded(choice('Chno howa "sechsundachtzig"?', ['68', '86', '66'], 1)),
        graded(dictation('Sme3 o kteb r-ra9m b l-ar9am', 'dreiunddreißig', undefined, ['33'])),
        graded(choice('Ina kelma s7i7a l 30?', ['dreizig', 'dreißig', 'dreizehn'], 1)),
        graded(translate("Terjem l l'Almaniya", '3endi 25 3am.', ['Ich bin fünfundzwanzig.', 'Ich bin fünfundzwanzig Jahre alt.', 'Ich bin 25.', 'Ich bin 25 Jahre alt.'])),
        graded(gap('Kemmel', 'Wie ___ deine Nummer?', 'ist')),
        summary(
          [
            '**0 – 12** khassek t7efdhom. **13 – 19** = ra9m + zehn (sech**zehn**, sieb**zehn**).',
            '**20 – 90** = ra9m + zig (zwanzig, **dreißig**, vierzig…).',
            '**21 – 99** b7al Darija: ein**und**zwanzig = wa7ed o 3echrin.',
            'L-3omr: **Ich bin 24 (Jahre alt).** — machi "ich habe".',
          ],
          ['T3ed 0 – 100', 'Tgoul l-3omr', 'Tbeddel r-ra9m dyal t-tilifoun'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wir, ihr, sie — l-fi3l m3a kolchi, "sein" o "haben"',
      description: 'D-dama2ir dyal l-jam3, t-tasrif l-kamel, l-af3al "sein" o "haben", o s-sou2alat b Ja/Nein.',
      minutes: 25,
      kind: 'grammar',
      goals: ['Tkhdem wir, ihr, sie', 'Tsrref l-fi3l m3a kolchi', 'T7fed "sein" o "haben"', 'Tdir sou2al dyal Ja/Nein'],
      steps: [
        intro(
          'Men "ana" l "7na"',
          'F l-unité 1 t3llemti ich, du, er, sie, Sie. Daba ghadi nkemmlou l-jadwal b **l-jam3**: 7na, ntouma, houma. O ghadi nt3allmou jouj d l-af3al mohimmin bzaf: **sein** o **haben**.',
          ['Tsrref ay fi3l 3adi', 'Tkhdem sein o haben', 'Tsowwel sou2al jawabou ja wla nein'],
        ),
        explain(
          'Kol d-dama2ir',
          md`
            | | Almaniya | Darija |
            |---|---|---|
            | Mofrad | ich / du / er, sie, es | ana / nta, nti / howa, hiya |
            | Jam3 | **wir** | 7na |
            | | **ihr** | ntouma |
            | | **sie** | houma |
            | Rasmi | **Sie** | nta / nti / ntouma (rasmi) |

            **"es"** kaykhdem m3a l-7wayej o l-kalimat li fihom **das** (ex: "das Kind" → es). Ghadi nchoufouh f l-unité 3.

            Rd l-bal: **sie** f l'Almaniya 3endha 3 d l-ma3ani: *hiya*, *houma*, o **Sie** (b S kbira) = rasmi. L-fi3l kay3awnek t3ref chkoun: "sie komm**t**" = hiya, "sie komm**en**" = houma.
          `,
        ),
        explain(
          'T-tasrif l-kamel (Präsens)',
          md`
            | | wohnen | arbeiten (khdem) | heißen |
            |---|---|---|---|
            | ich | wohn**e** | arbeit**e** | heiß**e** |
            | du | wohn**st** | arbeit**est** | heiß**t** |
            | er/sie/es | wohn**t** | arbeit**et** | heiß**t** |
            | wir | wohn**en** | arbeit**en** | heiß**en** |
            | ihr | wohn**t** | arbeit**et** | heiß**t** |
            | sie/Sie | wohn**en** | arbeit**en** | heiß**en** |

            - **wir, sie, Sie** → **-en** (b7al l-infinitiv). Sahla!
            - **ihr** → **-t** (b7al er/sie).
            - Ila l-jder kaysali b **-t** wla **-d** (arbei**t**-, fin**d**-) kanzidou **e** bach ytnte9: du arbeit**e**st, er arbeit**e**t, ihr arbeit**e**t.
          `,
          [
            ['Wir wohnen in Köln.', '7na saknin f Köln.'],
            ['Ihr lernt Deutsch.', 'Ntouma kat9raw l\'Almaniya.'],
            ['Salma und Youssef kommen aus Marokko.', 'Salma o Youssef men l-Maghrib.'],
            ['Er arbeitet in Bonn.', 'Howa kaykhdem f Bonn.'],
          ],
        ),
        gap('Kemmel n-nihaya', 'Wir lern___ Deutsch.', 'en'),
        gap('Kemmel n-nihaya', 'Ihr komm___ aus Spanien.', 't'),
        gap('Kemmel', 'Du ___ (arbeiten) in Köln.', 'arbeitest', 'Jder kaysali b t: du arbeit**e**st.'),
        choice('"___ wohnen in Fès." Chkoun?', ['Er', 'Ihr', 'Wir'], 2, '"wohnen" b -en → wir / sie / Sie.'),
        explain(
          'sein o haben: jouj d l-af3al l-mohimmin',
          md`
            | | **sein** (kan) | **haben** (3end) |
            |---|---|---|
            | ich | bin | habe |
            | du | bist | ha**st** |
            | er/sie/es | ist | ha**t** |
            | wir | sind | haben |
            | ihr | seid | habt |
            | sie/Sie | sind | haben |

            - "haben" = *3endi / 3endek*: "Ich **habe** ein Handy." = *3endi portable.*
            - Rd l-bal: du **hast**, er **hat** (bla b).
          `,
          [
            ['Wir sind Nachbarn.', '7na jiran.'],
            ['Ihr seid aus Marokko, oder?', 'Ntouma men l-Maghrib, ya ak?'],
            ['Hast du WhatsApp?', 'Wach 3endek WhatsApp?'],
            ['Sie haben keine Zeit.', 'Houma ma 3endhomch l-wa9t.'],
          ],
        ),
        match('Rbet', [
          ['wir', 'sind'],
          ['ihr', 'seid'],
          ['du', 'hast'],
          ['er', 'hat'],
          ['ich', 'habe'],
        ]),
        gap('Kemmel b sein wla haben', 'Wir ___ in Köln. Wir ___ eine Wohnung.', ['sind', 'haben'], '"in Köln sein" = nkounou f Köln; "eine Wohnung haben" = 3endna chi dar.'),
        explain(
          'Sou2al dyal Ja / Nein',
          md`
            Ila s-sou2al jawabou **ja** wla **nein**, **l-fi3l kayji f l-bidaya**:

            | Jomla | Sou2al |
            |---|---|
            | Du **hast** WhatsApp. | **Hast** du WhatsApp? |
            | Sie **kommen** aus Marokko. | **Kommen** Sie aus Marokko? |
            | Er **ist** Lehrer. | **Ist** er Lehrer? |

            O s-sout kayt-le3 f l-akhir (↗).

            **L-jawab:**
            - "Ja, ich habe WhatsApp." / "Ja, klar!"
            - "Nein, ich komme aus Algerien."
          `,
          [
            ['Wohnst du in Köln? — Ja.', 'Wach saken f Köln? — Ah.'],
            ['Sind Sie Frau Weber? — Nein, ich bin Frau Klein.', 'Wach nti Madame Weber? — La, ana Madame Klein.'],
          ],
          'F Darija kanzidou *wach* f l-bidaya. F l\'Almaniya **l-fi3l howa li kayji f l-bidaya** — ma kaynach chi kelma b7al *wach*.',
        ),
        order('Rtteb s-sou2al', 'Sprechen Sie Arabisch?', 'Sou2al ja/nein: l-fi3l f l-bidaya.', { dar: 'Wach kathder l-3arbiya? (rasmi)' }),
        order('Rtteb s-sou2al', 'Hast du ein Handy?', undefined, { dar: 'Wach 3endek portable?' }),
        choice('Ina sou2al s7i7?', ['Du bist Lehrer?', 'Bist du Lehrer?', 'Wach du bist Lehrer?'], 1),
        translate("Terjem l l'Almaniya", 'Wach ntouma men Fès?', ['Seid ihr aus Fès?', 'Kommt ihr aus Fès?']),
        graded(gap('Kemmel', 'Ihr ___ (sein) sehr nett.', 'seid')),
        graded(gap('Kemmel', 'Salma ___ (haben) zwei Brüder.', 'hat')),
        graded(choice('"___ arbeitet in einer Bank." Chkoun?', ['Ich', 'Wir', 'Er'], 2)),
        graded(choice('Ina sou2al s7i7?', ['Wohnen Sie in Bonn?', 'Sie wohnen in Bonn wach?', 'Wohnen in Bonn Sie?'], 0)),
        graded(translate("Terjem l l'Almaniya", '7na jiran.', ['Wir sind Nachbarn.'])),
        graded(gap('Kemmel', 'Wir ___ (wohnen) in Köln.', 'wohnen')),
        summary(
          [
            '**wir / sie / Sie → -en**, **ihr → -t**. Jder b t/d: du arbeit**e**st.',
            '**sein:** bin, bist, ist, sind, seid, sind. **haben:** habe, hast, hat, haben, habt, haben.',
            'Sou2al ja/nein: **l-fi3l f l-bidaya**: "Hast du Zeit?"',
          ],
          ['Tsrref ay fi3l 3adi', 'Tkhdem sein o haben', 'Tsowwel o tjaweb b ja/nein'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Im Bürgeramt — L-formulaire',
      description: "L-ma3loumat chakhsiya, l-adresse, l-ar9am l-kbar, o tsjil s-sakan f l-Bürgeramt.",
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem l-kalimat dyal formulaire', 'Tgoul l-adresse dyalek', 'T3ed 7tal 1000', 'T3emmer formulaire'],
      steps: [
        intro(
          'Anmeldung: tsjil s-sakan',
          'Kol wa7ed sken f dar jdida f Almaniya khasso ymchi l **Bürgeramt** (l-idara dyal l-mdina) bach ytsejjel. Youssef 3endou rendez-vous lyouma. Ghadi y3emmer **formulaire** o yjaweb 3la s-sou2alat dyal l-mowadhef.',
          ['Tfhem l-formulaire', 'Tgoul l-adresse', 'Tjaweb 3la l-mowadhef'],
        ),
        vocab('Das Formular — L-ma3loumat chakhsiya', [
          ['der Vorname', 's-smiya chakhsiya', 'die Vornamen', ['Mein Vorname ist Youssef.', 'Smiyti Youssef.']],
          ['der Nachname', 's-smiya l-3a2iliya', 'die Nachnamen'],
          ['das Geburtsdatum', 'tarikh l-izdiyad', '', ['Geburtsdatum: 12.03.2002', 'Tarikh l-izdiyad: 12/03/2002']],
          ['der Geburtsort', 'blasset l-izdiyad', ''],
          ['die Staatsangehörigkeit', 'l-jinsiya', '', ['Staatsangehörigkeit: marokkanisch', 'L-jinsiya: maghribiya']],
          ['der Familienstand', 'l-7ala l-3a2iliya', ''],
          ['ledig', 'mezzouj? la — 3azib / 3azba'],
          ['verheiratet', 'mzowwej / mzowja'],
          ['die Adresse', 'l-3onwan', 'die Adressen'],
          ['die Straße', 'z-zen9a / ch-chari3', 'die Straßen'],
          ['die Hausnummer', 'r-ra9m dyal d-dar', ''],
          ['die Postleitzahl (PLZ)', 'r-ramz l-bariidi', ''],
          ['der Wohnort', 'l-mdina fin saken', ''],
          ['die Unterschrift', 't-tawqi3 / s-signature', ''],
        ]),
        explain(
          'L-ar9am l-kbar: 100 – 1000',
          md`
            - "hundert" = 100, "zweihundert" = 200, "dreihundert" = 300 …
            - "tausend" = 1000.
            - Kolchi kaytketeb **kelma wa7da**: 345 = "dreihundert**fünfundvierzig**" (300 + 5 o 40).
            - 101 = "hunderteins", 110 = "hundertzehn".

            **L-adresse f Almaniya** katketbha hakka:

            > Bergstraße 12
            > 50667 Köln

            Awwalan **z-zen9a**, men b3d **r-ra9m dyal d-dar** (machi 9bel!), o f s-sater t-tani **PLZ** + **l-mdina**.
            Mli katgoul l-PLZ katgoulha ra9m b ra9m: "fünf – null – sechs – sechs – sieben".
          `,
          [
            ['Ich wohne in der Bergstraße 12.', 'Saken f Bergstraße, ra9m 12.'],
            ['Die Postleitzahl ist 50667.', 'R-ramz l-bariidi howa 50667.'],
            ['Das kostet zweihundertfünfzig Euro.', 'Hadchi b 250 euro.'],
          ],
        ),
        dictation('Sme3 o kteb r-ra9m b l-ar9am', 'dreihundertzwanzig', undefined, ['320']),
        choice('Chno howa "hundertachtundsiebzig"?', ['187', '178', '1078'], 1, '100 + 8 o 70 = 178.'),
        listening(
          'Beim Bürgeramt',
          [
            ['Herr Krause', 'Guten Tag. Sie möchten sich anmelden?', 'Nharek sa3id. Bghiti ttsejjel?'],
            ['Youssef', 'Ja, genau. Hier ist mein Formular.', 'Ah, bdebt. Hada l-formulaire dyali.'],
            ['Herr Krause', 'Danke. Ihr Name ist Youssef Benali?', 'Chokran. Smiytek Youssef Benali?'],
            ['Youssef', 'Ja, richtig.', 'Ah, s7i7.'],
            ['Herr Krause', 'Und Ihre Adresse ist Bergstraße 12, 50667 Köln?', 'O l-3onwan dyalek Bergstraße 12, 50667 Köln?'],
            ['Youssef', 'Ja, das stimmt.', 'Ah, s7i7.'],
            ['Herr Krause', 'Sind Sie verheiratet?', 'Wach nta mzowwej?'],
            ['Youssef', 'Nein, ich bin ledig.', 'La, ana 3azib.'],
            ['Herr Krause', 'Haben Sie Ihren Pass dabei?', 'Wach jayb m3ak l-passport?'],
            ['Youssef', 'Ja, hier, bitte.', 'Ah, tfeddel.'],
            ['Herr Krause', 'Danke. Bitte unterschreiben Sie hier. … So, hier ist Ihre Meldebescheinigung.', 'Chokran. Wa99a3 hna 3afak. … Safi, hadi l-chahada dyal t-tsjil.'],
          ],
          'Sme3 l-mowadhef o Youssef. Men b3d jaweb 3la s-sou2alat.',
        ),
        choice('Chno ra9m d-dar dyal Youssef?', ['50', '12', '667'], 1, 'Bergstraße **12**.'),
        choice('Youssef …', ['mzowwej (verheiratet)', '3azib (ledig)'], 1),
        choice('Chno 3tah l-mowadhef f l-akhir?', ['Pass', 'Formular', 'Meldebescheinigung'], 2),
        culture(
          'Anmeldung f Almaniya',
          md`
            - Mli katsken f dar jdida, 3endek **14 youm** bach ttsejjel f l-**Bürgeramt** (wla *Bürgerbüro*).
            - Khassek: l-passport, o **Wohnungsgeberbestätigung** (wer9a men moul d-dar).
            - Kat3tik l-idara **Meldebescheinigung**: wer9a mohimma bzaf — katkhassek l l-banka, l-khedma o l-Ausländerbehörde.
            - Men b3d chi simanat kayjik **Steuer-ID** (ra9m dyal d-dariba) f l-boita.

            Rendez-vous f l-Bürgeramt ghaliban katdirou **online**, o ghaliban khass tsenna chi simanat — dirou bkri!
          `,
        ),
        reading(
          'Ein Formular',
          md`
            Anmeldung — Persönliche Daten

            Nachname: El Idrissi
            Vorname: Salma
            Geburtsdatum: 05.09.2004
            Geburtsort: Fès
            Staatsangehörigkeit: marokkanisch
            Familienstand: ledig
            Straße, Hausnummer: Venloer Straße 230
            PLZ, Wohnort: 50823 Köln
            Telefon: 0176 245 87 31
          `,
          {
            text: '9ra l-formulaire dyal Salma o jaweb.',
            glossary: [['marokkanisch', 'maghribiya']],
          },
        ),
        choice('Fin tzadat Salma?', ['Köln', 'Fès', 'Casablanca'], 1),
        choice('Chno r-ramz l-bariidi (PLZ) dyal Salma?', ['50823', '230', '0176'], 0),
        write(
          '3emmer l-formulaire dyalek',
          md`
            Kteb l-ma3loumat dyalek b7al l-formulaire dyal Salma (t9der tkhtare3 l-adresse):
            Nachname, Vorname, Geburtsort, Staatsangehörigkeit, Familienstand, Straße und Hausnummer, PLZ und Wohnort, Telefon.
          `,
          ['Nachname o Vorname', 'Geburtsort', 'Staatsangehörigkeit', 'Familienstand', 'L-adresse (z-zen9a 9bel r-ra9m)', 'Telefon'],
          'Nachname: Benali\nVorname: Youssef\nGeburtsort: Casablanca\nStaatsangehörigkeit: marokkanisch\nFamilienstand: ledig\nStraße, Hausnummer: Bergstraße 12\nPLZ, Wohnort: 50667 Köln\nTelefon: 0162 453 18 70',
          15,
        ),
        graded(choice('"die Unterschrift" — chno hiya?', ['l-3onwan', 't-tawqi3', 'l-jinsiya'], 1)),
        graded(choice('Ina adresse mktouba s7i7a?', ['12 Bergstraße, Köln 50667', 'Bergstraße 12, 50667 Köln', 'Köln 50667, 12 Bergstraße'], 1, 'Z-zen9a + r-ra9m, men b3d PLZ + l-mdina.')),
        graded(dictation('Sme3 o kteb r-ra9m b l-ar9am', 'vierhundertneunzig', undefined, ['490'])),
        graded(choice('"ledig" kat3ni…', ['mzowwej', '3azib', 'mtalle9'], 1)),
        summary(
          [
            'L-formulaire: **Vorname, Nachname, Geburtsdatum, Geburtsort, Staatsangehörigkeit, Familienstand**.',
            'L-adresse: **Bergstraße 12 / 50667 Köln** — r-ra9m men b3d z-zen9a.',
            '100 = hundert, 1000 = tausend; 345 = dreihundertfünfundvierzig.',
            'Mli tsken: **Anmeldung f Bürgeramt f 14 youm** → Meldebescheinigung.',
          ],
          ['Tfhem o t3emmer formulaire', 'Tgoul l-adresse dyalek', 'T3ed 7tal 1000'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 2',
      description: 'Muraja3a dyal l-ar9am, t-tasrif, sein o haben, o l-formulaire — o t-test dyal l-unité 2.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-ar9am o t-tasrif', 'Tbeddel l-ma3loumat m3a chi wa7ed', 'Tnje7 f t-test dyal l-unité 2'],
      steps: [
        intro(
          'Chno t3llemti f l-unité 2?',
          'L-ar9am men 0 7tal 1000, l-3omr o t-tilifoun, t-tasrif m3a kolchi (wir, ihr, sie), sein o haben, sou2al ja/nein, o l-formulaire dyal l-Bürgeramt. Yallah nraj3ou!',
          ['Traja3', 'Tmrren', 'Dir t-test'],
        ),
        explain(
          'Muraja3a sghira',
          md`
            | | -en fi3l (wohnen) | sein | haben |
            |---|---|---|---|
            | ich | wohne | bin | habe |
            | du | wohnst | bist | hast |
            | er/sie/es | wohnt | ist | hat |
            | wir | wohnen | sind | haben |
            | ihr | wohnt | seid | habt |
            | sie/Sie | wohnen | sind | haben |

            - L-3omr: "Ich **bin** 24 (Jahre alt)."
            - Sou2al ja/nein: "**Wohnst** du in Köln?"
            - 21 – 99: "ein**und**zwanzig" (b7al Darija).
          `,
        ),
        dialogue(
          'Neu im Deutschkurs',
          [
            ['Olena', 'Hallo, seid ihr auch neu hier?', 'Salam, wach ntouma ta jdad hna?'],
            ['Salma', 'Ja, wir sind seit Montag im Kurs. Ich bin Salma, und das ist Youssef.', 'Ah, 7na f l-cours men l-ithnin. Ana Salma, o hada Youssef.'],
            ['Olena', 'Ich bin Olena. Woher kommt ihr?', 'Ana Olena. Mnin ntouma?'],
            ['Youssef', 'Wir kommen beide aus Marokko. Und du?', 'B jouj men l-Maghrib. O nti?'],
            ['Olena', 'Aus der Ukraine. Habt ihr schon eine Wohnung?', 'Men Ukraniya. Wach 3endkom dar?'],
            ['Salma', 'Ja, ich wohne in der Venloer Straße. Hast du meine Nummer?', 'Ah, sakna f Venloer Straße. Wach 3endek r-ra9m dyali?'],
            ['Olena', 'Nein. Wie ist deine Nummer?', 'La. Chno r-ra9m dyalek?'],
            ['Salma', '0176 – 245 – 87 – 31.', '0176 245 87 31.'],
          ],
        ),
        choice('Mnin Salma o Youssef?', ['Aus der Ukraine', 'Aus Marokko', 'Aus Köln'], 1),
        gap('Kemmel', 'Wir ___ (sein) seit Montag im Kurs. ___ ihr schon eine Wohnung?', ['sind', 'Habt']),
        match('Rbet r-ra9m', [
          ['45', 'fünfundvierzig'],
          ['54', 'vierundfünfzig'],
          ['17', 'siebzehn'],
          ['70', 'siebzig'],
          ['200', 'zweihundert'],
        ]),
        translate("Terjem l l'Almaniya", 'Wach 3endkom l-wa9t?', ['Habt ihr Zeit?']),
        order('Rtteb', 'Wie alt sind Sie, Herr Krause?'),
        speak(
          'Role-play: F l-Bürgeramt',
          'L-mowadhef kaysowlek: *"Wie ist Ihr Name? Wie ist Ihre Adresse? Wie alt sind Sie? Sind Sie verheiratet? Wie ist Ihre Telefonnummer?"* — Jaweb b jmel kamlin.',
          ['Mein Name ist Youssef Benali.', 'Meine Adresse ist Bergstraße 12, 50667 Köln.', 'Ich bin vierundzwanzig Jahre alt.', 'Nein, ich bin ledig.', 'Meine Telefonnummer ist 0162 453 18 70.'],
        ),
        write(
          'Kteb 3la sa7bek',
          'Kteb 4–5 jmel 3la chi sa7bek wla chi wa7ed men 3a2iltek: smiytou, l-3omr dyalou, mnin howa, fin saken, wach mzowwej, o chno 3endou (ex: chi tomobil, chi 9itt…).',
          ['S-smiya', 'L-3omr (er/sie ist …)', 'Mnin o fin saken', 'Familienstand', 'Haben: er/sie hat …'],
          'Das ist mein Freund Karim. Er ist sechsundzwanzig Jahre alt. Er kommt aus Rabat und wohnt jetzt in Düsseldorf. Er ist verheiratet. Er hat ein Auto und zwei Kinder.',
          25,
        ),
        graded(choice('Chno howa "neunundsechzig"?', ['96', '69', '99'], 1)),
        graded(gap('Kemmel', 'Ihr ___ (wohnen) in Bonn, oder?', 'wohnt')),
        graded(gap('Kemmel', 'Du ___ (haben) WhatsApp?', 'hast')),
        graded(choice('Kifach katgoul: 3endi 30 3am?', ['Ich habe dreißig Jahre.', 'Ich bin dreißig.', 'Ich bin dreizig.'], 1)),
        graded(choice('Ina sou2al s7i7?', ['Seid ihr aus Marokko?', 'Ihr seid aus Marokko wach?', 'Sind ihr aus Marokko?'], 0)),
        graded(dictation('Sme3 o kteb r-ra9m b l-ar9am', 'siebenhundertsechzehn', undefined, ['716'])),
        graded(choice('"der Familienstand" — ina jawab mzyan?', ['ledig', 'Köln', 'marokkanisch'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Houma kaykhedmou f Köln.', ['Sie arbeiten in Köln.'])),
        graded(order('Rtteb', 'Hat er eine Wohnung in Köln?')),
        graded(gap('Kemmel', 'Wir ___ (sein) Nachbarn.', 'sind')),
        summary(
          [
            'L-ar9am: 0–12 7fedhom, 13–19 + zehn, 20–90 + zig, 21–99 b7al Darija, 100 hundert, 1000 tausend.',
            'T-tasrif: -e, -st, -t, -en, -t, -en — o **sein / haben** khassek t7efdhom.',
            'F l-unité 3: l-3a2ila, l-masculin o l-féminin (der, die, das) o "mein / dein".',
          ],
          ['T3ed 7tal 1000', 'Tgoul l-3omr, t-tilifoun o l-adresse', 'Tsrref ay fi3l 3adi o sein / haben', 'T3emmer formulaire'],
          'Khlasa dyal l-unité 2',
        ),
      ],
    },
  ],
});
