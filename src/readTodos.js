const readTodos = (state) => {
  let todoString = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";
  state.forEach((el, i) => todoString += `${i}. ${el}\n`);
  return todoString
}

module.exports = readTodos;