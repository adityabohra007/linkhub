
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    export const customFetchBaseQuery = fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ROOT,
        credentials:"include",
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        
    })
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customFetchBaseQuery,
    tagTypes: ['user'],

    endpoints: (builder) => ({
        tokenRefresh: builder.mutation({
            query: (body) => ({
                url: 'token/refresh',
                method: 'POST',
                body,

            })
        }),
        // signUp: builder.mutation({
        //     query: (body) => ({
        //         url: '/wc/v3/customers',
        //         method: 'POST',
        //         body,
        //         // headers: { 'Authorization': "Basic fvgjkdfvjfjfvnfvnvnfjvnfjvnfj " + btoa(process.env.NEXT_PUBLIC_WC_KEY + ":" + process.env.NEXT_PUBLIC_WC_SECRET), }
        //     }),
        //     providesTags: ['user']
        // }),
        user: builder.query({
            query: (body) => ({
                url: 'api/dj-rest-auth/user/',
                method: 'GET',
            }),
            // providesTags: ['user']
        }),
        getUser: builder.query({
            query: () => ({
                url: "/wp/v2/users",
                method: "GET",
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: 'api/dj-rest-auth/login/',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['user']
        }),
        validateToken: builder.mutation({
            query: (body) => ({
                url: '/jwt-auth/v1/token/validate',
                method: 'POST',
                // body: body,
                headers: {
                    Authorization: 'Bearer ' + body
                }
            }),
            invalidatesTags: ['user']
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout/',
                method: 'POST',
            }),
            invalidatesTags: ['user'],
        }),
        google: builder.mutation({
            query: (body) => ({
                url: 'google',
                method: 'POST',
                body
            }),
            invalidatesTags: ['user']

        })
    })
})
export const { useLoginMutation, useValidateTokenMutation, useLazyUserQuery, useUserQuery, useGoogleMutation, useLogoutMutation, useGetUserQuery } = authApi;

