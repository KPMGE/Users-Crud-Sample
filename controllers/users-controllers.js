import { HttpError } from "../models/http-error.js";
import { validationResult } from "express-validator";
import User from "../models/user.js";

export const getAllUsers = async (req, res, next) => {
  // finding user all users
  let users;
  try {
    users = await User.find();
  } catch (err) {
    const error = new HttpError("Could not get users", 500);
    return next(error);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

export const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  // finding user by id
  let foundUser;
  try {
    foundUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find user",
      500
    );
    return next(error);
  }

  res.json({ user: foundUser.toObject({ getters: true }) });
};

export const createUser = async (req, res, next) => {
  const inputErros = validationResult(req);

  // validating inputs
  if (!inputErros.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data and try again.",
      422
    );
    return next(error);
  }

  const { name, email, age } = req.body;

  // creating new user
  const createdUser = new User({
    name,
    email,
    age,
  });

  // saving it
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find user",
      500
    );
    return next(error);
  }

  res.json(createdUser);
};

export const updateUser = async (req, res, next) => {
  const inpuErros = validationResult(req);

  // validating inputs
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
  let foundUser;
  try {
    foundUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find place.",
      500
    );
    return next(error);
  }

  // updating user
  foundUser.age = age;
  foundUser.name = name;
  foundUser.email = email;

  // saving it
  try {
    await foundUser.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save user.",
      500
    );
    return next(error);
  }

  res.status(200).json({ user: foundUser });
};

export const deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  // finding user
  let foundUser;
  try {
    foundUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find user",
      500
    );
    return next(error);
  }

  // deleting it
  try {
    foundUser.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete user",
      500
    );
    return next(error);
  }

  res.json({ message: "Deleted user!" });
};
