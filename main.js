// Select the required elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// Create an array to store the to-do items
let todos = [];

// Create a function to render the to-do items
function renderTodos() {
  // Clear the existing list items
  ul.innerHTML = '';

  // Loop through the to-do items and create list items for each
  todos.forEach(todo => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('click', () => {
      todo.completed = !todo.completed;
      renderTodos();
    });
    const span = document.createElement('span');
    span.textContent = todo.title;
    if (todo.completed) {
      span.style.textDecoration = 'line-through';
    }
    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
  });
}

// Create a function to add a new to-do item
function addTodo() {
  // Get the value of the input field
  const title = input.value.trim();

  // If the input field is not empty, create a new to-do item
  if (title) {
    todos.push({
      title,
      completed: false
    });
    input.value = '';
    renderTodos();
  }
}

// Add an event listener to the form to handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

// Render the initial to-do list
renderTodos();
