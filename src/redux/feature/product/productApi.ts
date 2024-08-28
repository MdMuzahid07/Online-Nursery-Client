import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET"
            }),
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
        }),

        deleteAProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
        }),

        updateAProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: data
            }),
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