import mongoose, { Schema, model, models } from "mongoose";

const otpSchema = new Schema({
  userid: mongoose.Schema.Types.ObjectId,
  otp: String,
  createdAt: Date,
  expiresAT: Date,
});

const Otp = models.otp || model("otp", otpSchema);
export default Otp;
