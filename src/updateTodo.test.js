const updateTodo = require("./updateTodo");

test("it updates the value of a todo", async () => {
  const list = ["first todo"];
  let listWithUpdatedValue = await updateTodo(list, {position: 1, newValue: "changed value"});
  expect(listWithUpdatedValue[1]).toBe("changed value");
})

test("it updates the value of a specific todo", async () => {
  const list = ["first todo", "second todo", "third todo"];
  let listWithUpdatedValue = await updateTodo(list, {position: 1, newValue: "changed value"});
  expect(listWithUpdatedValue[1]).toBe("changed value");
})
