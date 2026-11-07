import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 9,
  title: 'Gesundheit',
  description: "L-jism, l-mard, t-tbib, l-pharmacie — o l-Modalverben müssen, dürfen, sollen, wollen, o l-amr b du/ihr.",
  icon: 'medical_services',
  objectives: [
    'Tsemmi l-a3da2 dyal l-jism o tgoul fin kaydrek',
    'Tdir rendez-vous 3and t-tbib f t-tilifoun',
    'Tfhem n-nasa2i7 dyal t-tbib o l-pharmacie',
    'Tkhdem müssen, dürfen, sollen, wollen',
    'T3ti nasi7a b l-amr: "Trink viel Wasser!"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Mein Kopf tut weh — L-jism o l-mard',
      description: 'L-a3da2 dyal l-jism, l-a3rad dyal l-mard, o rendez-vous f t-tilifoun.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-a3da2 dyal l-jism', 'Tgoul chno kaydrek: "Ich habe Kopfschmerzen."', 'Tdir rendez-vous f t-tilifoun'],
      steps: [
        intro(
          'Salma mrida',
          'Salma fa9et lyouma b l-7rara o r-ras kaydrha. Khassha ttasel b **l-cabinet dyal t-tbib** (die Arztpraxis) bach takhod rendez-vous. Ghadi nt3allmou l-kalimat dyal l-jism o l-mard.',
          ['Tsemmi l-jism', 'Tgoul chno kaydrek', 'Tdir rendez-vous'],
        ),
        vocab('Der Körper — L-jism', [
          ['der Kopf', 'r-ras', 'die Köpfe'],
          ['das Auge', 'l-3in', 'die Augen'],
          ['das Ohr', 'l-woudn', 'die Ohren'],
          ['die Nase', 'n-nif', 'die Nasen'],
          ['der Mund', 'l-fomm', 'die Münder'],
          ['der Zahn', 's-snna', 'die Zähne'],
          ['der Hals', 'l-7el9 / r-r9ba', 'die Hälse'],
          ['der Arm', 'd-dra3', 'die Arme'],
          ['die Hand', 'l-yedd', 'die Hände'],
          ['der Bauch', 'l-kerch', 'die Bäuche'],
          ['der Rücken', 'd-dher', 'die Rücken'],
          ['das Bein', 'r-rjel', 'die Beine'],
          ['der Fuß', 'r-rjel (l-9adam)', 'die Füße'],
          ['das Herz', 'l-9alb', 'die Herzen'],
        ]),
        vocab('Krank sein — L-mard', [
          ['krank ↔ gesund', 'mrid ↔ b s-s7a'],
          ['die Kopfschmerzen (Pl.)', 'r-ras kaydrni', '', ['Ich habe Kopfschmerzen.', 'R-ras kaydrni.']],
          ['die Bauchschmerzen (Pl.)', 'l-kerch kaydrni', ''],
          ['die Halsschmerzen (Pl.)', 'l-7el9 kaydrni', ''],
          ['das Fieber', 'l-7rara (sxana)', '', ['Ich habe Fieber.', 'Fiya l-7rara.']],
          ['der Husten', 'l-k7a', ''],
          ['der Schnupfen', 'r-rwa7 (rhume)', ''],
          ['die Grippe', 'l-grippe', ''],
          ['erkältet sein', 'mbrred / fih l-berd', '', ['Ich bin erkältet.', 'Ana mbrred.']],
          ['Mir ist schlecht.', 'Fiya t-tqiyya / ma mrta7ch', ''],
          ['wehtun', 'drr (kaydrr)', '', ['Mein Bein tut weh.', 'Rjli kat-drni.']],
          ['das Medikament', 'd-dwa', 'die Medikamente'],
        ]),
        explain(
          'Kifach tgoul chno kaydrek',
          md`
            Kaynin 3 toro9:

            1. **Ich habe + …schmerzen:** "Ich habe **Kopf**schmerzen / **Bauch**schmerzen / **Rücken**schmerzen."
               (*Schmerzen* = l-wja3; katlsse9 l-3odw + Schmerzen.)
            2. **… tut weh / … tun weh:** "Mein Bein **tut** weh." — "Meine Augen **tun** weh." (jam3 → tun)
            3. **Ich habe Fieber / Husten / Schnupfen.** — **Ich bin erkältet / krank.**

            **T-tbib kaysowlek:** "Was fehlt Ihnen?" / "Was haben Sie?" = *chno fik?* — "Seit wann?" = *men imta?*
            **Jaweb:** "Seit gestern." / "Seit drei Tagen."
          `,
          [
            ['Ich habe seit zwei Tagen Fieber.', 'Fiya l-7rara men jouj iyyam.'],
            ['Mein Rücken tut weh.', 'Dheri kaydrni.'],
            ['Gute Besserung!', 'Lah ychafik! / Lbas 3lik!'],
          ],
          'F Darija kangoulou *r-ras kaydrni* (r-ras howa l-fa3il). F l\'Almaniya ta: "Der Kopf tut **mir** weh" — walakin a sahel: **"Ich habe Kopfschmerzen."**',
        ),
        dialogue(
          'Ein Termin beim Arzt',
          [
            ['Praxis', 'Praxis Dr. Hoffmann, guten Morgen!', 'Cabinet Dr. Hoffmann, sba7 l-khir!'],
            ['Salma', 'Guten Morgen. Hier ist Salma El Idrissi. Ich bin krank und brauche einen Termin.', 'Sba7 l-khir. Ana Salma El Idrissi. Ana mrida o khassni rendez-vous.'],
            ['Praxis', 'Was haben Sie denn?', 'Chno fik?'],
            ['Salma', 'Ich habe Fieber und Halsschmerzen. Seit gestern.', 'Fiya l-7rara o l-7el9 kaydrni. Men lbare7.'],
            ['Praxis', 'Waren Sie schon einmal bei uns?', 'Wach jiti 3endna chi merra?'],
            ['Salma', 'Nein, ich bin neu.', 'La, ana jdida.'],
            ['Praxis', 'Kein Problem. Können Sie heute um 11:30 Uhr kommen?', 'Machi mochkil. T9dri tji lyouma f 11:30?'],
            ['Salma', 'Ja, das geht.', 'Ah, momkin.'],
            ['Praxis', 'Bringen Sie bitte Ihre Versichertenkarte mit.', 'Jibi m3ak l-carte dyal t-ta2min 3afak.'],
            ['Salma', 'Okay. Vielen Dank! Auf Wiederhören.', 'Wakha. Chokran bzaf! Bslama (f t-tilifoun).'],
          ],
        ),
        choice('Chno fiha Salma?', ['Kerchha kaydrha', 'L-7rara o l-7el9', 'Dherha kaydrha'], 1),
        choice('Imta l-rendez-vous?', ['Ghedda f 11:30', 'Lyouma f 11:30', 'Lyouma f 10:30'], 1),
        choice('Chno khassha tjib?', ['L-passport', 'Versichertenkarte (carte dyal t-ta2min)', 'Lflous'], 1),
        match('Rbet', [
          ['der Rücken', 'd-dher'],
          ['der Hals', 'l-7el9'],
          ['der Bauch', 'l-kerch'],
          ['das Bein', 'r-rjel'],
          ['der Zahn', 's-snna'],
        ]),
        gap('Kemmel', 'Ich ___ Kopfschmerzen. Mein Bauch ___ auch weh.', ['habe', 'tut']),
        choice('"Meine Füße ___ weh."', ['tut', 'tun'], 1, 'Jam3 → tun.'),
        speak(
          'Ttasel b t-tbib',
          'Ttasel b l-cabinet: 9eddem rasek, goul chno fik o men imta, o tleb rendez-vous.',
          ['Guten Tag, hier ist Youssef Benali.', 'Ich habe Fieber und Husten.', 'Seit zwei Tagen.', 'Ich brauche einen Termin, bitte.'],
        ),
        graded(choice('"das Auge" howa…', ['l-woudn', 'l-3in', 'n-nif'], 1)),
        graded(choice('Bach tgoul *r-ras kaydrni*:', ['Ich habe Kopf.', 'Ich habe Kopfschmerzen.', 'Ich bin Kopfschmerzen.'], 1)),
        graded(choice('"Gute Besserung!" katgoulha…', ['l chi wa7ed mrid', 'f l-3id', 'f s-sba7'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Fiya l-7rara.', ['Ich habe Fieber.'])),
        summary(
          [
            'L-jism: **Kopf, Hals, Bauch, Rücken, Arm, Hand, Bein, Fuß, Auge, Ohr, Zahn…**',
            '**Ich habe Kopf- / Bauch- / Halsschmerzen. — Mein Bein tut weh. — Ich habe Fieber.**',
            'F t-tilifoun: **Ich brauche einen Termin.** — **Auf Wiederhören!**',
          ],
          ['Tgoul chno kaydrek', 'Tdir rendez-vous 3and t-tbib'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Sie müssen im Bett bleiben — Modalverben & Imperativ',
      description: 'müssen, dürfen, sollen, wollen — o l-amr b du o ihr.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tsrref müssen, dürfen, sollen, wollen', 'Tfre9 bin "muss nicht" o "darf nicht"', 'T3ti amr b du / ihr / Sie'],
      steps: [
        intro(
          'Chno kaygoul t-tbib?',
          md`
            T-tbib 9al l Salma: "Sie **müssen** im Bett **bleiben**. Sie **dürfen** nicht arbeiten. Sie **sollen** viel Tee **trinken**."
            F l-unité 6 t3llemti "können". Daba nzidou **4 d l-Modalverben** khrin — kolhom kaykhdmou b nefs t-tari9a: Modalverb f l-blasa 2, infinitiv f l-akhir.
          `,
          ['müssen, dürfen, sollen, wollen', 'nicht müssen ≠ nicht dürfen', 'L-amr b du / ihr'],
        ),
        explain(
          'L-Modalverben',
          md`
            | | **müssen** | **dürfen** | **sollen** | **wollen** | können |
            |---|---|---|---|---|---|
            | ich | **muss** | **darf** | **soll** | **will** | kann |
            | du | musst | darfst | sollst | willst | kannst |
            | er/sie | **muss** | **darf** | **soll** | **will** | kann |
            | wir | müssen | dürfen | sollen | wollen | können |
            | ihr | müsst | dürft | sollt | wollt | könnt |
            | sie/Sie | müssen | dürfen | sollen | wollen | können |

            Kolhom: **ich = er** (bla -t), o l-mofrad kayt-beddel l-7arf (müssen → muss, dürfen → darf, wollen → will).

            | Modalverb | Ma3na | Mital |
            |---|---|---|
            | **müssen** | *khass / lazem* (dharoura) | "Ich **muss** zum Arzt gehen." |
            | **dürfen** | *mesmou7 lik* (idn) | "Hier **darf** man parken." |
            | **sollen** | *khass (chi wa7ed 9al lik)* — nasi7a, talab men chi wa7ed akhor | "Der Arzt sagt, ich **soll** viel trinken." |
            | **wollen** | *bgha* (b 9owwa, niya) | "Ich **will** Ärztin werden." |
            | (möchten) | *bghit* (b ladab) | "Ich **möchte** einen Termin." |
          `,
          [
            ['Ich muss heute arbeiten.', 'Khassni nkhdem lyouma.'],
            ['Darf ich hier rauchen? — Nein, hier darf man nicht rauchen.', 'Wach n9der nkmi hna? — La, mamnou3 l-kmiya hna.'],
            ['Du sollst die Tabletten nach dem Essen nehmen.', 'Khassek takhod l-kinat men b3d l-makla (t-tbib 9al).'],
            ['Wir wollen nächstes Jahr nach Berlin ziehen.', 'Bghina n7ewlou l Berlin l-3am l-jay.'],
          ],
        ),
        choice('"Ich ___ morgen um 6 Uhr aufstehen." (khassni)', ['muss', 'darf', 'will'], 0),
        choice('"Hier ___ man nicht parken." (mamnou3)', ['muss', 'darf', 'soll'], 1),
        choice('"Der Arzt sagt, ich ___ viel schlafen."', ['soll', 'darf', 'kann'], 0, 'Chi wa7ed akhor (t-tbib) kaygoul lik → **sollen**.'),
        gap('Kemmel', 'Youssef ___ Krankenpfleger werden. (wollen)', 'will'),
        gap('Kemmel', '___ ich das Fenster aufmachen? (dürfen)', 'Darf'),
        gap('Kemmel', 'Ihr ___ heute nicht kommen, der Kurs fällt aus. (müssen)', 'müsst|muesst'),
        explain(
          '⚠️ "muss nicht" ≠ "darf nicht"',
          md`
            Hada fakh kbir (khossousan l li kay3ref l-ingliziya: *must not*):

            | Almaniya | Darija |
            |---|---|
            | Du **musst nicht** kommen. | **Ma khassekch** tji (ila bghiti tji, mzyan, walakin machi dharouri). |
            | Du **darfst nicht** kommen. | **Mamnou3** 3lik tji. |

            - **nicht müssen** = ma kaynach dharoura.
            - **nicht dürfen** = mamnou3.

            Bach tgoul *ma khassekch* t9der ta tgoul: "Du **brauchst nicht** zu kommen."
          `,
          [
            ['Am Sonntag muss ich nicht arbeiten.', 'Nhar l-7ad ma khassnich nkhdem.'],
            ['Im Krankenhaus darf man nicht rauchen.', 'F s-sbitar mamnou3 l-kmiya.'],
          ],
        ),
        choice('"Du musst nicht kommen." kat3ni…', ['Mamnou3 tji', 'Ma khassekch tji', 'Khassek tji'], 1),
        choice('Kifach tgoul *mamnou3 tsou9 b l-7rara*?', ['Mit Fieber musst du nicht Auto fahren.', 'Mit Fieber darfst du nicht Auto fahren.'], 1),
        order('Rtteb', 'Ich muss heute zum Arzt gehen.', 'Modalverb f 2, infinitiv f l-akhir.'),
        order('Rtteb', 'Darf ich hier parken?'),
        explain(
          'L-amr (Imperativ) b du, ihr o Sie',
          md`
            | | Kifach | Mital |
            |---|---|---|
            | **Sie** | fi3l (-en) + Sie | "**Trinken Sie** viel Wasser!" |
            | **ihr** | l-fi3l b7al "ihr", bla "ihr" | "**Trinkt** viel Wasser!" |
            | **du** | l-jder dyal l-fi3l, bla "du" o bla **-st** | "**Trink** viel Wasser!" |

            **Kifach tdir l-amr b du:** "du trink**st**" → 7iyed **du** o **-st** → "**Trink!**"
            - du komm|st → **Komm!** · du mach|st → **Mach!**
            - **e → i** kayb9a: du nimm|st → **Nimm!**, du iss|t → **Iss!**, du lies|t → **Lies!**
            - **a → ä** kaymchi: du fährst → **Fahr!** (machi "Fähr"), du schläfst → **Schlaf!**
            - L-préfixe f l-akhir: "**Ruf** mich **an**!" "**Steh** auf!"
            - **sein:** "**Sei** ruhig!" / "**Seid** ruhig!" / "**Seien Sie** ruhig!"

            Zid **bitte** o **mal** bach ykoun drif: "Komm **bitte mal** her!"
          `,
          [
            ['Bleib im Bett und schlaf viel!', 'B9a f n-namousiya o n3es bzaf!'],
            ['Nimm die Tabletten dreimal täglich.', 'Khoud l-kinat 3 d l-merrat f n-nhar.'],
            ['Kinder, seid bitte leise!', 'A d-drari, skoutou 3afakom!'],
          ],
          'L-amr b "du" ma fihch d-damir: **"Komm!"** — machi "Komm du!".',
        ),
        choice('L-amr b du men "nehmen"?', ['Nehm!', 'Nimm!', 'Nimmst!'], 1),
        choice('L-amr b du men "schlafen"?', ['Schläf!', 'Schlaf!', 'Schlafst!'], 1, 'a → ä ma kaykounch f l-amr.'),
        gap('Kemmel (du, trinken)', '___ viel Tee mit Honig!', 'Trink'),
        gap('Kemmel (ihr, kommen)', '___ bitte pünktlich!', 'Kommt'),
        gap('Kemmel (du, anrufen)', '___ mich morgen ___!', ['Ruf', 'an']),
        translate("Terjem l l'Almaniya (du)", 'N3es bzaf!', ['Schlaf viel!']),
        graded(gap('Kemmel', 'Ich ___ morgen arbeiten. (müssen)', 'muss')),
        graded(choice('"Hier darf man nicht rauchen." =', ['Ma khassekch tkmi hna', 'Mamnou3 l-kmiya hna'], 1)),
        graded(choice('"Ich ___ Ärztin werden." (bghit b niya)', ['will', 'soll', 'darf'], 0)),
        graded(choice('L-amr b du men "lesen"?', ['Les!', 'Lies!', 'Liest!'], 1)),
        graded(gap('Kemmel (Sie, bleiben)', '___ ___ heute zu Hause!', ['Bleiben', 'Sie'])),
        graded(choice('Ina jomla s7i7a?', ['Ich muss gehen zum Arzt.', 'Ich muss zum Arzt gehen.', 'Ich zum Arzt muss gehen.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ma khassnich nkhdem nhar l-7ad.', ['Am Sonntag muss ich nicht arbeiten.', 'Ich muss am Sonntag nicht arbeiten.', 'Sonntags muss ich nicht arbeiten.'])),
        summary(
          [
            '**müssen** (khass), **dürfen** (mesmou7), **sollen** (khass — chi wa7ed 9al), **wollen** (bgha b niya), **können**, **möchten**.',
            'ich / er: **muss, darf, soll, will, kann** — bla -t.',
            '⚠️ **muss nicht** = ma khassekch · **darf nicht** = mamnou3.',
            'L-amr: **Trink!** (du) · **Trinkt!** (ihr) · **Trinken Sie!** — e→i kayb9a (Nimm!), a→ä kaymchi (Fahr!).',
          ],
          ['Tgoul chno khass / mamnou3 / bghiti', 'T3ti nasi7a b l-amr'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Beim Arzt & in der Apotheke',
      description: 'Tfhem t-tbib, t9ra n-nasa2i7 dyal d-dwa, o tkteb email bach tgoul belli nta mrid.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem t-tbib f l-consultation', 'T9ra kifach takhod d-dwa', 'T3ref n-nidam s-si77i f Almaniya', 'Tkteb email: "Ich bin krank."'],
      steps: [
        intro(
          'F l-cabinet',
          'Salma wselat l l-cabinet. Ghadi tsme3 l-consultation m3a Dr. Hoffmann, o men b3d tmchi l l-pharmacie.',
          ['Tfhem t-tbib', 'T9ra l-wasfa', 'Tkteb email'],
        ),
        listening(
          'In der Sprechstunde',
          [
            ['Dr. Hoffmann', 'Guten Tag, Frau El Idrissi. Was fehlt Ihnen?', 'Nharek sa3id a Madame El Idrissi. Chno fik?'],
            ['Salma', 'Ich habe Fieber, Halsschmerzen und ich bin sehr müde.', 'Fiya l-7rara, l-7el9 kaydrni o 3iyana bzaf.'],
            ['Dr. Hoffmann', 'Machen Sie bitte den Mund auf. … Ja, der Hals ist rot. Sie haben eine Grippe.', '7elli fommek 3afak. … Ah, l-7el9 7mer. Fik l-grippe.'],
            ['Salma', 'Muss ich Antibiotika nehmen?', 'Wach khassni nakhod antibiotiques?'],
            ['Dr. Hoffmann', 'Nein, das müssen Sie nicht. Aber Sie müssen im Bett bleiben und viel trinken. Nehmen Sie diese Tabletten gegen das Fieber.', 'La, ma khassekch. Walakin khassek tb9ay f n-namousiya o tcherbi bzaf. Khoudi had l-kinat dyal l-7rara.'],
            ['Salma', 'Darf ich morgen zum Deutschkurs gehen?', 'Wach n9der nmchi l l-cours ghedda?'],
            ['Dr. Hoffmann', 'Nein, Sie dürfen diese Woche nicht in den Kurs gehen. Ich schreibe Sie bis Freitag krank.', 'La, ma t9dirch tmchi l l-cours had s-simana. Ghadi nkteb lik chahada dyal l-mard 7tal l-jem3a.'],
            ['Salma', 'Danke, Herr Doktor.', 'Chokran a doktour.'],
            ['Dr. Hoffmann', 'Gute Besserung!', 'Lah ychafik!'],
          ],
        ),
        choice('Chno fiha Salma?', ['Bauchschmerzen', 'Grippe', 'Zahnschmerzen'], 1),
        choice('Wach khassha takhod antibiotiques?', ['Ah', 'La'], 1, '"Nein, das müssen Sie nicht."'),
        choice('Imta t9der traje3 l l-cours?', ['Ghedda', 'Men b3d l-jem3a (s-simana l-jaya)', 'Lyouma'], 1),
        reading(
          'Die Packungsbeilage',
          md`
            Fieber- und Schmerztabletten 500 mg

            Erwachsene: 1 Tablette, bis zu dreimal täglich.
            Nehmen Sie die Tabletten mit viel Wasser, am besten nach dem Essen.
            Nicht mehr als 3 Tabletten pro Tag!
            Kinder unter 12 Jahren: Fragen Sie Ihren Arzt oder Apotheker.
            Bei Schwangerschaft dürfen Sie das Medikament nicht nehmen.
          `,
          {
            text: '9ra l-wer9a li f l-3elba dyal d-dwa.',
            glossary: [
              ['Erwachsene', 'l-kbar (adultes)'],
              ['dreimal täglich', '3 d l-merrat f n-nhar'],
              ['nach dem Essen', 'men b3d l-makla'],
              ['die Schwangerschaft', 'l-7aml'],
            ],
          },
        ),
        choice('Ch7al men kina f n-nhar 3la l-ktar?', ['1', '3', '5'], 1),
        choice('Imta takhod l-kina?', ['9bel l-makla', 'Men b3d l-makla', 'F l-lil ghir'], 1),
        culture(
          'T-tbib o t-ta2min f Almaniya',
          md`
            - **Krankenversicherung** (t-ta2min s-si77i) **wajib** 3la kolchi. Kat3tik **Versichertenkarte** — jibha dima l t-tbib.
            - Awwel 7aja katmchi l **Hausarzt** (t-tbib l-3amm). Howa kaysiftek l **Facharzt** (spécialiste) ila khass.
            - **Krankmeldung / AU-Bescheinigung:** ila nta mrid o katkhdem, khassek t3lem l-patron **f nefs n-nhar**, o men 3 iyyam (wla 9bel 3la 7sab l-contrat) khassek chahada men t-tbib.
            - **Notruf 112:** l-isti3jal (ambulance, l-matafi2). **110:** l-bolis.
            - **116 117:** t-tbib dyal n-nouba f l-lil o f l-weekend (machi isti3jal kbir).
            - **Apotheke:** d-dwa ghir f l-pharmacie. F l-lil kayna dima **Notdienst-Apotheke** m7loula.
          `,
        ),
        pron(
          'L-"e" o "-er" f l-akhir',
          md`
            F l-akhir dyal l-kalimat, **-e** khfifa bzaf (b7al *e* f Darija f "ktebt*e*"), o **-er** katwelli **a** khfifa:
          `,
          [
            ['Auge – Nase – Zunge', '-e khfifa (machi é)'],
            ['Augen – Ohren', '-en khfifa'],
            ['Finger – Fieber – Rücken', '-er = a, -en khfifa'],
            ['Die Schmerzen sind stärker.', 'kolchi m3a ba3d'],
          ],
        ),
        write(
          'Email l l-oustada',
          'Nta mrid o ma t9derch tmchi l l-cours. Kteb email l Frau Weber: goul belli nta mrid, chno fik, men imta, o 7tal imta ma t9derch tji. Sowwelha 3la l-wajib (Hausaufgaben).',
          ['Salam rasmi (Liebe Frau Weber / Guten Tag, Frau Weber)', 'Ich bin krank. Ich habe …', 'Seit …', 'Ich kann bis … nicht kommen.', 'Sou2al 3la Hausaufgaben', 'Twadi3'],
          'Liebe Frau Weber,\n\nleider bin ich krank. Ich habe seit gestern Fieber und Husten. Der Arzt sagt, ich muss im Bett bleiben. Ich kann bis Freitag nicht in den Kurs kommen. Was sind die Hausaufgaben? Können Sie mir die Seiten schicken?\n\nViele Grüße\nYoussef Benali',
          35,
        ),
        graded(choice('Ra9m l-isti3jal (ambulance) f Almaniya?', ['110', '112', '116 117'], 1)),
        graded(choice('"dreimal täglich" =', ['3 d l-merrat f s-simana', '3 d l-merrat f n-nhar', 'kol 3 iyyam'], 1)),
        graded(choice('Ila nta mrid o katkhdem, khassek…', ['Tsenna 3 iyyam o tgoul l l-patron', 'Tgoul l l-patron f nefs n-nhar', 'Ma tgoul walou'], 1)),
        graded(dictation('Sme3 o kteb', 'Ich muss im Bett bleiben.')),
        summary(
          [
            'T-tbib: **Was fehlt Ihnen? — Machen Sie den Mund auf. — Sie müssen im Bett bleiben.**',
            'D-dwa: **dreimal täglich, nach dem Essen**.',
            '**Versichertenkarte**, **Hausarzt**, **Krankmeldung**, **112** / **116 117**.',
          ],
          ['Tfhem t-tbib', 'T9ra l-wer9a dyal d-dwa', 'Tkteb email: "Ich bin krank."'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 9',
      description: 'Muraja3a: l-jism, l-mard, l-Modalverben, l-amr — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-Modalverben o l-amr', 'T3ti nasa2i7', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 9', 'L-jism, l-mard, t-tbib, l-Modalverben (müssen, dürfen, sollen, wollen) o l-amr.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **müssen** (khass) · **dürfen** (mesmou7) · **sollen** (nasi7a/talab men chi wa7ed) · **wollen** (bgha) · **können** · **möchten**
            - ich/er: **muss, darf, soll, will, kann, möchte**
            - **nicht müssen** = ma khassekch · **nicht dürfen** = mamnou3
            - Amr: **Trink!** / **Trinkt!** / **Trinken Sie!** — **Nimm! Iss! Lies! Fahr! Schlaf! Sei ruhig!**
          `,
        ),
        dialogue(
          'Gute Besserung!',
          [
            ['Youssef', 'Salma! Wie geht es dir? Bist du noch krank?', 'Salma! Labas 3lik? Mazala mrida?'],
            ['Salma', 'Es geht. Ich habe noch Husten, aber kein Fieber mehr.', 'Chwiya. Mazal fiya l-k7a, walakin l-7rara mchat.'],
            ['Youssef', 'Brauchst du etwas? Ich kann für dich einkaufen.', 'Wach khassek chi 7aja? N9der nsewwe9 lik.'],
            ['Salma', 'Das ist lieb! Kannst du Tee und Honig kaufen?', 'Drif bzaf! T9der tchri atay o l-3sel?'],
            ['Youssef', 'Klar. Und trink viel und schlaf viel!', 'Akid. O cherbi bzaf o n3si bzaf!'],
            ['Salma', 'Ja, ja, Herr Doktor!', 'Ah ah, a doktour!'],
          ],
        ),
        choice('Chno mazal f Salma?', ['L-7rara', 'L-k7a', 'Kerchha'], 1),
        choice('Chno ghadi ychri Youssef?', ['Atay o l-3sel', 'D-dwa', 'L-khobz'], 0),
        match('Rbet', [
          ['Ich muss', 'khassni'],
          ['Ich darf', 'mesmou7 liya'],
          ['Ich will', 'bghit (b niya)'],
          ['Ich soll', 'khassni (9alou liya)'],
          ['Ich kann', 'n9der / kan3ref'],
        ]),
        gap('Kemmel', 'Du ___ (sollen) viel trinken. ___ (du, schlafen) viel!', ['sollst', 'Schlaf']),
        speak(
          'Role-play: nasa2i7 l sa7bek',
          'Sa7bek mrid (fih l-grippe). 3tih 3 nasa2i7 b l-amr b "du", o goul lih chno ma khassouch idir.',
          ['Bleib im Bett!', 'Trink viel Tee!', 'Nimm die Tabletten!', 'Du darfst heute nicht arbeiten.'],
        ),
        graded(choice('"Er ___ nicht schwimmen." (mamnou3 3lih)', ['muss', 'darf', 'will'], 1)),
        graded(gap('Kemmel', 'Wir ___ morgen früh aufstehen. (müssen)', 'müssen|muessen')),
        graded(choice('L-amr b ihr men "kommen"?', ['Kommen!', 'Kommt!', 'Komm!'], 1)),
        graded(choice('L-amr b du men "essen"?', ['Ess!', 'Iss!', 'Isst!'], 1)),
        graded(choice('"Am Samstag muss ich nicht arbeiten." =', ['Nhar s-sebt mamnou3 nkhdem', 'Nhar s-sebt ma khassnich nkhdem'], 1)),
        graded(gap('Kemmel', 'Mein Kopf ___ weh. Meine Füße ___ weh.', ['tut', 'tun'])),
        graded(choice('"der Husten" howa…', ['l-k7a', 'l-7rara', 'r-rwa7'], 0)),
        graded(order('Rtteb', 'Darf ich das Fenster aufmachen?')),
        graded(translate("Terjem l l'Almaniya", 'Khassni nmchi l t-tbib.', ['Ich muss zum Arzt gehen.', 'Ich muss zum Arzt.', 'Ich muss zur Ärztin gehen.'])),
        graded(dictation('Sme3 o kteb', 'Nehmen Sie die Tabletten nach dem Essen.')),
        summary(
          [
            'Daba t9der tgoul chno fik, tdir rendez-vous, tfhem t-tbib o t3ti nasa2i7.',
            '6 Modalverben: können, müssen, dürfen, sollen, wollen, möchten.',
            'F l-unité 10: l-khedma, o kifach thder 3la **l-madi** (Perfekt): "Ich habe gearbeitet."',
          ],
          ['Tgoul chno kaydrek', 'Tkhdem l-Modalverben', 'T3ti amr o nasa2i7', 'Tfhem n-nidam s-si77i'],
          'Khlasa dyal l-unité 9',
        ),
      ],
    },
  ],
});
