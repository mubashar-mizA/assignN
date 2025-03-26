import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json(); // "response" ki jagah direct "data"

        return NextResponse.json({
            ...data,
            message: "User registered successfully",
            status: 201
        });

    } catch (error) {
        return NextResponse.json({
            message: "Error",
            status: 500
        });
    }
}

