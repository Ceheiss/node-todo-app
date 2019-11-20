const readTodos = require('./readTodos');

test("it should display one todo", ()=>{
  expect(readTodos(["todo1"])).toBe("* todo1\n")
})

test("it should display all todos", ()=>{
  expect(readTodos(["todo1", "todo2", "todo3"])).toBe("* todo1\n* todo2\n* todo3\n")
})