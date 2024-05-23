// import { useTodoDataContext } from "../api_hook/useTodoDataContext";

import { useDispatch } from "react-redux";
import { createProd } from "../slice/products/productSlice";

export default function usePost(url) {
	const dispatch = useDispatch()

	// const { todo, dispatch } = useTodoDataContext()

    function postHandle(category, workout, description, user_id) {
        // async function handleCall(){


		const createdAt = new Date().toISOString();
		const updatedAt = new Date().toISOString();
		
		const data = {
			category: category,
			workout: workout, 
			description: description,
			user_id: user_id,
			createdAt: createdAt,
			updatedAt: updatedAt
		}
        fetch(url, {
			headers: {
				"Content-Type": "application/json"
			},
			method: 'POST',
			body: JSON.stringify(data)
		})
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                // setData(data);
				dispatch(createProd(data))
				// dispatch({ type: 'CREATE_DATA', payload: data})
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return { postHandle }
}
