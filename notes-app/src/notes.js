import uuidv4 from "uuid/v4";
import moment from "moment";
let notes = [];

const loadNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

// Expose notes from module
const getNotes = () => notes;

const createNote = () => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp
  });
};

notes = loadNotes();

export { getNotes, createNote };
