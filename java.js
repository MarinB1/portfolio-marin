const jsonData = [
    { text: "Zadatak 1" },
    { text: "Zadatak 2" },
    { text: "Zadatak 3" }
];

document.addEventListener("DOMContentLoaded", function () {
    displayTasks(jsonData);
});

function addTask() {
    const inputElement = document.getElementById('new-task');
    const taskText = inputElement.value;

    if (taskText.trim() !== '') {
        const newTask = { text: taskText };
        jsonData.push(newTask);
        displayTasks(jsonData);
        inputElement.value = ''; 
    }
}

function displayTasks(tasks) {
    const todoList = document.getElementById('todo-list-1');
    todoList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button class="done-button" onclick="moveItem(event)">Done</button>
        `;

        todoList.appendChild(listItem);
    });
}

function moveItem(event) {
    const clickedElement = event.target;

    
    if (clickedElement.tagName === 'BUTTON' && clickedElement.classList.contains('done-button')) {
        const listItem = clickedElement.parentNode;
        const sourceListId = listItem.parentNode.id;
        const destinationListId = sourceListId === 'todo-list-1' ? 'todo-list-2' : 'todo-list-1';

        
        const clonedElement = listItem.cloneNode(true);
        document.getElementById(destinationListId).appendChild(clonedElement);

        
        listItem.parentNode.removeChild(listItem);
    }
}