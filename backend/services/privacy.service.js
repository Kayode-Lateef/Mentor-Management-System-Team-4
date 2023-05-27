import models from '../database/models';

const { Setting } = models;

export const getPrivacySettings = async () => {
  const privacySettings = await Setting.findOne({ where: { setting_id: 1 } });
  return privacySettings;
};

export const updatePrivacySettings = async (showLinkedin, showTwitter, showInstagram, showGithub, showContactInfo) => {
  const updatedSettings = await Setting.update(
    {
      show_linkedin: showLinkedin,
      show_twitter: showTwitter,
      show_instagram: showInstagram,
      show_github: showGithub,
      show_contact_info: showContactInfo,
    },
    { where: { setting_id: 1 } }
  );
  return updatedSettings;
};
