import TasksList from '../functionnalities.js';

const tasks = new TasksList();
describe('add to List', () => {
  test("add a task to local storage and check if it's length is equal to 1", () => {
  // Arrange
    localStorage.clear();
    const taskObject = {
      description: 'Task1',
      completed: true,
    };

    // Act
    tasks.addTask(taskObject);
    expect((localStorage).getItem('tasks')).toBe(JSON.stringify([{ index: 1, description: 'Task1', completed: true }]));
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