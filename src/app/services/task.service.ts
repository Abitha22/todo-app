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
      if (filter.important === true) {
        const filteredTasks = Tasks.filter(tasks => tasks.important === filter.important);
        return filteredTasks;
      } else {
        const filteredTasks = Tasks.filter(tasks => tasks.important === false);
        return filteredTasks;
      }
    }
    return Tasks;
  }
}
