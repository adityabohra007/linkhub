import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { authHeader } from "../helpers/auth-headers";
export const API_URL = "http://127.0.0.1:8000";
export const linkApi = createApi({
    reducerPath: "linkAuth",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ROOT + "/api",
    }),
    tagTypes: ["Link"],
    endpoints: (builder) => ({
        link: builder.query({
            query: () => "link/",
            providesTags: ['Link']
            // providesTags: (result, error, args) =>
            //     result
            //         ? [
            //             ...result.map(({ id }) => ({ type: "Link", id })),
            //             { type: "Link", id: "LIST" },
            //         ]
            //         : [{ type: "Link", id: "LIST" }],
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
            invalidatesTags: ['Link']  //(result, error, arg) => [{ type: "Link", id: "LIST" }],
        }),
        linkUpdate: builder.mutation({
            query: ({ id, body }) => ({
                url: `link/${id}/`,
                method: "PUT",
                body: body,
            }),
            invalidatesTags: ['Link']
            // invalidatesTags: (result, error, arg) => [{ type: "Link", id: "LIST" }],
        }),
    }),
});

export const {
    useLinkCreateMutation,
    useLinkQuery,
    useLinkUpdateMutation,
    useLinkDeleteMutation,
} = linkApi;
