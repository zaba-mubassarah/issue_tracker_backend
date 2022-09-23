import { v4 as uuid } from "uuid";
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};
export const getUserById = (req, res) => {
  const { id } = req.params;
  const dataById = users.find((item) => item.id === id);
  res.send(dataById);
};
export const saveUser = (req, res) => {
  console.log("req,", req);
  const request = req.body;
  users.push({ ...request, id: uuid() });
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((item) => {
    return item.id !== id;
  });

  res.send(`users of id ${id} is deleted`);
};

export const updateUser = (req, res) => {
  const user = users.find((item) => item.id === req.params.id);
  user.name = req.body.name;
  user.f_name = req.body.f_name;
  user.m_name = req.body.m_name;

  res.send(users);
};
