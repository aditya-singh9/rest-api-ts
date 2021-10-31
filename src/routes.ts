import { Express, Request, Response } from "express";

export function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) =>
    res.status(200).send("Working fine!")
  );
}
