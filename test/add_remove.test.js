/**
 * @jest-environment jsdom
 */

import { addNewTask, deleteTask, getCurrentList } from '../src/modules/add_remove.js';
import { displayTask } from '../src/modules/ui.js';

beforeEach(() => {
  const previousList = [{ description: 'task 1', completed: 'false', index: 1 }, { description: 'task 2', completed: 'false', index: 2 }];
  localStorage.setItem('TaskList', JSON.stringify(previousList));

  document.body.innerHTML = `<ul id="taskListContainer"><li><form id="todo-form">
      <input type="text" id="new-task" placeholder="Add to Todo" value="new task added">
      <button id="submit-button"><i class="fas fa-check"></i></button>
      <span></span>
      </form></li></ul>`;
});

afterEach(() => {
  localStorage.clear();
});

describe('addTask method', () => {
  test('Add task to the Local Storage', () => {
    addNewTask();
    expect(getCurrentList().length).toEqual(3);
  });

  test('Add new tasks in dom', () => {
    expect.assertions(2);
    addNewTask();
    displayTask(getCurrentList()[getCurrentList().length - 1]);
    expect(document.querySelectorAll('li').length).toEqual(2);
    addNewTask();
    displayTask(getCurrentList()[getCurrentList().length - 1]);
    expect(document.querySelectorAll('li').length).toEqual(3);
  });
});
