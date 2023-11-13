const questions = [
    {
        question: "What does CSS mean?",
        answers: ["Creating Stylish Sheets", "Create Style Sheets", "Cascading Style Sheets", "Cascading Script Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What does HTML mean?",
        answers: ["HyperText Made Language", "HyperText Markup Language", "HypeText Mark Language", "HTML Mark Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What is JavaScript?",
        answers: ["programming language commonly used to create interactive effects within web browsers", "language for laying out and structuring web pages", "set of markup symbols or codes inserted into a file", "the study of computers"],
        correctAnswer: "programming language commonly used to create interactive effects within web browsers"
    },
    {
        question: "What is Github used for",
        answers: ["a cheatsheet", "a social media for tutors and teachers", "a code hosting platform for version control and collaboration", "a programming langauge", "a text editor for coding"],
        correctAnswer: "a code hosting platform for version control and collaboration"
    },
    {
        question: "What does computer science mean?", // Added a missing comma here
        answers: ["the study of plants", "the study of science in the future", "the study of the principles and use of computers.", "the study of maps"],
        correctAnswer: "the study of the principles and use of computers."
    }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const answersHTML = currentQuestion.answers.map(answer => `<button onclick="checkAnswer('${answer}')">${answer}</button>`).join(' ');

    document.getElementById("question-container").innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${answersHTML}
    `;
    document.getElementById("question-container").style.display = "block";
}



function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        // Correct answer, move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    } else {
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("display-timer").innerHTML = timeLeft; // Add this line to update the displayed timer
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);

    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";

    resultContainer.innerHTML = `
        <h2>Game Over!</h2>
        <p>Your score: ${timeLeft}</p>
        <label for="initials">Enter Your Initials:</label>
        <input type="text" id="initials"></input>
        <button onclick="saveScore()">Save Score</button>
    `;
}

function saveScore() {
    const initials = document.getElementById("initials").value;
    console.log("Initials", initials);
    console.log("Score:", timeLeft);
}

function refreshPage(){
    location.reload();
}