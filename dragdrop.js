// listening events from Alpine
window.addEventListener('todoListUpdate', (e) => {
  const todos = document.querySelectorAll('.todos_todo-item')
  todosList = e.detail.todosList

  todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragover', dragOver)
    todo.addEventListener('drop', dragDrop)
    todo.addEventListener('dragenter', dragEnter)
    todo.addEventListener('dragleave', dragLeave)
  })
})

// set from eventListener above
// Mutating this array cause Alpine render !!!
// this array only change in dragDrop method belowe
let todosList

let startIndex, dropIndex

function dragStart() {
  startIndex = +this.closest('li').dataset.id
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

// mutating array todosList cause Alpine re-render !!!
function dragDrop() {
  dropIndex = this.dataset.id
  this.closest('li').classList.remove('over')

  const dragIndexEl = todosList.findIndex((todo) => todo.id == startIndex)
  const dropIndexEl = todosList.findIndex((todo) => todo.id == dropIndex)
  const temp = { ...todosList[dragIndexEl] }

  todosList[dragIndexEl] = todosList[dropIndexEl]
  todosList[dropIndexEl] = temp
}
