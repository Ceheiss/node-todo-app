const createTodo = (newTodo, todoList) => {
  todoList.push(newTodo);
  return todoList;
}

module.exports = createTodo;