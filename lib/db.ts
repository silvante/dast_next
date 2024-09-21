import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("alredy connected");
    return;
  }

  if (connectionState === 2) {
    console.log("connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "dast_uz_mongo_db",
      bufferCommands: true,
    });
    console.log("connected");
  } catch (error: any) {
    console.log("error: ", error);
    throw new Error("error: ", error);
  }
};

export default connect;
