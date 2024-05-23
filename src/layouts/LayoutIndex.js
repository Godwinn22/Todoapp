import React, { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const LayoutIndex = () => {
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);
    return (
        <>
            {userInfo ? (
                <>
                    <div className="w-full flex flex-col bg-yellow-300 pb-2">
                        <div className="">
                            <NavBar />
                        </div>
                        <div className="w-full h-screen flex items-center justify-center">
                            <Outlet />
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </>
            ) : (
                <Navigate to={"/login"} />
            )}
        </>
    );
};

export default LayoutIndex;
