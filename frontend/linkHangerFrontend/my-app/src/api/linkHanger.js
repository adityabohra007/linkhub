import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = "http://127.0.0.1:8001";

export const linkHanger = createApi({
  reducerPath: "linkHanger",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "/api",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (username) => "fetch/" + username,
    }),
  }),
});

export const { useFetchUserQuery } = linkHanger;
