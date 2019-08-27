import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage {

  tasks: Array<Task>;
  constructor(private taskservice: TaskService, public router: Router) {
    this.tasks = this.taskservice.getTask();
  }
  unImportant(task: Task): null {
    task.important = !task.important;
    this.taskservice.updateTask(task);
    return null;
  }
  important(task: Task): null {
    task.important = !task.important;
    this.taskservice.updateTask(task);
    return null;
  }
  taskDetails(task: Task): null {
    this.router.navigate(['tasks-list/details', task.id]);
    return null;
  }
  deleteTask(id: number): null {
    this.tasks = this.taskservice.deleteTask(id);
    return null;
  }
  addTask(title: string): null {
   this.tasks = this.taskservice.addTask({title});
   return null;
  }
}
