import { HttpError } from "../models/http-error.js";
import { validationResult } from "express-validator";

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Kevin",
    age: 20,
    email: "someemail@gmail.com",
  },
  {
    id: "u2",
    name: "Laura",
    age: 19,
    email: "someemail2@gmail.com",
  },
];

export const getAllUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USERS });
};

export const getUserById = (req, res, next) => {
  const { userId } = req.params;

  const foundUser = DUMMY_USERS.find((user) => user.id === userId);

  if (!foundUser) {
    const error = new HttpError("There is no user with provided id", 404);
    return next(error);
  }

  res.status(200).json({ user: foundUser });
};

export const createUser = (req, res, next) => {
  const inputErros = validationResult(req);

  if (!inputErros.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data and try again.",
      422
    );
    return next(error);
  }

  const { name, email, age } = req.body;

  const createdUser = {
    name,
    email,
    age,
  };

  DUMMY_USERS.push(createdUser);

  res.json({ user: createdUser });
};

export const updateUser = (req, res, next) => {
  const inpuErros = validationResult(req);

  if (!inpuErros.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs, please check your data and try again.",
      422
    );
    return next(error);
  }

  const { userId } = req.params;
  const { name, age, email } = req.body;

  // finding user
  const foundUser = DUMMY_USERS.find((user) => user.id === userId);

  if (!foundUser) {
    const error = new HttpError("There is no user with that id!", 404);
    return next(error);
  }

  // updating new user
  foundUser.age = age;
  foundUser.name = name;
  foundUser.email = email;

  res.status(200).json({ user: foundUser });
};

export const deleteUser = (req, res, next) => {
  const { userId } = req.params;

  const foundUser = DUMMY_USERS.find((user) => user.id === userId);

  if (!foundUser) {
    const error = new HttpError("There is no user with that id!", 404);
    return next(error);
  }

  DUMMY_USERS = DUMMY_USERS.filter((user) => user.id !== userId);

  res.status(200).json(DUMMY_USERS);
};
