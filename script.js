import  checkComplete  from "./components/checkComplete.js";
import  deleteIcon  from "./components/deleteTask.js";

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value;
    if (inputValue != '') {
        input.value = '';
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        task.classList.add('addTask')
        const taskContent = document.createElement('div');
        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task')
        taskTitle.innerHTML = inputValue;
        task.appendChild(taskContent);
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(taskTitle);
        task.appendChild(deleteIcon());
        setTimeout(() => {
            list.appendChild(task);
        }, 500);
    } else {
        alert('No se puede agregar una tarea vacia')
    }
})
