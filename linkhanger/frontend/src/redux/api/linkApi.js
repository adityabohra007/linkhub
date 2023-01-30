import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = "http://127.0.0.1:8000";
export const linkApi = createApi({
  reducerPath: "linkAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "/api",
    prepareHeaders: (headers, { getState }) => {
      headers.set("credentials", "include");
      return headers;
    },
  }),
  tagTypes: ["Link"],
  endpoints: (builder) => ({
    link: builder.query({
      query: () => "link",
      providesTags: (result, error, args) =>
        result
          ? [...result.map(({ id }) => ({ type: "Link", id })), "Link"]
          : ["Link"],
    }),
    linkCreate: builder.mutation({
      query: () => ({ url: "link/", method: "POST" }),
      invalidatesTags: ["Link"],
    }),
    linkUpdate: builder.mutation({
      query: ({ id, body }) => ({
        url: `link/${id}/`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          credentials: "include",
        },

        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Link", id: arg.id }],
    }),
    // builder.query(() => "theme/selected");
  }),
});

export const { useLinkCreateMutation, useLinkQuery, useLinkUpdateMutation } =
  linkApi;
