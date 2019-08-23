import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { DetailsPage } from './details.page';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../data/tasks';
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
    getTaskDetails(id) {
        return Tasks[id];
    }
    updateTask(task) {
        return task;
    }
}
const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(id): string {
          return '1';
        }
      }
    }
  };
describe('DetailsPage', () => {
    let component: DetailsPage;
    let fixture: ComponentFixture<DetailsPage>;
    let service: TaskService;
    let router: Router;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsPage],
            imports: [RouterTestingModule],
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
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsPage);
        component = fixture.componentInstance;
        router = TestBed.get(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Should call service.getTaskDetails() Internally', () => {
        const taskDetails = spyOn(TestBed.get(TaskService), 'getTaskDetails');
        const taskId = fakeActivatedRoute.snapshot.paramMap.get('id');
        service.getTaskDetails(taskId);
        expect(taskDetails).toHaveBeenCalled();
    });
    it('Should get task based on the id', () => {
        const getTaskId = fakeActivatedRoute.snapshot.paramMap.get('id');
        const task = service.getTaskDetails(getTaskId);
        spyOn(TestBed.get(TaskService), 'getTaskDetails');
        expect(component.taskDetails).toEqual(task);
    });
    it('Should accept Task as argument to update task', () => {
        expect(component.updateTask( {
            id: 1,
            title: 'meeting',
            createdOn: '12/08/2019',
            important: true,
            dueDate: '12/08/2019'
        })).toBeTruthy();
    });
    it('should check whether calendar is displaying using app-calendar selector', () => {
        component.show = true;
        fixture.detectChanges();
        const element: HTMLDivElement = fixture.nativeElement;
        const content = element.querySelector('app-calendar');
        expect(content).toBeTruthy();
        });
});
