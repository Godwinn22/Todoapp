// productApiSlice.js 
import { prodApiSlice } from "./prodApiSlice";

import { apiSlice } from '../auth/apiSlice';
const PRODUCT_URL = '/api/products';

// In other to make connections to the backend.
export const productApiSlice = prodApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({ //mutation/query
            query: (data) => ({
                url: `${PRODUCT_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        getProduct: builder.query({
            query: () => ({
                url: `${PRODUCT_URL}`,
                method: 'GET',
            }),
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCT_URL}`,
                method: 'PUT',
                body: data,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `${PRODUCT_URL}/${_id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApiSlice;
