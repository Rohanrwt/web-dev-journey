const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // ✅ Toggle line-through when clicking the task
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // ❌ Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";

  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering the line-through when removing
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = "";
});
