const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

const placeholders = document.querySelectorAll('.placeholder')

for (placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {    
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {    
    event.target.className = 'item'
}

function dragenter(e) {
    e.target.classList.add('hovered')    
}

function dragover(e) {
    e.preventDefault()
}

function dragleave(e) {
    e.target.classList.remove('hovered')    
}

function dragdrop(e) {
    e.target.append(item)
    e.target.classList.remove('hovered')
}