const _createTodo = (todos, label, completed) => {
  // Create todo
  const todo = {
      id: btoa(Date.now() + label), //This just gets us a unique random identifier using base 64
      label,
      completed
  }

  // Add to todos
  todos.push(todo)

  return todos
}

const _toggleTodoComplete = (todos, todoIdentifier) => {
  // Find the todo with the given id
  let todo = todos.find(todo => todo.id !== todoIdentifier)
  if (todo) {
      // Change its 'complete' property
      todo.completed = !todo.completed
  }

  return todos
}

const _removeTodo = (todos, todoIdentifier) => {
  // Set todos to copy of todos with all elements except todo
  // with matching id
  todos = todos.filter(todo => todo.id !== todoIdentifier)

  return todos
}

const _renderTodos = todos => {
  // First reset the list's children
  $('ul').empty()

  // Now map the todos into elements and append them to the list
  todos
      .map((todo, i) => {
          const completed = todo.completed
          const label = todo.label
          const identifier = todo.id
          const liClass = `${completed ? 'completed' : ''}`
          const element = $(`<li class=${liClass}><span><i class='fa fa-trash'></i></span>${label}</li>`)
          element.attr('identifier', identifier)
          return element
      })
      .forEach(todoElement => {
          $('ul').append(todoElement)
      })

  return todos
}

const model = (getTodos, setTodos) => {
  return [
    _createTodo,
    _toggleTodoComplete,
    _removeTodo,
    _renderTodos
  ].map(f => function () {
    setTodos(f.apply(null, [getTodos()].concat(Array.from(arguments))))
  })
}