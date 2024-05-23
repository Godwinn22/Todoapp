// apiSlice
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8000" }); // url for endpoints

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User"], // something relating to cache
    endpoints: (builder) => ({}), //url endpoints, gotten from usersApiSlice.js
});
