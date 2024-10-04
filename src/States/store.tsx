import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
// import userSlice from "./features/user/userSlice";

// export default configureStore({
//   reducer: {
//     user: userSlice,
//   },
// });

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
