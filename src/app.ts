import express, { Request, Response } from "express";
// import config from "config";
import connect from "./utils/connect";
import routes from "./routes";
import dotenv from "dotenv";
import { environments } from "./utils/environment.utils";
import deserializeUser from "./middleware/deserializeuser";

dotenv.config;
// const port = config.get<number>("port");
// const port = process.env.PORT || 3000;
const port = environments.PORT;
const app = express();
app.use(express.json());
app.use(deserializeUser);

connect();
routes(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
