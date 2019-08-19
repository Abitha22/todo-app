import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { TasksPage } from './tasks.page';
import { Tasks } from '../data/tasks';
import { TaskService } from '../services/task.service';

describe('TasksPage', () => {
  let component: TasksPage;
  let fixture: ComponentFixture<TasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as Tasks', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-header>ion-toolbar>ion-title');
    expect(content.textContent).toEqual('Tasks');
  });
  it('should take auto-hide value as false', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector(' ion-content > ion-menu-toggle');
    expect(content.getAttribute('auto-hide')).toBe('false');
  });
  it('should be able to  take the task values', inject([TaskService], (service: TaskService) => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content');
    expect(content.textContent).toBeTruthy();
  }));
  it('should have a icon `create` to view the details or to update the task value', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content > ion-menu-toggle > ion-item > ion-icon');
    expect(content.getAttribute('name')).toBe('create');
  });
  it('should have a icon `create` which takes slot value as `end`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content > ion-menu-toggle > ion-item > ion-icon');
    expect(content.getAttribute('slot')).toBe('end');
  });
  it('should have a icon `create` which takes data-placement value as `left`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content > ion-menu-toggle > ion-item > ion-icon');
    expect(content.getAttribute('data-placement')).toBe('left');
  });
  it('should have a icon `create` which takes data-toggle value as `tooltip`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content > ion-menu-toggle > ion-item > ion-icon');
    expect(content.getAttribute('data-toggle')).toBe('tooltip');
  });
  it('should have a icon `create` which takes title value as `view details`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content > ion-menu-toggle > ion-item > ion-icon');
    expect(content.getAttribute('title')).toBe('view details');
  });
});
