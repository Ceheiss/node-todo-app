const runApp = require('./app.js');

let command;

test("run app reads returns and object (promise)", ()=> {
  command = "read";
  expect(typeof runApp(command)).toBe("object")
})