import { displayTask } from './ui.js'

const addNewTask = () => {
  // e.preventDefault();
  const taskDescription = document.querySelector("#new-task").value
  // const description = toDoInput.value;
  const oldList = getCurrentList();
  const newTaskIndex = oldList.length
  oldList.push({
    description: taskDescription,
    completed: false,
    index: newTaskIndex,
  });
  // const oldList = getCurrentList();
  // taskObj.index = oldList.length
  // oldList.push(taskObj)
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