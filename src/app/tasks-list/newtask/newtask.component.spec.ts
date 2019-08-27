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
  it('should have a input field to enter task', () => {
    const element: HTMLDivElement = fixture.nativeElement;
    const input = element.querySelector('ion-input');
    expect(input).toBeTruthy();
    });
  it('input field should have a placeholder value as `Add Task`', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const input = element.querySelector('ion-input');
      expect(input.getAttribute('placeholder')).toBe('Add Task');
      });
  it('should have `add`  icon to add tasks', () => {
        const element: HTMLDivElement = fixture.nativeElement;
        const icon = element.querySelector('ion-icon');
        expect(icon.getAttribute('name')).toBe('add');
      });
  it('should have a `add` icon which is placed at left side of the page', () => {
        const element: HTMLDivElement = fixture.nativeElement;
        const icon = element.querySelector('ion-icon');
        expect(icon.getAttribute('slot')).toBe('start');
      });
  it('should have a button to add newTask', () => {
        fixture.detectChanges();
        const element: HTMLDivElement = fixture.nativeElement;
        const content = element.querySelector('ion-button');
        expect(content).toBeTruthy();
      });
  it('should have a button with `Add` as text content', () => {
        fixture.detectChanges();
        const element: HTMLDivElement = fixture.nativeElement;
        const button = element.querySelector('ion-button');
        expect(button.textContent).toBe(' Add ');
      });

  describe('Output', () => {
    // it('should return null for enterTaskTitle()', () => {
    //   const input = fixture.nativeElement.querySelector('ion-input');
    //   const result = component.enterTaskTitle(input);
    //   expect(typeof result).toBe(null);
    // });
    it('add event should trigger when user enters task and click on button', () => {
      const button = fixture.nativeElement.querySelector('ion-button');
      spyOn(component, 'enterTaskTitle');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.enterTaskTitle).toHaveBeenCalled();
    });
    it('should emit value when add event is triggered', fakeAsync(() => {
      const input = fixture.nativeElement.querySelector('ion-input');
      spyOn(component.outTaskTitle, 'emit');
      input.value = 'title';
      component.enterTaskTitle(input);
      expect(component.outTaskTitle.emit).toHaveBeenCalledWith('title');
    }));
    it('add event should trigger only once', fakeAsync(() => {
      const input = fixture.nativeElement.querySelector('ion-input');
      spyOn(component.outTaskTitle, 'emit');
      input.value = 'title';
      component.enterTaskTitle(input);
      expect(component.outTaskTitle.emit).toHaveBeenCalledTimes(1);
    }));
  });
});
