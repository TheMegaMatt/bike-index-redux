import { configureStore } from "@reduxjs/toolkit";
import {bikeSlice} from "../feature/bikes";

export const store = configureStore({
    reducer: {
        [bikeSlice.reducerPath]: bikeSlice.reducer
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(bikeSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;