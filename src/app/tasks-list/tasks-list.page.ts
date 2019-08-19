import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage {

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
