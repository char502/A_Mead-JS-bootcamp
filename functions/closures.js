const myFunction = () => {
  const message = "This is my message";
  const printMessage = () => {
    console.log(message);
  };
  return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();
// A closure is the combination of a function with the lexical scope in which it was defined
// when 'printMessage' was defined it had access to 'message' so it's always going to have access to 'message' even if 'myFunction' completes
// the above function 'printMessage' (inner function) will always have access to 'message' (that is held in the outer function) even when 'myFunction' (the outer function) completes
