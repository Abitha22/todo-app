import { Injectable } from '@angular/core';
import { Tasks as sampleTasks } from '../data/tasks';
import { Task } from '../models/task';
import { Filter } from '../models/filter';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  Tasks: Task[];
  constructor() {
    this.Tasks = sampleTasks.map(task => task);
  }
  getTaskDetails(id: string) {
    const idvalue = parseInt(id , 10);
    const index = this.Tasks.findIndex(task => task.id === idvalue);
    return this.Tasks[index];
  }

  getTask(filter?: Filter): Array<Task> {

    const filters = Object.keys(filter || {});
    return this.Tasks.filter(task => {
      return filters.every(filterKey =>
        (filter[filterKey] === undefined || filter[filterKey] === '') ? true : task[filterKey] === filter[filterKey]);
    });
  }




  deleteTask(id: number) {
    const index = this.Tasks.findIndex(task => task.id === id);
    console.log(`got id ${id} index ${index}`);
    if (index < 0) {
      throw Error('id not found');
    }
    this.Tasks.splice(index, 1);
    return this.Tasks;

  }
  addTask(task: Task): Array<Task> {
    this.Tasks.push(task);
    console.log(task);
    return this.Tasks;
  }

  task(title: string) {
     const task: Task = {
      id : this.Tasks.reduce((a, b) => {
        if (a.id > b.id) {
          return {
            id: a.id
          };
        }
        return {
          id: b.id
        };
      }, { id: 0 }).id + 1,
      title,
      important : false,
      createdOn : moment().format('DD/MM/YYYY'),
      dueDate :  moment().format('DD/MM/YYYY')
     };
     return task;
  }
  updateTask(task: Task): Task {
    for (let i = 0; i < this.Tasks.length; i++) {
      if (task.id >= 0) {
        if (task.id === this.Tasks[i].id) {
          this.Tasks[i] = task;
          return this.Tasks[i];
        }
      }
    }
  }
}
