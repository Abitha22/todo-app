import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

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
    it('should call date() on click the button', () => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component, 'date');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.date).toHaveBeenCalled();
    });
    it('should emit the event while we call the date()', fakeAsync(() => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component.outDate, 'emit');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.outDate.emit).toHaveBeenCalled();
    }));
  });
});
