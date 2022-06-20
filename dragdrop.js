// listening events from Alpine
window.addEventListener('todoListUpdate', () => {
  const todos = document.querySelectorAll('.todos_todo-item')

  todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragover', dragOver)
    todo.addEventListener('drop', dragDrop)
    todo.addEventListener('dragenter', dragEnter)
    todo.addEventListener('dragleave', dragLeave)
  })
})

let startIndex, dropIndex

function dragStart() {
  startIndex = +this.dataset.id
}

function dragEnter() {
  this.closest('li').classList.add('over')
}

function dragOver(e) {
  e.preventDefault()
}

function dragLeave() {
  this.closest('li').classList.remove('over')
}

function dragDrop() {
  dropIndex = this.dataset.id
  this.closest('li').classList.remove('over')
}
