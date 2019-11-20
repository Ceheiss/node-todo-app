const readTodosFromFile = require("./fileOperations").readTodosFromFile;
const modifyTodosInFile = require("./fileOperations").modifyTodosInFile;
const updateTodoInFile = require("./fileOperations").updateTodoInFile;
const createTodo = require("./createTodo");
const readTodos = require("./readTodos");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");

let command = process.argv[2];
let firstArg = process.argv[3];
let secondArg = process.argv[4];

let startFunc = (command, firstArg, secondArg) => {
  if (command === "add") modifyTodosInFile(createTodo, firstArg);
  if (command === "read") readTodosFromFile(readTodos);
  if (command === "edit") updateTodoInFile(updateTodo, firstArg, secondArg);
  if (command === "delete") modifyTodosInFile(deleteTodo, firstArg);
}

startFunc(command, firstArg, secondArg);




