// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        createProd: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        getProds: (state, action) => {
            state.products = action.payload;
        },
        updateProd: (state, action) => {
            const updatedProduct = action.payload;
            state.products = state.products.map((products) => {
                if (products.id === updatedProduct.id) {
                    return updatedProduct;
                } else {
                    return products;
                }
            });
        },
        removeProd: (state, action) => {
            state.products = state.products.filter(
                (data) => data.id !== action.payload.id
            );
        },
        clearProds: (state, action) => {
            state.products = [];
        },
    },
});

export const { createProd, getProds, updateProd, removeProd, clearProds } =
    productSlice.actions;

export default productSlice.reducer;
