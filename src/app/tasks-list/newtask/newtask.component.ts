import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent {
  @Output()
  outTaskTitle = new EventEmitter<string>();
  enterTaskTitle(title: HTMLInputElement): null {
    if (title.value !== '') {
      this.outTaskTitle.emit(title.value);
      title.value = '';
    }
    return null;
  }
}
