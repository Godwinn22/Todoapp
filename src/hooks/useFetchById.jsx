import { useState } from "react";

export default function useFetchById(url) {
		const [ singleData, setSingleData ] = useState(null)

    function fetchIdHandler() {
        // async function handleCall(){
			
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }
				console.log(res)
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setSingleData(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return{ fetchIdHandler, singleData }
}
