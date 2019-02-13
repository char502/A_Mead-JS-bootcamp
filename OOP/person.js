const Person = function(firstName, lastName, age, likes = []) {
  //   console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// ================================================
// Prototypal inheritance

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like} `;
    // Can use 'this' inside the function
    // Arrow funtions do not bind a 'this' value
    // Arrow functions inherit the 'this' value from their parent
    // the parent has the correct 'this' value for the instance
    // An ES5 function would not work here
  });

  return bio;
};

// ========================================================================
// prototype object is linked to the constructor - any changes made to the prototype object will be reflected in all of the constructor instances, even if the change is made after the instance is created
// ========================================================================
Person.prototype.setName = function(fullName) {
  console.log(this);
  const names = fullName.split(" ");
  console.log(names);
  this.firstName = names[0];
  console.log(this.firstName);
  this.lastName = names[1];
  console.log(this.lastName);
};

// prototype property - prototype is an object
// on this object we put everything we want to share with the instances of this constructor function i.e. if want all instances to access some sort of method, it gets provided here
// usually it is methods (functions) that are put on the prototype object (although it can be any value you like - not that there is much purpose to that)
// =================================================

const me = new Person("Charlotte", "Ellwood", 35, ["karate", "biking"]); // constructor function - functions that get used with the 'new' operator (in this case the constructor function is 'Person)

// me.getBio = function() {
//   return "This is fake!";
// };
// setting up the getBio property on the me instance
// setting the getBio instance on the 'me' object instance does NOT change the getBio instance on otherPerson
// for the 'me' instance js will first check on the 'me' object for the getBio property, if it finds it it will not go further up the prototype chain to find any other getBio properties

me.setName("Alexis Turner");
console.log(me.getBio());

const otherPerson = new Person("Thomas", "Ellwood", 8);
// Person.prototype.getBio = function() {
//   return "Testing Testing";
// };
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
