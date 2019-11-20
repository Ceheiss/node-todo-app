const createTodo = require("./createTodo");

test("it should add a todo", () => {
  let todos = [];
  createTodo("new todo", todos)
  expect(todos.length).toBe(1)
})
