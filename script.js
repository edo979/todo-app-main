document.addEventListener('alpine:init', () => {
  Alpine.data('todosApp', () => ({
    todos: [],
    id: 0,
    newTodoText: '',
    todosLeft: 'All done', // init state

    getId() {
      return this.id++
    },

    updateTodosLeftText() {
      const todos = this.todos.filter((todo) => !todo.isCompleted),
        todosLeft = todos.length

      let todosText = ''

      if (todosLeft == 0) {
        todosText = 'All done'
      } else if (todosLeft == 1) {
        todosText = '1 item left'
      } else {
        todosText = `${todosLeft} items left`
      }

      this.todosLeft = todosText
    },

    addTodo() {
      this.todos = [
        ...this.todos,
        {
          id: this.getId(),
          text: this.newTodoText,
          isCompleted: false,
        },
      ]

      this.updateTodosLeftText()
      // clear text input
      this.newTodoText = ''
    },

    toggleIsCompleted(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id == id) {
          todo.isCompleted = !todo.isCompleted
          return todo
        } else {
          return todo
        }
      })

      this.updateTodosLeftText()
    },
  }))
})
