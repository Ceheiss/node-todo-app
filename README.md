# Command Line Todo App in Node


This is a simple CLI program that **creates, reads, updates, and deletes todos**. All of the todos are stored in a JSON file, so whatever is written will have persistence locally.


Form now, you run the project `node src/app.js` and provide the action you want to do, and the parameters.


### Examples:
`node src/app.js add "new todo"` will create a todo.
`node src/app.js read` will display all current todos.
`node src/app.js update 0 "new message"` will update the first todo in the list.
`node src/app.js delete 1` will delete the second todo of the list.


This project was very recently started, so expect siginificant modifications.