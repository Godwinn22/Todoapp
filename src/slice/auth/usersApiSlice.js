// usersApiSlice.js
import { apiSlice } from './apiSlice';
const USERS_URL = '/users';

// In other to make connections to the backend.
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({ //mutation/query
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
	
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: 'POST',
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    verify: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: 'GET',
      }),
    }),

  }),
});

export const {
  useLoginMutation, // useLoginMutation / useLoginQuery 
  useLogoutMutation,
  useRegisterMutation,
  useVerifyQuery,
//   useUpdateUserMutation,
} = usersApiSlice;


