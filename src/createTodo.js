const createTodo = (newTodo, state) => {
  if (typeof newTodo !== "string" || newTodo === ""){
    return Promise.reject("Please enter a todo");
  }
  let returnedArray = state.slice(0);
  returnedArray.push(newTodo);
  return Promise.resolve(returnedArray);
}

module.exports = createTodo;