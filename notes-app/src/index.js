import { createNote } from "./notes.js";
import { setFilters } from "./filters.js";
import { renderNotes } from "./views";

renderNotes();

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = createNote();
  location.assign(`/edit.html#${id}`);
  // e.target.textContent = "The button was clicked"; // to change the button text
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value
  });
  renderNotes();
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  setFilters({
    sortBy: e.target.value
  });
  renderNotes();
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    renderNotes();
  }
});
