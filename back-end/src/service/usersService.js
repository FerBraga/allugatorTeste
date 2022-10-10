const { getUser } = require('../model/usersModel');

const getUserService = async (email) => {
    const user = await getUser(email);
    return user;
};

module.exports = {
  getUserService,
};
