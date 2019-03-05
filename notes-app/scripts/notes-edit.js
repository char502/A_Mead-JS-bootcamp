"use strict";

const titleElement = document.querySelector("#note-title");
const dateElement = document.querySelector("#last-edited");
const bodyElement = document.querySelector("#note-body");
const removeNoteButton = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId);
if (!note) {
  location.assign("/index.html");
}

// const updated = note.updatedAt;
// const updatedAt = moment(updated).fromNow();
// console.log(updated);
// console.log(updatedAt);

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeNoteButton.addEventListener("click", () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

// By using the storage event on 'window' were able to watch for changes on local storage and respond accordingly
// will not fire for current page - only duplicate pages (which is the desired behaviour)
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("/index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
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
