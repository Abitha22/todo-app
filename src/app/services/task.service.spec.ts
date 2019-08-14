import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';
import { Filter } from '../models/filter';
import { Task } from '../models/task';

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
    expect(service.getTask({ createdOn: '', important: true, dueDate: '' })).toBeTruthy();
  });
  it('should be able to get the tasks filtered based on important as true', () => {
    const service: TaskService = TestBed.get(TaskService);
    const tasks = service.getTask();
    const expectedTasks = tasks.filter(task => task.important === true);
    expect(service.getTask({ createdOn: '', important: true, dueDate: '' })).toEqual(expectedTasks);
  });
  it('should be able to get unimportant tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '', important: false, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.important === false);
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get importent tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '', important: true, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.important === true);
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get dueDate tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '', important: true, dueDate: '12/08/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.dueDate === '12/08/2019');
    expect(result).toEqual(expectedTasks);
  });

  describe('addTask', () => {
    it('should have a Method addTask()', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(typeof service.addTask).toBe('function');
    });
    it('addTask() should accept a Task as argument', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(service.addTask({id: 1,
        title: 'meeting', createdOn: '', important: true, dueDate: '' })).toBeTruthy();
    });
    it('addTask() should add new task to the Tasks[]', () => {
      const service: TaskService = TestBed.get(TaskService);
      service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      const expectedTask = Tasks.pop();
      expect({ id: Tasks.length + 1, title: 'meeting', createdOn: '12/08/2019',
               important: true, dueDate: '12/08/2019' }).toEqual(expectedTask);
    });
  });
});
