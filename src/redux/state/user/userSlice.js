import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  currentUser: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.error = null;
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
