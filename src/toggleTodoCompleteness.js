const toggleTodoCompleteness = (state, params) => {
  if (params.position >= state.length) {
    return Promise.reject("There is no todo in that position!");
  }
  let returnedArray = [...state];
  if (returnedArray[params.position].completed){
    returnedArray[params.position].completed = false;
  } else {
    returnedArray[params.position].completed = true;
  }
  return Promise.resolve(returnedArray);
}

module.exports = toggleTodoCompleteness;