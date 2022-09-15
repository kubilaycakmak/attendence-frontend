import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: { isRegistered: false },
  reducers: {
    signup(state, action) {
      if (action.payload) {
        state.isRegistered = true;
      }
    },
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
