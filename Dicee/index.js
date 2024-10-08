rollDice();

function rollDice(){
    var dice1 = getRandomImage()
    var dice2 = getRandomImage()

    if(dice1 > dice2){
        var winText = "Player 1 wins!"
    } else {
        if(dice1 < dice2){
            var winText = "Player 2 wins!"
        }else {
            var winText = "Draw!"
        }
    }

    document.querySelector("h1").textContent = winText;
    document.querySelector("#player1die").setAttribute("src","./images/dice" + dice1 + ".png");
    document.querySelector("#player2die").setAttribute("src","./images/dice" + dice2 + ".png");

}

function getRandomImage(){
    var imageNumber = Math.floor(Math.random() * 6) + 1;
    return imageNumber;
}

