import connect from "@/lib/db";
import User from "@/lib/models/user";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import Otp from "@/lib/models/otp";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const cyfer = bcryptjs.genSaltSync(8);

// transporter for mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    if (!users || users.length == 0) {
      return new NextResponse("users are not found");
    }
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("server error", { status: 500 });
  }
};

export const POST = async (req: NextApiRequest) => {
  try {
    const { name, username, email, bio, password, avatar } = req.body;
    await connect();

    const existingEmail = await User.find({ email });
    const existingUsername = await User.find({ username });

    if (existingEmail.length >= 1) {
      return new NextResponse("this email is alredy used", { status: 500 });
    }
    if (existingUsername.length >= 1) {
      return new NextResponse("this username is alredy used", { status: 500 });
    } else {
      const new_user = await new User({
        name,
        username,
        email,
        bio,
        password: bcryptjs.hashSync(password, cyfer),
        avatar,
      });
      const res = new NextResponse();
      new_user.save().then((result: any) => {
        sendOtp(result, res);
      });
      // return .send(newUser);
    }
  } catch (error: any) {
    return new NextResponse("server error", { status: 500 });
  }
};

const sendOtp = async ({ _id, email }: any, res: any) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const mailoptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "check your email - Dast",
      html: `<p>one time passwors is -- <b>${otp}</b> -- verify your account</p>`,
    };

    const saltRounds = 10;

    const hashedOTP = await bcryptjs.hash(otp, saltRounds);

    const newOTP = await new Otp({
      userid: _id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    await newOTP.save();

    transporter.sendMail(mailoptions);

    res.json({
      status: "VAITING",
      message: "one time password has sent to gmail",
      data: {
        userid: _id,
        email,
      },
    });
  } catch (error) {
    return res.send("server error");
  }
};
