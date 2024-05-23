import { useEffect, useState } from "react";
import TodoData from "../components/TodoData";
// import Form from "../components/Form";
import UpdateForm from "../components/UpdateForm";

const Home = () => {
    return (
        <div className="flexContain">
            <TodoData />
            {/* <UpdateForm /> */}
        </div>
    );
};
export default Home;
