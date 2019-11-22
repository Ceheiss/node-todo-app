const deleteTodo = (state, params) => {
  if (params.position > state.length){
    return Promise.reject("out of range")
  }
  let returnedArray = state.slice(0);
  returnedArray.splice(params.position, 1);
  return Promise.resolve(returnedArray);
}
// do it without mutation
module.exports = deleteTodo;