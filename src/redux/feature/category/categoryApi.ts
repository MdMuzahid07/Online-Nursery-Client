import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCategory: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET"
            }),
        }),

        addCategory: builder.mutation({
            query: (data) => ({
                url: "/categories/create-category",
                // headers: {
                //     "Content-Type": "multipart/form-data"
                // },
                method: "POST",
                body: data
            }),
        }),

    })
});

export const { useGetAllCategoryQuery, useAddCategoryMutation } = categoryApi;