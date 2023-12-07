const jsonData = [
    { text: "Zadatak 1" },
    { text: "Zadatak 2" },
    { text: "Zadatak 3" }
];

document.addEventListener("DOMContentLoaded", function () {
    // Prikazi postojeće zadatke iz JSON-a
    displayTasks(jsonData);
});

function addTask() {
    const inputElement = document.getElementById('new-task');
    const taskText = inputElement.value;

    if (taskText.trim() !== '') {
        const newTask = { text: taskText };
        jsonData.push(newTask);
        displayTasks(jsonData);
        inputElement.value = ''; // Clear input field after adding the task
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

    // Provera da li je kliknuto na <button> element
    if (clickedElement.tagName === 'BUTTON' && clickedElement.classList.contains('done-button')) {
        const listItem = clickedElement.parentNode;
        const sourceListId = listItem.parentNode.id;
        const destinationListId = sourceListId === 'todo-list-1' ? 'todo-list-2' : 'todo-list-1';

        // Kopiranje elementa iz jedne liste u drugu
        const clonedElement = listItem.cloneNode(true);
        document.getElementById(destinationListId).appendChild(clonedElement);

        // Uklanjanje originalnog elementa iz prvobitne liste
        listItem.parentNode.removeChild(listItem);
    }
}