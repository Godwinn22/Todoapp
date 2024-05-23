import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const Form = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    // invoking the usestate
    const [formData, setFormData] = useState({
        category: "",
        workout: "",
        description: "",
		user_id: userInfo.id
    });
    // invoking usestate stops

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const { postHandle } = usePost("http://localhost:8000/workout_data");

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, workout, description, user_id } = formData;
        if (category && workout && description) {
            postHandle(category, workout, description, user_id);
        } else {
            alert("Please fill in all fields");
            return;
        }
        setFormData({
            category: "",
            workout: "",
            description: "",
            // other form fields
        });
        navigate("/");
    };
    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-sm">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <input
                            className="w-full border-2 border-blue-950"
                            onChange={handleInputChange}
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="workout"
                        >
                            Todo
                        </label>
                        <input
                            className="w-full border-2 border-blue-950"
                            onChange={handleInputChange}
                            type="text"
                            id="workout"
                            name="workout"
                            value={formData.workout}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            className="w-full border-2 border-blue-950"
                            cols="30"
                            rows="8"
                            onChange={handleInputChange}
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="py-3 px-7 rounded-xl bg-green-600 hover:bg-green-800 my-3 text-white font-semibold transition duration-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
