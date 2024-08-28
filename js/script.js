document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskText = document.getElementById("taskInput").value;

  if (taskText === "") {
    alert("Per continuare inserisci un nuovo elemento  ");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", function () {
    this.classList.toggle("completato");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  document.getElementById("taskInput").value = "";
});
