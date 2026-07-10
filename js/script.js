/*
=========================================================
PflegeQuiz
script.js
Navigation
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const pages =
        document.querySelectorAll(".page");

    const buttons =
        document.querySelectorAll(".nav-button");

    function showPage(pageId){

        pages.forEach(page=>{

            page.classList.remove("active");

        });

        buttons.forEach(button=>{

            button.classList.remove("active");

        });

        const page =
            document.getElementById(pageId);

        if(page){

            page.classList.add("active");

        }

        const activeButton =
            document.querySelector(

                `.nav-button[data-page="${pageId}"]`

            );

        if(activeButton){

            activeButton.classList.add("active");

        }

    }

    buttons.forEach(button=>{

        button.addEventListener(

            "click",

            ()=>{

                const page=

                    button.dataset.page;

                showPage(page);

            }

        );

    });

    /* ==========================
       Dashboard Buttons
    ========================== */

    const continueLearning =
        document.getElementById(
            "continue-learning"
        );

    if(continueLearning){

        continueLearning.addEventListener(

            "click",

            ()=>{

                showPage("lernen");

            }

        );

    }

    const dashboardButton =
        document.getElementById(
            "back-dashboard"
        );

    if(dashboardButton){

        dashboardButton.addEventListener(

            "click",

            ()=>{

                showPage("dashboard");

            }

        );

    }

    const restartQuiz =
        document.getElementById(
            "restart-quiz"
        );

    if(restartQuiz){

        restartQuiz.addEventListener(

            "click",

            ()=>{

                showPage("lernen");

                if(typeof Quiz!=="undefined"){

                    Quiz.restart();

                }

            }

        );

    }

    const repeatWrong =
        document.getElementById(
            "repeat-wrong"
        );

    if(repeatWrong){

        repeatWrong.addEventListener(

            "click",

            ()=>{

                alert(
                    "Diese Funktion folgt in Version 1.1."
                );

            }

        );

    }

    const startExam =
        document.getElementById(
            "start-exam"
        );

    if(startExam){

        startExam.addEventListener(

            "click",

            ()=>{

                showPage("lernen");

                if(typeof Quiz!=="undefined"){

                    Quiz.restart();

                }

            }

        );

    }

    showPage("dashboard");

});