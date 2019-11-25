const readTodos = (state) => {
  let todoString = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";
  state.forEach((el, i) => {
    let completeStatus;
    if (el.completed) {
      completeStatus = "(X)"
    } else {
      completeStatus = "( )"
    }
    todoString += `${i}. ${el.todo} ${completeStatus}\n`
  });
  return todoString
}

module.exports = readTodos;