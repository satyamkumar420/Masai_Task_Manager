document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskTable = document.getElementById("taskTable");
  taskTable.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = task.title;
    row.appendChild(titleCell);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = task.priority;
    priorityCell.style.color = getPriorityColor(task.priority);
    row.appendChild(priorityCell);

    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.textContent = task.status;
    statusButton.className = getStatusClass(task.status);
    statusButton.onclick = () => toggleStatus(index);
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeTask(index);
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    taskTable.appendChild(row);
  });
}

function getPriorityColor(priority) {
  switch (priority) {
    case "low":
      return "rgb(0,128,0)";
    case "medium":
      return "rgb(0,0,255)";
    case "high":
      return "rgb(255,0,0)";
    default:
      return "black";
  }
}

function getStatusClass(status) {
  switch (status) {
    case "pending":
      return "status-pending";
    case "in-progress":
      return "status-in-progress";
    case "complete":
      return "status-complete";
    default:
      return "";
  }
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const priority = document.getElementById("taskPriority").value;

  if (!title || !priority) {
    alert("Task cannot be empty!");
    return;
  }

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ title, priority, status: "pending" });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskPriority").value = "";
}

function toggleStatus(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const statuses = ["pending", "in-progress", "complete"];
  const currentStatus = tasks[index].status;
  const nextStatus = statuses[(statuses.indexOf(currentStatus) + 1) % 3];
  tasks[index].status = nextStatus;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
  deletedTasks.push(tasks[index]);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  loadTasks();
}
