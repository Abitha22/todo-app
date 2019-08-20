import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { DetailsPage } from './details.page';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

const fakeActivatedRoute = {
    snapshot: {
        paramMap: {
            get(): string {
                return 'id';
            }
        }
    }
};
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
    getTask(): Array<Task> {
        return dummyTasks;
    }
    updateTask() {
        return dummyTasks[1];
    }
}
describe('DetailsPage', () => {
    let component: DetailsPage;
    let fixture: ComponentFixture<DetailsPage>;
    let service: TaskService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsPage],
            imports: [RouterTestingModule],
            providers: [TaskService,
                { provide: ActivatedRoute, useValue: fakeActivatedRoute },
                { provide: TaskService, useValue: MockTaskService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
        service = TestBed.get(TaskService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
