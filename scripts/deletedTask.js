document.addEventListener("DOMContentLoaded", () => {
  loadDeletedTasks();
});

function loadDeletedTasks() {
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
  displayDeletedTasks(deletedTasks);
}

function displayDeletedTasks(tasks) {
  const deletedTaskTable = document.getElementById("deletedTaskTable");
  deletedTaskTable.innerHTML = "";

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
    statusCell.textContent = task.status;
    row.appendChild(statusCell);

    const restoreCell = document.createElement("td");
    const restoreButton = document.createElement("button");
    restoreButton.textContent = "Restore";
    restoreButton.onclick = () => restoreTask(index);
    restoreCell.appendChild(restoreButton);
    row.appendChild(restoreCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTaskPermanently(index);
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    deletedTaskTable.appendChild(row);
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

function restoreTask(index) {
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(deletedTasks[index]);
  deletedTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  loadDeletedTasks();
}

function deleteTaskPermanently(index) {
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];
  deletedTasks.splice(index, 1);
  localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  loadDeletedTasks();
}

function filterTasks() {
  const priority = document.getElementById("filterPriority").value;
  const status = document.getElementById("filterStatus").value;
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];

  let filteredTasks = deletedTasks;

  if (priority) {
    filteredTasks = filteredTasks.filter((task) => task.priority === priority);
  }

  if (status) {
    filteredTasks = filteredTasks.filter((task) => task.status === status);
  }

  displayDeletedTasks(filteredTasks);
}
