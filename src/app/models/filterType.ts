export class FilterType {
    important: boolean;
    dueDate: string;
    createdOn: string;
    constructor(important?: boolean, dueDate?: string, createdOn?: string) {

        this.important = important;
        this.dueDate = dueDate;
        this.createdOn = createdOn;
    }
}
