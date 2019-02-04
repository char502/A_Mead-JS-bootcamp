"use strict";

const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

// add todo input box
document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const addedTodo = e.target.elements.addTodo.value;
  todos.push({
    id: uuidv4(),
    text: addedTodo,
    completed: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.addTodo.value = "";
});

// Input for search/filter box
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Checkbox for event listener
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
