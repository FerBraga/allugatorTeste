const { getUserService } = require('../service/usersService');

const getUserController = async (req, res) => {
    const { email } = req.body;
    const user = await getUserService(email);
    return res.status(200).json(user);
};

module.exports = {
  getUserController,
};

