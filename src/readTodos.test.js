const readTodos = require('./readTodos.js');
test("it should display all todos", ()=>{
  expect(readTodos(["todo1"])).toBe("* todo1\n")
})