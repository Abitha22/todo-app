import { Injectable } from '@angular/core';
import { SampleData } from '../sampleData/sampleTaskData',

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
tasks = [];
  setTask() {
    this.tasks = SampleData();
   }
  constructor() { }
}
