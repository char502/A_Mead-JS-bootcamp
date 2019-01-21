// can't reassign a constant after it has been created

// const isRaining = true;

// isRaining = false;

// console.log(isRaining);

// =================================

const person = {
  age: 27
};

// with const, can't change it to a new object
// can still manipulate properties on that object i.e. change the name

person.age = 29;

// person = {};
// isRaining = false;

console.log(person);
