const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-button')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started game')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function selectAnswer() {

}

var questions = [
    {
        no: 1,
        question: 'Placeholder',
        answers: [
            "Correct Answer",
            "False Answer",
            "False Answer",
            "False Answer"
        ]
    },
    {
        no: 2,
        question: 'Placeholder 2',
        answers: [
            "Correct Answer",
            "False Answer",
            "False Answer",
            "False Answer",
        ]
    },
    {
        no: 3,
        question: 'Placeholder 3',
        answers: [
            "Correct Answer",
            "False Answer",
            "False Answer",
            "False Answer",
        ]
    },
    {
        no: 4,
        question: 'Placeholder 4',
        answers: [
            "Correct Answer",
            "False Answer",
            "False Answer",
            "False Answer",
        ]
    },
    {
        no: 5,
        question: 'Placeholder',
        answers: [
            "Correct Answer",
            "False Answer",
            "False Answer",
            "False Answer",
        ]
    },
]