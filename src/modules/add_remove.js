// import { displayTask } from './ui.js';

const getCurrentList = () => {
  const listFromStorage = JSON.parse(localStorage.getItem('TaskList'));
  return listFromStorage || [];
};

const addNewTask = () => {
  const taskDescription = document.querySelector('#new-task').value;
  const oldList = getCurrentList();
  const newTaskIndex = oldList.length + 1;
  oldList.push({
    description: taskDescription,
    completed: false,
    index: newTaskIndex,
  });
  localStorage.setItem('TaskList', JSON.stringify(oldList));
};

const deleteTask = (taskId) => {
  let i = 1;
  const oldList = getCurrentList();
  oldList.splice(taskId - 1, 1);

  const newList = oldList.map((task) => {
    task.index = i;
    i += 1;
    return task;
  });
  localStorage.setItem('TaskList', JSON.stringify(newList));
};

export { addNewTask, deleteTask, getCurrentList };