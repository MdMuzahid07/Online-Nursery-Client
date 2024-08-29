import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllReviews: builder.query({
            query: () => ({
                url: "/reviews",
                method: "GET"
            }),
        }),

        getASingleReview: builder.query({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: "GET"
            }),
        }),

        addReview: builder.mutation({
            query: (data) => ({
                url: "/reviews/add-review",
                method: "POST",
                body: data
            }),
        }),

        deleteAReview: builder.mutation({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: "DELETE"
            }),
        }),

        updateAReview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/reviews/${id}`,
                method: "PATCH",
                body: data
            }),
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