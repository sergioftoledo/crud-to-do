import { displayTask } from "./displayTask.js";

const deleteIcon = id => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', () => deleteTask(id));
    return i
}

const deleteTask = id => {
    const list = document.querySelector('[data-list]');
    const deleteTaskLocalStorage = JSON.parse(localStorage.getItem('task'));
    const index = deleteTaskLocalStorage.findIndex(task => task.id === id);


    deleteTaskLocalStorage.splice(index, 1);
    list.innerHTML = '';
    localStorage.setItem('task', JSON.stringify(deleteTaskLocalStorage));
    displayTask();
}

export default deleteIcon;