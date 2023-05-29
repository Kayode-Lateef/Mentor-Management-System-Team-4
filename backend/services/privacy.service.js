import models from '../database/models';

const { Setting } = models;

export const getPrivacySettings = async () => {
  const privacySettings = await Setting.findOne();
  return privacySettings;
};

export const updatePrivacySettings = async (newSettings) => {
  const privacySettings = await Setting.findOne();
  if (!privacySettings) {
    // Create new privacy settings if none exist
    const createdSettings = await Setting.create(newSettings);
    return createdSettings;
  }

  // Update the existing privacy settings
  const updatedSettings = await privacySettings.update(newSettings);
  return updatedSettings;
};
