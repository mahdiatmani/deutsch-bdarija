import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 5,
  title: 'Mein Tag',
  description: "S-sa3a, iyyam s-simana, n-nhar dyalek men s-sba7 l l-lil, o kifach tdir rendez-vous.",
  icon: 'schedule',
  objectives: [
    'Tgoul s-sa3a b toro9 rasmiya o 3adiya',
    'Thder 3la n-nhar dyalek (Tagesablauf)',
    'Tkhdem l-af3al li kayt9esmou: aufstehen, einkaufen…',
    'Tbda j-jomla b l-wa9t: "Um 7 Uhr stehe ich auf."',
    'Tdir, t9bel wla trfod rendez-vous',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wie spät ist es? — S-sa3a',
      description: 'S-sa3a rasmiya o 3adiya, iyyam s-simana, o wa9t n-nhar.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsowwel 3la s-sa3a o tjaweb', 'Tfhem "halb drei", "Viertel nach…"', 'Tgoul l-iyyam o wa9t n-nhar'],
      steps: [
        intro(
          'Imta kaybda l-cours?',
          'Youssef wsel l l-cours m3ettel chwiya. Frau Weber kat9ollou "Der Kurs beginnt um halb neun!". Youssef ma fhemch: "halb neun" ya3ni 9:30? La! Ghadi nfehmou 3lach.',
          ['Tsowwel 3la s-sa3a', 'Tgoul s-sa3a b jouj toro9', 'Tgoul l-iyyam'],
        ),
        dialogue(
          'Zu spät!',
          [
            ['Frau Weber', 'Guten Morgen, Youssef! Es ist schon Viertel vor neun.', 'Sba7 l-khir a Youssef! Daba 9 9l rob3.'],
            ['Youssef', 'Entschuldigung! Ich dachte, der Kurs beginnt um halb zehn.', 'Sme7 liya! Kont kan7seb l-cours kaybda f 9:30.'],
            ['Frau Weber', 'Nein, er beginnt um halb neun. Also um acht Uhr dreißig.', 'La, kaybda f "halb neun". Ya3ni 8:30.'],
            ['Youssef', 'Ach so! Und wann ist der Kurs zu Ende?', 'Aaah! O imta kaysali l-cours?'],
            ['Frau Weber', 'Um Viertel nach zwölf. Von Montag bis Freitag.', 'F 12 o rob3. Men l-ithnin 7tal l-jem3a.'],
          ],
        ),
        explain(
          'S-sa3a rasmiya (offiziell)',
          md`
            F l-mitro, f r-radio, f l-mawa3id rasmiya: **sa3at + Uhr + d9aye9**, men 0 7tal 24.

            | Sa3a | Katgoul |
            |---|---|
            | 8:00 | "acht Uhr" |
            | 8:15 | "acht Uhr fünfzehn" |
            | 14:30 | "vierzehn Uhr dreißig" |
            | 20:45 | "zwanzig Uhr fünfundvierzig" |

            - "Wie spät ist es?" / "Wie viel Uhr ist es?" = *ch7al f s-sa3a?*
            - "Es ist acht Uhr." = *hadi t-tmenya.*
            - "Um wie viel Uhr …?" / "Wann …?" = *f ch7al…? / imta…?* → "**Um** acht Uhr."
          `,
          [
            ['Es ist neun Uhr zehn.', 'Daba 9 o 10 d9aye9.'],
            ['Der Zug fährt um siebzehn Uhr fünf.', 'L-train kaykhrej f 17:05.'],
          ],
        ),
        explain(
          'S-sa3a 3adiya (inoffiziell)',
          md`
            F l-hedra m3a n-nas: men 1 7tal 12, b **nach** (*o*), **vor** (*9l*), **Viertel** (*rob3*) o **halb** (*ness*).

            | Sa3a | Katgoul | Darija |
            |---|---|---|
            | 9:05 | "fünf **nach** neun" | 9 o 5 |
            | 9:15 | "**Viertel nach** neun" | 9 o rob3 |
            | 9:30 | "**halb zehn**" ⚠️ | 9 o ness |
            | 9:45 | "**Viertel vor** zehn" | 10 9l rob3 |
            | 9:50 | "zehn **vor** zehn" | 10 9l 10 |

            ⚠️ **"halb"** kaychouf l **s-sa3a l-jaya**: "halb zehn" = ness sa3a **9bel** 10 = **9:30** (machi 10:30!).
            Fakker f *ness t-triq l 10*.
          `,
          [
            ['Es ist halb acht.', 'Daba 7:30.'],
            ['Wir treffen uns um Viertel nach drei.', 'Ghadi ntla9aw f 3 o rob3.'],
            ['Es ist zehn vor sechs.', 'Daba 6 9l 10.'],
          ],
          'Fransawi kaygoul *neuf heures et demie* (9:30). Almani kaygoul **"halb zehn"**. Hadi hiya l-ghalta n-nmra 1 3end l-maghariba!',
        ),
        choice('"halb drei" = ch7al?', ['3:30', '2:30', '3:00'], 1, '"halb drei" = ness sa3a 9bel 3 = 2:30.'),
        choice('"Viertel vor acht" = ch7al?', ['8:15', '7:45', '7:15'], 1),
        choice('Kifach katgoul 6:15 b t-tari9a l-3adiya?', ['Viertel nach sechs', 'Viertel vor sechs', 'halb sechs'], 0),
        dictation('Sme3 o kteb s-sa3a b l-ar9am (ex: 14:30)', 'sechzehn Uhr vierzig', undefined, ['16:40', '16.40']),
        vocab('Tage & Tageszeiten — L-iyyam o wa9t n-nhar', [
          ['der Montag', 'l-ithnin'],
          ['der Dienstag', 't-tlat'],
          ['der Mittwoch', 'l-larb3'],
          ['der Donnerstag', 'l-khmis'],
          ['der Freitag', 'l-jem3a'],
          ['der Samstag', 's-sebt'],
          ['der Sonntag', 'l-7ad'],
          ['das Wochenende', 'l-weekend (s-sebt o l-7ad)'],
          ['der Morgen / morgens', 's-sba7 / f s-sba7'],
          ['der Mittag / mittags', 'n-ness n-nhar / f d-dohr'],
          ['der Nachmittag / nachmittags', 'l-3chiya (ba3d d-dohr)'],
          ['der Abend / abends', 'l-3chiya / f l-lil (bkri)'],
          ['die Nacht / nachts', 'l-lil / f l-lil'],
          ['heute – morgen – gestern', 'lyouma – ghedda – lbare7'],
        ], 'Kol l-iyyam **der**. O "am" = an + dem: "**am** Montag" (nhar l-ithnin), "**am** Abend". Walakin "**in der** Nacht".'),
        explain(
          'um, am, von … bis',
          md`
            | Preposition | M3a… | Mital |
            |---|---|---|
            | **um** | s-sa3a | "um 8 Uhr", "um halb neun" |
            | **am** | n-nhar / wa9t n-nhar | "am Montag", "am Wochenende", "am Abend" |
            | **von … bis** | mn … l | "von 9 bis 17 Uhr", "von Montag bis Freitag" |
            | **ab** | men… (o mora) | "ab 18 Uhr" |

            **morgen** = ghedda, walakin **der Morgen** = s-sba7. "morgen früh" = *ghedda f s-sba7*.
          `,
          [
            ['Am Samstag arbeite ich nicht.', 'Nhar s-sebt ma kankhdemch.'],
            ['Die Bäckerei ist von 6 bis 18 Uhr geöffnet.', 'L-boulangerie m7loula men 6 l 18.'],
          ],
        ),
        match('Rbet', [
          ['der Mittwoch', 'l-larb3'],
          ['der Donnerstag', 'l-khmis'],
          ['der Dienstag', 't-tlat'],
          ['der Sonntag', 'l-7ad'],
          ['der Freitag', 'l-jem3a'],
        ]),
        gap('Kemmel b um / am', 'Ich komme ___ Freitag ___ 10 Uhr.', ['am', 'um']),
        speak(
          'Ch7al f s-sa3a?',
          'Goul had s-sa3at b jouj toro9 (rasmiya o 3adiya): **7:30**, **13:15**, **18:45**.',
          ['Es ist sieben Uhr dreißig. Es ist halb acht.', 'Es ist dreizehn Uhr fünfzehn. Es ist Viertel nach eins.', 'Es ist achtzehn Uhr fünfundvierzig. Es ist Viertel vor sieben.'],
        ),
        graded(choice('"halb sechs" = ch7al?', ['6:30', '5:30', '5:00'], 1)),
        graded(choice('"zehn nach vier" = ch7al?', ['4:10', '3:50', '10:04'], 0)),
        graded(gap('Kemmel', 'Der Kurs ist ___ Montag ___ Freitag.', ['von', 'bis'])),
        graded(dictation('Sme3 o kteb s-sa3a b l-ar9am', 'einundzwanzig Uhr fünfzehn', undefined, ['21:15', '21.15'])),
        graded(choice('"lbare7" b l\'Almaniya?', ['morgen', 'gestern', 'heute'], 1)),
        summary(
          [
            'Rasmi: **14:30 = vierzehn Uhr dreißig**. 3adi: **halb drei** (= 2:30!), **Viertel nach/vor**, **fünf nach/vor**.',
            '**um** + sa3a, **am** + nhar, **von … bis**.',
            'L-iyyam kolhom **der**: am Montag, am Wochenende.',
          ],
          ['Tsowwel o tgoul s-sa3a', 'Tgoul l-iyyam o wa9t n-nhar'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich stehe um 7 Uhr auf — Trennbare Verben',
      description: 'L-af3al li kayt9esmou, o kifach tbda j-jomla b l-wa9t (l-fi3l dima f l-blasa 2).',
      minutes: 30,
      kind: 'grammar',
      goals: ['Tfhem l-af3al li kayt9esmou', 'Tdir "Satzklammer": l-fi3l f 2, l-prefixe f l-akhir', 'Tbda b l-wa9t: "Morgen fahre ich…"'],
      steps: [
        intro(
          'N-nhar dyal Salma',
          md`
            Salma kat9ol: *"Ich **stehe** um sieben Uhr **auf**."* — fin l-fi3l "aufstehen" (nod)? Ra t9essem jouj: **stehe** f l-blasa 2, o **auf** f l-akhir d j-jomla!
            Hada wa7ed men a9wa l-khasa2is dyal l'Almaniya. Yallah nfehmouh.
          `,
          ['Tsrref l-af3al li kayt9esmou', 'T7ett kol jouz7 f blastou', 'Tbda j-jomla b l-wa9t'],
        ),
        explain(
          'Trennbare Verben: l-af3al li kayt9esmou',
          md`
            Bzaf d l-af3al 3endhom **préfixe** (auf-, an-, ein-, aus-, mit-, fern-, ab-, zu-…). F j-jomla l-3adiya:

            1. **L-fi3l** (mtsrref) kayb9a f **l-blasa 2**.
            2. **L-préfixe** kaymchi l **l-akhir d j-jomla**.

            | Infinitiv | Jomla |
            |---|---|
            | **auf**stehen (nod) | Ich **stehe** um 7 Uhr **auf**. |
            | **ein**kaufen (tsewwe9) | Salma **kauft** im Supermarkt **ein**. |
            | **an**fangen (bda) | Der Kurs **fängt** um 8:30 **an**. |
            | **an**rufen (ttasel) | Ich **rufe** meine Mutter **an**. |
            | **fern**sehen (tfarrej f t-tilfaza) | Wir **sehen** abends **fern**. |
            | **mit**kommen (ja m3a) | **Kommst** du **mit**? |
            | **auf**räumen (ret-teb) | Er **räumt** sein Zimmer **auf**. |

            Had l-9alab kaysmmiwh **Satzklammer** (l-mel9at): l-fi3l o l-préfixe kaychedou j-jomla b7al jouj d l-qwasat.
          `,
          [
            ['Ich stehe jeden Tag um sechs Uhr auf.', 'Kannod kol nhar f 6.'],
            ['Wann fängt der Film an?', 'Imta kaybda l-film?'],
            ['Rufst du mich morgen an?', 'Wach ghadi tttasel biya ghedda?'],
          ],
          'F l-infinitiv kayb9aw m3a ba3d: "Ich muss früh **aufstehen**." (ghadi nchoufou had l-chkel m3a l-Modalverben f l-unité 6.)',
        ),
        choice('Fin kaymchi "auf" f j-jomla "Ich ___ um 7 Uhr ___."?', ['M3a l-fi3l f l-blasa 2', 'F l-akhir d j-jomla', 'F l-bidaya'], 1),
        gap('Kemmel (einkaufen)', 'Salma ___ am Samstag ___.', ['kauft', 'ein']),
        gap('Kemmel (anrufen)', 'Ich ___ meine Oma ___.', ['rufe', 'an']),
        gap('Kemmel (fernsehen)', 'Wir ___ abends ___.', ['sehen', 'fern']),
        order('Rtteb', 'Der Kurs fängt um halb neun an.', 'Fi3l (fängt) f l-blasa 2, "an" f l-akhir.'),
        order('Rtteb', 'Kommst du heute Abend mit?', 'F s-sou2al ja/nein: l-fi3l f l-bidaya, "mit" f l-akhir.'),
        explain(
          'L-fi3l dima f l-blasa 2 (Inversion)',
          md`
            F l'Almaniya t9der tbda j-jomla b ay 7aja: b l-fa3il, b l-wa9t, b l-blasa… Walakin **l-fi3l dima f l-blasa 2**. Ila bdiiti b chi 7aja khra men l-fa3il, **l-fa3il kaymchi men b3d l-fi3l**:

            | 1 | **2 (fi3l)** | 3 | … |
            |---|---|---|---|
            | Ich | **stehe** | um 7 Uhr | auf. |
            | Um 7 Uhr | **stehe** | ich | auf. |
            | Am Samstag | **kauft** | Salma | ein. |
            | Heute | **arbeite** | ich | nicht. |

            F Darija o l-fransawiya kangoulou *F 7 ana kannod* / *À 7h, je me lève* (l-fa3il 9bel l-fi3l). F l'Almaniya **la**: "Um 7 Uhr ~~ich stehe~~ → **stehe ich** auf".
          `,
          [
            ['Morgen fahre ich nach Bonn.', 'Ghedda ghadi nmchi l Bonn.'],
            ['Am Wochenende sehen wir fern.', 'F l-weekend kantfarrjou f t-tilfaza.'],
            ['Dann frühstücke ich.', 'Men b3d kanfter.'],
          ],
          'Fakker f l-fi3l b7al **l-mlek** dyal j-jomla: dima ga3ed f l-koursi n-nmra 2!',
        ),
        choice('Ina jomla s7i7a?', ['Am Montag ich arbeite.', 'Am Montag arbeite ich.', 'Am Montag arbeiten ich.'], 1),
        choice('Ina jomla s7i7a?', ['Um 8 Uhr ich frühstücke.', 'Um 8 Uhr frühstücke ich.', 'Ich um 8 Uhr frühstücke.'], 1),
        order('Rtteb (bda b "Am Abend")', 'Am Abend rufe ich meine Eltern an.', 'Wa9t f 1, fi3l f 2, fa3il f 3, "an" f l-akhir.'),
        order('Rtteb (bda b "Heute")', 'Heute kaufe ich nicht ein.'),
        translate("Terjem l l'Almaniya (bda b \"Morgen\")", 'Ghedda ghadi nnod bkri.', ['Morgen stehe ich früh auf.']),
        graded(gap('Kemmel (aufräumen)', 'Am Samstag ___ ich mein Zimmer ___.', ['räume|raeume', 'auf'])),
        graded(choice('Ina jomla s7i7a?', ['Heute ich habe keine Zeit.', 'Heute habe ich keine Zeit.', 'Heute habe keine Zeit ich.'], 1)),
        graded(gap('Kemmel (mitkommen)', '___ du ins Kino ___?', ['Kommst', 'mit'])),
        graded(order('Rtteb', 'Um sieben Uhr stehe ich auf.')),
        graded(choice('"fernsehen" kay3ni…', ['tchouf men b3id', 'tfarrej f t-tilfaza', 'ttasel'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Imta kaybda l-cours?', ['Wann fängt der Kurs an?', 'Wann beginnt der Kurs?', 'Wann faengt der Kurs an?'])),
        summary(
          [
            '**Trennbare Verben:** l-fi3l f l-blasa 2, **l-préfixe f l-akhir**: "Ich **stehe** um 7 **auf**."',
            'Préfixes kathir: **auf-, an-, ein-, aus-, mit-, fern-, ab-, zu-**.',
            '**L-fi3l dima f l-blasa 2**: "Um 7 Uhr **stehe** ich auf." — l-fa3il kaymchi men b3d l-fi3l.',
          ],
          ['Tsrref l-af3al li kayt9esmou', 'Tbda j-jomla b l-wa9t'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Mein Tagesablauf & Termine',
      description: 'T9ra 3la n-nhar dyal chi wa7ed, tdir rendez-vous, o tkteb 3la n-nhar dyalek.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra o tfhem nass 3la n-nhar', 'Tdir, t9bel wla trfod rendez-vous', 'Tnte9 l-af3al b l-accent s7i7', 'Tkteb 3la n-nhar dyalek'],
      steps: [
        intro(
          'Nhar kamel f Köln',
          'Salma kat-kteb blog 9sir 3la n-nhar dyalha f Almaniya. 9rah, o men b3d nt3allmou kifach ndirou rendez-vous m3a s-s7ab.',
          ['T9ra', 'Tdir rendez-vous', 'Tkteb'],
        ),
        vocab('Der Tag — Chno kandiro f n-nhar', [
          ['aufstehen', 'nod (men n-n3as)', '', ['Ich stehe um sieben Uhr auf.', 'Kannod f 7.']],
          ['frühstücken', 'fter', '', ['Ich frühstücke um halb acht.', 'Kanfter f 7:30.']],
          ['duschen', 'doucha', ''],
          ['zur Arbeit / zum Kurs gehen', 'mcha l l-khedma / l l-cours', ''],
          ['zu Mittag essen', 'tghedda', ''],
          ['einkaufen', 'tsewwe9', ''],
          ['kochen', 'tiyeb', ''],
          ['zu Abend essen', 't3echcha', ''],
          ['lernen', 'ra9a / t3llem', ''],
          ['Freunde treffen', 'tla9a b s-s7ab', ''],
          ['fernsehen', 'tfarrej f t-tilfaza', ''],
          ['ins Bett gehen', 'mcha yn3es', ''],
          ['schlafen', 'n3es', ''],
        ]),
        reading(
          'Salmas Tag',
          md`
            Mein Tag in Köln

            Von Montag bis Freitag stehe ich um halb sieben auf. Ich dusche und frühstücke. Mein Frühstück ist einfach: ein Kaffee und ein Brötchen mit Käse. Um Viertel vor acht fahre ich mit dem Bus zum Deutschkurs. Der Kurs fängt um halb neun an und endet um Viertel nach zwölf.

            Mittags esse ich mit Olena in der Mensa. Am Nachmittag lerne ich zu Hause oder in der Bibliothek. Dienstags und donnerstags arbeite ich von 15 bis 19 Uhr in einem Café.

            Abends koche ich, oft Couscous oder Tajine. Manchmal rufe ich meine Familie in Fès an. Um elf Uhr gehe ich ins Bett.

            Am Wochenende schlafe ich lange. Am Samstag kaufe ich ein und am Sonntag treffe ich Freunde.
          `,
          {
            text: '9ra l-blog dyal Salma.',
            glossary: [
              ['einfach', 'basit'],
              ['endet', 'kaysali'],
              ['die Mensa', 'restaurant dyal l-jami3a'],
              ['zu Hause', 'f d-dar'],
              ['dienstags', 'kol nhar t-tlat'],
              ['oft', 'bzaf d l-merrat'],
              ['manchmal', 'chi merrat'],
              ['lange', 'bzaf (f l-wa9t)'],
            ],
          },
        ),
        choice('F ch7al kat-nod Salma f l-ousbou3?', ['7:30', '6:30', '6:00'], 1, '"um halb sieben" = 6:30.'),
        choice('Imta katkhdem Salma f l-café?', ['Kol nhar', 'T-tlat o l-khmis', 'S-sebt'], 1),
        choice('Chno katdir l-7ad?', ['Katsewwe9', 'Kattla9a b s-s7ab', 'Katkhdem'], 1),
        choice('F ch7al katn3es?', ['22:00', '23:00', '23:30'], 1, '"Um elf Uhr gehe ich ins Bett."'),
        explain(
          'Rendez-vous: tsowwel, t9bel, trfod',
          md`
            | Bach… | Katgoul |
            |---|---|
            | tsowwel | "Hast du am Freitag Zeit?" — "Kommst du mit ins Kino?" — "Wann hast du Zeit?" |
            | t9tare7 wa9t | "Geht es um 18 Uhr?" — "Wie wäre es mit Samstag?" |
            | t9bel | "Ja, gern!" — "Das passt gut." — "Gute Idee!" |
            | trfod | "Leider nicht. Am Freitag arbeite ich." — "Tut mir leid, da habe ich keine Zeit." |

            F Almaniya **ila rfedti, 3ti s-sabab** ("…, da arbeite ich") o 9tare7 wa9t akhor: "Aber am Samstag geht es."
          `,
          [
            ['Hast du morgen Abend Zeit?', 'Wach 3endek l-wa9t ghedda f l-3chiya?'],
            ['Tut mir leid, morgen kann ich nicht.', 'Sme7 liya, ghedda ma n9derch.'],
            ['Okay, dann um sieben vor dem Kino.', 'Wakha, iwa f 7 9eddam s-sinima.'],
          ],
        ),
        listening(
          'Hast du Zeit?',
          [
            ['Lukas', 'Hey Youssef! Am Samstag spielen wir Fußball im Park. Kommst du mit?', 'Salam a Youssef! S-sebt ghadi nl3bou l-koura f l-park. Bghiti tji m3ana?'],
            ['Youssef', 'Gern! Wann fangt ihr an?', 'B kolchi! Imta ghadi tbdaw?'],
            ['Lukas', 'Um zehn Uhr.', 'F 10.'],
            ['Youssef', 'Oh, um zehn habe ich leider keine Zeit. Da kaufe ich mit Salma ein. Geht es auch später?', 'Oh, f 10 ma 3endich l-wa9t. Ghadi nsewwe9 m3a Salma. Wach momkin men b3d?'],
            ['Lukas', 'Wir spielen bis eins. Komm doch um halb zwölf!', 'Ghadi nl3bou 7tal 13. Aji f 11:30!'],
            ['Youssef', 'Super, das passt. Bis Samstag!', 'Mzyan, hadchi mnasb. 7tal s-sebt!'],
          ],
        ),
        choice('Imta kaybdaw l-match?', ['Um 10 Uhr', 'Um halb zwölf', 'Um eins'], 0),
        choice('3lach Youssef ma y9derch f 10?', ['Kaykhdem', 'Kaysewwe9 m3a Salma', 'Kayn3es'], 1),
        choice('Imta ghadi yji Youssef?', ['10:00', '11:30', '12:30'], 1, '"um halb zwölf" = 11:30.'),
        pron(
          'Fin l-accent? AUFstehen',
          'F l-af3al li kayt9esmou, **l-accent 3la l-préfixe**: AUFstehen, EINkaufen, ANrufen. Walakin f l-af3al li ma kayt9esmouch (be-, ver-, ge-…) l-accent 3la l-fi3l: verSTEhen, beGINnen.',
          [
            ['aufstehen – verstehen', 'AUFstehen (kayt9essem) – verSTEhen (ma kayt9essemch)'],
            ['einkaufen – verkaufen', 'EINkaufen – verKAUfen'],
            ['anfangen – beginnen', 'ANfangen – beGINnen'],
            ['Ich stehe um sieben auf.', 'L-accent 3la "auf" f l-akhir'],
          ],
        ),
        write(
          'N-nhar dyalek',
          'Kteb 3la nhar 3adi dyalek (6–8 jmel). Khdem s-sa3at, 3la l-a9al **2 af3al li kayt9esmou** (aufstehen, einkaufen, anrufen…) o **bda chi jmel b l-wa9t** (Um 8 Uhr …, Am Abend …).',
          ['Imta kat-nod', 'Chno katdir f s-sba7', 'Chno katdir f l-3chiya', 'Jomla 3la l-weekend', '2 trennbare Verben', 'Jmel kaybdaw b l-wa9t'],
          'Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich. Dann fahre ich mit der Bahn zum Kurs. Der Kurs fängt um halb neun an. Am Nachmittag lerne ich zu Hause. Am Abend koche ich und rufe meine Familie an. Um elf Uhr gehe ich ins Bett. Am Wochenende kaufe ich ein.',
          40,
        ),
        graded(choice('Bach t9bel rendez-vous katgoul…', ['Leider nicht.', 'Das passt gut!', 'Tut mir leid.'], 1)),
        graded(choice('"manchmal" kat3ni…', ['dima', 'chi merrat', 'abadan'], 1)),
        graded(dictation('Sme3 o kteb', 'Hast du am Freitag Zeit?')),
        graded(choice('Fin l-accent f "einkaufen"?', ['EINkaufen', 'einKAUfen', 'einkauFEN'], 0)),
        summary(
          [
            'N-nhar: aufstehen, frühstücken, zur Arbeit gehen, einkaufen, kochen, ins Bett gehen.',
            'Rendez-vous: **Hast du … Zeit? — Ja, gern! / Leider nicht, da …**',
            'L-accent 3la l-préfixe: **AUF**stehen, **EIN**kaufen.',
          ],
          ['T9ra nass 3la n-nhar', 'Tdir rendez-vous', 'Tkteb 3la n-nhar dyalek'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 5',
      description: 'Muraja3a: s-sa3a, l-iyyam, l-af3al li kayt9esmou, l-fi3l f l-blasa 2 — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 s-sa3a o l-af3al li kayt9esmou', 'Tdir rendez-vous', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 5', 'S-sa3a, l-iyyam, um/am, l-af3al li kayt9esmou, o l-fi3l f l-blasa 2.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'Jouj 9awa3id dhabiya',
          md`
            1. **L-fi3l dima f l-blasa 2.** Ila bdiiti b l-wa9t, l-fa3il kaymchi men b3d l-fi3l.
            2. **L-préfixe dyal trennbare Verben f l-akhir.**

            > **Am Samstag** (1) **räume** (2) ich (3) mein Zimmer **auf** (akhir).

            **S-sa3a:** halb neun = **8:30** · Viertel nach neun = 9:15 · Viertel vor neun = 8:45.
          `,
        ),
        culture(
          'Pünktlichkeit o Sonntagsruhe',
          md`
            - **Pünktlichkeit** (d-diqqa f l-wa9t) mohimma bzaf f Almaniya. Ila 3endek rendez-vous f 10, wsel f 10 — wla 9bel b chwiya. Ila ghadi t3ettel, **sift message** 9bel: "Sorry, ich komme 10 Minuten später."
            - L-7wanet ghaliban m7loulin **men 8 / 9 l 20 / 21**, o **l-7ad kolchi msdoud** (ghir chi boulangeries o l-mahattat).
            - **Sonntagsruhe:** nhar l-7ad o kol lila men 22 l 6 khass **t-tranquillité**: ma tdirch l-bruit (ma tcherjich l-perceuse, ma t3ellich l-mousi9a).
            - Bzaf d n-nas kaykteb **kalendrier** dyalhom: rendez-vous m3a s-s7ab kaydirouh 9bel b iyyam.
          `,
        ),
        dialogue(
          'Termin beim Friseur',
          [
            ['Friseurin', 'Salon Haarmonie, guten Tag!', 'Salon Haarmonie, nharek sa3id!'],
            ['Youssef', 'Guten Tag, ich möchte einen Termin, bitte.', 'Nharek sa3id, bghit rendez-vous 3afak.'],
            ['Friseurin', 'Gern. Wann haben Sie Zeit?', 'Mer7ba. Imta 3endek l-wa9t?'],
            ['Youssef', 'Am Mittwochnachmittag?', 'L-larb3 f l-3chiya?'],
            ['Friseurin', 'Mittwoch um 15 Uhr geht leider nicht. Um 16:30 Uhr ist noch frei.', 'L-larb3 f 15 ma momkinch. F 16:30 mazal khawi.'],
            ['Youssef', 'Ja, das passt.', 'Ah, hadchi mnasb.'],
            ['Friseurin', 'Wie ist Ihr Name, bitte?', 'Chno smiytek 3afak?'],
            ['Youssef', 'Benali. B – E – N – A – L – I.', 'Benali.'],
            ['Friseurin', 'Gut, Herr Benali. Also Mittwoch, halb fünf. Bis dann!', 'Mzyan a si Benali. Iwa l-larb3, 4:30. 7tal dak l-wa9t!'],
          ],
        ),
        choice('Imta l-rendez-vous dyal Youssef?', ['L-larb3, 15:00', 'L-larb3, 16:30', 'L-khmis, 16:30'], 1),
        gap('Kemmel', 'Der Termin ist ___ Mittwoch ___ halb fünf.', ['am', 'um']),
        order('Rtteb', 'Am Wochenende schlafe ich lange.'),
        speak(
          'Role-play: rendez-vous m3a sa7bek',
          'Sa7bek kay9ollek: *"Hast du am Freitag Zeit? Wir gehen ins Kino."* Rfed (3ti s-sabab), o 9tare7 nhar o sa3a khra.',
          ['Tut mir leid, am Freitag habe ich keine Zeit.', 'Da arbeite ich bis acht Uhr.', 'Geht es am Samstag um sieben?'],
        ),
        graded(choice('"Viertel nach elf" = ch7al?', ['10:45', '11:15', '11:45'], 1)),
        graded(choice('"halb neun" = ch7al?', ['9:30', '8:30', '9:00'], 1)),
        graded(gap('Kemmel (anrufen)', 'Am Abend ___ ich meine Mutter ___.', ['rufe', 'an'])),
        graded(choice('Ina jomla s7i7a?', ['Morgen ich fahre nach Bonn.', 'Morgen fahre ich nach Bonn.', 'Ich morgen fahre nach Bonn.'], 1)),
        graded(gap('Kemmel', 'Die Bank ist ___ 9 ___ 16 Uhr geöffnet.', ['von', 'bis'])),
        graded(order('Rtteb', 'Wann fängt der Film an?')),
        graded(choice('"Tut mir leid, da habe ich keine Zeit." — hadi…', ['9bel', 'rfed', 'sou2al'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Nhar s-sebt kantsewwe9.', ['Am Samstag kaufe ich ein.'])),
        graded(dictation('Sme3 o kteb s-sa3a b l-ar9am', 'zehn Uhr zwanzig', undefined, ['10:20', '10.20'])),
        graded(choice('Nhar l-7ad f Almaniya…', ['L-7wanet m7loulin', 'Ktar l-7wanet msdoudin', 'Ghir s-supermarchés m7loulin'], 1)),
        summary(
          [
            'Daba t9der tgoul s-sa3a, thder 3la n-nhar dyalek o tdir rendez-vous.',
            '**Fi3l f 2, préfixe f l-akhir** — had 9a3ida ghadi tb9a m3ak 7tal B2!',
            'F l-unité 6: l-hobbies, t-t9s, "gern / lieber", l-af3al li kayt-beddel l-7arf (fahren → du fährst) o "können".',
          ],
          ['Tgoul s-sa3a', 'Thder 3la n-nhar dyalek', 'Tkhdem trennbare Verben', 'Tdir rendez-vous'],
          'Khlasa dyal l-unité 5',
        ),
      ],
    },
  ],
});
