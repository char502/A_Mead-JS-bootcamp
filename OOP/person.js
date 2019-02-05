const Person = function(firstName, lastName, age) {
  //   console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// ================================================
// Prototypal inheritance

Person.prototype.getBio = function() {
  return `${this.firstName} is ${this.age}.`;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(" ");
  console.log(names);
  this.firstName = names[0];
  console.log(this.firstName);
  this.lastName = names[1];
  console.log(this.lastName);
};

// prototype proerty - prototype is an object
// on this object we put everything we want to share with the instances of this constructor function i.e. if want all instances to access some sort of method, it get provided here
// usually it is methods (functions) that are put on the prototype object (although it can be any value you like - not that there is much purpose to that)
// =================================================

const me = new Person("Charlotte", "Ellwood", 35); // constructor function - functions that get used with the 'new' operator (in this case the constructor function is 'Person)
me.setName("Alexis Turner");
console.log(me.getBio());
const otherPerson = new Person("Thomas", "Ellwood", 8);

console.log(me.getBio());
console.log(otherPerson.getBio());

// =======================================================================
// === THE NEW OPERATOR
// The new operator does a number of things behind the scenes:
// 1. Generates a new empty object for this new instance
// 2. Gives us access to that empty object in the constructor function via the 'this' value
// 'this refers to the new object'
// 3. uses the 'return' value implicitly (do not have to use return inside the constructor function itself)
// ===
// =======================================================================
