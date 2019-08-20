import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  format;
  @Output()
  outDate = new EventEmitter<any>();
  constructor() { }
  date(date) {
   console.log(date);
   this.outDate.emit(date);
   }
  ngOnInit() {}

}
