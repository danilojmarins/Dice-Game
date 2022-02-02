function randomDiceNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let imgString = "images/dice" + randomNumber + ".png" 

    return imgString;
}

function replaceImgSrc() {
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceNumber());
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber());

    let player1score = document.querySelectorAll("img")[0].getAttribute("src").charAt(11);
    let player2score = document.querySelectorAll("img")[1].getAttribute("src").charAt(11);

    if (player1score > player2score) {
        document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
    } else if (player2score > player1score) {
        document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}

document.querySelector("body").onload = replaceImgSrc();