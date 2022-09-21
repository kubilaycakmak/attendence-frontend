import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "login",
  initialState: { isAuth: false },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
