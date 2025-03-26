import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        const { name, email, message } = await req.json()

        return NextResponse.json({
            success: true,
            status: 201,
            message: 'Your query has been sent!'
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            status: 500,
            message: 'Internal server error occur!'
        })
    }
}