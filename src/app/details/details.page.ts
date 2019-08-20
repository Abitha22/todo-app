import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  getTaskId: string;
  taskDetails: Task;
  constructor(private router: ActivatedRoute, private taskService: TaskService) {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
    this.getTaskDetails(this.getTaskId);
  }
  getTaskDetails(id) {
    const tasks = this.taskService.getTask();
    const idvalue = parseInt(id, 10);
    const index = tasks.findIndex(task => task.id === idvalue);
    this.taskDetails = tasks[index];
  }
  updateTask(task) {
    const updateTask = this.taskService.updateTask(task);
  }
  ngOnInit() {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
  }

}
