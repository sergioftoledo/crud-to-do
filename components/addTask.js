import { uniqueDate } from "../service/dates.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteTask.js";
import { displayTask } from "./displayTask.js";

//Agregar la tarea
const addTask = e => {
    e.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    
    const inputValue = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    if (inputValue === '' || date === '') {
        return
    }
    input.value = '';
    calendar.value = '';
    const complete = false;
    

    const taskObjet = {
        inputValue,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = '';
    
    const tasklist = JSON.parse(localStorage.getItem('task')) || [];
    tasklist.push(taskObjet);
    localStorage.setItem('task', JSON.stringify(tasklist));

    displayTask();
}


export const createTask = ({ inputValue, dateFormat, complete, id }) => {
    const task = document.createElement('li');
    task.classList.add('card');
    task.classList.add('addTask');
    
    const check = checkComplete(id);
    
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const taskContent = document.createElement('div');

    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task')
    taskTitle.innerHTML = inputValue;
    taskContent.appendChild(check);
    taskContent.appendChild(taskTitle);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon(id));

    return task
}

export default addTask;