// use of destructuring in the second parameter
// added default value to prevent errors
const updateTodo = (state, {position, newValue} = {}) => {
  if(typeof newValue !== "string"){
    return Promise.reject("Please provide a string to edit the todo");
  }
  if(position > state.length){
    return Promise.reject(new Error("There is no todo in that position"));
  }
  // copy of original is to keep immutability
  let returnedArray = [...state];
  returnedArray[position] = newValue;
  return Promise.resolve(returnedArray);
}

module.exports = updateTodo;