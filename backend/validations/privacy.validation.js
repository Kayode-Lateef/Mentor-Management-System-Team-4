import Joi from 'joi';

const updatePrivacySettingsSchema = Joi.object({
  showLinkedin: Joi.boolean().required(),
  showTwitter: Joi.boolean().required(),
  showInstagram: Joi.boolean().required(),
  showGithub: Joi.boolean().required(),
  showContactInfo: Joi.boolean().required(),
});

export default { updatePrivacySettingsSchema };
