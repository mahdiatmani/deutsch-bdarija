import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B2',
  number: 4,
  title: 'Wissenschaft & Technik',
  description: "L-ikhtira3at, r-ra9mana o l-KI f s-s7a — b Passiv f kol l-azmina, Zustandspassiv o l-bada2il dyal l-Passiv (sich lassen, sein … zu, -bar).",
  icon: 'science',
  objectives: [
    'Twsef ikhtira3 wla 3amaliya te9niya b d9a',
    'Tkhdem Passiv f Präsens, Präteritum, Perfekt, Plusquamperfekt o m3a Modalverben',
    'Tfre9 bin Vorgangspassiv (wird geöffnet) o Zustandspassiv (ist geöffnet)',
    'Tkhdem l-bada2il: man, sich lassen, sein … zu, -bar',
    'Tnaqech l-ijabiyat o l-makhatir dyal t-tiknoloujiya',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Erfindungen, die die Welt verändert haben',
      description: 'L-kalimat dyal l-3ilm o t-tiknoloujiya, o kifach twsef ikhtira3 o 3amaliya.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal l-3ilm o t-tiknoloujiya', 'Twsef ikhtira3 (chno, chkoun, imta, kifach)', 'T3ber 3la l-i3jab o t-ta7affodh'],
      steps: [
        intro(
          'Roboter im Krankenhaus',
          'F St. Marien, jab l-mostachfa robot jdid li kayfrre9 d-dwa. Youssef o Monika kaynaqchou: wach t-tiknoloujiya ghadi t3awen wla t3e99ed?',
          ['L-ikhtira3at', 'Twsef 3amaliya', 'L-ijabiyat o l-makhatir'],
        ),
        dialogue(
          'Der neue Kollege aus Metall',
          [
            ['Monika', 'Hast du den neuen Medikamentenroboter schon gesehen? Er wurde letzte Woche installiert.', 'Chfti robot d-dwa j-jdid? Rkkbouh s-simana li fatet.'],
            ['Youssef', 'Ja! Die Medikamente werden jetzt automatisch sortiert und für jeden Patienten verpackt. Das spart enorm viel Zeit.', 'Ah! D-dwa daba kayt-rtteb automatiquement o kayt-ghellef l kol mrid. Hadchi kaywffer we9t kbir bzaf.'],
            ['Monika', 'Stimmt. Und Verwechslungen sind praktisch ausgeschlossen, weil jede Packung gescannt wird.', 'Bssa7. O l-ghlat f d-dwa tqriban mosta7il, 7it kol 3elba kayt-scanna.'],
            ['Youssef', 'Trotzdem habe ich ein gemischtes Gefühl. Was passiert, wenn das System ausfällt?', 'Walakin 3endi i7sas mkhllet. Chno ghadi y9e3 ila t3ettel s-système?'],
            ['Monika', 'Dafür gibt es einen Notfallplan. Außerdem muss alles von einer Pflegekraft kontrolliert werden, bevor es verabreicht wird.', '3la hadchi kayn plan dyal t-tawari2. O zid kolchi khasso ytrage3 men 3and momarrid 9bel ma y-t3ta.'],
            ['Youssef', 'Gut. Dann bleibt uns hoffentlich mehr Zeit für die Patienten selbst.', 'Mzyan. Iwa nchallah ghadi yb9a lina we9t ktar l l-mrad b rashom.'],
          ],
        ),
        vocab('Wissenschaft & Technik — L-3ilm o t-tiknoloujiya', [
          ['die Erfindung', 'l-ikhtira3', 'die Erfindungen', ['Das Rad ist eine der wichtigsten Erfindungen.', 'R-rwida wa7da men ahamm l-ikhtira3at.']],
          ['erfinden / entdecken', 'khtare3 / ktachef', ''],
          ['die Forschung', 'l-ba7th l-3ilmi', ''],
          ['der Fortschritt', 't-ta9addom', ''],
          ['die Digitalisierung', 'r-ra9mana', ''],
          ['entwickeln', 'tawwer', ''],
          ['das Gerät', 'l-jihaz', 'die Geräte'],
          ['die Anwendung', 't-tatbi9 (application / isti3mal)', ''],
          ['ausfallen', 't3ettel / t9ad', ''],
          ['der Datenschutz', 'l-7imaya d l-ma3loumat', ''],
          ['ersetzen', 'khlef', ''],
          ['zuverlässig', 'mo3tamad 3lih', ''],
          ['ausgeschlossen', 'mosta7il / m9ssi', ''],
          ['die Herausforderung', 't-ta7addi', 'die Herausforderungen'],
        ]),
        explain(
          'Twsef ikhtira3 o t3ber 3la ra2yek',
          md`
            | Bach… | Redemittel |
            |---|---|
            | l-wasf | "… wurde 19… von … erfunden / entwickelt." — "Es dient dazu, … zu …" — "Es funktioniert so: Zuerst wird …, dann …" |
            | l-i3jab | "Das ist ein echter Durchbruch." — "Das hat unser Leben grundlegend verändert." |
            | t-ta7affodh | "Ich sehe das mit gemischten Gefühlen." — "Man darf die Risiken nicht unterschätzen." |
            | l-mo9arana | "Im Vergleich zu früher …" — "Während man früher …, kann man heute …" |
          `,
          [
            ['Das Gerät dient dazu, Medikamente zu sortieren.', 'L-jihaz kaykhdem bach yrtteb d-dwa.'],
            ['Ich sehe das mit gemischten Gefühlen.', 'Kanchouf hadchi b i7sas mkhllet.'],
          ],
        ),
        match('Rbet', [
          ['die Erfindung', 'l-ikhtira3'],
          ['der Fortschritt', 't-ta9addom'],
          ['ausfallen', 't3ettel'],
          ['die Herausforderung', 't-ta7addi'],
          ['entwickeln', 'tawwer'],
        ]),
        choice('Chno kaydir r-robot?', ['Kaytiyeb l-makla', 'Kayrtteb o kayghellef d-dwa', 'Kaynaddef l-bit'], 1),
        choice('Chno khass ydir l-momarrid 9bel ma y3ti d-dwa?', ['Ytsenna r-robot', 'Yrage3 kolchi', 'Ysowwel t-tbib'], 1),
        gap('Kemmel', 'Ich sehe das mit ___ Gefühlen. Man darf die Risiken nicht ___. (nqqes men 9imathom)', ['gemischten', 'unterschätzen|unterschaetzen']),
        order('Rtteb', 'Das Gerät dient dazu, Medikamente zu sortieren.'),
        culture(
          'Ikhtira3at almaniya',
          md`
            - **Johannes Gutenberg** (~1450): t-tibaa3a b l-7rouf l-motaharrika — f Mainz.
            - **Carl Benz** (1886): awwel tomobil b motor dyal benzine.
            - **Wilhelm Conrad Röntgen** (1895): l-achi33a X ("Röntgenstrahlen") — awwel Nobel d l-fizya f 1901.
            - **MP3** tdar f **Fraunhofer-Institut** f Erlangen (snin 90).
            - L-yawm: Almaniya men l-bouldan l-awwalin f **l-brevets** f Europa, khossousan f s-sayarat o l-makinat.
          `,
        ),
        speak(
          'Ikhtira3 mohimm',
          'Khtar ikhtira3 (smartphone, internet, l-vaccin, l-ma l-mo3a9am…). Wsefou: chno, imta tdar, l-ach kaynfa3, o kifach beddel l-7yat. 3ti ra2yek b ta7affodh.',
          ['Das Smartphone wurde 2007 in seiner heutigen Form bekannt.', 'Es dient dazu, zu kommunizieren, zu arbeiten und sich zu informieren.', 'Es hat unser Leben grundlegend verändert.', 'Allerdings sehe ich das mit gemischten Gefühlen, weil viele Menschen süchtig danach sind.'],
        ),
        graded(choice('"die Forschung" =', ['l-ba7th l-3ilmi', 'l-ikhtira3', 'l-jihaz'], 0)),
        graded(choice('"Das ist ein echter Durchbruch." katbyyen…', ['L-i3jab', 'T-ta7affodh', 'L-ghadab'], 0)),
        graded(gap('Kemmel', 'Das Gerät ___ dazu, Wasser zu reinigen. (kaykhdem bach)', 'dient')),
        graded(translate("Terjem l l'Almaniya", 'Kanchouf hadchi b i7sas mkhllet.', ['Ich sehe das mit gemischten Gefühlen.'])),
        summary(
          [
            'T-tiknoloujiya: **die Erfindung, der Fortschritt, die Forschung, die Digitalisierung, entwickeln, ausfallen, die Herausforderung**.',
            'Wasf: **… dient dazu, … zu … — wurde … erfunden** · Ta7affodh: **mit gemischten Gefühlen**.',
          ],
          ['Twsef ikhtira3', 'T3ber 3la l-i3jab o t-ta7affodh'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Es wurde erfunden, es lässt sich nutzen — Passiv komplett',
      description: 'Passiv f kol l-azmina o m3a Modalverben, Zustandspassiv, o l-bada2il dyal l-Passiv.',
      minutes: 45,
      kind: 'grammar',
      goals: ['Tkhdem Passiv f kol l-azmina', 'Tkhdem Passiv m3a Modalverben', 'Tfre9 bin wird geöffnet o ist geöffnet', 'Tkhdem man, sich lassen, sein … zu, -bar'],
      steps: [
        intro(
          '"Er wurde installiert." — "Es muss kontrolliert werden."',
          md`
            F A2 o B1 chefti Passiv Präsens o Präteritum. F B2 ghadi nkmmlou: **Perfekt, Plusquamperfekt, m3a Modalverben**, o **Zustandspassiv**. O kifach t-tjenneb l-Passiv bach n-nass ma ykounch thqil.
          `,
          ['Passiv ×5', 'Zustandspassiv', 'Bada2il'],
        ),
        explain(
          'Passiv f kol l-azmina',
          md`
            **werden** (f z-zaman l-matloub) + **Partizip II**:

            | Zaman | Mital |
            |---|---|
            | Präsens | Der Roboter **wird** installiert. |
            | Präteritum | Der Roboter **wurde** installiert. |
            | Perfekt | Der Roboter **ist** installiert **worden**. |
            | Plusquamperfekt | Der Roboter **war** installiert **worden**. |
            | Futur I | Der Roboter **wird** installiert **werden**. |

            ⚠️ F Perfekt: **worden** (machi *geworden*!) — o dima m3a **sein**.
            Chkoun dar l-fi3l: **von** + Dat (chakhs) · **durch** + Akk (wasila / sabab):
            > Das Penicillin wurde **von** Alexander Fleming entdeckt. · Die Stadt wurde **durch** ein Erdbeben zerstört.
          `,
          [
            ['Das Gesetz ist gestern beschlossen worden.', 'L-9anoun tsadde9 3lih l-bare7.'],
            ['Nachdem die Daten gesammelt worden waren, begann die Analyse.', 'Men b3d ma tjm3at l-ma3loumat, bdat t-ta7lil.'],
          ],
        ),
        choice('Perfekt: "Das Medikament ___ getestet ___."', ['ist / worden', 'hat / geworden', 'ist / geworden'], 0),
        choice('"Die Glühbirne wurde ___ Thomas Edison verbessert."', ['von', 'durch', 'mit'], 0),
        gap('Kemmel', 'Die Brücke ist 1990 gebaut ___. (Perfekt Passiv)', 'worden'),
        order('Rtteb', 'Das Telefon wurde im 19. Jahrhundert erfunden.'),
        explain(
          'Passiv m3a Modalverben',
          md`
            **Modalverb** + **Partizip II** + **werden** (f l-akhir):

            | Zaman | Mital |
            |---|---|
            | Präsens | Alles **muss** kontrolliert **werden**. |
            | Präteritum | Alles **musste** kontrolliert **werden**. |
            | Perfekt (nadir) | Alles **hat** kontrolliert **werden müssen**. |
            | f Nebensatz | …, weil alles kontrolliert werden **muss**. |
          `,
          [
            ['Die Daten dürfen nicht weitergegeben werden.', 'L-ma3loumat ma khasshomch ytsfdou l chi wa7ed.'],
            ['Das Problem konnte schnell gelöst werden.', 'L-mochkil t7ell dghya.'],
          ],
        ),
        choice('"Man muss das Formular ausfüllen." → "Das Formular ___."', ['muss ausgefüllt werden', 'wird ausgefüllt müssen', 'muss ausfüllen werden'], 0),
        gap('Kemmel', 'Das Gerät konnte leider nicht repariert ___.', 'werden'),
        explain(
          'Vorgangspassiv ↔ Zustandspassiv',
          md`
            | | Bniya | Ma3na | Mital |
            |---|---|---|---|
            | **Vorgangspassiv** | werden + P.II | **l-3amaliya** (chno kayw9e3) | Die Tür **wird** geöffnet. (kayt7ellou l-bab daba) |
            | **Zustandspassiv** | **sein** + P.II | **n-natija / l-7ala** | Die Tür **ist** geöffnet. (l-bab m7loul) |

            > Das Geschäft **wird** um 20 Uhr geschlossen. (l-3amaliya) → Jetzt **ist** es geschlossen. (l-7ala)
            > Die Datei **wurde** gespeichert. → Die Datei **ist** gespeichert.
          `,
        ),
        choice('"Achtung! Die Straße ___ gesperrt." (l-7ala daba)', ['wird', 'ist', 'wurde'], 1),
        choice('"Die Straße ___ morgen um 8 Uhr gesperrt." (l-3amaliya)', ['wird', 'ist'], 0),
        explain(
          'Bada2il dyal l-Passiv',
          md`
            | Badil | Ma3na | Mital | = Passiv |
            |---|---|---|---|
            | **man** + Aktiv | 3amm | **Man** repariert das Gerät. | Das Gerät wird repariert. |
            | **sich lassen** + Inf. | momkin | Das Problem **lässt sich** lösen. | … kann gelöst werden. |
            | **sein … zu** + Inf. | momkin / **khass** | Das Problem **ist** leicht **zu** lösen. · Der Antrag **ist** bis Freitag **abzugeben**. | … kann / muss … werden. |
            | **-bar** / **-lich** | momkin | Das Problem ist **lösbar**. · Das ist **verständlich**. | … kann gelöst / verstanden werden. |

            ⚠️ **sein … zu** 3endou jouj ma3ani: momkin ("leicht zu lösen") **wla** darura ("bis Freitag abzugeben") — l-mo7it kaybyyen.
          `,
          [
            ['Die Batterie lässt sich leicht wechseln.', 'L-batterie katbddel b sohoula.'],
            ['Die Rechnung ist innerhalb von 14 Tagen zu bezahlen.', 'L-fatoura khassha ttkhlles f 14 youm.'],
          ],
        ),
        match('Rbet', [
          ['Das lässt sich ändern.', 'Das kann geändert werden.'],
          ['Das ist zu beachten.', 'Das muss beachtet werden.'],
          ['Das ist essbar.', 'Das kann gegessen werden.'],
          ['Man öffnet die Tür.', 'Die Tür wird geöffnet.'],
        ]),
        choice('"Der Fehler kann nicht erklärt werden." =', ['Der Fehler lässt sich nicht erklären.', 'Der Fehler lässt nicht erklärt.', 'Der Fehler ist nicht erklären.'], 0),
        gap('Kemmel', 'Die Aufgabe ist leicht ___ lösen.', 'zu'),
        translate("Terjem l l'Almaniya (b Passiv)", 'L-ma3loumat ma khasshomch ytsfdou.', ['Die Daten dürfen nicht weitergegeben werden.', 'Die Daten dürfen nicht weitergeleitet werden.']),
        graded(choice('"Das Haus ___ 1920 gebaut ___." (Perfekt)', ['ist / worden', 'hat / worden', 'wurde / worden'], 0)),
        graded(choice('"Der Patient musste sofort operiert ___."', ['werden', 'worden', 'wurden'], 0)),
        graded(choice('"Das Fenster ist kaputt. Es ___ gestern beschädigt."', ['wurde', 'ist', 'hat'], 0)),
        graded(choice('"Keine Sorge, die Tür ___ abgeschlossen." (l-7ala)', ['ist', 'wird', 'wurde'], 0)),
        graded(choice('"Das Problem lässt sich lösen." =', ['Das Problem kann gelöst werden.', 'Das Problem muss gelöst werden.', 'Das Problem wurde gelöst.'], 0)),
        graded(choice('"Die Formulare sind bis Montag abzugeben." =', ['… müssen bis Montag abgegeben werden.', '… können bis Montag abgegeben werden.', '… wurden bis Montag abgegeben.'], 0)),
        graded(gap('Kemmel', 'Nachdem das Update installiert worden ___, lief alles wieder.', 'war')),
        graded(gap('Kemmel', 'Diese Schrift ist kaum les___. (ma kayt9rach tqriban)', 'bar')),
        summary(
          [
            'Passiv: **wird / wurde / ist … worden / war … worden / wird … werden** + P.II · **von** (chakhs) / **durch** (wasila).',
            'M3a Modal: **muss … kontrolliert werden**.',
            '**werden** + P.II = l-3amaliya · **sein** + P.II = l-7ala.',
            'Bada2il: **man**, **sich lassen**, **sein … zu** (momkin / khass), **-bar**.',
          ],
          ['Tkhdem Passiv f kol l-azmina', 'Tfre9 bin Vorgangs- o Zustandspassiv', 'Tkhdem l-bada2il'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'KI in der Medizin — Chancen und Risiken',
      description: 'T9ra ma9al 3ilmi mbassat, tsme3 n9ach, o tkteb wasf 3amaliya o ra2yek.',
      minutes: 40,
      kind: 'skills',
      goals: ['Tfhem ma9al 3ilmi mbassat', 'Tfhem n9ach fih ara2 mokhtalifa', 'Twsef 3amaliya b Passiv o t3ti ra2yek'],
      steps: [
        intro(
          'Diagnose per Algorithmus',
          'Youssef 9ra ma9al 3la l-KI li kat9ra t-tsawer d l-achi33a, o sme3 n9ach f r-radio bin tbiba o ba7ith f l-akhla9iyat.',
          ['T9ra', 'Tsme3', 'Tkteb'],
        ),
        reading(
          'Wenn der Computer den Tumor findet',
          md`
            In mehreren deutschen Kliniken wird künstliche Intelligenz inzwischen bei der Auswertung von Röntgen- und MRT-Bildern eingesetzt. Die Programme sind mit Hunderttausenden von Bildern trainiert worden, auf denen Fachleute zuvor Auffälligkeiten markiert hatten.

            Die Ergebnisse sind vielversprechend: In Studien zur Brustkrebsfrüherkennung erkannte die KI Tumore mindestens so zuverlässig wie erfahrene Radiologinnen und Radiologen – und sie wird nie müde. Bei der Mammografie wird deshalb getestet, ob die KI eine der beiden menschlichen Befundungen ersetzen kann.

            Doch es gibt auch Bedenken. Wenn ein Algorithmus vor allem mit Daten hellhäutiger Patienten trainiert wurde, lassen sich seine Ergebnisse nicht ohne Weiteres auf andere Gruppen übertragen. Außerdem ist oft nicht nachvollziehbar, wie das System zu seiner Entscheidung gekommen ist.

            Einig sind sich die meisten Experten in einem Punkt: Die endgültige Diagnose muss von einem Menschen gestellt werden. Die KI soll Ärztinnen und Ärzte entlasten, nicht ersetzen.
          `,
          {
            text: '9ra l-ma9al o jaweb.',
            glossary: [
              ['die Auswertung', 't-ta7lil / t-ta9yim'],
              ['einsetzen', 'sta3mel'],
              ['die Auffälligkeit', 'chi 7aja ghriba / machi 3adiya'],
              ['vielversprechend', 'mobachir b l-khir'],
              ['die Früherkennung', 'l-kachf l-mobakkir'],
              ['übertragen auf', 'n9el / tabba9 3la'],
              ['nachvollziehbar', 'momkin tfhemha / tttb3ha'],
              ['entlasten', 'khffef 3la'],
            ],
          },
        ),
        choice('Kifach tdarrbat l-KI?', ['B ktoub t-tibb', 'B mi2at l-alaf d t-tsawer li 3llmou 3lihom l-khobara', 'B l-internet'], 1),
        choice('Chno n-natija f l-kachf 3la saratan th-thdi?', ['L-KI a9al', 'L-KI 3la l-a9al b7al l-atibba2 l-mojarrabin', 'Ma kaynach natija'], 1),
        choice('Chno l-mochkil m3a l-ma3loumat?', ['Ila tdarrbat ghir 3la majmou3a wa7da, ma t-tnasebch l-khrin', 'L-ma3loumat ghalya', 'Ma kaynach ma3loumat'], 0),
        choice('3la ach mttaf9in l-khobara?', ['L-KI ghadi tkhlef l-atibba2', 'T-tachkhis l-akhir khass ydirou insan', 'Khass ymn3ou l-KI'], 1),
        listening(
          'Radiodebatte: Darf KI über Leben entscheiden?',
          [
            ['Moderator', 'Frau Dr. Braun, Sie arbeiten als Radiologin mit KI. Wie sind Ihre Erfahrungen?', 'Dr. Braun, kat-khdmi b7al tbiba d l-achi33a m3a l-KI. Kifach tajribtek?'],
            ['Dr. Braun', 'Sehr positiv. Routinefälle lassen sich schneller bearbeiten, sodass mir mehr Zeit für komplizierte Fälle und für Gespräche mit Patienten bleibt.', 'Ijabiya bzaf. L-7alat l-3adiya katt3alaj dghya ktar, 7tal kayb9a liya we9t ktar l l-7alat l-mo3a99ada o l l-hedra m3a l-mrad.'],
            ['Moderator', 'Herr Professor Wendt, Sie sind Ethiker. Teilen Sie diesen Optimismus?', 'Professor Wendt, nta motakhassis f l-akhla9iyat. Wach katcharek had t-tafa2ol?'],
            ['Prof. Wendt', 'Nur teilweise. Ich frage mich: Wer haftet, wenn die KI einen Tumor übersieht? Diese Frage ist rechtlich noch nicht geklärt.', 'Ghir jouz2iyan. Kansowwel rasi: chkoun mas2oul ila l-KI ma chaftch saratan? Had s-so2al mazal ma t7ellch 9anouniyan.'],
            ['Dr. Braun', 'Die Verantwortung liegt bei uns Ärzten. Die KI macht nur Vorschläge, die von uns überprüft werden.', 'L-mas2ouliya 3andna 7na l-atibba2. L-KI kat9tare7 ghir, o 7na li kanrage3ou.'],
            ['Prof. Wendt', 'Theoretisch ja. Aber wenn man jahrelang mit einem System arbeitet, das fast immer recht hat, vertraut man ihm irgendwann blind. Davor muss gewarnt werden.', 'Nadhariyan ah. Walakin ila khdemti snin m3a système li tqriban dima 3endou l-7a99, f chi we9t kat-ti9 fih b l-3ma. Khass ntt7dder men hadchi.'],
          ],
        ),
        choice('Chno l-faydah 3la 7sab Dr. Braun?', ['Katkhlles ktar', 'Kayb9a liha we9t ktar l l-7alat s-s3iba o l-mrad', 'Ma b9atch kat-khdem'], 1),
        choice('Chno so2al Prof. Wendt l-9anouni?', ['Ch7al kat-kllef l-KI', 'Chkoun l-mas2oul ila l-KI ghltat', 'Fin kat-tsna3'], 1),
        choice('Chno l-khatar li kaynbbeh lih?', ['Th-thi9a l-3amya f s-système', 'L-kahraba', 'L-qarasana'], 0),
        pron(
          'worden / geworden / wurden',
          'Rd l-bal: "worden" (Passiv Perfekt) ↔ "geworden" (wella) ↔ "wurden" (Präteritum jam3).',
          [
            ['Er ist operiert worden.', '"worden" — bla ge-'],
            ['Er ist Arzt geworden.', '"geworden" — m3a ge-'],
            ['Sie wurden operiert.', '"wurden" — u twila'],
          ],
        ),
        write(
          'Wasf 3amaliya + ra2y',
          md`
            Wsef kifach kat-khdem l-KI f t-tachkhis (~150 kelma): (1) chno kaytjme3 o kifach katdarreb, (2) kifach katsta3mel f l-mostachfa, (3) chkoun kayrage3. Men b3d 3ti ra2yek: ijabiyat o makhatir.
            Khdem **Passiv f 3 azmina**, **Passiv m3a Modalverb**, o badil wa7ed (sich lassen / sein … zu / -bar).
          `,
          ['T-tadrib (Zuerst werden … gesammelt …)', 'L-isti3mal (Dann wird … eingesetzt …)', 'L-moraja3a (… muss von … überprüft werden)', 'L-ijabiyat', 'L-makhatir o ra2yek'],
          'Damit eine KI Röntgenbilder auswerten kann, muss sie zunächst trainiert werden. Dafür werden Hunderttausende Bilder gesammelt, auf denen Fachleute Auffälligkeiten markiert haben. Anhand dieser Beispiele lernt das Programm, Muster zu erkennen.\n\nIn der Klinik wird jedes neue Bild automatisch von der KI analysiert. Verdächtige Stellen werden farbig markiert und an die Radiologin weitergeleitet. Die endgültige Diagnose muss jedoch immer von einem Menschen gestellt werden.\n\nMeiner Meinung nach überwiegen die Vorteile: Routinefälle lassen sich schneller bearbeiten, und Tumore können früher entdeckt werden. Allerdings sind die Entscheidungen der KI oft nicht nachvollziehbar. Außerdem ist bisher nicht eindeutig geklärt worden, wer bei Fehlern haftet. Diese Fragen sind dringend zu klären, bevor KI flächendeckend eingesetzt wird.',
          120,
        ),
        graded(choice('"vielversprechend" =', ['mobachir b l-khir', 'khatir', 'ghali'], 0)),
        graded(choice('"nachvollziehbar" =', ['momkin tfhemha', 'mosta7il', 'sri3'], 0)),
        graded(choice('"haften für" =', ['tkoun mas2oul 3la', 'khaf men', 'nsa'], 0)),
        graded(dictation('Sme3 o kteb', 'Die endgültige Diagnose muss von einem Menschen gestellt werden.')),
        summary(
          [
            'L-KI f t-tibb: **die Auswertung, einsetzen, die Früherkennung, nachvollziehbar, entlasten, haften**.',
            'Wasf 3amaliya: **Zuerst werden … gesammelt, dann wird … analysiert, schließlich muss … überprüft werden.**',
          ],
          ['Tfhem ma9al 3ilmi', 'Tfhem n9ach', 'Twsef 3amaliya b Passiv'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B2, Unité 4',
      description: 'Muraja3a: t-tiknoloujiya, Passiv f kol l-azmina, Zustandspassiv, l-bada2il — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 Passiv', 'Traja3 l-bada2il', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'L-ikhtira3at o l-KI, o l-Passiv b kol achkalou.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - wird / wurde / **ist … worden** / war … worden + P.II
            - **muss … gemacht werden**
            - wird geöffnet (3amaliya) ↔ **ist** geöffnet (7ala)
            - man · **lässt sich** machen · **ist … zu** machen · mach**bar**
          `,
        ),
        dialogue(
          'IT-Support',
          [
            ['Salma', 'Jonas, ist das Update schon installiert worden?', 'Jonas, wach l-update trekkeb?'],
            ['Jonas', 'Ja, gestern Abend. Aber leider konnte der Drucker nicht verbunden werden.', 'Ah, l-bare7 f l-lil. Walakin ma3a l-asaf ma 9derch l-imprimante ttrbet.'],
            ['Salma', 'Lässt sich das schnell beheben?', 'Wach hadchi kayt-sla7 dghya?'],
            ['Jonas', 'Ich denke schon. Der Treiber muss nur neu installiert werden. Bis Mittag ist das erledigt.', 'Kandhen ah. Ghir l-pilote khasso ytrekkeb men jdid. 9bel t-tnach ghadi ykoun sala.'],
          ],
        ),
        choice('Imta trekkeb l-update?', ['L-youm s-sba7', 'L-bare7 f l-lil', 'S-simana l-jaya'], 1),
        choice('Chno khass ydar?', ['Chri imprimante jdida', 'Trekkib l-pilote men jdid', 'Ms7 l-update'], 1),
        gap('Kemmel', 'Ist das Update schon installiert ___? Der Treiber ___ neu installiert werden.', ['worden', 'muss']),
        match('Passiv → Badil', [
          ['kann repariert werden', 'lässt sich reparieren'],
          ['muss beachtet werden', 'ist zu beachten'],
          ['kann getrunken werden', 'ist trinkbar'],
          ['wird gemacht', 'man macht'],
        ]),
        speak(
          'Wsef 3amaliya',
          'Wsef 3amaliya t3refha mzyan (kifach kayttsna3 l-khobz, kifach kat-tsifet l-colis, kifach kat-t3alej l-ma f l-mdina…) b Passiv: zuerst, dann, danach, zum Schluss.',
          ['Zuerst wird das Mehl mit Wasser und Hefe gemischt.', 'Dann muss der Teig eine Stunde ruhen.', 'Danach wird er geformt und in den Ofen geschoben.', 'Zum Schluss ist das Brot fertig gebacken.'],
        ),
        graded(choice('"Das Rathaus ___ 1850 gebaut."', ['wurde', 'ist', 'hat'], 0)),
        graded(choice('"Der Fehler ist inzwischen behoben ___."', ['worden', 'geworden', 'werden'], 0)),
        graded(choice('"Die Medikamente müssen kühl gelagert ___."', ['werden', 'worden', 'sein werden'], 0)),
        graded(choice('"Psst! Das Baby schläft, die Tür ___ geschlossen." (7ala)', ['ist', 'wird'], 0)),
        graded(choice('"Amerika wurde ___ Kolumbus entdeckt."', ['von', 'durch', 'mit'], 0)),
        graded(choice('"Das lässt sich nicht ändern." =', ['Das kann nicht geändert werden.', 'Das darf nicht geändert werden.', 'Das wurde nicht geändert.'], 0)),
        graded(gap('Kemmel', 'Der Antrag ist bis zum 30. Juni ab___geben. (khass ytsallem)', 'zu')),
        graded(choice('"die Herausforderung" =', ['t-ta7addi', 't-ta9addom', 'l-jihaz'], 0)),
        graded(translate("Terjem l Passiv", 'Man hat das Problem gelöst.', ['Das Problem ist gelöst worden.', 'Das Problem wurde gelöst.'])),
        graded(dictation('Sme3 o kteb', 'Das Gerät ist letzte Woche installiert worden.')),
        summary(
          [
            'Daba t9der twsef ikhtira3at o 3amaliyat, o tnaqech l-ijabiyat o l-makhatir d t-tiknoloujiya.',
            'F l-unité 5: s-s7a o t-tghdiya — **Partizipialattribute** (die von Ärzten empfohlene Diät) o **wasf l-graphiques**.',
          ],
          ['Twsef 3amaliya', 'Tkhdem Passiv f kol l-azmina', 'Tkhdem l-bada2il dyal l-Passiv'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
