const connection = require('../database/connection');

const getUser = async (email) => {
const query = 'SELECT * FROM meuDB.users WHERE email=?'
const [ data ] = await connection.execute(query, [email]);
return data ;
}

module.exports = {
getUser
}
