const connection = require('../database/connection')

const getAll = async () => {
  const query = 'SELECT * FROM meuDB.products';
  const [ data ] = await connection.execute(query);
  return data;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM meuDB.products WHERE id=?';
  const [ data ] = await connection.execute(query, [id]);
  return data;
};

const getProductByName  = async (name) => {
  const query = 'SELECT * FROM meuDB.products WHERE name=?';
  const [ data ] = await connection.execute(query, [name]);
  return data;
};

const getByOrderValue  = async ({ value }) => {
  let query = '';
  if (value === 'maior valor') {
   query = 'SELECT * FROM meuDB.products ORDER BY price DESC';
  const [ data ] = await connection.execute(query);
  return data;
  };
   query = 'SELECT * FROM meuDB.products ORDER BY price ASC';
  const [ data ] = await connection.execute(query);
  return data;
};

module.exports = {
getAll,
getProductById,
getProductByName,
getByOrderValue
};
