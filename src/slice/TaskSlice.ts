import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../model/Task";

// Define initial dummy data
const initialTasks: Task[] = [
    new Task('3344',new Date(2025, 1, 1, 8, 0), new Date(2025, 1, 1, 10, 0), 'Meeting with the team', 'Conference Room', 'Pending'),
    new Task('04455',new Date(2025, 1, 2, 9, 0), new Date(2025, 1, 2, 11, 0), 'Client Call', 'Office', 'Completed')
];

// Create the slice
const taskSlice = createSlice({
    name: "tasks",
    initialState: initialTasks,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.findIndex(task => task.taskId === action.payload.taskId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeTask: (state, action: PayloadAction<string>) => {
            return state.filter(task => task.taskId !== action.payload);
        },
    },
});

export const { addTask, updateTask,removeTask } = taskSlice.actions;
export default taskSlice.reducer;
