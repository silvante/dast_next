import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;

  try {
    const user = await User.findById(id);
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

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  try {
    const deleting = await User.findByIdAndDelete(id);
    if (!deleting) {
      return new NextResponse("user is not defined or server error", {
        status: 404,
      });
    }
    return new NextResponse("user is deleted", { status: 202 });
  } catch (error: any) {
    return new NextResponse("error in deleting user" + error.massage, {
      status: 500,
    });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  try {
    const body = await req.json();
    const updating = await User.findByIdAndUpdate(id, body);
    if (!updating) {
      return new NextResponse("user is not defined or server error", {
        status: 404,
      });
    }
    return new NextResponse(
      JSON.stringify({
        message: "user has been updated",
        updated_user: updating,
      }),
      { status: 202 }
    );
  } catch (error: any) {
    return new NextResponse("error in updating user" + error.massage, {
      status: 500,
    });
  }
};
