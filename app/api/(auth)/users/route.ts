import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

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
      status: 200,
    });
  }
};
