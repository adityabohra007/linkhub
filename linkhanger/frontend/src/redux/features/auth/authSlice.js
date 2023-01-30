import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  isLoading: false,
  userName: null,
  access_token: null,
  emailVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    verify_email: (state, action) => {
      state.emailVerified = action.payload.status;
    },
    logout: () => {
      return initialState;
    },
  },
});
export const { login, logout, setloading, retrieveToken } = authSlice.actions;
export default authSlice.reducer;
