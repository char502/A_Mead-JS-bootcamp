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

filters = {
  searchText: ""
};
console.log(filters);

const renderTodos = function(todos, filters) {
  const filteredSearch = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const toComplete = filteredSearch.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#searched-todos").innerHTML = "";

  const completedMessage = document.createElement("h2");
  completedMessage.textContent = `You have ${
    toComplete.length
  } todos left to complete`;
  document.querySelector("#searched-todos").appendChild(completedMessage);

  filteredSearch.forEach(function(todo) {
    const filteredTodo = document.createElement("p");
    filteredTodo.textContent = todo.text;
    document.querySelector("#searched-todos").appendChild(filteredTodo);
  });
};

renderTodos(todos, filters);

// listen for new todo creation
document.querySelector("#add-todo").addEventListener("click", function(e) {
  console.log("adding a new todo");
  e.target.textContent = "button clicked";
});

// new todo search box
document.querySelector("#new-todo").addEventListener("input", function(e) {
  console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  // console.log(e.target.value);
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// ===================================================================
// ===================================================================

// document.querySelector("#new-todo").addEventListener("input", function(e) {
//   console.log(e.target.value);
// });

// // lsiten for new todo creation
// const btn = document
//   .querySelector("#add-todo")
//   .addEventListener("click", function(e) {
//     console.log("adding a new todo");
//     e.target.textContent = "button clicked";
//   });

// Add a new button with some text
// add a listener to that button
// print a message to the console ('adding a new todo')

// =========================================================
// =========================================================

// How many todos still need to complete
// You have have x todos left (p element)

// const ps = document.querySelectorAll("p");

// ps.forEach(function(item) {
//   //   console.log(item.textContent.includes("the"));

//   if (item.textContent.includes("the".toLowerCase())) {
//     item.remove();
//   }
// });
