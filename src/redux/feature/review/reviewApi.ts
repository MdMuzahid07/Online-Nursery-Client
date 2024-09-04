import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllReviews: builder.query({
            query: () => ({
                url: "/reviews",
                method: "GET"
            }),
            providesTags: ["Review"]
        }),

        getASingleReview: builder.query({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: "GET"
            }),
            providesTags: ["Review"]
        }),

        addReview: builder.mutation({
            query: (data) => ({
                url: "/reviews/add-review",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Review"]
        }),

        deleteAReview: builder.mutation({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Review"]
        }),

        updateAReview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/reviews/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Review"]
        }),

    })
});


export const {
    useGetASingleReviewQuery,
    useGetAllReviewsQuery,
    useUpdateAReviewMutation,
    useDeleteAReviewMutation,
    useAddReviewMutation
} = reviewApi;