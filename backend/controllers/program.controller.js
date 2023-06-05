import * as programService from '../services/program.service';

export const getAllUsers = async (req, res) => {
  try {
    const users = await programService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const createdUser = await programService.createUser(name, email, password);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};