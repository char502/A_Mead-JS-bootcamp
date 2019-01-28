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

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
  const p = document.createElement("p");

  if (note.title.length > 0) {
    p.textContent = note.title;
  } else {
    p.textContent = "Unnamed note";
  }
  return p;
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
