// const add = () => {
//   return arguments[0] + arguments[1];
// };

// console.log(add(11, 22, 33, 44));

// ==================================================
// Arrow functions:
// - Don't bind arguments (as per the above)
// - Don't bind 'this'
// ==================================================

// can't use arrow functions as methods on objects
const car = {
  color: "Red",
  getSummary() {
    // the method definition syntax for functions on methods
    return `The car is ${this.color}`;
  }
};

console.log(car.getSummary());
