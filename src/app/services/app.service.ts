import { Injectable } from '@angular/core';
import { SampleData } from '../sampleData/sampleTaskData';
import { FilterType } from '../models/filterType';
import { TaskModel } from '../models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  tasks = [];
  getFilterTask = [];
  setTask() {
    this.tasks = SampleData();
    console.log(this.tasks);
  }
  getTask(filterTaskType?: FilterType) {

    return this.tasks;

  }
  addTask(task: TaskModel) {
    this.tasks.push(task);
  }
  updateTask(updateTask: TaskModel) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (updateTask.id === this.tasks[i].id) {
        this.tasks[i].task = updateTask.task;
      }
    }
  }
}

