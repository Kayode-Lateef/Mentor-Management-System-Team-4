import Joi from 'joi';

exports.validateCreateFAQ = (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().valid('general', 'technical').required(),
    question: Joi.string().required(),
    answer: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
