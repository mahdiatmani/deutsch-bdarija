import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 1,
  title: 'Lebenswege',
  description: "Biographiyat, l-mra7il l-fasila f l-7ayat, l-hijra — t7ki 9issa b l-Präteritum o l-Plusquamperfekt, o b nachdem, bevor, während, seit, bis.",
  icon: 'route',
  objectives: [
    'T9ra o tfhem biographiya twila',
    'T7ki 9issa f l-madi b l-Präteritum (b7al f l-ktouba o l-jarayed)',
    'Tgoul chno w9e3 9bel chi 7aja khra b l-Plusquamperfekt',
    'Trtteb l-a7dath b nachdem, bevor, während, seit(dem), bis',
    'Tkteb nass mnadhdham 3la mar7ala mohimma f 7ayatek',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wendepunkte im Leben',
      description: 'L-mra7il l-fasila, l-9rarat l-kbar o l-kalimat dyal l-biographiya.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-mra7il l-fasila (Wendepunkte)', 'Thder 3la 9arar kbir f 7ayatek', 'Tfhem podcast 3la l-hijra'],
      steps: [
        intro(
          'Podcast: „Neu in Deutschland"',
          md`
            Salma kattsme3 podcast fih n-nas kay7kiw **l-l7da li tbeddlat fiha 7yathom** (*Wendepunkt*). Lyouma l-dif howa **Rachid**, maghribi ja l Almaniya f 1990.
            F B1 ghadi tfhem nsous twila o t7ki b tartib mzyan: chno w9e3 lowel, chno men b3d, o chno kan 9bel.
          `,
          ['Tfhem l-podcast', 'Tsemmi l-mra7il', 'Thder 3la 9arar'],
        ),
        listening(
          'Podcast: Rachids Weg',
          [
            ['Moderatorin', 'Rachid, Sie kamen 1990 nach Deutschland. Was war damals Ihr Wendepunkt?', 'Rachid, jiti l Almaniya f 1990. Chno kanet l-l7da l-fasila dyalek?'],
            ['Rachid', 'Ich hatte in Oujda Mathematik studiert, aber ich fand keine Arbeit. Ein Freund schrieb mir aus Düsseldorf, dass man dort Ingenieure suchte.', 'Kont 9rit l-maths f Oujda, walakin ma l9itch l-khedma. Wa7ed sa7bi kteb liya men Düsseldorf belli kay9elbou 3la l-mohandisin.'],
            ['Moderatorin', 'Und dann sind Sie einfach gegangen?', 'O mchiti b ssahl?'],
            ['Rachid', 'Nein, so einfach war das nicht. Bevor ich fuhr, lernte ich ein Jahr lang Deutsch am Goethe-Institut in Rabat. Meine Mutter weinte, als ich mich verabschiedete.', 'La, ma kantch sahla. 9bel ma nmchi, t3llemt l\'Almaniya 3am kamel f Goethe f Rabat. Mmi bkat mli wadda3tha.'],
            ['Moderatorin', 'Wie waren die ersten Jahre?', 'Kifach kanou l-3wam l-lowlin?'],
            ['Rachid', 'Hart. Während ich tagsüber in einer Fabrik arbeitete, besuchte ich abends Kurse an der Fachhochschule. Nachdem ich mein Diplom bekommen hatte, fand ich endlich eine Stelle als Ingenieur.', 'Mte33bin. F n-nhar kont kankhdem f l-ma3mel, o f l-lil kont kan9ra f l-ma3had. Men b3d ma khdit d-diplôme, l9it akhiran khedma k mohandis.'],
            ['Moderatorin', 'Und heute?', 'O lyouma?'],
            ['Rachid', 'Seitdem ich in Rente bin, pendle ich zwischen Düsseldorf und Oujda. Meine Kinder sind hier aufgewachsen – sie sind Deutsche und Marokkaner. Bis ich sechzig war, habe ich nie daran gedacht, wie viel ich geschafft habe.', 'Men mli tqa3dt, kanji o nmchi bin Düsseldorf o Oujda. Wladi kbrou hna — almaniyin o maghariba. 7tal wselt 60 3am 3ad fkkert f ch7al dert.'],
          ],
          'Sme3 l-podcast. Ila bghiti, chouf n-nass men b3d.',
        ),
        choice('3lach mcha Rachid l Almaniya?', ['Bach y9ra', 'Ma l9ach l-khedma f l-Maghrib, o sa7bou gal belli kay9elbou 3la mohandisin', 'Bach ytzowwej'], 1),
        choice('Chno dar 9bel ma ymchi?', ['Khdem f l-ma3mel', 'T3llem l\'Almaniya 3am f Rabat', 'Khda d-diplôme'], 1),
        choice('Kifach kanou l-3wam l-lowlin?', ['Sahlin', 'Mte33bin: khedma f n-nhar o 9raya f l-lil', 'Bla khedma'], 1),
        choice('Chno kaydir Rachid daba?', ['Kaykhdem mohandis', 'Kayji o kaymchi bin Düsseldorf o Oujda', 'Rje3 l l-Maghrib nhae2iyan'], 1),
        vocab('Lebenswege — Toro9 l-7ayat', [
          ['der Wendepunkt', 'l-l7da l-fasila', 'die Wendepunkte'],
          ['die Entscheidung / sich entscheiden', 'l-9arar / 9rrer', ''],
          ['auswandern / einwandern', 'hajar (men) / hajar (l)', ''],
          ['die Heimat', 'l-blad l-asliya / l-watan', ''],
          ['das Heimweh', 'l-7nin l l-blad', '', ['Am Anfang hatte ich starkes Heimweh.', 'F l-bidaya kan 3endi l-7nin bzaf.']],
          ['sich verabschieden', 'wadda3', ''],
          ['der Neuanfang', 'l-bidaya l-jdida', ''],
          ['schaffen', 'nje7 f / 9der 3la', ''],
          ['die Herausforderung', 't-ta7addi', 'die Herausforderungen'],
          ['pendeln', 'mcha o ja (bin jouj blayes)', ''],
          ['in Rente gehen', 'tqa3ed', ''],
          ['die Generation', 'l-jil', ''],
          ['sich anpassen (an)', 'tkayyef (m3a)', ''],
          ['zurückblicken (auf)', 'chaf l-lour (f)', ''],
        ]),
        explain(
          'Thder 3la 9arar kbir',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tgoul l-l7da | "Ein wichtiger Wendepunkt in meinem Leben war, als …" |
            | tgoul s-sabab | "Ich habe mich dafür entschieden, weil …" — "Der Grund dafür war …" |
            | tgoul s-s3oubat | "Am Anfang war es nicht leicht, …" — "Die größte Herausforderung war …" |
            | tgoul n-natija | "Heute bin ich froh, dass …" — "Rückblickend würde ich … wieder / nicht wieder tun." |

            F B1 khassek **tnadhdhem** l-kalam: *zuerst / am Anfang → dann / danach → schließlich / heute*.
          `,
          [
            ['Ein wichtiger Wendepunkt war, als ich nach Köln gezogen bin.', 'L-l7da l-fasila kanet mli 7ewwelt l Köln.'],
            ['Rückblickend würde ich alles wieder genauso machen.', 'Ila chaft l-lour, kont ghadi ndir kolchi b nefs t-tari9a.'],
          ],
        ),
        match('Rbet', [
          ['das Heimweh', 'l-7nin l l-blad'],
          ['die Herausforderung', 't-ta7addi'],
          ['sich anpassen', 'tkayyef'],
          ['pendeln', 'mcha o ja bin jouj blayes'],
          ['der Neuanfang', 'l-bidaya l-jdida'],
        ]),
        gap('Kemmel', 'Ich habe mich ___ entschieden, in Deutschland zu studieren. (da-)', 'dafür|dafuer'),
        order('Rtteb', 'Die größte Herausforderung war die Sprache.'),
        speak(
          'Wendepunkt dyalek',
          'Hder ~1 d9i9a 3la l-l7da l-fasila f 7ayatek: chno w9e3, 3lach 9rrerti, chno kan s3ib, o kifach katchouf dakchi daba.',
          ['Ein wichtiger Wendepunkt in meinem Leben war, als ich nach Deutschland gekommen bin.', 'Ich habe mich dafür entschieden, weil ich hier eine Ausbildung machen wollte.', 'Am Anfang war es nicht leicht, weil ich niemanden kannte.', 'Heute bin ich froh, dass ich diesen Schritt gemacht habe.'],
        ),
        graded(choice('"das Heimweh" howa…', ['l-7nin l l-blad', 'l-ferha', 'l-hijra'], 0)),
        graded(choice('"Rückblickend …" kat3ni…', ['f l-moustaqbal', 'mli kanchouf l-lour', 'daba'], 1)),
        graded(gap('Kemmel', 'Es war nicht leicht, mich an das Wetter ___. (anpassen)', 'anzupassen')),
        graded(translate("Terjem l l'Almaniya", 'Kan 3endi l-7nin l l-blad bzaf.', ['Ich hatte starkes Heimweh.', 'Ich hatte großes Heimweh.', 'Ich hatte viel Heimweh.'])),
        summary(
          [
            '**der Wendepunkt, die Entscheidung, auswandern, das Heimweh, die Herausforderung, sich anpassen, zurückblicken**.',
            'Redemittel: **Ein wichtiger Wendepunkt war, als … · Ich habe mich dafür entschieden, weil … · Rückblickend …**',
          ],
          ['Tfhem podcast 3la 7ayat chi wa7ed', 'Thder 3la 9arar kbir'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Er kam, er sah … — Präteritum & Plusquamperfekt',
      description: 'L-Präteritum dyal kol l-af3al (l-9issa l-mktouba), l-Plusquamperfekt, o l-Konnektoren dyal l-wa9t.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tsrref l-Präteritum (regelmäßig o unregelmäßig)', 'Tdir l-Plusquamperfekt', 'Tkhdem nachdem, bevor, während, seit(dem), bis'],
      steps: [
        intro(
          'Jouj d l-madi: f l-hedra o f l-kitaba',
          md`
            Rachid kay7ki: "Ein Freund **schrieb** mir …", "ich **fand** keine Arbeit", "meine Mutter **weinte**". Hadi **l-Präteritum**.
            O ta: "Ich **hatte** Mathematik **studiert**" — hadi **l-Plusquamperfekt**: madi 9bel madi akhor.
          `,
          ['Präteritum', 'Plusquamperfekt', 'nachdem, bevor, während…'],
        ),
        explain(
          'Perfekt wla Präteritum?',
          md`
            B jouj = **l-madi**. L-farq **ghir f l-uslub**:

            | Perfekt | Präteritum |
            |---|---|
            | **L-hedra** (mo7adatha, message, email chakhsi) | **L-kitaba** (riwayat, l-jarayed, biographiyat, 9issas) |
            | "Gestern **habe** ich Pizza **gegessen**." | "Am Abend **aß** er eine Pizza." |

            M3a **sein, haben, Modalverben** (o chi af3al b7al *es gab, wissen, denken*) l-Präteritum kaytkhdem ta f l-hedra (chefnah f A2: war, hatte, konnte…).

            F B1 khassek **tfhem** l-Präteritum dyal kol l-af3al (f l-9raya), o **tkhdmou** f n-nsous dyal l-9issa.
          `,
        ),
        explain(
          'Kifach tdir l-Präteritum',
          md`
            **1. Regelmäßig: jder + -te**

            | | machen | arbeiten |
            |---|---|---|
            | ich | mach**te** | arbeit**ete** |
            | du | mach**test** | arbeit**etest** |
            | er/sie | mach**te** | arbeit**ete** |
            | wir | mach**ten** | arbeit**eten** |
            | ihr | mach**tet** | arbeit**etet** |
            | sie/Sie | mach**ten** | arbeit**eten** |

            **2. Unregelmäßig: jder jdid (khassek t7fdou), bla -te**

            | Infinitiv | Präteritum (ich/er) | Perfekt |
            |---|---|---|
            | gehen | **ging** | ist gegangen |
            | kommen | **kam** | ist gekommen |
            | fahren | **fuhr** | ist gefahren |
            | finden | **fand** | hat gefunden |
            | schreiben | **schrieb** | hat geschrieben |
            | sehen | **sah** | hat gesehen |
            | essen | **aß** | hat gegessen |
            | sprechen | **sprach** | hat gesprochen |
            | nehmen | **nahm** | hat genommen |
            | bleiben | **blieb** | ist geblieben |
            | wissen | **wusste** | hat gewusst |
            | denken | **dachte** | hat gedacht |
            | bringen | **brachte** | hat gebracht |

            N-nihayat dyal l-unregelmäßig: ich ging, du ging**st**, er ging (bla nihaya!), wir ging**en**, ihr ging**t**, sie ging**en**.
            **Trennbar:** l-préfixe f l-akhir b7al dima: "Er **stand** um 6 Uhr **auf**."
          `,
          [
            ['Sie wohnte zehn Jahre in Paris.', 'Saknat 10 snin f Paris.'],
            ['Plötzlich klingelte das Telefon.', 'Fja2atan rnn t-tilifoun.'],
            ['Er kam spät nach Hause und ging sofort ins Bett.', 'Wsel l d-dar m3ettel o mcha yn3es direct.'],
          ],
          'F l-9amous: "gehen, ging, ist gegangen" — **t-tlata** khassek t7fedhom m3a ba3d (die Stammformen).',
        ),
        match('Rbet l-infinitiv m3a l-Präteritum', [
          ['gehen', 'ging'],
          ['finden', 'fand'],
          ['schreiben', 'schrieb'],
          ['nehmen', 'nahm'],
          ['denken', 'dachte'],
        ]),
        gap('Kemmel b l-Präteritum', 'Damals ___ (wohnen) meine Familie in Oujda.', 'wohnte'),
        gap('Kemmel b l-Präteritum', 'Er ___ (kommen) 1990 nach Deutschland.', 'kam'),
        gap('Kemmel b l-Präteritum', 'Wir ___ (sprechen) lange über die Zukunft.', 'sprachen'),
        gap('Kemmel b l-Präteritum', 'Sie ___ (aufstehen) früh ___ und ___ (gehen) zur Arbeit.', ['stand', 'auf', 'ging']),
        explain(
          'Plusquamperfekt: madi 9bel l-madi',
          md`
            Ila kaynin jouj a7dath f l-madi, o bghiti tgoul **chkoun w9e3 lowel**, katkhdem **l-Plusquamperfekt** l l-7adath l-lowel:

            **hatte / war (Präteritum) + Partizip II**

            > Ich **hatte** in Oujda Mathematik **studiert**. Dann **kam** ich nach Deutschland.
            > Als wir ankamen, **war** der Zug schon **abgefahren**. (t-tran mcha **9bel** ma nwslou)

            | Zaman | Mital |
            |---|---|
            | Perfekt | Ich habe gegessen. |
            | Präteritum | Ich aß. |
            | **Plusquamperfekt** | Ich **hatte** (schon) **gegessen**. |

            haben/sein: nefs l-9a3ida dyal l-Perfekt (7araka → war).
          `,
          [
            ['Als ich ins Kino kam, hatte der Film schon begonnen.', 'Mli wselt l s-sinima, l-film kan bda.'],
            ['Sie war schon nach Hause gegangen.', 'Kanet mchat l d-dar.'],
          ],
        ),
        choice('Ina 7adath w9e3 lowel? "Als ich ankam, war der Bus schon weg."', ['Wsoul dyali', 'Khrouj l-bus'], 1),
        gap('Kemmel (Plusquamperfekt)', 'Er ___ seinen Schlüssel vergessen. (haben)', 'hatte'),
        gap('Kemmel (Plusquamperfekt)', 'Wir ___ schon losgefahren, als sie anrief. (sein)', 'waren'),
        explain(
          'Konnektoren dyal l-wa9t',
          md`
            | Konnektor | Ma3na | Mital |
            |---|---|---|
            | **nachdem** | men b3d ma | **Nachdem** ich das Diplom **bekommen hatte**, **fand** ich eine Stelle. |
            | **bevor** | 9bel ma | **Bevor** ich nach Deutschland **fuhr**, lernte ich Deutsch. |
            | **während** | f l-wa9t li | **Während** ich **arbeitete**, studierte ich abends. |
            | **seit / seitdem** | men mli (o mazal) | **Seitdem** ich in Rente **bin**, pendle ich. |
            | **bis** | 7tal | **Bis** ich sechzig **war**, … |

            Kolhom **Nebensatz** → l-fi3l f l-akhir; ila bdiiti bih → l-fi3l dyal l-Hauptsatz direct men b3d l-fasila.

            **nachdem + zaman:** l-7adath l-lowel b zaman "a9dam":
            - Nebensatz **Plusquamperfekt** → Hauptsatz **Präteritum/Perfekt**: "Nachdem er gegessen **hatte**, **ging** er."
            - Nebensatz **Perfekt** → Hauptsatz **Präsens**: "Nachdem ich gegessen **habe**, **gehe** ich."
          `,
        ),
        choice('"___ ich schlafen gehe, putze ich mir die Zähne."', ['Nachdem', 'Bevor', 'Seitdem'], 1),
        choice('"___ sie im Ausland war, hat sie viel gelernt."', ['Bevor', 'Während', 'Bis'], 1),
        choice('"Nachdem er die Prüfung bestanden ___, feierte er."', ['hat', 'hatte', 'ist'], 1),
        order('Rtteb', 'Nachdem ich gegessen hatte, ging ich spazieren.'),
        order('Rtteb', 'Seitdem ich in Köln wohne, fahre ich viel Fahrrad.'),
        translate("Terjem l l'Almaniya", '9bel ma nji l Almaniya, t3llemt l\'Almaniya f Rabat.', ['Bevor ich nach Deutschland kam, lernte ich in Rabat Deutsch.', 'Bevor ich nach Deutschland gekommen bin, habe ich in Rabat Deutsch gelernt.', 'Bevor ich nach Deutschland kam, habe ich in Rabat Deutsch gelernt.']),
        graded(gap('Kemmel b l-Präteritum', 'Im Jahr 2015 ___ (ziehen) wir nach Berlin.', 'zogen')),
        graded(gap('Kemmel b l-Präteritum', 'Er ___ (wissen) nicht, was er sagen sollte.', 'wusste')),
        graded(choice('Präteritum dyal "sehen" (er)?', ['seht', 'sah', 'sieht'], 1)),
        graded(choice('"Als wir am Bahnhof ankamen, ___ der Zug schon abgefahren."', ['ist', 'war', 'hatte'], 1)),
        graded(choice('"___ du kommst, räume ich noch auf." (7tal)', ['Bis', 'Seit', 'Nachdem'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Nachdem er gegessen hatte, er ging nach Hause.', 'Nachdem er gegessen hatte, ging er nach Hause.'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Men b3d ma salit l-khedma, mchit l d-dar.', ['Nachdem ich die Arbeit beendet hatte, ging ich nach Hause.', 'Nachdem ich mit der Arbeit fertig war, ging ich nach Hause.', 'Nachdem ich die Arbeit beendet hatte, bin ich nach Hause gegangen.'])),
        summary(
          [
            '**Perfekt** = l-hedra · **Präteritum** = l-kitaba / l-9issa.',
            'Präteritum: regelmäßig **-te** (machte) · unregelmäßig jder jdid (ging, kam, fand, schrieb…) — 7fed t-tlata: **gehen – ging – gegangen**.',
            '**Plusquamperfekt** = hatte / war + Partizip II → l-7adath l-lowel.',
            '**nachdem, bevor, während, seitdem, bis** → Nebensatz (fi3l f l-akhir).',
          ],
          ['T7ki 9issa f l-madi b l-Präteritum', 'Trtteb l-a7dath b Plusquamperfekt o l-Konnektoren'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Geschichten von Einwanderung',
      description: 'T9ra nass 3la tarikh l-hijra l Almaniya, tfhem t-tartib dyal l-a7dath, o tkteb 9issa mnadhdhma.',
      minutes: 35,
      kind: 'skills',
      goals: ['T9ra nass tarikhi o tfhem t-tafasil', 'Tlakhkhes nass', 'T3ref chi tarikh dyal l-maghariba f Almaniya', 'Tkteb 9issa b Präteritum o Konnektoren'],
      steps: [
        intro(
          'Marokkaner in Deutschland',
          'F 2023 t7tafel b **60 3am** men l-ittifa9iya bin l-Maghrib o Almaniya 3la l-khedma. Salma l9at ma9al 3la had t-tarikh.',
          ['T9ra l-ma9al', 'Tlakhkhes', 'Tkteb 9issa'],
        ),
        reading(
          'Sechzig Jahre marokkanisch-deutsche Geschichte',
          md`
            Im Jahr 1963 unterschrieben Marokko und die Bundesrepublik Deutschland ein Abkommen: Deutsche Firmen suchten dringend Arbeitskräfte, vor allem für den Bergbau im Ruhrgebiet. In den folgenden Jahren kamen tausende junge Männer aus dem Norden Marokkos nach Nordrhein-Westfalen. Viele arbeiteten unter Tage in den Kohlezechen, andere in Fabriken.

            Ursprünglich planten die meisten, nur ein paar Jahre zu bleiben. Sie wollten Geld verdienen, nach Hause schicken und dann zurückkehren. Doch es kam anders: Nachdem die Bundesregierung 1973 den Anwerbestopp beschlossen hatte, blieben viele in Deutschland und holten ihre Familien nach.

            Die zweite Generation wuchs zwischen zwei Kulturen auf. Ihre Kinder gingen auf deutsche Schulen, sprachen zu Hause Darija oder Tamazight und auf der Straße Deutsch. Heute leben in Deutschland mehrere Hunderttausend Menschen mit marokkanischen Wurzeln. Man findet sie in allen Berufen: als Ärztinnen, Ingenieure, Politikerinnen, Unternehmer oder Fußballspieler.

            Seit einigen Jahren kommt eine neue Generation: junge Fachkräfte, vor allem in der Pflege und in der IT, die gezielt angeworben werden – oft mit Deutschkenntnissen, die sie schon in Marokko erworben haben.
          `,
          {
            text: '9ra l-ma9al. Rd l-bal l t-tawarikh o t-tartib dyal l-a7dath.',
            glossary: [
              ['das Abkommen', 'l-ittifa9iya'],
              ['die Arbeitskräfte', 'l-yed l-3amila'],
              ['der Bergbau / die Kohlezeche', 'l-manajim / manjam l-f7am'],
              ['unter Tage', 't7t l-ard (f l-manjam)'],
              ['ursprünglich', 'f l-asl / f l-bidaya'],
              ['der Anwerbestopp', 'tewa99of tajnid l-3oummal'],
              ['nachholen', 'jab (l-3a2ila men b3d)'],
              ['die Wurzeln', 'l-osoul'],
              ['die Fachkraft', 'l-khabir / l-yed l-3amila l-mo2ahhala'],
              ['anwerben', 'jnned / jleb (l l-khedma)'],
            ],
          },
        ),
        choice('Imta t-tw99a3 l-ittifa9iya?', ['1953', '1963', '1973'], 1),
        choice('Fin khdmou bzaf d l-maghariba l-lowlin?', ['F l-manajim d l-f7am f Ruhrgebiet', 'F l-banka', 'F l-jami3a'], 0),
        choice('Chno kan l-plan l-asli?', ['Yb9aw dima', 'Yb9aw chi snin o yrj3ou', 'Yjibou l-3a2ila direct'], 1),
        choice('Chno w9e3 men b3d 1973?', ['Rj3ou kolhom', 'Bzaf b9aw o jabou l-3a2ilat', 'Ja jil jdid dyal l-khobara'], 1),
        choice('Chkoun l-jil l-jdid?', ['3oummal l-manajim', 'Khobara f t-tamrid o l-informatique', 'T-tolba ghir'], 1),
        explain(
          'Kifach tlakhkhes nass',
          md`
            **Zusammenfassung** (l-mulakhkhas) mohim f B1:

            1. **Jomla dyal l-bidaya:** "Der Text handelt von …" / "In dem Artikel geht es um …"
            2. **L-afkar r-ra2isiya** b t-tartib: "Zuerst …", "Danach …", "Heute …"
            3. **B kalimatek** — ma tnsakhch l-jmel kamlin.
            4. **Bla ra2yek** f l-mulakhkhas (ra2yek men b3d, ila tlbouh).
            5. **L-Präsens** f l-mulakhkhas (machi l-madi dyal l-9issa): "Der Text beschreibt, wie …"
          `,
          [
            ['Der Text handelt von der Geschichte marokkanischer Arbeitsmigranten.', 'N-nass kayhder 3la tarikh l-mohajirin l-maghariba.'],
          ],
        ),
        culture(
          'Integration f Almaniya',
          md`
            - **Gastarbeiter** (l-"3oummal d-dyaf"): smiya dyal l-mohajirin dyal 1955–1973 (men Italya, Turkiya, l-Maghrib, Tunis, Yougoslavia…).
            - **Integrationskurs:** 600 sa3a d l-logha + **Orientierungskurs** (100 sa3a: t-tarikh, s-siyasa, l-9iyam) → imti7an **„Leben in Deutschland"**.
            - **Einbürgerung** (l-jinsiya l-almaniya): ghaliban men b3d 5 snin d l-i9ama o B1, o daba momkin **jouj d l-jinsiyat** (doppelte Staatsbürgerschaft, men 2024).
            - **Fachkräfteeinwanderungsgesetz:** l-9anoun li kaysahhal l-hijra l l-khobara (Pflege, IT, l-mihan).
          `,
        ),
        pron(
          'Stammformen b sout 3ali',
          'Goul t-tlata b ritm: infinitiv – Präteritum – Perfekt. Hadi a7ssen tari9a bach t7fedhom.',
          [
            ['gehen – ging – gegangen', 'e → i → a'],
            ['finden – fand – gefunden', 'i → a → u'],
            ['schreiben – schrieb – geschrieben', 'ei → ie → ie'],
            ['sprechen – sprach – gesprochen', 'e → a → o'],
          ],
        ),
        write(
          'Ein Wendepunkt — 9issa mnadhdhma',
          md`
            Kteb 9issa (~120 kelma) 3la mar7ala mohimma f 7yatek (wla f 7yat chi wa7ed men l-3a2ila: jdd, waldin…). Kteb b **l-Präteritum** (b7al riwaya), o khdem **3la l-a9al 3 Konnektoren** (bevor, nachdem, während, als, seitdem) o **Plusquamperfekt** merra wa7da.
            Nadhdhem: **bidaya** (chkoun, imta, fin) — **l-a7dath** — **n-natija / l-yawm**.
          `,
          ['Bidaya: chkoun / imta / fin', 'Präteritum', 'Plusquamperfekt (hatte / war …)', '3 Konnektoren dyal l-wa9t', 'N-natija: Heute …'],
          'Mein Großvater wuchs in einem kleinen Dorf bei Nador auf. Als er zwanzig war, hörte er im Radio, dass deutsche Firmen Arbeiter suchten. Bevor er ging, heiratete er meine Großmutter. 1965 fuhr er mit dem Zug nach Bochum und arbeitete dort zwölf Jahre im Bergbau. Während er unter Tage arbeitete, sparte er jeden Pfennig. Nachdem er genug Geld gespart hatte, holte er seine Familie nach. Meine Mutter ging in Bochum zur Schule. Seitdem ist Deutschland auch unsere Heimat. Heute ist mein Großvater 81 und erzählt immer noch gern von dieser Zeit.',
          100,
        ),
        graded(choice('"Der Text handelt von …" katkhdmou f…', ['l-mulakhkhas', 'l-email', 's-SMS'], 0)),
        graded(choice('F l-mulakhkhas katkteb ghaliban b…', ['l-Präsens', 'l-Plusquamperfekt', 'l-Futur'], 0)),
        graded(choice('"ursprünglich" =', ['f l-asl / f l-bidaya', 'f l-akhir', 'daba'], 0)),
        graded(dictation('Sme3 o kteb', 'Nachdem er genug Geld gespart hatte, holte er seine Familie nach.')),
        summary(
          [
            '1963: l-ittifa9iya l-maghribiya l-almaniya · 1973: Anwerbestopp · daba: jil jdid dyal l-Fachkräfte.',
            'Mulakhkhas: **Der Text handelt von … · Zuerst … · Danach … · Heute …** — b l-Präsens o b kalimatek.',
          ],
          ['T9ra nass tarikhi o tfhem t-tartib', 'Tlakhkhes nass', 'Tkteb 9issa mnadhdhma'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 1',
      description: 'Muraja3a: Präteritum, Plusquamperfekt, Konnektoren dyal l-wa9t — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Präteritum o l-Plusquamperfekt', 'T7ki 9issa b tartib', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Mra7il l-7ayat, l-Präteritum (kitaba), l-Plusquamperfekt (madi 9bel madi), o nachdem / bevor / während / seitdem / bis.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            | Infinitiv | Präteritum | Perfekt |
            |---|---|---|
            | machen | machte | hat gemacht |
            | gehen | ging | ist gegangen |
            | kommen | kam | ist gekommen |
            | bleiben | blieb | ist geblieben |
            | bringen | brachte | hat gebracht |

            **Plusquamperfekt:** hatte / war + Partizip II
            **nachdem** (men b3d ma) · **bevor** (9bel ma) · **während** (f l-wa9t li) · **seitdem** (men mli) · **bis** (7tal)
          `,
        ),
        dialogue(
          'Oma erzählt',
          [
            ['Salma', 'Oma, wie hast du Opa kennengelernt?', 'A mmi l-kbira, kifach t3errefti 3la jeddi?'],
            ['Oma (am Telefon)', 'Ach, das ist lange her! Ich war siebzehn. Ich hatte gerade die Schule beendet, als er in unser Viertel zog.', 'Aah, hadi bzaf! Kan 3endi 17. Kont 3ad salit l-madrasa mli ja sken f l-7ouma dyalna.'],
            ['Salma', 'Und dann?', 'O men b3d?'],
            ['Oma (am Telefon)', 'Bevor er mit mir sprach, fragte er meinen Vater um Erlaubnis. Während wir verlobt waren, schrieb er mir jede Woche einen Brief.', '9bel ma yhder m3aya, tleb l-idn men bba. F l-wa9t li konna mkhtoubin, kan kayktebli bra kol simana.'],
            ['Salma', 'Wie romantisch! Hast du die Briefe noch?', 'Romantique! Wach mazalin 3endek l-brawat?'],
            ['Oma (am Telefon)', 'Natürlich. Seitdem er gestorben ist, lese ich sie manchmal wieder.', 'Akid. Men mli mat, kan3awed n9rahom chi merrat.'],
          ],
        ),
        choice('Ch7al kan 3and l-jedda mli t3errfat 3la j-jedd?', ['15', '17', '20'], 1),
        choice('Chno dar j-jedd 9bel ma yhder m3aha?', ['Kteb lha bra', 'Tleb l-idn men bbaha', 'Sken f l-7ouma'], 1),
        gap('Kemmel', 'Ich ___ gerade die Schule beendet, als er in unser Viertel zog.', 'hatte'),
        match('Rbet', [
          ['nachdem', 'men b3d ma'],
          ['bevor', '9bel ma'],
          ['während', 'f l-wa9t li'],
          ['seitdem', 'men mli'],
          ['bis', '7tal'],
        ]),
        speak(
          'Role-play: 7ki 9issa',
          '7ki 9issa 9sira (wa9i3iya wla mkhtar3a) 3la l-l9a2 l-lowel bin jouj d n-nas — b Präteritum o b 3 Konnektoren.',
          ['Vor zwei Jahren war ich auf einer Hochzeit in Tanger.', 'Während ich mit meinem Cousin sprach, sah ich eine Frau mit einem blauen Kleid.', 'Nachdem die Musik aufgehört hatte, ging ich zu ihr.', 'Seitdem sind wir zusammen.'],
        ),
        graded(choice('Präteritum dyal "fahren" (wir)?', ['fahrten', 'fuhren', 'fährten'], 1)),
        graded(gap('Kemmel b l-Präteritum', 'Sie ___ (bringen) uns Kuchen mit.', 'brachte')),
        graded(gap('Kemmel b l-Präteritum', 'Damals ___ (geben) es noch keine Handys.', 'gab')),
        graded(choice('"Als die Polizei kam, ___ der Dieb schon geflohen."', ['hatte', 'war', 'ist'], 1)),
        graded(choice('"___ ich nach Hause komme, rufe ich dich an."', ['Bevor', 'Nachdem', 'Während'], 1)),
        graded(choice('"___ ich koche, höre ich Musik." (f nefs l-wa9t)', ['Während', 'Bevor', 'Seitdem'], 0)),
        graded(choice('Perfekt wla Präteritum f r-riwaya?', ['Perfekt', 'Präteritum'], 1)),
        graded(choice('"das Abkommen" howa…', ['l-ittifa9iya', 'l-manjam', 'l-jil'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Men mli kansken f Köln, kant3llem bzaf.', ['Seitdem ich in Köln wohne, lerne ich viel.', 'Seit ich in Köln wohne, lerne ich viel.'])),
        graded(dictation('Sme3 o kteb', 'Bevor er nach Deutschland kam, lernte er Deutsch.')),
        summary(
          [
            'Daba t9der t7ki 9issa twila b tartib o tlakhkhes nass.',
            'F l-unité 2: t-talab d l-khedma (Bewerbung), l-Lebenslauf o l-entretien — o **l-Relativsätze** (der Mann, **der** …).',
          ],
          ['T7ki 9issa f l-madi', 'Tkhdem Präteritum o Plusquamperfekt', 'Trtteb l-a7dath b l-Konnektoren', 'Tlakhkhes nass'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
