const connection = require('../database/connection');

const findUser = async (email, password) => {
  const query = 'SELECT * FROM meuDB.users WHERE email=? AND password=?'
  const [ [data] ] = await connection.execute(query, [email, password]);
  return data ;
};

const createUser = async (name, email, password, role) => {
  const query = 'INSERT INTO meuDB.users (name, email, password, role) VALUES (?, ?, ?, ?)';
  const [ ResulSetHeader ] = await connection.execute(query, [name, email, password, role]);
  console.log(ResulSetHeader)  
  return ResulSetHeader;
};

const getByEmail = async (email) => {
  const query = 'SELECT * FROM meuDB.users WHERE email=?'
  const [ data ] = await connection.execute(query, [email]);
  console.log('data no model', data);
  return data;
};

module.exports = {
findUser,
createUser,
getByEmail,
};
