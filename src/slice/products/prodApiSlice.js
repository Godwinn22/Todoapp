import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' }); // url for endpoints

export const prodApiSlice = createApi({
  baseQuery,
  tagTypes: ['Product'], // something relating to cache
  endpoints: (builder) => ({}), //url endpoints, gotten from usersApiSlice.js
});
