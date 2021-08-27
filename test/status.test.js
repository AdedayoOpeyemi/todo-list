/**
 * @jest-environment jsdom
 */

import changeCompleteStatus from '../src/modules/status.js';
import { addNewTask, getCurrentList } from '../src/modules/add_remove.js';
import { displayTask } from '../src/modules/ui.js';

beforeEach(() => {
  const previousList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 2', completed: false, index: 2 }];
  localStorage.setItem('TaskList', JSON.stringify(previousList));

  document.body.innerHTML = `<ul id="taskListContainer"><li><form id="todo-form">
      <input type="text" id="new-task" placeholder="Add to Todo" value="brand new task added">
      <button id="submit-button"><i class="fas fa-check"></i></button>
      <span></span>
      </form></li></ul>`;
});

afterEach(() => {
  localStorage.clear();
});

describe('changeCompletedStatus method', () => {
  test('Change status updates the completed property in local storage', () => {
    expect.assertions(4);
    addNewTask();
    expect(getCurrentList()[getCurrentList().length - 1]).toEqual({ description: 'brand new task added', completed: false, index: 3 });
    expect(getCurrentList()[getCurrentList().length - 1].completed).toBeFalsy();
    changeCompleteStatus(getCurrentList(), 3);
    expect(getCurrentList()[3 - 1]).toEqual({ description: 'brand new task added', completed: true, index: 3 });
    expect(getCurrentList()[getCurrentList().length - 1].completed).toBeTruthy();
  });

  test('change status updates in the dom tasks in dom', () => {
    expect.assertions(3);
    addNewTask();
    displayTask(getCurrentList()[getCurrentList().length - 1]);
    expect(document.querySelectorAll('li').length).toEqual(2);
    addNewTask();
    displayTask(getCurrentList()[getCurrentList().length - 1]);
    expect(document.getElementsByTagName('li')[1].querySelector("input[type='checkbox']").checked).toBeFalsy();
    document.body.innerHTML = `<ul id="taskListContainer"><li><form id="todo-form">
      <input type="text" id="new-task" placeholder="Add to Todo" value="brand new task added">
      <button id="submit-button"><i class="fas fa-check"></i></button>
      <span></span>
      </form></li></ul>`;
    changeCompleteStatus(getCurrentList(), 1);
    displayTask(getCurrentList()[0]);
    expect(document.getElementsByTagName('li')[1].querySelector("input[type='checkbox']").checked).toBeTruthy();
  });
});