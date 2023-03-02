var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "How many players are in a cricket team?  ",
  answer: "Eleven"
}, {
  question: "What does IPL stand for? ",
  answer: "Indian Premier League"
},
{
  question: "How many days are reserved usually for a test match? ",
  answer: "Five"
},
{
  question: "How many balls are there in an over? ",
  answer: "Six"
} ];

//welcome function
function welcome() {
  
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + "!");

  console.log("Get ready for a quiz. \nNote : answers must be in english ONLY");
  
  var permission = readlineSync.question("Would you like to test your knowledge of cricket ? yes/no ");

    if (permission.toUpperCase() === "YES") {
      game();
  } else {
    console.log("No problem, try next time when you're prepared.");

  }
}


// checkAnswer function
function checkAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("---------------------------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    checkAnswer(currentQuestion.question, currentQuestion.answer)
  }
}

function result() {
  console.log("OMG! You SCORED: ", score);
}


welcome();
result();