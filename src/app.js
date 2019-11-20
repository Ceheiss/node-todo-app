//const readline = require('readline');
const readTodosFromFile = require("./fileOperations").readTodosFromFile;
const modifyTodosInFile = require("./fileOperations").modifyTodosInFile;
const updateTodoInFile = require("./fileOperations").updateTodoInFile;
const createTodo = require("./createTodo");
const readTodos = require("./readTodos");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");

/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you want to do next? ', (answer) => {
  if (answer === "read"){
    readTodosFromFile(readTodos);
  } else {
    console.log("alrighty")
  };
  rl.close();
});
*/

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




