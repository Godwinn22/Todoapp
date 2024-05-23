import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/products/productSlice";
import authReducer from "./slice/auth/authSlice";
import { apiSlice } from "./slice/auth/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        allProducts: productReducer,
		auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
