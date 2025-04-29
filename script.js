const input = document.getElementById('ip');
const saveBtn = document.querySelector('.btn');
const todoList = document.querySelector('.todolist');

saveBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value === "") return;

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');

    todoItem.innerHTML = `
        <p class="task-text">${value}</p>
        <div class="btns">
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>`;

    todoList.appendChild(todoItem);
    input.value = "";
});

todoList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('complete')) {
        const todo = target.closest('.todo');
        const p = todo.querySelector('.task-text');

        if (!p.querySelector("input[type='checkbox']")) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = true;
            checkbox.disabled = true;
            checkbox.style.marginRight = "8px";
            p.prepend(checkbox);
        }

        p.style.textDecoration = "line-through";
        p.style.color = "red";
    }

    if (target.classList.contains('delete')) {
        const todo = target.closest('.todo');
        todo.remove();
    }
});
