import models from '../database/models';

const { UserArchive } = models;

// eslint-disable-next-line camelcase
export const createUserArchive = async (name, date, time, logo, user_id) => {
  const userArchive = await UserArchive.create({
    name,
    date,
    time,
    logo,
    user_id,
  });
  return userArchive;
};

export const getUserArchives = async () => {
  const userArchives = await UserArchive.findAll();
  return userArchives;
};
