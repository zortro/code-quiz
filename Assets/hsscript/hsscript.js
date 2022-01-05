const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started game')
    startButton.classList.add('hide')
    questionContainerEl.classlist.remove('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}