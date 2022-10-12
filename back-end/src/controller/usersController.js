const { validateLogin, validateUser } = require('../service/usersService');

const getUserController = async (req, res) => {
    const valideLogin = await validateLogin(req.body);
    const valideUser = await validateUser(valideLogin);
    return res.status(200).json(valideUser);
};



module.exports = {
  getUserController,
};

