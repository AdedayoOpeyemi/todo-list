import { loadTaskList, clearDisplay } from './ui.js';
import { getCurrentList } from './add_remove.js';

const deleteCompletedTasks = () => {
  const newList = getCurrentList().filter((task) => task.completed === false);
  let i = 1;
  const updatedList = newList.map((task) => {
    task.index = i;
    i += 1;
    return task;
  });
  localStorage.setItem('TaskList', JSON.stringify(updatedList));
  clearDisplay();
  loadTaskList();
};

export { deleteCompletedTasks as default };