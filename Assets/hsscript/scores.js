const scores = JSON.parse(localStorage.getItem('score'))
const scoreName = JSON.parse(localStorage.getItem('name'))
const clearScore = document.getElementById('clear')

const names = document.getElementById('name')
const grades = document.getElementById('score')

if (scoreName && scores) {
    scoreName.forEach(name => {
        let li = document.createElement('li')
        li.innerText = name

        names.append(li)
        console.log(`name: ${name}`)
    })
    scores.forEach(score => {
        let li = document.createElement('li')
        li.innerHTML = score

        grades.append(li)
        console.log(`score: ${score}`)
    })

} else {
    console.log('No scores to be found')
}

function clearScores() {
    localStorage.clear()
}

clearScore.addEventListener('click', clearScores())