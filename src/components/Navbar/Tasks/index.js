// // import { addTask, getTasks, editTask, deleteTask } from "./tasksService.js";

// // // Grab DOM elements
// // const form = document.getElementById("task-form");
// // const input = document.getElementById("new-task");
// // const list = document.getElementById("task-list");

// // // Function to render the current list of tasks
// // async function renderTasks() {
// //   const tasks = await getTasks();
// //   list.innerHTML = "";

// //   tasks.forEach(task => {
// //     const li = document.createElement("li");
// //     li.setAttribute("data-id", task.id);

// //     const titleInput = document.createElement("input");
// //     titleInput.value = task.title;
// //     titleInput.onchange = async () => {
// //       await editTask(task.id, { title: titleInput.value });
// //       renderTasks();
// //     };

// //     const delBtn = document.createElement("button");
// //     delBtn.textContent = "Delete";
// //     delBtn.onclick = async () => {
// //       await deleteTask(task.id);
// //       renderTasks();
// //     };

// //     li.appendChild(titleInput);
// //     li.appendChild(delBtn);
// //     list.appendChild(li);
// //   });
// // }

// // // Submit handler for adding a new task
// // form.onsubmit = async e => {
// //   e.preventDefault();
// //   const title = input.value.trim();
// //   if (!title) return;

// //   await addTask({ title, completed: false });
// //   input.value = "";
// //   renderTasks();
// // };

// // // Initial render on page load
// // renderTasks();

// import { addTask, getTasks, editTask, deleteTask } from "./tasks.js";

// const form = document.getElementById("task-form");
// const input = document.getElementById("new-task");
// const list = document.getElementById("task-list");

// // Render tasks including edit/delete functionality
// async function renderTasks() {
//   const tasks = await getTasks();
//   list.innerHTML = ""; // clear existing items

//   // Optionally sort by creation time
//   tasks.sort((a, b) => a.createdAt - b.createdAt);

//   tasks.forEach(task => {
//     const li = document.createElement("li");
//     li.dataset.id = task.id;

//     // Editable title input
//     const titleInput = document.createElement("input");
//     titleInput.value = task.title;
//     titleInput.onchange = async () => {
//       await editTask(task.id, { title: titleInput.value });
//       renderTasks(); // re-render after update
//     };

//     // Delete button
//     const delBtn = document.createElement("button");
//     delBtn.textContent = "Delete";
//     delBtn.onclick = async () => {
//       await deleteTask(task.id);
//       renderTasks(); // re-render after deletion
//     };

//     li.append(titleInput, delBtn);
//     list.appendChild(li);
//   });
// }

// // Add-task handler
// form.onsubmit = async e => {
//   e.preventDefault();
//   const title = input.value.trim();
//   if (!title) return;

//   await addTask({ title, completed: false });
//   input.value = "";
//   renderTasks(); // refresh list
// };

// // Initial render
// renderTasks();
