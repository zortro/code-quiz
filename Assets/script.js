let startBtn = document.getElementById('start-btn')
let answerContainer = document.getElementById('answer-buttons')
let container = document.getElementById('question-container')
let questionEl = document.getElementById('question')
let timer = document.getElementById('timer')
const a = document.getElementById('one')
const b = document.getElementById('two')
const c = document.getElementById('three')
const d = document.getElementById('four')
const p = document.createElement('p')
const names = document.getElementById('name')
const save = document.getElementById('save')

const nameArr = []
const scoreArr = []

let timeLeft = 60
let letterGrade = ''
let questionIndex = 0
let correctAnswer = 0

let questions = [
    {
        question: 'What does HTML stand for? ',
        answers: [
            'Hot Text Marker Linguistics',
            'Hypertext Mark Labeler',
            'Hidden Treasures of Mysterious Land',
            'Hypertext Markup Language'
        ],
        correct: 'Hypertext Markup Language'
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            'Color Stylizer Sheets',
            'Colorized Stylization of Server',
            'Corn Starch Serving',
            'Cascading Style Sheets'
        ],
        correct: 'Cascading Style Sheets'
    },
    {
        question: 'What is CSS used for?',
        answers: [
            'Stylizing JavaScript elements',
            'Creating new tabs in the browser',
            'Creating h1 tags',
            'Styling HTML elements'
        ],
        correct: 'Styling HTML elements'
    },
    {
        question: 'What type of file does Javascript use?',
        answers: [
            '.javascript',
            '.jar',
            '.java',
            '.js'
        ],
        correct: '.js'
    },
    {   
        question: 'Placeholder',
        answers: [
            'False Answer',
            'False Answer',
            'False Answer',
            'Correct Answer'
        ],
        correct: 'Correct Answer'
    },
]

let question = questions.question
let answer = questions.answers
let correct = questions.answers

function gameOver() {
    let remaining = document.getElementById('remaining')
    let score = (correctAnswer/5)
    const grade = document.createElement('h3')
    const br = document.createElement('br')

    answerContainer.classList.add('hide')

    questionEl.innerHTML = 'Game Over!'
    remaining.innerHTML = 'Game Over!'
    
    if (score === 0.0) {
        letterGrade = 'F'
    } else if (score === 0.2) {
        letterGrade = 'D'
    } else if (score === 0.4) {
        letterGrade = 'C'
    } else if (score === 0.6) {
        letterGrade = 'B'
    } else if (score === 0.8) {
        letterGrade = 'A'
    } else if (score === 1) {
        letterGrade = 'S'
    }

    score = score*100

    grade.innerText = `${score}% ${letterGrade}`
    questionEl.append(grade)
    grade.append(br)

    
    names.classList.remove('hide')
    save.classList.remove('hide')

}

function saveScore() {
    
    scoreArr.push(letterGrade)
    
    if (names.value.length > 0) {
        nameArr.push(names.value)
        localStorage.setItem('score', JSON.stringify(scoreArr))
        localStorage.setItem('name', JSON.stringify(nameArr))
        
        console.log('saving...')
    } else {
        console.log('enter a name!')
    }
}

function startTimer() {

    startBtn.classList.add('hide')

    const timeInterval = setInterval(function () {
        
        if (timeLeft > 0) {
            timer.textContent = `${timeLeft} seconds`
            timeLeft --
        } else if (timeLeft === 1) {
            timer.textContent = `${timeLeft} second`
        } else {
            gameOver()
            clearInterval(timeInterval)
        }
    }, 1000)
}

function nextQuestion() {

    questionEl.innerHTML = questions[questionIndex].question
    a.innerHTML = questions[questionIndex].answers[0]
    b.innerHTML = questions[questionIndex].answers[1]
    c.innerHTML = questions[questionIndex].answers[2]
    d.innerHTML = questions[questionIndex].answers[3]
}

function check(answer) {
    p.classList.add('class', 'correct')
    
    if (questions[questionIndex].answers[answer] == questions[questionIndex].correct) {
        p.textContent = 'Correct!'
        correctAnswer++
    } else {
        p.textContent = 'Incorrect!'
        timeLeft--
    }
    questionIndex++
    questionEl.append(p)

    if (questionIndex < questions.length) {
        nextQuestion()
    } else {
        gameOver()
    }
}

function displayQuestions() {
    
    container.classList.remove('hide')
    startTimer()
    nextQuestion()
}

function choseA() {
    check(0)
}

function choseB() {
    check(1)
}

function choseC() {
    check(2)
}

function choseD() {
    check(3)
}

a.addEventListener('click', choseA)
b.addEventListener('click', choseB)
c.addEventListener('click', choseC)
d.addEventListener('click', choseD)

startBtn.addEventListener('click', displayQuestions)
save.addEventListener('click', saveScore)