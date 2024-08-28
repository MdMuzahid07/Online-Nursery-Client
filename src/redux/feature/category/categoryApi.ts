import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCategory: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET"
            }),
        }),

        getASingleCategory: builder.query({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "GET"
            }),
        }),

        addCategory: builder.mutation({
            query: (data) => ({
                url: "/categories/create-category",
                method: "POST",
                body: data
            }),
        }),

        deleteACategory: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE"
            }),
        }),

        updateACategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/categories/${id}`,
                method: "PATCH",
                body: data
            }),
        }),

    })
});


export const {
    useGetAllCategoryQuery,
    useAddCategoryMutation,
    useDeleteACategoryMutation,
    useUpdateACategoryMutation,
    useGetASingleCategoryQuery
} = categoryApi;