import mongoose from "mongoose";
export const connect_DB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log(`Database Connected`);
  } catch (error) {
    console.error("Unable to connect database", error.message);
    process.exit(1);
  }
};
