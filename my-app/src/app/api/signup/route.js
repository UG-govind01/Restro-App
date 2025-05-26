import connectDB from "@/app/mongodb/dbconnection";
import User from "@/app/mongodb/model";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'; // ✅ Make sure this is installed: `npm install bcryptjs`

export async function GET(request) {
  return NextResponse.json({ message: "Hello from signup route" });
}

export async function POST(request) {
  try {
    const { name, email, password, mobileNumber } = await request.json();

    if (!name || !email || !password || !mobileNumber) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
      mobileNumber,
    });

    return NextResponse.json(
      { message: "Signup successfully", user: createdUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { message: "Signup failed", error: error.message },
      { status: 500 }
    );
  }
}
