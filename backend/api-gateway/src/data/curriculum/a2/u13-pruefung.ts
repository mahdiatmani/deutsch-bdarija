import { choice, explain, gap, graded, intro, md, reading, speak, summary, unit, write } from '../dsl';

export default unit({
  level: 'A2',
  number: 13,
  title: 'Prüfungstraining A2',
  description: "Tdrib 3la l-imti7an dyal A2 (Goethe-Zertifikat A2 / DTZ): sme3, 9raya, kitaba o hedra — strategiyat o tamarin jdad.",
  icon: 'workspace_premium',
  objectives: [
    'T3ref l-ajza2 dyal l-imti7an dyal A2',
    'Tfhem i3lanat, hiwarat o nsous 9sar f l-wa9t',
    'Tkteb SMS o email b kol n-no9at',
    'Thder 3la rasek o tkhtat chi 7aja m3a chi wa7ed',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Hören & Lesen A2',
      description: 'Strategiyat o tamarin f s-sme3 o l-9raya b7al l-imti7an.',
      minutes: 30,
      kind: 'exam',
      goals: ['T3ref l-ajza2 dyal Hören o Lesen f A2', 'Tsme3 l-ma3louma l-mohimma', 'T9ra b strategiya (global, selektiv)'],
      steps: [
        intro(
          'L-imti7an dyal A2',
          md`
            | Jouz2 | Wa9t | Chno |
            |---|---|---|
            | **Lesen** | 30 d9i9a | jarida, i3lanat, emails, programme… |
            | **Hören** | 30 d9i9a | i3lanat, hiwarat, radio, messages |
            | **Schreiben** | 30 d9i9a | SMS (20–30 kelma) + email (30–40 kelma) |
            | **Sprechen** | 15 d9i9a (b jouj) | sou2alat chakhsiya, thder 3la rasek, tkhtat m3a sa7bek |

            **DTZ** (Deutsch-Test für Zuwanderer) kayn ta l l-mohajirin: kayjme3 A2 o B1 f imti7an wa7ed, o mawadi3ou men l-7ayat f Almaniya (l-idara, l-khedma, s-sakan).
            Bach tnje7 khassek **60 %**.
          `,
          ['T3ref l-imti7an', 'Tdrreb Hören', 'Tdrreb Lesen'],
        ),
        explain(
          'Strategiyat',
          md`
            **Hören:**
            - 9ra s-sou2alat **9bel** — chouf ach kat9elleb 3lih (sa3a? blasa? taman? sabab?).
            - F A2 kat-sme3 ghaliban **jouj d l-merrat** (machi dima).
            - L-ikhtiyarat l-ghaltin ghaliban kaytdkerou f n-nass — walakin **mbeddlin** ("Nicht am Montag, sondern am Dienstag").

            **Lesen:**
            - **Globalverstehen:** chno l-mawdou3 l-3amm? 9ra l-3onwan o l-jomla l-oula.
            - **Selektives Lesen:** 9elleb ghir 3la l-ma3louma (ra9m, smiya, sa3a).
            - Rd l-bal l **nicht, kein, nur, erst, schon, noch, sondern**.
          `,
        ),
        explain('Hören — Teil 1: Ansagen', 'Sme3 l-i3lan o khtar l-jawab s-s7i7.'),
        graded(choice(
          'Wann beginnt der Deutschkurs?',
          ['Am 3. März', 'Am 10. März', 'Am 17. März'],
          1,
          'Ma kaybdach f 3, walakin "eine Woche später".',
          { audio: 'Liebe Kursteilnehmer, leider kann der Kurs nicht wie geplant am 3. März beginnen. Er beginnt eine Woche später, am 10. März. Die Uhrzeit bleibt gleich: 18 Uhr.' },
        )),
        graded(choice(
          'Was soll der Mann mitbringen?',
          ['Seinen Pass', 'Ein Foto', 'Seine Versichertenkarte'],
          2,
          undefined,
          { audio: 'Guten Tag, Herr Okafor, hier ist die Praxis Dr. Klein. Ihr Termin ist morgen um 9:15 Uhr. Bitte denken Sie an Ihre Versichertenkarte. Ein Foto brauchen wir nicht. Vielen Dank!' },
        )),
        explain('Hören — Teil 2: Gespräch', 'Sme3 l-hiwar o goul chno dar kol wa7ed.'),
        graded(choice(
          'Was hat Sara am Wochenende gemacht?',
          ['Sie war im Kino.', 'Sie hat ihre Eltern besucht.', 'Sie hat gearbeitet.'],
          1,
          '"Nicht ins Kino… zu meinen Eltern gefahren."',
          { audio: 'Na Sara, warst du am Wochenende im Kino? — Nein, ich wollte, aber dann bin ich spontan zu meinen Eltern nach Bremen gefahren. Mein Vater hatte Geburtstag.' },
        )),
        graded(choice(
          'Warum kommt Tom nicht zur Party?',
          ['Er ist krank.', 'Er muss arbeiten.', 'Er hat keine Lust.'],
          1,
          undefined,
          { audio: 'Kommst du am Samstag zu meiner Party, Tom? — Ich würde so gern, aber mein Chef hat gefragt, ob ich die Spätschicht übernehmen kann. Deshalb muss ich leider arbeiten.' },
        )),
        explain('Lesen — Teil 1: Zeitungstext', '9ra l-khbar o jaweb.'),
        reading(
          'Köln: Neues Sprachcafé in der Stadtbibliothek',
          md`
            Seit Januar gibt es in der Stadtbibliothek Köln ein neues Sprachcafé. Jeden Donnerstag von 17 bis 19 Uhr treffen sich hier Menschen aus vielen Ländern, um zusammen Deutsch zu sprechen. Ehrenamtliche Helferinnen und Helfer leiten die Gespräche. Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig. „Viele Teilnehmer haben im Kurs wenig Gelegenheit zu sprechen", sagt die Organisatorin Petra Lohmann. „Hier können sie üben, ohne Angst vor Fehlern zu haben." Kaffee und Tee gibt es gratis, Kuchen kostet einen Euro.
          `,
          { glossary: [['ehrenamtlich', 'mtatawwe3 (bla khlas)'], ['die Gelegenheit', 'l-forsa']] },
        ),
        graded(choice('Wann findet das Sprachcafé statt?', ['Jeden Dienstag', 'Jeden Donnerstag', 'Jeden Samstag'], 1)),
        graded(choice('Muss man sich anmelden?', ['Ja', 'Nein'], 1)),
        graded(choice('Was kostet etwas?', ['Der Kaffee', 'Die Teilnahme', 'Der Kuchen'], 2)),
        explain('Lesen — Teil 2: Wegweiser', 'Kayn l-panneau dyal magasin kbir. Khtar t-tabe9 s-s7i7.'),
        reading(
          'Kaufhaus Stern — Wegweiser',
          md`
            4. Stock: Restaurant · Kundenservice · Toiletten
            3. Stock: Elektro · Handys · Computer · Spiele
            2. Stock: Herrenmode · Sportbekleidung · Schuhe
            1. Stock: Damenmode · Kindermode
            Erdgeschoss: Kosmetik · Taschen · Uhren · Schmuck
            Untergeschoss: Lebensmittel · Haushaltswaren
          `,
        ),
        graded(choice('Sie möchten Laufschuhe kaufen.', ['Erdgeschoss', '2. Stock', '3. Stock'], 1)),
        graded(choice('Ihr neues Handy ist kaputt. Sie möchten es reklamieren.', ['3. Stock', '4. Stock', 'Untergeschoss'], 1, 'Reklamation → Kundenservice f t-tabe9 4.')),
        graded(choice('Sie brauchen Milch und Brot.', ['Untergeschoss', 'Erdgeschoss', '4. Stock'], 0)),
        summary(
          [
            '9ra s-sou2al 9bel — rd l-bal l t-tbdil ("nicht …, sondern …").',
            'Lesen: global (l-mawdou3) wla selektiv (l-ma3louma).',
          ],
          ['Tfhem i3lanat o hiwarat', 'Tfhem nass f l-jarida', 'T9ra panneau'],
          'Khlasa: Hören & Lesen',
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Schreiben A2',
      description: 'SMS (20–30 kelma) o email (30–40 kelma) b kol n-no9at.',
      minutes: 30,
      kind: 'exam',
      goals: ['Tkteb SMS b 3 no9at', 'Tkteb email ghir rasmi wla rasmi', 'Tkhdem l-mouwasilat (weil, deshalb, aber…)'],
      steps: [
        intro(
          'Schreiben f A2',
          md`
            **Teil 1: SMS** (20–30 kelma) l sa7bek — 3 no9at.
            **Teil 2: E-Mail** (30–40 kelma) — ghaliban rasmi (l l-oustad, l l-patron, l chi charika) — 3 no9at.

            **Chno kaytsahhab?** Wach ktebti kol n-no9at · wach l-message mfhouma · wach l-salam o t-twadi3 mnasbin · l-grammaire (machi bla akhta2, walakin mfhouma).
          `,
          ['SMS', 'Email rasmi', 'Strategiya'],
        ),
        explain(
          'Strategiya',
          md`
            1. **9ra l-mahamma mzyan** — 7ett khatt t7t kol no9ta.
            2. **Kteb jomla wla jouj l kol no9ta.** Ma tkterch: 40 kelma kafyin.
            3. **Rbet** b *und, aber, denn, weil, deshalb, dann*.
            4. **Raja3** f l-akhir: l-fi3l f l-blasa 2? f l-akhir f Nebensatz? s-smiyat b 7arf kbir?

            **Jmel nafi3a:**
            - Ma ghadich tji: "Leider kann ich nicht kommen, weil …"
            - T9tare7: "Wie wäre es mit …? / Können wir … ?"
            - Ttleb: "Könnten Sie mir bitte … schicken?"
            - T3tadar: "Es tut mir leid, dass …"
          `,
        ),
        write(
          'Teil 1: SMS',
          md`
            Kan 3endek rendez-vous m3a sa7bek **Karim** f 15:00 f l-café, walakin ghadi t3ettel. Kteb SMS (20–30 kelma):
            - **3lach** ghadi t3ettel
            - **imta** ghadi twsel
            - **i9tira7**: chno ydir f had l-wa9t
          `,
          ['Sabab (weil / denn …)', 'Sa3a jdida', 'I9tira7 l Karim'],
          'Hallo Karim, sorry, ich komme etwa 30 Minuten später, weil mein Bus Verspätung hat. Ich bin um halb vier da. Bestell dir doch schon einen Tee! Bis gleich, Youssef',
          20,
        ),
        write(
          'Teil 2: E-Mail an die Kursleiterin',
          md`
            Nta msjjel f cours d l'Almaniya f l-VHS. Kteb email l l-oustada **Frau Kaya** (30–40 kelma):
            - Ma ghadich tji **s-simana l-jaya** — 3lach?
            - Sowwel 3la **l-wajibat**.
            - Sowwel wach t9der **tbeddel l cours d l-3chiya** (Abendkurs).
          `,
          ['Liebe Frau Kaya,', 'Ghiyab + sabab', 'Sou2al 3la l-Hausaufgaben', 'Sou2al 3la l-Abendkurs', 'Viele Grüße + smiya'],
          'Liebe Frau Kaya,\n\nleider kann ich nächste Woche nicht zum Kurs kommen, denn ich habe eine neue Arbeitsstelle und arbeite vormittags. Könnten Sie mir bitte die Hausaufgaben schicken? Außerdem möchte ich fragen, ob ich in den Abendkurs wechseln kann.\n\nViele Grüße\nSalma El Idrissi',
          30,
        ),
        graded(choice('Ch7al d l-kalimat f SMS dyal A2?', ['5–10', '20–30', '100'], 1)),
        graded(choice('Ila nsiti no9ta wa7da…', ['Machi mochkil', 'Katkhser n-no9at', 'Kat3awed l-imti7an'], 1)),
        graded(choice('Ina salam mnasb l l-oustada?', ['Hi Kaya!', 'Liebe Frau Kaya,', 'Sehr geehrter Herr Kaya,'], 1)),
        graded(gap('Kemmel', 'Leider kann ich nicht kommen, ___ ich krank bin.', 'weil')),
        graded(gap('Kemmel', 'Mein Zug hat Verspätung, ___ komme ich später. (dakchi 3lach)', 'deshalb')),
        summary(
          [
            '**Kol no9ta = jomla wla jouj.** Ma tnsa 7ta wa7da.',
            'Salam + twadi3 mnasbin (Liebe/r … / Sehr geehrte … · Viele Grüße / Mit freundlichen Grüßen).',
            'Rbet b weil, denn, deshalb, aber.',
          ],
          ['Tkteb SMS', 'Tkteb email rasmi'],
          'Khlasa: Schreiben',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Sprechen A2',
      description: 'Sou2alat chakhsiya b l-kartat, thder 3la rasek, o tkhtat chi 7aja m3a sa7bek.',
      minutes: 30,
      kind: 'exam',
      goals: ['Tsowwel o tjaweb b l-kartat', 'Thder 3la mawdou3 chakhsi', 'Tkhtat m3a chi wa7ed (t9tare7, t9bel, trfod)'],
      steps: [
        intro(
          'Sprechen f A2 (b jouj)',
          md`
            - **Teil 1:** Kartat fihom kelma (*Geburtstag? Wohnort? Beruf? Hobby?…*). Katsowwel sa7bek o kayjawbek.
            - **Teil 2:** Karta fiha mawdou3 (ex: *Was machen Sie am Wochenende?*) o 4 no9at. Kathder 3la rasek ~1–2 d9i9a.
            - **Teil 3:** Ntouma jouj khass tkhttou chi 7aja (ex: *ntla9aw bach nchriw hdiya*). Kol wa7ed 3endou ajenda b l-mawa3id dyalou.
          `,
          ['Sou2al/jawab', 'Thder 3la rasek', 'Tkhtat'],
        ),
        speak(
          'Teil 1: Fragen zur Person',
          'Kartat: **Geburtstag? · Wohnort? · Beruf? · Sprachen? · Hobby?** — dir sou2al kamel b kol kelma, o jaweb ta nta.',
          ['Wann hast du Geburtstag? — Am dritten Dezember.', 'Wo wohnst du? — In Köln-Ehrenfeld.', 'Was machst du beruflich? — Ich mache eine Ausbildung als Pflegefachmann.', 'Welche Sprachen sprichst du? — Arabisch, Französisch und Deutsch.'],
        ),
        speak(
          'Teil 2: Über sich sprechen — „Essen"',
          md`
            Karta: **Was essen Sie gern?**
            No9at: *Frühstück? — Lieblingsessen? — Kochen Sie selbst? — Restaurant?*
            Hder ~1 d9i9a 3la kol n-no9at.
          `,
          ['Zum Frühstück esse ich meistens Brot mit Käse und trinke Tee.', 'Mein Lieblingsessen ist Tajine mit Hähnchen und Oliven.', 'Ich koche fast jeden Abend selbst, weil das billiger ist.', 'Ins Restaurant gehe ich nur am Wochenende.'],
        ),
        explain(
          'Teil 3: Etwas gemeinsam planen',
          md`
            **Jmel nafi3a:**

            | Bach… | Katgoul |
            |---|---|
            | t9tare7 | "Wie wäre es am Dienstag um 15 Uhr?" — "Hast du am Mittwochnachmittag Zeit?" |
            | t9bel | "Ja, das passt mir gut." — "Gute Idee!" |
            | trfod | "Da kann ich leider nicht, da habe ich …" |
            | t9tare7 3awtani | "Und wie sieht es am Donnerstag aus?" |
            | tsali | "Okay, dann treffen wir uns am … um … ." |

            **Mohim:** hder **m3a** sa7bek (machi bou7dek), sowwel, o tfahmou f l-akhir 3la wa9t.
          `,
        ),
        speak(
          'Teil 3: Ein Geschenk kaufen',
          md`
            Ntouma jouj bghitou tchriw hdiya l zmilkom. 3endek had l-ajenda:
            **Montag:** bis 16 Uhr Arbeit · **Dienstag:** 17 Uhr Arzt · **Mittwoch:** frei ab 14 Uhr · **Donnerstag:** 18 Uhr Sport
            T9tare7, rfod, o tfahmou.
          `,
          ['Wann können wir das Geschenk kaufen? Hast du am Montag Zeit?', 'Am Montag arbeite ich bis 16 Uhr. Aber danach geht es.', 'Wie wäre es am Mittwoch um drei?', 'Ja, das passt mir gut. Dann treffen wir uns am Mittwoch um 15 Uhr vor dem Kaufhaus.'],
        ),
        explain('Abschlusstest A2', 'Test akhir dyal A2: l-grammaire o l-kalimat dyal kol l-unités.'),
        graded(choice('"Ich habe gestern meine Tante ___." (besuchen)', ['gebesucht', 'besucht', 'besuchen'], 1)),
        graded(choice('"Er bleibt zu Hause, weil er krank ___."', ['ist', 'sein', 'war ist'], 0)),
        graded(choice('"Stell die Vase bitte auf ___ Tisch."', ['dem', 'den', 'der'], 1)),
        graded(choice('"Wenn ich Zeit ___, würde ich mitkommen."', ['habe', 'hätte', 'hatte'], 1)),
        graded(choice('"Das ist ein ___ Film." (lustig)', ['lustige', 'lustiger', 'lustigen'], 1)),
        graded(choice('"Ich interessiere mich ___ Sport."', ['für', 'auf', 'an'], 0)),
        graded(choice('"Das Formular ___ online ausgefüllt."', ['wird', 'ist', 'hat'], 0)),
        graded(choice('"Berlin ist größer ___ Köln."', ['wie', 'als', 'so'], 1)),
        graded(gap('Kemmel', 'Ich habe vergessen, dich ___. (anrufen)', 'anzurufen')),
        graded(gap('Kemmel', 'Ich fühle ___ heute nicht gut.', 'mich')),
        graded(choice('"___ ich klein war, wohnten wir in Fès."', ['Wenn', 'Als', 'Ob'], 1)),
        graded(choice('"Weißt du, ___ der Supermarkt heute offen ist?"', ['dass', 'ob', 'wenn'], 1)),
        summary(
          [
            'Sprechen: sowwel o jaweb b jmel kamlin; f t-takhtit **hder m3a sa7bek** o tfahmou.',
            'Mabrouk! Salit **A2**. Daba t9der tt3amel m3a ktar l-mawa9if dyal l-7ayat l-yawmiya f Almaniya, t7ki 3la l-madi b tafasil o t3ber 3la ra2yek.',
            'F **B1** ghadi t7ki 9isas, tnaqech, tkteb nsous twila o tfhem l-akhbar.',
          ],
          [
            'T7ki 3la 7ayatek o l-madi',
            'Tdbber umour f l-khedma, l-idara o l-banka',
            'T9aren, tnse7 o t9ol ra2yek',
            'Tkteb emails rasmiya b sou2alat o talabat',
          ],
          'Khlasa dyal A2',
        ),
      ],
    },
    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'DTZ-Training: Leben in Deutschland',
      description: 'Tdrib 3la l-mawadi3 dyal DTZ: bra l l-idara, tswira, o mochkil f l-7ayat l-yawmiya.',
      minutes: 30,
      kind: 'exam',
      goals: ['Tfhem l-mawadi3 dyal DTZ', 'Twesef tswira', 'Tkteb bra rasmiya b talab wla chakwa'],
      steps: [
        intro(
          'DTZ: Deutsch-Test für Zuwanderer',
          md`
            **DTZ** howa l-imti7an dyal **Integrationskurs**. Kaytsahhah 3la **A2 wla B1** 3la 7sab n-natija. Mawadi3ou: s-sakan, l-khedma, l-idarat, s-s7a, l-wlad, t-tsewwi9.
            F l-hedra kayn ta **twesef tswira** o **tkhtat m3a chi wa7ed**. F l-kitaba katkteb **bra** (rasmi wla chakhsi) b 4 no9at.
          `,
          ['T3ref DTZ', 'Twesef tswira', 'Tkteb bra'],
        ),
        speak(
          'Ein Bild beschreiben',
          md`
            Tkhayyel tswira: **3a2ila f l-park** — l-ab kaychwi f l-grill, l-oum o bentha kayl3bou b l-koura, weld sghir kayakoul l-glace, o s-sma zar9a.
            Wesef: chkoun kayn, chno kaydirou, fin, kifach t-t9s — o goul wach kat7ebb dir b7alhom.
          `,
          ['Auf dem Bild sehe ich eine Familie im Park.', 'Der Vater grillt, die Mutter und die Tochter spielen Fußball.', 'Ein kleiner Junge isst ein Eis.', 'Das Wetter ist schön, die Sonne scheint.', 'Am Wochenende grille ich auch gern mit meiner Familie.'],
        ),
        reading(
          'Aufgabe: Ein Brief an die Hausverwaltung',
          md`
            In Ihrer Wohnung funktioniert die Heizung seit drei Tagen nicht. Es ist Januar und sehr kalt. Sie haben schon einmal angerufen, aber niemand ist gekommen.

            Schreiben Sie an die Hausverwaltung:
            – Grund für Ihr Schreiben
            – Was ist das Problem? Seit wann?
            – Was haben Sie schon gemacht?
            – Was soll die Hausverwaltung tun?
          `,
        ),
        write(
          'Brief an die Hausverwaltung',
          'Kteb l-bra (~60–80 kelma) b l-4 no9at, b chkel rasmi.',
          ['Sehr geehrte Damen und Herren,', 'Sabab l-kitaba', 'L-mochkil o men imta', 'Chno dirti', 'Chno bghiti ydirou (bitte … sofort …)', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, weil es in meiner Wohnung (Lindenstraße 8, 2. Stock) ein Problem gibt. Die Heizung funktioniert seit drei Tagen nicht, und es ist sehr kalt. Ich habe am Montag bei Ihnen angerufen, aber leider ist noch niemand gekommen. Bitte schicken Sie so schnell wie möglich einen Techniker. Ich bin jeden Tag ab 16 Uhr zu Hause.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          60,
        ),
        graded(choice('"Die Heizung funktioniert nicht." kat3ni…', ['T-tadfi2a ma khddamach', 'D-dow ma khddamch', 'L-ma ma kaynch'], 0)),
        graded(choice('L-bra l l-Hausverwaltung kaykoun…', ['rasmi', 'ghir rasmi'], 0)),
        graded(choice('"so schnell wie möglich" =', ['b chwiya', 'dghya ktar ma ymken', 'ghedda'], 1)),
        graded(choice('DTZ howa imti7an dyal…', ['l-jami3a', 'Integrationskurs', 'l-permis'], 1)),
        summary(
          [
            'DTZ: **mawadi3 dyal l-7ayat f Almaniya** — tswira, takhtit, bra rasmiya.',
            'Bra dyal chakwa: **sabab — mochkil + men imta — chno dirti — chno bghiti**.',
          ],
          ['Twesef tswira', 'Tkteb bra rasmiya b chakwa'],
          'Khlasa: DTZ',
        ),
      ],
    },
  ],
});
