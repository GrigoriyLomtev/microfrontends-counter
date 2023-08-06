import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "../slices/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
