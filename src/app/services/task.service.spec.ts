import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';
import * as moment from 'moment';


describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = new TaskService();
    expect(service).toBeTruthy();
  });
  it('should have a Method getTask()', () => {
    const service: TaskService = new TaskService();
    expect(typeof service.getTask).toBe('function');
  });
  it('should return the type array of getTasks()', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask();
    expect(Array.isArray(result)).toBe(true);
  });
  it('should return the Tasks from the sample data', () => {
    const service: TaskService = new TaskService();
    const task = service.getTask();
    expect(task).toEqual(Tasks);
  });
  it('getTask() should accept a filter as argument', () => {
    const service: TaskService = new TaskService();
    const task = service.getTask();
    expect(service.getTask({ createdOn: '', important: true, dueDate: '' })).toBeTruthy();
  });
  it('should be able to get the tasks filtered based on important as true', () => {
    const service: TaskService = new TaskService();
    const tasks = service.getTask();
    const expectedTasks = tasks.filter(task => task.important === true);
    expect(service.getTask({ createdOn: '', important: true, dueDate: '' })).toEqual(expectedTasks);
  });
  it('should be able to get unimportant tasks', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '', important: false, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.important === false);
    expect(result).toEqual(expectedTasks);
    console.log(result);
  });
  it('should be able to get tasks based on duedate', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on createdOn', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and createdOn', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '' });
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.createdOn === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on important and dueDate', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.important && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });

  it('should be able to get tasks based on createdOn and dueDate', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '13/09/2019', important: undefined, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter(tasks => tasks.createdOn === '13/09/2019' && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  it('should be able to get tasks based on important,createdOn and dueDate', () => {
    const service: TaskService = new TaskService();
    const result = service.getTask({ createdOn: '13/09/2019', important: true, dueDate: '13/09/2019' });
    const expectedTasks = Tasks.filter
      (tasks => tasks.important === true && tasks.createdOn === '13/09/2019' && tasks.dueDate === '13/09/2019');
    expect(result).toEqual(expectedTasks);
  });
  describe('deleteTask', () => {
    it('should have a method deleteTask()', () => {
      const service: TaskService = new TaskService();
      expect(typeof service.deleteTask).toBe('function');
    });

    it('should return the type array of deleteTasks()', () => {
      const service: TaskService = new TaskService();
      const result = service.deleteTask(1);
      expect(Array.isArray(result)).toBe(true);
    });

    it('deleteTask() should accept id as argument', () => {
      const service: TaskService = new TaskService();
      expect(service.deleteTask(2)).toBeTruthy();
    });

    it('should able to delete tasks based on id', () => {
      const service: TaskService = new TaskService();
      const index = Tasks.findIndex(task => task.id === 4);
      const id = Tasks.splice(index, 1);
      const result = service.deleteTask(4);
      expect(result).toEqual(service.getTask());
    });

    it('should throw error if id is not present', () => {
      const service: TaskService = new TaskService();
      expect(() => {
        service.deleteTask(10);
      }).toThrowError(Error, 'id not found');
    });
  });
  describe('addTask', () => {
    it('should have a Method addTask()', () => {
      const service: TaskService = new TaskService();
      expect(typeof service.addTask).toBe('function');
    });
    it('addTask() should accept a Task as argument', () => {
      const service: TaskService = new TaskService();
      expect(service.addTask({
        id: 1, title: 'meeting',
        createdOn: '12/08/2019', important: true, dueDate: '12/08/2019'
      })).toBeTruthy();
    });
    it('should return the type array of addTasks()', () => {
      const service: TaskService = new TaskService();
      const result = service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(Array.isArray(result)).toBe(true);
    });
    it('should return the added Tasks', () => {
      const service: TaskService = new TaskService();
      const expectedTasks = service.addTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(expectedTasks).toEqual(service.getTask());
    });
    it('addTask() should add new task to the Tasks[]', () => {
      const service: TaskService = new TaskService();
      service.addTask({ id: 1, title: 'meeting', createdOn: moment().format('DD/MM/YYYY'),
       important: true, dueDate: moment().format('DD/MM/YYYY')});
      const expectedTask = service.getTask().pop();
      const maxId = service.getTask().map(task => task.id).sort((a, b) => {
        return a > b ? b : a;
      }).pop();
      expect({
        id: maxId, title: 'meeting', createdOn :  moment().format('DD/MM/YYYY'),
        important: true, dueDate:  moment().format('DD/MM/YYYY')
      }).toEqual(expectedTask);
    });
  });

  describe('updateTask', () => {
    it('should have a Method updateTask()', () => {
      const service: TaskService = new TaskService();
      expect(typeof service.updateTask).toBe('function');
    });
    it(' should accept a Task as argument', () => {
      const service: TaskService = new TaskService();
      expect(service.updateTask({
        id: 1,
        title: 'meeting',
        createdOn: '12/08/2019',
        important: true,
        dueDate: '12/08/2019'
      })).toBeTruthy();
    });
    it('should return the type Task of updateTask()', () => {
      const service: TaskService = new TaskService();
      const result = service.updateTask({ id: 1, title: 'meeting', createdOn: '12/08/2019', important: true, dueDate: '12/08/2019' });
      expect(result).toBeTruthy();
    });
    it('should return the updated Task', () => {
      const service: TaskService = new TaskService();
      const expectedTask = service.updateTask({
        id: 1, title: 'meeting',
        createdOn: '12/08/2019', important: true, dueDate: '12/08/2019'
      });
      expect(expectedTask).toEqual({
        id: 1, title: 'meeting',
        createdOn: '12/08/2019', important: true, dueDate: '12/08/2019'
      });
    });
    it('should update the task based on the id', () => {
      const service: TaskService = new TaskService();
      const expectedTask = service.updateTask({
        id: 2,
        title: 'Ionic with Angular',
        createdOn: '13/09/2019',
        important: true,
        dueDate: '13/09/2019'
      });
      expect(expectedTask).toEqual({
        id: 2,
        title: 'Ionic with Angular',
        createdOn: '13/09/2019',
        important: true,
        dueDate: '13/09/2019'
      });
    });
  });
});




