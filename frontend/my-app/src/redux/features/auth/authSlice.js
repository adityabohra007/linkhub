import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  isLoading: false,
  user: null,
  access_token: null,
  emailVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(payload, "payload----");
      state.loggedIn = true;
      state.isLoading = false;
      state.user = payload.user;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
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
