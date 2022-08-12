( () => {

    const btn = document.querySelector('[data-form-btn]');
    
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const inputValue = input.value;
        input.value = '';
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        const taskContent = document.createElement('div');
        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task')
        taskTitle.innerHTML = inputValue;
        task.appendChild(taskContent);
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(taskTitle);
        const content = `
        <i class="fas fa-trash-alt trasIcon icon"></i>`
        list.appendChild(task);
    })
    
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
})();