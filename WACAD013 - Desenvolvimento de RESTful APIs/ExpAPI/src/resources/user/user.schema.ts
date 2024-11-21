import Joi from "joi";

const usuarioSchema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().min(6).max(255).required(),
  userTypeId: Joi.string().required(),
});

export default usuarioSchema;
