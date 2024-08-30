/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi"
import { cartSlice } from "./feature/cart/CartSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch