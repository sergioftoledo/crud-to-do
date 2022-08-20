const checkComplete = id => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', e => completeTask(e, id));
    return i;
}

const completeTask = (e, id) => {
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem('task'))
    const index = tasks.findIndex(task => task.id === id);
    tasks[index]['complete'] = !tasks[index]['complete'];
    localStorage.setItem('task', JSON.stringify(tasks));
    }

export default checkComplete;