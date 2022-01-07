//start button
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
//question container
const questionContainerEl = document.getElementById('question-container')
//question
const questionEl = document.getElementById('question')
//answer button
const answerButtonsEl = document.getElementById('answer-button')

var shuffledQuestions, currentQuestionIndex

//timer
var timeCount = 60;

//game will start when i click the start button
startButton.addEventListener('click', startGame)

//When I click start game the game starts with a random question
function startGame() {
    console.log('Started game')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

//When answer is clicked game will show questions
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
            button.classList.add('btn', 'btn-grid')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        questionEl.appendChild(button)
    })
}

//if the answer is incorrect
function selectAnswer(e) {

}
//then time is subtracted from the timer

//when all questions are answered or if timer reaches 0 the game is over

//when the game is over i can save my initials and score

var questions = [
    {
        no: 1,
        question: 'Placeholder',
        answers: [
            { text: "Correct Answer", correct: true },
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false}
        ]
    },
    {
        no: 2,
        question: 'Placeholder 2',
        answers: [
            { text: "Correct Answer", correct: true },
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false}
        ]
    },
    {
        no: 3,
        question: 'Placeholder 3',
        answers: [
            { text: "Correct Answer", correct: true },
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false}
        ]
    },
    {
        no: 4,
        question: 'Placeholder 4',
        answers: [
            { text: "Correct Answer", correct: true },
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false}
        ]
    },
    {
        no: 5,
        question: 'Placeholder',
        answers: [
            { text: "Correct Answer", correct: true },
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false},
            { text: "False Answer", correct: false}
        ]
    },
]

function selectAnswer() {

}

