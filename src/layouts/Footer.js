import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full items-center flex justify-between px-12 py-5">
            <div>
                <h3>Logo</h3>
            </div>
            <p className="text-center text-gray-500 text-xs">
                &copy;2022 MyWebsite. All rights reserved.
            </p>
            <div className="links flex flex-col">
                <Link className="px-4 text-amber-600 text-lg font-bold" to="/">
                    Home
                </Link>
                <Link
                    className="px-4 text-amber-600 text-lg font-bold"
                    to="/register"
                >
                    Register
                </Link>
                <Link
                    className="px-4 text-amber-600 text-lg font-bold"
                    to="/login"
                >
                    Login
                </Link>
                <Link
                    className="px-4 text-amber-600 text-lg font-bold"
                    to="/workout/form"
                >
                    Create
                </Link>
            </div>
        </div>
    );
};

export default Footer;
