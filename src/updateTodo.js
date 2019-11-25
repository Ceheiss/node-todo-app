const updateTodo = (state, {position, newValue} = {}) => {
  if(typeof arguments[1].newValue !== "string"){
    Promise.reject("Please provide a string to edit the todo");
  }
  let returnedArray = state.slice(0);
  returnedArray[position] = newValue;
  return Promise.resolve(returnedArray);
}
// destructuring. Default value prevents error if passed param is not an object
module.exports = updateTodo;