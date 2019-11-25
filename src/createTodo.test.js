const createTodo = require("./createTodo");

test("it should add a todo", async () => {
  let todos = [];
  let todosWithNewItem = await createTodo("new todo", todos);
  expect(todosWithNewItem.length).toBe(1)
})
