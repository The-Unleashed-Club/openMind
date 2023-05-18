import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "SET_USER",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

const loadingSlice = createSlice({
  name: "SET_LOADING",
  initialState: false,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
  },
});


export const { setUser } = userSlice.actions;
export const { setLoading } = loadingSlice.actions;
export const userReducer = userSlice.reducer;
export const loadingReducer = loadingSlice.reducer;
