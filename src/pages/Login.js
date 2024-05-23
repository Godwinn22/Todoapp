import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slice/auth/usersApiSlice";
import useVerify from "../hooks/verify/useVerify";

const Login = () => {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState("yes");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const navigate = useNavigate();

    const toaster = useToast();

    const [login, { isLoading }] = useLoginMutation();
    const { verifyDetails } = useVerify("http://localhost:8000/users");

    const LoginHandler = async (e) => {
        e.preventDefault(); //to prevent page reloading
        if (!email || !password || !access) {
            toaster({
                title: "Fill in all fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
            return;
        }

        try {
            verifyDetails(email, password);

            // if (confirm == false) {
            //     toaster({
            //         title: "Error occured. Invalid user.",
            //         status: "error",
            //         duration: 3000,
            //         isClosable: true,
            //         position: "top-right",
            //     });

            //     return;
            // }

            // const res = await login({
            //     email,
            //     password,
            //     access,
            // }).unwrap();

        } catch (error) {
            toaster({
                title: error?.data?.error || error?.error || "error occured",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
        }
    };
    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-sm">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={LoginHandler}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <p className="mt-3">
                        Don't have an account?{" "}
                        <Link className=" text-red-500 italic" to="/register">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
