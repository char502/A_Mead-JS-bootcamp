// Bonus: Add a watcher for local storage

import { renderTodos, generateTodoDOM, generateSummaryDOM } from "./views.js";
import { setFilters } from "./filters";
import { createTodo } from "./todos";

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
  e.preventDefault();
  const text = e.target.elements.addTodo.value.trim();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.addTodo.value = "";
  }
});

// Checkbox for event listener
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked
  });
  renderTodos();
});
