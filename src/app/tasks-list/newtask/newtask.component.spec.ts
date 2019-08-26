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
  it('should have a button to add newTask', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-button');
    expect(content).toBeTruthy();
  });
  it('should have a button to add tasks which is placed at the right of the page', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.newTask');
    expect(content.getAttribute('data-placement')).toBe('left');
  });
  describe('Output', () => {
    it('should trigger an event to add tasks when button is clicked', () => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component, 'enterTaskTitle');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.enterTaskTitle).toHaveBeenCalled();
    });
    it('should emit value when event is triggered', fakeAsync(() => {
      const input = fixture.nativeElement.querySelector('ion-input');
      spyOn(component.outTaskTitle, 'emit');
      input.value = 'title';
      component.enterTaskTitle(input);
      expect(component.outTaskTitle.emit).toHaveBeenCalledWith('title');
    }));
  });
});
