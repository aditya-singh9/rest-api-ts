import express from "express";
import { environments } from "./utils/environment.utils";
import connect from "./utils/connect.utils";
const port = environments.PORT || 3000;

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connect();
});
