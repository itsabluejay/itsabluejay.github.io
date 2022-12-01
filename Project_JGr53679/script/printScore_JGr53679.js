function printScore(name, score) {

    if (score >= parseInt(document.getElementById("score0").innerText)) {
        [[document.getElementById("name4").innerText], [document.getElementById("score4").innerText]] = [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]];
        [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]] = [[document.getElementById("name2").innerText], [document.getElementById("score2").innerText]];
        [[document.getElementById("name2").innerText], [document.getElementById("score2").innerText]] = [[document.getElementById("name1").innerText], [document.getElementById("score1").innerText]];
        [[document.getElementById("name1").innerText], [document.getElementById("score1").innerText]] = [[document.getElementById("name0").innerText], [document.getElementById("score0").innerText]];

        document.getElementById("name0").innerText = name;
        document.getElementById("score0").innerText = score;

    } else if (score >= parseInt(document.getElementById("score1").innerText)) {
        [[document.getElementById("name4").innerText], [document.getElementById("score4").innerText]] = [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]];
        [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]] = [[document.getElementById("name2").innerText], [document.getElementById("score2").innerText]];
        [[document.getElementById("name2").innerText], [document.getElementById("score2").innerText]] = [[document.getElementById("name1").innerText], [document.getElementById("score1").innerText]];

        document.getElementById("name1").innerText = name;
        document.getElementById("score1").innerText = score;

    } else if (score >= parseInt(document.getElementById("score2").innerText)) {
        [[document.getElementById("name4").innerText], [document.getElementById("score4").innerText]] = [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]];
        [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]] = [[document.getElementById("name2").innerText], [document.getElementById("score2").innerText]];
        
        document.getElementById("name2").innerText = name;
        document.getElementById("score2").innerText = score;
        
    } else if (score >= parseInt(document.getElementById("score3").innerText)) {
        [[document.getElementById("name4").innerText], [document.getElementById("score4").innerText]] = [[document.getElementById("name3").innerText], [document.getElementById("score3").innerText]];
        
        document.getElementById("name3").innerText = name;
        document.getElementById("score3").innerText = score;
        
    } else if (score >= parseInt(document.getElementById("score4").innerText)) {

        document.getElementById("name4").innerText = name;
        document.getElementById("score4").innerText = score;
    }
    document.getElementById("nameInput").style.display = "none";
}