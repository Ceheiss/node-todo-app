const deleteTodo = require("./deleteTodo");

test("it deletes a todo", () => {
  let todos = ["old todo"];
  deleteTodo(0, todos);
  expect(todos.length).toBe(0);
})

test("it deletes a specific todo", () => {
  let todos = ["first todo", "middle todo", "last todo"];
  deleteTodo(1, todos);
  expect(todos[1]).toBe("last todo");
})
