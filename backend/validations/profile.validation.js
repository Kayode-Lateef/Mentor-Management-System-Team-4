import Joi from 'joi';

const updateProfileValidation = Joi.object({
  firstName: Joi.string().allow('').optional(),
  lastName: Joi.string().allow('').optional(),
  email: Joi.string().email().allow('').optional(),
  bio: Joi.string().allow('').optional(),
  website: Joi.string().allow('').optional(),
  country: Joi.string().allow('').optional(),
  city: Joi.string().allow('').optional(),
  image_url: Joi.string().allow('').optional(),
  gitHub: Joi.string().allow('').optional(),
  instagram: Joi.string().allow('').optional(),
  linkedIn: Joi.string().allow('').optional(),
  twitter: Joi.string().allow('').optional(),
});

export default { updateProfileValidation };
