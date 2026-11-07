import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 12,
  title: 'Formell kommunizieren',
  description: "T-tawasol r-rasmi: tsiyer n9ach, t9ddem presentation, tkteb chakwa o Stellungnahme — m3a muraja3a chamila l l-grammaire d B2.",
  icon: 'campaign',
  objectives: [
    'Tsiyer n9ach wla réunion (tfte7, t3ti l-kelma, tlakhkhes)',
    'T9ddem presentation b bniya wad7a o Redemittel rasmiyin',
    'Tkteb chakwa rasmiya l l-idara b 7ojaj o talabat wad7in',
    'Tkhdem l-grammaire d B2 f mo9if wa9i3i (Passiv, Konj. I, Nominalstil …)',
    'Trodd 3la n-n9d b ladab o b mihniya',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Eine Diskussion leiten',
      description: 'L-Redemittel dyal tsiyer n9ach: tfte7, t3ti l-kelma, tw9ef chi wa7ed b ladab, tlakhkhes, o tsedd.',
      minutes: 30,
      kind: 'input',
      goals: ['Tfte7 o tsedd n9ach', 'T3ti l-kelma o tw9ef l-mtkllem b ladab', 'Tlakhkhes l-mawa9if o tdir qarar'],
      steps: [
        intro(
          'Mieterversammlung',
          'F l-binaya d Youssef, mol l-milk bgha yzid l-kra 15 %. L-mostakrin dar-ou jtima3 — o 3ttaw l Salma (li jat tzour) dawr l-modira (moderatrice)…',
          ['Tfte7', 'Tsiyer', 'Tlakhkhes'],
        ),
        dialogue(
          'Die Versammlung',
          [
            ['Salma', 'Guten Abend zusammen. Ich begrüße Sie zu unserer Versammlung. Heute geht es um die angekündigte Mieterhöhung. Wir haben eine Stunde Zeit.', 'Msa l-khir l-jami3. Mrhba bikom f had l-ijtima3. L-youm l-mawdou3 howa z-zyada f l-kra li t3lnat. 3endna sa3a.'],
            ['Herr Krüger', 'Das ist eine Frechheit! Die Heizung ist seit Jahren kaputt, und jetzt soll ich mehr zahlen?', 'Hadi 9illat 7ya! T-tadfi2a khasra hadi snin, o daba khassni nkhlles ktar?'],
            ['Salma', 'Ich verstehe Ihren Ärger, Herr Krüger. Lassen Sie uns zunächst die Fakten sammeln. Frau Yilmaz, Sie hatten sich gemeldet?', 'Kanfhem l-ghadab dyalek, Herr Krüger. Khallina f l-lowel njm3ou l-wa9a2i3. Madame Yilmaz, kunti rf3ti yeddek?'],
            ['Frau Yilmaz', 'Ja. Ich habe beim Mieterverein nachgefragt. Eine Erhöhung ist nur bis zur ortsüblichen Vergleichsmiete erlaubt – und höchstens 20 Prozent in drei Jahren, in Köln sogar nur 15.', 'Ah. Sowwelt f jam3iyat l-mostakrin. Z-zyada mesmou7a ghir 7tal l-kra l-3adiya f l-7ouma — o ma ktar men 20 % f 3 snin, f Köln ghir 15.'],
            ['Herr Krüger', 'Und außerdem ist das Treppenhaus dreckig, und der Aufzug …', 'O zid d-droj msekhin, o l-ascenseur …'],
            ['Salma', 'Entschuldigung, wenn ich Sie kurz unterbreche, Herr Krüger – das ist ein wichtiger Punkt, aber lassen Sie uns erst beim Thema Miete bleiben. Den Aufzug nehmen wir als nächsten Punkt auf.', 'Smeh liya ila 9ta3t lik l-kelma, Herr Krüger — hadi no9ta mohimma, walakin khallina nb9aw f l-kra f l-lowel. L-ascenseur ndirouh f n-no9ta l-jaya.'],
            ['Salma', 'Ich fasse zusammen: Wir lassen die Erhöhung vom Mieterverein prüfen und schreiben gemeinsam einen Brief wegen der Heizung. Sind alle damit einverstanden?', 'Kanlakhkhes: ghadi nkhlliw jam3iyat l-mostakrin trage3 z-zyada, o nkteb bra m3a ba3dna 3la t-tadfi2a. Wach kolchi mwafe9?'],
          ],
        ),
        vocab('Formelle Kommunikation — T-tawasol r-rasmi', [
          ['die Versammlung', 'l-ijtima3 (3amm)', ''],
          ['die Tagesordnung', 'jadwal l-a3mal', ''],
          ['leiten / die Moderation', 'siyer / t-tasyir', ''],
          ['das Wort erteilen', '3ta l-kelma', ''],
          ['unterbrechen', '9ta3 (l-kelma)', ''],
          ['sich zu Wort melden', 'tlab l-kelma', ''],
          ['zusammenfassen', 'lakhkhes', ''],
          ['abstimmen über + Akk', 'sowwet 3la', ''],
          ['einstimmig', 'b l-ijma3', ''],
          ['der Beschluss', 'l-qarar', ''],
          ['vertagen', 'ajjel (l-ijtima3 / n-no9ta)', ''],
          ['die Mieterhöhung', 'z-zyada f l-kra', ''],
          ['der Mieterverein', 'jam3iyat l-mostakrin', ''],
          ['einverstanden sein mit', 'mwafe9 3la', ''],
        ]),
        explain(
          'Redemittel: tsiyer n9ach',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tfte7 | "Ich begrüße Sie zu … — Heute geht es um … — Wir haben … Zeit." |
            | t3ti l-kelma | "Frau …, Sie hatten sich gemeldet." — "Möchte jemand dazu etwas sagen?" — "Wie sehen Sie das, Herr …?" |
            | tw9ef b ladab | "Entschuldigung, wenn ich Sie kurz unterbreche …" — "Darf ich Sie bitten, zum Schluss zu kommen?" |
            | trje3 l l-mawdou3 | "Lassen Sie uns beim Thema bleiben." — "Das nehmen wir als nächsten Punkt auf." |
            | tlakhkhes | "Ich fasse zusammen: …" — "Halten wir fest: …" |
            | qarar | "Sind alle damit einverstanden?" — "Dann stimmen wir ab." |
            | tsedd | "Vielen Dank für die konstruktive Diskussion. Das Protokoll erhalten Sie bis …" |
          `,
          [
            ['Darf ich Sie bitten, zum Schluss zu kommen?', 'Wach n9der ntlb mennek tsali?'],
            ['Halten wir fest: Der Brief geht morgen raus.', 'Nsjjlou: l-bra ghadi tkhrej ghedda.'],
          ],
        ),
        match('Rbet', [
          ['das Wort erteilen', '3ta l-kelma'],
          ['unterbrechen', '9ta3 l-kelma'],
          ['zusammenfassen', 'lakhkhes'],
          ['einstimmig', 'b l-ijma3'],
          ['vertagen', 'ajjel'],
        ]),
        choice('Chno l-mawdou3 dyal l-ijtima3?', ['T-tadfi2a', 'Z-zyada f l-kra', 'L-ascenseur'], 1),
        choice('Ch7al l-7add l-a9sa d z-zyada f Köln f 3 snin (3la 7sab Frau Yilmaz)?', ['10 %', '15 %', '30 %'], 1),
        choice('Kifach w9fat Salma Herr Krüger?', ['B l-ghadab', 'B ladab — o w3dat ydirou l-ascenseur men b3d', 'Ma w9fatouch'], 1),
        gap('Kemmel', 'Entschuldigung, wenn ich Sie kurz ___. Lassen Sie uns beim Thema ___.', ['unterbreche', 'bleiben']),
        order('Rtteb', 'Darf ich Sie bitten, zum Schluss zu kommen?'),
        culture(
          'Mietrecht f Almaniya',
          md`
            - **Mieterhöhung:** ghir 7tal **ortsübliche Vergleichsmiete** (kayt-chaf f **Mietspiegel** d l-mdina), o ma ktar men **20 % f 3 snin** — f l-moudoun li fihom n9s d s-sakan (b7al Köln, Berlin, München) ghir **15 %** (**Kappungsgrenze**).
            - **Mietpreisbremse:** f bzaf d l-moudoun, l-kra j-jdida ma t9derch tfout b ktar men **10 %** l-Vergleichsmiete.
            - **Mietminderung:** ila kan 3ayb kbir (t-tadfi2a khasra f l-chta), t9der tn9es l-kra — walakin **3lem mol l-milk b l-kitaba** 9bel.
            - **Mieterverein:** jam3iya kat3ti istichara 9anouniya l l-mostakrin (~5–10 € f ch-chhar).
          `,
        ),
        speak(
          'Siyer n9ach',
          'Nta l-modir dyal ijtima3 d l-équipe: l-mawdou3 "Wo machen wir die Weihnachtsfeier?" Fte7, 3ti l-kelma l jouj, w9ef wa7ed b ladab (kaykhrej 3la l-mawdou3), lakhkhes, o dir t-tasweet.',
          ['Ich begrüße Sie zu unserer kurzen Besprechung. Heute geht es um die Weihnachtsfeier.', 'Jonas, Sie hatten sich gemeldet?', 'Entschuldigung, wenn ich Sie kurz unterbreche – lassen Sie uns beim Thema bleiben.', 'Ich fasse zusammen: Es gibt zwei Vorschläge. Dann stimmen wir ab.'],
        ),
        graded(choice('"die Tagesordnung" =', ['jadwal l-a3mal', 'l-qarar', 'l-ma7dar'], 0)),
        graded(choice('"Halten wir fest: …" katkhdemha bach…', ['Tlakhkhes / tsjjel l-qarar', 'Tfte7', 'Tw9ef chi wa7ed'], 0)),
        graded(gap('Kemmel', 'Der Beschluss wurde ___ gefasst. (b l-ijma3)', 'einstimmig')),
        graded(translate("Terjem l l'Almaniya", 'Wach kolchi mwafe9?', ['Sind alle damit einverstanden?', 'Sind alle einverstanden?'])),
        summary(
          [
            'T-tasyir: **Ich begrüße Sie … — Sie hatten sich gemeldet? — Entschuldigung, wenn ich unterbreche … — Ich fasse zusammen … — Sind alle einverstanden?**',
            'L-ijtima3: **die Tagesordnung, das Wort erteilen, abstimmen, einstimmig, der Beschluss, vertagen**.',
          ],
          ['Tsiyer n9ach', 'Tlakhkhes o tdir qarar'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'B2-Grammatik im Überblick',
      description: 'Muraja3a chamila: Passiv o l-bada2il, Konj. I o II, Partizipialattribute, Nominalstil, Konnektoren, Relativsätze.',
      minutes: 45,
      kind: 'grammar',
      goals: ['Traja3 l-bonyat l-kbar d B2', 'Tkhtar l-bonya l-mnasba l l-mo9if (rasmi / ghayr rasmi)', 'T7awwel bin l-bonyat (Aktiv ↔ Passiv, Verbal ↔ Nominal …)'],
      steps: [
        intro(
          'Alles zusammen',
          md`
            F l-7ayat l-mihniya, l-bonyat d B2 kayjiw **m3a ba3dhom** f nefs l-bra: Passiv, Nominalstil, Konjunktiv …
            F had d-ders ghadi nraj3ou kolchi b amthila men **l-bra r-rasmiya**.
          `,
          ['Passiv', 'Konjunktiv', 'Nominalstil', 'Konnektoren'],
        ),
        explain(
          'Passiv & bada2il (unité 4)',
          md`
            > Die Heizung **muss** dringend **repariert werden**. · Der Mangel **ist** bereits im Oktober **gemeldet worden**.
            > Das Problem **lässt sich** leicht **beheben**. · Die Frist **ist** unbedingt **einzuhalten**.
          `,
        ),
        choice('"Man hat den Mangel im Oktober gemeldet." → Passiv Perfekt:', ['Der Mangel ist im Oktober gemeldet worden.', 'Der Mangel hat im Oktober gemeldet worden.', 'Der Mangel wurde im Oktober gemeldet geworden.'], 0),
        choice('"Die Frist muss eingehalten werden." =', ['Die Frist ist einzuhalten.', 'Die Frist hat einzuhalten.', 'Die Frist lässt einhalten.'], 0),
        explain(
          'Konjunktiv I & II (unités 3, 9)',
          md`
            > Der Vermieter behauptet, die Heizung **sei** in Ordnung. (Konj. I — n-n9el)
            > Die Mieter sagen, sie **hätten** mehrfach angerufen. (Konj. II badal Konj. I)
            > Sie **hätten** die Heizung längst **reparieren müssen**. (Konj. II l-madi + Modal)
            > **Wir wären Ihnen dankbar, wenn** Sie uns bis Freitag antworten **könnten**. (ladab)
          `,
        ),
        choice('"Der Vermieter sagt: Ich habe keine Beschwerde erhalten." →', ['Er sagt, er habe keine Beschwerde erhalten.', 'Er sagt, er hat keine Beschwerde erhalten habe.', 'Er sagt, er hätte keine Beschwerde erhalten worden.'], 0),
        choice('*Kan khasskom tsl7ou t-tadfi2a men zman.* =', ['Sie hätten die Heizung längst reparieren müssen.', 'Sie mussten die Heizung längst reparieren haben.', 'Sie hätten die Heizung längst repariert müssen.'], 0),
        explain(
          'Nominalstil & Partizipialattribute (unités 2, 5)',
          md`
            > **Nach Eingang** Ihres Schreibens … (= Nachdem Ihr Schreiben eingegangen ist)
            > **Aufgrund der** seit Monaten **defekten** Heizung … (= weil die Heizung seit Monaten defekt ist)
            > die **von Ihnen angekündigte** Erhöhung (= die Erhöhung, die Sie angekündigt haben)
          `,
        ),
        choice('"weil die Heizung defekt ist" → ___', ['aufgrund der defekten Heizung', 'trotz der defekten Heizung', 'bei der defekten Heizung'], 0),
        gap('Kemmel', 'die Erhöhung, die Sie angekündigt haben → die von Ihnen ___ Erhöhung', 'angekündigte|angekuendigte'),
        explain(
          'Konnektoren & Relativsätze (unités 1, 6, 7, 10)',
          md`
            > **Zwar** verstehen wir Ihre Lage, **dennoch** halten wir die Erhöhung für unzulässig.
            > **Sofern** die Heizung bis 1. Dezember nicht repariert ist, werden wir die Miete mindern.
            > Die Mieter, **deren** Wohnungen betroffen sind, …
            > **Sobald** wir Ihre Antwort erhalten haben, …
          `,
        ),
        choice('"___ verstehen wir Ihre Lage, dennoch …"', ['Zwar', 'Sofern', 'Sobald'], 0),
        choice('"Die Mieterin, ___ Wohnung kalt ist, …"', ['deren', 'dessen', 'der'], 0),
        explain(
          'Rasmi ↔ ghayr rasmi f l-bra',
          md`
            | Ghayr rasmi | Rasmi |
            |---|---|
            | Die Heizung geht nicht. | Die Heizung **ist defekt / funktioniert nicht ordnungsgemäß**. |
            | Bitte reparieren Sie das schnell. | **Wir fordern Sie auf**, den Mangel **unverzüglich** zu beheben. |
            | Sonst zahlen wir weniger. | **Andernfalls** sehen wir uns gezwungen, die Miete zu mindern. |
            | Schreiben Sie bitte zurück. | **Wir bitten um** eine schriftliche Stellungnahme **bis zum** … |
          `,
        ),
        match('Ghayr rasmi → rasmi', [
          ['geht nicht', 'ist defekt'],
          ['schnell', 'unverzüglich'],
          ['sonst', 'andernfalls'],
          ['Schreiben Sie zurück.', 'Wir bitten um Stellungnahme.'],
        ]),
        translate("Terjem l rasmi", 'Bitte reparieren Sie das schnell.', ['Wir fordern Sie auf, den Mangel unverzüglich zu beheben.', 'Wir bitten Sie, den Mangel unverzüglich zu beheben.', 'Bitte beheben Sie den Mangel unverzüglich.']),
        graded(choice('"Der Antrag ___ letzte Woche genehmigt worden."', ['ist', 'hat', 'wurde'], 0)),
        graded(choice('"Die Unterlagen sind bis Freitag ___." (khasshom ytsallmou)', ['einzureichen', 'eingereicht', 'zu eingereicht'], 0)),
        graded(choice('"Die Firma teilte mit, man ___ das Problem prüfen."', ['werde', 'wird', 'würde werden'], 0)),
        graded(choice('"Wir ___ Ihnen dankbar, wenn Sie schnell antworten könnten."', ['wären', 'würden', 'hätten'], 0)),
        graded(choice('"nachdem Ihr Schreiben eingegangen ist" →', ['nach Eingang Ihres Schreibens', 'vor Eingang Ihres Schreibens', 'bei Ihrem Schreiben eingegangen'], 0)),
        graded(gap('Kemmel', 'die seit Wochen ___ Beschwerden (sich häufen, P.I)', 'sich häufenden|sich haeufenden')),
        graded(choice('"___ Sie bis Montag nicht reagieren, schalten wir einen Anwalt ein."', ['Sofern', 'Zwar', 'Kaum'], 0)),
        graded(choice('Rasmi l "sonst":', ['andernfalls', 'halt', 'na ja'], 0)),
        summary(
          [
            'L-bra r-rasmiya d B2 = **Passiv** + **Nominalstil** + **Konj. I / II** + **Konnektoren** + **Register rasmi**.',
            'Rasmi: **defekt, unverzüglich, andernfalls, wir fordern Sie auf, wir bitten um Stellungnahme bis …**',
          ],
          ['Traja3 l-grammaire d B2', 'Tkhtar l-bonya l-mnasba'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Präsentieren & Beschwerde schreiben',
      description: 'Tsme3 presentation o t7llel l-bonya dyalha, t9ra jawab rasmi, o tkteb chakwa rasmiya kamla.',
      minutes: 45,
      kind: 'skills',
      goals: ['Tfhem presentation o l-Redemittel dyalha', 'Tfhem bra rasmiya o l-7ojaj dyalha', 'Tkteb chakwa rasmiya kamla'],
      steps: [
        intro(
          'Die Mieter wehren sich',
          'Salma ghadi t9ddem n-nata2ij d l-ijtima3 f presentation 9siira l l-mostakrin. Men b3d ghadi tkteb l-chakwa r-rasmiya l l-Hausverwaltung.',
          ['Tsme3 l-presentation', 'T9ra l-jawab', 'Tkteb'],
        ),
        explain(
          'Redemittel: presentation',
          md`
            | Jouz2 | Redemittel |
            |---|---|
            | **Einstieg** | "Ich möchte Ihnen heute … vorstellen." — "Stellen Sie sich vor: …" (so2al / mo9if l-ihtimam) |
            | **Gliederung** | "Mein Vortrag besteht aus drei Teilen: Zunächst …, anschließend …, abschließend …" |
            | **Übergänge** | "Damit komme ich zum nächsten Punkt." — "Wie Sie auf dieser Folie sehen, …" |
            | **Betonung** | "Besonders hervorheben möchte ich …" — "Entscheidend ist, dass …" |
            | **Schluss** | "Lassen Sie mich kurz zusammenfassen: …" — "Vielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen." |
            | **Fragen** | "Danke für die Frage." — "Darauf komme ich gleich noch zurück." — "Das kann ich leider nicht sicher beantworten, ich kläre das aber." |
          `,
        ),
        listening(
          'Salmas Kurzpräsentation',
          [
            ['Salma', 'Liebe Nachbarinnen und Nachbarn, stellen Sie sich vor: Es ist Januar, draußen minus fünf Grad – und Ihre Heizung ist seit drei Wochen kalt. Genau das haben viele von uns erlebt.', 'Jiran l-a3izza, tkhayylou: Janvier, l-barra -5, o t-tadfi2a dyalkom barda hadi 3 simanat. Hadchi bdebt li 3achou bzaf menna.'],
            ['Salma', 'Mein Vortrag besteht aus drei Teilen: Zunächst die Ergebnisse unserer Umfrage, anschließend die rechtliche Lage und abschließend unsere nächsten Schritte.', 'L-3ard dyali fih 3 ajza2: f l-lowel nata2ij l-istitla3, men b3d l-wad3 l-9anouni, o f l-akhir l-khotwat l-jaya.'],
            ['Salma', 'Wie Sie auf dieser Folie sehen, haben 18 von 24 Haushalten geantwortet. Davon berichten 14 von Heizungsausfällen. Besonders hervorheben möchte ich, dass der Mangel bereits im Oktober gemeldet worden ist.', 'B7al ma kat-chofou f had l-folie, 18 men 24 dar jawbou. Menhom 14 kaygoulou t-tadfi2a t3ettlat. Bghit nrkkez khossousan 3la belli l-3ayb tbellegh 3lih men Octobre.'],
            ['Salma', 'Damit komme ich zur rechtlichen Lage. Laut Mieterverein dürfen wir die Miete mindern, sofern wir den Mangel schriftlich angezeigt haben. Entscheidend ist also der Brief.', 'Daba nmchiw l l-wad3 l-9anouni. 3la 7sab jam3iyat l-mostakrin, n9drou nn9sou l-kra, ila 3llemna b l-3ayb b l-kitaba. Iwa l-bra hiya l-mohimma.'],
            ['Salma', 'Lassen Sie mich kurz zusammenfassen: Wir schreiben gemeinsam, setzen eine Frist und mindern notfalls die Miete. Vielen Dank für Ihre Aufmerksamkeit – ich freue mich auf Ihre Fragen.', 'Khalliwni nlakhkhes: nkteb m3a ba3dna, n3tiw ajal, o ila daret l-7aja nn9sou l-kra. Choukran 3la l-intibah — mrhba b l-as2ila.'],
          ],
        ),
        choice('Kifach bdat Salma l-presentation?', ['B ar9am', 'B mo9if "tkhayylou …"', 'B nokta'], 1),
        choice('Ch7al men dar 3endha mochkil f t-tadfi2a?', ['14', '18', '24'], 0),
        choice('Chno ch-chart bach n9drou nn9sou l-kra?', ['Ytsennaw 3am', 'Y3llmou b l-3ayb b l-kitaba', 'Ydirou chakwa f l-boulis'], 1),
        reading(
          'Antwort der Hausverwaltung',
          md`
            Sehr geehrte Frau El Idrissi,

            wir bestätigen den Eingang Ihres Schreibens vom 2. November. Bezüglich der von Ihnen geschilderten Heizungsprobleme teilen wir Ihnen mit, dass ein Techniker bereits am 15. Oktober vor Ort gewesen sei. Laut dessen Bericht sei die Anlage funktionsfähig.

            Wir weisen ferner darauf hin, dass eine Mietminderung nur bei erheblichen Mängeln zulässig ist. Eine eigenmächtige Kürzung der Miete werden wir nicht akzeptieren.

            Die angekündigte Mieterhöhung ist rechtlich geprüft worden und bleibt bestehen.

            Mit freundlichen Grüßen
            Immobilien Rhein GmbH
          `,
          {
            text: '9ra l-jawab d l-idara.',
            glossary: [
              ['den Eingang bestätigen', 'akked l-istilam'],
              ['schildern', 'wsef'],
              ['funktionsfähig', 'khddam'],
              ['eigenmächtig', 'b rasou / bla idn'],
              ['bestehen bleiben', 'yb9a sari'],
            ],
          },
        ),
        choice('3la 7sab l-idara, t-tadfi2a…', ['Khasra', 'Khddama — t-te9ni kan temma', 'Ghadi tbeddel'], 1),
        choice('Chno kat9oul 3la t-tan9is d l-kra?', ['Mesmou7 dima', 'Ghir f l-3oyoub l-kbar — o ma ghadi t9blouch b rasou', 'Mamnou3 abadan'], 1),
        choice('3lach l-idara katkhdem "sei" f "ein Techniker sei vor Ort gewesen"?', ['Bach tn9el l-kalam men t-t9rir (Konj. I)', '7it ghalta', '7it Futur'], 0),
        pron(
          'N-nghma f l-presentation',
          'Tkellem b chwiya, dir wa9fa 9bel l-ma3louma l-mohimma, o t3ti accent l l-kelma l-mohimma.',
          [
            ['Besonders hervorheben möchte ich …', 'wa9fa men b3d "ich"'],
            ['Entscheidend ist also der Brief.', 'accent 3la "Brief"'],
            ['Vielen Dank für Ihre Aufmerksamkeit.', 'sowt mnkhafed f l-akhir'],
          ],
        ),
        write(
          'Chakwa rasmiya (jawab l l-idara)',
          md`
            Jaweb 3la bra d Immobilien Rhein b smiyt l-mostakrin (~200 kelma): rdd 3la idda3a2 t-te9ni (Konj. I), byyen belli l-3ayb kbir (ar9am, tarikh), 3ti ajal, o 3lem belli ghadi tn9es l-kra **andernfalls**. Rdd ta 3la z-zyada (Kappungsgrenze 15 %).
            Khdem **Passiv**, **Nominalstil**, **Konj. I / II**, **Partizipialattribut** wa7ed o **Register rasmi**.
          `,
          ['Betreff + Sehr geehrte Damen und Herren,', 'Bezug (Ihr Schreiben vom …)', 'Rdd 3la t-te9ni (Sie behaupten, die Anlage sei …)', 'L-wa9a2i3 (14 von 24 Haushalten …)', 'Frist + andernfalls Mietminderung', 'Z-zyada (Kappungsgrenze)', 'Mit freundlichen Grüßen'],
          'Betreff: Ihr Schreiben vom 10. November – anhaltender Heizungsausfall und Mieterhöhung\n\nSehr geehrte Damen und Herren,\n\nwir nehmen Bezug auf Ihr Schreiben vom 10. November. Sie teilen darin mit, die Heizungsanlage sei nach einem Technikerbesuch am 15. Oktober funktionsfähig. Dies entspricht leider nicht den Tatsachen.\n\nNach einer Umfrage unter allen Haushalten sind in 14 von 24 Wohnungen die Heizkörper seit Ende Oktober kalt. Der Mangel ist Ihnen bereits am 20. Oktober schriftlich angezeigt worden. Angesichts der derzeitigen Außentemperaturen handelt es sich zweifellos um einen erheblichen Mangel.\n\nWir fordern Sie daher auf, die Heizung bis spätestens 30. November vollständig instand zu setzen. Andernfalls sehen wir uns gezwungen, die Miete ab Dezember angemessen zu mindern. Sie hätten den Schaden unserer Ansicht nach längst beheben müssen.\n\nBezüglich der von Ihnen angekündigten Mieterhöhung weisen wir darauf hin, dass in Köln eine Kappungsgrenze von 15 Prozent innerhalb von drei Jahren gilt. Wir bitten um eine entsprechende Überprüfung.\n\nWir wären Ihnen für eine schriftliche Stellungnahme bis zum 25. November dankbar.\n\nMit freundlichen Grüßen\nSalma El Idrissi (im Namen der Mietergemeinschaft Lindenstraße 12)',
          160,
        ),
        graded(choice('"Damit komme ich zum nächsten Punkt." =', ['Daba nmchiw l n-no9ta l-jaya', 'Salit', 'Ma 3endich l-we9t'], 0)),
        graded(choice('"eigenmächtig" =', ['b rasou / bla idn', 'b l-ijma3', 'b ladab'], 0)),
        graded(choice('"Andernfalls …" kat9ddem…', ['Chno ghadi y9e3 ila ma darouch l-matloub', 'Ch-chokr', 'L-mawdou3'], 0)),
        graded(dictation('Sme3 o kteb', 'Der Mangel ist Ihnen bereits im Oktober schriftlich angezeigt worden.')),
        summary(
          [
            'Presentation: **Einstieg → Gliederung → Übergänge → Betonung → Zusammenfassung → Fragen**.',
            'Chakwa: **Bezug nehmen auf — Dies entspricht nicht den Tatsachen — Wir fordern Sie auf … bis spätestens … — Andernfalls …**',
          ],
          ['Tfhem presentation', 'Tfhem bra rasmiya', 'Tkteb chakwa rasmiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 12',
      description: 'Muraja3a: t-tasyir, l-presentation, l-bra r-rasmiya o l-grammaire d B2 — o t-test.',
      minutes: 30,
      kind: 'review',
      goals: ['Traja3 Redemittel t-tasyir o l-presentation', 'Traja3 l-grammaire d B2', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'T-tawasol r-rasmi o l-grammaire d B2 kamla.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - Tasyir: **Sie hatten sich gemeldet? — Entschuldigung, wenn ich unterbreche — Ich fasse zusammen**
            - Presentation: **Mein Vortrag besteht aus … — Damit komme ich zu … — Vielen Dank für Ihre Aufmerksamkeit**
            - Bra: **Bezug nehmen — wir fordern Sie auf — andernfalls — wir wären Ihnen dankbar**
          `,
        ),
        dialogue(
          'Das Ergebnis',
          [
            ['Youssef', 'Salma, du glaubst es nicht: Die Heizung ist gestern repariert worden!', 'Salma, ma ghadich tsddqi: t-tadfi2a tsl7at l-bare7!'],
            ['Salma', 'Endlich! Und die Mieterhöhung?', 'Akhiran! O z-zyada f l-kra?'],
            ['Youssef', 'Die Verwaltung schreibt, man habe die Berechnung noch einmal geprüft. Die Erhöhung werde auf 15 Prozent reduziert.', 'L-idara katkteb belli 3awdou rag3ou l-7isab. Z-zyada ghadi tn9es l 15 %.'],
            ['Salma', 'Siehst du – hätten wir nichts gesagt, hätten sie nichts geändert.', 'Chefti — kun ma goulna walou, kun ma beddlou walou.'],
          ],
        ),
        choice('Imta tsl7at t-tadfi2a?', ['L-youm', 'L-bare7', 'Ma tsl7atch'], 1),
        choice('Chno w9e3 l z-zyada?', ['Tlghat', 'N9sat l 15 %', 'B9at b7al ma hiya'], 1),
        gap('Kemmel', 'Die Heizung ist gestern repariert ___. Die Verwaltung schreibt, man ___ die Berechnung geprüft.', ['worden', 'habe']),
        match('Rbet', [
          ['Ich begrüße Sie zu …', 'Tfte7'],
          ['Ich fasse zusammen: …', 'Tlakhkhes'],
          ['Damit komme ich zu …', 'Tmchi l n-no9ta l-jaya'],
          ['Andernfalls …', 'T3ber 3la l-3wa9ib'],
        ]),
        speak(
          'Presentation 9siira',
          '9ddem f 2 d9a9i mawdou3 men khtiyarek (machrou3 f l-khedma, jam3iya, 7ay …): Einstieg, Gliederung, 2 no9at m3a Übergänge, Zusammenfassung, o jaweb 3la so2al.',
          ['Ich möchte Ihnen heute unser neues Projekt vorstellen.', 'Mein Vortrag besteht aus drei Teilen.', 'Damit komme ich zum zweiten Punkt.', 'Besonders hervorheben möchte ich, dass …', 'Lassen Sie mich kurz zusammenfassen. Vielen Dank für Ihre Aufmerksamkeit!'],
        ),
        graded(choice('Bach tw9ef chi wa7ed b ladab:', ['Entschuldigung, wenn ich Sie kurz unterbreche …', 'Hören Sie auf!', 'Ruhe bitte!'], 0)),
        graded(choice('"Darauf komme ich gleich noch zurück." katgoulha mlli…', ['So2al ghadi tjaweb 3lih men b3d', 'Ma fhemtich', 'Salit'], 0)),
        graded(choice('"Der Brief ___ gestern abgeschickt worden."', ['ist', 'hat', 'wird'], 0)),
        graded(choice('"Sie behaupten, die Anlage ___ funktionsfähig."', ['sei', 'ist', 'wäre gewesen'], 0)),
        graded(choice('"Sie ___ den Schaden längst beheben müssen."', ['hätten', 'wären', 'würden'], 0)),
        graded(choice('"aufgrund der seit Wochen ___ Heizung" (defekt sein → kaputt gehen, P.II)', ['kaputten', 'kaputt gegangenen', 'Ij-jouj s7a7'], 2)),
        graded(choice('Rasmi l "Schreiben Sie bitte schnell zurück."', ['Wir bitten um eine zeitnahe Stellungnahme.', 'Schreib mal zurück!', 'Antworten Sie halt.'], 0)),
        graded(choice('"einstimmig" =', ['b l-ijma3', 'b l-aghlabiya', 'bla tasweet'], 0)),
        graded(translate("Terjem l l'Almaniya (rasmi)", 'Choukran 3la l-intibah dyalkom.', ['Vielen Dank für Ihre Aufmerksamkeit.', 'Danke für Ihre Aufmerksamkeit.'])),
        graded(dictation('Sme3 o kteb', 'Andernfalls sehen wir uns gezwungen, die Miete zu mindern.')),
        summary(
          [
            'Daba t9der tsiyer n9ach, t9ddem presentation o tkteb bra rasmiya b l-grammaire d B2.',
            'F l-unité 13: **Prüfungstraining B2** — Goethe / ÖSD o telc B2.',
          ],
          ['Tsiyer n9ach', 'T9ddem presentation', 'Tkteb chakwa rasmiya', 'Tkhdem l-grammaire d B2'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
