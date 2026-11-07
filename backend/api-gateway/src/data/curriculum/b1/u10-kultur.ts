import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 10,
  title: 'Kultur & Freizeit',
  description: "Films, concerts, musées o l-ichtirak f l-jam3iyat — b Partizip I/II b7al adjectif, lassen o l-af3al r-reflexive m3a Dativ.",
  icon: 'theater_comedy',
  objectives: [
    'T7ki 3la film, ktab wla concert o t3ti ra2yek',
    'Tkteb Rezension 9siira',
    'Tkhdem Partizip I o II b7al adjectif (der lachende Mann, das gekochte Ei)',
    'Tkhdem lassen (dir chi 7aja ydirha chi wa7ed akhor / khalli)',
    'Tkhdem l-af3al r-reflexive m3a Dativ (sich etwas ansehen / vorstellen / merken)',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Was machen wir am Wochenende?',
      description: 'L-kalimat dyal l-kultur, l-baramij d l-weekend, o kifach t9tare7 o t9bel / trfod.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-kultur o l-weekend', 'T9tare7 nachat o tfawed', 'T3ti ra2yek f film wla concert'],
      steps: [
        intro(
          'Kulturprogramm',
          'F l-WG, Nina bghat tkharrej l-jami3 f l-weekend: film, musée wla concert? Kol wa7ed 3endou ra2y…',
          ['L-kultur', 'T9tare7', 'T3ti ra2yek'],
        ),
        dialogue(
          'In der WG-Küche',
          [
            ['Nina', 'Was machen wir am Samstag? Im Museum Ludwig gibt es eine neue Ausstellung über Fotografie.', 'Chno ghadi ndirou s-sebt? F Museum Ludwig kayn ma3rad jdid 3la t-taswir.'],
            ['Ben', 'Museum? Ehrlich gesagt finde ich Ausstellungen meistens langweilig. Lass uns lieber ins Kino gehen!', 'Musée? B s-sra7a l-ma3arid ghaliban kanl9ahom mmllin. Khallina nmchiw l s-sinima!'],
            ['Youssef', 'Welcher Film läuft denn?', 'Ach men film kayt3red?'],
            ['Ben', 'Ein spannender Thriller. Die Kritiken sind begeistert. Ich habe mir den Trailer schon angesehen.', 'Thriller mchwwe9. N-noqqad 3jbhom bzaf. Chft l-bande-annonce.'],
            ['Lukas', 'Am Samstagabend spielt doch auch eine Band im Stadtgarten. Der Eintritt ist frei!', 'S-sebt f l-3achiya kayna ta frqa f Stadtgarten. D-dkhoul fabor!'],
            ['Nina', 'Okay, Kompromiss: Nachmittags Museum, abends Konzert. Den Film können wir uns ja nächste Woche ansehen.', 'Wakha, 7all wost: f l-3chiya musée, f l-lil concert. L-film n9drou nchoufouh s-simana l-jaya.'],
            ['Ben', 'Na gut. Aber nur, wenn ihr mich im Museum nicht zu lange stehen lasst!', 'Wakha. Walakin ghir ila ma khlliwnich wa9ef bzaf f l-musée!'],
          ],
        ),
        vocab('Kultur — L-kultur', [
          ['die Ausstellung', 'l-ma3rad', 'die Ausstellungen', ['Die Ausstellung ist bis Mai geöffnet.', 'L-ma3rad m7loul 7tal May.']],
          ['der Eintritt', 'd-dkhoul (l-ticket)', ''],
          ['die Vorstellung', 'l-3ard (théâtre, cinéma)', ''],
          ['die Bühne', 'l-masra7 (scène)', ''],
          ['das Publikum', 'l-jomhour', ''],
          ['der Schauspieler / die Schauspielerin', 'l-momattil / l-momattila', ''],
          ['die Handlung', 'l-9issa (d l-film)', ''],
          ['die Kritik / die Rezension', 'n-na9d / l-mraja3a', ''],
          ['spannend', 'mchwwe9', ''],
          ['langweilig', 'mmllel', ''],
          ['berührend', 'mo2ather', ''],
          ['begeistert sein von', 'tbhher b / 3jbou bzaf', ''],
          ['der Verein', 'l-jam3iya / n-nadi', 'die Vereine'],
          ['ehrenamtlich', 'tatawwo3i (bla flous)', ''],
        ]),
        explain(
          'T9tare7 o t3ti ra2yek',
          md`
            | Bach… | Redemittel |
            |---|---|
            | t9tare7 | "Wie wäre es mit …?" — "Lass uns doch … !" — "Hättest du Lust, …?" |
            | t9bel | "Gute Idee!" — "Da bin ich dabei." |
            | trfod b ladab | "Ehrlich gesagt habe ich keine große Lust auf …" — "Lieber nicht, ich …" |
            | 7all wost | "Wie wäre es mit einem Kompromiss: …" |
            | ra2y (+) | "Der Film hat mich total begeistert / berührt." |
            | ra2y (−) | "Die Handlung war leider ziemlich vorhersehbar." |
          `,
          [
            ['Wie wäre es mit einem Konzert?', 'Ach ban lik f concert?'],
            ['Die Schauspieler waren großartig.', 'L-momattilin kanou ra23in.'],
          ],
        ),
        match('Rbet', [
          ['die Ausstellung', 'l-ma3rad'],
          ['der Eintritt', 'd-dkhoul'],
          ['spannend', 'mchwwe9'],
          ['die Handlung', 'l-9issa'],
          ['ehrenamtlich', 'tatawwo3i'],
        ]),
        choice('3lach Ben ma bghach l-musée?', ['Ghali', 'Kayl9a l-ma3arid mmllin', 'Ba3id'], 1),
        choice('Chno l-7all l-wost dyal Nina?', ['S-sinima o l-concert', 'L-musée f l-3chiya o l-concert f l-lil', 'Gha l-musée'], 1),
        gap('Kemmel', 'Der ___ zum Konzert ist frei. Der Film ist sehr ___. (mchwwe9)', ['Eintritt', 'spannend']),
        order('Rtteb', 'Wie wäre es mit einem Kompromiss?'),
        culture(
          'Vereine o l-kultur f Almaniya',
          md`
            - F Almaniya kaynin ktar men **600 000 Verein** — football, chant, jardinage, photographie… Tqriban n-nos d l-almaniyin 3odw f chi Verein.
            - **Ehrenamt:** 3chrat l-malayin kaykhdmou tatawwo3an (Tafel, Feuerwehr, ta3lim l-lougha l l-lajiyin). Hadi tri9a mzyana bach t3ref nas jdad o t7ssen l-almaniya dyalek!
            - **Kultur rkhisa:** bzaf d l-musées fabor f nhar m3ayyen (f Köln: l-khmis l-lowel f ch-chhar l s-sokkan), o kayn tarif rkhis l t-tolba (**ermäßigt**).
            - **Karneval** f Köln (11.11. o February): "Alaaf!" — l-7afla l-kbira dyal l-mdina.
          `,
        ),
        speak(
          'Role-play: takhtit l-weekend',
          '9tare7 3la sa7bek nachat l s-sebt. Hwa ma bghach (3ta sabab). Tfawdou 7tal tl9aw 7all wost.',
          ['Hättest du Lust, am Samstag ins Theater zu gehen?', 'Ehrlich gesagt habe ich keine große Lust auf Theater.', 'Wie wäre es dann mit einem Konzert?', 'Gute Idee, da bin ich dabei!'],
        ),
        graded(choice('"die Ausstellung" =', ['l-ma3rad', 'l-masra7', 'd-dkhoul'], 0)),
        graded(choice('"Wie wäre es mit …?" katkhdemha bach…', ['T9tare7', 'Trfod', 'Tsowwel 3la t-taman'], 0)),
        graded(gap('Kemmel', 'Ich bin total ___ von dem Film. (3jbni bzaf)', 'begeistert')),
        graded(translate("Terjem l l'Almaniya", 'L-momattilin kanou ra23in.', ['Die Schauspieler waren großartig.', 'Die Schauspieler waren toll.', 'Die Schauspieler waren super.', 'Die Schauspieler waren fantastisch.'])),
        summary(
          [
            'L-kultur: **die Ausstellung, der Eintritt, die Vorstellung, die Handlung, spannend, berührend, der Verein, ehrenamtlich**.',
            'T9tare7: **Wie wäre es mit …? / Hättest du Lust, … zu …?** — 7all wost: **Kompromiss**.',
          ],
          ['T9tare7 nachat', 'T3ti ra2yek f l-kultur'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Der spannende Film — Partizipien, lassen & sich etwas ansehen',
      description: 'Partizip I o II b7al adjectif, l-fi3l lassen, o l-af3al r-reflexive m3a Dativ.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tkhdem Partizip I (der lachende …) o II (das gekochte …) b7al adjectif', 'Tkhdem lassen b ma3aniha', 'Tfre9 bin sich (Akk) o sich (Dat)'],
      steps: [
        intro(
          '"ein spannender Thriller", "ich habe mir den Trailer angesehen"',
          md`
            Ben 9al: "ein **spannender** Thriller" o "Ich habe **mir** den Trailer **angesehen**." O f l-akhir: "… wenn ihr mich nicht stehen **lasst**!"
            Tlata d l-7wayej f had d-ders.
          `,
          ['Partizip b7al adjectif', 'lassen', 'sich (Dat)'],
        ),
        explain(
          'Partizip I o Partizip II b7al adjectif',
          md`
            | Partizip | Kifach | Ma3na | Mital |
            |---|---|---|---|
            | **I** | Infinitiv + **d** | **f nefs l-we9t / actif** (li kay…) | lachen → lachen**d** → das **lachende** Kind (d-dri li kaydhek) |
            | **II** | ge…t / ge…en | **sala / passif** (li t…) | kochen → gekocht → das **gekochte** Ei (l-bid l-mtiyeb) |

            B7al ay adjectif, katzid l-terminaison: *ein spannend**er** Film, die geschlossen**e** Tür, mit kochend**em** Wasser*.

            Mo9arana:
            > die **schreibende** Frau (li katkteb daba) ↔ der **geschriebene** Brief (li tkteb)
            > das **wachsende** Problem (li kaykber) ↔ das **gewachsene** Problem (li kber)
          `,
          [
            ['Vorsicht, kochendes Wasser!', '3ndak, l-ma li kaygli!'],
            ['Das reparierte Fahrrad steht im Hof.', 'L-bichklita li tsl7at f l-7ouch.'],
          ],
          'Bzaf d l-adjectifs li kankhdmou daba homa f l-asl Partizip I: **spannend, berührend, überzeugend, entscheidend, anstrengend**.',
        ),
        choice('"die Kinder, die spielen" = "die ___ Kinder"', ['gespielten', 'spielenden', 'spielende'], 1),
        choice('"das Brot, das man frisch gebacken hat" = "das frisch ___ Brot"', ['backende', 'gebackene', 'gebacken'], 1),
        gap('Kemmel', 'Vorsicht! Das ist ___ Wasser. (kochen, Partizip I)', 'kochendes'),
        gap('Kemmel', 'Die ___ Tür lässt sich nicht öffnen. (schließen, Partizip II)', 'geschlossene'),
        explain(
          'lassen — tlata d l-ma3ani',
          md`
            | Ma3na | Mital |
            |---|---|
            | **dir chi wa7ed akhor ydirha** (faire faire) | "Ich **lasse** mein Auto **reparieren**." (kankhalli chi wa7ed ysl7ha) |
            | **khalli / smah** | "Meine Eltern **lassen** mich allein **reisen**." |
            | **khalli f blastou** | "Ich habe mein Handy zu Hause **gelassen**." |
            | **lass uns** = yallah | "**Lass uns** ins Kino gehen!" |
            | **sich lassen** = momkin | "Das Fenster **lässt sich** nicht öffnen." (ma kayt7ellch) |

            lassen + infinitiv **bla zu**. F Perfekt m3a infinitiv akhor: "Ich **habe** mein Auto reparieren **lassen**." (machi gelassen!)
          `,
          [
            ['Ich lasse mir die Haare schneiden.', 'Kanmchi n7ssen cha3ri (3and l-7ajjam).'],
            ['Lass mich das machen!', 'Khallini ndirha ana!'],
          ],
        ),
        choice('"Ich repariere mein Fahrrad nicht selbst. Ich ___ es reparieren."', ['lasse', 'mache', 'habe'], 0),
        choice('"Ich habe meinen Pass ___ erneuern ___."', ['— / gelassen', '— / lassen', 'zu / lassen'], 1),
        order('Rtteb', 'Meine Eltern lassen mich allein reisen.'),
        explain(
          'Reflexive Verben m3a Dativ',
          md`
            Ila kan f l-jomla **Akkusativ-Objekt akhor**, r-reflexive kaywelli **Dativ**:

            | Akk (bla objet akhor) | Dat (+ objet) |
            |---|---|
            | Ich wasche **mich**. | Ich wasche **mir die Hände**. |
            | Ich ziehe **mich** an. | Ich ziehe **mir eine Jacke** an. |

            Af3al dima m3a Dativ: **sich etwas ansehen** (chaf b ihtimam), **sich etwas vorstellen** (tkhayyel), **sich etwas merken** (7fed f rasou), **sich etwas wünschen**, **sich etwas leisten** (9der ychri), **sich etwas überlegen** (fekker f).

            L-far9 ghir f **ich** o **du**: mich/mir, dich/dir. "er/sie/es/wir/ihr/sie" — nefs l-chakl (sich, uns, euch).
          `,
          [
            ['Das kann ich mir nicht vorstellen.', 'Ma n9derch ntkhayyel hadchi.'],
            ['Merk dir die Nummer!', '7fed r-ra9m!'],
            ['Ich kann mir das nicht leisten.', 'Ma 3endich bach nchri hadchi.'],
          ],
        ),
        choice('"Ich muss ___ die Zähne putzen."', ['mich', 'mir'], 1),
        choice('"Ich freue ___ auf das Konzert."', ['mich', 'mir'], 0),
        gap('Kemmel', 'Kannst du ___ die Adresse merken? (du)', 'dir'),
        translate("Terjem l l'Almaniya", 'Kanchouf l-film ghedda.', ['Ich sehe mir morgen den Film an.', 'Morgen sehe ich mir den Film an.', 'Ich schaue mir morgen den Film an.']),
        graded(choice('"der Film, der mich überzeugt hat" ≈ "der ___ Film"', ['überzeugende', 'überzeugte', 'überzeugen'], 0)),
        graded(choice('"die gestohlene Tasche" =', ['s-sak li kaysre9', 's-sak li tsre9', 's-sak li ghadi ysre9'], 1)),
        graded(gap('Kemmel', 'Ich ___ meine Wohnung streichen. (kankhalli chi wa7ed ydirha)', 'lasse')),
        graded(choice('"Das Fenster lässt sich nicht öffnen." =', ['Ma kayt7ellch', 'Ma khllawnich n7ellou', 'Ma bghitch n7ellou'], 0)),
        graded(choice('"Ich wünsche ___ ein neues Fahrrad."', ['mich', 'mir'], 1)),
        graded(choice('"Stell ___ vor: Ich habe Karten für das Konzert!"', ['dich', 'dir'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ma n9derch ntkhayyel hadchi.', ['Das kann ich mir nicht vorstellen.', 'Ich kann mir das nicht vorstellen.'])),
        summary(
          [
            'Partizip I (**-end**) = li kay… (actif, daba) · Partizip II (**ge-…-t/en**) = li t… (sala) — + terminaison d l-adjectif.',
            '**lassen** + Inf.: dir chi wa7ed ydirha / khalli · Perfekt: **habe … reparieren lassen**.',
            '**sich (Dat)** + objet: **mir / dir** — sich etwas ansehen, vorstellen, merken, leisten.',
          ],
          ['Tkhdem Partizip b7al adjectif', 'Tkhdem lassen', 'Tkhdem reflexive m3a Dativ'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Rezensionen & Ehrenamt',
      description: 'T9ra Rezension dyal film, tsme3 interview m3a mtatawe3, o tkteb Rezension dyalek.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem Rezension (l-moujaz, n-na9d, t-tawsiya)', 'Tfhem interview 3la l-Ehrenamt', 'Tkteb Rezension 9siira'],
      steps: [
        intro(
          'Kritik schreiben',
          'Ben 9ra Rezension 3la l-film li bgha ychouf. O Youssef sme3 interview f r-radio 3la nas kaykhdmou tatawwo3an…',
          ['T9ra Rezension', 'Tsme3 interview', 'Tkteb'],
        ),
        reading(
          'Filmkritik: „Der letzte Zug"',
          md`
            **Spannend bis zur letzten Minute** ★★★★☆

            Ein Nachtzug von Wien nach Hamburg, sieben Fremde in einem Abteil – und plötzlich ist einer von ihnen verschwunden. So beginnt der neue Thriller von Regisseurin Anna Ferber.

            **Die Handlung** ist geschickt aufgebaut: Jede Figur hat ein Geheimnis, und der Zuschauer verdächtigt nach und nach jeden. Die Auflösung am Ende ist überraschend, aber logisch.

            **Die Schauspieler** überzeugen, vor allem Mira Akın als nervöse Studentin, die mehr weiß, als sie zugibt. Die engen, schlecht beleuchteten Gänge des Zuges sorgen für eine bedrückende Atmosphäre.

            **Kritik:** Der Mittelteil ist etwas zu lang, und manche Dialoge wirken künstlich.

            **Fazit:** Wer spannende Krimis mag, sollte sich diesen Film unbedingt ansehen. Für Zuschauer mit schwachen Nerven ist er eher nichts.
          `,
          {
            text: '9ra n-na9d o jaweb.',
            glossary: [
              ['verschwunden', 'ghber / ttwedder'],
              ['geschickt aufgebaut', 'mbni b dka2'],
              ['verdächtigen', 'chekk f'],
              ['die Auflösung', 'l-7all (dyal l-loghz)'],
              ['überzeugen', '9ne3'],
              ['bedrückend', 'khani9 / thqil'],
              ['künstlich', 'mossta3 / machi tabi3i'],
              ['das Fazit', 'l-khlasa'],
            ],
          },
        ),
        choice('Fin kat-dour l-9issa?', ['F tayara', 'F tran d l-lil', 'F hotel'], 1),
        choice('Chno l-mochkil f l-film 3la 7sab n-na9id?', ['L-momattilin', 'L-wost twil bzaf o chi dialogues machi tabi3iyin', 'L-akhir ma mfhoumch'], 1),
        choice('L-man had l-film ma ynasbouch?', ['Li kay7ebbou l-krimis', 'Li 3endhom a3sab d3ifa', 'T-tolba'], 1),
        listening(
          'Radio-Interview: Ehrenamt',
          [
            ['Moderator', 'Herr Okafor, Sie engagieren sich ehrenamtlich bei der Kölner Tafel. Was machen Sie dort?', 'Herr Okafor, nta kat-khdem tatawwo3an f Tafel d Köln. Chno kaddir temma?'],
            ['Herr Okafor', 'Zweimal pro Woche holen wir übrig gebliebene Lebensmittel von Supermärkten ab und verteilen sie an Menschen mit wenig Geld.', 'Jouj d l-merrat f s-simana kanjm3ou l-makla li b9at men s-supermarchés o kanferr9ouha 3la nas 3endhom flous 9lil.'],
            ['Moderator', 'Warum machen Sie das?', '3lach kaddir hadchi?'],
            ['Herr Okafor', 'Als ich vor acht Jahren aus Nigeria kam, haben mir viele Menschen geholfen. Jetzt möchte ich etwas zurückgeben. Und nebenbei habe ich so richtig gut Deutsch gelernt!', 'Mlli jit men Nigeria hadi 8 snin, bzaf d n-nas 3awnouni. Daba bghit nrj3 chwiya. O f nefs l-we9t t3llemt l-almaniya mzyan bzaf!'],
            ['Moderator', 'Was würden Sie Leuten raten, die auch helfen möchten?', 'Chno tnse7 n-nas li bghaw y3awnou 7ta homa?'],
            ['Herr Okafor', 'Einfach anfangen! Schon zwei Stunden im Monat machen einen Unterschied. Auf der Website der Stadt findet man viele Angebote.', 'Bdaw ghir! 7ta jouj sa3at f ch-chhar katbeddel chi 7aja. F l-site dyal l-mdina kayn bzaf d l-3orod.'],
          ],
        ),
        choice('Chno kaydir Herr Okafor f Tafel?', ['Kaytiyeb', 'Kayjme3 l-makla li b9at o kayferr9ha', 'Kay9arri l-almaniya'], 1),
        choice('3lach kaydir hadchi?', ['Bach yrb7 l-flous', '7it 3awnouh nas mlli ja o bgha yrj3 l-khir', '7it l-khedma darouriya'], 1),
        choice('Chno kaynse7?', ['Bda b jouj sa3at f ch-chhar', 'Khdem kol nhar', 'Tsenna 7tal t3ref l-almaniya mzyan'], 0),
        pron(
          'Partizip I: -end',
          'F -end, l-"d" f l-akhir katnte9 "t" (Auslautverhärtung) — walakin mlli tzid terminaison katrje3 "d".',
          [
            ['spannend – ein spannender Film', '"spannent" o men b3d "spannender"'],
            ['berührend – eine berührende Geschichte', '"-ent" o men b3d "-ende"'],
            ['überzeugend – überzeugende Schauspieler', '"-ent" o men b3d "-ende"'],
          ],
        ),
        explain(
          'Kifach tkteb Rezension',
          md`
            1. **Tqdim:** smiya, nou3 (Thriller, Komödie, Roman…), l-mokhrij / l-mo2allif.
            2. **L-9issa:** 2–3 jmel, b **Präsens**, bla ma tgoul l-akhir (kein Spoiler!).
            3. **L-ijabiyat:** "Besonders gut gefallen hat mir …" — "… überzeugt durch …"
            4. **S-salbiyat:** "Etwas schwach finde ich …" — "… wirkt leider …"
            5. **Fazit + tawsiya:** "Wer … mag, sollte sich … ansehen." — "Empfehlenswert für …"
          `,
        ),
        write(
          'Rezension dyalek',
          md`
            Kteb Rezension (~120 kelma) l film, série, ktab wla concert li 3jbek (wla ma 3jbekch).
            Tba3 l-bonya (tqdim → 9issa → + → − → Fazit). Khdem **jouj Partizipien b7al adjectif** o **sich … ansehen / vorstellen**.
          `,
          ['Tqdim (Titel, Genre, Regie / Autor)', 'L-9issa b Präsens (bla spoiler)', 'L-ijabiyat (Partizip: spannend, überzeugend …)', 'S-salbiyat', 'Fazit: Wer …, sollte sich … ansehen.'],
          '„Der Sohn des Fischers" ist ein berührender Familienroman von Laila Haddad.\n\nDie Geschichte spielt in Essaouira: Der junge Amin möchte Musiker werden, doch sein Vater erwartet, dass er das Boot der Familie übernimmt. Als ein Sturm alles verändert, muss Amin eine Entscheidung treffen.\n\nBesonders gut gefallen haben mir die lebendigen Beschreibungen der Stadt – man kann sich den Hafen und den Wind richtig vorstellen. Auch die Figuren sind überzeugend und nie einfach nur gut oder böse.\n\nEtwas schwach finde ich das Ende, das ein bisschen zu schnell kommt.\n\nFazit: Wer gern Geschichten über Familie und Träume liest, sollte sich dieses Buch unbedingt besorgen.',
          100,
        ),
        graded(choice('"das Fazit" =', ['l-khlasa', 'l-bidaya', 'l-momattil'], 0)),
        graded(choice('F Rezension, l-9issa katkteb b…', ['Präsens', 'Futur', 'Plusquamperfekt'], 0)),
        graded(choice('"überzeugen" =', ['9ne3', 'chekk', 'ghber'], 0)),
        graded(dictation('Sme3 o kteb', 'Wer spannende Krimis mag, sollte sich diesen Film ansehen.')),
        summary(
          [
            'Rezension: **Handlung (Präsens, kein Spoiler) → positiv → negativ → Fazit / Empfehlung**.',
            'Ehrenamt: **sich engagieren, die Tafel, verteilen, etwas zurückgeben**.',
          ],
          ['Tfhem Rezension', 'Tfhem interview', 'Tkteb Rezension'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 10',
      description: 'Muraja3a: l-kultur, Partizipien, lassen, sich (Dat) — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Partizip I / II', 'Traja3 lassen o sich (Dat)', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-kultur o l-weekend, Partizipien b7al adjectif, lassen, o reflexive m3a Dativ.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - der lach**end**e Mann (li kaydhek) · der **ge**koch**t**e Reis (li ttiyeb)
            - Ich **lasse** mein Auto **reparieren**. · Ich **habe** es reparieren **lassen**.
            - Ich wasche **mich**. ↔ Ich wasche **mir** die Hände.
          `,
        ),
        dialogue(
          'Nach dem Konzert',
          [
            ['Nina', 'Und, wie fandet ihr die Band?', 'Iwa, kifach jatkom l-frqa?'],
            ['Youssef', 'Großartig! Die Sängerin hat eine unglaublich berührende Stimme.', 'Ra23a! L-moghanniya 3endha sowt mo2ather bzaf.'],
            ['Ben', 'Ich muss zugeben: Das war besser als jeder Film. Ich habe mir sogar ein T-Shirt gekauft.', 'Khassni n3terf: kan a7ssen men ay film. 7ta chrit t-shirt.'],
            ['Lukas', 'Ich lasse mir das Autogramm einrahmen!', 'Ghadi nkhalli chi wa7ed ydir l-autographe f cadre!'],
            ['Nina', 'Und nächste Woche sehen wir uns dann den spannenden Thriller an, Ben.', 'O s-simana l-jaya nchoufou t-thriller l-mchwwe9, Ben.'],
          ],
        ),
        choice('Chno 3jeb Youssef?', ['L-musée', 'S-sowt dyal l-moghanniya', 'L-film'], 1),
        choice('Chno ghadi ydir Lukas b l-autographe?', ['Ghadi ybi3ou', 'Ghadi ydirou f cadre (3and chi wa7ed)', 'Ghadi ykhllih f d-dar'], 1),
        gap('Kemmel', 'Ich ___ mir das Autogramm einrahmen. Das war eine ___ Stimme. (berühren, Part. I)', ['lasse', 'berührende']),
        match('Rbet', [
          ['die singende Frau', 'l-mra li katghenni'],
          ['das gesungene Lied', 'l-ghnya li tghnnat'],
          ['der schlafende Hund', 'l-kelb li na3es'],
          ['das geschlossene Museum', 'l-musée l-msdoud'],
        ]),
        speak(
          '7ki 3la tajriba thaqafiya',
          '7ki 3la akhir merra mchiti l chi 7aja thaqafiya (film, concert, ma3rad, mahrajan): fin, m3a chkoun, chno 3jbek, o wach tnse7 bih. Khdem Partizip o sich … ansehen.',
          ['Letzten Monat habe ich mir eine Ausstellung über Marokko angesehen.', 'Besonders beeindruckend waren die alten Fotos.', 'Die Atmosphäre war entspannend.', 'Wer sich für Geschichte interessiert, sollte sie sich unbedingt ansehen.'],
        ),
        graded(choice('"das lachende Kind" =', ['d-dri li kaydhek', 'd-dri li dhek', 'd-dri li ghadi ydhek'], 0)),
        graded(gap('Kemmel', 'Ich mag keine ___ Eier. (kochen, Part. II)', 'gekochten')),
        graded(choice('"Der Film war ___." (mchwwe9)', ['spannend', 'gespannt', 'spannende'], 0)),
        graded(choice('"Ich habe mein Handy zu Hause ___."', ['gelassen', 'lassen', 'gelasst'], 0)),
        graded(choice('"Ich habe mir die Haare schneiden ___."', ['lassen', 'gelassen', 'gelasst'], 0)),
        graded(choice('"Das kann ich ___ nicht leisten."', ['mich', 'mir'], 1)),
        graded(gap('Kemmel', 'Zieh ___ eine Jacke an, es ist kalt! (du)', 'dir')),
        graded(choice('"der Verein" =', ['l-jam3iya / n-nadi', 'l-ma3rad', 'l-jomhour'], 0)),
        graded(translate("Terjem l l'Almaniya", '7fed r-ra9m!', ['Merk dir die Nummer!', 'Merk dir die Nummer.'])),
        graded(dictation('Sme3 o kteb', 'Die Sängerin hat eine berührende Stimme.')),
        summary(
          [
            'Daba t9der t7ki 3la l-kultur, t9tare7 baramij o tkteb Rezension.',
            'F l-unité 11: l-bi2a o l-mosta9bal — **Futur I** (wa3d o ta9dir) o **sodass / so … dass**.',
          ],
          ['T7ki 3la l-kultur', 'Tkhdem Partizip b7al adjectif', 'Tkhdem lassen o sich (Dat)', 'Tkteb Rezension'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
