import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { environments } from "./environment.utils";

async function connect() {
  dotenv.config();
  const dbName = environments.DB_NAME;
  const dbUser = environments.DB_USER;
  const dbPassword = environments.DB_PASS;
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
