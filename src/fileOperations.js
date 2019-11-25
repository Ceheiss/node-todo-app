const fs = require('fs').promises;
const readTodos = require("./readTodos");

const readTodosFromFile = async (readTodos) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'));
    console.log(readTodos(data[0].todos));
  } catch (err) {
    console.error(err);
  }
}

const deleteTodoFromFile = async (deleteTodo, index) => {
  try {
    let data = JSON.parse(await fs.readFile('database/todoList.json'));
    let  newArray = await deleteTodo(data[0].todos, {position: index});
    data[0].todos = newArray;
    const jsonData = JSON.stringify(data);
    await fs.writeFile('database/todoList.json', jsonData);
    readTodosFromFile(readTodos);
  } catch (err) {
    console.error(err);
  }
}

const addTodoInFile = async (addTodo, todoString) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'));
    addTodo(todoString, data[0].todos);
    const jsonData = JSON.stringify(data);
    await fs.writeFile('database/todoList.json', jsonData);
    readTodosFromFile(readTodos);
  } catch (err) {
    console.error(err);
  }
}

const updateTodoInFile = async (updateTodo, position, newValue) => {
  try {
    const data = JSON.parse(await fs.readFile('database/todoList.json'));
    updateTodo(position, newValue, data[0].todos);
    const jsonData = JSON.stringify(data);
    await fs.writeFile('database/todoList.json', jsonData);
    readTodosFromFile(readTodos);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  readTodosFromFile,
  addTodoInFile,
  deleteTodoFromFile,
  updateTodoInFile
}