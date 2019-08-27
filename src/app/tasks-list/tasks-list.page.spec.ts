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
  }
  deleteTask() {
}
updateTask() {

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
  const expectedTasks = element.querySelectorAll('ion-menu-toggle');
  const tasks = service.getTask();
  console.log('expected tasks', tasks);
  expect(expectedTasks.length).toEqual(dummyTasks.length);
  }));
  it('should have three icons in tasks-list', () => {
    const element: HTMLDivElement = fixture.nativeElement;
    const icons = element.querySelectorAll('ion-icon');
    expect(icons.length).toBe(3);
  });
  it('should have a icon `star` icon to mark a task to important', () => {
    const element: HTMLDivElement = fixture.nativeElement;
    const icons = element.querySelector('.important');
    expect(icons.getAttribute('name')).toBe('star');
  });
  it('should have a icon `star-outline` icon to mark a task to unimportant', () => {
    component.important(
      {
        id: 1,
        title: 'meeting',
        createdOn: '12/08/2019',
        important: true,
        dueDate: '12/08/2019'
    }
    );
    const element: HTMLDivElement = fixture.nativeElement;
    const icons = element.querySelector('.unimportant');
    expect(icons.getAttribute('name')).toBe('star-outline');
  });

  // describe('TaskDetails', () => {
  //   it('should have edit icon to update the task', () => {
  //     const element: HTMLDivElement = fixture.nativeElement;
  //     const content = element.querySelector('.details');
  //     expect(content.getAttribute('name')).toBe('create');
  //   });
  //   it('should have a edit icon which is placed at right side of the page', () => {
  //     const element: HTMLDivElement = fixture.nativeElement;
  //     const content = element.querySelector('.details');
  //     expect(content.getAttribute('slot')).toBe('end');
  //   });
  //   it('should navigate to details page with valid id', () => {

  //   });
  // });
  // describe('DeleteTask', () => {
  //   it('should have trash icon to delete the task', () => {
  //     const element: HTMLDivElement = fixture.nativeElement;
  //     const content = element.querySelector('.delete');
  //     expect(content.getAttribute('name')).toBe('trash');
  //   });
  //   it('should have a trash icon which is placed at right side of the page', () => {
  //     const element: HTMLDivElement = fixture.nativeElement;
  //     const content = element.querySelector('.delete');
  //     expect(content.getAttribute('slot')).toBe('end');
  //   });
  //   it('should call taskservice to delete the task and display remaining tasks on the page', () => {
  //     const btn = fixture.debugElement.query(By.css('.details'));
  //     btn.triggerEventHandler('click', null);
  //     fixture.detectChanges();
  //     spyOn(component, 'deleteTask' );
  //     const tasks = service.deleteTask(1);
  //     expect(tasks.length).toBe(service.getTask().length);
  //   });
  // });
  // it('newtask component should display using app-newtask selector', () => {
  //   fixture.detectChanges();
  //   const element: HTMLDivElement = fixture.nativeElement;
  //   const content = element.querySelector('app-newtask');
  //   expect(content).toBeTruthy();
  //   });
});
