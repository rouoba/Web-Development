var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var gameStarted = false;

$(document).keypress(function() {
    if(gameStarted === false) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
})



$(".btn").click(function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var lastAnswer = userClickedPattern.length -1;
    checkAnswer(lastAnswer);
})

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut("fast").fadeIn("fast");
    playSound(randomChosenColor); 
}
      
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play(); 
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        // console.log("Success");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence(), 1000);
        }
    }
    else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $('body').removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    gameStarted = false;
}