import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users-routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
