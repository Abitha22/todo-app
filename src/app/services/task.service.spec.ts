import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';

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
  it('should be able to get unimportent tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({createdOn: '', important: false, dueDate: ''});
    const expectedTasks = Tasks.filter(tasks => tasks.important === false);
    expect(result).toEqual(expectedTasks);
  });
 });
