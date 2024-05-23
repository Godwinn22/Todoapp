import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProd } from "../slice/products/productSlice";
// import { useTodoDataContext } from "../api_hook/useTodoDataContext";

export default function useDelete(url) {

	const dispatch = useDispatch()
	// const { todo, dispatch } = useTodoDataContext()

    function DeleteHandler(id) {
        // async function handleCall(){
			
        fetch(url + id, {
			headers: {
				"Content-Type": "application/json"
			},
			method: 'DELETE'
		})
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }
				console.log(res)
				// setLoad(true) // Initiate update
                return res.json();
            })
            .then((data) => {
                console.log(data);
				dispatch(removeProd(data))
                // setSingleData(data);
				// dispatch({ type: 'DELETE_DATA', payload: data})
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return{ DeleteHandler }
}
