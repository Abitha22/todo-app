import { Injectable } from '@angular/core';
import { SampleData } from '../sampleData/sampleTaskData';
import { FilterType } from '../models/filterType';
import { Task } from '../models/Task';

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
        }  else if (filterTaskType.createdOn && filterTaskType.dueDate && filterTaskType.important) {
          this.getFilterTasks = this.tasks.filter(task => task.createdOn === filterTaskType.createdOn &&
                                                          task.dueDate === filterTaskType.dueDate &&
                                                          task.important === filterTaskType.important );
          console.log(this.getFilterTasks);
          return this.getFilterTasks;
        }
    }
    return this.tasks;
   }
  addTask(task: Task) {
    this.tasks = SampleData();
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(id) {
    this.tasks = SampleData();
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
    return this.tasks;
  }
  updateTask(updateTask: Task) {
    for (const task of this.tasks) {
      if (updateTask.id === task.id) {
        task.task = updateTask.task;
      }
    }
  }
}

