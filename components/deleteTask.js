const deleteIcon =  () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i
}

const deleteTask = e => {
    const parent = e.target.parentElement;
    parent.classList.toggle('removeTask');
    setTimeout(() => {
        parent.remove();
    }, 500);
}

export default deleteIcon;