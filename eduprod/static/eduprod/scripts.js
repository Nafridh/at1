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
    },
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
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide the 'Next' button initially
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";   
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; // Increment score for correct answer
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // Display the "Next" button
    nextButton.style.display = "block";
    // Add event listener for the "Next" button to progress to the next question
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            nextButton.style.display = "none"; // Hide the 'Next' button after displaying the next question
        } else {
            // If all questions have been answered, display the score or any other end-of-quiz logic
            alert("Quiz completed! Your score: " + score);
            // Optionally, reset the quiz after completion
            // startQuiz();
        }
    });
}

// Call startQuiz function when the page loads to begin the quiz
startQuiz();