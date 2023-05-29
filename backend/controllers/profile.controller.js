import * as profileService from '../services/profile.service';

export const getUserProfile = async (req, res) => {
  const { userId } = req.params;
  const userProfile = await profileService.getUserProfile(userId);
  return res.status(200).json(userProfile);
};

export const updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const updatedProfile = await profileService.updateUserProfile(userId, req.body);
  return res.status(200).json(updatedProfile);
};
