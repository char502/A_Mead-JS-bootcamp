let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A People's History",
  author: "Howard Zinn",
  pageCount: 723
};

// passing an object into a function

// let getSummary = function(book) {
//   console.log(`${book.title} by ${book.author}`);
//   (this.title = title), (this.author = author), (this.pageCount = pageCount);
// };

// getSummary(myBook);
// getSummary(otherBook);

// returning an object from a function

//==================================================================

// let getSummary = function(book) {
//   return {
//     summary: `${book.title} by ${book.author}`,
//     pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//   };
// };
// let bookSummary = getSummary(myBook);
// let otherBookSummary = getSummary(otherBook);

// console.log(bookSummary.pageCountSummary);
// console.log(otherBookSummary.summary);

// ===================================================================

// create a function that returns an object

// return an object that contains all 3 temps
// pass in fahrenheit and convert to both Celsius and Kelvin

let convTemps = function(fahrenheit) {
  return {
    fahrenheit: `${fahrenheit}`,
    Kelvin: `${(fahrenheit + 459.67) / 1.8}`,
    Celsius: `${(fahrenheit - 32) / 1.8}`
  };
};

let temp = convTemps(74);
// let tempC = convTemps(64);
// let tempK = convTemps(120);
console.log(temp);
// console.log(tempC);
// console.log(tempK);

// let convertFahrenheitToCelsius = function (fah) {
//     //   console.log("welcome user");
//     let convert = (fah - 32) / 1.8;
//     return convert;
// };

// let conv = convertFahrenheitToCelsius(32);
// let convOther = convertFahrenheitToCelsius(68);
// console.log(conv);
// console.log(convOther);

// let celsius = (fahrenheit - 32) / 1.8;
// let kelvin = (fahrenheit + 459.67) / 1.8;

// =====================================================================

// console.log(`${book.title} by ${book.author}`);

//   (this.title = title), (this.author = author), (this.pageCount = pageCount);
// };

// const getSummary = new Obj("Joe", 5, "blue");
// console.log(createObj);

// const Obj = function(title, author, pageCount) {
//   this.title = title,
//   this.author = author,
//   this.pageCount = pageCount;
// };

// const createObj = new Obj("Joe", 5, "blue");
// console.log(createObj);
