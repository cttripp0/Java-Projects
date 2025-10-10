const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskText");
const taskCreateButton = document.getElementById("taskCreateButton");

taskCreateButton.addEventListener("click", createTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});

function createTask() {
  if (taskInput.value !== "") {
    taskText = taskInput.value;
    const task = document.createElement("li");
    task.innerHTML = `<p>${taskText}</p><button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(task);
    const p = task.querySelector("p");
    task.addEventListener("click", () => strikeThrough(p));
  }
  taskInput.value = "";
}

function deleteTask(event) {
  event.parentElement.remove();
}

function strikeThrough(event) {
  if (event.style.textDecoration != "line-through")
    event.style.textDecoration = "line-through";
  else {
    event.style.textDecoration = "none";
  }
}
