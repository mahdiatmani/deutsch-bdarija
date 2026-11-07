import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 2,
  title: 'Arbeit & Karriere',
  description: "L-mizan bin l-khedma o l-7yat, l-home office o r-réunions — b Nominalstil ↔ Verbalstil o Nomen-Verb-Verbindungen.",
  icon: 'work_history',
  objectives: [
    'Tnaqech work-life balance, home office o 4-Tage-Woche',
    'T7awwel bin Verbalstil (l-hedra) o Nominalstil (l-kitaba r-rasmiya)',
    'Tkhdem Nomen-Verb-Verbindungen (eine Entscheidung treffen, in Frage kommen …)',
    'Tfhem t9rir o ra9m dyal l-khedma',
    'Tkteb Stellungnahme 9siira l l-idara',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Homeoffice oder Büro?',
      description: 'L-kalimat d l-3alam d l-khedma l-7adith o kifach tfawed 3la chorout l-khedma.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal ch-chorout d l-khedma', 'T9aren bin l-home office o l-bureau', 'Tfawed b ladab o b 7ojaj'],
      steps: [
        intro(
          'Neue Regeln bei DataNova',
          'L-idara d DataNova bghat tbeddel l-9awanin: ghir youm wa7ed d l-home office f s-simana. L-équipe ma fr7atch… Salma khassha tfawed m3a Frau Dr. Kessler.',
          ['Ch-chorout d l-khedma', 'L-mo9arana', 'T-tafawod'],
        ),
        dialogue(
          'Verhandlung mit der Chefin',
          [
            ['Dr. Kessler', 'Frau El Idrissi, ich habe gehört, dass das Team mit der neuen Regelung unzufrieden ist.', 'Madame El Idrissi, sme3t belli l-équipe ma rad-yach 3la l-9anoun j-jdid.'],
            ['Salma', 'Ja, offen gesagt sorgt sie für viel Unmut. Die meisten von uns sind im Homeoffice deutlich produktiver.', 'Ah, b s-sra7a kaydir bzaf d l-ghadab. Ktar mennna kaykounou montijin ktar b bzaf f l-home office.'],
            ['Dr. Kessler', 'Das mag sein. Aber die Zusammenarbeit leidet, wenn sich niemand mehr persönlich sieht.', 'Momkin. Walakin t-ta3awon kaytdarrer ila ma b9a 7ta wa7ed kaychouf l-akhor.'],
            ['Salma', 'Da gebe ich Ihnen recht. Ich schlage deshalb einen Kompromiss vor: zwei feste Teamtage im Büro, den Rest flexibel.', 'Hna kan3tik l-7a99. Dakchi 3lach kan9tare7 7all wost: jouj iyyam thabtin f l-bureau, o l-ba9i flexible.'],
            ['Dr. Kessler', 'Das kommt grundsätzlich in Frage. Können Sie mir bis Freitag einen Vorschlag zur Umsetzung machen?', 'Hadchi momkin mabda2iyan. Wach t9dri t9addmi liya 9tira7 dyal t-tatbi9 9bel l-jem3a?'],
            ['Salma', 'Gern. Ich bespreche das mit dem Team und gebe Ihnen dann Bescheid.', 'B kol farha. Ghadi nnaqech hadchi m3a l-équipe o n3lmek.'],
          ],
        ),
        vocab('Arbeitswelt — 3alam l-khedma', [
          ['die Vereinbarkeit von Beruf und Familie', 't-tawfi9 bin l-khedma o l-3a2ila', ''],
          ['die Work-Life-Balance', 'l-mizan bin l-khedma o l-7yat', ''],
          ['die Überstunde', 's-sa3a z-za2ida', 'die Überstunden'],
          ['die Gleitzeit', 'l-we9t l-moroun', ''],
          ['die Vier-Tage-Woche', 'simana d 4 iyyam', ''],
          ['die Arbeitsbedingungen', 'chorout l-khedma', ''],
          ['der Arbeitnehmer / der Arbeitgeber', 'l-ajir (l-mowadhef) / l-mochaghghil', ''],
          ['die Zusammenarbeit', 't-ta3awon', ''],
          ['produktiv', 'montij', ''],
          ['der Unmut', 'l-ghadab / 3adam r-rida', ''],
          ['die Umsetzung', 't-tatbi9 / t-tanfid', ''],
          ['erschöpft / ausgebrannt', 'mhlouk / 3endou burnout', ''],
          ['der Fachkräftemangel', 'n-nass d l-yed l-3amila l-mo2ahhala', ''],
          ['kündigen', 'stqal / khrej (men l-khedma)', ''],
        ]),
        explain(
          'Tfawed b ladab',
          md`
            | Bach… | Redemittel |
            |---|---|
            | tbda | "Ich würde gern über … sprechen." — "Mir ist aufgefallen, dass …" |
            | twafe9 jouz2iyan | "Da gebe ich Ihnen recht, aber …" — "Das mag sein, allerdings …" |
            | t9tare7 | "Ich schlage vor, … / Wie wäre es, wenn wir …?" — "Ein möglicher Kompromiss wäre …" |
            | t9bel b chart | "Damit könnte ich leben, sofern …" — "Unter der Bedingung, dass …" |
            | trfod b ladab | "Das kommt für mich leider nicht in Frage." — "Da bin ich anderer Meinung." |
          `,
          [
            ['Da gebe ich Ihnen recht, aber wir sollten auch an das Team denken.', 'Hna 3endek l-7a99, walakin khassna nfekkrou ta f l-équipe.'],
            ['Das kommt für mich nicht in Frage.', 'Hadchi mosta7il 3andi / ma ymkench.'],
          ],
        ),
        match('Rbet', [
          ['die Überstunde', 's-sa3a z-za2ida'],
          ['die Gleitzeit', 'l-we9t l-moroun'],
          ['die Umsetzung', 't-tatbi9'],
          ['kündigen', 'stqal'],
          ['erschöpft', 'mhlouk'],
        ]),
        choice('Chno l-mochkil 3la 7sab Dr. Kessler?', ['L-home office ghali', 'T-ta3awon kaytdarrer', 'L-équipe ma kaykhdemch'], 1),
        choice('Chno t9tar7at Salma?', ['Kolchi f l-home office', 'Jouj iyyam thabtin f l-bureau o l-ba9i flexible', '4 iyyam f l-bureau'], 1),
        gap('Kemmel', 'Das ___ grundsätzlich in Frage. Da ___ ich Ihnen recht.', ['kommt', 'gebe']),
        order('Rtteb', 'Ein möglicher Kompromiss wäre ein fester Teamtag.'),
        culture(
          'Arbeitsrecht f Almaniya',
          md`
            - **Arbeitszeitgesetz:** 3adatan ma ktar men **8 sa3at** f n-nhar (ta 10 ila t3wdat), o **11 sa3a d r-ra7a** bin nhar o nhar.
            - **Urlaub:** l-9anoun kay3ti **20 youm** (f 5 iyyam d l-khedma); bzaf d l-charikat kay3tiw **25–30**.
            - **Homeoffice:** ma kaynch 7a99 9anouni 3amm — kayt-tfahmou 3lih f l-3a9d wla f "Betriebsvereinbarung".
            - **Betriebsrat:** f l-charikat (≥ 5 mowadhafin) t9der t-tkhtar majlis l-mowadhafin, li kaycharek f l-qararat (we9t l-khedma, l-home office …).
            - **4-Tage-Woche:** fiha tajarib (pilot) f Almaniya — mazal machi 3adiya.
          `,
        ),
        speak(
          'Role-play: tfawed m3a l-mas2oul',
          'Bghiti tkhdem 4 iyyam f s-simana (32 sa3a). Fawed m3a l-mas2oul: chre7 3lach, 9tare7 kifach, o rd 3la l-i3tiradat dyalou.',
          ['Ich würde gern über meine Arbeitszeit sprechen.', 'Mir ist aufgefallen, dass ich freitags kaum noch konzentriert bin.', 'Ein möglicher Kompromiss wäre eine Vier-Tage-Woche mit 32 Stunden.', 'Da gebe ich Ihnen recht, aber ich könnte meine Aufgaben gut planen.', 'Damit könnte ich leben, sofern wir das nach drei Monaten überprüfen.'],
        ),
        graded(choice('"die Vereinbarkeit von Beruf und Familie" =', ['t-tawfi9 bin l-khedma o l-3a2ila', 'l-3a9d', 's-sa3at z-za2ida'], 0)),
        graded(choice('"Das kommt nicht in Frage." =', ['Ma ymkench / mosta7il', 'Hadchi so2al mzyan', 'Ghadi nfekker'], 0)),
        graded(gap('Kemmel', 'Viele Unternehmen leiden unter dem ___mangel. (n-nass d l-yed l-3amila l-mo2ahhala)', 'Fachkräfte|Fachkraefte')),
        graded(translate("Terjem l l'Almaniya", 'Hna kan3tik l-7a99.', ['Da gebe ich Ihnen recht.', 'Da gebe ich dir recht.', 'Da haben Sie recht.', 'Da hast du recht.'])),
        summary(
          [
            'L-khedma: **die Work-Life-Balance, die Gleitzeit, die Überstunden, die Arbeitsbedingungen, der Fachkräftemangel, die Umsetzung**.',
            'T-tafawod: **Da gebe ich Ihnen recht, aber … — Ein möglicher Kompromiss wäre … — Das kommt nicht in Frage.**',
          ],
          ['Tnaqech chorout l-khedma', 'Tfawed b ladab'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Die Einführung der Gleitzeit — Nominalstil & Nomen-Verb-Verbindungen',
      description: 'Kifach t7awwel l-jomla l smiya (Nominalisierung) o l-3aks, o l-kalimat l-mrakkba men smiya + fi3l.',
      minutes: 40,
      kind: 'grammar',
      goals: ['T7awwel jmel l Nominalstil', 'T7awwel Nominalstil l Verbalstil (bach tfhem)', 'Tkhdem 15 Nomen-Verb-Verbindungen mohimmin'],
      steps: [
        intro(
          '"Nach Einführung der neuen Regelung …"',
          md`
            F l-email r-rasmi d l-idara: "**Nach Einführung** der neuen Regelung **zur Verbesserung** der Zusammenarbeit …"
            F l-hedra: "**Nachdem** wir die neue Regel **eingeführt haben**, **um** die Zusammenarbeit **zu verbessern** …"
            Nefs l-ma3na — jouj d l-asaleeb. F B2 khassek t3ref ij-jouj.
          `,
          ['Nominalstil', 'Verbalstil', 'Nomen-Verb-Verbindungen'],
        ),
        explain(
          'Kifach katkwwen s-smiya men l-fi3l',
          md`
            | Tari9a | Mital |
            |---|---|
            | **-ung** (die) | einführen → die Einführ**ung** · verbessern → die Verbesser**ung** |
            | **Infinitiv** (das) | arbeiten → das Arbeiten · lernen → das Lernen |
            | **bla suffix** (der, ghaliban) | beginnen → der Beginn · besuchen → der Besuch · anrufen → der Anruf |
            | **-e / -t / -schaft / -ion** | helfen → die Hilfe · ankommen → die Ankunft · informieren → die Information |

            **L-fa3il** kaywelli **Genitiv** wla **durch** + Akk:
            > Die Firma **führt** Gleitzeit **ein**. → die Einführung der Gleitzeit **durch die Firma**
            > Die Preise **steigen**. → der Anstieg **der Preise**
          `,
        ),
        explain(
          'Verbalstil ↔ Nominalstil: l-Konnektoren',
          md`
            | Verbalstil (Nebensatz) | Nominalstil (Präposition) |
            |---|---|
            | **weil** das Wetter schlecht war | **wegen** des schlechten Wetters |
            | **obwohl** er krank war | **trotz** seiner Krankheit |
            | **nachdem** wir angekommen waren | **nach** unserer Ankunft |
            | **bevor** das Meeting beginnt | **vor** Beginn des Meetings |
            | **während** sie arbeitet | **während** ihrer Arbeit / **bei** der Arbeit |
            | **wenn** es regnet | **bei** Regen |
            | **um** Kosten **zu** sparen / **damit** … | **zur** Kostenersparnis / **für** … |
            | **indem** man Daten analysiert | **durch** die Analyse von Daten |
            | **wenn** man Fragen hat | **bei** Fragen |

            **Nominalstil** = 9sir, rasmi (t9arir, l-idara, l-3ilm). **Verbalstil** = wad7, 7ay (l-hedra, l-emails l-3adiya). L-mohimm: **ma tbaleghch** f Nominalstil — kaywelli thqil!
          `,
          [
            ['Bei Fragen wenden Sie sich an das Sekretariat.', 'Ila kan 3endkom chi so2al, ttaslou b s-secrétariat.'],
            ['Nach Abschluss der Ausbildung beginnt sie bei Siemens.', 'Men b3d ma tsali l-Ausbildung ghadi tbda f Siemens.'],
          ],
        ),
        choice('"weil die Kosten gestiegen sind" → ___', ['wegen des Anstiegs der Kosten', 'wegen die Kosten steigen', 'trotz der Kosten'], 0),
        choice('"wenn es Probleme gibt" → ___', ['bei Problemen', 'nach Problemen', 'trotz Problemen'], 0),
        gap('Kemmel', 'nachdem das Projekt abgeschlossen war → nach ___ Abschluss ___ Projekts', ['dem', 'des']),
        gap('Kemmel', 'um die Qualität zu verbessern → zur ___ der Qualität', 'Verbesserung'),
        choice('"Vor Beginn der Sitzung" b Verbalstil =', ['Bevor die Sitzung beginnt', 'Nachdem die Sitzung begonnen hat', 'Während die Sitzung beginnt'], 0),
        explain(
          'Nomen-Verb-Verbindungen',
          md`
            Smiya + fi3l "khawi" — l-ma3na f **s-smiya**. Katkhdem bzaf f l-lougha r-rasmiya:

            | Nomen-Verb-Verbindung | = Fi3l basit |
            |---|---|
            | eine Entscheidung **treffen** | entscheiden |
            | eine Frage **stellen** | fragen |
            | einen Vorschlag **machen** | vorschlagen |
            | Kritik **üben** (an + Dat) | kritisieren |
            | in Frage **kommen** | möglich sein |
            | zur Verfügung **stehen / stellen** | verfügbar sein / geben |
            | in Kraft **treten** | gültig werden |
            | Rücksicht **nehmen** (auf + Akk) | berücksichtigen |
            | eine Rolle **spielen** | wichtig sein |
            | Bescheid **geben / sagen** | informieren |
            | zur Sprache **bringen** | ansprechen |
            | Abschied **nehmen** (von) | sich verabschieden |
            | in Anspruch **nehmen** | nutzen |
            | Verantwortung **übernehmen** | verantwortlich sein |
            | zum Ausdruck **bringen** | ausdrücken |

            L-ghalat l-ktar: tkhtar fi3l ghalat ("eine Entscheidung ~~machen~~" ✗ → **treffen** ✓).
          `,
          [
            ['Die neue Regelung tritt im Januar in Kraft.', 'L-9anoun j-jdid ghadi yebda f l-3amal f Janvier.'],
            ['Für Fragen stehe ich Ihnen gern zur Verfügung.', 'Ana rhen l-ichara dyalkom l l-as2ila.'],
          ],
        ),
        match('Rbet l-fi3l', [
          ['eine Entscheidung', 'treffen'],
          ['eine Frage', 'stellen'],
          ['in Kraft', 'treten'],
          ['eine Rolle', 'spielen'],
          ['Rücksicht', 'nehmen'],
        ]),
        choice('"Wir müssen bis Freitag eine Entscheidung ___."', ['machen', 'treffen', 'geben'], 1),
        choice('"Das Thema Gehalt habe ich in der Besprechung zur Sprache ___."', ['gebracht', 'gestellt', 'genommen'], 0),
        gap('Kemmel', 'Ich stehe Ihnen für Rückfragen gern zur ___.', 'Verfügung|Verfuegung'),
        order('Rtteb', 'Die neue Regelung tritt am ersten Januar in Kraft.'),
        graded(choice('"obwohl sie krank war" → ___', ['trotz ihrer Krankheit', 'wegen ihrer Krankheit', 'bei ihrer Krankheit'], 0)),
        graded(choice('"bei schlechtem Wetter" =', ['wenn das Wetter schlecht ist', 'obwohl das Wetter schlecht ist', 'nachdem das Wetter schlecht war'], 0)),
        graded(gap('Kemmel', 'Die Firma führt neue Arbeitszeiten ein. → die ___ neuer Arbeitszeiten', 'Einführung|Einfuehrung')),
        graded(choice('"eine Frage ___"', ['stellen', 'machen', 'treffen'], 0)),
        graded(choice('"Das kommt nicht in Frage." =', ['Das ist nicht möglich.', 'Das ist eine Frage.', 'Das ist wichtig.'], 0)),
        graded(choice('"Geld spielt für mich keine große ___."', ['Rolle', 'Frage', 'Kraft'], 0)),
        graded(translate("Terjem l Nominalstil", 'Nachdem wir angekommen waren, …', ['Nach unserer Ankunft', 'Nach unserer Ankunft …', 'Nach der Ankunft'])),
        summary(
          [
            'Nominalstil: fi3l → smiya (**-ung, Infinitiv, Beginn, Ankunft …**), fa3il → **Genitiv / durch**.',
            'weil → **wegen** · obwohl → **trotz** · nachdem → **nach** · wenn → **bei** · um … zu → **zur / zum** · indem → **durch**.',
            'Nomen-Verb: **eine Entscheidung treffen, in Frage kommen, in Kraft treten, zur Verfügung stehen, eine Rolle spielen …**',
          ],
          ['T7awwel bin Verbal- o Nominalstil', 'Tkhdem Nomen-Verb-Verbindungen'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Die Vier-Tage-Woche — Bericht & Stellungnahme',
      description: 'T9ra t9rir 3la tajriba d 4 iyyam, tsme3 podcast 3la l-burnout, o tkteb Stellungnahme l l-idara.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem t9rir fih nata2ij o ar9am', 'Tfhem podcast 3la s-s7a n-nafsiya f l-khedma', 'Tkteb Stellungnahme b uslub rasmi'],
      steps: [
        intro(
          'Weniger arbeiten, mehr schaffen?',
          'Dr. Kessler sifttat l l-équipe t9rir 3la tajriba d 4-Tage-Woche f charikat almaniya. Salma khassha tkteb Stellungnahme b smiyt l-équipe.',
          ['T9ra t-t9rir', 'Tsme3 l-podcast', 'Tkteb Stellungnahme'],
        ),
        reading(
          'Pilotprojekt: Vier Tage arbeiten bei vollem Lohn',
          md`
            Im Rahmen eines Pilotprojekts haben rund 45 deutsche Unternehmen ein halbes Jahr lang die Vier-Tage-Woche getestet – bei gleichem Gehalt. Die Ergebnisse der begleitenden Untersuchung sind überwiegend positiv.

            Die Mehrheit der Beschäftigten berichtete von **weniger Stress** und einer **besseren Gesundheit**. Auch die Zahl der Krankheitstage ging leicht zurück. Die Produktivität blieb in den meisten Betrieben stabil – nicht zuletzt dank der Einführung kürzerer Meetings und klarer Prioritäten.

            Allerdings eignet sich das Modell nicht für jede Branche. In der Pflege oder im Einzelhandel, wo Personal vor Ort sein muss, ist die Umsetzung schwierig. Hier würde eine Verkürzung der Arbeitszeit angesichts des Fachkräftemangels zusätzliches Personal erfordern.

            Die Mehrheit der teilnehmenden Unternehmen will das Modell nach Ende der Testphase in irgendeiner Form beibehalten. Kritiker warnen jedoch davor, die Ergebnisse zu verallgemeinern: An dem Projekt hätten vor allem Firmen teilgenommen, die ohnehin offen für neue Arbeitsmodelle seien.
          `,
          {
            text: '9ra t-t9rir o jaweb.',
            glossary: [
              ['im Rahmen + Gen.', 'f itar'],
              ['überwiegend', 'f l-ghalib'],
              ['die Beschäftigten', 'l-mowadhafin / l-khddama'],
              ['zurückgehen', 'n9es'],
              ['sich eignen für', 'yslah l'],
              ['beibehalten', 'b9a 3la / 7afedh 3la'],
              ['verallgemeinern', '3emmem'],
              ['ohnehin', 'deja / f kol 7al'],
            ],
          },
        ),
        choice('Chno kanet n-natija l-3amma?', ['Salbiya', 'F l-ghalib ijabiya', 'Ma kaynach natija'], 1),
        choice('3lach l-montijiya b9at thabta?', ['7it khdmou s-sa3at z-za2ida', 'B r-réunions l-9sira o l-awlawiyat l-wad7a', '7it khddmou nas jdad'], 1),
        choice('F ach men 9ita3 s3ib t-tatbi9?', ['IT', 'T-tamrid o l-bi3 b t-tafsil', 'L-bank'], 1),
        choice('Chno kay9oulou l-montaqidin?', ['L-charikat li charkou kanou deja monfat7in', 'L-mowadhafin kdbou', 'L-flous tl3at'], 0),
        listening(
          'Podcast: Wenn der Job krank macht',
          [
            ['Moderator', 'Frau Dr. Lorenz, die Zahl der Krankschreibungen wegen psychischer Erkrankungen ist in den letzten Jahren deutlich gestiegen. Woran liegt das?', 'Dr. Lorenz, 3adad chahadat l-mard bsbab l-amrad n-nafsiya tla3 bzaf f s-snin l-akhira. 3lach?'],
            ['Dr. Lorenz', 'Zum einen sprechen die Menschen heute offener darüber – das ist positiv. Zum anderen nehmen Arbeitsdichte und ständige Erreichbarkeit zu.', 'Men jiha, n-nas daba kayhdrou 3la hadchi b infita7 ktar — o hadchi mzyan. Men jiha khra, d-dagh d l-khedma o l-wjoub dyal l-ittisal dima kayzidou.'],
            ['Moderator', 'Woran erkennt man ein Burnout?', 'Kifach kat3ref l-burnout?'],
            ['Dr. Lorenz', 'Typisch ist eine tiefe Erschöpfung, die auch nach dem Urlaub nicht verschwindet. Dazu kommen Zynismus gegenüber der Arbeit und das Gefühl, nichts mehr zu schaffen.', 'Ghaliban kayn ta3ab 3mi9 ma kaymchich 7ta men b3d l-3otla. O zid 3lih s-sokhriya men l-khedma o l-i7sas belli ma b9iti kat9der t-dir walou.'],
            ['Moderator', 'Was können Arbeitgeber tun?', 'Chno y9dro ydirou l-mochaghghilin?'],
            ['Dr. Lorenz', 'Klare Regeln zur Erreichbarkeit einführen, zum Beispiel keine E-Mails nach 19 Uhr. Und Führungskräfte schulen, damit sie Warnsignale früh erkennen und das Thema zur Sprache bringen.', 'Ydirou 9awanin wad7a 3la l-ittisal, mathalan bla emails men b3d 19:00. O ykawnou l-mas2oulin bach y3rfou l-icharat bekri o yftt7ou l-mawdou3.'],
          ],
        ),
        choice('Ach men jouj asbab kat3ti Dr. Lorenz?', ['N-nas kayhdrou ktar + d-dagh o l-ittisal dima kayzidou', 'L-ajour 9lal + l-bard', 'L-home office + l-mounakh'], 0),
        choice('Ach men 3alama d l-burnout?', ['Ta3ab ma kaymchich 7ta b l-3otla', 'Chwiya d n-n3as', 'L-ju3'], 0),
        choice('Chno kat9tare7 l l-mochaghghilin?', ['Ykhlsou ktar', '9awanin 3la l-ittisal o t-tadrib d l-mas2oulin', 'Ysedou l-bureau'], 1),
        pron(
          'Kalimat twila b -ung',
          'F -ung, l-accent ma kaymchich l "-ung" — kayb9a f l-fi3l l-asli. "ng" katnte9 b7al "ng" f "parking" (bla g wad7a).',
          [
            ['die Einführung – die Verbesserung', 'l-accent 3la "Ein" o "bes"'],
            ['die Umsetzung – die Vereinbarung', 'l-accent 3la "Um" o "ein"'],
            ['die Arbeitszeitverkürzung', 'l-accent 3la "Ar"'],
          ],
        ),
        explain(
          'Stellungnahme (rasmiya)',
          md`
            1. **Anlass:** "Bezugnehmend auf Ihre E-Mail vom … möchten wir im Namen des Teams Stellung nehmen."
            2. **Zustimmung:** "Wir begrüßen grundsätzlich …"
            3. **Bedenken:** "Allerdings haben wir Bedenken hinsichtlich …" — "Problematisch erscheint uns …"
            4. **Vorschlag:** "Wir schlagen daher vor, …" — "Denkbar wäre auch …"
            5. **Abschluss:** "Für ein Gespräch stehen wir Ihnen gern zur Verfügung."

            Khdem **Nominalstil** b 3a9l: 2–3 Nomen-Verb-Verbindungen kafyin.
          `,
        ),
        write(
          'Stellungnahme l l-idara',
          md`
            L-idara kat9tare7 4-Tage-Woche (4 × 10 sa3at) l DataNova. Kteb Stellungnahme b smiyt l-équipe (~150 kelma): chno 3jebkom, chno l-makhawif (mathalan 10 sa3at f n-nhar, l-clients nhar l-jem3a), o 9tira7 dyalkom.
            Khdem Nominalstil (bei, nach, zur …) o 3 Nomen-Verb-Verbindungen.
          `,
          ['Anlass (Bezugnehmend auf …)', 'Zustimmung (Wir begrüßen …)', 'Bedenken (hinsichtlich …)', 'Vorschlag (Wir schlagen vor …)', 'Abschluss (zur Verfügung stehen)'],
          'Sehr geehrte Frau Dr. Kessler,\n\nbezugnehmend auf Ihre E-Mail vom 3. März möchten wir im Namen des Analytics-Teams zur geplanten Einführung der Vier-Tage-Woche Stellung nehmen.\n\nWir begrüßen den Vorschlag grundsätzlich, da er zur Verbesserung der Work-Life-Balance beitragen würde. Viele Kolleginnen und Kollegen erhoffen sich dadurch mehr Zeit für Familie und Erholung.\n\nAllerdings haben wir Bedenken hinsichtlich der täglichen Arbeitszeit von zehn Stunden. Nach acht Stunden lässt die Konzentration erfahrungsgemäß deutlich nach. Außerdem muss bei Anfragen von Kunden auch freitags jemand erreichbar sein.\n\nWir schlagen daher vor, die Wochenarbeitszeit auf 36 Stunden zu reduzieren und den freien Tag im Team abzusprechen. So wäre eine ausreichende Besetzung an allen Tagen gewährleistet.\n\nFür ein Gespräch stehen wir Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nSalma El Idrissi\n(im Namen des Analytics-Teams)',
          120,
        ),
        graded(choice('"überwiegend" =', ['f l-ghalib', 'abadan', 'nadiran'], 0)),
        graded(choice('"sich eignen für" =', ['yslah l', 'yrfed', 'ykhaf men'], 0)),
        graded(choice('F Stellungnahme, "Bedenken" homa…', ['L-makhawif / t-ta7affodhat', 'L-ijabiyat', 'L-ar9am'], 0)),
        graded(dictation('Sme3 o kteb', 'Wir haben Bedenken hinsichtlich der täglichen Arbeitszeit.')),
        summary(
          [
            'T-t9rir: **im Rahmen, überwiegend, die Beschäftigten, sich eignen für, beibehalten, verallgemeinern**.',
            'Stellungnahme: **Bezugnehmend auf … — Wir begrüßen … — Bedenken hinsichtlich … — Wir schlagen vor … — zur Verfügung stehen**.',
          ],
          ['Tfhem t9rir', 'Tfhem podcast 3la l-burnout', 'Tkteb Stellungnahme'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 2',
      description: 'Muraja3a: 3alam l-khedma, Nominalstil, Nomen-Verb-Verbindungen — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Nominal- o Verbalstil', 'Traja3 Nomen-Verb-Verbindungen', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Ch-chorout d l-khedma, Nominalstil o Nomen-Verb-Verbindungen.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - weil → **wegen** · obwohl → **trotz** · nachdem → **nach** · wenn → **bei** · um … zu → **zur** · indem → **durch**
            - **eine Entscheidung treffen · eine Frage stellen · in Kraft treten · zur Verfügung stehen · Rücksicht nehmen auf**
          `,
        ),
        dialogue(
          'Nach der Entscheidung',
          [
            ['Jonas', 'Hast du schon gehört? Die Geschäftsführung hat eine Entscheidung getroffen.', 'Sme3ti? L-idara khdat qarar.'],
            ['Salma', 'Und? Kommt die Vier-Tage-Woche?', 'Iwa? Wach ghadi tji simana d 4 iyyam?'],
            ['Jonas', 'Ja, als Test. Nach Abschluss der Testphase im Herbst wird sie überprüft. Sie haben unseren Vorschlag mit den 36 Stunden übernommen!', 'Ah, b7al tajriba. Men b3d ma tsali f l-khrif ghadi ydirou t-ta9yim. O khdaw b 9tira7na d 36 sa3a!'],
            ['Salma', 'Super! Dann hat sich die Stellungnahme ja gelohnt.', 'Wa3r! Iwa l-Stellungnahme stahlat.'],
            ['Jonas', 'Ab wann tritt das Ganze in Kraft?', 'Men imta ghadi yebda f l-3amal?'],
            ['Salma', 'Ab dem ersten April.', 'Men l-lowel d April.'],
          ],
        ),
        choice('Imta ghadi ydirou t-ta9yim?', ['F April', 'Men b3d t-tajriba f l-khrif', 'Daba'], 1),
        choice('Chno khdat l-idara?', ['40 sa3a', '9tira7 d 36 sa3a', 'Walou'], 1),
        gap('Kemmel', 'Die Geschäftsführung hat eine Entscheidung ___. Die Regel ___ im April in Kraft.', ['getroffen', 'tritt']),
        match('Verbal → Nominal', [
          ['weil es regnet', 'wegen des Regens'],
          ['obwohl es regnet', 'trotz des Regens'],
          ['wenn es regnet', 'bei Regen'],
          ['nachdem es geregnet hat', 'nach dem Regen'],
        ]),
        speak(
          'Diskussion: Homeoffice — ja oder nein?',
          '3ti ra2yek f l-home office: jouj ijabiyat, jouj salbiyat, o 9tira7 d 7all wost. Khdem jouj Nomen-Verb-Verbindungen.',
          ['Für mich spielt Flexibilität eine große Rolle.', 'Im Homeoffice spare ich mir den langen Arbeitsweg.', 'Allerdings leidet die Zusammenarbeit, wenn man sich selten sieht.', 'Ich würde deshalb vorschlagen, feste Teamtage einzuführen.'],
        ),
        graded(choice('"wegen der hohen Kosten" =', ['weil die Kosten hoch sind', 'obwohl die Kosten hoch sind', 'wenn die Kosten hoch sind'], 0)),
        graded(choice('"um Energie zu sparen" → "___ Energieeinsparung"', ['zur', 'bei', 'trotz'], 0)),
        graded(gap('Kemmel', 'Vor ___ der Sitzung bitte das Handy ausschalten. (beginnen)', 'Beginn')),
        graded(choice('"Verantwortung ___"', ['übernehmen', 'treffen', 'stellen'], 0)),
        graded(choice('"Kritik ___ an + Dat"', ['üben', 'machen', 'treten'], 0)),
        graded(choice('"Wir müssen auf ältere Kollegen Rücksicht ___."', ['nehmen', 'geben', 'stellen'], 0)),
        graded(choice('"Die Arbeitsbedingungen" =', ['chorout l-khedma', 's-sa3at z-za2ida', 'l-mochaghghil'], 0)),
        graded(choice('"die Gleitzeit" =', ['l-we9t l-moroun', 'l-3otla', 'l-we9t d l-lil'], 0)),
        graded(translate("Terjem l Verbalstil", 'Bei Fragen rufen Sie uns an.', ['Wenn Sie Fragen haben, rufen Sie uns an.', 'Falls Sie Fragen haben, rufen Sie uns an.'])),
        graded(dictation('Sme3 o kteb', 'Die neue Regelung tritt am ersten April in Kraft.')),
        summary(
          [
            'Daba t9der tnaqech chorout l-khedma, tfawed, o tkteb Stellungnahme rasmiya.',
            'F l-unité 3: l-i3lam o l-akhbar — **Konjunktiv I** (l-kalam l-ghayr moubachir).',
          ],
          ['Tnaqech l-khedma', 'T7awwel bin Verbal- o Nominalstil', 'Tkhdem Nomen-Verb-Verbindungen', 'Tkteb Stellungnahme'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
