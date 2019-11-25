const readTodos = require('./readTodos');
const introText = "============================\nHERE ARE YOUR CURRENT TODOS\n============================\n";
const completeStatus = "(X)\n";
const incompleteStatus = "( )\n";

test("it should display one todo", ()=>{
  const result = readTodos([{todo:"todo1", completed: false}]);
  expect(result).toBe(`${introText}0. todo1 ${incompleteStatus}`)
})
test("it should display all todos checking mixed completness", ()=>{
  const result = readTodos([{todo: "todo1", completed: true}, {todo: "todo2", completed: false}, {todo: "todo3", completed: true}]);
  expect(result).toBe(`${introText}0. todo1 ${completeStatus}1. todo2 ${incompleteStatus}2. todo3 ${completeStatus}`);
})
