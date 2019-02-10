// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

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

// const me = new Person("Charlotte", "Ellwood", 35, ["karate", "biking"]);
// me.setName("Alexis Turner");
// console.log(me.getBio());

// const otherPerson = new Person("Thomas", "Ellwood", 8, ["karate", "avatar"]);

// console.log(otherPerson.getBio());

// === Sub Class - a class that inherits behaviour from person ===

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes); // gives acces to the parent's constructor function
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

// const me = new Employee("Charlotte", "Ellwood", 35, "Teacher", [
//   "karate",
//   "biking"
// ]);
// me.setName("Alexis Turner");
// console.log(me.getBio());
// console.log(me.getYearsLeft());

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing";

    return `${this.firstName} is ${status} the class`;
  }
  updateGrade(updateGradeAmount) {
    return `${
      this.firstName
    }'s new Grade is: ${(this.grade += updateGradeAmount)}`;
  }
}

const firstStudent = new Student("Sophie", "Ellwood", 5, 92, ["gymnastics"]);

console.log(firstStudent);
console.log(firstStudent.getBio());
console.log(firstStudent.updateGrade(-30));
console.log(firstStudent.getBio());
console.log(firstStudent.updateGrade(35));
console.log(firstStudent.getBio());
