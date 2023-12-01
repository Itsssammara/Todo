document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.innerText = todoText;

            todoItem.addEventListener('click', function() {
                this.classList.toggle('complete');
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';

            deleteButton.addEventListener('click', function() {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', function() {
        const items = Array.from(todoList.children);
        items.sort(function(a, b) {
            const textA = a.innerText.toLowerCase();
            const textB = b.innerText.toLowerCase();

            if (textA < textB) { return -1; }
            if (textA > textB) { return 1; }
            return 0;
        });

        todoList.innerHTML = '';
        items.forEach(function(item) {
            todoList.appendChild(item);
        });
    });
});
