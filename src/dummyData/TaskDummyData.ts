import {Task} from "../model/Task.ts";

const taskDummyData: Task[] = [
    new Task(new Date(2022, 1, 1, 8, 0), new Date(2022, 1, 1, 10, 0), 'Meeting with the team', 'Conference Room', 'Pending'),
];
export default taskDummyData;