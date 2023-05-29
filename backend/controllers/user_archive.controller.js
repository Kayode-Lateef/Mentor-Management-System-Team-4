import * as UserArchiveService from '../services/user_archive.service';

export const createUserArchive = async (req, res) => {
  // eslint-disable-next-line camelcase
  const { name, date, time, logo, user_id } = req.body;
  const userArchive = await UserArchiveService.createUserArchive(name, date, time, logo, user_id);
  return res.status(201).json(userArchive);
};

export const getUserArchives = async (req, res) => {
  const userArchives = await UserArchiveService.getUserArchives();
  return res.status(200).json(userArchives);
};
