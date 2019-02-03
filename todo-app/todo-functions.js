// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
    // return the parsed data - whoever calls the function will be able to access the parsed data via the returned value
  } else {
    return [];
    // if there is no data when fetch from localStorage, will start off with an empty array
  }
};

// save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render application todos based on filters
const renderTodos = (todos, filters) => {
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

  document.querySelector("#searched-todos").innerHTML = "";

  document
    .querySelector("#searched-todos")
    .appendChild(generateSummaryDOM(todosToComplete));

  filteredSearch.forEach((todo) => {
    document
      .querySelector("#searched-todos")
      .appendChild(generateTodoDOM(todo));
  });
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
  if (todoUUID !== undefined) {
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
  const divEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoItem = document.createElement("span");
  const removeButton = document.createElement("button");

  // Configuring the checkbox
  checkbox.setAttribute("type", "checkbox");
  //sets the checkbox to true/false based on whether todo.completed is true/false
  checkbox.checked = todo.completed; // this caught me out!!
  divEl.appendChild(checkbox);
  // toggles the completed property of a todo from true to false
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text
  todoItem.textContent = todo.text;
  divEl.appendChild(todoItem);

  // Setup the remove button
  removeButton.textContent = "x";
  divEl.appendChild(removeButton);

  // Steps tp run when 'x' is clicked
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
  displayNotComplete.textContent = `You have ${
    todosToComplete.length
  } todos left to complete`;
  return displayNotComplete;
};
