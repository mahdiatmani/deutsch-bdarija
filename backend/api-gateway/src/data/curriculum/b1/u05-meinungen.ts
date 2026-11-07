import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 5,
  title: 'Meinungen & Medien',
  description: "R-rézo l-ijtima3iya, l-akhbar o n-n9ach — tgoul ra2yek, twaf9 wla t3arad, o tdir frodiyat b l-Konjunktiv II.",
  icon: 'forum',
  objectives: [
    'T3ber 3la ra2yek o tdafe3 3lih b l-asbab',
    'Twaf9 wla t3arad b ladab f n-n9ach',
    'Tdir frodiyat machi wa9i3iya: "Wenn es kein Internet gäbe, …"',
    'Tfhem n9ach f r-radio 3la l-médias',
    'Tkteb ta3li9 (Stellungnahme) 9sir f forum',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Soziale Medien: Fluch oder Segen?',
      description: 'L-kalimat dyal l-médias, o Redemittel dyal r-ra2y, l-ittifa9 o l-i3tirad.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal r-rézo l-ijtima3iya', 'Tgoul ra2yek b Redemittel mtnaw3in', 'Twaf9 / t3arad b ladab'],
      steps: [
        intro(
          'N9ach f l-cours',
          'F l-cours B1, Herr Brandt 9sem l-cours jouj: wa7ed kaydafe3 3la r-rézo l-ijtima3iya, o wa7ed kaynta9edha. L-mawdou3: **"Soziale Medien: Fluch oder Segen?"** (na9ma wla ni3ma?)',
          ['Tsemmi l-kalimat', 'Tgoul ra2yek', 'Twaf9 wla t3arad'],
        ),
        dialogue(
          'Die Diskussion',
          [
            ['Herr Brandt', 'Was meinen Sie: Machen soziale Medien unser Leben besser oder schlechter?', 'Chno ra2ykom: wach r-rézo l-ijtima3iya katkhelli 7yatna a7ssen wla akhyab?'],
            ['Olena', 'Meiner Meinung nach sind sie ein Segen. Ohne WhatsApp hätte ich kaum Kontakt zu meiner Familie in der Ukraine.', 'F ra2yi hiya ni3ma. Bla WhatsApp tagriban ma kanch ykoun 3endi ittisal m3a l-3a2ila dyali f Ukraniya.'],
            ['Mehmet', 'Da stimme ich dir zu. Außerdem kann man sich schnell informieren.', 'Kanwaf9ek. O zid 3la dakchi t9der tt3erref 3la l-akhbar dghya.'],
            ['Salma', 'Das sehe ich ein bisschen anders. Es gibt so viele Fake News! Viele Leute glauben alles, was sie lesen.', 'Ana kanchouf l-umour chwiya mkhtalfa. Kaynin bzaf d l-akhbar z-zayfa! Bzaf d n-nas kaytiqou f kolchi li kay9raw.'],
            ['Youssef', 'Und die Zeit! Ich habe gelesen, dass Jugendliche im Durchschnitt vier Stunden am Tag am Handy sind.', 'O l-wa9t! 9rit belli ch-chabab kaydouzou f l-motawassit 4 sa3at f n-nhar f t-tilifoun.'],
            ['Olena', 'Das stimmt zwar, aber das ist nicht die Schuld der Medien. Jeder ist selbst verantwortlich.', 'Hadchi s7i7, walakin machi ghalta d l-médias. Kol wa7ed mas2oul 3la rasou.'],
            ['Salma', 'Da bin ich nicht ganz deiner Meinung. Die Apps sind extra so gemacht, dass man nicht aufhören kann.', 'Ana machi mtaf9a m3ak kamlan. L-applications masnou3in 3amdan bach ma t9derch tw9ef.'],
          ],
        ),
        vocab('Medien & Meinung — L-médias o r-ra2y', [
          ['die Meinung', 'r-ra2y', 'die Meinungen'],
          ['der Vorteil / der Nachteil', 'l-maziya / l-3ayb', ''],
          ['das Argument', 'l-7ojja', 'die Argumente'],
          ['die Fake News (Pl.)', 'l-akhbar z-zayfa', ''],
          ['die Quelle', 'l-masdar', 'die Quellen'],
          ['zuverlässig', 'mawthou9 bih'],
          ['die Privatsphäre', 'l-7ayat l-khassa', ''],
          ['der Datenschutz', 'l-7imaya dyal l-ma3loumat', ''],
          ['süchtig (nach)', 'mdmen (3la)', ''],
          ['beeinflussen', 'ath-thar f', ''],
          ['verantwortlich', 'mas2oul', ''],
          ['im Durchschnitt', 'f l-motawassit', ''],
          ['der Segen ↔ der Fluch', 'n-ni3ma ↔ n-na9ma', ''],
          ['überzeugen', '9ne3', ''],
        ]),
        explain(
          'Redemittel: r-ra2y, l-ittifa9 o l-i3tirad',
          md`
            | Bach… | Redemittel |
            |---|---|
            | **tgoul ra2yek** | "Meiner Meinung nach …" (+ fi3l direct) — "Ich bin der Meinung, dass …" — "Ich finde / denke / glaube, dass …" — "Aus meiner Sicht …" |
            | **twaf9** | "Da stimme ich dir zu." — "Das sehe ich genauso." — "Da hast du völlig recht." |
            | **twaf9 b jouz2** | "Das stimmt zwar, aber …" — "Einerseits …, andererseits …" |
            | **t3arad** | "Das sehe ich anders." — "Da bin ich nicht deiner Meinung." — "Ich bezweifle, dass …" |
            | **tzid 7ojja** | "Außerdem …" — "Ein weiteres Argument ist …" — "Dazu kommt, dass …" |
            | **t3ti mithal** | "Zum Beispiel …" — "Ich habe gelesen, dass …" |

            ⚠️ **"Meiner Meinung nach"** kaykhd l-blasa 1 → **l-fi3l direct**: "Meiner Meinung nach **sind** soziale Medien …"
          `,
          [
            ['Meiner Meinung nach ist das Internet unverzichtbar.', 'F ra2yi l-internet ma ymkench nst-ghnaw 3lih.'],
            ['Das stimmt zwar, aber man muss vorsichtig sein.', 'Hadchi s7i7, walakin khass tkoun 7dher.'],
          ],
        ),
        match('Rbet', [
          ['Da stimme ich dir zu.', 'Kanwaf9ek.'],
          ['Das sehe ich anders.', 'Kanchouf l-umour b chkel akhor.'],
          ['Außerdem …', 'O zid 3la dakchi …'],
          ['Ich bezweifle, dass …', 'Kanchekk belli …'],
          ['im Durchschnitt', 'f l-motawassit'],
        ]),
        choice('Chno kaychouf Olena?', ['Na9ma', 'Ni3ma (bach tb9a f l-ittisal m3a l-3a2ila)', 'Ma 3endha ra2y'], 1),
        choice('3lach Salma kat3arad?', ['L-akhbar z-zayfa o l-applications kaydmmnou', 'Ghalia', 'Bti2a'], 0),
        choice('Ina jomla s7i7a?', ['Meiner Meinung nach soziale Medien sind gefährlich.', 'Meiner Meinung nach sind soziale Medien gefährlich.'], 1),
        gap('Kemmel', 'Das stimmt ___, aber es gibt auch Nachteile.', 'zwar'),
        order('Rtteb', 'Da bin ich nicht deiner Meinung.'),
        speak(
          'Ra2yek',
          'Goul ra2yek f r-rézo l-ijtima3iya (b jouj 7ojaj), o jaweb 3la wa7ed kay3arad m3ak.',
          ['Meiner Meinung nach haben soziale Medien mehr Vorteile als Nachteile.', 'Erstens kann man mit Freunden und Familie in Kontakt bleiben.', 'Außerdem findet man schnell Informationen.', 'Das stimmt zwar, aber man sollte die Quellen prüfen.'],
        ),
        graded(choice('"die Quelle" hiya…', ['l-masdar', 'l-ma', 'l-7ojja'], 0)),
        graded(choice('Bach t3arad b ladab:', ['Das ist Quatsch!', 'Das sehe ich anders.', 'Nein!'], 1)),
        graded(choice('"süchtig" =', ['mdmen', 'mas2oul', 'mawthou9 bih'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kanwaf9ek.', ['Da stimme ich dir zu.', 'Ich stimme dir zu.', 'Das sehe ich genauso.'])),
        summary(
          [
            'L-kalimat: **die Meinung, das Argument, der Vorteil / Nachteil, die Quelle, Fake News, der Datenschutz, süchtig, beeinflussen**.',
            'Redemittel: **Meiner Meinung nach (+ fi3l) · Da stimme ich dir zu · Das stimmt zwar, aber … · Das sehe ich anders · Außerdem …**',
          ],
          ['Tgoul ra2yek', 'Twaf9 o t3arad b ladab'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wenn es kein Internet gäbe … — Konjunktiv II',
      description: 'L-Konjunktiv II l l-frodiyat: würde, wäre, hätte, gäbe, käme, wüsste…, o l-jmel l-chartiya l-ghir wa9i3iya.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tdir l-Konjunktiv II dyal l-af3al l-mohimma (gäbe, käme, wüsste…)', 'Tdir jmel chartiya ghir wa9i3iya', 'Tkhdem l-Konjunktiv II f n-n9ach (frodiyat, i9tira7at)'],
      steps: [
        intro(
          'Tkhayyel …',
          md`
            Herr Brandt sowwel: "**Was wäre, wenn es kein Internet gäbe?**" — "Ila ma kanch l-internet, chno kan ghadi y-w9e3?"
            F A2 chefna würde, wäre, hätte, könnte. F B1 nzidou chi ichkal khrin (**gäbe, käme, wüsste, müsste, dürfte**) o nkhdmou l-Konjunktiv II f n-n9ach.
          `,
          ['L-ichkal', 'Jmel chartiya', 'F n-n9ach'],
        ),
        explain(
          'L-ichkal dyal l-Konjunktiv II',
          md`
            **1. würde + infinitiv** — m3a ktar l-af3al (l-a sahl):
            > Ich **würde** weniger am Handy **sein**.

            **2. Chkel khass** (Präteritum + umlaut) — m3a af3al kathirin, khossousan f l-kitaba:

            | Infinitiv | Präteritum | **Konjunktiv II** |
            |---|---|---|
            | sein | war | **wäre** |
            | haben | hatte | **hätte** |
            | geben (es gibt) | gab | **gäbe** |
            | kommen | kam | **käme** |
            | wissen | wusste | **wüsste** |
            | gehen | ging | **ginge** (ghaliban: würde gehen) |
            | können / müssen / dürfen | konnte / musste / durfte | **könnte / müsste / dürfte** |
            | sollen / wollen | sollte / wollte | **sollte / wollte** (bla umlaut) |

            F l-hedra n-nas kaykhdmou: wäre, hätte, gäbe, käme, wüsste + l-Modalverben — **o würde + infinitiv m3a l-ba9i**.
          `,
          [
            ['Wenn ich das wüsste, würde ich es dir sagen.', 'Ila kont kan3ref, kont ghadi ngoulha lik.'],
            ['Es wäre schön, wenn du mitkämest.', 'Ykoun zwin ila jiti m3ana.'],
          ],
        ),
        match('Rbet', [
          ['es gibt', 'es gäbe'],
          ['ich weiß', 'ich wüsste'],
          ['er kommt', 'er käme'],
          ['ich muss', 'ich müsste'],
          ['du hast', 'du hättest'],
        ]),
        gap('Kemmel (Konjunktiv II)', 'Wenn es kein Internet ___, würden wir mehr Briefe schreiben. (geben)', 'gäbe|gaebe'),
        gap('Kemmel (Konjunktiv II)', 'Wenn ich die Antwort ___, würde ich sie dir sagen. (wissen)', 'wüsste|wuesste'),
        gap('Kemmel (Konjunktiv II)', 'Wenn er früher ___, könnten wir zusammen essen. (kommen)', 'käme|kaeme'),
        explain(
          'Jmel chartiya ghir wa9i3iya',
          md`
            **Wenn + Konjunktiv II (Nebensatz), Konjunktiv II (Hauptsatz)**

            > **Wenn** ich mehr Zeit **hätte**, **würde** ich mehr **lesen**.
            > Ich **würde** mehr **lesen**, **wenn** ich mehr Zeit **hätte**.

            **Bla wenn** (f l-kitaba, a rasmi): l-fi3l f l-bidaya:
            > **Hätte** ich mehr Zeit, **würde** ich mehr lesen.

            **Wa9i3i ↔ ghir wa9i3i:**

            | | Mital | Ma3na |
            |---|---|---|
            | Indikativ | Wenn ich Zeit **habe**, **komme** ich. | ymken, ghadi nchouf |
            | Konjunktiv II | Wenn ich Zeit **hätte**, **käme** ich. | walakin ma 3endich |

            **Mohim f n-n9ach** bach tchar7 n-nata2ij: "**Wenn** alle ihre Daten **teilen würden**, **gäbe** es keine Privatsphäre mehr."
          `,
          [
            ['Wenn die Apps weniger süchtig machen würden, wären viele Menschen entspannter.', 'Ila kanou l-applications kaydmmnou 9al, bzaf d n-nas kanou ghadi ykounou mrta7in ktar.'],
            ['Hätte ich das gewusst, wäre ich gekommen.', 'Ila kont 3reft, kont ghadi nji. (madi — unité 12)'],
          ],
        ),
        choice('Ina jomla katgoul belli ma 3endouch l-wa9t?', ['Wenn ich Zeit habe, lese ich.', 'Wenn ich Zeit hätte, würde ich lesen.'], 1),
        choice('Ina jomla s7i7a?', ['Wenn ich reich wäre, ich würde reisen.', 'Wenn ich reich wäre, würde ich reisen.', 'Wenn ich wäre reich, würde ich reisen.'], 1),
        order('Rtteb', 'Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.'),
        order('Rtteb (bla wenn)', 'Hätte ich mehr Zeit, würde ich Gitarre lernen.'),
        explain(
          'L-Konjunktiv II f n-n9ach',
          md`
            | Isti3mal | Redemittel |
            |---|---|
            | **frodiya** | "Stell dir vor, es gäbe keine Handys …" — "Was wäre, wenn …?" |
            | **i9tira7** | "Man könnte / sollte …" — "Es wäre besser, wenn …" |
            | **ra2y b ladab** | "Ich würde sagen, dass …" — "Ich hätte gedacht, dass …" |
            | **amaniya** | "Es wäre schön, wenn …" — "Ich würde mir wünschen, dass …" |

            "Es **wäre** besser, **wenn** Schulen mehr Medienkompetenz **unterrichten würden**."
          `,
        ),
        choice('Bach t9tare7 b ladab f n9ach:', ['Man muss das verbieten!', 'Es wäre besser, wenn man das verbieten würde.'], 1),
        translate("Terjem l l'Almaniya", 'Ila kont kan3ref, kont ghadi ngoulha lik.', ['Wenn ich es wüsste, würde ich es dir sagen.', 'Wenn ich das wüsste, würde ich es dir sagen.']),
        translate("Terjem l l'Almaniya", 'Ykoun zwin ila jiti.', ['Es wäre schön, wenn du kommen würdest.', 'Es wäre schön, wenn du kämest.', 'Es wäre schön, wenn du kommst.']),
        graded(gap('Kemmel', 'Wenn es keine Handys ___, würden wir mehr miteinander sprechen. (geben)', 'gäbe|gaebe')),
        graded(choice('"Wenn ich du ___, würde ich das nicht posten."', ['bin', 'wäre', 'war'], 1)),
        graded(choice('Konjunktiv II dyal "wissen" (ich)?', ['wusste', 'wüsste', 'weiß'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Hätte ich Zeit, würde ich kommen.', 'Hätte ich Zeit, ich würde kommen.'], 0)),
        graded(gap('Kemmel', 'Es ___ besser, wenn wir weniger Zeit online verbringen würden. (sein)', 'wäre|waere')),
        graded(choice('"Wenn ich Zeit habe, komme ich." howa…', ['wa9i3i (momkin)', 'ghir wa9i3i'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Ila kan 3endi l-wa9t, kont ghadi n9ra ktar.', ['Wenn ich Zeit hätte, würde ich mehr lesen.', 'Hätte ich Zeit, würde ich mehr lesen.'])),
        summary(
          [
            'Konjunktiv II: **würde + infinitiv** — o **wäre, hätte, gäbe, käme, wüsste, könnte, müsste, dürfte**.',
            '**Wenn ich … hätte, würde ich …** (ghir wa9i3i) ≠ **Wenn ich … habe, …** (wa9i3i).',
            'Bla wenn: **Hätte ich …, würde ich …**',
            'F n-n9ach: **Was wäre, wenn …? · Es wäre besser, wenn … · Man könnte …**',
          ],
          ['Tdir frodiyat', 'T9tare7 b ladab f n-n9ach'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Medienkompetenz & Stellungnahme',
      description: 'Tsme3 n9ach f r-radio, t9ra ma9al 3la l-akhbar z-zayfa, o tkteb ta3li9 mnadhdham.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem l-ara2 l-mokhtalfa f n9ach f r-radio', 'Tfhem kifach tkchef l-akhbar z-zayfa', 'Tkteb Stellungnahme b struktura (bidaya – 7ojaj – khatima)'],
      steps: [
        intro(
          'Fake News erkennen',
          'Men b3d n-n9ach, Herr Brandt jab ma9al 3la **l-akhbar z-zayfa** o n9ach f r-radio. L-wajib: ktbou **Stellungnahme** (ta3li9) f forum.',
          ['Tsme3 n-n9ach', 'T9ra l-ma9al', 'Tkteb ta3li9'],
        ),
        listening(
          'Radiodiskussion: Handyverbot an Schulen?',
          [
            ['Moderator', 'In einigen Ländern sind Handys an Schulen verboten. Sollte Deutschland das auch machen? Frau Lehmann, Sie sind Lehrerin.', 'F chi boldan t-tilifounat mamnou3a f l-madaris. Wach Almaniya khassha ddir b7alhom? Madame Lehmann, nti oustada.'],
            ['Frau Lehmann', 'Ich bin klar dafür. Seit wir an unserer Schule die Handys morgens einsammeln, sind die Schüler konzentrierter, und in den Pausen reden sie wieder miteinander.', 'Ana m3a had l-9arar b wodou7. Men mli wllina kanjm3ou t-tilifounat f s-sba7 f l-madrasa dyalna, t-talamid wallaw mrkkzin ktar, o f r-ré-création 3awdou ythedrou m3a ba3d.'],
            ['Moderator', 'Herr Demir, Sie sind Vater und Informatiker.', 'Si Demir, nta ab o mohandis f l-informatique.'],
            ['Herr Demir', 'Ich sehe das kritisch. Ein Verbot löst das Problem nicht. Die Kinder müssen lernen, verantwortlich mit dem Handy umzugehen. Wenn man es einfach verbieten würde, würden sie das nie lernen.', 'Ana kanchouf dakchi b no9d. L-man3 ma kay7ellch l-mochkil. D-drari khasshom yt3allmou yt3amlou m3a t-tilifoun b mas2ouliya. Ila mna3nah ghir hakka, 3omrhom ma ghadi yt3allmou.'],
            ['Frau Lehmann', 'Das stimmt zwar, aber Medienkompetenz kann man auch ohne Handy im Unterricht lernen.', 'Hadchi s7i7, walakin t9der tt3llem l-kafa2a f l-médias 7tal bla tilifoun f l-9ism.'],
            ['Herr Demir', 'Vielleicht wäre ein Kompromiss gut: Handys nur in bestimmten Stunden, zum Beispiel für Recherchen.', 'Ymken ykoun compromis mzyan: t-tilifounat ghir f chi 7isas, b7al l-ba7th.'],
          ],
        ),
        choice('Chno ra2y Frau Lehmann?', ['Dodd l-man3', 'M3a l-man3', 'Ma 3endha ra2y'], 1),
        choice('3lach Herr Demir kayta9ed l-man3?', ['D-drari khasshom yt3allmou yt3amlou b mas2ouliya', 'Ghali', 'L-madrasa ma bghatch'], 0),
        choice('Chno i9tare7 f l-akhir?', ['Man3 kamel', 'T-tilifounat ghir f chi 7isas', 'Walou'], 1),
        reading(
          'So erkennen Sie Fake News',
          md`
            Falschmeldungen verbreiten sich im Internet oft schneller als echte Nachrichten. Mit diesen Fragen können Sie eine Nachricht prüfen:

            **Wer hat die Nachricht veröffentlicht?** Gibt es ein Impressum? Ist die Quelle bekannt und seriös?
            **Wann wurde sie veröffentlicht?** Manchmal werden alte Fotos oder Meldungen in einem neuen Zusammenhang geteilt.
            **Berichten auch andere Medien darüber?** Wenn nur eine einzige Seite eine sensationelle Nachricht hat, sollte man vorsichtig sein.
            **Wie ist die Sprache?** Viele Ausrufezeichen, Großbuchstaben und starke Gefühle („Unglaublich!", „Das verschweigen sie dir!") sind Warnsignale.
            **Wem nützt die Nachricht?** Manche Falschmeldungen sollen Angst machen, andere sollen Geld bringen.

            Im Zweifel gilt: erst prüfen, dann teilen.
          `,
          {
            text: '9ra n-nasa2i7.',
            glossary: [
              ['die Falschmeldung', 'l-khbar z-zayef'],
              ['veröffentlichen', 'nchr'],
              ['das Impressum', 'l-ma3loumat 3la n-nachir (f s-site)'],
              ['seriös', 'ja dd / mawthou9'],
              ['der Zusammenhang', 's-siya9'],
              ['verschweigen', 'khebba / ma galch'],
              ['nützen', 'nfa3'],
              ['im Zweifel', 'ila tchakkiti'],
            ],
          },
        ),
        choice('Chno khass tchouf lowel?', ['Ch7al d l-likes', 'Chkoun nchr l-khbar o wach l-masdar ja dd', 'L-lwen d s-site'], 1),
        choice('Ina 3alama dyal t-ta7dhir?', ['Ktar men masdar', 'Bzaf d "!" o l-7rouf l-kbar', 'Impressum'], 1),
        explain(
          'Struktura dyal Stellungnahme',
          md`
            **1. Bidaya** — l-mawdou3 + ra2yek b ikhtisar:
            "In letzter Zeit wird viel darüber diskutiert, ob … Ich bin der Meinung, dass …"

            **2. L-7ojaj** (2–3) — kol 7ojja b mithal:
            "Erstens … Zum Beispiel … · Zweitens … · Außerdem …"

            **3. L-7ojja l-mo3arida** (o tjawbha):
            "Natürlich gibt es auch Gegenargumente: … Trotzdem …"

            **4. Khatima** — ra2yek + i9tira7:
            "Zusammenfassend lässt sich sagen, dass … Es wäre gut, wenn …"
          `,
        ),
        culture(
          'L-médias f Almaniya',
          md`
            - **Öffentlich-rechtliche Medien** (ARD, ZDF, Deutschlandfunk, WDR…): kaytmweelou b **Rundfunkbeitrag**, o khasshom ykounou mo7ayidin.
            - Jarayed kbar: **Süddeutsche Zeitung, FAZ, Die Zeit, Der Spiegel** — o **Bild** (sensationnelle).
            - **„Nachrichten in leichter Sprache"** (nachrichtenleicht.de men Deutschlandfunk): akhbar b logha sahla — mzyanin l B1!
            - **Faktenchecks:** correctiv.org, ARD-Faktenfinder — bach tchouf wach l-khbar s7i7.
          `,
        ),
        pron(
          'Kontrastakzent',
          'Mli kat9aren wla kat3arad, katdir **l-accent** 3la l-kelma li fiha l-farq: "Das ist nicht DEIN Problem, sondern UNSER Problem."',
          [
            ['Ich bin nicht dagegen, ich bin dafür.', 'accent 3la "dagegen" o "dafür"'],
            ['Nicht die Medien sind schuld, sondern wir.', 'accent 3la "Medien" o "wir"'],
            ['Das stimmt zwar, aber …', 'accent 3la "zwar" o "aber"'],
          ],
        ),
        write(
          'Stellungnahme: Handyverbot an Schulen',
          md`
            Kteb ta3li9 f forum (~150 kelma): **"Sollten Handys an Schulen verboten werden?"**
            Khdem l-struktura (bidaya – 2 7ojaj b amthila – 7ojja mo3arida – khatima), o 3la l-a9al **jouj jmel b l-Konjunktiv II**.
          `,
          ['Bidaya: mawdou3 + ra2yek', 'Erstens … Zum Beispiel …', 'Außerdem …', 'Gegenargument: Natürlich … Trotzdem …', 'Khatima: Zusammenfassend … Es wäre gut, wenn …', 'Konjunktiv II x2'],
          'In letzter Zeit wird viel darüber diskutiert, ob Handys an Schulen verboten werden sollten. Ich bin der Meinung, dass ein Verbot während des Unterrichts sinnvoll ist.\n\nErstens können sich die Schüler ohne Handy besser konzentrieren. Zum Beispiel erzählt meine Cousine, dass in ihrer Klasse ständig jemand Nachrichten schreibt. Außerdem würden die Kinder in den Pausen wieder mehr miteinander sprechen, wenn sie kein Handy hätten.\n\nNatürlich gibt es auch Gegenargumente: Jugendliche müssen lernen, verantwortlich mit Medien umzugehen. Trotzdem glaube ich, dass man das auch im Informatikunterricht lernen kann.\n\nZusammenfassend lässt sich sagen, dass ein Verbot im Unterricht mehr Vorteile als Nachteile hat. Es wäre gut, wenn die Schulen gleichzeitig Kurse zur Medienkompetenz anbieten würden.',
          130,
        ),
        graded(choice('"veröffentlichen" kay3ni…', ['nchr', 'khebba', 'mna3'], 0)),
        graded(choice('F Stellungnahme, l-7ojja l-mo3arida…', ['ma katktebhach', 'katktebha o tjawbha', 'katbda biha'], 1)),
        graded(choice('"Zusammenfassend lässt sich sagen …" katkhdmou f…', ['l-bidaya', 'l-khatima', 'l-wsat'], 1)),
        graded(dictation('Sme3 o kteb', 'Im Zweifel gilt: erst prüfen, dann teilen.')),
        summary(
          [
            'Fake News: **Quelle, Impressum, Datum, andere Medien, Sprache, wem nützt es?**',
            'Stellungnahme: **Bidaya → 7ojaj + amthila → Gegenargument → Khatima**.',
          ],
          ['Tfhem n9ach f r-radio', 'Tkchef l-akhbar z-zayfa', 'Tkteb ta3li9 mnadhdham'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 5',
      description: 'Muraja3a: r-ra2y o n-n9ach, l-médias, l-Konjunktiv II — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Redemittel o l-Konjunktiv II', 'Tn9ach', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Redemittel dyal r-ra2y, l-akhbar z-zayfa, o l-Konjunktiv II (gäbe, wüsste, käme…).', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Meiner Meinung nach ist …** (fi3l direct) · **Ich bin der Meinung, dass …** (fi3l f l-akhir)
            - **Da stimme ich zu · Das stimmt zwar, aber … · Das sehe ich anders**
            - **Wenn es … gäbe, würde …** · **Hätte ich …, würde ich …**
          `,
        ),
        dialogue(
          'Ein Leben ohne Handy?',
          [
            ['Lukas', 'Könntest du eine Woche ohne Handy leben?', 'Wach t9der t3ich simana bla tilifoun?'],
            ['Youssef', 'Schwierig. Wenn ich kein Handy hätte, wüsste ich nicht, wann meine Schicht beginnt!', 'S3iba. Ila ma kanch 3endi tilifoun, ma ghadich n3ref imta katbda n-nouba dyali!'],
            ['Salma', 'Ich würde es gern mal ausprobieren. Ich glaube, ich hätte viel mehr Zeit zum Lesen.', 'Kont nbghi njerrbha. Kandenn ghadi ykoun 3endi l-wa9t ktar l l-9raya.'],
            ['Lukas', 'Das stimmt zwar, aber du könntest deine Familie nicht anrufen.', 'Hadchi s7i7, walakin ma t9driche ttasli b l-3a2ila dyalek.'],
            ['Salma', 'Doch – vom Festnetz! Das gäbe es ja noch.', 'Momkin — men t-tilifoun t-thabet! Hadak mazal kayn.'],
          ],
        ),
        choice('3lach Youssef ma y9derch y3ich bla tilifoun?', ['Ma ghadich y3ref imta n-nouba', 'Kayl3eb bzaf', 'Ma 3endouch fixe'], 0),
        choice('Chno kaddenn Salma?', ['Ghadi ykoun 3endha l-wa9t ktar l l-9raya', 'Ghadi tmll', 'Ma ghadich tttasel b l-3a2ila'], 0),
        gap('Kemmel', 'Wenn ich kein Handy ___, ___ ich nicht, wann meine Schicht beginnt.', ['hätte|haette', 'wüsste|wuesste']),
        match('Rbet', [
          ['Meiner Meinung nach …', 'F ra2yi …'],
          ['Das stimmt zwar, aber …', 'Hadchi s7i7, walakin …'],
          ['Ich bezweifle, dass …', 'Kanchekk belli …'],
          ['Es wäre besser, wenn …', 'Ykoun a7ssen ila …'],
        ]),
        speak(
          'Role-play: n9ach',
          'Mawdou3: *"Sollten soziale Medien erst ab 16 Jahren erlaubt sein?"* — Goul ra2yek b 2 7ojaj, rdd 3la 7ojja mo3arida, o 9tare7 compromis b Konjunktiv II.',
          ['Meiner Meinung nach sollten soziale Medien erst ab 16 erlaubt sein.', 'Erstens sind jüngere Kinder leichter zu beeinflussen.', 'Das stimmt zwar, aber viele Kinder nutzen sie für die Schule.', 'Es wäre gut, wenn die Eltern die Nutzung begleiten würden.'],
        ),
        graded(choice('Ina jomla s7i7a?', ['Meiner Meinung nach das ist richtig.', 'Meiner Meinung nach ist das richtig.'], 1)),
        graded(choice('"Ich bin der Meinung, dass das Internet wichtig ___."', ['ist', 'sein', 'ist es'], 0)),
        graded(gap('Kemmel', 'Wenn es mehr Zeit ___, würde ich mehr lesen. (geben, Konj. II)', 'gäbe|gaebe')),
        graded(gap('Kemmel', '___ ich das gewusst, wäre ich gekommen. (haben, Konj. II)', 'Hätte|Haette')),
        graded(choice('"Er ___ gern mitkommen, wenn er könnte." (Konj. II)', ['würde', 'wird', 'wurde'], 0)),
        graded(choice('Ina 3alama dyal khbar zayef?', ['Impressum wad7', 'Bzaf d "!!!" o kalimat 3atifiya', 'Ktar men masdar'], 1)),
        graded(choice('"beeinflussen" kay3ni…', ['ath-thar f', 'nchr', 'khebba'], 0)),
        graded(choice('Bach twaf9 b jouz2:', ['Das stimmt zwar, aber …', 'Da stimme ich zu.', 'Das sehe ich anders.'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Ila kont nta, ma kontch ghadi nnchr hadchi.', ['Wenn ich du wäre, würde ich das nicht posten.', 'An deiner Stelle würde ich das nicht posten.'])),
        graded(dictation('Sme3 o kteb', 'Es wäre besser, wenn wir die Quellen prüfen würden.')),
        summary(
          [
            'Daba t9der tn9ach, tdafe3 3la ra2yek, o tkteb ta3li9 mnadhdham.',
            'F l-unité 6: l-flous o l-istihlak — **l-Genitiv** (wegen, trotz, während) o **n-nihayat dyal s-sifat** kamlin.',
          ],
          ['Tgoul ra2yek o tdafe3 3lih', 'Twaf9 / t3arad b ladab', 'Tkhdem l-Konjunktiv II', 'Tkteb Stellungnahme'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
