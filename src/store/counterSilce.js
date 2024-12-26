import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;

const counterSilce = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state , action) => {
            state+= action.payload
            return state
        },
    },
});
export default counterSilce.reducer;
export const { increment } = counterSilce.actions;
