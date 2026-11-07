import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 7,
  title: 'Bildung & Weiterbildung',
  description: "N-nidam t-ta3limi, l-Ausbildung l-mozdawija, t-takwin l-moustamirr o strategiyat t-ta3allom — b l-Konnektoren z-zawjiya.",
  icon: 'menu_book',
  objectives: [
    'Tchar7 n-nidam t-ta3limi f Almaniya o t9arnou m3a l-Maghrib',
    'Thder 3la l-masar t-ta3limi dyalek o l-mchari3',
    'Tkhdem l-Konnektoren z-zawjiya: nicht nur … sondern auch, sowohl … als auch, weder … noch, entweder … oder, je … desto',
    'Tfhem l-imkaniyat dyal t-takwin l-moustamirr o d-d3m',
    'Tkteb nass mo9arana',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Lernen ein Leben lang',
      description: 'L-kalimat dyal t-ta3lim o t-takwin, o kifach thder 3la l-masar dyalek.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-mosta2yat o d-diplômes', 'Thder 3la l-masar t-ta3limi dyalek', 'Tsowwel 3la t-takwin l-moustamirr'],
      steps: [
        intro(
          'Weiterbildung für Mehmet',
          'Mehmet (l-mohandis) bgha ydir **Weiterbildung** f l-énergie solaire. Youssef kayfekker f **Studium** men b3d l-Ausbildung. Kayhedrou m3a Frau Weber 3la l-imkaniyat.',
          ['Tsemmi t-ta3lim', 'Thder 3la l-masar', 'Tsowwel'],
        ),
        dialogue(
          'Welche Möglichkeiten gibt es?',
          [
            ['Mehmet', 'Frau Weber, ich möchte mich im Bereich Solarenergie weiterbilden. Aber ich arbeite Vollzeit.', 'Madame Weber, bghit ndir takwin f l-énergie solaire. Walakin kankhdem temps plein.'],
            ['Frau Weber', 'Dann ist ein berufsbegleitender Kurs ideal. Viele finden sowohl am Abend als auch am Wochenende statt.', 'Iwa cours m3a l-khedma howa l-mounasib. Bzaf menhom kaykounou f l-3chiya o ta f l-weekend.'],
            ['Mehmet', 'Und wer bezahlt das? Die Kurse sind nicht nur teuer, sondern auch lang.', 'O chkoun kaykhelles? L-cours machi ghir ghalyin, walakin ta twal.'],
            ['Frau Weber', 'Entweder Ihr Arbeitgeber beteiligt sich, oder Sie beantragen eine Förderung, zum Beispiel das Aufstiegs-BAföG.', 'Imma l-mochaghghil dyalek kaychark, wla katttleb d3m, b7al Aufstiegs-BAföG.'],
            ['Youssef', 'Und kann ich nach der Ausbildung studieren, obwohl ich kein deutsches Abitur habe?', 'O wach n9der n9ra f l-jami3a men b3d l-Ausbildung, rghm belli ma 3endich bac almani?'],
            ['Frau Weber', 'Ja! Mit einer abgeschlossenen Ausbildung und Berufserfahrung kann man in vielen Bundesländern auch ohne Abitur studieren. Je mehr Erfahrung Sie haben, desto mehr Möglichkeiten gibt es.', 'Ah! B Ausbildung kamla o tajriba mihaniya t9der t9ra f bzaf d l-wilayat 7tal bla bac. Kolma kant 3endek tajriba ktar, kolma kanou l-imkaniyat ktar.'],
          ],
        ),
        vocab('Bildung — T-ta3lim', [
          ['die Bildung', 't-ta3lim / t-tarbiya', ''],
          ['die Weiterbildung / sich weiterbilden', 't-takwin l-moustamirr / kmmel t-takwin', ''],
          ['berufsbegleitend', 'm3a l-khedma (f nefs l-wa9t)', ''],
          ['der Abschluss', 'd-diplôme / ch-chahada n-niha2iya', 'die Abschlüsse'],
          ['abschließen', 'kmmel / sala (t-takwin)', ''],
          ['die Hochschule / die Universität', 'l-jami3a', ''],
          ['die Fachhochschule', 'l-ma3had l-3ali t-tatbi9i', ''],
          ['das Semester', 's-semestre', ''],
          ['die Förderung / fördern', 'd-d3m / d3em', ''],
          ['das BAföG', 'l-min7a d l-jami3a (d3m d-dawla)', ''],
          ['das Stipendium', 'l-min7a', ''],
          ['die Qualifikation', 'l-mo2ahhil', ''],
          ['lebenslanges Lernen', 't-t3allom mada l-7ayat', ''],
          ['der Aufstieg', 't-tara99i', ''],
        ]),
        explain(
          'Thder 3la l-masar t-ta3limi',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tgoul chno 9riti | "Ich habe … studiert / eine Ausbildung als … gemacht." — "Ich habe einen Abschluss in …" |
            | tgoul l-mosta | "Mein Abschluss entspricht dem deutschen Bachelor." |
            | l-mchari3 | "Ich möchte mich im Bereich … weiterbilden." — "Ich habe vor, … zu studieren." |
            | l-asbab | "Damit ich bessere Chancen habe, …" — "um beruflich aufzusteigen" |
            | tsowwel | "Welche Voraussetzungen brauche ich?" — "Gibt es eine Förderung?" |
          `,
          [
            ['Ich habe vor, nach der Ausbildung Pflegewissenschaft zu studieren.', 'Kanwi n9ra 3oloum t-tamrid men b3d l-Ausbildung.'],
            ['Mein Diplom entspricht einem deutschen Master.', 'D-diplôme dyali kay3adel Master almani.'],
          ],
        ),
        match('Rbet', [
          ['der Abschluss', 'd-diplôme'],
          ['die Förderung', 'd-d3m'],
          ['berufsbegleitend', 'm3a l-khedma'],
          ['das Stipendium', 'l-min7a'],
          ['der Aufstieg', 't-tara99i'],
        ]),
        choice('3lach Mehmet m7taj cours "berufsbegleitend"?', ['7it kaykhdem temps plein', '7it ma 3endouch diplôme', '7it rkhis'], 0),
        choice('Wach Youssef y9der y9ra bla Abitur almani?', ['La, mosta7il', 'Ah, b Ausbildung kamla o tajriba (f bzaf d l-wilayat)'], 1),
        gap('Kemmel', 'Ich möchte mich im Bereich IT ___. (kmmel t-takwin)', 'weiterbilden'),
        order('Rtteb', 'Ich habe vor, nach der Ausbildung zu studieren.'),
        speak(
          'L-masar dyalek',
          'Hder 3la l-masar t-ta3limi dyalek (chno 9riti, d-diplôme) o 3la mchrou3 t-takwin dyalek f l-moustaqbal (3lach o kifach).',
          ['Ich habe in Marokko das Abitur gemacht und danach zwei Jahre studiert.', 'Zurzeit mache ich eine Ausbildung.', 'Ich habe vor, mich im Bereich Digitalisierung weiterzubilden.', 'Damit hätte ich bessere Chancen auf eine Leitungsposition.'],
        ),
        graded(choice('"das BAföG" howa…', ['d3m d-dawla l t-tolba', 'imti7an', 'jami3a'], 0)),
        graded(choice('"entspricht" kay3ni…', ['kay3adel', 'kayfout', 'kay9ell'], 0)),
        graded(gap('Kemmel', 'Ich habe ___, im Herbst ein Studium zu beginnen. (nwi)', 'vor')),
        graded(translate("Terjem l l'Almaniya", 'Bghit nkmmel t-takwin f l-informatique.', ['Ich möchte mich in der Informatik weiterbilden.', 'Ich möchte mich im Bereich Informatik weiterbilden.', 'Ich will mich in der Informatik weiterbilden.'])),
        summary(
          [
            '**die Weiterbildung, berufsbegleitend, der Abschluss, die Fachhochschule, die Förderung, das BAföG, das Stipendium**.',
            '**Ich habe vor, … zu … · Mein Abschluss entspricht … · Gibt es eine Förderung?**',
          ],
          ['Thder 3la l-masar t-ta3limi', 'Tsowwel 3la t-takwin l-moustamirr'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Sowohl … als auch — zweiteilige Konnektoren',
      description: 'nicht nur … sondern auch, sowohl … als auch, weder … noch, entweder … oder, zwar … aber, je … desto.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem 6 d l-Konnektoren z-zawjiya', 'T3ref t-tartib dyal l-fi3l m3a kol wa7ed', 'Tdir jmel b je … desto'],
      steps: [
        intro(
          'Jouj ajza2, ma3na wa7ed',
          md`
            Frau Weber 9alet: "**sowohl** am Abend **als auch** am Wochenende", "**Entweder** Ihr Arbeitgeber …, **oder** Sie …", "**Je** mehr Erfahrung …, **desto** mehr Möglichkeiten". Hadou **Konnektoren zawjiya**: jouj d l-ajza2 li kayrbtou jouj d l-afkar.
          `,
          ['6 d l-Konnektoren', 'T-tartib', 'je … desto'],
        ),
        explain(
          'L-Konnektoren z-zawjiya',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **nicht nur … sondern auch** | machi ghir … walakin ta | Der Kurs ist **nicht nur** teuer, **sondern auch** lang. |
            | **sowohl … als auch** | … o ta … (j-jouj) | Ich spreche **sowohl** Arabisch **als auch** Französisch. |
            | **weder … noch** | la … wla … (ta wa7ed) | Ich habe **weder** Zeit **noch** Geld. |
            | **entweder … oder** | imma … wla … | **Entweder** wir lernen heute, **oder** wir lernen morgen. |
            | **zwar … aber** | s7i7 … walakin | Das ist **zwar** schwer, **aber** interessant. |
            | **je … desto / umso** | kolma … kolma | **Je** mehr ich lerne, **desto** besser verstehe ich. |

            **weder … noch** fih n-nafi rah: ma tzidch "nicht / kein"! → "Ich habe **weder** Zeit **noch** Geld." (machi "keine Zeit")
          `,
          [
            ['Sie ist nicht nur Ärztin, sondern auch Mutter von drei Kindern.', 'Hiya machi ghir tbiba, walakin ta oumm d 3 d l-wlad.'],
            ['Weder mein Bruder noch meine Schwester wohnt in Marokko.', 'La khouya wla khti saknin f l-Maghrib.'],
          ],
        ),
        choice('"Ich trinke ___ Kaffee ___ Tee." (ta wa7ed)', ['sowohl … als auch', 'weder … noch', 'nicht nur … sondern auch'], 1),
        choice('"Er spricht ___ Deutsch ___ Englisch." (j-jouj)', ['weder … noch', 'sowohl … als auch', 'entweder … oder'], 1),
        choice('"___ du kommst jetzt, ___ ich gehe allein." (imma … wla)', ['Entweder … oder', 'Weder … noch', 'Zwar … aber'], 0),
        gap('Kemmel', 'Die Stelle ist nicht nur gut bezahlt, ___ auch interessant.', 'sondern'),
        gap('Kemmel', 'Das Studium ist ___ anstrengend, aber es macht Spaß.', 'zwar'),
        explain(
          'T-tartib dyal l-fi3l',
          md`
            Ghaliban had l-Konnektoren kayrbtou **kalimat** (machi jmel kamlin) → t-tartib ma kayt-beddelch.
            Walakin ila rbtou **jmel**:

            | Konnektor | L-jouz2 l-lowel | L-jouz2 t-tani |
            |---|---|---|
            | entweder … oder | **Entweder** (0 wla 1) | **oder** = blasa 0 → fi3l men b3d l-fa3il: "…, oder **ich gehe** allein." |
            | zwar … aber | **zwar** f l-wsat (wla blasa 1) | **aber** = blasa 0 |
            | nicht nur … sondern auch | "Er **arbeitet** nicht nur, …" | "…, **sondern** er **studiert** auch." |
            | weder … noch | **Weder** f l-blasa 1 → fi3l men b3dha | **noch** f l-blasa 1 → fi3l men b3dha: "…, **noch habe** ich Geld." |

            **je … desto** howa l-mokhtalef:
            - **je** + … + **fi3l f l-akhir** (b7al Nebensatz), **Komparativ** direct men b3d je
            - **desto** + Komparativ + **fi3l direct** + fa3il

            > **Je** länger ich in Köln **wohne**, **desto besser gefällt** mir die Stadt.
            > **Je** früher wir **anfangen**, **desto schneller sind** wir fertig.
          `,
        ),
        choice('Ina jomla s7i7a?', ['Je mehr ich übe, desto besser ich spreche.', 'Je mehr ich übe, desto besser spreche ich.', 'Je mehr übe ich, desto besser spreche ich.'], 1),
        gap('Kemmel', 'Je älter man wird, ___ weniger schläft man.', 'desto|umso'),
        gap('Kemmel (Komparativ)', 'Je ___ der Kurs ist, desto teurer ist er. (lang)', 'länger|laenger'),
        order('Rtteb', 'Je mehr Erfahrung man hat, desto bessere Chancen hat man.'),
        order('Rtteb', 'Ich habe weder Zeit noch Lust.'),
        translate("Terjem l l'Almaniya", 'Kanhder l-3arbiya o ta l-fransawiya.', ['Ich spreche sowohl Arabisch als auch Französisch.', 'Ich spreche nicht nur Arabisch, sondern auch Französisch.']),
        translate("Terjem l l'Almaniya (je … desto)", 'Kolma t3llemt ktar, kolma fhemt ktar.', ['Je mehr ich lerne, desto mehr verstehe ich.', 'Je mehr ich lerne, umso mehr verstehe ich.']),
        graded(choice('"Sie hat ___ Geschwister ___ Cousins." (walou)', ['sowohl … als auch', 'weder … noch'], 1)),
        graded(gap('Kemmel', 'Wir können ___ mit dem Zug ___ mit dem Auto fahren.', ['entweder', 'oder'])),
        graded(choice('"Er ist nicht nur intelligent, ___ auch fleißig."', ['aber', 'sondern', 'oder'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich habe weder Zeit noch keine Lust.', 'Ich habe weder Zeit noch Lust.'], 1)),
        graded(gap('Kemmel', 'Je schneller du fährst, ___ gefährlicher ist es.', 'desto|umso')),
        graded(choice('"Das Hotel war ___ teuer, aber sehr schön."', ['zwar', 'weder', 'sowohl'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Imma ghedda wla nhar l-jem3a.', ['Entweder morgen oder am Freitag.'])),
        summary(
          [
            '**nicht nur … sondern auch · sowohl … als auch · weder … noch** (bla nicht!) **· entweder … oder · zwar … aber**.',
            '**je + Komparativ … fi3l f l-akhir, desto + Komparativ + fi3l + fa3il**.',
          ],
          ['Tkhdem l-Konnektoren z-zawjiya', 'Tdir jmel b je … desto'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Das duale System — Deutschland & Marokko',
      description: 'T9ra 3la n-nidam l-mozdawij, tsme3 3la strategiyat t-ta3allom, o tkteb nass mo9arana.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem n-nidam l-mozdawij b tafasil', 'Tfhem nasa2i7 dyal t-ta3allom', 'Tkteb nass mo9arana (Almaniya – l-Maghrib)'],
      steps: [
        intro(
          'Duale Ausbildung',
          'F Almaniya ~50 % d ch-chabab kaydirou **Ausbildung**, machi l-jami3a. 3lach had n-nidam ma3rouf f l-3alam? O kifach kayt9aren m3a l-Maghrib?',
          ['Tfhem n-nidam', 'Tsme3 n-nasa2i7', 'Tkteb mo9arana'],
        ),
        reading(
          'Das duale Ausbildungssystem',
          md`
            In Deutschland beginnen jedes Jahr rund 470.000 junge Menschen eine duale Ausbildung. „Dual" bedeutet, dass die Ausbildung an zwei Lernorten stattfindet: Die Auszubildenden – kurz Azubis – lernen sowohl im Betrieb als auch in der Berufsschule. Meistens sind sie drei bis vier Tage pro Woche im Betrieb und ein bis zwei Tage in der Schule.

            Das System hat viele Vorteile. Die Azubis verdienen nicht nur von Anfang an Geld, sondern sammeln auch praktische Erfahrung. Je besser sie im Betrieb integriert sind, desto größer ist die Chance, nach der Prüfung übernommen zu werden. Für die Unternehmen ist es eine Möglichkeit, eigene Fachkräfte auszubilden.

            Es gibt aber auch Kritik: In manchen Branchen, etwa in der Gastronomie, sind die Arbeitszeiten lang und die Vergütung niedrig. Außerdem bleiben jedes Jahr zehntausende Ausbildungsplätze unbesetzt, während gleichzeitig viele Jugendliche keinen Platz finden – weil Angebot und Wünsche oft nicht zusammenpassen.

            Inzwischen interessieren sich viele Länder für das deutsche Modell. Auch in Marokko gibt es Projekte, in denen Elemente der dualen Ausbildung umgesetzt werden, zum Beispiel in der Automobilindustrie.
          `,
          {
            text: '9ra l-ma9al.',
            glossary: [
              ['der Lernort', 'blasat t-t3allom'],
              ['der Betrieb', 'l-ma3mel / ch-charika'],
              ['der/die Azubi', 'li kaydir Ausbildung'],
              ['übernommen werden', 'ytwddef (yb9a f ch-charika)'],
              ['die Branche', 'l-9ita3'],
              ['unbesetzt', 'khawi (ma t3mmerch)'],
              ['umsetzen', 'tbbe9'],
            ],
          },
        ),
        choice('Chno kay3ni "dual"?', ['Jouj d l-loghat', 'Jouj d l-blayes: ch-charika o l-madrasa', 'Jouj d s-snin'], 1),
        choice('Ch7al d l-iyyam ghaliban f ch-charika?', ['1–2', '3–4', '5'], 1),
        choice('Chno l-mochkil f chi 9ita3at?', ['L-aw9at twila o l-ajr 9lil', 'Ma kaynach l-madrasa', 'Ma kaykhelsouch'], 0),
        choice('3lach chi blayes kayb9aw khawyin?', ['Ma kaynach ch-chabab', 'L-3ard o r-raghabat ma kaytwaf9ouch', 'L-blayes ghaliyin'], 1),
        listening(
          'Podcast: Besser lernen',
          [
            ['Sprecherin', 'Willkommen zu „Besser lernen". Heute: Wie lernt man effektiv? Tipp eins: Lernen Sie nicht stundenlang am Stück. Je kürzer und regelmäßiger die Einheiten sind, desto mehr bleibt im Kopf.', 'Mer7ba f "T3llem a7ssen". Lyouma: kifach tt3llem b fa3aliya? Nasi7a 1: ma t9rach sa3at bla w9fa. Kolma kanou l-7isas 9sar o mntadhmin, kolma b9a ktar f r-ras.'],
            ['Sprecherin', 'Tipp zwei: Erklären Sie den Stoff jemand anderem. Wer etwas erklären kann, hat es wirklich verstanden.', 'Nasi7a 2: char7 l-mawdou3 l chi wa7ed akhor. Li 9der ychar7, rah fhem b s7.'],
            ['Sprecherin', 'Tipp drei: Testen Sie sich selbst, statt nur zu lesen. Karteikarten oder Apps helfen dabei.', 'Nasi7a 3: mte7en rasek f blast ma t9ra ghir. L-kartat wla l-applications kay3awnou.'],
            ['Sprecherin', 'Und Tipp vier: Schlafen Sie genug. Im Schlaf wird das Gelernte gespeichert – weder Kaffee noch Energydrinks können das ersetzen.', 'O nasi7a 4: n3es kafi. F n-n3as kaytkhezzen dakchi li t3llemti — la l-9ahwa wla l-energy drinks y9adrou y3wwdouh.'],
          ],
        ),
        choice('Chno a7ssen 3la 7sab l-podcast?', ['Sa3at twila m3a ba3d', '7isas 9sar o mntadhmin', 'T9ra ghir 9bel l-imti7an'], 1),
        choice('3lach t-tachri7 l chi wa7ed akhor mzyan?', ['7it li kaychar7 rah fhem b s7', '7it kayd7ek', '7it sahel'], 0),
        choice('Chno kaydir n-n3as?', ['Kaykhezzen dakchi li t3llemti', 'Kaydi3 l-wa9t', 'Walou'], 0),
        culture(
          'T-ta3lim f Almaniya: ma3loumat 3amaliya',
          md`
            - **Studium:** f l-jami3at l-3oumoumiya **ma kaynch rssoum** dyal t-ta3lim (ghir ~150–350 € f s-semestre l l-Semesterbeitrag — fih ta Semesterticket f bzaf d l-mdon). Chi wilayat (Baden-Württemberg) kaytlbou rssoum men t-tolba men barra l-Union européenne.
            - **BAföG:** d3m l t-tolba (ness mn7a, ness 9erd bla fawa2id). Chi ajanib 3endhom l-7a99 3la 7sab l-i9ama.
            - **Studienkolleg:** 3am t7diri l t-tolba li d-diplôme dyalhom ma kaykfich l l-jami3a direct.
            - **Aufstiegs-BAföG:** d3m l t-takwin l-mihani l-moustamirr (Meister, Techniker…).
            - **Bildungsurlaub:** f ktar l-wilayat, 5 iyyam f l-3am l t-takwin m3a l-ajr.
          `,
        ),
        pron(
          'Ritm dyal l-Konnektoren z-zawjiya',
          'F "sowohl … als auch", "nicht nur … sondern auch" — dir l-accent 3la j-jouj d l-afkar li kat9arnhom.',
          [
            ['sowohl Arabisch als auch Französisch', 'accent 3la "Arabisch" o "Französisch"'],
            ['nicht nur teuer, sondern auch lang', 'accent 3la "teuer" o "lang"'],
            ['Je mehr ich lerne, desto mehr verstehe ich.', 'accent 3la "mehr" j-jouj'],
          ],
        ),
        write(
          'Mo9arana: t-ta3lim f Almaniya o l-Maghrib',
          md`
            Kteb nass (~150 kelma) kat9aren fih t-takwin l-mihani (wla l-jami3a) f Almaniya o f l-Maghrib. Struktura: **bidaya — l-awjouh d t-tachaboh — l-ikhtilafat — ra2yek**.
            Khdem **4 Konnektoren zawjiya** (sowohl … als auch, nicht nur … sondern auch, weder … noch, je … desto, zwar … aber).
          `,
          ['Bidaya: l-mawdou3', 'T-tachaboh (sowohl … als auch)', 'L-ikhtilafat (während in Deutschland …, ist es in Marokko …)', 'Ra2yek (je … desto / zwar … aber)', '4 Konnektoren zawjiya'],
          'In diesem Text vergleiche ich die Berufsausbildung in Deutschland und Marokko.\n\nIn beiden Ländern kann man sowohl an einer Universität studieren als auch eine Berufsausbildung machen. Junge Menschen wählen nicht nur nach ihren Interessen, sondern auch nach den Chancen auf dem Arbeitsmarkt.\n\nEs gibt aber große Unterschiede. In Deutschland lernen Azubis zwar viel in der Berufsschule, aber den größten Teil der Zeit arbeiten sie im Betrieb und bekommen Geld. In Marokko findet die Ausbildung meistens in einem Institut statt, zum Beispiel beim OFPPT, und Praktika sind kürzer. Viele Jugendliche bekommen dort weder ein Gehalt noch einen festen Platz in einer Firma.\n\nMeiner Meinung nach ist das duale System sehr praktisch: Je mehr Erfahrung man während der Ausbildung sammelt, desto leichter findet man danach eine Stelle.',
          130,
        ),
        graded(choice('"der Betrieb" howa…', ['ch-charika / l-ma3mel', 'l-madrasa', 'l-jami3a'], 0)),
        graded(choice('F l-jami3at l-3oumoumiya f Almaniya, rssoum t-ta3lim…', ['ghaliyin bzaf', 'ghaliban ma kaynach (ghir Semesterbeitrag)', 'ghir l-alman'], 1)),
        graded(choice('"unbesetzt" kat3ni…', ['khawya', '3amra', 'ghalia'], 0)),
        graded(dictation('Sme3 o kteb', 'Die Azubis lernen sowohl im Betrieb als auch in der Berufsschule.')),
        summary(
          [
            '**Duale Ausbildung:** Betrieb + Berufsschule, khlas men l-bidaya, forsa d t-tawdhif.',
            'T-t3allom: **7isas 9sar mntadhmin, char7 l chi wa7ed, mte7en rasek, n3es kafi**.',
            'Mo9arana: **In beiden Ländern … · Während in Deutschland …, ist es in Marokko …**',
          ],
          ['Tfhem n-nidam l-mozdawij', 'Tfhem nasa2i7 dyal t-ta3allom', 'Tkteb nass mo9arana'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 7',
      description: 'Muraja3a: t-ta3lim, l-Konnektoren z-zawjiya — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Konnektoren z-zawjiya', 'Thder 3la t-ta3lim', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'T-ta3lim o t-takwin, o l-Konnektoren z-zawjiya.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **nicht nur … sondern auch** — machi ghir … walakin ta
            - **sowohl … als auch** — j-jouj
            - **weder … noch** — ta wa7ed (bla nicht/kein!)
            - **entweder … oder** — imma … wla
            - **zwar … aber** — s7i7 … walakin
            - **je + Komp. … (fi3l f l-akhir), desto + Komp. + fi3l …**
          `,
        ),
        dialogue(
          'Studium oder Ausbildung?',
          [
            ['Elif (16)', 'Papa, ich weiß nicht: Soll ich studieren oder eine Ausbildung machen?', 'Baba, ma 3reftch: wach n9ra f l-jami3a wla ndir Ausbildung?'],
            ['Mehmet', 'Beides hat Vorteile. Mit einer Ausbildung verdienst du zwar früher Geld, aber mit einem Studium hast du später oft mehr Möglichkeiten.', 'J-jouj fihom mzaya. B l-Ausbildung kat9bed l-flous bekri, walakin b l-jami3a ghaliban 3endek imkaniyat ktar men b3d.'],
            ['Elif', 'Ich interessiere mich sowohl für Technik als auch für Design.', 'Kayhemmni t-te9niya o ta d-design.'],
            ['Mehmet', 'Dann mach doch ein Praktikum! Je mehr du ausprobierst, desto besser weißt du, was du willst.', 'Iwa dir stage! Kolma jerrbti ktar, kolma 3refti mzyan chno bghiti.'],
          ],
        ),
        choice('Chno kayhemm Elif?', ['Ghir t-te9niya', 'T-te9niya o d-design', 'Walou'], 1),
        choice('Chno nse7ha bbaha?', ['T9ra f l-jami3a direct', 'Tdir stage', 'Tdir Ausbildung'], 1),
        gap('Kemmel', 'Mit einer Ausbildung verdienst du ___ früher Geld, ___ mit einem Studium hast du mehr Möglichkeiten.', ['zwar', 'aber']),
        match('Rbet', [
          ['sowohl', 'als auch'],
          ['weder', 'noch'],
          ['entweder', 'oder'],
          ['nicht nur', 'sondern auch'],
          ['je', 'desto'],
        ]),
        speak(
          'Role-play: nasi7a f t-ta3lim',
          'Sa7bek mtrdded: ydir Ausbildung f l-mécanique wla y9ra l-génie f l-jami3a. 3tih ra2yek b 3 Konnektoren zawjiya.',
          ['Eine Ausbildung ist zwar kürzer, aber ein Studium bietet mehr Chancen.', 'Du kannst sowohl in der Werkstatt als auch im Büro arbeiten.', 'Je mehr du dich informierst, desto leichter wird die Entscheidung.'],
        ),
        graded(choice('"Er hat ___ Auto ___ Fahrrad." (walou)', ['weder … noch', 'sowohl … als auch'], 0)),
        graded(gap('Kemmel', 'Sie spricht nicht nur Deutsch, ___ auch Japanisch.', 'sondern')),
        graded(choice('Ina jomla s7i7a?', ['Je öfter ich übe, desto sicherer ich werde.', 'Je öfter ich übe, desto sicherer werde ich.'], 1)),
        graded(gap('Kemmel', 'Wir fahren ___ nach Spanien ___ nach Italien – das entscheiden wir morgen.', ['entweder', 'oder'])),
        graded(choice('"sowohl … als auch" kay3ni…', ['ta wa7ed', 'j-jouj', 'imma … wla'], 1)),
        graded(choice('"das Stipendium" howa…', ['l-min7a', 'l-ajr', 's-semestre'], 0)),
        graded(choice('"Azubi" howa…', ['t-taleb f l-jami3a', 'li kaydir Ausbildung', 'l-oustad'], 1)),
        graded(choice('"Ich habe vor, … zu …" kat3ni…', ['kanwi', 'dert', 'ma bghitch'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kolma kanet l-cours twil, kolma kan ghali.', ['Je länger der Kurs ist, desto teurer ist er.', 'Je länger der Kurs, desto teurer ist er.'])),
        graded(dictation('Sme3 o kteb', 'Ich habe weder Zeit noch Geld für einen Kurs.')),
        summary(
          [
            'Daba t9der thder 3la t-ta3lim, t9aren n-nidamat o tkhdem l-Konnektoren z-zawjiya.',
            'F l-unité 8: s-safar o t-tan99ol — **l-af3al m3a prépositions** (b tafasil) o **ohne … zu / statt … zu**.',
          ],
          ['Thder 3la t-ta3lim o t-takwin', 'Tkhdem l-Konnektoren z-zawjiya', 'Tkteb nass mo9arana'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
