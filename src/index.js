import _ from 'lodash';
import './style.css';
class task {
  constructor() {
    this.description="";
    this.completed=false;
    this.index=0;
  }
}

const fillTasksList= (liste) => {
liste=liste.sort((a,b) =>  a.index - b.index );
  liste.forEach((element) => {
    document.getElementById("todolist").innerHTML+=`
    <li class="task" id="${element.index}">
      <span>
      <input type="checkbox" id="check${element.index}" class=${element.completed? "inputChecked" : ""} ${element.completed? "checked" : ""}>
      <label for="check${element.index}" class=${element.completed? "labelChecked" : ""}>${element.description}</label>
      </span>
      <span class="hamburger" id="button${element.index}">&#8942;</span>
      </li>
    `;

  });
  document.getElementById("todolist").innerHTML+=`
  <button type="button">Clear all completed</button>
  `;
};
window.addEventListener('load', () => {
const tasks=[{ 'description': 'wash the dishes', 'completed':false, 'index': 0},
{ 'description': 'complete To do list', 'completed':true, 'index': 1}];
fillTasksList(tasks);

}
)