import { Injectable } from '@angular/core';
import { Tasks } from '../data/tasks';
import { Filter } from '../models/filter';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  tasks = [];
  getFilterTasks = [];
  setTask() {
    this.tasks = Tasks;
    console.log(this.tasks);
  }
  getTask(filterTaskType?: Filter) {
    if (filterTaskType) {
      if (filterTaskType.important) {
        this.getFilterTasks = this.tasks.filter(task => task.important === filterTaskType.important);
        console.log(this.getFilterTasks);
        return this.getFilterTasks;
      }
      if (filterTaskType.dueDate) {
        this.getFilterTasks = this.tasks.filter(task => task.dueDate === filterTaskType.dueDate);
        console.log(this.getFilterTasks);
        return this.getFilterTasks;
      }
      if (filterTaskType.createdOn) {
        this.getFilterTasks = this.tasks.filter(task => task.createdOn === filterTaskType.createdOn);
        console.log(this.getFilterTasks);
        return this.getFilterTasks;
      }
      if (filterTaskType.createdOn && filterTaskType.dueDate) {
        this.getFilterTasks = this.tasks.filter(task => task.createdOn === filterTaskType.createdOn &&
          task.dueDate === filterTaskType.dueDate);
        console.log(this.getFilterTasks);
        return this.getFilterTasks;
      } else if (filterTaskType.createdOn && filterTaskType.dueDate && filterTaskType.important) {
        this.getFilterTasks = this.tasks.filter(task => task.createdOn === filterTaskType.createdOn &&
          task.dueDate === filterTaskType.dueDate &&
          task.important === filterTaskType.important);
        console.log(this.getFilterTasks);
        return this.getFilterTasks;
      }
    }
    return this.tasks;
  }
  addTask(task: TaskModel) {
    this.tasks = Tasks;
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(id: number) {
    this.tasks = Tasks;
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
    return this.tasks;
  }
  updateTask(updateTask: TaskModel) {
    for (const task of this.tasks) {
      if (updateTask.id === task.id) {
        task.task = updateTask.title;
      }
    }
  }
}

