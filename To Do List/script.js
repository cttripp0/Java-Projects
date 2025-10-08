const task = document.querySelector("#task");
const taskList = document.querySelector("#taskList");
const taskSubmit = document.querySelector("#taskSubmit");
let removeButton;

function getTaskText() {
  // Get value of input text
  return task.value;
}

function createTask(text) {
  // Creates list item, assigns list item text, and adds list item to the task list
  const listItem = document.createElement("li");
  listItem.innerText = text;
  taskList.appendChild(listItem);

  // Creates Remove button, assigns text to remove button, and adds the button within the list item
  removeButton = document.createElement("button");
  removeButton.innerText = "Remove Task";
  listItem.appendChild(removeButton);
}

function removeTask() {
  console.log(removeButton.parentElement);
}

taskSubmit.addEventListener("click", () => {
  createTask(getTaskText());
});

if (removeButton) {
  removeButton.addEventListener("click", () => {
    console.log(removeButton.parentElement);
  });
}