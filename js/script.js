document.getElementById("addTaskButton").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Per continuare inserisci un nuovo elemento  ");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;
  taskSpan.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("completato");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "🗑️";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", function (event) {
    event.currentTarget.parentNode.remove();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  input.value = "";
});
