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

let getSummary = function(book) {
  console.log(`${book.title} by ${book.author}`);
  //   (this.title = title), (this.author = author), (this.pageCount = pageCount);
};

getSummary(myBook);
getSummary(otherBook);

// const getSummary = new Obj("Joe", 5, "blue");
// console.log(createObj);

// const Obj = function(title, author, pageCount) {
//   this.title = title,
//   this.author = author,
//   this.pageCount = pageCount;
// };

// const createObj = new Obj("Joe", 5, "blue");
// console.log(createObj);
