import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;
