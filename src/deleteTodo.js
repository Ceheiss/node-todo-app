const deleteTodo = (position, todoList) => {
  todoList.splice(position, 1);
  return todoList;
}
// do it without mutation
module.exports = deleteTodo;