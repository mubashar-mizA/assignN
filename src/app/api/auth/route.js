import { NextResponse } from "next/server";

import userModel from "@/models/user";
import ConnectDB from "@/configs/connectDB";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        // console.log('Front end data', data)
        ConnectDB()
        const newUser = await userModel({name, email, password})

        await newUser.save()

        return NextResponse.json({
            message: "User registered successfully",
            status: 201,
            success: true
        });

    } catch (error) {
        return NextResponse.json({
            message: `Error =====> ${error}`,
            status: 500
        });
    }
}

