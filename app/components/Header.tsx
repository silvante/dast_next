"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/manifold_logotype.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`w-full border-slate-300 py-4 flex px-10 ${
        path !== "/register" && path !== "/register/otp" && path !== "/login"
          ? ""
          : "hidden"
      }`}
    >
      <div className="w-base flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={"180"} />
        </Link>
        <div className="space-x-5">
          <Link
            href={"/login"}
            className="py-2 px-7 bg-transparent border-2 border-base_red"
          >
            log in
          </Link>
          <Link href={"/register"} className="py-2 px-7 bg-base_red text-white">
            Registrate
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
