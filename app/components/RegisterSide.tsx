"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

// images
import art from "@/public/art.jpg";
import mario from "@/public/mario.jpg";
import gmail from "@/public/gmail.jpg";

const RegisterSide = () => {
  const path = usePathname();

  return (
    <div className="w-[50%] bg-slate-950 h-screen text-white flex justify-center items-center">
      <div>
        {path === "/register" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">Welcome to Dast!</h2>
            <p>enjoy your day with art!</p>
            <Image
              src={art}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            are you alredy have an account?
            <Link href={"/login"} className="underline ml-1">
              Log in
            </Link>
          </div>
        )}
        {path === "/login" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">Welcome back!</h2>
            <p>have great time!</p>
            <Image
              src={mario}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            wanna create new account?
            <Link href={"/register"} className="underline ml-1">
              registrate
            </Link>
          </div>
        )}
        {path === "/register/otp" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">verify your gmail!</h2>
            <p>enter otp pin!</p>
            <Image
              src={gmail}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            we send one time password to gmail
            <Link href={"/register"} className="underline ml-1">
              khhamidov.ko@gmail.com
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterSide;
