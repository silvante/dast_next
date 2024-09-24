import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

const cyfer = bcryptjs.genSaltSync(8);

// // transporter for mail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   auth: {
//     user: process.env.AUTH_EMAIL,
//     pass: process.env.AUTH_PASSWORD,
//   },
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("ready for OTP verifications");
//     console.log(success);
//   }
// });

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    if (!users || users.length == 0) {
      return new NextResponse("no users are found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("error in fatching users" + error.massage, {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, username, email, bio, password, avatar } = body;
    await connect();
    const new_user = new User({
      name,
      username,
      email,
      bio,
      password: bcryptjs.hashSync(password, cyfer),
      avatar,
    });
    await new_user.save();

    return new NextResponse(new_user, { status: 201 });
  } catch (error: any) {
    return new NextResponse("error in creating users" + error.massage, {
      status: 500,
    });
  }
};
