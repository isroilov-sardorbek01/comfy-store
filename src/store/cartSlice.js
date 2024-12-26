import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const exist = state.find(
                (value) =>
                    value.id == action.payload.id &&
                    value.color == action.payload.color
            );
            if (exist) {
                exist.count = Number(exist.count);
                exist.count += Number(action.payload.count);
            } else {
                state.push(action.payload);
            }
        },
        remove: (state, action) => {
            return state.filter(
                (value) =>
                    value.id !== action.payload.id &&
                    value.color == action.payload.color
            );
        },
        clear: (state, action) => {
            state = [];
        },
        update: (state, action) => {
            const { id, color, count } = action.payload;
            const item = state.find(
                (value) => value.id === id && value.color === color
            );
            if (item) {
                item.count = count;
            }
        },
    },
});

export default cartSlice.reducer;
export const { add, remove, clear, update } = cartSlice.actions;
