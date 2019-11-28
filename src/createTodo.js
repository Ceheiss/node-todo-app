const createTodo = (newTodo, state) => {
  if (typeof newTodo !== "string" || newTodo === ""){
    return Promise.reject("Please enter a todo");
  }
  let returnedArray = [...state];
  returnedArray.push({todo: newTodo, completed: false});
  return Promise.resolve(returnedArray);
}

module.exports = createTodo;