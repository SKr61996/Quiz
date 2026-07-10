const ebnQuestions = [

{
    id: 106,

    topic: "Evidence Based Nursing",

    subtopic: "Grundlagen",

    difficulty: "leicht",

    type: "single",

    question: "Was ist das zentrale Ziel von Evidence Based Nursing?",

    answers: [
        "Pflegerische Entscheidungen auf bestes verfügbares Wissen zu stützen",
        "Pflege ausschließlich nach persönlicher Erfahrung durchzuführen",
        "Leitlinien ohne Anpassung zu übernehmen",
        "Individuelle Wünsche der pflegebedürftigen Person auszublenden"
    ],

    correct: [0],

    explanation:
        "Evidence Based Nursing verbindet wissenschaftliche Erkenntnisse mit pflegerischer Erfahrung und den individuellen Bedürfnissen der pflegebedürftigen Person."
},

{
    id: 107,

    topic: "Evidence Based Nursing",

    subtopic: "EBN-Methode",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Schritte gehören zur sechsstufigen EBN-Methode?",

    answers: [
        "Auftragsklärung",
        "Literaturrecherche",
        "Kritische Beurteilung",
        "Evaluation"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Die EBN-Methode umfasst Auftragsklärung, Fragestellung, Literaturrecherche, kritische Beurteilung, Implementierung und Adaption sowie Evaluation."
},

{
    id: 108,

    topic: "Evidence Based Nursing",

    subtopic: "EBN-Methode",

    difficulty: "mittel",

    type: "single",

    question: "Welcher Schritt folgt in der EBN-Methode auf die Literaturrecherche?",

    answers: [
        "Kritische Beurteilung",
        "Evaluation",
        "Auftragsklärung",
        "Implementierung ohne Prüfung"
    ],

    correct: [0],

    explanation:
        "Nach der Literaturrecherche werden die gefundenen Studien hinsichtlich Qualität, Aussagekraft und Übertragbarkeit kritisch beurteilt."
},

{
    id: 109,

    topic: "Evidence Based Nursing",

    subtopic: "Fragestellung",

    difficulty: "mittel",

    type: "single",

    question: "Warum sollte eine EBN-Fragestellung eindeutig und präzise formuliert werden?",

    answers: [
        "Damit die Literaturrecherche gezielt durchgeführt werden kann",
        "Damit keine Studien gefunden werden",
        "Damit ausschließlich ärztliche Fragen bearbeitet werden",
        "Damit auf eine kritische Bewertung verzichtet werden kann"
    ],

    correct: [0],

    explanation:
        "Eine klare Fragestellung grenzt das Pflegeproblem ein und erleichtert die gezielte Suche nach relevanter Evidenz."
},

{
    id: 110,

    topic: "Evidence Based Nursing",

    subtopic: "PICO-Schema",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Bestandteile gehören zum PICO-Schema?",

    answers: [
        "Population",
        "Intervention",
        "Comparison",
        "Outcome"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "PICO steht für Population, Intervention, Comparison und Outcome und unterstützt die Formulierung einer strukturierten Forschungsfrage."
},

{
    id: 111,

    topic: "Evidence Based Nursing",

    subtopic: "PICO-Schema",

    difficulty: "schwer",

    type: "single",

    question: "In der Frage 'Verringert regelmäßige Mobilisation bei älteren Pflegeheimbewohnern im Vergleich zur üblichen Versorgung das Sturzrisiko?' – was ist das Outcome?",

    answers: [
        "Das Sturzrisiko",
        "Ältere Pflegeheimbewohner",
        "Regelmäßige Mobilisation",
        "Übliche Versorgung"
    ],

    correct: [0],

    explanation:
        "Das Outcome bezeichnet das angestrebte oder gemessene Ergebnis. In diesem Fall ist dies die Verringerung des Sturzrisikos."
},

{
    id: 112,

    topic: "Evidence Based Nursing",

    subtopic: "Evidenzhierarchie",

    difficulty: "mittel",

    type: "single",

    question: "Welches Studiendesign besitzt in der dargestellten Evidenzhierarchie die höchste Beweiskraft?",

    answers: [
        "Systematisches Review mehrerer randomisierter kontrollierter Studien",
        "Einzelner Fallbericht",
        "Expertenmeinung",
        "Nicht-experimentelle Querschnittstudie"
    ],

    correct: [0],

    explanation:
        "Systematische Reviews beziehungsweise Meta-Analysen mehrerer RCTs stehen in der Evidenzhierarchie besonders weit oben."
},

{
    id: 113,

    topic: "Evidence Based Nursing",

    subtopic: "Evidenzhierarchie",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aussage beschreibt qualitative Studien im Rahmen der Evidenzbewertung am treffendsten?",

    answers: [
        "Sie sind häufig hypothesengenerierend.",
        "Sie prüfen ausschließlich kausale Effekte.",
        "Sie besitzen grundsätzlich keine Bedeutung für die Pflege.",
        "Sie ersetzen randomisierte kontrollierte Studien vollständig."
    ],

    correct: [0],

    explanation:
        "Qualitative Studien dienen häufig dazu, Erfahrungen, Bedeutungen und Perspektiven zu verstehen und daraus Hypothesen zu entwickeln."
},

{
    id: 114,

    topic: "Evidence Based Nursing",

    subtopic: "Implementierung",

    difficulty: "schwer",

    type: "multiple",

    question: "Was sollte bei der Implementierung von Evidenz in die Pflegepraxis berücksichtigt werden?",

    answers: [
        "Bestes verfügbares Wissen",
        "Eigene pflegerische Erfahrung",
        "Individuelle Wünsche der pflegebedürftigen Person",
        "Anpassung an den jeweiligen Kontext"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Evidenz wird nicht schematisch übertragen. Sie muss mit Erfahrung, Patientenpräferenzen und den Bedingungen der jeweiligen Versorgungssituation verbunden werden."
},

{
    id: 115,

    topic: "Evidence Based Nursing",

    subtopic: "Evaluation",

    difficulty: "schwer",

    type: "single",

    question: "Warum ist die Evaluation der letzte Schritt der EBN-Methode?",

    answers: [
        "Damit überprüft wird, ob die eingeführte Maßnahme den gewünschten Effekt erzielt hat",
        "Damit die Literaturrecherche wiederholt wird, ohne die Praxis zu betrachten",
        "Damit ausschließlich die Kosten dokumentiert werden",
        "Damit die Wünsche der pflegebedürftigen Person nachträglich ausgeschlossen werden"
    ],

    correct: [0],

    explanation:
        "Die Evaluation prüft, ob die implementierte Maßnahme wirksam, angemessen und im Verhältnis von Aufwand und Nutzen sinnvoll ist."
},
{
    id: 116,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "mittel",

    type: "single",

    question: "Wofür steht die Abkürzung PARiHS?",

    answers: [
        "Promoting Action on Research Implementation in Health Services",
        "Professional Assessment of Research in Health Systems",
        "Practice Analysis for Research in Hospital Settings",
        "Patient Adaptation and Research in Health Services"
    ],

    correct: [0],

    explanation:
        "PARiHS steht für 'Promoting Action on Research Implementation in Health Services' und beschreibt ein Modell zur systematischen Implementierung von Evidenz."
},

{
    id: 117,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche drei Kernelemente beeinflussen nach dem PARiHS-Modell eine erfolgreiche Implementierung?",

    answers: [
        "Evidence",
        "Context",
        "Facilitation",
        "Randomisierung"
    ],

    correct: [0, 1, 2],

    explanation:
        "Das PARiHS-Modell beschreibt erfolgreiche Implementierung als Funktion von Evidenz, Kontext und Facilitation."
},

{
    id: 118,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet die Formel SI = f(E, C, F) im PARiHS-Modell?",

    answers: [
        "Erfolgreiche Implementierung hängt von Evidenz, Kontext und Facilitation ab.",
        "Studienqualität wird nur durch Evidenz bestimmt.",
        "Pflegepraxis verändert sich ausschließlich durch Forschung.",
        "Evaluation ersetzt die Implementierung."
    ],

    correct: [0],

    explanation:
        "Die Formel beschreibt, dass erfolgreiche Implementierung aus dem Zusammenspiel von Evidence, Context und Facilitation entsteht."
},

{
    id: 119,

    topic: "Evidence Based Nursing",

    subtopic: "Facilitation",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aufgabe hat eine Faszilitatorin oder ein Faszilitator im Implementierungsprozess?",

    answers: [
        "Mitarbeitende beim Verstehen und Umsetzen von Veränderungen unterstützen",
        "Studienergebnisse ohne Erklärung anordnen",
        "Pflegeentscheidungen vollständig alleine treffen",
        "Individuelle Wünsche der Betroffenen ignorieren"
    ],

    correct: [0],

    explanation:
        "Faszilitatorinnen und Faszilitatoren unterstützen Mitarbeitende dabei, Veränderungen zu verstehen, anzunehmen und praktisch umzusetzen."
},

{
    id: 120,

    topic: "Evidence Based Nursing",

    subtopic: "Facilitation",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Kompetenzen sind für die Rolle einer Faszilitatorin oder eines Faszilitators besonders wichtig?",

    answers: [
        "Interpersonelle Kompetenz",
        "Fähigkeit zur Vernetzung",
        "Offenheit",
        "Unterstützendes Verhalten"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Die Rolle erfordert soziale und kommunikative Kompetenzen, Offenheit, Vernetzungsfähigkeit und unterstützendes Handeln."
},

{
    id: 121,

    topic: "Evidence Based Nursing",

    subtopic: "Leitlinien und Standards",

    difficulty: "schwer",

    type: "single",

    question: "Welches Problem kann bei der unkritischen Anwendung von Leitlinien und Expertenstandards entstehen?",

    answers: [
        "Die individuelle Auseinandersetzung mit dem Pflegeproblem tritt in den Hintergrund.",
        "Die Pflege wird automatisch immer individueller.",
        "Die Bedeutung von Evidenz steigt unbegrenzt.",
        "Pflegefachpersonen benötigen keine Entscheidungen mehr."
    ],

    correct: [0],

    explanation:
        "Leitlinien und Standards dürfen nicht schematisch angewendet werden, da sonst die individuelle Pflegesituation und die fallbezogene Entscheidung zu wenig berücksichtigt werden."
},

{
    id: 122,

    topic: "Evidence Based Nursing",

    subtopic: "Implementierung",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Maßnahmen können zur Veränderung der Pflegepraxis eingesetzt werden?",

    answers: [
        "Anpassung eines Standards",
        "Fort- und Weiterbildungen",
        "Pilotprojekte",
        "Struktur- und Prozessveränderungen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Die Implementierung kann je nach Problem durch Informationsweitergabe, Standardanpassung, Fortbildungen, Projekte sowie Struktur- und Prozessveränderungen erfolgen."
},

{
    id: 123,

    topic: "Evidence Based Nursing",

    subtopic: "Patientenpräferenzen",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie empfiehlt eine bestimmte Pflegemaßnahme, die pflegebedürftige Person lehnt diese jedoch ab. Wie ist evidenzbasiert vorzugehen?",

    answers: [
        "Die Präferenz der Person berücksichtigen und gemeinsam eine fachlich begründete Alternative suchen",
        "Die Maßnahme gegen den Willen der Person durchführen",
        "Die Studie vollständig ignorieren",
        "Die Entscheidung ausschließlich der Stationsleitung überlassen"
    ],

    correct: [0],

    explanation:
        "Evidence Based Nursing verbindet wissenschaftliche Evidenz mit professioneller Erfahrung und den Wünschen der pflegebedürftigen Person."
},

{
    id: 124,

    topic: "Evidence Based Nursing",

    subtopic: "Evaluation",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Aspekte sollten bei der Evaluation einer implementierten Maßnahme berücksichtigt werden?",

    answers: [
        "Strukturen",
        "Prozesse",
        "Ergebnisse",
        "Personeller und finanzieller Aufwand"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Eine umfassende Evaluation betrachtet Strukturen, Prozesse, Ergebnisse sowie personelle und finanzielle Ressourcen."
},

{
    id: 125,

    topic: "Evidence Based Nursing",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Station führt nach kritischer Studienbewertung ein neues Mobilisationskonzept ein. Nach drei Monaten werden Sturzrate, Arbeitsaufwand und Zufriedenheit der Bewohnerinnen und Bewohner überprüft. Welcher Schritt der EBN-Methode wird durchgeführt?",

    answers: [
        "Evaluation",
        "Auftragsklärung",
        "Literaturrecherche",
        "Fragestellung"
    ],

    correct: [0],

    explanation:
        "Durch die Überprüfung von Wirkung, Aufwand und Zufriedenheit wird beurteilt, ob die implementierte Maßnahme den gewünschten Nutzen erreicht hat."
},
{
    id: 126,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "mittel",

    type: "single",

    question: "Wofür steht die Abkürzung PARiHS?",

    answers: [
        "Promoting Action on Research Implementation in Health Services",
        "Professional Assessment of Research in Health Systems",
        "Practice Analysis for Research in Hospital Settings",
        "Patient Adaptation and Research in Health Services"
    ],

    correct: [0],

    explanation:
        "PARiHS steht für 'Promoting Action on Research Implementation in Health Services' und beschreibt ein Modell zur systematischen Implementierung von Evidenz."
},

{
    id: 127,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche drei Kernelemente beeinflussen nach dem PARiHS-Modell eine erfolgreiche Implementierung?",

    answers: [
        "Evidence",
        "Context",
        "Facilitation",
        "Randomisierung"
    ],

    correct: [0, 1, 2],

    explanation:
        "Das PARiHS-Modell beschreibt erfolgreiche Implementierung als Funktion von Evidenz, Kontext und Facilitation."
},

{
    id: 128,

    topic: "Evidence Based Nursing",

    subtopic: "PARiHS-Modell",

    difficulty: "schwer",

    type: "single",

    question: "Was bedeutet die Formel SI = f(E, C, F) im PARiHS-Modell?",

    answers: [
        "Erfolgreiche Implementierung hängt von Evidenz, Kontext und Facilitation ab.",
        "Studienqualität wird nur durch Evidenz bestimmt.",
        "Pflegepraxis verändert sich ausschließlich durch Forschung.",
        "Evaluation ersetzt die Implementierung."
    ],

    correct: [0],

    explanation:
        "Die Formel beschreibt, dass erfolgreiche Implementierung aus dem Zusammenspiel von Evidence, Context und Facilitation entsteht."
},

{
    id: 129,

    topic: "Evidence Based Nursing",

    subtopic: "Facilitation",

    difficulty: "mittel",

    type: "single",

    question: "Welche Aufgabe hat eine Faszilitatorin oder ein Faszilitator im Implementierungsprozess?",

    answers: [
        "Mitarbeitende beim Verstehen und Umsetzen von Veränderungen unterstützen",
        "Studienergebnisse ohne Erklärung anordnen",
        "Pflegeentscheidungen vollständig alleine treffen",
        "Individuelle Wünsche der Betroffenen ignorieren"
    ],

    correct: [0],

    explanation:
        "Faszilitatorinnen und Faszilitatoren unterstützen Mitarbeitende dabei, Veränderungen zu verstehen, anzunehmen und praktisch umzusetzen."
},

{
    id: 130,

    topic: "Evidence Based Nursing",

    subtopic: "Facilitation",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Kompetenzen sind für die Rolle einer Faszilitatorin oder eines Faszilitators besonders wichtig?",

    answers: [
        "Interpersonelle Kompetenz",
        "Fähigkeit zur Vernetzung",
        "Offenheit",
        "Unterstützendes Verhalten"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Die Rolle erfordert soziale und kommunikative Kompetenzen, Offenheit, Vernetzungsfähigkeit und unterstützendes Handeln."
},

{
    id: 131,

    topic: "Evidence Based Nursing",

    subtopic: "Leitlinien und Standards",

    difficulty: "schwer",

    type: "single",

    question: "Welches Problem kann bei der unkritischen Anwendung von Leitlinien und Expertenstandards entstehen?",

    answers: [
        "Die individuelle Auseinandersetzung mit dem Pflegeproblem tritt in den Hintergrund.",
        "Die Pflege wird automatisch immer individueller.",
        "Die Bedeutung von Evidenz steigt unbegrenzt.",
        "Pflegefachpersonen benötigen keine Entscheidungen mehr."
    ],

    correct: [0],

    explanation:
        "Leitlinien und Standards dürfen nicht schematisch angewendet werden, da sonst die individuelle Pflegesituation und die fallbezogene Entscheidung zu wenig berücksichtigt werden."
},

{
    id: 132,

    topic: "Evidence Based Nursing",

    subtopic: "Implementierung",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Maßnahmen können zur Veränderung der Pflegepraxis eingesetzt werden?",

    answers: [
        "Anpassung eines Standards",
        "Fort- und Weiterbildungen",
        "Pilotprojekte",
        "Struktur- und Prozessveränderungen"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Die Implementierung kann je nach Problem durch Informationsweitergabe, Standardanpassung, Fortbildungen, Projekte sowie Struktur- und Prozessveränderungen erfolgen."
},

{
    id: 133,

    topic: "Evidence Based Nursing",

    subtopic: "Patientenpräferenzen",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie empfiehlt eine bestimmte Pflegemaßnahme, die pflegebedürftige Person lehnt diese jedoch ab. Wie ist evidenzbasiert vorzugehen?",

    answers: [
        "Die Präferenz der Person berücksichtigen und gemeinsam eine fachlich begründete Alternative suchen",
        "Die Maßnahme gegen den Willen der Person durchführen",
        "Die Studie vollständig ignorieren",
        "Die Entscheidung ausschließlich der Stationsleitung überlassen"
    ],

    correct: [0],

    explanation:
        "Evidence Based Nursing verbindet wissenschaftliche Evidenz mit professioneller Erfahrung und den Wünschen der pflegebedürftigen Person."
},

{
    id: 134,

    topic: "Evidence Based Nursing",

    subtopic: "Evaluation",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Aspekte sollten bei der Evaluation einer implementierten Maßnahme berücksichtigt werden?",

    answers: [
        "Strukturen",
        "Prozesse",
        "Ergebnisse",
        "Personeller und finanzieller Aufwand"
    ],

    correct: [0, 1, 2, 3],

    explanation:
        "Eine umfassende Evaluation betrachtet Strukturen, Prozesse, Ergebnisse sowie personelle und finanzielle Ressourcen."
},

{
    id: 135,

    topic: "Evidence Based Nursing",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Station führt nach kritischer Studienbewertung ein neues Mobilisationskonzept ein. Nach drei Monaten werden Sturzrate, Arbeitsaufwand und Zufriedenheit der Bewohnerinnen und Bewohner überprüft. Welcher Schritt der EBN-Methode wird durchgeführt?",

    answers: [
        "Evaluation",
        "Auftragsklärung",
        "Literaturrecherche",
        "Fragestellung"
    ],

    correct: [0],

    explanation:
        "Durch die Überprüfung von Wirkung, Aufwand und Zufriedenheit wird beurteilt, ob die implementierte Maßnahme den gewünschten Nutzen erreicht hat."
},
{
    id: 136,

    topic: "Evidence Based Nursing",

    subtopic: "Kritische Beurteilung",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Aspekte sollten bei der kritischen Beurteilung einer Studie geprüft werden?",

    answers: [
        "Methodische Qualität",
        "Aussagekraft der Ergebnisse",
        "Übertragbarkeit auf die eigene Praxis",
        "Persönliche Sympathie für die Autorinnen und Autoren"
    ],

    correct: [0, 1, 2],

    explanation:
        "Bei der kritischen Studienbewertung werden unter anderem methodische Qualität, Aussagekraft und praktische Übertragbarkeit geprüft."
},

{
    id: 137,

    topic: "Evidence Based Nursing",

    subtopic: "Übertragbarkeit",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie wurde mit jungen Erwachsenen durchgeführt. Die Ergebnisse sollen auf hochbetagte Pflegeheimbewohner übertragen werden. Was muss besonders geprüft werden?",

    answers: [
        "Ob Population und Versorgungskontext ausreichend vergleichbar sind",
        "Ob der Studientitel besonders kurz ist",
        "Ob die Studie viele Abbildungen enthält",
        "Ob die Autorinnen und Autoren Pflegefachpersonen sind"
    ],

    correct: [0],

    explanation:
        "Die Übertragbarkeit hängt davon ab, ob Population, Setting, Intervention und Rahmenbedingungen mit der eigenen Versorgungssituation vergleichbar sind."
},

{
    id: 138,

    topic: "Evidence Based Nursing",

    subtopic: "Confounder",

    difficulty: "mittel",

    type: "single",

    question: "Was ist ein Confounder?",

    answers: [
        "Eine Drittvariable, die einen beobachteten Zusammenhang verfälschen kann",
        "Ein Instrument zur Literaturrecherche",
        "Eine Form der Patientenpräferenz",
        "Ein abschließender Schritt der EBN-Methode"
    ],

    correct: [0],

    explanation:
        "Ein Confounder ist ein Störfaktor, der mit unabhängiger und abhängiger Variable zusammenhängt und dadurch Ergebnisse verzerren kann."
},

{
    id: 139,

    topic: "Evidence Based Nursing",

    subtopic: "Confounder",

    difficulty: "schwer",

    type: "single",

    question: "Eine Studie zeigt, dass Personen mit wenig Bewegung häufiger Bluthochdruck haben. Ältere Menschen bewegen sich jedoch oft weniger und haben zugleich häufiger Bluthochdruck. Welche Variable ist hier ein möglicher Confounder?",

    answers: [
        "Alter",
        "Blutdruckmessgerät",
        "Bewegung",
        "Studientitel"
    ],

    correct: [0],

    explanation:
        "Das Alter kann sowohl mit geringer Bewegung als auch mit häufigerem Bluthochdruck zusammenhängen und damit den beobachteten Zusammenhang beeinflussen."
},

{
    id: 140,

    topic: "Evidence Based Nursing",

    subtopic: "Confounder",

    difficulty: "mittel",

    type: "multiple",

    question: "Welche Maßnahmen können helfen, Confounder zu kontrollieren?",

    answers: [
        "Randomisierung",
        "Matching",
        "Statistische Kontrolle",
        "Ignorieren möglicher Störfaktoren"
    ],

    correct: [0, 1, 2],

    explanation:
        "Confounder können unter anderem durch Randomisierung, Matching und statistische Verfahren kontrolliert werden."
},

{
    id: 141,

    topic: "Evidence Based Nursing",

    subtopic: "Implementierung",

    difficulty: "mittel",

    type: "single",

    question: "Wann sollte ein Studienergebnis in die Pflegepraxis übernommen werden?",

    answers: [
        "Wenn es methodisch überzeugend, relevant und auf die eigene Situation übertragbar ist",
        "Sobald die Studie veröffentlicht wurde",
        "Nur wenn keine Anpassung erforderlich ist",
        "Unabhängig von Patientenwünschen und Kontext"
    ],

    correct: [0],

    explanation:
        "Vor einer Implementierung müssen Qualität, Relevanz, Übertragbarkeit, Kontext und individuelle Präferenzen berücksichtigt werden."
},

{
    id: 142,

    topic: "Evidence Based Nursing",

    subtopic: "Patientenorientierung",

    difficulty: "schwer",

    type: "single",

    question: "Welche Aussage entspricht dem Prinzip evidenzbasierter Einzelfallentscheidungen?",

    answers: [
        "Wissenschaftliche Erkenntnisse werden mit Erfahrung und individuellen Präferenzen verbunden.",
        "Studienergebnisse werden immer unverändert umgesetzt.",
        "Persönliche Wünsche spielen keine Rolle.",
        "Nur die berufliche Erfahrung entscheidet."
    ],

    correct: [0],

    explanation:
        "EBN bedeutet keine starre Anwendung von Studienergebnissen, sondern eine begründete Entscheidung im individuellen Fall."
},

{
    id: 143,

    topic: "Evidence Based Nursing",

    subtopic: "Implementierung",

    difficulty: "schwer",

    type: "single",

    question: "Eine neue Intervention ist wissenschaftlich gut belegt, scheitert aber an fehlender Zeit, mangelnder Schulung und Widerstand im Team. Welcher Aspekt wurde unzureichend berücksichtigt?",

    answers: [
        "Der Implementierungskontext",
        "Die Population der Studie",
        "Der Titel der Leitlinie",
        "Der Empfehlungsgrad allein"
    ],

    correct: [0],

    explanation:
        "Auch gute Evidenz kann nur erfolgreich umgesetzt werden, wenn Strukturen, Ressourcen, Kultur und Mitarbeitende im jeweiligen Kontext berücksichtigt werden."
},

{
    id: 144,

    topic: "Evidence Based Nursing",

    subtopic: "Evaluation",

    difficulty: "mittel",

    type: "single",

    question: "Was spricht dafür, eine implementierte Maßnahme erneut anzupassen?",

    answers: [
        "Der gewünschte Effekt bleibt aus oder der Aufwand ist unverhältnismäßig hoch.",
        "Die Maßnahme wurde einmal schriftlich festgehalten.",
        "Die Intervention stammt aus einer veröffentlichten Studie.",
        "Das Team hat sich an die Maßnahme gewöhnt."
    ],

    correct: [0],

    explanation:
        "Bleibt die Wirkung aus oder übersteigt der Aufwand den Nutzen, müssen Umsetzung oder Maßnahme überprüft und angepasst werden."
},

{
    id: 145,

    topic: "Evidence Based Nursing",

    subtopic: "Fallbeispiel",

    difficulty: "schwer",

    type: "single",

    question: "Eine Pflegefachperson findet eine hochwertige Studie zur Dekubitusprävention. Vor der Einführung prüft sie die Vergleichbarkeit der Bewohnergruppe, bespricht die Maßnahme im Team und berücksichtigt die Wünsche der betroffenen Person. Welches Vorgehen wird deutlich?",

    answers: [
        "Kritische Bewertung und kontextbezogene Umsetzung von Evidenz",
        "Ungeprüfte Übernahme eines Studienergebnisses",
        "Ausschließliche Orientierung an Berufserfahrung",
        "Verzicht auf eine individuelle Entscheidung"
    ],

    correct: [0],

    explanation:
        "Die Evidenz wird hinsichtlich Qualität und Übertragbarkeit beurteilt und anschließend an Kontext, Erfahrung und Patientenpräferenzen angepasst."
}
];