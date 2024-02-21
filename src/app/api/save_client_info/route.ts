import connectMongoDB from "@/lib/mongodb"; 
import User from "@/models/user_model";
import { NextResponse } from "next/server";


export const GET = async (request: any) => {
    try {
        await connectMongoDB(); 
        const users = await User.find(); 
        console.log("00000000", users)
        return NextResponse.json({ message: "Users Listed Successfully", users }, { status: 200 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 

export const POST = async (request: any) => {
    // const { fullName, email, phoneNumber, companyName, interestingService } = await request.json(); 
    // console.log("in backend", fullName, email, phoneNumber, companyName, interestingService)
    // await connectMongoDB();
    // const user = { fullName, email, phoneNumber: parseInt(phoneNumber), companyName, interestingService }
    // console.log("........user", user)
    // const userResult = await User.create(user); 
    // console.log("........", userResult)
    // return NextResponse.json({ message: "User Created Successfully", userResult }, { status: 201 } ); 
    try {
        const { fullName, email, phoneNumber, companyName, interestingService } = await request.json(); 
        console.log("in backend", fullName, email, phoneNumber, companyName, interestingService)
        await connectMongoDB();
        const user = { fullName, email, phoneNumber: parseInt(phoneNumber), companyName, interestingService }
        console.log("........user", user)
        const userResult = await User.create(user); 
        console.log("........", userResult)
        return NextResponse.json({ message: "User Created Successfully", userResult }, { status: 201 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 

export const DELETE = async (request: any) => {
    try {
        const id = request.nextUrl.searchParams.get("id"); 
        await connectMongoDB(); 
        const user = await User.findByIdAndDelete(id); 
        return NextResponse.json({ message: "User Deleted Successfully", user }, { status: 200 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 