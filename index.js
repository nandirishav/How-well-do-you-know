var readLineSync = require("readline-sync");

var username = readLineSync.question("What is your name ? ");
var score = 0;

console.log("Welcome "+username +" to --> DO YOU KNOW RISHAV ?");
console.log("Please write the answers with the first letter in CAPS only...");

//play function

function play(question,answer)
{
    var userAnswer = readLineSync.question(question);

    if(userAnswer === answer)
    {
        console.log("Right !!");
        score++;
    }
    else{
       console.log("Wrong !!");
    }
    console.log("Your current score is " + score);
    console.log("-------------------");
}

var questions = [
  {
    question : "Which city do I live in ?",
    answer : "Howrah"
  },{
    question : "My favourite superhero ?",
    answer : "Spiderman"
  },{
    question : "Mountains or beaches ?",
    answer : "Mountains"
  },{
    question : "Marvel or DC ?",
    answer : "Marvel"
  }]

  for(var i=0;i<questions.length;i++)
  {
      var currentQuestion = questions[i];
      play(currentQuestion.question,currentQuestion.answer);
  }

  console.log("Your final score is " + score);
