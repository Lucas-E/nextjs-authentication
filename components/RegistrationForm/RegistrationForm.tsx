"use client";
import { useRegistration } from "@/utils/hooks/useRegistration";
const RegistrationForm = () => {
	const {
		name,
		email,
		password,
		handleChangeEmail,
		handleChangePassword,
		handleChangeName,
		handleSubmit,
	} = useRegistration();
	return (
		<div className="p-5 rounded bg-slate-400 flex flex-col items-center w-9/12 m-auto mt-10">
			<h1 className="text-2xl font-bold mb-10">Registration Form</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col flex-shrink w-10/12"
			>
				<input
					type="text"
					className="rounded p-2 mb-10 flex-shrink text-black"
					placeholder="complete name"
					value={name}
					onChange={handleChangeName}
				/>
				<input
					type="email"
					className="rounded p-2 flex-shrink text-black"
					placeholder="email"
					value={email}
					onChange={handleChangeEmail}
				/>
				<input
					type="password"
					className="rounded mt-10 p-2 text-black"
					placeholder="password"
					value={password}
					onChange={handleChangePassword}
				/>
				<button className="p-2 rounded bg-green-400 mt-10" type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
