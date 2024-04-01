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
            { text: "Protons, but a different number of neutrons", correct: false},
            { text: "Protons, but a different number of electrons", correct: false},
            { text: "Neutrons, but a different number of protons", correct: true},
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
            { text: "Cations have a negative charge", correct: false},
            { text: "Anions have a positive charge", correct: false},
            { text: "Ions have gained or lost electrons to achieve a stable configuration", correct: true},
        ]
    },
    {
        question: "Which of the following elements is a metal?",
        answers: [
            { text: "Carbon", correct: false},
            { text: "Oxygen", correct: false},
            { text: "Sodium", correct: false},
            { text: "Chlorine", correct: true},
        ]
    },
    {
        question: "The mass number of an atom is determined by the number of:",
        answers: [
            { text: "Protons", correct: false},
            { text: "Electrons", correct: false},
            { text: "Neutrons", correct: false},
            { text: "Protons and neutrons", correct: true},
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
            { text: "Helium (He)", correct: false},
            { text: "Sodium (Na)", correct: false},
            { text: "Oxygen (O)", correct: false},
            { text: "Carbon (C)", correct: true},
        ]
    },
    {
        question: "Which of the following is the correct electron configuration for nitrogen (N)?",
        answers: [
            { text: "1s^2 2s^2 2p^3", correct: false},
            { text: "1s^2 2s^2 2p^5", correct: false},
            { text: "1s^2 2s^2 2p^6", correct: false},
            { text: "1s^2 2s^2 2p^4", correct: true},
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
        if(annswer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = 'none';
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