// listening events from Alpine
window.addEventListener('todoListUpdate', () => {
  const todos = document.querySelectorAll('.todos_todo-item')

  todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragover', dragOver)
    todo.addEventListener('dragend', dragDrop)
    todo.addEventListener('dragenter', dragEnter)
    todo.addEventListener('dragleave', dragLeave)
  })

  console.log(todos)
})

function dragStart() {
  console.log('start')
}

function dragEnter() {
  console.log('enter')
}

function dragOver() {
  console.log(this.querySelector('p').innerText)
}

function dragLeave() {
  console.log('leave')
}

function dragDrop() {
  console.log('drop')
}
