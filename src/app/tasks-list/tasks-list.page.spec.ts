import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject, fakeAsync, ComponentFixtureAutoDetect, tick } from '@angular/core/testing';
import { TasksListPage } from './tasks-list.page';
import { Tasks } from '../data/tasks';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router, Routes } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { Task } from '../models/task';
import { By } from '@angular/platform-browser';
import { DetailsPageModule } from '../details/details.module';
import { Location } from '@angular/common';
import * as moment from 'moment';

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
  let deleteTask;
  let updateTask;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListPage],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [TaskService],
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
    deleteTask = spyOn(service, 'deleteTask').and.returnValue([{
      id: 2,
      title: 'session',
      createdOn: '13/09/2019',
      important: true,
      dueDate: '13/09/2019'
    }]);
    updateTask = spyOn(service, 'updateTask').and.returnValue({
      id: 2,
      title: 'sessions',
      createdOn: '13/09/2019',
      important: true,
      dueDate: '13/09/2019'
    });
  });


  describe('Component Basics', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should call taskserive.getTask to get the available tasks', () => {
      // set up
      const taskService = TestBed.get(TaskService);
      spyOn(TestBed.get(TaskService), 'getTask').and.returnValue([]);

      // act 
      const taskListComponent = new TasksListPage(taskService, router);

      // assertion
      expect(taskService.getTask).toHaveBeenCalled();
      expect(taskService.getTask).toHaveBeenCalledTimes(1);
    });
  });

  describe('Task List ', () => {
    it('should list all the tasks available in taskservice.getTasks',fakeAsync(async () => {
      // set up
      const taskService = TestBed.get(TaskService);
      spyOn(taskService, 'getTask').and.returnValue([{
        id : 123, 
        title : 'sample task',
        dueDate : '12/12/2019',
        createdOn : '12/12/2019',
        important: false
      }]);

      // action
      const taskListComponent = new TasksListPage(taskService, router);
      fixture.componentInstance = taskListComponent;
      fixture.detectChanges();
      await fixture.whenStable();
      tick();

  
      // assertion 
      const element = fixture.debugElement.nativeElement.querySelectorAll('ion-item');
      expect(taskService.getTask).toHaveBeenCalledTimes(1);
      expect(element.length).toEqual(1);
    }));
    
  });

  /*
  describe('icons', () => {
    it('Should have an icon allowing us to mark a task from unimportant to important', () => {
      const taskService = TestBed.get(TaskService);
      spyOn(taskService, 'getTask').and.returnValue([{
        id: 123,
        title: 'An unimportant task',
        dueDate: '09/09/2019',
        createdOn: '09/09/2019',
        important: false
      }]);


      const taskListComponent = new TasksListPage(taskService, router);
      fixture.componentInstance = taskListComponent;

      const element: HTMLDivElement = fixture.nativeElement.querySelector('.important');
      expect(element).toBeDefined();
    });
    it('should have create icon', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const icons = element.querySelectorAll('ion-icon');
      expect(icons[1]).toBeTruthy();
    });
    it('should have a trash icon', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const icons = element.querySelectorAll('ion-icon');
      expect(icons[2]).toBeTruthy();
    });
  });
  it('Should call getTask()', () => {
    expect(tasks).toHaveBeenCalled();
  });
  it('should able to get tasks when taskservice is called', fakeAsync(() => {
    const element: HTMLDivElement = fixture.nativeElement;
    const expectedTasks = element.querySelectorAll('ion-menu-toggle');
    expect(expectedTasks.length).toEqual(tasks.length);
    console.log(tasks);
  }));

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

  describe('TaskDetails', () => {
    it('should have edit icon to update the task', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.details');
      expect(content.getAttribute('name')).toBe('create');
    });
    it('should have a edit icon which is placed at right side of the page', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.details');
      expect(content.getAttribute('slot')).toBe('end');
    });
    // it('should navigate to details page with valid id', () => {

    // });
  });
  describe('DeleteTask', () => {
    it('should have trash icon to delete the task', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.delete');
      expect(content.getAttribute('name')).toBe('trash');
    });
    it('should have a trash icon which is placed at right side of the page', () => {
      const element: HTMLDivElement = fixture.nativeElement;
      const content = element.querySelector('.delete');
      expect(content.getAttribute('slot')).toBe('end');
    });
    it('should delete the task and display remaining tasks on the page', () => {
      const btn = fixture.debugElement.query(By.css('.details'));
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      const deletedTasks = component.deleteTask(1);
      expect(deletedTasks).toEqual(deleteTask);
    });
  });
  it('newtask component should display using app-newtask selector', () => {
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('app-newtask');
    expect(content).toBeTruthy();
  });*/
});
