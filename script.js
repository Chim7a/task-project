const TASK_INPUT = document.getElementById("task-input");
const ADD_TASK_BTN = document.getElementById("add-task-btn");
const TASK_LIST = document.getElementById("task-list");
// Array to Store all the users task.
let allMyTask = [];

// Function to add a task to my task array
const addNewTask = (event) => {
  event.preventDefault();

  const task = TASK_INPUT.value;
  const taskId = Math.floor(Math.random() * 999);
  if (task === "") {
    alert("Add a Task");
  }

  //   Adding new task to allMyTaskArray
  allMyTask.unshift({
    taskId: taskId,
    task: task,
  });
  displayAllMyTask();

  //   Clearing input field
  TASK_INPUT.value = "";
};

ADD_TASK_BTN.addEventListener("click", addNewTask);

function displayAllMyTask() {
  let taskElements = [];

  //   for (let i = 0; i < allMyTask.length; i++) {
  //     taskElements.push(
  //       `
  //         <li class="p-2 flex justify-between">
  //         <span>${allMyTask[i].task}</span>
  //         <button onClick="deleteTask(${allMyTask[i].taskId})" class="bg-red-400 text-white rounded-md text-sm p-1">
  //         Delete
  //         </button>
  //         </li>
  //      `
  //     );
  //   }

  allMyTask.map((task) => {
    taskElements.push(
      `
        <li class="p-2 flex justify-between">
        <span>${task.task}</span>
        <button onClick="deleteTask(${task.taskId})" class="bg-red-400 text-white rounded-md text-sm p-1">
        Delete
        </button>
        </li>
     `
    );
  });

  TASK_LIST.innerHTML = taskElements.join("");
}

function deleteTask(taskId) {
  console.log(taskId);
}
