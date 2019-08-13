import { TestBed, inject } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Tasks } from '../data/tasks';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
  it('should have a Method getTask()', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(typeof service.getTask).toBe('function');
  });
  it('should have a Method getTask()', () => {
    const service: TaskService = TestBed.get(TaskService);
    const task = service.getTask();
    expect(task).toBe(Tasks)
  });
});
