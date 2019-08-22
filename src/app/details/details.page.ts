import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  getTaskId;
  taskDetails;
  show;
  constructor(private router: ActivatedRoute, private taskservice: TaskService) {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
    this.taskDetails = this.taskservice.getTaskDetails(this.getTaskId);
  }
  updateTask(task) {
    this.taskservice.updateTask(task);
  }
  updateDate(date) {
    this.show = true;
    if (date !== undefined) {
      this.taskDetails.dueDate = date;
      this.show = false;
    }
  }
}
