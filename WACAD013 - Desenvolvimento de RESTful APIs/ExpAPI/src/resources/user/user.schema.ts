import Joi from "joi";
import { UserTypes } from "../userType/userType.constants";

const userShcema = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(40).required(),
  UserTypeId: Joi.valid(UserTypes.admin, UserTypes.client).required(),
});

export default userShcema;
