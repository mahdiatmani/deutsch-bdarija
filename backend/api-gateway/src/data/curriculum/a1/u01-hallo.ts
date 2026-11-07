import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 1,
  title: 'Hallo! Ich bin …',
  description: "Tsellem 3la n-nas, t9eddem rasek, tgoul mnin nta o ch7al men logha kat3ref, o tsbelli smiytek.",
  icon: 'waving_hand',
  objectives: [
    'Tsellem o twadda3 f ay wa9t dyal n-nhar',
    'T9eddem rasek: smiytek, mnin nta, fin saken',
    'Tsowwel chi wa7ed 3la smiytou o mnin howa',
    'T3ref imta tgoul "du" o imta tgoul "Sie"',
    'Tsbelli (buchstabieren) smiytek b l-alphabet l-almani',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Guten Tag! — Tsellem o t9eddem rasek',
      description: 'Awwel nhar f l-cours: kifach tsellem, kifach t9eddem rasek o kifach tsowwel l-akhrin.',
      minutes: 20,
      kind: 'input',
      goals: ['Tsellem b "Hallo" wla "Guten Tag"', 'Tgoul smiytek o mnin nta', 'Tsowwel: "Wie heißen Sie?" / "Woher kommen Sie?"'],
      steps: [
        intro(
          'Awwel nhar f Köln',
          md`
            **Youssef** 3endou 24 3am, ja men **Casablanca** l **Köln** f Almaniya bach yt3llem l'Almaniya o ydir Ausbildung.
            Lyouma howa awwel nhar dyalou f l-cours. F l-9esm kayna **Frau Weber**, l-oustada, o **Salma**, bent men Fès.

            Sme3 kifach kaysellmou 3la ba3dhom o kifach kay9eddmou rashom. Ma t9le9ch ila ma fhemtich kolchi: ghadi nchar7ou kolchi khatwa b khatwa.
          `,
          ['Tsellem 3la n-nas', 'Tgoul smiytek', 'Tgoul mnin nta', 'Tsowwel l-akhor 3la smiytou o blad dyalou'],
        ),
        dialogue(
          'Im Deutschkurs — F l-cours',
          [
            ['Frau Weber', 'Guten Morgen! Ich bin Frau Weber, Ihre Lehrerin.', "Sba7 l-khir! Ana Frau Weber, l-oustada dyalkom."],
            ['Youssef', 'Guten Morgen, Frau Weber! Ich heiße Youssef.', 'Sba7 l-khir a Frau Weber! Smiyti Youssef.'],
            ['Frau Weber', 'Freut mich, Youssef. Woher kommen Sie?', 'Metcharfin a Youssef. Mnin nta?'],
            ['Youssef', 'Ich komme aus Marokko, aus Casablanca.', 'Ana men l-Maghrib, men Casablanca.'],
            ['Frau Weber', 'Und Sie? Wie heißen Sie?', 'O nti? Chno smiytek?'],
            ['Salma', 'Ich heiße Salma. Ich komme auch aus Marokko, aus Fès.', 'Smiyti Salma. Ta ana men l-Maghrib, men Fès.'],
            ['Youssef', 'Hallo Salma! Freut mich.', 'Salam a Salma! Metcharfin.'],
            ['Salma', 'Hallo Youssef! Freut mich auch.', 'Salam a Youssef! Ta ana metcharfa.'],
          ],
          'Sme3 l-hiwar kamel, o men b3d sme3 kol jomla bou7dha. Kliki 3la "Werri b Darija" ila bghiti t-terjama.',
        ),
        vocab('Kalimat dyal s-salam', [
          ['Hallo!', 'Salam! (m3a s-s7ab o n-nas li kat3refhom)', '', ['Hallo, Salma!', 'Salam a Salma!']],
          ['Guten Morgen!', 'Sba7 l-khir! (men s-sba7 7tal ~11)', '', ['Guten Morgen, Frau Weber!', 'Sba7 l-khir a Frau Weber!']],
          ['Guten Tag!', "Nharek sa3id! (f n-nhar, rasmi)", '', ['Guten Tag, Herr Becker!', 'Nharek sa3id a Herr Becker!']],
          ['Guten Abend!', "Msa l-khir! (men l-3chiya)", ''],
          ['Gute Nacht!', 'Tsba7 3la khir! (9bel n-n3as)', ''],
          ['Tschüss!', 'Bslama! (m3a s-s7ab)', ''],
          ['Auf Wiedersehen!', 'Bslama! (rasmi)', ''],
          ['Freut mich!', 'Metcharfin! / Metcharfa!', ''],
          ['die Lehrerin', 'l-oustada', 'die Lehrerinnen'],
          ['der Lehrer', 'l-oustad', 'die Lehrer'],
          ['Herr …', 'Si … / L-mousiou … (l r-rjel)', '', ['Herr Becker', 'Si Becker']],
          ['Frau …', 'Lalla … / Madame … (l l-mra)', '', ['Frau Weber', 'Madame Weber']],
        ]),
        explain(
          'Kifach tsellem: 3la 7sab l-wa9t o 3la 7sab chkoun',
          md`
            F l'Almaniya kayn **s-salam li kayt-beddel m3a l-wa9t** o kayn **s-salam li dima s7i7**:

            | Imta? | Rasmi (m3a n-nas li ma kat3refhomch) | M3a s-s7ab o l-3a2ila |
            |---|---|---|
            | S-sba7 | "Guten Morgen!" | "Morgen!" / "Hallo!" |
            | N-nhar | "Guten Tag!" | "Hallo!" |
            | L-3chiya | "Guten Abend!" | "Hallo!" |
            | Bach tmchi | "Auf Wiedersehen!" | "Tschüss!" / "Bis bald!" |
            | 9bel n-n3as | "Gute Nacht!" | "Gute Nacht!" |

            - "Hallo" b7al *salam*: t9der tgoulha l ay wa7ed tagriban, walakin f l-bureau wla l-idara "Guten Tag" a7ssen.
            - "Gute Nacht" **machi** salam dyal l-lil: katgoulha ghir 9bel ma tn3es (b7al *tsba7 3la khir*).
          `,
          [
            ['Guten Tag, Frau Weber!', 'Nharek sa3id a Madame Weber!'],
            ['Hallo, Youssef! Wie geht’s?', 'Salam a Youssef! Labas?'],
            ['Tschüss, bis morgen!', 'Bslama, 7tal ghedda!'],
          ],
          'Ila ma 3reftich chno tgoul, goul **"Guten Tag"** wla **"Hallo"**: b jouj dima mzyanin f n-nhar.',
        ),
        explain(
          'T9eddem rasek: 3 jmel li khassek',
          md`
            Bach t9eddem rasek kafi t3ref had l-jmel:

            | Bach tgoul… | B l'Almaniya |
            |---|---|
            | Smiyti … | "Ich heiße …" / "Ich bin …" / "Mein Name ist …" |
            | Ana men … | "Ich komme aus …" |
            | Saken f … | "Ich wohne in …" |

            O bach tsowwel l-akhor:

            | Rasmi (Sie) | M3a s-s7ab (du) |
            |---|---|
            | "Wie heißen Sie?" | "Wie heißt du?" |
            | "Woher kommen Sie?" | "Woher kommst du?" |
            | "Wo wohnen Sie?" | "Wo wohnst du?" |

            Rd l-bal: **"Woher?"** = mnin? (blad) — **"Wo?"** = fin? (fin saken daba).
          `,
          [
            ['Ich heiße Youssef. Ich komme aus Marokko.', 'Smiyti Youssef. Ana men l-Maghrib.'],
            ['Ich wohne in Köln.', 'Saken f Köln.'],
            ['Wie heißt du? — Ich bin Salma.', 'Chno smiytek? — Ana Salma.'],
            ['Woher kommen Sie? — Aus Marokko.', 'Mnin nta? — Men l-Maghrib.'],
          ],
        ),
        culture(
          '"du" wla "Sie"?',
          md`
            F l'Almaniya kaynin **jouj d *nta/nti***:

            - **du** = m3a l-3a2ila, s-s7ab, d-drari s-sghar, o ghaliban m3a z-zmala f l-cours.
            - **Sie** (dima b S kbira) = rasmi: l-oustad, t-tbib, l-idara, l-patron, n-nas li ma kat3refhomch.

            Ila ma 3reftich, bda b **Sie**. Ila l-akhor 9al lik "Wir können uns duzen" (n9adrou ntkalmou b "du"), daba t9der tgoul **du**.

            F l-chamal dyal Almaniya kaygoulou bzaf **"Moin!"** f blast "Hallo", o f l-jnoub o f l-Nimsa kaygoulou **"Grüß Gott!"** wla **"Servus!"**.
          `,
        ),
        pron(
          'Nte9 mzyan',
          'Sme3 o 3awed b sout 3ali. Kliki 3la l-boutona s-sghira bach tsme3 b chwiya.',
          [
            ['Guten Morgen', 'L-"r" f "Morgen" khfifa, kat-khrej men l-7al9 b7al "gh" khfifa.'],
            ['Tschüss', '"tsch" = "tch" (b7al "tchay"), o "ü" = goul "i" o dir chfatek b7al "ou".'],
            ['Ich heiße', '"ei" katnte9ha "ay" (b7al "ay" f "aywa"), o "ß" = "ss".'],
            ['Freut mich', '"eu" katnte9ha "oy" b7al "boy" b l-ingliziya.'],
            ['Woher kommen Sie?', '"Sie" katnte9ha "zi": "s" 9bel l-7arf l-mte7ark katwelli "z".'],
          ],
        ),
        match('Rbet s-salam m3a l-ma3na dyalou', [
          ['Guten Morgen!', 'Sba7 l-khir!'],
          ['Guten Abend!', 'Msa l-khir!'],
          ['Gute Nacht!', 'Tsba7 3la khir!'],
          ['Auf Wiedersehen!', 'Bslama! (rasmi)'],
        ]),
        choice(
          'Ness n-nhar (13:00) f l-banka. Chno katgoul l l-mowadhef?',
          ['Guten Tag!', 'Gute Nacht!', 'Tschüss!'],
          0,
          '"Guten Tag" rasmi o mzyan f n-nhar. "Gute Nacht" ghir 9bel n-n3as, o "Tschüss" bach tmchi, machi bach tsellem.',
        ),
        choice(
          'Bghiti tsowwel l-oustada dyalek 3la smiytha. Chno katgoul?',
          ['Wie heißt du?', 'Wie heißen Sie?', 'Woher kommst du?'],
          1,
          'M3a l-oustada katkhdem **Sie** (rasmi): "Wie heißen Sie?". "Woher" kaysowwel 3la l-blad, machi 3la s-smiya.',
        ),
        choice(
          '"Woher kommst du?" — chno kaysowwel?',
          ['Fin saken?', 'Mnin nta? (men ina blad)', 'Chno smiytek?'],
          1,
          '"Woher?" = mnin? Katjaweb b "Ich komme aus …".',
        ),
        gap('Kemmel: t9eddem rasek', 'Ich ___ Salma. Ich komme ___ Marokko.', ['heiße|bin', 'aus'], '"Ich heiße" wla "Ich bin" + s-smiya. "aus" + l-blad = men.', 'Smiyti Salma. Ana men l-Maghrib.'),
        order('Rtteb l-kalimat', 'Woher kommen Sie?', 'L-kelma d s-sou2al (Woher) f l-bidaya, men b3d l-fi3l (kommen), men b3d "Sie".', { dar: 'Mnin nta? (rasmi)' }),
        order('Rtteb l-kalimat', 'Ich wohne in Köln.', undefined, { dar: 'Saken f Köln.' }),
        speak(
          'Daba nta: 9eddem rasek!',
          md`
            Tkhayyel nta f awwel nhar f l-cours. Goul **3 jmel** 3la rasek: smiytek, mnin nta, o fin saken.

            Sme3 l-model, o men b3d kliki 3la l-mic o hder.
          `,
          ['Guten Tag! Ich heiße Youssef.', 'Ich komme aus Marokko.', 'Ich wohne in Köln.'],
        ),
        graded(choice('Chno katgoul f 20:00 m3a l-jar dyalek li ma kat3refouch mzyan?', ['Guten Morgen!', 'Guten Abend!', 'Gute Nacht!'], 1, 'F l-3chiya: "Guten Abend!". "Gute Nacht" ghir 9bel n-n3as.')),
        graded(choice('Chno l-jawab s7i7 l "Wie heißen Sie?"', ['Ich komme aus Marokko.', 'Ich heiße Salma.', 'Ich wohne in Köln.'], 1)),
        graded(gap('Kemmel s-sou2al', '___ kommst du? — Aus Marokko.', 'Woher', '"Woher" = mnin (men ina blad).')),
        graded(translate('Terjem l l\'Almaniya', 'Smiyti Youssef.', ['Ich heiße Youssef.', 'Ich bin Youssef.', 'Mein Name ist Youssef.'])),
        graded(choice('M3a chkoun katkhdem "du"?', ['M3a t-tbib', 'M3a l-mowadhef f l-idara', 'M3a sa7bek'], 2, '"du" m3a s-s7ab o l-3a2ila. M3a t-tbib o l-idara: "Sie".')),
        summary(
          [
            'S-salam: **Guten Morgen / Guten Tag / Guten Abend** (rasmi), **Hallo** (3adi). Bach tmchi: **Auf Wiedersehen** / **Tschüss**.',
            'T9eddem rasek: **Ich heiße …**, **Ich komme aus …**, **Ich wohne in …**',
            'Tsowwel: **Wie heißen Sie?** / **Wie heißt du?** — **Woher kommen Sie?** — **Wo wohnen Sie?**',
            '**Sie** = rasmi, **du** = m3a s-s7ab o l-3a2ila.',
          ],
          ['Tsellem o twadda3', 'T9eddem rasek f 3 jmel', 'Tsowwel l-akhor 3la smiytou o mnin howa'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich, du, Sie — l-fi3l f l-7ader',
      description: 'Chkoun? (ich, du, er, sie, Sie) o kifach l-fi3l kayt-beddel: ich komme, du kommst… o l-fi3l "sein".',
      minutes: 25,
      kind: 'grammar',
      goals: ['T3ref d-dama2ir: ich, du, er, sie, Sie', 'Tsrref l-af3al: kommen, wohnen, heißen, lernen', 'Tsrref "sein": ich bin, du bist…', 'Tdir sou2al b W-: Wie? Wo? Woher? Was?'],
      steps: [
        intro(
          'Lach l-fi3l kayt-beddel?',
          md`
            F l-ders lowel 9elti "Ich komme aus Marokko" o sowwelti "Woher **kommst** du?" o "Woher **kommen** Sie?".
            Lach "komme", "kommst", "kommen"? 7it f l'Almaniya **l-fi3l kayt-beddel 3la 7sab chkoun li kaydir l-fi3l** — b7al f Darija: *ana **kan**ji*, *nta **kat**ji*, *houma **kay**jiw*.
          `,
          ['T3ref d-dama2ir', 'Tzid n-nihaya s-s7i7a l l-fi3l', 'Tdir sou2al b W-'],
        ),
        explain(
          'D-dama2ir (Personalpronomen)',
          md`
            | Almaniya | Darija |
            |---|---|
            | **ich** | ana |
            | **du** | nta / nti (3adi) |
            | **er** | howa |
            | **sie** | hiya |
            | **Sie** | nta / nti (rasmi, b S kbira) |

            "sie" (hiya) o "Sie" (nta rasmi) kayktbou b jouj b7al b7al f l-kalam, walakin f l-kitaba **Sie** rasmi dima b 7arf kbir.
            "ich" ma kaytketbech b 7arf kbir ghir ila kan f l-bidaya dyal j-jomla.
          `,
          [
            ['Er heißt Youssef.', 'Howa smiytou Youssef.'],
            ['Sie heißt Salma.', 'Hiya smiytha Salma.'],
            ['Wie heißen Sie?', 'Chno smiytek? (rasmi)'],
          ],
        ),
        explain(
          'L-fi3l: jder + nihaya',
          md`
            Kol fi3l f l-9amous kayji b **-en**: komm**en**, wohn**en**, lern**en**. Hada howa l-**infinitiv**.
            Bach tsrrfou: 7iyed **-en** (yb9a lik l-jder: **komm-**) o zid n-nihaya:

            | | kommen (ja) | wohnen (sken) | lernen (t3llem) |
            |---|---|---|---|
            | ich | komm**e** | wohn**e** | lern**e** |
            | du | komm**st** | wohn**st** | lern**st** |
            | er / sie | komm**t** | wohn**t** | lern**t** |
            | Sie | komm**en** | wohn**en** | lern**en** |

            Ch7al men 9a3ida f had l-jadwal:
            - **ich → -e**, **du → -st**, **er/sie → -t**, **Sie → -en** (b7al l-infinitiv).
          `,
          [
            ['Ich lerne Deutsch.', 'Kant3llem l\'Almaniya.'],
            ['Du wohnst in Köln.', 'Nta saken f Köln.'],
            ['Salma kommt aus Fès.', 'Salma men Fès.'],
          ],
          '**"heißen"** fih chwiya d l-khousousiya: "du hei**ßt**" (machi "heißst") 7it l-jder kaysali b **ß** — ma kanzidouch jouj s.',
        ),
        gap('Zid n-nihaya s-s7i7a', 'Ich wohn___ in Köln.', 'e', 'M3a **ich** n-nihaya hiya **-e**: ich wohne.', 'Saken f Köln.'),
        gap('Zid n-nihaya s-s7i7a', 'Woher komm___ du?', 'st', 'M3a **du**: **-st** → du kommst.', 'Mnin nta?'),
        gap('Zid n-nihaya s-s7i7a', 'Salma lern___ Deutsch.', 't', 'Salma = **sie** (hiya) → **-t**: sie lernt.', 'Salma kat3llem l\'Almaniya.'),
        gap('Zid n-nihaya s-s7i7a', 'Wo wohn___ Sie, Frau Weber?', 'en', '**Sie** rasmi → **-en**: Sie wohnen.', 'Fin saknin a Madame Weber?'),
        choice('Chkoun? "___ heißt Youssef."', ['Ich', 'Er', 'Sie (rasmi)'], 1, '"heißt" b **-t** → er / sie. Youssef rajel → **er**.'),
        explain(
          'L-fi3l "sein" (kan / howa)',
          md`
            "sein" howa l-fi3l l-mohim bzaf, o **ma kaytebe3ch 9a3ida**: khassek t7efdou.

            | | sein |
            |---|---|
            | ich | **bin** |
            | du | **bist** |
            | er / sie | **ist** |
            | Sie | **sind** |

            F Darija ghaliban ma kanssta3mlouch fi3l hna: *ana Youssef*, *hiya oustada*. F l'Almaniya **khass dima l-fi3l**: "Ich **bin** Youssef", "Sie **ist** Lehrerin".
          `,
          [
            ['Ich bin Youssef.', 'Ana Youssef.'],
            ['Du bist Salma, oder?', 'Nti Salma, ya ak?'],
            ['Frau Weber ist Lehrerin.', 'Madame Weber oustada.'],
            ['Sind Sie Herr Becker?', 'Wach nta Si Becker?'],
          ],
          'Ghalta kathir: "Ich Youssef" bla fi3l. Fi l\'Almaniya j-jomla **dima** fiha fi3l.',
        ),
        match('Rbet d-damir m3a "sein"', [
          ['ich', 'bin'],
          ['du', 'bist'],
          ['er', 'ist'],
          ['Sie', 'sind'],
        ]),
        gap('Kemmel b "sein"', 'Ich ___ Salma. Du ___ Youssef.', ['bin', 'bist']),
        explain(
          'Sou2al b W- o blasset l-fi3l',
          md`
            Kalimat s-sou2al f l'Almaniya kolhom kaybdaw b **W**:

            | W-Wort | Darija |
            |---|---|
            | **Wie?** | kifach? / chno (s-smiya)? |
            | **Wo?** | fin? |
            | **Woher?** | mnin? |
            | **Was?** | chno? |
            | **Wer?** | chkoun? |

            **L-9a3ida l-kbira:** f s-sou2al b W-, l-fi3l kayji **f l-blasa t-tanya**:

            | 1 | 2 (fi3l) | 3 |
            |---|---|---|
            | Woher | **kommst** | du? |
            | Wo | **wohnen** | Sie? |
            | Was | **lernst** | du? |

            F Darija kangoulou *mnin nta?* bla fi3l. F l'Almaniya khass l-fi3l: "Woher **kommst** du?".
          `,
          [
            ['Wer ist das? — Das ist Salma.', 'Chkoun hada? — Hadi Salma.'],
            ['Was lernst du? — Ich lerne Deutsch.', 'Chno kat9ra? — Kant3llem l\'Almaniya.'],
          ],
          'Rd l-bal: **Wer** = chkoun (machi "where" dyal l-ingliziya!). **Wo** = fin.',
        ),
        choice('Kemmel: "___ wohnst du? — In Köln."', ['Woher', 'Wo', 'Wer'], 1, 'Jawab "In Köln" = blasa fin saken → **Wo?**'),
        choice('Kemmel: "___ ist das? — Das ist Frau Weber."', ['Wer', 'Was', 'Wie'], 0, 'Kaysowwel 3la chakhs → **Wer?** = chkoun.'),
        order('Rtteb s-sou2al', 'Was lernst du?', 'W-Wort + fi3l + d-damir.', { dar: 'Chno kat9ra / kat3llem?' }),
        order('Rtteb j-jomla', 'Er kommt aus Marokko.', undefined, { dar: 'Howa men l-Maghrib.' }),
        translate("Terjem l l'Almaniya (b du)", 'Fin saken?', ['Wo wohnst du?']),
        graded(gap('Kemmel', 'Du ___ (kommen) aus Fès.', 'kommst')),
        graded(gap('Kemmel', 'Ich ___ (sein) Lehrerin.', 'bin')),
        graded(choice('Ina jomla s7i7a?', ['Woher du kommst?', 'Woher kommst du?', 'Woher kommen du?'], 1, 'L-fi3l f l-blasa 2, o m3a du: **kommst**.')),
        graded(gap('Kemmel', 'Frau Weber ___ (wohnen) in Köln.', 'wohnt', 'Frau Weber = sie → -t.')),
        graded(translate("Terjem l l'Almaniya", 'Salma men l-Maghrib.', ['Salma kommt aus Marokko.'])),
        graded(choice('"Wer" kay3ni…', ['fin?', 'chkoun?', 'chno?'], 1)),
        summary(
          [
            'D-dama2ir: **ich, du, er, sie, Sie**.',
            'L-fi3l = jder + nihaya: ich komm**e**, du komm**st**, er/sie komm**t**, Sie komm**en**.',
            '**sein**: ich bin, du bist, er/sie ist, Sie sind — khassek t7efdou.',
            'F s-sou2al b **W-** (wie, wo, woher, was, wer) l-fi3l f l-blasa **2**.',
          ],
          ['Tsrref af3al 3adiyin f l-7ader', 'Tkhdem "sein"', 'Tdir sou2alat b W-'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'A, B, C … Länder und Sprachen',
      description: "L-alphabet l-almani, tsbelli smiytek, l-boldan o l-loghat, o t9ra profils dyal n-nas.",
      minutes: 25,
      kind: 'skills',
      goals: ['Tnte9 l-alphabet o tsbelli smiytek', 'Tgoul ch7al men logha kat3ref', 'T9ra profil 9sir o tfhem l-ma3loumat', 'Tkteb profil 3la rasek'],
      steps: [
        intro(
          'F l-accueil dyal l-cours',
          'Youssef khass ytsejjel f l-cours. L-mowadhefa kat9ollou: "Wie schreibt man das?" (kifach katketbha?). Khass ysbelli smiytou 7arf b 7arf. Ghadi nt3allmou l-alphabet, o men b3d l-boldan o l-loghat.',
          ['Tsbelli smiytek', 'Tgoul l-blad o l-logha', 'T9ra o tkteb profil'],
        ),
        explain(
          'Das Alphabet',
          md`
            L-7rouf houma nefs l-7rouf dyal l-fransawiya, walakin **n-nouti9 mkhtalef**. Had l-7rouf houma li kaykhel3ou bzaf:

            | 7arf | Katnte9ou | 7arf | Katnte9ou |
            |---|---|---|---|
            | A | a | J | **yot** |
            | E | **é** | V | **faw** |
            | H | **ha** | W | **vé** |
            | I | i | Y | **üpsilon** |
            | U | **ou** | Z | **tsett** |

            O kaynin 4 7rouf khassin b l'Almaniya:
            - **Ä** (a-umlaut) ≈ "è", **Ö** (o-umlaut), **Ü** (u-umlaut)
            - **ß** (eszett) = "ss" twila
          `,
          undefined,
          'Ila sowlek chi wa7ed "Wie schreibt man das?", sbelli: Y – O – U – S – S – E – F. Ila kan 7arf mkerrer goul "**Doppel-S**".',
        ),
        pron(
          'Sme3 o 3awed: l-7rouf s-s3iba',
          'Had l-7rouf houma li kaytkhel3ou m3a l-fransawiya. Sme3 mzyan.',
          [
            ['J – V – W', 'yot – faw – vé (W katnte9ha b7al V dyal l-fransawiya)'],
            ['E – I', 'é – i (E machi "eu")'],
            ['Z – Y', 'tsett – üpsilon'],
            ['Ä – Ö – Ü', 'è – ö – ü: dir l-fom b7al "o/ou" o goul "é/i"'],
            ['ß', 'eszett = ss'],
          ],
        ),
        listening(
          'Wie schreibt man das? — Kifach katketbha?',
          [
            ['Frau Klein', 'Guten Tag! Wie ist Ihr Name, bitte?', 'Nharek sa3id! Chno smiytek 3afak?'],
            ['Youssef', 'Mein Name ist Youssef Benali.', 'Smiyti Youssef Benali.'],
            ['Frau Klein', 'Wie schreibt man das?', 'Kifach katketbha?'],
            ['Youssef', 'B – E – N – A – L – I.', 'B – E – N – A – L – I.'],
            ['Frau Klein', 'Danke. Und der Vorname?', 'Chokran. O s-smiya chakhsiya?'],
            ['Youssef', 'Y – O – U – Doppel-S – E – F.', 'Y – O – U – jouj S – E – F.'],
            ['Frau Klein', 'Perfekt, danke schön!', 'Mzyan, chokran bzaf!'],
          ],
          'Sme3 kifach Youssef kaysbelli smiytou. "der Vorname" = s-smiya chakhsiya, "der Nachname" = s-smiya l-3a2iliya.',
        ),
        choice('Chno s-smiya l-3a2iliya dyal Youssef?', ['Benani', 'Benali', 'Bennali'], 1, 'Sbelliha: B – E – N – A – L – I.'),
        choice('Kifach kaysbelli "ss" f Youssef?', ['zwei S', 'Doppel-S', 'S-S'], 1, '"Doppel-S" = jouj S.'),
        dictation('Sme3 o kteb s-smiya', 'Salma', 'S – A – L – M – A.'),
        vocab(
          'Länder und Sprachen — L-boldan o l-loghat',
          [
            ['Marokko', 'l-Maghrib', '', ['Ich komme aus Marokko.', 'Ana men l-Maghrib.']],
            ['Deutschland', 'Almaniya', '', ['Ich wohne in Deutschland.', 'Saken f Almaniya.']],
            ['Frankreich', 'Fransa'],
            ['Spanien', 'Sbanya'],
            ['Österreich', 'n-Nimsa'],
            ['die Schweiz', 'Swisra', '', ['Er kommt aus der Schweiz.', 'Howa men Swisra.']],
            ['die Türkei', 'Turkiya', '', ['Mehmet kommt aus der Türkei.', 'Mehmet men Turkiya.']],
            ['Arabisch', 'l-3arbiya'],
            ['Darija', 'd-Darija'],
            ['Tamazight', 'l-Amazighiya'],
            ['Deutsch', "l'Almaniya (l-logha)"],
            ['Französisch', 'l-fransawiya'],
            ['Englisch', 'l-ingliziya'],
            ['Spanisch', 'l-sbanyoliya'],
          ],
          'Ktar l-boldan bla article: "aus Marokko", "in Deutschland". Walakin chi boldan fihom **die**: "aus **der** Schweiz", "aus **der** Türkei". 7fedhom b7al ma houma.',
        ),
        explain(
          'Ch7al men logha kat3ref?',
          md`
            Bach tgoul l-loghat li kat3ref:

            - "Ich spreche Arabisch, Darija und Französisch." (kanhder…)
            - "Ich spreche ein bisschen Deutsch." (chwiya)
            - "Sprechen Sie Englisch?" / "Sprichst du Englisch?"

            Rd l-bal: m3a **du** o **er/sie** l-fi3l "sprechen" kayt-beddel: du spr**i**chst, er spr**i**cht. Ghadi nchar7ou had n-nou3 d l-af3al f l-unité 6. Daba 7fedhom b7al ma houma.

            O l-loghat **dima b 7arf kbir**: Deutsch, Arabisch, Französisch.
          `,
          [
            ['Ich spreche Arabisch und Französisch.', 'Kanhder l-3arbiya o l-fransawiya.'],
            ['Ich spreche ein bisschen Deutsch.', 'Kanhder chwiya d l\'Almaniya.'],
            ['Sprichst du Englisch? — Ja, ein bisschen.', 'Wach kat-hder l-ingliziya? — Ah, chwiya.'],
          ],
        ),
        reading(
          'Die Kursteilnehmer — N-nas li f l-cours',
          md`
            Hallo! Ich heiße Salma El Idrissi. Ich komme aus Marokko, aus Fès. Jetzt wohne ich in Köln. Ich spreche Arabisch, Darija, Französisch und ein bisschen Deutsch. Ich lerne Deutsch für das Studium.

            Guten Tag! Mein Name ist Mehmet Yılmaz. Ich komme aus der Türkei, aus Izmir. Ich wohne in Köln-Ehrenfeld. Ich spreche Türkisch, Englisch und Deutsch.

            Hallo, ich bin Olena. Ich komme aus der Ukraine. Ich wohne in Bonn. Ich spreche Ukrainisch, Russisch und Englisch. Deutsch lerne ich jetzt.
          `,
          {
            text: '9ra t-tlata d l-profils. Ma khassekch tfhem kol kelma: 9elleb ghir 3la l-ma3loumat li kaysowlouk 3liha.',
            glossary: [
              ['jetzt', 'daba'],
              ['für das Studium', 'l l-9raya f l-jami3a'],
              ['ein bisschen', 'chwiya'],
              ['auch', 'ta / 7ta'],
            ],
            dar: md`
              Salam! Smiyti Salma El Idrissi. Ana men l-Maghrib, men Fès. Daba sakna f Köln. Kanhder l-3arbiya, d-Darija, l-fransawiya o chwiya d l'Almaniya. Kant3llem l'Almaniya 3la 9bel l-jami3a.

              Nharek sa3id! Smiyti Mehmet Yılmaz. Ana men Turkiya, men Izmir. Saken f Köln-Ehrenfeld. Kanhder t-turkiya, l-ingliziya o l'Almaniya.

              Salam, ana Olena. Ana men Ukraniya. Sakna f Bonn. Kanhder l-ukraniya, r-rousiya o l-ingliziya. L'Almaniya kant3llemha daba.
            `,
          },
        ),
        choice('Fin sakna Olena?', ['In Köln', 'In Bonn', 'In Izmir'], 1),
        choice('Chkoun kayhder t-turkiya?', ['Salma', 'Mehmet', 'Olena'], 1),
        choice('Lach Salma kat3llem l\'Almaniya?', ['L l-khedma', 'L l-jami3a (das Studium)', 'L s-safar'], 1, '"Ich lerne Deutsch für das Studium."'),
        write(
          'Kteb profil dyalek',
          md`
            Kteb profil 9sir 3la rasek b7al dyal Salma o Mehmet (**4–5 jmel**):
            smiytek, mnin nta, fin saken daba, chno men logha kat3ref, o lach kat3llem l'Almaniya.
          `,
          ['S-salam (Hallo / Guten Tag)', 'Smiytek', 'Mnin nta', 'Fin saken', 'L-loghat li kat3ref'],
          'Hallo! Ich heiße Youssef Benali. Ich komme aus Marokko, aus Casablanca. Jetzt wohne ich in Köln. Ich spreche Arabisch, Darija, Französisch und ein bisschen Deutsch. Ich lerne Deutsch für die Ausbildung.',
          20,
        ),
        graded(choice('Kifach katnte9 l-7arf "W"?', ['dabliou', 'vé', 'oué'], 1, 'W katnte9ha "vé" — b7al V dyal l-fransawiya.')),
        graded(choice('Kemmel: "Mehmet kommt aus ___ Türkei."', ['die', 'der', '— (walou)'], 1, '"aus der Türkei" — 7fedha b7al ma hiya.')),
        graded(dictation('Sme3 o kteb', 'Ich spreche Arabisch.')),
        graded(translate("Terjem l l'Almaniya", 'Kanhder chwiya d l\'Almaniya.', ['Ich spreche ein bisschen Deutsch.'])),
        summary(
          [
            'L-alphabet: **J = yot, V = faw, W = vé, Z = tsett**, o **ä, ö, ü, ß**.',
            'Bach tsbelli: "Wie schreibt man das?" — "Y – O – U – Doppel-S – E – F".',
            '**Ich komme aus** Marokko / Deutschland — walakin **aus der** Schweiz / Türkei.',
            '**Ich spreche** Arabisch, Französisch und ein bisschen Deutsch.',
          ],
          ['Tsbelli smiytek', 'Tgoul l-blad o l-loghat', 'T9ra o tkteb profil 9sir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 1',
      description: "Raja3 kolchi li t3llemti f l-unité 1, tmrren 3la mawa9if 7a9i9iya, o dir t-test.",
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 s-salam, t-ta9dim o s-sou2alat', 'Ttbbe9 f mawa9if 7a9i9iya', 'Tnje7 f test dyal l-unité 1'],
      steps: [
        intro(
          'Chno t3llemti f l-unité 1?',
          'Had d-ders kayjme3 kolchi: s-salam, t-ta9dim, l-af3al (kommen, wohnen, heißen, sein), s-sou2alat b W-, l-alphabet o l-loghat. Raja3, tmrren, o f l-akhir dir t-test.',
          ['Traja3 l-unité kamla', 'Thder f mawa9if 7a9i9iya', 'Dir t-test'],
        ),
        explain(
          'Muraja3a sghira',
          md`
            | Bach… | Rasmi (Sie) | 3adi (du) |
            |---|---|---|
            | tsellem | Guten Tag! | Hallo! |
            | tsowwel 3la s-smiya | Wie heißen Sie? | Wie heißt du? |
            | tsowwel 3la l-blad | Woher kommen Sie? | Woher kommst du? |
            | tsowwel fin saken | Wo wohnen Sie? | Wo wohnst du? |
            | twadda3 | Auf Wiedersehen! | Tschüss! |

            **L-fi3l:** ich komm**e** – du komm**st** – er/sie komm**t** – Sie komm**en**.
            **sein:** ich bin – du bist – er/sie ist – Sie sind.
          `,
        ),
        dialogue(
          'Im Café — F l-9ahwa',
          [
            ['Lukas', 'Hallo! Ist hier frei?', 'Salam! Wach had l-blasa khawya?'],
            ['Youssef', 'Ja, bitte. Ich bin Youssef.', 'Ah, tfeddel. Ana Youssef.'],
            ['Lukas', 'Ich heiße Lukas. Woher kommst du?', 'Smiyti Lukas. Mnin nta?'],
            ['Youssef', 'Aus Marokko. Und du? Kommst du aus Köln?', 'Men l-Maghrib. O nta? Wach nta men Köln?'],
            ['Lukas', 'Nein, ich komme aus Hamburg. Aber ich wohne jetzt hier.', 'La, ana men Hamburg. Walakin daba saken hna.'],
            ['Youssef', 'Ich wohne auch in Köln. In der Bergstraße.', 'Ta ana saken f Köln. F Bergstraße.'],
            ['Lukas', 'Echt? Ich auch! Dann sind wir Nachbarn!', 'B s7? Ta ana! Iwa 7na jiran!'],
          ],
          'Youssef kaytlaqa b Lukas f chi café. Sme3 o chouf kifach kaythedrou b "du" 7it b jouj chbab.',
        ),
        choice('Mnin Lukas?', ['Aus Köln', 'Aus Hamburg', 'Aus Marokko'], 1, '"Ich komme aus Hamburg. Aber ich wohne jetzt hier."'),
        choice('Lach Lukas o Youssef jiran (Nachbarn)?', ['B jouj men Hamburg', 'B jouj saknin f Bergstraße', 'B jouj kay9raw f nefs l-cours'], 1),
        match('Rbet s-sou2al m3a l-jawab', [
          ['Wie heißt du?', 'Ich heiße Lukas.'],
          ['Woher kommst du?', 'Aus Hamburg.'],
          ['Wo wohnst du?', 'In der Bergstraße.'],
          ['Was sprichst du?', 'Deutsch und Englisch.'],
        ]),
        gap('Kemmel l-fi3l', 'Lukas ___ aus Hamburg. Ich ___ aus Casablanca.', ['kommt', 'komme']),
        order('Rtteb', 'Wo wohnen Sie, Herr Becker?', undefined, { dar: 'Fin saken a Si Becker?' }),
        translate("Terjem l l'Almaniya", 'Hiya smiytha Salma o hiya men Fès.', ['Sie heißt Salma und sie kommt aus Fès.', 'Sie heißt Salma und kommt aus Fès.']),
        speak(
          'Role-play: F l-accueil dyal l-cours',
          md`
            Nta f l-accueil. L-mowadhefa kat9ollek: *"Guten Tag! Wie heißen Sie? Woher kommen Sie? Wo wohnen Sie? Welche Sprachen sprechen Sie?"*
            Jaweb 3la kol sou2al b jomla kamla, o sbelli s-smiya dyalek.
          `,
          ['Guten Tag! Mein Name ist Youssef Benali.', 'B – E – N – A – L – I.', 'Ich komme aus Marokko.', 'Ich wohne in Köln.', 'Ich spreche Arabisch, Französisch und ein bisschen Deutsch.'],
        ),
        write(
          'Message l l-oustada',
          'Kteb message 9sir (WhatsApp) l Frau Weber: sellem 3liha, 9eddem rasek (smiya, blad, fin saken, l-loghat) o goul "bis morgen".',
          ['Salam rasmi (Guten Tag, Frau Weber)', 'Smiytek o mnin nta', 'Fin saken', 'L-loghat', 'Twadi3 (Bis morgen! / Viele Grüße)'],
          'Guten Tag, Frau Weber! Ich bin Salma El Idrissi. Ich komme aus Marokko, aus Fès. Ich wohne in Köln. Ich spreche Arabisch, Französisch und ein bisschen Deutsch. Bis morgen! Viele Grüße, Salma',
          25,
        ),
        graded(choice('S-sba7 f l-idara. Chno katgoul?', ['Gute Nacht!', 'Guten Morgen!', 'Tschüss!'], 1)),
        graded(choice('"Woher kommen Sie?" — ina jawab s7i7?', ['In Köln.', 'Aus Marokko.', 'Ich heiße Ali.'], 1)),
        graded(gap('Kemmel', 'Wie ___ du? — Ich heiße Mehmet.', 'heißt')),
        graded(gap('Kemmel b "sein"', 'Das ___ Frau Weber. Sie ___ Lehrerin.', ['ist', 'ist'])),
        graded(choice('Ina jomla s7i7a?', ['Wo du wohnst?', 'Wo wohnst du?', 'Wo wohnen du?'], 1)),
        graded(gap('Kemmel', 'Ich komme aus ___ Schweiz.', 'der')),
        graded(translate("Terjem (b Sie)", 'Mnin nta?', ['Woher kommen Sie?'])),
        graded(order('Rtteb', 'Ich spreche ein bisschen Deutsch.')),
        graded(choice('Ana m3a sa7bi. Bach nmchi kangoul…', ['Auf Wiedersehen!', 'Tschüss!', 'Guten Abend!'], 1)),
        graded(dictation('Sme3 o kteb', 'Woher kommst du?')),
        summary(
          [
            'Daba t9der tsellem, t9eddem rasek, o tsowwel l-akhrin — b **Sie** o b **du**.',
            'L-af3al f l-7ader: **-e, -st, -t, -en** o "sein": **bin, bist, ist, sind**.',
            'S-sou2al b W-: **l-fi3l f l-blasa 2**.',
            'F l-unité 2 ghadi tt3llem l-ar9am, r-r9em d t-tilifoun, l-3omr o kifach t3emmer formulaire.',
          ],
          [
            'Tsellem o twadda3 f ay wa9t',
            'T9eddem rasek o tsbelli smiytek',
            'Tsowwel o tjaweb 3la s-smiya, l-blad, s-sakan o l-loghat',
            'Tkteb message 9sir fih ta9dim',
          ],
          'Khlasa dyal l-unité 1',
        ),
      ],
    },
  ],
});
