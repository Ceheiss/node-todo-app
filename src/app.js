#!/usr/bin/env node
const readTodosFromFile = require("./fileOperations").readTodosFromFile;
const addTodoInFile = require("./fileOperations").addTodoInFile;
const deleteTodoFromFile = require("./fileOperations").deleteTodoFromFile;
const updateTodoInFile = require("./fileOperations").updateTodoInFile;
const createTodo = require("./createTodo");
const readTodos = require("./readTodos");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");

let command = process.argv[2];
let firstArg = process.argv[3];
let secondArg = process.argv[4];

const runHelper = () => {
  console.log(
    "to read a list of todos type --> read\nto edit a todo type -> edit position-of-todo 'new-value-for-todo'\nto delete a todo type -> delete position-of-todo\nto add a new todo type -> add 'new-todo-value'\nIMPORTANT, each time you enter a new value it should be in quotation marks");
}

let startFunc = (command, firstArg, secondArg) => {
  if (command === "add") addTodoInFile(createTodo, firstArg);
  if (command === "read") readTodosFromFile(readTodos);
  if (command === "edit") updateTodoInFile(updateTodo, firstArg, secondArg);
  if (command === "delete") deleteTodoFromFile(deleteTodo, firstArg);
  if (command === "help") runHelper();
}

startFunc(command, firstArg, secondArg);