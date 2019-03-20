// The rest parameter

// const calculateAverage = (thing, ...numbers) => {
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   const average = sum / numbers.length;
//   return `The average ${thing} is ${average}`;
// };

// console.log(calculateAverage("grade", 0, 100, 88, 64));

const printTeam = (name, coach, ...players) => {
  console.log(`Team: ${name}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
  // return `the team is ${name}. the coach is ${coach} and the players are ${players}`;
};

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");

// =====================================================================================

// const printTeam = (name, coach, ...players) => {
//   console.log(`Team: ${name}`);
//   console.log(`Coach: ${coach}`);
//   console.log(`Players: ${players.join(", ")}`);
//   // return `the team is ${name}. the coach is ${coach} and the players are ${players}`;
// };

// const team = {
//   name: "Liberty",
//   coach: "Casey Penn",
//   players: ["Marge", "Aiden", "Herbert", "Sherry"]
// };

// // printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");
// printTeam(team.name, team.coach, ...team.players);

// ============================================================================

let cities = ["Barcelona", "Cape Town", "Bordeaux"];
cities = [...cities, "Germany"];

// const newCities = [...cities, "Australia", "New Zealand"];

// newCities.push("Germany");
// ["Greece", "Germany", [...cities]];
console.log(cities);
// console.log(newCities);

// ==============================================================================

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
};
// let newHouse = {
//   basement: true,
//   ...house
// };
// how to override a property from house
let newHouse = {
  basement: true,
  ...house,
  // As ...house is set first re the 'bedrooms' property,
  // the value set there will be overridden by the value set below it
  // The order is important (so, 'bedrooms would equal 3)
  // ===================================================================
  // If other way around the value in the spread operator would override
  // House would be equal to 2
  // ===================================================================
  // Whatever comes last is going to take precedence
  bedrooms: 3
};
newHouse.yearBuilt = 2018;

console.log(house);
console.log(newHouse);

// =====================================================================

let person = {
  name: "Char",
  age: 43
};

let location = {
  city: "Reading",
  country: "England"
};

let overView = {
  ...person,
  ...location
};
console.log(overView);

// =====================================================================

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
