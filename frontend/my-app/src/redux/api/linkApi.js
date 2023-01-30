import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authHeader } from "../helpers/auth-headers";
export const API_URL = "http://127.0.0.1:8000";
export const linkApi = createApi({
  reducerPath: "linkAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authentication.access_token;
      if (token) {
        headers.set("authorization", "Bearer " + token);
      }
      return headers;
    },
  }),
  tagTypes: ["Link"],
  endpoints: (builder) => ({
    link: builder.query({
      query: () => "link",
      providesTags: (result, error, args) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Link", id })),
              { type: "Link", id: "LIST" },
            ]
          : [{ type: "Link", id: "LIST" }],
    }),
    linkCreate: builder.mutation({
      query: () => ({ url: "link/", method: "POST" }),
      invalidatesTags: ["Link"],
    }),
    linkDelete: builder.mutation({
      query: ({ id, body }) => ({
        url: `link/${id}/`,
        method: "DELETE",
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Link", id: "LIST" }],
    }),
    linkUpdate: builder.mutation({
      query: ({ id, body }) => ({
        url: `link/${id}/`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Link", id: "LIST" }],
    }),
    // builder.query(() => "theme/selected");
  }),
});

export const {
  useLinkCreateMutation,
  useLinkQuery,
  useLinkUpdateMutation,
  useLinkDeleteMutation,
} = linkApi;
