import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent {
  important = false;
  id = undefined;
  createdOn = undefined;
  dueDate = undefined;
  @Output()
  outEnterTask = new EventEmitter<Task>();
  enterTask(task) {
    this.outEnterTask.emit({
      id: this.id,
      title: task.value,
      important: this.important,
      createdOn: this.createdOn,
      dueDate: this.dueDate
    });
    task.value = '';
  }
}
