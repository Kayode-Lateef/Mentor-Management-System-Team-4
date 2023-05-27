import Joi from 'joi';

const createUserArchiveValidation = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().iso().required(),
  time: Joi.string().required(),
  logo: Joi.string().allow('').optional(),
  user_id: Joi.number().integer().required(),
});

export default { createUserArchiveValidation };
