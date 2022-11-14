import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "login",
  initialState: { isAuth: false },
  reducers: {
    login(state, action) {
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      localStorage.removeItem("user");
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;