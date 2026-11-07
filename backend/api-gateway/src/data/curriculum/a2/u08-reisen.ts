import {
  choice, culture, dialogue, dictation, explain, gap, graded, intro, listening, match, md, order, pron, reading,
  speak, summary, translate, unit, vocab, write,
} from '../dsl';

export default unit({
  level: 'A2',
  number: 8,
  title: 'Unterwegs & Reisen',
  description: "Tkhtat s-safar, t7jez l-otel, tt9add mochkil f t-tri9 — b prépositions dyal t-tri9 o l-wa9t, o \"deshalb\".",
  icon: 'luggage',
  objectives: [
    'T7jez bit f l-otel wla f auberge',
    'Tchar7 t-tri9 b tafasil: durch, über, entlang, an … vorbei',
    'Tkhdem vor, seit, für, in, nach, ab m3a l-wa9t',
    'T3ti n-natija b "deshalb"',
    'Tfhem l-7o9ou9 dyalek ila t3ettel t-tran',
  ],
  lessons: [
    // ───────────────────────── Lesson 1 ─────────────────────────
    {
      title: 'Ein Wochenende in Hamburg',
      description: 'Tkhtat s-safar, t7jez l-otel, o l-kalimat dyal s-safar.',
      minutes: 25,
      kind: 'input',
      goals: ['Tsemmi l-kalimat dyal s-safar o s-sakan', 'T7jez bit f t-tilifoun', 'Tsowwel 3la t-taman o l-ftour'],
      steps: [
        intro(
          'Rihla l Hamburg',
          'Lukas std3a Youssef o Salma ymchiw m3ah l Hamburg, l-mdina fin tzad. Ghadi ymchiw b t-tran nhar l-jem3a o yrj3ou l-7ad. Salma kat7jez l-otel.',
          ['Tsemmi l-kalimat dyal s-safar', 'T7jez', 'Tsowwel'],
        ),
        dialogue(
          'Eine Zimmerreservierung',
          [
            ['Rezeption', 'Hotel Elbblick, guten Tag! Was kann ich für Sie tun?', 'Otel Elbblick, nharek sa3id! Chno n9der ndir lik?'],
            ['Salma', 'Guten Tag. Ich möchte für nächstes Wochenende zwei Zimmer reservieren: ein Doppelzimmer und ein Einzelzimmer.', 'Nharek sa3id. Bghit n7jez jouj d l-byout l-weekend l-jay: bit l jouj o bit l wa7ed.'],
            ['Rezeption', 'Von Freitag bis Sonntag? Also für zwei Nächte?', 'Men l-jem3a l l-7ad? Ya3ni jouj d l-liyali?'],
            ['Salma', 'Genau. Was kostet das?', 'Bdebt. Ch7al?'],
            ['Rezeption', 'Das Doppelzimmer kostet 110 Euro pro Nacht, das Einzelzimmer 75 Euro. Das Frühstück ist inklusive.', 'L-bit d jouj b 110 euro l l-lila, o l-bit d wa7ed b 75. L-ftour m3ah.'],
            ['Salma', 'Gut. Gibt es WLAN im Zimmer?', 'Mzyan. Wach kayn WiFi f l-bit?'],
            ['Rezeption', 'Ja, kostenlos. Und bis wann können Sie anreisen?', 'Ah, fabor. O 7tal imta t9dri twslou?'],
            ['Salma', 'Wir kommen am Freitag gegen 19 Uhr an.', 'Ghadi nwslou l-jem3a ta9riban f 19.'],
            ['Rezeption', 'Kein Problem. Die Rezeption ist rund um die Uhr besetzt. Ich brauche nur noch Ihren Namen und Ihre E-Mail-Adresse.', 'Machi mochkil. L-accueil m7loul 24 sa3a. Khassni ghir smiytek o l-email dyalek.'],
          ],
        ),
        vocab('Reisen & Übernachten — S-safar o l-mbit', [
          ['die Reise', 's-safar / r-rihla', 'die Reisen'],
          ['die Unterkunft', 'l-blasa fin tbat', ''],
          ['die Jugendherberge', 'l-auberge d ch-chabab', ''],
          ['die Ferienwohnung', 'appartement d l-3otla', ''],
          ['das Einzelzimmer / das Doppelzimmer', 'bit l wa7ed / bit l jouj', ''],
          ['reservieren / buchen', '7jez', ''],
          ['die Übernachtung', 'l-mbit (lila)', '', ['Übernachtung mit Frühstück', 'L-mbit m3a l-ftour']],
          ['inklusive', 'dakhel f t-taman', ''],
          ['anreisen / die Anreise', 'wsel / l-wsoul', ''],
          ['abreisen / die Abreise', 'mcha / l-mghadra', ''],
          ['der Koffer', 'l-valise', 'die Koffer'],
          ['packen', 'jme3 l-7wayej (f l-valise)', ''],
          ['die Sehenswürdigkeit', 'l-ma3lama s-sya7iya', 'die Sehenswürdigkeiten'],
          ['die Führung', 'z-zyara m3a guide', ''],
        ]),
        explain(
          'T7jez o tsowwel',
          md`
            | Bach… | Katgoul |
            |---|---|
            | t7jez | "Ich möchte ein Zimmer für zwei Nächte reservieren." |
            | t-tarikh | "vom 12. bis (zum) 14. Mai" / "von Freitag bis Sonntag" |
            | t-taman | "Was kostet das Zimmer pro Nacht?" — "Ist das Frühstück inklusive?" |
            | tsowwel | "Gibt es WLAN / einen Parkplatz?" — "Ab wann kann man einchecken?" |
            | tlghi | "Ich möchte meine Reservierung stornieren." |

            "**pro** Nacht / **pro** Person" = *l kol lila / l kol wa7ed*.
          `,
          [
            ['Haben Sie noch ein Zimmer frei?', 'Wach mazal 3endkom chi bit khawi?'],
            ['Ab wann kann man einchecken? — Ab 15 Uhr.', 'Men imta n9der ndkhol? — Men 15.'],
          ],
        ),
        match('Rbet', [
          ['die Unterkunft', 'l-blasa fin tbat'],
          ['der Koffer', 'l-valise'],
          ['abreisen', 'mcha / ghada'],
          ['inklusive', 'dakhel f t-taman'],
          ['stornieren', 'lgha (annuler)'],
        ]),
        choice('Ch7al ghadi tkhelles Salma l-bit d jouj f jouj liyali?', ['110 €', '220 €', '185 €'], 1),
        choice('Wach l-ftour m3a t-taman?', ['Ah', 'La'], 0),
        gap('Kemmel', 'Das Zimmer kostet 75 Euro ___ Nacht.', 'pro'),
        order('Rtteb', 'Ich möchte ein Doppelzimmer reservieren.'),
        speak(
          'T7jez f t-tilifoun',
          'Ttasel b auberge: t7jez bit l jouj men 3 l 5 juillet, sowwel 3la t-taman o wach l-ftour dakhel.',
          ['Guten Tag, ich möchte ein Doppelzimmer reservieren.', 'Vom dritten bis zum fünften Juli.', 'Was kostet das pro Nacht?', 'Ist das Frühstück inklusive?'],
        ),
        graded(choice('"die Jugendherberge" hiya…', ['otel ghali', 'l-auberge d ch-chabab', 'appartement'], 1)),
        graded(choice('"Die Rezeption ist rund um die Uhr besetzt." kat3ni…', ['m7loula 24 sa3a', 'msdouda f l-lil', 'm7loula ghir f n-nhar'], 0)),
        graded(gap('Kemmel', 'Wir bleiben ___ Freitag ___ Sonntag.', ['von', 'bis'])),
        graded(translate("Terjem l l'Almaniya", 'Wach kayn WiFi f l-bit?', ['Gibt es WLAN im Zimmer?', 'Gibt es im Zimmer WLAN?'])),
        summary(
          [
            'S-safar: **die Unterkunft, das Einzelzimmer / Doppelzimmer, reservieren, die Übernachtung, inklusive, anreisen / abreisen**.',
            '**Ich möchte ein Zimmer reservieren. Was kostet das pro Nacht? Ist das Frühstück inklusive?**',
          ],
          ['T7jez bit', 'Tsowwel 3la l-khidmat o t-taman'],
        ),
      ],
    },

    // ───────────────────────── Lesson 2 ─────────────────────────
    {
      title: 'Durch den Park, über die Brücke — Präpositionen & deshalb',
      description: 'Prépositions dyal t-tri9, aus / von, prépositions dyal l-wa9t, o deshalb.',
      minutes: 35,
      kind: 'grammar',
      goals: ['Tchar7 t-tri9 b durch, über, entlang, an … vorbei, gegenüber', 'Tfre9 bin aus o von', 'Tkhdem vor, seit, für, in, nach, ab', 'T3ti n-natija b deshalb'],
      steps: [
        intro(
          'Men lagar l l-otel',
          md`
            Lukas kaychar7 t-tri9 f Hamburg: "Wir gehen **durch** den Park, dann **über** die Brücke und **an** der Kirche **vorbei**. Das Hotel ist **gegenüber** vom Hafen."
            Ghadi nt3allmou had l-prépositions, o men b3d l-prépositions dyal **l-wa9t** o **deshalb**.
          `,
          ['Prépositions dyal t-tri9', 'aus / von', 'L-wa9t', 'deshalb'],
        ),
        explain(
          'Prépositions dyal t-tri9',
          md`
            | Préposition | 7ala | Ma3na | Mital |
            |---|---|---|---|
            | **durch** | Akk | men l-wsat dyal | Wir gehen **durch den** Park. |
            | **über** | Akk | fou9 (t-tri9) | Fahren Sie **über die** Brücke. |
            | **entlang** | Akk (men b3d s-smiya) | m3a (t-tol) | Gehen Sie **den Fluss entlang**. |
            | **um … herum** | Akk | dour b | Wir laufen **um den** See **herum**. |
            | **an … vorbei** | Dat | douz 7da | Gehen Sie **an der** Kirche **vorbei**. |
            | **gegenüber** | Dat | 9bala | Das Hotel ist **gegenüber dem** Bahnhof. |
            | **bis zu** | Dat | 7tal l | Gehen Sie **bis zur** Ampel. |
            | **von … aus** | Dat | men (noqtat l-bidaya) | **Vom** Bahnhof **aus** sind es 10 Minuten. |

            Rd l-bal: **über** m3a t-tri9 (+ Akk) = *douz fou9*: "über die Brücke", "über die Straße".
          `,
          [
            ['Wir fahren durch den Tunnel.', 'Ghadi ndouzou f t-tunnel.'],
            ['Geh über die Straße, dann siehst du das Café.', 'Douz z-zen9a, ghadi tchouf l-café.'],
            ['Die Apotheke ist gegenüber der Post.', 'L-pharmacie 9bala l-bosta.'],
          ],
        ),
        choice('"Wir gehen ___ den Wald." (men l-wsat)', ['durch', 'über', 'entlang'], 0),
        choice('"Der Bus fährt ___ dem Rathaus vorbei."', ['an', 'durch', 'um'], 0),
        gap('Kemmel', 'Wir laufen den Rhein ___. (m3a t-tol)', 'entlang'),
        gap('Kemmel l-article', 'Das Museum ist gegenüber ___ Bahnhof. (der)', 'dem'),
        explain(
          'aus wla von?',
          md`
            B jouj **Dativ**, o b jouj = *men*. Walakin:

            | | Imta? | Mital |
            |---|---|---|
            | **aus** | men **dakhel** chi 7aja (blad, mdina, bni, sandou9) | Ich komme **aus** Marokko. Er kommt **aus dem** Haus. |
            | **von** | men chi **chakhs**, men chi blasa **barra / sat7**, wla men noqta | Ich komme **vom** Arzt / **von der** Arbeit / **von** Lukas. |

            **Mo9arana m3a zu / nach / in:**
            - in die Schule → **aus der** Schule · zum Arzt → **vom** Arzt · nach Hause → **von zu Hause**
          `,
        ),
        choice('"Ich komme gerade ___ Arzt."', ['aus dem', 'vom'], 1),
        choice('"Sie kommt ___ der Türkei."', ['aus', 'von'], 0),
        gap('Kemmel', 'Wann kommst du ___ der Arbeit? (von / aus)', 'von'),
        explain(
          'Prépositions dyal l-wa9t',
          md`
            | Préposition | Ma3na | Mital |
            |---|---|---|
            | **vor** + Dat | hadi (f l-madi) | **vor** zwei Wochen |
            | **seit** + Dat | men (o mazal) | **seit** drei Monaten |
            | **für** + Akk | l moddat … (ghaliban f l-moustaqbal) | Ich fahre **für** eine Woche nach Hamburg. |
            | **in** + Dat | men daba l … (f l-moustaqbal) | Der Zug kommt **in** fünf Minuten. |
            | **nach** + Dat | men b3d | **nach** dem Frühstück |
            | **ab** + Dat | men … (o fou9) | **ab** Montag / **ab** nächster Woche |

            **in** ≠ **nach**: "**in** zwei Tagen" = *men daba jouj iyyam* · "**nach** zwei Tagen" = *men b3d jouj iyyam* (men chi 7adath f l-madi).
          `,
          [
            ['Wir fahren in drei Tagen los.', 'Ghadi nmchiw men daba 3 iyyam.'],
            ['Ich bin für zwei Wochen in Marokko.', 'Ghadi nkoun f l-Maghrib l moddat simanatayn.'],
            ['Ab Juni arbeite ich Vollzeit.', 'Men younyou ghadi nkhdem temps plein.'],
          ],
        ),
        choice('"Der Film beginnt ___ zehn Minuten." (men daba)', ['nach', 'in', 'vor'], 1),
        choice('"Ich lerne ___ einem Jahr Deutsch."', ['vor', 'seit', 'für'], 1),
        gap('Kemmel', 'Wir fliegen ___ eine Woche nach Agadir. (l moddat)', 'für'),
        explain(
          'deshalb = dakchi 3lach',
          md`
            **deshalb** (wla **darum**, **deswegen**) kaygoul **n-natija**. Kaykhd **l-blasa 1**, ya3ni **l-fi3l men b3dha direct** (b7al dann):

            | Sabab | Natija |
            |---|---|
            | Der Zug hatte Verspätung. | **Deshalb sind wir** zu spät gekommen. |
            | Es regnet. | **Deshalb bleibe ich** zu Hause. |

            **weil ↔ deshalb:**
            - Ich bleibe zu Hause, **weil** es regnet. (sabab → fi3l f l-akhir)
            - Es regnet, **deshalb bleibe** ich zu Hause. (natija → fi3l direct)
          `,
          [
            ['Das Hotel war teuer, deshalb haben wir in einer Jugendherberge geschlafen.', 'L-otel kan ghali, dakchi 3lach n3esna f auberge.'],
          ],
        ),
        choice('Ina jomla s7i7a?', ['Ich hatte keine Zeit, deshalb ich bin nicht gekommen.', 'Ich hatte keine Zeit, deshalb bin ich nicht gekommen.'], 1),
        order('Rtteb', 'Der Zug war voll, deshalb mussten wir stehen.'),
        translate("Terjem l l'Almaniya (b deshalb)", 'Kanet ch-chta, dakchi 3lach b9ina f d-dar.', ['Es hat geregnet, deshalb sind wir zu Hause geblieben.', 'Es regnete, deshalb blieben wir zu Hause.']),
        graded(choice('"Gehen Sie ___ die Brücke."', ['über', 'durch', 'gegenüber'], 0)),
        graded(gap('Kemmel l-article', 'Fahren Sie an ___ Kirche vorbei. (die)', 'der')),
        graded(choice('"Ich komme gerade ___ Supermarkt." (kont dakhel)', ['aus dem', 'vom'], 0)),
        graded(choice('"Wir waren ___ einem Monat in Berlin." (hadi chhar)', ['vor', 'seit', 'in'], 0)),
        graded(choice('"___ Montag ist die Bibliothek geschlossen." (men l-ithnin o fou9)', ['Ab', 'Seit', 'Für'], 0)),
        graded(choice('Ina jomla s7i7a?', ['Es war kalt, deshalb haben wir Tee getrunken.', 'Es war kalt, deshalb wir haben Tee getrunken.'], 0)),
        graded(translate("Terjem l l'Almaniya", 'T-tran ghadi ywsel men daba 5 d9aye9.', ['Der Zug kommt in fünf Minuten.', 'Der Zug kommt in fünf Minuten an.'])),
        summary(
          [
            'T-tri9: **durch / über / um … herum / entlang** (+Akk) · **an … vorbei / gegenüber / bis zu** (+Dat).',
            '**aus** = men dakhel · **von** = men chakhs / sat7 / noqta.',
            'L-wa9t: **vor** (hadi), **seit** (men o mazal), **für** (moddat), **in** (men daba), **nach** (men b3d), **ab** (men … o fou9).',
            '**deshalb** → blasa 1, l-fi3l men b3dha.',
          ],
          ['Tchar7 t-tri9 b tafasil', 'Tkhdem l-prépositions dyal l-wa9t', 'T3ti n-natija b deshalb'],
          'Khlasa dyal l-grammaire',
        ),
      ],
    },

    // ───────────────────────── Lesson 3 ─────────────────────────
    {
      title: 'Probleme auf Reisen',
      description: 'T9ra email dyal t-ta2kid, tsme3 i3lan dyal grève, tfhem l-7o9ou9 dyalek, o tkteb 3la s-safar.',
      minutes: 25,
      kind: 'skills',
      goals: ['Tfhem email dyal t-ta2kid', 'Tfhem i3lan 3la mochkil f t-tran', 'T3ref l-7o9ou9 ila t3ettel t-tran', 'Tkteb email 3la s-safar'],
      steps: [
        intro(
          'Ma kolchi daz mzyan…',
          'Nhar l-jem3a, f lagar f Köln: l-i3lan kaygoul belli t-tran t3ettel… o f Hamburg, l-valise dyal Salma ma wslatch m3ahom!',
          ['T9ra t-ta2kid', 'Tfhem l-i3lan', 'Tkteb'],
        ),
        reading(
          'Ihre Buchungsbestätigung',
          md`
            Sehr geehrte Frau El Idrissi,

            vielen Dank für Ihre Buchung. Hiermit bestätigen wir Ihre Reservierung:

            Anreise: Freitag, 16. Mai (ab 15 Uhr)
            Abreise: Sonntag, 18. Mai (bis 11 Uhr)
            1 Doppelzimmer, 1 Einzelzimmer, inkl. Frühstück (7–10:30 Uhr)
            Gesamtpreis: 370,00 €

            Sie können bis 48 Stunden vor der Anreise kostenlos stornieren. Danach berechnen wir 50 % des Preises.
            Unser Hotel erreichen Sie vom Hauptbahnhof mit der U3 (Haltestelle Landungsbrücken) in 15 Minuten.

            Wir freuen uns auf Ihren Besuch!
            Ihr Team vom Hotel Elbblick
          `,
          {
            text: '9ra l-email dyal t-ta2kid.',
            glossary: [['hiermit bestätigen wir', 'b had l-email kan2akkdou'], ['der Gesamtpreis', 't-taman l-kamel'], ['berechnen', '7seb (khelles)']],
          },
        ),
        choice('7tal imta khass ykhorjou men l-otel l-7ad?', ['10:30', '11:00', '15:00'], 1),
        choice('Ila lghat Salma nhar l-khmis 9bel l-wsoul (ya3ni ~30 sa3a 9bel)…', ['Ma katkhelles walou', 'Katkhelles 50 %', 'Katkhelles kolchi'], 1, '48 sa3a 9bel = fabor; men b3d 50 %.'),
        listening(
          'Durchsage im Bahnhof',
          [
            ['Bahnhof', 'Information zum ICE 518 nach Hamburg-Altona, planmäßige Abfahrt 16:24 Uhr: Wegen eines Streiks fällt dieser Zug heute leider aus.', 'Ma3louma 3la ICE 518 l Hamburg, li kan ghadi ykhrej f 16:24: b sabab l-grève, had t-tran lghaw lyouma.'],
            ['Bahnhof', 'Reisende nach Hamburg nutzen bitte den IC 2024 um 17:10 Uhr von Gleis 3. Ihre Fahrkarten gelten auch für diesen Zug.', 'L-msafrin l Hamburg yakhdou IC 2024 f 17:10 men r-rasif 3. L-billetat dyalkom saliha ta f had t-tran.'],
            ['Bahnhof', 'Wir bitten um Ihr Verständnis.', 'Kantleb mennkom t-tafahom.'],
          ],
        ),
        choice('3lach t-tran t-lgha?', ['Ta9s khayb', 'Grève (Streik)', '7aditha'], 1),
        choice('Ina tran khasshom yakhdou?', ['IC 2024 f 17:10 men Gleis 3', 'ICE 518 f 16:24', 'IC f 17:30'], 0),
        choice('Wach khasshom ychriw billet jdid?', ['Ah', 'La'], 1, '"Ihre Fahrkarten gelten auch für diesen Zug."'),
        culture(
          'L-7o9ou9 dyal l-msafrin f t-tran',
          md`
            - **Fahrgastrechte:** ila t3ettel t-tran **60 d9i9a** wla ktar → katred lik **25 %** men t-taman; **120 d9i9a** wla ktar → **50 %**.
            - Ila t-tran **t-lgha** wla t3ettel bzaf, t9der takhod tran akhor (7tal machi l-mkhessess lik).
            - Ila w9fti f l-lil bla tran: t-taxi wla l-otel kaykhellshom l-charika (b chrout).
            - L-formulaire: f l-app **DB Navigator** wla f lagar.
            - **Gepäck verloren** (l-valise mcha) f t-tayara: sir **direct** l l-guichet "Lost & Found / Gepäckermittlung" o 3emmer l-formulaire 9bel ma tkhrej men l-matar.
          `,
        ),
        pron(
          'L-accent f l-kalimat l-ajnabiya',
          'L-kalimat li jayin men l-fransawiya wla l-latiniya ghaliban l-accent dyalhom **f l-akhir**: hoTEL, restauRANT, informaTION. Walakin machi dima: muSEum. Sme3 mzyan.',
          [
            ['Hotel – Information – Restaurant', 'hoTEL – informaTION – restauRANT'],
            ['Museum – Kultur – Natur', 'muSEum – kulTUR – naTUR'],
            ['Reservierung – Toilette', 'reserVIErung – toiLETte'],
          ],
        ),
        write(
          'Email: kifach daz s-safar',
          'Kteb email l Olena 3la s-safar l Hamburg (6–8 jmel, f l-Perfekt): imta mchitou, chno w9e3 f t-tran (**deshalb …**), fin bettou, chno chefntou (khdem **2 prépositions d t-tri9**).',
          ['Salam', 'Imta mchitou o b ach', 'L-mochkil + deshalb', 'L-otel', 'Chno dirtou (durch / über / entlang …)', 'Twadi3'],
          'Liebe Olena,\n\nam Freitag sind wir nach Hamburg gefahren. Leider ist unser Zug wegen eines Streiks ausgefallen, deshalb sind wir erst um 21 Uhr angekommen. Das Hotel war direkt gegenüber vom Hafen. Am Samstag sind wir durch die Altstadt und an der Elbe entlang gelaufen. Danach haben wir eine Hafenrundfahrt gemacht. Es war super!\n\nLiebe Grüße\nSalma',
          55,
        ),
        graded(choice('"Der Zug fällt aus." kat3ni…', ['T-tran t3ettel', 'T-tran t-lgha', 'T-tran wsel'], 1)),
        graded(choice('Ila t3ettel t-tran 2 sa3at, katred lik…', ['25 %', '50 %', '100 %'], 1)),
        graded(choice('"stornieren" kay3ni…', ['7jez', 'lgha (annuler)', 'khelles'], 1)),
        graded(dictation('Sme3 o kteb', 'Wegen eines Streiks fällt der Zug aus.')),
        summary(
          [
            '**Buchungsbestätigung, kostenlos stornieren, Anreise / Abreise**.',
            '**Der Zug fällt aus / hat Verspätung** — Fahrgastrechte: **60 min → 25 %, 120 min → 50 %**.',
          ],
          ['Tfhem t-ta2kid', 'Tfhem i3lan dyal mochkil', 'Tkteb 3la s-safar'],
        ),
      ],
    },

    // ───────────────────────── Lesson 4 ─────────────────────────
    {
      title: 'Wiederholung & Test — A2, Unité 8',
      description: 'Muraja3a: s-safar, prépositions d t-tri9 o l-wa9t, deshalb — o t-test.',
      minutes: 20,
      kind: 'review',
      goals: ['Traja3 l-prépositions o deshalb', 'Tchar7 t-tri9 o t7jez', 'Tnje7 f t-test'],
      steps: [
        intro('Muraja3a', 'S-safar, l-7jez, prépositions dyal t-tri9 o l-wa9t, aus/von, o deshalb.', ['Traja3', 'Tmrren', 'Dir t-test']),
        explain(
          'L-muhimm',
          md`
            - **+Akk:** durch, über, um … herum, (den Fluss) entlang, für
            - **+Dat:** an … vorbei, gegenüber, bis zu, aus, von, vor, seit, nach, ab, in (wa9t)
            - **deshalb** + fi3l + fa3il: "…, deshalb **bleibe ich** zu Hause."
          `,
        ),
        dialogue(
          'Der Weg zum Hafen',
          [
            ['Touristin', 'Entschuldigung, wie komme ich vom Hotel zum Hafen?', 'Sme7 liya, kifach nwsel men l-otel l l-port?'],
            ['Lukas', 'Das ist ganz einfach. Gehen Sie durch den kleinen Park und dann über die Brücke.', 'Sahla bzaf. Douzi men l-park s-sghir o men b3d fou9 l-9ent9ra.'],
            ['Touristin', 'Und dann?', 'O men b3d?'],
            ['Lukas', 'Dann gehen Sie an der Kirche vorbei und immer die Elbe entlang. Nach zehn Minuten sehen Sie die Landungsbrücken.', 'Men b3d douzi 7da l-kanissa o tb3i l-Elbe dima. Men b3d 10 d9aye9 ghadi tchoufi Landungsbrücken.'],
            ['Touristin', 'Super, vielen Dank!', 'Mzyan, chokran bzaf!'],
          ],
        ),
        choice('Fin khass tdouz men b3d l-park?', ['Fou9 l-9ent9ra', 'Men t-tunnel', 'Dour b l-b7ira'], 0),
        gap('Kemmel', 'Gehen Sie ___ den Park und dann ___ die Brücke.', ['durch', 'über']),
        match('Rbet', [
          ['vor einer Woche', 'hadi simana'],
          ['seit einer Woche', 'men simana (o mazal)'],
          ['in einer Woche', 'men daba simana'],
          ['für eine Woche', 'l moddat simana'],
        ]),
        speak(
          'Role-play: char7 t-tri9',
          'Chi touriste f l-mdina dyalek kaysowlek kifach ywsel men lagar l l-musée. Char7 lih b durch, über, an … vorbei, gegenüber.',
          ['Gehen Sie durch die Altstadt.', 'Dann gehen Sie über die Brücke.', 'Gehen Sie an der Post vorbei.', 'Das Museum ist gegenüber dem Rathaus.'],
        ),
        graded(choice('"Wir fahren ___ den Tunnel."', ['durch', 'über', 'an'], 0)),
        graded(gap('Kemmel l-article', 'Die Haltestelle ist gegenüber ___ Bank. (die)', 'der')),
        graded(choice('"Er kommt gerade ___ seiner Oma."', ['aus', 'von'], 1)),
        graded(choice('"Der Bus kommt ___ zwei Minuten." (men daba)', ['vor', 'in', 'nach'], 1)),
        graded(choice('Ina jomla s7i7a?', ['Ich war müde, deshalb ich habe geschlafen.', 'Ich war müde, deshalb habe ich geschlafen.'], 1)),
        graded(gap('Kemmel', 'Ich bleibe ___ zwei Wochen in Marokko. (l moddat)', 'für')),
        graded(choice('"das Einzelzimmer" howa…', ['bit l wa7ed', 'bit l jouj', 'bit d l-3a2ila'], 0)),
        graded(choice('"Ist das Frühstück ___?" (dakhel f t-taman)', ['inklusive', 'kostenlos', 'pro'], 0)),
        graded(translate("Terjem l l'Almaniya", 'Bghit n7jez bit l jouj d l-liyali.', ['Ich möchte ein Zimmer für zwei Nächte reservieren.', 'Ich möchte ein Zimmer für zwei Nächte buchen.'])),
        graded(dictation('Sme3 o kteb', 'Gehen Sie an der Kirche vorbei.')),
        summary(
          [
            'Daba t9der tkhtat s-safar, t7jez, tchar7 t-tri9 o tt9add l-machakil.',
            'F l-unité 9: l-amani o l-a7lam — **Konjunktiv II** (würde, wäre, hätte, könnte) o **trotzdem**.',
          ],
          ['T7jez bit', 'Tchar7 t-tri9 b tafasil', 'Tkhdem l-prépositions dyal l-wa9t', 'T3ti n-natija b deshalb'],
          'Khlasa dyal l-unité',
        ),
      ],
    },
  ],
});
