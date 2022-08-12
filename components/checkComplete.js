const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask = e => {
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    element.parentElement.parentElement.classList.toggle('complete')
}

export default checkComplete;