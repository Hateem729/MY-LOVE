```javascript
/* ==========================================
   💙 MY LOVE - FINAL SCRIPT.JS
   ========================================== */


/* ==========================================
   PAGE NAVIGATION
   ========================================== */

function goToPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(
        "page" + pageNumber
    );

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}


/* ==========================================
   🎂 PAGE 1
   BIRTHDAY QUESTION
   ========================================== */

let birthdayNoClicks = 0;


function birthdayNo() {

    birthdayNoClicks++;

    const yesButton =
        document.getElementById("yesBirthday");

    const noButton =
        document.getElementById("noBirthday");

    const hint =
        document.getElementById("birthdayHint");


    /* Make YES bigger */

    const newSize =
        1 + (birthdayNoClicks * 0.25);

    yesButton.style.transform =
        "scale(" + newSize + ")";


    /* Keep YES above everything */

    yesButton.style.position = "relative";
    yesButton.style.zIndex = "100";


    /* Make NO slightly smaller */

    const noSize =
        Math.max(
            0.65,
            1 - (birthdayNoClicks * 0.08)
        );

    noButton.style.transform =
        "scale(" + noSize + ")";


    /* Funny messages */

    const messages = [

        "Are you sure? 👀",

        "Motta... think again. 😭",

        "Try again, my love. 💙",

        "You know the answer is YES. 🥺",

        "The YES button is getting bigger! 😂",

        "Why are you doing this to me? 😭💜",

        "JUST SAY YES! 😂",

        "Okay... the YES button wins. 💙"

    ];


    const messageIndex =
        Math.min(
            birthdayNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];

}


/* ==========================================
   💙 PAGE 1 YES
   ========================================== */

function birthdayYes() {

    /* Go to Page 2 */

    goToPage(2);


    /* Start confetti */

    startConfetti();


    /* Start music */

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (music) {

        music.volume = 0.7;

        music.play().catch(function(error) {

            console.log(
                "Music could not start:",
                error
            );

        });

    }

}


/* ==========================================
   💜 PAGE 3
   DO YOU LOVE ME?
   ========================================== */

let loveNoClicks = 0;


function loveNo() {

    loveNoClicks++;


    const yesButton =
        document.querySelector(
            ".yes-love-btn"
        );


    const hint =
        document.getElementById(
            "loveHint"
        );


    /* Make YES bigger */

    const newSize =
        Math.min(
            1 + (loveNoClicks * 0.15),
            2
        );


    yesButton.style.transform =
        "scale(" + newSize + ")";


    yesButton.style.position =
        "relative";


    yesButton.style.zIndex =
        "100";


    /* Messages */

    const messages = [

        "Hmm... try again. 🥺",

        "I don't believe you. 😭",

        "Wrong answer, my love. 💜",

        "Are you really sure? 👀",

        "Motta pleaseeee. 🥺",

        "I KNOW YOU LOVE ME! 😂💙",

        "The correct answer is YES. 💜",

        "I'll wait... 🥺💙"

    ];


    const messageIndex =
        Math.min(
            loveNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];

}


/* ==========================================
   💜 PAGE 3 YES
   ========================================== */

function loveYes() {

    goToPage(4);

    createConfettiBurst();

}


/* ==========================================
   🎉 CONTINUOUS CONFETTI
   ========================================== */

let confettiStarted = false;


function startConfetti() {

    if (confettiStarted) {
        return;
    }

    confettiStarted = true;


    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {
        return;
    }


    setInterval(function() {

        createConfettiPiece();

    }, 180);


    /* Initial celebration */

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        setTimeout(function() {

            createConfettiPiece();

        }, i * 30);

    }

}


/* ==========================================
   🎊 CREATE ONE CONFETTI PIECE
   ========================================== */

function createConfettiPiece() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {
        return;
    }


    const confetti =
        document.createElement("div");


    confetti.className =
        "confetti";


    const colors = [

        "#9ddcff",
        "#b9a1ff",
        "#d9c7ff",
        "#bfeeff",
        "#ffffff",
        "#8fbfff"

    ];


    confetti.style.backgroundColor =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    confetti.style.left =
        Math.random() * 100 + "vw";


    confetti.style.width =
        Math.random() * 7 + 5 + "px";


    confetti.style.height =
        Math.random() * 10 + 8 + "px";


    confetti.style.animationDuration =
        Math.random() * 4 + 4 + "s";


    container.appendChild(
        confetti
    );


    setTimeout(function() {

        confetti.remove();

    }, 9000);

}


/* ==========================================
   🎊 BIG FINAL CONFETTI
   ========================================== */

function createConfettiBurst() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        setTimeout(function() {

            createConfettiPiece();

        }, i * 15);

    }

}


/* ==========================================
   🌸 PAGE LOAD
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        goToPage(1);

    }
);
```
