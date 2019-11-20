const updateTodo = require("./updateTodo");
test("it updates the value of a todo", () => {
  let list = ["first todo"];
  updateTodo(0, "changed value", list);
  expect(list[0]).toBe("changed value")
})
