import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
// import { createUserSessionHandler } from "./controller/session.controller";
// import { createSessionSchema } from "./schema/session.schema";

export function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) =>
    res.status(200).send("Working fine!")
  );

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  // app.post(
  //   "/api/sessions",
  //   validateResource(createSessionSchema),
  //   createUserSessionHandler
  // );
}
