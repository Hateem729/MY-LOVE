/* =========================================
   MY LOVE — BIRTHDAY WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   PAGE SYSTEM
========================================= */

/*
    This function changes the visible page.

    We don't scroll between pages.
    Instead, we hide the current page
    and show the next one.
*/

function goToPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    /*
        Hide every page.
    */

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    /*
        Find the page we want.
    */

    const nextPage =
        document.getElementById(`page${pageNumber}`);


    /*
        Show the new page.
    */

    if (nextPage) {

        nextPage.classList.add("active");

    }

}


/* =========================================
   PAGE 1
   "IS TODAY YOUR BIRTHDAY?"
========================================= */


/*
    Counts how many times
    NO has been clicked.
*/

let birthdayNoClicks = 0;


/*
    User clicks YES.
*/

function birthdayYes() {

    goToPage(2);

    startConfetti();

    const music =
        document.getElementById("birthdayMusic");

    if (music) {
        music.play().catch(function() {
            console.log("Music playback was blocked.");
        });
    }



/*
    User clicks NO.
*/

function birthdayNo() {

    birthdayNoClicks++;


    /*
        Find the YES button.
    */

    const yesButton =
        document.getElementById("yesBirthday");


    /*
        Find the NO button.
    */

    const noButton =
        document.getElementById("noBirthday");


    /*
        Find the little message.
    */

    const hint =
        document.getElementById("birthdayHint");


    /*
        Make YES bigger every time
        NO is clicked.
    */

    const yesScale =
        1 + (birthdayNoClicks * 0.25);


    yesButton.style.transform =
        `scale(${yesScale})`;


    /*
        Make sure YES stays above
        the other button.
    */

    yesButton.style.zIndex = "5";


    /*
        Funny messages.
    */

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
        Keep showing the final message
        instead of going outside the array.
    */

    const messageIndex =
        Math.min(
            birthdayNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];


    /*
        Slowly make the NO button smaller.
    */

    const noScale =
        Math.max(
            0.65,
            1 - (birthdayNoClicks * 0.08)
        );


    noButton.style.transform =
        `scale(${noScale})`;

}


/* =========================================
   PAGE 3
   "DO YOU LOVE ME?"
========================================= */


/*
    Counts how many times
    NO is selected.
*/

let loveNoClicks = 0;


/*
    User finally clicks YES.
*/

function loveYes() {

    /*
        Go to the final page.
    */

    goToPage(4);


    /*
        Create another celebration.
    */

    createConfettiBurst();

}


/*
    User clicks NO.
*/

function loveNo() {

    loveNoClicks++;


    /*
        Find the YES button.
    */

    const yesButton =
        document.querySelector(".yes-love-btn");


    /*
        Find the message.
    */

    const hint =
        document.getElementById("loveHint");


    /*
        Messages that appear
        when NO is clicked.
    */

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
        Pick the correct message.
    */

    const messageIndex =
        Math.min(
            loveNoClicks - 1,
            messages.length - 1
        );


    hint.textContent =
        messages[messageIndex];


    /*
        Make YES gradually bigger.
    */

    const yesScale =
        1 + (loveNoClicks * 0.12);


    yesButton.style.transform =
        `scale(${Math.min(yesScale, 1.8)})`;

}


/* =========================================
   CONFETTI SYSTEM
========================================= */


/*
    Prevent starting multiple
    continuous confetti systems.
*/

let confettiStarted = false;


/*
    Starts continuous confetti.
*/

function startConfetti() {

    /*
        Don't create multiple
        setInterval loops.
    */

    if (confettiStarted) {

        return;

    }


    confettiStarted = true;


    /*
        Find the confetti container.
    */

    const container =
        document.getElementById(
            "confetti-container"
        );


    /*
        Create one piece of confetti.
    */

    function createConfetti() {

        const confetti =
            document.createElement("div");


        /*
            Add our CSS class.
        */

        confetti.classList.add("confetti");


        /*
            Soft blue / purple colors.
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
            Pick a random color.
        */

        confetti.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() * colors.length
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
            (Math.random() * 4 + 4) + "s";


        /*
            Random width.
        */

        confetti.style.width =
            (Math.random() * 7 + 5) + "px";


        /*
            Random height.
        */

        confetti.style.height =
            (Math.random() * 10 + 8) + "px";


        /*
            Random starting rotation.
        */

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /*
            Put confetti on the screen.
        */

        container.appendChild(confetti);


        /*
            Remove it after it falls.
        */

        setTimeout(function() {

            confetti.remove();

        }, 9000);

    }


    /*
        Keep creating confetti continuously.
    */

    setInterval(
        createConfetti,
        150
    );


    /*
        Create a large initial celebration.
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


/* =========================================
   EXTRA CONFETTI BURST
========================================= */


/*
    Used when he finally says YES
    on Page 3.
*/

function createConfettiBurst() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    /*
        Create 100 pieces quickly.
    */

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        setTimeout(function() {

            const confetti =
                document.createElement("div");


            confetti.classList.add(
                "confetti"
            );


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


            /*
                Spread the confetti
                across the screen.
            */

            confetti.style.left =
                Math.random() * 100 + "vw";


            confetti.style.animationDuration =
                (Math.random() * 3 + 3) + "s";


            confetti.style.width =
                (Math.random() * 8 + 5) + "px";


            confetti.style.height =
                (Math.random() * 12 + 8) + "px";


            container.appendChild(
                confetti
            );


            setTimeout(function() {

                confetti.remove();

            }, 7000);


        }, i * 15);

    }

}
