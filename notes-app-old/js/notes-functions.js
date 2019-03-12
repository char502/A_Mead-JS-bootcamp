"use strict";

// read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

// save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
  // notes.updatedAt = timeStamp;
};

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p");
  const statusEl = document.createElement("p");

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }

  textEl.classList.add("list-item__title");

  // const link = `/edit.html#${id}`;
  // Setup the note title text as a link

  noteEl.appendChild(textEl);
  // noteEl.appendChild(textEl);

  // Setup the link
  noteEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.classList.add("list-item");

  //Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);

  return noteEl;
};

// Sort notes by criteria
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    // console.log("byCreated selected");
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    // console.log("byCreated selected");
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    // console.log("alphabetical selected");
    // a comes before b (so is a < b)
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

// Render application Notes
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector("#notes");

  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const p = generateNoteDOM(note);
      notesEl.appendChild(p);

      // sortToggle(notes, filters);
    });
  } else {
    const paraForEmpty = document.createElement("p");
    paraForEmpty.textContent = "No notes to show";
    paraForEmpty.classList.add("empty-message");
    notesEl.appendChild(paraForEmpty);
  }
};

// Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last Edited: ${moment(timestamp).fromNow()}`;
};
