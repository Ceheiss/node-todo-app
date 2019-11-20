const updateTodo = (position, newValue ,todoList) => {
  todoList[position] = newValue;
  return todoList;
}

module.exports = updateTodo;