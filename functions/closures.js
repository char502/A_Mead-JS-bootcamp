const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// ===================================================================
// Adder

// currying - the process of transforming a single function that takes a lot of arguments to multiple functions that take a subset of those arguments

// uncurried version:
const add = (a, b) => a + b;

// curried version
// (useful when want to return a function with some sort of base value)
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};
const add10 = createAdder(10); // call createAdder passing in base value of 10
console.log(add10(-2));
console.log(add10(20));
// ===================================================================

// Tipper

let createTipper = (tip) => {
  return (amount) => {
    return amount * tip;
  };
};

let Percent15Tip = createTipper(0.15);
let Percent20Tip = createTipper(0.2);
let Percent25Tip = createTipper(0.25);
let Percent30Tip = createTipper(0.3);
// console.log(Percent15Tip(20));
// console.log(Percent25Tip(20));

console.log(Percent20Tip(100));
console.log(Percent30Tip(100));

// ===================================================================
// const myFunction = () => {
//   const message = "This is my message";
//   const printMessage = () => {
//     console.log(message);
//   };
//   return printMessage;
// };

// const myPrintMessage = myFunction();
// myPrintMessage();
// A closure is the combination of a function with the lexical scope in which it was defined
// when 'printMessage' was defined it had access to 'message' so it's always going to have access to 'message' even if 'myFunction' completes
// the above function 'printMessage' (inner function) will always have access to 'message' (that is held in the outer function) even when 'myFunction' (the outer function) completes
