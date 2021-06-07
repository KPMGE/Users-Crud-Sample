import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users-routes.js";
import dotenv from "dotenv";

import { HttpError } from "./models/http-error.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);

// error handling for routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error);
});

// http error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const port = process.env.SERVER_PORT || 3000;
const uri = process.env.DB_URI;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
