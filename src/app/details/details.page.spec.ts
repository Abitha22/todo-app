// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
// import { DetailsPage } from './details.page';
// import { TaskService } from '../services/task.service';
// import { Task } from '../models/task';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Tasks } from '../data/tasks';
// const dummyTasks: Array<Task> = [
//     {
//         id: 1,
//         title: 'meeting',
//         createdOn: '12/08/2019',
//         important: true,
//         dueDate: '12/08/2019'
//     },
//     {
//         id: 2,
//         title: 'session',
//         createdOn: '13/09/2019',
//         important: true,
//         dueDate: '13/09/2019'
//     }];

// class TaskServiceStub {
//     getTasks() {
//     }
//     getTaskDetails() {
//     }
//     updateTask() {
//     }
// }
// const fakeActivatedRoute = {
//     snapshot: {
//       paramMap: {
//         get(id): string {
//           return id;
//         }
//       }
//     }
//   };
// describe('DetailsPage', () => {
//     let component: DetailsPage;
//     let fixture: ComponentFixture<DetailsPage>;
//     let service: TaskService;
//     let router: Router;
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [DetailsPage],
//             imports: [RouterTestingModule],
//             providers: [TaskService,
//                 { provide: ActivatedRoute, useValue: fakeActivatedRoute },
//                 {
//                     provide: TaskService, useClass: TaskServiceStub

//                 }
//             ],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//         })
//             .compileComponents();
//         service = TestBed.get(TaskService);
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(DetailsPage);
//         component = fixture.componentInstance;
//         router = TestBed.get(Router);
//         fixture.detectChanges();

//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
//     // it('Should call service.getTaskDetails() Internally', () => {
//     //     const taskDetails = spyOn(TestBed.get(TaskService), 'getTaskDetails');
//     //     const taskId = fakeActivatedRoute.snapshot.paramMap.get('id');
//     //     service.getTaskDetails(taskId);
//     //     expect(taskDetails).toHaveBeenCalled();
//     // });
//     // it('Should get task based on the id', () => {
//     //     const getTaskId = fakeActivatedRoute.snapshot.paramMap.get('id');
//     //     const task = service.getTaskDetails(getTaskId);
//     //     spyOn(TestBed.get(TaskService), 'getTaskDetails');
//     //     expect(component.taskDetails).toEqual(task);
//     // });
//     // it('Should accept Task as argument to update task', () => {
//     //     expect(component.updateTask( {
//     //         id: 1,
//     //         title: 'meeting',
//     //         createdOn: '12/08/2019',
//     //         important: true,
//     //         dueDate: '12/08/2019'
//     //     })).toBeTruthy();
//     // });
//     // it('should check whether calendar is displaying using app-calendar selector', () => {
//     //     component.show = true;
//     //     fixture.detectChanges();
//     //     const element: HTMLDivElement = fixture.nativeElement;
//     //     const content = element.querySelector('app-calendar');
//     //     expect(content).toBeTruthy();
//     //     });
//     describe('Task details populated in HTML', () => {
//         let ionContentElement;
//         beforeEach(() => {
//             const  taskService = TestBed.get(TaskService);
//             spyOn(taskService, 'getTaskDetails').and.returnValue({
//                 title: 'meeting1',
//                 createdOn: '12/08/2019',
//                 important: true,
//                 dueDate: '12/08/2019'
//             });

//             component.taskDetails = taskService.getTaskDetails(1);
//             console.log(component.taskDetails);
//             fixture.detectChanges();
//         });

//         it('task title should be populated in the input field', () => {
//             ionContentElement =  fixture.nativeElement.querySelector('ion-content');
//             console.log(ionContentElement);
//             const inputElement = ionContentElement.querySelector('ion-input');
//             console.log(inputElement);
//             expect(inputElement.inner).toEqual('meeting1');
//         });
//        /*
//         it('smething', () => {
//             const  taskService = TestBed.get(TaskService);
//             taskService.getTasks();
//             component.taskDetails = taskService.getTaskDetails(1);
//             const value = fixture.nativeElement.querySelector('ion-content');
//             fixture.detectChanges();
//             const content = value.textContent;
//             console.log('content is', content);
//             expect(content).toContain({
//                     title: 'meeting',
//                     createdOn: '12/08/2019',
//                     important: true,
//                     dueDate: '12/08/2019'
//                 });
//         })*/
//     });
// });

