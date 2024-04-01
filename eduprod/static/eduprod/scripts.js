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
        question: "The atomic number of an element is determined by the number of:",
        answers: [
            { text: "Protons", correct: true},
            { text: "Electrons", correct: false},
            { text: "Neutrons", correct: false},
            { text: "Protons and neutrons", correct: false},
        ]
    },
    {
        question: "An isotope of an element has the same number of:",
        answers: [
            { text: "Neutrons, but a different number of protons", correct: false},
            { text: "Protons, but a different number of neutrons", correct: true},
            { text: "Protons, but a different number of electrons", correct: false},
            { text: "Electrons, but a different number of protons", correct: false},
        ]
    },
    {
        question: "Which of the following subatomic particles has a positive charge?",
        answers: [
            { text: "Nucleus", correct: false},
            { text: "Neutron", correct: false},
            { text: "Electron", correct: false},
            { text: "Proton", correct: true},
        ]
    },
    {
        question: "Which of the following statements about ions is correct?",
        answers: [
            { text: "Ions have a neutral charge", correct: false},
            { text: "Ions have gained or lost electrons to achieve a stable configuration", correct: true},
            { text: "Cations have a negative charge", correct: false},
            { text: "Anions have a positive charge", correct: false},
        ]
    },
    {
        question: "Which of the following elements is a metal?",
        answers: [
            { text: "Carbon", correct: false},
            { text: "Oxygen", correct: false},
            { text: "Sodium", correct: true},
            { text: "Chlorine", correct: false},
        ]
    },
    {
        question: "The mass number of an atom is determined by the number of:",
        answers: [
            { text: "Protons and neutrons", correct: true},
            { text: "Protons", correct: false},
            { text: "Electrons", correct: false},
            { text: "Neutrons", correct: false},
        ]
    },
    {
        question: "How many valence electrons does an atom of chlorine (Cl) have?",
        answers: [
            { text: "2", correct: false},
            { text: "4", correct: false},
            { text: "6", correct: false},
            { text: "7", correct: true},
        ]
    },
    {
        question: "Which of the following elements belongs to Group 18 of the periodic table?",
        answers: [
            { text: "Sodium (Na)", correct: false},
            { text: "Oxygen (O)", correct: false},
            { text: "Helium (He)", correct: true},
            { text: "Carbon (C)", correct: false},
        ]
    },
    {
        question: "Which of the following is the correct electron configuration for nitrogen (N)?",
        answers: [
            { text: "1s^2 2s^2 2p^3", correct: true},
            { text: "1s^2 2s^2 2p^5", correct: false},
            { text: "1s^2 2s^2 2p^6", correct: false},
            { text: "1s^2 2s^2 2p^4", correct: false},
        ]
    },
    {
        question: "The noble gases are located in which group of the periodic table?",
        answers: [
            { text: "Group 5", correct: false},
            { text: "Group 8", correct: false},
            { text: "Group 4", correct: false},
            { text: "Group 18", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();