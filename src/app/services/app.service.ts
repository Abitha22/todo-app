import { Injectable } from '@angular/core';
import { SampleData } from '../sampleData/sampleTaskData';
import { FilterType } from '../models/filterType';
import { TaskModel } from '../models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  tasks = []
  constructor() { }
  setTask() {
    this.tasks = SampleData();
    console.log(this.tasks)
  }
  getFilterTask = []
  getTask(filterTaskType?: FilterType) {

    return this.tasks;

  }
  updateTask(updateTask: TaskModel) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (updateTask.id === this.tasks[i].id) {
        this.tasks[i].task = updateTask.task
      }
    }
  }
}

