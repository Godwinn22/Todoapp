import React from 'react'
import { useVerifyQuery } from '../../slice/auth/usersApiSlice';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slice/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function useVerify(url) {
    const toaster = useToast();
	const dispatch = useDispatch()

	const navigate = useNavigate()

	// var data
    // const [verify, { isLoading }] = useVerifyQuery();

	function verifyDetails(email, password){
		// try {
			// var data = null
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
				// console.log(res)
				// const set = res.body
				// console.log(set)
				var jay = data.filter((user) => user.email === email && user.password === password);
				if (jay.length == 0 || !jay) {
					toaster({
						title: 'Invalid Credentials',
						description: 'Please check your email and password',
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: "top-right",
						});
					return jay
				}
				var required =  jay?.map((user) => {
                    const { password, ...userWithoutPassword } = user;
                    return userWithoutPassword;
                });
				const singleObject = required[0]
				console.log(jay)
				console.log(required)
				console.log(singleObject)
				dispatch(setCredentials(singleObject))
				toaster({
					title: "Login was successful!",
					status: "success",
					duration: 3000,
					isClosable: true,
					position: "top-right",
				});
				// sessionStorage.setItem("userInfo", JSON.stringify(singleObject));
				console.log('saved')
				navigate("/");
            })
            .catch((error) => {
				
				toaster({
					title: error?.data?.error || error?.error || "error occured",
					status: "error",
					duration: 3000,
					isClosable: true,
					position: "top-right",
				});
				return
			})
				// Check if res is an array
		// if (Array.isArray(res)) {
		// 	data = res.filter((user) => user.email === email && user.password === password);
		// } else {
		// 	// Handle the case where res is not an array
		// 	console.error('Response is not an array:', res);
		// }
			// console.log(data)
	
		// }
		//  catch (error) {
			
		// 		toaster({
		// 			title: error?.data?.error || error?.error || "error occured",
		// 			status: "error",
		// 			duration: 3000,
		// 			isClosable: true,
		// 			position: "top-right",
		// 		});
		// }
		console.log('worked')
	
	}
		return{ verifyDetails}

}