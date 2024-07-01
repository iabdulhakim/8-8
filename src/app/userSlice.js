import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthState: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthState: (state) => {
      state.isAuthState = true;
    },
  },
});

export const { isAuthState, login, logout } = userSlice.actions;
export default userSlice.reducer;
