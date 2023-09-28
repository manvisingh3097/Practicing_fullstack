import {configureStore} from "@reduxjs/toolkit";
import TasksSlice from "./reducers/tasksSlice";

export const store = configureStore({
    reducer: {tasks : TasksSlice}
}) 