import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const res = await request.json();
	const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: res.name,
			email: res.email,
			password: res.password,
			avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
		}),
	});
	if (response.status != 201) {
		return NextResponse.json({ status: 400 });
	}
	const awaitedResponse = await response.json();
	return NextResponse.json(awaitedResponse, { status: 200 });
}
