// read existing notes from localStorage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
    // return the parsed data - whoever calls the function will be able to access the parsed data via the returned value
  } else {
    return [];
    // if there is no data when fetch from localStorage, will start off with an empty array
  }
};

// save the notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Remove a note from the list
const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "x";
  // button.setAttribute("id", "remove-button")
  noteEl.appendChild(button);
  button.addEventListener("click", function() {
    // console.log(note)

    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }

  noteEl.appendChild(textEl);

  return noteEl;
};

// Render application Notes
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const p = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(p);
  });
};
