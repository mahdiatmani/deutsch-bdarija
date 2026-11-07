import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 3,
  title: 'Zusammenleben',
  description: "L-3aych m3a ba3d: WG, jiran, khlafat o 7loul — b obwohl / trotzdem o damit / um … zu.",
  icon: 'handshake',
  objectives: [
    'Tchki b ladab o t9tare7 7al',
    'Tfawed (verhandeln) o tl9a compromis',
    'T3ber 3la t-tanaqod b obwohl o trotzdem',
    'T3ber 3la l-hadaf b damit o um … zu',
    'T3ref l-7o9ou9 l-asasiya dyal l-mokri',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Konflikte in der WG',
      description: 'L-machakil l-3adiya f WG o m3a l-jiran, o l-Redemittel dyal l-khilaf o l-compromis.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-machakil l-3adiya f s-sakan', 'Tchki b ladab', 'T9tare7 compromis'],
      steps: [
        intro(
          'WG-Besprechung',
          'Youssef daba saken f **WG** m3a Lukas o jouj khrin: Nina (taliba) o Ben (kaykhdem f l-lil). Kaynin chi machakil: l-mtbakh mwessekh, l-bruit, l-factures… Daru **WG-Besprechung** (ijtima3).',
          ['Tsemmi l-machakil', 'Tchki b ladab', 'T9tare7 7al'],
        ),
        dialogue(
          'Die WG-Besprechung',
          [
            ['Nina', 'Okay, Leute, wir müssen über den Putzplan reden. Die Küche ist schon wieder total dreckig.', 'Wakha a drari, khassna nhedrou 3la l-planning d n-n9a. L-mtbakh mwessekh 3awtani.'],
            ['Ben', 'Ich weiß, ich war dran. Aber ich hatte diese Woche dreimal Nachtschicht.', 'Kan3ref, kant n-nouba dyali. Walakin kant 3endi 3 noubat d l-lil had s-simana.'],
            ['Lukas', 'Das verstehe ich. Trotzdem sollten wir eine Lösung finden, damit nicht immer dieselben putzen.', 'Kanfhem. Walakin rghm dakchi khassna nl9aw 7al, bach ma ykounouch dima nefs n-nas li kayn99iw.'],
            ['Youssef', 'Ich habe einen Vorschlag: Wer Nachtschicht hat, tauscht einfach mit jemandem. Und wir kaufen gemeinsam Putzmittel, um Geld zu sparen.', '3endi i9tira7: li 3endou nouba d l-lil ybeddel m3a chi wa7ed. O nchriw l-mawad d n-n9a m3a ba3d bach nwfrou l-flous.'],
            ['Nina', 'Gute Idee. Und noch etwas: Obwohl wir Ruhezeiten haben, ist es nachts oft laut.', 'Fikra zwina. O 7aja khra: rghm belli 3endna aw9at r-rakha, ghaliban kayn l-bruit f l-lil.'],
            ['Lukas', 'Das war ich, sorry. Ich spiele abends Gitarre. Wie wäre es, wenn ich nur bis 22 Uhr spiele?', 'Kont ana, sme7 liya. Kanl3eb l-guitare f l-lil. Ach ban lkom ila l3ebt ghir 7tal 22?'],
            ['Nina', 'Damit kann ich leben. Dann sind wir uns einig?', 'Hadchi n9der n9blou. Iwa tfahmna?'],
            ['Alle', 'Einverstanden!', 'Mtaf9in!'],
          ],
        ),
        vocab('Zusammenleben — L-3aych m3a ba3d', [
          ['der Konflikt / der Streit', 'l-khilaf / l-mochkil', ''],
          ['sich beschweren (über)', 'chka (men)', ''],
          ['die Lösung', 'l-7al', 'die Lösungen'],
          ['der Vorschlag', 'l-i9tira7', 'die Vorschläge'],
          ['der Kompromiss', 'l-compromis (7al wosst)', ''],
          ['sich einigen', 'tfahem / ttaf9ou', '', ['Wir haben uns geeinigt.', 'Ttaf9na.']],
          ['einverstanden sein', 'mtaf9 / mwaf9', ''],
          ['Rücksicht nehmen (auf)', 'rd l-bal (l) / 7tarem', ''],
          ['stören', 'z3ej', '', ['Stört es dich, wenn ich Musik höre?', 'Wach kanz3jek ila sme3t l-mousi9a?']],
          ['der Putzplan', 'l-planning d n-n9a', ''],
          ['dreckig ↔ sauber', 'mwessekh ↔ n9i', ''],
          ['laut ↔ leise', 'fih l-bruit ↔ hadi', ''],
          ['die Nebenkosten', 't-takalif (ma, d-dow…)', ''],
          ['teilen', 'qsem / partager', ''],
        ]),
        explain(
          'Redemittel: tchki, t9tare7, ttaf9',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tbda b ladab | "Ich wollte mal etwas ansprechen …" — "Kann ich kurz mit dir reden?" |
            | tchki | "Es stört mich, dass …" — "Ich habe ein Problem damit, dass …" |
            | tfhem l-akhor | "Ich verstehe, dass …, aber …" — "Das kann ich nachvollziehen." |
            | t9tare7 | "Ich schlage vor, dass …" — "Wie wäre es, wenn …?" — "Wir könnten …" |
            | t9bel | "Damit bin ich einverstanden." — "Das klingt fair." |
            | trfod | "Das finde ich nicht so gut, weil …" — "Da bin ich anderer Meinung." |
            | tsali | "Dann sind wir uns einig." — "Abgemacht!" |
          `,
          [
            ['Es stört mich, dass das Geschirr oft nicht gespült ist.', 'Kayz3ejni belli l-mwa3en ghaliban ma mghsoulinch.'],
            ['Ich schlage vor, dass wir einen Putzplan machen.', 'Kan9tare7 ndirou planning d n-n9a.'],
          ],
        ),
        match('Rbet', [
          ['der Vorschlag', 'l-i9tira7'],
          ['sich einigen', 'ttaf9ou'],
          ['stören', 'z3ej'],
          ['Rücksicht nehmen', '7tarem / rd l-bal'],
          ['einverstanden', 'mtaf9'],
        ]),
        choice('3lach Ben ma n99ach?', ['Kan mrid', 'Kant 3endou noubat d l-lil', 'Ma bghach'], 1),
        choice('Chno i9tare7 Lukas l l-bruit?', ['Ma yl3ebch abadan', 'Yl3eb ghir 7tal 22', 'Yl3eb f l-cave'], 1),
        gap('Kemmel', 'Es ___ mich, dass die Musik so laut ist.', 'stört|stoert'),
        order('Rtteb', 'Ich schlage vor, dass wir einen Putzplan machen.'),
        speak(
          'Tchki b ladab',
          'L-coloc dyalek dima kaykhelli l-mwa3en mwessekhin. Hder m3ah b ladab: bda b drafa, goul l-mochkil, fhem rayou, o 9tare7 7al.',
          ['Kann ich kurz mit dir reden?', 'Es stört mich, dass das Geschirr oft lange in der Spüle steht.', 'Ich verstehe, dass du viel arbeitest, aber …', 'Wie wäre es, wenn jeder sein Geschirr sofort spült?'],
        ),
        graded(choice('"der Kompromiss" howa…', ['7al wosst', 'l-khilaf', 't-takalif'], 0)),
        graded(choice('Bach tgoul *mtaf9*:', ['Ich bin einverstanden.', 'Ich bin dagegen.', 'Das stört mich.'], 0)),
        graded(choice('Ina jomla a drif bach tchki?', ['Du bist so laut!', 'Es stört mich ein bisschen, dass es abends laut ist.', 'Ruhe!'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ttaf9na.', ['Wir haben uns geeinigt.', 'Wir sind uns einig.'])),
        summary(
          [
            '**der Konflikt, die Lösung, der Vorschlag, der Kompromiss, sich einigen, einverstanden, Rücksicht nehmen, stören**.',
            'Redemittel: **Es stört mich, dass … · Ich verstehe, dass …, aber … · Ich schlage vor, dass … · Abgemacht!**',
          ],
          ['Tchki b ladab', 'T9tare7 7al o compromis'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Obwohl es spät ist … — Konzessiv & Final',
      description: 'obwohl / trotzdem (rghm), damit / um … zu (bach), o l-fer9 binathom.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem obwohl (Nebensatz) o trotzdem (Hauptsatz)', 'Tkhdem damit o um … zu', 'Tkhtar damit wla um … zu 3la 7sab l-fa3il'],
      steps: [
        intro(
          'Rghm o bach',
          md`
            Nina: "**Obwohl** wir Ruhezeiten **haben**, ist es nachts oft laut." — Lukas: "Wir sollten eine Lösung finden, **damit** nicht immer dieselben **putzen**." — Youssef: "Wir kaufen gemeinsam Putzmittel, **um** Geld **zu sparen**."
            Jouj d l-ma3ani mohimmin f n-nqach: **rghm** (Konzessiv) o **bach** (Final).
          `,
          ['obwohl / trotzdem', 'damit / um … zu'],
        ),
        explain(
          'obwohl ↔ trotzdem',
          md`
            B jouj = *rghm / walakin rghm dakchi* — natija **ma mtwe99a3ach**. Walakin t-tartib mkhtalef:

            | | Nou3 | Mital |
            |---|---|---|
            | **obwohl** | Nebensatz → **fi3l f l-akhir** | **Obwohl** es **regnet**, gehen wir spazieren. / Wir gehen spazieren, **obwohl** es **regnet**. |
            | **trotzdem** | Hauptsatz, blasa 1 → **fi3l men b3dha** | Es regnet. **Trotzdem gehen** wir spazieren. |

            Mo9arana m3a s-sabab:
            - **weil** (sabab, natija mtwe99a3a) ↔ **obwohl** (rghm, natija ma mtwe99a3ach)
            - **deshalb** ↔ **trotzdem**

            > Ich bleibe zu Hause, **weil** ich krank bin. (mantiqi)
            > Ich gehe zur Arbeit, **obwohl** ich krank bin. (rghm)
          `,
          [
            ['Obwohl die Miete hoch ist, wohne ich gern hier.', 'Rghm belli l-kra ghalia, kan7ebb nsken hna.'],
            ['Die Miete ist hoch. Trotzdem wohne ich gern hier.', 'L-kra ghalia. Walakin rghm dakchi kan7ebb nsken hna.'],
          ],
        ),
        choice('"___ er müde war, hat er weitergearbeitet."', ['Weil', 'Obwohl', 'Trotzdem'], 1),
        choice('"Er war müde. ___ hat er weitergearbeitet."', ['Obwohl', 'Deshalb', 'Trotzdem'], 2),
        choice('Ina jomla s7i7a?', ['Obwohl es kalt ist, ich gehe schwimmen.', 'Obwohl es kalt ist, gehe ich schwimmen.', 'Obwohl ist es kalt, gehe ich schwimmen.'], 1),
        gap('Kemmel b obwohl / trotzdem', 'Ich habe wenig Zeit. ___ helfe ich dir.', 'Trotzdem'),
        gap('Kemmel b obwohl / trotzdem', 'Ich helfe dir, ___ ich wenig Zeit habe.', 'obwohl'),
        gap('Kemmel b weil / obwohl', 'Er kauft das Handy, ___ es sehr teuer ist.', 'obwohl'),
        order('Rtteb', 'Obwohl die Wohnung klein ist, fühle ich mich wohl.'),
        explain(
          'damit o um … zu = bach',
          md`
            B jouj kaygoulou **l-hadaf** (*bach…*):

            | | Imta? | Mital |
            |---|---|---|
            | **um … zu** + infinitiv | **nefs l-fa3il** f j-jouj | **Ich** kaufe Putzmittel, um Geld **zu sparen**. (ana li kanwfer) |
            | **damit** + Nebensatz | **fa3il mkhtalef** (wla nefs l-fa3il — 3adi) | **Ich** erkläre es noch einmal, damit **du** es **verstehst**. |

            Ila kan nefs l-fa3il, **um … zu** a7ssen (a9sar):
            > Ich lerne Deutsch, **damit** ich in Deutschland arbeiten **kann**. ✓
            > Ich lerne Deutsch, **um** in Deutschland **zu arbeiten**. ✓✓ (a7ssen)

            Rd l-bal: m3a **damit** ma tkhdemch "wollen / möchten" (l-hadaf rah f damit): ~~damit ich arbeiten will~~ → damit ich arbeiten **kann**.

            S-sou2al: **Wozu? / Wofür? / Warum?**
          `,
          [
            ['Ich mache Sport, um fit zu bleiben.', 'Kandir r-riyada bach nb9a f l-forma.'],
            ['Ich schreibe die Regeln auf, damit alle sie kennen.', 'Kankteb l-9awa3id bach kolchi y3refhom.'],
            ['Er spricht langsam, damit die Kinder ihn verstehen.', 'Kayhder b chwiya bach d-drari yfhmouh.'],
          ],
        ),
        choice('"Ich stehe früh auf, ___ pünktlich zu sein."', ['damit', 'um', 'obwohl'], 1, 'Nefs l-fa3il + zu → um.'),
        choice('"Ich mache das Fenster auf, ___ frische Luft reinkommt."', ['um', 'damit'], 1, 'Fa3il mkhtalef (frische Luft) → damit.'),
        gap('Kemmel b damit / um', 'Wir hängen einen Plan auf, ___ jeder weiß, wann er putzen muss.', 'damit'),
        gap('Kemmel b damit / um', 'Sie spart, ___ eine eigene Wohnung zu kaufen.', 'um'),
        order('Rtteb', 'Ich erkläre es dir, damit du es verstehst.'),
        translate("Terjem l l'Almaniya (b um … zu)", 'Kankhdem f l-weekend bach nkhelles l-kra.', ['Ich arbeite am Wochenende, um die Miete zu bezahlen.']),
        translate("Terjem l l'Almaniya (b obwohl)", 'Rghm belli 3iyan, ghadi nji.', ['Obwohl ich müde bin, komme ich.', 'Ich komme, obwohl ich müde bin.']),
        graded(choice('"___ es teuer war, haben wir das Hotel gebucht."', ['Weil', 'Obwohl', 'Damit'], 1)),
        graded(choice('"Sie war krank. ___ ist sie zur Arbeit gegangen."', ['Deshalb', 'Trotzdem', 'Obwohl'], 1)),
        graded(gap('Kemmel', 'Ich gebe dir meine Nummer, ___ du mich anrufen kannst.', 'damit')),
        graded(gap('Kemmel', 'Wir fahren mit dem Rad, ___ die Umwelt zu schützen.', 'um')),
        graded(choice('Ina jomla s7i7a?', ['Ich lerne viel, damit ich die Prüfung bestehen will.', 'Ich lerne viel, um die Prüfung zu bestehen.'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Trotzdem ich gehe.', 'Trotzdem gehe ich.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kanhder b chwiya bach tfhemni.', ['Ich spreche langsam, damit du mich verstehst.'])),
        summary(
          [
            '**obwohl** (Nebensatz, fi3l f l-akhir) = **trotzdem** (blasa 1, fi3l men b3d) — rghm.',
            '**weil / deshalb** = sabab · **obwohl / trotzdem** = rghm.',
            '**um … zu** (nefs l-fa3il) · **damit** (fa3il mkhtalef) — bach.',
          ],
          ['T3ber 3la t-tanaqod', 'T3ber 3la l-hadaf'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Mietrecht & Mediation',
      description: 'T9ra 3la l-7o9ou9 dyal l-mokri, tsme3 mediation bin jiran, o tkteb bra dyal chakwa mnadhdhma.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem l-7o9ou9 l-asasiya dyal l-mokri', 'Tfhem mediation o kifach katkhdem', 'Tkteb bra dyal chakwa b l-asbab o l-i9tira7at'],
      steps: [
        intro(
          'Mochkil m3a moul d-dar',
          'L-WG dyal Youssef 3endha mochkil: l-moisi f l-7mmam (Schimmel) o moul d-dar ma bghach yslle7. Wach 3endhom l-7a99? Nchoufou l-7o9ou9 dyal l-mokri — o kifach jiran 7ellou mochkil b **mediation**.',
          ['Tfhem l-7o9ou9', 'Tfhem l-mediation', 'Tkteb chakwa'],
        ),
        reading(
          'Mieterrechte: Was Sie wissen sollten',
          md`
            **Mängel in der Wohnung:** Wenn etwas in der Wohnung kaputt ist – zum Beispiel die Heizung, ein Fenster oder es gibt Schimmel –, müssen Sie das dem Vermieter sofort melden, am besten schriftlich. Der Vermieter ist verpflichtet, den Mangel zu beseitigen. Kleine Reparaturen (z. B. ein tropfender Wasserhahn) müssen Mieter manchmal selbst bezahlen – das steht im Mietvertrag.

            **Mietminderung:** Wenn der Vermieter einen schweren Mangel nicht repariert, dürfen Sie die Miete unter Umständen mindern. Aber Vorsicht: Lassen Sie sich vorher beraten, damit Sie keinen Fehler machen.

            **Kündigung:** Mieter können mit einer Frist von drei Monaten kündigen. Der Vermieter braucht dagegen einen wichtigen Grund, zum Beispiel Eigenbedarf.

            **Hilfe:** Mietervereine beraten ihre Mitglieder für einen kleinen Jahresbeitrag. Bei Streit mit Nachbarn gibt es in vielen Städten kostenlose Schiedsstellen oder Mediationsangebote.
          `,
          {
            text: '9ra l-ma9al 3la l-7o9ou9 dyal l-mokri.',
            glossary: [
              ['der Mangel', 'l-3ayb / l-khalal'],
              ['der Vermieter / der Mieter', 'moul d-dar / l-mokri'],
              ['verpflichtet', 'molzam'],
              ['beseitigen', 'zuwwel / slle7'],
              ['die Mietminderung', 'tan9is l-kra'],
              ['unter Umständen', 'f chi 7alat'],
              ['der Eigenbedarf', 'moul d-dar m7taj d-dar l rasou'],
              ['der Mieterverein', 'jam3iyat l-mokrin'],
            ],
          },
        ),
        choice('Kifach khass t3lem moul d-dar b l-mochkil?', ['B l-hedra ghir', 'Ah7ssen b l-kitaba', 'Ma khassekch'], 1),
        choice('Ch7al l-Kündigungsfrist dyal l-mokri?', ['Chhar', '3 chhour', '6 chhour'], 1),
        choice('Chno khass tdir 9bel ma tn9es l-kra?', ['Walou', 'Ttstachar (Beratung)', 'Tbeddel d-dar'], 1),
        choice('Chkoun kay3awen l-mokrin b taman sghir?', ['Mieterverein', 'Bürgeramt', 'Jobcenter'], 0),
        listening(
          'Eine Mediation zwischen Nachbarn',
          [
            ['Mediatorin', 'Herr Krüger, Frau Aydın, schön, dass Sie beide gekommen sind. Herr Krüger, bitte beschreiben Sie zuerst Ihre Sicht.', 'Si Krüger, Madame Aydın, zwin jitou b jouj. Si Krüger, wesef lowel l-wjha dyalek.'],
            ['Herr Krüger', 'Die Kinder von Frau Aydın spielen jeden Tag im Hof Fußball. Der Ball fliegt gegen mein Fenster. Ich arbeite nachts und muss tagsüber schlafen.', 'Wlad Madame Aydın kayl3bou l-koura kol nhar f l-7ouch. L-koura kattdreb f s-sherjem dyali. Kankhdem f l-lil o khassni nn3es f n-nhar.'],
            ['Mediatorin', 'Frau Aydın, was ist Ihre Sicht?', 'Madame Aydın, chno l-wjha dyalek?'],
            ['Frau Aydın', 'Meine Kinder brauchen Bewegung, und der Hof ist der einzige Platz. Obwohl ich ihnen gesagt habe, dass sie aufpassen sollen, ist es passiert. Das tut mir leid.', 'Wladi m7tajin l-7araka, o l-7ouch hiya l-blasa l-wa7ida. Rghm belli gelt lihom yrdou l-bal, w9e3 dakchi. Sme7 liya.'],
            ['Mediatorin', 'Welche Lösung könnten Sie sich vorstellen?', 'Ach men 7al t9adrou ttkhayylou?'],
            ['Frau Aydın', 'Die Kinder könnten nachmittags auf den Spielplatz im Park gehen, damit Herr Krüger schlafen kann. Und im Hof spielen sie nur leise Spiele.', 'D-drari y9adrou ymchiw f l-3chiya l l-park, bach Si Krüger yn3es. O f l-7ouch yl3bou ghir l3ab hadyin.'],
            ['Herr Krüger', 'Das finde ich fair. Und ich sage Bescheid, wenn ich mal frei habe – dann dürfen sie auch Fußball spielen.', 'Kanchoufou 3adil. O ana ghadi n3lemkom mli nkoun 7orr — f dak l-wa9t y9adrou yl3bou l-koura.'],
          ],
        ),
        choice('3lach Herr Krüger kaychki?', ['L-mousi9a', 'L-koura kattdreb f s-sherjem o howa kayn3es f n-nhar', 'Z-zbel'], 1),
        choice('Chno l-7al?', ['D-drari ma yl3bouch abadan', 'D-drari ymchiw l l-park f l-3chiya o yl3bou l3ab hadyin f l-7ouch', 'Krüger y7ewwel'], 1),
        choice('Chno ghadi ydir Herr Krüger?', ['Ychki l l-bolis', 'Y3lemhom mli ykoun 7orr', 'Ybeddel l-khedma'], 1),
        culture(
          'Mediation o Schiedsstelle',
          md`
            - **Mediation:** chakhs mo7ayid (Mediator) kay3awen jouj d n-nas yl9aw 7al **b rashom** — machi howa li kay9rrer.
            - **Schiedsstelle / Schiedsamt:** f bzaf d l-mdon, l-khilafat s-sghar (jiran, bruit…) kayt7ellou hna **9bel l-mahkama** — rkhis o dghya.
            - **Mieterverein:** ~50–100 € f l-3am, o kay3tik l-istichara o l-7imaya l-9anouniya.
            - F Almaniya n-nas kayfeddlou **l-kitaba** f l-machakil r-rasmiya: email wla bra m3a t-tarikh — hadchi "Beweis" (ithbat).
          `,
        ),
        pron(
          'N-nghma dyal l-hedra l-hadya',
          'F l-khilaf, s-sout l-hadi o l-wa9fat kaybeyynou l-i7tiram. Sme3 o 3awed b nghma hadya.',
          [
            ['Ich verstehe Ihre Sicht, aber …', 'wa9fa 9bel "aber"'],
            ['Das finde ich fair.', 'accent 3la "fair"'],
            ['Welche Lösung könnten Sie sich vorstellen?', 's-sout kayhbet f l-akhir'],
          ],
        ),
        write(
          'Bra dyal chakwa l moul d-dar',
          md`
            F l-7mmam kayn **Schimmel** (l-moisi) men 2 chhour, o 3lemti moul d-dar f t-tilifoun walakin ma dar walou. Kteb bra rasmiya (~120 kelma):
            - l-mochkil o men imta
            - chno dirti 7tal daba
            - 3lach l-mochkil mohim (s-s7a…)
            - chno bghiti o 7tal imta (*Frist*)
            Khdem **obwohl**, **damit** o **um … zu**.
          `,
          ['Sehr geehrte/r Frau/Herr …,', 'L-mochkil + men imta', 'Chno dirti (obwohl …)', '3lach mohim', 'Talab + Frist (damit / um … zu)', 'Mit freundlichen Grüßen'],
          'Sehr geehrter Herr Wagner,\n\nhiermit möchte ich Ihnen mitteilen, dass es im Badezimmer unserer Wohnung (Bergstraße 12, 3. OG) seit etwa zwei Monaten Schimmel an der Decke gibt. Obwohl ich Sie bereits am 3. März telefonisch informiert habe, wurde der Schaden bis heute nicht repariert. Der Schimmel wird größer, und ich mache mir Sorgen um unsere Gesundheit, da ich manchmal Atemprobleme habe.\n\nIch bitte Sie daher, den Mangel bis zum 15. April zu beseitigen. Damit der Handwerker in die Wohnung kann, bin ich jeden Tag ab 16 Uhr zu Hause. Ich lüfte regelmäßig, um weiteren Schimmel zu vermeiden.\n\nMit freundlichen Grüßen\nYoussef Benali',
          110,
        ),
        graded(choice('"der Vermieter" howa…', ['l-mokri', 'moul d-dar', 'l-jar'], 1)),
        graded(choice('F l-mediation chkoun kay9rrer l-7al?', ['L-mediator', 'J-jouj d n-nas b rashom', 'L-mahkama'], 1)),
        graded(choice('"der Mangel" howa…', ['l-3ayb / l-khalal', 'l-kra', 'l-ijtima3'], 0)),
        graded(dictation('Sme3 o kteb', 'Ich bitte Sie, den Mangel bis zum 15. April zu beseitigen.')),
        summary(
          [
            'L-mokri: **Mängel melden (schriftlich) · Mietminderung (b l-istichara) · 3 Monate Kündigungsfrist · Mieterverein**.',
            '**Mediation / Schiedsstelle** 9bel l-mahkama.',
            'Chakwa: **l-mochkil + chno dirti + 3lach mohim + talab m3a Frist**.',
          ],
          ['Tfhem l-7o9ou9 dyal l-mokri', 'Tfhem mediation', 'Tkteb chakwa mnadhdhma'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 3',
      description: 'Muraja3a: l-khilafat o l-7loul, obwohl/trotzdem, damit/um … zu — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Konnektoren', 'Tfawed o tl9a compromis', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-khilaf o l-compromis, l-7o9ou9 dyal l-mokri, obwohl / trotzdem, damit / um … zu.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-Konnektoren f jadwal',
          md`
            | Ma3na | Nebensatz (fi3l f l-akhir) | Hauptsatz (blasa 1) |
            |---|---|---|
            | sabab | weil, da | — (denn: blasa 0) |
            | natija | — | deshalb, darum, deswegen |
            | rghm | **obwohl** | **trotzdem** |
            | hadaf | **damit**, **um … zu** | — |
          `,
        ),
        dialogue(
          'Der Parkplatz',
          [
            ['Herr Schulze', 'Entschuldigung, ist das Ihr Auto? Es steht schon wieder auf meinem Parkplatz.', 'Sme7 liya, wach hadi t-tomobil dyalek? 3awtani f l-blasa dyali.'],
            ['Mehmet', 'Oh, das tut mir leid. Obwohl ich lange gesucht habe, war kein anderer Platz frei.', 'Oh, sme7 liya. Rghm belli 9llebt bzaf, ma kanet 7ta blasa khawya.'],
            ['Herr Schulze', 'Ich verstehe das. Trotzdem brauche ich meinen Platz, weil ich früh zur Arbeit muss.', 'Kanfhem. Walakin rghm dakchi khassni l-blasa dyali 7it khassni nmchi l l-khedma bekri.'],
            ['Mehmet', 'Natürlich. Ich schlage vor, dass ich Ihnen meine Handynummer gebe, damit Sie mich anrufen können, falls es wieder passiert.', 'Akid. Kan9tare7 n3tik r-ra9m dyali bach ttasel biya ila w9e3 3awtani.'],
            ['Herr Schulze', 'Das ist eine gute Lösung. Danke!', 'Hadi 7al mzyan. Chokran!'],
          ],
        ),
        choice('Chno l-7al?', ['Mehmet ybeddel d-dar', 'Mehmet y3tih r-ra9m bach yttasel bih', 'Herr Schulze ychki l l-bolis'], 1),
        gap('Kemmel', '___ ich lange gesucht habe, war kein Platz frei. Ich gebe Ihnen meine Nummer, ___ Sie mich anrufen können.', ['Obwohl', 'damit']),
        match('Rbet', [
          ['obwohl', 'rghm belli'],
          ['trotzdem', 'walakin rghm dakchi'],
          ['damit', 'bach (fa3il mkhtalef)'],
          ['um … zu', 'bach (nefs l-fa3il)'],
        ]),
        speak(
          'Role-play: compromis',
          'Nta o l-coloc dyalek: nta bghiti t-tadfi2a 23 daraja, howa bgha 18 bach ywfer l-flous. Tfawdou o l9aw compromis.',
          ['Mir ist es in der Wohnung oft zu kalt.', 'Ich verstehe, dass du Geld sparen willst, aber …', 'Wie wäre es, wenn wir die Heizung tagsüber auf 20 Grad stellen?', 'Damit bin ich einverstanden. Abgemacht!'],
        ),
        graded(choice('"Ich gehe joggen, ___ es regnet."', ['weil', 'obwohl', 'damit'], 1)),
        graded(choice('"Es ist spät. ___ arbeitet er noch."', ['Deshalb', 'Trotzdem', 'Obwohl'], 1)),
        graded(gap('Kemmel', 'Er macht das Licht an, ___ die Kinder keine Angst haben.', 'damit')),
        graded(gap('Kemmel', 'Ich spare Geld, ___ nach Marokko zu fliegen.', 'um')),
        graded(choice('Ina jomla s7i7a?', ['Obwohl er Hunger hatte, er aß nichts.', 'Obwohl er Hunger hatte, aß er nichts.'], 1)),
        graded(choice('"sich beschweren" kay3ni…', ['chka', 'ttaf9', '3tadar'], 0)),
        graded(choice('Bach t9tare7:', ['Ich schlage vor, dass …', 'Es stört mich, dass …', 'Abgemacht!'], 0)),
        graded(choice('Kündigungsfrist dyal l-mokri:', ['1 chhar', '3 chhour', '1 3am'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Rghm belli l-kra ghalia, kan7ebb d-dar.', ['Obwohl die Miete teuer ist, mag ich die Wohnung.', 'Obwohl die Miete hoch ist, mag ich die Wohnung.', 'Obwohl die Miete teuer ist, liebe ich die Wohnung.'])),
        graded(dictation('Sme3 o kteb', 'Damit sind wir alle einverstanden.')),
        summary(
          [
            'Daba t9der tchki, tfawed o tl9a compromis — o tkteb chakwa rasmiya.',
            'F l-unité 4: s-s7a o n-nidam s-si77i — **l-Passiv** f kol l-azmina o m3a l-Modalverben.',
          ],
          ['Tchki o tfawed', 'Tkhdem obwohl / trotzdem', 'Tkhdem damit / um … zu', 'T3ref l-7o9ou9 dyal l-mokri'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
