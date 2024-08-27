import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => ({
                url: "/categories",
                method: "GET"
            }),
        }),
    })
});

export const { useGetAllCategoryQuery } = categoryApi;