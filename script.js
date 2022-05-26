var homePage = document.getElementById("home-page");
var startButton = document.getElementById("start-button");
var highscoreButton = document.getElementById("highscore")
var questionButtons = document.getElementById("questionButtons");

var rightAnswer = document.getElementsByClassName("right-answer");
var wrongAnswer = document.getElementsByClassName("wrong-answer");

var score = 1;

// setting up the question page
var correctText = document.getElementById("correct-text")
var wrongText = document.getElementById("wrong-text");

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");

// highscore page
var enterName = document.getElementById("enter-name");

// hiding the question and answertext page and highscore page
correctText.style.display = "none";
wrongText.style.display = "none";

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";

enterName.style.display = "none";

// answertext and score changing
for (var rightAnswer of rightAnswer) {
rightAnswer.addEventListener("click", function () {
    wrongText.style.display = "none";
    correctText.style.display = "block";
    score ++;
});
}

for (var wrongAnswer of wrongAnswer) {
wrongAnswer.addEventListener("click", function () {
    correctText.style.display = "none";
    wrongText.style.display = "block";
    score --;
});
}


// starting the quesiton page
startButton.addEventListener("click", function() {
    homePage.style.display = "none";
    question1.style.display = "block";
    startTimer();
})

// making the buttons on click go to the next question
question1.addEventListener("click", function() {
    homePage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "block";
})

question2.addEventListener("click", function() {
    homePage.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "block";
})

question3.addEventListener("click", function() {
    homePage.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "block";
})

question4.addEventListener("click", function() {
    homePage.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "block";
})

question5.addEventListener("click", function() {
    homePage.style.display = "none";
    question5.style.display = "none";
    enterName.style.display = "block";
})


highscoreButton.addEventListener("click", function() {
    homePage.style.display = "none";
})

// this section shows where you can enter a username for your score
document.getElementById("final-score").innerHTML = "Your final score is: " + score;

// name save
var highscoreBox = document.getElementById('highscore-box');
var highscorePage = document.getElementById("highscore-page");
var saveNameButton = document.getElementById("save-name");

highscorePage.style.display = "none"

function storeName() {
    var username = document.getElementById("name-input");
    localStorage.setItem("nameInput", username.value);
}

saveNameButton.addEventListener("click", function() {
    wrongText.style.display = "none";
    enterName.style.display = "none";
    highscorePage.style.display = "block";
    storeName()
})

highscoreButton.addEventListener("click", function(){
    homePage.style.display = "none";
    highscorePage.style.display = "block";
})

document.getElementById('highscore-box').innerHTML = username + "" + score;


// timer
var timer;
var timerText = document.getElementById("timer-text");

function startTimer() {
    var sec = 60;
    timer = setInterval(()=> {
        timerText.innerHTML = '00: '+ sec;
        sec --;
    }, 1000)
    if (sec = 0) {
        enterName.style.display = "block"
        question1.style.display = "none";
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
        question5.style.display = "none";
    }
}