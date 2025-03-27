import ConnectDB from "@/configs/connectDB";
import contactModel from "@/models/contact"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        const { name, email, message } = await req.json()

        // console.log('Request body', req.body);

        ConnectDB()

        
        const newQuery = await contactModel({ name, email, message })

        const savedQuery = await newQuery.save()

        console.log('Saved query in db =====>', savedQuery)

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