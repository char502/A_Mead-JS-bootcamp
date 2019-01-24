let todos = [
  {
    text: "swim 3 lengths",
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

// lsiten for new todo creation
const btn = document
  .querySelector("#add-todo")
  .addEventListener("click", function(e) {
    console.log("adding a new todo");
    e.target.textContent = "button clicked";
  });

// Add a new button with some text
// add a listener to that button
// print a message to the console ('adding a new todo')

// =========================================================
// =========================================================

// How many todos still need to complete
// You have have x todos left (p element)

const toCompleteMessage = function(todos) {
  let toComplete = todos.filter(function(todo) {
    return !todo.completed;
  });

  const completedMessage = document.createElement("h2");
  completedMessage.textContent = `You have ${
    toComplete.length
  } todos left to complete`;
  document.querySelector("body").appendChild(completedMessage);
  // console.log(toComplete.length);
  // return toComplete.length;
};

toCompleteMessage(todos);
// add a paragraph for each todo above (use text value)
const updateTodos = function(todos) {
  todos.forEach(function(todo) {
    const todoItem = document.createElement("p");
    todoItem.textContent = todo.text;
    document.querySelector("body").appendChild(todoItem);
  });
};

updateTodos(todos);

// const ps = document.querySelectorAll("p");

// ps.forEach(function(item) {
//   //   console.log(item.textContent.includes("the"));

//   if (item.textContent.includes("the".toLowerCase())) {
//     item.remove();
//   }
// });
