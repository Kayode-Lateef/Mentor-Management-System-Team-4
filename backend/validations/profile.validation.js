import Joi from 'joi';

exports.validateUserProfileUpdate = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().allow(null, ''),
    lastName: Joi.string().allow(null, ''),
    email: Joi.string().email().allow(null, ''),
    bio: Joi.string().allow(null, ''),
    website: Joi.string().allow(null, ''),
    country: Joi.string().allow(null, ''),
    city: Joi.string().allow(null, ''),
    image_url: Joi.string().allow(null, ''),
    user_role: Joi.string().allow(null, ''),
    gitHub: Joi.string().allow(null, ''),
    instagram: Joi.string().allow(null, ''),
    linkedIn: Joi.string().allow(null, ''),
    twitter: Joi.string().allow(null, ''),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
