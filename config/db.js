import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connect TO Mongodb Database ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_PROD_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log(`Connect TO Mongodb Database ${conn.connection.host}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

export default connectDb;
