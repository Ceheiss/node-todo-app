const deleteTodo = (state, params) => {
  if (params.position >= state.length){
    return Promise.reject("There is no todo in that position!")
  }
  if (state.length === 0){
    return Promise.reject("You don't have any todos left")
  }
  let returnedArray = state.slice(0);
  returnedArray.splice(params.position, 1);
  return Promise.resolve(returnedArray);
}

module.exports = deleteTodo;