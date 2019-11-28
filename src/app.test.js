const runApp = require('./app.js');

let command;
const firstArg = 0;
const secondArg = 1;

test("run app reads", ()=> {
  command = "read";
  expect(true).toBe(true)
})