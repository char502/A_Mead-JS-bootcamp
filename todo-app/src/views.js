// Make sure to set up the exports
import { getTodos, toggleTodo, removeTodo } from "./todos";
import { getFilters } from "./filters";

const renderTodos = () => {
  const todoEl = document.querySelector("#searched-todos");

  const { searchText, hideCompleted } = getFilters();

  const filteredSearch = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

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
    renderTodos();
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
    removeTodo(todo.id);
    renderTodos();
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

export { renderTodos, generateTodoDOM, generateSummaryDOM };
