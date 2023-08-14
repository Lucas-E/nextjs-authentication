import { NextRequest, NextResponse } from "next/server";
import {cookies} from 'next/headers'

export async function POST(request:NextRequest, response:NextResponse){
    const responseAuth = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email: "john@mail.com",
            password: "changeme"
        })
    })
    const awaitedResponse = await responseAuth.json()
    const cookieStore = cookies();
    cookieStore.set('accessToken', awaitedResponse.access_token, {httpOnly:true})
    cookieStore.set('refreshToken', awaitedResponse.access_token, {httpOnly: true})
    return new NextResponse(JSON.stringify(awaitedResponse))
}