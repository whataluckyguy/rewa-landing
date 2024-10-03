import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface UserState {
  value: boolean;
}

const initialState: UserState = {
  value: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUser: (state) => {
      state.value = true;
    },
  },
});

export const { handleUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
