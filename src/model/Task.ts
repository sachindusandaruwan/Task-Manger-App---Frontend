export class Task{
    taskId:string
    startDateTime: Date;
    endDateTime: Date;
    title: string;
    place: string;
    status: string;

    constructor(taskId:string,startDateTime: Date, endDateTime: Date, title: string, place: string, status: string){
        this.taskId=taskId;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.title = title;
        this.place = place;
        this.status = status;
    }
}