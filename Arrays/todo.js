let todos = [
  {
    text: "swim 3 lengths",
    completed: true
  },
  {
    text: "Eat dinner",
    completed: false
  },
  {
    text: "Go Fishing",
    completed: true
  },
  {
    text: "Go Running",
    completed: false
  },
  {
    text: "Get some sleep",
    completed: true
  }
];

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// -1 (if a should come first)
// 1 (if b should come first)
// 0 the order doesn't need to be changed
// ====================================================================
// console.log('a' < 'b') // returns true (a comes before b)
// console.log('March' < 'January') // returns false ('j' comes first)
// console.log('a' < 'A') // false - capital letters always come first
// ====================================================================
// ====== This can be addressed by converting everything to lowercase before doing a comparison ================

// ==============================================================

// const todosToComplete = function(todos) {
//   return todos.filter(function(todo) {
//     return !todo.completed;
//   });
// };

// console.log(todosToComplete(todos));

// ==============================================================

// const deleteTodo = function(todos, itemToDelete) {
//   const todoIndex = todos.findIndex(function(todo) {
//     return todo.text.toLowerCase() === itemToDelete.toLowerCase();
//   });

//   if (todoIndex > -1) {
//     console.log(`${todos[todoIndex].text} deleted!!`);
//     todos.splice(todoIndex, 1);
//   } else {
//     console.log("Nothing found to delete!!");
//   }
// };

// deleteTodo(todos, "awdw");
// console.log(todos);

// ====================================================

// let deleteTodo = function(todos, itemToDelete) {
//   todoIndex = todos.findIndex(function(todo) {
//     return todo.text === itemToDelete;
//   });
//   console.log(todoIndex);
//   todos.splice(todoIndex, 1);
// };

// deleteTodo(todos, "Get some sleep");
// console.log(todos);

// =================================================

// case insensitive

// function to remove a todo

// todos.splice(2, 1);
// todos.push("new item");
// todos.shift();

// todos.map(function(todo) {
//   console.log(todo);
// });

// todos.map((todo) => console.log(todo));

// console.log(`you have ${todos.length} todos`);

// todos.forEach(function(todo, index) {
//   console.log(`${index + 1}. ${todo}`);
// });

// console.log(`you have ${todos.length} todos`);
// console.log(`Todo: ${todos[0]}, Todo: ${todos[todos.length - 2]}`);
// console.log(todos);

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1;
//   console.log(`${num}. ${todos[count]}`);
// }

// forEach
// have an array
// counting in order

// for
// don't have an array
// trying to count ina different order
