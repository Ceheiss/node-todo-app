const readTodos = (array) => {
  let todoString = "";
  array.forEach(el => todoString += `* ${el}\n`);
  return todoString
}

module.exports = readTodos;