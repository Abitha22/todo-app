import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';
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
    console.log(result);
  });
  it('should be able to get tasks based on duedate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on createdOn', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and createdOn', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and dueDate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on createdOn and dueDate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019' && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on important,createdOn and dueDate', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask({ createdOn: '13/09/2019', important: true, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter
    (tasks => tasks.important === true && tasks.createdOn === '13/09/2019' && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  describe('deleteTask', () => {
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
      const result = service.deleteTask(1);
      expect(result).toBe(expectedTasks);
    });
  });
  describe('addTask', () => {
    it('should have a Method addTask()', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(typeof service.addTask).toBe('function');
    });
    it('addTask() should accept a Task as argument', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(service.addTask({
        id: 1, title: 'meeting',
        createdOn: '12/08/2019', important: true, dueDate: '12/08/2019'
      })).toBeTruthy();
    });
    it('should return the type array of addTasks()', () => {
      const service: TaskService = TestBed.get(TaskService);
      const result = service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(Array.isArray(result)).toBe(true);
    });
    it('should return the added Tasks', () => {
      const service: TaskService = TestBed.get(TaskService);
      const expectedTasks = service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(expectedTasks).toBe(Tasks);
    });
    it('addTask() should add new task to the Tasks[]', () => {
      const service: TaskService = TestBed.get(TaskService);
      service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      const expectedTask = Tasks.pop();
      expect({
        id: Tasks.length + 1, title: 'meeting', createdOn: '12/08/2019',
        important: true, dueDate: '12/08/2019'
      }).toEqual(expectedTask);
    });
  });
  describe('updateTask', () => {
    it('should have a Method updateTask()', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(typeof service.updateTask).toBe('function');
    });
    it(' should accept a Task as argument', () => {
      const service: TaskService = TestBed.get(TaskService);
      expect(service.updateTask({
        id: 1,
        title: 'meeting',
        createdOn: '12/08/2019',
        important: true,
        dueDate: '12/08/2019'
      })).toBeTruthy();
    });
    it('should return the type array of updateTasks()', () => {
      const service: TaskService = TestBed.get(TaskService);
      const result = service.updateTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(Array.isArray(result)).toBe(true);
    });
    it('should return the updated Tasks', () => {
      const service: TaskService = TestBed.get(TaskService);
      const expectedTasks = service.updateTask({
        id: 1, title: 'meeting',
        createdOn: '12/08/2019', important: true, dueDate: '12/08/2019'
      });
      expect(expectedTasks).toBe(Tasks);
    });
    it('should update the task based on the id', () => {
      const service: TaskService = TestBed.get(TaskService);
      service.updateTask({
        id: 2,
        title: 'Ionic with Angular',
        createdOn: '13/09/2019',
        important: true,
        dueDate: '13/09/2019'
      });
      expect(Tasks[1].title).toEqual('Ionic with Angular');
    });
  });
});




