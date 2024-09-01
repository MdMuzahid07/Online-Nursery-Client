import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET"
            }),
            providesTags: ["Product"]
        }),

        getASingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            }),
        }),

        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/create-product",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Product"]
        }),

        deleteAProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        }),

        updateAProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Product"]
        }),

    })
});


export const {
    useAddProductMutation,
    useGetAllProductsQuery,
    useGetASingleProductQuery,
    useUpdateAProductMutation,
    useDeleteAProductMutation,
} = productApi;