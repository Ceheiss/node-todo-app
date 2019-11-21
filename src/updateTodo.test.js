const updateTodo = require("./updateTodo");

test("it updates the value of a todo", () => {
  let list = ["first todo"];
  updateTodo(1, "changed value", list);
  expect(list[1]).toBe("changed value");
})

test("it updates the value of a specificc todo", () => {
  let list = ["first todo", "second todo", "third todo"];
  updateTodo(1, "changed value", list);
  expect(list[1]).toBe("changed value");
})
