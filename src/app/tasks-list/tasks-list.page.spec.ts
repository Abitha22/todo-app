import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { TasksListPage } from './tasks-list.page';
import { Tasks } from '../data/tasks';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;
  const fakeActivatedRoute = {
    snapshot: { paramMap : { get(): string {
      return 'id';
    }} }
  } ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListPage ],
      imports: [RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
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
  it('should be able to  take the task values', inject([TaskService], (service: TaskService) => {
    component.tasks = Tasks;
    fixture.detectChanges();
    const element: HTMLDivElement = fixture.nativeElement;
    const content = element.querySelector('ion-content');
    expect(content.textContent).toBeTruthy();
  }));
});
