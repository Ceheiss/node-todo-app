const deleteTodo = require("./deleteTodo");

test("it deletes a todo", async () => {
  let todos = ["old todo"];
  const results = await deleteTodo(todos, {position: 0});
  expect(results.length).toBe(0);
})

test("it deletes a specific todo", async () => {
  let todos = ["first todo", "middle todo", "last todo"];
  const results = await deleteTodo(todos, {position: 1});
  expect(results[1]).toBe("last todo");
})

test("it throws an error when position is out of range", ()=>{
  let todos = ["one"];
  let outOfRangeDelete = deleteTodo(todos, {position: 2});
  expect(outOfRangeDelete).rejects.toEqual("There is no todo in that position!");
})