import { useState } from "react";
import Cookies from 'js-cookie'
import { redirect } from "next/navigation";

export const useLogin = () => {
	const [email, setEmail] = useState<string>("");

	const [password, setPassword] = useState<string>("");

    const authState = {
		email: email,
		password: password,
	};

	

	const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
        authState.email = email
	};
	const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
        authState.password = password
	};
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
        const awaitedResponse = await response.json()
        const cookies = Cookies.get()
        console.log(cookies)
        redirect('/teste')
    }

	const changeAuthState = {
		handleChangeEmail,
		handleChangePassword,
	};

	return {
		email, password,
		handleChangeEmail,
        handleChangePassword,
        handleSubmit
	};
};
