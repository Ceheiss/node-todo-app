const readTodos = (array) => {
  let todoString = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";
  array.forEach(el => todoString += `* ${el}\n`);
  return todoString
}

module.exports = readTodos;