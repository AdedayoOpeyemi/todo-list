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
    taskHolder.classList.add = 'taskCard';

    const taskCheck = document.createElement('INPUT');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.classList.add = 'completeStatus';


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
  loadTaskList(taskList);
  addCheckBox();
  
});


const addCheckBox = () => {
  const completeCheckBox = document.querySelectorAll("input[type='checkbox']");
  completeCheckBox.forEach((box) => {
    box.addEventListener('change', (e) => {
      // console.log(box.checked)
      // console.log(box.parentElement)
      console.log(e.target.type)
      // e.target.classList.add("common");
      console.log(e.target.classList);
      console.log(e.target.parentElement);
      console.log(e.target.parentElement.classList);
      // e.target.parentElement.classList.add("strikethrough")
      // console.log(box.parentElement.classList)
    })
  })
}



