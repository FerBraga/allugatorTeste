const connection = require('../database/connection')

const getAll = async () => {
const query = 'SELECT * FROM meuDB.products '
const [ data ] = await connection.execute(query);
return data ;
}

module.exports = {
getAll
}
