import React, { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const LayoutAuth = () => {
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);
    return <>{
		!userInfo ?
	<Outlet /> 
	: 
	<Navigate to={"/"} />}</>;
};

export default LayoutAuth;
