import TaskSlice from "../slice/TaskSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        tasks:TaskSlice

    },

});

export type RootState = ReturnType<typeof store.getState>;