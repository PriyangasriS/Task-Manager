const table = [
    { Category: 'Work', Subcategory: 'Meeting', Duration: '00:40:21', Task: 'Project Progress' },
    { Category: 'Personal Space', Subcategory: 'Exercise', Duration: '00:26:22', Task: 'Skipping' },
    { Category: 'Work', Subcategory: 'Project', Duration: '01:32:01', Task: 'Doubts Session' },
    { Category: 'Personal Space', Subcategory: 'Painting', Duration: '00:45:15', Task: 'Nature Art' },
    { Category: 'Work', Subcategory: 'Meeting', Duration: '00:20:21', Task: 'Project Lead Review' },
    { Category: 'Work', Subcategory: 'Meeting', Duration: '00:40:21', Task: 'Project Recorrecting' },
    { Category: 'Personal Space', Subcategory: 'Listening music', Duration: '00:15:22', Task: 'For relaxing' },
    { Category: 'Work', Subcategory: 'Project', Duration: '02:35:01', Task: 'HR Submission' },
    { Category: 'Personal Space', Subcategory: 'Eating', Duration: '00:26:22', Task: 'Lunch' },
    { Category: 'Work', Subcategory: 'Project', Duration: '00:32:01', Task: 'Final Submission' }
];

const tableBody = document.getElementById("tableBody");
function addTaskToTable(subCategory, taskDescription, duration) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${subCategory}</td>
        <td>${subCategory}</td>
        <td>${duration}</td>
        <td>${taskDescription}</td>
        <td><button onclick="updateTask(this)">Update</button><button onclick="deleteTask(this)">Delete</button></td>`;
    tableBody.appendChild(newRow);
}
table.forEach(task => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${task.Category}</td>
        <td>${task.Subcategory}</td>
        <td>${task.Duration}</td>
        <td>${task.Task}</td>
        <td><button onclick="updateTask(this)">Update</button><button onclick="deleteTask(this)">Delete</button></td>`;
    tableBody.appendChild(row);
});


let startTime = null;
let timerInterval = null;
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}
function updateTimer() {
    let currentTime = new Date();
    let elapsedTime = currentTime - startTime;
    let formattedTime = formatTime(elapsedTime);
    document.getElementById("duration").value = formattedTime;
}
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}
function padZero(num) {
    return num.toString().padStart(2, '0');
}
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let category = document.getElementById("Category").value;
    let subCategory = document.getElementById("subCategory").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let duration = document.getElementById("duration").value;
    addTaskToTable(category, subCategory, duration, taskDescription);
    document.getElementById("Category").value = "";
    document.getElementById("subCategory").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("duration").value = "";
});
function addTaskToTable(category, subCategory, duration, taskDescription) {
    let tableBody = document.getElementById("tableBody");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${category}</td>
        <td>${subCategory}</td>
        <td>${duration}</td>
        <td>${taskDescription}</td>
        <td><button onclick="updateTask(this)">Update</button><button onclick="deleteTask(this)">Delete</button></td>`;
    tableBody.appendChild(newRow);
}
function updateTask(button) {
    let row = button.closest("tr");
    let category = row.cells[0].textContent;
    let subCategory = row.cells[1].textContent;
    let duration = row.cells[2].textContent;
    let taskDescription = row.cells[3].textContent;
    document.getElementById("Category").value = category;
    document.getElementById("subCategory").value = subCategory;
    document.getElementById("taskDescription").value = taskDescription;
    document.getElementById("duration").value = duration;
    row.remove();
}
function deleteTask(button) {
    let row = button.closest("tr");
    row.remove();
}

function filterTable() {
    let category = document.getElementById("categorySelect").value;
    let rows = document.querySelectorAll("#tasksTable tbody tr");
    rows.forEach(row => {
        if (category === "all" || row.children[0].textContent === category) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
