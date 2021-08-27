/**
 * @jest-environment jsdom
 */
import  { deleteCompletedTasks } from '../src/modules/deletecompletedtasks.js';
import { addNewTask, getCurrentList } from '../src/modules/add_remove.js';
import { displayTask } from '../src/modules/ui.js';
beforeEach(() => {
  const previousList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 2', completed: false, index: 2 }];
  localStorage.setItem('TaskList', JSON.stringify(previousList));
  document.body.innerHTML = `<ul id="taskListContainer"><li><form id="todo-form">
      <input type="text" id="new-task" placeholder="Add to Todo" value="brand new task added">
      <button id="submit-button"><i class="fas fa-check"></i></button>
      <span></span>
      </form></li></ul>
      <div id="delete-all-completed">
      <span>Delete all completed Task</span>
    </div>`;
});
afterEach(() => {
  localStorage.clear();
});
getCurrentList().forEach((taskDetail) => {
  taskDetail.parentElement.remove();
});
describe('DeleteAllTasks method', () => {
  test('Deletes the selected tasks from the dom when it is run', () => {
    expect.assertions(4);
    addNewTask();
    getCurrentList().forEach((task) => {
      displayTask(task)
    })
    expect(document.getElementsByTagName('li').length).toBe(4)
    document.querySelectorAll("input[type='checkbox']")[0].dispatchEvent(new window.MouseEvent('click'));
    expect(document.getElementsByTagName('li')[1].querySelector("input[type='checkbox']").checked).toBeTruthy()
    document.querySelectorAll("input[type='checkbox']")[1].dispatchEvent(new window.MouseEvent('click'));
    expect(document.getElementsByTagName('li')[2].querySelector("input[type='checkbox']").checked).toBeTruthy()
    deleteCompletedTasks()
    expect(document.getElementsByTagName('li').length).toBe(2)
  });
  test('Deletes the selected tasks from the localStorage', () => {
    expect.assertions(5);
    addNewTask();
    getCurrentList().forEach((task) => {
      displayTask(task)
    })
    expect(getCurrentList().length).toBe(3)
    document.querySelectorAll("input[type='checkbox']")[0].dispatchEvent(new window.MouseEvent('click'));
    expect(document.getElementsByTagName('li')[1].querySelector("input[type='checkbox']").checked).toBeTruthy()
    document.querySelectorAll("input[type='checkbox']")[1].dispatchEvent(new window.MouseEvent('click'));
    expect(document.getElementsByTagName('li')[2].querySelector("input[type='checkbox']").checked).toBeTruthy()
    deleteCompletedTasks()
    expect(document.getElementsByTagName('li').length).toBe(2)
    expect(getCurrentList().length).toBe(1)
  });
});