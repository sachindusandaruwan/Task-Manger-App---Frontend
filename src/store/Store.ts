import TaskSlice from "../slice/TaskSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../slice/user-slice.ts";

export const store = configureStore({
    reducer: {
        userReducer:UserSlice,
        tasks:TaskSlice

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;