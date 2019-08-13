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
      const filterTasks = Tasks.filter(tasks => tasks.important === filter.important);
      return filterTasks;
    }
    return Tasks;
  }
}
