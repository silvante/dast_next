"use client";

import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div>
            <button className="bg-slate-950 text-white shadow-lg py-3 w-60 px-5 rounded-lg flex items-center justify-center mb-3">
              Login with google
            </button>
            <form className="w-60 space-y-3 flex flex-col text-center">
              <h3 className="text-lg font-semibold">Login</h3>
              <input
                type="email"
                required
                className="w-full bg-white border-2 border-slate-950 py-3 px-5 rounded-xl font-semibold placeholder:font-normal placeholder:text-slate-950"
                placeholder="gmail"
                value={email}
                onChange={(e) => setemail(e.target.value.trim())}
              />
              <input
                type="password"
                required
                className="w-full bg-white border-2 border-slate-950 py-3 px-5 rounded-xl font-semibold placeholder:font-normal placeholder:text-slate-950"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value.trim())}
              />
              <p>_and_</p>
              <button className="w-full bg-slate-950 text-white py-3 px-5 rounded-xl">
                Log in
              </button>
            </form>
          </div>
        </div>
        <RegisterSide />
      </div>
    </div>
  );
};

export default Login;
