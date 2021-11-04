import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../service/session.service";
import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //so we need to get accesstoken from request headers
  //thsi removes the word bearer from the token

  //get the accesstoken and the refresh token from the headers
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "header.x-refresh");
  if (!accessToken) {
    return next();
  }

  //if there is accessToken then we try decode it
  const { decoded, expired } = verifyJwt(accessToken);

  //if we can decode it then we attach the user to locals.user
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  //if the token has expired and there is an refreshToken check the refreshToken is valid and we issue a new accessToken
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    //set the new Accesstoken to the header
    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }

    //decode that accesstoken new one
    const result = verifyJwt(newAccessToken as string);

    //send the user back to local.user
    res.locals.user = result.decoded;
    return next();
  }
  return next();
};

export default deserializeUser;
