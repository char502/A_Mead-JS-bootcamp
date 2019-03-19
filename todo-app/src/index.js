// Bonus: Add a watcher for local storage

import { renderTodos } from "./views";
import { setFilters } from "./filters";
import { createTodo, loadTodos } from "./todos";

renderTodos();

// Input for search/filter box
document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value
  });
  renderTodos();
});

// add todo input box
document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.text.value = "";
  }
});

// Checkbox for event listener
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked
  });
  renderTodos();
});

window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
