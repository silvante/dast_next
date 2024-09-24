import jwt from "jsonwebtoken";
import User from "@/lib/models/user";
import bcryptjs from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

const jwt_secret: any = process.env.JWT_SECRET;

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const the_user = await User.findOne({ email });

    if (!the_user) {
      return res.send("user is not defined");
    }

    if (the_user.verificated !== true) {
      return res.send("user is not verified");
    }

    const isMatch = await bcryptjs.compare(password, the_user.password);

    if (!isMatch) {
      return res.send("invalide clidintials");
    }

    const token = jwt.sign(
      { id: the_user._id, email: the_user.email },
      jwt_secret,
      {}
    );

    return res.send(token);
  } catch (error: any) {
    return res.send("error in login");
  }
};
