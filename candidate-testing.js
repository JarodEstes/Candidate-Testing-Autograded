const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}

function askQuestion() {
  for (let i =0; i < questions.length; i++) {
  candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);
}
  } 
  
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //



function gradeQuiz(candidateAnswers) {
  for (i = 0; i < 5; i++) {
    console.log(`${candidateName}'s answer is ${candidateAnswers[i]}. Correct answer is ${correctAnswers[i]}.`)
  }
    
  


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  


  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
for (let i = 0; i < 5; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    grade++
  }

}
if (grade >= 4) {
  console.log("Congratulations, you passed!");
} else if (grade < 4) {
  console.log("Sorry, you did not pass!");
} 

grade = (grade / 5 * 100);
console.log(grade + '%')
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

 