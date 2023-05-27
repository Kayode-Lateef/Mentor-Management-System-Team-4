import UserArchiveService from '../services/user_archive.service';

const UserArchiveController = {
  createUserArchive: async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { name, date, time, logo, user_id } = req.body;

      // Call the service method to create a user archive
      const userArchive = await UserArchiveService.createUserArchive({
        name,
        date,
        time,
        logo,
        user_id,
      });

      res.status(201).json(userArchive);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error creating user archive:', error);
      res.status(500).json({ error: 'Failed to create user archive' });
    }
  },

  // Add other controller methods as needed
};

export default UserArchiveController;
