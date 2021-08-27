import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import './assets/styles/styles.css';

import { loadTaskList, displayTask } from './modules/ui.js';
import { addNewTask, getCurrentList } from './modules/add_remove.js';
import deleteCompletedTasks from './modules/deletecompletedtasks.js';

const taskForm = document.querySelector('#todo-form');
const deleteAllButton = document.querySelector('#delete-all-completed');
const newTaskInput = document.querySelector('#new-task');

document.addEventListener('DOMContentLoaded', () => {
  loadTaskList();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTask();
  const newT = getCurrentList().length;
  displayTask(getCurrentList()[newT - 1]);
  newTaskInput.value = '';
});

deleteAllButton.addEventListener('click', () => {
  deleteCompletedTasks();
});
