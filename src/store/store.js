import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSilce";

export const store = configureStore({
    reducer: {
        "counter": counterReducer,
    },
});
