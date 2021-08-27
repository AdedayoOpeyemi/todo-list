/**
 * @jest-environment jsdom
 */

import { editTaskDescription } from '../src/modules/ui.js';
import { addNewTask, getCurrentList } from '../src/modules/add_remove.js';

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

describe('Edit task description method', () => {
  test('changes the value of task description in local storage', () => {
    expect.assertions(4);
    addNewTask();
    expect(getCurrentList()[getCurrentList().length - 1]).toEqual({ description: 'brand new task added', completed: false, index: 3 });
    expect(getCurrentList()[getCurrentList().length - 1].description).toBe('brand new task added');
    editTaskDescription(3, 'This is an updated description');
    expect(getCurrentList()[3 - 1]).toEqual({ description: 'This is an updated description', completed: false, index: 3 });
    expect(getCurrentList()[getCurrentList().length - 1].description).toBe('This is an updated description');
  });
});
