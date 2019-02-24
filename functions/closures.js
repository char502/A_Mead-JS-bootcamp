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
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};
const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

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
