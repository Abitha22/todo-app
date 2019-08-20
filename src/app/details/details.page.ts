import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  getTaskId;
  taskDetails;
  Tasks = this.taskservice.getTask();
  constructor(private router: ActivatedRoute, private taskservice: TaskService) {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
    this.getTaskDetails(this.getTaskId);
  }

  getTaskDetails(id) {
    const Tasks = this.taskservice.getTask();
    const idvalue = parseInt(id, 10);
    const index = Tasks.findIndex(task => task.id === idvalue);
    this.taskDetails = Tasks[index];
  }
  updateTask(task) {
    const updateTask = this.taskservice.updateTask(task);
  }
  ngOnInit() {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
  }

}
