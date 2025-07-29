const Joi = require('joi');

const emailSchema = Joi.object({
  to: Joi.string().email().required(),
  name: Joi.string().min(1).required()
});

module.exports = emailSchema;
