import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed , inject, fakeAsync} from '@angular/core/testing';
import { TasksListPage } from './tasks-list.page';
import { Tasks } from '../data/tasks';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { Task } from '../models/task';
import { By } from '@angular/platform-browser';
const dummyTasks: Array<Task> = [
  {
    id: 1,
    title: 'meeting',
    createdOn: '12/08/2019',
    important: true,
    dueDate: '12/08/2019'
  },
  {
    id: 2,
    title: 'session',
    createdOn: '13/09/2019',
    important: true,
    dueDate: '13/09/2019'
  }];
class MockTaskService {
  getTask() {
    return dummyTasks;
  }
}
const fakeActivatedRoute = {
  snapshot: { paramMap : { get(): string {
    return 'id';
  }} }
} ;
describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;
  let service: TaskService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListPage ],
      imports: [RouterTestingModule],
      providers: [TaskService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {
          provide: TaskService, useClass: MockTaskService

        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
    service = TestBed.get(TaskService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListPage);
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
  it('should be able to  take the task values', inject([TaskService], () => {
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
    const content = element.querySelector('.update');
    expect(content.getAttribute('name')).toBe('create');
  });
  it('should have a icon `create` which takes slot value as `end`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.update');
    expect(content.getAttribute('slot')).toBe('end');
  });
  it('should have a icon `create` which takes data-placement value as `left`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.update');
    expect(content.getAttribute('data-placement')).toBe('left');
  });
  it('should have a icon `create` which takes data-toggle value as `tooltip`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.update');
    expect(content.getAttribute('data-toggle')).toBe('tooltip');
  });
  it('should have a icon `create` which takes title value as `view details`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.update');
    expect(content.getAttribute('title')).toBe('view details');
  });
  it('Should call the TasksService Internally', () => {
    const getTasks = spyOn(TestBed.get(TaskService), 'getTask');
    service.getTask();
    expect(getTasks).toHaveBeenCalled();
  });
  it('should send the task while click event is called  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.update');
    expect(content.getAttribute('title')).toBe('view details');
  });
  it('should have a icon `trash` to delete task ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.delete');
    expect(content.getAttribute('name')).toBe('trash');
  });
  it('should have a icon `trash` which takes slot value as `end`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.delete');
    expect(content.getAttribute('slot')).toBe('end');
  });
  it('should have a icon `trash` which takes data-placement value as `left`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.delete');
    expect(content.getAttribute('data-placement')).toBe('left');
  });
  it('should have a icon `trash` which takes data-toggle value as `tooltip`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.delete');
    expect(content.getAttribute('data-toggle')).toBe('tooltip');
  });
  it('should have a icon `trash` which takes title value as `delete task`  ', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('.delete');
    expect(content.getAttribute('title')).toBe('delete task');
  });
  it('should call updateTask() when event is happened', fakeAsync(() => {
    spyOn(component, 'updateTask');
    const btn = fixture.debugElement.query(By.css('.update'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.updateTask).toHaveBeenCalled();
  }));
  it('should call deleteTask() when event is happened', fakeAsync(() => {
    spyOn(component, 'deleteTask');
    const icon = fixture.debugElement.query(By.css('.delete'));
    icon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.deleteTask).toHaveBeenCalled();
  }));
});
