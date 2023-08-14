import Form from "@/components/Form/Form";
import { cookies } from "next/headers";
export default function Home(props: any) {
	const cookieStore = cookies();
	let isAuthenticated = false;
	if (cookieStore.has("accessToken") && cookieStore.has("refreshToken")) {
		isAuthenticated = true;
	}
	return <>{isAuthenticated ? <h1>Tá logado</h1> : <Form />}</>;
}
