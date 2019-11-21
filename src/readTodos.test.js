const readTodos = require('./readTodos');
const introText = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";

test("it should display one todo", ()=>{
  expect(readTodos(["todo1"])).toBe(introText + "0. todo1\n")
})

test("it should display all todos", ()=>{
  expect(readTodos(["todo1", "todo2", "todo3"])).toBe(introText + "0. todo1\n1. todo2\n2. todo3\n")
})