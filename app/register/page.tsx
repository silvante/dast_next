"use client";

import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";

const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div>
            <button className="bg-slate-950 text-white shadow-lg py-3 w-60 px-5 rounded-lg flex items-center justify-center mb-3">
              Sing up with google <i className="bx bxl-google text-xl ml-1"></i>
            </button>
            <form className="w-60 space-y-3 flex flex-col text-center">
              <h3 className="text-lg font-semibold">Registrate</h3>
              <input
                type="text"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="gmail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <p>_and_</p>
              <button className="w-full bg-slate-950 text-white py-3 px-5 rounded-xl">
                Registrate
              </button>
            </form>
          </div>
        </div>
        <RegisterSide />
      </div>
    </div>
  );
};

export default Register;
