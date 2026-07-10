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
       Start
    ========================================== */

    init() {

    this.loadQuestions();

    this.loadStorage();

    this.registerButtons();

    this.updateStatistics();


},
    registerButtons() {
            const startLearningButton =
        document.getElementById("start-learning");

    if(startLearningButton){

        startLearningButton.addEventListener(

            "click",

            ()=>{

                this.startLearningQuiz();

            }

        );

    }
    const nextButton =
        document.getElementById("next-question");

    if(nextButton){

        nextButton.addEventListener(

            "click",

            ()=>{

                this.nextQuestion();

            }

        );

    }

    const previousButton =
        document.getElementById("previous-question");

    if(previousButton){

        previousButton.addEventListener(

            "click",

            ()=>{

                this.previousQuestion();

            }

        );

    }

    const favoriteButton =
        document.getElementById("favorite-button");

    if(favoriteButton){

        favoriteButton.addEventListener(

            "click",

            ()=>{

                this.toggleFavorite();

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

        if(selectedTopics.length === 0){

            message.textContent =
                "Bitte wähle mindestens ein Themengebiet aus.";

            message.classList.remove("hidden");

            return;

        }

        if(selectedDifficulties.length === 0){

            message.textContent =
                "Bitte wähle mindestens eine Schwierigkeitsstufe aus.";

            message.classList.remove("hidden");

            return;

        }

        message.classList.add("hidden");

        let filteredQuestions =
            getAllQuestions().filter(

                question => {

                    const questionTopic =
                        this.getQuestionTopic(question);

                    const questionDifficulty =
                        question.difficulty || "mittel";

                    return (

                        selectedTopics.includes(
                            questionTopic
                        ) &&

                        selectedDifficulties.includes(
                            questionDifficulty
                        )

                    );

                }

            );

        if(filteredQuestions.length === 0){

            message.textContent =
                "Für diese Auswahl wurden keine passenden Fragen gefunden.";

            message.classList.remove("hidden");

            return;

        }

        this.shuffleArray(filteredQuestions);

        const selectedCount =
            questionCountElement.value;

        if(selectedCount !== "all"){

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

        this.state.mode = "lernen";

        const setup =
            document.getElementById(

                "learning-setup"

            );

        const quiz =
            document.getElementById(

                "learning-quiz"

            );

        setup.classList.add("hidden");

        quiz.classList.remove("hidden");

        this.loadQuestion();

    },

    /* ==========================================
       Thema einer Frage bestimmen
    ========================================== */

    getQuestionTopic(question) {

        if(question.topic){

            return question.topic;

        }

        const id =
            question.id;

        if(id >= 1 && id <= 65){

            return "Pflegewissenschaft";

        }

        if(id >= 66 && id <= 105){

            return "Diagnostik";

        }

        if(id >= 106 && id <= 145){

            return "Evidence Based Nursing";

        }

        if(id >= 146 && id <= 195){

            return "Gesundheit";

        }

        if(id >= 196 && id <= 295){

            return "Forschung";

        }

        if(id >= 296 && id <= 325){

            return "Professionalisierung";

        }

        if(id >= 326 && id <= 395){

            return "Pflegetheorien";

        }

        return "";

    },

    /* ==========================================
       Fragen laden
    ========================================== */

    loadQuestions() {

        this.state.questions =
            getAllQuestions()

        this.shuffleQuestions();

    },

    shuffleQuestions() {

        for (

            let i =
                this.state.questions.length - 1;

            i > 0;

            i--

        ) {

            const j =
                Math.floor(

                    Math.random() * (i + 1)

                );

            [

                this.state.questions[i],

                this.state.questions[j]

            ] = [

                this.state.questions[j],

                this.state.questions[i]

            ];

        }

    },

    /* ==========================================
       Local Storage
    ========================================== */

    loadStorage() {

        const data = Storage.load();

        this.state.score =
            data.score;

        this.state.answered =
            data.answered;

        this.state.favoriteQuestions =
            data.favoriteQuestions;

        this.state.wrongQuestions =
            data.wrongQuestions;

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
            document.getElementById("question-counter");

        const progress =
            document.getElementById("progress-fill");

        const text =
            document.getElementById("question-text");

        const answers =
            document.getElementById("answers");

        const feedback =
            document.getElementById("feedback");

        const nextButton =
            document.getElementById("next-question");

        counter.textContent =
            `Frage ${this.state.currentQuestion + 1} von ${this.state.questions.length}`;

        const percent =

            ((this.state.currentQuestion + 1) /

            this.state.questions.length) * 100;

        progress.style.width =
            percent + "%";

        text.textContent =
            question.question;

        answers.innerHTML = "";

        feedback.classList.add("hidden");

        nextButton.disabled = true;

        /* ==========================
           Antworten mischen
        ========================== */

        const shuffledAnswers =
            question.answers.map(

                (answer,index)=>({

                    text:answer,

                    index:index

                })

            );

        this.shuffleArray(shuffledAnswers);

        shuffledAnswers.forEach(answer=>{

            const label =
                document.createElement("label");

            label.className =
                "answer";

            const input =
                document.createElement("input");

            input.type =

                question.type==="multiple"

                ? "checkbox"

                : "radio";

            input.name =
                "question";

            input.value =
                answer.index;

            const span =
                document.createElement("span");

            span.textContent =
                answer.text;

            label.appendChild(input);

            label.appendChild(span);

            answers.appendChild(label);

        });

        const checkButton =
            document.createElement("button");

        checkButton.id =
            "check-answer";

        checkButton.textContent =
            "Antwort prüfen";

        checkButton.addEventListener(

            "click",

            ()=>{

                this.checkAnswer();

            }

        );

        answers.appendChild(checkButton);

        this.updateFavoriteButton();

        this.startTimer();

    },

    /* ==========================================
       Antworten mischen
    ========================================== */

    shuffleArray(array){

        for(

            let i=array.length-1;

            i>0;

            i--

        ){

            const j=Math.floor(

                Math.random()*(i+1)

            );

            [

                array[i],

                array[j]

            ]=[

                array[j],

                array[i]

            ];

        }

        return array;

    },
        /* ==========================================
       Antwort prüfen
    ========================================== */

    checkAnswer() {

        clearInterval(this.state.timer);

        const question =
            this.getQuestion();

        const selected =
            Array.from(

                document.querySelectorAll(

                    "#answers input:checked"

                )

            ).map(

                input => Number(input.value)

            );

        if(selected.length===0){

            alert(

                "Bitte wähle mindestens eine Antwort."

            );

            return;

        }

        selected.sort();

        const correct =
            [...question.correct].sort();

        const isCorrect =

            selected.length===correct.length &&

            selected.every(

                (value,index)=>

                    value===correct[index]

            );

        this.state.answered++;

        const labels =
            document.querySelectorAll(

                "#answers label"

            );

        labels.forEach(label=>{

            const input =
                label.querySelector("input");

            input.disabled=true;

            const value =
                Number(input.value);

            if(

                question.correct.includes(value)

            ){

                label.classList.add(

                    "correct-answer"

                );

            }

            if(

                input.checked &&

                !question.correct.includes(value)

            ){

                label.classList.add(

                    "wrong-answer"

                );

            }

        });

        if(isCorrect){

            this.state.score++;

        }else{

            this.state.wrongQuestions.push(

                question.id

            );

        }

        this.showFeedback(isCorrect);

        this.updateStatistics();

        this.saveStorage();

        document
            .getElementById(

                "next-question"

            )
            .disabled=false;

        document
            .getElementById(

                "check-answer"

            )
            .disabled=true;

    },

    /* ==========================================
       Feedback
    ========================================== */

    showFeedback(correct){

        const question =
            this.getQuestion();

        const feedback =
            document.getElementById("feedback");

        const title =
            document.getElementById("feedback-title");

        const text =
            document.getElementById("feedback-text");

        feedback.classList.remove(

            "hidden"

        );

        if(correct){

            feedback.classList.remove(

                "wrong"

            );

            feedback.classList.add(

                "correct"

            );

            title.textContent="✅ Richtig";

        }else{

            feedback.classList.remove(

                "correct"

            );

            feedback.classList.add(

                "wrong"

            );

            title.textContent="❌ Leider falsch";

        }

        text.textContent=

            question.explanation;

    },
        /* ==========================================
       Antwort prüfen
    ========================================== */

    checkAnswer() {

        clearInterval(this.state.timer);

        const question =
            this.getQuestion();

        const selected =
            Array.from(

                document.querySelectorAll(

                    "#answers input:checked"

                )

            ).map(

                input => Number(input.value)

            );

        if(selected.length===0){

            alert(

                "Bitte wähle mindestens eine Antwort."

            );

            return;

        }

        selected.sort();

        const correct =
            [...question.correct].sort();

        const isCorrect =

            selected.length===correct.length &&

            selected.every(

                (value,index)=>

                    value===correct[index]

            );

        this.state.answered++;

        const labels =
            document.querySelectorAll(

                "#answers label"

            );

        labels.forEach(label=>{

            const input =
                label.querySelector("input");

            input.disabled=true;

            const value =
                Number(input.value);

            if(

                question.correct.includes(value)

            ){

                label.classList.add(

                    "correct-answer"

                );

            }

            if(

                input.checked &&

                !question.correct.includes(value)

            ){

                label.classList.add(

                    "wrong-answer"

                );

            }

        });

        if(isCorrect){

            this.state.score++;

        }else{

            this.state.wrongQuestions.push(

                question.id

            );

        }

        this.showFeedback(isCorrect);

        this.updateStatistics();

        this.saveStorage();

        document
            .getElementById(

                "next-question"

            )
            .disabled=false;

        document
            .getElementById(

                "check-answer"

            )
            .disabled=true;

    },

    /* ==========================================
       Feedback
    ========================================== */

    showFeedback(correct){

        const question =
            this.getQuestion();

        const feedback =
            document.getElementById("feedback");

        const title =
            document.getElementById("feedback-title");

        const text =
            document.getElementById("feedback-text");

        feedback.classList.remove(

            "hidden"

        );

        if(correct){

            feedback.classList.remove(

                "wrong"

            );

            feedback.classList.add(

                "correct"

            );

            title.textContent="✅ Richtig";

        }else{

            feedback.classList.remove(

                "correct"

            );

            feedback.classList.add(

                "wrong"

            );

            title.textContent="❌ Leider falsch";

        }

        text.textContent=

            question.explanation;

    },
        /* ==========================================
       Nächste Frage
    ========================================== */

    nextQuestion(){

        this.state.currentQuestion++;

        if(

            this.state.currentQuestion >=

            this.state.questions.length

        ){

            this.finishQuiz();

            return;

        }

        this.loadQuestion();

    },

    /* ==========================================
       Vorherige Frage
    ========================================== */

    previousQuestion(){

        if(this.state.currentQuestion>0){

            this.state.currentQuestion--;

        }

        this.loadQuestion();

    },
        /* ==========================================
       Quiz neu starten
    ========================================== */

    restart(){

        clearInterval(this.state.timer);

        this.state.currentQuestion = 0;

        this.state.score = 0;

        this.state.answered = 0;

        this.state.wrongQuestions = [];

        this.shuffleQuestions();

        this.updateStatistics();

        this.saveStorage();

        this.loadQuestion();

    },

    /* ==========================================
       Favoriten
    ========================================== */

    toggleFavorite(){

        const question = this.getQuestion();

        const id = question.id;

        const index =

            this.state.favoriteQuestions.indexOf(id);

        if(index === -1){

            this.state.favoriteQuestions.push(id);

        }else{

            this.state.favoriteQuestions.splice(index,1);

        }

        this.saveStorage();

        this.updateFavoriteButton();

    },

    updateFavoriteButton(){

        const button =

            document.getElementById("favorite-button");

        if(!button){

            return;

        }

        const question =

            this.getQuestion();

        if(

            this.state.favoriteQuestions.includes(

                question.id

            )

        ){

            button.textContent = "★ Favorit";

            button.classList.add(

                "favorite-active"

            );

        }else{

            button.textContent = "☆ Favorit";

            button.classList.remove(

                "favorite-active"

            );

        }

    },
       /* ==========================================
       Statistik
    ========================================== */

    updateStatistics(){

        const answered =
            document.getElementById("stats-answered");

        const correct =
            document.getElementById("stats-correct");

        const percent =
            document.getElementById("stats-percent");

        if(answered){

            answered.textContent =
                this.state.answered;

        }

        if(correct){

            correct.textContent =
                this.state.score;

        }

        if(percent){

            const value =

                this.state.answered === 0

                ? 0

                : (

                    this.state.score /

                    this.state.answered

                ) * 100;

            percent.textContent =
                value.toFixed(1) + " %";

        }

    },

    /* ==========================================
       Timer
    ========================================== */

    startTimer(){

        clearInterval(this.state.timer);

        if(this.state.timerDuration===0){

            const timer =
                document.getElementById("timer");

            if(timer){

                timer.textContent="∞";

            }

            return;

        }

        this.state.timerRemaining =
            this.state.timerDuration;

        const timer =
            document.getElementById("timer");

        timer.textContent =
            "⏱ " + this.state.timerRemaining;

        this.state.timer =

            setInterval(()=>{

                this.state.timerRemaining--;

                timer.textContent =

                    "⏱ " +

                    this.state.timerRemaining;

                if(

                    this.state.timerRemaining<=0

                ){

                    clearInterval(

                        this.state.timer

                    );

                    this.nextQuestion();

                }

            },1000);

    },
         /* ==========================================
       Ergebnis
    ========================================== */

  finishQuiz() {

    clearInterval(this.state.timer);

    const totalQuestions =
        this.state.questions.length;

    const percent =
        totalQuestions === 0
            ? 0
            : (this.state.score / totalQuestions) * 100;

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const resultPage =
        document.getElementById("result-page");

    if(resultPage) {

        resultPage.classList.add("active");

    }

    const resultPercent =
        document.getElementById("result-percent");

    if(resultPercent) {

        resultPercent.textContent =
            percent.toFixed(1) + " %";

    }

    const resultScore =
        document.getElementById("result-score");

    if(resultScore) {

        resultScore.textContent =
            `${this.state.score} von ${totalQuestions} richtig`;

    }

    const resultGrade =
        document.getElementById("result-grade");

    if(resultGrade) {

        resultGrade.textContent =
            this.calculateGrade(percent);

    }

    const status =
        document.getElementById("result-status");

    if(status) {

        if(percent >= 50) {

            status.textContent =
                "✅ Bestanden";

            status.className =
                "result-pass";

        } else {

            status.textContent =
                "❌ Nicht bestanden";

            status.className =
                "result-fail";

        }

    }

},
calculateGrade(percent) {

    if(percent >= 92) {

        return "Note 1 – sehr gut";

    }

    if(percent >= 81) {

        return "Note 2 – gut";

    }

    if(percent >= 67) {

        return "Note 3 – befriedigend";

    }

    if(percent >= 50) {

        return "Note 4 – ausreichend";

    }

    if(percent >= 30) {

        return "Note 5 – mangelhaft";

    }

    return "Note 6 – ungenügend";

},

    calculateGrade(percent){

        if(percent>=92) return "Note 1,0";
        if(percent>=88) return "Note 1,3";
        if(percent>=84) return "Note 1,7";
        if(percent>=80) return "Note 2,0";
        if(percent>=76) return "Note 2,3";
        if(percent>=72) return "Note 2,7";
        if(percent>=68) return "Note 3,0";
        if(percent>=64) return "Note 3,3";
        if(percent>=60) return "Note 3,7";
        if(percent>=50) return "Note 4,0";

        return "Note 5,0";

    }

};

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        Quiz.init();

    }

);