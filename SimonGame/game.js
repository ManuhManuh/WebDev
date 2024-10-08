var gameStarted = false;
var gamePattern = [];
var userPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;

$(document).on("keydown",function(event){
    if (!gameStarted){
        console.log("Game started");
        gameStarted = true;
        nextSequence();
    }
});

function nextSequence(){
    if(gameStarted){
        level++;
        clearPlayerInput();
        $("h1").text("Level "+ level);
        var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
        gamePattern.push(randomChosenColor);
        console.log("Simon: " + gamePattern);
        var simonButton = $("#"+ randomChosenColor);
        simonButton.fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
}

$(".btn").click(function(event){
    userPattern.push(event.target.id);
    playSound(event.target.id);
    animatedPress(event.target.id);
    validatePlayerInput();
});

function validatePlayerInput(){
    console.log("Player: " + userPattern);
    var index = userPattern.length - 1;
    console.log("Checking index: " + index);
    if(userPattern[index] === gamePattern[index]){
        if(userPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();;
              }, 1000);
            
        } 
    } else {
        gameOver();
    } 
}

function clearPlayerInput(){
    userPattern.length = 0;
}

function animatedPress(name){
    var userButton = $("#"+ name);
    userButton.addClass("pressed");
    setTimeout(function() {
        userButton.removeClass("pressed");
      }, 100);

}

function playSound(name){
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}

function gameOver(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gameStarted = false;
    gamePattern.length = 0;
    userPattern.length = 0;
    level = 0;
}


