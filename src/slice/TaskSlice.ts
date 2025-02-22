import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../model/Task";

// Define initial dummy data
const initialTasks: Task[] = [
    new Task(new Date(2025, 1, 1, 8, 0), new Date(2025, 1, 1, 10, 0), 'Meeting with the team', 'Conference Room', 'Pending'),
    new Task(new Date(2025, 1, 2, 9, 0), new Date(2025, 1, 2, 11, 0), 'Client Call', 'Office', 'Completed')
];

// Create the slice
const taskSlice = createSlice({
    name: "tasks",
    initialState: initialTasks,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return state.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
