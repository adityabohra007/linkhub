import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { authHeader } from "./../helpers/auth-headers";
const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/dj-rest-auth/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authentication.access_token;
      console.log("prepare", token, getState().authentication);
      console.log(authHeader());
      if (token) {
        console.log("authorization------");
        headers.set("authorization", "Bearer " + token);
      }
      // headers.set("credentials", "include");
      return headers;
    },
  }),
  tagTypes: ["GETME"],
  endpoints: (builder) => ({
    logout: builder.query({
      query() {
        return { url: "logout/", method: "POST", credentials: "include" };
      },
      invalidatesTags: ["GETME"],
    }),
    getMe: builder.query({
      query() {
        return { url: "user/" };
      },
      providesTags: ["GETME"],
    }),
  }),
});

export const { useGetMeQuery, useLazyLogoutQuery } = userApi;
