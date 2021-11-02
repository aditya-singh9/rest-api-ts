import express from "express";
import connect from "./utils/connect.utils";
import { routes } from "./routes";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

connect();
routes(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
