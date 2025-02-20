document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        todoItem.appendChild(deleteButton);
        todoItem.appendChild(completeButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
});
