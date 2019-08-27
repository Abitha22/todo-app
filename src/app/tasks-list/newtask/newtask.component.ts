import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent {
  @Output()
  outTaskTitle = new EventEmitter<string>();
  enterTaskTitle(title: HTMLInputElement) {
    if (title.value !== '') {
      this.outTaskTitle.emit(title.value);
      title.value = '';
    }
  }
}
