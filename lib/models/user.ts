import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    verificated: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    check: {
      type: Boolean,
      default: false,
    },
    balance: {
      type: Number,
      default: 120,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.user || model("user", userSchema);
export default User;
