export class TaskModel {
    task: string;
    createdOn: string;
    important: boolean;
    dueDate: string;
constructor(task: string ,  createdOn: string , important: boolean, dueDate: string) {
    this.task = task;
    this.createdOn = createdOn;
    this.important = important;
    this.dueDate = dueDate;
}
 }