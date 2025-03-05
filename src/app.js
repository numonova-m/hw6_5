import express from "express";
import "dotenv/config";
import database from "./config/database.js";
import Routes from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use("/api", Routes());
const PORT = process.env.PORT;

const initApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log("server is running port: ", PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
};
initApp();
