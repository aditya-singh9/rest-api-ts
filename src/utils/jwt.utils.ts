import jwt from "jsonwebtoken";
import config from "config";
import * as dotenv from "dotenv";
import { environments } from "./environment.utils";

dotenv.config();

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");
// const privateKey = process.env.PRIVATE_KEY;
// const publicKey = process.env.PUBLIC_KEY;
// const privateKey = environments.PRIVATE_KEY;
// const publicKey = environments.PUBLIC_KEY;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
