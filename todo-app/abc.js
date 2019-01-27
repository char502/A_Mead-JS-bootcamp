let todos = [
  {
    text: "Swim 3 lengths",
    completed: true
  },
  {
    text: "Eat dinner",
    completed: false
  },
  {
    text: "Go Fishing",
    completed: true
  },
  {
    text: "Go Running",
    completed: false
  },
  {
    text: "Get some sleep",
    completed: true
  }
];

const filters = {
  searchText: "",
  hideCompleted: false
};
// console.log(filters);

const renderTodos = function(todos, filters) {
  const filteredSearch = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  console.log(filteredSearch);

  // alternative solution to filtering via the checkbox
  // ======================================================
  // filteredTodos = filteredTodos.filter(function(todo) {
  //   return !filters.hideCompleted || !todo.completed;
  // });

  const todosToComplete = filteredSearch.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#searched-todos").innerHTML = "";

  const displayNotComplete = document.createElement("h2");

  displayNotComplete.textContent = `You have ${
    todosToComplete.length
  } todos left to complete`;
  document.querySelector("#searched-todos").appendChild(displayNotComplete);

  filteredSearch.forEach(function(todo) {
    const todoItem = document.createElement("p");
    todoItem.textContent = todo.text;
    document.querySelector("#searched-todos").appendChild(todoItem);
  });

  // if (!filters.hideCompleted) {
  //   filteredSearch.forEach(function(todo) {
  //     const todoItem = document.createElement("p");
  //     todoItem.textContent = todo.text;
  //     document.querySelector("#searched-todos").appendChild(todoItem);
  //   });
  // } else {
  //   todosToComplete.forEach(function(todo) {
  //     const toComplete = document.createElement("p");
  //     toComplete.textContent = todo.text;
  //     document.querySelector("#searched-todos").appendChild(toComplete);
  //   });
  // }
};

renderTodos(todos, filters);

// add todo input box
document
  .querySelector("#add-todo-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const addedTodo = e.target.elements.addTodo.value;
    todos.push({
      text: addedTodo,
      completed: false
    });
    console.log(todos);
    renderTodos(todos, filters);
    e.target.elements.addTodo.value = "";
  });

// add todo button

// Input for search/filter box
document.querySelector("#search-text").addEventListener("input", function(e) {
  // console.log(e.target.value);
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// const hideCompleted = function(todos) {
document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
