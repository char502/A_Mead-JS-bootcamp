// fetch existing todos from localStorage
const getSavedTodos = function() {
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
const saveTodos = function(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render application todos based on filters
const renderTodos = function(todos, filters) {
  const filteredSearch = todos.filter(function(todo) {
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

  const todosToComplete = filteredSearch.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#searched-todos").innerHTML = "";

  document
    .querySelector("#searched-todos")
    .appendChild(generateSummaryDOM(todosToComplete));

  filteredSearch.forEach(function(todo) {
    document
      .querySelector("#searched-todos")
      .appendChild(generateTodoDOM(todo));
  });
};

// Delete item from list on clicking the 'x' button
const deleteButton = function(id) {
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
  const divEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoItem = document.createElement("span");
  const removeButton = document.createElement("button");

  // Configuring the checkbox
  checkbox.setAttribute("type", "checkbox");
  //sets the checkbox to true/false based on whether todo.completed is true/false
  checkbox.checked = todo.completed;
  divEl.appendChild(checkbox);

  // Setup the todo text
  todoItem.textContent = todo.text;
  divEl.appendChild(todoItem);

  // Setup the remove button
  removeButton.textContent = "x";
  divEl.appendChild(removeButton);

  // Steps tp run when 'x' is clicked
  removeButton.addEventListener("click", function() {
    deleteButton(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return divEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function(todosToComplete) {
  const displayNotComplete = document.createElement("h2");
  displayNotComplete.textContent = `You have ${
    todosToComplete.length
  } todos left to complete`;
  return displayNotComplete;
};
