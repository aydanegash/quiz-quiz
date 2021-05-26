
var countdownTimerEl = document.getElementById("countdownTimer");
var displayTimeEL = document.getElementById("displayTime");
var startButtonEl = document.getElementById("startButton");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var quizQuestions = document.getElementById("quizQuestionsDisplay");
var startScreen = document.getElementById("startScreen");
var actualQuestion = document.getElementById("acutalQuestion");
var gameOver = "GAME OVER! You have a score of " + score;
var scoreEl = document.getElementById("score");
var submitButtonEl = document.getElementById("submitButton");

//array of questions for quiz
var question1 = ("If a website is a wedding, what aspect of the wedding is analogous to the HTML."); 
var q1A = "Venue";
var q1B = "Decorations";
var q1C = "Actual Event";
var q1D = "Servers";

var question2 = ("A cook is to a kitchen like __________ is to web development"); 
var q2A = "HTML";
var q2B = "CSS";
var q2C = "Javascript";
var q2D = "MySQL";

var question3 = ("getElementbyID is "); 
var q3A = "the function to create a new ID";
var q3B = "train track that connects javascript and html";
var q3C = "way to become the avatar and master of all four elements";
var q3D = "function to write to HTML from Javascript";

var question4 = ("If a website is a wedding, what aspect of the wedding is analogous to the CSS."); //the decorations
var q4A = "Venue";
var q4B = "Decorations";
var q4C = "Actual Event";
var q4D = "Servers";

var question5 = ("If a website is a wedding, what aspect of the wedding is analogous to the Javascript."); //the actual ceramony
var q5A = "Venue";
var q5B = "Decorations";
var q5C = "Servers";
var q5D = "Actual Event";

var questionsArray = question1, question2, question3, question4, question5;

//event listener attached to start button
startButtonEl.addEventListener("click", function(){
  countdownTime();
  displayActualQuesiton1();
});

function countdownTime() {
  var timeCountdown = 10;
    var timeInterval = setInterval(function () {   
      if (timeCountdown > 1) {    
          displayTimeEL.textContent = timeCountdown;   
          timeCountdown--;
      // if(timeCountdown = 0) {
      //   displayTimeEL.textContent = gameOver; 
      //}
      } else {    
          displayTimeEL.textContent = ''; 
          clearInterval(timeInterval);
        }
    }, 1000);
};

function displayActualQuesiton1() {
  document.getElementById("actualQuestion").innerHTML = question1;
  document.getElementById("answerChoiceA").innerHTML = "A. " + q1A;
  document.getElementById("answerChoiceB").innerHTML = "B. " + q1B;
  document.getElementById("answerChoiceC").innerHTML = "C. " + q1C;
  document.getElementById("answerChoiceD").innerHTML = "D. " + q1D;

  answerChoiceA.addEventListener("click", function(){
    displayActualQuesiton2();
    score ++;
  })
};

function displayActualQuesiton2() {
  document.getElementById("actualQuestion").innerHTML = question2;
  document.getElementById("answerChoiceA").innerHTML = "A. " + q2A;
  document.getElementById("answerChoiceB").innerHTML = "B. " + q2B;
  document.getElementById("answerChoiceC").innerHTML = "C. " + q2C;
  document.getElementById("answerChoiceD").innerHTML = "D. " + q2D;

  answerChoiceC.addEventListener("click", function(){
    displayActualQuesiton3();
    score ++;
  })
};

function displayActualQuesiton3() {
  document.getElementById("actualQuestion").innerHTML = question3;
  document.getElementById("answerChoiceA").innerHTML = "A. " + q3A;
  document.getElementById("answerChoiceB").innerHTML = "B. " + q3B;
  document.getElementById("answerChoiceC").innerHTML = "C. " + q3C;
  document.getElementById("answerChoiceD").innerHTML = "D. " + q3D;

  answerChoiceB.addEventListener("click", function(){
    displayActualQuesiton4();
    score ++;
  })
};

function displayActualQuesiton4() {
  document.getElementById("actualQuestion").innerHTML = question4;
  document.getElementById("answerChoiceA").innerHTML = "A. " + q4A;
  document.getElementById("answerChoiceB").innerHTML = "B. " + q4B;
  document.getElementById("answerChoiceC").innerHTML = "C. " + q4C;
  document.getElementById("answerChoiceD").innerHTML = "D. " + q4D;

  answerChoiceB.addEventListener("click", function(){
    displayActualQuesiton5();
    score ++;
   // if (answerChoiceB === false) {
   // }
  })
};

function displayActualQuesiton5() {
  document.getElementById("actualQuestion").innerHTML = question5;
  document.getElementById("answerChoiceA").innerHTML = "A. " + q5A;
  document.getElementById("answerChoiceB").innerHTML = "B. " + q5B;
  document.getElementById("answerChoiceC").innerHTML = "C. " + q5C;
  document.getElementById("answerChoiceD").innerHTML = "D. " + q5D;

  answerChoiceD.addEventListener("click", function(){
    score ++;
    document.getElementById("quizQuestionsDisplay").innerHTML = score
    return;
  })
};
 
submitButtonEl.addEventListener("click", function(){
  document.getElementById("score").innerHTML = score 
})

// function displayQuestions() {
//   if(quizQuestions.style.display == 'none') {
//      // questions is not visable. make it appear
//      quizQuestions.style.display == 'block';
//   } else {
//     quizQuestions.style.display== 'none'
//   }
// }

//actual quiz questions
//quiz questions attached to a b c d 
//if correct answer picked move on to next question add points to point 
//if wrong answer picked, deduct time
//when time is over display game over


















// // Press start button hide start screen, start quiz screen, and start timer
// function startQuiz() {
//   startScreen.classlist.add("hide");
//   quizScreen.classlist.remove("hide");
//   startTimer();
// }


