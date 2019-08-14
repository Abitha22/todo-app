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
      if (filter.dueDate) {
        const filtereTasks = Tasks.filter(tasks => tasks.dueDate === filter.dueDate);
        return filtereTasks;
      }
      const filteredTasks = Tasks.filter(tasks => tasks.important === filter.important);
      return filteredTasks;
    }
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
