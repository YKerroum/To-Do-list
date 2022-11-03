
import './style.css';
import tasksList from './functionnalities.js';


const liste= new tasksList();

const fillTasksList = () => {
const Tasks= liste.getTasks();
  document.getElementById('todolist').innerHTML = '';
  Tasks.forEach((element) => {
    document.getElementById('todolist').innerHTML += `
    <li class="task" id="${element.index}">
      <span>
      <input type="checkbox" id="${element.index}check" class="checkbox ${element.completed ? 'inputChecked' : ''}" ${element.completed ? 'checked' : ''}>
      <input type="text" id="${element.index}check" class="description ${element.completed ? 'labelChecked' : ''}" value="${element.description}" disabled>
      </span>
      <span class="hamburger" id="button${element.index}">&#8942;</span>
      </li>
    `;
  });
};

document.getElementById('addForm').addEventListener('submit', () => {
const descr=document.getElementById('addTask');
liste.addTask({description: descr.value});
fillTasksList();
descr.value='';
})

const lbl= document.getElementsByClassName("label");
Array.from(lbl).forEach((el) =>{
el.classList.add('disabled');
  // el.addEventListener('click', () => {
  // const id=parseInt(el.getAttribute('id'));
  // el.classList.add('disabled');
  // });
});


window.addEventListener('load', () => {
  fillTasksList();
});

