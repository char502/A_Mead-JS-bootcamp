// Lexical scope - a program defined in one part of your program may not be available in another part of your program (context is important)

// Global
// local
// local
// local

// variable shadowing - when a variable in a local scope uses it's value instead of a varible in a parent scope

//  so the local variable's value is shadowing over the parent's (hiding the parent variable from existence)

// let name = "Char";

if (true) {
  //   let name = "Mike";

  if (true) {
    let name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

// A leaked global - when assign a value to a variable but that variable was never explicitly defined
// make sure to define variables or code may not work as expected
