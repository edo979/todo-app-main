document.addEventListener('alpine:init', () => {
  Alpine.data('todosApp', () => ({
    todos: [],
  }))
})
