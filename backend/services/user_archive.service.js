import models from '../database/models';

const { UserArchive } = models;

const UserArchiveService = {
  createUserArchive: async (userArchiveData) => {
    try {
      // Create a user archive in the database
      const userArchive = await UserArchive.create(userArchiveData);

      return userArchive;
    } catch (error) {
      throw new Error('Failed to create user archive');
    }
  },

  // Add other service methods as needed
};

export default UserArchiveService;
