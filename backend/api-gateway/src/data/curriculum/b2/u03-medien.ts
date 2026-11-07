import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 3,
  title: 'Medien & Information',
  description: "L-akhbar, l-i3lam o l-fake news — b Konjunktiv I (indirekte Rede) bach tn9el kalam l-akhrin b d9a o b 7iyad.",
  icon: 'newspaper',
  objectives: [
    'Tfre9 bin l-khbar, r-ra2y o l-i3lan f l-i3lam',
    'Tkchef l-fake news b strategiyat wad7a',
    'Tkhdem Konjunktiv I f l-kalam l-ghayr moubachir',
    'Tn9el ra2y chi wa7ed b 7iyad (laut, zufolge, angeblich)',
    'Tlakhkhes ma9al o t3ti ra2yek fih',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Woher kommen deine Nachrichten?',
      description: 'L-kalimat dyal l-i3lam, l-masadir, o kifach tnaqech th-thi9a f l-akhbar.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-i3lam', 'T9aren bin l-masadir (TV, journal, social media)', 'T3ber 3la ch-chakk o th-thi9a'],
      steps: [
        intro(
          'Eine verdächtige Meldung',
          'F l-WG, Ben werra l Youssef video f TikTok: "Ab Januar wird das Kindergeld abgeschafft!" Youssef ma ti9ch… o Nina khrjat l-masdar.',
          ['L-masadir', 'Th-thi9a', 'Ch-chakk'],
        ),
        dialogue(
          'Fake oder Fakt?',
          [
            ['Ben', 'Habt ihr das gesehen? Hier steht, dass das Kindergeld ab Januar abgeschafft wird!', 'Chftou hadchi? Hna mktoub belli Kindergeld ghadi y-t7iyed men Janvier!'],
            ['Youssef', 'Wer behauptet das denn? Gibt es eine Quelle?', 'Chkoun li kaygoul hadchi? Wach kayn chi masdar?'],
            ['Ben', 'Na ja, ein Influencer. Er sagt, er habe es von einem Insider aus dem Ministerium.', 'Iwa, chi influencer. Kaygoul belli khdah men chi wa7ed men d-dakhel f l-wizara.'],
            ['Nina', 'Moment, ich schau mal nach … Laut Tagesschau hat das Ministerium die Meldung heute dementiert. Ein Sprecher sagte, es gebe keine solchen Pläne.', 'Tsenna, nchouf … 3la 7sab Tagesschau, l-wizara kdbat l-khbar l-youm. Wa7ed n-natiq 9al belli ma kayna 7tta khotta b7al hadi.'],
            ['Ben', 'Oh. Das Video hat aber schon zwei Millionen Klicks.', 'Oh. Walakin l-video deja fih jouj malayin d l-mouchahadat.'],
            ['Youssef', 'Genau das ist das Problem. Je spektakulärer eine Meldung ist, desto schneller verbreitet sie sich – ob sie stimmt oder nicht.', 'Hada howa l-mochkil. Kolma kan l-khbar mothir ktar, kolma tnchar dghya ktar — wach s7i7 wla la.'],
          ],
        ),
        vocab('Medien — L-i3lam', [
          ['die Meldung / die Nachricht', 'l-khbar', ''],
          ['die Quelle', 'l-masdar', 'die Quellen', ['Nenn mir bitte die Quelle.', '3tini l-masdar 3afak.']],
          ['behaupten', 'idda3a', ''],
          ['die Behauptung', 'l-idda3a2', ''],
          ['dementieren', 'kddeb / nfa (rasmiyan)', ''],
          ['verbreiten', 'nchar', ''],
          ['die Falschmeldung / Fake News', 'l-khbar l-kadib', ''],
          ['seriös / unseriös', 'jiddi / machi jiddi', ''],
          ['der Algorithmus', 'l-khwarizmiya', ''],
          ['die Schlagzeile', 'l-3onwan l-kbir (manchette)', ''],
          ['der Artikel / der Kommentar', 'l-ma9al / ma9al r-ra2y', ''],
          ['die öffentlich-rechtlichen Sender', 'l-9anawat l-3ommoumiya', ''],
          ['überprüfen', 'ta2akked / t7a99a9', ''],
          ['manipulieren', 'tlalab b', ''],
        ]),
        explain(
          'Ch-chakk o th-thi9a',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tchekk | "Das halte ich für fragwürdig." — "Ich bezweifle, dass das stimmt." — "Woher stammt diese Information?" |
            | tn9el b 7iyad | "**Laut** + Dat …" — "**Angeblich** …" (kay9oulou) — "**Wie** die Zeitung **berichtet**, …" |
            | tbyyen th-thi9a | "Das ist durch mehrere Quellen belegt." — "Die Quelle gilt als seriös." |
            | t9ra b n-na9d | "Wer steckt hinter der Seite?" — "Wann wurde das veröffentlicht?" |
          `,
          [
            ['Angeblich soll das Gesetz geändert werden.', 'Kaygoulou belli l-9anoun ghadi ytbeddel.'],
            ['Laut einer Studie lesen Jugendliche kaum noch Zeitung.', '3la 7sab dirasa, ch-chabab ma b9awch kay9raw l-journal tqriban.'],
          ],
        ),
        match('Rbet', [
          ['die Quelle', 'l-masdar'],
          ['behaupten', 'idda3a'],
          ['dementieren', 'kddeb rasmiyan'],
          ['verbreiten', 'nchar'],
          ['überprüfen', 't7a99a9'],
        ]),
        choice('Men fin ja l-khbar dyal Ben?', ['Men Tagesschau', 'Men influencer', 'Men l-wizara'], 1),
        choice('Chno 9alet l-wizara?', ['Akkdat l-khbar', 'Kddbat l-khbar', 'Ma 9alet walou'], 1),
        gap('Kemmel', '___ Tagesschau gibt es keine solchen Pläne. ___ soll das Kindergeld wegfallen. (kay9oulou)', ['Laut', 'Angeblich']),
        order('Rtteb', 'Woher stammt diese Information eigentlich?'),
        culture(
          'L-i3lam f Almaniya',
          md`
            - **Öffentlich-rechtlicher Rundfunk** (ARD, ZDF, Deutschlandfunk): mmowel b **Rundfunkbeitrag** (~18 € f ch-chhar l kol dar — 7ta ila ma 3endekch TV!). **Tagesschau** (20:00) howa akbar journal d l-akhbar.
            - **Pressefreiheit** m7miya f l-Grundgesetz (Art. 5).
            - Jarayed 3ommoumiya: *Süddeutsche Zeitung*, *FAZ*, *Die Zeit*, *Der Spiegel*… o "Boulevardpresse" (b7al *Bild*): 3onawin kbar o 3awatif.
            - **Faktenchecks:** *Correctiv*, *ARD-faktenfinder*, *dpa-Faktencheck* — kayt7a99ou men l-akhbar li kaynchrou f l-internet.
            - Bach tt3llem l-almaniya: **Nachrichtenleicht.de** o **"Langsam gesprochene Nachrichten"** (DW) — akhbar b lougha sahla.
          `,
        ),
        speak(
          'Masadir dyalek',
          '7ki men fin katakhod l-akhbar (TV, journal, Instagram…), 3lach, o ach kat-dir bach tt7a99a9 men khbar mchkouk fih.',
          ['Ich informiere mich hauptsächlich über Apps und Podcasts.', 'Sozialen Medien vertraue ich eher weniger.', 'Wenn mir eine Meldung fragwürdig vorkommt, suche ich nach weiteren Quellen.', 'Laut einer seriösen Zeitung ist das nicht korrekt.'],
        ),
        graded(choice('"die Schlagzeile" =', ['l-3onwan l-kbir', 'l-masdar', 'l-i3lan'], 0)),
        graded(choice('"Angeblich …" kat3ni…', ['Kay9oulou (ma mta2kkdch)', 'Akid', 'Rasmiyan'], 0)),
        graded(gap('Kemmel', 'Die Regierung hat die Meldung ___. (kddbat rasmiyan)', 'dementiert')),
        graded(translate("Terjem l l'Almaniya", '3tini l-masdar 3afak.', ['Nenn mir bitte die Quelle.', 'Nenne mir bitte die Quelle.', 'Gib mir bitte die Quelle.', 'Sag mir bitte die Quelle.'])),
        summary(
          [
            'L-i3lam: **die Quelle, die Meldung, behaupten, dementieren, verbreiten, seriös, überprüfen, die Schlagzeile**.',
            'B 7iyad: **laut + Dat, angeblich, wie … berichtet** — ch-chakk: **Das halte ich für fragwürdig.**',
          ],
          ['Tnaqech l-masadir', 'T3ber 3la ch-chakk'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Er sagte, er habe … — Konjunktiv I',
      description: 'Konjunktiv I: l-chakl, imta katkhdmou, l-ma9ra3a m3a Konjunktiv II, o l-madi f indirekte Rede.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkwwen Konjunktiv I (Präsens)', 'Tkhdem Konj. II ila kan Konj. I = Indikativ', 'Tn9el l-madi, l-as2ila o l-awamir f indirekte Rede'],
      steps: [
        intro(
          '"Ein Sprecher sagte, es gebe keine solchen Pläne."',
          md`
            F l-akhbar, s-sa7afi ma kaygoulch "es **gibt** keine Pläne" — kaygoul "es **gebe** …". Had l-chakl smiytou **Konjunktiv I**: kaybyyen belli **had l-kalam dyal chi wa7ed akhor**, machi dyal s-sa7afi — bla ma y7kem wach s7i7.
          `,
          ['Konj. I', 'Konj. II f blastou', 'L-madi'],
        ),
        explain(
          'Konjunktiv I — l-chakl',
          md`
            **Stamm d l-Infinitiv + -e, -est, -e, -en, -et, -en**. F l-isti3mal: ghaliban **er / sie / es** (3/s):

            | Infinitiv | er/sie/es (Konj. I) | Indikativ |
            |---|---|---|
            | haben | er **habe** | hat |
            | kommen | er **komme** | kommt |
            | können | er **könne** | kann |
            | müssen | er **müsse** | muss |
            | wissen | er **wisse** | weiß |
            | werden | er **werde** | wird |
            | **sein** | er **sei** (ich sei, du sei(e)st, wir seien, ihr seiet, sie seien) | ist |

            > Der Minister sagte, er **habe** keine Zeit. · Sie erklärte, sie **komme** später. · Er betonte, das **sei** falsch.
          `,
          [
            ['Die Polizei teilte mit, der Fahrer sei verletzt.', 'B-boulis 3lnat belli s-sa2i9 mjrou7.'],
            ['Der Arzt meint, sie müsse sich schonen.', 'T-tbib kaygoul khassha tr-ta7.'],
          ],
        ),
        choice('"Er sagt: Ich bin müde." → "Er sagt, er ___ müde."', ['ist', 'sei', 'wäre'], 1),
        choice('"Sie sagt: Ich habe keine Zeit." → "Sie sagt, sie ___ keine Zeit."', ['habe', 'hat', 'hatte'], 0),
        gap('Kemmel', 'Der Sprecher erklärte, die Regierung ___ das Problem lösen. (werden)', 'werde'),
        gap('Kemmel', 'Die Ärztin sagt, der Patient ___ im Bett bleiben. (müssen)', 'müsse|muesse'),
        explain(
          'Ila kan Konj. I = Indikativ → Konj. II',
          md`
            F **ich / wir / sie (pl.)** bzaf d l-merrat Konj. I = Indikativ → ma kaybanch l-far9. F had l-7ala katkhdem **Konjunktiv II** (wla **würde** + Inf.):

            | Indikativ | Konj. I | → katkhdem |
            |---|---|---|
            | sie **haben** | sie haben (nefs l-chakl!) | sie **hätten** |
            | sie **kommen** | sie kommen | sie **kämen** / **würden kommen** |
            | sie **können** | sie können | sie **könnten** |

            > Die Studenten sagten, sie **hätten** keine Zeit. (machi "sie haben")
            > Die Firmen erklärten, sie **würden** die Preise senken.
          `,
        ),
        choice('"Die Eltern sagen: Wir haben Sorgen." → "Die Eltern sagen, sie ___ Sorgen."', ['haben', 'hätten', 'habe'], 1),
        choice('"Die Kollegen sagen: Wir kommen später." → "…, sie ___ später."', ['kommen', 'kämen', 'komme'], 1),
        explain(
          'L-madi, l-as2ila o l-awamir',
          md`
            | Moubachir | Indirekte Rede |
            |---|---|
            | **L-madi:** "Ich **war** krank." / "Ich **habe** gewartet." | Er sagt, er **sei** krank **gewesen**. / er **habe** gewartet. |
            | **L-mosta9bal:** "Ich **werde** kommen." | Er sagt, er **werde** kommen. |
            | **So2al W:** "Wann **kommt** der Bus?" | Sie fragt, wann der Bus **komme**. |
            | **So2al ja/nein:** "**Hast** du Zeit?" | Er fragt, **ob** ich Zeit **habe**. |
            | **Amr:** "**Ruf** mich an!" | Sie sagt, ich **solle** sie anrufen. (talab) / ich **möge** … (b ladab) |

            **L-madi** = **sei / habe + Partizip II** (dima — 7ta ila kan l-asl Präteritum).
            **Badel d-dama2er:** "**Ich** komme" → er sagt, **er** komme. "**Mein** Chef" → **sein** Chef.
          `,
          [
            ['Sie sagte, sie habe den Zug verpasst.', 'Galet belli fatha t-tran.'],
            ['Er fragte, ob wir mitkommen wollten.', 'Sowwel wach bghina nmchiw m3ah.'],
          ],
        ),
        choice('"Ich habe nichts gewusst." → "Er behauptet, er ___ nichts gewusst."', ['habe', 'sei', 'hat'], 0),
        choice('"Ich bin nach Berlin gefahren." → "Sie sagt, sie ___ nach Berlin gefahren."', ['habe', 'sei', 'ist'], 1),
        choice('"Kommen Sie bitte pünktlich!" → "Der Chef sagt, wir ___ pünktlich kommen."', ['sollen', 'sollten', 'würden'], 1, 'Konj. I "wir sollen" = Indikativ → Konj. II "sollten".'),
        order('Rtteb', 'Der Minister betonte, er habe davon nichts gewusst.'),
        translate("Terjem l indirekte Rede", 'Sie sagt: „Ich bin krank."', ['Sie sagt, sie sei krank.']),
        graded(choice('"Er sagt: Ich kann nicht kommen." →', ['Er sagt, er könne nicht kommen.', 'Er sagt, er kann nicht kommen.', 'Er sagt, er könnte nicht kommen.'], 0)),
        graded(choice('"Sie sagen: Wir wissen es nicht." →', ['Sie sagen, sie wüssten es nicht.', 'Sie sagen, sie wissen es nicht.', 'Sie sagen, sie wisse es nicht.'], 0)),
        graded(gap('Kemmel', 'Der Zeuge sagte, er ___ nichts gesehen. (haben)', 'habe')),
        graded(gap('Kemmel', 'Die Sängerin erklärte, sie ___ sehr nervös gewesen. (sein)', 'sei')),
        graded(choice('"Wo wohnst du?" → "Er fragt, wo ich ___."', ['wohne', 'wohnst', 'wohnen'], 0)),
        graded(choice('"Hast du Hunger?" → "Sie fragt, ___ ich Hunger habe."', ['ob', 'dass', 'wenn'], 0)),
        graded(choice('Konjunktiv I katkhdmou ghaliban f…', ['L-hedra m3a s-s7ab', 'L-akhbar o n-nousous r-rasmiya', 'Ghir f l-chi3r'], 1)),
        summary(
          [
            '**Konj. I** = stamm + -e: er **habe, komme, könne, werde** · **sei**. Kaybyyen: *had l-kalam dyal chi wa7ed akhor*.',
            'Ila Konj. I = Indikativ → **Konj. II** (hätten, kämen, würden …).',
            'L-madi: **sei / habe + P.II** · so2al: **W-Wort / ob** · amr: **solle / möge**.',
          ],
          ['Tkwwen Konjunktiv I', 'Tn9el kalam l-akhrin'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Desinformation erkennen',
      description: 'T9ra ma9al 3la kifach kaynchrou l-fake news, tsme3 interview m3a fact-checker, o tkteb molakhas b indirekte Rede.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem ma9al t7lili', 'Tfhem interview o tn9el l-mo7tawa b Konj. I', 'Tkteb molakhas (Zusammenfassung) b 7iyad'],
      steps: [
        intro(
          'Faktencheck',
          'F l-cours d B2, l-oustada 3tathom ma9al o interview m3a fact-checker. L-mohimma: molakhas b indirekte Rede.',
          ['T9ra', 'Tsme3', 'Tlakhkhes'],
        ),
        reading(
          'Warum Lügen schneller sind als die Wahrheit',
          md`
            Eine viel zitierte Studie des Massachusetts Institute of Technology (MIT) kam 2018 zu einem beunruhigenden Ergebnis: Falschmeldungen verbreiten sich auf Twitter (heute X) deutlich schneller und weiter als wahre Nachrichten. Verantwortlich dafür seien weniger automatisierte Bots als vielmehr Menschen, so die Forscher.

            Der Grund liegt offenbar in unserer Psyche. Falschmeldungen wirken häufig neuer und überraschender, und sie lösen starke Gefühle wie Wut oder Angst aus. Genau solche Inhalte teilen wir besonders gern – oft, ohne sie überhaupt vollständig gelesen zu haben. Die Algorithmen sozialer Netzwerke verstärken diesen Effekt, da sie Beiträge mit vielen Reaktionen bevorzugt anzeigen.

            Medienpädagogen empfehlen deshalb einfache Fragen, bevor man etwas teilt: Wer ist der Absender? Werden Quellen genannt? Berichten auch andere, seriöse Medien darüber? Und: Will mich der Beitrag vor allem wütend machen? Wer sich diese Fragen angewöhne, so eine Expertin, falle deutlich seltener auf Desinformation herein.
          `,
          {
            text: '9ra l-ma9al o jaweb.',
            glossary: [
              ['beunruhigend', 'mo9li9'],
              ['offenbar', 'kayban / 3la ma yabdou'],
              ['auslösen', 'tlle9 / sbbeb (i7sas)'],
              ['teilen', 'charek (partager)'],
              ['verstärken', '9wwa'],
              ['bevorzugt', 'b l-afdaliya'],
              ['der Absender', 'l-morsil'],
              ['hereinfallen auf', 'ttgha / dkhel f l-fakh'],
            ],
          },
        ),
        choice('3la 7sab dirasat MIT, chkoun l-mas2oul l-kbir 3la nachr l-fake news?', ['L-bots', 'N-nas', 'S-sa7afiyin'], 1),
        choice('3lach kan-charkou l-fake news?', ['7it katbano jdida o kat-tle9 3awatif 9wiya', '7it twila', '7it rasmiya'], 0),
        choice('Chno kaydirou l-khwarizmiyat?', ['Kaynqsou l-intichar', 'Kay9wwiw l-intichar (kaybyynou li fihom reactions ktar)', 'Kay7iydou l-fake news'], 1),
        choice('"so die Forscher" kay3ni…', ['3la 7sab l-ba7itin', 'Bla l-ba7itin', 'Dodd l-ba7itin'], 0),
        listening(
          'Interview mit einer Faktencheckerin',
          [
            ['Reporter', 'Frau Arslan, Sie prüfen jeden Tag Behauptungen aus dem Netz. Was ist im Moment das größte Problem?', 'Madame Arslan, kat-t7a99qi kol nhar men idda3a2at f l-internet. Chno akbar mochkil daba?'],
            ['Frau Arslan', 'Ganz klar: KI-generierte Bilder und Videos. Sie sind inzwischen so gut, dass man sie mit bloßem Auge kaum noch erkennt.', 'Bla chakk: t-tsawer o l-videos li kaydirhom l-KI. Welaw mzyanin bzaf 7tal ma b9itich kat3refhom b l-3in.'],
            ['Reporter', 'Wie gehen Sie dabei vor?', 'Kifach kat-khdmi?'],
            ['Frau Arslan', 'Wir suchen zuerst die Originalquelle, zum Beispiel mit einer umgekehrten Bildersuche. Dann prüfen wir Details: Stimmen Wetter, Schatten, Schilder? Und wir fragen Experten oder Augenzeugen.', 'Kan9ellbou f l-lowel 3la l-masdar l-asli, mathalan b l-ba7th l-ma3kous 3la t-tsawer. Men b3d kanchoufou t-tafasil: wach t-t9s, d-dlal, l-panneaux s7a7? O kansowwlou l-khobara wla ch-chouhoud.'],
            ['Reporter', 'Was raten Sie normalen Nutzern?', 'Chno kat-nse7i l-mosta3milin l-3adiyin?'],
            ['Frau Arslan', 'Innehalten, bevor man teilt. Wenn eine Nachricht extrem wütend macht, ist das oft ein Warnsignal. Lieber zwei Minuten prüfen als eine Lüge weiterverbreiten.', 'Wa9ef chwiya 9bel ma tcharek. Ila chi khbar 3assbek bzaf, hadi ghaliban ichara d t-ta7dir. A7ssen dzid jouj d9a9i f t-ta7a99o9 men ma tnchar kedba.'],
          ],
        ),
        choice('Chno akbar mochkil daba 3la 7sab Frau Arslan?', ['L-jarayed', 'T-tsawer o l-videos dyal l-KI', 'T-tlfaza'], 1),
        choice('Chno l-khotwa l-oula f t-ta7a99o9?', ['Tsowwel l-boulis', 'T9elleb 3la l-masdar l-asli', 'Tms7 l-video'], 1),
        choice('Ach men ichara d t-ta7dir?', ['Khbar ki3assbek bzaf', 'Khbar twil', 'Khbar b l-almaniya'], 0),
        pron(
          'Konj. I: sei, habe, werde',
          'Lahdou l-far9 f n-nte9: "hat" (a 9sira) ↔ "habe" (a twila + e) · "ist" ↔ "sei" (b7al "zai").',
          [
            ['er hat – er habe', '"hat" 9sira, "habe" twila'],
            ['es ist – es sei', '"sei" b7al "zai"'],
            ['sie wird – sie werde', '"werde" b e f l-akhir'],
          ],
        ),
        explain(
          'Kifach tkteb molakhas (Zusammenfassung)',
          md`
            1. **Tqdim:** "In dem Artikel / Interview „…" aus … geht es um …"
            2. **L-afkar r-ra2isiya** b **Konj. I** wla **laut / zufolge**: "Die Autorin **erklärt**, Falschmeldungen **verbreiteten sich** schneller …" — "**Laut** der Studie …" — "Der Studie **zufolge** …" (zufolge **men b3d** s-smiya!)
            3. **Bla ra2yek** f l-molakhas — ra2yek f l-akhir, f paragraphe bou7dou.
            4. Bla **jmel kamla** men n-nass — b kalimatek.

            Af3al l-n9el: *erklären, betonen, behaupten, berichten, meinen, kritisieren, warnen (davor), fordern*.
          `,
        ),
        write(
          'Molakhas d l-interview',
          md`
            Kteb molakhas d l-interview m3a Frau Arslan (~120 kelma) b **indirekte Rede**: chno l-mochkil, kifach kat-khdem, o chno kat-nse7. F l-akhir 3ti ra2yek f 2–3 jmel.
          `,
          ['Tqdim (In dem Interview geht es um …)', 'L-mochkil (Sie erklärt, KI-Bilder seien …)', 'L-manhaj (Zuerst suche man …)', 'N-nasi7a (Sie rät, man solle …)', 'Ra2yek (Meiner Ansicht nach …)'],
          'In dem Interview spricht die Faktencheckerin Frau Arslan über ihre Arbeit und über Desinformation im Internet.\n\nSie erklärt, das größte Problem seien derzeit KI-generierte Bilder und Videos. Diese seien inzwischen so realistisch, dass man sie kaum noch erkennen könne.\n\nBei ihrer Arbeit suche ihr Team zuerst die Originalquelle, zum Beispiel mit einer umgekehrten Bildersuche. Danach prüfe man Details wie Wetter oder Schilder und befrage Experten oder Augenzeugen.\n\nNormalen Nutzern rät sie, vor dem Teilen innezuhalten. Wenn eine Nachricht sehr wütend mache, sei das oft ein Warnsignal.\n\nMeiner Ansicht nach ist dieser Rat sehr wichtig. Ich werde in Zukunft genauer prüfen, was ich weiterleite.',
          100,
        ),
        graded(choice('"auslösen" (3awatif) =', ['tlle9 / sbbeb', 'ms7', 'jme3'], 0)),
        graded(choice('"Der Studie ___ verbreiten sich Lügen schneller."', ['zufolge', 'laut', 'nach dem'], 0)),
        graded(choice('F l-molakhas, ra2yek…', ['F kol jomla', 'F l-akhir, bou7dou', 'Ma kaynch abadan'], 1)),
        graded(dictation('Sme3 o kteb', 'Die Expertin sagt, man solle vor dem Teilen innehalten.')),
        summary(
          [
            'Desinformation: **teilen, Gefühle auslösen, Algorithmen verstärken, der Absender, hereinfallen auf**.',
            'Molakhas: **In dem Artikel geht es um …** + Konj. I / **laut** + Dat / **+ zufolge** — ra2yek f l-akhir.',
          ],
          ['Tfhem ma9al t7lili', 'Tfhem interview', 'Tkteb molakhas b indirekte Rede'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 3',
      description: 'Muraja3a: l-i3lam, Konjunktiv I, laut / zufolge / angeblich — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Konjunktiv I', 'Traja3 l-kalimat dyal l-i3lam', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-i3lam o l-fake news, o kifach tn9el kalam l-akhrin b Konjunktiv I.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - er **habe / sei / könne / werde** · ila = Indikativ → **hätten / wären / würden**
            - L-madi: er **sei** gekommen / er **habe** gesagt
            - **laut** + Dat · Dat + **zufolge** · **angeblich**
          `,
        ),
        dialogue(
          'Redaktionssitzung',
          [
            ['Chefredakteurin', 'Was haben wir zum Brand in der Altstadt?', 'Chno 3endna 3la l-7ari9 f l-mdina l-9dima?'],
            ['Reporter', 'Die Feuerwehr sagt, das Feuer sei gegen drei Uhr ausgebrochen. Verletzt worden sei niemand.', 'L-mtafi kaygoulou belli l-3afya bdat m3a t-tlata. Ma tjre7 7tta wa7ed.'],
            ['Chefredakteurin', 'Und die Ursache?', 'O s-sabab?'],
            ['Reporter', 'Ist noch unklar. Auf Social Media heißt es, es sei Brandstiftung gewesen, aber das ist nicht bestätigt.', 'Mazal ma wadhe7ch. F social media kaygoulou belli kan 7ri9 9asdi, walakin hadchi ma mta2kkdch.'],
            ['Chefredakteurin', 'Dann schreiben wir nur, was belegt ist. Keine Spekulationen!', 'Iwa nkteb ghir li mta2kked. Bla takhminat!'],
          ],
        ),
        choice('Wach tjre7 chi wa7ed?', ['Ah', 'La'], 1),
        choice('Chno 9alet l-mas2oula 3la t-ta7rir?', ['Nkteb kolchi', 'Nkteb ghir li mta2kked', 'Nkteb li f social media'], 1),
        gap('Kemmel', 'Die Feuerwehr sagt, das Feuer ___ gegen drei Uhr ausgebrochen. Verletzt worden ___ niemand.', ['sei', 'sei']),
        match('Direkt → indirekt', [
          ['„Ich habe Zeit."', 'er habe Zeit'],
          ['„Ich bin müde."', 'er sei müde'],
          ['„Wir haben Zeit."', 'sie hätten Zeit'],
          ['„Ich war dort."', 'er sei dort gewesen'],
        ]),
        speak(
          'N9el khbar',
          'Khtar khbar sme3ti l-youm (wla khtar3 wa7ed) o n9elou b indirekte Rede: chkoun 9al, chno 9al, o wach mta2kked. Khdem laut, zufolge, angeblich.',
          ['Laut Tagesschau hat die Regierung einen neuen Plan vorgestellt.', 'Der Minister sagte, man werde die Mieten begrenzen.', 'Kritiker behaupten, das sei nicht genug.', 'Angeblich soll das Gesetz schon im Sommer in Kraft treten.'],
        ),
        graded(choice('"Er sagt: Ich weiß das nicht." → "Er sagt, er ___ das nicht."', ['wisse', 'weiß', 'wüsste'], 0)),
        graded(choice('"Sie sagen: Wir kommen morgen." → "Sie sagen, sie ___ morgen."', ['kämen', 'kommen', 'komme'], 0)),
        graded(gap('Kemmel', 'Der Politiker behauptet, er ___ das Geld nicht genommen. (haben)', 'habe')),
        graded(gap('Kemmel', 'Die Touristin erzählte, sie ___ zum ersten Mal in Köln gewesen. (sein)', 'sei')),
        graded(choice('"Sprechen Sie leiser!" → "Er sagt, wir ___ leiser sprechen."', ['sollten', 'sollen', 'solle'], 0)),
        graded(choice('"___ Polizei gab es keine Verletzten."', ['Laut', 'Zufolge', 'Angeblich'], 0)),
        graded(choice('"Dem Bericht ___ steigen die Mieten weiter."', ['zufolge', 'laut', 'nach'], 0)),
        graded(choice('"dementieren" =', ['kddeb rasmiyan', 'nchar', 'akked'], 0)),
        graded(translate("Terjem l indirekte Rede", 'Er fragt: „Hast du Zeit?"', ['Er fragt, ob ich Zeit habe.', 'Er fragt, ob ich Zeit hätte.'])),
        graded(dictation('Sme3 o kteb', 'Der Sprecher sagte, es gebe keine solchen Pläne.')),
        summary(
          [
            'Daba t9der tn9el kalam l-akhrin b 7iyad o t-t7a99a9 men l-akhbar.',
            'F l-unité 4: l-3oloum o t-tiknoloujiya — **Passiv** f kol l-azmina, **Zustandspassiv** o l-bada2il dyal l-Passiv.',
          ],
          ['Tnaqech l-i3lam', 'Tkhdem Konjunktiv I', 'Tkteb molakhas'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
