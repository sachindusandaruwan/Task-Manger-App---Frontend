import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Task } from "../model/Task";
import axios from "axios";

// Define initial dummy data
const initialTasks: Task[] = [];

const api=axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getTasksByUserId = createAsyncThunk(
    'tasks/getTasksByUserId',
    async ({ userId, jwtToken }: { userId: string; jwtToken: string }) => {
        console.log(userId + " and " + jwtToken);
        const response = await api.get(`/task/getTaskByUser/${userId}`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        });
        return response.data;
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async ({ task, jwtToken }: { task: Task; jwtToken: string }) => {
        console.log(jwtToken);
        const response = await api.post('/task/add', task, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        });
        return response.data;
    }
);




// Create the slice
const taskSlice = createSlice({
    name: "tasks",
    initialState: initialTasks,
    reducers: {

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
    extraReducers: (builder) => {
        builder.
            addCase(getTasksByUserId.fulfilled, (state, action:any) => {
               return action.payload;
            })
    }
});



export const {  updateTask,removeTask } = taskSlice.actions;
export default taskSlice.reducer;
