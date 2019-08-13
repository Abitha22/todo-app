import { Injectable } from '@angular/core';
import { SampleData } from '../sampleData/sampleTaskData';
import { FilterType } from '../models/filterType';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  tasks = []
  constructor() { }
  setTask() {
    this.tasks = SampleData();
    console.log(this.tasks)
  }
  getFilterTask = []
  getTask(filterTaskType?: FilterType) {

     return this.tasks;
    
  }
}
