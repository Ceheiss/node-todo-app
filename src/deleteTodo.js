const deleteTodo = (position, todoList) => {
  todoList.splice(position, 1);
  return todoList;
}

module.exports = deleteTodo;