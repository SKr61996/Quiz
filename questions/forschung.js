const forschungQuestions = [

{
    id: 196,

    topic: "Forschung",

    subtopic: "Grundlagen",

    difficulty: "leicht",

    type: "single",

    question: "Welches Ziel verfolgt wissenschaftliche Forschung grundsätzlich?",

    answers: [
        "Systematisch neue Erkenntnisse zu gewinnen oder bestehende Erkenntnisse zu überprüfen",
        "Persönliche Meinungen ohne Prüfung zu bestätigen",
        "Erfahrungswissen grundsätzlich zu ersetzen",
        "Nur bereits bekannte Ergebnisse zu wiederholen"
    ],

    correct: [0],

    explanation:
        "Wissenschaftliche Forschung dient der systematischen Gewinnung, Prüfung und Weiterentwicklung von Erkenntnissen."
},

{
    id: 197,

    topic: "Forschung",

    subtopic: "Quantitative Forschung",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet quantitative Forschung besonders?",

    answers: [
        "Merkmale werden messbar gemacht und häufig statistisch ausgewertet.",
        "Es werden ausschließlich offene Erzählungen ausgewertet.",
        "Die Forschungsfrage bleibt während der gesamten Studie grundsätzlich unbestimmt.",
        "Zahlen und Messwerte dürfen nicht verwendet werden."
    ],

    correct: [0],

    explanation:
        "Quantitative Forschung untersucht messbare Merkmale und Zusammenhänge mithilfe strukturierter Datenerhebung und statistischer Auswertung."
},

{
    id: 198,

    topic: "Forschung",

    subtopic: "Qualitative Forschung",

    difficulty: "mittel",

    type: "single",

    question: "Welches Erkenntnisinteresse steht bei qualitativer Forschung häufig im Vordergrund?",

    answers: [
        "Das Verstehen subjektiver Erfahrungen, Bedeutungen und Perspektiven",
        "Die ausschließliche Berechnung statistischer Wahrscheinlichkeiten",
        "Die Prüfung von Medikamentendosierungen im Labor",
        "Die Bestimmung einer repräsentativen Häufigkeit in der Gesamtbevölkerung"
    ],

    correct: [0],

    explanation:
        "Qualitative Forschung untersucht, wie Menschen Situationen erleben, deuten und aus ihrer Perspektive beschreiben."
},

{
    id: 199,

    topic: "Forschung",

    subtopic: "Quantitativer Forschungsprozess",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Schritte gehören zu einem quantitativen Forschungsprozess?",

    answers: [
        "Formulierung einer Fragestellung oder Hypothese",
        "Operationalisierung der Variablen",
        "Auswahl eines Studiendesigns und einer Stichprobe",
        "Datenerhebung und statistische Analyse"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Der quantitative Forschungsprozess umfasst unter anderem Fragestellung oder Hypothese, Operationalisierung, Design- und Stichprobenauswahl, Datenerhebung, Analyse und Interpretation."
},

{
    id: 200,

    topic: "Forschung",

    subtopic: "Operationalisierung",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet die Operationalisierung einer Variable?",

    answers: [
        "Ein theoretisches Merkmal wird so definiert, dass es beobachtet oder gemessen werden kann.",
        "Die Stichprobe wird zufällig verkleinert.",
        "Die Ergebnisse werden vor der Datenerhebung veröffentlicht.",
        "Eine Forschungsfrage wird durch eine persönliche Meinung ersetzt."
    ],

    correct: [0],

    explanation:
        "Operationalisierung legt fest, anhand welcher beobachtbaren Merkmale oder Messverfahren ein theoretisches Konzept erfasst wird."
},

{
    id: 201,

    topic: "Forschung",

    subtopic: "Hypothesen",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aussage beschreibt die Nullhypothese H0?",

    answers: [
        "Sie geht davon aus, dass kein Unterschied oder Zusammenhang besteht.",
        "Sie beschreibt immer den erwarteten Forschungseffekt.",
        "Sie enthält ausschließlich qualitative Aussagen.",
        "Sie wird erst nach Veröffentlichung der Studie formuliert."
    ],

    correct: [0],

    explanation:
        "Die Nullhypothese nimmt üblicherweise an, dass zwischen untersuchten Gruppen oder Variablen kein Unterschied beziehungsweise Zusammenhang besteht."
},

{
    id: 202,

    topic: "Forschung",

    subtopic: "Hypothesen",

    difficulty: "mittel",

    type: "single",

    question: "Was wird als Alternativhypothese H1 bezeichnet?",

    answers: [
        "Die Annahme, dass ein Unterschied oder Zusammenhang besteht",
        "Die Annahme, dass keine Daten erhoben werden",
        "Die Beschreibung der Stichprobengröße",
        "Die vollständige Widerlegung der Forschungsfrage"
    ],

    correct: [0],

    explanation:
        "Die Alternativhypothese formuliert den angenommenen Unterschied, Effekt oder Zusammenhang, der wissenschaftlich untersucht werden soll."
},

{
    id: 203,

    topic: "Forschung",

    subtopic: "Qualitativer Forschungsprozess",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Merkmale kennzeichnen den qualitativen Forschungsprozess?",

    answers: [
        "Offenheit",
        "Flexibilität",
        "Zirkularität",
        "Wechsel zwischen Datenerhebung und Datenauswertung"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Qualitative Forschung ist häufig offen, flexibel und zirkulär. Datenerhebung und Interpretation können sich dabei wiederholt abwechseln."
},

{
    id: 204,

    topic: "Forschung",

    subtopic: "Qualitative Datenerhebung",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Methoden können in der qualitativen Forschung zur Datenerhebung eingesetzt werden?",

    answers: [
        "Narratives Interview",
        "Fokusgruppendiskussion",
        "Teilnehmende Beobachtung",
        "Dokumentenanalyse"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Zu qualitativen Erhebungsmethoden gehören verschiedene Interviewformen, Gruppen- oder Fokusgruppendiskussionen, Beobachtungen und Dokumentenanalysen."
},

{
    id: 205,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Forscherin möchte untersuchen, wie pflegende Angehörige die Versorgung eines demenziell erkrankten Familienmitglieds erleben. Sie führt offene Interviews und wertet die persönlichen Erzählungen aus. Welcher Forschungsansatz ist besonders geeignet?",

    answers: [
        "Qualitativer Forschungsansatz",
        "Rein experimenteller Forschungsansatz",
        "Ausschließlich statistische Sekundäranalyse",
        "Randomisierte kontrollierte Studie"
    ],

    correct: [0],

    explanation:
        "Da subjektive Erfahrungen und persönliche Bedeutungen untersucht werden, eignet sich ein qualitativer Forschungsansatz mit offenen Interviews."
},
{
    id: 206,

    topic: "Forschung",

    subtopic: "Qualitatives Interview",

    difficulty: "mittel",

    type: "single",

    question: "Wozu werden qualitative Interviews in der Pflegeforschung besonders eingesetzt?",

    answers: [
        "Um Erfahrungen, Gefühle, Meinungen und subjektive Perspektiven zu erfassen",
        "Um ausschließlich Laborwerte zu messen",
        "Um große Stichproben statistisch auszuwerten",
        "Um Medikamente experimentell zu testen"
    ],

    correct: [0],

    explanation:
        "Qualitative Interviews ermöglichen einen Zugang zu persönlichen Erfahrungen, Sichtweisen, Gefühlen und Bedeutungen."
},

{
    id: 207,

    topic: "Forschung",

    subtopic: "Grundprinzipien qualitativer Interviews",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Grundprinzipien kennzeichnen qualitative Interviews?",

    answers: [
        "Offenheit und Flexibilität",
        "Zurückhaltung der forschenden Person",
        "Orientierung an den Relevanzsystemen der Befragten",
        "Prozesshaftigkeit"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Qualitative Interviews orientieren sich an Offenheit, Flexibilität, Kommunikativität, Prozesshaftigkeit und den Bedeutungen der Befragten."
},

{
    id: 208,

    topic: "Forschung",

    subtopic: "Qualitatives Interview",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet das Prinzip der Zurückhaltung im qualitativen Interview?",

    answers: [
        "Die forschende Person lässt der interviewten Person Raum für eigene Schwerpunkte und Erzählungen.",
        "Die forschende Person stellt grundsätzlich keine Fragen.",
        "Die interviewte Person erhält nur vorgegebene Antwortmöglichkeiten.",
        "Die forschende Person bewertet jede Aussage unmittelbar."
    ],

    correct: [0],

    explanation:
        "Zurückhaltung bedeutet, nicht vorschnell zu lenken oder zu bewerten, damit die Perspektive der befragten Person sichtbar wird."
},

{
    id: 209,

    topic: "Forschung",

    subtopic: "Interviewformen",

    difficulty: "mittel",

    type: "single",

    question: "Welche Interviewform ist typischerweise der qualitativen Forschung zuzuordnen?",

    answers: [
        "Leitfadenorientiertes Interview",
        "Vollständig standardisierter Fragebogen",
        "Laborbasierter Leistungstest",
        "Statistisch normierter Wissenstest"
    ],

    correct: [0],

    explanation:
        "Leitfadenorientierte, offene und nicht standardisierte Interviews werden häufig in der qualitativen Forschung eingesetzt."
},

{
    id: 210,

    topic: "Forschung",

    subtopic: "Interviewformen",

    difficulty: "schwer",

    type: "single",

    question: "Was kennzeichnet ein leitfadenorientiertes Interview?",

    answers: [
        "Zentrale Themen sind vorbereitet, die Gesprächsführung bleibt jedoch flexibel.",
        "Jede Frage und Antwort ist vollständig vorgegeben.",
        "Das Interview enthält keine inhaltliche Vorbereitung.",
        "Die Antworten werden ausschließlich numerisch erfasst."
    ],

    correct: [0],

    explanation:
        "Ein Leitfaden strukturiert wichtige Themen, lässt aber Raum für Nachfragen, Vertiefungen und individuelle Erzählungen."
},

{
    id: 211,

    topic: "Forschung",

    subtopic: "Kommunikationsstil",

    difficulty: "mittel",

    type: "single",

    question: "Welcher Kommunikationsstil wird qualitativen Interviews besonders zugeordnet?",

    answers: [
        "Ein empathischer, respektvoller und interessierter Kommunikationsstil",
        "Ein vollständig distanzierter und unpersönlicher Kommunikationsstil",
        "Ein autoritärer und bewertender Kommunikationsstil",
        "Ein ausschließlich schriftlicher Kommunikationsstil"
    ],

    correct: [0],

    explanation:
        "Qualitative Interviews verwenden häufig einen weichen Kommunikationsstil, der empathisch, respektvoll und interessiert ist."
},

{
    id: 212,

    topic: "Forschung",

    subtopic: "Schlussfolgern",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet induktives Schlussfolgern?",

    answers: [
        "Aus einzelnen Beobachtungen wird eine allgemeinere Regel oder Theorie entwickelt.",
        "Aus einer Theorie wird ein konkreter Effekt vorhergesagt.",
        "Aus einem beobachteten Effekt wird mithilfe einer Regel auf eine Ursache geschlossen.",
        "Eine Hypothese wird ohne Daten bestätigt."
    ],

    correct: [0],

    explanation:
        "Beim induktiven Schlussfolgern werden aus konkreten Beobachtungen allgemeinere Zusammenhänge oder theoretische Aussagen abgeleitet."
},

{
    id: 213,

    topic: "Forschung",

    subtopic: "Schlussfolgern",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet deduktives Schlussfolgern?",

    answers: [
        "Aus einer bekannten Theorie und einer Bedingung wird eine erwartete Wirkung abgeleitet.",
        "Aus mehreren Einzelbeobachtungen wird eine neue Theorie entwickelt.",
        "Aus einem unbekannten Effekt wird zufällig eine Ursache bestimmt.",
        "Ergebnisse werden ohne theoretischen Bezug interpretiert."
    ],

    correct: [0],

    explanation:
        "Deduktion leitet aus allgemeinen Regeln oder Theorien konkrete Erwartungen oder Hypothesen ab."
},

{
    id: 214,

    topic: "Forschung",

    subtopic: "Schlussfolgern",

    difficulty: "schwer",

    type: "single",

    question: "Was beschreibt abduktives Schlussfolgern?",

    answers: [
        "Aus einer bekannten Regel und einem beobachteten Ergebnis wird auf eine mögliche Ursache geschlossen.",
        "Aus Einzelbeobachtungen wird immer eine sichere Theorie gebildet.",
        "Eine Theorie wird ausschließlich statistisch bewiesen.",
        "Eine Forschungsfrage wird durch eine persönliche Vermutung ersetzt."
    ],

    correct: [0],

    explanation:
        "Abduktion sucht für ein beobachtetes Phänomen anhand vorhandenen Wissens eine plausible Erklärung oder Ursache."
},

{
    id: 215,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "In mehreren Interviews berichten Auszubildende, dass fehlende Praxisanleitung zu Unsicherheit führt. Die Forscherin entwickelt daraus die Annahme, dass kontinuierliche Anleitung das Sicherheitserleben stärkt. Welche Form des Schlussfolgerns liegt vor?",

    answers: [
        "Induktives Schlussfolgern",
        "Deduktives Schlussfolgern",
        "Abduktives Schlussfolgern",
        "Reine Zufallsauswahl"
    ],

    correct: [0],

    explanation:
        "Aus mehreren konkreten Beobachtungen wird eine allgemeinere Annahme entwickelt. Dies entspricht induktivem Schlussfolgern."
},
{
    id: 216,

    topic: "Forschung",

    subtopic: "Forschungsfrage",

    difficulty: "leicht",

    type: "single",

    question: "Welche Funktion hat eine Forschungsfrage?",

    answers: [
        "Sie legt fest, welches Problem oder Phänomen untersucht werden soll.",
        "Sie ersetzt die Datenerhebung.",
        "Sie enthält bereits das endgültige Forschungsergebnis.",
        "Sie dient ausschließlich der Gestaltung des Literaturverzeichnisses."
    ],

    correct: [0],

    explanation:
        "Die Forschungsfrage grenzt den Untersuchungsgegenstand ein und gibt dem weiteren Forschungsprozess eine klare Richtung."
},

{
    id: 217,

    topic: "Forschung",

    subtopic: "Forschungsfrage",

    difficulty: "mittel",

    type: "single",

    question: "Welche Eigenschaft sollte eine gute Forschungsfrage besitzen?",

    answers: [
        "Sie sollte klar, präzise und untersuchbar formuliert sein.",
        "Sie sollte möglichst viele unterschiedliche Themen gleichzeitig enthalten.",
        "Sie sollte nur mit Ja oder Nein beantwortbar sein.",
        "Sie sollte das erwartete Ergebnis bereits als Tatsache darstellen."
    ],

    correct: [0],

    explanation:
        "Eine geeignete Forschungsfrage ist verständlich, ausreichend eingegrenzt und mit wissenschaftlichen Methoden bearbeitbar."
},

{
    id: 218,

    topic: "Forschung",

    subtopic: "Stichprobe",

    difficulty: "mittel",

    type: "single",

    question: "Was ist eine Stichprobe?",

    answers: [
        "Eine ausgewählte Teilmenge der Grundgesamtheit",
        "Die Gesamtheit aller theoretischen Modelle",
        "Eine einzelne Variable innerhalb einer Studie",
        "Das abschließende Ergebnis einer Datenanalyse"
    ],

    correct: [0],

    explanation:
        "Da häufig nicht alle Personen einer Grundgesamtheit untersucht werden können, wird eine Teilgruppe als Stichprobe ausgewählt."
},

{
    id: 219,

    topic: "Forschung",

    subtopic: "Grundgesamtheit",

    difficulty: "mittel",

    type: "single",

    question: "Was bezeichnet die Grundgesamtheit einer Studie?",

    answers: [
        "Alle Personen oder Einheiten, auf die sich die Forschungsfrage bezieht",
        "Nur die Personen, die an der Studie teilnehmen",
        "Ausschließlich die Forschenden",
        "Die Anzahl der verwendeten Fragebögen"
    ],

    correct: [0],

    explanation:
        "Die Grundgesamtheit umfasst alle Personen oder Untersuchungseinheiten, über die wissenschaftliche Aussagen getroffen werden sollen."
},

{
    id: 220,

    topic: "Forschung",

    subtopic: "Repräsentativität",

    difficulty: "mittel",

    type: "single",

    question: "Wann gilt eine Stichprobe als möglichst repräsentativ?",

    answers: [
        "Wenn sie wesentliche Merkmale der Grundgesamtheit angemessen abbildet",
        "Wenn ausschließlich freiwillige Fachpersonen teilnehmen",
        "Wenn sie besonders klein ist",
        "Wenn alle Teilnehmenden dieselben Eigenschaften besitzen"
    ],

    correct: [0],

    explanation:
        "Eine repräsentative Stichprobe ähnelt der Grundgesamtheit in relevanten Merkmalen und ermöglicht dadurch besser übertragbare Aussagen."
},

{
    id: 221,

    topic: "Forschung",

    subtopic: "Variablen",

    difficulty: "mittel",

    type: "single",

    question: "Was ist eine Variable in der quantitativen Forschung?",

    answers: [
        "Ein Merkmal, das unterschiedliche Ausprägungen annehmen kann",
        "Eine unveränderliche wissenschaftliche Regel",
        "Ein ausschließlich qualitativer Interviewtext",
        "Eine Zusammenfassung des Literaturverzeichnisses"
    ],

    correct: [0],

    explanation:
        "Variablen sind messbare Merkmale, beispielsweise Alter, Schmerzintensität, Pflegeabhängigkeit oder Blutdruck."
},

{
    id: 222,

    topic: "Forschung",

    subtopic: "Variablen",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie untersucht, ob ein Bewegungsprogramm die Sturzhäufigkeit reduziert. Was ist die unabhängige Variable?",

    answers: [
        "Das Bewegungsprogramm",
        "Die Sturzhäufigkeit",
        "Das Alter der Forschenden",
        "Die Anzahl der Literaturquellen"
    ],

    correct: [0],

    explanation:
        "Die unabhängige Variable ist der vermutete Einflussfaktor. Hier ist dies die Durchführung des Bewegungsprogramms."
},

{
    id: 223,

    topic: "Forschung",

    subtopic: "Variablen",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie untersucht, ob ein Bewegungsprogramm die Sturzhäufigkeit reduziert. Was ist die abhängige Variable?",

    answers: [
        "Die Sturzhäufigkeit",
        "Das Bewegungsprogramm",
        "Der Studienort",
        "Die verwendete Literaturdatenbank"
    ],

    correct: [0],

    explanation:
        "Die abhängige Variable ist das gemessene Ergebnis, das möglicherweise durch die unabhängige Variable beeinflusst wird."
},

{
    id: 224,

    topic: "Forschung",

    subtopic: "Gütekriterien",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Gütekriterien sind besonders für quantitative Messverfahren bedeutsam?",

    answers: [
        "Objektivität",
        "Reliabilität",
        "Validität",
        "Persönliche Überzeugung der Forschenden"
    ],

    correct: [0, 1, 2],

    explanation:
        "Zu den klassischen Gütekriterien quantitativer Forschung zählen Objektivität, Reliabilität und Validität."
},

{
    id: 225,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Forscherin möchte die Arbeitszufriedenheit von Pflegefachpersonen messen. Sie verwendet einen standardisierten Fragebogen und wertet die Antworten statistisch aus. Welcher Forschungsansatz liegt vor?",

    answers: [
        "Quantitativer Forschungsansatz",
        "Qualitativer Forschungsansatz",
        "Narrativer Forschungsansatz",
        "Reine Dokumentenanalyse ohne Messung"
    ],

    correct: [0],

    explanation:
        "Ein standardisierter Fragebogen mit numerischer und statistischer Auswertung ist typisch für quantitative Forschung."
},
{
    id: 226,

    topic: "Forschung",

    subtopic: "Objektivität",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Objektivität bei einem Messverfahren?",

    answers: [
        "Das Ergebnis ist möglichst unabhängig von der untersuchenden Person.",
        "Das Ergebnis verändert sich bei jeder Durchführung.",
        "Das Instrument misst grundsätzlich mehrere Merkmale gleichzeitig.",
        "Die Teilnehmenden bestimmen selbst das Ergebnis."
    ],

    correct: [0],

    explanation:
        "Objektivität bedeutet, dass Durchführung, Auswertung und Interpretation möglichst unabhängig von der jeweiligen forschenden Person erfolgen."
},

{
    id: 227,

    topic: "Forschung",

    subtopic: "Reliabilität",

    difficulty: "mittel",

    type: "single",

    question: "Was beschreibt die Reliabilität eines Messinstruments?",

    answers: [
        "Die Zuverlässigkeit und Genauigkeit einer Messung",
        "Die praktische Bedeutung eines Forschungsthemas",
        "Die Größe der Grundgesamtheit",
        "Die persönliche Zustimmung der Teilnehmenden"
    ],

    correct: [0],

    explanation:
        "Reliabilität beschreibt, wie zuverlässig und präzise ein Instrument ein Merkmal misst."
},

{
    id: 228,

    topic: "Forschung",

    subtopic: "Validität",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Validität?",

    answers: [
        "Ein Instrument misst tatsächlich das Merkmal, das es messen soll.",
        "Ein Instrument liefert bei jeder Messung denselben Zahlenwert.",
        "Die Durchführung ist unabhängig von der untersuchenden Person.",
        "Eine Stichprobe ist besonders groß."
    ],

    correct: [0],

    explanation:
        "Validität bezeichnet die Gültigkeit einer Messung. Das Messinstrument muss tatsächlich das beabsichtigte Merkmal erfassen."
},

{
    id: 229,

    topic: "Forschung",

    subtopic: "Gütekriterien",

    difficulty: "schwer",

    type: "single",

    question: "Ein Fragebogen zur Arbeitszufriedenheit erfasst tatsächlich vor allem die körperliche Belastung der Beschäftigten. Welches Gütekriterium ist besonders beeinträchtigt?",

    answers: [
        "Validität",
        "Objektivität",
        "Repräsentativität",
        "Randomisierung"
    ],

    correct: [0],

    explanation:
        "Der Fragebogen misst nicht das eigentlich vorgesehene Merkmal Arbeitszufriedenheit. Damit ist seine Validität eingeschränkt."
},

{
    id: 230,

    topic: "Forschung",

    subtopic: "Gütekriterien",

    difficulty: "schwer",

    type: "single",

    question: "Zwei Forschende werten denselben Fragebogen unterschiedlich aus. Welches Gütekriterium ist besonders gefährdet?",

    answers: [
        "Objektivität",
        "Validität",
        "Repräsentativität",
        "Externe Evidenz"
    ],

    correct: [0],

    explanation:
        "Wenn das Ergebnis von der auswertenden Person abhängt, ist insbesondere die Auswertungsobjektivität eingeschränkt."
},

{
    id: 231,

    topic: "Forschung",

    subtopic: "Reliabilität",

    difficulty: "schwer",

    type: "single",

    question: "Ein Messinstrument liefert bei unveränderten Bedingungen stark unterschiedliche Ergebnisse. Was deutet dies an?",

    answers: [
        "Eine geringe Reliabilität",
        "Eine hohe Validität",
        "Eine hohe Repräsentativität",
        "Eine erfolgreiche Randomisierung"
    ],

    correct: [0],

    explanation:
        "Stark schwankende Ergebnisse unter vergleichbaren Bedingungen sprechen für eine geringe Zuverlässigkeit des Instruments."
},

{
    id: 232,

    topic: "Forschung",

    subtopic: "Standardisierung",

    difficulty: "mittel",

    type: "single",

    question: "Warum werden Abläufe in quantitativen Studien häufig standardisiert?",

    answers: [
        "Damit Bedingungen möglichst vergleichbar sind und Einflüsse der Durchführung reduziert werden",
        "Damit jede teilnehmende Person unterschiedliche Anweisungen erhält",
        "Damit auf eine Datenauswertung verzichtet werden kann",
        "Damit subjektive Eindrücke stärker berücksichtigt werden"
    ],

    correct: [0],

    explanation:
        "Standardisierte Abläufe erhöhen die Vergleichbarkeit und können die Objektivität und Reliabilität einer Untersuchung verbessern."
},

{
    id: 233,

    topic: "Forschung",

    subtopic: "Messfehler",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Faktoren können Messfehler verursachen?",

    answers: [
        "Unklare Anweisungen",
        "Fehlerhafte Messgeräte",
        "Unterschiedliche Durchführung",
        "Ungeeignete Erhebungsinstrumente"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Messfehler können durch Instrumente, Durchführung, Anweisungen oder ungeeignete Operationalisierungen entstehen."
},

{
    id: 234,

    topic: "Forschung",

    subtopic: "Randomisierung",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Randomisierung in einer kontrollierten Studie?",

    answers: [
        "Die zufällige Zuordnung der Teilnehmenden zu den Untersuchungsgruppen",
        "Die zufällige Auswahl der Forschungsfrage",
        "Die freie Wahl der Gruppe durch die Teilnehmenden",
        "Die nachträgliche Veränderung der Ergebnisse"
    ],

    correct: [0],

    explanation:
        "Durch Randomisierung werden Teilnehmende zufällig den Gruppen zugeordnet, um systematische Unterschiede möglichst zu reduzieren."
},

{
    id: 235,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "In einer Studie werden Pflegeheimbewohner zufällig einer Interventions- oder Kontrollgruppe zugeteilt. Beide Gruppen werden mit demselben standardisierten Instrument untersucht. Welche methodischen Maßnahmen werden eingesetzt?",

    answers: [
        "Randomisierung und Standardisierung",
        "Induktion und Theoretical Sampling",
        "Offene Beobachtung und Narration",
        "Ausschließlich qualitative Datenerhebung"
    ],

    correct: [0],

    explanation:
        "Die zufällige Gruppenzuteilung entspricht der Randomisierung. Die einheitliche Messung mit demselben Instrument entspricht der Standardisierung."
},
{
    id: 236,

    topic: "Forschung",

    subtopic: "Kontrollgruppe",

    difficulty: "mittel",

    type: "single",

    question: "Welche Funktion hat eine Kontrollgruppe in einer Interventionsstudie?",

    answers: [
        "Sie ermöglicht den Vergleich mit einer Gruppe, die die untersuchte Intervention nicht oder anders erhält.",
        "Sie legt nachträglich die Forschungsfrage fest.",
        "Sie ersetzt die statistische Auswertung.",
        "Sie besteht ausschließlich aus den Forschenden."
    ],

    correct: [0],

    explanation:
        "Eine Kontrollgruppe dient als Vergleichsmaßstab. Dadurch kann besser beurteilt werden, ob beobachtete Veränderungen mit der Intervention zusammenhängen."
},

{
    id: 237,

    topic: "Forschung",

    subtopic: "Verblindung",

    difficulty: "mittel",

    type: "single",

    question: "Welches Ziel verfolgt die Verblindung in einer Studie?",

    answers: [
        "Erwartungsbedingte Verzerrungen bei Teilnehmenden oder Untersuchenden zu reduzieren",
        "Die Stichprobengröße nachträglich zu erhöhen",
        "Alle Teilnehmenden von der Studie auszuschließen",
        "Die Forschungsfrage geheim zu halten"
    ],

    correct: [0],

    explanation:
        "Verblindung soll verhindern, dass das Wissen über die Gruppenzugehörigkeit das Verhalten, die Behandlung oder die Bewertung der Ergebnisse beeinflusst."
},

{
    id: 238,

    topic: "Forschung",

    subtopic: "Verblindung",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet Doppelverblindung?",

    answers: [
        "Weder die Teilnehmenden noch die untersuchenden oder bewertenden Personen kennen die Gruppenzugehörigkeit.",
        "Zwei unterschiedliche Forschungsfragen werden gleichzeitig untersucht.",
        "Die Daten werden von zwei Personen nacheinander gelöscht.",
        "Interventions- und Kontrollgruppe erhalten immer dieselbe Maßnahme."
    ],

    correct: [0],

    explanation:
        "Bei einer Doppelverblindung kennen weder die Teilnehmenden noch die beteiligten Untersuchenden beziehungsweise Bewertenden die jeweilige Gruppenzuordnung."
},

{
    id: 239,

    topic: "Forschung",

    subtopic: "Hypothesentest",

    difficulty: "mittel",

    type: "single",

    question: "Welche Hypothese soll durch einen statistischen Test üblicherweise widerlegt werden?",

    answers: [
        "Die Nullhypothese",
        "Die Alternativhypothese",
        "Die Forschungsfrage",
        "Die Operationalisierung"
    ],

    correct: [0],

    explanation:
        "Statistische Tests prüfen, ob die beobachteten Daten ausreichend gegen die Nullhypothese sprechen."
},

{
    id: 240,

    topic: "Forschung",

    subtopic: "p-Wert",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aussage beschreibt den p-Wert am treffendsten?",

    answers: [
        "Er gibt an, wie gut die beobachteten Daten unter Annahme der Nullhypothese erklärbar sind.",
        "Er zeigt direkt die Größe und praktische Bedeutung eines Effekts.",
        "Er beweist, dass die Alternativhypothese wahr ist.",
        "Er gibt ausschließlich die Größe der Stichprobe an."
    ],

    correct: [0],

    explanation:
        "Ein kleiner p-Wert bedeutet, dass die beobachteten Daten unter der Nullhypothese eher unwahrscheinlich erscheinen. Er zeigt jedoch nicht automatisch die klinische Bedeutung eines Effekts."
},

{
    id: 241,

    topic: "Forschung",

    subtopic: "p-Wert",

    difficulty: "schwer",

    type: "single",

    question: "Ein statistischer Test ergibt einen p-Wert von 0,03 bei einem festgelegten Signifikanzniveau von 0,05. Welche Entscheidung ist üblich?",

    answers: [
        "Die Nullhypothese wird abgelehnt.",
        "Die Nullhypothese wird sicher bewiesen.",
        "Die Alternativhypothese wird ausgeschlossen.",
        "Die Studie muss ohne Auswertung beendet werden."
    ],

    correct: [0],

    explanation:
        "Da der p-Wert kleiner als das festgelegte Signifikanzniveau ist, wird die Nullhypothese üblicherweise abgelehnt."
},

{
    id: 242,

    topic: "Forschung",

    subtopic: "Alpha-Fehler",

    difficulty: "schwer",

    type: "single",

    question: "Was beschreibt einen Alpha-Fehler beziehungsweise Fehler 1. Art?",

    answers: [
        "Die Nullhypothese wird abgelehnt, obwohl sie tatsächlich zutrifft.",
        "Die Nullhypothese wird beibehalten, obwohl tatsächlich ein Effekt besteht.",
        "Die Stichprobe wird zufällig ausgewählt.",
        "Ein Messinstrument misst zuverlässig."
    ],

    correct: [0],

    explanation:
        "Beim Alpha-Fehler wird fälschlicherweise ein Unterschied oder Effekt angenommen, obwohl in Wirklichkeit keiner besteht."
},

{
    id: 243,

    topic: "Forschung",

    subtopic: "Beta-Fehler",

    difficulty: "schwer",

    type: "single",

    question: "Was beschreibt einen Beta-Fehler beziehungsweise Fehler 2. Art?",

    answers: [
        "Die Nullhypothese wird beibehalten, obwohl tatsächlich ein Unterschied oder Effekt besteht.",
        "Die Nullhypothese wird abgelehnt, obwohl kein Effekt besteht.",
        "Die Datenerhebung erfolgt doppelt.",
        "Eine qualitative Studie wird quantitativ ausgewertet."
    ],

    correct: [0],

    explanation:
        "Ein Beta-Fehler liegt vor, wenn ein tatsächlich vorhandener Effekt in der Studie nicht erkannt wird."
},

{
    id: 244,

    topic: "Forschung",

    subtopic: "Statistische Power",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet statistische Power beziehungsweise Teststärke?",

    answers: [
        "Die Wahrscheinlichkeit, einen tatsächlich vorhandenen Effekt mit der Studie zu erkennen",
        "Die Wahrscheinlichkeit, dass jede Hypothese bestätigt wird",
        "Die Anzahl der eingesetzten Messinstrumente",
        "Die praktische Bedeutung eines Ergebnisses"
    ],

    correct: [0],

    explanation:
        "Die statistische Power gibt an, mit welcher Wahrscheinlichkeit ein tatsächlich vorhandener Unterschied oder Zusammenhang erkannt wird."
},

{
    id: 245,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "multiple",

    question: "Eine Studie besitzt eine sehr kleine Stichprobe. Welche möglichen Folgen sind zu beachten?",

    answers: [
        "Die statistische Power kann zu gering sein.",
        "Ein tatsächlich vorhandener Effekt kann übersehen werden.",
        "Das Risiko eines Beta-Fehlers kann steigen.",
        "Die Ergebnisse sind automatisch klinisch bedeutsam."
    ],

    correct: [0, 1, 2],

    explanation:
        "Eine zu kleine Stichprobe kann die Teststärke verringern. Dadurch steigt das Risiko, einen tatsächlich vorhandenen Effekt nicht zu erkennen."
},
{
    id: 246,

    topic: "Forschung",

    subtopic: "Forschungsdesign",

    difficulty: "leicht",

    type: "single",

    question: "Was legt ein Forschungsdesign fest?",

    answers: [
        "Wie eine Forschungsfrage methodisch untersucht werden soll",
        "Wie das Literaturverzeichnis gestaltet wird",
        "Welche Ergebnisse eine Studie zwingend liefern muss",
        "Wie viele Autorinnen und Autoren beteiligt sind"
    ],

    correct: [0],

    explanation:
        "Das Forschungsdesign beschreibt den methodischen Aufbau einer Untersuchung, beispielsweise Datenerhebung, zeitlichen Ablauf und Vergleichsgruppen."
},

{
    id: 247,

    topic: "Forschung",

    subtopic: "Beobachtungsstudien",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet eine Beobachtungsstudie?",

    answers: [
        "Die Forschenden beobachten Merkmale und Zusammenhänge, ohne die untersuchte Exposition gezielt zuzuweisen.",
        "Die Teilnehmenden werden immer zufällig einer Intervention zugeteilt.",
        "Die Forschenden verändern grundsätzlich alle Untersuchungsbedingungen.",
        "Es werden ausschließlich qualitative Interviews durchgeführt."
    ],

    correct: [0],

    explanation:
        "In Beobachtungsstudien werden bestehende Bedingungen untersucht, ohne dass die Forschenden eine Intervention gezielt zuweisen."
},

{
    id: 248,

    topic: "Forschung",

    subtopic: "Experimentelle Forschung",

    difficulty: "mittel",

    type: "single",

    question: "Was unterscheidet eine experimentelle Studie wesentlich von einer reinen Beobachtungsstudie?",

    answers: [
        "In einer experimentellen Studie wird eine Intervention gezielt eingesetzt.",
        "In einer experimentellen Studie dürfen keine Daten erhoben werden.",
        "Beobachtungsstudien besitzen immer eine Kontrollgruppe.",
        "Experimentelle Studien verwenden ausschließlich offene Interviews."
    ],

    correct: [0],

    explanation:
        "Experimentelle Studien prüfen die Wirkung einer gezielt eingesetzten Intervention unter möglichst kontrollierten Bedingungen."
},

{
    id: 249,

    topic: "Forschung",

    subtopic: "Querschnittstudie",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet eine Querschnittstudie?",

    answers: [
        "Daten werden zu einem bestimmten Zeitpunkt oder in einem kurzen Zeitraum erhoben.",
        "Dieselben Personen werden über viele Jahre wiederholt untersucht.",
        "Erkrankte und nicht erkrankte Personen werden rückblickend verglichen.",
        "Teilnehmende werden immer zufällig auf Gruppen verteilt."
    ],

    correct: [0],

    explanation:
        "Eine Querschnittstudie liefert eine Momentaufnahme von Merkmalen oder Zusammenhängen in einer Population."
},

{
    id: 250,

    topic: "Forschung",

    subtopic: "Querschnittstudie",

    difficulty: "schwer",

    type: "single",

    question: "Welche Fragestellung lässt sich besonders gut mit einer Querschnittstudie untersuchen?",

    answers: [
        "Wie häufig leiden Pflegefachpersonen aktuell unter Rückenschmerzen?",
        "Wie entwickelt sich die Pflegebedürftigkeit innerhalb von zehn Jahren?",
        "Verursacht eine bestimmte Intervention langfristig weniger Stürze?",
        "Welche frühere Exposition führte zu einer seltenen Erkrankung?"
    ],

    correct: [0],

    explanation:
        "Querschnittstudien eignen sich besonders zur Erfassung der aktuellen Häufigkeit eines Merkmals oder Zustands."
},

{
    id: 251,

    topic: "Forschung",

    subtopic: "Kohortenstudie",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet eine Kohortenstudie?",

    answers: [
        "Eine Gruppe von Personen wird über einen Zeitraum beobachtet.",
        "Daten werden ausschließlich zu einem einzigen Zeitpunkt erhoben.",
        "Nur bereits erkrankte Personen werden untersucht.",
        "Die Gruppenzuordnung erfolgt immer durch Randomisierung."
    ],

    correct: [0],

    explanation:
        "In Kohortenstudien werden Personen häufig anhand bestimmter Expositionen gruppiert und über die Zeit hinsichtlich auftretender Ergebnisse beobachtet."
},

{
    id: 252,

    topic: "Forschung",

    subtopic: "Fall-Kontroll-Studie",

    difficulty: "mittel",

    type: "single",

    question: "Wie ist eine Fall-Kontroll-Studie typischerweise aufgebaut?",

    answers: [
        "Personen mit einem bestimmten Ergebnis werden mit Personen ohne dieses Ergebnis hinsichtlich früherer Einflussfaktoren verglichen.",
        "Gesunde Personen werden zufällig einer Behandlung zugeordnet.",
        "Eine Population wird nur zu einem Zeitpunkt befragt.",
        "Alle Teilnehmenden erhalten dieselbe Intervention."
    ],

    correct: [0],

    explanation:
        "Fall-Kontroll-Studien vergleichen Fälle mit einer Erkrankung oder einem Ereignis mit Kontrollen ohne dieses Ergebnis und betrachten mögliche frühere Expositionen."
},

{
    id: 253,

    topic: "Forschung",

    subtopic: "Randomisierte kontrollierte Studie",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Merkmale sind typisch für eine randomisierte kontrollierte Studie?",

    answers: [
        "Gezielte Intervention",
        "Zufällige Gruppenzuteilung",
        "Vergleich mit einer Kontrollgruppe",
        "Möglichst standardisierte Untersuchungsbedingungen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Randomisierte kontrollierte Studien kombinieren Intervention, zufällige Gruppenzuteilung, Vergleichsgruppe und standardisierte Abläufe."
},

{
    id: 254,

    topic: "Forschung",

    subtopic: "Korrelation und Kausalität",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet eine Korrelation zwischen zwei Variablen?",

    answers: [
        "Die Variablen stehen in einem statistischen Zusammenhang.",
        "Eine Variable verursacht sicher die andere.",
        "Die Variablen sind vollständig identisch.",
        "Zwischen den Variablen besteht grundsätzlich kein Zusammenhang."
    ],

    correct: [0],

    explanation:
        "Eine Korrelation zeigt einen statistischen Zusammenhang. Sie beweist jedoch nicht automatisch einen ursächlichen Zusammenhang."
},

{
    id: 255,

    topic: "Forschung",

    subtopic: "Korrelation und Kausalität",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie stellt fest, dass Pflegekräfte mit höherer Arbeitsbelastung häufiger Schlafprobleme angeben. Welche Schlussfolgerung ist zunächst zulässig?",

    answers: [
        "Zwischen Arbeitsbelastung und Schlafproblemen besteht ein Zusammenhang.",
        "Die Arbeitsbelastung verursacht nachweislich alle Schlafprobleme.",
        "Schlafprobleme verursachen sicher eine höhere Arbeitsbelastung.",
        "Andere Einflussfaktoren können ausgeschlossen werden."
    ],

    correct: [0],

    explanation:
        "Aus einem beobachteten Zusammenhang kann nicht ohne Weiteres auf eine eindeutige Ursache-Wirkungs-Beziehung geschlossen werden."
},
{
    id: 256,

    topic: "Forschung",

    subtopic: "Prävalenz",

    difficulty: "mittel",

    type: "single",

    question: "Was beschreibt die Prävalenz?",

    answers: [
        "Den Anteil einer Population, der zu einem bestimmten Zeitpunkt oder Zeitraum ein Merkmal aufweist",
        "Die Anzahl ausschließlich neu aufgetretener Fälle",
        "Die Wahrscheinlichkeit eines Alpha-Fehlers",
        "Die Größe einer Interventionsgruppe"
    ],

    correct: [0],

    explanation:
        "Die Prävalenz beschreibt, wie häufig eine Erkrankung oder ein anderes Merkmal in einer Population zu einem bestimmten Zeitpunkt oder innerhalb eines Zeitraums vorhanden ist."
},

{
    id: 257,

    topic: "Forschung",

    subtopic: "Inzidenz",

    difficulty: "mittel",

    type: "single",

    question: "Was beschreibt die Inzidenz?",

    answers: [
        "Die Zahl neu auftretender Fälle innerhalb eines bestimmten Zeitraums",
        "Alle bereits bestehenden Fälle zu einem Zeitpunkt",
        "Die Anzahl der Forschenden einer Studie",
        "Die Genauigkeit eines Messinstruments"
    ],

    correct: [0],

    explanation:
        "Die Inzidenz erfasst neu auftretende Erkrankungen oder Ereignisse innerhalb eines definierten Zeitraums."
},

{
    id: 258,

    topic: "Forschung",

    subtopic: "Prävalenz und Inzidenz",

    difficulty: "schwer",

    type: "single",

    question: "In einem Pflegeheim wird an einem bestimmten Tag erfasst, wie viele Bewohnerinnen und Bewohner einen Dekubitus haben. Welche Kennzahl wird bestimmt?",

    answers: [
        "Prävalenz",
        "Inzidenz",
        "Statistische Power",
        "Relatives Risiko"
    ],

    correct: [0],

    explanation:
        "Da alle zu diesem Zeitpunkt bestehenden Dekubitusfälle erfasst werden, handelt es sich um eine Prävalenzmessung."
},

{
    id: 259,

    topic: "Forschung",

    subtopic: "Prävalenz und Inzidenz",

    difficulty: "schwer",

    type: "single",

    question: "Über sechs Monate wird dokumentiert, wie viele Bewohnerinnen und Bewohner erstmals stürzen. Welche Kennzahl wird erfasst?",

    answers: [
        "Inzidenz",
        "Prävalenz",
        "Validität",
        "Objektivität"
    ],

    correct: [0],

    explanation:
        "Es werden neu auftretende Sturzereignisse innerhalb eines festgelegten Zeitraums erfasst. Dies entspricht der Inzidenz."
},

{
    id: 260,

    topic: "Forschung",

    subtopic: "Prospektive Forschung",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet eine prospektive Studie?",

    answers: [
        "Die Teilnehmenden werden vom Studienbeginn aus in die Zukunft beobachtet.",
        "Es werden ausschließlich frühere Dokumentationen ausgewertet.",
        "Die Ergebnisse stehen bereits vor Beginn der Studie fest.",
        "Es werden nur historische Fallberichte untersucht."
    ],

    correct: [0],

    explanation:
        "Bei einer prospektiven Studie beginnt die Beobachtung in der Gegenwart und verfolgt zukünftige Ereignisse oder Entwicklungen."
},

{
    id: 261,

    topic: "Forschung",

    subtopic: "Retrospektive Forschung",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet eine retrospektive Studie?",

    answers: [
        "Bereits zurückliegende Ereignisse und vorhandene Daten werden untersucht.",
        "Teilnehmende werden ausschließlich zukünftig beobachtet.",
        "Alle Personen werden zufällig auf Gruppen verteilt.",
        "Es dürfen keine Dokumentationen verwendet werden."
    ],

    correct: [0],

    explanation:
        "Retrospektive Studien betrachten vergangene Ereignisse, beispielsweise anhand von Patientenakten oder bereits erhobenen Daten."
},

{
    id: 262,

    topic: "Forschung",

    subtopic: "Bias",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Bias in einer wissenschaftlichen Studie?",

    answers: [
        "Eine systematische Verzerrung der Ergebnisse",
        "Eine zufällige Schwankung ohne erkennbare Richtung",
        "Eine besonders hohe statistische Power",
        "Eine fehlerfreie Datenerhebung"
    ],

    correct: [0],

    explanation:
        "Bias bezeichnet eine systematische Verzerrung, die dazu führt, dass Ergebnisse wiederholt in eine bestimmte Richtung vom tatsächlichen Wert abweichen."
},

{
    id: 263,

    topic: "Forschung",

    subtopic: "Selektionsbias",

    difficulty: "schwer",

    type: "single",

    question: "Wann kann ein Selektionsbias entstehen?",

    answers: [
        "Wenn die Auswahl der Teilnehmenden systematisch zu nicht vergleichbaren Gruppen führt",
        "Wenn ein Messinstrument bei jeder Person identisch angewendet wird",
        "Wenn die Gruppenzuteilung zufällig erfolgt",
        "Wenn alle Daten vollständig dokumentiert werden"
    ],

    correct: [0],

    explanation:
        "Ein Selektionsbias entsteht, wenn die Art der Auswahl oder Gruppenzuordnung dazu führt, dass sich die untersuchten Gruppen systematisch unterscheiden."
},

{
    id: 264,

    topic: "Forschung",

    subtopic: "Informationsbias",

    difficulty: "schwer",

    type: "single",

    question: "Welche Situation ist ein Beispiel für einen Informationsbias?",

    answers: [
        "Eine Gruppe erinnert sich genauer an frühere Belastungen als die Vergleichsgruppe.",
        "Teilnehmende werden zufällig den Gruppen zugeteilt.",
        "Die Stichprobe bildet die Grundgesamtheit gut ab.",
        "Ein Messinstrument ist hoch reliabel."
    ],

    correct: [0],

    explanation:
        "Informationsbias entsteht durch systematische Fehler bei Erhebung, Erinnerung, Dokumentation oder Klassifikation von Daten."
},

{
    id: 265,

    topic: "Forschung",

    subtopic: "Interne und externe Validität",

    difficulty: "schwer",

    type: "multiple",

    question: "Welche Aussagen zu interner und externer Validität treffen zu?",

    answers: [
        "Interne Validität betrifft die Glaubwürdigkeit der Ergebnisse innerhalb der Studie.",
        "Externe Validität betrifft die Übertragbarkeit der Ergebnisse auf andere Populationen oder Situationen.",
        "Systematische Verzerrungen können die interne Validität beeinträchtigen.",
        "Eine sehr streng kontrollierte Studie ist automatisch auf jede Alltagssituation übertragbar."
    ],

    correct: [0, 1, 2],

    explanation:
        "Interne Validität beschreibt, wie überzeugend ein beobachteter Effekt innerhalb der Studie erklärt werden kann. Externe Validität bezeichnet die Übertragbarkeit auf andere Personen, Einrichtungen oder Situationen."
},
{
    id: 266,

    topic: "Forschung",

    subtopic: "Qualitative Stichprobe",

    difficulty: "mittel",

    type: "single",

    question: "Nach welchem Prinzip werden Teilnehmende in qualitativen Studien häufig ausgewählt?",

    answers: [
        "Nach ihrer inhaltlichen Relevanz für die Forschungsfrage",
        "Ausschließlich durch eine große Zufallsstichprobe",
        "Nur nach dem Alter der Teilnehmenden",
        "Unabhängig vom untersuchten Phänomen"
    ],

    correct: [0],

    explanation:
        "In qualitativen Studien werden Personen häufig gezielt ausgewählt, weil sie relevante Erfahrungen oder Perspektiven zum untersuchten Phänomen besitzen."
},

{
    id: 267,

    topic: "Forschung",

    subtopic: "Theoretical Sampling",

    difficulty: "schwer",

    type: "single",

    question: "Was kennzeichnet Theoretical Sampling?",

    answers: [
        "Die weitere Fallauswahl orientiert sich an den bisher gewonnenen Erkenntnissen.",
        "Alle Teilnehmenden werden vor Beginn vollständig zufällig bestimmt.",
        "Die Stichprobe darf während der Studie nicht verändert werden.",
        "Es werden ausschließlich statistisch repräsentative Gruppen ausgewählt."
    ],

    correct: [0],

    explanation:
        "Beim Theoretical Sampling wird die Auswahl weiterer Fälle fortlaufend an der entstehenden Theorie und den bisherigen Analyseergebnissen ausgerichtet."
},

{
    id: 268,

    topic: "Forschung",

    subtopic: "Datensättigung",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Datensättigung in der qualitativen Forschung?",

    answers: [
        "Weitere Datenerhebungen liefern keine wesentlich neuen Erkenntnisse oder Kategorien.",
        "Alle Interviews haben exakt dieselbe Länge.",
        "Die Stichprobe ist statistisch repräsentativ.",
        "Alle Teilnehmenden geben identische Antworten."
    ],

    correct: [0],

    explanation:
        "Datensättigung ist erreicht, wenn zusätzliche Interviews oder Beobachtungen keine bedeutsamen neuen Aspekte mehr hervorbringen."
},

{
    id: 269,

    topic: "Forschung",

    subtopic: "Transkription",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Transkription im Rahmen qualitativer Interviews?",

    answers: [
        "Die Übertragung gesprochener Interviewdaten in schriftliche Form",
        "Die statistische Berechnung eines p-Werts",
        "Die zufällige Auswahl der Stichprobe",
        "Die Veröffentlichung der Forschungsergebnisse"
    ],

    correct: [0],

    explanation:
        "Bei der Transkription werden aufgezeichnete Gespräche nach festgelegten Regeln verschriftlicht und für die Analyse vorbereitet."
},

{
    id: 270,

    topic: "Forschung",

    subtopic: "Qualitative Datenanalyse",

    difficulty: "mittel",

    type: "single",

    question: "Welches Ziel verfolgt die qualitative Datenanalyse?",

    answers: [
        "Bedeutungen, Muster und Kategorien im Datenmaterial herauszuarbeiten",
        "Ausschließlich Häufigkeiten numerisch zu berechnen",
        "Alle Aussagen der Befragten zu vereinheitlichen",
        "Die Forschungsfrage nachträglich zu löschen"
    ],

    correct: [0],

    explanation:
        "Die qualitative Analyse strukturiert und interpretiert Daten, um wiederkehrende Bedeutungen, Themen und Zusammenhänge sichtbar zu machen."
},

{
    id: 271,

    topic: "Forschung",

    subtopic: "Qualitative Inhaltsanalyse",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Arbeitsschritte können zu einer qualitativen Inhaltsanalyse gehören?",

    answers: [
        "Material systematisch codieren",
        "Kategorien bilden",
        "Textstellen den Kategorien zuordnen",
        "Ergebnisse interpretieren"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Qualitative Inhaltsanalyse umfasst typischerweise Codierung, Kategorienbildung, Zuordnung relevanter Textstellen und interpretative Auswertung."
},

{
    id: 272,

    topic: "Forschung",

    subtopic: "Kategorienbildung",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet induktive Kategorienbildung?",

    answers: [
        "Kategorien werden schrittweise aus dem erhobenen Datenmaterial entwickelt.",
        "Kategorien werden ausschließlich vor der Datenerhebung aus einer Theorie übernommen.",
        "Kategorien werden zufällig vergeben.",
        "Kategorien werden durch statistische Signifikanztests berechnet."
    ],

    correct: [0],

    explanation:
        "Bei der induktiven Kategorienbildung entstehen Kategorien aus den konkreten Aussagen und Inhalten des Datenmaterials."
},

{
    id: 273,

    topic: "Forschung",

    subtopic: "Kategorienbildung",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet deduktive Kategorienbildung?",

    answers: [
        "Kategorien werden vorab aus Theorien, Modellen oder der Forschungsfrage abgeleitet.",
        "Kategorien entstehen ausschließlich spontan während eines Interviews.",
        "Kategorien werden nur anhand von Zufallszahlen entwickelt.",
        "Kategorien werden erst nach Veröffentlichung festgelegt."
    ],

    correct: [0],

    explanation:
        "Deduktive Kategorien beruhen auf bestehenden theoretischen Annahmen, Modellen oder vorab definierten Fragestellungen."
},

{
    id: 274,

    topic: "Forschung",

    subtopic: "Forschungsethik",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Grundsätze sind bei Forschung mit Menschen besonders zu beachten?",

    answers: [
        "Freiwillige Teilnahme",
        "Verständliche Aufklärung",
        "Schutz personenbezogener Daten",
        "Möglichkeit zum Widerruf der Teilnahme"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Forschung mit Menschen erfordert informierte Einwilligung, Freiwilligkeit, Datenschutz und die Möglichkeit, die Teilnahme ohne Nachteile zu beenden."
},

{
    id: 275,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Forscherin interviewt Pflegebedürftige zu belastenden Erfahrungen. Vor Beginn erklärt sie Ziel, Ablauf und mögliche Belastungen, holt eine schriftliche Zustimmung ein und anonymisiert die Daten. Welches Prinzip wird umgesetzt?",

    answers: [
        "Ethisch verantwortliche Forschung mit informierter Einwilligung",
        "Ungeprüfte Datenerhebung ohne Zustimmung",
        "Ausschließlich statistische Standardisierung",
        "Verdeckte Beobachtung ohne Datenschutz"
    ],

    correct: [0],

    explanation:
        "Aufklärung, freiwillige Zustimmung und Anonymisierung sind zentrale Bestandteile einer ethisch verantwortlichen Forschung."
},
{
    id: 276,

    topic: "Forschung",

    subtopic: "Informierte Einwilligung",

    difficulty: "mittel",

    type: "single",

    question: "Welche Voraussetzung muss für eine informierte Einwilligung erfüllt sein?",

    answers: [
        "Die teilnehmende Person wurde verständlich über Ziel, Ablauf, Risiken und Rechte aufgeklärt.",
        "Die teilnehmende Person kennt nur den Namen der Studie.",
        "Die Zustimmung wird stellvertretend durch die Forschenden erteilt.",
        "Die Teilnahme ist verpflichtend."
    ],

    correct: [0],

    explanation:
        "Eine informierte Einwilligung setzt eine verständliche Aufklärung und eine freiwillige Entscheidung der teilnehmenden Person voraus."
},

{
    id: 277,

    topic: "Forschung",

    subtopic: "Freiwilligkeit",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Freiwilligkeit in einer Studie?",

    answers: [
        "Die Teilnahme kann ohne Druck erfolgen und jederzeit beendet werden.",
        "Die Teilnahme muss bis zum Studienende fortgesetzt werden.",
        "Die Forschenden dürfen die Zustimmung voraussetzen.",
        "Ein Widerruf ist nur bei gesundheitlichen Problemen möglich."
    ],

    correct: [0],

    explanation:
        "Freiwilligkeit bedeutet, dass eine Teilnahme ohne Zwang erfolgt und ohne Nachteile widerrufen werden kann."
},

{
    id: 278,

    topic: "Forschung",

    subtopic: "Anonymisierung",

    difficulty: "mittel",

    type: "single",

    question: "Was bedeutet Anonymisierung von Forschungsdaten?",

    answers: [
        "Die Daten können keiner bestimmten Person mehr zugeordnet werden.",
        "Die Namen werden durch Codes ersetzt, bleiben aber über eine Liste zuordenbar.",
        "Die Daten werden nur auf Papier gespeichert.",
        "Alle Daten werden öffentlich zugänglich gemacht."
    ],

    correct: [0],

    explanation:
        "Bei anonymisierten Daten ist eine Zuordnung zu einzelnen Personen nicht mehr möglich."
},

{
    id: 279,

    topic: "Forschung",

    subtopic: "Pseudonymisierung",

    difficulty: "mittel",

    type: "single",

    question: "Was kennzeichnet pseudonymisierte Forschungsdaten?",

    answers: [
        "Personenbezogene Angaben werden durch einen Code ersetzt, eine Zuordnung bleibt über einen Schlüssel möglich.",
        "Die Daten können unter keinen Umständen mehr zugeordnet werden.",
        "Die Daten enthalten immer den vollständigen Namen.",
        "Die Daten dürfen ohne Schutzmaßnahmen veröffentlicht werden."
    ],

    correct: [0],

    explanation:
        "Bei der Pseudonymisierung werden Identitätsmerkmale ersetzt. Über einen getrennt aufbewahrten Schlüssel kann die Zuordnung grundsätzlich wiederhergestellt werden."
},

{
    id: 280,

    topic: "Forschung",

    subtopic: "Datenschutz",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Maßnahmen dienen dem Datenschutz in Forschungsprojekten?",

    answers: [
        "Zugriff auf Daten beschränken",
        "Identifizierende Angaben getrennt speichern",
        "Daten verschlüsseln",
        "Nur notwendige Daten erheben"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Datenschutz umfasst unter anderem Datenminimierung, Zugriffsbeschränkung, getrennte Speicherung und technische Schutzmaßnahmen."
},

{
    id: 281,

    topic: "Forschung",

    subtopic: "Ethikkommission",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aufgabe hat eine Ethikkommission?",

    answers: [
        "Sie prüft, ob ein Forschungsvorhaben ethisch vertretbar ist und Teilnehmende ausreichend geschützt werden.",
        "Sie führt die Datenerhebung selbst durch.",
        "Sie garantiert ein statistisch signifikantes Ergebnis.",
        "Sie legt das endgültige Studienergebnis fest."
    ],

    correct: [0],

    explanation:
        "Eine Ethikkommission bewertet insbesondere Risiken, Nutzen, Aufklärung, Einwilligung und Schutz der beteiligten Personen."
},

{
    id: 282,

    topic: "Forschung",

    subtopic: "Interessenkonflikte",

    difficulty: "mittel",

    type: "single",

    question: "Warum müssen Interessenkonflikte in wissenschaftlichen Studien offengelegt werden?",

    answers: [
        "Weil finanzielle oder persönliche Interessen die Planung, Auswertung oder Interpretation beeinflussen können.",
        "Weil dadurch jede Studie automatisch ungültig wird.",
        "Weil nur öffentlich finanzierte Studien veröffentlicht werden dürfen.",
        "Weil Interessenkonflikte die Stichprobengröße bestimmen."
    ],

    correct: [0],

    explanation:
        "Die Offenlegung ermöglicht es, mögliche Einflüsse auf Forschung und Berichterstattung transparent zu beurteilen."
},

{
    id: 283,

    topic: "Forschung",

    subtopic: "Wissenschaftliche Integrität",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Handlungen verstoßen gegen wissenschaftliche Integrität?",

    answers: [
        "Daten erfinden",
        "Ergebnisse absichtlich verfälschen",
        "Fremde Texte ohne Kennzeichnung übernehmen",
        "Unpassende Ergebnisse bewusst verschweigen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Erfundene oder manipulierte Daten, Plagiate und selektive Berichterstattung widersprechen den Grundsätzen guter wissenschaftlicher Praxis."
},

{
    id: 284,

    topic: "Forschung",

    subtopic: "Plagiat",

    difficulty: "leicht",

    type: "single",

    question: "Was ist ein Plagiat?",

    answers: [
        "Die Übernahme fremder Gedanken oder Formulierungen ohne angemessene Quellenangabe",
        "Die korrekte Zusammenfassung einer Quelle mit Beleg",
        "Die eigene Interpretation wissenschaftlicher Ergebnisse",
        "Die Veröffentlichung selbst erhobener Daten"
    ],

    correct: [0],

    explanation:
        "Ein Plagiat liegt vor, wenn fremde geistige Leistungen als eigene ausgegeben oder nicht korrekt gekennzeichnet werden."
},

{
    id: 285,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Ein Forschungsprojekt speichert Namen und Interviewdaten in derselben unverschlüsselten Datei, auf die das gesamte Team zugreifen kann. Welches Problem liegt besonders vor?",

    answers: [
        "Unzureichender Schutz personenbezogener Forschungsdaten",
        "Zu hohe statistische Power",
        "Eine zu starke Anonymisierung",
        "Ein rein qualitativer Forschungsansatz"
    ],

    correct: [0],

    explanation:
        "Identifizierende Angaben sollten getrennt, geschützt und nur für berechtigte Personen zugänglich gespeichert werden."
},
{
    id: 286,

    topic: "Forschung",

    subtopic: "Publikationsbias",

    difficulty: "mittel",

    type: "single",

    question: "Was versteht man unter einem Publikationsbias?",

    answers: [
        "Studien mit auffälligen oder positiven Ergebnissen werden häufiger veröffentlicht als Studien ohne signifikante Ergebnisse.",
        "Alle Studien werden unabhängig von ihren Ergebnissen gleich häufig veröffentlicht.",
        "Forschende verändern grundsätzlich ihre Forschungsfrage nach Abschluss der Studie.",
        "Nur qualitative Studien werden wissenschaftlich publiziert."
    ],

    correct: [0],

    explanation:
        "Ein Publikationsbias entsteht, wenn Studien mit positiven oder statistisch signifikanten Ergebnissen eher veröffentlicht werden als Studien mit unauffälligen oder negativen Ergebnissen."
},

{
    id: 287,

    topic: "Forschung",

    subtopic: "Peer Review",

    difficulty: "mittel",

    type: "single",

    question: "Welche Funktion hat das Peer-Review-Verfahren?",

    answers: [
        "Fachkundige Personen prüfen eine wissenschaftliche Arbeit vor der Veröffentlichung.",
        "Die Teilnehmenden einer Studie bewerten die Forschenden.",
        "Eine Studie wird ausschließlich auf Rechtschreibfehler überprüft.",
        "Die Forschungsergebnisse werden durch eine Behörde genehmigt."
    ],

    correct: [0],

    explanation:
        "Beim Peer Review beurteilen unabhängige Fachpersonen unter anderem Methodik, Nachvollziehbarkeit und wissenschaftliche Qualität einer eingereichten Arbeit."
},

{
    id: 288,

    topic: "Forschung",

    subtopic: "Reproduzierbarkeit",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet Reproduzierbarkeit in der Forschung?",

    answers: [
        "Andere Forschende können das Vorgehen nachvollziehen und bei vergleichbaren Bedingungen ähnliche Ergebnisse erhalten.",
        "Eine Studie darf nur einmal durchgeführt werden.",
        "Alle Teilnehmenden müssen identische Antworten geben.",
        "Die Ergebnisse müssen vollständig der ursprünglichen Hypothese entsprechen."
    ],

    correct: [0],

    explanation:
        "Reproduzierbarkeit bedeutet, dass wissenschaftliche Vorgehensweisen ausreichend transparent beschrieben sind und Ergebnisse unter vergleichbaren Bedingungen überprüft werden können."
},

{
    id: 289,

    topic: "Forschung",

    subtopic: "Transparenz",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Angaben fördern die Transparenz einer wissenschaftlichen Studie?",

    answers: [
        "Eine nachvollziehbare Beschreibung der Methode",
        "Die Offenlegung von Interessenkonflikten",
        "Die Darstellung der Datenauswertung",
        "Die Benennung von Limitationen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Transparente Forschung legt Vorgehen, Auswertung, mögliche Interessenkonflikte und Einschränkungen nachvollziehbar offen."
},

{
    id: 290,

    topic: "Forschung",

    subtopic: "Limitationen",

    difficulty: "mittel",

    type: "single",

    question: "Was sind Limitationen einer Studie?",

    answers: [
        "Einschränkungen, die die Aussagekraft oder Übertragbarkeit der Ergebnisse beeinflussen können",
        "Beweise dafür, dass eine Studie vollständig falsch ist",
        "Ausschließlich Rechtschreibfehler im Forschungsbericht",
        "Vorgaben zur Finanzierung wissenschaftlicher Projekte"
    ],

    correct: [0],

    explanation:
        "Limitationen beschreiben methodische oder praktische Einschränkungen, die bei der Interpretation der Ergebnisse berücksichtigt werden müssen."
},

{
    id: 291,

    topic: "Forschung",

    subtopic: "Generalisierbarkeit",

    difficulty: "schwer",

    type: "single",

    question: "Was beschreibt die Generalisierbarkeit von Forschungsergebnissen?",

    answers: [
        "In welchem Umfang Ergebnisse auf andere Personen, Gruppen oder Situationen übertragen werden können",
        "Ob alle Teilnehmenden dieselbe Meinung vertreten",
        "Ob eine Studie mehr als einmal veröffentlicht wurde",
        "Ob ausschließlich statistisch signifikante Ergebnisse vorliegen"
    ],

    correct: [0],

    explanation:
        "Generalisierbarkeit bezeichnet die Übertragbarkeit von Studienergebnissen über die untersuchte Stichprobe und Situation hinaus."
},

{
    id: 292,

    topic: "Forschung",

    subtopic: "Kritische Studienbewertung",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Aspekte gehören zu einer kritischen Bewertung wissenschaftlicher Studien?",

    answers: [
        "Die Angemessenheit des Studiendesigns",
        "Die Auswahl und Größe der Stichprobe",
        "Die Qualität der Datenerhebung und Auswertung",
        "Mögliche Verzerrungen und Limitationen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Eine kritische Studienbewertung berücksichtigt unter anderem Design, Stichprobe, Datenerhebung, Auswertung sowie mögliche Bias-Quellen und Einschränkungen."
},

{
    id: 293,

    topic: "Forschung",

    subtopic: "Signifikanz",

    difficulty: "schwer",

    type: "single",

    question: "Was ist der Unterschied zwischen statistischer und klinischer Signifikanz?",

    answers: [
        "Statistische Signifikanz beschreibt die Wahrscheinlichkeit eines zufälligen Ergebnisses, klinische Signifikanz dessen praktische Bedeutung.",
        "Statistische und klinische Signifikanz bedeuten immer dasselbe.",
        "Klinische Signifikanz wird ausschließlich durch den p-Wert bestimmt.",
        "Statistische Signifikanz bewertet nur die Kosten einer Intervention."
    ],

    correct: [0],

    explanation:
        "Ein Ergebnis kann statistisch auffällig sein, ohne für Patientinnen und Patienten praktisch relevant zu sein. Klinische Signifikanz bewertet die tatsächliche Bedeutung des Effekts."
},

{
    id: 294,

    topic: "Forschung",

    subtopic: "Effektstärke",

    difficulty: "schwer",

    type: "single",

    question: "Welche Aussage beschreibt die Effektstärke am besten?",

    answers: [
        "Sie beschreibt die Größe eines beobachteten Unterschieds oder Zusammenhangs.",
        "Sie gibt ausschließlich die Anzahl der Studienteilnehmenden an.",
        "Sie zeigt, ob eine Studie ethisch vertretbar ist.",
        "Sie ersetzt die Beschreibung des Studiendesigns."
    ],

    correct: [0],

    explanation:
        "Die Effektstärke zeigt, wie groß ein Unterschied oder Zusammenhang tatsächlich ist und ergänzt damit die statistische Signifikanz."
},

{
    id: 295,

    topic: "Forschung",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie zeigt bei sehr großer Stichprobe einen statistisch signifikanten Unterschied von 0,2 Punkten auf einer Schmerzskala von 0 bis 10. Wie sollte das Ergebnis bewertet werden?",

    answers: [
        "Der Unterschied kann statistisch signifikant, aber klinisch kaum bedeutsam sein.",
        "Das Ergebnis ist automatisch klinisch hochrelevant.",
        "Die Studie ist wegen der großen Stichprobe ungültig.",
        "Statistische Signifikanz darf bei Schmerzstudien nicht verwendet werden."
    ],

    correct: [0],

    explanation:
        "Bei großen Stichproben können auch sehr kleine Unterschiede statistisch signifikant werden. Entscheidend ist zusätzlich, ob der Effekt für die Versorgung praktisch relevant ist."
}
];