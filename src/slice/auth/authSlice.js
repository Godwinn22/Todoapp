// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import getCookie from '../utility/cookieHandler'

// const jwtToken = getCookie('jwt'); // Get the JWT token from cookies

const initialState = {
    userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            // When you receive new credentials, update both cookie and sessionStorage
            sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            // When logging out, remove both the cookie and sessionStorage
            sessionStorage.removeItem("userInfo");
        },
    },
});

// This async action initializes the store based on the JWT cookie
// export const initializeAuth = () => async (dispatch) => {
//     const jwtToken = getCookie('jwt');
//     if (jwtToken) {
//         // Fetch user information using the token (if needed) and set it in the store
//         const userInformation = await fetchUserInfo(jwtToken); // Implement this function
//         if (userInformation) {
//             dispatch(authSlice.actions.setCredentials(userInformation));
//         }
//     }
// };

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
