const readTodos = (array) => {
  let todoString = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";
  array.forEach((el,i) => todoString += `${i}. ${el}\n`);
  return todoString
}

module.exports = readTodos;