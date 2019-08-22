import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage  {
  getTaskId;
  taskDetails;
  constructor(private router: ActivatedRoute, private taskService: TaskService) {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
    this.taskDetails = this.taskService.getTaskDetails(this.getTaskId);
  }
  updateTask(task: Task) {
    return this.taskService.updateTask(task);
     }
}
