const colors = ['#7fff00', '#b22222', '#ffd700', '#a52a2a', '#8a2be2', '#00008b', '#b8860b', '#ff8c00', '8fbc8f']

const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let points = 0

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        setTime(time)
        startGame()
    }
})

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        points++
        e.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function decreaseTime() {    
    if (time === 0) {
        finishGame()
    } else {
        --time
    setTime(time)
    }
}

function setTime(time) {    
    if (time < 10) {
        timeEl.innerHTML = `00:0${time}`
    } else {
        timeEl.innerHTML = `00:${time}`
    }
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class='primary'>${points}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber(10, 50)
    
    const {height, width} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()   

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    circle.style.background = `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`

    board.append(circle)    
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}