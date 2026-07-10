/*
=========================================================
PflegeQuiz
storage.js
=========================================================
*/

const Storage = {

    KEY: "pflegequiz",

    load() {

        const data =
            localStorage.getItem(this.KEY);

        if (!data) {

            return {

                score: 0,
                answered: 0,
                wrongQuestions: [],
                favoriteQuestions: []

            };

        }

        return JSON.parse(data);

    },

    save(data) {

        localStorage.setItem(

            this.KEY,

            JSON.stringify(data)

        );

    },

    clear() {

        localStorage.removeItem(

            this.KEY

        );

    },

    getFavorites() {

        return this.load().favoriteQuestions;

    },

    setFavorites(favorites) {

        const data = this.load();

        data.favoriteQuestions = favorites;

        this.save(data);

    },

    getWrongQuestions() {

        return this.load().wrongQuestions;

    },

    setWrongQuestions(list) {

        const data = this.load();

        data.wrongQuestions = list;

        this.save(data);

    },

    updateStatistics(score, answered) {

        const data = this.load();

        data.score = score;

        data.answered = answered;

        this.save(data);

    },

    getStatistics() {

        const data = this.load();

        return {

            score: data.score,

            answered: data.answered,

            percent:

                data.answered > 0

                ?

                (

                    data.score /

                    data.answered

                ) * 100

                :

                0

        };

    }

};