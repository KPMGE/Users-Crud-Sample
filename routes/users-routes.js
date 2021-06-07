import { Router } from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users-controllers.js";

const route = Router();

route.get("/", getAllUsers);
route.get("/:userId", getUserById);
route.post("/", createUser);
route.patch("/:userId", updateUser);
route.delete("/:userId", deleteUser);

export default route;
