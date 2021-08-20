import changeCompleteStatus from './status.js';
import { getCurrentList, deleteTask } from './add_remove.js'

// const listArray = () => {
//   if (localStorage.getItem('TaskList') == null) {
//     return taskList;
//   }
//   const list = JSON.parse(localStorage.getItem('TaskList'));
//   return list;
// };
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

    const taskDescription = document.createElement('input');
    taskDescription.classList.add('task-details');
    taskDescription.setAttribute('readonly', 'readonly');
    taskDescription.value = task.description;

    const menuButton = document.createElement('span');
    menuButton.classList.add('taskMenu');
    menuButton.innerHTML = '&#8942;';

    const thrashButton = document.createElement('span');
    thrashButton.classList.add('trashButton', 'd-none');
    thrashButton.innerHTML = '&#9986;';

    taskHolder.appendChild(taskCheck);
    taskHolder.appendChild(taskDescription);
    taskHolder.appendChild(menuButton);
    taskHolder.appendChild(thrashButton);

    taskListContainer.appendChild(taskHolder);
    addCheckBoxListener(task.index)
    changeIcon(task.index)
    console.log("added listener for checkbox")
}

const addCheckBoxListener = (taskId) => {
  const taskCheckBox = document.getElementById(taskId).querySelector("input[type='checkbox']")
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

const changeIcon = (taskId) => {
  const taskIcon = document.getElementById(taskId).querySelector(".taskMenu");
  console.log("I found this" + taskIcon)
  // inputs = document.querySelectorAll('.text');
  const trashIcon = document.getElementById(taskId).querySelector(".trashButton")[0];
  console.log(trashIcon)

  const taskInputField = document.getElementById(taskId).querySelector(".task-details");
  // console.log()

  taskInputField.addEventListener('focusin', () => {
    trashIcon.classList.toggle('d-none');
    taskIcon.classList.toggle('d-none');
    taskInputField.removeAttribute('readonly')
  })
 taskInputField.addEventListener('focusout', () => {
    trashIcon.classList.toggle('d-none');
    taskIcon.classList.toggle('d-none');
  })
 

  taskInputField.addEventListener('keydown', (e) => {
    const newDescription =  taskInputField.value;
    if (e.keyCode === 13 & newDescription !== '') {
      const oldValueList = getCurrentList();
      oldValueList[taskId - 1].description = newDescription;
      localStorage.setItem('TaskList', JSON.stringify(oldValueList));

      // var newevent = new Event('focusout')
      // taskInputField.dispatchEvent(newevent);
      taskInputField.blur();
      // taskInputField.setAttribute('readonly', 'readonly');
    }
  })

  trashIcon.addEventListener('click', (e) => {
    console.log("I am here - delete option")
    deleteTask(taskId);
    console.log("I got here")
    clearDisplay();
    loadTaskList();

  })

  // taskIcon.previousSibling.addEventListener('focusin', () => {
  //   trashIcon.classList.toggle('d-none');
  //   taskIcon.classList.toggle('d-none');
  // })

  // taskIcon.previousSibling.addEventListener('focusout', () => {
  //   trashIcon.classList.toggle('d-none');
  //   taskIcon.classList.toggle('d-none');
  // })


  // this.inputs.forEach((input, index) => {
  //   input.addEventListener('focus', () => {
  //     this.trashs[index].classList.toggle('d-none');
  //     input.parentNode.querySelector('.open').classList.toggle('d-none');
  //     input.parentNode.style.backgroundColor = '#f9f9f9';
  //     input.style.backgroundColor = '#f9f9f9';

  //     const allLi = document.querySelector('#list').childNodes;

  //     allLi.forEach((list) => {
  //       const innerInput = list.querySelector('.text');

  //       if (innerInput !== input) {
  //         innerInput.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
  //         innerInput.parentNode.querySelector('.open').classList.remove('d-none');
  //         innerInput.parentNode.style.backgroundColor = '';
  //         innerInput.style.backgroundColor = '';
  //       }
  //     });
  //   });
  // });
}

const loadTaskList = () => {
  getCurrentList().forEach((task) => {
    displayTask(task)
  });
};

const clearDisplay = () => {
  const currentDisplay = document.querySelectorAll('.task-details');
  console.log(currentDisplay)
  currentDisplay.forEach((taskDetail) => {
    taskDetail.parentElement.remove();
  })
}

export { displayTask, loadTaskList, clearDisplay };