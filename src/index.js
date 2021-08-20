import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './assets/styles/styles.css';

import changeCompleteStatus from './modules/status.js';
import { displayTask, loadTaskList } from './modules/ui.js'
import { addNewTask } from './modules/add_remove.js';

const taskForm = document.querySelector('#todo-form');
const completeCheckBox = document.querySelectorAll("input[type='checkbox']");



// const addCheckBoxListener = (taskId) => {

// }

// const addCheckBox = () => {
  
//   completeCheckBox.forEach((box) => {
//     box.addEventListener('change', (e) => {
//       const targetBox = e.target;
//       targetBox.parentElement.classList.toggle('strikethrough');
//       changeCompleteStatus(listArray(), targetBox.parentElement.id);
//     });
//   });
// };


// const loadTaskList = (tasksArray) => {
//   tasksArray.forEach((task) => {
//     displayTask(task)
//   });
// };

document.addEventListener('DOMContentLoaded', () => {
  loadTaskList();
  // addCheckBox();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addNewTask()
});
