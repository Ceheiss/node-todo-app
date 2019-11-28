#!/usr/bin/env node
const readTodosFromFile = require("./fileOperations").readTodosFromFile;
const addTodoInFile = require("./fileOperations").addTodoInFile;
const deleteTodoFromFile = require("./fileOperations").deleteTodoFromFile;
const updateTodoInFile = require("./fileOperations").updateTodoInFile;
const toggleTodoCompletenessInFile = require("./fileOperations").toggleTodoCompletenessInFile;
const createTodo = require("./createTodo");
const readTodos = require("./readTodos");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");
const toggleTodoCompleteness = require("./toggleTodoCompleteness");

const command = process.argv[2];
const firstArg = process.argv[3];
const secondArg = process.argv[4];

const runHelper = () => {
  console.log(
    "===============THIS ARE THE COMMANDS YOU NEED===============\n* to read a list of todos type --> read\n* to edit a todo type -> edit position-of-todo 'new-value-for-todo'\n* to delete a todo type -> delete position-of-todo\n* to add a new todo type -> add 'new-todo-value'\n* to toggle the completeness value of a todo -> toggle position-of-todo\n* IMPORTANT -unlesss is a position- each time you enter a new value it should be in quotation marks"
  );
};

const runApp = (command, firstArg, secondArg) => {
  if (command === "add") return addTodoInFile(createTodo, firstArg);
  if (command === "read") return readTodosFromFile(readTodos);
  if (command === "edit") return updateTodoInFile(updateTodo, firstArg, secondArg);
  if (command === "delete") return deleteTodoFromFile(deleteTodo, firstArg);
  if (command === "toggle") return toggleTodoCompletenessInFile(toggleTodoCompleteness, firstArg);
  if (command === "help") return runHelper();
};

runApp(command, firstArg, secondArg);

module.exports = runApp;