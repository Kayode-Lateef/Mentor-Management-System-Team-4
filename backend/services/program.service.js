import models from '../database/models';

const { User } = models;

export const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const createUser = async (name, email, password) => {
  const createdUser = await User.create({ name, email, password });
  return createdUser;
};
