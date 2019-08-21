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
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
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

  it('should have title as Tasks', () => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-title');
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

  describe('UpdateTask', () => {
    it('should navigate to the detals page when edit button is clicked', fakeAsync(() => {
      spyOn(component, 'taskDetails');
      const btn = fixture.debugElement.query(By.css('.update'));
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.taskDetails).toHaveBeenCalled();
    }));
    it('should navigate to the detals page when edit button is clicked', fakeAsync(() => {
      spyOn(component, 'taskDetails');
      component.tasks = service.getTask();
      const btn = fixture.debugElement.query(By.css('.update'));
      btn.triggerEventHandler('click', null);
      const getTaskId = fakeActivatedRoute.snapshot.paramMap.get();
      fixture.detectChanges();
      router.navigate(['tasks-list/details/' + getTaskId]).then(() => {
        expect(location.path()).toBe('/tasks-list/details/' + getTaskId);
      });
    }));
  });
  describe('DeleteTask', () => {
    it('should call deleteTask() when delete icon is clicked', fakeAsync(() => {
      spyOn(component, 'deleteTask');
      const icon = fixture.debugElement.query(By.css('.delete'));
      icon.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.deleteTask).toHaveBeenCalled();
    }));
    // it('should delete task based on id', fakeAsync(() => {
    //   spyOn(component, 'deleteTask');
    //   const icon = fixture.debugElement.query(By.css('.delete'));
    //   icon.triggerEventHandler('click', null);
    //   fixture.detectChanges();
    //   const index = dummyTasks.findIndex(task => task.id === 1);
    //   const result = service.deleteTask(index);
    //   expect(result).toEqual(service.getTask());
    // }));
  });
  it('should call taskDetails() when event is happened', fakeAsync(() => {
    spyOn(component, 'taskDetails');
    const btn = fixture.debugElement.query(By.css('.update'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.taskDetails).toHaveBeenCalled();
  }));
  it('should call deleteTask() when event is happened', fakeAsync(() => {
    spyOn(component, 'deleteTask');
    const icon = fixture.debugElement.query(By.css('.delete'));
    icon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.deleteTask).toHaveBeenCalled();
  }));
});
