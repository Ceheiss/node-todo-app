const updateTodo = require("./updateTodo");

test("it updates the value of a todo", () => {
  let list = ["first todo"];
  updateTodo(list, {position: 1, newValue: "changed value"});
  expect(list[1]).toBe("changed value");
})

test("it updates the value of a specificc todo", () => {
  let list = ["first todo", "second todo", "third todo"];
  updateTodo(list, {position: 1, newValue: "changed value"});
  expect(list[1]).toBe("changed value");
})
