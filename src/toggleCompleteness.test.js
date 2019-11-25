const toggleCompleteness = require('./toggleCompleteness');
test("it should change the status of a todo from false to true", async () => {
  let todos = [{todo: "hello", completed: false}];
  let result = await toggleCompleteness(todos, {position: 0});
  expect(result[0].completed).toBe(true)
});
test("it should change the status of a todo from true to false", async () => {
  let todos = [{todo: "hello", completed: true}];
  let result = await toggleCompleteness(todos, {position: 0});
  expect(result[0].completed).toBe(false)
});
test("it should handle error if user tries to toggle a non-existent todo", async () => {
  try {
    let todos = [{todo: "hello", completed: true}];
    await toggleCompleteness(todos, {position: 15});
  } catch (e) {
    expect(e).toMatch("There is no todo in that position!");
  }
});