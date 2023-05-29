import models from '../database/models';

const { User } = models;

exports.getUserProfile = async (userId) => {
  const userProfile = await User.findOne({ where: { user_id: userId } });
  return userProfile;
};

exports.updateUserProfile = async (userId, updatedData) => {
  const userProfile = await User.findOne({ where: { user_id: userId } });
  if (!userProfile) {
    throw new Error('User not found');
  }

  const updatedProfile = await userProfile.update(updatedData);
  return updatedProfile;
};
