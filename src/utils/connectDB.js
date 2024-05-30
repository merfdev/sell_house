import mongoose from "mongoose";

async function connectDB() {
  console.log("Connecting to database...");
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to database!");
}

export default connectDB;
