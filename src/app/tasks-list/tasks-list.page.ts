import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '../../../node_modules/@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage {

  tasks;
  constructor(private taskservice: TaskService, public router: Router) {
    this.tasks = this.taskservice.getTask();
  }
  unImportant(task) {
    task.important = !task.important;
    this.taskservice.updateTask(task);
  }
  important(task) {
    task.important = !task.important;
    this.taskservice.updateTask(task);
  }
  updateTask(task) {
    const updateTask = this.taskservice.updateTask(task);
    this.router.navigate(['tasks-list/details', task.id]);
  }
  deleteTask(id) {
    this.tasks = this.taskservice.deleteTask(id);
  }
  addTask(task: Task) {
    this.tasks = this.taskservice.addTask(task);
    console.log(this.tasks);
  }
}
