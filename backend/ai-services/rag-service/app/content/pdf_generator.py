"""
Generate 13 comprehensive German curriculum PDFs (A1-B2) with Darija explanations.
Uses fpdf2 for PDF creation.
"""

import logging
from pathlib import Path

from fpdf import FPDF

from app.config import settings

logger = logging.getLogger(__name__)


class CurriculumPDF(FPDF):
    """Custom PDF class with header/footer for the German curriculum."""

    def __init__(self, title: str, level: str = ""):
        super().__init__()
        self.pdf_title = title
        self.level = level
        self.set_auto_page_break(auto=True, margin=20)

    def header(self):
        self.set_font("Helvetica", "B", 10)
        self.cell(0, 8, f"Deutsch B'Darija - {self.pdf_title}", align="C", new_x="LMARGIN", new_y="NEXT")
        if self.level:
            self.set_font("Helvetica", "I", 8)
            self.cell(0, 5, f"Level: {self.level}", align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def add_section(self, title: str):
        self.set_font("Helvetica", "B", 14)
        self.set_fill_color(41, 128, 185)
        self.set_text_color(255, 255, 255)
        self.cell(0, 10, f"  {title}", fill=True, new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(0, 0, 0)
        self.ln(3)

    def add_subsection(self, title: str):
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(41, 128, 185)
        self.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(0, 0, 0)
        self.ln(1)

    def add_text(self, text: str):
        self.set_font("Helvetica", "", 10)
        self.multi_cell(0, 6, text)
        self.ln(2)

    def add_darija(self, text: str):
        """Add Darija explanation text (in italics)."""
        self.set_font("Helvetica", "I", 10)
        self.set_text_color(39, 174, 96)
        self.multi_cell(0, 6, f"[Darija] {text}")
        self.set_text_color(0, 0, 0)
        self.ln(1)

    def add_example(self, german: str, pronunciation: str = "", darija: str = ""):
        """Add a German example with pronunciation and Darija translation."""
        self.set_font("Helvetica", "B", 10)
        self.cell(0, 6, f"  DE: {german}", new_x="LMARGIN", new_y="NEXT")
        if pronunciation:
            self.set_font("Helvetica", "I", 9)
            self.set_text_color(128, 128, 128)
            self.cell(0, 5, f"       [{pronunciation}]", new_x="LMARGIN", new_y="NEXT")
            self.set_text_color(0, 0, 0)
        if darija:
            self.set_font("Helvetica", "I", 9)
            self.set_text_color(39, 174, 96)
            self.cell(0, 5, f"       Darija: {darija}", new_x="LMARGIN", new_y="NEXT")
            self.set_text_color(0, 0, 0)
        self.ln(2)

    def add_table(self, headers: list[str], rows: list[list[str]]):
        """Add a simple table."""
        col_width = (self.w - 20) / len(headers)
        self.set_font("Helvetica", "B", 9)
        self.set_fill_color(220, 230, 241)
        for h in headers:
            self.cell(col_width, 7, h, border=1, fill=True, align="C")
        self.ln()
        self.set_font("Helvetica", "", 9)
        for row in rows:
            for cell in row:
                self.cell(col_width, 6, cell, border=1)
            self.ln()
        self.ln(3)


def generate_all_pdfs(output_dir: str | None = None) -> list[str]:
    """Generate all 13 curriculum PDFs. Returns list of file paths."""
    out = Path(output_dir or settings.pdf_output_dir)
    out.mkdir(parents=True, exist_ok=True)

    generators = [
        _gen_01_alphabet,
        _gen_02_grammar_a1,
        _gen_03_vocabulary_a1,
        _gen_04_grammar_a2,
        _gen_05_vocabulary_a2,
        _gen_06_grammar_b1,
        _gen_07_vocabulary_b1,
        _gen_08_grammar_b2,
        _gen_09_vocabulary_b2,
        _gen_10_false_friends,
        _gen_11_exam_prep,
        _gen_12_phrases,
        _gen_13_cultural_notes,
    ]

    paths = []
    for gen_func in generators:
        path = gen_func(out)
        paths.append(str(path))
        logger.info(f"Generated: {path}")

    return paths


# ─── PDF 01: Alphabet & Pronunciation ──────────────────────────────

def _gen_01_alphabet(out: Path) -> Path:
    pdf = CurriculumPDF("German Alphabet & Pronunciation", "A1")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("The German Alphabet (Das Alphabet)")
    pdf.add_text(
        "German uses the Latin alphabet with 26 letters plus 4 special characters: "
        "the umlauts (Ae/ae, Oe/oe, Ue/ue) and the Eszett (ss). "
        "Learning correct pronunciation from the start is crucial."
    )
    pdf.add_darija(
        "L'alphabet dyal l'almanya fih 26 7arf b7al l'anglais, w zid 3lihom 4 7rouf khassa: "
        "ae, oe, ue (umlauts) w ss (Eszett). Khassek tet3ellem n-no6q men l'bda."
    )

    pdf.add_subsection("Letters & Pronunciation Guide")
    pdf.add_table(
        ["Letter", "German Name", "Sound", "Example", "Darija Comparison"],
        [
            ["A a", "Ah", "like 'a' in father", "Apfel (apple)", "b7al 'a' f 'baba'"],
            ["B b", "Beh", "like English 'b'", "Buch (book)", "b7al 'b' f 'bab'"],
            ["C c", "Tseh", "'ts' before e/i, 'k' otherwise", "Celsius", "b7al 'ts'"],
            ["D d", "Deh", "like English 'd'", "Deutsch (German)", "b7al 'd' f 'dar'"],
            ["E e", "Eh", "like 'e' in bed", "Essen (food)", "b7al 'e' f 'el'"],
            ["F f", "Eff", "like English 'f'", "Frau (woman)", "b7al 'f' f 'foul'"],
            ["G g", "Geh", "always hard 'g'", "Garten (garden)", "b7al 'g' f 'glas'"],
            ["H h", "Hah", "like English 'h'", "Haus (house)", "b7al 'h' f 'hlib'"],
            ["I i", "Ih", "like 'ee' in see", "Ich (I)", "b7al 'i' f 'ibrik'"],
            ["J j", "Yott", "like English 'y'", "Ja (yes)", "b7al 'y' f 'yallah'"],
            ["K k", "Kah", "like English 'k'", "Kinder (children)", "b7al 'k' f 'ktab'"],
            ["L l", "Ell", "like English 'l'", "Liebe (love)", "b7al 'l' f 'lben'"],
            ["M m", "Emm", "like English 'm'", "Mutter (mother)", "b7al 'm' f 'mama'"],
            ["N n", "Enn", "like English 'n'", "Name (name)", "b7al 'n' f 'nhar'"],
            ["O o", "Oh", "like 'o' in open", "Oma (grandma)", "b7al 'o' f 'orange'"],
            ["P p", "Peh", "like English 'p'", "Papa (dad)", "ATTENTION: machi 'b'!"],
            ["Q q", "Kuh", "always 'kv'", "Quelle (source)", "daymen m3a 'u'"],
            ["R r", "Err", "uvular (throat)", "Rot (red)", "b7al 'gh' dyal Darija!"],
            ["S s", "Ess", "'z' before vowel, 's' otherwise", "Sonne (sun)", "qbel vowel = 'z'"],
            ["T t", "Teh", "like English 't'", "Tag (day)", "b7al 't' f 'tajin'"],
            ["U u", "Uh", "like 'oo' in pool", "Uhr (clock)", "b7al 'ou' f 'oud'"],
            ["V v", "Fau", "usually 'f'", "Vater (father)", "ghaliban = 'f'"],
            ["W w", "Veh", "like English 'v'", "Wasser (water)", "= 'v' machi 'w'!"],
            ["X x", "Iks", "like 'ks'", "Taxi", "b7al 'ks'"],
            ["Y y", "Ypsilon", "like German 'ue'", "Typ (type)", "b7al 'ue'"],
            ["Z z", "Tsett", "like 'ts'", "Zehn (ten)", "= 'ts' machi 'z'!"],
        ],
    )

    pdf.add_subsection("Special Characters (Sonderzeichen)")
    pdf.add_table(
        ["Character", "Name", "Sound", "Example", "Darija Explanation"],
        [
            ["Ae/ae", "A-Umlaut", "like 'e' in bed", "Maedchen (girl)", "b7al 'e' walakin jat men 'a'"],
            ["Oe/oe", "O-Umlaut", "round lips + say 'e'", "schoen (beautiful)", "dor chfayf + gol 'e'"],
            ["Ue/ue", "U-Umlaut", "round lips + say 'i'", "fuenf (five)", "dor chfayf + gol 'i'"],
            ["ss", "Eszett/Sharp S", "always sharp 's'", "Strasse (street)", "= 's' daymen, machisoft"],
        ],
    )

    pdf.add_subsection("Important Consonant Combinations")
    pdf.add_table(
        ["Combo", "Sound", "Example", "Pronunciation"],
        [
            ["ch", "soft: like 'sh' / hard: like 'kh'", "ich / Buch", "ish / Bookh"],
            ["sch", "like English 'sh'", "Schule (school)", "Shoo-leh"],
            ["sp-", "like 'shp' at start", "Sprache (language)", "Shpraa-kheh"],
            ["st-", "like 'sht' at start", "Strasse (street)", "Shtrah-seh"],
            ["ei", "like English 'eye'", "Eis (ice)", "Ice"],
            ["ie", "like English 'ee'", "Liebe (love)", "Lee-beh"],
            ["eu/aeu", "like 'oy'", "Freund (friend)", "Froynd"],
            ["au", "like 'ow'", "Haus (house)", "Howss"],
            ["th", "just 't' (no 'th'!)", "Theorie", "Teh-oh-ree"],
            ["-ig", "like '-ish'", "wichtig (important)", "vish-tish"],
        ],
    )

    pdf.add_subsection("Stress Patterns")
    pdf.add_text(
        "In German, the stress usually falls on the FIRST syllable of a word: "
        "'LIE-be', 'AR-bei-ten', 'FREI-tag'. Exceptions: words with prefixes like be-, ge-, er-, ver-, zer- "
        "stress the ROOT syllable: 'be-SU-chen', 'ver-STE-hen'. Foreign words keep their original stress."
    )
    pdf.add_darija(
        "F l'almanya, l'accent ghaliban kaykoun 3la l'syllabe l'ouwla: LIE-be, AR-bei-ten. "
        "Walakin l'kalimat lli 3andhom prefix b7al be-, ge-, ver-: l'accent kaykoun 3la l'racine."
    )

    path = out / "01-german-alphabet-pronunciation.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 02: Grammar A1 ───────────────────────────────────────────

def _gen_02_grammar_a1(out: Path) -> Path:
    pdf = CurriculumPDF("Grammar A1 Basics", "A1")
    pdf.alias_nb_pages()
    pdf.add_page()

    # Articles
    pdf.add_section("Articles (Artikel)")
    pdf.add_text(
        "German has three genders: masculine (der), feminine (die), and neuter (das). "
        "Unlike English, every noun has a gender that must be memorized."
    )
    pdf.add_darija(
        "F l'almanya, kayn 3 genders: masculine (der), feminine (die), w neuter (das). "
        "Khassek t7effd l'gender dyal kol kalima. Ma kayn ta regle 100%!"
    )
    pdf.add_table(
        ["Gender", "Definite (the)", "Indefinite (a)", "Examples"],
        [
            ["Masculine", "der", "ein", "der Mann, der Tisch, der Stuhl"],
            ["Feminine", "die", "eine", "die Frau, die Lampe, die Tuer"],
            ["Neuter", "das", "ein", "das Kind, das Buch, das Haus"],
            ["Plural", "die", "- (keine)", "die Maenner, die Frauen, die Kinder"],
        ],
    )

    pdf.add_subsection("Tips for Guessing Gender")
    pdf.add_text(
        "Masculine: days, months, seasons, weather (der Montag, der Januar, der Sommer, der Regen). "
        "Also: -er, -ling, -ismus endings.\n"
        "Feminine: -ung, -heit, -keit, -tion, -ie, -ei endings (die Zeitung, die Freiheit).\n"
        "Neuter: -chen, -lein diminutives, -ment, -um endings (das Maedchen, das Dokument). "
        "Also Ge- prefix nouns (das Gebaude, das Geraet)."
    )

    # Nominative/Akkusative
    pdf.add_section("Nominative & Akkusative Cases")
    pdf.add_text(
        "Nominative = subject (who does the action). Akkusative = direct object (who receives the action)."
    )
    pdf.add_darija(
        "Nominativ = l'fa3el (chkoun lli kayddir). Akkusativ = l'maf3oul bih (chkoun lli t'affecta)."
    )
    pdf.add_table(
        ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
        [
            ["Nominative", "der / ein", "die / eine", "das / ein", "die / -"],
            ["Akkusative", "den / einen", "die / eine", "das / ein", "die / -"],
        ],
    )
    pdf.add_example(
        "Der Mann sieht den Hund.",
        "Dehr Mann zeet dehn Hoond",
        "R-rajel ka-ychoof l-kelb. (der -> den f Akkusativ, ghir l'masculine lli kayetbeddel!)",
    )

    # Personal Pronouns
    pdf.add_section("Personal Pronouns (Personalpronomen)")
    pdf.add_table(
        ["German", "English", "Darija Equivalent"],
        [
            ["ich", "I", "ana"],
            ["du", "you (informal)", "nta / nti"],
            ["er", "he", "huwa"],
            ["sie", "she", "hiya"],
            ["es", "it", "hiya/huwa (selon l'gender)"],
            ["wir", "we", "7na"],
            ["ihr", "you all (informal)", "ntuma"],
            ["sie", "they", "huma"],
            ["Sie", "you (formal)", "7dretkom (formal)"],
        ],
    )

    # Present Tense
    pdf.add_section("Present Tense (Praesens)")
    pdf.add_text("Regular verb conjugation follows a predictable pattern. Remove -en and add the endings:")
    pdf.add_table(
        ["Pronoun", "Ending", "machen (to do)", "spielen (to play)"],
        [
            ["ich", "-e", "mache", "spiele"],
            ["du", "-st", "machst", "spielst"],
            ["er/sie/es", "-t", "macht", "spielt"],
            ["wir", "-en", "machen", "spielen"],
            ["ihr", "-t", "macht", "spielt"],
            ["sie/Sie", "-en", "machen", "spielen"],
        ],
    )

    pdf.add_subsection("Important Irregular Verbs: sein (to be) & haben (to have)")
    pdf.add_table(
        ["Pronoun", "sein", "haben"],
        [
            ["ich", "bin", "habe"],
            ["du", "bist", "hast"],
            ["er/sie/es", "ist", "hat"],
            ["wir", "sind", "haben"],
            ["ihr", "seid", "habt"],
            ["sie/Sie", "sind", "haben"],
        ],
    )
    pdf.add_darija(
        "'sein' = koun (ana kount, nta kounti...). 'haben' = 3and (3andi, 3andek...). "
        "Had jouj verb khass t7effd'hom mezyan 7it katjaw bezzzaf!"
    )

    # Word Order
    pdf.add_section("Word Order (Satzstellung)")
    pdf.add_text(
        "German has strict V2 (verb second) word order in main clauses:\n"
        "Position 1: Subject or other element\n"
        "Position 2: VERB (always!)\n"
        "Rest: Objects, adverbs, etc."
    )
    pdf.add_example(
        "Ich spiele Fussball. / Heute spiele ich Fussball.",
        "",
        "L'verb daymen f la 2eme place! Ila bditi b 'heute', l'verb mazal f position 2.",
    )

    # Negation
    pdf.add_section("Negation (Verneinung)")
    pdf.add_text(
        "'nicht' negates verbs and adjectives. 'kein' negates nouns (replaces ein/eine)."
    )
    pdf.add_example("Ich spiele nicht. (I don't play)", "", "Ma-kan-l3ebch.")
    pdf.add_example(
        "Ich habe kein Auto. (I don't have a car)",
        "",
        "Ma-3andich tomobil. (kein = ma...ch + noun)",
    )

    # Numbers
    pdf.add_section("Numbers (Zahlen)")
    pdf.add_table(
        ["Number", "German", "Pronunciation"],
        [
            ["0", "null", "nool"],
            ["1", "eins", "ains"],
            ["2", "zwei", "tsvai"],
            ["3", "drei", "drai"],
            ["4", "vier", "feer"],
            ["5", "fuenf", "fuenf"],
            ["6", "sechs", "zeks"],
            ["7", "sieben", "zee-ben"],
            ["8", "acht", "akht"],
            ["9", "neun", "noyn"],
            ["10", "zehn", "tsehn"],
            ["20", "zwanzig", "tsvan-tsig"],
            ["21", "einundzwanzig", "ain-oond-tsvan-tsig"],
            ["100", "hundert", "hoon-dert"],
            ["1000", "tausend", "tow-zend"],
        ],
    )
    pdf.add_darija(
        "ATTENTION: F l'almanya, l'a3dad men 21-99 katji bel ma9loub! "
        "einUNDzwanzig = 1 w 20 (machi 21). B7al Darija chwiya: wa7ed w 3echrin."
    )

    path = out / "02-grammar-a1-basics.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 03: Vocabulary A1 ─────────────────────────────────────────

def _gen_03_vocabulary_a1(out: Path) -> Path:
    pdf = CurriculumPDF("Vocabulary A1", "A1")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Greetings & Farewells (Begruessungen)")
    pdf.add_table(
        ["German", "Pronunciation", "English", "Darija"],
        [
            ["Guten Morgen", "Goo-ten Mor-gen", "Good morning", "Sba7 l'khir"],
            ["Guten Tag", "Goo-ten Taag", "Good day", "Nhar sa3id"],
            ["Guten Abend", "Goo-ten Ah-bend", "Good evening", "Msa l'khir"],
            ["Gute Nacht", "Goo-te Nakht", "Good night", "Lila sa3ida / tssbe7 3la khir"],
            ["Hallo", "Ha-lo", "Hello", "Salam / Ahlan"],
            ["Tschuess", "Chues", "Bye (informal)", "Bslama"],
            ["Auf Wiedersehen", "Owf Vee-der-zey-en", "Goodbye (formal)", "Bslama (formal)"],
            ["Wie geht es Ihnen?", "Vee geyt es Ee-nen", "How are you? (formal)", "Ki dayr/dayra? (formal)"],
            ["Wie geht's?", "Vee geyts", "How's it going?", "Labas? / Ki rak?"],
            ["Danke", "Dan-ke", "Thank you", "Choukran"],
            ["Bitte", "Bi-te", "Please / You're welcome", "3afak / La chokr 3la wajib"],
            ["Entschuldigung", "Ent-shool-di-goong", "Excuse me", "Sme7 liya"],
            ["Ja", "Yaa", "Yes", "Iyeh / Ah"],
            ["Nein", "Nain", "No", "La"],
        ],
    )

    pdf.add_section("Family (Familie)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Mutter / die Mama", "mother / mom", "l'mama / l'walida"],
            ["der Vater / der Papa", "father / dad", "l'baba / l'walid"],
            ["die Eltern", "parents", "l'walidin"],
            ["der Bruder", "brother", "l'kho"],
            ["die Schwester", "sister", "l'okht"],
            ["der Grossvater / Opa", "grandfather", "jedd"],
            ["die Grossmutter / Oma", "grandmother", "jedda"],
            ["der Onkel", "uncle", "l'3amm / l'khal"],
            ["die Tante", "aunt", "l'3amma / l'khala"],
            ["der Sohn", "son", "l'weld"],
            ["die Tochter", "daughter", "l'bent"],
            ["das Kind", "child", "drri / l'weld sghir"],
            ["der Mann", "husband/man", "r-rajel / z-zowj"],
            ["die Frau", "wife/woman", "l'mra / z-zowja"],
        ],
    )

    pdf.add_section("Colors (Farben)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["rot", "red", "7mer"],
            ["blau", "blue", "zre9"],
            ["gruen", "green", "khder"],
            ["gelb", "yellow", "sfar"],
            ["schwarz", "black", "k7el"],
            ["weiss", "white", "byed"],
            ["braun", "brown", "9ahwi"],
            ["orange", "orange", "limouni"],
            ["rosa / pink", "pink", "wardi"],
            ["grau", "gray", "rmadi"],
            ["lila", "purple", "bnafsji"],
        ],
    )

    pdf.add_section("Food & Drinks (Essen & Trinken)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["das Brot", "bread", "l'khobz"],
            ["die Butter", "butter", "z-zebda"],
            ["der Kaese", "cheese", "l'fromaj"],
            ["das Fleisch", "meat", "l'l7em"],
            ["das Haehnchen", "chicken", "d-djaj"],
            ["der Fisch", "fish", "l'7out"],
            ["der Reis", "rice", "r-rouz"],
            ["die Kartoffel", "potato", "l'batata"],
            ["die Tomate", "tomato", "l'matecha"],
            ["die Zwiebel", "onion", "l'bsla"],
            ["der Apfel", "apple", "t-teffa7"],
            ["die Orange", "orange", "l-limouna"],
            ["das Wasser", "water", "l'ma"],
            ["der Tee", "tea", "atay"],
            ["der Kaffee", "coffee", "l'9ahwa"],
            ["die Milch", "milk", "l'7lib"],
            ["der Saft", "juice", "l'3ssir"],
            ["das Bier", "beer", "l-birra"],
        ],
    )

    pdf.add_section("Days & Months (Tage & Monate)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["Montag", "Monday", "Tnin"],
            ["Dienstag", "Tuesday", "Tlat"],
            ["Mittwoch", "Wednesday", "Larba3"],
            ["Donnerstag", "Thursday", "Lkhmis"],
            ["Freitag", "Friday", "Jm3a"],
            ["Samstag", "Saturday", "Sebt"],
            ["Sonntag", "Sunday", "L7ad"],
        ],
    )
    pdf.add_table(
        ["German", "English"],
        [
            ["Januar", "January"],
            ["Februar", "February"],
            ["Maerz", "March"],
            ["April", "April"],
            ["Mai", "May"],
            ["Juni", "June"],
            ["Juli", "July"],
            ["August", "August"],
            ["September", "September"],
            ["Oktober", "October"],
            ["November", "November"],
            ["Dezember", "December"],
        ],
    )

    pdf.add_section("Body Parts (Koerperteile)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["der Kopf", "head", "r-ras"],
            ["das Auge (die Augen)", "eye(s)", "l-3in (l-3inin)"],
            ["die Nase", "nose", "n-nif"],
            ["der Mund", "mouth", "l-fomm"],
            ["das Ohr (die Ohren)", "ear(s)", "l-wden (l-wdnin)"],
            ["die Hand (die Haende)", "hand(s)", "l-yedd (l-yddin)"],
            ["der Fuss (die Fuesse)", "foot (feet)", "r-rejl (r-rejlin)"],
            ["der Arm", "arm", "d-dra3"],
            ["das Bein", "leg", "r-rejl / s-sa9"],
            ["der Ruecken", "back", "d-dher"],
            ["der Bauch", "belly", "l-kerch"],
            ["das Herz", "heart", "l-9elb"],
        ],
    )

    path = out / "03-vocabulary-a1.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 04: Grammar A2 ───────────────────────────────────────────

def _gen_04_grammar_a2(out: Path) -> Path:
    pdf = CurriculumPDF("Grammar A2 Intermediate", "A2")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Dative Case (Dativ)")
    pdf.add_text(
        "The Dative case answers 'Wem?' (To whom?). It marks the indirect object "
        "- the person who receives something."
    )
    pdf.add_darija(
        "Dativ = l'maf3oul lih (li men?). Huwa li lli kayewssel lih chi 7aja. "
        "Exemple: 'Ich gebe DEM Mann DAS Buch' = Ka-n3ti l'ktab l r-rajel."
    )
    pdf.add_table(
        ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
        [
            ["Nominative", "der / ein", "die / eine", "das / ein", "die / -"],
            ["Akkusative", "den / einen", "die / eine", "das / ein", "die / -"],
            ["Dative", "dem / einem", "der / einer", "dem / einem", "den + n / -"],
        ],
    )
    pdf.add_example(
        "Ich gebe dem Kind einen Ball.",
        "Ish gey-be dem Kind ai-nen Ball",
        "Ka-n3ti l drri wa7ed l-bala. (dem = Dativ neuter, einen = Akk masculine)",
    )

    pdf.add_section("Two-Way Prepositions (Wechselpraepositionen)")
    pdf.add_text(
        "9 prepositions use Akkusativ for MOVEMENT (Wohin?) and Dativ for LOCATION (Wo?):\n"
        "an, auf, hinter, in, neben, ueber, unter, vor, zwischen"
    )
    pdf.add_darija(
        "Had 9 prepositions kayetbeddlou: Ila kayn mouvement = Akkusativ. Ila kayn blassa = Dativ. "
        "Trick: Wohin (fin ghadi?) = Akkusativ. Wo (fin nta?) = Dativ."
    )
    pdf.add_example(
        "Ich gehe IN DIE Schule. (Akkusativ - movement)",
        "",
        "Ka-nemchi L l'madrasa. (Wohin? -> Akkusativ)",
    )
    pdf.add_example(
        "Ich bin IN DER Schule. (Dativ - location)",
        "",
        "Ana F l'madrasa. (Wo? -> Dativ)",
    )

    pdf.add_section("Modal Verbs (Modalverben)")
    pdf.add_text(
        "Modal verbs modify the main verb. The main verb goes to the END in infinitive form."
    )
    pdf.add_table(
        ["Modal Verb", "Meaning", "Example", "Darija"],
        [
            ["koennen", "can / be able to", "Ich kann schwimmen", "N9der n3oum"],
            ["muessen", "must / have to", "Ich muss arbeiten", "Khassni nekhdem"],
            ["wollen", "want to", "Ich will essen", "Bghit nakol"],
            ["sollen", "should", "Du sollst lernen", "Khassek te9ra"],
            ["duerfen", "may / be allowed to", "Darf ich fragen?", "Wa9ila nsouwel?"],
            ["moegen", "like to", "Ich mag Tee", "Ka-n7eb atay"],
        ],
    )
    pdf.add_darija(
        "Modal verb f position 2, w l'verb l'principal f l'akhir b l'infinitif: "
        "'Ich KANN gut Deutsch SPRECHEN' = N9der netkellam l'almanya mezyan."
    )

    pdf.add_section("Perfekt Tense (Past Tense)")
    pdf.add_text(
        "Perfekt = haben/sein + past participle (at the end). "
        "Most verbs use 'haben'. Movement/state-change verbs use 'sein'."
    )
    pdf.add_table(
        ["Type", "Formula", "Example", "Darija"],
        [
            ["Regular", "ge- + stem + -t", "gemacht (done)", "dert / 3melt"],
            ["Irregular", "ge- + stem + -en", "gegangen (gone)", "mchit"],
            ["Separable", "prefix + ge + stem", "eingekauft (shopped)", "tcherrit"],
            ["-ieren verbs", "stem + -t (no ge-)", "studiert (studied)", "9rit"],
        ],
    )
    pdf.add_example(
        "Ich habe gestern Fussball gespielt.",
        "Ish haa-be ges-tern Foos-ball ge-shpeelt",
        "L3ebt l'koura lbar7. (haben + gespielt)",
    )
    pdf.add_example(
        "Ich bin nach Berlin gefahren.",
        "Ish bin naakh Berlin ge-faa-ren",
        "Mchit l Berlin. (sein = mouvement!)",
    )

    pdf.add_section("Separable Verbs (Trennbare Verben)")
    pdf.add_text(
        "Some verbs have a prefix that separates and goes to the END of the sentence."
    )
    pdf.add_table(
        ["Verb", "Meaning", "In a Sentence", "Darija"],
        [
            ["aufstehen", "to get up", "Ich stehe um 7 Uhr AUF", "Ka-noud f 7 d ssba7"],
            ["anfangen", "to begin", "Die Schule faengt um 8 AUF", "L'madrasa katebda f 8"],
            ["einkaufen", "to shop", "Ich kaufe im Supermarkt EIN", "Ka-ntcherri f supermarche"],
            ["anrufen", "to call", "Ich rufe dich morgen AN", "Ghadi n3eyyet lik ghedda"],
            ["fernsehen", "to watch TV", "Ich sehe abends FERN", "Ka-ntferrej f l'3chiya"],
        ],
    )

    pdf.add_section("Adjective Endings (Adjektivdeklination)")
    pdf.add_text(
        "Adjectives change their endings based on gender, case, and article type. "
        "After definite articles (der/die/das): mostly -e or -en."
    )
    pdf.add_table(
        ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
        [
            ["Nom.", "der grosse", "die grosse", "das grosse", "die grossen"],
            ["Akk.", "den grossen", "die grosse", "das grosse", "die grossen"],
            ["Dat.", "dem grossen", "der grossen", "dem grossen", "den grossen"],
        ],
    )
    pdf.add_darija(
        "Adjective endings hiya l'7aja l'as3ab f l'almanya! L'trick: "
        "m3a der/die/das = ghaliban -e. F Akkusativ/Dativ masculine = -en. "
        "Plural = daymen -en. Ma-tkhafch, b l'wa9t ghadi t3erf'hom!"
    )

    path = out / "04-grammar-a2-intermediate.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 05: Vocabulary A2 ─────────────────────────────────────────

def _gen_05_vocabulary_a2(out: Path) -> Path:
    pdf = CurriculumPDF("Vocabulary A2", "A2")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Travel & Transportation (Reisen & Verkehr)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["der Flughafen", "airport", "l-matar"],
            ["der Bahnhof", "train station", "la gare / m7atta d tran"],
            ["das Flugzeug", "airplane", "t-tayara"],
            ["der Zug", "train", "t-tran"],
            ["der Bus", "bus", "l-tobis"],
            ["das Taxi", "taxi", "t-taxi"],
            ["die U-Bahn", "subway", "l-metro"],
            ["die Fahrkarte", "ticket", "l-wer9a / l-billet"],
            ["die Abfahrt", "departure", "l-mchi / depart"],
            ["die Ankunft", "arrival", "l-wsoula / arrivee"],
            ["das Gepaeck", "luggage", "l-bagaj"],
            ["der Reisepass", "passport", "l-passeport"],
            ["die Grenze", "border", "l-7douda"],
            ["hin und zurueck", "round trip", "aller-retour"],
        ],
    )

    pdf.add_section("Shopping & Money (Einkaufen & Geld)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["der Laden / das Geschaeft", "shop/store", "l-7anout"],
            ["der Supermarkt", "supermarket", "s-supermarche"],
            ["die Kasse", "checkout", "l-caisse"],
            ["der Preis", "price", "t-taman"],
            ["teuer", "expensive", "ghaali"],
            ["billig / guenstig", "cheap", "rkhis"],
            ["kaufen", "to buy", "ncherri"],
            ["verkaufen", "to sell", "nbi3"],
            ["bezahlen", "to pay", "nkhelles"],
            ["das Bargeld", "cash", "l-flouss cash"],
            ["die Kreditkarte", "credit card", "l-carte bancaire"],
            ["die Rechnung", "bill/invoice", "l-facture"],
            ["der Rabatt", "discount", "t-takhfid"],
            ["die Groesse", "size", "l-qyas / t-taille"],
        ],
    )

    pdf.add_section("Weather (Wetter)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Sonne", "sun", "ch-chems"],
            ["der Regen", "rain", "ch-chta"],
            ["der Schnee", "snow", "t-telj"],
            ["der Wind", "wind", "r-ri7"],
            ["der Nebel", "fog", "d-dbaab"],
            ["heiss", "hot", "s-skhoun"],
            ["kalt", "cold", "l-berd"],
            ["warm", "warm", "dafi"],
            ["Es regnet", "It's raining", "Ka-tchi ch-chta"],
            ["Es schneit", "It's snowing", "Ka-ytii7 t-telj"],
            ["Die Sonne scheint", "The sun is shining", "Ch-chems ka-tchreg"],
        ],
    )

    pdf.add_section("Directions (Richtungen)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["links", "left", "l-lisr / 3la ch-chmal"],
            ["rechts", "right", "l-limin"],
            ["geradeaus", "straight ahead", "nishan"],
            ["die Kreuzung", "intersection", "l-carrefour"],
            ["die Ampel", "traffic light", "d-daw l-7amra"],
            ["die Bruecke", "bridge", "l-qantara"],
            ["gegenueber", "across from", "qbalet"],
            ["neben", "next to", "7da"],
            ["zwischen", "between", "bin"],
        ],
    )

    pdf.add_section("Hobbies & Free Time (Hobbys & Freizeit)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["lesen", "to read", "n9ra"],
            ["schwimmen", "to swim", "n3oum"],
            ["kochen", "to cook", "nteyyeb"],
            ["tanzen", "to dance", "ncher7"],
            ["singen", "to sing", "nghanni"],
            ["malen", "to paint", "nressem"],
            ["wandern", "to hike", "nemchi f trek"],
            ["Rad fahren", "to cycle", "nrekeb l-bicyclette"],
            ["Fussball spielen", "to play football", "nel3eb l-koura"],
            ["Musik hoeren", "to listen to music", "nsme3 l-musique"],
            ["fotografieren", "to photograph", "nssouwer"],
            ["reisen", "to travel", "nsafer"],
        ],
    )

    pdf.add_section("Health (Gesundheit)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["der Arzt / die Aerztin", "doctor (m/f)", "t-tbib / t-tbiba"],
            ["das Krankenhaus", "hospital", "s-sbitar"],
            ["die Apotheke", "pharmacy", "l-farmacia"],
            ["das Medikament", "medicine", "d-dwa"],
            ["Kopfschmerzen", "headache", "wja3 r-ras"],
            ["Bauchschmerzen", "stomachache", "wja3 l-kerch"],
            ["Fieber", "fever", "s-skhana"],
            ["Erkaeltung", "cold (illness)", "r-rwah / grippe"],
            ["Ich bin krank", "I'm sick", "Ana mrid/mrida"],
            ["Ich brauche einen Arzt", "I need a doctor", "Khassni tbib"],
        ],
    )

    path = out / "05-vocabulary-a2.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 06: Grammar B1 ───────────────────────────────────────────

def _gen_06_grammar_b1(out: Path) -> Path:
    pdf = CurriculumPDF("Grammar B1 Advanced", "B1")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Genitive Case (Genitiv)")
    pdf.add_text(
        "Genitiv answers 'Wessen?' (Whose?). Shows possession. "
        "In spoken German often replaced by 'von + Dativ'."
    )
    pdf.add_darija(
        "Genitiv = dyal men? (possession). F l'klam, katst3mel 'von + Dativ' blassa dyalou."
    )
    pdf.add_table(
        ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
        [
            ["Genitiv", "des + -(e)s / eines", "der / einer", "des + -(e)s / eines", "der / -"],
        ],
    )
    pdf.add_example(
        "Das Auto des Mannes. / Das Auto von dem Mann.",
        "",
        "Tomobil dyal r-rajel. (des Mannes = Genitiv, von dem Mann = alternative)",
    )

    pdf.add_section("Simple Past (Praeteritum)")
    pdf.add_text(
        "Praeteritum is used mainly in written/formal German and with haben/sein/modal verbs in speech."
    )
    pdf.add_table(
        ["Verb", "ich", "du", "er/sie", "wir", "ihr", "sie/Sie"],
        [
            ["sein", "war", "warst", "war", "waren", "wart", "waren"],
            ["haben", "hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
            ["koennen", "konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
            ["muessen", "musste", "musstest", "musste", "mussten", "musstet", "mussten"],
            ["machen", "machte", "machtest", "machte", "machten", "machtet", "machten"],
            ["gehen", "ging", "gingst", "ging", "gingen", "gingt", "gingen"],
        ],
    )
    pdf.add_darija(
        "Praeteritum katst3emlou f l'kitaba w m3a sein/haben f l'klam: "
        "'Ich WAR in Berlin' machi 'Ich bin in Berlin gewesen' (f l'klam)."
    )

    pdf.add_section("Konjunktiv II (Subjunctive - Would/Could)")
    pdf.add_text(
        "Used for wishes, polite requests, hypothetical situations, and conditions."
    )
    pdf.add_table(
        ["Purpose", "Example", "Darija"],
        [
            ["Wish", "Ich waere gern reich.", "Bghit nkoun ghani. (kun...)"],
            ["Polite request", "Koennten Sie mir helfen?", "Wa9ila t3awnouni? (formal)"],
            ["Hypothetical", "Wenn ich Geld haette, wuerde ich reisen.", "Ila kount 3andi l'flouss, kount nsafer."],
            ["Advice", "An deiner Stelle wuerde ich lernen.", "F blasstek, kount ne9ra."],
        ],
    )
    pdf.add_table(
        ["Verb", "Konjunktiv II", "Darija Equivalent"],
        [
            ["sein", "waere", "kount (nkoun)"],
            ["haben", "haette", "koun 3andi"],
            ["koennen", "koennte", "koun n9der"],
            ["muessen", "muesste", "koun khassni"],
            ["wuerden (would)", "wuerde + infinitiv", "kount + verb"],
        ],
    )

    pdf.add_section("Passive Voice (Passiv)")
    pdf.add_text("Passive = werden + past participle. Focus shifts to the action, not the doer.")
    pdf.add_example(
        "Active: Der Koch kocht die Suppe.",
        "",
        "T-teyyab ka-yteyyeb l-7rira.",
    )
    pdf.add_example(
        "Passive: Die Suppe wird (vom Koch) gekocht.",
        "",
        "L-7rira kat-teyyeb (men 3and t-teyyab).",
    )

    pdf.add_section("Relative Clauses (Relativsaetze)")
    pdf.add_text(
        "Relative clauses describe a noun. The relative pronoun (der/die/das/den/dem) "
        "matches the gender of the noun, and the case of its role in the relative clause."
    )
    pdf.add_example(
        "Der Mann, DER dort steht, ist mein Lehrer.",
        "",
        "R-rajel, LLI wa9ef temma, huwa l'oustadh dyali. (der = Nominativ masculine)",
    )
    pdf.add_example(
        "Die Frau, DIE ich kenne, kommt aus Marokko.",
        "",
        "L'mra, LLI ka-n3erfha, jaya men l'Meghrib. (die = Akkusativ feminine)",
    )

    pdf.add_section("Reflexive Verbs (Reflexive Verben)")
    pdf.add_text("Reflexive verbs use 'sich' (oneself). The reflexive pronoun changes with the subject.")
    pdf.add_table(
        ["Pronoun", "Reflexive (Akk)", "Example"],
        [
            ["ich", "mich", "Ich wasche mich"],
            ["du", "dich", "Du waeSchst dich"],
            ["er/sie/es", "sich", "Er waescht sich"],
            ["wir", "uns", "Wir waschen uns"],
            ["ihr", "euch", "Ihr wascht euch"],
            ["sie/Sie", "sich", "Sie waschen sich"],
        ],
    )
    pdf.add_darija(
        "Reflexive verbs = l'verb lli kaydir 3la rassek. 'sich waschen' = ghsel rasso. "
        "'sich freuen' = fra7 b rassou. F Darija 3andna nefs l'concept: 'rasso/rassha'."
    )

    pdf.add_section("Subordinate Clauses (Nebensaetze)")
    pdf.add_text(
        "Subordinate clauses push the verb to the END. Common conjunctions: "
        "dass, weil, ob, wenn, als, obwohl, damit, bevor, nachdem"
    )
    pdf.add_table(
        ["Conjunction", "Meaning", "Example", "Darija"],
        [
            ["weil", "because", "Ich lerne, weil ich Deutsch brauche.", "7it / 3la 7ssab"],
            ["dass", "that", "Ich weiss, dass du klug bist.", "belli"],
            ["wenn", "if/when", "Wenn es regnet, bleibe ich.", "ila / mn in"],
            ["als", "when (past)", "Als ich jung war, ...", "mllin kount sghir..."],
            ["obwohl", "although", "Obwohl es regnet, gehe ich.", "wa-kha / 3la r-rghm"],
            ["damit", "so that", "Ich lerne, damit ich bestehe.", "bash / 7it bash"],
        ],
    )

    path = out / "06-grammar-b1-advanced.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 07: Vocabulary B1 ─────────────────────────────────────────

def _gen_07_vocabulary_b1(out: Path) -> Path:
    pdf = CurriculumPDF("Vocabulary B1", "B1")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Work & Career (Arbeit & Beruf)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["der Beruf", "profession", "l-mihna"],
            ["die Arbeit", "work", "l-khedma"],
            ["der Arbeitgeber", "employer", "l-patron / mol l-khedma"],
            ["der Arbeitnehmer", "employee", "l-kheddam"],
            ["das Gehalt", "salary", "s-salaire"],
            ["der Lebenslauf", "CV/resume", "l-CV"],
            ["die Bewerbung", "application", "demande d'emploi"],
            ["das Vorstellungsgespraech", "job interview", "l'entretien"],
            ["die Erfahrung", "experience", "l-khibra / l'experience"],
            ["kuendigen", "to quit", "n9ata3 l-khedma"],
            ["befoerdern", "to promote", "yetpromouva"],
            ["der Urlaub", "vacation", "l-3otla / l-conge"],
            ["Vollzeit / Teilzeit", "full-time / part-time", "l-wa9t kamel / partiel"],
            ["die Ueberstunden", "overtime", "heures supplementaires"],
        ],
    )

    pdf.add_section("Education (Bildung)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Schule", "school", "l-madrasa"],
            ["die Universitaet", "university", "l-jami3a"],
            ["das Studium", "studies", "l-9raya"],
            ["der Abschluss", "degree/diploma", "d-diplome"],
            ["das Zeugnis", "report card/certificate", "ch-chahada"],
            ["die Pruefung", "exam", "l-imti7an"],
            ["bestehen", "to pass (exam)", "nje7"],
            ["durchfallen", "to fail (exam)", "ns9ot / nesko6"],
            ["der Kurs", "course", "l-cours"],
            ["das Stipendium", "scholarship", "l-bourse"],
            ["die Ausbildung", "vocational training", "t-takwin"],
            ["lernen / studieren", "to learn / to study", "n9ra / ndouez"],
        ],
    )

    pdf.add_section("Media & Technology (Medien & Technik)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["das Internet", "internet", "l-internet"],
            ["die Webseite", "website", "l-maw9i3"],
            ["das Passwort", "password", "l-mot de passe"],
            ["herunterladen", "to download", "n-telecharji"],
            ["hochladen", "to upload", "ntle3"],
            ["der Drucker", "printer", "l-imprimante"],
            ["die Nachricht", "news/message", "l-khabar / l-message"],
            ["die Zeitung", "newspaper", "l-jarida"],
            ["die Zeitschrift", "magazine", "l-majalla"],
            ["die Sendung", "broadcast/show", "l-7issa"],
            ["die Werbung", "advertisement", "l-publicite"],
            ["die App", "app", "l-application"],
        ],
    )

    pdf.add_section("Environment (Umwelt)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Umwelt", "environment", "l-bi2a"],
            ["die Natur", "nature", "t-tabi3a"],
            ["der Klimawandel", "climate change", "t-taghyir l-manakhi"],
            ["die Verschmutzung", "pollution", "t-talawwuth"],
            ["recyceln", "to recycle", "n-recycli / n3awed nsta3mel"],
            ["der Muell", "garbage", "z-zbel"],
            ["die Energie", "energy", "t-ta9a"],
            ["erneuerbar", "renewable", "qabel l t-tajdid"],
            ["der Wald", "forest", "l-ghaba"],
            ["das Tier", "animal", "l-7ayawan"],
            ["schuetzen", "to protect", "n7mi / n7afed 3la"],
            ["die Loesung", "solution", "l-7all"],
        ],
    )

    pdf.add_section("Emotions & Relationships (Gefuehle & Beziehungen)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["gluecklich", "happy", "far7an/far7ana"],
            ["traurig", "sad", "7zin/7zina"],
            ["wuetend", "angry", "m9elle9/m9elle9a"],
            ["aufgeregt", "excited", "met7emmes"],
            ["nervoes", "nervous", "mkhelkhal / nerveux"],
            ["ueberrascht", "surprised", "met-faj2e"],
            ["enttaeuscht", "disappointed", "m7bet/m7ebta"],
            ["die Freundschaft", "friendship", "s-sda9a"],
            ["die Liebe", "love", "l-7ob"],
            ["die Eifersucht", "jealousy", "l-ghira"],
            ["vertrauen", "to trust", "nti9 f"],
            ["sich streiten", "to argue", "nt-khassem"],
        ],
    )

    path = out / "07-vocabulary-b1.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 08: Grammar B2 ───────────────────────────────────────────

def _gen_08_grammar_b2(out: Path) -> Path:
    pdf = CurriculumPDF("Grammar B2 Complex", "B2")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Konjunktiv I (Reported Speech / Indirekte Rede)")
    pdf.add_text(
        "Konjunktiv I is used for reported speech (what someone else said). "
        "Formed from the infinitive stem + -e endings."
    )
    pdf.add_table(
        ["Direct Speech", "Reported Speech (Konjunktiv I)", "Darija"],
        [
            ["Er sagt: 'Ich bin muede.'", "Er sagt, er sei muede.", "Gal belli 3eyyan."],
            ["Sie sagt: 'Ich habe Zeit.'", "Sie sagt, sie habe Zeit.", "Galat belli 3andha l-wa9t."],
            ["Er sagt: 'Ich kann kommen.'", "Er sagt, er koenne kommen.", "Gal belli y9der yji."],
        ],
    )
    pdf.add_darija(
        "Konjunktiv I katst3mlou bach tgol chnou gal chi wa7ed. F Darija, katst3mel 'gal belli...' "
        "F l'almanya, katbeddel l'verb l Konjunktiv I."
    )

    pdf.add_section("Past Perfect (Plusquamperfekt)")
    pdf.add_text(
        "Plusquamperfekt = hatte/war + past participle. Describes an action BEFORE another past action."
    )
    pdf.add_example(
        "Nachdem ich gegessen HATTE, ging ich spazieren.",
        "",
        "Men ba3d ma KOUNT klit, mchit netmechcha. (l'action l'ouwla = Plusquamperfekt)",
    )

    pdf.add_section("Participial Constructions (Partizipialkonstruktionen)")
    pdf.add_text(
        "Partizip I (present participle): stem + -d (lachend = laughing).\n"
        "Partizip II (past participle): ge- + stem + -t/-en (gemacht = made).\n"
        "Both can be used as adjectives before nouns."
    )
    pdf.add_example(
        "der lachende Mann = the laughing man",
        "",
        "r-rajel lli kayd7ek (Partizip I ka-adjective)",
    )
    pdf.add_example(
        "der geschriebene Brief = the written letter",
        "",
        "l-bra lli mektouba (Partizip II ka-adjective)",
    )

    pdf.add_section("Extended Attributes (Erweiterte Attribute)")
    pdf.add_text(
        "German can pack entire relative clauses into a single attribute before the noun. "
        "This is very common in academic and formal writing."
    )
    pdf.add_example(
        "die in Deutschland lebenden Auslaender",
        "",
        "= die Auslaender, die in Deutschland leben = l-baraniyyin lli 3aychin f Almanya",
    )
    pdf.add_example(
        "der von meinem Freund empfohlene Film",
        "",
        "= der Film, den mein Freund empfohlen hat = l-film lli sa7bi wasani biha",
    )

    pdf.add_section("Nominalization (Nominalisierung)")
    pdf.add_text(
        "German easily turns verbs and adjectives into nouns by capitalizing them. "
        "The article is always 'das' for nominalized verbs."
    )
    pdf.add_table(
        ["Original", "Nominalized", "Darija"],
        [
            ["lesen (to read)", "das Lesen (reading)", "l-9raya"],
            ["essen (to eat)", "das Essen (food/eating)", "l-makla"],
            ["schoen (beautiful)", "das Schoene (the beautiful thing)", "z-zin / l-7aja z-zwina"],
            ["krank (sick)", "der Kranke (the sick person)", "l-mrid"],
            ["reisen (to travel)", "das Reisen (traveling)", "s-safar"],
        ],
    )
    pdf.add_darija(
        "F l'almanya, kat9der ddir men ay verb ism: lesen -> das Lesen. "
        "Daymen 'das' m3a l'verbs lli wella2 nouns. Darija 3andha nefs l'concept: "
        "'nakol' -> 'l-makla', 'n9ra' -> 'l-9raya'."
    )

    pdf.add_section("Advanced Connectors (Konnektoren)")
    pdf.add_table(
        ["Connector", "Meaning", "Example", "Darija"],
        [
            ["je ... desto", "the more ... the more", "Je mehr ich lerne, desto besser.", "Koll-ma n9ra kter, koll-ma nwelli 7sen."],
            ["sowohl ... als auch", "both ... and", "Sowohl er als auch sie kommen.", "Huwa w hiya jayyin."],
            ["weder ... noch", "neither ... nor", "Weder er noch sie kommt.", "La huwa la hiya jay/jaya."],
            ["entweder ... oder", "either ... or", "Entweder Tee oder Kaffee.", "Ya atay ya 9ahwa."],
            ["nicht nur ... sondern auch", "not only ... but also", "Nicht nur klug, sondern auch fleissig.", "Machi ghir dhki, 7ta mejthed."],
            ["zwar ... aber", "indeed ... but", "Zwar teuer, aber gut.", "Wa-kha ghaali, walakin mezyan."],
        ],
    )

    path = out / "08-grammar-b2-complex.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 09: Vocabulary B2 ─────────────────────────────────────────

def _gen_09_vocabulary_b2(out: Path) -> Path:
    pdf = CurriculumPDF("Vocabulary B2", "B2")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Academic Language (Akademische Sprache)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Forschung", "research", "l-ba7th"],
            ["die Studie", "study", "d-dirasa"],
            ["das Ergebnis", "result", "n-natija"],
            ["die Analyse", "analysis", "t-ta7lil"],
            ["die These / Hypothese", "thesis / hypothesis", "l-farDiya"],
            ["die Methode", "method", "t-tari9a"],
            ["der Beweis", "proof/evidence", "d-dalil"],
            ["zusammenfassen", "to summarize", "nlakhkhas"],
            ["vergleichen", "to compare", "n9aren"],
            ["auswerten", "to evaluate", "n9eyyem"],
            ["begruenden", "to justify", "nberrer"],
            ["widersprechen", "to contradict", "n3ared"],
            ["die Quelle", "source", "l-masdar"],
            ["die Statistik", "statistics", "l-i7sa2iyyat"],
        ],
    )

    pdf.add_section("Business & Economics (Wirtschaft)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["das Unternehmen", "company", "ch-charika"],
            ["die Wirtschaft", "economy", "l-i9tisad"],
            ["der Handel", "trade", "t-tijara"],
            ["der Gewinn", "profit", "r-rib7"],
            ["der Verlust", "loss", "l-khasara"],
            ["die Investition", "investment", "l-istithmar"],
            ["der Markt", "market", "s-sou9"],
            ["die Konkurrenz", "competition", "l-mounaafasa"],
            ["der Vertrag", "contract", "l-3a9d"],
            ["die Steuer", "tax", "d-dariba"],
            ["die Inflation", "inflation", "t-tada5om"],
            ["das Wachstum", "growth", "n-noumouw"],
            ["exportieren / importieren", "export / import", "yessaddar / yestourad"],
            ["die Boerse", "stock exchange", "l-boursa"],
        ],
    )

    pdf.add_section("Science & Research (Wissenschaft)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Wissenschaft", "science", "l-3ilm"],
            ["der Wissenschaftler", "scientist", "l-3aalim / l-ba7ith"],
            ["das Experiment", "experiment", "t-tajriba"],
            ["die Entdeckung", "discovery", "l-iktichaf"],
            ["die Erfindung", "invention", "l-ikhtira3"],
            ["die Theorie", "theory", "n-nadariya"],
            ["entwickeln", "to develop", "ntouwwer"],
            ["untersuchen", "to investigate", "nb7eth / ne7e99e9"],
            ["das Labor", "laboratory", "l-moukhtabar"],
            ["die Daten", "data", "l-mu3tayat"],
            ["die Technologie", "technology", "t-tiknolojia"],
            ["kuenstliche Intelligenz", "artificial intelligence", "d-daka2 l-istina3i"],
        ],
    )

    pdf.add_section("Abstract Concepts (Abstrakte Begriffe)")
    pdf.add_table(
        ["German", "English", "Darija"],
        [
            ["die Gerechtigkeit", "justice", "l-3adl"],
            ["die Freiheit", "freedom", "l-7urriya"],
            ["die Verantwortung", "responsibility", "l-mas2ouliya"],
            ["die Meinung", "opinion", "r-ra2y"],
            ["die Wahrheit", "truth", "l-7a9i9a"],
            ["die Demokratie", "democracy", "d-dimo9raTiya"],
            ["das Vorurteil", "prejudice", "7okm mousba9"],
            ["die Gleichberechtigung", "equality", "l-mousawat"],
            ["die Toleranz", "tolerance", "t-tasa7oul"],
            ["das Gewissen", "conscience", "d-damir"],
            ["die Wuerde", "dignity", "l-karama"],
            ["die Pflicht", "duty", "l-wajib"],
        ],
    )

    pdf.add_section("Idiomatic Expressions (Redewendungen)")
    pdf.add_table(
        ["German Idiom", "Literal", "Meaning", "Darija Equivalent"],
        [
            ["Daumen druecken", "press thumbs", "wish luck", "Allah y3awn"],
            ["ins Fettnäpfchen treten", "step in grease pot", "make a faux pas", "dkhal rejlih f fommou"],
            ["den Nagel auf den Kopf treffen", "hit nail on head", "be exactly right", "Dreb l-mesmar f rasso"],
            ["Schwein haben", "have pig", "be lucky", "3andou z-zher"],
            ["die Nase voll haben", "have full nose", "be fed up", "tqella3 / faq"],
            ["auf dem Holzweg sein", "be on wood path", "be mistaken", "ghaalet"],
            ["unter vier Augen", "under four eyes", "in private", "bin l-3inin"],
            ["Es ist mir Wurst", "it's sausage to me", "I don't care", "ma-3andi ma-nddir biha"],
        ],
    )

    path = out / "09-vocabulary-b2.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 10: False Friends & Common Mistakes ──────────────────────

def _gen_10_false_friends(out: Path) -> Path:
    pdf = CurriculumPDF("False Friends & Common Mistakes", "All Levels")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("German-English False Friends (Falsche Freunde)")
    pdf.add_text(
        "These words look similar but have different meanings! "
        "Be careful not to translate them directly."
    )
    pdf.add_darija(
        "Had l-kalimat katechbeh l l-ingliziya walakin l-ma3na moukhtalf! "
        "Redd l-bal ma-t-traduich'hom direct."
    )
    pdf.add_table(
        ["German", "Looks like", "Actually means", "Darija"],
        [
            ["aktuell", "actual", "current, up-to-date", "7aaliyan / jdid"],
            ["also", "also", "so, therefore", "iwa / donc"],
            ["bekommen", "become", "to get/receive", "n7essel 3la"],
            ["brav", "brave", "well-behaved", "mwellef / sage"],
            ["Chef", "chef (cook)", "boss", "l-patron"],
            ["eventuell", "eventually", "possibly", "imken / momkin"],
            ["fast", "fast (quick)", "almost", "t9riban"],
            ["Gift", "gift (present)", "poison", "ssemm!"],
            ["Gymnasium", "gymnasium", "academic high school", "lycee"],
            ["Handy", "handy", "mobile phone", "t-telephone"],
            ["Hose", "hose", "trousers/pants", "s-serwal"],
            ["Konkurrenz", "concurrence", "competition", "l-mounaafasa"],
            ["Mist", "mist (fog)", "manure/rubbish", "z-zbel"],
            ["sensibel", "sensible", "sensitive", "7ssa3s"],
            ["sympathisch", "sympathetic", "likeable", "dareef / 3aziz"],
            ["Rezept", "receipt", "recipe / prescription", "wasfa / recette"],
            ["See", "see", "lake (der) / sea (die)", "l-bu7ayra / l-b7ar"],
            ["Wand", "wand (magic)", "wall", "l-7it"],
        ],
    )

    pdf.add_section("Common Moroccan Learner Mistakes")

    pdf.add_subsection("1. Gender Confusion")
    pdf.add_text(
        "Arabic has 2 genders, German has 3. The neuter gender (das) doesn't exist in Arabic. "
        "You must memorize each noun with its article!"
    )
    pdf.add_darija(
        "L-3arbiya 3andha 2 genders, l'almanya 3andha 3! 'das' (neuter) ma-kaynch f l-3arbiya. "
        "Khassek t7effd kol kalima m3a l'article dyalha."
    )

    pdf.add_subsection("2. Word Order Mistakes")
    pdf.add_text(
        "Arabic is VSO (verb first). German is V2 (verb second in main clause, verb last in subordinate). "
        "WRONG: 'Gehe ich zur Schule.' CORRECT: 'Ich gehe zur Schule.'"
    )

    pdf.add_subsection("3. The P/B Problem")
    pdf.add_text(
        "Arabic/Darija doesn't have the /p/ sound. German distinguishes P and B clearly. "
        "Practice: 'Park' vs 'Bark', 'Polizei' (police), 'Post' (mail)."
    )
    pdf.add_darija(
        "'P' ma-kaynch f Darija. Khassek tetmarin: 'Park' (machi 'Bark'), "
        "'Papa', 'Polizei', 'Pause'. 7awel dir chfayfek b7al ila ka-tnfokh."
    )

    pdf.add_subsection("4. The Oe/Ue Sounds")
    pdf.add_text(
        "These rounded vowels don't exist in Arabic or Darija. "
        "Oe: round lips like 'o', say 'e'. Ue: round lips like 'u', say 'i'."
    )

    pdf.add_subsection("5. Case Endings Confusion")
    pdf.add_text(
        "Arabic has cases but uses them differently. The Dativ case is especially confusing "
        "because Arabic doesn't have an equivalent indirect object marking."
    )

    pdf.add_subsection("6. Compound Word Panic")
    pdf.add_text(
        "German builds very long compound words. Don't panic! Break them down:\n"
        "Handschuh = Hand + Schuh (hand + shoe = glove)\n"
        "Krankenhaus = Kranken + Haus (sick + house = hospital)\n"
        "Staubsauger = Staub + Sauger (dust + sucker = vacuum cleaner)"
    )
    pdf.add_darija(
        "L-kalimat t-twila f l'almanya hiya ghir kalimat sghar mjem3in! "
        "Ma-tkhafch, fekkel'hom: Handschuh = yedd + sabbat = gant!"
    )

    pdf.add_section("Darija Advantages for German Learners")
    pdf.add_text(
        "Good news! Moroccan Darija speakers have several advantages:\n"
        "1. The German 'ch' (ich) sounds like Darija 'kh' (خ)\n"
        "2. The German 'r' (uvular) is similar to Darija 'gh' (غ)\n"
        "3. French knowledge helps: many German words have French cognates\n"
        "4. Darija's French-Arabic mixing prepares you for German compound words\n"
        "5. Arabic verb patterns help understand German verb conjugation system"
    )

    path = out / "10-false-friends-mistakes.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 11: Exam Prep ────────────────────────────────────────────

def _gen_11_exam_prep(out: Path) -> Path:
    pdf = CurriculumPDF("Exam Preparation: Goethe & telc", "A1-B2")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("Goethe-Zertifikat Overview")
    pdf.add_text(
        "The Goethe-Institut offers internationally recognized German language certificates "
        "from A1 to C2. These are often required for:\n"
        "- University admission in Germany (B2/C1)\n"
        "- Work visas (A1/B1)\n"
        "- Citizenship applications (B1)"
    )
    pdf.add_darija(
        "Chahada dyal Goethe hiya l-aktar ma3roufa f l-3alam l German. "
        "Khassek B1 l visa dyal l-3a2ila, B2/C1 l l-jami3a f Almanya."
    )

    pdf.add_subsection("Exam Structure (all levels)")
    pdf.add_table(
        ["Section", "Duration", "Points", "Description"],
        [
            ["Lesen (Reading)", "25-80 min", "25%", "Multiple texts with comprehension questions"],
            ["Hoeren (Listening)", "20-40 min", "25%", "Audio recordings with comprehension tasks"],
            ["Schreiben (Writing)", "25-80 min", "25%", "Emails, letters, essays depending on level"],
            ["Sprechen (Speaking)", "10-20 min", "25%", "Paired/group oral exam with examiner"],
        ],
    )
    pdf.add_text(
        "You need at least 60% total AND 60% in each section to pass (at most levels)."
    )

    pdf.add_subsection("A1: Goethe-Zertifikat A1 (Start Deutsch 1)")
    pdf.add_text(
        "Reading: Understand signs, short notes, simple ads.\n"
        "Listening: Short everyday dialogues and announcements.\n"
        "Writing: Fill in forms, write a short personal message.\n"
        "Speaking: Introduce yourself, ask simple questions, make simple requests."
    )

    pdf.add_subsection("A2: Goethe-Zertifikat A2")
    pdf.add_text(
        "Reading: Short newspaper articles, emails, instructions.\n"
        "Listening: Conversations, phone messages, radio announcements.\n"
        "Writing: Short message and semi-formal email.\n"
        "Speaking: Talk about yourself, plan something with a partner."
    )

    pdf.add_subsection("B1: Goethe-Zertifikat B1")
    pdf.add_text(
        "Reading: Longer texts, newspaper articles, formal letters.\n"
        "Listening: Everyday dialogues, radio interviews, discussions.\n"
        "Writing: Formal email + opinion essay (80+ words each).\n"
        "Speaking: Plan together, present a topic, discuss it."
    )

    pdf.add_subsection("B2: Goethe-Zertifikat B2")
    pdf.add_text(
        "Reading: Complex articles, literary excerpts, academic texts.\n"
        "Listening: Lectures, debates, complex dialogues.\n"
        "Writing: Argumentative essay (250+ words) + formal letter.\n"
        "Speaking: Present a topic, debate, negotiate."
    )

    pdf.add_section("telc Exams")
    pdf.add_text(
        "telc (The European Language Certificates) is another recognized exam provider. "
        "Similar structure to Goethe but often considered slightly easier. "
        "telc B1 is accepted for German citizenship (Einbuergerung)."
    )

    pdf.add_section("Exam Tips (Nsay7 l l-imti7an)")
    pdf.add_table(
        ["Tip", "Darija Explanation"],
        [
            ["Read the instructions carefully", "9ra t-ta3limat mezyan qbel ma-tebda!"],
            ["Manage your time", "Qssem l-wa9t 3la l-as2ila. Ma-t9ellebch f wa7da."],
            ["In listening, read questions first", "F l-istima3, 9ra l-as2ila QBEL ma-tsma3!"],
            ["For writing, plan before you write", "F l-kitaba, dir plan qbel ma-tekteb."],
            ["In speaking, don't panic about mistakes", "F l-klam, ma-tkhafch men l-ghalatat!"],
            ["Practice with sample exams", "Tdrreb 3la imti7anat 9dima. Kaynin online."],
            ["Learn exam vocabulary", "T3ellem l-kalimat lli daymen kayjou f l-imti7an."],
            ["Sleep well the night before", "N3es mezyan lila qbel l-imti7an!"],
        ],
    )

    pdf.add_section("Sample Exam Vocabulary (Common in All Exams)")
    pdf.add_table(
        ["German", "English", "Context"],
        [
            ["Ankreuzen", "to mark/check", "Mark the correct answer"],
            ["Richtig/Falsch", "True/False", "Common question type"],
            ["Ordnen Sie zu", "Match/assign", "Matching exercises"],
            ["Ergaenzen Sie", "Complete", "Fill in the blanks"],
            ["Streichen Sie", "Cross out", "Cross out the wrong answer"],
            ["die Loesung", "solution", "The answer"],
            ["die Aufgabe", "task/exercise", "Exercise number"],
            ["der Pruefer/die Prueferin", "examiner (m/f)", "Speaking test"],
            ["die Pruefungsteilnehmer", "exam participants", "Speaking partners"],
            ["das Ergebnis", "result", "Your final score"],
        ],
    )

    path = out / "11-exam-prep-goethe-telc.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 12: Common Phrases & Dialogues ───────────────────────────

def _gen_12_phrases(out: Path) -> Path:
    pdf = CurriculumPDF("Common Phrases & Dialogues", "A1-B1")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("At the Doctor (Beim Arzt)")
    pdf.add_text("Dialogue:")
    pdf.add_example(
        "Arzt: Was fehlt Ihnen? (What's wrong?)",
        "Vas felt Ee-nen?",
        "Achnou 3andek? / Chnou bik?",
    )
    pdf.add_example(
        "Patient: Ich habe starke Kopfschmerzen. (I have a bad headache)",
        "Ish haa-be shtar-ke Kopf-shmer-tsen",
        "3andi wja3 r-ras 9wi.",
    )
    pdf.add_example(
        "Arzt: Seit wann? (Since when?)",
        "Zait van?",
        "Men imta? / Chhal hadi?",
    )
    pdf.add_example(
        "Patient: Seit gestern. (Since yesterday)",
        "Zait ges-tern",
        "Men lbar7.",
    )
    pdf.add_example(
        "Arzt: Ich verschreibe Ihnen ein Medikament. (I'll prescribe medicine)",
        "",
        "Ghadi nekteb lek dwa.",
    )

    pdf.add_section("At a Restaurant (Im Restaurant)")
    pdf.add_example(
        "Kellner: Haben Sie reserviert? (Have you reserved?)",
        "",
        "Wach reservation 3andek?",
    )
    pdf.add_example(
        "Gast: Ja, auf den Namen Schmidt. (Yes, under the name Schmidt)",
        "",
        "Iyeh, 3la smiya dyal Schmidt.",
    )
    pdf.add_example(
        "Kellner: Was moechten Sie bestellen? (What would you like to order?)",
        "",
        "Chnou bghiti tcommandi?",
    )
    pdf.add_example(
        "Gast: Ich haette gern die Suppe und ein Wasser. (I'd like the soup and water)",
        "",
        "Bghit l-7rira w wa7ed l-ma. ('Ich haette gern' = polite!)",
    )
    pdf.add_example(
        "Gast: Die Rechnung, bitte. (The bill, please)",
        "",
        "L-facture, 3afak.",
    )

    pdf.add_section("At the Bank (Bei der Bank)")
    pdf.add_example(
        "Ich moechte ein Konto eroeffnen. (I'd like to open an account)",
        "",
        "Bghit nfta7 compte.",
    )
    pdf.add_example(
        "Ich moechte Geld ueberweisen. (I'd like to transfer money)",
        "",
        "Bghit nsift l-flouss (virement).",
    )
    pdf.add_example(
        "Ich moechte Geld abheben. (I'd like to withdraw money)",
        "",
        "Bghit nkhrej l-flouss.",
    )
    pdf.add_example(
        "Was sind die Gebuehren? (What are the fees?)",
        "",
        "Chhal l-frais?",
    )

    pdf.add_section("At the Police Station (Bei der Polizei)")
    pdf.add_example(
        "Ich moechte eine Anzeige erstatten. (I'd like to file a report)",
        "",
        "Bghit ndeclari (plainte).",
    )
    pdf.add_example(
        "Man hat mir die Tasche gestohlen. (Someone stole my bag)",
        "",
        "Ser9ouli s-sacoche.",
    )
    pdf.add_example(
        "Ich habe meinen Pass verloren. (I lost my passport)",
        "",
        "Deyye3t l-passeport dyali.",
    )

    pdf.add_section("Phone Calls (Telefonate)")
    pdf.add_example(
        "Guten Tag, hier ist [Name]. (Hello, this is [Name])",
        "",
        "Salam, ana [Smiya].",
    )
    pdf.add_example(
        "Koennte ich bitte mit Herrn/Frau ... sprechen? (Could I speak with Mr./Mrs. ...?)",
        "",
        "Wa9ila netkellam m3a Si/Lalla ...?",
    )
    pdf.add_example(
        "Koennten Sie das bitte wiederholen? (Could you repeat that?)",
        "",
        "Wa9ila t3awed'ha 3afak?",
    )
    pdf.add_example(
        "Ich rufe spaeter nochmal an. (I'll call again later)",
        "",
        "Ghadi n3eyyet mra khra men ba3d.",
    )

    pdf.add_section("Daily Survival Phrases")
    pdf.add_table(
        ["German", "Pronunciation", "Darija"],
        [
            ["Wo ist die Toilette?", "Vo ist dee Twa-let-te", "Fin kayn l-toilette?"],
            ["Sprechen Sie Englisch?", "Shpre-khen Zee Eng-lish", "Kat-tetkellam l'anglais?"],
            ["Ich verstehe nicht", "Ish fer-shtey-e nikht", "Ma-fhemtch"],
            ["Wie viel kostet das?", "Vee feel kos-tet das", "B-chhal hada?"],
            ["Koennen Sie mir helfen?", "Ker-nen Zee meer hel-fen", "Wa9ila t3awnouni?"],
            ["Wo ist der Bahnhof?", "Vo ist dehr Baan-hof", "Fin kayna la gare?"],
            ["Ich bin allergisch gegen...", "Ish bin al-ler-gish gey-gen", "3andi allergie men..."],
            ["Rufen Sie die Polizei!", "Roo-fen Zee dee Po-li-tsai", "3eyyT l l-police!"],
            ["Ich brauche Hilfe!", "Ish brow-khe Hil-fe", "Khassni l-mou3awana!"],
        ],
    )

    path = out / "12-common-phrases-dialogues.pdf"
    pdf.output(str(path))
    return path


# ─── PDF 13: Cultural Notes ───────────────────────────────────────

def _gen_13_cultural_notes(out: Path) -> Path:
    pdf = CurriculumPDF("Cultural Notes: Germany & Morocco", "All Levels")
    pdf.alias_nb_pages()
    pdf.add_page()

    pdf.add_section("German Workplace Culture")
    pdf.add_text(
        "Working in Germany is different from Morocco in several ways. "
        "Understanding these cultural norms will help you integrate better."
    )

    pdf.add_subsection("Puenktlichkeit (Punctuality)")
    pdf.add_text(
        "Germans are famous for punctuality. Being late is considered very rude. "
        "For appointments: arrive 5 minutes early. For parties: arrive on time or up to 15 minutes late."
    )
    pdf.add_darija(
        "F Almanya, l-wa9t MOUHIM bezzzaf. Ila 3andek rendez-vous f 10:00, koun temma f 9:55! "
        "L-ta2khir = manque de respect. Hada moukhtalf 3la l-Meghrib fin 'l-wa9t flexible'."
    )

    pdf.add_subsection("Du vs. Sie (Informal vs. Formal)")
    pdf.add_text(
        "'Du' is informal (friends, family, children, colleagues who offer it). "
        "'Sie' is formal (strangers, bosses, officials, elderly people). "
        "ALWAYS use 'Sie' first! Wait for the other person to offer 'Du'. "
        "In some modern companies, everyone uses 'Du' (like IKEA, startups)."
    )
    pdf.add_darija(
        "'Du' = b7al ila ka-tgol 'nta/nti' l wa7ed 9rib mnek. "
        "'Sie' = b7al '7dretkom'. F l-khedma, bda daymen b 'Sie'! "
        "Ila bghak tsaybi, huwa lli ghadi y9ollk: 'Wir koennen uns duzen' (n9drou nst3mlou Du)."
    )

    pdf.add_subsection("Arbeitskultur (Work Culture)")
    pdf.add_text(
        "- Meetings start ON TIME. Come prepared.\n"
        "- Emails are formal. Start with 'Sehr geehrte/r...' (Dear...).\n"
        "- Work-life balance is important. Don't email after work hours.\n"
        "- Direct communication is normal. Constructive criticism is not personal.\n"
        "- Sick days: you need a doctor's note (Krankschreibung) after 3 days.\n"
        "- 20-30 vacation days per year is standard."
    )

    pdf.add_section("Daily Life in Germany (Alltag)")

    pdf.add_subsection("Ruhezeit (Quiet Hours)")
    pdf.add_text(
        "Germany has strict quiet hours (Ruhezeiten):\n"
        "- Night quiet: 22:00 - 06:00\n"
        "- All day Sunday and public holidays\n"
        "- Some areas: 13:00 - 15:00 (Mittagsruhe)\n"
        "No loud music, no drilling, no lawn mowing during these times!"
    )
    pdf.add_darija(
        "F Almanya, kayn Ruhezeit = wa9t s-skout! Men 10 d l-lil l 6 d ssba7 = SKET! "
        "Nhar l-7add = SKET kolchi! Ma-tdirich bruit wella jiran dyalk ghadi y3eyttou l-police."
    )

    pdf.add_subsection("Pfand (Bottle Deposit)")
    pdf.add_text(
        "Germany has a bottle deposit system. Most plastic and glass bottles have 8-25 cents deposit. "
        "Return them to machines at supermarkets to get your money back (Pfand zurueck)."
    )

    pdf.add_subsection("Muelltrennung (Waste Separation)")
    pdf.add_text(
        "Germans separate waste carefully:\n"
        "- Gelber Sack/Tonne: Packaging (plastic, cans)\n"
        "- Papiertonne: Paper and cardboard\n"
        "- Biotonne: Food waste, organic matter\n"
        "- Restmuell: Everything else\n"
        "- Glass containers: Separated by color (brown, green, white)"
    )

    pdf.add_section("Germany-Morocco Cultural Bridges")

    pdf.add_subsection("What You Have in Common")
    pdf.add_text(
        "- Family values: Both cultures value family strongly\n"
        "- Hospitality: Germans appreciate it in a different way (gifts, punctuality)\n"
        "- Food culture: Both love bread! (German Brot is world-famous, 3000+ varieties)\n"
        "- Football passion: Both countries love Fussball\n"
        "- Tea/Coffee culture: Both enjoy social drinks (Germany: Kaffee und Kuchen at 3-4pm)\n"
        "- Moroccans in Germany: ~200,000+ Moroccans live in Germany, strong community"
    )

    pdf.add_subsection("Key Differences to Be Aware Of")
    pdf.add_table(
        ["Topic", "Morocco", "Germany"],
        [
            ["Greetings", "Long, warm, ask about family", "Short: handshake + 'Hallo'"],
            ["Time", "Flexible ('insha'Allah')", "Strict punctuality"],
            ["Direct speech", "Indirect, polite", "Very direct, honest"],
            ["Personal space", "Close, touchy", "Keep distance (~1m)"],
            ["Small talk", "Personal questions OK", "Avoid money, age, religion"],
            ["Shops", "Open late, bargaining", "Closed Sundays, fixed prices"],
            ["Bureaucracy", "Flexible", "Paper-heavy, follow the rules!"],
        ],
    )

    pdf.add_subsection("Useful Cultural Vocabulary")
    pdf.add_table(
        ["German", "English", "Darija / Context"],
        [
            ["das Amt", "government office", "l-idara (Auslaenderamt = maktab l-ajanib)"],
            ["die Anmeldung", "registration", "t-tsjil (LAZEM t-dir'ha f 2 weeks!)"],
            ["die Aufenthaltserlaubnis", "residence permit", "carte de sejour"],
            ["die Krankenversicherung", "health insurance", "l-assurance (OBLIGATOIRE!)"],
            ["der Mietvertrag", "rental contract", "contrat dyal l-kra"],
            ["die Kaution", "deposit (rental)", "l-caution (2-3 months rent)"],
            ["die Steuernummer", "tax number", "numero dyal d-dariba"],
            ["das Konto", "bank account", "l-compte bancaire"],
        ],
    )

    path = out / "13-cultural-notes.pdf"
    pdf.output(str(path))
    return path
