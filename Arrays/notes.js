// const notes = ["Note 1", "Note 2", "Note 3"];

const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain"
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better"
  },
  {
    title: "Office Modification",
    body: "Get a new Seat"
  }
];

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

// -1 (if a should come first)
// 1 (if b should come first)
// 0 the order doesn't need to be changed
// ====================================================================
// console.log('a' < 'b') // returns true (a comes before b)
// console.log('March' < 'January') // returns false ('j' comes first)
// console.log('a' < 'A') // false - capital letters always come first
// ====================================================================
// ====== This can be addressed by converting everything to lowercase before doing a comparison ================

sortNotes(notes);
console.log(notes);

// ================================================================

// const findFilteredText = function(notes, toFind) {
//   return notes.filter(function(note) {
//     const isTitleMatch = note.title
//       .toLowerCase()
//       .includes(toFind.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(toFind.toLowerCase());
//     return isTitleMatch || isBodyMatch;
//   });
//     console.log(foundText);
// };

// const result = findFilteredText(notes, "Office");
// console.log(findFilteredText(notes, "eating"));

// console.log(
//   notes.push({
//     title: "some other note",
//     body: "This is a new note"
//   })
// );

// function(note, index) {
//     return note.title === noteTitle;
// }

// ================================================================

// using findIndex

// const findNote = function(notes, noteTitle) {
//   let index = notes.findIndex(function(note, index) {
//     // console.log(note.title.toLowerCase());
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "office modification");
// console.log(note);
// -1 if can't find what searching for
// ===================================================================

// using find

// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// const note = findNote(notes, "office modification");
// console.log(note);

// undefined if can't find what looking for

// ============================================================

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title === noteTitle;
//   });
//   console.log(index);
//   return notes[index];
// };

// const note = findNote(notes, "Office Modification");
// console.log(note);

// console.log(notes.length);
// console.log(notes);

// ===================================================================

// FindIndex

// let findEmptyObject = function(note, index) {
//   return el === {};
// };

// const index = notes.findIndex(function(note, index) {
//   console.log(note);
//   return note === "Habits to work on";
// });
// lloks for first match it finds, when it finds it, it stops running the function

// console.log(index);

// ===================================================================

// console.log(notes.indexOf({}));
// objects are only equal to other objects if they are the excact same object,
// it does not matter if two separate objects have the same properties with the same property values

// ===================================================================

// console.log(notes[1]);

// console.log(notes.push("Note 4"));
// console.log(notes.pop());
// console.log(notes);

//console.log(notes.shift())
// notes.unshift('my first note')

// notes.splice(1, 1);

// to provide new item
// notes.splice(1, 1, "newly added item");

// notes.forEach((note, index) => {
//   console.table(note);
//   console.table(index);
// });

// console.log(notes);

// =============================================

// Increment
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// Decrement
// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }
