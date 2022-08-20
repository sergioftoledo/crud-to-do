import { createTask } from "./addTask.js";
import { uniqueDate, orderDates } from "../service/dates.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
    const list = document.querySelector('[data-list]')
    const taskLocalStorage = JSON.parse(localStorage.getItem('task')) || [];
    const dates = uniqueDate(taskLocalStorage);
    orderDates(dates);
    
    dates.forEach(date => {
        const dateMoment = moment( date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date))
        taskLocalStorage.forEach(task => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if (diff === 0) {
                list.appendChild(createTask(task));
            }
        });
    })

}