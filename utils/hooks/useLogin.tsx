import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogin = () => {
	const [email, setEmail] = useState<string>("");

	const [password, setPassword] = useState<string>("");

	const router = useRouter();

	const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};
	const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch("http://localhost:3000/api/auth", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		if (!response.ok) {
			console.log("error");
		} else {
			const awaitedResponse = await response.json();
			const cookies = Cookies.get();
			router.push("/teste");
		}
	};

	const changeAuthState = {
		handleChangeEmail,
		handleChangePassword,
	};

	return {
		email,
		password,
		handleChangeEmail,
		handleChangePassword,
		handleSubmit,
	};
};
