import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 10,
  title: 'Kunst & Kultur',
  description: "L-adab, l-masra7, l-mousi9a o l-fann — b Konnektoren o prépositions d z-zaman (sobald, solange, seitdem, kaum dass …) o Infinitiv Perfekt.",
  icon: 'palette',
  objectives: [
    'Tnaqech 3amal fanni o t3ber 3la l-intiba3at',
    'Tfhem nass adabi 9sir o t7llel chakhsiyatou',
    'Tkhdem Konnektoren d z-zaman (sobald, solange, seitdem, sooft, kaum dass)',
    'Tkhdem prépositions d z-zaman (bei, vor, nach, seit, binnen, bis zu)',
    'Tkhdem Infinitiv Perfekt (froh, bestanden zu haben)',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Was ist Kunst?',
      description: 'L-kalimat dyal l-fann o l-adab, o kifach tnaqech 3amal fanni b intiba3at chakhsiya.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-fann o l-adab', 'T3ber 3la l-intiba3 dyalek f 3amal fanni', 'Tnaqech "chno howa l-fann?"'],
      steps: [
        intro(
          'Im Museum für moderne Kunst',
          'Nina jabet Youssef o Olena l ma3rad d l-fann l-mo3aser. 9oddam lawha kollha b l-azra9 — Youssef ma fhem walou, Olena 3jbatha bzaf…',
          ['L-fann', 'L-intiba3', 'N-n9ach'],
        ),
        dialogue(
          'Vor dem blauen Bild',
          [
            ['Youssef', 'Ehrlich gesagt verstehe ich nicht, warum das Kunst sein soll. Das ist doch einfach eine blaue Fläche!', 'B s-sra7a ma fhemtch 3lach hadchi kaygoulou 3lih fann. Ghir mosa7a zar9a!'],
            ['Olena', 'Für mich ist das unglaublich intensiv. Sobald ich davorstehe, werde ich ganz ruhig – als würde ich ins Meer schauen.', '3andi hadi 9wiya bzaf. Ghir kanw9ef 9oddamha, kanwelli hadya — b7al ila kanchouf f l-b7er.'],
            ['Nina', 'Genau darum geht es dem Künstler. Seitdem er in den Fünfzigerjahren diese Bilder gemalt hat, wird darüber gestritten.', 'Hada howa l-hadaf dyal l-fannan. Men mlli rsem had l-lawhat f l-khamsinat, n-nas kaytkhasmou 3liha.'],
            ['Youssef', 'Aber das könnte mein kleiner Neffe auch.', 'Walakin hadchi y9der ydirou ta wld khti s-sghir.'],
            ['Nina', 'Vielleicht. Aber dein Neffe wäre nicht auf die Idee gekommen, dass eine einzige Farbe reicht. Die Idee war das Neue.', 'Momkin. Walakin wld khtek ma kanch ghadi yji f balou belli lawn wa7ed kafi. L-fikra hiya li kanet jdida.'],
            ['Youssef', 'Hm. Ich bin froh, mitgekommen zu sein – auch wenn ich nicht überzeugt bin.', 'Hmm. Fr7an 7it jit m3akom — walakin ma t9ne3tch.'],
          ],
        ),
        vocab('Kunst & Literatur — L-fann o l-adab', [
          ['das Kunstwerk', 'l-3amal l-fanni', 'die Kunstwerke'],
          ['der Künstler / die Künstlerin', 'l-fannan / l-fannana', ''],
          ['das Gemälde', 'l-lawha (peinture)', 'die Gemälde'],
          ['die Skulptur', 'l-mjassam / t-timtal', ''],
          ['die Ausstellung', 'l-ma3rad', ''],
          ['der Roman / die Erzählung', 'r-riwaya / l-9issa', ''],
          ['die Lesung', 'l-9ira2a l-3alaniya (m3a l-kateb)', ''],
          ['die Inszenierung', 'l-ikhraj l-masra7i', ''],
          ['die Figur', 'ch-chakhsiya (f l-9issa)', 'die Figuren'],
          ['der Eindruck', 'l-intiba3', ''],
          ['wirken (auf + Akk)', 'ytha2ther / yban l', ''],
          ['abstrakt / gegenständlich', 'tajridi / wa9i3i', ''],
          ['provozieren', 'stfezz', ''],
          ['beeindruckend', 'mobhir', ''],
        ]),
        explain(
          'T3ber 3la l-intiba3',
          md`
            | Bach… | Redemittel |
            |---|---|
            | l-intiba3 l-lowel | "Auf den ersten Blick wirkt das Bild …" — "Mein erster Eindruck war …" |
            | l-i7sas | "Das Bild löst bei mir … aus." — "Es erinnert mich an …" |
            | l-i3jab | "Besonders beeindruckt hat mich …" — "Ich finde es faszinierend, wie …" |
            | ch-chakk | "Ich kann damit ehrlich gesagt wenig anfangen." — "Mir erschließt sich nicht, warum …" |
            | t-tafsir | "Der Künstler will vermutlich zeigen, dass …" — "Man könnte das als … deuten." |
          `,
          [
            ['Ich kann damit ehrlich gesagt wenig anfangen.', 'B s-sra7a ma kanl9a fih walou (ma kayhmmnich).'],
            ['Man könnte das als Kritik an der Gesellschaft deuten.', 'Momkin nfssrou hadchi b7al n9d l l-mojtama3.'],
          ],
        ),
        match('Rbet', [
          ['das Gemälde', 'l-lawha'],
          ['die Lesung', 'l-9ira2a l-3alaniya'],
          ['der Eindruck', 'l-intiba3'],
          ['abstrakt', 'tajridi'],
          ['beeindruckend', 'mobhir'],
        ]),
        choice('Kifach kat7ess Olena 9oddam l-lawha?', ['Kat-ghdeb', 'Kat-hda — b7al ila katchouf l-b7er', 'Kat-dhek'], 1),
        choice('3la 7sab Nina, chno kan jdid?', ['L-lawn', 'L-fikra belli lawn wa7ed kafi', 'T-taman'], 1),
        choice('"Ich kann damit wenig anfangen." =', ['Ma kayhmmnich / ma kanfhmouch', 'Kay3jebni bzaf', 'Bghit nchrih'], 0),
        gap('Kemmel', 'Auf den ersten ___ wirkt das Bild langweilig. Man könnte es als Kritik ___.', ['Blick', 'deuten']),
        order('Rtteb', 'Besonders beeindruckt hat mich die Farbe.'),
        culture(
          'L-fann f Almaniya o l-Maghrib',
          md`
            - **documenta** f Kassel: men akbar l-ma3arid d l-fann l-mo3aser f l-3alam — kol **5 snin**, 100 youm.
            - **Lesungen:** l-kottab kay9raw men ktobhom f l-maktabat o l-cafés — t-taqlid hada chha3bi bzaf f Almaniya. **Frankfurter Buchmesse** hiya akbar ma3rad d l-ktoub f l-3alam.
            - **Theater:** Almaniya fiha ktar men **140 masra7 3ommoumi** mmowel men d-dawla — tickets d t-tolba rkhas bzaf.
            - **L-Maghrib:** **Festival Gnaoua** f Essaouira, **Musée Yves Saint Laurent** o **MACAAL** f Marrakech, o l-Gnawa daba f l-lista d **UNESCO** d t-torath gher l-madi (2019).
          `,
        ),
        speak(
          '3amal fanni 9oddamek',
          'Khtar 3amal fanni (lawha, ghnya, film, binaya…) li 3jbek wla ma 3jbekch. Wsef l-intiba3 l-lowel, chno kayfekkrek fih, o kifach momkin tfssrou.',
          ['Auf den ersten Blick wirkt das Bild sehr einfach.', 'Es erinnert mich an den Himmel über der Wüste.', 'Besonders beeindruckt hat mich die Stille, die es ausstrahlt.', 'Man könnte es als Einladung zur Ruhe deuten.'],
        ),
        graded(choice('"die Inszenierung" =', ['l-ikhraj l-masra7i', 'l-lawha', 'l-ma3rad'], 0)),
        graded(choice('"Das Bild löst bei mir Ruhe aus." =', ['L-lawha katkhllini nhda', 'L-lawha katghddebni', 'Ma fhemtch l-lawha'], 0)),
        graded(gap('Kemmel', 'Das Bild ___ auf mich sehr traurig. (kayban liya)', 'wirkt')),
        graded(translate("Terjem l l'Almaniya", 'Hadchi kayfekkrni f l-b7er.', ['Das erinnert mich an das Meer.', 'Das erinnert mich ans Meer.'])),
        summary(
          [
            'L-fann: **das Kunstwerk, das Gemälde, die Lesung, die Inszenierung, die Figur, der Eindruck, wirken, abstrakt, beeindruckend**.',
            'L-intiba3: **Auf den ersten Blick … — Es erinnert mich an … — Ich kann damit wenig anfangen. — Man könnte das als … deuten.**',
          ],
          ['T3ber 3la l-intiba3', 'Tnaqech l-fann'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Sobald, solange, seitdem — Zeit ausdrücken & Infinitiv Perfekt',
      description: 'Konnektoren o prépositions d z-zaman (B2), o Infinitiv Perfekt f l-jmel b zu.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem sobald, solange, seit(dem), sooft, kaum dass, bis', 'Tkhdem bei, vor, nach, seit, binnen, bis zu, während', 'Tkhdem Infinitiv Perfekt (gemacht zu haben / gegangen zu sein)'],
      steps: [
        intro(
          '"Sobald ich davorstehe …" — "froh, mitgekommen zu sein"',
          md`
            Olena 9alt "**Sobald** ich davorstehe, werde ich ruhig." o Youssef: "Ich bin froh, **mitgekommen zu sein**."
            F B1 t3llemti *als, wenn, bevor, nachdem, während, bis*. Daba: **d9a ktar** f z-zaman, o **Infinitiv Perfekt**.
          `,
          ['Konnektoren d z-zaman', 'Prépositions', 'Infinitiv Perfekt'],
        ),
        explain(
          'Konnektoren d z-zaman (B2)',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **sobald** | ghir / mlli dghya | **Sobald** die Vorstellung beginnt, wird es still. |
            | **solange** | ma dam / tal ma | **Solange** du redest, kann ich nicht lesen. |
            | **seit(dem)** | men mlli | **Seitdem** ich in Köln wohne, gehe ich oft ins Theater. |
            | **sooft** | kol merra | **Sooft** ich das Lied höre, muss ich weinen. |
            | **kaum dass** / **kaum …, (da)** | 3ad … o direct | **Kaum dass** er angekommen war, ging das Licht aus. · **Kaum war** er da, … |
            | **bis** | 7tal | Warte, **bis** der Vorhang fällt. |
            | **ehe** (= bevor, rasmi) | 9bel ma | **Ehe** man urteilt, sollte man zuhören. |

            ⚠️ **seit(dem)**: ila l-7adath **mazal dayr** → **Präsens** f j-jouj: "Seit ich hier **wohne**, **bin** ich glücklich."
            ⚠️ **sobald** m3a l-mosta9bal: Präsens o **Perfekt** l l-7adath l-lowel: "Sobald ich **gegessen habe**, rufe ich dich an."
          `,
          [
            ['Solange es regnet, bleiben wir drinnen.', 'Ma dam katchta, ghadi nb9aw l-dakhel.'],
            ['Kaum hatte sie angefangen zu singen, wurde es still.', '3ad bdat katghenni o direct sket kolchi.'],
          ],
        ),
        choice('"___ ich das Buch gelesen habe, gebe ich es dir zurück." (ghir mlli)', ['Sobald', 'Solange', 'Seitdem'], 0),
        choice('"___ du Fieber hast, solltest du im Bett bleiben." (ma dam)', ['Solange', 'Sobald', 'Kaum dass'], 0),
        choice('"___ ich Deutsch lerne, verstehe ich die Lieder besser." (men mlli)', ['Seitdem', 'Sobald', 'Bis'], 0),
        gap('Kemmel', '___ ich in dieses Museum komme, entdecke ich etwas Neues. (kol merra)', 'Sooft'),
        order('Rtteb', 'Kaum war der Film zu Ende, standen alle auf.'),
        explain(
          'Prépositions d z-zaman',
          md`
            | Préposition | 7ala | Ma3na | Mital |
            |---|---|---|---|
            | **bei** | Dat | f we9t / mlli | **beim** Lesen · **bei** Sonnenuntergang |
            | **vor** | Dat | 9bel / hadi | **vor** der Vorstellung · **vor** zwei Jahren |
            | **nach** | Dat | men b3d | **nach** dem Konzert |
            | **seit** | Dat | men (o mazal) | **seit** drei Jahren |
            | **ab** | Dat | men (l-mosta9bal) | **ab** nächster Woche |
            | **während** | Gen | f l-wa9t | **während** der Pause |
            | **binnen / innerhalb** | Dat / Gen | f wost | **binnen** einer Woche · **innerhalb** eines Monats |
            | **bis zu** | Dat | 7tal | **bis zum** Ende |
            | **zeit** + Gen | | f 7yatou kamla | **zeit** seines Lebens |

            **Konnektor → préposition:** *Wenn man liest* → **beim** Lesen · *Bevor das Konzert beginnt* → **vor** Beginn des Konzerts · *Nachdem er angekommen war* → **nach** seiner Ankunft.
          `,
        ),
        choice('"___ Essen spricht man nicht." (f we9t)', ['Beim', 'Vorm', 'Seit dem'], 0),
        choice('"Die Ausstellung ist ___ nächstem Montag geöffnet." (men — l-mosta9bal)', ['ab', 'seit', 'vor'], 0),
        gap('Kemmel', 'Bitte zahlen Sie ___ einer Woche. (f wost)', 'binnen|innerhalb'),
        explain(
          'Infinitiv Perfekt',
          md`
            **Partizip II + haben / sein** — ila l-fi3l f jomlat **zu** w9e3 **9bel** l-fi3l r-ra2isi:

            | Infinitiv Präsens (nefs l-we9t) | Infinitiv Perfekt (9bel) |
            |---|---|
            | Ich freue mich, dich **zu sehen**. (daba) | Ich freue mich, dich **gesehen zu haben**. (chftek — sala) |
            | Er hofft, die Prüfung **zu bestehen**. (f l-mosta9bal) | Er ist froh, die Prüfung **bestanden zu haben**. (nje7 deja) |
            | | Sie bedauert, nicht **gekommen zu sein**. (sein m3a l-7araka) |

            Kayji ghaliban men b3d: *froh sein, stolz sein, sich erinnern, bedauern, behaupten, zugeben, sich schämen*.
            Ta m3a l-Modalverben subjectifs (unité 8): "Er soll reich **gewesen sein**."
          `,
          [
            ['Ich erinnere mich, dieses Bild schon einmal gesehen zu haben.', 'Kantfekker belli chft had l-lawha chi merra.'],
            ['Er gibt zu, sich geirrt zu haben.', 'Kay3terf belli ghlat.'],
          ],
        ),
        choice('"Ich bin stolz, das Buch zu Ende ___." (deja)', ['gelesen zu haben', 'zu lesen', 'gelesen zu sein'], 0),
        choice('"Sie bedauert, nicht früher ___." (ji — 7araka)', ['gekommen zu sein', 'gekommen zu haben', 'zu kommen'], 0),
        gap('Kemmel', 'Er behauptet, den Täter gesehen zu ___.', 'haben'),
        translate("Terjem l l'Almaniya", 'Fr7an 7it jit.', ['Ich bin froh, gekommen zu sein.', 'Ich bin froh, mitgekommen zu sein.', 'Ich freue mich, gekommen zu sein.']),
        graded(choice('"___ ich zu Hause bin, rufe ich dich an." (ghir mlli)', ['Sobald', 'Solange', 'Seitdem'], 0)),
        graded(choice('"___ er krank ist, kann er nicht arbeiten." (ma dam)', ['Solange', 'Sobald', 'Kaum dass'], 0)),
        graded(choice('"Seitdem sie in Berlin ___, geht sie oft ins Theater." (mazal sakna)', ['wohnt', 'wohnte', 'gewohnt hat'], 0)),
        graded(gap('Kemmel', 'Kaum ___ er eingeschlafen, klingelte das Telefon. (sein)', 'war')),
        graded(choice('"___ der Pause gibt es Getränke."', ['Während', 'Seit', 'Ab'], 0)),
        graded(choice('"Ich bin froh, die Prüfung ___."', ['bestanden zu haben', 'bestanden zu sein', 'zu bestanden'], 0)),
        graded(choice('"Er schämt sich, so laut ___." (dar — 9bel)', ['gewesen zu sein', 'gewesen zu haben', 'zu sein gewesen'], 0)),
        graded(translate("Terjem l Nominalstil", 'Bevor das Konzert beginnt, …', ['Vor Beginn des Konzerts', 'Vor dem Beginn des Konzerts', 'Vor Konzertbeginn'])),
        summary(
          [
            '**sobald** (ghir mlli) · **solange** (ma dam) · **seit(dem)** (men mlli — Präsens ila mazal) · **sooft** (kol merra) · **kaum dass / kaum …** (3ad … o direct).',
            '**bei / vor / nach / seit / ab** + Dat · **während / innerhalb** + Gen · **binnen** + Dat.',
            'Infinitiv Perfekt: **gemacht zu haben / gegangen zu sein** = l-7adath 9bel.',
          ],
          ['Tkhdem Konnektoren d z-zaman', 'Tkhdem prépositions d z-zaman', 'Tkhdem Infinitiv Perfekt'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Eine Erzählung lesen',
      description: 'T9ra 9issa 9siira (original), tsme3 l-kateba f Lesung, o tkteb Rezension adabiya / ta7lil chakhsiya.',
      minutes: 45,
      kind: 'skills',
      goals: ['Tfhem nass adabi (l-ma3na l-mobachir o l-ghayr mobachir)', 'Tfhem Lesung o l-as2ila m3a l-kateba', 'Tkteb ta7lil chakhsiya'],
      steps: [
        intro(
          'Lesung in der Stadtbibliothek',
          'L-kateba (khayaliya) Leila Amrani kat9ra men l-majmou3a l-jdida dyalha "Zwei Ufer". Salma o Youssef mchaw ysem3ou.',
          ['T9ra l-9issa', 'Tsme3 l-Lesung', 'Tkteb'],
        ),
        reading(
          'Leila Amrani: „Das Paket" (Auszug)',
          md`
            Jeden ersten Montag im Monat kam das Paket aus Meknès. Seitdem Karim in Bochum lebte, hatte seine Mutter es nicht ein einziges Mal vergessen. Darin: Zimt, getrocknete Feigen, ein Glas Honig, eingewickelt in eine Zeitung, deren Schlagzeilen er schon lange nicht mehr verstand.

            Sobald er das Klebeband aufschnitt, roch die ganze Wohnung nach dem Haus seiner Kindheit. Solange der Duft hing, ging er langsamer, sprach leiser, als könnte er etwas verscheuchen.

            Im März kam kein Paket. Er wartete bis Mittwoch, dann bis Freitag. Er rief nicht an. Er sagte sich, die Post sei eben langsam, und wusste doch, dass es nicht an der Post lag.

            Kaum hatte er am Samstag die Tür geöffnet, sah er seinen Bruder im Treppenhaus stehen – mit einem Paket unter dem Arm, sorgfältig in Zeitungspapier gewickelt. „Sie hat es noch gepackt", sagte Samir. „Sie wollte, dass du es pünktlich bekommst."

            Karim nahm das Paket. Er öffnete es nie.
          `,
          {
            text: '9ra l-9issa b ttaanni — l-ma3na machi dima mobachir.',
            glossary: [
              ['der Zimt', 'l-9erfa'],
              ['einwickeln', 'lff'],
              ['das Klebeband', 'l-scotch'],
              ['der Duft', 'r-ri7a z-zwina'],
              ['verscheuchen', 'kherreb / tered (bla ma yb9a)'],
              ['das Treppenhaus', 'd-droj (cage d escalier)'],
              ['sorgfältig', 'b l-3naya'],
            ],
          },
        ),
        choice('Men fin kan kayji l-colis?', ['Men Bochum', 'Men Meknès — men mmou', 'Men khouh'], 1),
        choice('Kifach kan kayt-t3amel Karim m3a r-ri7a?', ['Kaykhrej direct', 'Kaymchi b chwiya o kayhder b sowt mnkhafed', 'Kaymseh l-bit'], 1),
        choice('3lach ma ttaslch f Mars?', ['Ma 3endouch l-we9t', 'Kan kaykhaf men l-khbar', 'Nsa'], 1, 'L-nass ma kaygoulhach direct — "wusste doch, dass es nicht an der Post lag".'),
        choice('Chno kayfhem l-9ari men "Sie hat es noch gepackt"?', ['Mmou msafra', 'Mmou matet (wla mrida bzaf) — o ghlfat l-colis l-akhir', 'Mmou nsat'], 1),
        choice('3lach ma 7ellch l-colis?', ['Ma bghach l-makla', 'Bach yb9a l-colis l-akhir dima kamel — rabt m3a mmou', 'Ma kanch 3endou mqess'], 1),
        listening(
          'Publikumsgespräch nach der Lesung',
          [
            ['Zuhörerin', 'Frau Amrani, warum erfahren wir nie direkt, was mit der Mutter passiert ist?', 'Madame Amrani, 3lach ma kan3refouch direct chno w9e3 l l-omm?'],
            ['Leila Amrani', 'Weil Karim es selbst nicht aussprechen kann. Solange er es nicht sagt, ist es irgendwie noch nicht wahr. Ich wollte, dass die Leser diese Lücke spüren.', '7it Karim b rasou ma y9derch ygoulha. Ma dam ma galhach, b7al ila mazal machi s7i7a. Bghit l-9orra2 y7essou b had l-faragh.'],
            ['Zuhörer', 'Ist die Geschichte autobiografisch?', 'Wach l-9issa men 7yatek?'],
            ['Leila Amrani', 'Teilweise. Meine Mutter hat mir jahrelang Pakete geschickt, seitdem ich in Deutschland studiere. Zum Glück lebt sie noch – und schickt immer noch zu viel Zimt.', 'Jouz2iyan. Mmi kanet katsifet liya l-colis snin, men mlli bdit n9ra f Almaniya. L-7amdolillah mazal 7ayya — o mazal katsifet l-9erfa bzaf.'],
            ['Zuhörerin', 'Warum schreiben Sie auf Deutsch und nicht auf Arabisch?', '3lach katkteb b l-almaniya machi b l-3arbiya?'],
            ['Leila Amrani', 'Weil die Distanz der fremden Sprache mir hilft, über Nähe zu schreiben. Ich bin froh, diesen Schritt gewagt zu haben.', '7it l-b3d d l-lougha l-ajnabiya kay3awnni nkteb 3la l-9orb. Fr7ana 7it tjra2t 3la had l-khotwa.'],
          ],
        ),
        choice('3lach l-kateba ma katgoulch direct chno w9e3?', ['Nsat', '7it Karim ma y9derch ygoulha — o bghat l-9ari y7ess b l-faragh', '7it l-9issa 9siira'], 1),
        choice('Wach mm l-kateba mazal 7ayya?', ['Ah', 'La'], 0),
        choice('3lach katkteb b l-almaniya?', ['L-b3d d l-lougha kay3awenha tkteb 3la l-9orb', '7it ma kat3refch l-3arbiya', '7it n-nachir tlab'], 0),
        pron(
          'L-9ira2a l-adabiya',
          'F l-Lesung, l-wa9fat (pauses) mohimmin: kat3ti l-9ari we9t y7ess. Jmel 9sar = wa9fa twila men b3dhom.',
          [
            ['Im März kam kein Paket.', 'wa9fa twila men b3d'],
            ['Er rief nicht an.', 'sowt mnkhafed'],
            ['Er öffnete es nie.', 'l-jomla l-akhira — b chwiya'],
          ],
        ),
        write(
          'Ta7lil ch-chakhsiya',
          md`
            Kteb ta7lil (~150 kelma) l chakhsiyat Karim f "Das Paket": chkoun howa, chno kay7ess (o kifach n3refouh bla ma ytgal direct), o chno kay3ni l-colis f l-akhir. 3ti ra2yek f l-9issa.
            Khdem 3 Konnektoren d z-zaman (sobald, solange, seitdem, kaum …) o Infinitiv Perfekt merra wa7da.
          `,
          ['Tqdim (In der Erzählung „Das Paket" von … geht es um …)', 'Karim: chkoun', 'L-i7sasat (indirekt: Er rief nicht an …)', 'L-colis l-akhir (symbolisiert …)', 'Ra2yek (Mich hat … berührt)'],
          'In der Erzählung „Das Paket" von Leila Amrani geht es um Karim, einen jungen Mann aus Meknès, der in Bochum lebt.\n\nSeitdem er in Deutschland wohnt, schickt ihm seine Mutter jeden Monat ein Paket. Sobald er es öffnet, fühlt er sich in seine Kindheit zurückversetzt. Das Paket ist also mehr als ein Geschenk: Es ist seine Verbindung zu Heimat und Familie.\n\nKarims Gefühle werden nie direkt beschrieben. Dass er Angst hat, erkennt der Leser daran, dass er nicht anruft und sich einredet, die Post sei schuld. Solange er nichts Genaues weiß, kann er die Wahrheit verdrängen.\n\nDas letzte Paket, das er nie öffnet, symbolisiert die Mutter selbst: Er möchte es für immer bewahren.\n\nMich hat besonders das offene Ende berührt. Ich bin froh, diese Geschichte gelesen zu haben, denn sie zeigt mit wenigen Worten, wie sich Migration und Verlust anfühlen.',
          120,
        ),
        graded(choice('"der Duft" =', ['r-ri7a z-zwina', 'l-9erfa', 'l-colis'], 0)),
        graded(choice('"autobiografisch" kay3ni…', ['Men 7yat l-kateb', 'Khayali kamel', 'Tarikhi'], 0)),
        graded(choice('L-colis l-akhir f l-9issa "symbolisiert"…', ['L-omm o r-rabt m3aha', 'L-bousta', 'L-makla'], 0)),
        graded(dictation('Sme3 o kteb', 'Sobald er das Paket öffnete, roch die Wohnung nach seiner Kindheit.')),
        summary(
          [
            'L-adab: **die Erzählung, die Figur, das offene Ende, symbolisieren, autobiografisch, die Lesung**.',
            'Ta7lil: **In der Erzählung … geht es um … — Das erkennt der Leser daran, dass … — … symbolisiert …**',
          ],
          ['Tfhem nass adabi', 'Tfhem Lesung', 'Tkteb ta7lil chakhsiya'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 10',
      description: 'Muraja3a: l-fann o l-adab, Konnektoren o prépositions d z-zaman, Infinitiv Perfekt — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 z-zaman (Konnektoren o prépositions)', 'Traja3 Infinitiv Perfekt', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-fann o l-adab, z-zaman b d9a, o Infinitiv Perfekt.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **sobald · solange · seit(dem) · sooft · kaum dass / kaum … · ehe**
            - **beim** Lesen · **vor / nach / seit** + Dat · **während** + Gen · **binnen** + Dat
            - froh, … **gemacht zu haben** / **gegangen zu sein**
          `,
        ),
        dialogue(
          'Nach der Theaterpremiere',
          [
            ['Nina', 'Und? Wie fandest du die Inszenierung?', 'Iwa? Kifach jak l-ikhraj?'],
            ['Salma', 'Beeindruckend! Sobald die Schauspielerin die Bühne betrat, war es mucksmäuschenstill.', 'Mobhir! Ghir dkhlat l-momattila l l-masra7, sket kolchi.'],
            ['Nina', 'Und das Bühnenbild – nur ein Stuhl und ein Fenster.', 'O d-dikour — ghir koursi o sarjem.'],
            ['Salma', 'Genau. Ich erinnere mich, so etwas noch nie gesehen zu haben. Seitdem ich in Köln wohne, gehe ich viel öfter ins Theater.', 'Bdebt. Ma 3emmri chft chi 7aja b7al hadi. Men mlli kansken f Köln, kanmchi l l-masra7 ktar bzaf.'],
            ['Nina', 'Solange es so gute Studententickets gibt, komme ich immer mit!', 'Ma dam kaynin tickets d t-tolba mzyanin b7al hadou, ghadi nji dima m3ak!'],
          ],
        ),
        choice('Chno w9e3 mlli dkhlat l-momattila?', ['Sfferou', 'Sket kolchi', 'Khrjou'], 1),
        choice('Chno kan f d-dikour?', ['Bzaf d l-ath-ath', 'Koursi o sarjem ghir', 'Walou'], 1),
        gap('Kemmel', '___ die Schauspielerin auftrat, war es still. ___ es Studententickets gibt, komme ich mit. (ma dam)', ['Sobald|Als', 'Solange']),
        match('Rbet', [
          ['sobald', 'ghir mlli'],
          ['solange', 'ma dam'],
          ['seitdem', 'men mlli'],
          ['sooft', 'kol merra'],
          ['kaum dass', '3ad … o direct'],
        ]),
        speak(
          'Tajriba thaqafiya mohimma',
          '7ki 3la tajriba thaqafiya ma tnsahach (film, concert, ktab, masra7iya…). Khdem 3 Konnektoren d z-zaman o Infinitiv Perfekt.',
          ['Ich erinnere mich, dieses Konzert mit meinem Vater besucht zu haben.', 'Sobald die Musik begann, bekam ich Gänsehaut.', 'Seitdem höre ich Gnawa-Musik, sooft ich Heimweh habe.', 'Ich bin froh, diesen Abend erlebt zu haben.'],
        ),
        graded(choice('"___ du mir hilfst, bin ich schneller fertig." (ma dam)', ['Solange', 'Sobald', 'Seitdem'], 0)),
        graded(choice('"___ der Zug hält, steigen wir aus." (ghir mlli)', ['Sobald', 'Solange', 'Sooft'], 0)),
        graded(choice('"Kaum ___ ich zu Hause, fing es an zu regnen."', ['war', 'bin', 'hatte'], 0)),
        graded(gap('Kemmel', '___ Lesen trage ich eine Brille. (f we9t)', 'Beim')),
        graded(choice('"___ des Konzerts darf man nicht fotografieren."', ['Während', 'Seit', 'Bei'], 0)),
        graded(choice('"Sie ist stolz, das Projekt allein ___."', ['geschafft zu haben', 'geschafft zu sein', 'zu geschafft'], 0)),
        graded(choice('"Er bedauert, nicht zur Premiere ___."', ['gegangen zu sein', 'gegangen zu haben', 'zu gehen gewesen'], 0)),
        graded(choice('"die Inszenierung" =', ['l-ikhraj l-masra7i', 'l-lawha', 'l-ma3rad'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Men mlli kansken f Köln, kanmchi l l-masra7 ktar.', ['Seitdem ich in Köln wohne, gehe ich öfter ins Theater.', 'Seit ich in Köln wohne, gehe ich öfter ins Theater.', 'Seitdem ich in Köln wohne, gehe ich mehr ins Theater.'])),
        graded(dictation('Sme3 o kteb', 'Ich bin froh, diese Geschichte gelesen zu haben.')),
        summary(
          [
            'Daba t9der tnaqech l-fann o l-adab, t7llel nass adabi, o t3ber 3la z-zaman b d9a.',
            'F l-unité 11: l-hawiya o l-3awlama — **ttisa9 n-nass** (Textkohärenz), **t-tartib f l-Mittelfeld** o **l-mostawayat d l-lougha** (Register).',
          ],
          ['Tnaqech l-fann', 'Tkhdem Konnektoren d z-zaman', 'Tkhdem Infinitiv Perfekt', 'Tkteb ta7lil adabi'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
