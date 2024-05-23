export default function useUpdate(url) {


    function updateHandler(category, workout, description, id, createdAt) {
        // async function handleCall(){

		const updatedAt = new Date().toISOString();

		const data = {
			category: category,
			workout: workout, 
			description: description,
			createdAt: createdAt,
			updatedAt: updatedAt
		}
        fetch(url + id, {
			headers: {
				"Content-Type": "application/json"
			},
			method: 'PUT',
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
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return { updateHandler }
}
