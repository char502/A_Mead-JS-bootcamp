const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeNoteButton = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", function(e) {
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", function(e) {
  note.body = e.target.value;
  saveNotes(notes);
});

removeNoteButton.addEventListener("click", function(e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find(function(note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign("/index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
  }
});
// The storage event fires when any of the data in local storage changes (this allows updating of what the user sees)
// The storage event only fires on the OTHER pages

// const compareId = function(noteId, notes) {
//   const result = notes.some(function(note) {
//     return note.id === noteId;
//   });
//   if (result) {
//     console.log("there is a match");
//   } else {
//     console.log(", please pick a new note");
//     location.assign("/index.html");
//   }
//   console.log(result);
// };

// console.log(noteId, notes);
// compareId(noteId, notes);

// const getSavedNotes = function () {
//     const notesJSON = localStorage.getItem("notes");
