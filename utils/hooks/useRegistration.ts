import { useState } from "react";
import { useRouter } from "next/navigation";

export const useRegistration = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
    const router = useRouter()

	const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};
	const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};
    const handleChangeName = (e:React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/registration', {
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body: JSON.stringify({
                name: name, email: email, password:password
            })
        })
        const awaitedResponse = await response.json()
        if(response.status === 200){
            router.push('/')
        }
    }

    return {
        name, email, password, handleChangeEmail, handleChangePassword, handleChangeName, handleSubmit
    }
};
