const createTodo = (newTodo, state) => {
  if (typeof newTodo !== "string"){
    Promise.reject("Please enter a string");
  }
  if (newTodo === ""){
    Promise.reject("Please enter a todo");
  }
  let returnedArray = state.slice(0);
  returnedArray.push(newTodo);
  return Promise.resolve(returnedArray);
}

module.exports = createTodo;