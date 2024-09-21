import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/manifold_logotype.png";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center p-base py-5">
      <div className="w-base flex justify-between">
        <div className="flex justify-between items-center gap-16">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <div className="space-x-10">
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Portfolio</Link>
            <Link href={"#"}>Email Marketing Audit</Link>
          </div>
        </div>
        <button className="py-2 px-4 bg-base_red uppercase text-white">Contact us</button>
      </div>
    </header>
  );
};

export default Header;
