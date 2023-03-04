require("dotenv").config();
import cors from "cors";
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());

app.use(deserializeUser);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

const port = config.get("port");

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  connectToDb();
});
