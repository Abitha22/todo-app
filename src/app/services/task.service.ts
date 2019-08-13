import { Injectable } from '@angular/core';
import { Tasks } from '../data/tasks';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTask(): Array<Task> {
    return Tasks;
  }

}

