// use of destructuring in the second parameter
// added default value to prevent errors
const updateTodo = (state, {position, newValue} = {}) => {
  if(typeof arguments[1].newValue !== "string"){
    Promise.reject("Please provide a string to edit the todo");
  }
  // copy of original is to keep immutability
  let returnedArray = state.slice(0);
  returnedArray[position] = newValue;
  return Promise.resolve(returnedArray);
}

module.exports = updateTodo;