import { Component } from '@angular/core';
import {TaskService} from '../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage  {
  tasks;
  constructor(private taskservice: TaskService) {
    this.tasks = this.taskservice.getTask();
    console.log(this.tasks);
  }

  updateTask(task) {
  const updateTask = this.taskservice.updateTask(task);
  console.log(updateTask);
  }

  deleteTask(id) {
    this.tasks = this.taskservice.deleteTask(id);
    console.log(this.tasks);
  }
  addTask(task) {
  this.tasks = this.taskservice.addTask(task);
  console.log(this.tasks);
  }
}
