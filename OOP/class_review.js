// const Person = function(firstName, lastName, age, likes = []) {
//   //   console.log(this);
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like} `;
    });
    return bio;
  }
  setName(fullName) {
    console.log(this);
    const names = fullName.split(" ");
    console.log(names);
    this.firstName = names[0];
    console.log(this.firstName);
    this.lastName = names[1];
    console.log(this.lastName);
  }
}

const myPerson = new PersonClass("Charlotte", "Ellwood", 35, [
  "karate",
  "biking"
]);

console.log(myPerson);
console.log(myPerson.getBio());

const me = new PersonClass("Charlotte", "Ellwood", 35, ["karate", "biking"]); //

me.setName("Alexis Turner");
console.log(me.getBio());

const otherPerson = new PersonClass("Thomas", "Ellwood", 8, [
  "karate",
  "avatar"
]);

console.log(otherPerson.getBio());
