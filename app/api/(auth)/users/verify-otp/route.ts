import Otp from "@/lib/models/otp";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import User from "@/lib/models/user";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { userid, otp } = req.body;
    if (!userid || !otp) {
      throw new Error("empty spaces not allowed");
    } else {
      const userOTP = await Otp.find({ userid });
      if (userOTP.length <= 0) {
        throw new Error("account is alredy verified or account is not foud");
      } else {
        const { expiresAt } = userOTP[0];
        const hashedOTP = userOTP[0].otp;

        if (expiresAt < Date.now()) {
          await Otp.deleteMany({ userid });
          throw new Error("code has expired, please resend");
        } else {
          const validOTP = await bcryptjs.compare(otp, hashedOTP); // `await` qo'shildi

          if (!validOTP) {
            throw new Error("wrong code, check your email again");
          } else {
            await User.updateOne({ _id: userid }, { verificated: true });
            await Otp.deleteMany({ userid });
            res.json({
              status: "VERIFICATED",
              message: "your accout has verificated successfuly",
            });
          }
        }
      }
    }
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
