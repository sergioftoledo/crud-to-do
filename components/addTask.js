import  checkComplete  from "./checkComplete.js";
import  deleteIcon  from "./deleteTask.js";

//Agregar la tarea
const addTask = e => {
    e.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const inputValue = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY, h:mm');

    input.value = '';
    calendar.value = '';

    
    const taskObjet = {
        inputValue,
        dateFormat
    };
    const task = createTask(taskObjet);
    list.appendChild(task);
    
    
    const tasklist = JSON.parse(localStorage.getItem('task')) || [];
    tasklist.push(taskObjet);
    localStorage.setItem('task', JSON.stringify(tasklist));
}



const createTask = ({ inputValue, dateFormat }) => {
   
    if (inputValue != '') {
        const task = document.createElement('li');
        task.classList.add('card');
        task.classList.add('addTask')

        const taskContent = document.createElement('div');

        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task')
        taskTitle.innerHTML = inputValue;
        task.appendChild(taskContent);
        taskContent.appendChild(checkComplete());

        const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        taskContent.appendChild(taskTitle);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());

        setTimeout(() => {
            addTask
        }, 500);
        return  task
    } else {
        alert('No se puede agregar una tarea vacia')
    }
}

export default addTask;