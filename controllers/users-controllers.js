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
    return res
      .status(404)
      .json({ message: "There are no users with that id!" });
  }

  res.status(200).json({ user: foundUser });
};

export const createUser = (req, res, next) => {
  const { name, email, age } = req.body;

  const createdUser = {
    name,
    email,
    age,
  };

  DUMMY_USERS.push(createdUser);

  res.status(200).json(DUMMY_USERS);
};

export const updateUser = (req, res, next) => {
  const { userId } = req.params;
  const { name, age, email } = req.body;

  // finding user
  const foundUser = DUMMY_USERS.find((user) => user.id === userId);

  if (!foundUser) {
    return res.status(404).json({ message: "There is no user with that id!" });
  }

  // creating new user
  foundUser.age = age;
  foundUser.name = name;
  foundUser.email = email;

  res.status(200).json({ DUMMY_USERS });
};

export const deleteUser = (req, res, next) => {
  const { userId } = req.params;

  const foundUser = DUMMY_USERS.find((user) => user.id === userId);

  if (!foundUser) {
    return res.status(404).json({ message: "There is no user with that id!" });
  }

  DUMMY_USERS = DUMMY_USERS.filter((user) => user.id !== userId);

  res.status(200).json(DUMMY_USERS);
};
