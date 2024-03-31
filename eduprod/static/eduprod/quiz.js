const questions = [
    {
        question: "Which of the following is an example of a chemical change?",
        answers: [
            { text: "Melting Ice", correct: false},
            { text: "Dissolving Sugar in Water", correct: false},
            { text: "Burning Wood", correct: true},
            { text: "Cutting Paper", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a chemical change?",
        answers: [
            { text: "Melting Ice", correct: false},
            { text: "Dissolving Sugar in Water", correct: false},
            { text: "Burning Wood", correct: true},
            { text: "Cutting Paper", correct: false},
        ]
    }
    
]
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
function StartQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();
