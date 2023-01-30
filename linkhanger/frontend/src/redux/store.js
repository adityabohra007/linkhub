import { configureStore } from "@reduxjs/toolkit";
import { linkHanger } from "./api/linkHanger";
import authReducer from "./features/auth/authSlice";
import { link } from "./../redux/reducers/link.reducers";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { linkApi } from "./api/linkApi";

const store = configureStore({
  reducer: {
    [linkApi.reducerPath]: linkApi.reducer,
    [linkHanger.reducerPath]: linkHanger.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

    authentication: authReducer,
    link,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      linkApi.middleware,
      linkHanger.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});
export default store;
