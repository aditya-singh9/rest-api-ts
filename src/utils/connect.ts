import mongoose from "mongoose";
import config from "config";
import * as dotenv from "dotenv";
import { environments } from "./environment.utils";

async function connect() {
  // const dbName = config.get<string>("DB_NAME");
  // const dbUser = config.get<string>("DB_USER");
  // const dbPassword = config.get<string>("DB_PASS");
  dotenv.config();
  // const dbName = process.env.DB_NAME;
  // const dbUser = process.env.DB_USER;
  // const dbPassword = process.env.DB_PASS;
  const dbName = environments.DB_NAME;
  const dbUser = environments.DB_USER;
  const dbPassword = environments.DB_PASS;

  const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@api-ts.onxdw.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
