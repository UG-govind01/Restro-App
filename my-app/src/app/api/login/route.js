import connectDB from "@/app/db/dbconnect";
import {User} from "@/app/db/loginmodel";
import { NextResponse } from "next/server";


export async function GET(request){
    return NextResponse.json({message:"Hello from login route"});
}
export async function POST(request){
   await connectDB();
   const {email,password}=await request.json();
    if(!email || !password){
         return NextResponse.json({message:"Please fill all fields"});
    }
    const user=await User.findOne({email});
    if(!user){
        return NextResponse.json({message:"User not found"});
    }
    if(user.password !== password){
        return NextResponse.json({message:"Invalid credentials"});
    }
    // const isValid = await bcygpt.compare(password, user.password);
    // if(!isValid){
    //     return NextResponse.json({message:"Invalid credentials"});
    // }
    const token = await user.generateAuthToken();
    return NextResponse.json({message:"Login successful", token});
    // const user = await User.find
    
    
    return NextResponse.json({message:" login route"});
}