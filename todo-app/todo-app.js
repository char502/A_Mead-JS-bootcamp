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
  searchText: ""
};
console.log(filters);

const renderTodos = function(todos, filters) {
  const filteredSearch = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const todosToComplete = filteredSearch.filter(function(todo) {
    return !todo.completed;
  });
  console.log(todosToComplete);

  document.querySelector("#searched-todos").innerHTML = "";

  const displayNotComplete = document.createElement("h2");
  displayNotComplete.textContent = `You have ${
    todosToComplete.length
  } todos left to complete`;
  document.querySelector("#searched-todos").appendChild(displayNotComplete);

  // console.log(filteredSearch);
  filteredSearch.forEach(function(todo) {
    console.log(todo.text);
    const todoItem = document.createElement("p");
    todoItem.textContent = todo.text;
    document.querySelector("#searched-todos").appendChild(todoItem);
  });
};

renderTodos(todos, filters);

// add todo input box
document.querySelector("#new-todo").addEventListener("input", function(e) {
  console.log(e.target.value);
});

// add todo button
document.querySelector("#add-todo").addEventListener("click", function(e) {
  console.log("add todo button input", e);
  e.target.textContent = "Button Clicked";
});

// Input for search/filter box
document.querySelector("#search-text").addEventListener("input", function(e) {
  // console.log(e.target.value);
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
