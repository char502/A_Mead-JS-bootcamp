// // Destructuring - allows to unpack values from objects and arrays

// const todo = {
//   id: "ylkjhkjl",
//   text: "Pay the bills",
//   completed: false
// };

// // looks similar to grabbing named exports
// // const { id, text, completed } = todo;

// // console.log(id);
// // console.log(text);

// // ================================================================

// // setting a new local value to the todo.text property ('todoText')
// const {
//   id,
//   text: todoText,
//   completed,
//   details: otherDetails = "no details provided"
// } = todo;

// console.log(todoText); // output: pay the bills
// // console.log(details); // default output: 'no details provided'
// // =============================================================
// // can also give a default property to details
// console.log(otherDetails);

// =======================================================================
// Can use the rest operator inside of a destructuring object

// const todo = {
//   id: "ylkjhkjl",
//   text: "Pay the bills",
//   completed: false
// };

// const { id, ...others } = todo; // ...others shows properties not already destructured

// console.log(others);
// // console.log(completed);

// // =======================================================================

// const age = [65, 0, 13, 21];

// //const [, , , value] = age;

// const [, ...otherAges] = age;

// // //console.log(value);
// console.log(otherAges);

// ======================================================================

const todo = {
  id: "ylkjhkjl",
  text: "Pay the bills",
  completed: false
};

// using destructuring in function arguments
// can also rename
// use default values
// setup the rest parameter to grab the rest of the properties that are not destructuring
const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};

printTodo(todo);
