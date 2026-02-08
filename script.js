/* --- YOUR EXISTING CODE --- */

function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = input.value.trim();

    if (taskText === '') return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="delete">X</span>
    `;

    li.querySelector(".task-text").onclick = function() {
        li.classList.toggle("checked");
    };

    li.querySelector(".delete").onclick = function() {
        li.remove();
    };

    taskList.appendChild(li);
    input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

/* --- ADD THE NEW STOPWATCH CODE BELOW THIS LINE --- */

let timer;
let seconds = 0;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startBtn").innerText = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    // This formats the numbers to always have two digits (e.g., 05 instead of 5)
    document.getElementById("display").innerText = 
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startBtn").innerText = "Start";
}
