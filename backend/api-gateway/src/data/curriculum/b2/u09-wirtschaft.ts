import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 9,
  title: 'Wirtschaft & Konsum',
  description: "Start-ups, 7o9ou9 l-mostahlik o l-istihlak l-mostadam — b Konjunktiv II f l-madi m3a l-Modalverben (hätte … machen sollen) o als ob.",
  icon: 'storefront',
  objectives: [
    'T7ki 3la machrou3 (Geschäftsidee) o tnaqech l-makhatir',
    'T3ref 7o9ou9ek b7al mostahlik (Widerruf, Gewährleistung)',
    'Tkhdem hätte … machen sollen / können / müssen (7tta f Nebensatz)',
    'Tkhdem als ob / als wenn / als + Konjunktiv II',
    'Tkteb chakwa rasmiya b 7ojaj 9anouniya',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Die Geschäftsidee',
      description: 'L-kalimat d l-i9tisad o l-machari3, o kifach t9ddem fikra o tnaqech l-makhatir.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-i9tisad o l-machari3', 'T9ddem fikra d machrou3 (pitch)', 'Tnaqech l-forass o l-makhatir'],
      steps: [
        intro(
          'Ein Start-up gründen?',
          'Mehmet o sa7bou Karim bghaw y7lou machrou3: "Atlas Box" — kartouna kol chhar fiha ma7soulat maghribiya mostadama (argan, zellige sghir, atay…). Kayt9ddmou l-fikra l Salma.',
          ['L-fikra', 'L-forass', 'L-makhatir'],
        ),
        dialogue(
          'Der Pitch',
          [
            ['Karim', 'Unsere Idee: ein Abo-Modell mit fair gehandelten Produkten aus marokkanischen Kooperativen. Jeden Monat eine Box für 39 Euro.', 'L-fikra dyalna: ichtirak chahri b ma7soulat men t3awniyat maghribiya b tijara 3adila. Kol chhar kartouna b 39 €.'],
            ['Salma', 'Klingt spannend. Wer ist eure Zielgruppe?', 'Mzyana. Chkoun l-fi2a l-mostahdafa dyalkom?'],
            ['Mehmet', 'Vor allem Menschen zwischen 25 und 45, die Wert auf Nachhaltigkeit legen und gern Neues entdecken.', 'Khossousan n-nas bin 25 o 45 3am, li kayhmmhom l-istidama o kay7ebbou ykt7fou 7wayej jdad.'],
            ['Salma', 'Und wie wollt ihr das finanzieren? Habt ihr einen Businessplan?', 'O kifach ghadi tmouwlou hadchi? 3endkom Businessplan?'],
            ['Karim', 'Wir haben 15 000 Euro Eigenkapital. Für den Rest wollen wir einen Gründungszuschuss beantragen oder Crowdfunding machen.', '3endna 15 000 € rasmal khass. L-ba9i bghina ntlbou d3m d t-ta2sis wla ndirou Crowdfunding.'],
            ['Salma', 'Und das Risiko? Abo-Boxen gibt es wie Sand am Meer.', 'O l-mokhatara? L-kartounat b l-ichtirak kaynin bzaf bzaf.'],
            ['Mehmet', 'Stimmt. Aber keine hat so eine Geschichte hinter jedem Produkt – das ist unser Alleinstellungsmerkmal.', 'S7i7. Walakin 7tta wa7da ma 3endha 9issa wra kol ma7soul — hadi hiya l-mizza li katmyyzna.'],
          ],
        ),
        vocab('Wirtschaft — L-i9tisad', [
          ['gründen / die Gründung', 'sses / t-ta2sis', ''],
          ['das Unternehmen', 'l-ma9awala / ch-charika', 'die Unternehmen'],
          ['die Zielgruppe', 'l-fi2a l-mostahdafa', ''],
          ['das Eigenkapital', 'r-rasmal l-khass', ''],
          ['der Umsatz', 'ra9m l-mo3amalat (chiffre d affaires)', ''],
          ['der Gewinn / der Verlust', 'r-rb7 / l-khsara', ''],
          ['die Konkurrenz', 'l-monafasa', ''],
          ['das Alleinstellungsmerkmal', 'l-mizza li katmyyzek (USP)', ''],
          ['der Kredit', 'l-9ard (crédit)', ''],
          ['die Pleite', 'l-iflas', ''],
          ['fair gehandelt', 'tijara 3adila (fair trade)', ''],
          ['der Verbraucher', 'l-mostahlik', 'die Verbraucher'],
          ['Wert legen auf + Akk', 'yhmmou / y3ti ahamiya l', ''],
          ['sich lohnen', 'yst7e9 / fih faydah', ''],
        ]),
        explain(
          'T9ddem fikra o tnaqech l-makhatir',
          md`
            | Bach… | Redemittel |
            |---|---|
            | t9ddem | "Unsere Idee ist …" — "Wir richten uns an …" — "Was uns von der Konkurrenz unterscheidet, ist …" |
            | t-tamwil | "Wir finanzieren das über …" — "Wir rechnen mit einem Umsatz von …" |
            | tsowwel b n-na9d | "Wie realistisch ist …?" — "Habt ihr bedacht, dass …?" |
            | l-makhatir | "Das größte Risiko sehe ich darin, dass …" — "Was passiert, wenn …?" |
            | t-tachji3 | "Ich finde, der Versuch lohnt sich." |
          `,
          [
            ['Was uns von der Konkurrenz unterscheidet, ist die Geschichte hinter jedem Produkt.', 'Li kaymyyzna 3la l-monafasa howa l-9issa wra kol ma7soul.'],
            ['Das größte Risiko sehe ich darin, dass die Nachfrage zu klein ist.', 'Akbar mokhatara kanchoufha howa annahou t-talab sghir bzaf.'],
          ],
        ),
        match('Rbet', [
          ['gründen', 'sses'],
          ['der Umsatz', 'ra9m l-mo3amalat'],
          ['der Gewinn', 'r-rb7'],
          ['die Konkurrenz', 'l-monafasa'],
          ['die Pleite', 'l-iflas'],
        ]),
        choice('Ch7al taman l-kartouna?', ['29 €', '39 €', '49 €'], 1),
        choice('Chno l-mizza li katmyyzhom?', ['T-taman r-rkhis', 'L-9issa wra kol ma7soul', 'T-tawsil s-sri3'], 1),
        choice('"wie Sand am Meer" kay3ni…', ['Bzaf bzaf', 'Nadir', 'Ghali'], 0),
        gap('Kemmel', 'Wir richten uns an Menschen, die Wert auf Nachhaltigkeit ___. Was uns von der Konkurrenz ___, ist die Qualität.', ['legen', 'unterscheidet']),
        order('Rtteb', 'Das größte Risiko sehe ich darin, dass die Nachfrage zu klein ist.'),
        culture(
          'Gründen f Almaniya',
          md`
            - **Rechtsformen:** *Einzelunternehmen* (bou7dek, mas2ouliya kamla), *GbR* (b jouj wla ktar), *GmbH* (rasmal 25 000 €, mas2ouliya m7douda), *UG* ("Mini-GmbH" b 1 € rasmal).
            - **Gewerbeanmeldung** f l-Gewerbeamt (~20–60 €) — l-mihan l-7orra (Freiberufler) b7al l-motarjim ma kay7tajouch.
            - **Gründungszuschuss:** ila kunti katakhod ALG I, t9der ttleb d3m men Agentur für Arbeit.
            - **IHK** (Industrie- und Handelskammer) kat3ti istichara mjjaniya l l-mo2assisin.
            - **Kooperativen f l-Maghrib:** ktar men 50 000 t3awniya — b7al t3awniyat l-argan d n-nsa f Souss.
          `,
        ),
        speak(
          'Pitch dyalek',
          '9ddem fikra d machrou3 (60 tanya): chno, l chkoun, chno katmyyzek, kifach ghadi tmouwel, o akbar mokhatara.',
          ['Unsere Idee ist eine App, die Nachhilfelehrer und Schüler verbindet.', 'Wir richten uns an Familien mit wenig Zeit.', 'Was uns unterscheidet, ist der günstige Preis.', 'Wir finanzieren das zunächst über Eigenkapital.', 'Das größte Risiko sehe ich in der starken Konkurrenz.'],
        ),
        graded(choice('"das Eigenkapital" =', ['r-rasmal l-khass', 'l-9ard', 'r-rb7'], 0)),
        graded(choice('"das Alleinstellungsmerkmal" =', ['l-mizza li katmyyzek', 'l-monafasa', 'l-fi2a l-mostahdafa'], 0)),
        graded(gap('Kemmel', 'Ein Abo-Modell ___ sich nur, wenn genug Kunden bleiben. (yst7e9)', 'lohnt')),
        graded(translate("Terjem l l'Almaniya", 'Chkoun l-fi2a l-mostahdafa dyalkom?', ['Wer ist eure Zielgruppe?', 'Wer ist Ihre Zielgruppe?', 'Was ist eure Zielgruppe?'])),
        summary(
          [
            'L-i9tisad: **gründen, das Unternehmen, die Zielgruppe, das Eigenkapital, der Umsatz, der Gewinn, die Konkurrenz, die Pleite**.',
            'Pitch: **Wir richten uns an … — Was uns unterscheidet, ist … — Das größte Risiko sehe ich darin, dass …**',
          ],
          ['T9ddem fikra d machrou3', 'Tnaqech l-makhatir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Hätten wir das nur früher wissen können! — Konj. II Vergangenheit & als ob',
      description: 'Konjunktiv II f l-madi m3a l-Modalverben (o t-tartib f Nebensatz), o als ob / als wenn / als.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem hätte + Infinitiv + Modalverb', 'Tdir t-tartib s-s7i7 f Nebensatz (dass ich hätte … müssen)', 'Tkhdem als ob / als wenn / als + Konj. II'],
      steps: [
        intro(
          '6 Monate später …',
          md`
            "Atlas Box" bdat — walakin machi kolchi mcha mzyan. Mehmet: "Wir **hätten** den Versand besser **planen sollen**." Karim: "Der Lieferant tat so, **als ob** alles kein Problem **wäre**."
            F B1 chefti *hätte gemacht*. Daba m3a **Modalverben** o **als ob**.
          `,
          ['hätte … sollen', 'Nebensatz', 'als ob'],
        ),
        explain(
          'hätte + Infinitiv + Modalverb (Infinitiv)',
          md`
            M3a Modalverb, l-Partizip II kaywelli **Infinitiv** ("Ersatzinfinitiv") — **jouj d l-infinitifs f l-akhir**:

            | Ma3na | Mital | Darija |
            |---|---|---|
            | **sollen** (nadam / lawm) | Wir **hätten** früher **anfangen sollen**. | kan khassna nbdaw bekri |
            | **können** (forsa fatet) | Du **hättest** mich **anrufen können**. | kan momkin t3ayyet liya |
            | **müssen** (darura ma tdaretch) | Ich **hätte** das Formular **ausfüllen müssen**. | kan khassni n3emmer l-formulaire |
            | **dürfen** | Das **hätte** nicht **passieren dürfen**. | hadchi ma kanch khasso y9e3 |

            ⚠️ Machi ~~gesollt / gekonnt~~ — dima **Infinitiv**: *hätte machen **sollen***.
          `,
          [
            ['Wir hätten mehr Geld sparen sollen.', 'Kan khassna nwffrou flous ktar.'],
            ['Das hätte ich dir gleich sagen können.', 'Kan momkin ngoulha lik men l-lowel.'],
          ],
        ),
        choice('*Kan khassek tsowwelni* =', ['Du hättest mich fragen sollen.', 'Du hättest mich gefragt sollen.', 'Du solltest mich gefragt haben.'], 0),
        choice('"Ich ___ dir helfen können, wenn du etwas gesagt hättest."', ['hätte', 'wäre', 'würde'], 0),
        gap('Kemmel', 'Das Paket hätte gestern ankommen ___. (khasso)', 'sollen|müssen|muessen'),
        order('Rtteb', 'Wir hätten den Versand besser planen sollen.'),
        explain(
          'F Nebensatz: hätte 9bel j-jouj infinitifs!',
          md`
            9a3ida khassa: f Nebensatz, **hätte** ma kaymchich l l-akhir — kayji **9bel** j-jouj infinitifs:

            > Ich glaube, **dass** wir früher **hätten anfangen sollen**.
            > Es ärgert mich, **dass** ich das nicht **habe verhindern können**. (Perfekt — nefs l-9a3ida)
            > Er sagt, **dass** er gestern **hätte arbeiten müssen**.

            ✗ ~~dass wir früher anfangen sollen hätten~~
          `,
        ),
        choice('Ina jomla s7i7a?', ['Ich weiß, dass ich mehr lernen hätte sollen.', 'Ich weiß, dass ich mehr hätte lernen sollen.', 'Ich weiß, dass ich hätte mehr lernen sollen.'], 1),
        order('Rtteb', 'Es tut mir leid, dass ich nicht hätte kommen können.'),
        explain(
          'als ob / als wenn / als + Konjunktiv II',
          md`
            **Mo9arana m3a 7aja machi 7a9i9iya** ("b7al ila …"):

            | Bniya | Mital |
            |---|---|
            | **als ob** + … + Konj. II (f l-akhir) | Er tut so, **als ob** er alles **wüsste**. |
            | **als wenn** + … + Konj. II (f l-akhir) | Sie sieht aus, **als wenn** sie krank **wäre**. |
            | **als** + Konj. II **direct** (inversion) | Er tut so, **als wüsste** er alles. |

            **Zaman:** f nefs l-we9t → *wäre, hätte, würde …* · 9bel → *hätte gemacht / wäre gegangen*:
            > Er tut so, als ob nichts **passiert wäre**.

            Af3al ghaliban: **so tun, als ob** (dar rasou) · **aussehen, als ob** · **klingen / sich anhören, als ob** · **sich fühlen, als ob**.
          `,
          [
            ['Er tut so, als ob er nichts gehört hätte.', 'Kaydir rasou b7al ila ma sme3 walou.'],
            ['Es sieht aus, als würde es gleich regnen.', 'Kayban b7al ila ghadi tchta daba.'],
          ],
        ),
        choice('"Er redet, ___ er der Chef wäre."', ['als ob', 'wenn', 'ob'], 0),
        choice('"Sie tut so, als ___ sie keine Zeit."', ['hätte', 'hat', 'habe'], 0),
        gap('Kemmel', 'Du siehst aus, als ob du die ganze Nacht nicht geschlafen ___.', 'hättest|haettest'),
        translate("Terjem l l'Almaniya", 'Kaydir rasou b7al ila kay3ref kolchi.', ['Er tut so, als ob er alles wüsste.', 'Er tut so, als wüsste er alles.', 'Er tut so, als wenn er alles wüsste.']),
        graded(choice('*Kan momkin tgoulha liya!* =', ['Das hättest du mir sagen können!', 'Das hättest du mir gesagt können!', 'Das konntest du mir sagen!'], 0)),
        graded(choice('"Das ___ nicht passieren dürfen."', ['hätte', 'wäre', 'hat'], 0)),
        graded(gap('Kemmel', 'Wir hätten den Vertrag genauer lesen ___. (khassna)', 'sollen|müssen|muessen')),
        graded(choice('Ina jomla s7i7a?', ['Ich bedauere, dass ich nicht hätte helfen können.', 'Ich bedauere, dass ich nicht helfen können hätte.'], 0)),
        graded(choice('"Er tut so, ___ wäre er krank."', ['als', 'als ob', 'wie'], 0, 'als + Konj. II direct → inversion.')),
        graded(choice('"Sie lachte, als ob nichts ___ wäre."', ['passiert', 'passieren', 'passierte'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kan khassni nwffer flous ktar.', ['Ich hätte mehr Geld sparen sollen.', 'Ich hätte mehr Geld sparen müssen.'])),
        summary(
          [
            '**hätte + Infinitiv + Modalverb**: hätte machen **sollen / können / müssen / dürfen** (machi gesollt!).',
            'F Nebensatz: **dass ich … hätte machen sollen** (hätte 9bel j-jouj infinitifs).',
            '**als ob / als wenn** + … Konj. II · **als** + Konj. II (inversion) = b7al ila.',
          ],
          ['Tkhdem Konj. II f l-madi m3a Modalverben', 'Tkhdem als ob'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Verbraucherrechte kennen',
      description: 'T9ra 3la 7o9ou9 l-mostahlik, tsme3 istichara, o tkteb chakwa rasmiya.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfre9 bin Widerruf, Gewährleistung o Garantie', 'Tfhem l-istichara d Verbraucherzentrale', 'Tkteb chakwa rasmiya b ajal o 7ojaj'],
      steps: [
        intro(
          'Ärger mit dem Online-Kauf',
          'Salma chrat ordinateur online. Men b3d 5 chhour, l-écran t9ad. L-boutique katgoul: "Garantie ma kaynach." — wach 3endha l-7a99?',
          ['T9ra', 'Tsme3', 'Tkteb chakwa'],
        ),
        reading(
          'Widerruf, Gewährleistung, Garantie – was ist der Unterschied?',
          md`
            **Widerrufsrecht:** Wer online oder am Telefon einkauft, kann den Vertrag in der Regel innerhalb von **14 Tagen** ohne Angabe von Gründen widerrufen. Die Frist beginnt, sobald die Ware angekommen ist. Im Geschäft gibt es dieses Recht nicht – dort ist ein Umtausch reine Kulanz.

            **Gewährleistung:** Sie ist gesetzlich vorgeschrieben und gilt **zwei Jahre** ab Kauf – sowohl online als auch im Laden. Der Verkäufer haftet für Mängel, die bereits beim Kauf vorhanden waren. Tritt ein Mangel im ersten Jahr auf, wird vermutet, dass er von Anfang an bestand. Der Kunde muss dies also nicht beweisen. Zunächst hat der Verkäufer das Recht auf Nacherfüllung, also Reparatur oder Ersatz.

            **Garantie:** Sie ist eine **freiwillige** Zusatzleistung des Herstellers. Ihre Bedingungen kann er selbst festlegen. Wichtig: Eine Garantie ersetzt die Gewährleistung nicht – auch wenn manche Händler so tun, als ob es nur die Garantie gäbe.
          `,
          {
            text: '9ra n-nass o jaweb.',
            glossary: [
              ['widerrufen', 'tragi3 (3la l-3a9d)'],
              ['die Kulanz', 'l-khir / mjamla (machi wajib)'],
              ['gesetzlich vorgeschrieben', 'mfroud b l-9anoun'],
              ['der Mangel', 'l-3ayb'],
              ['vermuten', 'ftared / dhann'],
              ['die Nacherfüllung', 'l-islah wla l-istibdal'],
              ['freiwillig', 'ikhtiyari / tatawwo3i'],
            ],
          },
        ),
        choice('Ch7al d l-iyyam d Widerruf f l-chra2 online?', ['7', '14', '30'], 1),
        choice('Wach kayn Widerruf f l-magasin?', ['Ah, 14 youm', 'La — ghir b l-khir (Kulanz)'], 1),
        choice('Ch7al dayra Gewährleistung?', ['6 chhour', '1 3am', '2 snin'], 2),
        choice('Salma: l-écran t9ad men b3d 5 chhour. Chno 3endha?', ['Ghir Garantie ila kanet', 'Gewährleistung — o ma khasshach tbyyen belli l-3ayb kan men l-lowel', 'Walou'], 1),
        listening(
          'Beratung bei der Verbraucherzentrale',
          [
            ['Beraterin', 'Der Händler hat Ihnen also geschrieben, Sie hätten keinen Anspruch, weil die Herstellergarantie nur sechs Monate gelte?', 'Iwa t-tajer kteb lik belli ma 3endekch l-7a99, 7it garantie d s-sani3 ghir 6 chhour?'],
            ['Salma', 'Ja, genau. Er tut so, als ob das Problem nicht seins wäre.', 'Ah, bdebt. Kaydir rasou b7al ila l-mochkil machi dyalou.'],
            ['Beraterin', 'Das ist leider ein typischer Trick. Ihr Ansprechpartner ist der Händler, nicht der Hersteller – und zwar zwei Jahre lang. Sie hätten ihm übrigens schon gleich beim ersten Fehler schreiben können.', 'Hadi ma3a l-asaf 7ila m3roufa. L-mas2oul 3lik howa t-tajer, machi s-sani3 — o 3amayn. O b l-mounasaba, kan momkin tktbi lih men l-ghalat l-lowel.'],
            ['Salma', 'Was soll ich jetzt tun?', 'Chno khassni ndir daba?'],
            ['Beraterin', 'Schreiben Sie ihm schriftlich, beschreiben Sie den Mangel und setzen Sie eine Frist von zwei Wochen für die Reparatur. Wenn er nicht reagiert, können Sie vom Vertrag zurücktreten und Ihr Geld zurückverlangen.', 'Ktbi lih b l-kitaba, wsfi l-3ayb, o 3tih ajal d jouj simanat bach yslle7. Ila ma jawbch, t9dri tlghi l-3a9d o ttlbi flousek.'],
          ],
        ),
        choice('Chno ghalat t-tajer?', ['Gal belli Garantie hiya l-wa7ida', 'Rje3 l-flous', 'Sla7 l-ordinateur'], 0),
        choice('Chkoun l-mas2oul f Gewährleistung?', ['S-sani3', 'T-tajer', 'Salma'], 1),
        choice('Ch7al d l-ajal li khass t3tih?', ['3 iyyam', 'Jouj simanat', '6 chhour'], 1),
        pron(
          'Kalimat 9anouniya',
          'L-kalimat t-twila: fe9hom l ajza2.',
          [
            ['die Gewährleistung', 'Ge-währ-leis-tung'],
            ['das Widerrufsrecht', 'Wi-der-rufs-recht'],
            ['die Verbraucherzentrale', 'Ver-brau-cher-zen-tra-le'],
          ],
        ),
        write(
          'Chakwa rasmiya (Reklamation)',
          md`
            Kteb email rasmi l t-tajer (~150 kelma) b smiyt Salma: l-ma3loumat dyal ch-chra2 (tarikh, ra9m l-commande, taman), l-3ayb, rdd 3la l-idda3a2 dyalou (Garantie ≠ Gewährleistung), talab l-islah f ajal, o chno ghadi ddiri ila ma jawbch.
            Khdem **hätten … müssen / können** o **als ob** merra wa7da.
          `,
          ['Betreff + Sehr geehrte Damen und Herren,', 'Ch-chra2 (Bestellung Nr., Datum, Preis)', 'L-3ayb (Seit dem … funktioniert … nicht mehr)', 'Rdd (gesetzliche Gewährleistung, zwei Jahre)', 'Talab + ajal (bis zum …)', 'Ila ma jawbch (vom Vertrag zurücktreten)', 'Mit freundlichen Grüßen'],
          'Betreff: Mangel an Laptop – Bestellung Nr. 48213\n\nSehr geehrte Damen und Herren,\n\nam 3. März habe ich bei Ihnen einen Laptop zum Preis von 899 Euro gekauft. Seit dem 10. August zeigt der Bildschirm nur noch schwarze Streifen; das Gerät ist somit nicht mehr nutzbar.\n\nIn Ihrer E-Mail vom 12. August teilten Sie mir mit, die Herstellergarantie sei abgelaufen. Ich möchte Sie jedoch auf die gesetzliche Gewährleistung hinweisen, die zwei Jahre beträgt. Da der Mangel innerhalb des ersten Jahres aufgetreten ist, wird vermutet, dass er bereits beim Kauf vorlag. Sie hätten mich daher nicht an den Hersteller verweisen dürfen.\n\nIch fordere Sie hiermit auf, den Laptop bis zum 2. September zu reparieren oder zu ersetzen. Sollte bis dahin keine Lösung erfolgen, werde ich vom Kaufvertrag zurücktreten und den Kaufpreis zurückverlangen.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          120,
        ),
        graded(choice('"der Mangel" =', ['l-3ayb', 'l-ajal', 'l-khir'], 0)),
        graded(choice('Garantie hiya…', ['Ikhtiyariya men s-sani3', 'Mfrouda b l-9anoun', 'Nefs l-7aja b7al Gewährleistung'], 0)),
        graded(choice('"vom Vertrag zurücktreten" =', ['Tlghi l-3a9d', 'Twa99e3 l-3a9d', 'T9ra l-3a9d'], 0)),
        graded(dictation('Sme3 o kteb', 'Eine Garantie ersetzt die gesetzliche Gewährleistung nicht.')),
        summary(
          [
            '**Widerruf** (online, 14 youm, bla sabab) · **Gewährleistung** (9anoun, 2 snin, t-tajer) · **Garantie** (ikhtiyari, s-sani3).',
            'Chakwa: **der Mangel, eine Frist setzen, Nacherfüllung, vom Vertrag zurücktreten, den Kaufpreis zurückverlangen**.',
          ],
          ['T3ref 7o9ou9 l-mostahlik', 'Tfhem l-istichara', 'Tkteb chakwa rasmiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 9',
      description: 'Muraja3a: l-i9tisad o l-istihlak, hätte … sollen / können, als ob — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Konj. II f l-madi m3a Modalverben', 'Traja3 als ob', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-machari3 o 7o9ou9 l-mostahlik, n-nadam m3a l-Modalverben, o als ob.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - Wir **hätten** früher **anfangen sollen**. · …, dass wir früher **hätten anfangen sollen**.
            - Er tut so, **als ob** er alles **wüsste**. = …, **als wüsste** er alles.
            - Widerruf (14 T.) · Gewährleistung (2 J.) · Garantie (freiwillig)
          `,
        ),
        dialogue(
          'Bilanz nach einem Jahr',
          [
            ['Salma', 'Und, wie läuft Atlas Box nach einem Jahr?', 'Iwa, kifach dayra Atlas Box men b3d 3am?'],
            ['Mehmet', 'Besser als gedacht! Aber wir hätten von Anfang an einen Steuerberater nehmen sollen. Die Buchhaltung war ein Albtraum.', 'A7ssen men ma kunna kandhennou! Walakin kan khassna nakhdou mostachar d d-dara2ib men l-lowel. L-7isabat kanet kabous.'],
            ['Karim', 'Und ich hätte nicht so viele Boxen auf einmal bestellen dürfen. Die Hälfte liegt immer noch im Keller.', 'O ana ma kanch khassni ntleb dak l-3adad d l-kartounat merra wa7da. N-nos mazal f l-cave.'],
            ['Salma', 'Ihr klingt, als ob ihr trotzdem glücklich wärt.', 'Kat-tsem3ou b7al ila ntouma fr7anin rghm kolchi.'],
            ['Mehmet', 'Sind wir auch! Es ist, als hätten wir ein zweites Kind bekommen.', 'Ah fr7anin! B7al ila jana wld tani.'],
          ],
        ),
        choice('Chno kan khasshom ydirou men l-lowel?', ['Ykhdmou mostachar d d-dara2ib', 'Ybeddlou s-smiya', 'Yfte7ou magasin'], 0),
        choice('Chno ghalat Karim?', ['Tlab bzaf d l-kartounat merra wa7da', 'Nsa l-clients', 'Mcha l l-Maghrib'], 0),
        gap('Kemmel', 'Wir ___ einen Steuerberater nehmen ___. Ihr klingt, als ob ihr glücklich ___.', ['hätten|haetten', 'sollen', 'wärt|waert|wäret|waeret']),
        match('Rbet', [
          ['hätte machen sollen', 'kan khass ndirha'],
          ['hätte machen können', 'kan momkin ndirha'],
          ['hätte nicht machen dürfen', 'ma kanch khass ndirha'],
          ['als ob', 'b7al ila'],
        ]),
        speak(
          'Nadam f l-flous',
          '7ki 3la chra2 wla qarar mali ndemti 3lih: chno w9e3, chno kan khassek ddir (hätte … sollen), o chno kan momkin (hätte … können). Zid jomla b als ob.',
          ['Letztes Jahr habe ich ein teures Handy auf Raten gekauft.', 'Ich hätte die Bedingungen genauer lesen sollen.', 'Ich hätte auch ein gebrauchtes kaufen können.', 'Der Verkäufer tat so, als ob die Zinsen gar keine Rolle spielten.'],
        ),
        graded(choice('*Kan khassek tgoulha liya!* =', ['Das hättest du mir sagen sollen!', 'Das hättest du mir gesagt sollen!', 'Das solltest du mir gesagt haben!'], 0)),
        graded(choice('"Er ___ den Termin nicht vergessen dürfen."', ['hätte', 'wäre', 'würde'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Schade, dass du nicht hast kommen können.', 'Schade, dass du nicht kommen können hast.'], 0)),
        graded(choice('"Er schaut mich an, als ___ er mich nicht kennen."', ['würde', 'wird', 'hat'], 0)),
        graded(gap('Kemmel', 'Sie tut so, als ob sie nichts gesehen ___.', 'hätte|haette')),
        graded(choice('"Es sieht aus, ___ es gleich regnen würde."', ['als ob', 'wie wenn ob', 'ob'], 0)),
        graded(choice('Online-Kauf: Widerruf f…', ['14 youm', '2 snin', '6 chhour'], 0)),
        graded(choice('"der Umsatz" =', ['ra9m l-mo3amalat', 'r-rb7', 'l-iflas'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kan momkin t3ayyet liya!', ['Du hättest mich anrufen können!', 'Sie hätten mich anrufen können!', 'Du hättest mich anrufen können.'])),
        graded(dictation('Sme3 o kteb', 'Wir hätten von Anfang an einen Steuerberater nehmen sollen.')),
        summary(
          [
            'Daba t9der tnaqech machrou3, t3ref 7o9ou9ek, tktb chakwa, o t3ber 3la n-nadam b d9a.',
            'F l-unité 10: l-fann o l-thaqafa — **Konnektoren o prépositions d z-zaman** (sobald, solange, seitdem, bei, vor) o **Infinitiv Perfekt**.',
          ],
          ['T9ddem machrou3', 'Tkhdem hätte … sollen / können', 'Tkhdem als ob', 'Tkteb chakwa rasmiya'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
