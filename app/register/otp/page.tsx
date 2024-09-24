"use client";

import RegisterSide from "@/app/components/RegisterSide";
import React, { useState } from "react";

const Otp = () => {
  const [otp, setotp] = useState("");
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <form
              className="w-60 space-y-3 flex flex-col text-center"
              // onSubmit={Otp}
            >
              <h3 className="text-lg font-semibold">Verify gmail</h3>
              <input
                type="text"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="****"
                value={otp}
                onChange={(e) => setotp(e.target.value.trim())}
              />
              <p>_and_</p>
              <button className="w-full bg-slate-950 text-white py-3 px-5 rounded-xl">
                Submit
              </button>
            </form>
            <button className="my-5">resend code</button>
          </div>
        </div>
        <RegisterSide />
      </div>
    </div>
  );
};

export default Otp;
