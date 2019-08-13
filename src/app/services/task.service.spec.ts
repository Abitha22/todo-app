import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it('should have a  getTask()', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(typeof service.getTask).toBe('function');
  });

  it('should return a array', () => {
    const service: TaskService = TestBed.get(TaskService);
    const result = service.getTask();
    expect(Array.isArray(result)).toBe(true);
  });
});
