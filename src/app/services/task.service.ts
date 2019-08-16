import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { Filter } from "../models/filter";
import { Tasks } from "../data/tasks";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  getTask(filter?: Filter): Array<Task> {
    const filters = Object.keys(filter || {});
    return Tasks.filter(task => {
      console.log(filter);
      return filters.every(filterKey =>
        (filter[filterKey] === undefined || filter[filterKey] === '') ? true : task[filterKey] === filter[filterKey]);
    });
  }

  deleteTask(id: number): Array<Task> {
    const index = Tasks.findIndex(task => task.id === id);
    Tasks.splice(index, 1);
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
