const updateTodo = (state, {position, newValue} = {}) => {
  state[position] = newValue;
  return state;
}
// destructuring. Default value prevents error if passed param is not an object
module.exports = updateTodo;