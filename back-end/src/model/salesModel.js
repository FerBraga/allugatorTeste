const connection = require('../database/connection');

const insertSale = async (user, product) => {
  const query = 'INSERT INTO meuDB.sales (user_id, product_id) VALUES (?, ?)';

  const [ ResulSetHeader] = await connection.execute(query, [user, product]);
  return ResulSetHeader ;
};

const getSale = async (id) => {
  const query = 'SELECT * FROM meuDB.sales WHERE user_id=?';

  const [data] = await connection.execute(query, [id]);
  console.log(data);
  return data ;
};

module.exports = {
insertSale,
getSale,
};
