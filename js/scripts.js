/*
This is an IIFE - ImmediatelyInvoked Function Expression. IIFEs run as soon as they are defined. IIFEs are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts.
*/

//This variable exists in the global scope, which means it's less secure amd can be accessed by anything
var global;

(function() {
//Because this variable is inside of the IIFE, it is not in the global scope.
var variable = 10;

//Make references to our elements that we're going to interact with
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var resetButton = document.getElementById("reset");

var myQuestions = [];

//What does a quiz question consist of?
//Question text, answer choices, correct answer

var exampleQuestion = {
    question: "What color is the sky?",
    answers: {
        a: "Blue",
        b: "Brown",
        c: "Green"
    },
    correctAnswer: "a"
}

console.log(exampleQuestion.question); //Get the question text'
console.log(exampleQuestion.answers.b); //Get answer b

var question2 = {
question: "What kind of creature is a bat?",
answers: {
    a: "mammal",
    b: "bird",
    c: "reptile"
},
correctAnswer: "a"
}

var question3 = {
question: "What is 3 * 3?",
answers: {
    a: "8",
    b: "33",
    c: "9"
},
correctAnswer: "c"
}

//Add the question objects to our array of questions
myQuestions.push(question1, question2, question3);

//Function to build a quiz that goes through your question objects and generates HTML for each question
function buildQuiz() {

}

//Function to show the results of the quiz
function showResults() {

}

//Function to reet the quiz
function resetQuiz() {
    
}
})();