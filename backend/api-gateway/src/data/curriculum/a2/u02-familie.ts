import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 2,
  title: 'Familie & Beziehungen',
  description: "L-3a2ila l-kbira, l-3ala9at, l-7aflat o l-hdiyat — o jmel b \"weil\" (l-fi3l f l-akhir) o jouj d l-maf3oulat.",
  icon: 'diversity_3',
  objectives: [
    'Thder 3la l-3a2ila l-kbira o l-3ala9at',
    'T9tare7 hdiya o tchar7 3lach',
    'Tkhdem jouj d l-maf3oulat: "Ich schenke meiner Mutter eine Kette."',
    'T3ti s-sabab b weil (l-fi3l f l-akhir) o denn',
    'Tkteb jawab f forum m3a l-asbab',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Eine Hochzeit in Casablanca',
      description: 'L-3a2ila l-kbira, l-3ala9at, o kifach t9tare7 hdiya.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi n-nas f l-3a2ila l-kbira', 'Thder 3la l-3ala9at (verheiratet, getrennt…)', 'T9tare7 hdiya'],
      steps: [
        intro(
          '3ers wld l-3amm',
          'Wld l-3amm dyal Youssef, **Mehdi**, ghadi ytzowwej f s-sif f Casablanca. Youssef ghadi ymchi l l-3ers o bgha ychri hdiya men Almaniya. Kayhder m3a Lukas.',
          ['Tsemmi l-3a2ila l-kbira', 'Thder 3la l-3ala9at', 'T9tare7 hdiya'],
        ),
        dialogue(
          'Was schenke ich?',
          [
            ['Youssef', 'Mein Cousin Mehdi heiratet im August. Ich fliege nach Casablanca!', 'Wld 3ammi Mehdi ghadi ytzowwej f ghouchtt. Ghadi nmchi l Casablanca!'],
            ['Lukas', 'Cool! Feiert ihr groß?', 'Zwin! Wach ghadi t7tafelou b chkel kbir?'],
            ['Youssef', 'Ja, mit 300 Gästen. Die ganze Verwandtschaft kommt: Onkel, Tanten, Cousinen, Neffen …', 'Ah, b 300 d d-dyaf. L-3a2ila kamla ghadi tji: l-3moumat, l-3mmat, wlad l-3amm, wlad l-khout…'],
            ['Lukas', 'Wow. Und was schenkst du dem Brautpaar?', 'Waw. O chno ghadi tehdi l l-3rousa o l-3ris?'],
            ['Youssef', 'Keine Ahnung. In Marokko schenkt man oft Geld oder Gold.', 'Ma 3reftch. F l-Maghrib ghaliban kayhdiw l-flous wla d-dheb.'],
            ['Lukas', 'Schenk ihnen doch etwas aus Deutschland! Eine schöne Kaffeemaschine vielleicht?', 'Hdi lihom chi 7aja men Almaniya! Machina d l-9ahwa zwina ymken?'],
            ['Youssef', 'Gute Idee, weil Mehdi jeden Morgen Kaffee trinkt!', 'Fikra zwina, 7it Mehdi kaycherb l-9ahwa kol sba7!'],
          ],
        ),
        vocab('Die Verwandtschaft — L-3a2ila l-kbira', [
          ['die Verwandten (Pl.)', 'l-9raba / l-3a2ila', ''],
          ['der Cousin / die Cousine', 'wld l-3amm / l-khal — bent l-3amm / l-khal', ''],
          ['der Neffe / die Nichte', 'wld l-akh / l-okht — bent l-akh / l-okht', 'die Neffen / die Nichten'],
          ['der Enkel / die Enkelin', '7fid / 7fida', ''],
          ['die Schwiegermutter / der Schwiegervater', 'l-7ma / l-7ma (r-rajel)', ''],
          ['der Schwager / die Schwägerin', 'n-nsib / n-nsiba (khou r-rajel / okht l-mra…)', ''],
          ['das Brautpaar', 'l-3rousa o l-3ris', ''],
          ['die Braut / der Bräutigam', 'l-3rousa / l-3ris', ''],
          ['die Hochzeit', 'l-3ers', 'die Hochzeiten'],
          ['verlobt', 'mkhtoub / mkhtouba'],
          ['getrennt', 'mfaregin'],
          ['geschieden', 'mtalle9 / mtall9a'],
          ['der Partner / die Partnerin', 'š-šrik / š-šrika (f l-7ayat)', ''],
          ['sich gut verstehen mit', 'tfahem mzyan m3a', '', ['Ich verstehe mich gut mit meiner Schwester.', 'Kantfahem mzyan m3a khti.']],
          ['sich streiten', 'tkhasem', ''],
        ]),
        explain(
          'Freund o Freundin: ⚠️',
          md`
            - "**ein** Freund / **eine** Freundin" = *sa7b / sa7ba* 3adi.
            - "**mein** Freund / **meine** Freundin" = ghaliban *l-copain / l-copine* (3ala9a d l-7obb)!

            Bach tgoul *sa7bi* bla ma tkhle3 n-nas: "**ein Freund von mir**", "**eine Freundin von mir**", wla "**mein Kumpel**" (3adi, ghir l r-rjal).

            **Imta l-hdiya?** — "zur Hochzeit", "zum Geburtstag", "zu Weihnachten", "zum Eid".
            **Chno katgoul?** — "Ich schenke ihm …" / "Wie wäre es mit …?" / "Vielleicht ein Gutschein?"
          `,
          [
            ['Das ist ein Freund von mir aus dem Kurs.', 'Hada sa7bi men l-cours.'],
            ['Meine Freundin heißt Lea.', 'L-copine dyali smiytha Lea.'],
            ['Was schenkst du deiner Mutter zum Geburtstag?', 'Chno ghadi tehdi l mmok f 3id l-milad?'],
          ],
          'Ila 9elti l chi alemani "Das ist **meine Freundin** Salma", ghadi yfhem belli Salma l-copine dyalek — 9oul **"eine Freundin"**.',
        ),
        match('Rbet', [
          ['die Nichte', 'bent l-akh / l-okht'],
          ['der Enkel', 'l-7fid'],
          ['die Schwiegermutter', 'l-7ma'],
          ['das Brautpaar', 'l-3rousa o l-3ris'],
          ['geschieden', 'mtalle9'],
        ]),
        choice('Bach t9eddem sa7btek men l-cours bla ma ytkhel3ou:', ['Das ist meine Freundin Olena.', 'Das ist eine Freundin von mir, Olena.'], 1),
        choice('Chno ghadi yhdi Youssef ymken?', ['Dheb', 'Machina d l-9ahwa', 'Flous'], 1),
        gap('Kemmel', 'Ich verstehe ___ gut mit meinem Bruder. (ana)', 'mich'),
        order('Rtteb', 'Was schenkst du deinem Vater zum Geburtstag?'),
        speak(
          'L-3a2ila l-kbira dyalek',
          'Hder 3la l-3a2ila l-kbira dyalek: ch7al men wld l-3amm 3endek, m3a chkoun kattfahem mzyan, o chno katehdiw f l-3ers f l-Maghrib.',
          ['Ich habe viele Cousins und Cousinen.', 'Ich verstehe mich sehr gut mit meiner Tante.', 'In Marokko schenkt man zur Hochzeit oft Geld oder Gold.'],
        ),
        graded(choice('"der Neffe" howa…', ['wld l-3amm', 'wld l-akh / l-okht', 'l-7fid'], 1)),
        graded(choice('"sich streiten" kay3ni…', ['tfahem', 'tkhasem', 'tzowwej'], 1)),
        graded(gap('Kemmel', 'Was schenkst du ___ Mutter? (deine, Dativ)', 'deiner')),
        graded(translate("Terjem l l'Almaniya", 'Hada sa7bi (men s-s7ab).', ['Das ist ein Freund von mir.', 'Das ist ein Freund.'])),
        summary(
          [
            'L-3a2ila l-kbira: **Cousin/Cousine, Neffe/Nichte, Enkel/in, Schwiegermutter, Schwager/Schwägerin**.',
            '**ein Freund (von mir)** = sa7b · **mein Freund** = l-copain.',
            '**zur** Hochzeit, **zum** Geburtstag, **zu** Weihnachten.',
          ],
          ['Thder 3la l-3a2ila l-kbira', 'T9tare7 hdiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich schenke ihm eine Uhr, weil … — Dativ + Akkusativ & weil',
      description: 'Af3al b jouj d l-maf3oulat, t-tartib dyalhom, o "weil" m3a l-fi3l f l-akhir.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tkhdem af3al b Dativ + Akkusativ', 'Trtteb jouj d l-maf3oulat (smiyat o dama2ir)', 'Tdir jomla b weil (l-fi3l f l-akhir)', 'Tfre9 bin weil o denn'],
      steps: [
        intro(
          'Chkoun? Chno? Lach?',
          md`
            "Youssef schenkt **dem Brautpaar** (l chkoun? → Dativ) **eine Kaffeemaschine** (chno? → Akkusativ), **weil** Mehdi gern Kaffee **trinkt**."
            F had j-jomla kayn kolchi li ghadi nt3allmou daba: jouj d l-maf3oulat o jomla b **weil**.
          `,
          ['Dativ + Akkusativ', 'T-tartib', 'weil'],
        ),
        explain(
          'Af3al b jouj d l-maf3oulat',
          md`
            Bzaf d l-af3al 3endhom **chakhs** (Dativ = *l chkoun?*) o **7aja** (Akkusativ = *chno?*):

            | Fi3l | Mital |
            |---|---|
            | **geben** (3ta) | Ich gebe **dem Kind** **einen Apfel**. |
            | **schenken** (hda) | Er schenkt **seiner Frau** **Blumen**. |
            | **zeigen** (werra) | Zeigst du **mir** **das Foto**? |
            | **erklären** (char7) | Die Lehrerin erklärt **den Schülern** **die Regel**. |
            | **bringen** (jab) | Kannst du **mir** **ein Glas Wasser** bringen? |
            | **schicken** (sifet) | Ich schicke **dir** **die Adresse**. |
            | **empfehlen** (nse7) | Ich empfehle **Ihnen** **das Restaurant**. |
            | **leihen** (sellef) | Leihst du **mir** **dein Fahrrad**? |

            **Dativ** = ghaliban **chakhs** (li kayakhod), **Akkusativ** = **7aja**.
            Raja3 l-Dativ: dem / der / dem / den+n — o mir, dir, ihm, ihr, uns, euch, ihnen.
          `,
        ),
        explain(
          'T-tartib: chkoun 9bel?',
          md`
            **9a3ida 1: jouj smiyat → Dativ 9bel Akkusativ**
            > Ich schenke **meiner Mutter** **eine Kette**.

            **9a3ida 2: d-damir 9bel s-smiya**
            > Ich schenke **ihr** **eine Kette**. (Dativ damir)
            > Ich schenke **sie** **meiner Mutter**. (Akkusativ damir)

            **9a3ida 3: jouj dama2ir → Akkusativ 9bel Dativ**
            > Ich schenke **sie** **ihr**.

            Khlasa: **smiya + smiya = Dat-Akk**, ila kan damir kayji **9bel**, o **jouj dama2ir = Akk-Dat**.
          `,
          [
            ['Ich gebe dem Lehrer das Heft.', 'Kan3ti l l-oustad l-kounnach.'],
            ['Ich gebe ihm das Heft.', 'Kan3tih l-kounnach.'],
            ['Ich gebe es dem Lehrer.', 'Kan3tih (l-kounnach) l l-oustad.'],
            ['Ich gebe es ihm.', 'Kan3tih lih.'],
          ],
          'Fakker: **d-dama2ir s-sghar kaymchiw l-9eddam**. O ila kanou jouj, **Akkusativ** howa l-lowel ("es ihm", "sie ihr").',
        ),
        choice('Ina jomla s7i7a?', ['Ich zeige das Foto meiner Freundin.', 'Ich zeige meiner Freundin das Foto.'], 1, 'Jouj smiyat → Dativ (meiner Freundin) 9bel Akkusativ (das Foto). (L-ouwla ma ghaltach bzaf, walakin t-tartib 3adi howa t-tani.)'),
        choice('Ina jomla s7i7a?', ['Ich zeige ihr das Foto.', 'Ich zeige das Foto ihr.'], 0, 'D-damir 9bel s-smiya.'),
        choice('Ina jomla s7i7a?', ['Ich zeige ihr es.', 'Ich zeige es ihr.'], 1, 'Jouj dama2ir → Akkusativ (es) 9bel Dativ (ihr).'),
        gap('Kemmel', 'Kannst du ___ das Salz geben? (ana)', 'mir'),
        gap('Kemmel', 'Ich schenke ___ Vater eine Uhr. (mein, Dativ)', 'meinem'),
        gap('Kemmel', 'Die Lehrerin erklärt ___ Kursteilnehmern die Grammatik.', 'den'),
        order('Rtteb', 'Ich schicke dir die Fotos morgen.'),
        order('Rtteb', 'Er hat es ihr geschenkt.'),
        explain(
          'weil: l-fi3l kaymchi l l-akhir!',
          md`
            **weil** = *7it / 3la 7sab*. Walakin machi b7al **denn**: **weil** kaydir **Nebensatz** (jomla tab3a), o f l-Nebensatz **l-fi3l l-mtsrref kaymchi l l-akhir**:

            | Hauptsatz | , | weil | … | **fi3l** |
            |---|---|---|---|---|
            | Ich bleibe zu Hause, | | weil | ich krank | **bin**. |
            | Er lernt Deutsch, | | weil | er in Deutschland arbeiten | **will**. |
            | Ich bin müde, | | weil | ich früh | **aufgestanden bin**. |
            | Sie kommt nicht, | | weil | sie heute | **arbeitet**. |

            - **Modalverb** + infinitiv: l-Modalverb howa l-akhir: "…, weil ich arbeiten **muss**."
            - **Trennbare Verben** kayrj3ou kelma wa7da: "…, weil ich früh **aufstehe**."
            - **Perfekt**: haben/sein howa l-akhir: "…, weil ich viel gearbeitet **habe**."
            - **Dima fasila (,)** 9bel weil.

            **Sou2al:** "**Warum** kommst du nicht?" — "**Weil** ich krank bin." (f l-hedra t9der tjaweb ghir b jomla dyal weil.)
          `,
          [
            ['Ich lerne Deutsch, weil ich hier studieren möchte.', 'Kant3llem l\'Almaniya 7it bghit n9ra hna.'],
            ['Warum bist du so spät? — Weil der Bus Verspätung hatte.', 'Lach t3ettelti? — 7it l-bus kan m3ettel.'],
          ],
        ),
        explain(
          'weil o denn: nefs l-ma3na, t-tartib mkhtalef',
          md`
            | | Blasa | Fi3l |
            |---|---|---|
            | **denn** | 0 (b7al und/aber) | f **l-blasa 2** 3adi |
            | **weil** | kaybda Nebensatz | f **l-akhir** |

            > Ich gehe nach Hause, **denn** ich **bin** müde.
            > Ich gehe nach Hause, **weil** ich müde **bin**.

            B jouj s7a7. F l-hedra n-nas kaykhdmou **weil** ktar.
          `,
        ),
        choice('Ina jomla s7i7a?', ['…, weil ich habe keine Zeit.', '…, weil ich keine Zeit habe.', '…, weil keine Zeit ich habe.'], 1),
        choice('Ina jomla s7i7a?', ['…, weil ich morgen früh aufstehen muss.', '…, weil ich muss morgen früh aufstehen.', '…, weil ich morgen früh muss aufstehen.'], 0),
        choice('Ina jomla s7i7a?', ['…, weil der Zug fährt pünktlich ab.', '…, weil der Zug pünktlich abfährt.'], 1, 'Trennbar f l-Nebensatz: kelma wa7da f l-akhir.'),
        order('Rtteb', 'Ich komme nicht, weil ich arbeiten muss.'),
        order('Rtteb', 'Sie ist glücklich, weil sie die Prüfung bestanden hat.'),
        translate("Terjem l l'Almaniya (b weil)", 'Kant3llem l\'Almaniya 7it kankhdem f Almaniya.', ['Ich lerne Deutsch, weil ich in Deutschland arbeite.']),
        graded(choice('"Ich schenke ___ Schwester ein Buch."', ['meine', 'meiner', 'meinen'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich gebe es dir.', 'Ich gebe dir es.'], 0)),
        graded(gap('Kemmel', 'Kannst du ___ (houma) den Weg erklären?', 'ihnen')),
        graded(choice('"…, weil ich gestern lange ___."', ['gearbeitet habe', 'habe gearbeitet', 'gearbeitet'], 0)),
        graded(choice('"Ich bleibe zu Hause, ___ es regnet."', ['weil', 'dann', 'aber'], 0)),
        graded(order('Rtteb', 'Er ist müde, weil er schlecht geschlafen hat.')),
        graded(translate("Terjem l l'Almaniya", 'Werrini t-tsawer 3afak!', ['Zeig mir bitte die Fotos!', 'Zeig mir die Fotos, bitte!', 'Zeigen Sie mir bitte die Fotos!'])),
        summary(
          [
            'Af3al b jouj: **geben, schenken, zeigen, erklären, bringen, schicken, empfehlen, leihen** — **Dativ** (chakhs) + **Akkusativ** (7aja).',
            'T-tartib: **smiya + smiya = Dat-Akk** · **damir 9bel smiya** · **jouj dama2ir = Akk-Dat** ("es ihm").',
            '**weil** → l-fi3l **f l-akhir**: "…, weil ich krank **bin**." — **denn** → l-fi3l f 2.',
          ],
          ['Tgoul chkoun 3ta chno l chkoun', 'T3ti s-sabab b weil'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Familie in zwei Ländern',
      description: 'T9ra forum 3la l-3a2ila bin jouj d l-boldan, tsme3 mo7adatha, o tkteb ra2yek m3a l-asbab.',
      minutes: 25,
      kind: 'skills',
      goals: ['T9ra mochariqat f forum o tfhem l-ara2', 'Tsme3 mo7adatha 3a2iliya', 'Tfhem l-3adat dyal l-7aflat f Almaniya', 'Tkteb jawab f forum b weil'],
      steps: [
        intro(
          'Forum: "Familie weit weg"',
          'Salma l9at forum fih nas kay7kiw 3la l-3a2ila dyalhom li b3ida. 9rat l-mochariqat.',
          ['T9ra l-ara2', 'Tfhem l-asbab', 'Tkteb ra2yek'],
        ),
        reading(
          'Forum: Familie weit weg — wie macht ihr das?',
          md`
            **Karim_88:** Meine Familie lebt in Agadir, ich lebe seit fünf Jahren in Stuttgart. Ich telefoniere jeden Sonntag mit meinen Eltern, weil sie sonst traurig sind. Im Sommer fliege ich immer nach Marokko. Aber es ist teuer, weil wir sechs Personen sind!

            **Lena_K:** Ich bin Deutsche, mein Mann ist Syrer. Seine Familie wohnt in der Türkei. Wir machen jede Woche einen Videoanruf. Die Kinder zeigen der Oma ihre Bilder und erzählen ihr von der Schule. Das ist schön, aber die Oma möchte die Kinder natürlich auch umarmen.

            **Samira.D:** Ehrlich gesagt finde ich es manchmal auch gut, weit weg zu sein. In Casablanca haben alle Verwandten immer gefragt: Wann heiratest du? Hier bin ich freier. Aber an Ramadan vermisse ich meine Familie sehr, weil das Iftar allein nicht schön ist.
          `,
          {
            text: '9ra t-tlata d l-mochariqat.',
            glossary: [
              ['sonst', 'ila la / wla'],
              ['traurig', '7zin'],
              ['der Videoanruf', 'appel vidéo'],
              ['umarmen', '3ne9'],
              ['ehrlich gesagt', 'b s-sra7a'],
              ['freier', '7orr ktar'],
              ['vermissen', 'twe7ch'],
            ],
          },
        ),
        choice('3lach Karim kayttasel kol l-7ad?', ['7it kaykhelles 9lil', '7it ila la waldih kaykounou 7zanin', '7it 3endou l-wa9t'], 1),
        choice('Chno kaydirou wlad Lena f l-appel?', ['Kayl3bou', 'Kaywerriw l-jedda t-tsawer o y7kiw 3la l-madrasa', 'Kay9raw'], 1),
        choice('Samira…', ['Dima twe7ch l-3a2ila', 'Kat7ess b l-7orriya, walakin twe7ch l-3a2ila f Ramadan', 'Bghat traje3 l Casablanca'], 1),
        listening(
          'Videoanruf mit Mama',
          [
            ['Mama', 'Salma, endlich! Warum hast du am Sonntag nicht angerufen?', 'Salma, akhiran! Lach ma ttasltich l-7ad?'],
            ['Salma', 'Entschuldige, Mama! Ich konnte nicht, weil ich für eine Prüfung gelernt habe.', 'Sme7 liya a mama! Ma 9dertch 7it kont kanra9 l chi imti7an.'],
            ['Mama', 'Und? Wie war die Prüfung?', 'Iwa? Kif daz l-imti7an?'],
            ['Salma', 'Gut, glaube ich! Und zeig mir mal das Baby! Wie geht es Nadia?', 'Mzyan, kandenn! O werriini l-bébé! Kif dayra Nadia?'],
            ['Mama', 'Allen geht es gut. Nadia schickt dir viele Grüße. Wann kommst du nach Hause?', 'Kolchi labas. Nadia katsellem 3lik bzaf. Imta ghadi tji l d-dar?'],
            ['Salma', 'Im August, weil ich vorher noch einen Sprachkurs habe.', 'F ghouchtt, 7it 9bel 3endi cours d l-logha.'],
          ],
        ),
        choice('3lach ma ttasletch Salma l-7ad?', ['Kanet mrida', 'Kanet kat9ra l l-imti7an', 'Kanet f s-safar'], 1),
        choice('Imta ghadi tmchi Salma l l-Maghrib?', ['F younyou', 'F youlyouz', 'F ghouchtt'], 2),
        culture(
          'L-7aflat d l-3a2ila f Almaniya',
          md`
            - **L-3ers:** ghaliban sghir (50–100 chakhs). L-mohim howa **Standesamt** (l-baladiya) — t-tzowwij l-madani howa l-wa7id l-9anouni. Kayn ta **Polterabend**: lila 9bel l-3ers, n-nas kayhersou l-mwa3en d l-fakhkhar b l-farha!
            - **Geburtstag:** l-mohim bzaf. Kaygoulou "Herzlichen Glückwunsch" **ghir f n-nhar** wla men b3d — **9bel ma kaygoulouhch** (kay3tabrouh fal khayb)!
            - **Hdiyat:** f d-dar 3and chi wa7ed kayjibou **ward**, **chocolat** wla **vin**. Ila nta ma katcherbch, ward wla chocolat mzyanin bzaf.
            - Ghaliban kay7ellou l-hdiya **9eddam** l-dif o kaygoulou chokran direct.
          `,
        ),
        pron(
          'N-nghma f j-jomla t-tab3a',
          'F jomla twila b weil, s-sout kayb9a mrtafe3 chwiya f l-fasila (,), o kayhbet ghir f l-akhir dyal j-jomla kamla.',
          [
            ['Ich bleibe zu Hause, weil ich krank bin.', 'sout mrtafe3 f "Hause", hbout f "bin"'],
            ['Weil der Bus Verspätung hatte.', 'l-accent 3la "Verspätung"'],
            ['Er lernt Deutsch, weil er hier arbeiten will.', '"hier" o "will"'],
          ],
        ),
        write(
          'Jawab f l-forum',
          'Kteb jawab f l-forum (6–8 jmel): fin kayna l-3a2ila dyalek, kifach katb9a f l-ittisal m3ahom, chno kaye3jbek o chno kayt9el 3lik — o khdem **3la l-a9al 3 jmel b weil**.',
          ['Fin l-3a2ila dyalek', 'Kifach kattasel (telefonieren, Videoanruf…)', 'Chno zwin — weil …', 'Chno s3ib — weil …', 'Dativ + Akk (Ich schicke meiner Mutter …)'],
          'Hallo zusammen! Meine Familie wohnt in Fès, ich wohne seit einem Jahr in Köln. Ich rufe meine Mutter jeden Sonntag an, weil sie sonst Angst hat. Ich schicke meiner Familie oft Fotos, weil sie mein Leben hier sehen möchten. Manchmal ist es schwer, weil ich meine Geschwister vermisse. Aber ich bin auch glücklich, weil ich hier viele neue Freunde habe.',
          50,
        ),
        graded(choice('"vermissen" kay3ni…', ['nsa', 'twe7ch', 'tsenna'], 1)),
        graded(choice('F Almaniya t-tzowwij l-9anouni kaykoun f…', ['l-mosquée', 'Standesamt', 'l-mahkama'], 1)),
        graded(choice('Imta katgoul "Herzlichen Glückwunsch zum Geburtstag"?', ['9bel n-nhar', 'F n-nhar wla men b3d', 'Ghir f s-sba7'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich rufe meine Eltern an, weil ich sie vermisse.')),
        summary(
          [
            'L-ara2 m3a l-asbab: **…, weil …**',
            '3adat: **Standesamt, Polterabend**, ma tbarekch 9bel 3id l-milad, hdiya: ward / chocolat.',
          ],
          ['T9ra ara2 f forum', 'Tkteb ra2yek m3a l-asbab'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 2',
      description: 'Muraja3a: l-3a2ila, Dativ + Akkusativ, t-tartib, weil/denn — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 Dativ + Akkusativ o weil', 'Tchar7 asbab f mo7adatha', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-3a2ila l-kbira, af3al b jouj d l-maf3oulat, t-tartib, o weil / denn.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Dativ (chkoun) + Akkusativ (chno):** "Ich gebe **dem Mann** **den Schlüssel**."
            - Damir 9bel smiya: "Ich gebe **ihm** den Schlüssel." / "Ich gebe **ihn** dem Mann."
            - Jouj dama2ir: **Akk + Dat**: "Ich gebe **ihn ihm**."
            - **weil** → fi3l f l-akhir: "…, weil ich keine Zeit **habe**."
          `,
        ),
        dialogue(
          'Ein Geschenk für Oma',
          [
            ['Olena', 'Meine Oma hat nächste Woche Geburtstag. Sie wird 80!', 'Jedti 3endha 3id l-milad s-simana l-jaya. Ghadi tkmmel 80!'],
            ['Salma', 'Toll! Was schenkst du ihr?', 'Zwin! Chno ghadi tehdi liha?'],
            ['Olena', 'Ich weiß nicht. Ich kann es ihr nicht persönlich geben, weil sie in der Ukraine wohnt.', 'Ma 3reftch. Ma n9derch n3tiha liha b yeddi, 7it sakna f Ukraniya.'],
            ['Salma', 'Schick ihr doch ein Fotobuch! Mit Fotos von dir und Köln.', 'Siftliha album d t-tsawer! Fih t-tsawer dyalek o dyal Köln.'],
            ['Olena', 'Super Idee! Kannst du mir helfen? Du hast so schöne Fotos gemacht.', 'Fikra zwina! T9dri t3awniyi? Nti dirti tsawer zwinin bzaf.'],
            ['Salma', 'Klar! Ich schicke sie dir heute Abend.', 'Akid! Ghadi nsifthom lik lyouma f l-3chiya.'],
          ],
        ),
        choice('3lach Olena ma t9derch t3ti l-hdiya l jedtha b yeddha?', ['7it ma 3endhach l-flous', '7it jedtha sakna f Ukraniya', '7it ma 3endhach l-wa9t'], 1),
        choice('Chno ghadi tsift Salma l Olena?', ['Album', 'T-tsawer', 'Hdiya'], 1),
        gap('Kemmel', 'Ich schicke ___ ___ heute Abend. (hom = die Fotos, l nti)', ['sie', 'dir']),
        match('Rbet', [
          ['schenken', 'hda'],
          ['leihen', 'sellef'],
          ['empfehlen', 'nse7'],
          ['erklären', 'char7'],
          ['zeigen', 'werra'],
        ]),
        speak(
          'Role-play: 3lach?',
          'Sa7bek kaysowlek: *Warum lernst du Deutsch? Warum wohnst du in dieser Stadt? Warum bist du heute müde?* — Jaweb b **weil**.',
          ['Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', 'Ich wohne in Köln, weil die Stadt schön ist.', 'Ich bin müde, weil ich gestern lange gelernt habe.'],
        ),
        graded(choice('"Ich gebe ___ Kind ein Eis."', ['das', 'dem', 'den'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich empfehle das Buch dir.', 'Ich empfehle dir das Buch.'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Er schickt ihr sie.', 'Er schickt sie ihr.'], 1)),
        graded(gap('Kemmel', 'Kannst du ___ (ana) dein Auto leihen?', 'mir')),
        graded(choice('Ina jomla s7i7a?', ['…, weil sie hat Geburtstag.', '…, weil sie Geburtstag hat.'], 1)),
        graded(choice('Ina jomla s7i7a?', ['…, weil wir um 6 Uhr aufstehen.', '…, weil wir um 6 Uhr stehen auf.'], 0)),
        graded(gap('Kemmel', 'Er kommt nicht, ___ er krank ist.', 'weil')),
        graded(choice('"die Schwiegermutter" hiya…', ['l-jedda', 'l-7ma', 'l-3amma'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Hdit l mmi ward.', ['Ich habe meiner Mutter Blumen geschenkt.'])),
        graded(dictation('Sme3 o kteb', 'Zeig mir bitte das Foto.')),
        summary(
          [
            'Daba t9der thder 3la l-3a2ila, t9tare7 hdiyat, o tchar7 l-asbab.',
            'F l-unité 3: d-dar o l-jiran, r-ra7il — o **l-Wechselpräpositionen**: "Ich stelle den Tisch **in die** Küche" ↔ "Der Tisch steht **in der** Küche".',
          ],
          ['Thder 3la l-3a2ila l-kbira', 'Tkhdem Dativ + Akkusativ', 'Tchar7 b weil'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
