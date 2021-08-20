import { displayTask } from './ui.js'

const addNewTask = () => {
  const taskDescription = document.querySelector("#new-task").value
  const oldList = getCurrentList();
  const newTaskIndex = oldList.length + 1
  oldList.push({
    description: taskDescription,
    completed: false,
    index: newTaskIndex,
  });
  localStorage.setItem('TaskList', JSON.stringify(oldList));
  displayTask({
    description: taskDescription,
    completed: false,
    index: newTaskIndex,
  })

  console.log(getCurrentList())
} 

const getCurrentList = () => {
  const listFromStorage = JSON.parse(localStorage.getItem('TaskList'));
  return listFromStorage || []
}

export { addNewTask, getCurrentList };