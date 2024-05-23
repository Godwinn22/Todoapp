import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import { useNavigate, useParams } from "react-router-dom";
import useUpdate from "../hooks/useUpdate";
import useFetchById from "../hooks/useFetchById";
// import { FaArrowLeft } from "react-icons/fa";

const UpdateForm = () => {
    const { id } = useParams();
    // const [handleData, setHandleData] = useState(null);

    const [formData, setFormData] = useState({
        category: "",
        workout: "",
        description: "",
    });

    const navigate = useNavigate();
    // invoking the usestate

    const { fetchIdHandler, singleData } = useFetchById(
        `http://localhost:8000/workout_data/${id}`
    );
    const { updateHandler } = useUpdate("http://localhost:8000/workout_data/");

    useEffect(() => {
        setFormData({
            category: singleData?.category || "",
            workout: singleData?.workout || "",
            description: singleData?.description || "",
            createdAt: singleData?.createdAt,
            updatedAt: singleData?.updatedAt,
        });
    }, [singleData]);

    useEffect(() => {
        fetchIdHandler();

        // setHandleData(singleData);
        // console.log(handleData);
    }, [id]);

    // invoking usestate stops

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, workout, description, createdAt } = formData;
        if (category && workout && description) {
            updateHandler(category, workout, description, id, createdAt);
        } else {
            alert("Please fill in all fields");
            return;
        }
        navigate("/");
    };
    return (
        <div>
            {/* <div className="w-full flex justify-start">
				<FaArrowLeft onClick={() => navigate(-1)} className=" text-blue-950"/>
			</div> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="category">Enter Todo:</label>
                    <br />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                    />
                </div>
                <div>
                    <label htmlFor="workout">Enter Todo:</label>
                    <br />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        id="workout"
                        name="workout"
                        value={formData.workout}
                    />
                </div>
                <div>
                    <label htmlFor="description">Workout:</label>
                    <br />
                    <textarea
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
    );
};

export default UpdateForm;
