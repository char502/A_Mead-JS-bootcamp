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

// an object to store all the latest filters
const filters = {
  searchText: ""
};

console.log(filters);

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  // console.log(filteredNotes);
  // let title = notes.title
  // let body = notes.body
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const p = document.createElement("p");
    p.textContent = note.title;
    document.querySelector("#notes").appendChild(p);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  console.log("Create Note Clicked");
  console.log(e);
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function() {
  console.log("Remove All Notes Clicked");
  document.querySelectorAll(".note").forEach(function(note) {
    note.remove();
  });
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// using 'input' event on event listener will fire on every single character change
// allows filtering in real time

// =========================================================================

// document.querySelector("#search-text").addEventListener("change", function(e) {
//   console.log(e.target.value);
// });
//
// using 'change' in event listener, only works when click away

// =========================================================================

// e.target.value
// use to access the data that the user typed in
// can also use to override the data from javaScript
// similar concept to textContent with the other eleemnts
//========
// can read a h1's text value using 'textContent', can also set it
//========
// the same is true of our inputs using value

// =========================================================================

// Other selector examples:

// ----Single----
// p
// #replace
// .item

// ----Multiple----
// p#order (paragraph tag with id of order)
// button.inventory (all buttons with a class name of inventory)
// h1#title.application (target a h1 that has an id of 'title' and a class of 'application')
// h1.application#title(target a h1 that has a class of 'application' and an id of 'title')

// order the two come in don't matter, only important thing is that your tag ('p', 'button', 'h1' etc )comes first (when setting up multiple things in your selector)

// =========================================================================

// querySelector - typically used with id's because just one
// querySelectorAll - typically used with classes because trying to get EVERYTHING that has that class
// =========================================================================
// Event Listener = a function to run when an event happens
// target - repesentation of DOM element
// =========================================================================
// can get the element that the event was fired on - e.target (event.target)
// e.target (gives you the element)

// e event arg is useful when want to do something with the element that the event actually fired on

// =============================================================
// =============================================================
// DOM - Document object model

// querySelector - only matches the first match it finds

// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
// const ps = document.querySelectorAll("p");
// // console.log(p);
// ps.forEach(function(item) {
//   item.textContent = "********";
//   //   console.log(item.textContent);
//   //   item.remove();
// });

// Add a new element
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element from JS";
// document.querySelector("body").appendChild(newParagraph);
