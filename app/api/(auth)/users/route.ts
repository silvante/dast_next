import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("this is my user route");
};
