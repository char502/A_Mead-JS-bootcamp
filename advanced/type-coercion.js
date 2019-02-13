// Type Coercion - a string, a number, a boolean
// == does not take type into account

// console.log("5" + 5); // 55 - treats this as concatenation and converts first to a string
// console.log("5" - 5); // 0 - 'coerces' first value to a number
// console.log("5" === 5); // false - checks type and value

// console.log(typeof 123);

// converting a boolean to a number: true = 1 / false = 0

const value = false + 12;
const type = typeof value;
console.log(value);
console.log(type);
