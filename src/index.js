import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './assets/styles/styles.css';

import changeCompleteStatus from './modules/status.js';
import { clearDisplay, loadTaskList } from './modules/ui.js'
import { addNewTask, getCurrentList } from './modules/add_remove.js';

const taskForm = document.querySelector('#todo-form');
const completeCheckBox = document.querySelectorAll("input[type='checkbox']");
const deleteAllButton = document.querySelector('#delete-all-completed')


document.addEventListener('DOMContentLoaded', () => {
  loadTaskList();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addNewTask()
});

deleteAllButton.addEventListener('click', (e) => {
  const newList = getCurrentList().filter((task) => {
    return task.completed == false
  })
  let i = 1;
  const updatedList = newList.map((task) => {
    console.log(task)
    task.index = i;
    i += 1
    console.log(i)
    console.log(task)
    return task
  })
localStorage.setItem('TaskList', JSON.stringify(updatedList));
clearDisplay()
loadTaskList()
})
