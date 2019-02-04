const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Argument must be a number");
    // throwing an error - crashes the program, allowed to provide a message as well as a bit of context as to where the problem was
  }
};

try {
  const result = getTip(true);
  console.log(result);
} catch (e) {
  console.log("catch block is running");
}

// const result = getTip("test");
// console.log(result);
