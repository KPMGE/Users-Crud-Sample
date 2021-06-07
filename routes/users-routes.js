import { Router } from "express";
import { check } from "express-validator";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users-controllers.js";

const route = Router();

route.get("/", getAllUsers);
route.get("/:userId", [check("")], getUserById);

route.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("age").isNumeric(),
  ],
  createUser
);

route.patch(
  "/:userId",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("age").isNumeric(),
  ],
  updateUser
);

route.delete("/:userId", deleteUser);

export default route;
