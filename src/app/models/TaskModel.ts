export class TaskModal {
    task;
    createdOn;
    important;
    duedate;
constructor(task: string ,  createdOn: string , important: boolean, Duedate: string) {
    this.task = task;
    this.createdOn = createdOn;
    this.important = important;
    this.duedate = Duedate;
}
}