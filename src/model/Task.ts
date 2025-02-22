export class Task{
    startDateTime: Date;
    endDateTime: Date;
    title: string;
    place: string;
    status: string;

    constructor(startDateTime: Date, endDateTime: Date, title: string, place: string, status: string){
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.title = title;
        this.place = place;
        this.status = status;
    }
}