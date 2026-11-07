import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 4,
  title: 'Essen & Einkaufen',
  description: "Tchri l-makla, tsowwel 3la t-taman, ttleb f l-café, o tfhem l-Akkusativ (den, einen, keinen).",
  icon: 'shopping_basket',
  objectives: [
    'Tsemmi l-makla o l-machroubat o l-kammiyat',
    'Tsowwel 3la t-taman o tfhem l-asoum',
    'Ttleb f l-café o f l-boulangerie',
    'Tkhdem ein / eine o kein / keine',
    'Tfhem l-Akkusativ: imta o kifach "der" katwelli "den"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Auf dem Markt — F s-souk',
      description: 'L-makla, l-kammiyat o t-taman: kifach tchri f s-souk wla f s-supermarché.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-makla', 'Tgoul l-kammiya (ein Kilo, eine Flasche…)', 'Tsowwel: "Was kostet …?" o tfhem t-taman'],
      steps: [
        intro(
          'S-sebt f s-souk',
          'Nhar s-sebt f Köln kayn **Wochenmarkt** (souk dyal s-simana). Youssef bgha ychri l-khodra o l-fakiha. Sme3 kifach kayhder m3a l-bya3.',
          ['Tsemmi l-makla', 'Tgoul ch7al bghiti', 'Tsowwel 3la t-taman'],
        ),
        dialogue(
          'Am Gemüsestand',
          [
            ['Verkäuferin', 'Guten Morgen! Was darf es sein?', 'Sba7 l-khir! Chno bghiti?'],
            ['Youssef', 'Guten Morgen! Ich möchte ein Kilo Tomaten, bitte.', 'Sba7 l-khir! Bghit kilo d t-tamatim 3afak.'],
            ['Verkäuferin', 'Gern. Sonst noch etwas?', 'Mer7ba. Chi 7aja khra?'],
            ['Youssef', 'Ja, ich brauche auch Kartoffeln. Was kosten die Kartoffeln?', 'Ah, khassni ta btata. B ch7al l-btata?'],
            ['Verkäuferin', 'Ein Kilo kostet 1,80 Euro.', 'Kilo b 1,80 euro.'],
            ['Youssef', 'Dann zwei Kilo, bitte. Und haben Sie Minze?', 'Iwa jouj kilo 3afak. O wach 3endkom n-na3na3?'],
            ['Verkäuferin', 'Ja, hier. Ein Bund Minze kostet einen Euro.', 'Ah, hak. Ch-chtla d n-na3na3 b euro.'],
            ['Youssef', 'Super! Für den Tee. Was macht das zusammen?', 'Mzyan! L atay. Ch7al kolchi?'],
            ['Verkäuferin', 'Das macht 7,10 Euro.', 'Kolchi 7,10 euro.'],
          ],
          'Youssef bgha n-na3na3 bach ydir atay maghribi 3la l-weekend. Sme3 kifach kaytleb.',
        ),
        vocab('Lebensmittel — L-makla', [
          ['das Brot', 'l-khobz', 'die Brote'],
          ['das Brötchen', 'l-khobz s-sghir (pain)', 'die Brötchen'],
          ['die Milch', 'l-7lib', ''],
          ['der Käse', 'l-fromage', ''],
          ['die Butter', 'z-zebda', ''],
          ['das Ei', 'l-bida', 'die Eier'],
          ['der Apfel', 't-teffa7a', 'die Äpfel'],
          ['die Banane', 'l-banana', 'die Bananen'],
          ['die Tomate', 't-tamatisha', 'die Tomaten'],
          ['die Kartoffel', 'l-btata', 'die Kartoffeln'],
          ['die Zwiebel', 'l-bsla', 'die Zwiebeln'],
          ['das Hähnchen', 'd-djaj (l-makla)', 'die Hähnchen'],
          ['das Fleisch', 'l-l7em', ''],
          ['der Fisch', 'l-7out', 'die Fische'],
          ['der Reis', 'r-rouz', ''],
          ['die Nudeln', 'l-ma9arouna (jam3)', ''],
        ]),
        vocab('Getränke & Mengen — L-machroubat o l-kammiyat', [
          ['das Wasser', 'l-ma', ''],
          ['der Saft', 'l-3assir', 'die Säfte', ['Ein Orangensaft, bitte.', '3assir l-limoun 3afak.']],
          ['der Kaffee', 'l-9ahwa', ''],
          ['der Tee', 'atay', ''],
          ['der Zucker', 's-sokkar', ''],
          ['ein Kilo', 'kilo (1000 g)', '', ['ein Kilo Äpfel', 'kilo d t-teffa7']],
          ['ein Pfund', 'ness kilo (500 g)', ''],
          ['100 Gramm', '100 gram', '', ['200 Gramm Käse', '200 gram d l-fromage']],
          ['ein Liter', 'litre', '', ['ein Liter Milch', 'litre d l-7lib']],
          ['eine Flasche', '9er3a', '', ['eine Flasche Wasser', '9er3a d l-ma']],
          ['eine Packung', 'bakiya', '', ['eine Packung Reis', 'bakiya d r-rouz']],
          ['eine Dose', 'l-3elba (boîte)', ''],
          ['ein Stück', 'tr9a / wa7ed', '', ['ein Stück Kuchen', 'tr9a d l-gato']],
        ], 'Rd l-bal: m3a l-kammiya ma kaynach "von" wla *d*: "ein Kilo Tomaten" (machi "ein Kilo von Tomaten").'),
        explain(
          'T-taman: Was kostet …?',
          md`
            **Sou2al:**
            - "Was kostet der Käse?" (mofrad) = *b ch7al l-fromage?*
            - "Was kosten die Äpfel?" (jam3) = *b ch7al t-teffa7?*
            - "Was macht das (zusammen)?" / "Wie viel kostet das?" = *ch7al kolchi?*

            **T-taman b l-euro:**

            | Mktoub | Katgoul |
            |---|---|
            | 0,99 € | neunundneunzig Cent |
            | 1,80 € | ein Euro achtzig |
            | 2,49 € | zwei Euro neunundvierzig |
            | 15,00 € | fünfzehn Euro |

            F Almaniya kaykhdmou **l-fasila (,)** f blast n-no9ta: 2,49 € (machi 2.49).
          `,
          [
            ['Was kostet ein Kilo Tomaten? — 2,99 Euro.', 'B ch7al kilo d t-tamatim? — 2,99 euro.'],
            ['Die Bananen kosten 1,49 Euro.', 'L-banan b 1,49 euro.'],
            ['Das macht zusammen 12,50 Euro.', 'Kolchi 12,50 euro.'],
          ],
        ),
        match('Rbet', [
          ['die Milch', 'l-7lib'],
          ['das Brot', 'l-khobz'],
          ['die Zwiebeln', 'l-bsla'],
          ['der Saft', 'l-3assir'],
          ['die Eier', 'l-bid'],
        ]),
        choice('Chno katchri f "eine Flasche"?', ['Wasser', 'Brot', 'Äpfel'], 0),
        choice('"Was ___ die Bananen?"', ['kostet', 'kosten', 'kostest'], 1, '"die Bananen" jam3 → kost**en**.'),
        dictation('Sme3 o kteb t-taman b l-ar9am (ex: 2,49)', 'drei Euro fünfzig', '3,50 €', ['3,50', '3,50 €', '3.50']),
        gap('Kemmel', 'Ich möchte ein ___ Milch und 200 ___ Käse.', ['Liter', 'Gramm']),
        order('Rtteb', 'Was kostet ein Kilo Äpfel?', undefined, { dar: 'B ch7al kilo d t-teffa7?' }),
        speak(
          'F s-souk',
          'Nta f s-souk. Tleb **kilo d t-teffa7** o **9er3a d l-ma**, sowwel 3la t-taman, o f l-akhir sowwel ch7al kolchi.',
          ['Guten Tag! Ich möchte ein Kilo Äpfel, bitte.', 'Und eine Flasche Wasser.', 'Was kostet das?', 'Was macht das zusammen?'],
        ),
        graded(choice('"die Kartoffeln" kat3ni…', ['l-bsla', 'l-btata', 't-tamatim'], 1)),
        graded(choice('Ina jomla s7i7a?', ['ein Kilo von Tomaten', 'ein Kilo Tomaten', 'ein Kilo der Tomaten'], 1)),
        graded(dictation('Sme3 o kteb t-taman b l-ar9am', 'vier Euro neunzig', undefined, ['4,90', '4,90 €', '4.90'])),
        graded(gap('Kemmel', 'Was ___ der Käse?', 'kostet')),
        graded(choice('"ein Pfund" = ch7al?', ['1 kg', '500 g', '100 g'], 1)),
        summary(
          [
            'L-makla: **das Brot, die Milch, der Käse, das Ei, der Apfel, die Kartoffel…** (m3a l-article!).',
            'L-kammiya bla "von": **ein Kilo Tomaten, eine Flasche Wasser**.',
            '**Was kostet …?** (mofrad) / **Was kosten …?** (jam3) — **Was macht das?**',
          ],
          ['Tsemmi l-makla', 'Ttleb kammiya', 'Tsowwel 3la t-taman o tfhemou'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Einen Kaffee, bitte! — L-Akkusativ',
      description: 'ein / eine, kein / keine, o l-Akkusativ: chkoun kaydir l-fi3l o chno kaytdar 3lih.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tkhdem ein / eine (chi wa7ed)', 'Tnfi b kein / keine', 'Tfhem chno howa l-Akkusativ o imta kaykoun', 'Tbeddel der → den, ein → einen, kein → keinen'],
      steps: [
        intro(
          'Lach "einen Kaffee" o machi "ein Kaffee"?',
          md`
            F l-café sme3ti Youssef kaygoul **"Ich möchte einen Kaffee."** Walakin f l-9amous: **"der Kaffee"**, **"ein Kaffee"**. Mnin ja dak **-en**?

            F had d-ders ghadi nfehmou **l-Akkusativ** khatwa b khatwa: chno howa, imta kaykoun, kifach l-article kayt-beddel, o **3lach** l'Almaniya m7taja lih.
          `,
          ['ein / eine', 'kein / keine', 'L-Akkusativ: den, einen, keinen'],
        ),
        explain(
          'Khatwa 1: ein / eine = chi wa7ed',
          md`
            **der / die / das** = *l-* (7aja m3roufa). **ein / eine** = *wa7ed / chi* (7aja ma m3roufach, wla l-mra l-oula).

            | der | die | das | jam3 |
            |---|---|---|---|
            | **ein** Apfel | **eine** Banane | **ein** Ei | — Äpfel |

            - Masculin o neutre → **ein**. Féminin → **eine**.
            - F l-jam3 **ma kaynach** "ein": "Ich kaufe Äpfel." (*kanchri t-teffa7*).

            Imta "ein" o imta "der"? "Das ist **ein** Apfel. **Der** Apfel ist rot." — l-awwel *chi teffa7a*, men b3d *t-teffa7a* (li hdarna 3liha).
          `,
          [
            ['Das ist ein Brötchen.', 'Hada khobz sghir.'],
            ['Das ist eine Tomate. Die Tomate ist frisch.', 'Hadi tamatisha. T-tamatisha fraîche.'],
          ],
        ),
        explain(
          'Khatwa 2: kein / keine = 7ta / ma… chi',
          md`
            Bach tnfi **smiya** (machi fi3l) katkhdem **kein / keine** = *7ta… / ma kayn chi…*

            | Mojab | Manfi |
            |---|---|
            | Das ist **ein** Apfel. | Das ist **kein** Apfel. |
            | Ich habe **eine** Frage. | Ich habe **keine** Frage. |
            | Wir haben Zeit. (bla article) | Wir haben **keine** Zeit. |
            | Das sind Äpfel. | Das sind **keine** Äpfel. |

            "kein" kaytbe3 "ein": kein (der/das), **keine** (die o l-jam3).

            **kein** wla **nicht**? **kein** m3a s-smiya li 3endha "ein" wla bla article. **nicht** m3a ay 7aja khra: "Ich komme **nicht**." "Das ist **nicht** mein Apfel." (ghadi nchoufou had l-fer9 mzyan f l-unité 7.)
          `,
          [
            ['Ich habe kein Auto.', 'Ma 3endich tomobil.'],
            ['Das ist keine Butter, das ist Käse.', 'Hadi machi zebda, hada fromage.'],
            ['Sorry, ich habe keine Zeit.', 'Sme7 liya, ma 3endich l-wa9t.'],
          ],
        ),
        choice('Kemmel: "Das ist ___ Banane."', ['ein', 'eine'], 1),
        choice('Kemmel: "Ich habe ___ Bruder." (ma 3endich khouya)', ['kein', 'keine', 'nicht'], 0),
        gap('Kemmel', 'Wir haben ___ Milch mehr. (ma b9ach l-7lib)', 'keine'),
        explain(
          'Khatwa 3: chkoun kaydir l-fi3l? (Nominativ)',
          md`
            Kol jomla fiha **chkoun kaydir l-fi3l** = **l-fa3il** (Subjekt). F l'Almaniya l-fa3il kaykoun f **Nominativ** — hada howa l-chkel li t3llemti 7tal daba: der, die, das, ein, eine.

            > **Youssef** kauft Brot. — chkoun kaychri? **Youssef** → Nominativ.

            Bach tl9ah: sowwel **"Wer?"** (chkoun?) + l-fi3l: "*Wer* kauft Brot?" → Youssef.
          `,
        ),
        explain(
          'Khatwa 4: chno kaytdar 3lih l-fi3l? (Akkusativ)',
          md`
            Bzaf d l-af3al 3endhom **jouj d n-nas/7wayej**: wa7ed **kaydir** l-fi3l, o wa7ed **kaytdar 3lih** l-fi3l. Hadak t-tani howa **l-maf3oul bih** = **Akkusativ**.

            > **Youssef** (chkoun?) kauft **den Käse** (chno?).

            Bach tl9ah: sowwel **"Was?"** wla **"Wen?"** (chno? / chkoun?) + l-fa3il + l-fi3l:
            "*Was* kauft Youssef?" → **den Käse** → Akkusativ.

            **Af3al li dima kayjibou Akkusativ** (7fedhom): **haben, brauchen** (khass), **kaufen** (chra), **nehmen** (khda), **möchten**, **essen, trinken, suchen** (9elleb 3la), **sehen** (chaf), **kennen** (3ref), **es gibt** (kayn).
          `,
          [
            ['Ich brauche den Schlüssel.', 'Khassni s-sarout.'],
            ['Salma trinkt einen Tee.', 'Salma kattcherb atay.'],
            ['Es gibt einen Markt in Ehrenfeld.', 'Kayn souk f Ehrenfeld.'],
          ],
        ),
        choice('F j-jomla "Salma kauft das Brot", chno howa l-Akkusativ?', ['Salma', 'kauft', 'das Brot'], 2, '"*Was* kauft Salma?" → das Brot.'),
        choice('F j-jomla "Der Lehrer sucht den Bahnhof", chkoun l-fa3il (Nominativ)?', ['der Lehrer', 'den Bahnhof'], 0, '"*Wer* sucht?" → der Lehrer.'),
        explain(
          'Khatwa 5: kifach l-article kayt-beddel — ghir l-masculin!',
          md`
            Hna l-khbar z-zwin: f l-Akkusativ **ghir l-masculin (der)** kayt-beddel. Die, das o l-jam3 kaybqaw **kif kif**.

            | | der (m) | die (f) | das (n) | jam3 |
            |---|---|---|---|---|
            | Nominativ | **der** / ein / kein | die / eine / keine | das / ein / kein | die / – / keine |
            | Akkusativ | **den** / **einen** / **keinen** | die / eine / keine | das / ein / kein | die / – / keine |

            Ya3ni t7fed ghir 7aja wa7da: **der → den**, **ein → einen**, **kein → keinen** (o ta mein → mein**en**, dein → dein**en**…).
          `,
          [
            ['Der Kaffee ist heiß. → Ich trinke den Kaffee.', 'L-9ahwa skhouna. → Kancherb l-9ahwa.'],
            ['Das ist ein Apfel. → Ich esse einen Apfel.', 'Hadi teffa7a. → Kanakoul teffa7a.'],
            ['Die Milch ist alt. → Ich trinke die Milch nicht.', 'L-7lib 9dim. → Ma kancherbch l-7lib. (die ma tbeddlatch)'],
            ['Ich habe keinen Hunger.', 'Ma fiyach l-jou3. (der Hunger → keinen)'],
          ],
        ),
        explain(
          'Khatwa 6: 3lach l\'Almaniya m7taja l-Akkusativ?',
          md`
            F Darija o l-fransawiya, **t-tartib** howa li kaygoul lik chkoun dar chno: *Youssef chaf Lukas* ≠ *Lukas chaf Youssef*.

            F l'Almaniya **t-tartib 7orr chwiya**: t9der tbda b l-maf3oul bih bach t-akked 3lih. **L-article** howa li kaygoul lik chkoun l-fa3il:

            > "**Der** Hund sieht **den** Mann." = l-kelb kaychouf r-rajel.
            > "**Den** Mann sieht **der** Hund." = **7tal hiya** l-kelb kaychouf r-rajel!

            L-fi3l f l-blasa 2 f j-jouj, walakin "der" o "den" kaygoulou lik chkoun kaychouf chkoun. Ila ma kanch had l-fer9, ma n3erfouch!

            Dakchi 3lach mli kat3llem smiya **khassek t3ref l-article dyalha**: ila kanet **der**, ghadi tbeddelha l **den** f l-Akkusativ.
          `,
          undefined,
          'Ghalta kathira: "Ich habe ein Bruder." S7i7: **"Ich habe einen Bruder."** (der Bruder + haben → Akkusativ → einen).',
        ),
        choice('Kemmel: "Ich möchte ___ Kaffee." (der Kaffee)', ['ein', 'einen', 'eine'], 1, 'möchten + Akkusativ; der → **einen**.'),
        choice('Kemmel: "Ich möchte ___ Cola." (die Cola)', ['einen', 'eine', 'ein'], 1, 'die → ma kat-tbeddelch: **eine**.'),
        choice('Kemmel: "Ich nehme ___ Brötchen." (das Brötchen)', ['ein', 'einen', 'eine'], 0, 'das → ma kayt-beddelch: **ein**.'),
        gap('Kemmel b den / die / das', 'Siehst du ___ Supermarkt? (der Supermarkt)', 'den'),
        gap('Kemmel b einen / eine / ein', 'Ich brauche ___ Löffel. (der Löffel)', 'einen'),
        gap('Kemmel b keinen / keine / kein', 'Er hat ___ Bruder, aber er hat zwei Schwestern.', 'keinen'),
        gap('Kemmel', 'Wir suchen ___ Wohnung. (die Wohnung, chi wa7da)', 'eine'),
        order('Rtteb', 'Ich habe keinen Hunger.', undefined, { dar: 'Ma fiyach l-jou3.' }),
        order('Rtteb (bda b l-Akkusativ)', 'Den Käse kauft Youssef.', 'T9der tbda b l-Akkusativ: "den" kaygoul lik belli l-fromage machi howa l-fa3il.', { dar: 'L-fromage, Youssef li kaychrih.' }),
        translate("Terjem l l'Almaniya", 'Khassni sarout.', ['Ich brauche einen Schlüssel.']),
        translate("Terjem l l'Almaniya", 'Ma 3endich tomobil.', ['Ich habe kein Auto.']),
        graded(choice('"Ich kaufe ___ Apfel." (der Apfel, chi wa7ed)', ['ein', 'einen', 'eine'], 1)),
        graded(choice('Ina article f l-Akkusativ kayt-beddel?', ['ghir der (m)', 'ghir die (f)', 'kolchi'], 0)),
        graded(gap('Kemmel', 'Wir haben ___ Zeit. (manfi, die Zeit)', 'keine')),
        graded(gap('Kemmel', 'Ich trinke ___ Tee. (der Tee, l-ma3rouf)', 'den')),
        graded(choice('"Den Mann sieht der Hund." — chkoun kaychouf?', ['r-rajel', 'l-kelb'], 1, '"der Hund" = Nominativ = l-fa3il.')),
        graded(translate("Terjem l l'Almaniya", '3endi khouya wa7ed.', ['Ich habe einen Bruder.'])),
        graded(choice('Ina jomla s7i7a?', ['Es gibt ein Supermarkt hier.', 'Es gibt einen Supermarkt hier.', 'Es gibt einer Supermarkt hier.'], 1)),
        summary(
          [
            '**ein / eine** = chi wa7ed; **kein / keine** = 7ta / ma… chi.',
            '**Nominativ** = chkoun kaydir l-fi3l (Wer?). **Akkusativ** = chno / chkoun kaytdar 3lih (Was? / Wen?).',
            'Af3al + Akkusativ: haben, brauchen, kaufen, nehmen, möchten, essen, trinken, suchen, sehen, es gibt.',
            'F l-Akkusativ **ghir der kayt-beddel**: **der → den, ein → einen, kein → keinen**.',
            '3lach? 7it l-article kaygoul chkoun l-fa3il, 7tal ila tbeddel t-tartib.',
          ],
          ['Tkhdem ein/eine o kein/keine', 'T3ref l-fa3il o l-maf3oul bih', 'Tgoul "einen Kaffee", "keinen Hunger" s7i7'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Im Café & beim Bäcker',
      description: 'Ttleb b ladab (möchte, hätte gern), tkhelles, t9ra l-cart, o tfhem l-7ayat dyal l-makla f Almaniya.',
      minutes: 25,
      kind: 'skills',
      goals: ['Ttleb b ladab f l-café', 'Tkhelles: "Zahlen, bitte!"', 'T9ra cart / prospectus', 'Tnte9 ü o ö'],
      steps: [
        intro(
          'Pause f l-café',
          'Salma o Olena dkhlou l chi café 9rib l-cours. Ghadi nt3allmou kifach ttleb **b ladab** o kifach tkhelles.',
          ['Ttleb b ladab', 'Tkhelles', 'T9ra l-cart'],
        ),
        explain(
          'Ttleb b ladab',
          md`
            | Bach… | Katgoul |
            |---|---|
            | ttleb | "Ich möchte einen Tee." / "Ich hätte gern einen Tee." / "Ich nehme einen Tee." |
            | tsowwel | "Haben Sie Apfelkuchen?" / "Was können Sie empfehlen?" |
            | tkhelles | "Zahlen, bitte!" / "Die Rechnung, bitte!" |

            **"möchten"** = *bghit* (b ladab). T-tasrif dyalou:
            ich möcht**e**, du möcht**est**, er/sie möcht**e** (bla t!), wir möcht**en**, ihr möcht**et**, sie/Sie möcht**en**.

            **"Ich hätte gern …"** howa a7ssen chkel: rasmi o drif bzaf. 7fedou b7al ma howa.

            Ma tgoulch **"Ich will einen Kaffee"** l s-serveur: "wollen" kaysem3 b7al *bghit daba!*, chwiya b la ladab.
          `,
          [
            ['Ich hätte gern ein Stück Apfelkuchen.', 'Bghit tr9a d gato b t-teffa7 3afak.'],
            ['Möchtest du auch etwas trinken?', 'Bghiti ta nti chi 7aja tcherbi?'],
            ['Zusammen oder getrennt?', 'Kolchi m3a ba3d wla kol wa7ed bou7dou?'],
          ],
        ),
        listening(
          'Im Café Rosa',
          [
            ['Kellner', 'Hallo! Was möchtet ihr trinken?', 'Salam! Chno bghitou tcherbou?'],
            ['Salma', 'Ich hätte gern einen Pfefferminztee, bitte.', 'Bghit atay b n-na3na3 3afak.'],
            ['Olena', 'Und ich nehme einen Cappuccino.', 'O ana ghadi nakhod cappuccino.'],
            ['Kellner', 'Möchtet ihr auch etwas essen? Wir haben heute Apfelkuchen.', 'Bghitou ta takloud chi 7aja? 3endna lyouma gato b t-teffa7.'],
            ['Olena', 'Ja, ein Stück Apfelkuchen, bitte.', 'Ah, tr9a d gato b t-teffa7 3afak.'],
            ['Salma', 'Für mich nichts, danke.', 'Ana walou, chokran.'],
            ['Kellner', 'Gern.', 'Mer7ba.'],
            ['Salma', 'Entschuldigung! Wir möchten zahlen, bitte.', 'Sme7 liya! Bghina nkhellsou 3afak.'],
            ['Kellner', 'Zusammen oder getrennt?', 'M3a ba3d wla kol wa7ed bou7dou?'],
            ['Olena', 'Getrennt, bitte.', 'Kol wa7ed bou7dou 3afak.'],
            ['Kellner', 'Der Tee macht 2,90 Euro. Und der Cappuccino und der Kuchen zusammen 7,40 Euro.', 'Atay 2,90 euro. O l-cappuccino o l-gato 7,40 euro.'],
          ],
          'Sme3 l-hiwar mzyan. Men b3d ghadi tjaweb 3la s-sou2alat.',
        ),
        choice('Chno chrbat Salma?', ['Cappuccino', 'Pfefferminztee (atay b n-na3na3)', 'Wasser'], 1),
        choice('Chkoun klat gato?', ['Salma', 'Olena', 'Salma o Olena'], 1),
        choice('Kifach khellsou?', ['Zusammen (m3a ba3d)', 'Getrennt (kol wa7da bou7dha)'], 1),
        choice('Ch7al khelset Olena?', ['2,90 €', '7,40 €', '10,30 €'], 1),
        culture(
          'Makla f Almaniya: chno khassek t3ref',
          md`
            - **Die Bäckerei** (l-boulangerie) ma3rouf bzaf: ktar men 300 nou3 d l-khobz! S-sba7 n-nas kayklou **Brötchen**.
            - **Pfand:** 3la l-9ra3i o l-canettes katkhelles **0,08–0,25 €** zyada. Mli traje3hom l s-supermarché (*Pfandautomat*) katred lflous.
            - **L-7alal:** 9ra l-étiquette. **Schwein / Schweinefleisch** = l7em l-7allouf; **Gelatine** ghaliban men l-7allouf; **Alkohol** f chi 7lawiyat. Kaynin 7wanet turkiya o 3arabiya fihom l7em 7alal f kol mdina kbira.
            - **F r-restaurant:** ghaliban katkhelles l **l-serveur** f t-tabla, o katzid **Trinkgeld** (pourboire) ~5–10 %: "Das macht 18,40." — "Machen Sie 20."
            - Bzaf d l-blayes kayqbelou ghir **Bargeld** (cash): sowwel "Kann ich mit Karte zahlen?"
          `,
        ),
        reading(
          'Angebote der Woche',
          md`
            SUPERMARKT FRISCH — Angebote der Woche

            Bananen, 1 kg — 1,29 €
            Tomaten, 500 g — 1,49 €
            Milch, 1 Liter — 0,99 €
            Brötchen, 6 Stück — 1,80 €
            Hähnchenbrust (Halal), 400 g — 4,99 €
            Mineralwasser, 6 x 1,5 Liter — 3,49 € (+ 1,50 € Pfand)

            Montag bis Samstag, 8 bis 21 Uhr. Sonntag geschlossen.
          `,
          {
            text: '9ra l-prospectus dyal s-supermarché.',
            glossary: [
              ['das Angebot', 'l-3ard / promotion'],
              ['die Hähnchenbrust', 'sder d-djaj'],
              ['geschlossen', 'msdoud'],
            ],
          },
        ),
        choice('B ch7al 6 Brötchen?', ['1,29 €', '1,80 €', '0,99 €'], 1),
        choice('Wach s-supermarché m7loul nhar l-7ad?', ['Ah', 'La'], 1, '"Sonntag geschlossen."'),
        choice('Ch7al dyal Pfand f l-ma?', ['3,49 €', '1,50 €', '0,25 €'], 1),
        pron(
          'ü o ö',
          'Had jouj 7rouf ma kaynin la f Darija la f l-fransawiya b nefs t-tari9a. Tri9a sahla: **ü** = goul "i" o dir chfatek b7al "ou". **ö** = goul "é" o dir chfatek b7al "o".',
          [
            ['Brötchen', 'ö: goul "é" b chfayf mdowrin'],
            ['möchten – mochten', 'ö ≠ o'],
            ['Müsli – Mus', 'ü ≠ u'],
            ['Tschüss', 'ü 9sira'],
            ['fünf – vier', 'ü f "fünf"'],
          ],
        ),
        write(
          'Message l l-coloc',
          'Nta f s-supermarché. Kteb message 9sir l l-coloc dyalek (WG): goul chno chriti, chno ma l9itich ("Es gibt keinen/keine…"), o sowwlou wach khasso chi 7aja.',
          ['Chno chriti (ich habe … gekauft / ich kaufe …)', 'Chno ma kaynch: Es gibt keinen / keine / kein …', 'Sou2al: Brauchst du …?'],
          'Hallo Lukas! Ich bin im Supermarkt. Ich kaufe Brot, Milch und Tomaten. Es gibt leider keinen Käse und keine Bananen. Brauchst du noch etwas? Vielleicht Wasser? Bis gleich, Youssef',
          25,
        ),
        graded(choice('Ina jomla a7ssen l s-serveur?', ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Kaffee!'], 1)),
        graded(gap('Kemmel', 'Was ___ du trinken? (möchten)', 'möchtest|moechtest')),
        graded(choice('"Getrennt, bitte." kat3ni…', ['Kolchi m3a ba3d', 'Kol wa7ed kaykhelles bou7dou', 'Bla pourboire'], 1)),
        graded(choice('"Schweinefleisch" howa…', ['l7em l-bgri', 'l7em l-7allouf', 'd-djaj'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich hätte gern ein Brötchen.')),
        summary(
          [
            'Ttleb b ladab: **Ich möchte … / Ich hätte gern … / Ich nehme …**',
            'Tkhelles: **Zahlen, bitte!** — **Zusammen oder getrennt?**',
            '9ra l-étiquette: **Schwein, Gelatine**. Rd l-bal l **Pfand** o **Trinkgeld**.',
          ],
          ['Ttleb f l-café', 'Tkhelles', 'T9ra prospectus dyal l-asoum'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 4',
      description: 'Muraja3a: l-makla, t-taman, ein/kein, l-Akkusativ, o t-talab f l-café — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Akkusativ', 'Tchri o ttleb f mawa9if 7a9i9iya', 'Tnje7 f t-test dyal l-unité 4'],
      steps: [
        intro('Muraja3a dyal l-unité 4', 'L-makla, t-taman, ein/kein, l-Akkusativ, o l-café. Raja3 o tmrren 9bel t-test.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-Akkusativ f jadwal wa7ed',
          md`
            | | der | die | das | jam3 |
            |---|---|---|---|---|
            | Nom. | der / ein / kein | die / eine / keine | das / ein / kein | die / – / keine |
            | Akk. | **den / einen / keinen** | die / eine / keine | das / ein / kein | die / – / keine |

            Af3al: haben, brauchen, kaufen, nehmen, möchten, essen, trinken, suchen, sehen, **es gibt**.
          `,
          [
            ['Ich brauche einen Stift und eine Tasche.', 'Khassni stylo o sak.'],
            ['Es gibt keinen Kaffee mehr.', 'Ma b9at 7ta 9ahwa.'],
          ],
        ),
        dialogue(
          'In der Bäckerei',
          [
            ['Bäcker', 'Guten Morgen! Was bekommen Sie?', 'Sba7 l-khir! Chno n3tik?'],
            ['Youssef', 'Ich hätte gern vier Brötchen und ein Brot.', 'Bghit 4 d l-khobzat s-sghar o khobza.'],
            ['Bäcker', 'Welches Brot? Wir haben Roggenbrot und Weißbrot.', 'Ina khobz? 3endna khobz d s-sigal o khobz byed.'],
            ['Youssef', 'Ein Weißbrot, bitte. Haben Sie auch Croissants?', 'Khobz byed 3afak. Wach 3endkom ta croissants?'],
            ['Bäcker', 'Nein, leider haben wir heute keine Croissants mehr.', 'La, ma b9ach 3endna croissants lyouma.'],
            ['Youssef', 'Schade. Dann nehme ich einen Kuchen. Was kostet das?', 'Khsara. Iwa ghadi nakhod gato. Ch7al?'],
            ['Bäcker', 'Das macht 8,30 Euro.', 'Kolchi 8,30 euro.'],
            ['Youssef', 'Kann ich mit Karte zahlen?', 'Wach n9der nkhelles b l-carte?'],
            ['Bäcker', 'Ja, natürlich.', 'Ah, tabi3i.'],
          ],
        ),
        choice('Chno ma kaynch f l-boulangerie?', ['Brötchen', 'Croissants', 'Kuchen'], 1),
        choice('Kifach khelles Youssef?', ['Bargeld (cash)', 'Karte (carte)'], 1),
        gap('Kemmel', 'Wir haben ___ Croissants mehr. Dann nehme ich ___ Kuchen. (der Kuchen)', ['keine', 'einen']),
        match('Rbet', [
          ['Was kostet das?', 'B ch7al hadi?'],
          ['Sonst noch etwas?', 'Chi 7aja khra?'],
          ['Zahlen, bitte!', 'Bghit nkhelles!'],
          ['Für mich nichts.', 'Ana walou.'],
        ]),
        translate("Terjem l l'Almaniya", 'Khassni kilo d l-btata.', ['Ich brauche ein Kilo Kartoffeln.']),
        speak(
          'Role-play: F l-boulangerie',
          'Nta f l-boulangerie: sellem, tleb **jouj d l-khobzat s-sghar** o **tr9a d l-gato**, sowwel 3la t-taman, o sowwel wach t9der tkhelles b l-carte.',
          ['Guten Morgen! Ich hätte gern zwei Brötchen und ein Stück Kuchen.', 'Was kostet das?', 'Kann ich mit Karte zahlen?', 'Danke, schönen Tag noch!'],
        ),
        graded(choice('"Ich möchte ___ Salat." (der Salat)', ['ein', 'einen', 'eine'], 1)),
        graded(choice('"Ich nehme ___ Suppe." (die Suppe)', ['einen', 'ein', 'eine'], 2)),
        graded(gap('Kemmel', 'Hast du ___ Bruder? (der Bruder, chi wa7ed)', 'einen')),
        graded(gap('Kemmel', 'Nein, ich habe ___ Bruder.', 'keinen')),
        graded(choice('"___ Mann sucht den Bahnhof." Chkoun kay9elleb?', ['Der', 'Den'], 0)),
        graded(choice('B ch7al "drei Euro neunundneunzig"?', ['3,19 €', '3,99 €', '9,93 €'], 1)),
        graded(choice('"Was ___ die Tomaten?"', ['kostet', 'kosten'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Kayn supermarché hna?', ['Gibt es hier einen Supermarkt?', 'Gibt es einen Supermarkt hier?'])),
        graded(choice('Ina jomla s7i7a?', ['Wir haben keine Zeit.', 'Wir haben nicht Zeit.', 'Wir haben kein Zeit.'], 0)),
        graded(dictation('Sme3 o kteb', 'Ich nehme einen Tee.')),
        summary(
          [
            'Daba t9der tchri, ttleb o tkhelles f Almaniya.',
            '**L-Akkusativ:** der → **den**, ein → **einen**, kein → **keinen** — l-ba9i ma kayt-beddelch.',
            'F l-unité 5: s-sa3a, n-nhar dyalek, l-mawa3id, o l-af3al li kayt9esmou (aufstehen, einkaufen).',
          ],
          ['Tchri f s-souk o f s-supermarché', 'Ttleb f l-café o tkhelles', 'Tkhdem ein/kein o l-Akkusativ'],
          'Khlasa dyal l-unité 4',
        ),
      ],
    },
  ],
});
