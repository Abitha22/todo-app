import { Injectable } from '@angular/core';
import { Tasks } from '../data/tasks';
import { Task } from '../models/task';
import {Filter} from '../models/filter';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTask(filter ?: Filter): Array<Task> {
    if (filter) {
      if (filter.important) {
      const getFilteredTasks = Tasks.filter(task => task.important === true);
      return getFilteredTasks;
      }
    }
    return Tasks;
}
}
