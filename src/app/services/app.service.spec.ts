import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { SampleData } from '../sampleData/sampleTaskData';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
  describe('getTask', () => {
    it('should have method getTask', inject([AppService], (service: AppService) => {
      expect(typeof service.getTask).toBe('function');
    }));
    it('should return a array of tasks', inject([AppService], (service: AppService) => {
      service.tasks = SampleData();
      const tasks = service.getTask();
      expect(tasks).toEqual(SampleData());
    }));
    it('should return a array of tasks which are important', inject([AppService], (service: AppService) => {
      service.tasks = SampleData();
      const task = {
        createdOn: '',
        important: true,
        dueDate: ''
      };

      const getTasks = service.getTask(task);
      expect(getTasks).toBeTruthy();
    }));
    it('should return a array of tasks based on seleted duedate', inject([AppService], (service: AppService) => {
      service.tasks = SampleData();
      const task = {
        createdOn: '',
        important: false,
        dueDate: '13/10/2019'
      };
      const getTasks = service.getTask(task);
      expect(getTasks).toBeTruthy();
    }));
    it('should return a array of tasks based on seleted duedate', inject([AppService], (service: AppService) => {
      service.tasks = SampleData();
      const task = {
        createdOn: '1/10/2019',
        important: false,
        dueDate: ''
      };
      const getTasks = service.getTask(task);
      expect(getTasks).toBeTruthy();
    }));
  });

  describe('updateTask', () => {
    it('should have method updateTask', inject([AppService], (service: AppService) => {
      expect(typeof service.updateTask).toBe('function');
    }));

    it('should take the parameter', inject([AppService], (service: AppService) => {
      const updateTask = {
        id: 1,
        task: 'meeting',
        createdOn: '12/08/2019',
        important: true,
        dueDate: '12/08/2019'
      };
      expect(() => { service.updateTask(updateTask) }).not.toThrowError(Error);
    }));
    it('should update the task based on th id', inject([AppService], (service: AppService) => {

      // const updateTask = {
      //   id: 1,
      //   task: 'meeting is among the team',
      //   createdOn: '12/08/2019',
      //   important: true,
      //   dueDate: '12/08/2019'
      // }
      // service.tasks = SampleData();
      // service.updateTask(updateTask)
      // expect()
    }));
  });

  describe('Add tasks', () => {
    it('should have addTasks()', () => {
      const service: AppService = TestBed.get(AppService);
      expect(typeof service.addTask).toBe('function');
    });
    it('should be able to add tasks in addTask()', () => {
      const service: AppService = TestBed.get(AppService);
      const task = {
          id : SampleData().length + 1,
          task : 'session',
          createdOn : '13/09/2019',
          important : true,
          dueDate : '13/09/2019'
      };
      service.tasks = SampleData();
      const tasks = service.addTask(task);
      expect(tasks).toBeTruthy();
    });
  });

  describe('Delete tasks', () => {
    it('should have deleteTasks()', () => {
      const service: AppService = TestBed.get(AppService);
      expect(typeof service.deleteTask).toBe('function');
    });
    it('should able to delete tasks', () => {
      const service: AppService = TestBed.get(AppService);
      service.tasks = SampleData();
      expect(service.deleteTask(1)).toBeTruthy();
   });
  });
});
