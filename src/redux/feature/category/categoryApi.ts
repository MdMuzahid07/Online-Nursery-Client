import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCategory: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET"
            }),
            providesTags: ["Category"]
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
            invalidatesTags: ["Category"]
        }),

        deleteACategory: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Category"]
        }),

        updateACategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/categories/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Category"]
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