document.addEventListener('alpine:init', () => {
  Alpine.data('todosApp', () => ({
    todos: [],
    id: 0,
    newTodoText: '',

    getId() {
      return this.id++
    },

    addTodo() {
      this.todos.push({
        id: this.getId(),
        text: this.newTodoText,
        isCompleted: false,
      })

      this.newTodoText = ''
    },
  }))
})
