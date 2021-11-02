import mongoose from "mongoose";
import * as dotenv from "dotenv";

async function connect() {
  dotenv.config();
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;
  const dburi = `mongodb+srv://${dbUser}:${dbPassword}@api-ts.onxdw.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dburi);
    console.log("DB connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connect;
