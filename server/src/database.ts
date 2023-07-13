import mongoose from 'mongoose';

async function connectDb() {
  const dbUri = process.env.DB_URI;
  try {
    const { connection } = await mongoose.connect(dbUri);
    if (connection) {
      console.log(
        `Database connected successfully on host: ${connection.host}`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

export default connectDb;
