import models from '../database/models';

const { UserArchive } = models;

export const createUserArchive = async (name, date, time, logo, userId) => {
  const userArchive = await UserArchive.create({
    name,
    date,
    time,
    logo,
    userId,
  });
  return userArchive;
};

export const getUserArchives = async () => {
  const userArchives = await UserArchive.findAll();
  return userArchives;
};
