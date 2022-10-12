const Joi = require('joi');
const md5 = require('md5');
const { findUser } = require('../model/usersModel');
const { throwNotFoundError } = require('../middleware/errosTypes');
const { generateToken } = require('../middleware/jwtToken');

const validateLogin = async (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const result = await schema.validateAsync(user);
  return result;
};

const validateUser = async ({ email, password }) => {
  if (!email || !password) throwNotFoundError('Some required fields are missing');
  const crypto = md5(password);
  
  const user = await findUser(email, crypto);

  if (!user) throwNotFoundError('User not found');

  const userInfo = { name: user.name, email: user.email, role: user.role };
  console.log(userInfo);
  const token = generateToken(userInfo);
  return {
    ...userInfo,
    token,
  };
};

  module.exports = {
    validateLogin,
    validateUser
  };
