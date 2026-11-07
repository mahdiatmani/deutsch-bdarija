import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 8,
  title: 'Bildung & Mehrsprachigkeit',
  description: "T-ta3lim, l-3adala f l-forass o t-ta3addod l-loughawi — b subjektive Modalverben (soll, will, muss, dürfte) o Futur II.",
  icon: 'translate',
  objectives: [
    'Tnaqech l-3adala f t-ta3lim o l-i3tiraf b ch-chahadat',
    'T7ki 3la t-ta3addod l-loughawi o l-isti3mal dyalou',
    'Tkhdem l-Modalverben l-ma3na "subjectif" (soll, will, muss, kann, dürfte)',
    'Tkhdem Futur II l t-ta9dir f l-madi o l-mosta9bal',
    'Tkteb email rasmi l jami3a wla markaz i3tiraf',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Viele Sprachen, ein Kopf',
      description: 'L-kalimat d t-ta3lim o l-loughat, o kifach t7ki 3la l-biyougraphiya l-loughawiya dyalek.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal t-ta3lim o l-loughat', 'T7ki 3la l-biyougraphiya l-loughawiya dyalek', 'Tnaqech l-faydah d t-ta3addod l-loughawi'],
      steps: [
        intro(
          'Code-Switching',
          'Salma f l-pause kat-hder f t-telephone m3a mmha: Darija, chwiya français, o kelma b l-almaniya f l-wost. Kollegatha Anna stghrbat: "Wie machst du das?"',
          ['L-loughat', 'L-biyougraphiya', 'L-faydah'],
        ),
        dialogue(
          'Wie viele Sprachen sprichst du eigentlich?',
          [
            ['Anna', 'Salma, du hast gerade in drei Sprachen gleichzeitig telefoniert! Wie viele Sprachen sprichst du eigentlich?', 'Salma, daba hdrti f t-telephone b 3 d l-loughat f nefs l-we9t! Ch7al mn lougha kat-hdri?'],
            ['Salma', 'Mit meiner Familie Darija, in der Schule habe ich Hocharabisch und Französisch gelernt, dann Englisch – und jetzt Deutsch. Meine Oma spricht außerdem Tamazight.', 'M3a l-3a2ila Darija, f l-madrasa t3llemt l-3arbiya l-fos7a o l-français, men b3d l-anglais — o daba l-almaniya. O jeddati kat-hder ta Tamazight.'],
            ['Anna', 'Wahnsinn. Ich habe sieben Jahre Französisch in der Schule gehabt und kann kaum einen Kaffee bestellen.', 'Hadchi khayali. Ana 9rit 7 snin français f l-madrasa o bezzaf 3liya ntleb kahwa.'],
            ['Salma', 'Das liegt am Unterricht, nicht an dir. Sprachen lernt man, indem man sie braucht. In Marokko wechseln wir ständig hin und her.', 'Hadchi men t-ta3lim, machi mennek. L-loughat kat-t3llemha mlli kat7tajha. F l-Maghrib kanbddlou dima bin l-loughat.'],
            ['Anna', 'Man sagt ja, mehrsprachige Menschen sollen kreativer sein.', 'Kaygoulou belli n-nas li kayhdrou bzaf d l-loughat kaykounou mobdi3in ktar.'],
            ['Salma', 'Das weiß ich nicht. Aber man lernt jede weitere Sprache leichter – das stimmt bestimmt.', 'Ma n3refch. Walakin kol lougha jdida kat-t3llemha b sohoula ktar — hadchi akid s7i7.'],
          ],
        ),
        vocab('Bildung & Sprachen — T-ta3lim o l-loughat', [
          ['die Muttersprache', 'lougha l-omm', ''],
          ['die Fremdsprache', 'lougha ajnabiya', ''],
          ['mehrsprachig', 'mota3addid l-loughat', ''],
          ['die Bildungschance', 'forsat t-ta3lim', 'die Bildungschancen'],
          ['die Chancengleichheit', 't-tasawi f l-forass', ''],
          ['der Abschluss', 'ch-chahada (l-ikhtitam)', 'die Abschlüsse'],
          ['die Anerkennung', 'l-i3tiraf (b ch-chahada)', ''],
          ['das Studium / studieren', 'd-dirasa l-jami3iya', ''],
          ['die Zulassung', 'l-9obol (f l-jami3a)', ''],
          ['der Studiengang', 'l-ch3ba / l-masar', 'die Studiengänge'],
          ['die Herkunft', 'l-asl', ''],
          ['benachteiligt', 'mhmmach / mdlloum', ''],
          ['fördern', 'chjje3 / d3em', ''],
          ['der Wortschatz', 'r-rasid l-loughawi', ''],
        ]),
        explain(
          'T7ki 3la l-biyougraphiya l-loughawiya',
          md`
            | Bach… | Redemittel |
            |---|---|
            | lougha l-omm | "Meine Muttersprache ist … / Ich bin zweisprachig aufgewachsen." |
            | l-mostawa | "Ich spreche … fließend / verhandlungssicher / auf B2-Niveau." — "Ich habe Grundkenntnisse in …" |
            | kifach t3llemti | "Ich habe … in der Schule gelernt / mir … selbst beigebracht." |
            | l-isti3mal | "Im Alltag benutze ich vor allem …" — "Je nach Situation wechsle ich zwischen …" |
          `,
          [
            ['Ich bin zweisprachig aufgewachsen.', 'Kbert b jouj d l-loughat.'],
            ['Ich habe mir Englisch selbst beigebracht.', 'T3llemt l-anglais bou7di.'],
          ],
        ),
        match('Rbet', [
          ['die Muttersprache', 'lougha l-omm'],
          ['mehrsprachig', 'mota3addid l-loughat'],
          ['die Anerkennung', 'l-i3tiraf'],
          ['benachteiligt', 'mhmmach'],
          ['fördern', 'd3em'],
        ]),
        choice('Ch7al d l-loughat kat-hder Salma (bla Tamazight)?', ['3', '5', '7'], 1),
        choice('3la 7sab Salma, 3lach Anna ma t3llmatch l-français?', ['Hiya ma 3endhach l-mawhiba', 'Bsbab t-ta3lim', 'L-français s3ib'], 1),
        gap('Kemmel', 'Ich bin zwei___ aufgewachsen. Ich habe mir Englisch selbst ___.', ['sprachig', 'beigebracht']),
        order('Rtteb', 'Je nach Situation wechsle ich zwischen drei Sprachen.'),
        culture(
          'T-ta3lim f Almaniya',
          md`
            - **Föderalismus:** t-ta3lim **mas2ouliyat l-wilayat** (Bundesländer) — l-baramij o l-imti7anat kayt-bddlou men Bayern l Berlin.
            - **Bildungsgerechtigkeit:** dirasat b7al **PISA** kaybyynou belli f Almaniya, n-naja7 f l-madrasa mrbout bzaf b **l-asl l-ijtima3i** d l-walidin.
            - **Anerkennung:** ila 3endek chahada men l-Maghrib (Licence, Master, diplôme d l-momarrid…), khassek **i3tiraf** — l-ma3loumat f **anerkennung-in-deutschland.de**. L-jami3at kaychoufou ta **anabin.kmk.org**.
            - **Studium:** l-jami3at l-3ommoumiya ghaliban **bla rosoum d-dirasa** (ghir Semesterbeitrag ~150–400 €) — walakin f Baden-Württemberg t-tolba men kharej l-UE kaykhllsou 1 500 € f s-semestre.
          `,
        ),
        speak(
          'L-biyougraphiya l-loughawiya dyalek',
          '7ki 3la l-loughat dyalek: lougha l-omm, chno t3llemti, fin o kifach, l-mostawa, o imta katkhdem kol wa7da.',
          ['Meine Muttersprache ist Darija.', 'In der Schule habe ich Arabisch und Französisch gelernt.', 'Englisch habe ich mir mit Serien selbst beigebracht.', 'Je nach Situation wechsle ich zwischen den Sprachen.'],
        ),
        graded(choice('"die Chancengleichheit" =', ['t-tasawi f l-forass', 'l-i3tiraf', 'l-9obol'], 0)),
        graded(choice('"verhandlungssicher" kay3ni…', ['Mostawa 3ali (t9der tfawed)', 'Ghir l-asasiyat', 'Ma kat-hderch'], 0)),
        graded(gap('Kemmel', 'Für die ___ meines Abschlusses brauche ich eine Übersetzung. (l-i3tiraf)', 'Anerkennung')),
        graded(translate("Terjem l l'Almaniya", 'Kbert b jouj d l-loughat.', ['Ich bin zweisprachig aufgewachsen.'])),
        summary(
          [
            'T-ta3lim o l-loughat: **die Muttersprache, mehrsprachig, die Chancengleichheit, der Abschluss, die Anerkennung, die Zulassung, benachteiligt, fördern**.',
            'Biyougraphiya: **zweisprachig aufgewachsen — fließend / Grundkenntnisse — sich selbst beibringen — je nach Situation**.',
          ],
          ['T7ki 3la l-loughat dyalek', 'Tnaqech t-ta3lim'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Er soll sieben Sprachen sprechen — subjektive Modalverben & Futur II',
      description: 'L-Modalverben b ma3na t-ta9dir o n-n9el (soll, will, muss, kann, dürfte), o Futur II.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tfre9 bin l-ma3na l-objectif o s-subjectif dyal l-Modalverben', 'Tkhdem soll / will l n-n9el o l-idda3a2', 'Tkhdem muss / dürfte / kann l darajat l-yaqin', 'Tkhdem Futur II'],
      steps: [
        intro(
          '"Mehrsprachige sollen kreativer sein."',
          md`
            Anna ma galatch "khasshom ykounou" — 9alt "**kaygoulou** belli homa". Nefs l-Modalverb, ma3na mkhtalef!
            F B2: l-Modalverben ma kayhdrouch ghir 3la l-wajib o l-imkaniya — ta 3la **ch7al nta mta2kked** o **chkoun 9al**.
          `,
          ['objectif ↔ subjectif', 'soll / will', 'muss / dürfte / kann', 'Futur II'],
        ),
        explain(
          'Objectif ↔ subjectif',
          md`
            | Modalverb | Objectif (l-ma3na l-3adi) | **Subjectif** (t-ta9dir / n-n9el) |
            |---|---|---|
            | **sollen** | Du **sollst** lernen. (khassek — chi wa7ed 9al) | Er **soll** reich sein. (**kaygoulou** belli ghani) |
            | **wollen** | Ich **will** studieren. (bghit) | Er **will** Arzt sein. (**kayda33i** belli tbib — ana ma mta2kkedch) |
            | **müssen** | Ich **muss** arbeiten. (darouri) | Er **muss** krank sein. (**akid** mrid — ~95 %) |
            | **dürfen** (dürfte) | Hier **darf** man parken. (mesmou7) | Er **dürfte** zu Hause sein. (**ghaliban** ~75 %) |
            | **können** | Ich **kann** schwimmen. (kan9der) | Das **kann** stimmen. (**momkin** ~50 %) |
            | **mögen** (mag) | Ich **mag** Tee. | Das **mag** sein. (momkin — walakin …) |

            **Darajat l-yaqin:** muss (95 %) > dürfte (75 %) > kann / könnte (50 %) > **kann nicht** (mosta7il!)
            > Das **kann nicht** stimmen. = mosta7il ykoun s7i7.
          `,
          [
            ['Der neue Kollege soll aus Rabat kommen.', 'Kaygoulou belli l-kollega j-jdid men Rabat.'],
            ['Sie will das alles allein geschafft haben.', 'Katda33i belli darat kolchi bou7dha.'],
          ],
        ),
        choice('"Das Restaurant soll sehr gut sein." =', ['Khass ykoun mzyan', 'Kaygoulou belli mzyan', 'Ana mta2kked belli mzyan'], 1),
        choice('"Er will den Unfall nicht gesehen haben." =', ['Ma bghach ychouf l-7adita', 'Kayda33i belli ma chafch l-7adita', 'Ma 9derch ychouf l-7adita'], 1),
        choice('L-bab msdoud, d-dow mtfi. "Sie ___ schon schlafen." (akid)', ['muss', 'kann', 'soll'], 0),
        choice('"Das ___ nicht stimmen! Ich war doch dabei." (mosta7il)', ['kann', 'muss', 'soll'], 0),
        explain(
          'Subjectif f l-madi: Modalverb + Infinitiv Perfekt',
          md`
            Bach t-hder 3la **l-madi** b ma3na subjectif: Modalverb (f l-7ader!) + **Partizip II + haben / sein**:

            > Er **soll** sehr reich **gewesen sein**. (kaygoulou belli kan ghani)
            > Sie **will** die Prüfung allein **geschafft haben**. (katda33i belli nj7at bou7dha)
            > Der Zug **muss** schon **abgefahren sein**. (akid mcha)
            > Er **dürfte** den Termin **vergessen haben**. (ghaliban nsa)

            ⚠️ Mo9arana: "Er **musste** arbeiten" (objectif — kan khasso) ↔ "Er **muss** gearbeitet **haben**" (subjectif — akid khdem).
          `,
          [
            ['Der Dieb soll durch das Fenster eingestiegen sein.', 'Kaygoulou belli s-sarr9 dkhel men s-sarjem.'],
            ['Sie muss den Bus verpasst haben.', 'Akid fatha l-bus.'],
          ],
        ),
        choice('*Kaygoulou belli l-ktab tktab f 3 chhour* =', ['Das Buch soll in drei Monaten geschrieben worden sein.', 'Das Buch musste in drei Monaten geschrieben werden.', 'Das Buch will in drei Monaten geschrieben sein.'], 0),
        gap('Kemmel', 'Er ist nicht gekommen. Er muss krank ___ sein. (werden)', 'geworden'),
        order('Rtteb', 'Der berühmte Autor soll zwölf Sprachen gesprochen haben.'),
        explain(
          'Futur II',
          md`
            **werden + Partizip II + haben / sein**:

            | Isti3mal | Mital |
            |---|---|
            | **ta9dir f l-madi** (+ wohl, sicher) | Er **wird** den Termin **wohl vergessen haben**. (ghaliban nsa) |
            | **chi 7aja ghadi tkoun sala f l-mosta9bal** | Bis Juni **werde** ich die Prüfung **bestanden haben**. (ghadi nkoun nj7t) |

            F l-hedra, **Perfekt + Zeitangabe** ghaliban kafi: "Bis Juni **habe** ich die Prüfung **bestanden**."
            Ta9dir f l-madi: **Futur II** (+ wohl) ≈ **dürfte + Inf. Perfekt** ≈ **wahrscheinlich + Perfekt**.
          `,
          [
            ['In zehn Jahren werden wir viel erreicht haben.', 'Men hna 10 snin ghadi nkounou w9e99na bzaf.'],
            ['Sie wird wohl im Stau gestanden haben.', 'Ghaliban kanet f z-z7am.'],
          ],
        ),
        choice('"Bis Freitag ___ ich den Bericht geschrieben ___."', ['werde / haben', 'wurde / haben', 'werde / sein'], 0),
        choice('"Er ist nicht da. Er ___ wohl schon nach Hause gegangen ___."', ['wird / sein', 'wird / haben', 'ist / worden'], 0),
        translate("Terjem l l'Almaniya", 'Kaygoulou belli kan ghani bzaf.', ['Er soll sehr reich gewesen sein.', 'Er soll sehr reich sein.']),
        graded(choice('"Sie soll eine sehr gute Ärztin sein." =', ['Kaygoulou belli tbiba mzyana', 'Khassha tkoun tbiba mzyana', 'Bghat tkoun tbiba'], 0)),
        graded(choice('"Er will alles gewusst haben." =', ['Kayda33i belli kan 3aref kolchi', 'Bgha y3ref kolchi', 'Khasso y3ref kolchi'], 0)),
        graded(choice('L-ma f l-ard, kolchi fazg. "Es ___ geregnet haben." (akid)', ['muss', 'soll', 'will'], 0)),
        graded(choice('"Er ___ jetzt im Büro sein — normalerweise kommt er um 8." (ghaliban)', ['dürfte', 'will', 'soll'], 0)),
        graded(gap('Kemmel', 'Bis 2030 werde ich mein Studium abgeschlossen ___.', 'haben')),
        graded(gap('Kemmel', 'Sie ist nicht ans Telefon gegangen. Sie wird wohl schon eingeschlafen ___.', 'sein')),
        graded(choice('"Das kann nicht sein!" =', ['Mosta7il!', 'Momkin', 'Akid'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Akid fatha l-bus.', ['Sie muss den Bus verpasst haben.', 'Er muss den Bus verpasst haben.'])),
        summary(
          [
            'Subjectif: **soll** (kaygoulou) · **will** (kayda33i) · **muss** (akid) · **dürfte** (ghaliban) · **kann** (momkin) · **kann nicht** (mosta7il).',
            'L-madi: Modalverb + **P.II + haben / sein** (Er soll reich gewesen sein).',
            'Futur II: **werden + P.II + haben / sein** — ta9dir f l-madi (+ wohl) wla 7aja sala f l-mosta9bal.',
          ],
          ['Tkhdem l-Modalverben subjectifs', 'Tkhdem Futur II'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Bildungsgerechtigkeit & Anerkennung',
      description: 'T9ra ma9al 3la l-3adala f t-ta3lim, tsme3 l-istichara 3la l-i3tiraf b ch-chahadat, o tkteb email rasmi.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem ma9al t7lili 3la t-ta3lim', 'Tfhem mokalama d l-istichara', 'Tkteb email rasmi b as2ila d9i9a'],
      steps: [
        intro(
          'Gleiche Chancen für alle?',
          'Youssef bgha y9ra Pflegewissenschaft f l-jami3a men b3d l-Ausbildung. Khasso y3ref wach l-bac dyalou ma3trouf bih — o 9ra ma9al 3la l-forass f t-ta3lim.',
          ['T9ra', 'Tsme3', 'Tkteb'],
        ),
        reading(
          'Bildung ist (k)eine Frage der Herkunft',
          md`
            Von 100 Kindern, deren Eltern studiert haben, beginnen rund 80 selbst ein Studium. Von 100 Kindern aus Familien ohne Hochschulabschluss sind es nur etwa 27. Diese Zahlen, die regelmäßig in Bildungsberichten auftauchen, sorgen seit Jahren für Diskussionen.

            Als eine Ursache gilt die frühe Aufteilung auf verschiedene Schulformen: In den meisten Bundesländern wird bereits nach der vierten Klasse entschieden, ob ein Kind aufs Gymnasium geht. Zu diesem Zeitpunkt dürften die Unterstützung durch die Eltern und die Sprachkenntnisse eine größere Rolle spielen als die Begabung.

            Kinder, die zu Hause eine andere Sprache sprechen, sind dabei nicht automatisch benachteiligt. Studien zeigen: Wer seine Muttersprache gut beherrscht, lernt in der Regel auch Deutsch leichter. Problematisch wird es erst, wenn keine der Sprachen ausreichend gefördert wird.

            Einige Initiativen versuchen gegenzusteuern. Mentoringprogramme bringen Schülerinnen und Schüler mit Studierenden zusammen, die selbst als Erste in ihrer Familie studiert haben. Viele von ihnen werden den Schritt an die Uni nur dank dieser Unterstützung gewagt haben, vermuten die Organisatoren.
          `,
          {
            text: '9ra l-ma9al o jaweb.',
            glossary: [
              ['auftauchen', 'ban / dher'],
              ['die Aufteilung', 't-ta9sim'],
              ['die Begabung', 'l-mawhiba'],
              ['beherrschen', 'ttqen'],
              ['gegensteuern', 'wajeh / 7awel ybeddel l-ittijah'],
              ['wagen', 'ghamer / tjre2'],
            ],
          },
        ),
        choice('Ch7al men 100 dri men 3a2ila bla jami3a kay9ra f l-jami3a?', ['~80', '~50', '~27'], 2),
        choice('Ach men sabab kayt3tabar mohimm?', ['T-ta9sim l-mobakkir men b3d l-9ism r-rabi3', 'L-madaris ghalyin', 'L-oustada 9lal'], 0),
        choice('Wach d-drari li kayhdrou lougha khra f d-dar mhmmchin automatiquement?', ['Ah', 'La — ila t9nou lougha l-omm, kayt3llmou l-almaniya b sohoula ktar'], 1),
        choice('Chno kaydirou Mentoringprogramme?', ['Kay3tiw l-flous', 'Kayjm3ou t-talamid m3a tolba kanou l-awwalin f 3a2ilathom', 'Kay9arriw l-walidin'], 1),
        listening(
          'Beratungsgespräch: Anerkennung',
          [
            ['Beraterin', 'Guten Tag, Herr Benali. Sie möchten also wissen, ob Sie mit Ihrem marokkanischen Abitur studieren können?', 'Mrhba Herr Benali. Iwa bghiti t3ref wach t9der t9ra f l-jami3a b l-bac l-maghribi?'],
            ['Youssef', 'Genau. Ich habe 2017 das Baccalauréat in Casablanca gemacht und mache jetzt eine Pflegeausbildung.', 'Bdebt. Dert l-bac f Casa f 2017 o daba kandir Ausbildung f t-tamrid.'],
            ['Beraterin', 'Das marokkanische Baccalauréat berechtigt in der Regel nicht direkt zum Studium. Normalerweise müsste man zuerst ein Studienkolleg besuchen.', 'L-bac l-maghribi ghaliban ma kay3tich l-7a99 direct f d-dirasa. 3adatan khassek tmchi l Studienkolleg 9bel.'],
            ['Youssef', 'Oh. Gibt es eine Alternative?', 'Oh. Wach kayn chi badil?'],
            ['Beraterin', 'Ja, und das ist in Ihrem Fall interessant: Mit einer abgeschlossenen Berufsausbildung und drei Jahren Berufserfahrung können Sie in Deutschland auch ohne Abitur studieren – zumindest in einem passenden Fach.', 'Ah, o hadchi mohimm f l-7ala dyalek: b Ausbildung mkmmla o 3 snin d t-tajriba f l-khedma, t9der t9ra f Almaniya 7ta bla Abitur — 3la l-a9al f ch3ba mnasba.'],
            ['Youssef', 'Das wusste ich nicht! Dann werde ich bis 2028 die Voraussetzungen erfüllt haben.', 'Ma kuntch 3aref! Iwa 7tal 2028 ghadi nkoun kmmelt ch-chorout.'],
            ['Beraterin', 'Genau. Die Details sind je nach Bundesland unterschiedlich. Schreiben Sie am besten direkt an die Hochschule.', 'Bdebt. T-tafasil katkhtalef men wilaya l wilaya. A7ssen tkteb direct l l-jami3a.'],
          ],
        ),
        choice('Wach l-bac l-maghribi kay3ti l-7a99 direct f d-dirasa?', ['Ah', 'Ghaliban la — khass Studienkolleg'], 1),
        choice('Chno l-badil l Youssef?', ['Y3awed l-bac', 'Ausbildung + 3 snin tajriba', 'Ychri chahada'], 1),
        choice('Chno nasi7at l-mostachara?', ['Ykteb direct l l-jami3a', 'Ytsenna', 'Yrje3 l l-Maghrib'], 0),
        pron(
          'Modalverben subjectifs f n-nte9',
          'F l-ma3na s-subjectif, l-accent ghaliban kayji 3la l-Modalverb bach tbyyen ch-chakk / n-n9el.',
          [
            ['Er SOLL sehr reich sein.', 'l-accent 3la "soll" (= kaygoulou)'],
            ['Sie WILL ihn nie gesehen haben.', 'l-accent 3la "will" (= katda33i)'],
            ['Das KANN nicht stimmen.', 'l-accent 3la "kann"'],
          ],
        ),
        write(
          'Email l l-jami3a',
          md`
            Kteb email rasmi l Studierendensekretariat d jami3a (~120 kelma) b smiyt Youssef: 9ddem rasek, chre7 l-wad3 dyalek (bac 2017, Ausbildung f t-tamrid, tajriba), o sowwel 3 as2ila d9i9a (ch-chorout, l-wata2i9, l-ajal).
            Khdem **indirekte Fragen** (ob / wann / welche) o jomla b **Futur II**.
          `,
          ['Sehr geehrte Damen und Herren,', 'Tqdim + l-hadaf (Studiengang)', 'L-wad3 (Abitur, Ausbildung, Berufserfahrung)', '3 as2ila (Ich würde gern wissen, ob …)', 'Futur II (Bis … werde ich … haben)', 'Mit freundlichen Grüßen'],
          'Sehr geehrte Damen und Herren,\n\nmein Name ist Youssef Benali, und ich interessiere mich für den Bachelorstudiengang Pflegewissenschaft an Ihrer Hochschule.\n\nIch habe 2017 in Casablanca das marokkanische Baccalauréat erworben. Zurzeit befinde ich mich im letzten Jahr meiner Ausbildung zum Pflegefachmann in Köln. Bis zum Sommer 2028 werde ich außerdem drei Jahre Berufserfahrung gesammelt haben.\n\nDaher möchte ich Sie fragen, ob ich mit dieser Qualifikation ohne Studienkolleg zugelassen werden kann. Außerdem würde ich gern wissen, welche Unterlagen ich einreichen muss und ob diese übersetzt und beglaubigt sein müssen. Schließlich wäre ich Ihnen dankbar für eine Information, bis wann die Bewerbung für das Wintersemester eingehen muss.\n\nVielen Dank im Voraus für Ihre Unterstützung.\n\nMit freundlichen Grüßen\nYoussef Benali',
          100,
        ),
        graded(choice('"die Begabung" =', ['l-mawhiba', 't-ta9sim', 'ch-chahada'], 0)),
        graded(choice('"beherrschen" (lougha) =', ['ttqen', 'nsa', 'kreh'], 0)),
        graded(choice('"Studienkolleg" howa…', ['3am t7diri 9bel l-jami3a', 'jami3a khassa', 'imti7an d l-lougha'], 0)),
        graded(dictation('Sme3 o kteb', 'Wer seine Muttersprache gut beherrscht, lernt auch Deutsch leichter.')),
        summary(
          [
            'L-3adala f t-ta3lim: **die Herkunft, die Aufteilung, die Begabung, benachteiligt, fördern, gegensteuern**.',
            'L-i3tiraf: **das Studienkolleg, berechtigen zu, die Voraussetzungen erfüllen, beglaubigt, Studium ohne Abitur**.',
          ],
          ['Tfhem ma9al 3la t-ta3lim', 'Tfhem l-istichara', 'Tkteb email rasmi l l-jami3a'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 8',
      description: 'Muraja3a: t-ta3lim o l-loughat, subjektive Modalverben, Futur II — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Modalverben subjectifs', 'Traja3 Futur II', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'T-ta3lim o t-ta3addod l-loughawi, o kifach t3ber 3la t-ta9dir o n-n9el b l-Modalverben.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **soll** (kaygoulou) · **will** (kayda33i) · **muss** (akid) · **dürfte** (ghaliban) · **kann nicht** (mosta7il)
            - L-madi: Er **soll** reich **gewesen sein**.
            - Futur II: Er **wird** es **vergessen haben**.
          `,
        ),
        dialogue(
          'Gerüchte in der Uni-Mensa',
          [
            ['Student 1', 'Hast du gehört? Der neue Professor soll vierzehn Sprachen sprechen!', 'Sme3ti? L-oustad j-jdid kaygoulou kayhder 14 lougha!'],
            ['Salma', 'Vierzehn? Das kann nicht stimmen. Er dürfte vielleicht vier oder fünf fließend sprechen.', '14? Mosta7il. Ghaliban kayhder 4 wla 5 b talaqa.'],
            ['Student 1', 'Er selbst will in zehn Ländern gelebt haben.', 'Houwa b rasou kayda33i belli 3ach f 10 d l-bouldan.'],
            ['Salma', 'Na ja, dann wird er tatsächlich einiges gelernt haben. Aber vierzehn – das muss übertrieben sein.', 'Iwa, f had l-7ala ghadi ykoun t3llem bzaf fe3lan. Walakin 14 — akid mobalagh fiha.'],
          ],
        ),
        choice('Chno kaygoulou 3la l-oustad?', ['Kayhder 14 lougha', 'Kaykteb 14 ktab', '3ach f 14 blad'], 0),
        choice('Chno ra2y Salma?', ['S7i7', 'Mobalagh fih', 'Ma 3endha ra2y'], 1),
        gap('Kemmel', 'Der Professor ___ vierzehn Sprachen sprechen. (kaygoulou) Das ___ übertrieben sein. (akid)', ['soll', 'muss']),
        match('Rbet', [
          ['Er soll krank sein.', 'Kaygoulou belli mrid.'],
          ['Er will krank sein.', 'Kayda33i belli mrid.'],
          ['Er muss krank sein.', 'Akid mrid.'],
          ['Er dürfte krank sein.', 'Ghaliban mrid.'],
        ]),
        speak(
          'Ta9dirat',
          'Chouf had l-mo9if o 9ddem 3 ta9dirat b darajat mkhtalfa (muss, dürfte, könnte) + wa7ed b Futur II: "Dein Kollege ist heute nicht zur Arbeit gekommen und geht nicht ans Telefon."',
          ['Er muss krank sein, denn er fehlt sonst nie.', 'Er dürfte verschlafen haben.', 'Er könnte auch einen Unfall gehabt haben.', 'Er wird wohl sein Handy zu Hause vergessen haben.'],
        ),
        graded(choice('"Der Film soll sehr spannend sein." =', ['Kaygoulou belli mchwwe9', 'Khasso ykoun mchwwe9', 'Akid mchwwe9'], 0)),
        graded(choice('"Sie will nichts davon gewusst haben." =', ['Katda33i belli ma kanet 3arfa walou', 'Ma bghatch t3ref', 'Ma 9dratch t3ref'], 0)),
        graded(choice('"Er ___ den Zug verpasst haben." (akid)', ['muss', 'soll', 'will'], 0)),
        graded(choice('"Der Brief ___ morgen ankommen." (ghaliban)', ['dürfte', 'will', 'soll'], 0)),
        graded(gap('Kemmel', 'Bis Montag werde ich alle Unterlagen eingereicht ___.', 'haben')),
        graded(gap('Kemmel', 'Er soll früher Lehrer ___ sein.', 'gewesen')),
        graded(choice('"Er musste arbeiten." ↔ "Er muss gearbeitet haben." — l-jomla t-tanya kat3ni…', ['Kan khasso ykhdem', 'Akid khdem (ta9dir)', 'Bgha ykhdem'], 1)),
        graded(choice('"die Anerkennung" =', ['l-i3tiraf', 'l-9obol', 'l-mawhiba'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Kaygoulou belli l-oustad kayhder 7 d l-loughat.', ['Der Lehrer soll sieben Sprachen sprechen.', 'Der Professor soll sieben Sprachen sprechen.'])),
        graded(dictation('Sme3 o kteb', 'Er wird wohl seinen Schlüssel vergessen haben.')),
        summary(
          [
            'Daba t9der tnaqech t-ta3lim o l-loughat, t9dder o tn9el l-akhbar b d9a.',
            'F l-unité 9: l-i9tisad o l-istihlak — **Konjunktiv II f l-madi m3a l-Modalverben** (hätte … machen sollen) o **als ob**.',
          ],
          ['Tnaqech t-ta3lim', 'Tkhdem l-Modalverben subjectifs', 'Tkhdem Futur II', 'Tkteb email l l-jami3a'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
