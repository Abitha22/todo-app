export class TaskModel {
    id: number;
    task: string;
    createdOn: string;
    important: boolean;
    dueDate: string;
    constructor(task: string, createdOn: string, important: boolean, dueDate: string, id?: number) {
        this.task = task;
        this.createdOn = createdOn;
        this.important = important;
        this.dueDate = dueDate;
        this.id = id;
    }
}
