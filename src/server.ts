import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.ts";
import { Srouter } from "./routes/student.route.ts";

// global variablesss
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use("/api/student", Srouter);

// server connecting
connectDB()
  .then((res) => {
    console.log(res);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app listening in http://localhost:${PORT} ⬅`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
