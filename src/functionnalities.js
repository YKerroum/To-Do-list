export default class tasksList {
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
      id: this.count,
      title: book.title,
      author: book.author,
    };

    const books = this.getBooks();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    this.count += 1;
  }

  removeBook(id) {
    const books = this.getBooks();
    const filteredBooks = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
  }
}
