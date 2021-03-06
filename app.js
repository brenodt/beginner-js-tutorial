// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);
todoList.addEventListener('click', checkMarkAsDone);
filterOption.addEventListener('click', filterTodos);

// Functions
function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('delete-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function checkDelete(event) {
    const item = event.target;
    if (item.classList[0] !== 'delete-btn') return;
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => todo.remove());
}

function checkMarkAsDone(event) {
    const item = event.target;
    if (item.classList[0] !== 'complete-btn') return;
    item.parentElement.classList.toggle('completed');
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}