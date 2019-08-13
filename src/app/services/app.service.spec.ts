import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { TaskModel } from '../models/TaskModel';
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
  })
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
      }
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
  })
})
