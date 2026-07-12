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

    const navigationButtons =
        document.querySelectorAll(".nav-button");

    /* ==========================================
       Seite anzeigen
    ========================================== */

    function showPage(pageId) {

        pages.forEach(page => {

            page.classList.remove("active");

        });

        navigationButtons.forEach(button => {

            button.classList.remove("active");

        });

        const selectedPage =
            document.getElementById(pageId);

        if (selectedPage) {

            selectedPage.classList.add("active");

        }

        const activeNavigationButton =
            document.querySelector(
                `.nav-button[data-page="${pageId}"]`
            );

        if (activeNavigationButton) {

            activeNavigationButton.classList.add("active");

        }

    }

    /* ==========================================
       Navigation
    ========================================== */

    navigationButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const pageId =
                    button.dataset.page;

                showPage(pageId);

                if (
                    pageId === "lernen" &&
                    typeof Quiz !== "undefined"
                ) {

                    Quiz.showLearningSetup();

                }

            }
        );

    });

    /* ==========================================
       Weiterlernen
    ========================================== */

    const continueLearningButton =
        document.getElementById(
            "continue-learning"
        );

    if (continueLearningButton) {

        continueLearningButton.addEventListener(
            "click",
            () => {

                if (
                    typeof Quiz !== "undefined"
                ) {

                    Quiz.showLearningSetup();

                } else {

                    showPage("lernen");

                }

            }
        );

    }

    /* ==========================================
       Zurück zum Dashboard
    ========================================== */

    const backDashboardButton =
        document.getElementById(
            "back-dashboard"
        );

    if (backDashboardButton) {

        backDashboardButton.addEventListener(
            "click",
            () => {

                showPage("dashboard");

            }
        );

    }

    /* ==========================================
       Prüfung starten
    ========================================== */

    const startExamButton =
        document.getElementById(
            "start-exam"
        );

    if (startExamButton) {

        startExamButton.addEventListener(
            "click",
            () => {

                alert(
                    "Der Prüfungsmodus wird noch separat eingerichtet."
                );

            }
        );

    }

    /* ==========================================
       Startseite
    ========================================== */

    showPage("dashboard");

});