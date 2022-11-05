const changeCompleted = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find((t) => t.index === id);
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const clearCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const unCompleted = tasks.filter((t) => t.completed === false);
  localStorage.setItem('tasks', JSON.stringify(unCompleted));
};

export { clearCompleted, changeCompleted };