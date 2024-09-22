import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params;

  try {
    const user = await User.findById(id.id);
    if (!user) {
      return new NextResponse("user in not defined", { status: 404 });
    }
    return new NextResponse(user, { status: 200 });
  } catch (error: any) {
    return new NextResponse("error in geting user" + error.massage, {
      status: 500,
    });
  }
};
