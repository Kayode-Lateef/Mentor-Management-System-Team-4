import Joi from 'joi';

exports.validateCreateUserArchive = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    date: Joi.date().iso().required(),
    time: Joi.string().required(),
    logo: Joi.string().allow(null, ''),
    user_id: Joi.number().integer().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
