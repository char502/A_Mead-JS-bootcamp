"use strict";

// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render application todos based on filters
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector("#searched-todos");

  const filteredSearch = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  //   console.log(filteredSearch);
  //   console.log(todos);

  // alternative solution to filtering via the checkbox
  // ======================================================
  // filteredTodos = filteredTodos.filter(function(todo) {
  //   return !filters.hideCompleted || !todo.completed;
  // });

  const todosToComplete = filteredSearch.filter((todo) => !todo.completed);

  todoEl.innerHTML = "";

  todoEl.appendChild(generateSummaryDOM(todosToComplete));

  if (filteredSearch.length > 0) {
    filteredSearch.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const noTodos = document.createElement("p");
    noTodos.classList.add("empty-message");
    noTodos.textContent = "There are no todos to display";
    todoEl.appendChild(noTodos);
  }
};

// Delete item from list on clicking the 'x' button
const deleteButton = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toogle the completed value for a given todo
const toggleTodo = (id) => {
  let todoUUID = todos.find((todo) => todo.id === id);
  if (todoUUID) {
    todoUUID.completed = !todoUUID.completed;
  }
};
// const toggleTodo = function(id) {
//   const todoToToggle = todos.findIndex(function(todo) {
//     return todo.id === id;
//   });
//   // console.log(todoToToggle);
//   todos[todoToToggle].completed = !todos[todoToToggle].completed;
// };

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const divEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoItem = document.createElement("span");
  const removeButton = document.createElement("button");

  // Configuring the checkbox
  checkbox.setAttribute("type", "checkbox");
  //sets the checkbox to true/false based on whether todo.completed is true/false
  checkbox.checked = todo.completed; // this caught me out!!

  containerEl.appendChild(checkbox);
  // toggles the completed property of a todo from true to false
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text
  todoItem.textContent = todo.text;
  containerEl.appendChild(todoItem);

  // Setup the remove button

  // Setup container
  divEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  divEl.appendChild(containerEl);

  // Setup the remove button
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  divEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    deleteButton(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return divEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (todosToComplete) => {
  const displayNotComplete = document.createElement("h2");
  displayNotComplete.classList.add("list-title");

  const plural = todosToComplete.length === 1 ? "" : "s";

  displayNotComplete.textContent = `You have ${
    todosToComplete.length
  } todo${plural} left to complete`;

  return displayNotComplete;
};
