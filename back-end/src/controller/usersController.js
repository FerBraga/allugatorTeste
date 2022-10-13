const { validateLogin,
  validateUser,
  createNewUserService,
  validateRegister,
  getUserByEmailService
} = require('../service/usersService');

const getUserController = async (req, res) => {
  const valideLogin = await validateLogin(req.body);
  const valideUser = await validateUser(valideLogin);
  return res.status(200).json(valideUser);
};

const createNewUserController = async (req, res) => {
  const valideRegister = await validateRegister(req.body);
  await createNewUserService(valideRegister);
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  res.status(201).json(user);
};

const getUserByEmailController = async (req, res) => {
  const { email } = req.query;
  const user = await getUserByEmailService(email);
  res.status(200).json(user);
};



module.exports = {
  getUserController,
  createNewUserController,
  getUserByEmailController,
};

