const Joi = require('joi');
const md5 = require('md5');
const { findUser, createUser } = require('../model/usersModel');
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
  const token = generateToken(userInfo);
  return {
    ...userInfo,
    token,
  };
};

const validateRegister = async (user) => {
  const schema = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().min(6).required(),
  });
  const result = await schema.validateAsync(user);
  return result;
};

const createNewUserService = async ({ name, email, password, role }) => {
  const crypto = md5(password);
  const created = await createUser(name, email, crypto, role);
  if (created.affectedRows === 1) return created;
};

module.exports = {
  validateLogin,
  validateUser,
  createNewUserService,
  validateRegister,
};
