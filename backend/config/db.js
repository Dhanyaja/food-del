import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dhnayaja:Dha_2003@cluster0.t6vco8m.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
