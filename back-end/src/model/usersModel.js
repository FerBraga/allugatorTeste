const connection = require('../database/connection');

const findUser = async (email, password) => {
  const query = 'SELECT * FROM meuDB.users WHERE email=? AND password=?'
  const [ [data] ] = await connection.execute(query, [email, password]);
  return data ;
};

module.exports = {
findUser
};
