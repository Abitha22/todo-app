import { Component , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent {
  taskvalue: any;
  @Output()
  outEnterTask = new EventEmitter<string>();
  enterTask(task: any) {
    this.outEnterTask.emit(task.value);
    task.value = '';
    return task.value;
  }
}
