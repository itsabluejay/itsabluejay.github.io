var secondsLeft = 151;

function timer() {
    if (secondsLeft > 0) {
        secondsLeft--;
    } else if (secondsLeft >= 0) {
        let audio = new Audio("./audio/zapsplat_multimedia_ui_glassy_notification_alert_002_91301.mp3");   
        audio.play();
        document.getElementById("lettersTarget").innerText = "Time's up! Your score was " + points + ".";
        document.getElementById("playAgain").style.visibility = "visible";
        document.getElementById("submitGuess").disabled = true;
        document.getElementById("shuffle").disabled = true;
        document.getElementById("nameInput").style.display = "unset";
        

        clearInterval(timerInterval);
    }
    document.getElementById("showTimer").innerHTML = secondsLeft + " secs";
}

