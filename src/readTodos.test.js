const readTodos = require('./readTodos');
const introText = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";

test("it should display one todo", ()=>{
  expect(readTodos(["todo1"])).toBe(introText + "* todo1\n")
})

test("it should display all todos", ()=>{
  expect(readTodos(["todo1", "todo2", "todo3"])).toBe(introText + "* todo1\n* todo2\n* todo3\n")
})