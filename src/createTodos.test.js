const createTodos = require("./createTodos");

test("it should add a todo", () => {
  let todos = [];
  createTodos("new todo", todos)
  expect(todos.length).toBe(1)
})