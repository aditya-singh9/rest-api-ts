import dotenv from "dotenv";
import { IServerEnvironment } from "../models/environment.model";
if (!!!process.env.DB_PORT) {
  dotenv.config({ path: "./env/.env" });
}
export const environments = process.env as unknown as IServerEnvironment;
