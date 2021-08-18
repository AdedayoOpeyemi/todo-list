import _ from 'lodash';
import './assets/styles/styles.css';

const bookList  = document.querySelector("#booklist")
// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

const taskList = [
  { 
    description: "Spend an hour doing job search and networking",
    completed: false,
    index: 1
  },
  { 
    description: "Go to the library for study",
    completed: false,
    index: 2
  },
  { 
    description: "Repair of car at the service center",
    completed: false,
    index: 3
  },
  { 
    description: "make grocery purchases for the house",
    completed: false,
    index: 4
  },
  { 
    description: "Go see a movie for relaxation",
    completed: false,
    index: 5
  }
]

const loadTaskList = (tasksArray) => {
  

  tasksArray.forEach((task) => {
    const taskHolder = document.createElement('li')
    taskHolder.classList.add = "taskCard"

    const taskCheck = document.createElement("INPUT");
    taskCheck.setAttribute("type", "checkbox");

    const taskDescription = document.createElement('p')
    taskDescription.innerText = task.description

    const menuButton = document.createElement('span')
    menuButton.classList.add = "taskMenu"
    menuButton.innerHTML = "&#8942;"

    console.log(task)
    // taskHolder.innerHtml = `
    // <p>${task.description}</p>
    // <span>;</span>`

    console.log(taskHolder)
    taskHolder.appendChild(taskCheck)
    taskHolder.appendChild(taskDescription)
    taskHolder.appendChild(menuButton)
    
    bookList.appendChild(taskHolder)

  })
}

document.addEventListener('DOMContentLoaded', loadTaskList(taskList))