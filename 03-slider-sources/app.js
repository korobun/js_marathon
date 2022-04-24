const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slideCount = mainSlide.querySelectorAll('div').length
const height = container.clientHeight

let activeSlideIndex = 0
sidebar.style.top = `-300vh`

upBtn.addEventListener('click', () => {
    slide('up')
})

downBtn.addEventListener('click', () => {
    slide('down')
})

function slide(direction) {
    console.log(direction)
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }
    console.log(activeSlideIndex)
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
}