import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A1',
  number: 12,
  title: 'Feste & Einladungen',
  description: "T-tarikh, 3id l-milad, l-a3yad f Almaniya o f l-Maghrib, d-d3awat — o und, oder, aber, denn.",
  icon: 'celebration',
  objectives: [
    'Tgoul t-tarikh: "am 12. März"',
    'Tstd3i, t9bel d3awa wla trfodha b ladab',
    'Tbarek b l-munasabat: "Herzlichen Glückwunsch!"',
    'Trbet l-jmel b und, oder, aber, denn',
    'Ttleb b ladab: "Könnten Sie …?", "Ich würde gern …"',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Wann hast du Geburtstag? — T-tarikh',
      description: 'L-a3dad t-tartibiya, t-tarikh, o 3id l-milad.',
      minutes: 25,
      kind: 'input',
      goals: ['Tgoul l-a3dad t-tartibiya (der erste, der zweite…)', 'Tgoul t-tarikh', 'Tsowwel 3la 3id l-milad o tbarek'],
      steps: [
        intro(
          'D3awa l 3id l-milad',
          'Lukas ghadi ydir 7afla l 3id l-milad dyalou o std3a Youssef. Bach tfhem "am fünfzehnten Mai" khassek t3ref **l-a3dad t-tartibiya** (l-oul, t-tani…).',
          ['Tgoul t-tarikh', 'Tsowwel 3la 3id l-milad', 'Tbarek'],
        ),
        dialogue(
          'Eine Einladung',
          [
            ['Lukas', 'Youssef, ich habe am Samstag Geburtstag. Ich mache eine Party. Kommst du?', 'Youssef, s-sebt 3id l-milad dyali. Ghadi ndir 7afla. Ghadi tji?'],
            ['Youssef', 'Gern! Am Samstag, das ist der fünfzehnte, oder?', 'B kolchi! S-sebt, ya3ni 15, ya ak?'],
            ['Lukas', 'Genau, am fünfzehnten Mai. Um acht Uhr bei mir.', 'Bdebt, 15 mai. F 8 3endi.'],
            ['Youssef', 'Super. Soll ich etwas mitbringen?', 'Mzyan. Wach njib chi 7aja m3aya?'],
            ['Lukas', 'Vielleicht einen Salat? Und wann hast du eigentlich Geburtstag?', 'Ymken chi chlada? O nta imta 3id l-milad dyalek?'],
            ['Youssef', 'Am dritten Dezember.', 'F 3 dujanbir.'],
            ['Lukas', 'Okay, das merke ich mir!', 'Wakha, ghadi n3e9el 3liha!'],
          ],
        ),
        explain(
          'L-a3dad t-tartibiya (Ordinalzahlen)',
          md`
            | Ra9m | Tartibi | | Ra9m | Tartibi |
            |---|---|---|---|---|
            | 1. | der **erste** ⚠️ | | 7. | der **siebte** ⚠️ |
            | 2. | der zweite | | 8. | der **achte** ⚠️ |
            | 3. | der **dritte** ⚠️ | | 19. | der neunzehnte |
            | 4. | der vierte | | 20. | der zwanzig**ste** |
            | 5. | der fünfte | | 21. | der einundzwanzig**ste** |
            | 6. | der sechste | | 31. | der einunddreißig**ste** |

            **9a3ida:** 1–19 → **-te**, 20 o fou9 → **-ste**. Chadhin: **erste, dritte, siebte, achte**.
            F l-kitaba katzid **no9ta**: 3. = dritte, 15. = fünfzehnte.
          `,
        ),
        explain(
          'T-tarikh',
          md`
            | Sou2al | Jawab |
            |---|---|
            | "Welcher Tag ist heute?" / "Der Wievielte ist heute?" | "Heute ist der **fünfzehnte** Mai." (der 15. Mai) |
            | "Wann hast du Geburtstag?" | "**Am** dritt**en** Dezember." (am 3. Dezember) |

            - **der** …**te** (Nominativ): "Heute ist **der** erst**e** Mai."
            - **am** …**ten** (imta?): "Am erst**en** Mai", "am zwanzigst**en** Juli".

            T-tarikh f l-kitaba: **15.05.2026** = 15 mai 2026 (n-nhar, ch-chhar, l-3am — b7al l-Maghrib).
            L-3am katgoulou: **2026** = "zweitausendsechsundzwanzig"; **1998** = "neunzehnhundertachtundneunzig".
          `,
          [
            ['Heute ist der erste April.', 'Lyouma 1 abril.'],
            ['Ich bin am siebten Juni geboren.', 'Tzadt f 7 younyou.'],
            ['Der Kurs beginnt am zweiten September.', 'L-cours kaybda f 2 chtanbir.'],
          ],
        ),
        choice('"der dritte" = …', ['3.', '30.', '13.'], 0),
        choice('Kifach katgoul "f 7 mai"?', ['am sieben Mai', 'am siebten Mai', 'am siebenten Mai'], 1),
        gap('Kemmel', 'Heute ist der ___ Oktober. (1.)', 'erste'),
        gap('Kemmel', 'Ich habe am ___ August Geburtstag. (20.)', 'zwanzigsten'),
        dictation('Sme3 o kteb t-tarikh b l-ar9am (ex: 3.5.)', 'am achten März', undefined, ['8.3.', '08.03.', '8. März', '8.3']),
        vocab('Glückwünsche — T-tbrik', [
          ['Herzlichen Glückwunsch (zum Geburtstag)!', 'Mabrouk 3id l-milad!'],
          ['Alles Gute!', 'Kolchi zwin! / Lah ykhellik!'],
          ['Viel Glück!', 'B t-tawfi9!'],
          ['Viel Erfolg!', 'B n-naja7!'],
          ['Frohe Weihnachten!', 'Noël sa3id!'],
          ['Frohe Ostern!', 'Pâques sa3id!'],
          ['Frohes neues Jahr!', 'Sana sa3ida!'],
          ['Frohes Fest! / Eid Mubarak!', '3id mbarek!'],
          ['Gute Besserung!', 'Lah ychafik!'],
          ['Schönes Wochenende!', 'Weekend zwin!'],
          ['Prost! / Zum Wohl!', 'B s-s7a! (f ch-chrab)'],
          ['das Geschenk', 'l-hdiya', 'die Geschenke'],
        ]),
        match('Rbet l-munasaba m3a t-tbrik', [
          ['Geburtstag', 'Herzlichen Glückwunsch!'],
          ['Prüfung', 'Viel Erfolg!'],
          ['krank', 'Gute Besserung!'],
          ['31. Dezember', 'Frohes neues Jahr!'],
          ['Eid', 'Frohes Fest!'],
        ]),
        speak(
          '3id l-milad dyalek',
          'Jaweb: "Wann hast du Geburtstag?" o "Welcher Tag ist heute?" — o barek l chi sa7bek b 3id l-milad.',
          ['Ich habe am dritten Dezember Geburtstag.', 'Heute ist der fünfzehnte Mai.', 'Herzlichen Glückwunsch zum Geburtstag!'],
        ),
        graded(choice('"der achte" = …', ['8.', '18.', '80.'], 0)),
        graded(gap('Kemmel', 'Wann hast du Geburtstag? — ___ zweiten Juni.', 'Am')),
        graded(choice('Ila chi wa7ed 3endou imti7an, katgoul lih…', ['Gute Besserung!', 'Viel Erfolg!', 'Frohe Ostern!'], 1)),
        graded(dictation('Sme3 o kteb', 'Herzlichen Glückwunsch zum Geburtstag!')),
        summary(
          [
            'Tartibi: **erste, zweite, dritte, vierte … siebte, achte … zwanzigste**.',
            '**Heute ist der 15. Mai** (der fünfzehnte) — **am 15. Mai** (am fünfzehnten).',
            '**Herzlichen Glückwunsch! Alles Gute! Viel Erfolg! Frohes Fest!**',
          ],
          ['Tgoul t-tarikh', 'Tsowwel 3la 3id l-milad', 'Tbarek f l-munasabat'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'und, oder, aber, denn — o t-talab b ladab',
      description: 'Trbet jouj jmel b und, oder, aber, denn (o l-fer9 m3a dann), o ttleb b ladab b könnten / hätte / würde.',
      minutes: 30,
      kind: 'grammar',
      goals: ['Trbet l-jmel b und, oder, aber, denn', 'Tfre9 bin "denn" o "dann"', 'Ttleb b ladab: "Könnten Sie …?", "Ich würde gern …"'],
      steps: [
        intro(
          'Jmel twila',
          md`
            7tal daba ktebti ghaliban jmel 9sar: "Ich komme. Ich bringe einen Salat."
            Daba ghadi nrbtouhom: "Ich komme **und** ich bringe einen Salat." / "Ich komme nicht, **denn** ich arbeite."
          `,
          ['und, oder, aber, denn', 'denn ≠ dann', 'T-talab b ladab'],
        ),
        explain(
          'und, oder, aber, denn: blasa 0',
          md`
            Had l-kalimat kayrbtou jouj jmel kamlin, o **ma kaybeddlouch t-tartib**: kayjiw f **blasa 0** (9bel l-blasa 1). L-fi3l kayb9a f **l-blasa 2** 3adi.

            | Kelma | Ma3na | Mital |
            |---|---|---|
            | **und** | o | Ich komme, **und** ich bringe einen Salat. |
            | **oder** | wla | Kommst du am Samstag, **oder** hast du keine Zeit? |
            | **aber** | walakin | Ich möchte kommen, **aber** ich habe keine Zeit. |
            | **denn** | 7it / 3la 7sab | Ich komme nicht, **denn** ich **muss** arbeiten. |

            | 0 | 1 | **2** | … |
            |---|---|---|---|
            | **denn** | ich | **muss** | arbeiten. |
            | **aber** | morgen | **habe** | ich Zeit. |

            M3a **aber, denn** ghaliban katzid **fasila** (,) 9belhom.
          `,
          [
            ['Ich trinke Tee, aber Salma trinkt Kaffee.', 'Ana kancherb atay, walakin Salma katcherb 9ahwa.'],
            ['Wir feiern nicht, denn Lukas ist krank.', 'Ma ghadich n7tafelou, 7it Lukas mrid.'],
            ['Möchtest du Saft oder Wasser?', 'Bghiti 3assir wla l-ma?'],
          ],
        ),
        explain(
          '⚠️ denn ≠ dann',
          md`
            | | Ma3na | Blasa | Mital |
            |---|---|---|---|
            | **denn** | 7it (sabab) | **0** → l-fi3l f 2 men b3d l-fa3il | "…, **denn** ich **habe** Hunger." |
            | **dann** | men b3d (wa9t) | **1** → l-fi3l **men b3dha direct** | "**Dann** **essen** wir." |

            **dann** kat3teber b7al "heute, morgen": katchedd l-blasa 1, ya3ni l-fa3il kaymchi men b3d l-fi3l:
            "Zuerst kaufe ich ein. **Dann koche** ich."
          `,
          undefined,
          'Fakker: **denn** = *3lach?* (sabab), **dann** = *o men b3d?* (wa9t).',
        ),
        choice('"Ich bleibe zu Hause, ___ ich bin müde."', ['dann', 'denn', 'oder'], 1),
        choice('"Zuerst esse ich. ___ lerne ich."', ['Denn', 'Dann', 'Aber'], 1),
        choice('Ina jomla s7i7a?', ['…, denn ich habe keine Zeit.', '…, denn habe ich keine Zeit.', '…, denn keine Zeit ich habe.'], 0),
        choice('Ina jomla s7i7a?', ['Dann ich gehe nach Hause.', 'Dann gehe ich nach Hause.'], 1),
        gap('Kemmel b und / oder / aber / denn', 'Ich möchte kommen, ___ ich muss arbeiten.', 'aber'),
        gap('Kemmel b und / oder / aber / denn', 'Trinkst du Tee ___ Kaffee?', 'oder'),
        gap('Kemmel b und / oder / aber / denn', 'Ich lerne Deutsch, ___ ich will in Deutschland arbeiten.', 'denn'),
        order('Rtteb', 'Ich komme gern, aber ich komme etwas später.'),
        order('Rtteb', 'Ich kann nicht kommen, denn ich bin krank.'),
        explain(
          'Ttleb b ladab (Konjunktiv II — b7al t3abir)',
          md`
            F A1 had l-ichkal kat-t7efdhom **b7al t3abir jahzin** — l-9a3ida l-kamla ghadi tchoufha f A2:

            | T3bir | Ma3na | Mital |
            |---|---|---|
            | **Ich hätte gern** … | bghit (b ladab) | "Ich hätte gern ein Stück Kuchen." |
            | **Ich würde gern** + infinitiv | kount nbghi… | "Ich würde gern mitkommen." |
            | **Könnten Sie** … ? | wach t9der… (rasmi, drif bzaf) | "Könnten Sie mir bitte helfen?" |
            | **Könntest du** … ? | wach t9der… (du) | "Könntest du den Salat mitbringen?" |
            | **Wie wäre es mit** … ? | ach ban lik f… ? | "Wie wäre es mit Samstag?" |

            Mo9arana: "Kannst du helfen?" (3adi) → "**Könntest** du **bitte** helfen?" (drif ktar).
          `,
          [
            ['Könnten Sie das bitte wiederholen?', 'Wach t9der t3awedha 3afak?'],
            ['Ich würde gern nach Marokko fliegen.', 'Kount nbghi nmchi l l-Maghrib.'],
          ],
        ),
        choice('Ina talab hwa a7ssen ladab?', ['Helfen Sie mir!', 'Könnten Sie mir bitte helfen?', 'Sie helfen mir.'], 1),
        gap('Kemmel', 'Ich ___ gern mitkommen, aber ich kann nicht.', 'würde|wuerde'),
        translate("Terjem l l'Almaniya (rasmi, b ladab)", 'Wach t9der tkteb smiytek 3afak?', ['Könnten Sie bitte Ihren Namen schreiben?', 'Könnten Sie Ihren Namen bitte schreiben?', 'Könnten Sie Ihren Namen schreiben, bitte?']),
        graded(choice('"Wir gehen ins Kino ___ dann essen wir Pizza."', ['und', 'denn', 'aber'], 0)),
        graded(choice('"Er kommt nicht, ___ er ist krank."', ['dann', 'denn'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Zuerst trinke ich Tee, dann gehe ich.', 'Zuerst trinke ich Tee, dann ich gehe.'], 0)),
        graded(gap('Kemmel', 'Das Kleid ist schön, ___ es ist zu teuer.', 'aber')),
        graded(choice('"Ich hätte gern …" kat3ni…', ['3endi', 'bghit (b ladab)', 'kan 3endi'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Ma ghadich nji 7it khassni nkhdem.', ['Ich komme nicht, denn ich muss arbeiten.', 'Ich kann nicht kommen, denn ich muss arbeiten.'])),
        summary(
          [
            '**und, oder, aber, denn** → blasa 0, t-tartib ma kayt-beddelch.',
            '**denn** = 7it (sabab, blasa 0) ≠ **dann** = men b3d (blasa 1 → fi3l men b3dha).',
            'B ladab: **Ich hätte gern … / Ich würde gern … / Könnten Sie …? / Wie wäre es mit …?**',
          ],
          ['Trbet jouj jmel', 'T3ti s-sabab b denn', 'Ttleb b ladab'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Einladungen schreiben & Feste in Deutschland',
      description: 'T9ra d3awa, tjaweb 3liha b l-kitaba (b7al f l-imti7an), o tt3erref 3la l-a3yad f Almaniya.',
      minutes: 30,
      kind: 'skills',
      goals: ['T9ra d3awa o tfhem l-ma3loumat', 'Tkteb jawab: t9bel wla trfod (3 no9at)', 'Tt3erref 3la l-a3yad f Almaniya', 'Tnte9 t-tbrikat b nghma zwina'],
      steps: [
        intro(
          'D3awa men l-oustada',
          'Frau Weber kat-std3i l-cours l 7afla f l-akhir dyal l-niveau A1. Salma khassha tjaweb b email. Had n-nou3 d l-kitaba kayn f l-imti7an dyal A1 (Schreiben Teil 2).',
          ['T9ra d3awa', 'Tjaweb b l-kitaba', 'Tt3erref 3la l-a3yad'],
        ),
        reading(
          'Einladung zum Kursfest',
          md`
            Liebe Kursteilnehmerinnen und Kursteilnehmer,

            bald ist unser A1-Kurs zu Ende! Das möchten wir feiern. Ich lade Sie herzlich zu unserem Kursfest ein:

            am Freitag, den 27. Juni, um 18 Uhr
            im Kursraum 3 (Sprachschule Köln, Neumarkt 5)

            Jeder bringt bitte etwas zu essen oder zu trinken mit – gern auch etwas aus Ihrem Land! Bitte schreiben Sie mir bis Montag, ob Sie kommen.

            Viele Grüße
            Monika Weber
          `,
          {
            text: '9ra d-d3awa dyal Frau Weber.',
            glossary: [
              ['bald', 'f 9rib'],
              ['zu Ende', 'sala'],
              ['feiern', '7tafel'],
              ['einladen', 'std3a'],
              ['ob', 'wach'],
            ],
          },
        ),
        choice('Imta l-7afla?', ['L-ithnin 27 younyou', 'L-jem3a 27 younyou f 18', 'L-jem3a 17 younyou'], 1),
        choice('Chno khass kol wa7ed yjib?', ['Hdiya', 'Chi makla wla chrab', 'Lflous'], 1),
        choice('7tal imta khass tjawbou?', ['7tal l-jem3a', '7tal l-ithnin', '7tal 27 younyou'], 1),
        explain(
          'Kifach tjaweb 3la d3awa (A1, Schreiben)',
          md`
            F l-imti7an kayt3tawk **3 no9at** khassek tktebhom kamlin (~30 kelma). Mital: *chkkerha — goul wach ghadi tji — goul chno ghadi tjib.*

            **T9bel:**
            > Liebe Frau Weber, vielen Dank für die Einladung! Ich komme gern. Ich bringe Msemen mit, das ist ein marokkanisches Brot. …

            **Trfod (b ladab, m3a s-sabab):**
            > … Leider kann ich nicht kommen, **denn** ich muss am Freitag arbeiten. Das tut mir sehr leid! …

            **Struktur:**
            1. Salam: **Liebe Frau Weber, / Lieber Lukas, / Hallo Olena,**
            2. Chkker: **Vielen Dank für die Einladung!**
            3. Jawab + sabab: **Ich komme gern. / Leider kann ich nicht kommen, denn …**
            4. Tafasil / sou2al: **Ich bringe … mit. / Soll ich etwas mitbringen?**
            5. Twadi3: **Viele Grüße / Liebe Grüße + s-smiya**

            Rd l-bal: **Liebe** (l-mra) / **Lieber** (r-rajel).
          `,
        ),
        listening(
          'Am Telefon: Geburtstagswünsche',
          [
            ['Salma', 'Hallo Mama! Herzlichen Glückwunsch zum Geburtstag!', 'Alo a mama! Mabrouk 3id l-milad!'],
            ['Mama', 'Danke, meine Tochter! Wie schön, dass du anrufst!', 'Chokran a benti! Zwin belli ttasliti!'],
            ['Salma', 'Ich wünsche dir alles Gute und viel Gesundheit! Feierst du heute?', 'Kantmenna lik kolchi zwin o s-s7a! Ghadi t7tafli lyouma?'],
            ['Mama', 'Ja, deine Geschwister kommen heute Abend. Nadia macht einen Kuchen.', 'Ah, khoutek ghadi yjiw f l-3chiya. Nadia ghadi dir gato.'],
            ['Salma', 'Schade, dass ich nicht da bin! Aber im Sommer komme ich nach Hause.', 'Khsara ma kanach hna! Walakin f s-sif ghadi nji l d-dar.'],
            ['Mama', 'Ich freue mich!', 'Kanfr7!'],
          ],
          'Salma kattasel b mmha f Fès. (Sme3 — o chouf kifach katbarek.)',
        ),
        choice('Chno l-munasaba?', ['3id l-milad dyal Salma', '3id l-milad dyal l-oum', 'L-3id'], 1),
        choice('Imta ghadi tmchi Salma l l-Maghrib?', ['F s-sif', 'F ch-chta', 'Ghedda'], 0),
        culture(
          'L-a3yad f Almaniya — o l-a3yad dyalna',
          md`
            - **Weihnachten** (25–26 dujanbir): 3id l-3a2ila l-kbir. 9bel men chhar kaynin **Weihnachtsmärkte**. L-7wanet msdoudin.
            - **Silvester** (31.12.): n-nas kay7tafelou b l-mfar9at (Feuerwerk) f ness l-lil.
            - **Ostern** (Pâques, f r-rbi3): 3otla d 4 iyyam.
            - **Karneval** f **Köln**: kaybda **11.11. f 11:11**, o l-a9wa f **février** (Rosenmontag): n-nas kaylbsou costumes f z-zen9a!
            - **Tag der Deutschen Einheit** (3.10.): l-3id l-watani.

            **Ramadan o l-3id f l-khedma / l-madrasa:**
            - Ma kaynach 3otla rasmiya f l-3id, walakin t9der ttleb **Urlaub** (3otla) men l-patron 9bel.
            - Goul l z-zmala belli nta sayem — ghaliban kayfehmou, o bzaf d l-alman kay3erfou Ramadan.
            - Bzaf d l-mdon fihom **Iftar** jamā3i f l-mosquées o ta f l-baladiyat. T9der tstd3i z-zmala l l-ftour — 3ajibhom bzaf!
          `,
        ),
        pron(
          'N-nghma dyal t-tbrik',
          'F t-tbrik s-sout kayt-le3 3la l-kelma l-mohimma o kayhbet f l-akhir. Goulhom b l-farha!',
          [
            ['Herzlichen Glückwunsch!', 'L-accent 3la "Glück"'],
            ['Alles Gute zum Geburtstag!', 'L-accent 3la "Gu-" o "-burts-"'],
            ['Frohes neues Jahr!', 'L-accent 3la "Jahr"'],
            ['Vielen Dank für die Einladung!', 'L-accent 3la "Dank" o "-la-"'],
          ],
        ),
        write(
          'Jaweb 3la d-d3awa dyal Frau Weber',
          md`
            Kteb email l Frau Weber (~30–40 kelma). Khtar: **t9bel** wla **trfod**. Kteb had **3 no9at**:
            1. Chkker 3la d-d3awa.
            2. Goul wach ghadi tji (o ila la, 3lach — b **denn**).
            3. Goul chno ghadi tjib (wla sowwel chno t9der dir).
          `,
          ['Liebe Frau Weber,', 'Vielen Dank für die Einladung!', 'Ich komme gern. / Leider …, denn …', 'Ich bringe … mit.', 'Viele Grüße + smiya'],
          'Liebe Frau Weber,\n\nvielen Dank für die Einladung! Ich komme sehr gern zum Kursfest. Ich bringe Msemen und marokkanischen Tee mit. Brauchen Sie auch Teller oder Gläser? Ich kann sie mitbringen.\n\nViele Grüße\nSalma',
          30,
        ),
        graded(choice('"Liebe Frau Weber" — 3lach "Liebe" machi "Lieber"?', ['7it hiya mra', '7it rasmi', '7it hiya oustada'], 0)),
        graded(choice('Karneval f Köln kaybda…', ['1.1. f 12:00', '11.11. f 11:11', '31.12.'], 1)),
        graded(choice('Bach trfod d3awa b ladab katgoul…', ['Ich komme nicht.', 'Leider kann ich nicht kommen, denn ich muss arbeiten.', 'Nein!'], 1)),
        graded(dictation('Sme3 o kteb', 'Vielen Dank für die Einladung!')),
        summary(
          [
            'D3awa: **Ich lade dich / Sie ein … am …, um …, bei …**',
            'Jawab: **Vielen Dank für die Einladung! Ich komme gern. / Leider kann ich nicht kommen, denn …**',
            'A3yad: **Weihnachten, Silvester, Ostern, Karneval** — o Ramadan / l-3id f l-khedma.',
          ],
          ['T9ra d3awa', 'Tjaweb b l-kitaba (3 no9at)', 'Thder 3la l-a3yad'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — Unité 12',
      description: 'Muraja3a: t-tarikh, t-tbrik, d-d3awat, und/oder/aber/denn — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-unité 12', 'Tstd3i o tjaweb', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a dyal l-unité 12', 'T-tarikh, t-tbrik, d-d3awat, o und / oder / aber / denn. Men b3d had l-unité ghadi tdir t-tdrib 3la l-imti7an dyal A1!', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **Heute ist der 3. Mai** (dritte) — **am 3. Mai** (dritten).
            - **und / oder / aber / denn** + jomla 3adiya (fi3l f 2).
            - **dann** = men b3d → fi3l men b3dha direct.
            - **Ich hätte gern / Ich würde gern / Könnten Sie …?**
          `,
        ),
        dialogue(
          'Iftar mit Kollegen',
          [
            ['Youssef', 'Tim, nächste Woche beginnt Ramadan. Am Freitag mache ich ein Iftar. Möchtest du kommen?', 'Tim, s-simana l-jaya kaybda Ramadan. Nhar l-jem3a ghadi ndir ftour. Bghiti tji?'],
            ['Tim', 'Iftar? Was ist das?', 'Iftar? Chno hada?'],
            ['Youssef', 'Das ist das Essen am Abend, denn im Ramadan essen wir tagsüber nicht.', 'Hiya l-makla f l-3chiya, 7it f Ramadan ma kanakloush f n-nhar.'],
            ['Tim', 'Ach so! Ja, ich komme gern. Wann genau?', 'Aaah! Ah, ghadi nji b kolchi. Imta b dbt?'],
            ['Youssef', 'Um Viertel nach neun, denn dann geht die Sonne unter.', 'F 9 o rob3, 7it f dak l-wa9t katghreb ch-chems.'],
            ['Tim', 'Super. Soll ich etwas mitbringen?', 'Mzyan. Njib chi 7aja m3aya?'],
            ['Youssef', 'Vielleicht Datteln? Aber du musst nichts mitbringen!', 'Ymken t-tmer? Walakin ma khassek tjib walou!'],
          ],
        ),
        choice('3lach l-ftour f 21:15?', ['7it Tim kaykhdem 7tal 21', '7it ch-chems katghreb f dak l-wa9t', '7it l-makla mazala ma wajdach'], 1),
        choice('Chno ghadi yjib Tim ymken?', ['Gato', 'T-tmer', 'Chlada'], 1),
        gap('Kemmel', 'Im Ramadan essen wir tagsüber nicht, ___ wir fasten. ___ essen wir am Abend.', ['denn', 'Dann']),
        match('Rbet', [
          ['am 1. Mai', 'am ersten Mai'],
          ['am 3. Juni', 'am dritten Juni'],
          ['am 7. Juli', 'am siebten Juli'],
          ['am 20. August', 'am zwanzigsten August'],
        ]),
        speak(
          'Role-play: std3i sa7bek',
          'Std3i chi sa7bek l 7afla dyal 3id l-milad dyalek: goul n-nhar (t-tarikh), s-sa3a, l-blasa, o tleb mennou yjib chi 7aja b ladab.',
          ['Ich habe am zwölften März Geburtstag.', 'Ich mache eine Party am Samstag um sieben Uhr bei mir.', 'Möchtest du kommen?', 'Könntest du Musik mitbringen?'],
        ),
        graded(choice('"Heute ist der ___ Juli." (7.)', ['siebte', 'siebente', 'siebzehnte'], 0)),
        graded(gap('Kemmel', 'Ich bin ___ elften November geboren.', 'am')),
        graded(choice('"Ich bin müde, ___ ich habe schlecht geschlafen."', ['dann', 'denn', 'oder'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Wir essen und dann wir gehen.', 'Wir essen und dann gehen wir.'], 1)),
        graded(gap('Kemmel', 'Möchtest du Wasser ___ Saft?', 'oder')),
        graded(choice('Bach tbarek b n-naja7 f l-imti7an:', ['Viel Erfolg!', 'Gute Besserung!', 'Frohes Fest!'], 0)),
        graded(choice('"Könnten Sie mir helfen?" howa…', ['amr', 'talab b ladab', 'sou2al 3la l-madi'], 1)),
        graded(translate("Terjem l l'Almaniya", 'Chokran 3la d-d3awa!', ['Danke für die Einladung!', 'Vielen Dank für die Einladung!'])),
        graded(gap('Kemmel', '___ Lukas, vielen Dank für die Einladung! (r-rajel)', 'Lieber')),
        graded(dictation('Sme3 o kteb', 'Leider kann ich nicht kommen.')),
        summary(
          [
            'Mabrouk! Kmmelti l-unités dyal A1. Daba t9der t-t3amel m3a l-mawa9if l-asasiya f Almaniya.',
            'L-unité 13: **Prüfungstraining A1** — tdrib 3la l-imti7an (Start Deutsch 1 / telc A1): sme3, 9raya, kitaba o hedra.',
          ],
          ['Tgoul t-tarikh', 'Tstd3i o tjaweb 3la d3awa', 'Trbet l-jmel b und / oder / aber / denn', 'Ttleb b ladab'],
          'Khlasa dyal l-unité 12',
        ),
      ],
    },
  ],
});
