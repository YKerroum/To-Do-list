export default class TasksList {
  // Counter to keep track of tasks index
  constructor() {
    this.count = this.getTasks().length + 1;
  }

  // Call to tasks from storage with get item
  getTasks() {
    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task) {
    const newTask = {
      index: this.count,
      description: task.description,
      completed: task.completed || false,
    };

    const localTasks = this.getTasks();
    localTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(localTasks));
    this.count += 1;
  }

  editTask(id, description) {
    const editedTasks = this.getTasks().map((task) => {
      if (task.index === id) {
        return { ...task, description };
      }

      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(editedTasks));
  }

  removeTask(id) {
    const i = parseInt(id, 10);
    const localTasks = this.getTasks();
    const filteredTasks = localTasks.filter((task) => task.index !== i);
    filteredTasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  }
}
