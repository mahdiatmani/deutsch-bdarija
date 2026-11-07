import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'B1',
  number: 4,
  title: 'Gesundheit',
  description: "N-nidam s-si77i, t-ta2min, l-mostachfa, o l-wi9aya — b l-Passiv f kol l-azmina o m3a l-Modalverben.",
  icon: 'local_hospital',
  objectives: [
    'Tfhem n-nidam s-si77i f Almaniya (gesetzlich / privat)',
    'Thder m3a t-tbib b tafasil (l-a3rad, t-tarikh s-si77i)',
    'Tchar7 procédure b l-Passiv: wurde / ist … worden',
    'Tkhdem l-Passiv m3a l-Modalverben: "muss gemacht werden"',
    'Tfhem nass 3la l-wi9aya o tlakhkhsou',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Im Krankenhaus — aus Youssefs Sicht',
      description: 'L-kalimat dyal s-sbitar, l-amrad, o kifach thder 3la t-tarikh s-si77i.',
      minutes: 30,
      kind: 'input',
      goals: ['Tsemmi l-a9sam o l-mihan f s-sbitar', 'Tdir "Anamnese" (sou2alat 3la t-tarikh s-si77i)', 'Tchar7 l-a3rad b tafasil'],
      steps: [
        intro(
          'Patientenaufnahme',
          'Youssef daba f l-3am t-tani d l-Ausbildung. Lyouma kay3awen f **Patientenaufnahme** (t-tsjil dyal l-mrad). Ja mrid jdid, Herr Vogel, o Youssef khasso ydir m3ah **Anamnese**: sou2alat 3la s-s7a dyalou.',
          ['Tsemmi s-sbitar', 'Tsowwel 3la t-tarikh s-si77i', 'Tchar7 l-a3rad'],
        ),
        dialogue(
          'Die Anamnese',
          [
            ['Youssef', 'Guten Tag, Herr Vogel. Ich bin Youssef, Auszubildender in der Pflege. Ich stelle Ihnen ein paar Fragen, ja?', 'Nharek sa3id a si Vogel. Ana Youssef, f t-takwin d t-tamrid. Ghadi nsowlek chi as2ila, wakha?'],
            ['Herr Vogel', 'Ja, natürlich.', 'Ah, tabi3i.'],
            ['Youssef', 'Welche Beschwerden haben Sie?', 'Chno l-a3rad li 3endek?'],
            ['Herr Vogel', 'Seit drei Tagen habe ich starke Schmerzen im Oberbauch, vor allem nach dem Essen. Und mir ist oft übel.', 'Men 3 iyyam 3endi wja3 9wi f l-fou9 d l-kerch, khossousan men b3d l-makla. O ghaliban kanbghi nrje3.'],
            ['Youssef', 'Haben Sie Vorerkrankungen? Zum Beispiel Diabetes oder Bluthochdruck?', 'Wach 3endek amrad 9dima? B7al s-sokkar wla t-tension?'],
            ['Herr Vogel', 'Ich habe Bluthochdruck. Dafür nehme ich jeden Morgen eine Tablette.', '3endi t-tension. Kanakhod kina kol sba7.'],
            ['Youssef', 'Sind Sie gegen etwas allergisch?', 'Wach 3endek l-7assasiya men chi 7aja?'],
            ['Herr Vogel', 'Ja, gegen Penicillin.', 'Ah, men l-pénicilline.'],
            ['Youssef', 'Das ist wichtig, das notiere ich. Wurden Sie schon einmal operiert?', 'Hadchi mohim, ghadi nktbou. Wach dirt chi 3amaliya 9bel?'],
            ['Herr Vogel', 'Ja, mir wurde vor zehn Jahren der Blinddarm entfernt.', 'Ah, 7iydou liya l-mosrana z-zayda hadi 10 snin.'],
          ],
        ),
        vocab('Im Krankenhaus — F s-sbitar', [
          ['die Station', 'l-9ism / l-jana7', 'die Stationen'],
          ['die Notaufnahme', 'l-isti3jal', ''],
          ['die Pflegekraft / die Pflegefachfrau, der Pflegefachmann', 'l-fermli / l-fermliya', ''],
          ['der Facharzt / die Fachärztin', 't-tbib l-mokhtass', ''],
          ['die Beschwerden (Pl.)', 'l-a3rad / ch-chakawi', ''],
          ['die Vorerkrankung', 'l-marad l-9dim', ''],
          ['der Bluthochdruck', 't-tension (l-mortafi3a)', ''],
          ['der Diabetes', 'l-marad d s-sokkar', ''],
          ['allergisch gegen', '3endou l-7assasiya men', ''],
          ['die Untersuchung / untersuchen', 'l-fa7s / fe7es', ''],
          ['operieren / die Operation', 'dar 3amaliya / l-3amaliya', ''],
          ['die Diagnose', 't-tachkhis', ''],
          ['die Behandlung / behandeln', 'l-3ilaj / 3alaj', ''],
          ['die Überweisung', 'l-wer9a l t-tbib l-mokhtass', ''],
          ['übel', 'fiya t-tqiyya', '', ['Mir ist übel.', 'Kanbghi nrje3.']],
        ]),
        explain(
          'Tchar7 l-a3rad b tafasil',
          md`
            F B1 machi kafi "Ich habe Bauchschmerzen". Khass **tafasil**:

            | Sou2al | Jawab |
            |---|---|
            | **Wo?** | "im Oberbauch / im unteren Rücken / auf der linken Seite" |
            | **Seit wann?** | "seit drei Tagen / seit letzter Woche" |
            | **Wie?** | "stechende / dumpfe Schmerzen" (b7al l-ibra / thqil) — "ständig / ab und zu" |
            | **Wann stärker?** | "nach dem Essen / nachts / beim Gehen" |
            | **Was hilft?** | "Wenn ich mich hinlege, wird es besser." |

            **Sou2alat dyal t-tbib:** "Welche Beschwerden haben Sie?" · "Nehmen Sie Medikamente?" · "Haben Sie Vorerkrankungen?" · "Sind Sie gegen etwas allergisch?" · "Gibt es Krankheiten in Ihrer Familie?"
          `,
          [
            ['Ich habe stechende Schmerzen auf der rechten Seite.', '3endi wja3 b7al l-ibra f l-jiha l-yeminiya.'],
            ['Die Schmerzen werden nachts stärker.', 'L-wja3 kayzid f l-lil.'],
          ],
        ),
        match('Rbet', [
          ['die Beschwerden', 'l-a3rad'],
          ['der Bluthochdruck', 't-tension'],
          ['die Diagnose', 't-tachkhis'],
          ['die Überweisung', 'l-wer9a l t-tbib l-mokhtass'],
          ['untersuchen', 'fe7es'],
        ]),
        choice('Men ach 3endou Herr Vogel l-7assasiya?', ['Men l-makla', 'Men l-pénicilline', 'Men walou'], 1),
        choice('Imta kayzid l-wja3?', ['F s-sba7', 'Men b3d l-makla', 'F l-lil'], 1),
        gap('Kemmel', 'Ich bin ___ Penicillin allergisch.', 'gegen'),
        order('Rtteb', 'Seit wann haben Sie diese Beschwerden?'),
        speak(
          'Anamnese: dir s-sou2alat',
          'Nta l-fermli/t-tbib. Sowwel l-mrid 3la: l-a3rad, men imta, l-amrad l-9dima, d-dwa, o l-7assasiya.',
          ['Welche Beschwerden haben Sie?', 'Seit wann haben Sie die Schmerzen?', 'Haben Sie Vorerkrankungen?', 'Nehmen Sie regelmäßig Medikamente?', 'Sind Sie gegen etwas allergisch?'],
        ),
        graded(choice('"die Vorerkrankung" hiya…', ['marad 9dim', 'l-wi9aya', 'l-3amaliya'], 0)),
        graded(choice('"stechende Schmerzen" =', ['wja3 b7al l-ibra', 'wja3 thqil', 'ma kaynch l-wja3'], 0)),
        graded(gap('Kemmel', 'Der Arzt ___ den Patienten. (fe7es)', 'untersucht')),
        graded(translate("Terjem l l'Almaniya", 'Kanbghi nrje3. (Mir …)', ['Mir ist übel.', 'Mir ist schlecht.'])),
        summary(
          [
            'S-sbitar: **die Station, die Notaufnahme, die Untersuchung, die Diagnose, die Behandlung, die Operation**.',
            'Anamnese: **Beschwerden, Vorerkrankungen, Medikamente, Allergien**.',
            'Tafasil: **wo, seit wann, wie (stechend / dumpf), wann stärker**.',
          ],
          ['Tsowwel 3la t-tarikh s-si77i', 'Tchar7 l-a3rad b tafasil'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Der Patient wurde operiert — Passiv',
      description: 'L-Passiv f l-Präsens, l-Präteritum, l-Perfekt, o m3a l-Modalverben.',
      minutes: 40,
      kind: 'grammar',
      goals: ['Tdir l-Passiv f l-Präteritum (wurde) o l-Perfekt (ist … worden)', 'Tdir l-Passiv m3a l-Modalverben', 'T7awwel men Aktiv l Passiv'],
      steps: [
        intro(
          'F s-sbitar: l-fi3l a mohim men l-fa3il',
          md`
            F s-sbitar o f l-wra9 r-rasmiya bzaf d l-jmel **bla fa3il**: "Mir **wurde** der Blinddarm **entfernt**." "Der Patient **ist** gestern **operiert worden**." "Die Medikamente **müssen** genau **dosiert werden**."
            F A2 t3llemti l-Passiv f l-Präsens. Daba l-azmina l-khrin.
          `,
          ['Passiv Präteritum', 'Passiv Perfekt', 'Passiv m3a Modalverb'],
        ),
        explain(
          'L-Passiv f kol l-azmina',
          md`
            | Zaman | Chkel | Mital |
            |---|---|---|
            | Präsens | **wird** + P II | Der Patient **wird** operiert. |
            | Präteritum | **wurde** + P II | Der Patient **wurde** operiert. |
            | Perfekt | **ist** + P II + **worden** | Der Patient **ist** operiert **worden**. |
            | Plusquamperfekt | **war** + P II + **worden** | Der Patient **war** operiert **worden**. |
            | Futur | **wird** + P II + **werden** | Der Patient **wird** operiert **werden**. |

            **wurde:** ich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden.

            ⚠️ F l-Perfekt dyal l-Passiv: **worden** (machi "geworden") o dima m3a **sein**:
            > Er **ist** gestern **untersucht worden**. (≠ Er ist Arzt geworden = wella tbib)
          `,
          [
            ['Das Krankenhaus wurde 1905 gebaut.', 'S-sbitar tbna f 1905.'],
            ['Die Ergebnisse sind schon geschickt worden.', 'N-nata2ij ttsfftou.'],
            ['Wann wurden Sie zuletzt geimpft?', 'Imta akhir merra tl99a7ti?'],
          ],
        ),
        gap('Kemmel (Präteritum)', 'Der Patient ___ gestern entlassen. (werden)', 'wurde'),
        gap('Kemmel (Präteritum)', 'Die Proben ___ ins Labor gebracht.', 'wurden'),
        gap('Kemmel (Perfekt)', 'Die Operation ist erfolgreich durchgeführt ___.', 'worden'),
        choice('"Er ist Krankenpfleger ___." (wella)', ['geworden', 'worden'], 0),
        choice('"Er ist gestern operiert ___." (Passiv)', ['geworden', 'worden'], 1),
        explain(
          'Passiv m3a Modalverb',
          md`
            **Modalverb (blasa 2) + Partizip II + werden (f l-akhir)**

            | Aktiv | Passiv |
            |---|---|
            | Man **muss** den Patienten sofort **operieren**. | Der Patient **muss** sofort **operiert werden**. |
            | Man **darf** hier nicht **rauchen**. | Hier **darf** nicht **geraucht werden**. |
            | Man **kann** den Termin online **buchen**. | Der Termin **kann** online **gebucht werden**. |
            | Man **soll** die Tablette vor dem Essen **nehmen**. | Die Tablette **soll** vor dem Essen **genommen werden**. |

            F l-Präteritum: "Der Patient **musste** operiert **werden**."
            F Nebensatz: "…, weil der Patient sofort operiert werden **musste**."
          `,
        ),
        choice('Passiv: "Man muss die Wunde reinigen."', ['Die Wunde muss gereinigt werden.', 'Die Wunde wird gereinigt müssen.', 'Die Wunde muss reinigen werden.'], 0),
        gap('Kemmel', 'Das Medikament darf nicht mit Alkohol genommen ___.', 'werden'),
        gap('Kemmel', 'Die Formulare müssen bis Freitag ___ werden. (abgeben)', 'abgegeben'),
        explain(
          'Aktiv → Passiv: khatwa b khatwa',
          md`
            > **Aktiv:** Die Ärztin **untersuchte** den Patienten.

            1. L-maf3oul bih (Akk) → fa3il (Nom): den Patienten → **der Patient**
            2. L-fi3l → **werden** f nefs z-zaman + Partizip II: untersuchte → **wurde … untersucht**
            3. L-fa3il l-asli (ila bghiti) → **von + Dat**: **von der Ärztin**

            > **Passiv:** Der Patient **wurde** (von der Ärztin) **untersucht**.

            **"man"** f l-Aktiv kayt7iyed f l-Passiv: "Man impft die Kinder." → "Die Kinder **werden geimpft**."
          `,
        ),
        order('Rtteb', 'Der Patient wurde von der Ärztin untersucht.'),
        order('Rtteb', 'Die Medikamente müssen genau dosiert werden.'),
        translate("Terjem l l'Almaniya (Passiv Präteritum)", 'S-sbitar tbna f 1960.', ['Das Krankenhaus wurde 1960 gebaut.']),
        graded(choice('Passiv Präteritum dyal "Man testet das Blut."', ['Das Blut wird getestet.', 'Das Blut wurde getestet.', 'Das Blut ist getestet worden.'], 1)),
        graded(gap('Kemmel (Perfekt)', 'Der Brief ist schon geschickt ___.', 'worden')),
        graded(gap('Kemmel', 'Die Patientin ___ morgen operiert. (Präsens)', 'wird')),
        graded(choice('"Hier ___ nicht telefoniert werden." (mamnou3)', ['muss', 'darf', 'kann'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Der Termin kann online gebucht werden.', 'Der Termin kann online werden gebucht.', 'Der Termin wird online gebucht können.'], 0)),
        graded(gap('Kemmel', 'Wann ___ Sie zuletzt geimpft? (Präteritum)', 'wurden')),
        graded(translate("Terjem l l'Almaniya (Passiv)", 'Khass l-mrid yt3alej dghya.', ['Der Patient muss schnell behandelt werden.', 'Der Patient muss sofort behandelt werden.'])),
        summary(
          [
            'Passiv: Präsens **wird** · Präteritum **wurde** · Perfekt **ist … worden** · Futur **wird … werden**.',
            'M3a Modalverb: **muss / kann / darf … + Partizip II + werden**.',
            '**worden** (Passiv) ≠ **geworden** (wella).',
            'Chkoun: **von + Dativ**.',
          ],
          ['Tchar7 procédures f l-madi b l-Passiv', 'Tkhdem l-Passiv m3a l-Modalverben'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Das Gesundheitssystem & Vorsorge',
      description: 'T9ra 3la n-nidam s-si77i (GKV / PKV), tsme3 3la l-wi9aya, o tkteb mulakhkhas.',
      minutes: 35,
      kind: 'skills',
      goals: ['Tfhem l-fer9 bin l-gesetzliche o l-private Krankenversicherung', 'Tfhem i3lan 3la l-wi9aya', 'Tlakhkhes nass', 'T3ber 3la ra2yek f n-nidam s-si77i'],
      steps: [
        intro(
          'Gesetzlich oder privat?',
          'Salma ghadi tbda l-khedma l-ouwla l-kamla men b3d l-9raya. Khassha tkhtar **Krankenkasse**. Lukas kaygoulha "Privat ist besser!" — wach s7i7? 9rat ma9al.',
          ['Tfhem n-nidam', 'Tfhem l-wi9aya', 'Tlakhkhes'],
        ),
        reading(
          'Wie funktioniert die Krankenversicherung in Deutschland?',
          md`
            In Deutschland muss jeder krankenversichert sein. Es gibt zwei Systeme: die gesetzliche Krankenversicherung (GKV) und die private Krankenversicherung (PKV).

            Etwa 90 Prozent der Menschen sind gesetzlich versichert. Der Beitrag hängt vom Einkommen ab: Arbeitnehmer zahlen rund acht Prozent ihres Bruttogehalts, den gleichen Anteil zahlt der Arbeitgeber. Kinder und Ehepartner ohne eigenes Einkommen werden kostenlos mitversichert. Das Prinzip heißt Solidarität: Wer mehr verdient, zahlt mehr – aber alle bekommen die gleichen Leistungen.

            Privat versichern können sich vor allem Selbstständige, Beamte und Angestellte mit einem hohen Einkommen. Hier hängt der Beitrag nicht vom Einkommen ab, sondern vom Alter und vom Gesundheitszustand. Privatpatienten bekommen oft schneller einen Termin, aber im Alter können die Beiträge sehr teuer werden. Und wer einmal privat versichert ist, kann nur schwer zurück in die gesetzliche Versicherung.

            Kritiker sagen, dass durch die zwei Systeme eine „Zwei-Klassen-Medizin" entsteht. Befürworter meinen dagegen, dass die Konkurrenz die Qualität verbessert.
          `,
          {
            text: '9ra l-ma9al.',
            glossary: [
              ['der Beitrag', 'l-ichtirak (l-flous li katkhelles)'],
              ['abhängen von', 'ta3alla9 b'],
              ['das Einkommen', 'd-dakhl'],
              ['die Leistung', 'l-khidma (li kayghtti t-ta2min)'],
              ['der Beamte', 'l-mowadhef d d-dawla'],
              ['der Gesundheitszustand', 'l-7ala s-si77iya'],
              ['die Zwei-Klassen-Medizin', 't-tib b jouj d t-tabaqat'],
              ['der Befürworter', 'l-mo2ayyid'],
            ],
          },
        ),
        choice('Ch7al d n-nas f GKV?', ['50 %', '~90 %', '10 %'], 1),
        choice('F GKV, l-ichtirak kayt3alla9 b…', ['l-3omr', 'd-dakhl', 's-s7a'], 1),
        choice('Chno l-mochkil dyal PKV f l-kobr?', ['Ma kaytghtach', 'Kaywelli ghali bzaf', 'Kaytsedd'], 1),
        choice('Chno kaygoulou l-montaqidin?', ['Kayna "Zwei-Klassen-Medizin"', 'Kolchi mzyan', 'L-PKV rkhisa'], 0),
        listening(
          'Radiobeitrag: Vorsorge',
          [
            ['Radio', 'Viele Krankheiten können früh erkannt werden – wenn man zur Vorsorge geht. Doch nur jeder Zweite nutzt die kostenlosen Angebote der Krankenkassen.', 'Bzaf d l-amrad y9adrou ytkchfou bekri — ila mchiti l l-wi9aya. Walakin ghir ness n-nas kaystafdou men l-khidmat l-majjaniya.'],
            ['Radio', 'Ab 35 Jahren wird zum Beispiel alle drei Jahre ein Check-up bezahlt. Dabei werden Blutdruck, Blutzucker und Cholesterin gemessen.', 'Men 35 3am, b7al l-mithal, kaytkhelles check-up kol 3 snin. Kay9isou t-tension, s-sokkar o l-cholestérol.'],
            ['Radio', 'Auch der Zahnarzt sollte zweimal im Jahr besucht werden. Wer das in einem Bonusheft dokumentieren lässt, bekommt später mehr Geld für Zahnersatz.', 'O t-tbib d s-snan khass yt-zar jouj d l-merrat f l-3am. Li kaysjjel dakchi f Bonusheft kayakhod men b3d flous ktar l s-snan s-sina3iya.'],
            ['Radio', 'Und vergessen Sie nicht die Impfungen: Ihr Impfpass sollte regelmäßig kontrolliert werden.', 'O ma tnsach l-l9a7at: Impfpass dyalek khass ytchaf b intidham.'],
          ],
        ),
        choice('Men ch7al d l-3omr kayn check-up kol 3 snin?', ['18', '35', '50'], 1),
        choice('Ch7al d l-merrat khass tmchi l tbib s-snan?', ['Merra f l-3am', 'Jouj d l-merrat f l-3am', 'Kol chhar'], 1),
        choice('Chno kay3tik Bonusheft?', ['L-wi9aya fabor', 'Flous ktar l s-snan s-sina3iya', 'Rendez-vous dghya'], 1),
        culture(
          'N-nidam s-si77i: nasa2i7 3amaliya',
          md`
            - **Krankenkasse** (GKV): t9der tkhtar ay wa7da (TK, AOK, Barmer…). Kolhom kay3tiw tagriban nefs l-khidmat.
            - **Zuzahlung:** 10 € f l-lil f s-sbitar (max 28 youm f l-3am), 5–10 € 3la d-dwa.
            - **Zahnarzt:** l-Krankenkasse kat-khelles ghir jouz2 men s-snan s-sina3iya — **Bonusheft** kay3awen.
            - **Impfpass:** dfter dyal l-l9a7at — 7tafed bih!
            - **Patientenrechte:** 3endek l-7a99 tfhem t-tachkhis o t-ta3alij. Ila ma fhemtich: "Können Sie das bitte einfacher erklären?" — o f bzaf d s-sbitarat kayn **Dolmetscher** (mtarjim).
          `,
        ),
        explain(
          'Tlakhkhes nass ma3loumati',
          md`
            **Zusammenfassung** dyal nass ma3loumati (B1/B2):

            1. **Mawdou3:** "Der Text informiert über …" / "Im Text geht es um …"
            2. **L-afkar r-ra2isiya** (3–4) — b kalimatek, b l-Präsens.
            3. **Mouwasilat:** "Zuerst wird erklärt, … Außerdem … Schließlich …"
            4. **L-ara2 dyal l-akhrin** (ila kanou f n-nass): "Kritiker meinen, dass … Befürworter sagen dagegen, …"
            5. Ma tzidch ra2yek **f l-mulakhkhas**.
          `,
        ),
        pron(
          'Kalimat twila mrekkba',
          'L-kalimat l-mrekkba kayakhdou l-accent 3la **l-jouz2 l-lowel**: KRANKENversicherung, GESUNDheitssystem. 9essemhom f rassek 9bel ma tgoulhom.',
          [
            ['Krankenversicherung', 'Kranken | versicherung'],
            ['Gesundheitszustand', 'Gesundheits | zustand'],
            ['Vorsorgeuntersuchung', 'Vorsorge | untersuchung'],
            ['Zwei-Klassen-Medizin', 'Zwei | Klassen | Medizin'],
          ],
        ),
        write(
          'Zusammenfassung + ra2yek',
          md`
            Kteb **mulakhkhas** dyal l-ma9al 3la l-Krankenversicherung (~80 kelma), o men b3d **fa9ra 9sira b ra2yek** (~40 kelma): wach n-nidam dyal jouj d l-anwa3 3adil? Khdem **jouj jmel f l-Passiv**.
          `,
          ['Der Text informiert über …', 'GKV: chkoun, ch7al, l-mabda2', 'PKV: chkoun, l-mzaya o l-3ouyoub', 'L-ara2 (Kritiker / Befürworter)', 'Ra2yek (Meiner Meinung nach …)', '2 jmel f l-Passiv'],
          'Der Text informiert über die Krankenversicherung in Deutschland. Es gibt zwei Systeme: die gesetzliche und die private Versicherung. In der gesetzlichen Versicherung, in der etwa 90 Prozent versichert sind, wird der Beitrag nach dem Einkommen berechnet. Familienmitglieder ohne Einkommen werden kostenlos mitversichert. Privat versichern können sich vor allem Selbstständige, Beamte und Gutverdiener. Sie bekommen oft schneller Termine, aber im Alter wird es teuer. Kritiker sprechen von einer Zwei-Klassen-Medizin.\n\nMeiner Meinung nach ist das Solidaritätsprinzip sehr gerecht, weil alle die gleichen Leistungen bekommen. Ich finde es aber nicht fair, dass Privatpatienten schneller behandelt werden.',
          100,
        ),
        graded(choice('"der Beitrag" f t-ta2min howa…', ['l-ichtirak', 'l-khidma', 'l-mrid'], 0)),
        graded(choice('"die Vorsorge" hiya…', ['l-wi9aya', 'l-3amaliya', 'l-isti3jal'], 0)),
        graded(choice('F l-mulakhkhas katkhdem…', ['ra2yek', 'l-afkar r-ra2isiya b kalimatek', 'l-jmel l-asliya kamlin'], 1)),
        graded(dictation('Sme3 o kteb', 'Der Beitrag hängt vom Einkommen ab.')),
        summary(
          [
            '**GKV** (90 %, 3la 7sab d-dakhl, solidarité) ↔ **PKV** (Selbstständige, Beamte, dakhl 3ali; 3la 7sab l-3omr o s-s7a).',
            'Wi9aya: **Check-up ab 35, Zahnarzt 2× / Jahr, Bonusheft, Impfpass**.',
            'Mulakhkhas: **Der Text informiert über … · Kritiker meinen … · Befürworter sagen …**',
          ],
          ['Tfhem n-nidam s-si77i', 'Tfhem i3lan 3la l-wi9aya', 'Tlakhkhes nass ma3loumati'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — B1, Unité 4',
      description: 'Muraja3a: s-sbitar, n-nidam s-si77i, l-Passiv f kol l-azmina — o t-test.',
      minutes: 25,
      kind: 'review',
      goals: ['Traja3 l-Passiv', 'Thder m3a t-tbib', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'Anamnese, n-nidam s-si77i, o l-Passiv (wird / wurde / ist … worden / muss … werden).', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-Passiv f jadwal',
          md`
            | | |
            |---|---|
            | Präsens | Das Blut **wird** untersucht. |
            | Präteritum | Das Blut **wurde** untersucht. |
            | Perfekt | Das Blut **ist** untersucht **worden**. |
            | Modalverb | Das Blut **muss** untersucht **werden**. |
          `,
        ),
        dialogue(
          'Entlassung',
          [
            ['Ärztin', 'Herr Vogel, gute Nachrichten: Sie können morgen entlassen werden.', 'Si Vogel, khbar zwin: t9der tkhrej ghedda.'],
            ['Herr Vogel', 'Wunderbar! Was wurde denn genau gemacht?', 'Mzyan bzaf! Chno tdar b d-dbt?'],
            ['Ärztin', 'Ihre Gallenblase wurde entfernt. Die Operation ist problemlos verlaufen.', 'T7iydat lik l-merara. L-3amaliya dazet bla machakil.'],
            ['Herr Vogel', 'Und muss ich noch etwas beachten?', 'O wach khassni nrd l-bal l chi 7aja?'],
            ['Ärztin', 'In den nächsten Wochen sollte fettiges Essen vermieden werden. Der Bericht wird an Ihren Hausarzt geschickt.', 'F s-simanat l-jayin khass ttjenneb l-makla l-mdehhna. T-ta9rir ghadi ytsifet l t-tbib dyalek.'],
          ],
        ),
        choice('Chno tdar l Herr Vogel?', ['T7iydat lih l-mosrana z-zayda', 'T7iydat lih l-merara', 'Ma tdar lih walou'], 1),
        choice('Chno khass yjtnneb?', ['L-makla l-mdehhna', 'R-riyada', 'L-ma'], 0),
        gap('Kemmel', 'Ihre Gallenblase ___ entfernt. Der Bericht ___ an Ihren Hausarzt geschickt.', ['wurde', 'wird']),
        match('Rbet', [
          ['entlassen werden', 'khrej men s-sbitar'],
          ['die Gallenblase', 'l-merara'],
          ['vermeiden', 'tjenneb'],
          ['der Bericht', 't-ta9rir'],
          ['problemlos', 'bla machakil'],
        ]),
        speak(
          'Role-play: chra7 procédure',
          'Nta fermli. Chra7 l mrid chno ghadi ytdar lih ghedda (b l-Passiv): l-fa7s d d-dem f s-sba7, l-radio f 10, o l-3amaliya f l-3chiya.',
          ['Morgen früh wird Ihnen Blut abgenommen.', 'Um zehn Uhr wird ein Röntgenbild gemacht.', 'Am Nachmittag werden Sie operiert.', 'Vor der Operation dürfen Sie nichts essen.'],
        ),
        graded(choice('Passiv Präteritum dyal "Man baut eine neue Station."', ['Eine neue Station wird gebaut.', 'Eine neue Station wurde gebaut.', 'Eine neue Station ist gebaut.'], 1)),
        graded(gap('Kemmel', 'Der Patient ist gestern entlassen ___.', 'worden')),
        graded(choice('"Die Tabletten ___ vor dem Essen genommen werden." (khass)', ['müssen', 'werden', 'wurden'], 0)),
        graded(choice('"Sie ist Ärztin ___."', ['worden', 'geworden'], 1)),
        graded(gap('Kemmel', 'Das Formular kann auch online ausgefüllt ___.', 'werden')),
        graded(choice('F GKV l-ichtirak kayt3alla9 b…', ['l-3omr', 'd-dakhl', 's-s7a'], 1)),
        graded(choice('"die Überweisung" 3and t-tbib hiya…', ['virement', 'l-wer9a l t-tbib l-mokhtass', 'l-wasfa'], 1)),
        graded(choice('Bach tsowwel 3la l-a3rad:', ['Welche Beschwerden haben Sie?', 'Wie heißen Sie?', 'Was kostet das?'], 0)),
        graded(translate("Terjem l l'Almaniya (Passiv Perfekt)", 'N-nata2ij ttsfftou.', ['Die Ergebnisse sind geschickt worden.', 'Die Ergebnisse sind verschickt worden.'])),
        graded(dictation('Sme3 o kteb', 'Die Operation ist problemlos verlaufen.')),
        summary(
          [
            'Daba t9der tdir anamnese, tfhem n-nidam s-si77i o tchar7 procédures b l-Passiv.',
            'F l-unité 5: l-médias o l-ara2 — **Konjunktiv II** l l-7alat l-ghir wa9i3iya o **Redemittel** dyal n-n9ach.',
          ],
          ['Tsowwel 3la t-tarikh s-si77i', 'Tfhem n-nidam s-si77i', 'Tkhdem l-Passiv f kol l-azmina'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
