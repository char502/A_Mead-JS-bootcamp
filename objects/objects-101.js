let obj = {
  name: "Thomas",
  age: 8,
  Location: "Reading"
};

console.log(obj);

console.log(`${obj.name} is ${obj.age} and lives in ${obj.Location}`);

obj.age = obj.age + 1;

console.log(`${obj.name} is ${obj.age} and lives in ${obj.Location}`);

// const Obj = function(name, age, eyeCol) {
//   (this.name = name), (this.age = age), (this.eyeCol = eyeCol);
// };

// const createObj = new Obj("Joe", 5, "blue");
// console.log(createObj);
