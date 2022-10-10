const connection = require('../database/connection')

const getAll = async () => {
  const query = 'SELECT * FROM meuDB.products '
  const [ data ] = await connection.execute(query);
  return data ;
}

const getProductById = async (id) => {
  const query = 'SELECT * FROM meuDB.products WHERE id=? '
  const [ data ] = await connection.execute(query, [id]);
  return data ;
}

module.exports = {
getAll,
getProductById
};
