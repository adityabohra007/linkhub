import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = `${process.env.REACT_APP_SERVER_ENDPOINT}/api`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/dj-rest-auth`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: "register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "login/",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
