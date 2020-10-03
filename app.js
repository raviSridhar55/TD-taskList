// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListners();

// Load All EventListners
function loadEventListners() {
  // Add Task evnet
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear taskEvent
  clearBtn.addEventListener("click", clearTasks);
  // Filter tasks
  filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("ADD A TASK");
  }

  // Create li elemnt
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item black white-text";
  // add style
  li.style = "padding-top: 5px;";
  // Create a text Node  and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append to li
  li.appendChild(link);
  // append the li to ul
  taskList.appendChild(li);
  // store in local

  // clear input
  taskInput.value = "";

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("ARE YOU SURE")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// ClearTasks

function clearTasks() {
  // taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();

//   document.querySelectorAll(".collection-item").forEach(function (task) {
//     const item = task.firstChild.textContent;
//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = "block";
//     } else {
//       task.style.display = "none";
//     }
//   });
// }
