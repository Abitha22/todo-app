import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';
import {Filter} from '../models/filter';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
  it('should have a Method getTask()', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(typeof service.getTask).toBe('function');
  });
  it('should return the type array of getTasks()', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask();
    expect(Array.isArray(result)).toBe(true);
  });
  it('should return the Tasks from the sample data', () => {
    const service: TaskService = TestBed.get(TaskService);
    const task = service.getTask();
    expect(task).toBe(Tasks);
  });
  it('getTask() should accept a filter as argument', () => {
    const service: TaskService = TestBed.get(TaskService);
    const task = service.getTask();
    expect(service.getTask({createdOn: '', important: true, dueDate: ''})).toBeTruthy();
  });
  it('should be able to get the tasks filtered based on important as true' , () => {
    const service: TaskService = TestBed.get(TaskService);
    const tasks = service.getTask();
    const expectedTasks = tasks.filter(task => task.important === true);
    expect(service.getTask({createdOn: '', important: true, dueDate: ''})).toEqual(expectedTasks);
  });
  it('should be able to get unimportant tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '', important: false, dueDate: ''});
    const expectedTasks = Tasks.filter(tasks => tasks.important === false);
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on duedate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '', important : undefined , dueDate: '13/09/2019'});
    const expectedTasks = Tasks.filter(tasks => tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on createdOn', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '13/09/2019', important : undefined , dueDate: ''});
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and createdOn', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '13/09/2019', important : undefined , dueDate: ''});
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and dueDate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '', important : undefined , dueDate: '13/09/2019'});
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on createdOn and dueDate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '13/09/2019', important : undefined , dueDate: '13/09/2019'});
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019' && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should have a method deleteTask()', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(typeof service.deleteTask).toBe('function');
  });

  it('should return the type array of deleteTasks()', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.deleteTask(1);
    expect(Array.isArray(result)).toBe(true);
  });

  it('deleteTask() should accept id as argument', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service.deleteTask(1)).toBeTruthy();
  });

  it('should able to delete tasks based on id', () => {
    const service: TaskService = TestBed.get(TaskService);
    const index = Tasks.findIndex(task => task.id === 1);
    const id = Tasks.splice(index, 1);
    const expectedTasks = Tasks;
    const result  = service.deleteTask(1);
    expect(result).toBe(expectedTasks);
 });
 });
