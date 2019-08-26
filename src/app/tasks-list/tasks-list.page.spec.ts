import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { TasksListPage } from './tasks-list.page';
import { Tasks } from '../data/tasks';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router, Routes } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { Task } from '../models/task';
import { By } from '@angular/platform-browser';
import { DetailsPageModule } from '../details/details.module';
import { Location } from '@angular/common';
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
  deleteTask(id) {
    const index = dummyTasks.findIndex(task => task.id === id);
    console.log(`got id ${id} index ${index}`);
    if (index < 0) {
      throw Error('id not found');
    }
    dummyTasks.splice(index, 1);
    return dummyTasks;
  }
}
const fakeActivatedRoute = {
  snapshot: {
    paramMap: {
      get(): string {
        return '1';
      }
    }
  }
};
const routes: Routes = [
  { path: 'tasks-list/details/1', component: DetailsPageModule },
];
describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;
  let service: TaskService;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListPage],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [TaskService,
        { provide: ActivatedRoute},
        {
          provide: TaskService, useClass: MockTaskService

        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
    service = TestBed.get(TaskService);
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should call the TasksService Internally', () => {
    const getTasks = spyOn(TestBed.get(TaskService), 'getTask');
    service.getTask();
    expect(getTasks).toHaveBeenCalled();
  });
  it('should able to get tasks when taskservice is called', fakeAsync(()  => {
  spyOn(service, 'getTask');
  const element: HTMLDivElement = fixture.nativeElement;
  const expectedTasks = element.querySelectorAll('ion-content > ion-menu-toggle');
  const tasks = service.getTask();
  console.log('expected tasks', tasks);
  expect(expectedTasks.length).toEqual(dummyTasks.length);
  }));

  describe('UpdateTask', () => {
    it('should have edit icon to delete the icon', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.update');
      expect(content.getAttribute('name')).toBe('create');
    });
    it('should have a edit icon which is placed at right side of the page', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.update');
      expect(content.getAttribute('slot')).toBe('end');
    });
    it('should navigate to details page with valid Id', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.update');
      expect(content.getAttribute('slot')).toBe('end');
    });
  });
  describe('DeleteTask', () => {
    it('should have trash icon to delete the icon', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.delete');
      expect(content.getAttribute('name')).toBe('trash');
    });
    it('should have a trash icon which is placed at right side of the page', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.delete');
      expect(content.getAttribute('slot')).toBe('end');
    });
    it('should call taskservice to delete the task and display remaining tasks on the page', () => {
      const btn = fixture.debugElement.query(By.css('.update'));
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      spyOn(component, 'deleteTask' );
      const tasks = service.deleteTask(1);
      expect(tasks.length).toBe(service.getTask().length);
    });
  });
  it('should check whether newtask component is displaying using app-newtask selector', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('app-newtask');
    expect(content).toBeTruthy();
    });
});
