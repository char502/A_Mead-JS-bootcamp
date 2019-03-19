import uuidv4 from "uuid/v4";

let todos = [];

// fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    todos = [];
  }
};

// save todos to local storage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Expose notes from module
const getTodos = () => todos;

const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text: text,
    completed: false
  });
  saveTodos();
};

// Delete item from list on clicking the 'x' button
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
  }
};

// toogle the completed value for a given todo
const toggleTodo = (id) => {
  let todoUUID = todos.find((todo) => todo.id === id);
  if (todoUUID) {
    todoUUID.completed = !todoUUID.completed;
    saveTodos();
  }
};

loadTodos();

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo };
