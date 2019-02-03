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
  // notes.updatedAt = timeStamp;
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
  const textEl = document.createElement("a");
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

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }

  // const link = `/edit.html#${id}`;
  // Setup the note title text as a link
  textEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.appendChild(textEl);
  // noteEl.appendChild(textEl);

  return noteEl;
};

// Sort notes by criteria
const sortNotes = function(notes, sortBy) {
  if (sortBy === "byEdited") {
    // console.log("byCreated selected");
    return notes.sort(function(a, b) {
      if (a.updatedAt < b.updatedAt) {
        return -1;
      } else if (b.createdAt < a.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    // console.log("byCreated selected");
    return notes.sort(function(a, b) {
      if (a.createdAt < b.createdAt) {
        return -1;
      } else if (b.createdAt < a.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    // console.log("alphabetical selected");
    return notes.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      } else if (b.title < a.title) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

// Render application Notes
const renderNotes = function(notes, filters) {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const p = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(p);

    // sortToggle(notes, filters);
  });
};

// Generate the last edited message
const generateLastEdited = function(timestamp) {
  return `Last Edited: ${moment(timestamp).fromNow()}`;
};
