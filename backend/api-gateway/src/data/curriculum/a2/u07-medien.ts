import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 7,
  title: 'Medien & Freizeit',
  description: "L-internet, l-aflam o s-séries, l-7aflat o l-anchita — o n-nihayat dyal s-sifa men b3d ein / kein / mein o bla article.",
  icon: 'smart_display',
  objectives: [
    'Thder 3la l-isti3mal dyal l-médias',
    'Tnse7 b film, série wla nachat',
    'Tzid n-nihaya s7i7a men b3d ein / kein / mein: "ein guter Film"',
    'Tzid n-nihaya bla article: "frische Milch"',
    'Tsowwel b "Was für ein …?" o "Welcher …?"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Streamen, posten, teilen',
      description: 'L-médias, l-internet o kifach tnse7 b chi 7aja.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-médias o l-anchita dyal l-internet', 'Thder 3la l-3adat dyalek', 'Tnse7 b film wla série'],
      steps: [
        intro(
          'Série jdida',
          'Lukas mdmen 3la série almaniya jdida. Bgha Youssef ytfarrej m3ah — "Das ist gut für dein Deutsch!" O Salma kathder 3la l-waqt li katdouz f l-hatif.',
          ['Tsemmi l-médias', 'Thder 3la l-3adat', 'Tnse7'],
        ),
        dialogue(
          'Eine tolle Serie',
          [
            ['Lukas', 'Youssef, kennst du „Dark"? Das ist eine deutsche Serie.', 'Youssef, wach kat3ref "Dark"? Série almaniya.'],
            ['Youssef', 'Nein. Was für eine Serie ist das?', 'La. Ach men série?'],
            ['Lukas', 'Ein spannender Krimi mit Zeitreisen. Total verrückt! Ich kann sie dir wirklich empfehlen.', 'Krimi m-chew-wqa fih s-safar f z-zman. M-hboula! Kanse7ek biha b s7.'],
            ['Youssef', 'Mit Untertiteln? Mein Deutsch ist noch nicht so gut.', 'B s-sous-titres? L\'Almaniya dyali mazal machi mzyana bzaf.'],
            ['Lukas', 'Klar, mit deutschen Untertiteln. Das ist eine gute Übung!', 'Akid, b sous-titres almaniya. Hada tamrin mzyan!'],
            ['Salma', 'Ihr Serien-Fans! Ich habe gelesen, dass Studenten jeden Tag fünf Stunden am Handy sind.', 'Ntouma l-mhboulin b s-séries! 9rit belli t-tolba kaydouzou 5 sa3at kol nhar f t-tilifoun.'],
            ['Lukas', 'Fünf Stunden? Ich glaube, bei mir sind es noch mehr …', '5 sa3at? Kandenn 3endi ktar…'],
          ],
        ),
        vocab('Medien — L-médias', [
          ['die Nachrichten (Pl.)', 'l-akhbar', ''],
          ['die Zeitung', 'l-jarida', 'die Zeitungen'],
          ['die Zeitschrift', 'l-majalla', ''],
          ['die Serie', 's-série', 'die Serien'],
          ['der Untertitel', 's-sous-titre', 'die Untertitel'],
          ['der Podcast', 'l-podcast', ''],
          ['die App', 'l-application', 'die Apps'],
          ['soziale Medien (Pl.)', 'r-rézo / l-médias l-ijtima3iya', ''],
          ['streamen', 'tfarrej online (streaming)', ''],
          ['herunterladen', 'télécharger', ''],
          ['posten / teilen', 'nchr / partager', ''],
          ['der Kommentar', 't-ta3li9', ''],
          ['online ↔ offline', 'mconnecté ↔ machi mconnecté', ''],
          ['spannend', 'fih t-tachwi9 / kaychedd'],
          ['langweilig', 'mmell'],
          ['lustig / witzig', 'kayd7ek'],
        ]),
        explain(
          'Tnse7 b chi 7aja',
          md`
            | Bach… | Katgoul |
            |---|---|
            | tnse7 | "Ich kann dir den Film empfehlen." — "Du musst unbedingt … sehen!" |
            | tgoul 3lach | "Er ist sehr spannend / lustig." — "Die Schauspieler sind super." |
            | tsowwel | "Was für ein Film ist das?" — "Worum geht es?" (*3la ach kaydour?*) |
            | jawab | "Es geht um eine Familie in …" — "Das ist ein Krimi / eine Komödie / ein Drama." |
            | tgoul ra2yek | "Das klingt gut!" — "Das ist nichts für mich." |

            **Anwa3:** der Krimi (bolissi), die Komödie, das Drama, der Liebesfilm, der Actionfilm, der Horrorfilm, der Dokumentarfilm, der Zeichentrickfilm (dessin animé).
          `,
          [
            ['Worum geht es in der Serie?', '3la ach kaydour s-série?'],
            ['Es geht um eine Ärztin in Berlin.', 'Kaydour 3la tbiba f Berlin.'],
            ['Das klingt interessant!', 'Hadchi kayban mochawwi9!'],
          ],
        ),
        match('Rbet', [
          ['die Nachrichten', 'l-akhbar'],
          ['herunterladen', 'télécharger'],
          ['spannend', 'kaychedd'],
          ['langweilig', 'mmell'],
          ['der Untertitel', 's-sous-titre'],
        ]),
        choice('Chno nou3 d s-série "Dark"?', ['Komödie', 'Krimi', 'Liebesfilm'], 1),
        choice('3lach Lukas kaynse7 b s-série?', ['7it sahla', '7it hiya tamrin mzyan l l\'Almaniya o mochawwi9a', '7it 9sira'], 1),
        gap('Kemmel', 'Ich kann ___ den Film empfehlen. (nta)', 'dir'),
        gap('Kemmel', 'Worum ___ es in dem Buch?', 'geht'),
        order('Rtteb', 'Du musst unbedingt diese Serie sehen.'),
        speak(
          'Nse7 sa7bek',
          'Nse7 sa7bek b film wla série kat7ebbha: chno smiytha, chno n-nou3, 3la ach kaddour, o 3lach 3jbatek.',
          ['Ich kann dir den Film „Die Welle" empfehlen.', 'Das ist ein Drama.', 'Es geht um eine Schulklasse.', 'Er ist sehr spannend.'],
        ),
        graded(choice('"die Zeitung" hiya…', ['l-majalla', 'l-jarida', 's-série'], 1)),
        graded(choice('Bach tsowwel 3la l-mawdou3 dyal film:', ['Worum geht es?', 'Wo ist es?', 'Wer bist du?'], 0)),
        graded(choice('"Das ist nichts für mich." kat3ni…', ['Hadchi ma kaye3jebnich', 'Hadchi fabor', 'Hadchi dyali'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kanse7ek b had l-ktab.', ['Ich kann dir das Buch empfehlen.', 'Ich empfehle dir das Buch.', 'Ich empfehle dir dieses Buch.'])),
        summary(
          [
            'L-médias: **die Nachrichten, die Serie, der Podcast, soziale Medien, streamen, posten, teilen**.',
            'Tnse7: **Ich kann dir … empfehlen. Du musst unbedingt … sehen!**',
            '**Worum geht es? — Es geht um …**',
          ],
          ['Thder 3la l-médias', 'Tnse7 b film wla série'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'ein spannender Film — Adjektivendungen II',
      description: 'N-nihayat dyal s-sifa men b3d ein / kein / mein, o bla article — o Was für ein? / Welcher?',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tzid n-nihaya men b3d ein / kein / mein', 'Tzid n-nihaya bla article', 'Tfre9 bin "Was für ein?" o "Welcher?"'],
      steps: [
        intro(
          '"ein spannender Krimi" — 3lach -er?',
          md`
            F l-unité 6: "**der** spannend**e** Krimi". Daba Lukas 9al: "**ein** spannend**er** Krimi". 3lach nihaya mkhtalfa?
            L-article **"ein"** ma kaygoulch dima l-jins (ein = masculin wla neutre). Dakchi 3lach **s-sifa hiya li katgoulou**: -er = der, -es = das.
          `,
          ['Men b3d ein / kein / mein', 'Bla article', 'Was für ein? / Welcher?'],
        ),
        explain(
          'Men b3d ein / kein / mein …',
          md`
            | | der (m) | die (f) | das (n) | jam3 (kein / mein…) |
            |---|---|---|---|---|
            | Nom. | ein spannend**er** Film | eine gut**e** Serie | ein toll**es** Konzert | meine neu**en** Freunde |
            | Akk. | einen spannend**en** Film | eine gut**e** Serie | ein toll**es** Konzert | meine neu**en** Freunde |
            | Dat. | einem spannend**en** Film | einer gut**en** Serie | einem toll**en** Konzert | meinen neu**en** Freunden |

            **Chno tbeddel men l-unité 6?** Ghir **3 blayes** — fin "ein" ma kaygoulch l-jins:
            - Nom. masculin: ein → s-sifa **-er** (b7al d**er**)
            - Nom. + Akk. neutre: ein → s-sifa **-es** (b7al da**s**)

            L-ba9i **b7al l-unité 6**: -e (f) o -en.
          `,
          [
            ['Das ist ein neuer Podcast.', 'Hada podcast jdid.'],
            ['Ich habe ein kleines Problem.', '3endi mochkil sghir.'],
            ['Sie hat einen tollen Job.', '3endha khedma zwina.'],
            ['Wir wohnen in einer großen Stadt.', 'Saknin f mdina kbira.'],
          ],
          'Fakker: s-sifa katakhod l-7arf l-akhir dyal **der / das** ila "ein" ma 3tahch: ein klein**er** Tisch (der), ein klein**es** Haus (das).',
        ),
        choice('"Das ist ein ___ Film." (gut)', ['gute', 'guter', 'gutes'], 1),
        choice('"Das ist ein ___ Buch." (interessant)', ['interessanter', 'interessante', 'interessantes'], 2),
        choice('"Ich suche einen ___ Job." (neu)', ['neuer', 'neuen', 'neues'], 1),
        gap('Kemmel n-nihaya', 'Sie hat eine klein___ Wohnung.', 'e'),
        gap('Kemmel n-nihaya', 'Er wohnt in einem alt___ Haus.', 'en'),
        gap('Kemmel n-nihaya', 'Das ist kein schlecht___ Film! (der)', 'er'),
        gap('Kemmel n-nihaya', 'Ich habe meine neu___ Kopfhörer vergessen.', 'en'),
        explain(
          'Bla article',
          md`
            Ila ma kaynch article (ghaliban m3a l-makla, l-machroubat, l-jam3), **s-sifa katakhod n-nihaya dyal l-article** (der → -er, die → -e, das → -es…):

            | | der (m) | die (f) | das (n) | jam3 |
            |---|---|---|---|---|
            | Nom. | gut**er** Kaffee | frisch**e** Milch | kalt**es** Wasser | neu**e** Filme |
            | Akk. | gut**en** Kaffee | frisch**e** Milch | kalt**es** Wasser | neu**e** Filme |
            | Dat. | mit gut**em** Kaffee | mit frisch**er** Milch | mit kalt**em** Wasser | mit neu**en** Filmen |

            F A2 l-mohim howa **Nominativ o Akkusativ**: "Ich trinke gern **heißen** Tee." "**Frisches** Brot ist lecker." "Hier gibt es **günstige** Wohnungen."
          `,
          [
            ['Ich mag deutschen Käse.', 'Kan7ebb l-fromage l-almani.'],
            ['Kaltes Wasser, bitte!', 'Ma bared 3afak!'],
            ['Hier gibt es gute Restaurants.', 'Hna kaynin restaurants mzyanin.'],
          ],
        ),
        choice('"Ich trinke gern ___ Tee." (heiß, der, Akk.)', ['heißer', 'heißen', 'heißes'], 1),
        choice('"___ Brot schmeckt am besten." (frisch, das)', ['Frischer', 'Frische', 'Frisches'], 2),
        gap('Kemmel n-nihaya', 'Im Sommer trinke ich kalt___ Limonade. (die)', 'e'),
        explain(
          'Was für ein? o Welcher?',
          md`
            - **Was für ein …?** = *ach men nou3?* (s-sifa / l-khasa2is): "**Was für einen** Film möchtest du sehen?" — "Einen lustigen."
            - **Welcher …?** = *ina wa7ed?* (men majmou3a m3rouda): "**Welchen** Film möchtest du sehen? Den um 18 Uhr oder den um 20 Uhr?" — "Den um 20 Uhr."

            "Was für ein" kaytbe3 "ein" f l-i3rab: **Was für einen** Film? (Akk., der) · **Was für eine** Serie? · **Was für ein** Konzert? · Jam3: **Was für** Filme? (bla ein)
          `,
          [
            ['Was für eine Musik hörst du gern? — Rap und Gnawa.', 'Ach men mousi9a kat7ebb tsme3? — Rap o gnawa.'],
            ['Welche Jacke nimmst du, die blaue oder die schwarze?', 'Ina jacket ghadi takhod, z-zre9a wla l-k7la?'],
          ],
        ),
        choice('"___ Film ist das?" — "Ein Krimi."', ['Welcher', 'Was für ein'], 1),
        choice('"___ Bus fährt zum Bahnhof, der 5 oder der 7?"', ['Welcher', 'Was für ein'], 0),
        gap('Kemmel', 'Was für ___ Auto hast du? (das Auto)', 'ein'),
        order('Rtteb', 'Was für einen Film möchtest du sehen?'),
        translate("Terjem l l'Almaniya", '3endi khedma jdida.', ['Ich habe einen neuen Job.', 'Ich habe eine neue Arbeit.', 'Ich habe eine neue Stelle.']),
        graded(choice('"Mein Bruder hat ein ___ Auto." (rot)', ['roter', 'rote', 'rotes'], 2)),
        graded(choice('"Das ist ein ___ Tag!" (schön)', ['schöne', 'schöner', 'schönen'], 1)),
        graded(gap('Kemmel n-nihaya', 'Wir haben einen nett___ Nachbarn.', 'en')),
        graded(gap('Kemmel n-nihaya', 'Ich trinke gern schwarz___ Kaffee. (der, Akk.)', 'en')),
        graded(choice('"___ Serie schaust du gerade?" — "Eine Komödie."', ['Welche', 'Was für eine'], 1)),
        graded(gap('Kemmel n-nihaya', 'Sie arbeitet in einer groß___ Firma.', 'en')),
        graded(translate("Terjem l l'Almaniya", 'Hada film mochawwi9.', ['Das ist ein spannender Film.'])),
        summary(
          [
            'Men b3d **ein/kein/mein**: **ein guter Film** (-er), **ein gutes Buch** (-es), **eine gute Serie** (-e) — o l-ba9i b7al der/die/das (-e / -en).',
            'Bla article: s-sifa katakhod nihayat l-article: **guter Kaffee, frische Milch, kaltes Wasser, neue Filme**.',
            '**Was für ein?** = ach men nou3 · **Welcher?** = ina wa7ed (men l-m3roudin).',
          ],
          ['Tzid n-nihayat men b3d ein / kein / mein', 'Tzid n-nihayat bla article', 'Tsowwel b Was für ein / Welcher'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Veranstaltungen & Kultur in der Stadt',
      description: 'T9ra programme dyal l-anchita, tsme3 i3lan f r-radio, o tkteb message tnse7 fih.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra programme dyal l-anchita o tl9a l-ma3loumat', 'Tfhem i3lan f r-radio', 'T3ref chi mo2assasat t9afiya f Almaniya', 'Tkteb message fih tawsiya'],
      steps: [
        intro(
          'Chno kayn f l-weekend?',
          'Olena l9at programme dyal l-anchita f Köln. Kaynin concerts, expositions, o 7ta 7afla maghribiya. Yallah nchoufou.',
          ['T9ra l-programme', 'Tsme3 l-i3lan', 'Tkteb tawsiya'],
        ),
        reading(
          'Veranstaltungen am Wochenende',
          md`
            Freitag, 20 Uhr — Konzert: „Gnawa meets Jazz" im Stadtgarten. Marokkanische Gnawa-Musiker spielen mit einer jungen deutschen Jazzband. Tickets: 18 €, Studierende 12 €.

            Samstag, 10–18 Uhr — Flohmarkt am Rheinufer. Über 200 Stände mit alten Möbeln, gebrauchter Kleidung und Büchern. Eintritt frei.

            Samstag, 15 Uhr — Lesung in der Stadtbibliothek: Die Autorin Leila Benali liest aus ihrem neuen Roman „Zwei Ufer". Danach gibt es ein Gespräch mit dem Publikum. Eintritt frei, Anmeldung erwünscht.

            Sonntag, 11–17 Uhr — Museumstag: Alle städtischen Museen haben heute freien Eintritt. Für Kinder gibt es ein buntes Programm.
          `,
          {
            text: '9ra l-programme o jaweb.',
            glossary: [
              ['der Stand', 'l-blasa d l-bi3 (stand)'],
              ['der Eintritt', 'd-dkhoul'],
              ['die Lesung', '9raya 3amma dyal ktab'],
              ['der Roman', 'r-riwaya'],
              ['erwünscht', 'mfdel / mtloub'],
              ['städtisch', 'dyal l-mdina'],
            ],
          },
        ),
        choice('Ch7al katkhelles taliba f l-concert?', ['18 €', '12 €', 'Fabor'], 1),
        choice('Fin t9der tchri 7wayej msta3mla?', ['F l-Stadtgarten', 'F l-Flohmarkt', 'F l-bibliothèque'], 1),
        choice('Imta l-musées fabor?', ['L-jem3a', 'S-sebt', 'L-7ad'], 2),
        choice('Chno khass tdir 9bel l-Lesung?', ['Tchri ticket', 'Ttsejjel (Anmeldung)', 'Walou'], 1),
        listening(
          'Radiowerbung',
          [
            ['Radio', 'Sie lieben gutes Essen und schöne Musik? Dann kommen Sie zum Internationalen Kulturfest im Rheinpark!', 'Kat7ebb l-makla l-mzyana o l-mousi9a z-zwina? Iwa aji l l-7afla d t-t9afat f Rheinpark!'],
            ['Radio', 'Am 14. und 15. Juni erwarten Sie über 50 Stände mit leckeren Spezialitäten aus 30 Ländern und Live-Musik von internationalen Bands.', 'F 14 o 15 younyou kaytsennawk ktar men 50 stand b l-makla l-bnina men 30 blad o mousi9a live.'],
            ['Radio', 'Für Kinder gibt es einen großen Spielplatz und ein kostenloses Kinderprogramm. Der Eintritt kostet nur fünf Euro, Kinder unter zwölf Jahren sind frei.', 'L d-drari kayn terrain kbir dyal l-l3eb o programme fabor. D-dkhoul ghir 5 euro, o d-drari t7t 12 3am fabor.'],
            ['Radio', 'Internationales Kulturfest — kommen Sie vorbei!', '7aflat t-t9afat — dewwzou!'],
          ],
        ),
        choice('Imta l-7afla?', ['14 o 15 younyou', '4 o 5 younyou', '14 o 15 youlyouz'], 0),
        choice('Ch7al d l-boldan?', ['15', '30', '50'], 1),
        choice('Ch7al d-dkhoul l weld 3endou 10 snin?', ['5 €', 'Fabor', '2,50 €'], 1),
        culture(
          'T-t9afa o l-médias f Almaniya',
          md`
            - **Rundfunkbeitrag:** kol dar katkhelles ~18 € f ch-chhar l t-tilfaza o r-radio l-3oumoumiya (ARD, ZDF, WDR…) — **wajib**, 7tal ila ma 3endekch tilfaza.
            - **Stadtbibliothek:** l-maktaba dyal l-mdina: ktouba, films, jeux… b abonnement rkhis (wla fabor l t-tolba). Kaynin ta cours dyal l\'Almaniya o "Sprachcafés".
            - **Volkshochschule (VHS):** cours rkhas f ktar men 7aja.
            - **Kulturpass / Studierendenrabatt:** b l-carte d t-taleb katkhelles 9al f l-musées o l-cinéma.
            - **Tatort:** film bolissi kayd-douz kol l-7ad f 20:15 men 1970 — bzaf d l-alman kayt-farrjou fih m3a ba3d!
          `,
        ),
        pron(
          '-ig f l-akhir = "ich"',
          'F l-akhir dyal l-kelma, **-ig** katnte9ha b7al **-ich** (ch r9i9a): wicht**ig**, lust**ig**, fert**ig**. Walakin ila zadet nihaya, l-g kayrje3: wicht**ige**.',
          [
            ['wichtig – lustig – billig', '-ich'],
            ['König – Honig', '-ich'],
            ['wichtige – lustige', 'g kayrje3'],
            ['Das ist ein lustiger Film.', 'lustiga'],
          ],
        ),
        write(
          'Tawsiya l sa7bek',
          'Kteb message l Lukas (5–7 jmel): nse7ou b chi nachat f l-weekend men l-programme (wla men l-mdina dyalek). Goul chno howa, imta, fin, b ch7al, o 3lach mzyan — khdem **3 sifat b n-nihaya s7i7a**.',
          ['Salam', 'Chno n-nachat (ein tolles Konzert / eine interessante Lesung …)', 'Imta o fin', 'T-taman', '3lach (spannend, lustig, günstig…)', 'D3awa: Kommst du mit?'],
          'Hallo Lukas! Hast du am Freitag Zeit? Im Stadtgarten gibt es ein tolles Konzert: marokkanische Gnawa-Musik mit einer jungen deutschen Jazzband. Das ist bestimmt ein interessanter Abend! Es beginnt um 20 Uhr und kostet für Studierende nur 12 Euro. Kommst du mit? Liebe Grüße, Youssef',
          45,
        ),
        graded(choice('"der Eintritt" howa…', ['l-khrouj', 'd-dkhoul (taman)', 'l-bab'], 1)),
        graded(choice('"Rundfunkbeitrag" howa…', ['abonnement Netflix', 'l-khlas l-ijbari dyal l-i3lam l-3oumoumi', 'dariba d t-tomobil'], 1)),
        graded(choice('Kifach katnte9 "wichtig"?', ['wichtik', 'wichtich', 'wichtig b g'], 1)),
        graded(dictation('Sme3 o kteb', 'Das ist ein spannender Roman.')),
        summary(
          [
            'Programme: **die Veranstaltung, der Eintritt (frei), die Lesung, der Flohmarkt, die Anmeldung**.',
            '**Rundfunkbeitrag, Stadtbibliothek, VHS** — t-t9afa f Almaniya rkhisa ila 3refti fin.',
            '-ig f l-akhir = -ich.',
          ],
          ['T9ra programme dyal l-anchita', 'Tfhem i3lan', 'Tkteb tawsiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 7',
      description: 'Muraja3a: l-médias, n-nihayat dyal s-sifa (kolhom), Was für ein / Welcher — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 n-nihayat dyal s-sifa', 'Tnse7 o tsowwel', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-médias, l-anchita, o n-nihayat dyal s-sifa: men b3d der, men b3d ein, o bla article.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'Kolchi f jadwal wa7ed (Nominativ)',
          md`
            | | der (m) | die (f) | das (n) | jam3 |
            |---|---|---|---|---|
            | der / die / das | der neu**e** | die neu**e** | das neu**e** | die neu**en** |
            | ein / kein / mein | ein neu**er** | eine neu**e** | ein neu**es** | meine neu**en** |
            | bla article | neu**er** | neu**e** | neu**es** | neu**e** |

            Akkusativ: masculin dima **-en** (den neuen, einen neuen, neuen) — l-ba9i b7al Nominativ.
            Dativ: men b3d article dima **-en**.
          `,
        ),
        dialogue(
          'Kinoabend',
          [
            ['Olena', 'Welchen Film sehen wir heute? Den französischen oder den amerikanischen?', 'Ina film ghadi nchoufou lyouma? L-fransawi wla l-amriki?'],
            ['Salma', 'Was für ein Film ist der französische?', 'Ach men film l-fransawi?'],
            ['Olena', 'Eine romantische Komödie. Und der amerikanische ist ein langer Actionfilm.', 'Comédie romantique. O l-amriki film d l-action twil.'],
            ['Salma', 'Dann lieber die Komödie. Nach einer anstrengenden Woche brauche ich etwas Lustiges!', 'Iwa a7ssen l-comédie. Men b3d simana mte33ba khassni chi 7aja kad7ek!'],
            ['Olena', 'Gute Idee. Und danach essen wir in dem kleinen Café neben dem Kino.', 'Fikra zwina. O men b3d naklou f l-café s-sghir 7da s-sinima.'],
          ],
        ),
        choice('Ach men film khtarou?', ['Film d l-action', 'Comédie romantique', 'Dokumentarfilm'], 1),
        choice('3lach?', ['Salma 3iyana o bghat chi 7aja kad7ek', 'Arkhas', '9sir'], 0),
        gap('Kemmel n-nihaya', 'Nach einer anstrengend___ Woche brauche ich etwas Lustiges.', 'en'),
        match('Rbet', [
          ['ein guter', 'Film (der)'],
          ['eine gute', 'Serie (die)'],
          ['ein gutes', 'Buch (das)'],
          ['gute', 'Filme (jam3, bla article)'],
        ]),
        speak(
          'Role-play: ach ghadi ndirou?',
          'Ntouma jouj kat9arrou chno ghadi tdirou f l-3chiya. Sowwel b **Was für ein** o **Welcher**, o 9tare7 b sifat.',
          ['Was für einen Film möchtest du sehen?', 'Einen lustigen Film, bitte.', 'Welches Kino ist näher?', 'Das kleine Kino am Ring ist am nächsten.'],
        ),
        graded(choice('"Ich habe einen ___ Laptop." (neu)', ['neue', 'neuen', 'neuer'], 1)),
        graded(choice('"Das ist ein ___ Restaurant." (teuer)', ['teures', 'teurer', 'teure'], 0)),
        graded(choice('"Ich trinke gern ___ Saft." (frisch, der, Akk.)', ['frischer', 'frischen', 'frisches'], 1)),
        graded(gap('Kemmel n-nihaya', 'Mit meinem best___ Freund gehe ich ins Kino.', 'en')),
        graded(gap('Kemmel n-nihaya', 'Das ist eine wichtig___ Nachricht.', 'e')),
        graded(choice('"___ Kleid nimmst du, das rote oder das grüne?"', ['Was für ein', 'Welches'], 1)),
        graded(choice('"Worum geht es?" kat3ni…', ['Fin kayn?', '3la ach kaydour?', 'Imta?'], 1)),
        graded(choice('"die Lesung" hiya…', ['9raya 3amma dyal ktab', 'l-maktaba', 'l-jarida'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Hiya katkhdem f charika kbira.', ['Sie arbeitet in einer großen Firma.', 'Sie arbeitet bei einer großen Firma.'])),
        graded(dictation('Sme3 o kteb', 'Ich kann dir den neuen Podcast empfehlen.')),
        summary(
          [
            'Daba t9der thder 3la l-médias, tnse7, o tzid ay nihaya s7i7a l s-sifa f l-Nominativ o l-Akkusativ.',
            'F l-unité 8: s-safar o t-tri9 — **l-prépositions dyal l-blasa** (durch, entlang, gegenüber…) o **deshalb**.',
          ],
          ['Thder 3la l-médias', 'Tnse7 b chi 7aja', 'Tzid n-nihayat dyal s-sifa', 'Tkhdem Was für ein / Welcher'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
