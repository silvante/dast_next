import jwt from "jsonwebtoken";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

const jwt_secret: any = process.env.JWT_SECRET;

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const the_user = await User.findOne({ email });

    if (!the_user) {
      return new NextResponse("user is not defined", { status: 404 });
    }

    if (the_user.verificated !== true) {
      return new NextResponse("your accout is not verified", { status: 404 });
    }

    const isMatch = await bcryptjs.compare(password, the_user.password);

    if (!isMatch) {
      return new NextResponse("invalid cridintials", { status: 404 });
    }

    const token = jwt.sign(
      { id: the_user._id, email: the_user.email },
      jwt_secret,
      {}
    );

    return new NextResponse(token, { status: 200 });
  } catch (error: any) {
    return new NextResponse("error in updating user" + error.massage, {
      status: 500,
    });
  }
};
