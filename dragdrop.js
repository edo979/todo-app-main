const todos = document.querySelectorAll('.todos_todo-item')

todos.forEach((todo, index) => {
  todo.addEventListener('dragstart', dragStart)
})

function dragStart() {
  console.log(this)
}

window.addEventListener('todoListUpdate', () =>
  console.log('catch from Alpine')
)
