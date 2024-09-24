import User from "@/lib/models/user";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const jwt_secret: any = process.env.JWT_SECRET;

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const auth_header = req.headers.authorization;
    if (auth_header && auth_header.startsWith("Bearer ")) {
      const token = auth_header.split(" ")[1];

      jwt.verify(token, jwt_secret, {}, async (err, user_doc: any) => {
        if (err) {
          return res.json({ message: "Invalid token" });
        }

        try {
          const the_user = await User.findById(user_doc.id);
          if (!the_user) {
            return res.send("user is not defined");
          }
          const {
            _id,
            email,
            username,
            name,
            bio,
            avatar,
            verificated,
            check,
            balance,
          } = the_user;
          res.json({
            _id,
            email,
            username,
            name,
            bio,
            avatar,
            verificated,
            check,
            balance,
          });
        } catch (err) {
          console.log(err);
          res.send("server error");
        }
      });
    } else {
      res.json("No token provided");
    }
  } catch (error) {
    console.log(error);
    return res.send("server error");
  }
};
