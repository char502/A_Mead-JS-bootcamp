// const square = (num) => num * num;

// console.log(square(5));

const people = [
  {
    name: "Andrew",
    age: 27
  },
  {
    name: "Vikram",
    age: 31
  },
  {
    name: "Jess",
    age: 22
  }
];

// const under30 = people.filter((person) => person.age < 30);
// console.log(under30);

// const person2 = (people) => {
//   const result = people.filter((person) => person.age === 22);
//   return result;
// };

const person2 = people.find((person) => person.age === 22);

console.log(person2.name);

// console.log(`the person age 22 is ${person2.name}`);
