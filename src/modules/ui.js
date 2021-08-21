/* eslint-disable no-use-before-define */

import changeCompleteStatus from './status.js';
import { getCurrentList, deleteTask } from './add_remove.js';

const taskListContainer = document.querySelector('#taskListContainer');

const clearDisplay = () => {
  const currentDisplay = document.querySelectorAll('.task-details');
  currentDisplay.forEach((taskDetail) => {
    taskDetail.parentElement.remove();
  });
};

const addCheckBoxListener = (taskId) => {
  const taskCheckBox = document.getElementById(taskId).querySelector("input[type='checkbox']");

  taskCheckBox.addEventListener('change', (e) => {
    const targetBox = e.target;
    targetBox.parentElement.classList.toggle('strikethrough');
    changeCompleteStatus(getCurrentList(), targetBox.parentElement.id);
  });
};

const loadTaskList = () => {
  getCurrentList().forEach((task) => {
    displayTask(task);
  });
};

const displayTask = (task) => {
  const taskHolder = document.createElement('li');
  taskHolder.setAttribute('id', task.index);
  taskHolder.classList.add = 'taskCard';

  const taskCheck = document.createElement('INPUT');
  taskCheck.setAttribute('type', 'checkbox');
  taskCheck.classList.add = 'completeStatus';
  taskCheck.checked = task.completed;
  if (task.completed) {
    taskHolder.classList.toggle('strikethrough');
  }

  const taskDescription = document.createElement('input');
  taskDescription.classList.add('task-details');
  taskDescription.setAttribute('readonly', 'readonly');
  taskDescription.value = task.description;

  const menuButton = document.createElement('span');
  menuButton.classList.add('taskMenu');
  menuButton.innerHTML = '&#8942;';

  const thrashButton = document.createElement('span');
  thrashButton.classList.add('trashButton', 'd-none');
  thrashButton.innerHTML = '&#9986;';

  taskHolder.appendChild(taskCheck);
  taskHolder.appendChild(taskDescription);
  taskHolder.appendChild(menuButton);
  taskHolder.appendChild(thrashButton);

  taskListContainer.appendChild(taskHolder);
  addCheckBoxListener(task.index);
  changeIcon(task.index);
};

const changeIcon = (taskId) => {
  const taskIcon = document.getElementById(taskId).querySelector('.taskMenu');
  const trashIcon = document.getElementById(taskId).querySelector('.trashButton');
  const taskInputField = document.getElementById(taskId).querySelector('.task-details');

  trashIcon.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTask(taskId);
    clearDisplay();
    loadTaskList();
  });

  taskInputField.addEventListener('focusin', () => {
    taskInputField.removeAttribute('readonly');
  });

  taskInputField.addEventListener('click', () => {
    trashIcon.classList.remove('d-none');
    taskIcon.classList.add('d-none');
    taskInputField.removeAttribute('readonly');
  });

  taskIcon.addEventListener('click', () => {
    taskIcon.classList.toggle('d-none');
    trashIcon.classList.toggle('d-none');
    taskInputField.focus();
  });

  taskInputField.addEventListener('keydown', (e) => {
    const newDescription = taskInputField.value;
    if (e.keyCode === 13 && newDescription !== '') {
      const oldValueList = getCurrentList();
      oldValueList[taskId - 1].description = newDescription;
      localStorage.setItem('TaskList', JSON.stringify(oldValueList));
      taskInputField.blur();
      trashIcon.classList.add('d-none');
      taskIcon.classList.remove('d-none');
    }
  });
};

export { displayTask, loadTaskList, clearDisplay };