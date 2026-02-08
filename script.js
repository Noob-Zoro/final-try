function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = input.value.trim();

    if (taskText === '') return;

    // Create the list item element
    const li = document.createElement("li");
    
    // Set internal HTML for the task text and the delete button
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="delete">X</span>
    `;

    // Click text to toggle "checked" status
    li.querySelector(".task-text").onclick = function() {
        li.classList.toggle("checked");
    };

    // Click X to remove the task
    li.querySelector(".delete").onclick = function() {
        li.remove();
    };

    // Add to the list and clear input
    taskList.appendChild(li);
    input.value = "";
}

// Allow "Enter" key to add tasks
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
