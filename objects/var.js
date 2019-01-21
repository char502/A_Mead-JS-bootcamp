// var firstName = "Char";

// var is function scoped not block scoped
// if statements (that create code blocks) don't create a new scope when working with var

// let name = "char";

// let name = {};

// console.log(name);

// =====================================================

// var function based
// if don't have new function, don't have a new scope

// This works (See use of var)
// if (10 === 10) {
//   var firstName = "Jen";
// }

// console.log(firstName);

// This doesn't work (See use of let) - const and let are both block scoped
// allows more fine grained control over scope
// if (10 === 10) {
//   let blah = "Jen";
// }

// console.log(blah);

// ======================================================

const setName = function() {
  var firstName = "Jen";
  console.log(firstName);
};
setName(); // this would run
console.log(firstName); // this won't work as firstNAme is inaccessible
