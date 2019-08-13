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
  it('should have method getTask', inject([AppService], (service: AppService) => {
    expect(typeof service.getTask).toBe('function');
  }));
  it('should return a array of tasks', inject([AppService], (service: AppService) => {
    service.tasks=SampleData();
    const tasks=service.getTask();
    expect(tasks).toEqual(SampleData());
  }));
});
