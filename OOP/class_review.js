class Person {
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

const me = new Person("Charlotte", "Ellwood", 35, ["karate", "biking"]);
me.setName("Alexis Turner");
console.log(me.getBio());

const otherPerson = new Person("Thomas", "Ellwood", 8, ["karate", "avatar"]);

console.log(otherPerson.getBio());
