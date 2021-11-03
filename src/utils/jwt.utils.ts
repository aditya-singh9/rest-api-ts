import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//utility to create access token aka jwt
dotenv.config();
const privateKey: any = process.env.PRIVATE_KEY;
const publicKey: any = process.env.PUBLIC_KEY;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    //will see that if it is defined ot not
    ...(options && options),
    algorithm: "RS256",
  });
}

function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
