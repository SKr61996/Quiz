/*
=========================================================
PflegeQuiz
Version 1.0
quiz.js
=========================================================
*/

const Quiz = {

    state: {

        questions: [],
        currentQuestion: 0,

        score: 0,
        answered: 0,

        favoriteQuestions: [],
        wrongQuestions: [],

        mode: "lernen",

        timer: null,
        timerDuration: 0,
        timerRemaining: 0

    },

    /* ==========================================
       Initialisierung
    ========================================== */

    init() {

        this.loadQuestions();
        this.loadStorage();
        this.registerButtons();
        this.updateStatistics();

    },

    /* ==========================================
       Buttons registrieren
    ========================================== */

    registerButtons() {

        const startLearningButton =
            document.getElementById("start-learning");

        if (startLearningButton) {

            startLearningButton.addEventListener(
                "click",
                () => {
                    this.startLearningQuiz();
                }
            );

        }

        const nextButton =
            document.getElementById("next-question");

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                () => {
                    this.nextQuestion();
                }
            );

        }

        const previousButton =
            document.getElementById("previous-question");

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                () => {
                    this.previousQuestion();
                }
            );

        }

        const favoriteButton =
            document.getElementById("favorite-button");

        if (favoriteButton) {

            favoriteButton.addEventListener(
                "click",
                () => {
                    this.toggleFavorite();
                }
            );

        }

        const repeatWrongButton =
            document.getElementById("repeat-wrong");

        if (repeatWrongButton) {

            repeatWrongButton.addEventListener(
                "click",
                () => {
                    this.repeatWrongQuestions();
                }
            );

        }

        const restartButton =
            document.getElementById("restart-quiz");

        if (restartButton) {

            restartButton.addEventListener(
                "click",
                () => {
                    this.restart();
                }
            );

        }

        const backDashboardButton =
            document.getElementById("back-dashboard");

        if (backDashboardButton) {

            backDashboardButton.addEventListener(
                "click",
                () => {
                    this.showPage("dashboard");
                }
            );

        }

        const continueLearningButton =
            document.getElementById("continue-learning");

        if (continueLearningButton) {

            continueLearningButton.addEventListener(
                "click",
                () => {
                    this.showLearningSetup();
                }
            );

        }

    },

    /* ==========================================
       Lernquiz starten
    ========================================== */

    startLearningQuiz() {

        const selectedTopics =
            Array.from(
                document.querySelectorAll(
                    'input[name="learning-topic"]:checked'
                )
            ).map(
                input => input.value
            );

        const selectedDifficulties =
            Array.from(
                document.querySelectorAll(
                    'input[name="learning-difficulty"]:checked'
                )
            ).map(
                input => input.value
            );

        const questionCountElement =
            document.getElementById(
                "learning-question-count"
            );

        const message =
            document.getElementById(
                "learning-setup-message"
            );

        if (selectedTopics.length === 0) {

            if (message) {

                message.textContent =
                    "Bitte wähle mindestens ein Themengebiet aus.";

                message.classList.remove("hidden");

            }

            return;

        }

        if (selectedDifficulties.length === 0) {

            if (message) {

                message.textContent =
                    "Bitte wähle mindestens eine Schwierigkeitsstufe aus.";

                message.classList.remove("hidden");

            }

            return;

        }

        if (message) {
            message.classList.add("hidden");
        }

        let filteredQuestions =
            getAllQuestions().filter(
                question => {

                    const questionTopic =
                        this.getQuestionTopic(question);

                    const questionDifficulty =
                        question.difficulty || "mittel";

                    return (
                        selectedTopics.includes(questionTopic) &&
                        selectedDifficulties.includes(
                            questionDifficulty
                        )
                    );

                }
            );

        if (filteredQuestions.length === 0) {

            if (message) {

                message.textContent =
                    "Für diese Auswahl wurden keine passenden Fragen gefunden.";

                message.classList.remove("hidden");

            }

            return;

        }

        this.shuffleArray(filteredQuestions);

        const selectedCount =
            questionCountElement
                ? questionCountElement.value
                : "all";

        if (selectedCount !== "all") {

            const maximum =
                Number(selectedCount);

            filteredQuestions =
                filteredQuestions.slice(
                    0,
                    maximum
                );

        }

        this.state.questions =
            filteredQuestions;

        this.state.currentQuestion = 0;
        this.state.score = 0;
        this.state.answered = 0;
        this.state.mode = "lernen";

        this.updateStatistics();
        this.showLearningQuiz();
        this.loadQuestion();

    },

    /* ==========================================
       Thema einer Frage bestimmen
    ========================================== */

    getQuestionTopic(question) {

        const categoryNames = {

            pflegewissenschaft:
                "Pflegewissenschaft",

            gesundheit:
                "Gesundheit",

            praevention:
                "Prävention",

            forschung:
                "Forschung",

            skalenniveaus:
                "Forschung",

            pflegetheorien:
                "Pflegetheorien",

            meleis:
                "Pflegetheorien",

            grundlagen:
                "Grundlagen der Pflegetheorien",

            metaparadigma:
                "Metaparadigma",

            ebn:
                "Evidence Based Nursing",

            evidencebasednursing:
                "Evidence Based Nursing",

            professionalisierung:
                "Professionalisierung",

            klinischepflegewissenschaft:
                "Pflegewissenschaft"

        };

        if (question.topic) {

            return (
                categoryNames[question.topic] ||
                question.topic
            );

        }

        if (question.category) {

            return (
                categoryNames[question.category] ||
                question.category
            );

        }

        const id =
            Number(question.id);

        if (id >= 1 && id <= 65) {
            return "Pflegewissenschaft";
        }

        if (id >= 66 && id <= 105) {
            return "Prävention";
        }

        if (id >= 106 && id <= 145) {
            return "Evidence Based Nursing";
        }

        if (id >= 146 && id <= 195) {
            return "Gesundheit";
        }

        if (id >= 196 && id <= 295) {
            return "Forschung";
        }

        if (id >= 296 && id <= 325) {
            return "Professionalisierung";
        }

        if (id >= 326 && id <= 395) {
            return "Pflegetheorien";
        }

        if (id >= 396 && id <= 445) {
            return "Metaparadigma";
        }

        if (id >= 446 && id <= 465) {
            return "Pflegetheorien";
        }

        if (id >= 466 && id <= 485) {
            return "Forschung";
        }

        if (id >= 486 && id <= 495) {
            return "Pflegewissenschaft";
        }

        if (id >= 496) {
            return "Grundlagen der Pflegetheorien";
        }

        return "";

    },

    /* ==========================================
       Fragen laden
    ========================================== */

    loadQuestions() {

        if (typeof getAllQuestions !== "function") {

            console.error(
                "Die Funktion getAllQuestions() wurde nicht gefunden."
            );

            this.state.questions = [];

            return;

        }

        this.state.questions =
            getAllQuestions();

        this.shuffleQuestions();

    },

    shuffleQuestions() {

        this.shuffleArray(
            this.state.questions
        );

    },

    shuffleArray(array) {

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                array[i],
                array[j]
            ] = [
                array[j],
                array[i]
            ];

        }

        return array;

    },

    /* ==========================================
       Local Storage
    ========================================== */

    loadStorage() {

        const data =
            Storage.load() || {};

        this.state.score =
            Number(data.score) || 0;

        this.state.answered =
            Number(data.answered) || 0;

        this.state.favoriteQuestions =
            Array.isArray(data.favoriteQuestions)
                ? data.favoriteQuestions
                : [];

        this.state.wrongQuestions =
            Array.isArray(data.wrongQuestions)
                ? data.wrongQuestions
                : [];

    },

    saveStorage() {

        Storage.save({

            score:
                this.state.score,

            answered:
                this.state.answered,

            favoriteQuestions:
                this.state.favoriteQuestions,

            wrongQuestions:
                this.state.wrongQuestions

        });

    },

    /* ==========================================
       Aktuelle Frage
    ========================================== */

    getQuestion() {

        return this.state.questions[
            this.state.currentQuestion
        ];

    },

    /* ==========================================
       Frage anzeigen
    ========================================== */

    loadQuestion() {

        const question =
            this.getQuestion();

        if (!question) {

            this.finishQuiz();

            return;

        }

        const counter =
            document.getElementById(
                "question-counter"
            );

        const progress =
            document.getElementById(
                "progress-fill"
            );

        const text =
            document.getElementById(
                "question-text"
            );

        const answers =
            document.getElementById(
                "answers"
            );

        const feedback =
            document.getElementById(
                "feedback"
            );

        const nextButton =
            document.getElementById(
                "next-question"
            );

        const previousButton =
            document.getElementById(
                "previous-question"
            );

        if (counter) {

            counter.textContent =
                `Frage ${this.state.currentQuestion + 1} von ${this.state.questions.length}`;

        }

        if (progress) {

            const percent =
                (
                    (
                        this.state.currentQuestion + 1
                    ) /
                    this.state.questions.length
                ) * 100;

            progress.style.width =
                percent + "%";

        }

        if (text) {

            text.textContent =
                question.question;

        }

        if (!answers) {

            console.error(
                "Der Antwortbereich #answers wurde nicht gefunden."
            );

            return;

        }

        answers.innerHTML = "";

        if (feedback) {

            feedback.classList.add("hidden");
            feedback.classList.remove(
                "correct",
                "wrong"
            );

        }

        if (nextButton) {
            nextButton.disabled = true;
        }

        if (previousButton) {

            previousButton.disabled =
                this.state.currentQuestion === 0;

        }

        const questionAnswers =
            Array.isArray(question.answers)
                ? question.answers
                : [];

        const shuffledAnswers =
            questionAnswers.map(
                (answer, index) => ({
                    text: answer,
                    index: index
                })
            );

        this.shuffleArray(
            shuffledAnswers
        );

        shuffledAnswers.forEach(
            answer => {

                const label =
                    document.createElement(
                        "label"
                    );

                label.className =
                    "answer";

                const input =
                    document.createElement(
                        "input"
                    );

                input.type =
                    question.type === "multiple"
                        ? "checkbox"
                        : "radio";

                input.name =
                    "question";

                input.value =
                    answer.index;

                const span =
                    document.createElement(
                        "span"
                    );

                span.textContent =
                    answer.text;

                label.appendChild(input);
                label.appendChild(span);

                answers.appendChild(label);

            }
        );

        const checkButton =
            document.createElement(
                "button"
            );

        checkButton.id =
            "check-answer";

        checkButton.textContent =
            "Antwort prüfen";

        checkButton.addEventListener(
            "click",
            () => {
                this.checkAnswer();
            }
        );

        answers.appendChild(
            checkButton
        );

        this.updateFavoriteButton();
        this.startTimer();

    },

    /* ==========================================
       Richtige Antworten vereinheitlichen
    ========================================== */

    getCorrectAnswers(question) {

        if (Array.isArray(question.correct)) {

            return question.correct.map(
                value => Number(value)
            );

        }

        return [
            Number(question.correct)
        ];

    },

    /* ==========================================
       Antwort prüfen
    ========================================== */

    checkAnswer() {

        clearInterval(
            this.state.timer
        );

        const question =
            this.getQuestion();

        if (!question) {
            return;
        }

        const selected =
            Array.from(
                document.querySelectorAll(
                    "#answers input:checked"
                )
            ).map(
                input =>
                    Number(input.value)
            );

        if (selected.length === 0) {

            alert(
                "Bitte wähle mindestens eine Antwort aus."
            );

            return;

        }

        selected.sort(
            (a, b) => a - b
        );

        const correctAnswers =
            this.getCorrectAnswers(
                question
            );

        correctAnswers.sort(
            (a, b) => a - b
        );

        const isCorrect =
            selected.length ===
                correctAnswers.length &&

            selected.every(
                (value, index) =>
                    value ===
                    correctAnswers[index]
            );

        this.state.answered++;

        const labels =
            document.querySelectorAll(
                "#answers label.answer"
            );

        labels.forEach(
            label => {

                const input =
                    label.querySelector(
                        "input"
                    );

                if (!input) {
                    return;
                }

                input.disabled = true;

                const value =
                    Number(input.value);

                if (
                    correctAnswers.includes(
                        value
                    )
                ) {

                    label.classList.add(
                        "correct-answer"
                    );

                }

                if (
                    input.checked &&
                    !correctAnswers.includes(
                        value
                    )
                ) {

                    label.classList.add(
                        "wrong-answer"
                    );

                }

            }
        );

        if (isCorrect) {

            this.state.score++;

            this.removeWrongQuestion(
                question.id
            );

        } else {

            this.addWrongQuestion(
                question.id
            );

        }

        this.showFeedback(
            isCorrect
        );

        this.updateStatistics();
        this.saveStorage();

        const nextButton =
            document.getElementById(
                "next-question"
            );

        if (nextButton) {

            nextButton.disabled = false;

        }

        const checkButton =
            document.getElementById(
                "check-answer"
            );

        if (checkButton) {

            checkButton.disabled = true;

        }

    },

    /* ==========================================
       Falsche Fragen verwalten
    ========================================== */

    addWrongQuestion(questionId) {

        if (
            !this.state.wrongQuestions.includes(
                questionId
            )
        ) {

            this.state.wrongQuestions.push(
                questionId
            );

        }

    },

    removeWrongQuestion(questionId) {

        this.state.wrongQuestions =
            this.state.wrongQuestions.filter(
                id => id !== questionId
            );

    },

    repeatWrongQuestions() {

        clearInterval(
            this.state.timer
        );

        const wrongIds =
            [
                ...new Set(
                    this.state.wrongQuestions
                )
            ];

        if (wrongIds.length === 0) {

            alert(
                "Aktuell sind keine falsch beantworteten Fragen gespeichert."
            );

            return;

        }

        const wrongQuestions =
            getAllQuestions().filter(
                question =>
                    wrongIds.includes(
                        question.id
                    )
            );

        if (
            wrongQuestions.length === 0
        ) {

            alert(
                "Die gespeicherten Fragen konnten nicht gefunden werden."
            );

            return;

        }

        this.state.questions =
            wrongQuestions;

        this.state.currentQuestion = 0;
        this.state.score = 0;
        this.state.answered = 0;
        this.state.mode = "falsche-fragen";

        this.shuffleQuestions();
        this.updateStatistics();

        this.showLearningQuiz();
        this.loadQuestion();

    },

    /* ==========================================
       Feedback
    ========================================== */

    showFeedback(isCorrect) {

        const question =
            this.getQuestion();

        const feedback =
            document.getElementById(
                "feedback"
            );

        const title =
            document.getElementById(
                "feedback-title"
            );

        const text =
            document.getElementById(
                "feedback-text"
            );

        if (!feedback) {
            return;
        }

        feedback.classList.remove(
            "hidden",
            "correct",
            "wrong"
        );

        if (isCorrect) {

            feedback.classList.add(
                "correct"
            );

            if (title) {
                title.textContent =
                    "✅ Richtig";
            }

        } else {

            feedback.classList.add(
                "wrong"
            );

            if (title) {
                title.textContent =
                    "❌ Leider falsch";
            }

        }

        if (text) {

            text.textContent =
                question.explanation ||
                "Für diese Frage ist noch keine Erklärung hinterlegt.";

        }

    },

    /* ==========================================
       Nächste Frage
    ========================================== */

    nextQuestion() {

        this.state.currentQuestion++;

        if (
            this.state.currentQuestion >=
            this.state.questions.length
        ) {

            this.finishQuiz();

            return;

        }

        this.loadQuestion();

    },

    /* ==========================================
       Vorherige Frage
    ========================================== */

    previousQuestion() {

        if (
            this.state.currentQuestion > 0
        ) {

            this.state.currentQuestion--;

            this.loadQuestion();

        }

    },

    /* ==========================================
       Quiz neu starten
    ========================================== */

    restart() {

        clearInterval(
            this.state.timer
        );

        if (
            !this.state.questions ||
            this.state.questions.length === 0
        ) {

            this.showLearningSetup();

            return;

        }

        this.state.currentQuestion = 0;
        this.state.score = 0;
        this.state.answered = 0;

        this.shuffleQuestions();
        this.updateStatistics();
        this.saveStorage();

        this.showLearningQuiz();
        this.loadQuestion();

    },

    /* ==========================================
       Favoriten
    ========================================== */

    toggleFavorite() {

        const question =
            this.getQuestion();

        if (!question) {
            return;
        }

        const id =
            question.id;

        const index =
            this.state.favoriteQuestions.indexOf(
                id
            );

        if (index === -1) {

            this.state.favoriteQuestions.push(
                id
            );

        } else {

            this.state.favoriteQuestions.splice(
                index,
                1
            );

        }

        this.saveStorage();
        this.updateFavoriteButton();
        this.updateStatistics();

    },

    updateFavoriteButton() {

        const button =
            document.getElementById(
                "favorite-button"
            );

        const question =
            this.getQuestion();

        if (
            !button ||
            !question
        ) {
            return;
        }

        if (
            this.state.favoriteQuestions.includes(
                question.id
            )
        ) {

            button.textContent =
                "★ Favorit";

            button.classList.add(
                "favorite-active"
            );

        } else {

            button.textContent =
                "☆ Favorit";

            button.classList.remove(
                "favorite-active"
            );

        }

    },

    /* ==========================================
       Statistik
    ========================================== */

    updateStatistics() {

        const answered =
            document.getElementById(
                "stats-answered"
            );

        const correct =
            document.getElementById(
                "stats-correct"
            );

        const percent =
            document.getElementById(
                "stats-percent"
            );

        const favorites =
            document.getElementById(
                "stats-favorites"
            );

        const dashboardAnswered =
            document.getElementById(
                "dashboard-answered"
            );

        const dashboardPercent =
            document.getElementById(
                "dashboard-percent"
            );

        const dashboardFavorites =
            document.getElementById(
                "dashboard-favorites"
            );

        const dashboardWrong =
            document.getElementById(
                "dashboard-wrong"
            );

        const successRate =
            this.state.answered === 0
                ? 0
                : (
                    this.state.score /
                    this.state.answered
                ) * 100;

        if (answered) {

            answered.textContent =
                this.state.answered;

        }

        if (correct) {

            correct.textContent =
                this.state.score;

        }

        if (percent) {

            percent.textContent =
                successRate.toFixed(1) +
                " %";

        }

        if (favorites) {

            favorites.textContent =
                this.state.favoriteQuestions.length;

        }

        if (dashboardAnswered) {

            dashboardAnswered.textContent =
                this.state.answered +
                (
                    this.state.answered === 1
                        ? " Frage"
                        : " Fragen"
                );

        }

        if (dashboardPercent) {

            dashboardPercent.textContent =
                successRate.toFixed(1) +
                " %";

        }

        if (dashboardFavorites) {

            dashboardFavorites.textContent =
                this.state.favoriteQuestions.length;

        }

        if (dashboardWrong) {

            dashboardWrong.textContent =
                this.state.wrongQuestions.length;

        }

    },

    /* ==========================================
       Timer
    ========================================== */

    startTimer() {

        clearInterval(
            this.state.timer
        );

        const timer =
            document.getElementById(
                "timer"
            );

        if (!timer) {
            return;
        }

        if (
            this.state.timerDuration === 0
        ) {

            timer.textContent =
                "⏱️ Ohne Zeitlimit";

            return;

        }

        this.state.timerRemaining =
            this.state.timerDuration;

        timer.textContent =
            "⏱ " +
            this.state.timerRemaining;

        this.state.timer =
            setInterval(
                () => {

                    this.state.timerRemaining--;

                    timer.textContent =
                        "⏱ " +
                        this.state.timerRemaining;

                    if (
                        this.state.timerRemaining <= 0
                    ) {

                        clearInterval(
                            this.state.timer
                        );

                        this.addWrongQuestion(
                            this.getQuestion().id
                        );

                        this.state.answered++;

                        this.updateStatistics();
                        this.saveStorage();
                        this.nextQuestion();

                    }

                },
                1000
            );

    },

    /* ==========================================
       Ergebnis
    ========================================== */

    finishQuiz() {

        clearInterval(
            this.state.timer
        );

        const totalQuestions =
            this.state.questions.length;

        const percent =
            totalQuestions === 0
                ? 0
                : (
                    this.state.score /
                    totalQuestions
                ) * 100;

        this.showPage(
            "result-page"
        );

        const resultPercent =
            document.getElementById(
                "result-percent"
            );

        const resultScore =
            document.getElementById(
                "result-score"
            );

        const resultGrade =
            document.getElementById(
                "result-grade"
            );

        const resultStatus =
            document.getElementById(
                "result-status"
            );

        if (resultPercent) {

            resultPercent.textContent =
                percent.toFixed(1) +
                " %";

        }

        if (resultScore) {

            resultScore.textContent =
                `${this.state.score} von ${totalQuestions} richtig`;

        }

        if (resultGrade) {

            resultGrade.textContent =
                this.calculateGrade(
                    percent
                );

        }

        if (resultStatus) {

            if (percent >= 50) {

                resultStatus.textContent =
                    "✅ Bestanden";

                resultStatus.className =
                    "result-pass";

            } else {

                resultStatus.textContent =
                    "❌ Nicht bestanden";

                resultStatus.className =
                    "result-fail";

            }

        }

        this.updateStatistics();
        this.saveStorage();

    },

    /* ==========================================
       Notenschlüssel
    ========================================== */

    calculateGrade(percent) {

        if (percent >= 92) {
            return "Note 1,0";
        }

        if (percent >= 88) {
            return "Note 1,3";
        }

        if (percent >= 84) {
            return "Note 1,7";
        }

        if (percent >= 80) {
            return "Note 2,0";
        }

        if (percent >= 76) {
            return "Note 2,3";
        }

        if (percent >= 72) {
            return "Note 2,7";
        }

        if (percent >= 68) {
            return "Note 3,0";
        }

        if (percent >= 64) {
            return "Note 3,3";
        }

        if (percent >= 60) {
            return "Note 3,7";
        }

        if (percent >= 50) {
            return "Note 4,0";
        }

        return "Note 5,0";

    },

    /* ==========================================
       Seitenanzeige
    ========================================== */

    showPage(pageId) {

        document
            .querySelectorAll(".page")
            .forEach(
                page => {
                    page.classList.remove(
                        "active"
                    );
                }
            );

        const selectedPage =
            document.getElementById(
                pageId
            );

        if (selectedPage) {

            selectedPage.classList.add(
                "active"
            );

        }

        document
            .querySelectorAll(
                ".nav-button"
            )
            .forEach(
                button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.page ===
                            pageId
                    );

                }
            );

    },

    showLearningSetup() {

        this.showPage("lernen");

        const setup =
            document.getElementById(
                "learning-setup"
            );

        const quiz =
            document.getElementById(
                "learning-quiz"
            );

        if (setup) {
            setup.classList.remove("hidden");
        }

        if (quiz) {
            quiz.classList.add("hidden");
        }

    },

    showLearningQuiz() {

        this.showPage("lernen");

        const setup =
            document.getElementById(
                "learning-setup"
            );

        const quiz =
            document.getElementById(
                "learning-quiz"
            );

        if (setup) {
            setup.classList.add("hidden");
        }

        if (quiz) {
            quiz.classList.remove("hidden");
        }

    }

};

/* ==========================================
   Quiz starten
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        Quiz.init();
    }
);