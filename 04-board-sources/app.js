const board = document.querySelector('#board')
const SQUARES_NUMBER = 10000
const colors = ['#00CED1', '#FFE4B5', '#D2B48C', '#778899', '#FFFACD', '#E9967A']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)      
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = `${color}`
    element.style.boxShadow = `0 0 1px ${color}, 0 0 10px ${color}`   
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 1px #1d1d1d'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}