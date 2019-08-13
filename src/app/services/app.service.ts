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
  getFilterTasks = [];
  setTask() {
    this.tasks = SampleData();
    console.log(this.tasks);
  }
  getTask(filterTaskType?: FilterType) {
    if (filterTaskType) {
      if (filterTaskType.important) {
        this.getFilterTasks = this.tasks.filter(task => task.important === true);
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
    }
    return this.tasks;
   }
  addTask(task: TaskModel) {
    this.tasks.push(task);
  }
  updateTask(updateTask: TaskModel) {
    for (const task of this.tasks) {
      if (updateTask.id === task.id) {
        task.task = updateTask.task;
      }
    }
  }
}

