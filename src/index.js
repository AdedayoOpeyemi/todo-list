import './assets/styles/styles.css';
import { changeCompleteStatus } from './modules/status';

const bookList = document.querySelector('#booklist');


const taskList = [
  {
    description: 'Spend an hour doing job search and networking',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the library for study',
    completed: false,
    index: 2,
  },
  {
    description: 'Repair of car at the service center',
    completed: false,
    index: 3,
  },
  {
    description: 'make grocery purchases for the house',
    completed: false,
    index: 4,
  },
  {
    description: 'Go see a movie for relaxation',
    completed: false,
    index: 5,
  },
];

const loadTaskList = (tasksArray) => {
  tasksArray.forEach((task) => {
    const taskHolder = document.createElement('li');
    taskHolder.setAttribute('id', task.index);
    taskHolder.classList.add = 'taskCard';

    const taskCheck = document.createElement('INPUT');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.classList.add = 'completeStatus';
    taskCheck.checked = task.completed;
    if (task.completed) {
      taskHolder.classList.toggle('strikethrough')
    }


    const taskDescription = document.createElement('p');
    taskDescription.innerText = task.description;

    const menuButton = document.createElement('span');
    menuButton.classList.add = 'taskMenu';
    menuButton.innerHTML = '&#8942;';

    taskHolder.appendChild(taskCheck);
    taskHolder.appendChild(taskDescription);
    taskHolder.appendChild(menuButton);

    bookList.appendChild(taskHolder);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  loadTaskList(listArray());
  const completeCheckBox = document.querySelectorAll("input[type='checkbox']")
  addCheckBox();
});


const addCheckBox = () => {
  const completeCheckBox = document.querySelectorAll("input[type='checkbox']")
  completeCheckBox.forEach((box) => {
    console.log(box)
    box.addEventListener('change', (e) => {
      const targetBox = e.target
      targetBox.parentElement.classList.toggle("strikethrough")
      changeCompleteStatus(listArray(), targetBox.parentElement.id)

    })
  })
}

const listArray = () => {
  if (localStorage.getItem('TaskList') == null) {
    return taskList
  } else {
    const list = JSON.parse(localStorage.getItem('TaskList'))
    // console.log(list)
    return list
  }
}

const stat= () => {

}



