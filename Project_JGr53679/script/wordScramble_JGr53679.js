// game vars
var selection;
var letters;
var secretWord;
var points = 0;
var timerInterval;

// BUTTON LISTENERS
    // START THE GAME
document.getElementById('startGame').addEventListener("click", function() {
        // choose first word
    chooseWord();
    scrambleLetters(letters);
        // set up buttons
    document.getElementById("startButton").style.display = "none";
    document.getElementById("playAgain").style.visibility = "hidden";
    document.getElementById("submitGuess").disabled = false;
    document.getElementById("shuffle").disabled = false;

    timerInterval = setInterval(timer, 1000);
});

    // CHECK GUESS
document.getElementById("submitGuess").addEventListener("click", function() {
    guessWord();
});

    // SHUFFLE LETTERS ON BUTTON CLICK
document.getElementById("shuffle").addEventListener("click", function() {
    scrambleLetters(letters);
});

    // PLAY AGAIN / RESET
document.getElementById("playAgain").addEventListener("click", function() {
    //printScore(document.getElementById("name").value, points);
    chooseWord();
    scrambleLetters(letters);

    points = 0;
    //document.getElementById("victoryText").style.visibility = "visible";
    //document.getElementById("victoryText").innerText = '';
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("playAgain").style.visibility = "hidden";
    document.getElementById("submitGuess").disabled = false;
    document.getElementById("shuffle").disabled = false;
    document.getElementById("guess").value = '';
        // START THE CLOCK
    secondsLeft = 151;
    timerInterval = setInterval(timer, 1000);
    timer();
});

// SAVE SCORE WITHOUT STARTING GAME AGAIN
document.getElementById("saveScore").addEventListener("click", function() {
    printScore(document.getElementById("name").value, points);
    document.getElementById("nameInput").style.display = "none";
});


/*********************************************************/

// CHOOSE RANDOM 7 LETTER WORD
function chooseWord() {
    var selection = Math.floor(Math.random() * wordList.length) + 1;
    letters = wordList[selection];
    
    secretWord = '';
    for (i=0; i < 7; i++) {
        secretWord = secretWord + wordList[selection][i];
    }
}

/*********************************************************/
// SCRAMBLE LETTERS IN SECRET WORD
function scrambleLetters(word) {
    // iterate through all 7 letter positions (0-7)
    let currentLetter = 0
    while (currentLetter != 6) {
        randomLetter = Math.floor(Math.random() * 7);

        // make sure curent letter/index isn't chosen to swap with
        if (randomLetter == currentLetter) {
            randomLetter = Math.floor(Math.random() * 7);
        } else if (randomLetter !== currentLetter) {
            //swap both letters
            [word[currentLetter], word[randomLetter]] = [word[randomLetter], word[currentLetter]];
        }

        currentLetter++;
    }

    // display shuffled letters
    let shuffledLetters = '';
    for (i=0; i < 7; i++) {
        shuffledLetters = shuffledLetters + word[i] + '  ';
    }

    var printOut = document.getElementById("lettersTarget");
    printOut.innerText = shuffledLetters.toUpperCase();
}

/*********************************************************/
// CHECK PLAYER GUESS
function guessWord() {
    var userGuess = document.getElementById('guess');
        // CORRECT
    if (userGuess.value.toLowerCase() == secretWord) {
        let audio = new Audio("./audio/zapsplat_multimedia_correct_ping_tone_001_68778.mp3");   
        audio.play();

        document.getElementById("guess").value = '';

        points++;
        document.getElementById("showPoints").innerText = points;
            // get new secret word
        chooseWord();
        scrambleLetters(letters);


        // WRONG
    } else {    // userGuess.value !== secretWord
        document.getElementById("guess").value = '';
        let audio = new Audio("./audio/zapsplat_multimedia_alert_error_002_26393.mp3");   
        audio.play();
            // make sure points don't go below zero
        if (points == 0) {
            points = 0;
        } else {
            points--;
            document.getElementById("showPoints").innerText = points;
        }
    }
}

/*********************************************************/

