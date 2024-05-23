import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slice/auth/authSlice";

const NavBar = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="w-full py-4 bg-white flex justify-center">
            <Link className="px-6 text-amber-600 text-lg font-bold" to="/">
                Home
            </Link>
            {/* <Link className='px-6 text-amber-600 text-lg font-bold' to='/register'>
		Register
	  </Link> */}
            <button
                type="button"
                onClick={handleLogout}
                className="px-6 text-amber-600 text-lg font-bold"
            >
                Logout
            </button>
        </div>
    );
};

export default NavBar;
