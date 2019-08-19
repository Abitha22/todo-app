import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent implements OnInit {

  taskvalue: any;
  @Output()
  outEnterTask = new EventEmitter<string>();
  constructor() {
   }


  enterTask(task: any) {
    this.outEnterTask.emit(task.value);
    task.value = '';
    return task.value;
  }

  ngOnInit() {}

}
