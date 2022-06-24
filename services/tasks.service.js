const { v4: uuidv4 } = require("uuid");

// Simulate Task database. Don't need to understand this code!
class Task {
  static tasks = [];

  static find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Task.tasks);
      }, Math.random() * 2000);
    });
  }

  static create(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newTask = { ...task, id: uuidv4() };
        Task.tasks.push(newTask);
        resolve(newTask);
      }, Math.random() * 2000);
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Task.tasks.find((task) => task.id === id));
      }, Math.random() * 2000);
    });
  }

  static findByIdAndDelete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Task.tasks = Task.tasks.filter((task) => task.id !== id);
        resolve();
      }, Math.random() * 2000);
    });
  }
}

module.exports = Task;
