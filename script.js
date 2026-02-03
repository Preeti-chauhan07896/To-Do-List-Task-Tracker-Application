function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    // Left side (checkbox + text)
    let leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.innerText = taskText;

    checkbox.onchange = function () {
        span.classList.toggle("completed");
    };

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
