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
  getTaskId;
  taskDetails;
  show ;
  Tasks = this.taskservice.getTask();
  constructor(private router: ActivatedRoute, private taskservice: TaskService) {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
    this.getTaskDetails(this.getTaskId);
  }
  getTaskDetails(id) {
    const tasks = this.taskservice.getTask();
    const idvalue = parseInt(id, 10);
    const index = tasks.findIndex(task => task.id === idvalue);
    this.taskDetails = tasks[index];
  }
  date(date) {
    console.log(date);
    }
  updateTask(task) {
    if (this.date === undefined) {
      this.taskDetails.dueDate = this.taskDetails.dueDate;
    } else {
      this.taskDetails.dueDate = this.date;
    }
    const updateTask = this.taskservice.updateTask(task);
    console.log(updateTask);
  }
  updateDate(date) {
    console.log('update date' + date);
    this.show = true;
    if (date === undefined) {
      this.taskDetails.dueDate = this.taskDetails.dueDate;
    } else {
      this.taskDetails.dueDate = date;
    }
  }

  ngOnInit() {
    this.getTaskId = this.router.snapshot.paramMap.get('id');
  }

}
