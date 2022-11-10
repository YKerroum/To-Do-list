import TasksList from '../functionnalities.js';
import { clearCompleted, changeCompleted } from '../completed.js';

const tasks = new TasksList();
describe('add to List', () => {
  test("add a task 'Task1' to local storage and check if it exists on local storage", () => {
  // Arrange
    localStorage.clear();
    const taskObject = {
      description: 'Task1',
      completed: false,
    };

    // Act
    tasks.addTask(taskObject);
    expect((localStorage).getItem('tasks')).toBe(JSON.stringify([{ index: 1, description: 'Task1', completed: false }]));
  });

  test("add a task 'Task2' to local storage and check if it exists on local storage", () => {
  // Arrange
    const taskObject = {
      description: 'Task2',
      completed: true,
    };

    // Act
    tasks.addTask(taskObject);
    expect((localStorage).getItem('tasks')).toContain(JSON.stringify({ index: 2, description: 'Task2', completed: true }));
  });

  test("add a task 'Task3' to local storage and check if it exists on local storage", () => {
  // Arrange
    const taskObject = {
      description: 'Task3',
      completed: false,
    };

    // Act
    tasks.addTask(taskObject);
    expect((localStorage).getItem('tasks')).toContain(JSON.stringify({ index: 3, description: 'Task3', completed: false }));
  });
});

describe('edit a task description', () => {
  test('edit the description of a task from "Task1" to "Exemple1" and check if it changes in localstorage', () => {
    // Arrange
    const id = 1;
    const description = 'Exemple1';

    // Act
    tasks.editTask(id, description);

    // Assert
    expect((localStorage).getItem('tasks')).toContain(JSON.stringify({ index: 1, description: 'Exemple1', completed: false }));
  });
});

describe('update completed status', () => {
  test('change the completed status of "Exemple1" from false to true and check if it changes on local storage', () => {
    // Act
    changeCompleted(1);

    // Assert
    expect((localStorage).getItem('tasks')).toContain(JSON.stringify({ index: 1, description: 'Exemple1', completed: true }));
  });
});

describe('clear completed', () => {
  test('should remove from the list on the local storage the two first tasks and it the localstorage should just keep the task "Task3"', () => {
    // Act
    clearCompleted();

    // Arrange
    expect((localStorage).getItem('tasks')).toBe(JSON.stringify([{ index: 1, description: 'Task3', completed: false }]));
  });
});

describe('Remove from list', () => {
  test("remove the only one task from the list and check if it's length is equal to 0", () => {
    // Arrange
    const id = 1;

    // Act
    tasks.removeTask(id);
    expect(localStorage.getItem('tasks')).toBe('[]');
  });
});

describe('DOM List check', () => {
  test('Add a new task and must find it in the list in the DOM', () => {
    // Arrange
    const fillTasksList = jest.fn(() => {
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
    });

    document.body.innerHTML = '<ul id="todolist" class="listElement"></ul>';
    const taskObject = {
      description: 'Task7',
      completed: false,
    };

    tasks.addTask(taskObject);

    // Act
    fillTasksList();

    const list = document.querySelectorAll('#todolist li');
    // Assert
    expect(list).toHaveLength(1);
  });
});
