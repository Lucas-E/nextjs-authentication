import { NextRequest, NextResponse } from "next/server";
import {cookies} from 'next/headers'

export async function POST(request:NextRequest, response:NextResponse){
    const data = await request.json()
    const responseAuth = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
    if(!responseAuth.ok){
        return NextResponse.json({message: 'error'}, {status: 400})
    }
    const awaitedResponse = await responseAuth.json()
    const cookieStore = cookies();
    cookieStore.set('accessToken', awaitedResponse.access_token, {httpOnly:true})
    cookieStore.set('refreshToken', awaitedResponse.access_token, {httpOnly: true})
    return new NextResponse(JSON.stringify(awaitedResponse))
}