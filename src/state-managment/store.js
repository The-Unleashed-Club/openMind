import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loadingReducer } from "./reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
    isLoading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
