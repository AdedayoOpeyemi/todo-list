import changeCompleteStatus from './status.js';
import { getCurrentList } from './add_remove.js'

const listArray = () => {
  if (localStorage.getItem('TaskList') == null) {
    return taskList;
  }
  const list = JSON.parse(localStorage.getItem('TaskList'));
  return list;
};
const taskListContainer = document.querySelector('#taskListContainer');

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

    const taskDescription = document.createElement('p');
    taskDescription.innerText = task.description;

    const menuButton = document.createElement('span');
    menuButton.classList.add = 'taskMenu';
    menuButton.innerHTML = '&#8942;';

    taskHolder.appendChild(taskCheck);
    taskHolder.appendChild(taskDescription);
    taskHolder.appendChild(menuButton);

    taskListContainer.appendChild(taskHolder);
    addCheckBoxListener(task.index)
    console.log("added listener for checkbox")
}

const addCheckBoxListener = (taskId) => {
  const taskCheckBox = document.getElementById(taskId)
  // console.log(taskCheckBox)
  taskCheckBox.addEventListener('change', (e) => {
    const targetBox = e.target;
    // console.log(targetBox.parentElement)

    // console.log(taskCheckBox)
    // taskCheckBox.classList.toggle('strikethrough');
    targetBox.parentElement.classList.toggle('strikethrough')
    // console.log(targetBox.parentElement.id)
    changeCompleteStatus(getCurrentList(), targetBox.parentElement.id);
  });
  
}

const loadTaskList = () => {
  getCurrentList().forEach((task) => {
    displayTask(task)
  });
};

export { displayTask, loadTaskList };