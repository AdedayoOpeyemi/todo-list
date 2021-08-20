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

const deleteTask = (taskId) => {
  let i = 1
  const oldList = getCurrentList();
  oldList.splice(taskId-1, 1);
  
  const newList = oldList.map((task) => {
    console.log(task)
    task.index = i;
    i += 1
    console.log(i)
    console.log(task)
    return task
  })
  localStorage.setItem('TaskList', JSON.stringify(newList));
}

const getCurrentList = () => {
  const listFromStorage = JSON.parse(localStorage.getItem('TaskList'));
  return listFromStorage || []
}

export { addNewTask, deleteTask, getCurrentList };