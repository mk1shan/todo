document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function () {
        addTask(taskInput.value);
        taskInput.value = '';
        taskInput.focus();
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        li.textContent = task;
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
