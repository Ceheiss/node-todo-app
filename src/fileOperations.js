const fs = require('fs').promises;

const readTodosFromFile = async (readTodos) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'))
    console.log(readTodos(data[0].todos))
  } catch (err) {
    console.console.error(err);
  }
}

const modifyTodosInFile = async (todoFunction, information) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'));
    todoFunction(information, data[0].todos);
    const jsonData = JSON.stringify(data);
    await fs.writeFile('database/todoList.json', jsonData)
  } catch (err) {
    console.console.error(err);
  }
}

const updateTodoInFile = async (updateTodo, position, newValue) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'));
    updateTodo(position, newValue, data[0].todos);
    const jsonData = JSON.stringify(data);
    await fs.writeFile('database/todoList.json', jsonData)
  } catch (err) {
    console.console.error(err);
  }
}

module.exports = {
  readTodosFromFile,
  modifyTodosInFile,
  updateTodoInFile
}