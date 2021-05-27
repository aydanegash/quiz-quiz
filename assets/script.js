
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
const theQuestions = [
  {
    question: "If a website is a wedding, what aspect of the wedding is analogous to the HTML.",
    answers: {
      a: "Venue",
      b: "Decorations",
      c: "Actual Event",
    },
    correctAns: "a"
  },
  {
    question: "A cook is to a kitchen like __________ is to web development",
    answers: {
      a: "HTML",
      b: "CSS",
      c: "Javascript",
      d: "MySQL"
    },
    correctAns: "c"
  },
  {
    question: "getElementbyID is ",
    answers: {
      a: "the function to create a new ID",
      b: "train track that connects javascript and html",
      c: "way to become the avatar and master of all four elements",
      d:  "function to write to HTML from Javascript"
    },
    correctAns: "b"
  },
  {
    question: "If a website is a wedding, what aspect of the wedding is analogous to the CSS.",
    answers: {
      a:  "Venue",
      b: "Decorations",
      c: "Actual Event",
    },
    correctAns: "b" 
  },
  {
    question:"Which of these is not a database?",
    answers: {
      a: "MongoDB",
      b: "MySQL",
      c: "ESLint",
      d: "none of these"
    },
    correctAns: "c" 
  },
  {
    question:"If a website is a wedding, what aspect of the wedding is analogous to the Javascript.",
    answers: {
      a: "Venue",
      b: "Decorations",
      c: "Actual Event"
    },
    correctAns: "c" 
  },
  {
    question:"Coding is like ________ ",
    answers: {
      a: "explaining every detail of how to tie shoes to a child",
      b: "talkin to an expert in their field",
      c: "communicating with an equal that knows everything you know",
    },
    correctAns: "a" 
  },

];





//event listener attached to start button
startButtonEl.addEventListener("click", function(){
  countdownTime();
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


