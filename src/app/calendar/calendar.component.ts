import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  format;
  myDate;
  @Output()
  outDate = new EventEmitter();
  selectedDate(date) {
    this.outDate.emit(date);
  }
}
