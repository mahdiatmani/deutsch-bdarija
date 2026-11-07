import { choice, explain, gap, graded, intro, md, reading, speak, summary, unit, write } from '../dsl';

export default unit({
  level: 'A1',
  number: 13,
  title: 'Prüfungstraining A1',
  description: "Tdrib 3la l-imti7an dyal A1 (Goethe Start Deutsch 1 / telc Deutsch A1): sme3, 9raya, kitaba o hedra — b strategiyat o tamarin jdad.",
  icon: 'workspace_premium',
  objectives: [
    'T3ref chno kayn f l-imti7an dyal A1 o ch7al d l-wa9t',
    'Tkhdem strategiyat f s-sme3 o l-9raya',
    'T3emmer formulaire o tkteb message 9sir b 3 no9at',
    'T9eddem rasek, tsowwel o tjaweb, o ttleb chi 7aja f l-imti7an chafahi',
  ],
  lessons: [
    // ───────────────────────── Lesson 1: Hören ─────────────────────────
    {
      title: 'Hören — Tdrib 3la s-sme3',
      description: 'Strategiyat dyal s-sme3 o tamarin b7al l-imti7an: hiwarat 9sar, i3lanat, o messages f t-tilifoun.',
      minutes: 25,
      kind: 'exam',
      goals: ['T3ref l-ajza2 dyal s-sme3 f A1', '9ra s-sou2al 9bel ma tsme3', 'Tl9a l-ma3louma l-mohimma (ra9m, sa3a, blasa)'],
      steps: [
        intro(
          'L-imti7an dyal A1',
          md`
            L-imti7an dyal A1 (Goethe **Start Deutsch 1** wla **telc Deutsch A1**) fih **4 ajza2**:

            | Jouz2 | Wa9t (ta9riban) | Chno kaydir |
            |---|---|---|
            | **Hören** (sme3) | ~20 d9i9a | hiwarat 9sar, i3lanat, messages |
            | **Lesen** (9raya) | ~25 d9i9a | emails, annonces, lafitat |
            | **Schreiben** (kitaba) | ~20 d9i9a | formulaire + message 9sir |
            | **Sprechen** (hedra) | ~15 d9i9a | f groupe: t9dim, sou2al/jawab, talab |

            Bach tnje7 khassek **60 %** men n-no9at. F had l-unité ghadi ntmrnou 3la kol jouz2 b tamarin jdad.
          `,
          ['T3ref l-imti7an', 'Tkhdem strategiyat', 'Ttmrren'],
        ),
        explain(
          'Strategiyat dyal Hören',
          md`
            1. **9ra s-sou2al o l-ikhtiyarat 9BEL ma tsme3.** 3ref chno kat9elleb 3lih: sa3a? ra9m? blasa? taman?
            2. **Ma t7awelch tfhem kol kelma.** Rkkez ghir 3la l-ma3louma li khassek.
            3. **Rd l-bal l t-tbdil:** bzaf d l-merrat kaygoulou ra9m o men b3d kaybeddlouh: "Um drei? — **Nein, um vier.**"
            4. F l-imti7an kat-sme3 kol text **jouj d l-merrat** (f l-jouz2 2 merra wa7da). Hna t9der tsme3 ch7al ma bghiti.
            5. Ila ma 3reftich, **khtar chi jawab** — ma tkhellich l-blasa khawya.
          `,
          undefined,
          'Ra9m o sa3a houma a ktar 7aja kaysowlou 3liha f A1. Raja3 "halb drei" (= 2:30) o 13/30!',
        ),
        explain('Teil 1: Kurze Gespräche', 'Ghadi tsme3 hiwar 9sir. Khtar l-jawab s-s7i7 (a, b wla c). Kliki 3la ▶ bach tsme3.'),
        graded(choice(
          'Wann fährt der Bus?',
          ['13:40 Uhr', '14:20 Uhr', '14:40 Uhr'],
          1,
          '"Um 13:40? — Nein, der fährt um 14:20." — t-tbdil!',
          { audio: 'Entschuldigung, wann fährt der Bus nach Ehrenfeld? Um 13 Uhr 40? — Nein, der ist schon weg. Der nächste fährt um 14 Uhr 20.' },
        )),
        graded(choice(
          'Was kauft die Frau?',
          ['Äpfel und Bananen', 'Tomaten und Käse', 'Äpfel und Käse'],
          2,
          '"Bananen habe ich noch" — ma chratch l-banan.',
          { audio: 'Guten Tag, ich hätte gern ein Kilo Äpfel. — Gern. Sonst noch etwas? Bananen? — Nein, Bananen habe ich noch. Aber 200 Gramm Käse, bitte.' },
        )),
        graded(choice(
          'Wo treffen sich die zwei?',
          ['Am Bahnhof', 'Vor dem Kino', 'Im Café'],
          1,
          '"Nicht am Bahnhof, … Vor dem Kino ist besser."',
          { audio: 'Treffen wir uns am Bahnhof? — Nein, nicht am Bahnhof, da ist es so voll. Vor dem Kino ist besser. — Okay, um sieben vor dem Kino.' },
        )),
        graded(choice(
          'Wie viel kostet die Jacke jetzt?',
          ['49 Euro', '69 Euro', '99 Euro'],
          0,
          '"Normal 99, heute 50 Euro billiger" → 49.',
          { audio: 'Die Jacke ist schön. Was kostet sie? — Normal kostet sie 99 Euro, aber heute ist sie 50 Euro billiger.' },
        )),
        explain('Teil 2: Durchsagen', 'Ghadi tsme3 i3lan (f lagar, f s-supermarché…). Goul wach l-jomla **richtig** (s7i7a) wla **falsch** (ghalta).'),
        graded(choice(
          'Der Zug nach Dortmund fährt heute von Gleis 9.',
          ['Richtig', 'Falsch'],
          1,
          'L-i3lan: "nicht von Gleis 9, sondern von Gleis 11".',
          { audio: 'Achtung, eine Gleisänderung: Der Regionalexpress nach Dortmund, Abfahrt 16 Uhr 05, fährt heute nicht von Gleis 9, sondern von Gleis 11.' },
        )),
        graded(choice(
          'Der Supermarkt schließt in 15 Minuten.',
          ['Richtig', 'Falsch'],
          0,
          undefined,
          { audio: 'Liebe Kundinnen und Kunden, unser Markt schließt in fünfzehn Minuten. Bitte kommen Sie zur Kasse. Vielen Dank für Ihren Einkauf!' },
        )),
        explain('Teil 3: Nachrichten am Telefon', 'Ghadi tsme3 message f r-répondeur. Khtar l-jawab s-s7i7.'),
        graded(choice(
          'Wann ist der neue Termin beim Zahnarzt?',
          ['Am Dienstag um 9 Uhr', 'Am Donnerstag um 10:30 Uhr', 'Am Donnerstag um 9:30 Uhr'],
          1,
          '"Donnerstag … um halb elf" = 10:30.',
          { audio: 'Guten Tag, Herr Benali, hier ist die Zahnarztpraxis Dr. Klein. Ihren Termin am Dienstag um neun Uhr müssen wir leider absagen. Können Sie am Donnerstag kommen, um halb elf? Bitte rufen Sie uns zurück. Danke!' },
        )),
        graded(choice(
          'Was soll Youssef mitbringen?',
          ['Getränke', 'Brot', 'Musik'],
          0,
          '"Kannst du etwas zu trinken mitbringen?"',
          { audio: 'Hallo Youssef, hier ist Lukas. Die Party ist am Samstag ab acht. Wir haben genug Essen, aber kannst du etwas zu trinken mitbringen? Saft oder Cola vielleicht. Bis dann!' },
        )),
        summary(
          [
            '9ra s-sou2al **9bel** ma tsme3.',
            'Rd l-bal l **t-tbdil**: "Um drei? — Nein, um vier."',
            'Rkkez 3la **r-ra9m, s-sa3a, l-blasa, t-taman**.',
          ],
          ['T3ref l-ajza2 dyal Hören', 'Tl9a l-ma3louma l-mohimma f text masmou3'],
          'Khlasa: Hören',
        ),
      ],
    },

    // ───────────────────────── Lesson 2: Lesen ─────────────────────────
    {
      title: 'Lesen — Tdrib 3la l-9raya',
      description: 'Strategiyat dyal l-9raya o tamarin: emails 9sar, annonces, o lafitat.',
      minutes: 25,
      kind: 'exam',
      goals: ['T9ra b sor3a o tl9a l-ma3louma', 'Tkhtar l-annonce li mnasba', 'Tfhem l-lafitat (Schilder)'],
      steps: [
        intro(
          'Lesen f A1',
          'F l-9raya kayn 3 ajza2: **emails / messages 9sar** (richtig/falsch), **jouj annonces** (khtar l-mnasba), o **lafitat** f l-mdina (richtig/falsch). Ma khassekch tfhem kolchi: khassek tl9a l-ma3louma.',
          ['T9ra b strategiya', 'Tkhtar l-annonce', 'Tfhem l-lafitat'],
        ),
        explain(
          'Strategiyat dyal Lesen',
          md`
            1. **9ra s-sou2al lowel**, men b3d 9elleb f n-nass 3la l-kalimat l-mohimma (*selektives Lesen*).
            2. Rd l-bal l **nicht, kein, nur, schon, noch** — kaybeddlou l-ma3na kamel!
            3. F l-annonces: chouf **l-wa9t, t-taman, l-blasa, chkoun** (l chkoun l-3ard?).
            4. Ma tb9ach bzaf f sou2al wa7ed: ~1 d9i9a l kol sou2al.
          `,
        ),
        reading(
          'Teil 1: Eine E-Mail',
          md`
            Hallo Olena,

            wie geht es dir? Ich bin jetzt in meiner neuen Wohnung! Sie ist nicht groß, aber sehr hell. Am Samstag mache ich eine kleine Party. Kommst du? Wir beginnen um 19 Uhr. Youssef und Mehmet kommen auch. Du musst nichts mitbringen, ich koche Couscous!
            Meine Adresse: Lindenstraße 8, dritter Stock.

            Liebe Grüße
            Salma
          `,
          { text: '9ra l-email o men b3d goul: richtig wla falsch.' },
        ),
        graded(choice('Salmas Wohnung ist groß und hell.', ['Richtig', 'Falsch'], 1, '"Sie ist **nicht** groß, aber sehr hell."')),
        graded(choice('Die Party beginnt am Samstagabend.', ['Richtig', 'Falsch'], 0, '"Am Samstag … um 19 Uhr."')),
        graded(choice('Olena soll etwas zu essen mitbringen.', ['Richtig', 'Falsch'], 1, '"Du musst nichts mitbringen."')),
        explain(
          'Teil 2: Welche Anzeige passt?',
          'Kol sou2al fih **jouj annonces (a / b)**. 9ra s-sou2al o khtar l-annonce li katjaweb 3lih.',
        ),
        graded(choice(
          'Sie möchten am Sonntag schwimmen gehen. Welches Schwimmbad?',
          ['a) Hallenbad Nord: Mo–Fr 7–21 Uhr, Sa 9–18 Uhr', 'b) Stadtbad Süd: täglich 8–20 Uhr, auch an Sonn- und Feiertagen'],
          1,
          '"täglich … auch an Sonntagen".',
        )),
        graded(choice(
          'Sie suchen einen Deutschkurs am Abend. Welche Schule?',
          ['a) Sprachschule Lingua: Intensivkurs A2, Mo–Fr, 9–12:30 Uhr', 'b) VHS Köln: Deutsch A2, Di + Do, 18–20:15 Uhr'],
          1,
          'Abend = 18–20:15.',
        )),
        graded(choice(
          'Sie brauchen ein billiges Fahrrad. Wo?',
          ['a) Fahrradladen Schmidt: neue E-Bikes ab 1.899 €', 'b) Flohmarkt am Samstag: gebrauchte Fahrräder ab 40 €'],
          1,
        )),
        explain('Teil 3: Schilder', 'Chouf l-lafita (s-schild) o goul wach l-jomla s7i7a (Richtig) wla ghalta (Falsch).'),
        graded(choice(
          'Am Praxis-Eingang: „Praxis Dr. Hoffmann — Mittwochnachmittag geschlossen." — Sie können am Mittwoch um 15 Uhr zum Arzt gehen.',
          ['Richtig', 'Falsch'],
          1,
          '"Mittwochnachmittag geschlossen" = msdoud l-larb3 f l-3chiya.',
        )),
        graded(choice(
          'Im Supermarkt: „Pfandautomat defekt — bitte Flaschen an der Kasse abgeben." — Sie können Ihre Flaschen heute zurückgeben.',
          ['Richtig', 'Falsch'],
          0,
          'T9der traje3hom f l-caisse.',
        )),
        graded(choice(
          'Am Bahnhof: „Fahrkarten nur am Automaten. Der Schalter ist ab 1. März geschlossen." — Im April können Sie am Schalter eine Fahrkarte kaufen.',
          ['Richtig', 'Falsch'],
          1,
        )),
        summary(
          [
            '9ra s-sou2al lowel, men b3d 9elleb f n-nass.',
            'Rd l-bal l **nicht / kein / nur / noch / schon**.',
            'F l-annonces: **imta, b ch7al, fin, l chkoun**.',
          ],
          ['T9ra email o tfhem t-tafasil', 'Tkhtar l-annonce l-mnasba', 'Tfhem l-lafitat'],
          'Khlasa: Lesen',
        ),
      ],
    },

    // ───────────────────────── Lesson 3: Schreiben ─────────────────────────
    {
      title: 'Schreiben — Formular & kurze Nachricht',
      description: 'T3emmer formulaire men text, o tkteb message 9sir fih 3 no9at.',
      minutes: 25,
      kind: 'exam',
      goals: ['T3emmer formulaire b l-ma3loumat men text', 'Tkteb message (~30 kelma) b 3 no9at', 'Tkhdem salam o twadi3 mnasbin'],
      steps: [
        intro(
          'Schreiben f A1',
          md`
            **Teil 1:** kat9ra text 9sir 3la chi wa7ed, o kat3emmer **5 no9at** f formulaire.
            **Teil 2:** katkteb **message** (~30 kelma) l sa7bek wla chi mo2assasa. Kayt3tawk **3 no9at** — khassek tktebhom **kamlin**.
          `,
          ['T3emmer formulaire', 'Tkteb message b 3 no9at'],
        ),
        reading(
          'Teil 1: Information',
          md`
            Ihre Freundin Amal Tazi möchte im Sportverein „FC Köln-Süd" Mitglied werden. Sie hilft ihr beim Formular.

            Amal ist 27 Jahre alt (geboren am 3. Februar 1999 in Agadir) und wohnt mit ihrem Mann Karim in der Bonner Straße 14 in 50677 Köln. Sie möchte Volleyball spielen, am liebsten am Wochenende. Sie bezahlt den Beitrag mit Überweisung, nicht bar.
          `,
          { text: '9ra l-ma3loumat, o men b3d 3emmer l-formulaire.' },
        ),
        graded(gap('Formular — Familienstand', 'Familienstand: ___', 'verheiratet', '"mit ihrem Mann Karim" → verheiratet.')),
        graded(gap('Formular — Geburtsort', 'Geburtsort: ___', 'Agadir')),
        graded(gap('Formular — Postleitzahl', 'PLZ / Wohnort: ___ Köln', '50677')),
        graded(gap('Formular — Sportart', 'Sportart: ___', 'Volleyball')),
        graded(choice('Formular — Zahlung', ['bar', 'Überweisung'], 1)),
        explain(
          'Teil 2: Die kurze Nachricht',
          md`
            **Kifach tkteb message mzyan:**

            1. **Salam mnasb:** sa7bek → "Liebe Salma, / Lieber Lukas, / Hallo …," — rasmi → "Sehr geehrte Damen und Herren, / Liebe Frau Weber,"
            2. **No9ta 1, 2, 3** — kol no9ta f jomla wla jouj. **Ma tnsa 7ta no9ta!**
            3. **Twadi3:** "Viele Grüße / Liebe Grüße" (sa7bek) — "Mit freundlichen Grüßen" (rasmi) + **s-smiya**.

            **Jmel nafi3a:** "Vielen Dank für …", "Leider kann ich nicht …, denn …", "Können Sie mir bitte … schicken?", "Ich möchte … (an)melden / absagen.", "Bitte antworten Sie bald."

            **Mital (3 no9at: 3lach ma ghadich tji l l-cours — tleb l-wajib — goul imta traje3):**
            > Liebe Frau Weber, leider kann ich morgen nicht in den Kurs kommen, denn ich habe einen Termin beim Arzt. Können Sie mir bitte die Hausaufgaben schicken? Am Donnerstag bin ich wieder da. Viele Grüße, Youssef
          `,
        ),
        write(
          'Aufgabe A',
          md`
            Sa7bek **Mehmet** std3ak l l-mariage dyalou f **5 juillet**. Kteb lih message (~30 kelma):
            - **Chkkerou** o **barek lih**.
            - Goul wach **ghadi tji** (o m3a chkoun).
            - **Sowwel**: chno t9der tjib wla t3awen bih?
          `,
          ['Lieber Mehmet,', 'Danke + Herzlichen Glückwunsch', 'Ich komme gern (mit …)', 'Sou2al: Was kann ich mitbringen? / Kann ich helfen?', 'Viele Grüße + smiya'],
          'Lieber Mehmet,\n\nvielen Dank für die Einladung und herzlichen Glückwunsch! Ich komme sehr gern, und meine Freundin Salma kommt auch mit. Kann ich etwas mitbringen oder dir bei der Vorbereitung helfen?\n\nViele Grüße\nYoussef',
          30,
        ),
        write(
          'Aufgabe B (rasmi)',
          md`
            Nta msjjel f cours d l-yoga f l-VHS, walakin ma ghadich t9der tmchi. Kteb email rasmi (~30 kelma):
            - Goul belli **ma ghadich tji** o **3lach**.
            - Sowwel wach t9der **tbeddel l cours akhor**.
            - Tleb **jawab**.
          `,
          ['Sehr geehrte Damen und Herren,', 'Leider kann ich …, denn …', 'Kann ich einen anderen Kurs …?', 'Bitte antworten Sie mir.', 'Mit freundlichen Grüßen + smiya'],
          'Sehr geehrte Damen und Herren,\n\nleider kann ich den Yogakurs am Montagabend nicht besuchen, denn ich arbeite jetzt bis 20 Uhr. Kann ich einen anderen Kurs am Wochenende machen? Bitte antworten Sie mir bald.\n\nMit freundlichen Grüßen\nSalma El Idrissi',
          30,
        ),
        graded(choice('L sa7bek katbda l-message b…', ['Sehr geehrte Damen und Herren,', 'Lieber Lukas,', 'Mit freundlichen Grüßen'], 1)),
        graded(choice('Ch7al men no9ta khassek tkteb f Teil 2?', ['Ghir wa7da', 'Kol t-tlata', 'Jouj ila bghiti'], 1)),
        summary(
          [
            'Formulaire: **9ra mzyan** — l-ma3louma ghaliban machi mktouba b nefs l-kelma ("mit ihrem Mann" → verheiratet).',
            'Message: **salam + 3 no9at + twadi3**. ~30 kelma.',
            'Rasmi: **Sehr geehrte … / Mit freundlichen Grüßen**. Sa7bek: **Liebe/r … / Viele Grüße**.',
          ],
          ['T3emmer formulaire', 'Tkteb message rasmi o ghir rasmi'],
          'Khlasa: Schreiben',
        ),
      ],
    },

    // ───────────────────────── Lesson 4: Sprechen ─────────────────────────
    {
      title: 'Sprechen — & Abschlusstest A1',
      description: 'T9dim, sou2al o jawab b kartat, talab — o test akhir dyal A1.',
      minutes: 30,
      kind: 'exam',
      goals: ['T9eddem rasek b l-kalimat l-miftahiya', 'Tsowwel o tjaweb 3la mawdou3', 'Ttleb chi 7aja b ladab', 'Tnje7 f t-test l-akhir dyal A1'],
      steps: [
        intro(
          'Sprechen f A1',
          md`
            L-imti7an chafahi kaydar **f groupe** (3–4 d n-nas):
            - **Teil 1:** T9eddem rasek b l-kalimat: *Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?* — men b3d l-moumte7in kaysowlek: sbelli smiytek o goul r-ra9m d t-tilifoun.
            - **Teil 2:** Katjbed karta fiha **mawdou3 + kelma** (ex: *Essen — Frühstück*). Katsowwel s7abek sou2al, o katjaweb 3la sou2alhom.
            - **Teil 3:** Katjbed karta fiha **tswira** (ex: fenêtre). Ttleb chi 7aja b ladab (*Können Sie bitte das Fenster aufmachen?*) o tjaweb 3la talab.
          `,
          ['T9dim', 'Sou2al o jawab', 'Talab b ladab'],
        ),
        speak(
          'Teil 1: Sich vorstellen',
          'Kalimat: **Name? — Alter? — Land? — Wohnort? — Sprachen? — Beruf? — Hobby?** 9eddem rasek b jomla l kol kelma.',
          ['Ich heiße Youssef Benali.', 'Ich bin vierundzwanzig Jahre alt.', 'Ich komme aus Marokko.', 'Ich wohne in Köln.', 'Ich spreche Arabisch, Französisch und ein bisschen Deutsch.', 'Ich mache ein Praktikum im Krankenhaus.', 'Mein Hobby ist Fußball.'],
        ),
        speak(
          'Teil 2: Fragen und Antworten — Thema „Freizeit"',
          md`
            Kartat: **Freizeit — Wochenende** · **Freizeit — Sport** · **Freizeit — Kino**.
            Dir sou2al b kol karta, o jaweb 3la sou2al dyal sa7bek.
          `,
          ['Was machst du am Wochenende?', 'Am Wochenende treffe ich Freunde.', 'Welchen Sport machst du gern?', 'Ich spiele gern Fußball.', 'Gehst du gern ins Kino?', 'Ja, ich gehe oft ins Kino.'],
        ),
        speak(
          'Teil 3: Bitten formulieren',
          'Kartat (tsawer): 🪟 fenêtre · ☕ 9ahwa · ✏️ stylo · 🕐 sa3a. Tleb kol 7aja b ladab, o jaweb 3la talab dyal sa7bek.',
          ['Können Sie bitte das Fenster aufmachen?', 'Ich hätte gern einen Kaffee, bitte.', 'Kannst du mir bitte einen Stift geben? — Ja, hier, bitte.', 'Wie spät ist es, bitte? — Es ist halb drei.'],
        ),
        explain(
          'Abschlusstest A1',
          'Daba test akhir fih mn kolchi: l-grammaire, l-kalimat o l-fahm. Ila jebti **ktar men 60 %**, nta wajed l l-imti7an dyal A1 — o l A2!',
        ),
        graded(choice('"Ich habe ___ Bruder." (der Bruder, wa7ed)', ['ein', 'einen', 'einem'], 1)),
        graded(choice('"Ich fahre ___ U-Bahn zur Arbeit."', ['mit die', 'mit der', 'mit dem'], 1)),
        graded(choice('"Gestern ___ ich ins Kino gegangen."', ['habe', 'bin'], 1)),
        graded(choice('"Der Kurs fängt um halb neun ___."', ['auf', 'an', 'ein'], 1)),
        graded(choice('"Am Sonntag ___ ich nicht arbeiten." (ma khassnich)', ['darf', 'muss', 'will'], 1)),
        graded(choice('"Die Schuhe gefallen ___ nicht." (ana)', ['mich', 'mir', 'ich'], 1)),
        graded(choice('"Ich bleibe zu Hause, ___ ich bin krank."', ['dann', 'denn', 'aber'], 1)),
        graded(gap('Kemmel', 'Wie ___ du? — Ich heiße Olena.', 'heißt|heisst')),
        graded(gap('Kemmel', 'Hast du am Freitag Zeit? — Nein, ___ habe ich keine Zeit.', 'leider|da')),
        graded(choice('"halb sieben" = ch7al?', ['7:30', '6:30', '6:00'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Morgen ich fahre nach Bonn.', 'Morgen fahre ich nach Bonn.', 'Morgen fahre nach Bonn ich.'], 1)),
        graded(choice(
          'Was macht der Mann am Wochenende?',
          ['Er arbeitet.', 'Er besucht seine Eltern.', 'Er spielt Fußball.'],
          1,
          undefined,
          { audio: 'Was machst du am Wochenende? Spielst du wieder Fußball? — Nein, diesmal nicht. Ich fahre zu meinen Eltern nach Hamburg.' },
        )),
        summary(
          [
            'Sprechen: t9dim b l-kalimat, sou2al/jawab b l-kartat, talab b ladab.',
            'Mabrouk! Salit **A1**. Daba t9der tfhem o tsta3mel jmel basita f l-7ayat l-yawmiya f Almaniya.',
            'F **A2** ghadi t7ki 3la l-madi b tafasil, tdir jmel twila (weil, dass, wenn), o tt3amel m3a l-khedma, l-idara o s-sakan.',
          ],
          [
            'T9eddem rasek o thder 3la l-3a2ila, l-khedma o l-hobbies',
            'Tchri, ttleb f l-café, o tsowwel 3la t-tri9',
            'Tdir rendez-vous o tfhem t-tbib',
            'T7ki 3la l-madi b l-Perfekt',
            'Tkteb messages o emails 9sar',
          ],
          'Khlasa dyal A1',
        ),
      ],
    },
  ],
});
