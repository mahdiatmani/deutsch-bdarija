import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 5,
  title: 'Gesundheit & Unfall',
  description: "L-7awadith, l-isti3jal, l-i7sasat, o n-nasa2i7 — b l-af3al r-reflexive (sich fühlen) o \"du solltest\".",
  icon: 'healing',
  objectives: [
    'T7ki 3la 7aditha (Unfall) o tchar7 chno w9e3 lik',
    'Tgoul kifach kat7ess: "Ich fühle mich müde."',
    'Tkhdem l-af3al r-reflexive: sich ausruhen, sich verletzen…',
    'T3ti nasi7a b "du solltest …"',
    'Tfre9 bin Notaufnahme, Hausarzt, Apotheke o Drogerie',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ein Unfall beim Fußball',
      description: 'L-7awadith, l-jrou7, l-isti3jal o l-i7sasat.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-jrou7 o l-isti3jal', 'T7ki chno w9e3', 'Tgoul kifach kat7ess'],
      steps: [
        intro(
          'F l-isti3jal',
          'Nhar l-7ad, f l-match, Youssef taa7 o rjlou t9ellbat (umgeknickt). Mcha l **Notaufnahme** (l-isti3jal) dyal s-sbitar — machi k fermli hadi l-merra, walakin k mrid! Lukas kayttasel bih.',
          ['Tsemmi l-jrou7', 'T7ki chno w9e3', 'Tgoul kifach kat7ess'],
        ),
        dialogue(
          'Am Telefon mit Lukas',
          [
            ['Lukas', 'Youssef! Wie geht es dir? Was ist passiert?', 'Youssef! Labas 3lik? Chno w9e3?'],
            ['Youssef', 'Ich bin beim Fußball hingefallen und mit dem Fuß umgeknickt. Er ist ganz dick!', 'Tit f l-match o rjli t9ellbat. Ntfkhat bzaf!'],
            ['Lukas', 'Oh nein! Bist du im Krankenhaus?', 'Oh la! Wach nta f s-sbitar?'],
            ['Youssef', 'Ja, in der Notaufnahme. Ich musste zwei Stunden warten. Dann haben sie den Fuß geröntgt.', 'Ah, f l-isti3jal. Tsennit jouj sa3at. Men b3d dirou radio l rjli.'],
            ['Lukas', 'Und? Ist er gebrochen?', 'Iwa? Wach mherrsa?'],
            ['Youssef', 'Zum Glück nicht. Nur verstaucht. Ich bekomme einen Verband und soll mich zwei Wochen ausruhen.', 'L-7amdolillah la. Ghir mfkouka (entorse). Ghadi y3tiwni bandage o khassni nrta7 jouj simanat.'],
            ['Lukas', 'Ärgerst du dich?', 'Wach nta mghtat?'],
            ['Youssef', 'Ja, total! Ich kann nicht arbeiten und nicht Fußball spielen. Aber ich freue mich, dass es nicht schlimmer ist.', 'Ah, bzaf! Ma n9derch nkhdem wla nl3eb. Walakin fr7an belli ma kanch a khayb.'],
          ],
        ),
        vocab('Unfall & Verletzungen — L-7awadith o l-jrou7', [
          ['der Unfall', 'l-7aditha', 'die Unfälle'],
          ['hinfallen (ist hingefallen)', 'ta7', ''],
          ['sich verletzen', 'tjre7', '', ['Ich habe mich am Arm verletzt.', 'Tjre7t f dra3i.']],
          ['umknicken', 't9ellbat (r-rjel)', ''],
          ['gebrochen', 'mherres', '', ['Das Bein ist gebrochen.', 'R-rjel mherrsa.']],
          ['verstaucht', 'mfkouk (entorse)', ''],
          ['bluten', 'nzef (d-dem)', ''],
          ['die Wunde', 'l-jer7', 'die Wunden'],
          ['das Pflaster', 'l-pansement s-sghir', ''],
          ['der Verband', 'l-bandage', 'die Verbände'],
          ['der Gips', 'l-jbira (plâtre)', ''],
          ['röntgen', 'dar radio', ''],
          ['die Notaufnahme', 'l-isti3jal (urgences)', ''],
          ['der Krankenwagen', 'l-ambulance', ''],
          ['die Salbe', 'l-pommade', ''],
        ]),
        vocab('Gefühle — L-i7sasat', [
          ['sich fühlen', '7ess', '', ['Ich fühle mich nicht gut.', 'Ma kan7essch b rasi mzyan.']],
          ['müde / erschöpft', '3iyan / mhlouk', ''],
          ['gestresst', 'mstressé', ''],
          ['nervös', 'mnerfez / m9le9', ''],
          ['Angst haben (vor)', 'khaf (men)', ''],
          ['sich Sorgen machen (um)', 'thmm (3la)', '', ['Meine Mutter macht sich Sorgen um mich.', 'Mmi kat-thmm 3liya.']],
          ['sich freuen (über / auf)', 'fre7 (b / 3la 7aja jaya)', ''],
          ['sich ärgern (über)', 'tghayed / tghtat (men)', ''],
          ['traurig ↔ glücklich', '7zin ↔ fr7an', ''],
        ]),
        explain(
          'T7ki chno w9e3 o kifach kat7ess',
          md`
            **Chno w9e3?**
            - "Was ist passiert?" — "Ich bin **hingefallen**." / "Ich hatte einen Unfall."
            - "Wo tut es weh?" — "**Hier**, am Knöchel."
            - "Ich habe mir den Arm **gebrochen**." (*hrrest dra3i* — Dativ "mir": d-dra3 dyali)

            **Kifach kat7ess?**
            - "Wie fühlst du dich?" — "Ich fühle **mich** besser / schlecht / müde."
            - "Ich habe Angst **vor** der Prüfung."
            - "Ich freue mich **auf** den Urlaub." (*7aja jaya*) · "Ich freue mich **über** das Geschenk." (*7aja wslat*)

            **Ila w9e3 chi 7aja khatira:** ttasel b **112** o goul: **Wer?** (chkoun nta) **Wo?** (fin) **Was?** (chno w9e3) **Wie viele?** (ch7al mjrou7) — o **tsenna s-sou2alat**.
          `,
          [
            ['Ein Mann ist von der Leiter gefallen. Er blutet am Kopf.', 'Rajel ta7 men s-sellom. Kaynzef men rasou.'],
            ['Ich fühle mich heute viel besser.', 'Kan7ess b rasi a7ssen bzaf lyouma.'],
          ],
        ),
        match('Rbet', [
          ['die Notaufnahme', 'l-isti3jal'],
          ['der Gips', 'l-jbira'],
          ['bluten', 'nzef'],
          ['hinfallen', 'ta7'],
          ['der Krankenwagen', 'l-ambulance'],
        ]),
        choice('Chno w9e3 l rjel Youssef?', ['Mherrsa', 'Mfkouka (verstaucht)', 'Ma fiha walou'], 1),
        choice('Ch7al d l-wa9t khass Youssef yrta7?', ['Jouj iyyam', 'Jouj simanat', 'Jouj chhour'], 1),
        choice('"Ich freue mich ___ die Ferien." (jayin)', ['über', 'auf', 'an'], 1),
        gap('Kemmel', 'Meine Eltern machen ___ Sorgen um mich.', 'sich'),
        order('Rtteb', 'Ich habe mir den Arm gebrochen.'),
        speak(
          'Ttasel b 112',
          'Chefti 7aditha f z-zen9a: rajel ta7 men l-bechklita o kaynzef. Ttasel b 112 o goul: chkoun nta, fin, chno w9e3.',
          ['Guten Tag, mein Name ist Salma El Idrissi.', 'Ich bin in der Venloer Straße 230 in Köln.', 'Ein Mann ist mit dem Fahrrad gefallen. Er blutet am Kopf.', 'Bitte schicken Sie einen Krankenwagen!'],
        ),
        graded(choice('"der Verband" howa…', ['l-bandage', 'l-jbira', 'l-pommade'], 0)),
        graded(choice('Ra9m l-isti3jal f Almaniya?', ['110', '112', '19'], 1)),
        graded(choice('"Ich habe Angst ___ dem Arzt."', ['vor', 'auf', 'über'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kan7ess b rasi 3iyan.', ['Ich fühle mich müde.'])),
        summary(
          [
            'L-7awadith: **der Unfall, hinfallen, sich verletzen, gebrochen, verstaucht, bluten, die Notaufnahme, der Krankenwagen**.',
            'L-i7sasat: **sich fühlen, Angst haben vor, sich Sorgen machen um, sich freuen auf/über, sich ärgern über**.',
            '**112:** Wer? Wo? Was? Wie viele?',
          ],
          ['T7ki 3la 7aditha', 'Tgoul kifach kat7ess', 'Ttasel b l-isti3jal'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Ich fühle mich besser — Reflexive Verben & sollte',
      description: 'L-af3al r-reflexive (sich), blasthom f j-jomla, o n-nasi7a b "sollte".',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tsrref l-af3al r-reflexive m3a mich, dich, sich…', 'T7ett "sich" f blastou', 'Tkhdem mir/dir m3a l-jism ("Ich wasche mir die Hände")', 'T3ti nasi7a b "sollte"'],
      steps: [
        intro(
          '"Ich ruhe mich aus" — chno hada "mich"?',
          md`
            T-tbib 9al l Youssef: "Sie sollen **sich** ausruhen." O Youssef 9al: "Ich **ärgere mich**."
            Had l-af3al kaykhdmou m3a **damir kayrje3 l l-fa3il rasou** — b7al Darija *kanrta7 (ana)*, *ghadi n9eddem rasi*. Smiyithom **reflexive Verben**.
          `,
          ['Af3al reflexive', 'Blasset sich', 'sollte'],
        ),
        explain(
          'L-af3al r-reflexive',
          md`
            **sich ausruhen** (rta7):

            | | |
            |---|---|
            | ich ruhe **mich** aus | wir ruhen **uns** aus |
            | du ruhst **dich** aus | ihr ruht **euch** aus |
            | er/sie ruht **sich** aus | sie/Sie ruhen **sich** aus |

            - D-dama2ir r-reflexive b7al l-Akkusativ (**mich, dich, uns, euch**) — walakin m3a **er/sie/es/sie/Sie** dima **sich**.
            - F l-9amous kayktbou **"sich"** 9bel l-fi3l: *sich freuen, sich setzen*.

            **Af3al reflexive kathira:**
            sich fühlen · sich ausruhen · sich erholen (rta7 / tchafa) · sich verletzen · sich setzen · sich beeilen (zreb) · sich anziehen (lbes) · sich waschen · sich duschen · sich treffen · sich freuen · sich ärgern · sich interessieren für · sich erinnern an · sich entschuldigen
          `,
          [
            ['Setz dich bitte!', 'Gles 3afak!'],
            ['Wir treffen uns um acht.', 'Ghadi ntla9aw f 8.'],
            ['Beeilt euch, der Bus kommt!', 'Zrbou, l-bus ja!'],
            ['Interessieren Sie sich für Sport?', 'Wach kayhemmk r-riyada?'],
          ],
          'Machi koll fi3l b *rasi* f Darija reflexive f l\'Almaniya, o l-3aks. 7fed "sich" m3a l-fi3l f l-9amous.',
        ),
        gap('Kemmel', 'Ich fühle ___ heute nicht gut.', 'mich'),
        gap('Kemmel', 'Ruhst du ___ am Wochenende aus?', 'dich'),
        gap('Kemmel', 'Salma freut ___ auf den Sommer.', 'sich'),
        gap('Kemmel', 'Wir treffen ___ vor dem Kino.', 'uns'),
        explain(
          'Fin kayji "sich"?',
          md`
            **1. F j-jomla l-3adiya:** men b3d l-fi3l l-mtsrref direct:
            > Ich **ärgere mich** über den Lärm.

            **2. Ila bdiiti b chi 7aja khra:** fi3l + fa3il + sich:
            > Heute **fühle ich mich** besser.

            **3. M3a Modalverb / Perfekt:** "sich" kayb9a 9rib men l-fi3l l-mtsrref:
            > Du **musst dich** ausruhen. — Ich **habe mich** verletzt.

            **4. F Nebensatz:** "sich" ghaliban men b3d l-fa3il:
            > …, weil **ich mich** nicht gut fühle.

            **Perfekt:** l-af3al r-reflexive kolhom **b haben**: "Ich **habe** mich gefreut."
          `,
        ),
        order('Rtteb', 'Heute fühle ich mich besser.'),
        order('Rtteb', 'Du musst dich ausruhen.'),
        order('Rtteb', 'Ich habe mich am Fuß verletzt.'),
        explain(
          'mir / dir m3a l-jism o l-7wayej',
          md`
            Ila kan f j-jomla **maf3oul bih akhor** (Akkusativ), d-damir r-reflexive kaywelli **Dativ**: **mir, dir** (l-ba9i b7al b7al):

            | Bla maf3oul akhor (Akk) | M3a maf3oul akhor (Dat) |
            |---|---|
            | Ich wasche **mich**. | Ich wasche **mir die Hände**. |
            | Du ziehst **dich** an. | Du ziehst **dir eine Jacke** an. |
            | Ich verletze **mich**. | Ich breche **mir das Bein**. |

            F l'Almaniya bach tgoul *yddi, rjli* m3a hadou l-af3al, katkhdem **mir + der/die/das** (machi mein): "Ich putze **mir die** Zähne." (*kanghsel snani*)
          `,
          [
            ['Ich putze mir die Zähne.', 'Kanghsel snani.'],
            ['Wasch dir die Hände!', 'Ghsel yeddik!'],
          ],
        ),
        choice('"Ich wasche ___ die Hände."', ['mich', 'mir'], 1),
        choice('"Ich wasche ___ ."', ['mich', 'mir'], 0),
        gap('Kemmel', 'Zieh ___ eine warme Jacke an! (nta)', 'dir'),
        explain(
          'Nasi7a b "sollte"',
          md`
            **sollte** (Konjunktiv II dyal sollen) = *khassek / mzyan lik* — **nasi7a drifa**:

            | | |
            |---|---|
            | ich sollte | wir sollten |
            | du solltest | ihr solltet |
            | er/sie sollte | sie/Sie sollten |

            > Du **solltest** zum Arzt **gehen**. (*khassek tmchi l t-tbib* — nasi7a)
            > Sie **sollten** mehr Wasser **trinken**.

            **muss ↔ sollte:**
            - "Du **musst** ins Krankenhaus!" = dharoura / amr.
            - "Du **solltest** ins Krankenhaus gehen." = nasi7a (ana kanchouf hakka).

            T3bir akhor: "**An deiner Stelle würde ich** zum Arzt gehen." = *ila kont f blastek, kont ghadi nmchi…*
          `,
          [
            ['Du solltest dich ausruhen.', 'Khassek trta7 (nasi7a).'],
            ['Wir sollten früher schlafen gehen.', 'Khassna nn3sou bekri.'],
            ['An deiner Stelle würde ich weniger arbeiten.', 'Ila kont f blastek, kont nkhdem 9al.'],
          ],
        ),
        choice('Ina jomla nasi7a drifa?', ['Du musst schlafen!', 'Du solltest mehr schlafen.', 'Schlaf!'], 1),
        gap('Kemmel', 'Ihr ___ mehr Obst essen. (sollen, nasi7a)', 'solltet'),
        translate("Terjem l l'Almaniya", 'Khassek tmchi l t-tbib (nasi7a).', ['Du solltest zum Arzt gehen.']),
        graded(gap('Kemmel', 'Beeil ___! Der Zug fährt gleich ab. (nta)', 'dich')),
        graded(choice('"Er interessiert ___ für Musik."', ['ihn', 'sich', 'ihm'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich habe verletzt mich.', 'Ich habe mich verletzt.', 'Ich mich habe verletzt.'], 1)),
        graded(choice('"Ich putze ___ die Zähne."', ['mich', 'mir', 'sich'], 1)),
        graded(gap('Kemmel', 'Du ___ nicht so viel Kaffee trinken. (nasi7a)', 'solltest')),
        graded(choice('Perfekt dyal "sich freuen":', ['Ich bin mich gefreut.', 'Ich habe mich gefreut.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ghadi ntla9aw ghedda.', ['Wir treffen uns morgen.'])),
        summary(
          [
            'Reflexive: **mich, dich, sich, uns, euch, sich** — o m3a maf3oul akhor: **mir, dir**.',
            '"sich" men b3d l-fi3l: "Heute **fühle ich mich** besser." · Perfekt dima **haben**.',
            '**sollte** = nasi7a: "Du **solltest** dich ausruhen." — **muss** = dharoura.',
          ],
          ['Tkhdem l-af3al r-reflexive', 'T3ti nasi7a b sollte'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Gesund leben — Tipps & Apotheke',
      description: 'T9ra ma9al 3la s-s7a, tsme3 hiwar f l-pharmacie, o t3ti nasa2i7 f forum.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem ma9al 3la s-s7a o l-istrés', 'Tchri d-dwa f l-pharmacie', 'Tfre9 bin Apotheke o Drogerie', 'Tkteb nasa2i7'],
      steps: [
        intro(
          'Stress f l-Ausbildung',
          'Men b3d l-7aditha, Youssef ra stressé: l-khedma, l-cours, l-imti7an… Salma l9at lih ma9al 3la l-istrés o n-n3as.',
          ['T9ra nasa2i7', 'Tchri f l-pharmacie', 'Tkteb nasa2i7'],
        ),
        reading(
          'Fünf Tipps gegen Stress',
          md`
            Viele Menschen fühlen sich heute gestresst – bei der Arbeit, in der Schule oder in der Familie. Was hilft?

            1. Schlafen Sie genug! Erwachsene brauchen sieben bis neun Stunden Schlaf. Legen Sie das Handy eine Stunde vor dem Schlafen weg.
            2. Bewegen Sie sich! Schon 30 Minuten Spazierengehen am Tag helfen. Sie müssen nicht ins Fitnessstudio gehen.
            3. Machen Sie Pausen. Wer acht Stunden ohne Pause arbeitet, kann sich nicht gut konzentrieren.
            4. Sprechen Sie über Ihre Probleme – mit Freunden, mit der Familie oder mit einer Beratungsstelle.
            5. Planen Sie Zeit für sich selbst ein: Musik, ein Buch, ein Tee mit Freunden. Sie sollten sich jeden Tag etwas Gutes tun.
          `,
          {
            text: '9ra l-ma9al.',
            glossary: [
              ['genug', 'kafi'],
              ['weglegen', '7ett b3id'],
              ['sich bewegen', 't7errek'],
              ['sich konzentrieren', 'rkkez'],
              ['die Beratungsstelle', 'markaz l-istichara'],
              ['sich etwas Gutes tun', 'dir chi 7aja zwina l rasek'],
            ],
          },
        ),
        choice('Ch7al d s-sa3at d n-n3as kaykhass l-kbar?', ['5–6', '7–9', '10–12'], 1),
        choice('Imta khass t7ett t-tilifoun b3id?', ['Sa3a 9bel n-n3as', 'Men b3d n-n3as', 'F l-khedma'], 0),
        choice('Wach khass tmchi l l-fitness?', ['Ah, dima', 'La, 30 d9i9a d t-tmchiya kafya'], 1),
        listening(
          'In der Apotheke',
          [
            ['Apothekerin', 'Guten Tag, was kann ich für Sie tun?', 'Nharek sa3id, chno n9der ndir lik?'],
            ['Youssef', 'Ich habe ein Rezept vom Arzt. Und ich brauche noch etwas gegen Schlafprobleme. Ich schlafe seit Wochen schlecht.', '3endi wasfa men t-tbib. O khassni ta chi 7aja dyal mochkil n-n3as. Kann3es khayb men simanat.'],
            ['Apothekerin', 'Hier ist Ihre Salbe. Die zahlt die Krankenkasse, Sie zahlen nur fünf Euro dazu. Gegen Schlafprobleme habe ich einen Tee mit Baldrian. Der ist pflanzlich.', 'Hak l-pommade dyalek. Kat-khellsha t-ta2min, nta katkhelles ghir 5 euro zyada. Dyal n-n3as 3endi atay b l-valériane. Tabi3i.'],
            ['Youssef', 'Wie oft soll ich den Tee trinken?', 'Ch7al d l-merrat khassni ncherbou?'],
            ['Apothekerin', 'Eine Tasse am Abend, etwa eine halbe Stunde vor dem Schlafen. Aber wenn es nicht besser wird, sollten Sie mit Ihrem Arzt sprechen.', 'Kas wa7ed f l-lil, ness sa3a 9bel n-n3as. Walakin ila ma t7ssnch, khassek thder m3a t-tbib dyalek.'],
            ['Youssef', 'Okay, vielen Dank!', 'Wakha, chokran bzaf!'],
          ],
        ),
        choice('Ch7al khelles Youssef 3la l-pommade?', ['Walou', '5 €', 'Kolchi'], 1),
        choice('Imta khasso ycherb atay?', ['F s-sba7', 'Ness sa3a 9bel n-n3as', 'Men b3d l-makla'], 1),
        culture(
          'Apotheke, Drogerie, Notaufnahme…',
          md`
            - **Apotheke** (l-pharmacie, 7arf **A** 7mer): d-dwa — b **Rezept** (wasfa) wla bla. 3la d-dwa b wasfa katkhelles ghaliban **5–10 €** (*Zuzahlung*).
            - **Drogerie** (dm, Rossmann): shampoing, sabon, maquillage, vitamines — **machi d-dwa d t-tbib**.
            - **Hausarzt** awwalan. Ila kan chi 7aja khatira: **Notaufnahme** f s-sbitar wla **112**.
            - F l-lil o l-weekend (ma chi khatir): **116 117** (ärztlicher Bereitschaftsdienst).
            - **Psychische Gesundheit:** ila kan l-istrés bzaf, hder m3a l-Hausarzt — kaynin **Beratungsstellen** f kol mdina, ghaliban fabor.
          `,
        ),
        pron(
          's, ß, z',
          md`
            - **s** 9bel 7arf mte7rrek = *z*: **S**alat, Ro**s**e, **S**ie.
            - **ss / ß** = *s* 9wiya: Wa**ss**er, Fu**ß**, gro**ß**.
            - **z** = *ts*: **Z**ahn, **Z**ucker, Her**z**, **z**ehn.
          `,
          [
            ['Salbe – Suppe – sieben', 's = z'],
            ['Fuß – Wasser – Tasse', 'ß / ss = s'],
            ['Zahn – Zeit – Herz', 'z = ts'],
            ['Sie sitzen zu zweit am See.', 'kolchi m3a ba3d'],
          ],
        ),
        write(
          'Nasa2i7 f forum',
          'Chi wa7ed kteb f forum: *"Ich bin immer müde und gestresst. Ich arbeite viel und schlafe schlecht. Was soll ich tun?"* — Jawbou b 5–7 jmel: 3tih **3 nasa2i7 b "sollte"**, o khdem **jouj af3al reflexive**.',
          ['Salam o t3atof (Das kenne ich! / Das tut mir leid.)', '3 nasa2i7 b "Du solltest …"', 'Af3al reflexive (sich ausruhen, sich bewegen…)', 'Twadi3 (Gute Besserung!)'],
          'Hallo! Das kenne ich gut. Du solltest mehr Pausen machen und am Abend das Handy weglegen. Außerdem solltest du dich jeden Tag ein bisschen bewegen, zum Beispiel spazieren gehen. Am Wochenende solltest du dich richtig ausruhen und Freunde treffen. Wenn es nicht besser wird, sprich mit deinem Arzt. Gute Besserung!',
          50,
        ),
        graded(choice('Fin katchri d-dwa li kteb t-tbib?', ['In der Drogerie', 'In der Apotheke', 'Im Supermarkt'], 1)),
        graded(choice('"das Rezept" f l-pharmacie howa…', ['tari9at t-tiyab', 'l-wasfa dyal t-tbib', 'l-facture'], 1)),
        graded(choice('"sich bewegen" kay3ni…', ['t7errek', 'n3es', 'rta7'], 0)),
        graded(dictation('Sme3 o kteb', 'Du solltest dich ausruhen.')),
        summary(
          [
            'Nasa2i7: **genug schlafen, sich bewegen, Pausen machen, über Probleme sprechen**.',
            '**Apotheke** (dwa) ≠ **Drogerie** (l-mawad d n-nadafa). **Rezept**, **Zuzahlung**.',
          ],
          ['Tfhem nasa2i7 3la s-s7a', 'Tchri f l-pharmacie', 'Tkteb nasa2i7'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 5',
      description: 'Muraja3a: l-7awadith, l-i7sasat, l-af3al r-reflexive, sollte — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-af3al r-reflexive o sollte', 'T7ki 3la 7aditha', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-7awadith, l-i7sasat, reflexive Verben (mich, mir…), o sollte.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | | Akk | Dat (m3a maf3oul akhor) |
            |---|---|---|
            | ich | mich | mir |
            | du | dich | dir |
            | er/sie/es | sich | sich |
            | wir | uns | uns |
            | ihr | euch | euch |
            | sie/Sie | sich | sich |

            **sollte:** ich sollte, du solltest, er sollte, wir sollten, ihr solltet, sie sollten.
          `,
        ),
        dialogue(
          'Wieder gesund',
          [
            ['Monika', 'Youssef, schön, dass du wieder da bist! Wie fühlst du dich?', 'Youssef, zwin rje3ti! Kif kat7ess?'],
            ['Youssef', 'Viel besser, danke. Ich habe mich zwei Wochen ausgeruht.', 'A7ssen bzaf, chokran. Rta7t jouj simanat.'],
            ['Monika', 'Tut der Fuß noch weh?', 'Wach rjlek mazala kat-drk?'],
            ['Youssef', 'Nur ein bisschen, wenn ich lange stehe.', 'Ghir chwiya, ila w9eft bzaf.'],
            ['Monika', 'Dann solltest du heute nicht so viel laufen. Setz dich ab und zu hin.', 'Iwa ma khassekch tmchi bzaf lyouma. Gles men wa9t l wa9t.'],
            ['Youssef', 'Mache ich. Ich freue mich, dass ich wieder arbeiten kann!', 'Wakha. Fr7an belli n9der nkhdem 3awtani!'],
          ],
        ),
        choice('Imta kat-drk rjel Youssef?', ['Dima', 'Ila w9ef bzaf', 'F l-lil'], 1),
        choice('Chno nse7atou Monika?', ['Ymchi l t-tbib', 'Ma ymchich bzaf o ygless', 'Yakhod 3otla'], 1),
        gap('Kemmel', 'Ich habe ___ ausgeruht. Du ___ dich ab und zu hinsetzen.', ['mich', 'solltest']),
        match('Rbet', [
          ['sich beeilen', 'zreb'],
          ['sich erholen', 'rta7 / tchafa'],
          ['sich ärgern', 'tghtat'],
          ['sich anziehen', 'lbes'],
          ['sich erinnern', 'tfekker'],
        ]),
        speak(
          'Role-play: nasa2i7',
          'Sa7btek kat9ollek: *"Ich habe Kopfschmerzen und kann nicht schlafen, weil ich nächste Woche eine Prüfung habe."* — 3tiha 3 nasa2i7 b sollte.',
          ['Du solltest dich ausruhen.', 'Du solltest abends spazieren gehen.', 'Du solltest nicht so viel Kaffee trinken.', 'Ich drücke dir die Daumen für die Prüfung!'],
        ),
        graded(gap('Kemmel', 'Wie fühlt ihr ___?', 'euch')),
        graded(choice('"Kannst du ___ bitte beeilen?" (nta)', ['dich', 'dir'], 0)),
        graded(choice('"Ich ziehe ___ die Schuhe an."', ['mich', 'mir'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Morgen treffen uns wir.', 'Morgen treffen wir uns.'], 1)),
        graded(gap('Kemmel', 'Sie ___ zum Arzt gehen, Herr Krüger. (nasi7a)', 'sollten')),
        graded(choice('"Ich freue mich ___ dein Geschenk." (wsel)', ['auf', 'über'], 1)),
        graded(choice('"verstaucht" kay3ni…', ['mherres', 'mfkouk (entorse)', 'mjrou7'], 1)),
        graded(choice('Fin katchri shampoing?', ['In der Apotheke', 'In der Drogerie'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Tjre7t f yeddi.', ['Ich habe mich an der Hand verletzt.'])),
        graded(dictation('Sme3 o kteb', 'Ich habe mir das Bein gebrochen.')),
        summary(
          [
            'Daba t9der t7ki 3la 7aditha, tgoul kifach kat7ess o t3ti nasa2i7.',
            'F l-unité 6: t-tsewwi9 o l-mo9arana — **Komparativ / Superlativ** o **n-nihayat dyal s-sifat** (der neue Laptop).',
          ],
          ['T7ki 3la 7aditha', 'Tkhdem l-af3al r-reflexive', 'T3ti nasa2i7 b sollte'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
