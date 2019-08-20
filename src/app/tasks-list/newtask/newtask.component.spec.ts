import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { NewtaskComponent } from './newtask.component';

describe('NewtaskComponent', () => {
  let component: NewtaskComponent;
  let fixture: ComponentFixture<NewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewtaskComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the method enterTask()', () => {
    expect(typeof component.enterTask).toBe('function');
  });
  it('should have a button to add newTask', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.newTask');
    expect(content.getAttribute('class')).toBe('newTask');
  });
  it('should have a button `newTask` which takes data-placement value as `left`', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.newTask');
    expect(content.getAttribute('data-placement')).toBe('left');
  });
  describe('Output', () => {
    it('should call enterTask on click the button', () => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component, 'enterTask');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.enterTask).toHaveBeenCalled();
    });
    it('should emit the event while we call the enterTask()', fakeAsync(() => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component.outEnterTask, 'emit');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.outEnterTask.emit).toHaveBeenCalled();
    }));
  });
});
