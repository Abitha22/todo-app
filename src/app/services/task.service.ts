import { Injectable } from '@angular/core';
import { Tasks } from '../data/tasks';
import { Task } from '../models/task';
import { Filter } from '../models/filter';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTask(filter?: Filter): Array<Task> {
    if (filter) {
      let filteredTasks = [];
      if (filter.important !== undefined) {
        filteredTasks  = Tasks.filter(tasks => tasks.important === filter.important);
    }
      if (filter.dueDate) {
      filteredTasks = Tasks.filter (tasks => tasks.dueDate === filter.dueDate);
    }
      if (filter.createdOn) {
      filteredTasks = Tasks.filter (tasks => tasks.createdOn === filter.createdOn);
    }
      if (filter.createdOn && filter.dueDate) {
      filteredTasks = Tasks.filter (tasks => tasks.createdOn === filter.createdOn && tasks.dueDate === filter.dueDate);
    }
      return filteredTasks;
  }
    return Tasks;
  }


  deleteTask(id: number): Array<Task> {
    const index = Tasks.findIndex(task => task.id === id);
    Tasks.splice(index, 1);
    return Tasks;
  }
  addTask(task: Task): Array<Task> {
    task.id = Tasks.length + 1;
    Tasks.push(task);
    return Tasks;
  }
  updateTask(task: Task): Array<Task> {
    for (const t of Tasks) {
      if (t.id === task.id) {
        t.title = task.title;
      }
    }
    return Tasks;
  }
}
