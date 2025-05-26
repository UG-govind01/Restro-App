// import connectDB from "@/app/dbpass/dbconnect";
// import { Newpassword } from "@/app/dbpass/passwordmodel";

// import { NextResponse } from "next/server";

// export async function GET(request) {
//     return NextResponse.json({ message: "Hello from forgot password route" });
// }

// export async function POST(request){
//     const { email } = req.body;

//   try {
//     await connectDB();

//     const user = await Newpassword.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'No user found with this email' });
//     }
//     return res.status(200).json({ message: 'Reset link sent to your email (dummy)' });

//   } catch (error) {
//     return res.status(500).json({ message: 'Something went wrong' });
//   }
//     return NextResponse.json({message:"Hello "});
// }

import connectDB from "@/app/dbpass/dbconnect";
import { Newpassword } from "@/app/dbpass/passwordmodel";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Hello from forgot password route" });
}

export async function POST(request) {
  const { email } = await request.json(); // Extract email from the request body

  try {
    await connectDB();

    const user = await Newpassword.findOne({ email });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'No user found with this email' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    return new NextResponse(JSON.stringify({ message: 'Reset link sent to your email (dummy)' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error("Forgot password error:", error); // Log the error for debugging
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  // The following line is redundant after the try...catch block
  // return NextResponse.json({message:"Hello "});
}