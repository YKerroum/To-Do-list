import './style.css';
import TasksList from './functionnalities.js';
import { clearCompleted, changeCompleted } from './completed.js';

const liste = new TasksList();

const fillTasksList = () => {
  const liste = new TasksList();
  const Tasks = liste.getTasks();
  document.getElementById('todolist').innerHTML = '';
  Tasks.forEach((element) => {
    document.getElementById('todolist').innerHTML += `
    <li class="task" id="${element.index}">
      <input type="checkbox" id="${element.index}check" class="checkbox ${element.completed ? 'inputChecked' : ''}" ${element.completed ? 'checked' : ''}>
      <form action="#" class="editForm">
      <input type="text" id="${element.index}text" class="description ${element.completed ? 'labelChecked' : ''}" value="${element.description}" readonly="true">
      </form>
      <span class="hamburger" id="button${element.index}">&#8942;</span>
      </li>
    `;
  });

  document.querySelectorAll('.description').forEach((element) => {
    element.addEventListener('click', (e) => {
      if (e.target.getAttribute('readonly')) {
        const li = e.target.closest('.task');
        li.style.backgroundColor = 'rgb(228, 250, 115,0.540)';
        li.lastElementChild.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        li.lastElementChild.addEventListener('click', () => {
          const id = li.getAttribute('id');
          liste.removeTask(id);
          fillTasksList();
        });
        e.target.removeAttribute('readonly');
      }
    });
  });

  document.querySelectorAll('.checkbox').forEach(((element) => {
    element.addEventListener('change', (e) => {
      const id = parseInt(e.target.getAttribute('id'), 10);
      changeCompleted(id);
      fillTasksList();
    });
  }));

  document.querySelectorAll('.editForm').forEach((element) => {
    element.addEventListener('submit', () => {
      const el = element.firstElementChild;
      const id = parseInt(el.getAttribute('id'), 10);
      liste.editTask(id, el.value);
      fillTasksList();
    });
  });
};

window.addEventListener('load', () => {
  document.getElementById('addTask').addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      const descr = document.getElementById('addTask');
      liste.addTask({ description: descr.value });
      fillTasksList();
      descr.value = '';
    }
  });
  fillTasksList();
  document.getElementById('clear').addEventListener('click', () => {
    clearCompleted();
    fillTasksList();
  });
});
