import express, { Request, Response } from "express";
// import config from "config";
import connect from "./utils/connect";
import routes from "./routes";
import dotenv from "dotenv";
import { environments } from "./utils/environment.utils";

dotenv.config;
// const port = config.get<number>("port");
// const port = process.env.PORT || 3000;
const port = environments.PORT;
const app = express();
app.use(express.json());

connect();
routes(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
