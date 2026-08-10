```javascript
/* =====================================================
   💙 MY LOVE — BIRTHDAY WEBSITE
   Complete Final script.js
   ===================================================== */


/* =====================================================
   🎀 PAGE NAVIGATION
   ===================================================== */

/*
   Shows one page at a time.

   Page 1 → Page 2 → Page 3 → Page 4

   The website does NOT scroll between pages.
*/

function goToPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    /* Hide every page */

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    /* Find the requested page */

    const nextPage = document.getElementById(
        "page" + pageNumber
    );


    /* Show the requested page */

    if (nextPage) {

        nextPage.classList.add("active");

    }

}


/* =====================================================
   🎂 PAGE 1
   "IS TODAY YOUR BIRTHDAY?"
   ===================================================== */


/*
   Number of times NO has been clicked.
*/

let birthdayNoClicks = 0;


/*
   YES — PAGE 1
*/

function birthdayYes() {

    /* Move to Page 2 */

    goToPage(2);


    /* Start continuous confetti */

    startConfetti();


    /* ================================================
       🎵 START YOUR MUSIC
       ================================================ */

    const music = document.getElementById(
        "birthdayMusic"
    );


    if (music) {

        /*
           Set a comfortable volume.
           0 = silent
           1 = maximum
        */

        music.volume = 0.7;


        /*
           Start the music.

           This happens after the user clicks
           YES, which is important because
           browsers usually block audio that
           starts without user interaction.
        */

        const playPromise = music.play();


        /*
           Handle browsers that return
           a Promise from play().
        */

        if (playPromise !== undefined) {

            playPromise.catch(function(error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

        }

    }

}


/*
   NO — PAGE 1
*/

function birthdayNo() {

    birthdayNoClicks++;


    /* Get buttons */

    const yesButton =
        document.getElementById(
            "yesBirthday"
        );


    const noButton =
        document.getElementById(
            "noBirthday"
        );


    /* Get hint text */

    const hint =
        document.getElementById(
            "birthdayHint"
        );


    /* ================================================
       💙 MAKE YES BIGGER
       ================================================ */

    const yesScale =
        1 + (birthdayNoClicks * 0.25);


    yesButton.style.transform =
        "scale(" + yesScale + ")";


    /*
       Keep YES above the other button.
    */

    yesButton.style.zIndex = "10";


    /* ================================================
       💜 MAKE NO SMALLER
       ================================================ */

    const noScale =
        Math.max(
            0.65,
            1 - (birthdayNoClicks * 0.08)
        );


    noButton.style.transform =
        "scale(" + noScale + ")";


    /* ================================================
       🥺 FUNNY MESSAGES
       ================================================ */

    const messages = [

        "Are you sure? 👀",

        "Motta... think again. 😭",

        "That doesn't seem right... 💙",

        "The YES button is waiting for you. 😂",

        "It's getting bigger... 👀",

        "Okay, you leave me no choice. 😭💜",

        "JUST SAY YES ALREADY! 😂",

        "You know the answer is YES. 🥺💙"

    ];


    /*
       Stop the array from going
       beyond its last message.
    */

    const messageIndex =
        Math.min(
            birthdayNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];

}


/* =====================================================
   🎉 PAGE 2
   BIRTHDAY CELEBRATION
   ===================================================== */

/*
   The CONTINUE button in index.html uses:

       onclick="goToPage(3)"

   So no separate function is needed here.
*/


/* =====================================================
   💜 PAGE 3
   "DO YOU LOVE ME?"
   ===================================================== */


/*
   Number of times NO is clicked.
*/

let loveNoClicks = 0;


/*
   YES — PAGE 3
*/

function loveYes() {

    /*
       Go to the final page.
    */

    goToPage(4);


    /*
       Create a big celebration.
    */

    createConfettiBurst();

}


/*
   NO — PAGE 3
*/

function loveNo() {

    loveNoClicks++;


    /* Get YES button */

    const yesButton =
        document.querySelector(
            ".yes-love-btn"
        );


    /* Get response message */

    const hint =
        document.getElementById(
            "loveHint"
        );


    /* ================================================
       💙 RESPONSES TO NO
       ================================================ */

    const messages = [

        "Hmm... try again. 🥺",

        "I don't think you meant that. 😭",

        "Wrong answer, my love. 💜",

        "You have one more chance... 👀",

        "Motta pleaseeeee. 🥺💙",

        "I KNOW YOU LOVE ME. 😂💜",

        "I'm waiting for the correct answer... 💙",

        "YES is looking very beautiful right now. 😭💜"

    ];


    /*
       Select message.
    */

    const messageIndex =
        Math.min(
            loveNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];


    /* ================================================
       💜 MAKE YES BIGGER
       ================================================ */

    const yesScale =
        Math.min(
            1 + (loveNoClicks * 0.12),
            1.8
        );


    yesButton.style.transform =
        "scale(" + yesScale + ")";


    /*
       Keep YES above NO.
    */

    yesButton.style.zIndex = "10";

}


/* =====================================================
   🎊 CONFETTI SYSTEM
   ===================================================== */


/*
   Prevent multiple continuous
   confetti loops.
*/

let confettiStarted = false;


/*
   Start continuous confetti.
*/

function startConfetti() {

    /*
       Don't start it twice.
    */

    if (confettiStarted) {

        return;

    }


    confettiStarted = true;


    /*
       Find confetti container.
    */

    const container =
        document.getElementById(
            "confetti-container"
        );


    /*
       Safety check.
    */

    if (!container) {

        return;

    }


    /*
       Create one confetti piece.
    */

    function createConfetti() {

        const confetti =
            document.createElement(
                "div"
            );


        /*
           CSS class.
        */

        confetti.classList.add(
            "confetti"
        );


        /*
           Your soft blue/purple theme.
        */

        const colors = [

            "#9ddcff",

            "#b9a1ff",

            "#d9c7ff",

            "#bfeeff",

            "#ffffff",

            "#8fbfff"

        ];


        /*
           Random color.
        */

        confetti.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /*
           Random horizontal position.
        */

        confetti.style.left =
            Math.random() * 100 + "vw";


        /*
           Random falling speed.
        */

        confetti.style.animationDuration =
            (
                Math.random() * 4 + 4
            ) + "s";


        /*
           Random width.
        */

        confetti.style.width =
            (
                Math.random() * 7 + 5
            ) + "px";


        /*
           Random height.
        */

        confetti.style.height =
            (
                Math.random() * 10 + 8
            ) + "px";


        /*
           Random rotation.
        */

        confetti.style.transform =
            "rotate(" +
            (
                Math.random() * 360
            ) +
            "deg)";


        /*
           Add to page.
        */

        container.appendChild(
            confetti
        );


        /*
           Remove after animation.
        */

        setTimeout(function() {

            confetti.remove();

        }, 9000);

    }


    /*
       Keep creating confetti.
    */

    setInterval(
        createConfetti,
        150
    );


    /*
       Create a large celebration
       when Page 2 opens.
    */

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        setTimeout(
            createConfetti,
            i * 30
        );

    }

}


/* =====================================================
   🎉 FINAL CONFETTI BURST
   ===================================================== */


/*
   This happens when he finally
   clicks YES on Page 3.
*/

function createConfettiBurst() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    /*
       Safety check.
    */

    if (!container) {

        return;

    }


    /*
       Create 100 pieces.
    */

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        setTimeout(function() {


            /*
               Create confetti.
            */

            const confetti =
                document.createElement(
                    "div"
                );


            confetti.classList.add(
                "confetti"
            );


            /*
               Soft blue/purple colors.
            */

            const colors = [

                "#9ddcff",

                "#b9a1ff",

                "#d9c7ff",

                "#bfeeff",

                "#ffffff",

                "#8fbfff"

            ];


            /*
               Random color.
            */

            confetti.style.backgroundColor =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            /*
               Random horizontal position.
            */

            confetti.style.left =
                Math.random() * 100 + "vw";


            /*
               Random speed.
            */

            confetti.style.animationDuration =
                (
                    Math.random() * 3 + 3
                ) + "s";


            /*
               Random size.
            */

            confetti.style.width =
                (
                    Math.random() * 8 + 5
                ) + "px";


            confetti.style.height =
                (
                    Math.random() * 12 + 8
                ) + "px";


            /*
               Add it.
            */

            container.appendChild(
                confetti
            );


            /*
               Remove it later.
            */

            setTimeout(function() {

                confetti.remove();

            }, 7000);


        }, i * 15);

    }

}


/* =====================================================
   🎵 MUSIC HELPER
   ===================================================== */


/*
   This function can be used later
   if you want a music button.

   It is not required right now,
   but it makes the music system
   easier to control.
*/

function toggleMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (!music) {

        return;

    }


    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


/* =====================================================
   🌸 PAGE LOAD
   ===================================================== */


/*
   When the website opens,
   make sure Page 1 is displayed.
*/

document.addEventListener(
    "DOMContentLoaded",
    function() {

        goToPage(1);

    }
);
```
