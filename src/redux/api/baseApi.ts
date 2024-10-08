// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://online-nursery-server-ruby.vercel.app/api/v1/" }),
    tagTypes: ["Product", "Category", "Review"],
    endpoints: () => ({})
});
