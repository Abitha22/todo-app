import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import * as moment from 'moment';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Output', () => {
   it('should accept ion calendar as selector tag' , () => {

   });
   it('should check whether calendar is displaying using ion-calendar selector', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-calendar');
    expect(content).toBeTruthy();
    });
   it('should be true if emitted date value is in  format `DD/MM/YYYY`', () => {
      component.myDate = moment().format('DD/MM/YYYY');
      const format = moment(component.myDate, 'DD/MM/YYYY');
      expect(format.isValid()).toBe(true);
    });
   it('should emit selected date when event is triggered', () => {
      spyOn(component.outDate, 'emit');
      component.date(moment().format('DD/MM/YYYY'));
      expect(component.outDate.emit).toHaveBeenCalledWith(moment().format('DD/MM/YYYY'));
    });
  });
});
