// console.log("utilities.js");

// export const add = (a, b) => a + b; // named export

// export const name = "Charlotte test123"; // named export

// const square = (x) => x * x;

// export default square; // default export set up
// ======================================================================

const add = (a, b) => a + b; // named export

const name = "Charlotte test123"; // named export

const square = (x) => x * x;

export { add, name, square as default }; // setting up two named exports, 'add' and 'name' then defining a defualt export (does not have to be the last one)
