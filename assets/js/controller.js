const getTodos = () => {
  try {
      let s = window.localStorage.getItem('todos') || ''
      return JSON.parse(s) || []
  } catch (e) {
      return []
  }
}

const setTodos = (value) => {
  window.localStorage.setItem('todos', JSON.stringify(value))
}

const [
  createTodo,
  toggleTodoComplete,
  removeTodo,
  renderTodos
] = model(
  getTodos,
  setTodos
)