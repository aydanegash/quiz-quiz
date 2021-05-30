var displayTimeEL = document.getElementById("displayTime");
var startButtonEl = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var startScreen = document.getElementById("startScreen");
var gameOver = "GAME OVER! You have a score of ";
var scoreEl = document.getElementById("score");
var submitButtonEl = document.getElementById("submitButton");

//array of questions for quiz
const intro = [`Welcome to Coding Quiz! In this game, you will be tested on your coding
knowledge. There will be a total of 7 questions and 60 seconds to complete
the quiz. When you are ready to begin, press the button below.
Good luck! `];



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

function countdownTime() {
  var timeCountdown = 60;
    var timeInterval = setInterval(function () {  
      if (timeCountdown > 1) {    
          displayTimeEL.textContent = timeCountdown;   
          timeCountdown--;
    // } if (timeInterval === 0) {
    //   quiz.innerHTML= `${gameOver} ${grade}%`
    // }
      // if(timeCountdown = 0) {
      //   displayTimeEL.textContent = gameOver; 
      //}
      } else {    
          displayTimeEL.textContent = ''; 
          clearInterval(timeInterval);
        }
    }, 1000);
};


function showQuiz(){
  const output = [];
    // for each question...
    theQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quiz.innerHTML = output.join('');
  };


function showScore(){
  
  // gather answer containers from our quiz
  const answerContainers = quiz.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  theQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAns){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  let grade = Math.floor((numCorrect/theQuestions.length)*100)
  // show number of correct answers out of total
  //scoreEl.innerHTML = `${numCorrect} out of ${theQuestions.length}`;
  scoreEl.innerHTML= `${grade}%`
};

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    lastBtn.style.display = 'none';
  }
  else{
    lastBtn.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextBtn.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButtonEl.style.display = 'none';
  }
}

//event listener attached to start button
startButtonEl.addEventListener("click", function(){
  countdownTime();
  showQuiz();
});
submitButtonEl.addEventListener("click", showScore);
lastBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);



// Pagination
const lastBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);


function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}










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


