import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 7,
  title: 'Gesellschaft & Generationen',
  description: "L-ajyal, l-3a2ila o l-mojtama3 — b Relativsätze b wer / was / wo(r)-, dessen / deren, o prépositions m3a Relativpronomen.",
  icon: 'diversity_1',
  objectives: [
    'T9aren bin l-ajyal o l-9iyam dyalhom',
    'Tnaqech l-mas2ouliya 3la l-walidin l-kbar f Almaniya o l-Maghrib',
    'Tkhdem Relativsätze b dessen / deren o b prépositions',
    'Tkhdem wer, was, wo(r)- f Relativsätze',
    'Tkteb ra2y f forum 3la mawdou3 ijtima3i',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Boomer, Gen Z & wir',
      description: 'L-kalimat dyal l-ajyal o l-mojtama3, o kifach tnaqech l-far9 bin l-ajyal bla ta3mim.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-ajyal o l-mojtama3', 'T9aren bin l-ajyal b ta7affodh', 'Tjenneb t-ta3mim f l-hedra'],
      steps: [
        intro(
          'Generationenkonflikt?',
          'F l-WG, Herr Krüger (l-jar, 72 3am) dkhel l l-kouzina 3la 9hwa. N-n9ach bda 3la l-khedma, s-sakan… o "jil l-yawm".',
          ['L-ajyal', 'L-mo9arana', 'T-ta3mim'],
        ),
        dialogue(
          'Kaffee mit Herrn Krüger',
          [
            ['Herr Krüger', 'Ihr jungen Leute wollt ja alle nur noch vier Tage arbeiten. Wir haben damals 48 Stunden geschuftet!', 'Ntouma ch-chabab kollkom bghitou tkhdmou ghir 4 iyyam. 7na bekri khdemna 48 sa3a!'],
            ['Nina', 'Das ist ein bisschen pauschal, Herr Krüger. Wer heute jung ist, hat ganz andere Sorgen: Mieten, die man kaum bezahlen kann, und befristete Verträge.', 'Hadchi ta3mim chwiya, Herr Krüger. Li chab l-yawm 3endou hmoum mkhtalfa: kraw ma kat-t9derch tkhllsou, o 3o9oud mo2a99ata.'],
            ['Herr Krüger', 'Da ist was dran. Ich habe mein Haus mit 30 gekauft – das ist heute kaum noch möglich.', 'Fih chi 7a99. Chrit dari f 30 3am — hadchi daba tqriban mosta7il.'],
            ['Youssef', 'Bei uns in Marokko leben oft drei Generationen unter einem Dach. Meine Großmutter, deren Rat in der Familie sehr wichtig ist, wohnt bei meinen Eltern.', '3andna f l-Maghrib ghaliban kay3ichou 3 ajyal ta7t s9f wa7ed. Jedda, li n-nasi7a dyalha mohimma bzaf f l-3a2ila, sakna m3a waldiya.'],
            ['Herr Krüger', 'Das finde ich schön. Meine Kinder, die in München wohnen, sehe ich nur zweimal im Jahr.', 'Hadchi kay3jebni. Wladi, li saknin f München, kanchoufhom ghir jouj d l-merrat f l-3am.'],
            ['Nina', 'Was ich gelernt habe: Von Ihnen können wir viel lernen – und vielleicht Sie auch ein bisschen von uns?', 'Li t3llemt: n9drou nt3llmou mennek bzaf — o yemken nta ta chwiya menna?'],
            ['Herr Krüger', 'Na gut. Zeigen Sie mir mal, wie dieses WhatsApp funktioniert, worüber meine Enkel ständig reden!', 'Wakha. Werriwni kifach kaykhdem had l-WhatsApp li 7fadi dima kayhdrou 3lih!'],
          ],
        ),
        vocab('Gesellschaft & Generationen — L-mojtama3 o l-ajyal', [
          ['die Generation', 'j-jil', 'die Generationen'],
          ['der Generationenkonflikt', 's-sira3 bin l-ajyal', ''],
          ['pauschal', 'mo3ammam (généralisation)', ''],
          ['das Vorurteil', 'l-7okm l-mosba9 (préjugé)', 'die Vorurteile'],
          ['der Zusammenhalt', 't-tamasok / t-tadamon', ''],
          ['die Rente', 'l-ma3ach (retraite)', ''],
          ['der demografische Wandel', 't-taghyir d-dimoghrafi (t-tchyikh d l-mojtama3)', ''],
          ['pflegebedürftig', 'm7taj r-ri3aya', ''],
          ['das Pflegeheim', 'dar l-3ajaza (maison de retraite)', ''],
          ['das Mehrgenerationenhaus', 'dar l-ajyal (markaz l-li9a2)', ''],
          ['befristet / unbefristet', 'mo2a99at / da2im (3a9d)', ''],
          ['die Wertvorstellung', 'l-9iyam / t-tasawwor d l-9iyam', 'die Wertvorstellungen'],
          ['sich kümmern um', 'tthalla f', ''],
          ['die Verantwortung', 'l-mas2ouliya', ''],
        ]),
        explain(
          'Tjenneb t-ta3mim',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tnbbeh l t-ta3mim | "Das ist (mir) zu pauschal." — "Das kann man so nicht verallgemeinern." |
            | t9ayyed | "Das trifft auf **manche / einige**, aber nicht auf alle zu." — "**Tendenziell** …" |
            | t3terf b jouz2 | "Da ist (et)was dran." — "Das stimmt zum Teil." |
            | tbddel l-mandhour | "Man muss auch bedenken, dass …" — "Aus Sicht der Jüngeren / Älteren …" |
          `,
          [
            ['Das kann man so nicht verallgemeinern.', 'Ma ymkench t3emmem hadchi haka.'],
            ['Da ist was dran.', 'Fih chi 7a99.'],
          ],
        ),
        match('Rbet', [
          ['pauschal', 'mo3ammam'],
          ['das Vorurteil', 'l-7okm l-mosba9'],
          ['der Zusammenhalt', 't-tamasok'],
          ['pflegebedürftig', 'm7taj r-ri3aya'],
          ['befristet', 'mo2a99at'],
        ]),
        choice('Chno kaygoul Herr Krüger 3la ch-chabab f l-bidaya?', ['Kaykhdmou bzaf', 'Bghaw ghir 4 iyyam', 'Ghanyin'], 1),
        choice('Ach men hmoum 3and ch-chabab 3la 7sab Nina?', ['L-kraw o l-3o9oud l-mo2a99ata', 'L-ma3ach', 'S-safar'], 0),
        choice('Ch7al d l-merrat kaychouf Herr Krüger wladou?', ['Kol simana', 'Jouj d l-merrat f l-3am', 'Abadan'], 1),
        gap('Kemmel', 'Das ist mir zu ___. Das trifft auf manche, aber nicht auf alle ___.', ['pauschal', 'zu']),
        order('Rtteb', 'Das kann man so nicht verallgemeinern.'),
        culture(
          'L-ajyal f Almaniya',
          md`
            - **Demografischer Wandel:** tqriban **1 men 5** f Almaniya 3endou ktar men 67 3am — o r-ra9m kayzid. Hadchi kay2ather 3la **r-Rente** o 3la **n-n9s f l-momarridin**.
            - **Pflege:** ktar d l-mrad l-kbar kayt-tmarrdou **f d-dar** (ghaliban men l-3a2ila), machi f Pflegeheim. Kayn **Pflegegeld** men Pflegeversicherung.
            - **Mehrgenerationenhäuser:** mrakez f bzaf d l-moudoun fin kayt-la9aw l-ajyal (9raya, makla, anchita) — mzyanin bach t3ref n-nas o tdrreb l-almaniya.
            - **Elternunterhalt:** f Almaniya, l-wlad 9anouniyan momkin ykounou mjbourin ycharkou f masarif r-ri3aya d l-walidin — walakin ghir ila kan d-dakhl dyalhom kbir (ktar men 100 000 € f l-3am).
          `,
        ),
        speak(
          'Jilek o jil waldik',
          '9aren bin jilek o jil waldik: l-khedma, s-sakan, l-9iyam. Jenneb t-ta3mim (tendenziell, manche, das trifft zu …).',
          ['Tendenziell ist meine Generation flexibler, was den Job angeht.', 'Meine Eltern haben ihr ganzes Leben bei einer Firma gearbeitet.', 'Das trifft aber nicht auf alle zu.', 'Man muss auch bedenken, dass die Mieten heute viel höher sind.'],
        ),
        graded(choice('"das Vorurteil" =', ['l-7okm l-mosba9', 'l-ma3ach', 'j-jil'], 0)),
        graded(choice('"Da ist was dran." =', ['Fih chi 7a99', 'Ghalat kamel', 'Ma fhemtch'], 0)),
        graded(gap('Kemmel', 'Durch den demografischen ___ gibt es immer mehr ältere Menschen.', 'Wandel')),
        graded(translate("Terjem l l'Almaniya", 'Ma ymkench t3emmem hadchi haka.', ['Das kann man so nicht verallgemeinern.', 'Man kann das so nicht verallgemeinern.'])),
        summary(
          [
            'L-ajyal: **die Generation, pauschal, das Vorurteil, der Zusammenhalt, die Rente, der demografische Wandel, pflegebedürftig**.',
            'Bla ta3mim: **Das ist zu pauschal. — Tendenziell … — Das trifft auf manche zu. — Da ist was dran.**',
          ],
          ['T9aren bin l-ajyal', 'Tjenneb t-ta3mim'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Wer, was, dessen, deren — Relativsätze für Fortgeschrittene',
      description: 'Relativpronomen f l-Genitiv (dessen / deren), m3a prépositions, o wer / was / wo(r)-.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem dessen / deren', 'Tkhdem préposition + Relativpronomen', 'Tkhdem wer … (der) o was', 'Tkhdem wo(r)- o wo f Relativsätze'],
      steps: [
        intro(
          '"Meine Großmutter, deren Rat sehr wichtig ist …"',
          md`
            Youssef 9al: "Meine Großmutter, **deren** Rat …" o Nina: "**Wer** heute jung ist, …" o "**Was** ich gelernt habe: …". O Herr Krüger: "WhatsApp, **worüber** meine Enkel reden".
            F B1 t3llemti der / die / das — daba ghadi nkmmlou.
          `,
          ['dessen / deren', 'Präposition + Relativ', 'wer / was / wo(r)-'],
        ),
        explain(
          'Genitiv: dessen / deren',
          md`
            **dessen** (m / n) · **deren** (f / pl) = "**li … dyalou / dyalha / dyalhom**":

            > Der Mann, **dessen** Auto kaputt ist, … (r-rajel li t-tomobil **dyalou** khasra)
            > Das Kind, **dessen** Mutter Ärztin ist, … (d-dri li **mmou** tbiba)
            > Die Frau, **deren** Sohn hier studiert, … (l-mra li **wldha** kay9ra hna)
            > Die Nachbarn, **deren** Hund ständig bellt, … (l-jiran li **l-kelb dyalhom** …)

            ⚠️ **dessen / deren** kayt3alla9 b **mol chi** (l-mojtama3 li 9bel l-fasila) — machi b s-smiya li men b3dou.
            ⚠️ S-smiya men b3d dessen / deren **bla article**: "dessen ~~das~~ Auto" ✗. Adjectif m3aha = terminaison **9wiya**: "dessen **neues** Auto".
          `,
          [
            ['Das ist die Kollegin, deren Mann bei Bosch arbeitet.', 'Hadi hiya l-kollega li rajelha kaykhdem f Bosch.'],
            ['Der Autor, dessen Roman ich gelesen habe, kommt nach Köln.', 'L-kateb li 9rit r-riwaya dyalou ghadi yji l Köln.'],
          ],
        ),
        choice('"Der Nachbar, ___ Hund immer bellt, ist nett."', ['dessen', 'deren', 'dem'], 0),
        choice('"Die Studentin, ___ Eltern in Fès wohnen, …"', ['dessen', 'deren', 'die'], 1),
        choice('"Die Kinder, ___ Schule geschlossen ist, …"', ['dessen', 'deren', 'denen'], 1),
        gap('Kemmel', 'Das Haus, ___ Dach kaputt ist, wird renoviert.', 'dessen'),
        explain(
          'Préposition + Relativpronomen',
          md`
            Ila l-fi3l kay7taj préposition, katji **9bel** l-pronom relatif, o l-7ala kat-t7dded b **l-préposition**:

            > Das ist der Freund. Ich habe **mit ihm** gesprochen. → der Freund, **mit dem** ich gesprochen habe
            > Das ist die Stadt. Ich träume **von ihr**. → die Stadt, **von der** ich träume
            > Das sind die Kollegen. Ich warte **auf sie**. → die Kollegen, **auf die** ich warte

            **Jam3 f Dativ = denen**: die Leute, **mit denen** ich arbeite.
            **+ Genitiv:** die Firma, **in deren** Büro ich arbeite · der Freund, **mit dessen** Hilfe …
          `,
          [
            ['Das ist das Thema, über das wir gestern gesprochen haben.', 'Hada howa l-mawdou3 li hdrna 3lih l-bare7.'],
            ['Die Menschen, mit denen ich arbeite, sind sehr nett.', 'N-nas li kankhdem m3ahom drafa bzaf.'],
          ],
        ),
        choice('"Das ist der Kollege, ___ ich mich verlassen kann."', ['auf den', 'auf dem', 'den'], 0),
        choice('"Die Freunde, ___ ich in Urlaub fahre, …"', ['mit denen', 'mit den', 'mit die'], 0),
        gap('Kemmel', 'Das ist die Firma, für ___ ich seit drei Jahren arbeite.', 'die'),
        order('Rtteb', 'Das ist das Thema, über das wir gesprochen haben.'),
        explain(
          'wer / was / wo(r)- / wo',
          md`
            | Pronom | Imta | Mital |
            |---|---|---|
            | **wer … (der)** | "li" 3amm (chakhs ma m3ayyench) | **Wer** zu spät kommt, (**der**) muss warten. |
            | **was** | men b3d **das, alles, nichts, etwas, vieles, manches** | Das ist **alles, was** ich weiß. |
            | **was** | men b3d **superlatif neutre** | Das ist **das Beste, was** mir passiert ist. |
            | **was** | 3la **jomla kamla** | Er hat bestanden, **was** mich sehr freut. |
            | **wo(r)- + préposition** | ila **was** kay7taj préposition | Das ist etwas, **worüber** ich nachdenken muss. · Er kam pünktlich, **worüber** ich mich freute. |
            | **wo** | l-makan (wla z-zaman) | die Stadt, **wo** (= in der) ich wohne · in dem Moment, **wo** … |

            **wer** m3a 7ala khra: "**Wem** das nicht gefällt, **der** kann gehen." (Dativ) — ila kanet l-7ala mkhtalfa, **der / dem / den** darouri.
          `,
          [
            ['Wer viel liest, schreibt besser.', 'Li kay9ra bzaf, kaykteb a7ssen.'],
            ['Es gibt nichts, was ich bereue.', 'Ma kayn walou li ndemt 3lih.'],
            ['Sie hat mir geholfen, wofür ich ihr dankbar bin.', '3awnatni, o 3la hadchi ana mmtenn liha.'],
          ],
        ),
        choice('"Das ist alles, ___ ich weiß."', ['das', 'was', 'wer'], 1),
        choice('"___ Deutsch lernen will, muss Geduld haben."', ['Wer', 'Der', 'Was'], 0),
        choice('"Er hat die Prüfung bestanden, ___ mich sehr freut."', ['das', 'was', 'worüber'], 1),
        choice('"Das ist etwas, ___ ich mich freue." (sich freuen über)', ['worüber', 'über das', 'was'], 0),
        gap('Kemmel', 'Das war das Schönste, ___ ich je erlebt habe.', 'was'),
        translate("Terjem l l'Almaniya", 'Li kay9ra bzaf, kaykteb a7ssen.', ['Wer viel liest, schreibt besser.', 'Wer viel liest, der schreibt besser.']),
        graded(choice('"Der Lehrer, ___ Unterricht mir gefällt, …"', ['dessen', 'deren', 'dem'], 0)),
        graded(choice('"Die Familie, ___ Haus ich gemietet habe, …"', ['deren', 'dessen', 'die'], 0)),
        graded(choice('"Die Leute, ___ ich gesprochen habe, waren nett."', ['mit denen', 'mit den', 'mit die'], 0)),
        graded(gap('Kemmel', 'Das ist der Termin, an ___ ich immer denken muss.', 'den')),
        graded(choice('"Nichts, ___ er sagt, stimmt."', ['was', 'das', 'wer'], 0)),
        graded(choice('"___ mir hilft, dem helfe ich auch."', ['Wer', 'Wem', 'Der'], 0)),
        graded(choice('"Er hat sich entschuldigt, ___ ich nicht gerechnet hatte." (rechnen mit)', ['womit', 'mit dem', 'was'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Hadi hiya l-mra li wldha kay9ra m3aya.', ['Das ist die Frau, deren Sohn mit mir studiert.', 'Das ist die Frau, deren Sohn mit mir lernt.'])),
        summary(
          [
            '**dessen** (m / n) · **deren** (f / pl) = li … dyalou / dyalha — s-smiya men b3d bla article.',
            '**Préposition + der / die / das / denen** (Dat pl.) · + Gen.: **in deren / mit dessen**.',
            '**wer** (li — chakhs 3amm) · **was** (men b3d alles, nichts, das Beste, jomla) · **wo(r)-** (was + préposition) · **wo** (l-makan).',
          ],
          ['Tkhdem dessen / deren', 'Tkhdem préposition + Relativpronomen', 'Tkhdem wer / was / wo(r)-'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Wer kümmert sich um unsere Eltern?',
      description: 'T9ra ripourtaj 3la r-ri3aya d l-walidin men l-b3id, tsme3 interview, o tkteb ra2y f forum.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem ripourtaj (Reportage) b 3iddat a9wal', 'Tfhem interview 3la l-Ehrenamt l-ajyal', 'Tkteb ra2y mo3allal f forum'],
      steps: [
        intro(
          'Pflege auf Distanz',
          'Youssef khddam f t-tamrid — o jeddatou f Casa mrida. Kayfekker: chkoun ghadi ytthalla f waldih mlli ykbrou, o houwa f Almaniya?',
          ['T9ra r-ripourtaj', 'Tsme3', 'Tkteb'],
        ),
        reading(
          'Zwischen zwei Ländern: Pflege aus der Ferne',
          md`
            Samira B., 41, lebt seit zwanzig Jahren in Frankfurt. Ihre Mutter, deren Gesundheit sich seit einem Schlaganfall stark verschlechtert hat, lebt allein in Oujda. „Jeden Abend rufe ich sie per Video an. Aber das, was sie eigentlich bräuchte, kann ich von hier aus nicht leisten", sagt Samira.

            Wie ihr geht es vielen Menschen, deren Eltern im Herkunftsland geblieben sind. Fachleute sprechen von „Distance Caregiving". Die Betroffenen fühlen sich oft hin- und hergerissen zwischen ihrem Leben in Deutschland, in das sie viel investiert haben, und dem Gefühl, ihre Pflicht gegenüber den Eltern nicht zu erfüllen.

            Hinzu kommen praktische Fragen: Wer organisiert Arztbesuche? Wem vertraut man die Pflege an? Samira hat schließlich eine Nachbarin ihrer Mutter gefunden, mit der sie sich die Verantwortung teilt. Ihre Geschwister, die in Spanien und Belgien leben, beteiligen sich an den Kosten.

            „Was mir am meisten hilft, ist der Austausch mit anderen", erzählt Samira. In einer Online-Gruppe, in der sich Menschen aus verschiedenen Ländern vernetzen, findet sie Verständnis – und praktische Tipps.
          `,
          {
            text: '9ra r-ripourtaj o jaweb.',
            glossary: [
              ['der Schlaganfall', 'l-jalta d l-mokh (AVC)'],
              ['sich verschlechtern', 'tkhwwer / tdahwer'],
              ['leisten', 'dar / 9der 3la'],
              ['hin- und hergerissen', 'mtqassem / mtrdded'],
              ['die Pflicht erfüllen', 'dar l-wajib'],
              ['anvertrauen', 'amman (chi wa7ed) 3la'],
              ['sich beteiligen an', 'charek f'],
              ['sich vernetzen', 'ttasel m3a ba3dhom (réseau)'],
            ],
          },
        ),
        choice('Chno w9e3 l mm Samira?', ['Tzewjat', 'Jatha jalta d l-mokh', 'Mchat l Frankfurt'], 1),
        choice('Kifach kat7ess bzaf d n-nas f "Distance Caregiving"?', ['Fr7anin', 'Mtqassmin bin 7yathom o l-wajib', 'Ma kayhmmhomch'], 1),
        choice('Chkoun kaytcharek m3a Samira l-mas2ouliya?', ['Khoutha', 'Jarat mmha', 'Tbib'], 1),
        choice('Chno kay3awenha ktar?', ['L-flous', 'T-tabadol m3a nas khrin', 'S-safar'], 1),
        listening(
          'Interview: Leihgroßeltern',
          [
            ['Reporterin', 'Frau Hoffmann, Sie sind „Leihoma". Was bedeutet das?', 'Madame Hoffmann, nti *jedda b l-i3ara*. Chno kay3ni hadchi?'],
            ['Frau Hoffmann', 'Ich betreue einmal pro Woche zwei Kinder, deren Großeltern weit weg wohnen – in diesem Fall in Syrien. Wir spielen, lesen und backen zusammen.', 'Kantthalla merra f s-simana f jouj d l-wlad, li jeddathom b3ad — f had l-7ala f Souriya. Kanl3bou, kan9raw o kan3jnou m3a ba3d.'],
            ['Reporterin', 'Wie sind Sie dazu gekommen?', 'Kifach wsselti l hadchi?'],
            ['Frau Hoffmann', 'Nach meiner Pensionierung fühlte ich mich nutzlos. Meine eigenen Enkel leben in Kanada. Eine Vermittlungsstelle, an die ich mich gewandt hatte, hat mich mit der Familie zusammengebracht.', 'Men b3d t-ta9a3od, kunt kan7ess belli ma b9itch nafe3a. 7fadi saknin f Canada. Wa7d l-markaz d l-wasata, li ttaslt bih, jm3ni m3a l-3a2ila.'],
            ['Reporterin', 'Und was haben Sie davon?', 'O chno kat-staffdi nti?'],
            ['Frau Hoffmann', 'Unglaublich viel! Wer glaubt, dass nur die Kinder profitieren, der irrt sich. Ich lerne sogar ein paar Wörter Arabisch.', 'Bzaf bzaf! Li kaydhen belli ghir d-drari kaystafdou, ghalat. 7ta ana kant3llem chi kalimat b l-3arbiya.'],
          ],
        ),
        choice('Chno kat-dir Frau Hoffmann?', ['Kat9arri f l-madrasa', 'Kat-thalla f d-drari li jeddathom b3ad', 'Kat-khdem f Pflegeheim'], 1),
        choice('3lach bdat?', ['Bghat l-flous', 'Men b3d t-ta9a3od kan7ess belli ma b9atch nafe3a', 'L-3a2ila dyalha tlbat'], 1),
        choice('Chno kat-goul 3la l-faydah?', ['Ghir d-drari kaystafdou', 'Hiya ta kat-staffed bzaf', 'Ma kaynach faydah'], 1),
        pron(
          'dessen / deren',
          '"dessen" b ss 9wiya o e 9siira · "deren" b e twila f l-lowel.',
          [
            ['der Mann, dessen Auto …', '"dess-en"'],
            ['die Frau, deren Sohn …', '"dee-ren"'],
            ['die Kinder, deren Eltern …', '"dee-ren"'],
          ],
        ),
        write(
          'Forumsbeitrag: Pflege der Eltern',
          md`
            F forum, so2al: "**Sollten Kinder ihre alten Eltern selbst pflegen – oder ist ein Pflegeheim die bessere Lösung?**"
            Kteb ra2yek (~150 kelma): 9aren bin l-Maghrib o Almaniya, 3ti 7ojaj m3a amthila, o 3ti ra2y mtwazen.
            Khdem 2 **dessen / deren**, 2 **préposition + Relativpronomen**, o wa7ed b **wer** wla **was**.
          `,
          ['Tqdim (Diese Frage, über die …)', 'L-Maghrib (In Marokko, wo …)', 'Almaniya (In Deutschland …)', '7ojaj (Wer …, der …)', 'Ra2yek (Was ich am wichtigsten finde, …)'],
          'Diese Frage, über die in vielen Familien gestritten wird, betrifft auch mich persönlich.\n\nIn Marokko, wo die Familie traditionell eine große Rolle spielt, werden ältere Menschen meistens zu Hause gepflegt. Ein Pflegeheim gilt bei vielen als Zeichen dafür, dass man seine Pflicht nicht erfüllt.\n\nIn Deutschland ist die Situation anders: Viele Kinder, deren Eltern in einer anderen Stadt leben, können die Pflege gar nicht selbst übernehmen. Außerdem ist professionelle Pflege, für die man eine lange Ausbildung braucht, oft besser für schwer kranke Menschen.\n\nWer seine Eltern zu Hause pflegt, der braucht viel Unterstützung – sonst wird er selbst krank. Als Pflegekraft erlebe ich oft Angehörige, deren Kräfte am Ende sind.\n\nWas ich am wichtigsten finde: Es gibt keine perfekte Lösung. Entscheidend ist, dass die Eltern gut versorgt sind und sich nicht allein fühlen – egal, ob zu Hause oder im Heim.',
          120,
        ),
        graded(choice('"sich verschlechtern" =', ['tkhwwer', 't7ssen', 'b9a thabet'], 0)),
        graded(choice('"sich beteiligen an" =', ['charek f', 'rfed', 'nsa'], 0)),
        graded(choice('"hin- und hergerissen" =', ['mtqassem / mtrdded', 'fr7an', 'mrid'], 0)),
        graded(dictation('Sme3 o kteb', 'Viele Menschen, deren Eltern im Ausland leben, fühlen sich hin- und hergerissen.')),
        summary(
          [
            'R-ri3aya: **der Schlaganfall, pflegebedürftig, die Pflicht erfüllen, anvertrauen, sich beteiligen an, sich vernetzen**.',
            'Distance Caregiving · Leihgroßeltern · Mehrgenerationenhaus.',
          ],
          ['Tfhem ripourtaj', 'Tfhem interview', 'Tkteb ra2y mo3allal'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 7',
      description: 'Muraja3a: l-ajyal, dessen / deren, préposition + Relativ, wer / was / wo(r)- — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Relativsätze l-motaqaddima', 'Traja3 l-kalimat dyal l-mojtama3', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-ajyal o l-mojtama3, o Relativsätze b kol achkalhom.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - der Mann, **dessen** … · die Frau, **deren** … · die Leute, **deren** …
            - die Kollegen, **mit denen** … · die Stadt, **in der** … · die Firma, **in deren** Büro …
            - **Wer** …, (der) … · alles, **was** … · etwas, **worüber** … · die Stadt, **wo** …
          `,
        ),
        dialogue(
          'Im Mehrgenerationenhaus',
          [
            ['Olena', 'Das ist also das Haus, von dem du mir erzählt hast?', 'Iwa hadi hiya d-dar li 7kiti liya 3liha?'],
            ['Youssef', 'Genau. Hier treffen sich Leute, deren Alter zwischen drei und neunzig liegt.', 'Bdebt. Hna kayt-la9aw nas li 3morhom bin 3 o 90 3am.'],
            ['Olena', 'Und was macht man hier?', 'O chno kaydirou hna?'],
            ['Youssef', 'Alles, was man gemeinsam machen kann: kochen, Hausaufgabenhilfe, Computerkurse für Senioren. Wer Lust hat, kann einfach mitmachen.', 'Kolchi li ymken ydar m3a ba3d: t-tyab, l-mosa3ada f l-wajibat, cours d l-ordinateur l l-kbar. Li bgha, y9der ycharek direct.'],
            ['Olena', 'Das ist genau das, wonach ich gesucht habe!', 'Hada bdebt li kunt kan9elleb 3lih!'],
          ],
        ),
        choice('Chno 3omr n-nas f had d-dar?', ['Ghir ch-chabab', 'Bin 3 o 90 3am', 'Ghir l-kbar'], 1),
        choice('Chkoun y9der ycharek?', ['Ghir l-a3da2', 'Ay wa7ed 3endou r-raghba', 'Ghir d-drari'], 1),
        gap('Kemmel', 'Hier treffen sich Leute, ___ Alter zwischen drei und neunzig liegt. Das ist genau das, ___ ich gesucht habe. (suchen nach)', ['deren', 'wonach']),
        match('Rbet', [
          ['der Mann, dessen …', 'r-rajel li … dyalou'],
          ['die Frau, deren …', 'l-mra li … dyalha'],
          ['Wer …, der …', 'Li …, (houwa) …'],
          ['alles, was …', 'kolchi li …'],
        ]),
        speak(
          'Wsef chakhs mohimm',
          'Wsef chakhs kbir f s-senn li mohimm f 7yatek (jedd, jar, oustad…): chkoun, chno t3llemti menno. Khdem dessen / deren, préposition + Relativ, o was.',
          ['Mein Großvater, dessen Geschichten ich immer geliebt habe, war Fischer in Essaouira.', 'Er war ein Mensch, mit dem man über alles sprechen konnte.', 'Das Wichtigste, was ich von ihm gelernt habe, ist Geduld.'],
        ),
        graded(choice('"Der Junge, ___ Fahrrad gestohlen wurde, weint."', ['dessen', 'deren', 'dem'], 0)),
        graded(choice('"Meine Nachbarn, ___ Kinder sehr laut sind, …"', ['deren', 'dessen', 'denen'], 0)),
        graded(choice('"Das ist die Lehrerin, ___ ich viel gelernt habe."', ['von der', 'von die', 'von dem'], 0)),
        graded(gap('Kemmel', 'Die Freunde, mit ___ ich in Urlaub war, kommen aus Wien.', 'denen')),
        graded(choice('"Das ist das Beste, ___ du tun kannst."', ['was', 'das', 'wo'], 0)),
        graded(choice('"___ zu spät kommt, den bestraft das Leben."', ['Wer', 'Wen', 'Der'], 0)),
        graded(choice('"Er hat mir geholfen, ___ ich ihm sehr dankbar bin." (dankbar für)', ['wofür', 'für das', 'was'], 0)),
        graded(choice('"der Zusammenhalt" =', ['t-tamasok', 'l-ma3ach', 's-sira3'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kolchi li 9al s7i7.', ['Alles, was er gesagt hat, stimmt.', 'Alles, was er sagt, stimmt.', 'Alles, was er gesagt hat, ist richtig.'])),
        graded(dictation('Sme3 o kteb', 'Hier treffen sich Menschen, deren Alter sehr unterschiedlich ist.')),
        summary(
          [
            'Daba t9der tnaqech l-ajyal o l-mojtama3 bla ta3mim, o tkhdem Relativsätze mo3a99adin.',
            'F l-unité 8: t-ta3lim o t-ta3addod l-loughawi — **subjektive Modalverben** (soll, will, muss, dürfte) o **Futur II**.',
          ],
          ['Tnaqech l-ajyal', 'Tkhdem dessen / deren', 'Tkhdem wer / was / wo(r)-', 'Tkteb ra2y f forum'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
