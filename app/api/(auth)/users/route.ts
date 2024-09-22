import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

const cyfer = bcryptjs.genSaltSync(8);

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
