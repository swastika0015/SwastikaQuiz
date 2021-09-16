const readlinesync = require('readline-sync');
const chalk = require('chalk');
const userName = readlinesync.question("What's your name? ");

console.log("Hi, Welcome! " + userName + "I'm Swastika!! Let's see how well you know me");
let score = 0
 
function play (question, answer){
  let userAnswer = readlinesync.question(chalk.red(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("Correct")
    score += 10
    console.log(chalk.cyan("Score: " + score))
  } else{
    console.log("Wrong")
  }
}

let questions = [{
  question: "What is my age ",
  answer : "21"
},{
  question: "What's my favorite food ",
  answer : "Pizza"
}, {
  question: "What makes me the happiest? ",
  answer : "Travel"
},{
  question: "Where do I live? ",
  answer : "Greater Noida"
},{
  question: "My favorite movie? ",
  answer : "Jab we met"
}];

for (let i=0 ; i < questions.length ; i++){
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("Congratulations!!! your final score is " + score));
