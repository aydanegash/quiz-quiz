// all the quiz variables

var highScoreButton;
var timer;
var timerCount= 60;
var startButton;
var startScreen;
var submitQuizButton;
var quizScreen;
var quiText;
var timeUpscreen;
var highScoreScreen;
var choiceA;
var choiceB;
var choiceC;
var choiceD;
var score;
var highScoreButton;



// Press start button hide start screen, start quiz screen, and start timer
function startQuiz() {
  startScreen.classlist.add("hide");
  quizScreen.classlist.remove("hide");
  startTimer();
}

//timer funciton
function timer() {
  timer = setInterval(function() {
    timercount--;
    timerElement.textContent= timerCount;
  };
};
