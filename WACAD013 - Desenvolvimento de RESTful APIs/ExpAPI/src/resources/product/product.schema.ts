// validações das endpoints da entidade produto, é igual ao Yup no front-end.

import Joi from "joi";

export const productSchema = Joi.object().keys({
  name: Joi.string().min(2).max(40).required(),
  price: Joi.number(),
  stockQuantity: Joi.number().integer().required(),
});
