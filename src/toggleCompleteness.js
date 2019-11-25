const toggleCompleteness = (state, params) => {
  if (params.position > state.length) {
    return Promise.reject("The is no todo in that position");
  }
  let returnedArray = state.slice(0);
  if (returnedArray[params.position].completed){
    returnedArray[params.position].completed = false;
  } else {
    returnedArray[params.position].completed = true;
  }
  return Promise.resolve(returnedArray);
}

module.exports = toggleCompleteness;