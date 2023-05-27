import models from '../database/models';

const { Profile } = models;

const ProfileService = {
  getProfile: async (userId) => {
    try {
      // Retrieve the profile for the given user ID from the database
      const profile = await Profile.findOne({ where: { user_id: userId } });

      return profile;
    } catch (error) {
      throw new Error('Failed to fetch profile');
    }
  },

  updateProfile: async (userId, profileData) => {
    try {
      // Update the profile for the given user ID in the database
      await Profile.update(profileData, { where: { user_id: userId } });
    } catch (error) {
      throw new Error('Failed to update profile');
    }
  },

  // Add other service methods as needed
};

export default ProfileService;
